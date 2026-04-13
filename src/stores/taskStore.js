import { create } from 'zustand'

// Sequential ID counter — module-scoped to survive across renders
let _taskCounter = 0

function nextTaskId() {
  _taskCounter++
  return `TASK-${String(_taskCounter).padStart(4, '0')}`
}

export const useTaskStore = create((set, get) => ({
  tasks: {},
  selectedTaskId: null,

  // ── Create ──────────────────────────────────────────────────────────────
  createTask({ task_title, task_description }) {
    const task_id = nextTaskId()
    const now = new Date().toISOString()

    const task = {
      // Identity
      task_id,
      task_title:        task_title.trim(),
      task_summary:      task_description?.trim() || task_title.trim(),
      task_description:  task_description?.trim() || task_title.trim(),
      originating_request: task_description?.trim() || task_title.trim(),

      // Classification (filled by Conductor)
      task_class:    null,
      workflow_type: 'unassigned',

      // Live governance state
      current_owner:       'Conductor',
      current_stage:       'intake',
      current_status:      'active',
      confidence_state:    'guided',
      approval_posture:    'not_required',

      // Trace fields
      last_major_event:    'task_created',
      next_expected_action: 'Conductor classifies task',

      // Output
      output_state:   'none',
      output_content: null,
      storage_state:  'not_applicable',

      // Links
      current_run_id:      null,
      linked_approval_ids: [],
      linked_resource_ids: [],

      // Timestamps
      created_at: now,
      updated_at: now,
    }

    set(state => ({
      tasks: { ...state.tasks, [task_id]: task },
      selectedTaskId: task_id,
    }))

    return task
  },

  // ── Update ──────────────────────────────────────────────────────────────
  updateTask(task_id, updates) {
    set(state => {
      const existing = state.tasks[task_id]
      if (!existing) return state
      return {
        tasks: {
          ...state.tasks,
          [task_id]: {
            ...existing,
            ...updates,
            updated_at: new Date().toISOString(),
          },
        },
      }
    })
  },

  // ── Selection ───────────────────────────────────────────────────────────
  selectTask(task_id) {
    set({ selectedTaskId: task_id })
  },

  // ── Read ────────────────────────────────────────────────────────────────
  getTask(task_id) {
    return get().tasks[task_id]
  },

  getSelectedTask() {
    const { tasks, selectedTaskId } = get()
    return selectedTaskId ? (tasks[selectedTaskId] ?? null) : null
  },

  getAllTasks() {
    return Object.values(get().tasks).sort(
      (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
    )
  },

  getActiveTasks() {
    return Object.values(get().tasks).filter(t =>
      ['active', 'paused', 'blocked', 'approval_pending'].includes(t.current_status)
    )
  },

  // ── System summary (for TopBar + Overview) ───────────────────────────────
  getSystemSummary() {
    const tasks = Object.values(get().tasks)
    return {
      active_task_count: tasks.filter(t =>
        ['active', 'paused', 'blocked', 'approval_pending'].includes(t.current_status)
      ).length,
      approval_pending_count: tasks.filter(t =>
        t.current_status === 'approval_pending'
      ).length,
      blocked_task_count: tasks.filter(t =>
        t.current_status === 'blocked'
      ).length,
      completed_task_count: tasks.filter(t =>
        t.current_status === 'completed'
      ).length,
      system_health_state: 'stable',
    }
  },
}))
