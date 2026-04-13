import { create } from 'zustand'

let _resourceCounter = 0

function nextResourceId() {
  _resourceCounter++
  return `RES-${String(_resourceCounter).padStart(4, '0')}`
}

export const useResourceStore = create((set, get) => ({
  resources: {},

  // ── Create ──────────────────────────────────────────────────────────────
  createResource(payload) {
    const resource_id = nextResourceId()
    const now = new Date().toISOString()

    const resource = {
      resource_id,
      resource_title:  payload.resource_title,
      resource_type:   payload.resource_type   ?? 'document',
      version:         payload.version         ?? '1.0',
      summary:         payload.summary         ?? '',
      subject_area:    payload.subject_area    ?? '',
      content:         payload.content         ?? '',
      file_reference:  payload.file_reference  ?? null,
      storage_class:   payload.storage_class   ?? 'session',
      current_status:  'active',
      linked_task_ids: payload.linked_task_ids ?? [],
      linked_run_ids:  payload.linked_run_ids  ?? [],
      created_at: now,
      updated_at: now,
    }

    set(state => ({
      resources: { ...state.resources, [resource_id]: resource },
    }))

    return resource
  },

  // ── Read ────────────────────────────────────────────────────────────────
  getResource(resource_id) {
    return get().resources[resource_id]
  },

  getResourcesForTask(task_id) {
    return Object.values(get().resources).filter(r =>
      r.linked_task_ids.includes(task_id)
    )
  },

  getRecentResources(limit = 10) {
    return Object.values(get().resources)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, limit)
  },

  getAllResources() {
    return Object.values(get().resources).sort(
      (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
    )
  },
}))
