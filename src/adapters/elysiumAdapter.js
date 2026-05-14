/**
 * Elysium Adapter
 *
 * Sends governed task phases to the Elysium runtime at aegisnet.org.uk.
 * Routes through the Electron main process via IPC (window.nexus.invoke)
 * to avoid CORS and keep auth credentials out of the renderer.
 *
 * Payload shape follows the OpenClaw handoff contract defined in
 * Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md §17.
 */

/**
 * Build the outbound handoff payload from canonical Nexus state.
 */
export function buildHandoffPayload({ task, run, targetRole, objective }) {
  return {
    task_id:          task.task_id,
    run_id:           run.run_id,
    target_role:      targetRole,
    workflow_type:    task.workflow_type,
    task_class:       task.task_class,
    current_stage:    task.current_stage,
    approval_posture: task.approval_posture,
    confidence_state: task.confidence_state,
    objective,
    originating_request: task.originating_request,
    sent_at: new Date().toISOString(),
  }
}

/**
 * Send a handoff payload to the Elysium runtime.
 * Returns the structured runtime response.
 *
 * Expected response shape (from OpenClaw spec §17.2):
 *   acting_role, phase_status, stage, output_summary,
 *   next_suggested_action, approval_needed,
 *   failure_or_block_reason, event_summaries[]
 */
export async function sendHandoff(payload) {
  if (!window.nexus?.invoke) {
    throw new Error('window.nexus.invoke not available — is the preload loaded?')
  }
  return window.nexus.invoke('elysium:handoff', payload)
}
