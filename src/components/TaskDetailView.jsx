import { useRunEventStore } from '../stores/runEventStore'
import { t, statusColor, confidenceColor, classLabel, eventColor } from '../styles/tokens'

/**
 * TaskDetailView — full inspection panel for a selected task.
 *
 * Shows: identity, state grid, next action, output (when present),
 * and the full ordered event timeline.
 *
 * Consumes: task object (from taskStore) + linked run/events (from runEventStore).
 * Emits: nothing — read-only display component.
 */
export default function TaskDetailView({ task }) {
  const run    = useRunEventStore(s => s.getRunForTask(task.task_id))
  const events = run?.event_list ?? []

  const stColor = statusColor[task.current_status]     ?? t.textMuted
  const cfColor = confidenceColor[task.confidence_state] ?? t.textMuted

  return (
    <div style={s.root}>

      {/* ── Identity ──────────────────────────────────────────────────── */}
      <div style={s.header}>
        <div style={s.headerRow}>
          <span style={s.taskId}>{task.task_id}</span>
          {task.task_class && (
            <span style={s.classChip}>
              {classLabel[task.task_class] ?? `Class ${task.task_class}`}
            </span>
          )}
          <span style={{ ...s.statusChip, color: stColor, borderColor: `${stColor}50`, background: `${stColor}14` }}>
            {task.current_status}
          </span>
        </div>
        <h2 style={s.title}>{task.task_title}</h2>
        {task.task_description && task.task_description !== task.task_title && (
          <p style={s.description}>{task.task_description}</p>
        )}
      </div>

      {/* ── State grid ───────────────────────────────────────────────── */}
      <div style={s.grid}>
        <StateCell label="Owner"      value={task.current_owner}  accent={t.cyan} />
        <StateCell label="Stage"      value={task.current_stage} />
        <StateCell label="Workflow"   value={task.workflow_type ?? '—'} />
        <StateCell label="Confidence" value={task.confidence_state} accent={cfColor} />
      </div>

      {/* ── Next action banner ────────────────────────────────────────── */}
      {task.next_expected_action && (
        <div style={s.nextBanner}>
          <span style={s.nextLabel}>Next Action</span>
          <span style={s.nextText}>{task.next_expected_action}</span>
        </div>
      )}

      {/* ── Output ───────────────────────────────────────────────────── */}
      {task.output_content && (
        <section style={s.section}>
          <SectionLabel text="Output" />
          <div style={s.outputBox}>
            <div style={s.outputHeader}>
              <span style={s.outputState}>{task.output_state}</span>
              <span style={s.outputStorage}>{task.storage_state}</span>
            </div>
            <pre style={s.outputContent}>{task.output_content}</pre>
          </div>
        </section>
      )}

      {/* ── Event timeline ────────────────────────────────────────────── */}
      <section style={s.section}>
        <SectionLabel
          text="Event Timeline"
          suffix={run ? run.run_id : null}
          mono
        />
        {events.length === 0 ? (
          <div style={s.emptyEvents}>No events recorded yet</div>
        ) : (
          <div style={s.timeline}>
            {events.map(ev => (
              <EventRow key={ev.event_id} event={ev} />
            ))}
          </div>
        )}
      </section>

    </div>
  )
}

// ── Sub-components ─────────────────────────────────────────────────────────

function StateCell({ label, value, accent }) {
  return (
    <div style={s.cell}>
      <span style={s.cellLabel}>{label}</span>
      <span style={{ ...s.cellValue, color: accent ?? t.textSoft }}>{value ?? '—'}</span>
    </div>
  )
}

function SectionLabel({ text, suffix, mono }) {
  return (
    <div style={s.sectionLabel}>
      <span>{text}</span>
      {suffix && (
        <span style={{ fontFamily: t.mono, fontWeight: 400, fontSize: '10px', color: t.textMuted, letterSpacing: '0.04em' }}>
          {suffix}
        </span>
      )}
    </div>
  )
}

function EventRow({ event }) {
  const time  = new Date(event.timestamp).toLocaleTimeString([], {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  })
  const color = eventColor[event.event_type] ?? t.textMuted

  return (
    <div style={s.eventRow}>
      <div style={s.eventLeft}>
        <span style={{ ...s.eventDot, background: color }} />
        <div style={s.eventBody}>
          <div style={s.eventTop}>
            <span style={{ fontFamily: t.mono, fontSize: '11px', fontWeight: 600, color }}>
              {event.event_type}
            </span>
            <span style={{ fontSize: '11px', color: t.textMuted }}>{event.actor_name}</span>
          </div>
          <div style={s.eventSummary}>{event.event_summary}</div>
          {event.notes && (
            <div style={s.eventNotes}>{event.notes}</div>
          )}
        </div>
      </div>
      <span style={s.eventTime}>{time}</span>
    </div>
  )
}

// ── Styles ─────────────────────────────────────────────────────────────────

const s = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px 24px 32px',
    overflowY: 'auto',
    height: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },
  taskId: {
    fontFamily: t.mono,
    fontSize: '11px',
    color: t.textMuted,
    letterSpacing: '0.04em',
  },
  classChip: {
    fontFamily: t.mono,
    fontSize: '11px',
    fontWeight: 600,
    color: t.violetLight,
    background: t.violetSoft,
    padding: '2px 8px',
    borderRadius: t.r,
  },
  statusChip: {
    fontSize: '11px',
    fontWeight: 500,
    padding: '2px 8px',
    borderRadius: t.r,
    border: '1px solid',
    letterSpacing: '0.02em',
  },
  title: {
    fontSize: '18px',
    fontWeight: 600,
    color: t.text,
    lineHeight: 1.3,
  },
  description: {
    fontSize: '13px',
    color: t.textSoft,
    lineHeight: 1.55,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1px',
    background: t.border,
    border: `1px solid ${t.border}`,
    borderRadius: t.rMd,
    overflow: 'hidden',
  },
  cell: {
    background: t.bg3,
    padding: '10px 14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  cellLabel: {
    fontSize: '10px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.09em',
    color: t.textMuted,
  },
  cellValue: {
    fontSize: '12px',
    fontWeight: 500,
  },
  nextBanner: {
    background: t.cyanSoft,
    border: `1px solid ${t.cyanBorder}`,
    borderRadius: t.rMd,
    padding: '10px 14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  nextLabel: {
    fontSize: '10px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.09em',
    color: t.cyanDim,
  },
  nextText: {
    fontSize: '12px',
    color: t.cyan,
    fontStyle: 'italic',
    lineHeight: 1.4,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  sectionLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: t.textMuted,
  },
  emptyEvents: {
    fontSize: '12px',
    color: t.textMuted,
    fontStyle: 'italic',
    padding: '8px 0',
  },
  timeline: {
    border: `1px solid ${t.border}`,
    borderRadius: t.rMd,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  eventRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '12px',
    background: t.bg3,
    padding: '10px 14px',
    borderBottom: `1px solid ${t.border}`,
  },
  eventLeft: {
    display: 'flex',
    gap: '10px',
    flex: 1,
    minWidth: 0,
  },
  eventDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    flexShrink: 0,
    marginTop: 4,
  },
  eventBody: {
    flex: 1,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  eventTop: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },
  eventSummary: {
    fontSize: '12px',
    color: t.textSoft,
    lineHeight: 1.45,
  },
  eventNotes: {
    fontSize: '11px',
    color: t.textMuted,
    fontStyle: 'italic',
    lineHeight: 1.4,
  },
  eventTime: {
    fontFamily: t.mono,
    fontSize: '10px',
    color: t.textMuted,
    flexShrink: 0,
    letterSpacing: '0.03em',
    paddingTop: 2,
  },
  outputBox: {
    border: `1px solid ${t.border}`,
    borderRadius: t.rMd,
    overflow: 'hidden',
  },
  outputHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px 12px',
    background: t.emeraldSoft,
    borderBottom: `1px solid ${t.border}`,
  },
  outputState: {
    fontSize: '10px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: t.emerald,
  },
  outputStorage: {
    fontSize: '10px',
    color: t.textMuted,
    letterSpacing: '0.03em',
  },
  outputContent: {
    fontFamily: t.mono,
    fontSize: '12px',
    color: t.textSoft,
    padding: '12px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    lineHeight: 1.5,
    background: t.bg3,
  },
}
