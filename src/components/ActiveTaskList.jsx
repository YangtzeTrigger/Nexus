import { useTaskStore } from '../stores/taskStore'
import { t, statusColor, confidenceColor } from '../styles/tokens'

/**
 * ActiveTaskList — operational queue surface.
 *
 * Renders all tasks sorted by last updated. Blocked and approval-pending
 * tasks float to the top via sort priority. Clicking a row selects the task
 * for detail inspection — the component emits no governance decisions itself.
 */
export default function ActiveTaskList() {
  const tasks         = useTaskStore(s => s.getAllTasks())
  const selectedId    = useTaskStore(s => s.selectedTaskId)
  const selectTask    = useTaskStore(s => s.selectTask)

  const sorted = [...tasks].sort((a, b) => {
    const priority = t => {
      if (t.current_status === 'blocked')          return 0
      if (t.current_status === 'approval_pending') return 1
      if (t.current_status === 'active')           return 2
      if (t.current_status === 'paused')           return 3
      return 4
    }
    const pd = priority(a) - priority(b)
    if (pd !== 0) return pd
    return new Date(b.updated_at) - new Date(a.updated_at)
  })

  return (
    <div style={s.root}>
      <div style={s.header}>
        <span style={s.headerLabel}>Tasks</span>
        <span style={s.headerCount}>{tasks.length}</span>
      </div>

      {sorted.length === 0 ? (
        <div style={s.empty}>
          <div style={s.emptyIcon}>◈</div>
          <div style={s.emptyText}>No tasks</div>
          <div style={s.emptyHint}>Create a task to begin</div>
        </div>
      ) : (
        <div style={s.list}>
          {sorted.map(task => (
            <TaskRow
              key={task.task_id}
              task={task}
              selected={task.task_id === selectedId}
              onClick={() => selectTask(task.task_id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function TaskRow({ task, selected, onClick }) {
  const stColor = statusColor[task.current_status]     ?? t.textMuted
  const cfColor = confidenceColor[task.confidence_state] ?? t.textMuted

  return (
    <div
      style={{
        ...s.row,
        background:  selected ? t.cyanSoft : 'transparent',
        borderLeft:  selected ? `2px solid ${t.cyan}` : `2px solid transparent`,
      }}
      onClick={onClick}
    >
      {/* Top row: ID · class tag · status dot */}
      <div style={s.rowMeta}>
        <span style={s.taskId}>{task.task_id}</span>
        {task.task_class && (
          <span style={s.classTag}>{task.task_class}</span>
        )}
        <span
          style={{ ...s.statusDot, background: stColor }}
          title={task.current_status}
        />
      </div>

      {/* Title */}
      <div style={s.title}>{task.task_title}</div>

      {/* Owner · confidence */}
      <div style={s.tags}>
        <span style={{ ...s.tag, color: t.textMuted }}>{task.current_owner}</span>
        <span style={s.tagDivider}>·</span>
        <span style={{ ...s.tag, color: cfColor }}>{task.confidence_state}</span>
      </div>

      {/* Next action */}
      {task.next_expected_action && (
        <div style={s.nextAction}>{task.next_expected_action}</div>
      )}
    </div>
  )
}

const s = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
    background: t.bg,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '9px 14px',
    borderBottom: `1px solid ${t.border}`,
    flexShrink: 0,
  },
  headerLabel: {
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: t.textMuted,
  },
  headerCount: {
    fontFamily: t.mono,
    fontSize: '11px',
    color: t.textMuted,
    background: t.bg4,
    padding: '1px 6px',
    borderRadius: '10px',
  },
  list: {
    flex: 1,
    overflowY: 'auto',
  },
  empty: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    padding: '32px',
    userSelect: 'none',
  },
  emptyIcon: { fontSize: '20px', color: t.bg5, marginBottom: '4px' },
  emptyText: { fontSize: '13px', color: t.textSoft, fontWeight: 500 },
  emptyHint: { fontSize: '11px', color: t.textMuted },
  row: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    padding: '10px 14px',
    borderBottom: `1px solid ${t.border}`,
    cursor: 'pointer',
    transition: 'background 100ms',
  },
  rowMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  taskId: {
    fontFamily: t.mono,
    fontSize: '10px',
    color: t.textMuted,
    letterSpacing: '0.04em',
    flex: 1,
  },
  classTag: {
    fontFamily: t.mono,
    fontSize: '10px',
    fontWeight: 700,
    color: t.violetLight,
    background: t.violetSoft,
    padding: '1px 5px',
    borderRadius: '3px',
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    flexShrink: 0,
  },
  title: {
    fontSize: '13px',
    fontWeight: 500,
    color: t.text,
    lineHeight: 1.35,
  },
  tags: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  tag: {
    fontSize: '11px',
    letterSpacing: '0.01em',
  },
  tagDivider: {
    fontSize: '11px',
    color: t.textMuted,
  },
  nextAction: {
    fontSize: '11px',
    color: t.textMuted,
    fontStyle: 'italic',
    lineHeight: 1.35,
  },
}
