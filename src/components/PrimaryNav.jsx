import { useTaskStore } from '../stores/taskStore'
import { t } from '../styles/tokens'

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview',  icon: '◈' },
  { id: 'tasks',    label: 'Tasks',     icon: '≡' },
  { id: 'trace',    label: 'Trace',     icon: '⋮' },
]

export default function PrimaryNav({ activeView, onViewChange, onNewTask }) {
  const summary = useTaskStore(s => s.getSystemSummary())

  const badgeFor = id => {
    if (id === 'tasks') return summary.active_task_count
    return 0
  }

  return (
    <nav style={s.nav}>
      <div style={s.items}>
        {NAV_ITEMS.map(item => {
          const active = activeView === item.id
          const badge  = badgeFor(item.id)
          return (
            <button
              key={item.id}
              style={{
                ...s.item,
                background:  active ? t.cyanSoft : 'transparent',
                color:       active ? t.cyan : t.textSoft,
                borderLeft:  active ? `2px solid ${t.cyan}` : `2px solid transparent`,
              }}
              onClick={() => onViewChange(item.id)}
            >
              <span style={s.icon}>{item.icon}</span>
              <span style={s.label}>{item.label}</span>
              {badge > 0 && (
                <span style={{
                  ...s.badge,
                  background: active ? t.cyan : t.bg5,
                  color:      active ? t.bg   : t.textSoft,
                }}>
                  {badge}
                </span>
              )}
            </button>
          )
        })}
      </div>

      <div style={s.footer}>
        <button style={s.addBtn} onClick={onNewTask}>
          <span style={{ fontSize: '16px', lineHeight: 1 }}>+</span>
          <span>New Task</span>
        </button>
      </div>
    </nav>
  )
}

const s = {
  nav: {
    width: '160px',
    minWidth: '160px',
    background: t.bg2,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '6px',
    userSelect: 'none',
  },
  items: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
    padding: '4px 0',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 14px 8px 16px',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.02em',
    cursor: 'pointer',
    transition: 'all 120ms',
    width: '100%',
    textAlign: 'left',
    borderRadius: 0,
    fontFamily: t.sans,
  },
  icon: {
    fontSize: '13px',
    width: '16px',
    textAlign: 'center',
    flexShrink: 0,
  },
  label: { flex: 1 },
  badge: {
    fontSize: '10px',
    fontFamily: t.mono,
    fontWeight: 700,
    padding: '1px 5px',
    borderRadius: '10px',
    minWidth: '18px',
    textAlign: 'center',
    flexShrink: 0,
  },
  footer: {
    borderTop: `1px solid ${t.border}`,
    padding: '8px',
  },
  addBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    width: '100%',
    padding: '7px 10px',
    background: 'transparent',
    border: `1px dashed ${t.border}`,
    borderRadius: t.r,
    color: t.textMuted,
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 120ms',
    fontFamily: t.sans,
  },
}
