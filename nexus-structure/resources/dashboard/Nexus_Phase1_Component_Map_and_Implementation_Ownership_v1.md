# Nexus Phase 1 Component Map and Implementation Ownership  
## Component Roles, Data Dependencies, Boundaries, and Build Responsibility Across Shell, Governance, Runtime, and Trace

**Document ID:** NEXUS-P1-COMP-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Define the Phase 1 component map for Nexus, including the first implementation components, what each consumes, what each emits, where each belongs in the stack, and which parts are shell-facing, governance-facing, state-facing, runtime-facing, or integration-facing  
**Last Updated:** 2026-04-06  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`  
- `Nexus_Phase1_Dashboard_Information_Architecture_v1.md`  
- `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`  
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`  
- `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`  
- `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md`  
- `Nexus_Phase1_UI_Field_Binding_and_Data_Contract_v1.md`  
- `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`  
- `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`

---

## 1. Purpose

This document defines the Phase 1 component map for Nexus.

Its purpose is to ensure that:
- implementation work is divided into clear parts
- the dashboard shell is not confused with governance logic
- state handling is not confused with rendering
- runtime integration is not confused with UI interaction
- each component has a clear responsibility
- the first sprint can be built as connected parts rather than a tangle

This document is the implementation-facing companion to the architecture and sprint plan.

---

## 2. Core Principle

**A component should own one kind of responsibility clearly.**

Phase 1 should avoid components that try to be:
- UI and governance at once
- routing and runtime at once
- event store and renderer at once
- approval controller and executor at once

A useful rule is:

**Renderers show. Coordinators decide. Stores preserve. Integrations translate. Runtime executes.**

---

## 3. Component Map Objectives

The Phase 1 component map should do six things well:

### 3.1 Preserve Layer Clarity
The command shell, governance layer, state layer, trace layer, and runtime integration layer should remain distinguishable.

### 3.2 Preserve Build Order
The first sprint should know what to build first, second, and later.

### 3.3 Preserve Ownership
Each component should have a clear responsibility boundary.

### 3.4 Preserve Interface Contracts
Each component should know what data it consumes and what it emits.

### 3.5 Preserve Phase 1 Scope Discipline
The map should support the minimum slice rather than pushing the build into premature breadth.

### 3.6 Preserve Expansion Readiness
Later growth should extend component boundaries rather than rewrite them.

---

## 4. Phase 1 Layer Model

A practical Phase 1 layer model is:

1. **Shell Layer**
2. **View / Presentation Layer**
3. **State Layer**
4. **Governance Layer**
5. **Trace / Log Layer**
6. **Approval Layer**
7. **Resource / Output Layer**
8. **Runtime Integration Layer**
9. **OpenClaw Runtime Layer**

These layers do not need to be physically separate services in Phase 1, but they should remain conceptually distinct.

---

## 5. Primary Component Groups

The first working component groups should be:

### Shell and Navigation
- App Shell
- Top Bar
- Primary Navigation

### Task and Governance Views
- Governance Overview Panel
- Active Task List
- Task Detail View
- Task Intake Form

### Trace and Approval Views
- Trace / Run History Panel
- Approval Banner or Approval Panel

### State and Coordination
- Task State Store
- Run/Event Store
- Approval State Store
- Resource Metadata Store (minimal)

### Governance Controllers
- Conductor Controller
- Task Classifier
- Routing Controller
- Approval Gate Controller

### Runtime Integration
- OpenClaw Handoff Adapter
- OpenClaw Return Translator

### Output Handling
- Output Save Handler
- Resource Index Updater (minimal)

This is enough for Phase 1 minimum-slice implementation.

---

## 6. Component Classification by Ownership Type

Each component can be thought of as belonging mainly to one ownership type:

### Shell-Facing
Components responsible for layout and navigation.

### View-Facing
Components responsible for rendering state in the UI.

### State-Facing
Components responsible for storing canonical task/run/approval/resource state.

### Governance-Facing
Components responsible for classification, routing, escalation, and approval control.

### Integration-Facing
Components responsible for translating between Nexus state and OpenClaw contracts.

### Runtime-Facing
Components inside or directly adjacent to OpenClaw execution responsibilities.

### Resource-Facing
Components responsible for durable output creation and metadata updates.

This classification helps avoid blurred responsibilities.

---

## 7. Core Component Inventory

## 7.1 App Shell

### Type
Shell-Facing

### Purpose
Provides the outer frame of the Nexus command centre.

### Responsibilities
- render top bar
- render primary navigation
- define main content zones
- define right-side context area or trace rail
- host the main routed views

### Consumes
- current route or selected section
- system summary data
- selected task context if used globally

### Emits
- navigation changes
- section selection events

### Does Not Own
- classification logic
- task state truth
- runtime integration

---

## 7.2 Top Bar

### Type
View-Facing / Shell-Facing

### Purpose
Show immediate system posture.

### Responsibilities
- render active task count
- render pending approval count
- render system health state
- render title and phase indicator if used

### Consumes
From system summary:
- active_task_count
- approval_pending_count
- system_health_state

### Emits
- optional search/open actions
- optional global quick actions

### Does Not Own
- the logic that computes counts

---

## 7.3 Primary Navigation

### Type
Shell-Facing

### Purpose
Allow movement between major operational views.

### Responsibilities
- show available sections
- manage selected section state
- visually reinforce the command-centre structure

### Consumes
- section configuration
- optional unread/pending indicators

### Emits
- view switch events

---

## 7.4 Governance Overview Panel

### Type
View-Facing

### Purpose
Show broad operational posture at a glance.

### Responsibilities
- display summary cards
- show current task focus
- surface pending approvals and blocked items
- surface recent notable activity

### Consumes
From system summary and selected task:
- active_task_count
- approval_pending_count
- blocked_task_count
- recent activity summary
- selected task posture

### Emits
- optional task selection action
- optional quick jump to approvals or trace

### Does Not Own
- aggregate computation logic

---

## 7.5 Task Intake Form

### Type
View-Facing

### Purpose
Collect the initial user or system task request.

### Responsibilities
- accept task description
- accept optional objective/constraints
- submit initial task creation request
- remain minimal and low-friction in Phase 1

### Consumes
- optional default workflow hints
- form validation rules

### Emits
- task creation request

### Does Not Own
- task IDs
- classification
- routing

---

## 7.6 Active Task List

### Type
View-Facing

### Purpose
Show all visible active tasks in operational order.

### Responsibilities
- render task rows
- show owner/stage/status/confidence
- allow selection of task detail
- visually prioritize blocked and approval-pending tasks

### Consumes
From task objects:
- task_id
- task_title
- task_class
- current_owner
- current_stage
- current_status
- confidence_state
- approval_posture
- next_expected_action
- updated_at

### Emits
- selected task ID

### Does Not Own
- sorting rules beyond UI-presented sort configuration
- canonical task state

---

## 7.7 Task Detail View

### Type
View-Facing

### Purpose
Make one task fully inspectable.

### Responsibilities
- show task summary
- show routing/classification context
- show event timeline
- show output summary
- show related approval/resource references

### Consumes
From task + run + linked objects:
- task summary fields
- current owner/stage/status
- event list
- output state
- storage state
- linked approvals
- linked resources

### Emits
- save-output action
- approval-view action
- retry/review action if allowed

### Does Not Own
- event generation
- approval decisions
- runtime translation

---

## 7.8 Trace / Run History Panel

### Type
View-Facing

### Purpose
Show the ordered history of what happened.

### Responsibilities
- render run summaries
- render event sequences
- support simple filtering or selection
- make task history reconstructable

### Consumes
From run objects:
- run_id
- workflow_type
- current_status
- current_stage
- current_owner
- event_list
- terminal_state

### Emits
- selected run ID
- selected event context if needed

### Does Not Own
- event schema
- event writing

---

## 7.9 Approval Banner / Approval Panel

### Type
View-Facing

### Purpose
Show when a task is paused or blocked for approval.

### Responsibilities
- show current approval posture
- show proposed action summary
- offer approve / reject / revise controls in simple form
- visually block or warn when progression is not allowed

### Consumes
From task + approval item:
- approval_posture
- current_status
- proposed_action
- category
- consequence_level
- current approval item state

### Emits
- approve action
- reject action
- revise action

### Does Not Own
- policy determination logic
- executor gating logic

---

## 7.10 Task State Store

### Type
State-Facing

### Purpose
Hold canonical task objects for the shell.

### Responsibilities
- store current task state
- update task fields from governance and runtime actions
- expose task collections to UI
- support selected task lookup

### Consumes
- task creation requests
- governance decisions
- runtime return translations
- approval results
- resource save outcomes

### Emits
- updated task state to views
- changes that affect system summary aggregation

### Does Not Own
- low-level runtime execution
- UI layout

---

## 7.11 Run/Event Store

### Type
State-Facing / Trace-Facing

### Purpose
Hold canonical run objects and ordered event lists.

### Responsibilities
- create runs
- append canonical events
- store event history
- expose run summaries and full histories
- support task-to-run linkage

### Consumes
- task creation
- classification/routing changes
- runtime return events
- approval events
- output save events
- completion/closure events

### Emits
- run data to trace views
- recent event aggregates to overview

### Does Not Own
- event generation decisions themselves

---

## 7.12 Approval State Store

### Type
State-Facing / Approval-Facing

### Purpose
Hold approval items and their states.

### Responsibilities
- create approval items
- update approval state
- expose pending approvals
- link approvals to tasks and runs

### Consumes
- approval requests from governance layer
- approve/reject/revise actions
- executor completion state when relevant

### Emits
- approval objects to UI
- approval posture updates to task store

### Does Not Own
- deciding whether approval is required in the first place

---

## 7.13 Resource Metadata Store

### Type
State-Facing / Resource-Facing

### Purpose
Track saved outputs and reusable resource metadata.

### Responsibilities
- register saved outputs
- store metadata such as title, version, type, linked task/run
- expose resource summaries to views

### Consumes
- output save events
- resource creation results

### Emits
- linked resource references to task detail
- recent resource data to resource views

### Does Not Own
- full file editing
- runtime execution

---

## 7.14 Conductor Controller

### Type
Governance-Facing

### Purpose
Act as the first receiver and route owner.

### Responsibilities
- accept incoming task requests
- initiate classification
- decide route path
- review returned specialist phases
- decide next action
- surface approval when needed

### Consumes
- task intake payload
- current task state
- route rules
- runtime returns
- policy rules

### Emits
- task classification results
- routing decisions
- approval requests
- completion decisions
- event-worthy state transitions

### Does Not Own
- UI rendering
- direct runtime execution

---

## 7.15 Task Classifier

### Type
Governance-Facing

### Purpose
Assign the initial task class and optionally update it if reclassification is required.

### Responsibilities
- determine Class A / B / C / D / E posture
- assign default confidence posture
- indicate whether ambiguity blocks routing

### Consumes
- task request text
- objective/constraints
- policy hints if relevant

### Emits
- task_class
- confidence_state
- classification rationale
- possible pause/escalation signal

### Does Not Own
- final routing across the whole workflow unless bundled into Conductor logic in early implementation

---

## 7.16 Routing Controller

### Type
Governance-Facing

### Purpose
Choose the next responsible role and bounded path.

### Responsibilities
- map task type to next owner
- determine sequential specialist path
- keep cross-domain tasks bounded
- return control to Conductor when needed

### Consumes
- task_class
- workflow_type
- current stage
- specialist route rules
- runtime return posture

### Emits
- next owner
- next stage
- task_routed event intent
- handoff contract payload seed

### Does Not Own
- raw execution
- UI selection state

---

## 7.17 Approval Gate Controller

### Type
Governance-Facing / Approval-Facing

### Purpose
Determine whether progression must stop at an approval boundary.

### Responsibilities
- check proposed next action against approval rules
- create approval request when needed
- set approval posture
- block executor continuation until approval resolves

### Consumes
- current task posture
- proposed next action
- policy categories and consequence rules

### Emits
- approval request
- task status/posture updates
- approval-related events

### Does Not Own
- final user decision
- runtime execution itself

---

## 7.18 OpenClaw Handoff Adapter

### Type
Integration-Facing

### Purpose
Translate Nexus governance decisions into a runtime handoff contract for OpenClaw.

### Responsibilities
- build outbound handoff payload
- include task/run/role/stage/objective fields
- preserve approval posture and constraints
- send bounded request into runtime layer

### Consumes
- current task state
- current run state
- target role
- bounded work request

### Emits
- outbound runtime contract

### Does Not Own
- deciding where to send the task
- UI state management

---

## 7.19 OpenClaw Return Translator

### Type
Integration-Facing

### Purpose
Translate OpenClaw runtime returns into canonical Nexus state and events.

### Responsibilities
- map acting_role to owner context
- map phase_status to task/run status
- map event summaries into canonical event records
- surface output summary
- surface approval-needed or block signals

### Consumes
- runtime return payload

### Emits
- task state updates
- run/event additions
- approval posture changes
- output summary updates

### Does Not Own
- rendering
- final governance review after return

---

## 7.20 Output Save Handler

### Type
Resource-Facing

### Purpose
Turn a final output into a deliberate saved artifact.

### Responsibilities
- receive save request
- generate resource metadata
- persist file or content reference
- update storage state
- optionally emit resource_created event

### Consumes
- selected task output
- save intent
- naming/version rules

### Emits
- resource metadata object
- storage state update
- resource creation event

### Does Not Own
- deciding whether the output should exist at all

---

## 7.21 Resource Index Updater

### Type
Resource-Facing

### Purpose
Keep saved outputs discoverable in the resource layer.

### Responsibilities
- register new resource in list/index
- link resource to task/run
- expose recent resource summary

### Consumes
- resource metadata creation output

### Emits
- updated resource index state

---

## 8. Minimum Slice Component Set

The absolute minimum buildable set is:

### Required
- App Shell
- Top Bar
- Primary Navigation
- Task Intake Form
- Active Task List
- Task Detail View
- Trace / Run History Panel
- Task State Store
- Run/Event Store
- Conductor Controller
- Task Classifier
- Routing Controller
- OpenClaw Handoff Adapter
- OpenClaw Return Translator
- Output Save Handler

### Strongly Recommended Early
- Approval Banner / Approval Panel
- Approval Gate Controller
- Approval State Store
- Resource Metadata Store

### Deferred
- full Agent Status View
- full Resource Browser
- Workflow View
- rich Approval Detail View
- Business and Operations runtime components

This keeps the first sprint focused.

---

## 9. Component Ownership by Folder / Layer

A practical early mapping is:

### `frontend/`
- App Shell
- Top Bar
- Primary Navigation
- Governance Overview Panel
- Active Task List
- Task Detail View
- Trace / Run History Panel
- Approval Banner / Panel
- Task Intake Form

### `backend/` or shared state layer
- Task State Store
- Run/Event Store
- Approval State Store
- Resource Metadata Store
- derived System Summary logic

### `integrations/`
- OpenClaw Handoff Adapter
- OpenClaw Return Translator

### `runtime/`
- OpenClaw-facing runtime support materials
- role execution adapters if needed

### `resources/`
- the governed design documents that define these components

This is a conceptual mapping, not a forced implementation technology choice.

---

## 10. Input / Output Responsibility Rules

To keep implementation clean:

### View Components
Consume canonical state.
Emit user actions.

### State Stores
Consume validated updates.
Emit current state for rendering.

### Governance Controllers
Consume task context and rules.
Emit decisions and state transitions.

### Integration Adapters
Consume canonical Nexus instructions or runtime returns.
Emit translated contracts or translated updates.

### Runtime Layer
Consume bounded execution requests.
Emit bounded execution results.

### Resource Components
Consume final output save actions.
Emit durable metadata/state updates.

---

## 11. Cross-Component Flow

A useful Phase 1 flow looks like this:

**Task Intake Form → Conductor Controller → Task Classifier → Routing Controller → OpenClaw Handoff Adapter → OpenClaw Runtime → OpenClaw Return Translator → Task State Store + Run/Event Store → Task Detail View / Trace Panel**

Optional extension:

**… → Approval Gate Controller → Approval State Store / Approval Panel → resume or block**

Optional save path:

**… → Output Save Handler → Resource Metadata Store → Task Detail / Resource View**

This flow expresses the architecture in implementation terms.

---

## 12. Derived vs Owned Logic

To prevent duplication:

### Components That Own Logic
- Conductor Controller
- Task Classifier
- Routing Controller
- Approval Gate Controller
- OpenClaw Return Translator

### Components That Should Mostly Render
- Top Bar
- Governance Overview Panel
- Active Task List
- Task Detail View
- Trace / Run History Panel
- Approval Panel

### Components That Should Mostly Store
- Task State Store
- Run/Event Store
- Approval State Store
- Resource Metadata Store

### Rule
A rendering component should not quietly become a second governance engine.

---

## 13. First-Sprint Build Sequence by Component

A practical component build order is:

1. App Shell  
2. Top Bar + Primary Navigation  
3. Task Intake Form  
4. Task State Store  
5. Conductor Controller  
6. Task Classifier  
7. Active Task List  
8. Task Detail View  
9. Run/Event Store  
10. Trace / Run History Panel  
11. Routing Controller  
12. OpenClaw Handoff Adapter  
13. OpenClaw Return Translator  
14. Output Save Handler  
15. Approval Gate Controller + Approval Banner

This keeps visible progress aligned with logic growth.

---

## 14. Component Dependency Notes

### Task Detail View Depends On
- Task State Store
- Run/Event Store
- optional Approval/Resource stores

### Governance Overview Depends On
- System Summary aggregates
- selected task state
- recent run/event summaries

### OpenClaw Return Translator Depends On
- a stable runtime return contract
- canonical task/run field definitions

### Approval Banner Depends On
- Approval Gate Controller
- Approval State Store
- task approval posture updates

### Output Save Handler Depends On
- final output existing in task state
- naming/version rules
- basic resource metadata support

---

## 15. Ownership Mistakes to Avoid

To preserve Phase 1 coherence, avoid:

- putting routing logic inside UI components
- putting view formatting logic inside runtime adapters
- letting the runtime define canonical Nexus state by itself
- allowing event stores to invent field meanings
- letting the approval panel decide policy rules
- burying resource creation inside unrelated task rendering code
- treating one large controller as the owner of everything

---

## 16. Success Criteria

The component map is working correctly when:

- each component has a readable job
- components consume and emit predictable data
- the first sprint can be divided into tangible build parts
- the UI is not coupled blindly to runtime payloads
- governance logic is not scattered across the shell
- stores preserve canonical truth cleanly
- integration remains a bridge, not a hidden second architecture

---

## 17. Closing Principle

Good implementation structure is a form of governance.

If Nexus Phase 1 is meant to be coherent, then its components should already reflect that coherence before the system becomes large.

Phase 1 does not need many components.
It needs the right ones, with the right boundaries.

---

## 18. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#components`  
`#implementation`  
`#ownership`  
`#architecture`  
`#openclaw`
