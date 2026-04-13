/**
 * OpenClaw Handoff Adapter — Phase 1 Stub
 *
 * Translates a Nexus governance decision into a bounded handoff contract
 * for the OpenClaw runtime. In Phase 1 this is a stub that logs the payload
 * and returns a simulated response.
 *
 * Wire to live OpenClaw IPC/HTTP in NEXT-02.
 */

/**
 * Build the outbound handoff payload from canonical Nexus state.
 *
 * @param {object} params
 * @param {object} params.task       - canonical task object
 * @param {object} params.run        - canonical run object
 * @param {string} params.targetRole - the specialist role to invoke
 * @param {string} params.objective  - the bounded work objective
 */
export function buildHandoffPayload({ task, run, targetRole, objective }) {
  return {
    // Identity
    task_id:  task.task_id,
    run_id:   run.run_id,

    // Governance context
    target_role:    targetRole,
    workflow_type:  task.workflow_type,
    task_class:     task.task_class,
    current_stage:  task.current_stage,
    approval_posture: task.approval_posture,

    // Work specification
    objective,
    originating_request: task.originating_request,

    // Expected return contract
    expected_return_format: {
      acting_role:             'string',
      phase_status:            'completed | blocked | failed | approval_needed',
      stage:                   'string',
      output_summary:          'string',
      next_suggested_action:   'string',
      approval_needed:         'boolean',
      failure_or_block_reason: 'string | null',
      event_summaries:         'string[]',
    },

    sent_at: new Date().toISOString(),
  }
}

/**
 * Dispatch a handoff payload to the OpenClaw runtime.
 * Phase 1 stub — returns a simulated response and logs the payload.
 *
 * @param {object} payload - built by buildHandoffPayload()
 * @returns {Promise<object>} OpenClaw return payload
 */
export async function sendHandoff(payload) {
  console.info('[OpenClaw Handoff] Dispatched:', payload)

  // ── Phase 1 stub response ─────────────────────────────────────────────
  // Replace this body with a live IPC call (ipcRenderer.invoke) or HTTP
  // request to the OpenClaw runtime when NEXT-02 is implemented.
  return {
    acting_role:             payload.target_role,
    phase_status:            'stub_complete',
    stage:                   'specialist_work',
    output_summary:          '[Phase 1 stub] OpenClaw runtime is not yet active. Connect the runtime in NEXT-02 to enable live specialist execution.',
    next_suggested_action:   'Connect OpenClaw runtime and implement live handoff in NEXT-02',
    approval_needed:         false,
    failure_or_block_reason: null,
    event_summaries:         ['Runtime stub executed — no live specialist work performed'],
  }
}
