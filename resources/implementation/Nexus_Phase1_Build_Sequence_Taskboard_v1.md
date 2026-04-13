# Nexus Phase 1 Build Sequence Taskboard  
## Now, Next, Soon, Later, Blocked, and Definition-of-Done Views for the First Working Build

**Document ID:** NEXUS-P1-TASKBOARD-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Convert the Phase 1 minimum buildable slice, sprint plan, component map, and implementation sequence into a practical taskboard structure that supports execution, prioritization, dependency awareness, and visible progress tracking  
**Last Updated:** 2026-04-06  
**Related Documents:**  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`  
- `Nexus_Phase1_Dashboard_Information_Architecture_v1.md`  
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`  
- `Nexus_Phase1_Workflow2_Business_Operations_Coordination_Spec_v1.md`  
- `Nexus_Phase1_Policy_and_Approval_Types_v1.md`  
- `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`  
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`  
- `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`  
- `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`  
- `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md`  
- `Nexus_Phase1_UI_Field_Binding_and_Data_Contract_v1.md`  
- `Nexus_Phase1_Component_Map_and_Implementation_Ownership_v1.md`

---

## 1. Purpose

This document defines a practical **build-sequence taskboard** for Nexus Phase 1.

Its purpose is to convert the wider design and sprint material into a working execution board that makes it easier to answer:

- what should be built now
- what should happen next
- what can wait
- what is blocked by dependency
- what “done” actually means for each item

This is not a replacement for the blueprint or sprint plan.

It is the **execution-facing compression layer**.

---

## 2. Core Principle

**A good taskboard should reduce cognitive load, not add another layer of ambiguity.**

The taskboard should help you build the first working Nexus without needing to mentally translate the whole architecture every time.

A useful rule is:

**If a task cannot be placed clearly in Now, Next, Soon, Later, or Blocked, it is probably still too vague.**

---

## 3. Taskboard Objectives

The Phase 1 taskboard should do six things well:

### 3.1 Preserve Build Order
Tasks should appear in a sequence that respects real dependencies.

### 3.2 Preserve Scope Discipline
The first build should stay tied to the minimum buildable slice.

### 3.3 Preserve Governance
Tasks that establish visibility, routing, traceability, and pause behavior should not be treated as optional polish.

### 3.4 Preserve Practicality
The board should help you decide what to do today, not just what is theoretically important.

### 3.5 Preserve Phase Distinction
Now/Next items should support the first proof.
Soon/Later items should not crowd the immediate build.

### 3.6 Preserve Reviewability
Each item should have a simple definition of done.

---

## 4. Recommended Board Columns

The practical Phase 1 board structure is:

- **Now**
- **Next**
- **Soon**
- **Later**
- **Blocked**
- **Done**

This is more useful at your current stage than a highly abstract agile board, because it maps naturally to the first build rhythm.

---

## 5. Column Definitions

### 5.1 Now
Tasks that should be worked on immediately.

A task belongs here when:
- it supports the first working proof directly
- it has no unresolved prerequisite
- it is part of the minimum buildable slice
- delaying it blocks multiple later tasks

### 5.2 Next
Tasks that should happen after the current item or block completes.

A task belongs here when:
- it is important soon
- it depends on one or two active tasks finishing first
- it belongs to the current sprint, but not this exact moment

### 5.3 Soon
Tasks that matter for the first phase, but not for the first proof path.

A task belongs here when:
- it strengthens the system after the initial proof
- it is not a sprint-one blocker
- it becomes sensible after the minimum slice works

### 5.4 Later
Tasks that belong to broader Phase 1 or early Phase 2 thinking.

A task belongs here when:
- it is valid, but not necessary yet
- it would create drag if activated now
- it depends on architectural proof already existing

### 5.5 Blocked
Tasks that are valid but cannot move because:
- a dependency is missing
- a design decision is not settled
- a runtime or UI contract is incomplete
- another task must be completed first

### 5.6 Done
Tasks that meet their definition of done and should not be half-counted.

---

## 6. Task Card Structure

Each task card should contain:

- task name
- short purpose
- dependency note if relevant
- owning layer or component
- definition of done
- optional file or document reference

### Suggested Card Format
```text
Task Name:
Purpose:
Depends On:
Owner / Layer:
Definition of Done:
Notes:
```

This keeps cards lightweight but useful.

---

## 7. Recommended Board Horizon

For the first implementation cycle, the board should mostly focus on:

- the minimum buildable slice
- the first implementation sprint
- Workflow 1 proof path

Do not load the board heavily with Workflow 2, advanced policy, or broad UI enhancements until the first proof path is stable.

---

## 8. NOW Column

These are the tasks that should be active first.

---

### NOW-01 — Establish Project Folder Structure

**Purpose:** Create the physical home for active work.  
**Depends On:** none  
**Owner / Layer:** project structure / resource layer  
**Definition of Done:**  
- root folders exist
- `resources/`, `frontend/`, `runtime/`, `integrations/`, `logs/` exist
- active design docs have a predictable home

**Notes:**  
This reduces disorder before implementation begins.

---

### NOW-02 — Build App Shell

**Purpose:** Create the visible Nexus command-centre frame.  
**Depends On:** NOW-01  
**Owner / Layer:** shell / frontend  
**Definition of Done:**  
- top bar exists
- primary navigation exists
- central content area exists
- right-side context or trace area exists
- the app no longer feels like a blank shell

**Notes:**  
This should feel like the seat of control, not a generic chat page.

---

### NOW-03 — Create Task Intake Form

**Purpose:** Allow a real task to enter Nexus.  
**Depends On:** NOW-02  
**Owner / Layer:** frontend / task intake  
**Definition of Done:**  
- task entry surface exists
- a research-oriented task can be submitted
- task creation request can be triggered

**Notes:**  
Keep it minimal and low-friction.

---

### NOW-04 — Implement Task State Store

**Purpose:** Hold canonical task state.  
**Depends On:** NOW-03  
**Owner / Layer:** state layer  
**Definition of Done:**  
- task objects can be created
- selected task can be retrieved
- current owner/stage/status/confidence fields are stored

**Notes:**  
Use the state dictionary as source of truth.

---

### NOW-05 — Implement Conductor Classification Path

**Purpose:** Make the task governed immediately on entry.  
**Depends On:** NOW-04  
**Owner / Layer:** governance  
**Definition of Done:**  
- task receives class
- task receives workflow type
- task receives owner/stage/status/confidence posture
- task appears as a governed item in the shell

**Notes:**  
This proves Nexus is coordinating rather than just collecting input.

---

### NOW-06 — Implement Run/Event Store

**Purpose:** Make workflow history reconstructable from the beginning.  
**Depends On:** NOW-05  
**Owner / Layer:** trace / state  
**Definition of Done:**  
- run ID is created
- event list exists
- `task_created` and `task_classified` are recorded
- task can link to run history

**Notes:**  
Do not leave traceability until later.

---

### NOW-07 — Render Active Task List

**Purpose:** Surface active tasks visibly in the dashboard.  
**Depends On:** NOW-04, NOW-05  
**Owner / Layer:** frontend / task view  
**Definition of Done:**  
- task rows render from canonical task state
- task title/class/owner/stage/confidence/next action are visible
- selected task can be opened

**Notes:**  
This is the first true operational queue surface.

---

### NOW-08 — Render Task Detail View

**Purpose:** Make one task inspectable.  
**Depends On:** NOW-06, NOW-07  
**Owner / Layer:** frontend / detail view  
**Definition of Done:**  
- task summary renders
- current owner/stage/status render
- timeline/event section exists
- output area exists even if initially empty

**Notes:**  
This is where the system starts to become legible.

---

## 9. NEXT Column

These are the tasks that should follow immediately after the Now column begins to stabilize.

---

### NEXT-01 — Implement Routing Controller

**Purpose:** Assign the task to the correct next role.  
**Depends On:** NOW-05  
**Owner / Layer:** governance  
**Definition of Done:**  
- Research Coordination route can be selected
- next owner and stage update correctly
- `task_routed` event can be created

---

### NEXT-02 — Build OpenClaw Handoff Adapter

**Purpose:** Send a bounded governed request into OpenClaw.  
**Depends On:** NEXT-01  
**Owner / Layer:** integrations  
**Definition of Done:**  
- task/run/role/stage/objective fields are packaged
- outbound handoff contract is valid
- the Research Specialist phase can be requested

---

### NEXT-03 — Build OpenClaw Return Translator

**Purpose:** Translate runtime results into canonical Nexus state.  
**Depends On:** NEXT-02  
**Owner / Layer:** integrations / state bridge  
**Definition of Done:**  
- runtime return fields map into task state
- runtime return fields map into run events
- owner/stage/status/output summary update visibly

---

### NEXT-04 — Support Research Specialist Phase

**Purpose:** Prove the first bounded runtime phase.  
**Depends On:** NEXT-02, NEXT-03  
**Owner / Layer:** runtime / workflow 1  
**Definition of Done:**  
- task routes to Research Specialist
- bounded research phase returns a structured result
- `specialist_started` and `specialist_completed` are visible

---

### NEXT-05 — Render Trace / Run History View

**Purpose:** Show how the task moved through the system.  
**Depends On:** NOW-06, NEXT-03  
**Owner / Layer:** frontend / trace  
**Definition of Done:**  
- ordered event list renders
- major events are readable
- run summary is visible
- the task no longer requires guesswork to explain history

---

### NEXT-06 — Add Writing and Structuring Phase

**Purpose:** Complete the first end-to-end workflow.  
**Depends On:** NEXT-04  
**Owner / Layer:** workflow 1 / runtime / governance  
**Definition of Done:**  
- Conductor routes returned research output onward
- Writing and Structuring phase returns final structured output
- final output appears in task detail
- `task_completed` can occur cleanly

---

## 10. SOON Column

These are the tasks that become sensible once the first proof path is working.

---

### SOON-01 — Add Deliberate Output Save

**Purpose:** Distinguish live run state from saved resource output.  
**Depends On:** NEXT-06  
**Owner / Layer:** resource/output layer  
**Definition of Done:**  
- final output can be saved intentionally
- save result updates task detail
- `resource_created` event is optionally logged

---

### SOON-02 — Add Simple Approval Pause

**Purpose:** Prove the system can stop before consequence.  
**Depends On:** NEXT-06  
**Owner / Layer:** policy / approval layer  
**Definition of Done:**  
- task can enter approval-required state
- progression stops visibly
- approval state can resume the task manually

---

### SOON-03 — Add Governance Overview Summary Cards

**Purpose:** Improve at-a-glance system posture.  
**Depends On:** NOW-07, NEXT-05  
**Owner / Layer:** frontend / overview  
**Definition of Done:**  
- active task count visible
- approval pending count visible
- blocked/escalated summary visible
- recent activity surface visible

---

### SOON-04 — Add Resource Metadata Store

**Purpose:** Make saved outputs retrievable and linkable.  
**Depends On:** SOON-01  
**Owner / Layer:** state / resources  
**Definition of Done:**  
- saved outputs register as resource metadata
- linked resource references appear in task detail
- recent resources can be listed

---

## 11. LATER Column

These are valid, but deliberately not first-proof tasks.

---

### LATER-01 — Activate Workflow 2

**Purpose:** Extend Nexus into Business and Operations Coordination.  
**Depends On:** Workflow 1 stable  
**Owner / Layer:** workflow / governance / runtime  
**Definition of Done:**  
- second workflow runs end to end
- approval boundaries are visible
- system remains coherent under second-path pressure

---

### LATER-02 — Activate Business and Operations Specialist

**Purpose:** Support the second workflow properly.  
**Depends On:** LATER-01 planning  
**Owner / Layer:** runtime / roles  
**Definition of Done:**  
- role can receive bounded work
- outputs are structured
- role respects governance boundaries

---

### LATER-03 — Expand Approval Categories

**Purpose:** Move from simple approval stop to fuller approval policy.  
**Depends On:** SOON-02  
**Owner / Layer:** policy / approval  
**Definition of Done:**  
- approval categories implemented
- consequence levels visible
- approval items become richer than simple pause state

---

### LATER-04 — Expand Memory Promotion Rules

**Purpose:** Move from save behavior to fuller memory discipline.  
**Depends On:** SOON-01  
**Owner / Layer:** memory / governance  
**Definition of Done:**  
- deliberate promotion path exists
- durable outputs and project memory stay distinct
- memory clutter is controlled

---

### LATER-05 — Add Agent Status View

**Purpose:** Surface role posture more fully.  
**Depends On:** first proof stable  
**Owner / Layer:** frontend / dashboard  
**Definition of Done:**  
- available roles render
- active/busy/error posture render
- current role activity is visible

---

## 12. BLOCKED Column

These are tasks that may exist conceptually, but should not move until their prerequisites are complete.

---

### BLOCKED-01 — Rich Approval Detail View

**Blocked By:** simple approval pause not yet proven  
**Reason:** do not build complex approval UI before the approval boundary itself works

---

### BLOCKED-02 — Full Resource Browser

**Blocked By:** resource metadata layer not yet in use  
**Reason:** browsing resources is not valuable before outputs are being saved meaningfully

---

### BLOCKED-03 — Advanced Trace Filters

**Blocked By:** canonical event history not yet sufficiently populated  
**Reason:** filtering empty or shallow logs is premature

---

### BLOCKED-04 — Technical Build Specialist Runtime Activation

**Blocked By:** first workflow proof path still being established  
**Reason:** do not widen active roles before the first runtime path is stable

---

### BLOCKED-05 — Broad Multi-Workflow Switching

**Blocked By:** Workflow 1 not yet proven  
**Reason:** additional branching increases confusion before core proof exists

---

## 13. DONE Column Guidance

A task belongs in Done only when:
- its output is visible
- it meets the stated definition of done
- it does not need re-interpretation to count as completed
- dependent work can build on it confidently

A task does **not** belong in Done if:
- only design exists but no implementation occurred
- the UI exists but state is fake in a misleading way
- the runtime handoff works but visibility is missing
- the feature exists but its governance path is not clear

---

## 14. Suggested Current Board Order

If you want a very practical starting board, the opening sequence should be:

### Now
- Establish Project Folder Structure
- Build App Shell
- Create Task Intake Form
- Implement Task State Store
- Implement Conductor Classification Path
- Implement Run/Event Store
- Render Active Task List
- Render Task Detail View

### Next
- Implement Routing Controller
- Build OpenClaw Handoff Adapter
- Build OpenClaw Return Translator
- Support Research Specialist Phase
- Render Trace / Run History View
- Add Writing and Structuring Phase

### Soon
- Add Deliberate Output Save
- Add Simple Approval Pause
- Add Governance Overview Summary Cards
- Add Resource Metadata Store

This is the cleanest path from design to first proof.

---

## 15. Suggested Weekly or Session Rhythm

A practical use rhythm for this board is:

### Start of session
- choose 1–3 Now items
- confirm no dependency is missing
- confirm the definition of done is small enough

### Mid-session
- move items to Blocked if a real dependency appears
- do not keep pretending a blocked item is still active work

### End of session
- move only truly finished items to Done
- move follow-on items into Now from Next if the path is clear
- note any architecture pressure or confusion

This keeps the taskboard honest.

---

## 16. Definitions of Done: Global Rules

A task should only count as done when:

1. the visible result exists  
2. the result aligns with the architecture documents  
3. the state/trace/governance implications are coherent  
4. the result is usable by the next task in the sequence  
5. the system truth is not hidden behind mock behavior  

This prevents false progress.

---

## 17. Failure Modes to Avoid

To preserve momentum and coherence, avoid:

- filling Now with too many items
- moving speculative items into Now because they are exciting
- counting design intent as implementation completion
- keeping blocked tasks in active work for too long
- widening active roles too early
- letting UI polish outrun workflow truth
- adding Workflow 2 pressure before Workflow 1 proves itself

---

## 18. Success Criteria

The build-sequence taskboard is working correctly when:

- you can tell what to work on immediately
- current work respects real dependencies
- the minimum buildable slice remains protected
- progress becomes visible without self-deception
- the board helps you reduce scope pressure rather than increase it
- the first proof path reaches Done in a disciplined order

---

## 19. Closing Principle

A good taskboard is a form of governance.

It prevents the imagination from outrunning the build.

For Nexus Phase 1, that is exactly what you need:
not less vision, but a cleaner path through it.

---

## 20. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#taskboard`  
`#implementation`  
`#sprint`  
`#build-sequence`  
`#openclaw`
