import { useTaskStore } from '../stores/taskStore'
import { t } from '../styles/tokens'

export default function TopBar({ onNewTask }) {
  const summary = useTaskStore(s => s.getSystemSummary())

  return (
    <header style={s.bar}>
      <div style={s.left}>
        <span style={s.logo}>NEXUS</span>
        <span style={s.phase}>Phase 1</span>
      </div>

      <div style={s.spacer} />

      <div style={s.right}>
        <Pill
          label="active"
          value={summary.active_task_count}
          color={t.cyan}
        />
        <Pill
          label="pending"
          value={summary.approval_pending_count}
          color={summary.approval_pending_count > 0 ? t.amber : t.textMuted}
          highlight={summary.approval_pending_count > 0}
        />
        <HealthChip state={summary.system_health_state} />
        <button style={s.newBtn} onClick={onNewTask}>
          + New Task
        </button>
      </div>
    </header>
  )
}

function Pill({ label, value, color, highlight }) {
  return (
    <div style={{
      ...s.pill,
      borderColor: highlight ? color : t.border,
      background: highlight ? `${color}14` : t.bg3,
    }}>
      <span style={{ fontFamily: t.mono, fontSize: '12px', fontWeight: 700, color }}>
        {value}
      </span>
      <span style={{ fontSize: '11px', color: t.textMuted }}>{label}</span>
    </div>
  )
}

function HealthChip({ state }) {
  const map = {
    stable:           t.emerald,
    attention_needed: t.amber,
    blocked:          t.red,
  }
  const color = map[state] ?? t.emerald
  return (
    <div style={{ ...s.healthChip, color }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
      {state ?? 'stable'}
    </div>
  )
}

const s = {
  bar: {
    height: '44px',
    background: t.bg2,
    borderBottom: `1px solid ${t.border}`,
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    gap: '12px',
    flexShrink: 0,
    userSelect: 'none',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    fontFamily: t.mono,
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.20em',
    color: t.cyan,
  },
  phase: {
    fontSize: '11px',
    color: t.textMuted,
    letterSpacing: '0.04em',
    paddingLeft: '10px',
    borderLeft: `1px solid ${t.border}`,
  },
  spacer: { flex: 1 },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  pill: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '3px 9px',
    borderRadius: t.r,
    border: `1px solid`,
    fontSize: '12px',
  },
  healthChip: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '11px',
    letterSpacing: '0.03em',
    padding: '3px 9px',
    background: t.bg3,
    border: `1px solid ${t.border}`,
    borderRadius: t.r,
  },
  newBtn: {
    background: t.cyanSoft,
    border: `1px solid ${t.cyanBorder}`,
    color: t.cyan,
    borderRadius: t.r,
    padding: '5px 13px',
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
    letterSpacing: '0.02em',
    transition: 'background 120ms',
  },
}
