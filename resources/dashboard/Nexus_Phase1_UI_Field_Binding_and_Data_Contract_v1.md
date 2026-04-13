# Nexus Phase 1 UI Field Binding and Data Contract  
## View-Level Field Mapping, Derived States, Editable Inputs, and Runtime-to-UI Translation Rules

**Document ID:** NEXUS-P1-UI-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Define how Phase 1 Nexus UI views bind to canonical task, run, approval, and resource fields so that dashboard panels, task views, trace views, and runtime returns use consistent data contracts  
**Last Updated:** 2026-04-06  
**Related Documents:**  
- `Nexus_Phase1_Dashboard_Information_Architecture_v1.md`  
- `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`  
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`  
- `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md`  
- `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`  
- `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`

---

## 1. Purpose

This document defines how the Nexus Phase 1 interface should bind to underlying task, run, approval, and resource data.

Its purpose is to ensure that:
- every major UI panel knows which fields it depends on
- runtime data returned from OpenClaw can be translated into visible Nexus state cleanly
- editable fields are separated from derived fields
- badges, banners, counts, and empty states use consistent logic
- the first implementation sprint has a practical UI data contract rather than relying on guesswork

This is the bridge between:
- state definition
- runtime return shape
- dashboard rendering
- implementation clarity

---

## 2. Core Principle

**A UI field should come from one clear source of truth.**

If a badge, task row, banner, or detail panel is composed from unclear or competing sources, the interface will quickly become untrustworthy.

In Phase 1:
- canonical task state should drive most task-facing UI
- canonical run state and event history should drive trace views
- approval objects should drive approval views
- resource metadata should drive resource views
- OpenClaw returns should be translated into Nexus state before being rendered as durable UI state

---

## 3. Contract Objectives

The Phase 1 UI field-binding contract should do six things well:

### 3.1 Preserve View Consistency
The same task should look meaningfully the same wherever it appears.

### 3.2 Preserve Source-of-Truth Discipline
Each visible field should have a defined origin.

### 3.3 Preserve Runtime Translation Clarity
OpenClaw should not need to know the full UI layout, but its outputs must map into canonical UI-ready state.

### 3.4 Preserve Implementation Speed
Developers should be able to answer “what fields does this view need?” quickly.

### 3.5 Preserve Minimum-Slice Practicality
The first sprint should know exactly what is required and what can wait.

### 3.6 Preserve Expansion Readiness
Later panels and workflows should extend the same contract rather than inventing new incompatible shapes.

---

## 4. Primary Data Objects

The main UI-facing objects in Phase 1 are:

- **Task**
- **Run**
- **Approval Item**
- **Resource**
- **System Summary** (derived aggregate object)

These objects are not equally rich in every view.

---

## 5. Source-of-Truth Rules

### 5.1 Task Views
Task list rows and task detail summaries should primarily bind to the **Task** object.

### 5.2 Trace / Run Views
Trace history and run summaries should primarily bind to the **Run** object and its ordered event list.

### 5.3 Approval Views
Approval panels and approval detail views should primarily bind to **Approval Item** objects.

### 5.4 Resource Views
Resource lists and resource detail summaries should primarily bind to **Resource** metadata.

### 5.5 Overview / Counts
System-level cards and counts should bind to **derived aggregates**, computed from canonical task/run/approval state.

### 5.6 Runtime Returns
OpenClaw return payloads should not be rendered raw.
They should first update canonical Nexus state, and the UI should render that canonical state.

---

## 6. Core Task Object for UI Binding

The recommended UI-facing Task object should include:

### Required
- task_id
- task_title
- task_summary
- task_class
- workflow_type
- current_owner
- current_stage
- current_status
- confidence_state
- approval_posture
- last_major_event
- next_expected_action

### Strongly Recommended
- originating_request
- created_at
- updated_at
- current_run_id
- output_state
- storage_state
- linked_approval_ids
- linked_resource_ids

This is the main object for:
- Active Tasks
- Task Detail
- Governance Overview focus area
- task-linked panels in other views

---

## 7. Core Run Object for UI Binding

The recommended UI-facing Run object should include:

### Required
- run_id
- task_id
- workflow_type
- created_at
- updated_at
- current_status
- current_stage
- current_owner
- confidence_state
- approval_posture
- event_list

### Strongly Recommended
- terminal_state
- completion_summary
- linked_approval_ids
- linked_resource_ids

This is the main object for:
- Trace / Run History
- Task Detail timeline
- recent activity surfaces
- run-specific debugging views

---

## 8. Core Approval Item Object for UI Binding

The recommended Approval Item object should include:

### Required
- approval_id
- task_id
- category
- consequence_level
- current_state
- requesting_role
- proposed_action
- reason_for_action
- expected_consequence
- created_at

### Strongly Recommended
- related_run_id
- related_resource_ids
- decision_note
- next_action_if_approved
- next_action_if_rejected

This is the main object for:
- Approvals panel
- approval detail modal/page
- approval banners on task views
- approval counts in overview/top bar

---

## 9. Core Resource Object for UI Binding

The recommended Resource object should include:

### Required
- resource_id
- resource_title
- resource_type
- version
- created_at
- updated_at
- summary
- subject_area

### Strongly Recommended
- linked_task_ids
- linked_run_ids
- storage_class
- current_status
- file_reference

This is the main object for:
- Resource list
- related resources in task detail
- memory/resource panels
- recent outputs panels

---

## 10. System Summary Object

The System Summary object is derived, not stored as a first-class runtime object by default.

### Suggested Fields
- active_task_count
- blocked_task_count
- approval_pending_count
- recent_completion_count
- active_escalation_count
- system_health_state
- last_system_event_at

This object powers:
- top bar
- governance overview cards
- small status strips

---

## 11. Editable vs Derived Fields

To keep UI logic clean, fields should be clearly separated into:

### Editable Inputs
Values entered or changed directly by the user or governing UI:
- task_title
- task_summary / request text
- task constraints
- approval decision
- save-as-resource choice
- revision note
- selected workflow intent where applicable

### Derived Fields
Values computed or assigned by the system:
- task_class
- current_stage
- current_status
- confidence_state
- approval_posture
- last_major_event
- next_expected_action
- active counts
- route summary

### Semi-Controlled Fields
Values changed through governed system actions:
- current_owner
- output_state
- storage_state
- linked approvals
- linked resources

### Rule
Do not allow users to directly edit fields that are supposed to represent system truth after governance or runtime processing.

---

## 12. Top Bar Binding

### Visible Elements
- Nexus title
- active task count
- pending approval count
- system health state
- optional current phase indicator

### Bound Fields
From **System Summary**:
- active_task_count
- approval_pending_count
- system_health_state

### Display Rules
- approval_pending_count > 0 should visually stand out
- system health should remain simple in Phase 1: stable / attention_needed / blocked

### Empty State Logic
If no active tasks and no pending approvals:
- show calm idle posture, not absence/failure posture

---

## 13. Governance Overview Binding

### Core Cards
- Active Tasks
- Pending Approvals
- Blocked / Escalated Items
- Recent Activity
- Current Task Focus

### Bound Fields

#### Active Tasks Card
From **System Summary**:
- active_task_count

#### Pending Approvals Card
From **System Summary**:
- approval_pending_count

#### Blocked / Escalated Card
Derived from **Task** objects:
- current_status in {blocked, approval_pending}
- confidence_state in {escalated, approval_pending, blocked}

#### Recent Activity Card
From **Run** events:
- latest canonical major events
- recent completions
- recent pauses

#### Current Task Focus
From selected **Task**:
- task_title
- current_owner
- current_stage
- next_expected_action
- confidence_state

### Rule
Governance Overview should favor summary fields and selected-task posture, not full-detail overload.

---

## 14. Active Tasks View Binding

Each task row should bind to:

From **Task**:
- task_id
- task_title
- task_class
- current_owner
- current_stage
- current_status
- confidence_state
- approval_posture
- updated_at
- next_expected_action

### Optional Row Enhancements
- workflow_type
- output_state

### Badge Rules
- `approval_posture = pending_review` → Approval badge
- `current_status = blocked` → Blocked badge
- `confidence_state = escalated` → Escalated badge
- `current_status = completed` → Completed badge with lighter treatment

### Sort Priority
Suggested default:
1. approval_pending / blocked
2. active
3. recently completed

---

## 15. Task Detail View Binding

The Task Detail view should bind from multiple sources, but with section-specific discipline.

### 15.1 Task Summary Section
From **Task**:
- task_id
- task_title
- task_summary
- task_class
- workflow_type
- current_owner
- current_stage
- current_status
- confidence_state
- approval_posture
- next_expected_action

### 15.2 Classification and Routing Section
From **Task** and **Run**:
- task_class
- workflow_type
- current_owner
- route summary
- routing rationale if available
- current stage

### 15.3 Timeline / Event Log Section
From **Run.event_list**:
- ordered events
- actor type/name
- event summary
- resulting status
- current stage
- timestamps

### 15.4 Output Section
From **Task** plus output reference:
- output_state
- output summary
- result content or resource reference
- storage_state

### 15.5 Related Approvals Section
From linked **Approval Item** objects:
- approval_id
- category
- current_state
- proposed_action

### 15.6 Related Resources Section
From linked **Resource** objects:
- resource_title
- resource_type
- version
- summary

### Rule
Task Detail is the place where cross-object stitching is allowed, but each section should still know its primary source.

---

## 16. Trace / Run History View Binding

### Run List View
Each run row should bind to:

From **Run**:
- run_id
- task_id
- workflow_type
- current_status
- current_stage
- current_owner
- confidence_state
- updated_at
- terminal_state if applicable

### Run Detail View
From **Run.event_list**:
- full ordered event sequence
- actor type
- actor name
- event type
- event summary
- resulting status
- next_expected_action if present

### Filter Inputs
Should ideally bind to:
- workflow_type
- current_status
- event_type
- actor_name
- time range

### Rule
Trace views render the run’s history, not the current task summary alone.

---

## 17. Approvals View Binding

### Approval List Row
From **Approval Item**:
- approval_id
- task_id
- category
- consequence_level
- current_state
- requesting_role
- proposed_action
- created_at

### Approval Detail View
From **Approval Item**:
- proposed_action
- reason_for_action
- expected_consequence
- consequence_level
- current_state
- decision_note if available

### Linked Context
Also show from linked **Task**:
- task_title
- current_stage
- workflow_type

### Controls
UI actions:
- approve
- reject
- revise

These mutate:
- approval item state
- linked task approval posture
- possibly linked task status/current owner/next action

---

## 18. Memory / Resources View Binding

### Resource List Row
From **Resource**:
- resource_title
- resource_type
- version
- updated_at
- summary
- subject_area

### Resource Detail View
From **Resource**:
- full summary
- version
- created_at
- updated_at
- linked tasks
- linked runs
- file reference if available

### Recent Resources Panel
Derived from **Resource** objects sorted by updated_at or created_at.

### Rule
Resource views should never render raw session state or raw run history as if they were durable resources.

---

## 19. Workflow View Binding

### Workflow List Item
Mostly static configuration plus derived recent usage:

- workflow_type
- workflow_name
- summary
- involved_roles
- approval_points
- expected_outputs
- recent_run_count (derived)

### Workflow Detail
May bind to:
- workflow definition document metadata
- recent runs associated with workflow_type
- common approval posture patterns
- expected stage sequence

### Rule
This view is part definition, part operational reference.

---

## 20. Badge Mapping Rules

### Task Status Badges
- active → neutral active badge
- paused → paused badge
- blocked → high-visibility blocked badge
- approval_pending → approval badge
- completed → subdued completed badge
- failed → error badge
- cancelled → subdued cancelled badge

### Confidence Badges
- direct
- guided
- escalated
- approval_pending
- ambiguous
- blocked
- completed

### Approval Posture Badges
- not_required
- potentially_required
- required
- pending_review
- approved
- rejected
- revised
- expired

### Rule
Do not overload one badge to represent status, confidence, and approval simultaneously.
They are separate states.

---

## 21. Banner and Blocking Logic

### Use a Banner When
- approval is required but not yet requested
- the task is paused for review
- a resource was successfully saved
- a task was completed and is now view-only

### Use a Blocking Overlay or High-Visibility Panel When
- current_status = blocked
- current_status = approval_pending
- executor_failed or specialist_failed created a hard stop
- critical runtime state is missing

### Primary Source Fields
- current_status
- approval_posture
- latest major event type
- failure summary if present

---

## 22. Counts and Aggregate Logic

### Active Task Count
Count tasks where current_status in:
- active
- paused
- blocked
- approval_pending

Exclude:
- completed
- cancelled
- closed_without_action

### Pending Approval Count
Count approval items where current_state = pending_review

### Recent Completion Count
Count runs with terminal_state = completed_successfully within recent window

### Blocked Count
Count tasks where current_status = blocked

### Rule
Counts should come from clear filtering logic, not ad hoc UI guesses.

---

## 23. Empty State Rules

### Active Tasks Empty State
Show when no tasks with current_status in:
- active
- paused
- blocked
- approval_pending

### Approvals Empty State
Show when no approval items with current_state = pending_review

### Trace Empty State
Show when no run history exists yet

### Resources Empty State
Show when no durable resources match the panel filter

### Rule
Empty states should be calm and informative, not error-styled unless there is actual data failure.

---

## 24. OpenClaw Runtime-to-UI Translation

OpenClaw returns should first map into canonical Nexus fields.

### OpenClaw Return
Typical fields:
- acting_role
- phase_status
- stage
- output_summary
- next_suggested_action
- approval_needed
- failure_or_block_reason
- event_summaries

### Translate Into Task Fields
- acting_role → current_owner or last acting role context
- stage → current_stage
- phase_status → current_status
- output_summary → task output summary
- next_suggested_action → next_expected_action
- approval_needed → approval_posture / possible current_status change
- failure_or_block_reason → failure summary / status / banner logic

### Translate Into Run Fields
- event_summaries → canonical event list additions
- stage → current_stage
- phase_status → current_status
- acting_role → current_owner or event actor

### Rule
The UI should render translated canonical state, not raw runtime payload fragments.

---

## 25. Minimum Buildable Slice Binding Set

For the minimum slice, only the following bindings are strictly required.

### Top Bar
- active_task_count
- approval_pending_count

### Task List
- task_title
- task_class
- current_owner
- current_stage
- confidence_state
- next_expected_action

### Task Detail
- task_title
- current_owner
- current_stage
- current_status
- route summary
- event list
- output summary

### Trace View
- run_id
- ordered events
- completion state

### Approval Pause
- approval_posture
- current_status
- latest approval or pause event

This is enough for the first sprint without losing architectural truth.

---

## 26. Validation Rules

A view binding is valid when:
- every displayed field has a defined source
- every derived badge/buffer/count has a stated rule
- runtime returns can be translated without ambiguity
- no panel depends on undefined hidden state
- current task posture appears the same across overview, task row, and task detail

A good implementation check is:
**Can two developers independently build this panel and arrive at the same fields?**

If not, the binding contract is still too vague.

---

## 27. Failure Modes to Avoid

To preserve coherence, avoid:

- binding the same visible label to different underlying fields in different panels
- rendering raw runtime data directly in the main UI
- using task status to represent approval state when approval posture already exists
- allowing derived counts to use inconsistent filters
- hiding which fields are editable
- duplicating field meaning across ad hoc custom UI state
- making the detail view rely on data the list view never receives without clear reason

---

## 28. Success Criteria

The UI binding contract is working correctly when:

- panel requirements are clear
- source-of-truth discipline is maintained
- the dashboard renders consistent task posture
- runtime returns map cleanly into visible state
- counts and badges behave predictably
- the first sprint can be implemented with minimal field ambiguity
- later Phase 1 panels can extend the same contract cleanly

---

## 29. Closing Principle

A strong command-centre UI is not only a design problem.
It is a data truth problem.

Phase 1 succeeds when the UI is not guessing.
It is faithfully rendering a governed system.

---

## 30. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#ui`  
`#field-binding`  
`#data-contract`  
`#dashboard`  
`#openclaw`
