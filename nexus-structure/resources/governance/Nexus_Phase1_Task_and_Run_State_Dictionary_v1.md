# Nexus Phase 1 Task and Run State Dictionary  
## Canonical Field Meanings for Task Status, Stage, Confidence, Approval, Ownership, and Run Closure

**Document ID:** NEXUS-P1-STATE-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Define the canonical Phase 1 meanings of task and run state fields for Nexus so that the dashboard, governance layer, event log, workflows, and OpenClaw integration all use the same language  
**Last Updated:** 2026-04-06  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`  
- `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`  
- `Nexus_Phase1_Memory_and_State_Model_v1.md`  
- `Nexus_Phase1_Dashboard_Information_Architecture_v1.md`  
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`  
- `Nexus_Phase1_Workflow2_Business_Operations_Coordination_Spec_v1.md`  
- `Nexus_Phase1_Policy_and_Approval_Types_v1.md`  
- `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`  
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`  
- `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`  
- `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`

---

## 1. Purpose

This document defines the canonical meanings of the key state fields used across Nexus Phase 1.

Its purpose is to ensure that:
- the dashboard and runtime use the same language
- task state is interpreted consistently
- event logs describe changes clearly
- workflows do not invent competing field meanings
- the OpenClaw integration returns state in a form Nexus can trust
- implementation does not drift because identical words are being used to mean different things

This is the document that gives Phase 1 a **shared state vocabulary**.

---

## 2. Core Principle

**A field should mean one thing everywhere.**

If `status`, `stage`, `owner`, `confidence`, or `approval posture` mean different things in different parts of the system, the command centre will become confusing very quickly.

In Phase 1:

- **status** should describe the current operational standing of the task or run  
- **stage** should describe where the task currently is in the workflow  
- **owner** should describe who is currently responsible for the next bounded work step  
- **confidence state** should describe clarity/posture, not certainty in an abstract mathematical sense  
- **approval posture** should describe where the task stands relative to approval requirements  

This separation keeps the system readable.

---

## 3. Dictionary Objectives

The Phase 1 state dictionary should do six things well:

### 3.1 Preserve Shared Meaning
The same field name should carry the same interpretation everywhere.

### 3.2 Preserve UI Clarity
The dashboard should not need to guess what a field means.

### 3.3 Preserve Logging Clarity
Event records should be able to show how state changed in plain terms.

### 3.4 Preserve Runtime Coordination
OpenClaw returns should map back into Nexus state without ambiguity.

### 3.5 Preserve Workflow Legibility
Both Workflow 1 and Workflow 2 should fit the same state language.

### 3.6 Preserve Minimum-Slice Simplicity
The dictionary should be precise enough to guide implementation without becoming bloated.

---

## 4. State Object Overview

For Phase 1, the most important state-bearing objects are:

- **Task**
- **Run**
- **Approval Item**
- **Durable Output** (lightweight reference only)

This document focuses mainly on the first two.

---

## 5. Task vs Run

### 5.1 Task
A **task** is the governed unit of work the user or system wants handled.

It answers:
- what is being done
- why it exists
- who currently owns it
- where it is now
- what should happen next

### 5.2 Run
A **run** is the bounded lifecycle instance of a task moving through the system.

It answers:
- what happened during this specific execution pass
- what events occurred in sequence
- how the task moved from entry to completion, pause, or closure

### 5.3 Rule
A task may conceptually outlive one run.
A run is the time-bounded execution history for that task instance.

---

## 6. Canonical Task Fields

The following fields are recommended as the minimum canonical task fields for Phase 1.

### Required
- task_id
- task_title or task_summary
- task_description
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

These fields are enough to power:
- task list
- task detail
- governance overview
- trace cross-links

---

## 7. Canonical Run Fields

The following fields are recommended as the minimum canonical run fields for Phase 1.

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
- started_by
- terminal_state
- completion_summary
- linked_approval_ids
- linked_resource_ids

These fields are enough to support:
- run history
- trace inspection
- debugging
- workflow reconstruction

---

## 8. Task Class Values

Task class indicates the structural type of the task, not its current stage.

### Canonical Values

#### Class A
**Simple Single-Domain Task**

Use when:
- one role fits clearly
- low ambiguity
- low consequence
- no cross-domain coordination required

#### Class B
**Multi-Step Single-Track Task**

Use when:
- one main workflow path exists
- multiple bounded steps are needed
- still low to moderate coordination complexity

#### Class C
**Cross-Domain Task**

Use when:
- multiple roles are required
- interpretation crosses domains
- stronger conductor coordination is needed

#### Class D
**Approval-Sensitive Task**

Use when:
- meaningful consequence is central
- execution must pause at approval boundary
- the task is moving toward externally or structurally impactful action

#### Class E
**Ambiguous or Uncertain Task**

Use when:
- the task cannot be safely classified yet
- intent is unclear
- conflicting interpretations exist

### Rule
Task class may change during a run, but only through visible reclassification or escalation.

---

## 9. Workflow Type Values

Workflow type identifies which defined operational path the task is following.

### Canonical Phase 1 Values
- `research_coordination`
- `business_operations_coordination`
- `unassigned`
- `custom_internal` (use sparingly)

### Guidance
Use:
- `unassigned` during very early intake if classification is not complete
- `custom_internal` only when the task is valid but does not yet map to a formal workflow

### Rule
Workflow type should not be used as a substitute for task class.
A Class B task and a `research_coordination` workflow answer different questions.

---

## 10. Task Status Values

Task status describes the current operational standing of the task.

### Canonical Values

#### active
The task is currently in motion and can continue without being blocked.

#### paused
The task is intentionally halted but not failed.
It may continue later.

#### blocked
The task cannot continue because a dependency, permission, or condition is missing.

#### approval_pending
The task is waiting specifically on approval.
This is a specialized operational block state and may be surfaced distinctly.

#### completed
The task has reached its intended successful end state for the current run.

#### failed
The task could not complete successfully due to an error or unresolved failure.

#### cancelled
The task was intentionally stopped and should not continue.

#### closed_without_action
The task ended without execution or meaningful continuation, usually because it became unnecessary, invalid, or superseded.

### Rule
Status should describe the present standing, not the whole story.
The event log provides the story.

---

## 11. Stage Values

Stage describes where the task is within the current workflow path.

### Canonical Values

#### intake
The task has entered Nexus but has not yet been classified.

#### classification
The Conductor is determining task type and workflow fit.

#### routing
The task is being assigned to the next responsible role or path.

#### specialist_work
A specialist is actively performing bounded work.

#### review
The Conductor or other governing layer is reviewing a returned phase.

#### approval
The task has reached an approval boundary.

#### execution
A governed executor action is actively underway.

#### storage
The task is being deliberately saved, promoted, or turned into a durable output.

#### completion
The task has reached finalization and closure steps.

#### paused
The task is halted in a non-terminal way.

### Rule
Stage answers “where are we in the path?”
Status answers “what is the condition of the task right now?”

---

## 12. Confidence State Values

Confidence state describes the clarity and operational posture of the task, not a raw probability score.

### Canonical Values

#### direct
The task is clear, low-risk, and can move along a simple path.

#### guided
The task is clear enough to proceed, but it requires a structured multi-step path.

#### escalated
The task has required broader handling, stronger coordination, or higher sensitivity.

#### approval_pending
The task is prepared to continue but cannot proceed until approval is granted.

#### ambiguous
The task cannot safely continue without clarification or reduced uncertainty.

#### blocked
The task cannot currently move due to a condition or dependency.

#### completed
The task has reached a clear end state.

### Rule
Confidence state is primarily a dashboard and governance aid.
It should remain readable and situational.

---

## 13. Approval Posture Values

Approval posture describes the task’s relationship to approval requirements.

### Canonical Values

#### not_required
No approval is currently needed for the task’s next step.

#### potentially_required
Approval may become necessary soon, but the current step may still proceed.

#### required
The next consequential step requires approval.

#### pending_review
An approval request has been created and is awaiting decision.

#### approved
The necessary approval has been granted for the relevant next step.

#### rejected
The requested approval has been denied.

#### revised
The approval request has been returned for controlled revision.

#### expired
An approval request became stale or no longer applicable.

### Rule
Approval posture is not the same as approval item state, but the two should align cleanly.

---

## 14. Owner Values

Current owner describes who is currently responsible for the next bounded work step.

### Canonical Phase 1 Owner Values
- Conductor
- Research Specialist
- Writing and Structuring Specialist
- Business and Operations Specialist
- Technical Build Specialist
- Memory and Resource Support
- Executor Layer
- Approval Surface
- Unassigned

### Guidance
Use:
- `Unassigned` only during brief intake moments or when a task is intentionally waiting for route assignment
- `Approval Surface` when the task is explicitly held at approval review
- `Conductor` during classification, routing, or governance review phases

### Rule
Owner should identify active responsibility, not general involvement.

---

## 15. Output State Values

Output state is a helpful field for task detail and storage awareness.

### Suggested Values
- none
- partial
- structured_draft
- final_output_ready
- saved_as_resource
- superseded

### Guidance
This field is useful because a task can be:
- active with partial output
- completed with final output ready
- completed and also saved as durable output

### Rule
Output state is not a substitute for task status.

---

## 16. Storage State Values

Storage state helps distinguish live workflow from memory action.

### Suggested Values
- not_applicable
- not_requested
- under_review
- ready_to_save
- saved
- promoted_to_memory
- archived

### Guidance
This field is especially useful in Workflow 1 and Workflow 2 where outputs may or may not become durable resources.

---

## 17. Next Expected Action Values

`next_expected_action` should be a concise operational sentence, not a vague label.

### Good Examples
- “Conductor classifies task”
- “Research Specialist begins bounded research phase”
- “Writing and Structuring prepares final internal output”
- “Await approval decision before execution”
- “Save final output as durable resource”
- “Task complete; no further action required”

### Avoid
- “processing”
- “doing work”
- “next”
- empty or generic filler text

### Rule
This field should help the dashboard answer the question:
**What happens next?**

---

## 18. Run Terminal State Values

Run terminal state describes how a run ended once it is no longer active.

### Canonical Values
- completed_successfully
- failed
- cancelled
- closed_without_action
- archived_paused

### Guidance
A task may still exist conceptually even after a run reaches terminal state.
The terminal state belongs to the run instance.

---

## 19. Approval Item State Values

Approval items should maintain their own narrower state model.

### Canonical Values
- draft
- pending_review
- approved
- rejected
- revision_requested
- expired
- cancelled
- executed
- closed_without_action

### Rule
Do not confuse:
- task status
- approval posture
- approval item state

They are related, but each answers a different question.

---

## 20. Field Relationship Rules

To preserve coherence, Nexus should follow these relationship rules.

### 20.1 Status vs Stage
- status = condition
- stage = location in path

### 20.2 Confidence vs Class
- confidence = current clarity/posture
- class = structural task type

### 20.3 Approval Posture vs Approval Item State
- posture = task relationship to approval
- approval item state = lifecycle of the approval object itself

### 20.4 Owner vs Actor
- owner = who currently holds responsibility
- actor = who generated a specific event

### 20.5 Output State vs Storage State
- output state = maturity of task output
- storage state = what happened to that output as a resource decision

---

## 21. Suggested Default Combinations

Some field combinations are especially useful as Phase 1 defaults.

### Example A — New Research Task
- task_class: Class B
- workflow_type: research_coordination
- current_stage: classification
- current_status: active
- current_owner: Conductor
- confidence_state: guided
- approval_posture: not_required
- next_expected_action: “Conductor routes task to Research Specialist”

### Example B — Specialist in Progress
- current_stage: specialist_work
- current_status: active
- current_owner: Research Specialist
- confidence_state: guided

### Example C — Awaiting Approval
- current_stage: approval
- current_status: approval_pending
- current_owner: Approval Surface
- confidence_state: approval_pending
- approval_posture: pending_review
- next_expected_action: “Await approval decision before execution”

### Example D — Completed and Saved
- current_stage: completion
- current_status: completed
- current_owner: Conductor
- confidence_state: completed
- output_state: saved_as_resource
- storage_state: saved
- next_expected_action: “Task complete; no further action required”

---

## 22. State Change Rules

### 22.1 Visible State Changes Only
Any meaningful change to:
- current owner
- stage
- status
- confidence
- approval posture

should be represented by an event or a clearly traceable state update.

### 22.2 No Silent Reinterpretation
Do not silently reinterpret a task from one class, workflow, or approval posture to another without logging or visible change tracking.

### 22.3 State Should Move Intentionally
State changes should happen because:
- a routing decision occurred
- a specialist started or finished
- approval posture changed
- a block or failure emerged
- the task completed or closed

---

## 23. Minimum Slice State Set

For the minimum buildable slice, the absolutely essential state fields are:

- task_id
- run_id
- task_class
- workflow_type
- current_owner
- current_stage
- current_status
- confidence_state
- approval_posture
- last_major_event
- next_expected_action

This smaller set is enough to power the first sprint without losing architectural truth.

---

## 24. Failure Modes to Avoid

To preserve clarity, avoid:

- using `status` to mean stage
- using `owner` to mean everyone involved
- using `confidence` as a hidden numeric abstraction with no readable interpretation
- leaving approval posture undefined when consequence exists
- inventing one-off values mid-implementation
- using empty or vague `next_expected_action` text
- letting OpenClaw return fields that Nexus interprets differently than the runtime intended

---

## 25. Success Criteria

The state dictionary is working correctly when:

- the same words mean the same things everywhere
- task list, task detail, trace, and runtime returns align cleanly
- owners, stages, and statuses are easy to interpret
- approval posture is visible and understandable
- the minimum slice can be implemented without state confusion
- later expansion does not require rethinking basic field meanings

---

## 26. Closing Principle

A command centre becomes confusing long before it becomes powerful if its state language is unstable.

Phase 1 should make state boring in the best possible way:
clear, repeatable, and trustworthy.

---

## 27. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#state`  
`#dictionary`  
`#task`  
`#run`  
`#openclaw`
