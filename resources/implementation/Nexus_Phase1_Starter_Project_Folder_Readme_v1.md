# Nexus Phase 1 Starter Project Folder README  
## Root-Level Orientation for Re-Entry, Current Build Focus, Key Folders, and First Documents to Open

**Document ID:** NEXUS-P1-README-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Root Reference  
**Purpose:** Provide a practical root-level README for the Nexus Phase 1 project folder so the project can be re-entered quickly after time away, the current build focus is clear, and the most important folders and documents are easy to find  
**Last Updated:** 2026-04-06  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`  
- `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`  
- `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`  
- `Nexus_Phase1_Build_Sequence_Taskboard_v1.md`  
- `Nexus_Phase1_Project_Status_Dashboard_Template_v1.md`  
- `Nexus_Phase1_Document_Index_and_Reading_Order_v1.md`  
- `Nexus_Phase1_Quick_Start_Implementation_Brief_v1.md`

---

## 1. What This Project Is

**Nexus Phase 1** is the effort to build a **private, governed command centre** that coordinates **OpenClaw** as its runtime and execution layer.

In plain terms:

- **Nexus** = command surface, governance, visibility, coordination
- **OpenClaw** = runtime, bounded execution, specialist work phases
- **Phase 1 goal** = prove one or two real workflows inside a coherent and inspectable system before widening into a broader ecosystem

This folder is not for the full ecosystem yet.

It is for building the **Phase 1 spine** cleanly.

---

## 2. Current Build Focus

The current focus is the **first trustworthy proof** of Nexus Phase 1.

That means the build is centered on:

- **Workflow 1 — Research Coordination**
- Conductor-led task intake and routing
- Nexus ↔ OpenClaw bounded handoff and return
- visible task/run state
- readable trace history
- structured final output
- simple approval-stop capability

Do **not** widen into Workflow 2 or broader ecosystem work until the first proof is genuinely trustworthy and stable.

---

## 3. What Success Looks Like Right Now

The current proof target is:

**A real research-oriented task can enter Nexus, be classified by the Conductor, be routed into OpenClaw for specialist work, return as useful structured output, appear truthfully in the dashboard and trace history, and pause before consequence if approval is required.**

If that works cleanly, the Phase 1 spine is real in miniature.

---

## 4. Re-Entry After Time Away

If you have been away from the project and need to get back in quickly, use this order:

### Fast Re-Entry
1. open the status dashboard template  
2. open the quick start implementation brief  
3. open the build-sequence taskboard  
4. open the first implementation sprint plan  
5. open the minimum buildable slice  
6. open the Workflow 1 spec if you are working on the proof path  
7. open the OpenClaw integration spec if you are working on handoff/return behavior  
8. open the UI field binding contract if you are working on shell rendering  

That should get you back into the live build posture without rereading the whole library.

---

## 5. First Documents to Read

If you are orienting yourself from scratch, open these first:

### Foundation
- `Nexus_Phase1_Blueprint_v1_Resource.md`
- `Nexus_Phase1_Build_Order_Checklist_v1.md`

### Current Build
- `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`
- `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`
- `Nexus_Phase1_Build_Sequence_Taskboard_v1.md`

### Current Working Truth
- `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md`
- `Nexus_Phase1_UI_Field_Binding_and_Data_Contract_v1.md`
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`

### Current Control Layer
- `Nexus_Phase1_Project_Status_Dashboard_Template_v1.md`
- `Nexus_Phase1_Implementation_Checkpoint_Review_v1.md`
- `Nexus_Phase1_Risk_Register_and_Mitigation_Log_v1.md`

---

## 6. Current “Always Open” Set

During active implementation, the most useful always-open set is:

- `Nexus_Phase1_Quick_Start_Implementation_Brief_v1.md`
- `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`
- `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`
- `Nexus_Phase1_Build_Sequence_Taskboard_v1.md`
- `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md`
- `Nexus_Phase1_UI_Field_Binding_and_Data_Contract_v1.md`
- `Nexus_Phase1_Component_Map_and_Implementation_Ownership_v1.md`
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`
- `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`

You do not need the entire document library open to build productively.

---

## 7. Recommended Root Folder Structure

A practical Phase 1 root structure is:

```text
Nexus/
├── README.md
├── resources/
├── frontend/
├── backend/
├── integrations/
├── runtime/
├── logs/
├── archives/
└── notes/
```

If the actual working tree differs, bring it closer to this pattern over time rather than letting ad hoc folder growth become normal.

---

## 8. Recommended `resources/` Structure

The most important folder is `resources/`.

Suggested structure:

```text
resources/
├── blueprints/
├── governance/
├── agents/
├── memory/
├── workflows/
├── dashboard/
├── integrations/
├── implementation/
├── references/
├── templates/
└── outputs/
```

This keeps architecture, implementation, workflow, and durable outputs from collapsing into one undifferentiated pile.

---

## 9. Where Key Document Types Belong

### `resources/blueprints/`
- blueprint documents
- high-level build order
- architectural orientation

### `resources/agents/`
- role definitions
- responsibilities
- escalation boundaries

### `resources/governance/`
- routing rules
- approval policy
- event schema
- state vocabulary

### `resources/memory/`
- memory model
- resource taxonomy
- storage and naming rules

### `resources/dashboard/`
- dashboard information architecture
- UI field/data contract

### `resources/workflows/`
- Workflow 1 spec
- Workflow 2 spec

### `resources/integrations/`
- OpenClaw runtime integration spec

### `resources/implementation/`
- minimum buildable slice
- sprint plan
- taskboard
- checkpoint review
- risk register
- milestone register
- status dashboard
- daily log templates

---

## 10. Current Workflow Posture

### Active Now
- **Workflow 1 — Research Coordination**

### Deferred Until Legitimate
- **Workflow 2 — Business and Operations Coordination**

Workflow 2 should remain deferred until:
- Workflow 1 is trustworthy
- checkpoint review is supportive
- risk pressure is acceptable
- approval-stop behavior is real
- the build is not still overloaded with truth-layer weaknesses

---

## 11. Current Role Posture

### Active for the First Proof
- Conductor
- Research Specialist
- Writing and Structuring Specialist
- Executor Layer (minimal)

### Lightweight / Optional
- Memory and Resource Support in simple save form

### Deferred
- Business and Operations Specialist
- Technical Build Specialist

This keeps the first proof path lean and reduces unnecessary coordination noise.

---

## 12. Current Project-Control Rhythm

Use this rhythm to keep the project coherent:

### During Daily Work
- update the daily implementation log
- move taskboard items honestly
- keep the status dashboard current

### During Meaningful Review Moments
- use the checkpoint review
- update the risk register
- reassess proof level
- update milestone posture

### Before Widening
- review proof completion criteria
- review post-proof next steps map
- confirm Workflow 2 posture explicitly

The project should widen by evidence, not by mood.

---

## 13. Current Do-Not-Drift Rules

While building Phase 1, do **not**:

- widen into Workflow 2 too early
- activate extra roles because they are interesting
- let OpenClaw become the hidden truth of the system
- let the shell look more truthful than the underlying state really is
- count placeholder or mock behavior as done
- overbuild memory before save discipline is real
- overbuild approval complexity before a simple pause is working
- confuse broader ecosystem imagination with current Phase 1 priorities

The current job is to prove the spine.

---

## 14. Current Project Control Questions

At any time, you should be able to answer:

1. What is the current proof level?  
2. What is the current build stage?  
3. What are the top 3 Now items?  
4. What are the top 3 risks?  
5. Is Workflow 2 still deferred?  
6. What is the next gate decision?  

If those answers are fuzzy, update the status dashboard and taskboard before widening the work.

---

## 15. Current Proof Progress Interpretation

Unless actual code/build evidence says otherwise, the safe current interpretation is:

- **Foundation locked** = reached
- **Minimum slice assembled** = in progress
- **First end-to-end Workflow 1 run** = target milestone
- **Trustworthy first proof** = not yet assumed
- **Workflow 2 activation** = deferred until explicitly justified

This prevents emotional overestimation based on document completeness alone.

---

## 16. Recommended Root-Level Files

A practical root-level set could be:

```text
README.md
resources/
frontend/
backend/
integrations/
runtime/
logs/
archives/
notes/
```

Inside `resources/implementation/`, the most active control files are likely to be:

- `Nexus_Phase1_Quick_Start_Implementation_Brief_v1.md`
- `Nexus_Phase1_Project_Status_Dashboard_Template_v1.md`
- `Nexus_Phase1_Build_Sequence_Taskboard_v1.md`
- `Nexus_Phase1_Daily_Implementation_Log_Template_v1.md`

These form a practical control cluster.

---

## 17. Quick Re-Entry Checklist

Use this when reopening the project after a gap.

- [ ] Open the status dashboard
- [ ] Check current proof level
- [ ] Check current gate decision
- [ ] Check Workflow 2 posture
- [ ] Open the taskboard
- [ ] Confirm top 3 Now items
- [ ] Open the quick-start brief
- [ ] Open the current workflow spec if needed
- [ ] Open the OpenClaw integration spec if working on runtime flow
- [ ] Open the daily log or checkpoint notes from the most recent session

This should be enough to re-enter the build without confusion.

---

## 18. What This README Should Prevent

If used properly, this README should help prevent:

- losing the project’s current center of gravity
- forgetting where the most important folders are
- reopening the wrong documents first
- pulling in deferred work too early
- confusing document progress with build progress
- widening beyond the minimum slice before proof is trustworthy

---

## 19. Success Criteria

This root-level README is working correctly when:

- you can re-enter the project quickly
- the current build focus is obvious
- the folder structure is easier to navigate
- the most important documents are easy to find
- the project feels governed at the folder level as well as the system-design level

---

## 20. Closing Principle

A project root should do more than hold files.

It should tell the truth about where the project is and what matters right now.

For Nexus Phase 1, that means the README should keep the build anchored to the first trustworthy proof, not the full ecosystem dream.

---

## 21. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#readme`  
`#project-root`  
`#implementation`  
`#governance`  
`#openclaw`
