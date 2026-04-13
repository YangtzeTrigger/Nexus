import { useState } from 'react'
import { t } from '../styles/tokens'
import TopBar from './TopBar'
import PrimaryNav from './PrimaryNav'
import ActiveTaskList from './ActiveTaskList'
import TaskDetailView from './TaskDetailView'
import TracePanel from './TracePanel'
import TaskIntakeForm from './TaskIntakeForm'
import { useTaskStore } from '../stores/taskStore'

/**
 * AppShell — the outer governance frame.
 *
 * Layout:
 *   TopBar (44px) — title, live counts, new-task button
 *   Body (flex row):
 *     PrimaryNav (160px) — section navigation
 *     Main panel (flex-1) — current view content
 *     TracePanel (260px) — live event rail for selected task
 *
 * Manages which view is active. Does not own classification or routing.
 */
export default function AppShell() {
  const [activeView,     setActiveView]     = useState('tasks')
  const [showIntakeForm, setShowIntakeForm] = useState(false)

  const selectedTask = useTaskStore(s => s.getSelectedTask())

  return (
    <div style={s.shell}>
      <TopBar onNewTask={() => setShowIntakeForm(true)} />

      <div style={s.body}>
        <PrimaryNav
          activeView={activeView}
          onViewChange={setActiveView}
          onNewTask={() => setShowIntakeForm(true)}
        />

        {/* ── Main content area ──────────────────────────────────────── */}
        <main style={s.main}>
          {activeView === 'tasks' && (
            <div style={s.tasksLayout}>
              <div style={s.listPane}>
                <ActiveTaskList />
              </div>
              <div style={s.detailPane}>
                {selectedTask
                  ? <TaskDetailView task={selectedTask} />
                  : <EmptyDetail onNewTask={() => setShowIntakeForm(true)} />
                }
              </div>
            </div>
          )}

          {activeView === 'overview' && <OverviewPlaceholder />}
          {activeView === 'trace'    && <TracePlaceholder />}
        </main>

        {/* ── Right trace rail ──────────────────────────────────────── */}
        <div style={s.traceRail}>
          <TracePanel />
        </div>
      </div>

      {/* ── Task intake modal ──────────────────────────────────────── */}
      {showIntakeForm && (
        <TaskIntakeForm onClose={() => setShowIntakeForm(false)} />
      )}
    </div>
  )
}

// ── Placeholder views ──────────────────────────────────────────────────────

function EmptyDetail({ onNewTask }) {
  return (
    <div style={s.emptyDetail}>
      <div style={s.emptyGlyph}>◈</div>
      <div style={s.emptyHeading}>No task selected</div>
      <div style={s.emptyBody}>
        Select a task from the list to inspect its state, routing, and event history.
      </div>
      <button style={s.emptyAction} onClick={onNewTask}>
        + Create first task
      </button>
    </div>
  )
}

function OverviewPlaceholder() {
  return (
    <div style={s.placeholder}>
      <div style={s.placeholderLabel}>Governance Overview</div>
      <div style={s.placeholderText}>
        Summary cards (active count, approvals, blocked items, recent activity)
        will appear here — coming in SOON-03.
      </div>
    </div>
  )
}

function TracePlaceholder() {
  return (
    <div style={s.placeholder}>
      <div style={s.placeholderLabel}>Run History</div>
      <div style={s.placeholderText}>
        Full trace view with run summaries and event filters — coming in NEXT-05.
      </div>
    </div>
  )
}

// ── Styles ─────────────────────────────────────────────────────────────────

const s = {
  shell: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width:  '100vw',
    background: t.bg,
    overflow: 'hidden',
  },
  body: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    borderLeft:  `1px solid ${t.border}`,
    borderRight: `1px solid ${t.border}`,
  },
  tasksLayout: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
  listPane: {
    width: '300px',
    minWidth: '260px',
    borderRight: `1px solid ${t.border}`,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
  },
  detailPane: {
    flex: 1,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  traceRail: {
    width: '260px',
    minWidth: '220px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  emptyDetail: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '48px 40px',
    userSelect: 'none',
    textAlign: 'center',
  },
  emptyGlyph: {
    fontSize: '28px',
    color: t.bg5,
    marginBottom: '4px',
  },
  emptyHeading: {
    fontSize: '14px',
    fontWeight: 500,
    color: t.textSoft,
  },
  emptyBody: {
    fontSize: '12px',
    color: t.textMuted,
    maxWidth: '280px',
    lineHeight: 1.5,
  },
  emptyAction: {
    marginTop: '8px',
    background: t.cyanSoft,
    border: `1px solid ${t.cyanBorder}`,
    color: t.cyan,
    padding: '7px 18px',
    borderRadius: t.r,
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
    letterSpacing: '0.02em',
    fontFamily: 'inherit',
    transition: 'background 120ms',
  },
  placeholder: {
    padding: '32px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  placeholderLabel: {
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.09em',
    color: t.textMuted,
  },
  placeholderText: {
    fontSize: '13px',
    color: t.textSoft,
    lineHeight: 1.5,
    maxWidth: '480px',
  },
}
