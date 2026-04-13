// Harmonic Command — Design Tokens
// Canonical colour, typography, and spacing values for Nexus Phase 1.
// All components consume from here. Do not introduce values outside this set
// without a deliberate governance reason.

export const t = {
  // ── Surfaces — Obsidian scale ──────────────────────────────────────────
  bg:  '#0d0d1a',   // primary background
  bg2: '#12121f',   // elevated surface (top bar, nav)
  bg3: '#1a1a2e',   // card / panel surface
  bg4: '#22223a',   // hover / raised card
  bg5: '#2d2d47',   // highest surface / active element bg

  // ── Primary accent — Nexus Cyan ────────────────────────────────────────
  cyan:       '#00d4e8',
  cyanDim:    '#008fa0',
  cyanSoft:   'rgba(0, 212, 232, 0.10)',
  cyanBorder: 'rgba(0, 212, 232, 0.28)',

  // ── Secondary accent — Violet Blue ─────────────────────────────────────
  violet:      '#7c3aed',
  violetLight: '#a78bfa',
  violetSoft:  'rgba(124, 58, 237, 0.12)',

  // ── Warning / Approval-pending — Amber ─────────────────────────────────
  amber:    '#f59e0b',
  amberDim: '#d97706',
  amberSoft: 'rgba(245, 158, 11, 0.12)',

  // ── Success / Completed — Emerald ──────────────────────────────────────
  emerald:    '#10b981',
  emeraldDim: '#059669',
  emeraldSoft: 'rgba(16, 185, 129, 0.12)',

  // ── Danger ─────────────────────────────────────────────────────────────
  red:     '#ef4444',
  redSoft: 'rgba(239, 68, 68, 0.12)',

  // ── Text ───────────────────────────────────────────────────────────────
  text:      '#e2e8f0',   // primary readable text
  textSoft:  '#94a3b8',   // secondary / supporting text
  textMuted: '#64748b',   // labels, metadata, placeholders

  // ── Borders ────────────────────────────────────────────────────────────
  border:      'rgba(255, 255, 255, 0.07)',
  borderHover: 'rgba(255, 255, 255, 0.13)',

  // ── Typography ─────────────────────────────────────────────────────────
  mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
  sans: "'Inter', system-ui, -apple-system, sans-serif",

  // ── Border radii ───────────────────────────────────────────────────────
  r:   '4px',
  rMd: '6px',
  rLg: '8px',
}

// ── Status → colour mapping ───────────────────────────────────────────────
export const statusColor = {
  active:           t.cyan,
  paused:           t.amber,
  blocked:          t.red,
  approval_pending: t.amber,
  completed:        t.emerald,
  failed:           t.red,
  cancelled:        t.textMuted,
  closed_without_action: t.textMuted,
}

// ── Confidence state → colour mapping ────────────────────────────────────
export const confidenceColor = {
  direct:           t.emerald,
  guided:           t.cyan,
  escalated:        t.violetLight,
  approval_pending: t.amber,
  ambiguous:        t.amber,
  blocked:          t.red,
  completed:        t.emerald,
}

// ── Task class → readable label ───────────────────────────────────────────
export const classLabel = {
  A: 'Class A — Simple',
  B: 'Class B — Multi-Step',
  C: 'Class C — Cross-Domain',
  D: 'Class D — Approval-Sensitive',
  E: 'Class E — Ambiguous',
}

// ── Event type → colour mapping ───────────────────────────────────────────
export const eventColor = {
  task_created:        t.cyan,
  task_classified:     t.violetLight,
  task_routed:         t.cyan,
  task_escalated:      t.amber,
  task_completed:      t.emerald,
  task_paused:         t.amber,
  task_cancelled:      t.textMuted,
  specialist_started:  t.emerald,
  specialist_completed: t.emerald,
  specialist_blocked:  t.amber,
  specialist_failed:   t.red,
  approval_requested:  t.amber,
  approval_granted:    t.emerald,
  approval_rejected:   t.red,
  resource_created:    t.violetLight,
}
