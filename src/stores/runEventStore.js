import { create } from 'zustand'

let _runCounter = 0
let _eventCounter = 0

function nextRunId() {
  _runCounter++
  return `RUN-${String(_runCounter).padStart(4, '0')}`
}

function nextEventId() {
  _eventCounter++
  return `EVT-${String(_eventCounter).padStart(4, '0')}`
}

export const useRunEventStore = create((set, get) => ({
  runs: {},

  // ── Create run ──────────────────────────────────────────────────────────
  createRun(task_id, workflow_type = 'unassigned') {
    const run_id = nextRunId()
    const now = new Date().toISOString()

    const run = {
      run_id,
      task_id,
      workflow_type,
      created_at:      now,
      updated_at:      now,
      current_status:  'active',
      current_stage:   'intake',
      current_owner:   'Conductor',
      confidence_state: 'guided',
      approval_posture: 'not_required',
      event_list:      [],
      terminal_state:  null,
      completion_summary: null,
      linked_approval_ids: [],
      linked_resource_ids: [],
    }

    set(state => ({ runs: { ...state.runs, [run_id]: run } }))
    return run
  },

  // ── Append event ────────────────────────────────────────────────────────
  // eventData must include: event_type, actor_type, actor_name,
  //   event_summary, current_stage, resulting_status
  addEvent(run_id, eventData) {
    const run = get().runs[run_id]
    if (!run) {
      console.warn(`[runEventStore] addEvent — run not found: ${run_id}`)
      return null
    }

    const event_id = nextEventId()
    const timestamp = new Date().toISOString()

    const event = {
      event_id,
      timestamp,
      run_id,
      task_id: run.task_id,
      // Required fields
      event_type:       eventData.event_type,
      actor_type:       eventData.actor_type    ?? 'system',
      actor_name:       eventData.actor_name    ?? 'System',
      event_summary:    eventData.event_summary ?? '',
      current_stage:    eventData.current_stage ?? run.current_stage,
      resulting_status: eventData.resulting_status ?? run.current_status,
      // Recommended fields
      current_owner:         eventData.current_owner        ?? run.current_owner,
      next_expected_action:  eventData.next_expected_action ?? null,
      confidence_state:      eventData.confidence_state     ?? run.confidence_state,
      workflow_type:         eventData.workflow_type        ?? run.workflow_type,
      notes:                 eventData.notes                ?? null,
    }

    set(state => {
      const existing = state.runs[run_id]
      return {
        runs: {
          ...state.runs,
          [run_id]: {
            ...existing,
            event_list:      [...existing.event_list, event],
            updated_at:      timestamp,
            // Propagate live state from event
            current_status:  event.resulting_status,
            current_stage:   event.current_stage,
            current_owner:   event.current_owner,
            confidence_state: event.confidence_state,
            workflow_type:   event.workflow_type,
          },
        },
      }
    })

    return event
  },

  // ── Update run header fields ─────────────────────────────────────────────
  updateRun(run_id, updates) {
    set(state => {
      const existing = state.runs[run_id]
      if (!existing) return state
      return {
        runs: {
          ...state.runs,
          [run_id]: {
            ...existing,
            ...updates,
            updated_at: new Date().toISOString(),
          },
        },
      }
    })
  },

  // ── Read ────────────────────────────────────────────────────────────────
  getRun(run_id) {
    return get().runs[run_id]
  },

  // Most recent run for a given task
  getRunForTask(task_id) {
    return Object.values(get().runs)
      .filter(r => r.task_id === task_id)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0] ?? null
  },

  getAllRuns() {
    return Object.values(get().runs).sort(
      (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
    )
  },
}))
