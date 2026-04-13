# Nexus Phase 1 OpenClaw Runtime Integration Spec  
## Responsibility Boundary, Task Handoff Contract, State Synchronization, and Runtime Visibility

**Document ID:** NEXUS-P1-INT-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Define how Nexus and OpenClaw interact in Phase 1, including responsibility boundaries, task handoff rules, returned output structure, state synchronization, approval pauses, failure handling, and runtime visibility expectations  
**Last Updated:** 2026-04-06  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`  
- `Nexus_Phase1_Agent_Roles_and_Responsibilities_v1.md`  
- `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`  
- `Nexus_Phase1_Memory_and_State_Model_v1.md`  
- `Nexus_Phase1_Dashboard_Information_Architecture_v1.md`  
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`  
- `Nexus_Phase1_Workflow2_Business_Operations_Coordination_Spec_v1.md`  
- `Nexus_Phase1_Policy_and_Approval_Types_v1.md`  
- `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`

---

## 1. Purpose

This document defines how Nexus should integrate with OpenClaw in Phase 1.

Its purpose is to ensure that:
- Nexus remains the command and governance layer
- OpenClaw remains the runtime and execution layer
- tasks move between the two layers in a controlled, visible way
- state changes are surfaced clearly
- approvals pause consequential action before the runtime crosses a boundary
- failures, handoffs, and returned outputs are inspectable

This document is the bridge between:
- architecture
- governance
- workflows
- execution

It is where the command-centre design becomes an actual operating relationship.

---

## 2. Core Principle

**Nexus governs. OpenClaw executes.**

In Phase 1, OpenClaw should not behave as an independent governing intelligence.

It may:
- execute
- report
- hand off under governance rules
- return state and outcomes

It should not:
- self-authorize meaningful action
- bypass approval boundaries
- redefine routing logic
- silently mutate important project state

This keeps Phase 1 sovereignty with Nexus while still allowing OpenClaw to serve as the operational machinery.

---

## 3. Integration Objectives

The Nexus ↔ OpenClaw integration should do six things well:

### 3.1 Preserve Responsibility Boundaries
Nexus decides what should happen.
OpenClaw performs what is allowed to happen.

### 3.2 Preserve Visibility
Nexus must be able to show what OpenClaw is doing, what happened, and what changed.

### 3.3 Preserve Runtime Legibility
OpenClaw activity should be understandable enough to debug and govern.

### 3.4 Preserve Approval Control
OpenClaw must stop at approval boundaries when consequence requires it.

### 3.5 Preserve State Continuity
Task state, ownership, stage, and result posture must remain synchronized enough for the dashboard and logs to stay truthful.

### 3.6 Preserve Clean Workflow Flow
Both defined Phase 1 workflows must move through the runtime without losing routing coherence.

---

## 4. Responsibility Boundary

### 4.1 Nexus Responsibilities
Nexus is responsible for:
- task intake
- task classification
- routing decisions
- approval handling
- policy enforcement
- dashboard visibility
- memory governance
- event/run log interpretation
- final coordination state

### 4.2 OpenClaw Responsibilities
OpenClaw is responsible for:
- agent runtime behavior
- bounded task execution
- governed tool use
- specialist task handling
- runtime handoff support
- returning execution results
- surfacing failure or blocked state
- exposing runtime activity back to Nexus

### 4.3 Shared Responsibility Zone
Certain areas are shared, but with clear primary ownership.

#### Shared but Nexus-led
- handoff visibility
- run state display
- approval pause enforcement
- task stage synchronization

#### Shared but OpenClaw-led
- execution progress
- runtime status reporting
- specialist start/completion signaling
- tool-level outcome signaling

---

## 5. Integration Rule

**OpenClaw should never be the hidden truth of the system. Nexus must always be able to surface and explain the runtime.**

That means:
- no important runtime action should be invisible to Nexus
- no important state should live only inside OpenClaw
- handoffs and failures must be surfaced
- returned outputs must be structured enough for governance review

---

## 6. Task Handoff Model

### 6.1 Handoff Direction
The default Phase 1 direction is:

**Nexus → OpenClaw → Nexus**

Nexus sends a governed task into OpenClaw.
OpenClaw executes the bounded phase.
OpenClaw returns state, output, and result posture back to Nexus.

### 6.2 When Nexus Hands Off
Nexus should hand off when:
- classification is complete
- the next responsible role is known
- the task is in an executable state
- no required approval is missing

### 6.3 When OpenClaw Returns
OpenClaw should return when:
- bounded work completes
- a handoff is requested
- a block occurs
- a failure occurs
- approval is required before continuation
- final output for the current bounded phase is ready

---

## 7. Task Handoff Contract

Each task sent from Nexus to OpenClaw should include a clear contract.

### 7.1 Required Handoff Fields
- task ID
- run ID
- workflow type if known
- current task class
- current stage
- current owner target
- task objective
- bounded work request
- relevant constraints
- current confidence state
- approval posture
- expected return format

### 7.2 Strongly Recommended Fields
- originating request summary
- routing reason
- prior stage summary
- related approval ID if any
- related resource ID if any
- next expected milestone
- escalation note if relevant

### 7.3 Rule
The handoff should explain:
- what the runtime is being asked to do
- what it must not do
- how it should report back

---

## 8. Returned Output Contract

Each bounded phase returned from OpenClaw to Nexus should include a structured result.

### 8.1 Required Return Fields
- task ID
- run ID
- acting role
- phase outcome status
- current stage
- output summary
- result content or reference
- next suggested action
- block/failure state if any

### 8.2 Strongly Recommended Fields
- confidence posture
- handoff request if needed
- approval-needed flag
- tool activity summary if relevant
- unresolved uncertainty
- storage recommendation if relevant
- event summary list for the completed phase

### 8.3 Rule
Returned output must be readable enough that Nexus can:
- display it
- log it
- review it
- decide what happens next

---

## 9. Runtime State Synchronization

### 9.1 Purpose
Nexus and OpenClaw do not need to duplicate every internal detail, but they do need enough shared state to keep the system truthful.

### 9.2 State That Must Stay Visible to Nexus
At minimum, Nexus should always be able to surface:
- current task ID
- current run ID
- current workflow type
- current owner
- current stage
- current status
- confidence state
- approval posture
- last major event
- next expected action

### 9.3 State That May Remain Runtime-Local
OpenClaw may maintain deeper runtime-local details that do not all need to be surfaced live, such as:
- transient internal execution notes
- low-level step progress
- internal tool scaffolding
- temporary intermediate reasoning artifacts

### 9.4 Rule
If a runtime-local detail changes:
- task direction
- approval posture
- ownership
- visible outcome
- policy relevance

then it must be surfaced back to Nexus.

---

## 10. Handoffs Between Roles Inside OpenClaw

### 10.1 Allowed
OpenClaw may support specialist transitions when:
- the route was already defined by Nexus
- the handoff remains within the governed workflow
- the handoff is surfaced as a visible event

### 10.2 Not Allowed by Default
OpenClaw should not:
- create uncontrolled role drift
- self-authorize cross-domain expansion
- spawn new workflow branches without governance
- bypass the Conductor’s route coherence

### 10.3 Rule
A runtime handoff must be either:
- pre-authorized by route logic
- surfaced as a handoff request back to Nexus

---

## 11. Approval Pause Behavior

### 11.1 Core Rule
If execution reaches a consequence boundary that requires approval, OpenClaw must stop and return control to Nexus.

### 11.2 OpenClaw Must Pause When
- an action requires approval and approval is not present
- policy marks the next action as sensitive
- the action is destructive or irreversible
- the next action would cross from planning into consequential execution
- configuration or business impact is involved

### 11.3 Return Payload for Approval Pause
When pausing for approval, OpenClaw should return:
- task ID
- run ID
- current stage
- proposed action
- reason approval is needed
- relevant category or consequence posture
- requesting role
- expected consequence
- next state if approved

### 11.4 Rule
Approval pauses are a success condition, not a failure condition.

They prove governance is working.

---

## 12. Failure and Block Handling

### 12.1 Purpose
Failure should never become invisible runtime silence.

### 12.2 Failure Types to Surface
Examples include:
- tool failure
- permission failure
- unresolved ambiguity
- missing approval
- missing input
- role boundary violation
- runtime execution error

### 12.3 Block Return Payload
When blocked or failed, OpenClaw should return:
- task ID
- run ID
- current stage
- acting role
- failure or block type
- failure summary
- what was attempted
- whether retry is possible
- whether escalation is required
- recommended next action

### 12.4 Rule
A blocked runtime is still part of the governed system.
It must remain explainable.

---

## 13. Event and Run Log Integration

### 13.1 Purpose
OpenClaw must speak in a way the Nexus event/run log can understand.

### 13.2 Runtime Events That Must Map Clearly
OpenClaw activity should map cleanly into the existing canonical event model, including:
- `task_routed`
- `specialist_started`
- `specialist_completed`
- `specialist_blocked`
- `specialist_failed`
- `approval_requested`
- `executor_started`
- `executor_completed`
- `executor_failed`
- `executor_blocked`
- `task_completed`

### 13.3 Rule
OpenClaw may use its own internal mechanics, but the external trace presented to Nexus must align with the Phase 1 canonical event grammar.

---

## 14. Dashboard Visibility Expectations

### 14.1 Governance Overview
Nexus should surface from OpenClaw:
- active runtime tasks
- blocked tasks
- approval pauses
- recent completions
- active owner summary

### 14.2 Active Tasks View
Nexus should surface from OpenClaw:
- current owner
- current stage
- last runtime update
- confidence posture
- next expected action

### 14.3 Task Detail View
Nexus should surface from OpenClaw:
- returned phase summaries
- handoff path
- runtime failures or pauses
- tool activity summary if relevant
- result content or references

### 14.4 Trace / Run History
Nexus should be able to represent OpenClaw activity as ordered canonical events, not just opaque runtime blobs.

---

## 15. Workflow Support Requirements

### 15.1 Research Coordination
OpenClaw must be able to support:
- Research Specialist bounded execution
- Writing and Structuring bounded execution
- optional Memory and Resource Support stage
- clean return between stages
- low-risk structured output handling

### 15.2 Business and Operations Coordination
OpenClaw must be able to support:
- Business and Operations Specialist bounded execution
- optional Research Specialist support
- Writing and Structuring bounded execution
- approval pause before consequential action
- optional Executor action if approved

### 15.3 Rule
OpenClaw should support the workflow spine already defined.
It should not invent a new one.

---

## 16. Runtime Output Quality Standard

A good OpenClaw return should be:

- bounded
- readable
- attributable
- stage-aware
- policy-aware
- ready for dashboard surfacing

A poor return would be:
- vague
- unstructured
- unclear about what changed
- unclear about what happens next
- impossible to map into events

---

## 17. Minimal Integration Message Shapes

These are conceptual message shapes for Phase 1 design clarity.

### 17.1 Nexus → OpenClaw
- task_id
- run_id
- workflow_type
- task_class
- stage
- target_role
- objective
- bounded_request
- constraints
- confidence_state
- approval_posture
- expected_return_format

### 17.2 OpenClaw → Nexus
- task_id
- run_id
- acting_role
- phase_status
- stage
- output_summary
- result_reference_or_content
- next_suggested_action
- approval_needed
- failure_or_block_reason
- event_summaries

These are not implementation-enforced schemas yet.
They are Phase 1 operating contracts.

---

## 18. What OpenClaw Must Never Do in Phase 1

To preserve Phase 1 coherence, OpenClaw must not:

- self-authorize consequential action
- bypass Nexus approval boundaries
- mutate durable project meaning silently
- hide runtime failure
- conceal specialist handoffs
- redefine workflow structure on its own
- act as the primary governing layer
- become the only place where truth about task state exists

---

## 19. Success Criteria

The Nexus ↔ OpenClaw runtime integration is working correctly when:

- Nexus can send bounded tasks into OpenClaw clearly
- OpenClaw can return readable outputs cleanly
- current owner and stage remain visible
- approvals pause consequential runtime action correctly
- failures and blocks are surfaced rather than hidden
- handoffs remain governed
- dashboard views stay truthful
- both Phase 1 workflows can operate through the runtime without structural confusion

---

## 20. Failure Modes to Avoid

To preserve the architecture, avoid:

- blurred responsibility between command and runtime
- OpenClaw becoming a hidden second control centre
- missing or vague return payloads
- approvals being checked too late
- failure only being visible in runtime internals
- handoff drift without governance visibility
- runtime truth diverging from dashboard truth
- treating integration as only a technical transport problem

---

## 21. Closing Principle

OpenClaw should make Nexus operational, not replace Nexus as the seat of control.

A strong Phase 1 integration does not blur the layers.
It makes their relationship clean, visible, and trustworthy.

---

## 22. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#openclaw`  
`#runtime`  
`#integration`  
`#governance`  
`#handoff`
