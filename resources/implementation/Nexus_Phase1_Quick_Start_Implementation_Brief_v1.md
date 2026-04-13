# Nexus Phase 1 Quick Start Implementation Brief  
## Active Build Reference for the First Working Proof Path

**Document ID:** NEXUS-P1-QS-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Working Brief  
**Purpose:** Provide a concise, build-focused reference for the current Nexus Phase 1 implementation effort so the first working proof path can be built without repeatedly reopening the full design library  
**Last Updated:** 2026-04-06  
**Related Documents:**  
- `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`  
- `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`  
- `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md`  
- `Nexus_Phase1_UI_Field_Binding_and_Data_Contract_v1.md`  
- `Nexus_Phase1_Component_Map_and_Implementation_Ownership_v1.md`  
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`  
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`  
- `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`  
- `Nexus_Phase1_Build_Sequence_Taskboard_v1.md`

---

## 1. What You Are Building Right Now

You are **not** building the whole Nexus ecosystem.

You are building the **first trustworthy proof** of Nexus Phase 1:

**A private command-centre shell that can accept one research-oriented task, route it through the Conductor, hand it into OpenClaw, receive structured output back, show task/run history clearly, and stop at an approval boundary if needed.**

That is enough.

---

## 2. Current Build Focus

### Primary Goal
Prove **Workflow 1 — Research Coordination** end to end.

### Current Active Roles
- Conductor
- Research Specialist
- Writing and Structuring Specialist
- Executor Layer (minimal)
- Memory / Resource Support only in lightweight save form if needed

### Deferred for Now
- Workflow 2
- Business and Operations Specialist activation
- Technical Build Specialist activation
- rich approval UI
- advanced memory promotion
- broad integrations
- multi-workflow switching

---

## 3. First Proof Path

The first working path is:

**Task Intake → Conductor Classification → Research Specialist → Writing and Structuring Specialist → Conductor Review → Final Output**

Optional, only if ready:
- save final output deliberately
- trigger a simple approval pause when consequence appears

If this path works cleanly, Phase 1 is real in miniature.

---

## 4. What the UI Must Show

The first build only needs to show enough to make the system governable.

### Required Surfaces
- Top bar
- Active task list
- Task detail view
- Trace / run history view

### The UI Must Make These Visible
- task title
- task class
- current owner
- current stage
- current status
- confidence state
- next expected action
- latest major events
- final output summary when available

### The UI Must Answer
1. What is running?  
2. Why is it doing that?  
3. Who owns it right now?  
4. What happens next?  

If the UI cannot answer those, it is not ready.

---

## 5. Minimum State You Must Keep Truthful

Do not overbuild state.  
Do keep these fields accurate:

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

These are the core truth fields.

---

## 6. Minimum Event Set

You do not need the full event universe first.

You do need these:

- `task_created`
- `task_classified`
- `task_routed`
- `specialist_started`
- `specialist_completed`
- `task_completed`

Strong early additions:
- `task_paused`
- `approval_requested`
- `resource_created`

If you cannot reconstruct the run, the system is not yet trustworthy.

---

## 7. OpenClaw Boundary Rule

Keep this simple and strict:

**Nexus governs. OpenClaw executes.**

### Nexus sends:
- task_id
- run_id
- target_role
- current_stage
- objective
- expected_return_format

### OpenClaw returns:
- acting_role
- phase_status
- current_stage
- output_summary
- next_suggested_action
- failure_or_block_reason if relevant

Do not render raw runtime fragments directly in the UI.
Translate them into canonical Nexus state first.

---

## 8. Immediate Now List

Use this as the current execution order:

1. establish project folder structure  
2. build app shell  
3. create task intake form  
4. implement task state store  
5. implement Conductor classification path  
6. implement run/event store  
7. render active task list  
8. render task detail view  
9. implement routing controller  
10. build OpenClaw handoff adapter  
11. build OpenClaw return translator  
12. support Research Specialist phase  
13. render trace / run history  
14. add Writing and Structuring phase  
15. add deliberate output save  
16. add simple approval pause  
17. run full end-to-end validation  

That is the path. Do not widen it unless the path is working.

---

## 9. Do Not Drift Reminders

Do **not**:
- activate Workflow 2 yet
- add extra roles because they are interesting
- let OpenClaw become the hidden truth of the system
- build UI polish ahead of workflow truth
- count placeholder behavior as finished
- auto-save everything into memory
- delay trace visibility until later
- delay approval pause until later

The minimum slice should be smaller, not weaker.

---

## 10. What Counts as Success This Week

You are succeeding if you can do this:

- submit a real research-oriented task
- see it appear in Nexus
- see the Conductor classify it
- see it route to Research Specialist
- receive structured findings back
- see it route onward to Writing and Structuring
- receive a clean final output
- inspect the event history
- optionally save the output deliberately
- visibly pause the task if approval is required

If that works, you have a genuine first proof.

---

## 11. What to Keep Open While Building

Keep these documents closest:

- `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`
- `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`
- `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md`
- `Nexus_Phase1_UI_Field_Binding_and_Data_Contract_v1.md`
- `Nexus_Phase1_Component_Map_and_Implementation_Ownership_v1.md`
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`
- `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`
- `Nexus_Phase1_Build_Sequence_Taskboard_v1.md`

You do not need the whole library open every time.

---

## 12. When to Stop Building and Review

Pause and use the checkpoint review if:
- the UI looks convincing but the state feels vague
- OpenClaw returns are unclear
- the task list and detail view disagree
- trace history is incomplete
- approval behavior is late or uncertain
- you feel tempted to start Workflow 2 before Workflow 1 is clean

That temptation usually means it is time to stabilize, not widen.

---

## 13. Closing Principle

Build the first truth, not the full dream.

Nexus Phase 1 wins by proving that one governed workflow can live cleanly inside a real command-centre shell.

Everything else can come after that.

---

## 14. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#quick-start`  
`#implementation`  
`#workflow1`  
`#governance`  
`#openclaw`
