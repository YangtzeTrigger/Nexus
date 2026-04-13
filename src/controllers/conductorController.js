/**
 * Conductor Controller — Phase 1
 *
 * The Conductor is the governance entry point. It receives an incoming task,
 * classifies it using Claude (Sonnet 4), routes it to the correct next owner,
 * and records the canonical event trail.
 *
 * Classification falls back to a rule-based default if no Anthropic API key
 * is configured, so the app remains usable in development without a key.
 */

import Anthropic from '@anthropic-ai/sdk'
import { useTaskStore } from '../stores/taskStore'
import { useRunEventStore } from '../stores/runEventStore'
import { useConfigStore } from '../stores/configStore'

// ── Classification prompt ───────────────────────────────────────────────────

const CLASSIFICATION_SYSTEM = `You are the Nexus Conductor — the governance entry point for a private multi-agent command centre.

Your role is to classify an incoming task and determine its initial operational posture.

TASK CLASSES (assign exactly one):
  A — Simple Single-Domain: one role, low ambiguity, low consequence
  B — Multi-Step Single-Track: one workflow path, multiple bounded steps
  C — Cross-Domain: multiple specialist roles required, stronger coordination needed
  D — Approval-Sensitive: external consequence, must pause at approval boundary before execution
  E — Ambiguous: intent unclear — cannot safely classify without more information

WORKFLOW TYPES (assign exactly one):
  research_coordination          — research, analysis, synthesis, investigation
  business_operations_coordination — business decisions, operations, external actions
  unassigned                     — cannot determine yet

CONFIDENCE STATES (assign exactly one):
  direct    — clear, low-risk, simple path
  guided    — clear enough to proceed, structured multi-step path needed
  escalated — broader handling or higher sensitivity required
  ambiguous — cannot proceed safely without clarification

Respond with ONLY a valid JSON object. No markdown, no explanation, no extra text.

{
  "task_class": "A|B|C|D|E",
  "workflow_type": "research_coordination|business_operations_coordination|unassigned",
  "confidence_state": "direct|guided|escalated|ambiguous",
  "classification_rationale": "one concise sentence explaining this classification",
  "next_expected_action": "specific imperative sentence — the immediate next action"
}`

// ── Classification ──────────────────────────────────────────────────────────

async function classifyWithClaude(task) {
  const apiKey = useConfigStore.getState().getAnthropicKey()

  if (!apiKey) {
    // Rule-based fallback — used in development without an API key
    return {
      task_class: 'B',
      workflow_type: 'research_coordination',
      confidence_state: 'guided',
      classification_rationale:
        'Default classification — add VITE_ANTHROPIC_API_KEY to .env for AI classification',
      next_expected_action: 'Research Specialist begins bounded research phase',
    }
  }

  const client = new Anthropic({
    apiKey,
    dangerouslyAllowBrowser: true, // This is a private local Electron app
  })

  const userMessage = [
    `TASK TITLE: ${task.task_title}`,
    '',
    `TASK DESCRIPTION:`,
    task.task_description,
  ].join('\n')

  const response = await client.messages.create({
    model: useConfigStore.getState().primary_model,
    max_tokens: 512,
    system: CLASSIFICATION_SYSTEM,
    messages: [{ role: 'user', content: userMessage }],
  })

  const raw = response.content[0]?.text?.trim() ?? ''
  // Strip any accidental markdown code fences
  const cleaned = raw
    .replace(/^```(?:json)?\n?/i, '')
    .replace(/\n?```$/i, '')
    .trim()

  return JSON.parse(cleaned)
}

// ── Routing ─────────────────────────────────────────────────────────────────

function resolveRoute(classification) {
  if (
    classification.task_class === 'E' ||
    classification.confidence_state === 'ambiguous'
  ) {
    return { next_owner: 'Conductor', next_stage: 'classification' }
  }

  if (classification.workflow_type === 'research_coordination') {
    return { next_owner: 'Research Specialist', next_stage: 'specialist_work' }
  }

  if (classification.workflow_type === 'business_operations_coordination') {
    if (classification.task_class === 'D') {
      return { next_owner: 'Approval Surface', next_stage: 'approval' }
    }
    return {
      next_owner: 'Business and Operations Specialist',
      next_stage: 'specialist_work',
    }
  }

  // Unassigned — return to Conductor for routing decision
  return { next_owner: 'Conductor', next_stage: 'routing' }
}

// ── Main entry point ─────────────────────────────────────────────────────────

/**
 * conductorProcessTask(task_id)
 *
 * Call this immediately after createTask() to kick off the governance chain.
 * Runs asynchronously — the caller can fire-and-forget or await the result.
 *
 * Returns { task_id, run_id, classification, route } on success.
 * Throws on unrecoverable error (and updates task status to 'blocked').
 */
export async function conductorProcessTask(task_id) {
  const taskStore = useTaskStore.getState()
  const runStore  = useRunEventStore.getState()

  const task = taskStore.getTask(task_id)
  if (!task) throw new Error(`[Conductor] Task not found: ${task_id}`)

  // ── 1. Create the run ────────────────────────────────────────────────────
  const run = runStore.createRun(task_id, 'unassigned')
  const { run_id } = run

  // Bind run to task
  taskStore.updateTask(task_id, { current_run_id: run_id })

  // ── 2. Log task_created ─────────────────────────────────────────────────
  runStore.addEvent(run_id, {
    event_type:       'task_created',
    actor_type:       'system',
    actor_name:       'System',
    event_summary:    `Task created: "${task.task_title}"`,
    current_stage:    'intake',
    resulting_status: 'active',
    current_owner:    'Conductor',
    next_expected_action: 'Conductor classifies task',
  })

  // Move to classification stage
  taskStore.updateTask(task_id, { current_stage: 'classification' })

  // ── 3. Classify ─────────────────────────────────────────────────────────
  let classification
  try {
    classification = await classifyWithClaude(task)
  } catch (err) {
    const msg = `Classification failed: ${err.message}`
    runStore.addEvent(run_id, {
      event_type:       'specialist_failed',
      actor_type:       'conductor',
      actor_name:       'Conductor',
      event_summary:    msg,
      current_stage:    'classification',
      resulting_status: 'blocked',
      current_owner:    'Conductor',
      next_expected_action: 'Resolve classification error — check API key and retry',
      notes: err.message,
    })
    taskStore.updateTask(task_id, {
      current_status:      'blocked',
      current_stage:       'classification',
      last_major_event:    'specialist_failed',
      next_expected_action: 'Resolve classification error — check API key and retry',
    })
    throw err
  }

  // ── 4. Log task_classified ───────────────────────────────────────────────
  runStore.addEvent(run_id, {
    event_type:       'task_classified',
    actor_type:       'conductor',
    actor_name:       'Conductor',
    event_summary:    `Class ${classification.task_class} · ${classification.workflow_type} · ${classification.classification_rationale}`,
    current_stage:    'classification',
    resulting_status: 'active',
    current_owner:    'Conductor',
    confidence_state: classification.confidence_state,
    workflow_type:    classification.workflow_type,
    next_expected_action: classification.next_expected_action,
    notes: classification.classification_rationale,
  })

  runStore.updateRun(run_id, {
    workflow_type:    classification.workflow_type,
    confidence_state: classification.confidence_state,
  })

  // ── 5. Route ─────────────────────────────────────────────────────────────
  const route = resolveRoute(classification)

  runStore.addEvent(run_id, {
    event_type:       'task_routed',
    actor_type:       'conductor',
    actor_name:       'Conductor',
    event_summary:    `Routed to ${route.next_owner}`,
    current_stage:    route.next_stage,
    resulting_status: 'active',
    current_owner:    route.next_owner,
    next_expected_action: classification.next_expected_action,
  })

  // ── 6. Persist to task ───────────────────────────────────────────────────
  taskStore.updateTask(task_id, {
    task_class:          classification.task_class,
    workflow_type:       classification.workflow_type,
    confidence_state:    classification.confidence_state,
    current_stage:       route.next_stage,
    current_owner:       route.next_owner,
    last_major_event:    'task_routed',
    next_expected_action: classification.next_expected_action,
  })

  return { task_id, run_id, classification, route }
}
