import { useState } from 'react'
import { t } from '../styles/tokens'
import { useTaskStore } from '../stores/taskStore'
import { conductorProcessTask } from '../controllers/conductorController'

/**
 * TaskIntakeForm — modal overlay for creating a new governed task.
 *
 * On submit:
 *   1. Creates the task in taskStore (task_created)
 *   2. Closes the modal immediately so the user can see it appear
 *   3. Fires the Conductor classification async (fire-and-forget)
 *
 * Does NOT own IDs, classification, or routing — those belong to
 * the store and Conductor respectively.
 */
export default function TaskIntakeForm({ onClose }) {
  const [title,       setTitle]       = useState('')
  const [description, setDescription] = useState('')
  const [submitting,  setSubmitting]  = useState(false)
  const [error,       setError]       = useState(null)

  const createTask = useTaskStore(s => s.createTask)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return

    setSubmitting(true)
    setError(null)

    try {
      const task = createTask({
        task_title:       title.trim(),
        task_description: description.trim() || title.trim(),
      })

      // Close immediately — task is visible in the list
      onClose()

      // Conductor classifies asynchronously
      conductorProcessTask(task.task_id).catch(err => {
        console.error('[TaskIntakeForm] Conductor error:', err)
      })
    } catch (err) {
      setError(err.message)
      setSubmitting(false)
    }
  }

  // Close on overlay click
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div style={s.overlay} onClick={handleOverlayClick}>
      <div style={s.modal}>

        {/* Header */}
        <div style={s.header}>
          <div style={s.headerText}>
            <span style={s.headerTitle}>New Task</span>
            <span style={s.headerSub}>
              Conductor will classify and route on submission
            </span>
          </div>
          <button style={s.closeBtn} onClick={onClose} title="Close">✕</button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={s.form}>

          <div style={s.field}>
            <label style={s.label}>
              Task Title <span style={{ color: t.cyan }}>*</span>
            </label>
            <input
              style={s.input}
              type="text"
              placeholder="What needs to be done?"
              value={title}
              onChange={e => setTitle(e.target.value)}
              autoFocus
              disabled={submitting}
            />
          </div>

          <div style={s.field}>
            <label style={s.label}>Description</label>
            <textarea
              style={{ ...s.input, ...s.textarea }}
              placeholder="Provide context, constraints, or objectives…"
              value={description}
              onChange={e => setDescription(e.target.value)}
              disabled={submitting}
              rows={4}
            />
          </div>

          {error && (
            <div style={s.errorBox}>
              <span>⚠</span>
              <span>{error}</span>
            </div>
          )}

          <div style={s.actions}>
            <button
              type="button"
              style={s.cancelBtn}
              onClick={onClose}
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                ...s.submitBtn,
                opacity: (!title.trim() || submitting) ? 0.45 : 1,
                cursor:  (!title.trim() || submitting) ? 'not-allowed' : 'pointer',
              }}
              disabled={!title.trim() || submitting}
            >
              {submitting ? 'Creating…' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const s = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.72)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    backdropFilter: 'blur(2px)',
  },
  modal: {
    width: '520px',
    background: t.bg3,
    border: `1px solid ${t.border}`,
    borderRadius: t.rLg,
    boxShadow: '0 24px 64px rgba(0,0,0,0.65)',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '16px 20px',
    borderBottom: `1px solid ${t.border}`,
    background: t.bg4,
  },
  headerText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  headerTitle: {
    fontSize: '13px',
    fontWeight: 600,
    color: t.text,
    letterSpacing: '0.02em',
  },
  headerSub: {
    fontSize: '11px',
    color: t.textMuted,
  },
  closeBtn: {
    background: 'transparent',
    border: 'none',
    color: t.textMuted,
    fontSize: '13px',
    cursor: 'pointer',
    padding: '2px 4px',
    lineHeight: 1,
    borderRadius: t.r,
    transition: 'color 120ms',
  },
  form: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '11px',
    fontWeight: 600,
    color: t.textSoft,
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
  },
  input: {
    background: t.bg2,
    border: `1px solid ${t.border}`,
    borderRadius: t.r,
    color: t.text,
    padding: '9px 12px',
    fontSize: '13px',
    width: '100%',
    transition: 'border-color 120ms',
    fontFamily: 'inherit',
  },
  textarea: {
    minHeight: '80px',
    lineHeight: 1.5,
    resize: 'vertical',
  },
  errorBox: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    background: t.redSoft,
    border: `1px solid rgba(239,68,68,0.28)`,
    borderRadius: t.r,
    padding: '9px 12px',
    fontSize: '12px',
    color: t.red,
    lineHeight: 1.4,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '8px',
    paddingTop: '4px',
  },
  cancelBtn: {
    background: 'transparent',
    border: `1px solid ${t.border}`,
    borderRadius: t.r,
    color: t.textSoft,
    padding: '7px 16px',
    fontSize: '12px',
    cursor: 'pointer',
    fontFamily: t.sans,
    transition: 'border-color 120ms',
  },
  submitBtn: {
    background: t.cyanSoft,
    border: `1px solid ${t.cyanBorder}`,
    borderRadius: t.r,
    color: t.cyan,
    padding: '7px 20px',
    fontSize: '12px',
    fontWeight: 600,
    fontFamily: t.sans,
    transition: 'all 120ms',
    letterSpacing: '0.02em',
  },
}
