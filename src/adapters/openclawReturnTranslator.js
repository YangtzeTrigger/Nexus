/**
 * OpenClaw Return Translator — Phase 1 Stub
 *
 * Translates a raw OpenClaw runtime return payload into:
 *   1. task state updates   → apply via taskStore.updateTask()
 *   2. canonical event list → append via runEventStore.addEvent()
 *
 * The UI renders canonical Nexus state, never raw runtime payloads.
 *
 * Wire to live return shapes in NEXT-03.
 */

/**
 * Translate an OpenClaw return into Nexus-canonical state.
 *
 * @param {object} runtimeReturn - raw payload from OpenClaw
 * @param {object} context.task  - current canonical task object
 * @param {object} context.run   - current canonical run object
 *
 * @returns {{ taskUpdates: object, events: object[] }}
 */
export function translateReturn(runtimeReturn, { task, run }) {
  const {
    acting_role,
    phase_status,
    stage,
    output_summary,
    next_suggested_action,
    approval_needed,
    failure_or_block_reason,
    event_summaries = [],
  } = runtimeReturn

  // ── Map phase_status → canonical Nexus status ──────────────────────────
  const statusMap = {
    completed:       'active',
    stub_complete:   'active',
    blocked:         'blocked',
    failed:          'failed',
    approval_needed: 'approval_pending',
  }
  const resulting_status = statusMap[phase_status] ?? 'active'

  // ── Map approval signal → approval posture ──────────────────────────────
  const approval_posture = approval_needed ? 'required' : task.approval_posture

  // ── Determine output state ───────────────────────────────────────────────
  const output_state = output_summary
    ? 'structured_draft'
    : task.output_state

  // ── Task state updates ───────────────────────────────────────────────────
  const taskUpdates = {
    current_owner:        acting_role  ?? task.current_owner,
    current_stage:        stage        ?? task.current_stage,
    current_status:       failure_or_block_reason ? 'blocked' : resulting_status,
    approval_posture,
    output_state,
    output_content:       output_summary ?? task.output_content,
    next_expected_action: next_suggested_action ?? task.next_expected_action,
    last_major_event:     approval_needed
      ? 'approval_requested'
      : (failure_or_block_reason ? 'specialist_failed' : 'specialist_completed'),
  }

  if (failure_or_block_reason) {
    taskUpdates.next_expected_action = `Resolve: ${failure_or_block_reason}`
  }

  // ── Events to append to the run ──────────────────────────────────────────
  const events = event_summaries.map(summary => ({
    event_type:       failure_or_block_reason ? 'specialist_failed' : 'specialist_completed',
    actor_type:       'specialist',
    actor_name:       acting_role ?? 'Specialist',
    event_summary:    summary,
    current_stage:    stage ?? run.current_stage,
    resulting_status: taskUpdates.current_status,
    current_owner:    acting_role ?? run.current_owner,
    next_expected_action: next_suggested_action,
    notes: failure_or_block_reason ?? null,
  }))

  return { taskUpdates, events }
}
