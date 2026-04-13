# Nexus Phase 1 Minimum Buildable Slice  
## Smallest Coherent Implementation Target for the First Working Nexus Command Centre

**Document ID:** NEXUS-P1-MBS-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Define the smallest coherent buildable version of Nexus Phase 1, including the minimum UI, minimum runtime behaviors, minimum active roles, minimum state model, minimum approval behavior, and minimum workflow path required to prove value  
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
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`  
- `Nexus_Phase1_Resource_and_Folder_Taxonomy_v1.md`

---

## 1. Purpose

This document defines the **minimum buildable slice** of Nexus Phase 1.

Its purpose is to reduce the broader Phase 1 architecture into the smallest implementation target that is still:

- coherent
- governed
- inspectable
- useful
- representative of the intended command-centre model

This is not the full Phase 1 system.

It is the smallest version that can prove:

**Nexus is a real governed command centre, not just a concept.**

---

## 2. Core Principle

**Build the smallest version that still expresses the truth of the architecture.**

That means the minimum slice should still include:

- command-centre visibility
- conductor-led routing
- OpenClaw runtime linkage
- one real workflow
- trace visibility
- basic memory separation
- approval pause capability

What should be reduced is not governance.

What should be reduced is:
- breadth
- number of roles active at once
- number of screens
- number of workflows
- number of integrations
- amount of runtime complexity

---

## 3. Minimum Buildable Slice Objective

The objective of the minimum buildable slice is:

**To produce a working private Nexus shell that can accept a task, route it through the Conductor, execute one bounded workflow through OpenClaw, display live state and trace history, preserve basic memory discipline, and pause at approval boundaries if needed.**

If that works, then the architecture has moved from theory into proof.

---

## 4. What the Minimum Slice Must Prove

The minimum slice should prove six things:

### 4.1 Nexus Can Receive and Display Work
A task can enter Nexus and become visible as a governed item.

### 4.2 Nexus Can Route Work Intelligently
The Conductor can classify and assign the task to the correct role.

### 4.3 Nexus Can Use OpenClaw as Runtime
A bounded task phase can be handed to OpenClaw and returned cleanly.

### 4.4 Nexus Can Surface What Happened
The interface can show current state, last events, and next action.

### 4.5 Nexus Can Preserve Coherence
Basic session state, event history, and durable output rules are respected.

### 4.6 Nexus Can Stop Before Consequence
If a task crosses an approval boundary, the system can pause rather than continue blindly.

---

## 5. Minimum Scope

The minimum buildable slice should include:

- one main dashboard shell
- one active task view
- one task detail view
- one trace/run history view
- one simple approval state
- one working workflow
- one governed runtime integration path
- only the minimum active roles needed to support that workflow

It should not try to include the full Phase 1 set all at once.

---

## 6. Minimum Active Roles

The minimum slice should activate only these roles at first:

### 6.1 Conductor
Required.
This is the governance entry point and route owner.

### 6.2 Research Specialist
Required for the first workflow.
This gives the system a meaningful specialist lane without operational risk.

### 6.3 Writing and Structuring Specialist
Required.
This turns raw work into usable output and proves the handoff path.

### 6.4 Executor Layer
Required in minimal form.
Even if little direct action is needed at first, the system should still preserve the concept of governed execution and result return.

### 6.5 Memory and Resource Support
Optional in the very first slice.
Can be simulated by a simple storage decision or lightweight save behavior until fuller support is added.

### 6.6 Business and Operations Specialist
Not required in the first slice.
This can wait until the second workflow.

### 6.7 Technical Build Specialist
Not required in the first slice.
This can remain dormant until implementation tasks need a dedicated technical role.

---

## 7. Minimum Workflow Choice

The minimum slice should implement:

**Workflow 1 — Research Coordination**

This is the best first slice because it:
- exercises governance
- uses meaningful routing
- produces useful output
- avoids high-risk live action
- tests state, memory, and traceability
- does not require heavy approval usage in normal operation

This makes it the cleanest first proof path.

---

## 8. Minimum Workflow Path

The minimum workflow path should be:

**Task Intake → Conductor → Research Specialist → Writing and Structuring Specialist → Conductor Review → Final Output**

Optional:
- simple resource save
- approval pause if the task changes posture unexpectedly

This is enough to prove the spine without demanding the full Phase 1 complexity.

---

## 9. Minimum UI Surface

The minimum slice should build only the views necessary to make the system governable and visible.

### 9.1 Required Views

#### A. Governance Overview / Home
Must show:
- active task count
- current selected task
- current owner
- current stage
- last major event
- pending approvals count
- system health or simple status

#### B. Active Tasks View
Must show:
- task title
- task class
- current owner
- current stage
- confidence state
- next action

#### C. Task Detail View
Must show:
- task summary
- route summary
- current owner
- timeline of major events
- output summary
- storage outcome if relevant

#### D. Trace / Run History View
Must show:
- run ID
- recent event sequence
- involved roles
- completion state

### 9.2 Optional Early Additions
Only if implementation stays simple:
- approvals panel
- resource panel
- agent status panel

These can begin as lightweight panels rather than full feature areas.

---

## 10. Minimum Dashboard Layout

A practical first build could use:

- **Top bar**
- **Left navigation**
- **Main central task panel**
- **Right-side context rail or trace panel**

### Top Bar
Show:
- Nexus title
- active task count
- pending approval count
- system state

### Left Navigation
Show:
- Overview
- Tasks
- Trace
- Resources (optional early)
- Approvals (optional early)

### Main Panel
Show:
- selected task
- current owner
- stage
- output / progress
- next action

### Side Panel
Show:
- recent events
- route summary
- linked output or resource

This is enough to feel like a command centre without trying to build the whole interface at once.

---

## 11. Minimum State Model

The minimum slice should track only the essential live state.

### Required Task Fields
- task ID
- task description
- task class
- workflow type
- current owner
- current stage
- current status
- confidence state
- last major event
- next expected action

### Required Run Fields
- run ID
- task ID
- created timestamp
- current status
- ordered event list

### Required Approval Field
At minimum:
- approval required: yes / no
- approval pending: yes / no

This can later expand into the fuller approval model.

---

## 12. Minimum Event Model

The minimum slice should support only the event types needed for the first working path.

### Required Event Types
- `task_created`
- `task_classified`
- `task_routed`
- `specialist_started`
- `specialist_completed`
- `task_completed`

### Strongly Recommended Early Additions
- `task_paused`
- `approval_requested`
- `resource_created`

### Rule
Do not try to implement the whole event universe on day one.
Implement the smallest event set that still makes the run reconstructable.

---

## 13. Minimum Memory Behavior

The minimum slice should distinguish only three practical classes at first:

### 13.1 Session State
Live working task context.

### 13.2 Event Log
Ordered history of what happened.

### 13.3 Durable Output
A saved final artifact only when deliberately created.

Project Memory can begin as a small set of stable internal references rather than a full system.

### Rule
The first slice should prove that not everything is remembered automatically.

---

## 14. Minimum Approval Behavior

The minimum slice does not need a heavy approval system, but it must preserve the approval concept.

### Minimum Requirement
The system must be able to:
- mark that approval is required
- stop progression when approval is missing
- surface that stop visibly
- resume only after approval state changes

### Minimum UI Requirement
A simple banner, panel, or blocking state is enough at first.

Example:
- “Approval required before external action”
- “Task paused pending approval”

### Rule
Even if the first workflow rarely needs it, the approval boundary must exist.

That is part of the architecture truth.

---

## 15. Minimum OpenClaw Integration Behavior

The minimum runtime integration should prove:

- Nexus can send a bounded task phase to OpenClaw
- OpenClaw can return a structured result
- Nexus can surface returned owner/stage/output state
- OpenClaw does not self-govern
- blocked or failed runtime states are visible

### Minimum Handoff
Nexus should send:
- task ID
- run ID
- target role
- objective
- current stage
- expected return format

### Minimum Return
OpenClaw should return:
- acting role
- phase status
- output summary
- current stage
- next suggested action
- failure/block reason if relevant

This is enough to prove the command/runtime relationship.

---

## 16. Minimum Output Standard

A successful first-slice workflow output should be:

- clearly structured
- visibly tied to the task
- attributable to the involved roles
- stored only if intentionally saved
- reviewable from the task detail view

A poor first slice would end in:
- vague text blobs
- unclear ownership
- no trace of what happened
- no sense of completion

---

## 17. What to Defer

To keep the minimum slice honest, defer these until later:

- second workflow
- Business and Operations Specialist activation
- Technical Build Specialist activation
- complex approval categories
- full policy matrix
- full resource browser
- complete folder automation
- advanced filters in run history
- multi-branch workflow execution
- broad external integrations
- extensive memory promotion logic

These are important, but they do not belong in the first proof.

---

## 18. Suggested Build Sequence for the Minimum Slice

### Step 1
Create the minimal Nexus shell:
- top bar
- task list
- central task detail
- trace panel

### Step 2
Implement the Conductor-led intake and classification path.

### Step 3
Implement a bounded Nexus → OpenClaw → Nexus handoff for Research Specialist.

### Step 4
Implement the second bounded handoff for Writing and Structuring Specialist.

### Step 5
Render event history and task progression visibly.

### Step 6
Return final output and optionally save it as durable output.

### Step 7
Add the simple approval pause state.

This is the minimum path from concept to proof.

---

## 19. Minimum Success Test

The minimum buildable slice is successful if you can do this:

1. enter a research-oriented task  
2. see it appear in Nexus  
3. watch it be classified by the Conductor  
4. watch it route to Research Specialist  
5. receive structured findings back  
6. watch it route to Writing and Structuring  
7. receive clean final output  
8. inspect the event history  
9. see owner, stage, and next action clearly  
10. optionally save the output deliberately

If that works, Nexus is no longer merely planned.
It is functioning.

---

## 20. Failure Modes to Avoid

To protect the minimum slice, avoid:

- trying to activate every role at once
- building the full dashboard before proving one task path
- overbuilding memory before proving one save behavior
- implementing the full policy matrix before a simple approval pause works
- letting OpenClaw become invisible behind the interface
- producing output without visible traceability
- confusing “minimum” with “ungoverned”

The minimum slice should be smaller, not weaker.

---

## 21. Completion Condition

The minimum buildable slice is complete when:

- one real task can move end to end
- the system remains visibly governed
- the dashboard can explain what is happening
- the runtime relationship is visible
- trace history is readable
- the output is genuinely useful
- the architecture feels proven in miniature

At that point, the next step is expansion, not speculation.

---

## 22. Closing Principle

The first working Nexus does not need to be impressive by size.

It needs to be trustworthy by structure.

A successful minimum buildable slice proves that Phase 1 can live as a real command centre before the wider ecosystem arrives.

---

## 23. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#minimum-buildable-slice`  
`#mvp`  
`#governance`  
`#openclaw`  
`#workflow1`
