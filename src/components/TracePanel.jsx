import { useTaskStore } from '../stores/taskStore'
import { useRunEventStore } from '../stores/runEventStore'
import { t, eventColor } from '../styles/tokens'

/**
 * TracePanel — right-side trace rail.
 *
 * Shows the live event stream for the currently selected task.
 * Events are rendered newest-first (reverse chronological).
 *
 * Consumes: selected task (taskStore) + run/events (runEventStore).
 * Emits: nothing.
 */
export default function TracePanel() {
  const selectedTask = useTaskStore(s => s.getSelectedTask())
  const run = useRunEventStore(s =>
    selectedTask ? s.getRunForTask(selectedTask.task_id) : null
  )
  const events = run ? [...run.event_list].reverse() : []

  return (
    <div style={s.panel}>

      {/* Header */}
      <div style={s.header}>
        <span style={s.title}>Trace</span>
        {run && (
          <span style={s.runId}>{run.run_id}</span>
        )}
      </div>

      {/* Body */}
      {!selectedTask ? (
        <Placeholder text="Select a task to trace" />
      ) : events.length === 0 ? (
        <Placeholder text="No events recorded" />
      ) : (
        <div style={s.events}>
          {events.map(ev => (
            <TraceEvent key={ev.event_id} event={ev} />
          ))}
        </div>
      )}

    </div>
  )
}

function Placeholder({ text }) {
  return (
    <div style={s.placeholder}>{text}</div>
  )
}

function TraceEvent({ event }) {
  const time  = new Date(event.timestamp).toLocaleTimeString([], {
    hour: '2-digit', minute: '2-digit',
  })
  const color = eventColor[event.event_type] ?? t.textMuted

  return (
    <div style={s.event}>
      <div style={s.eventTop}>
        <span style={{ fontFamily: t.mono, fontSize: '10px', fontWeight: 600, color, letterSpacing: '0.03em' }}>
          {event.event_type}
        </span>
        <span style={{ fontFamily: t.mono, fontSize: '10px', color: t.textMuted, flexShrink: 0 }}>
          {time}
        </span>
      </div>
      <div style={s.actor}>{event.actor_name}</div>
      <div style={s.summary}>{event.event_summary}</div>
    </div>
  )
}

const s = {
  panel: {
    background: t.bg2,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '9px 12px',
    borderBottom: `1px solid ${t.border}`,
    flexShrink: 0,
    userSelect: 'none',
  },
  title: {
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.09em',
    color: t.textMuted,
  },
  runId: {
    fontFamily: t.mono,
    fontSize: '10px',
    color: t.textMuted,
    letterSpacing: '0.04em',
  },
  placeholder: {
    padding: '24px 12px',
    fontSize: '12px',
    color: t.textMuted,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  events: {
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  event: {
    padding: '9px 12px',
    borderBottom: `1px solid ${t.border}`,
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  eventTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '6px',
  },
  actor: {
    fontSize: '11px',
    color: t.textMuted,
  },
  summary: {
    fontSize: '11px',
    color: t.textSoft,
    lineHeight: 1.4,
  },
}
