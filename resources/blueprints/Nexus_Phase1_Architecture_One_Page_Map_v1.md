# Nexus Phase 1 Architecture One-Page Map  
## Compact Reference for the Command Centre, Runtime, Workflow 1, State, Trace, Approval, and Output Path

**Document ID:** NEXUS-P1-MAP-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Quick Architecture Reference  
**Purpose:** Provide a compact one-page architectural map of Nexus Phase 1 so the command-centre structure, runtime boundary, first workflow path, state truth, trace logic, approval stop, and output/save path can be understood quickly without reopening the full design library  
**Last Updated:** 2026-04-06  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`  
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`  
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`  
- `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md`  
- `Nexus_Phase1_UI_Field_Binding_and_Data_Contract_v1.md`  
- `Nexus_Phase1_Quick_Start_Implementation_Brief_v1.md`

---

## 1. What Nexus Phase 1 Is

**Nexus Phase 1** is a **private governed command centre** built to coordinate **OpenClaw** as its runtime.

In plain terms:

- **Nexus** = command surface, governance, visibility, coordination
- **OpenClaw** = runtime, bounded execution, specialist work phases
- **Goal** = prove one real workflow cleanly before widening further

---

## 2. Core Architecture in One View

```text
User / Input
    ↓
Task Intake
    ↓
Conductor
(classify → route → review → pause if needed)
    ↓
Nexus → OpenClaw handoff
    ↓
Specialist Phase
(Research / Writing / other bounded role)
    ↓
OpenClaw → Nexus return
    ↓
Canonical Task + Run State Update
    ↓
Dashboard / Trace / Output / Approval Surface
    ↓
Final Output / Optional Save / Optional Pause
```

---

## 3. Main Structural Layers

### Command Layer
**Nexus**
- receives work
- classifies work
- routes work
- shows state
- shows history
- controls approvals

### Runtime Layer
**OpenClaw**
- executes bounded specialist phases
- returns structured outputs
- surfaces failures and blocks
- never self-governs consequential action

### Control Layer
**Governance**
- defines task classes
- defines routing logic
- defines escalation
- defines approval boundaries

### State Layer
**Canonical Task + Run State**
- task truth
- run truth
- approval posture
- next action
- output/save posture

### Trace Layer
**Event / Run History**
- records what happened
- makes the system reconstructable
- supports dashboard truth

### Resource Layer
**Durable Output**
- saved intentionally
- separate from live state
- reusable later

---

## 4. Current Active Workflow

### Workflow 1 — Research Coordination
This is the current first proof path.

**Primary path:**

```text
Task Intake
→ Conductor Classification
→ Research Specialist
→ Writing and Structuring Specialist
→ Conductor Review
→ Final Output
```

Optional:
- deliberate output save
- approval pause if the task becomes consequential

---

## 5. Current Active Roles

### Active Now
- Conductor
- Research Specialist
- Writing and Structuring Specialist
- Executor Layer (minimal)

### Lightweight / Optional
- Memory and Resource Support in simple save form

### Deferred
- Business and Operations Specialist
- Technical Build Specialist
- Workflow 2 activation

---

## 6. Current State Truth

The minimum core fields that must stay truthful are:

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

If these drift, the command centre becomes misleading.

---

## 7. Current Trace Truth

The minimum event path for the first proof is:

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

If the run cannot be reconstructed from these, the first proof is not yet trustworthy.

---

## 8. Current UI Truth

The minimum UI must answer:

1. What is running?  
2. Why is it doing that?  
3. Who owns it right now?  
4. What happens next?  

### Minimum surfaces
- top bar
- active task list
- task detail view
- trace / run history view

### Minimum visible values
- task title
- current owner
- current stage
- current status
- confidence state
- next expected action
- latest events
- output summary

---

## 9. Current OpenClaw Boundary Rule

**Nexus governs. OpenClaw executes.**

### Nexus sends
- task_id
- run_id
- target_role
- current_stage
- objective
- expected_return_format

### OpenClaw returns
- acting_role
- phase_status
- current_stage
- output_summary
- next_suggested_action
- failure_or_block_reason if relevant

### Rule
Raw runtime payloads should not be treated as UI truth until translated into canonical Nexus state.

---

## 10. Current Approval Boundary Rule

Planning may proceed further than action.  
Consequence must not.

If a task reaches:
- external publishing
- outbound communication
- destructive change
- live consequential action

then the task should:
- enter approval-required posture
- pause visibly
- stop progression until approval state changes

This is one of the key truth tests for Phase 1.

---

## 11. Current Output / Save Path

The first useful output path is:

```text
Structured Final Output
    ↓
Visible in Task Detail
    ↓
Optional deliberate save
    ↓
Durable resource reference
    ↓
Linked back to task/run
```

Rule:
- save deliberately
- do not auto-promote everything
- keep live state separate from durable output

---

## 12. Current Phase 1 Focus

### Build now
- minimum buildable slice
- first implementation sprint
- Workflow 1 proof
- visible task/run truth
- OpenClaw boundary truth
- trace readability
- approval pause reality

### Do not widen yet
- Workflow 2
- extra active roles
- rich approval complexity
- broad memory promotion
- ecosystem expansion

---

## 13. One-Page Success Standard

Phase 1 is becoming real when:

- one real task can enter the system
- the Conductor visibly classifies and routes it
- OpenClaw visibly executes bounded specialist phases
- the UI truthfully shows owner, stage, and next action
- trace history is reconstructable
- output is genuinely useful
- the system can pause before consequence

That is the current architectural test.

---

## 14. Closing Principle

Build the first truth, not the full dream.

Nexus Phase 1 does not need to be wide yet.
It needs to be coherent enough that the wider ecosystem can be added later without breaking the spine.

---

## 15. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#architecture-map`  
`#one-page`  
`#governance`  
`#workflow1`  
`#openclaw`
