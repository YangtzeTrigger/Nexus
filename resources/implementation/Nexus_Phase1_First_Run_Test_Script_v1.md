# Nexus Phase 1 First Run Test Script  
## Guided Validation Script for the First End-to-End Research Coordination Proof

**Document ID:** NEXUS-P1-TEST-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Test Resource  
**Purpose:** Provide a practical first-run validation script for the Nexus Phase 1 minimum buildable slice so the first end-to-end workflow can be tested against expected routing, state changes, events, UI visibility, output quality, and approval pause behavior  
**Last Updated:** 2026-04-06  
**Related Documents:**  
- `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`  
- `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`  
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`  
- `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md`  
- `Nexus_Phase1_UI_Field_Binding_and_Data_Contract_v1.md`  
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`  
- `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`  
- `Nexus_Phase1_Implementation_Checkpoint_Review_v1.md`

---

## 1. Purpose

This document provides a **practical first-run test script** for Nexus Phase 1.

Its purpose is to help validate that the first working build can do more than merely render UI or return text. It should prove that Nexus can:

- receive a real task
- classify it through the Conductor
- route it into OpenClaw
- receive bounded specialist output back
- pass the work through a second governed phase
- show state and trace history clearly
- produce a useful final result
- pause at an approval boundary if required

This is the first proof script, not a broad test suite.

It is designed to answer one question clearly:

**Does the first Nexus workflow actually work as a governed command-centre path?**

---

## 2. Core Principle

**Test the architecture truth, not just the visible output.**

A run should only count as successful if:
- the task path is visible
- the state is coherent
- the runtime boundary is legible
- the event history is reconstructable
- the result is useful
- the system does not silently cross a consequence boundary

---

## 3. Test Scope

This script validates the **minimum buildable slice** using:

- Workflow 1 — Research Coordination
- Conductor
- Research Specialist
- Writing and Structuring Specialist
- OpenClaw runtime handoff and return
- task/run state updates
- event history
- basic save behavior if available
- simple approval pause variant if available

It does **not** assume:
- Workflow 2 is active
- full approval policy categories are implemented
- full memory promotion is implemented
- the complete dashboard is finished
- all role surfaces are live

---

## 4. Test Preconditions

Before running this script, confirm the following are available:

- task intake surface exists
- task state can be created
- Conductor classification path exists
- run/event store exists
- OpenClaw handoff adapter exists
- OpenClaw return translator exists
- task detail view exists
- trace or run history view exists
- Writing and Structuring phase is available
- final output can be displayed
- optional: save behavior exists
- optional: simple approval pause exists

If several of these are missing, the script should be used as a target rather than a strict execution checklist.

---

## 5. Primary Test Input

Use the following input for the first proof run.

### Test Task
**“Research lightweight ways to structure Nexus Phase 1 development notes into reusable internal resources, compare 3 practical options, and turn the findings into a concise internal project note.”**

### Why This Input Works
It is useful because it:
- is clearly research-oriented
- is internal
- does not require external action
- benefits from both Research Specialist and Writing and Structuring
- can optionally produce a durable output
- stays low-risk while still testing real orchestration

---

## 6. Expected Initial Interpretation

### Expected Workflow Type
`research_coordination`

### Expected Task Class
Usually **Class B — Multi-Step Single-Track Task**

### Expected First Owner
`Conductor`

### Expected Initial Confidence State
`guided`

### Expected Approval Posture
`not_required`

### Expected Initial Next Action
“Conductor routes task to Research Specialist”

If these are substantially different, record why.

---

## 7. Test Sequence Overview

The expected path is:

**Task Intake → Conductor Classification → Research Specialist → Writing and Structuring Specialist → Conductor Review → Final Output**

Optional add-ons:
- deliberate output save
- simple approval-pause variant

---

## 8. Step-by-Step Test Script

## Step 1 — Submit Task

### Action
Enter the primary test task into the task intake surface.

### Expected Result
- task is accepted
- task ID is created
- run ID is created
- task appears in the dashboard or task list
- current owner is Conductor
- stage is intake or classification
- status is active

### Expected Events
- `task_created`

### Record
- visible task ID:
- visible run ID:
- intake success:
- notes:

---

## Step 2 — Conductor Classification

### Action
Allow or trigger Conductor classification.

### Expected Result
- task class assigned
- workflow type assigned
- owner remains Conductor during classification
- next action updates to routing step
- task appears governed, not merely queued

### Expected Values
- task_class = Class B
- workflow_type = research_coordination
- current_stage = classification or routing
- current_status = active
- confidence_state = guided

### Expected Events
- `task_classified`

### Record
- class assigned:
- workflow assigned:
- confidence state:
- notes:

---

## Step 3 — Route to Research Specialist

### Action
Allow or trigger routing to the Research Specialist.

### Expected Result
- current owner changes to Research Specialist
- stage changes to specialist_work
- next expected action reflects research phase
- route is visible in task detail or trace

### Expected Events
- `task_routed`
- `specialist_started` (Research Specialist)

### Record
- owner changed correctly:
- stage changed correctly:
- route visible:
- notes:

---

## Step 4 — Research Phase Execution

### Action
Allow OpenClaw to execute the bounded Research Specialist phase.

### Expected Result
- OpenClaw receives bounded request
- OpenClaw returns structured research findings
- findings are not raw noise
- findings include distinctions or options
- uncertainty, if any, is stated honestly

### Expected Return Shape
At minimum:
- acting_role = Research Specialist
- phase_status = active or phase-complete posture
- current_stage = specialist_work or review transition
- output_summary = summary of findings
- next_suggested_action = route to Writing and Structuring

### Expected Events
- `specialist_completed` (Research Specialist)

### Record
- return received:
- findings usable:
- uncertainty visible:
- notes:

---

## Step 5 — Route to Writing and Structuring

### Action
Allow or trigger Conductor review and onward routing.

### Expected Result
- Conductor regains route ownership briefly
- task routes onward to Writing and Structuring Specialist
- task remains in the same workflow
- next action reflects document structuring phase

### Expected Events
- `task_routed`
- `specialist_started` (Writing and Structuring Specialist)

### Record
- review visible:
- second route visible:
- owner updated:
- notes:

---

## Step 6 — Writing and Structuring Phase

### Action
Allow OpenClaw to execute the bounded Writing and Structuring phase.

### Expected Result
- final output is clearer than raw findings
- structure is readable
- output feels like an internal project note
- meaning is preserved
- final output is attached to the task view

### Expected Output Shape
The final output should ideally include:
- title or clear heading
- concise introduction or purpose
- structured options or findings
- useful conclusion or recommendation
- internal-note quality formatting

### Expected Events
- `specialist_completed` (Writing and Structuring Specialist)

### Record
- final output received:
- output quality:
- structure quality:
- notes:

---

## Step 7 — Task Completion

### Action
Allow or trigger Conductor completion review.

### Expected Result
- task transitions to completion
- final output remains viewable
- next expected action reflects closure or save option
- task is no longer stuck in specialist_work
- run history includes the whole path

### Expected Final Values
- current_owner = Conductor or no further active owner
- current_stage = completion
- current_status = completed
- confidence_state = completed
- approval_posture = not_required

### Expected Events
- `task_completed`

### Record
- task completed:
- final state correct:
- run complete:
- notes:

---

## 9. Expected Event Sequence

A good first proof run will usually contain at least:

1. `task_created`
2. `task_classified`
3. `task_routed`
4. `specialist_started` (Research Specialist)
5. `specialist_completed` (Research Specialist)
6. `task_routed`
7. `specialist_started` (Writing and Structuring Specialist)
8. `specialist_completed` (Writing and Structuring Specialist)
9. `task_completed`

Optional:
- `resource_created`
- `task_paused`
- `approval_requested`

If major transitions happened but are missing from the event history, the run is only partially trustworthy.

---

## 10. Expected UI Checks

### Task List Must Show
- task title
- current owner
- current stage
- confidence state
- next expected action

### Task Detail Must Show
- task summary
- route path or route summary
- ordered event history
- final output summary
- storage outcome if save occurs

### Trace View Must Show
- run ID
- major events in order
- role changes
- completion state

### Minimum UI Truth Check
The task list, task detail, and trace view should not disagree about:
- owner
- stage
- status
- what happened next

---

## 11. Output Quality Check

Use the following quick quality check for the final output.

### Strong Result
- readable
- structured
- useful
- concise but meaningful
- clearly tied to the task objective

### Weak Result
- vague
- repetitive
- poorly structured
- missing comparison value
- feels like a raw model response rather than a governed output

### Record
- output usefulness:
- output clarity:
- output structure:
- notes:

---

## 12. Optional Save Behavior Test

If deliberate save behavior exists, run this test after successful completion.

### Action
Save the final output as a durable resource.

### Expected Result
- save is intentional
- storage state updates visibly
- saved output is distinct from live task state
- linked resource reference appears in task detail
- a resource entry or reference can be retrieved later

### Expected Event
- `resource_created`

### Record
- save available:
- save successful:
- resource linked:
- notes:

---

## 13. Optional Approval Pause Variant

Use this only if simple approval pause behavior has been implemented.

### Variant Input
**“Research lightweight ways to structure Nexus Phase 1 development notes into reusable internal resources, turn the findings into a concise internal project note, and prepare it for public posting.”**

### Expected Behavior
- research and structuring may proceed
- task should not move into public action silently
- approval posture should shift
- task should visibly pause before consequence
- task should not continue without approval state change

### Expected Events
- `approval_requested`
- `task_paused`

### Expected UI Signal
- banner, panel, or blocking state visible
- task clearly marked as approval pending or paused

### Record
- approval requested:
- pause visible:
- continuation blocked:
- notes:

---

## 14. Failure and Block Checks

If the run does not behave as expected, classify the failure.

### Failure Types to Watch
- task does not classify
- route is unclear
- runtime handoff is invisible
- OpenClaw return is vague
- owner/stage do not update
- trace is incomplete
- output is weak
- task completes but UI still shows active
- approval boundary is crossed silently

### Record
- failure type:
- visible symptoms:
- likely cause:
- correction needed:

---

## 15. Pass / Partial / Fail Criteria

### PASS
Use when:
- the task runs end to end
- routing is visible
- state is coherent
- event history is reconstructable
- output is useful
- approval pause works if tested

### PARTIAL
Use when:
- the path mostly works
- but one or more of the following is weak:
  - visibility
  - state alignment
  - event coverage
  - output quality
  - runtime clarity

### FAIL
Use when:
- the workflow cannot complete
- the runtime boundary is opaque
- the UI is misleading
- the event history cannot explain the run
- the architecture truth is not being expressed

---

## 16. First Run Review Notes Template

```text
Test Date:
Build Version:
Primary Input Used:
Run ID:
Task ID:
Classification Result:
Workflow Type:
Did Research Phase Complete:
Did Writing Phase Complete:
Was Final Output Useful:
Was Trace Reconstructable:
Was Save Behavior Tested:
Was Approval Pause Tested:
Overall Result: PASS / PARTIAL / FAIL
Main Weakness:
Immediate Correction:
```

---

## 17. What to Do After the Test

### If PASS
- mark first proof path as working
- run checkpoint review
- stabilize weak edges before widening scope

### If PARTIAL
- identify the weakest layer:
  - governance
  - state
  - runtime return
  - UI binding
  - trace
  - output quality
- fix that before adding Workflow 2 or broader features

### If FAIL
- do not widen
- return to minimum slice and sprint plan
- identify whether the failure is:
  - routing truth
  - runtime visibility
  - state/UI mismatch
  - output weakness
  - missing approval stop

---

## 18. Failure Modes This Script Should Catch Early

If used properly, this script should catch:

- shell looks convincing but workflow truth is weak
- OpenClaw returns are too vague
- state fields do not update coherently
- trace is incomplete
- output is not useful enough to prove value
- approval boundary is not real
- completion is visually suggested but not truly achieved

---

## 19. Success Criteria

This test script is successful when it helps you determine clearly whether the first Nexus workflow is:

- genuinely working
- only partially working
- visually convincing but misleading
- not ready yet

It should reduce ambiguity, not increase it.

---

## 20. Closing Principle

The first run matters because it tells you whether Nexus is becoming real in the right shape.

A clean first run does not prove everything.
But it does prove that the command centre, governance path, runtime boundary, and first workflow can live together without collapsing.

That is exactly the proof Phase 1 needs first.

---

## 21. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#test-script`  
`#workflow1`  
`#validation`  
`#governance`  
`#openclaw`
