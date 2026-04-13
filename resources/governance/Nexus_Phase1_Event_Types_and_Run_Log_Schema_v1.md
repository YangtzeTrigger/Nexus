# Nexus Phase 1 Event Types and Run Log Schema  
## Canonical Events, Run Structure, Required Fields, and Trace Visibility Rules

**Document ID:** NEXUS-P1-LOG-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Define the Phase 1 event model and run log schema for Nexus, including canonical event types, required event fields, run grouping, approval and executor event handling, and dashboard trace visibility rules  
**Last Updated:** 2026-04-05  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`  
- `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`  
- `Nexus_Phase1_Memory_and_State_Model_v1.md`  
- `Nexus_Phase1_Dashboard_Information_Architecture_v1.md`  
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`  
- `Nexus_Phase1_Workflow2_Business_Operations_Coordination_Spec_v1.md`  
- `Nexus_Phase1_Policy_and_Approval_Types_v1.md`

---

## 1. Purpose

This document defines how Nexus should represent runs and events in Phase 1.

Its purpose is to ensure that:
- task history is reconstructable
- routing and approvals are visible
- role activity uses a shared event language
- workflows produce readable traces
- dashboard views can rely on consistent event data
- the Event Log remains structured rather than improvised

This is the document that gives Phase 1 a **common trace grammar**.

---

## 2. Core Principle

**If a meaningful thing happened, the system should be able to describe it with a clear event.**

That means Phase 1 logging should avoid:
- vague free-text-only history
- inconsistent naming
- hidden transitions
- after-the-fact reconstruction guesswork

The run log should answer:
- what happened
- when it happened
- who or what caused it
- what changed
- what should happen next

---

## 3. Trace Objectives

The Phase 1 run log should do five things well:

### 3.1 Preserve Workflow History
Record how a task moved from intake to completion.

### 3.2 Preserve Governance Visibility
Show classification, routing, escalation, and approval transitions clearly.

### 3.3 Preserve Execution Visibility
Show when action was attempted, completed, blocked, or failed.

### 3.4 Support Dashboard Rendering
Feed the Trace / Run History, Task Detail, Approvals, and Governance Overview views.

### 3.5 Support Review and Debugging
Make it possible to inspect runs later without guessing.

---

## 4. What Counts as a Run

### 4.1 Definition
A **run** is the complete bounded lifecycle of a task instance as it moves through the Nexus system.

A run begins when:
- a task is created and accepted into the system

A run ends when:
- the task is completed
- the task is cancelled
- the task is closed without action
- the task is archived as intentionally paused or abandoned

### 4.2 Run Identity
Each run should have a stable **run ID**.

A task may have:
- one run in simple cases
- multiple runs over time if the task is restarted or re-entered later

### 4.3 Rule
A run is broader than a single event and narrower than the entire project history.

---

## 5. What Counts as an Event

### 5.1 Definition
An **event** is a meaningful recorded occurrence within a run.

An event should represent:
- a state change
- a routing decision
- a role transition
- an approval transition
- an executor transition
- a storage transition
- a pause, block, or failure
- a completion or closure

### 5.2 Rule
If the event does not help explain what changed, it probably should not exist as a distinct canonical event type.

---

## 6. Run Structure

Each run should contain:

- run ID
- task ID
- workflow type if known
- originating request summary
- created timestamp
- current status
- current owner
- current stage
- current confidence state
- approval posture
- linked approval IDs if any
- linked resource IDs if any
- ordered event list

This structure supports both:
- live inspection
- later reconstruction

---

## 7. Event Record Schema

Each event record should include the following minimum fields.

### 7.1 Required Fields
- event ID
- event type
- timestamp
- run ID
- task ID
- actor type
- actor name or role
- event summary
- current stage
- resulting status

### 7.2 Strongly Recommended Fields
- previous status
- current owner
- previous owner if changed
- confidence state
- approval ID if relevant
- resource ID if relevant
- related task class
- related workflow type
- next expected action
- notes or rationale

### 7.3 Optional Fields
- tool name if executor/tool use is involved
- error code if failure occurred
- storage class if promotion occurred
- consequence level if approval/policy is involved
- route reason if routing changed materially

---

## 8. Actor Types

To keep event history readable, actor types should be standardized.

### Suggested Actor Types
- system
- conductor
- specialist
- executor
- approval_surface
- memory_support
- user

### Suggested Rule
Actor type explains the broad source of the event.
Actor name explains the specific role or identity.

Examples:
- actor type: conductor / actor name: Conductor
- actor type: specialist / actor name: Research Specialist
- actor type: executor / actor name: Executor Layer

---

## 9. Canonical Event Families

Phase 1 should group events into a small number of readable families.

### 9.1 Task Lifecycle Events
Events that define the overall lifecycle of a task.

### 9.2 Governance Events
Events that define classification, routing, escalation, and approval posture.

### 9.3 Specialist Work Events
Events that show specialist entry, completion, or interruption.

### 9.4 Executor Events
Events that show governed action attempts and outcomes.

### 9.5 Storage and Memory Events
Events that show promotion, resource creation, or durable storage decisions.

### 9.6 Terminal Events
Events that close the run.

---

## 10. Canonical Event Types

The following event types are recommended for Phase 1.

## 10.1 Task Lifecycle
- `task_created`
- `task_paused`
- `task_resumed`
- `task_cancelled`
- `task_completed`
- `task_closed_without_action`

## 10.2 Classification and Routing
- `task_classified`
- `task_reclassified`
- `task_routed`
- `task_escalated`
- `task_deescalated`

## 10.3 Specialist Activity
- `specialist_started`
- `specialist_completed`
- `specialist_blocked`
- `specialist_failed`
- `specialist_handoff_requested`

## 10.4 Approval Activity
- `approval_requested`
- `approval_granted`
- `approval_rejected`
- `approval_revised`
- `approval_cancelled`
- `approval_expired`
- `approval_executed`

## 10.5 Executor Activity
- `executor_started`
- `executor_completed`
- `executor_failed`
- `executor_blocked`

## 10.6 Storage and Memory
- `resource_created`
- `resource_updated`
- `memory_promoted`
- `memory_update_requested`
- `memory_update_confirmed`

## 10.7 Informational or State Transitions
- `owner_changed`
- `stage_changed`
- `confidence_changed`
- `next_action_changed`

These are enough for Phase 1 without creating excessive trace complexity.

---

## 11. Event Definitions and Intent

### 11.1 `task_created`
Use when a task enters the system and a run begins.

### 11.2 `task_classified`
Use when the Conductor assigns the first task class.

### 11.3 `task_reclassified`
Use when the task class changes materially after deeper understanding.

### 11.4 `task_routed`
Use when the task is intentionally handed to a role or path.

### 11.5 `task_escalated`
Use when the task moves into a more sensitive, complex, or cross-domain posture.

### 11.6 `specialist_started`
Use when a named specialist begins active work on the task.

### 11.7 `specialist_completed`
Use when a named specialist finishes its bounded work phase.

### 11.8 `approval_requested`
Use when the workflow reaches an approval boundary and a formal approval item is created.

### 11.9 `approval_granted`
Use when the approval is accepted and action may proceed.

### 11.10 `approval_rejected`
Use when the approval is denied and action may not proceed.

### 11.11 `executor_started`
Use when a governed action begins.

### 11.12 `executor_completed`
Use when the governed action finishes successfully.

### 11.13 `executor_failed`
Use when the governed action fails after beginning.

### 11.14 `executor_blocked`
Use when the action could not begin because policy, permission, or state blocked it.

### 11.15 `resource_created`
Use when a durable artifact is intentionally created.

### 11.16 `memory_promoted`
Use when information is intentionally moved from temporary or intermediate state into a durable class.

### 11.17 `task_completed`
Use when the workflow reaches a clean final state and the run ends successfully.

---

## 12. Stage and Status Conventions

To keep logs and dashboard views aligned, stages and statuses should be readable and consistent.

### Suggested Stage Values
- intake
- classification
- routing
- specialist_work
- review
- approval
- execution
- storage
- completion
- paused

### Suggested Status Values
- active
- paused
- blocked
- approval_pending
- completed
- failed
- cancelled
- closed_without_action

### Rule
Stage describes where the task is.
Status describes how the task currently stands.

---

## 13. Minimal Run Header Example

A simple Phase 1 run header might contain:

- run ID: `RUN-0001`
- task ID: `TASK-0001`
- workflow type: `research_coordination`
- current status: `active`
- current stage: `specialist_work`
- current owner: `Research Specialist`
- confidence state: `guided`
- approval posture: `not_required`
- created at: timestamp
- last event at: timestamp

This is enough to power task list and trace summary views.

---

## 14. Minimal Event Example

A simple event record might contain:

- event ID: `EVT-0007`
- event type: `task_routed`
- timestamp: ISO datetime
- run ID: `RUN-0001`
- task ID: `TASK-0001`
- actor type: `conductor`
- actor name: `Conductor`
- event summary: `Task routed to Research Specialist`
- previous status: `active`
- resulting status: `active`
- current stage: `specialist_work`
- current owner: `Research Specialist`
- next expected action: `Research Specialist begins bounded research phase`

---

## 15. Approval Event Requirements

Approval-related events should include extra fields where relevant.

### For `approval_requested`
Include:
- approval ID
- approval category
- consequence level
- proposed action
- requesting role
- expected consequence
- current approval state

### For `approval_granted` / `approval_rejected` / `approval_revised`
Include:
- approval ID
- decision state
- resulting next action
- whether executor action is now permitted
- note or rationale if available

This keeps approvals inspectable in both task view and run history.

---

## 16. Executor Event Requirements

Executor events should include extra fields where relevant.

### For `executor_started`
Include:
- executor action name
- permission state
- related approval ID if required
- expected result

### For `executor_completed`
Include:
- action performed
- completion outcome
- artifact created or changed if relevant
- next action

### For `executor_failed` / `executor_blocked`
Include:
- action attempted
- reason for failure or block
- whether retry is possible
- whether escalation is required

This prevents the action layer from becoming opaque.

---

## 17. Storage and Memory Event Requirements

Storage-related events should include extra fields where relevant.

### For `resource_created`
Include:
- resource title
- resource type
- storage class
- linked workflow or task

### For `memory_promoted`
Include:
- source class
- target class
- reason for promotion
- whether confirmation was required
- resulting durable reference if created

This keeps memory promotion visible instead of silent.

---

## 18. Ordering Rules

### 18.1 Events Must Be Time-Ordered
Runs should preserve event order by timestamp.

### 18.2 Major Events Must Not Be Hidden
Classification, routing, approvals, executor activity, and terminal events should always appear in the ordered run history.

### 18.3 Collapsible Detail Is Allowed
Dashboard views may collapse minor details, but the underlying event order must remain reconstructable.

---

## 19. Dashboard Consumption Rules

The dashboard architecture should draw from the same run log schema.

### Governance Overview Should Use
- current run status
- active escalations
- approval-pending counts
- recent major events

### Active Tasks Should Use
- run header fields
- current stage
- current owner
- confidence state
- next expected action

### Task Detail Should Use
- full ordered event history
- routing and approval events
- related resource events

### Trace / Run History Should Use
- run summaries
- event sequence
- filters by event type, role, or status

This prevents the UI from inventing a second inconsistent history model.

---

## 20. Filters and Queryability

For Phase 1, the run log should ideally support filtering by:

- run ID
- task ID
- workflow type
- event type
- actor type
- actor name
- status
- stage
- approval ID
- time range

Even if Phase 1 does not expose every filter immediately in the UI, designing for them now improves legibility later.

---

## 21. Failure Modes to Avoid

To preserve coherence, avoid:

- inconsistent event names
- free-text-only logs with no canonical types
- logging everything as one generic “update”
- failing to log approvals distinctly
- losing owner or stage changes
- allowing executor actions without matching trace events
- treating run history as optional
- mixing durable memory with event history

---

## 22. Success Criteria

The event model and run log schema are working correctly when:

- runs can be reconstructed clearly
- routing and approvals are visible
- dashboard views can rely on consistent fields
- executor behavior is inspectable
- storage promotion is visible
- logs feel structured rather than noisy
- the same schema supports both workflows cleanly

---

## 23. Closing Principle

A good log does not merely record noise.

It records the transitions that make the system understandable.

Nexus Phase 1 should use its run log to make governance visible, not just to keep a pile of timestamps.

---

## 24. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#event-log`  
`#run-history`  
`#trace`  
`#schema`  
`#openclaw`
