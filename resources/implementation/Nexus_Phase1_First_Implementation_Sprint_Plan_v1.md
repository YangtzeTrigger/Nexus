# Nexus Phase 1 First Implementation Sprint Plan  
## Build Blocks, Dependencies, Definitions of Done, and the First Working Proof Path

**Document ID:** NEXUS-P1-SPRINT-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Define the first implementation sprint for Nexus Phase 1 by translating the minimum buildable slice into a practical build sequence with dependencies, scope boundaries, deliverables, and definitions of done  
**Last Updated:** 2026-04-06  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`  
- `Nexus_Phase1_Agent_Roles_and_Responsibilities_v1.md`  
- `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`  
- `Nexus_Phase1_Memory_and_State_Model_v1.md`  
- `Nexus_Phase1_Dashboard_Information_Architecture_v1.md`  
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`  
- `Nexus_Phase1_Policy_and_Approval_Types_v1.md`  
- `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`  
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`  
- `Nexus_Phase1_Resource_and_Folder_Taxonomy_v1.md`  
- `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`

---

## 1. Purpose

This document defines the **first implementation sprint** for Nexus Phase 1.

Its purpose is to convert the wider Phase 1 design into a practical first build sequence that can be executed without getting lost in scale, abstraction, or premature expansion.

This sprint is intended to deliver the **first working proof** of Nexus as:

- a command centre
- a governance surface
- a runtime coordinator
- a traceable workflow shell
- a real system rather than a speculative architecture

---

## 2. Sprint Objective

The objective of this sprint is:

**To build the first working version of the Nexus minimum buildable slice so that a research-oriented task can be received, classified, routed through OpenClaw, returned with structured output, surfaced in the dashboard, logged visibly, and saved deliberately when appropriate.**

This sprint does not aim to finish Phase 1.

It aims to prove the spine.

---

## 3. Sprint Outcome

At the end of this sprint, the project should have a working private shell that can do the following:

1. accept a research-oriented task  
2. display it in Nexus  
3. classify it through the Conductor  
4. hand it to OpenClaw for Research Specialist work  
5. receive and display returned findings  
6. hand it to Writing and Structuring  
7. receive clean final output  
8. show a readable task timeline  
9. optionally save a durable output  
10. pause if an approval boundary is triggered

If those ten things work cleanly, the sprint is a success.

---

## 4. Sprint Principles

### 4.1 Build the Truth, Not the Entirety
The sprint should implement the smallest version that still reflects the real architecture.

### 4.2 Governance Comes First
Classification, routing, visibility, and pause behavior are not extras.
They are part of the first proof.

### 4.3 One Workflow Is Enough
Workflow 1 is sufficient for the first sprint.
Workflow 2 is deliberately deferred.

### 4.4 Mock Only What Is Non-Essential
If a full implementation would create unnecessary drag, use a controlled placeholder — but do not fake the architecture itself.

### 4.5 Visible State Over Hidden Cleverness
If something happens in the runtime, the dashboard should be able to show it.

---

## 5. Sprint Scope

This sprint should include:

- minimal Nexus shell
- minimal task intake surface
- Conductor-led classification path
- minimal Nexus ↔ OpenClaw handoff
- Research Specialist bounded phase
- Writing and Structuring bounded phase
- minimal event logging
- minimal task detail and trace rendering
- simple durable output save behavior
- simple approval pause state

This sprint should remain tightly aligned with the Minimum Buildable Slice document.

---

## 6. Out of Scope

This sprint should explicitly exclude:

- Workflow 2 implementation
- Business and Operations Specialist activation
- Technical Build Specialist activation
- full approval matrix
- full memory promotion system
- full agent status surface
- advanced search/filtering
- broad integrations beyond OpenClaw
- multi-branch workflow logic
- advanced resource browser
- public deployment concerns
- full production hardening

This keeps the sprint from collapsing under ambition.

---

## 7. Sprint Dependencies

The sprint assumes the following already exist as design references:

- Blueprint and scope definition
- Build order and implementation sequence
- Role map and boundaries
- Governance and routing logic
- Memory and state model
- Dashboard information architecture
- Workflow 1 specification
- Event log schema
- OpenClaw runtime integration contract
- Resource and folder taxonomy
- Minimum buildable slice target

These documents define the rules.
The sprint turns them into the first working expression.

---

## 8. Minimum Active Roles for This Sprint

The sprint should activate only these roles:

### Required
- Conductor
- Research Specialist
- Writing and Structuring Specialist
- Executor Layer (minimal form)

### Optional / Simulated
- Memory and Resource Support may be represented initially by a simple save action rather than a full distinct runtime role

### Deferred
- Business and Operations Specialist
- Technical Build Specialist

This keeps runtime coordination lean and provable.

---

## 9. Sprint Structure

This sprint is best treated as a sequence of **build blocks**, not as a vague list of tasks.

A practical structure is:

- Block 0 — Project Setup
- Block 1 — Nexus Shell Skeleton
- Block 2 — Task Intake and Classification
- Block 3 — OpenClaw Research Handoff
- Block 4 — Writing and Structuring Handoff
- Block 5 — Event Log and Trace Rendering
- Block 6 — Durable Output Save
- Block 7 — Simple Approval Pause
- Block 8 — End-to-End Validation

Each block should produce something visible.

---

## 10. Block 0 — Project Setup

### Objective
Create the minimum project structure needed to support the sprint.

### Tasks
- create project root folders
- create `resources/` subfolders according to taxonomy
- create `frontend/`, `runtime/`, `integrations/`, and `logs/` folders
- place current governed documents into their intended resource locations
- establish naming and version discipline for new files

### Deliverables
- stable project folder tree
- active document placement
- clean working baseline

### Definition of Done
This block is done when:
- the project tree reflects the agreed taxonomy
- current documents are no longer scattered
- sprint implementation has a clean home

---

## 11. Block 1 — Nexus Shell Skeleton

### Objective
Build the first visible command-centre shell.

### Tasks
- create top bar
- create left navigation
- create overview/home view
- create active task list view
- create task detail view container
- create trace panel or trace page
- show placeholder data if needed before live state exists

### Required Visible Fields
- Nexus title
- active task count
- pending approval count
- selected task
- current owner
- current stage
- recent events

### Deliverables
- first visible Nexus shell
- command-centre layout in place
- basic navigation between views

### Definition of Done
This block is done when:
- the interface no longer feels like a blank app shell
- the layout already suggests governance and task visibility
- a placeholder task can be displayed meaningfully

---

## 12. Block 2 — Task Intake and Conductor Classification

### Objective
Implement the governed task entry path.

### Tasks
- create simple task intake form or entry action
- generate task ID and run ID
- store initial task state
- implement Conductor as first receiver
- assign default task class for research-oriented input
- store current owner, stage, and confidence state
- write initial task events

### Minimum Event Types Required Here
- `task_created`
- `task_classified`

### Deliverables
- real task intake path
- Conductor-led classification
- initial live state visible in UI

### Definition of Done
This block is done when:
- a task can be entered manually
- the system assigns it a class
- the task appears in the dashboard as a governed item

---

## 13. Block 3 — OpenClaw Research Handoff

### Objective
Prove the first governed Nexus → OpenClaw → Nexus cycle.

### Tasks
- implement minimal handoff contract from Nexus to OpenClaw
- pass task ID, run ID, target role, objective, stage, and expected return shape
- execute a bounded Research Specialist phase
- return structured output summary from OpenClaw
- update owner, stage, and event history in Nexus
- surface returned findings in task detail view

### Minimum Event Types Required Here
- `task_routed`
- `specialist_started`
- `specialist_completed`

### Deliverables
- first runtime handoff
- first structured return from OpenClaw
- first visible runtime-to-dashboard loop

### Definition of Done
This block is done when:
- the task leaves Nexus visibly
- returns visibly
- and the returned research phase can be inspected in the task view and trace view

---

## 14. Block 4 — Writing and Structuring Handoff

### Objective
Prove the second governed phase of the same workflow.

### Tasks
- take returned research output
- route the task from Conductor to Writing and Structuring
- send the second bounded handoff into OpenClaw
- receive a structured final output
- update task stage and output summary
- surface final output in task detail

### Deliverables
- second specialist phase working
- first complete research workflow path
- clean final output rendered visibly

### Definition of Done
This block is done when:
- a task can pass through both specialists
- the Conductor remains the route owner
- the final output is readable and clearly tied to the task

---

## 15. Block 5 — Event Log and Trace Rendering

### Objective
Make the workflow reconstructable rather than merely functional.

### Tasks
- store ordered event history per run
- render run history in a trace view or side panel
- render key events in task detail
- show current stage, current owner, and next action
- ensure runtime transitions appear as canonical events

### Minimum Event Types Required Here
- `task_created`
- `task_classified`
- `task_routed`
- `specialist_started`
- `specialist_completed`
- `task_completed`

### Strongly Recommended Early Additions
- `task_paused`
- `resource_created`

### Deliverables
- readable run history
- visible trace of the working workflow
- no silent transitions

### Definition of Done
This block is done when:
- you can reconstruct the task lifecycle from the trace
- the dashboard does not require guesswork to explain what happened

---

## 16. Block 6 — Durable Output Save

### Objective
Prove deliberate storage without building the full memory system.

### Tasks
- add a simple save behavior for final outputs
- store durable outputs separately from live task state
- record save outcome in task detail
- place saved output in a predictable folder or storage location
- optionally write a `resource_created` event

### Deliverables
- first durable output flow
- visible distinction between live state and saved artifact
- early proof of deliberate memory behavior

### Definition of Done
This block is done when:
- final output can be saved intentionally
- saved output is visible as distinct from current run state
- the system does not automatically store every intermediate step as durable memory

---

## 17. Block 7 — Simple Approval Pause

### Objective
Prove that the architecture can stop before consequence.

### Tasks
- add a simple “approval required” state
- block continuation when approval is missing
- surface a visible pause/banner/panel in the UI
- allow manual state change to simulate approval
- resume flow only after approval status changes

### Minimum Event Types Required Here
- `approval_requested`
- `task_paused`

### Deliverables
- visible approval boundary
- proof that the system can stop rather than continue blindly

### Definition of Done
This block is done when:
- a task can enter a paused approval state
- the pause is visible in the dashboard
- the workflow cannot continue until the approval state changes

---

## 18. Block 8 — End-to-End Validation

### Objective
Validate the entire minimum buildable slice as one working proof.

### Test Flow
1. enter a research-oriented task  
2. observe task creation and classification  
3. observe route to Research Specialist  
4. observe returned findings  
5. observe route to Writing and Structuring  
6. observe returned final output  
7. inspect run history  
8. save final output deliberately  
9. trigger a simple approval-required case  
10. confirm task pauses visibly

### Deliverables
- first complete proof path
- first internal demonstration run
- first usable implementation baseline

### Definition of Done
This block is done when:
- the full flow can be run from intake to completion
- the system remains visibly governed
- the trace is understandable
- the output is genuinely useful

---

## 19. Mock vs Real Implementation Guidance

To keep the sprint practical, use this rule:

### Real in Sprint 1
- task intake
- Conductor classification
- state updates
- event recording
- OpenClaw handoff and return
- visible task and trace rendering
- deliberate output save
- simple approval stop

### Acceptable to Mock or Simplify
- deep memory promotion logic
- advanced approval detail views
- full policy categories
- agent status richness
- advanced filtering
- resource search
- multi-workflow switching
- complete runtime internals beyond needed handoffs

This preserves truth while reducing drag.

---

## 20. Suggested Ticket Order

A practical implementation ticket order is:

1. Create project structure  
2. Build shell layout  
3. Add task intake form  
4. Add Conductor classification and state creation  
5. Add task list rendering  
6. Add task detail rendering  
7. Add minimal run/event store  
8. Add OpenClaw Research Specialist handoff  
9. Add research return rendering  
10. Add Writing and Structuring handoff  
11. Add final output rendering  
12. Add trace panel/history  
13. Add durable output save  
14. Add simple approval pause  
15. Run end-to-end validation and refine

This order keeps the visual surface close to the logic as it grows.

---

## 21. Cross-Block Dependencies

### Block 1 depends on:
- basic project structure

### Block 2 depends on:
- shell containers for showing live state

### Block 3 depends on:
- task intake
- Conductor state
- runtime contract baseline

### Block 4 depends on:
- working Research Specialist return path

### Block 5 depends on:
- event generation during earlier blocks

### Block 6 depends on:
- final output existing

### Block 7 depends on:
- basic state control and task status rendering

### Block 8 depends on:
- all prior blocks functioning together

This makes the sprint sequence cumulative rather than fragmented.

---

## 22. Overall Sprint Definition of Done

The sprint is complete when all of the following are true:

- a real task can enter Nexus
- the Conductor classifies it visibly
- Nexus routes it to OpenClaw for Research Specialist work
- OpenClaw returns structured findings visibly
- Nexus routes the task to Writing and Structuring
- the final output returns visibly
- the run history is readable
- owner, stage, and next action are visible
- final output can be saved intentionally
- the system can enter an approval pause state
- the whole experience feels like a governed command centre rather than disconnected pieces

---

## 23. Risks During the Sprint

The main sprint risks are:

- trying to include too many roles
- overbuilding the UI before the flow works
- building runtime behavior without visible state updates
- recording too little event data to reconstruct the run
- confusing saved output with live working state
- leaving approval behavior until too late
- letting OpenClaw become invisible behind the shell

These risks should be watched actively during implementation.

---

## 24. Guardrails

During the sprint, use these guardrails:

1. If a task transition is not visible, fix visibility before adding more capability.  
2. If OpenClaw returns are vague, tighten the return contract before expanding runtime scope.  
3. If state feels confusing, simplify the fields before adding more of them.  
4. If a workflow branch complicates the proof, defer it.  
5. If a feature does not help the first end-to-end path, it is probably not a sprint-one feature.

---

## 25. What Comes Immediately After This Sprint

If this sprint succeeds, the next likely moves are:

- activate Workflow 2
- strengthen approval categories
- expand trace richness
- add stronger memory promotion rules
- add fuller resource browsing
- activate Business and Operations Specialist
- refine runtime visibility and failure handling
- improve dashboard density and control panels

But only after the first proof is stable.

---

## 26. Closing Principle

The purpose of the first sprint is not to impress by breadth.

It is to produce a trustworthy first proof.

If the sprint ends with one clean working workflow, visible governance, readable trace history, and a real Nexus ↔ OpenClaw relationship, then it has done exactly what Phase 1 requires.

---

## 27. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#sprint-plan`  
`#minimum-buildable-slice`  
`#implementation`  
`#openclaw`  
`#workflow1`
