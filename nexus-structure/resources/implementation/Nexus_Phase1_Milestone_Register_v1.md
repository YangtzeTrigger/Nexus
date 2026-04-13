# Nexus Phase 1 Milestone Register  
## Major Build Thresholds, Required Evidence, Gate Decisions, and Progression Control Across the First Proof Path

**Document ID:** NEXUS-P1-MILESTONE-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Progress Resource  
**Purpose:** Define the major Nexus Phase 1 milestones so the project can move through proof, stabilization, and controlled expansion using explicit thresholds, required evidence, and gate decisions rather than momentum alone  
**Last Updated:** 2026-04-06  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`  
- `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`  
- `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`  
- `Nexus_Phase1_Build_Sequence_Taskboard_v1.md`  
- `Nexus_Phase1_Implementation_Checkpoint_Review_v1.md`  
- `Nexus_Phase1_Risk_Register_and_Mitigation_Log_v1.md`  
- `Nexus_Phase1_First_Run_Test_Script_v1.md`  
- `Nexus_Phase1_First_Proof_Completion_Criteria_v1.md`  
- `Nexus_Phase1_Post_Proof_Next_Steps_Map_v1.md`  
- `Nexus_Phase1_Project_Status_Dashboard_Template_v1.md`  
- `Nexus_Phase1_Daily_Implementation_Log_Template_v1.md`

---

## 1. Purpose

This document defines the **Phase 1 milestone register** for Nexus.

Its purpose is to ensure that progress is measured by real thresholds rather than by:

- the number of documents created
- the number of components started
- how convincing the shell looks
- how excited the project feels
- how much activity happened recently

Instead, this register defines the major progress gates that matter in Phase 1, such as:

- when the minimum slice is assembled
- when Workflow 1 first runs end to end
- when the first proof is genuinely complete
- when stabilization is sufficient
- when Workflow 2 becomes legitimate

This is the **major-progress map** above the taskboard and daily log.

---

## 2. Core Principle

**Milestones should mark changes in trust, not just changes in activity.**

A good milestone in Phase 1 does not mean:
- “a lot was worked on”

It means:
- “the project can now do something important, truthfully, and dependably”

That is the standard.

---

## 3. What This Register Is For

Use this register to answer:

- which major milestone is current
- what evidence is needed to reach the next one
- what gate decision follows from hitting a milestone
- whether a milestone is complete, partial, or not yet reached
- whether the project is ready to stabilize, extend, or remain narrow

This document is most useful when paired with:
- the status dashboard
- the checkpoint review
- the proof completion criteria
- the risk register
- the taskboard

---

## 4. Milestone Design Rule

A Phase 1 milestone should only exist if it marks a **meaningful shift in project capability or trust**.

A milestone should:
- matter to the real build
- affect what can safely happen next
- have observable evidence
- lead to a clear decision

Avoid milestone language for:
- cosmetic progress
- document volume
- vague optimism
- partially working demos with unclear truth

---

## 5. Recommended Milestone Fields

Each milestone should include:

- milestone_id
- milestone_name
- purpose
- required evidence
- required gate decision
- completion state
- next allowed step
- not allowed yet
- notes

This is enough for a practical Phase 1 milestone register.

---

## 6. Completion States

Use the following states for milestones.

### Not Started
No meaningful evidence exists yet.

### In Progress
Partial evidence exists, but the threshold is not yet reached.

### Reached but Unstable
The milestone has been touched in practice, but is not yet dependable enough to count fully.

### Reached
The threshold has been met clearly.

### Reached and Stabilized
The threshold has been met and confirmed strongly enough to support the next major step safely.

This helps distinguish:
- “we got there once”
from
- “we can build on this now”

---

## 7. Recommended Phase 1 Milestone Sequence

The suggested milestone sequence is:

1. **M1 — Phase 1 Foundation Locked**  
2. **M2 — Minimum Slice Assembled**  
3. **M3 — First End-to-End Workflow 1 Run**  
4. **M4 — Trustworthy First Proof**  
5. **M5 — Post-Proof Stabilization Complete**  
6. **M6 — Workflow 2 Readiness Confirmed**  
7. **M7 — Controlled Workflow 2 Activation**  
8. **M8 — Phase 1 Stable Enough for Broader Phase 2 Planning**

These are not all needed immediately, but they form a clean progression path.

---

## 8. M1 — Phase 1 Foundation Locked

### Purpose
Confirm that the Phase 1 identity, structure, boundaries, and build direction are defined clearly enough to support disciplined implementation.

### Required Evidence
- blueprint exists
- build order exists
- role map exists
- governance rules exist
- memory/state model exists
- dashboard concept exists
- Phase 1 scope and out-of-scope boundaries are explicit

### Required Gate Decision
- move from planning into minimum-slice implementation

### Completion State Guidance
Reached when:
- the project can be explained simply and consistently
- Phase 2 temptation is clearly held back
- there is a stable architectural spine to build from

### Next Allowed Step
- begin minimum slice build

### Not Allowed Yet
- broad runtime activation
- multi-workflow activation
- ecosystem widening

---

## 9. M2 — Minimum Slice Assembled

### Purpose
Confirm that the smallest truthful Nexus shell has been assembled sufficiently to support the first real end-to-end proof attempt.

### Required Evidence
- app shell exists
- task intake exists
- task state exists
- run/event store exists
- Conductor classification exists
- basic task list and task detail exist
- first OpenClaw handoff path exists
- trace view exists in at least minimal form

### Required Gate Decision
- begin formal first-run validation

### Completion State Guidance
Reached when:
- the minimum slice is materially present
- the core pieces are assembled into one path
- the system is ready for a true first-run script

### Next Allowed Step
- run Workflow 1 end-to-end proof test

### Not Allowed Yet
- calling the first proof complete
- activating Workflow 2
- widening roles

---

## 10. M3 — First End-to-End Workflow 1 Run

### Purpose
Confirm that the system can complete a real research-oriented task from intake to output.

### Required Evidence
- one real Workflow 1 task entered
- Conductor classification happened
- route to Research Specialist happened
- OpenClaw returned research output
- route to Writing and Structuring happened
- final output returned
- task completed visibly
- run history exists

### Required Gate Decision
- move into checkpoint review rather than immediate expansion

### Completion State Guidance
Reached when:
- the first full path has happened once
- the path is visible enough to inspect
- the result is meaningful enough to review

### Next Allowed Step
- run checkpoint review
- decide whether the result is partial or proof-level

### Not Allowed Yet
- assuming repeatability
- calling the proof trustworthy automatically
- activating Workflow 2

---

## 11. M4 — Trustworthy First Proof

### Purpose
Confirm that the first proof meets the actual threshold for trust, not merely demonstration.

### Required Evidence
- completion criteria document assessed honestly
- first-run test script produces pass-level result
- task/run state is coherent
- trace is reconstructable
- OpenClaw boundary is legible
- output is genuinely useful
- approval-stop capability exists

### Required Gate Decision
- stabilize before widening

### Completion State Guidance
Reached when:
- the build is at least **Level 2 — Trustworthy First Proof**
- the first path can be believed, not just admired
- checkpoint review supports that interpretation

### Next Allowed Step
- post-proof stabilization
- repeatability checks
- truth-layer strengthening

### Not Allowed Yet
- immediate Workflow 2 activation
- broad expansion by mood
- deep complexity inflation

---

## 12. M5 — Post-Proof Stabilization Complete

### Purpose
Confirm that the trustworthy first proof has been made repeatable and its weakest truth layers have been improved.

### Required Evidence
- repeated Workflow 1 runs performed
- weak truth layers identified and improved
- risk pressure reviewed
- checkpoint review shows less misleading behavior
- runtime return quality improved if previously weak
- trace readability improved if previously weak

### Required Gate Decision
- consider one bounded post-proof expansion

### Completion State Guidance
Reached when:
- the first proof no longer feels lucky
- repeated runs behave coherently
- the weakest current areas are no longer obviously fragile

### Next Allowed Step
- small controlled expansion
- Workflow 2 readiness check

### Not Allowed Yet
- broad multi-lane growth
- activating multiple new complexities at once

---

## 13. M6 — Workflow 2 Readiness Confirmed

### Purpose
Make an explicit decision about whether Business and Operations Coordination is now legitimate.

### Required Evidence
- Workflow 1 is stable across repeated runs
- checkpoint review is supportive
- risk register does not show severe unresolved drift or opacity risk
- approval-stop remains real
- taskboard is not overloaded by unresolved truth-layer issues
- the post-proof next-steps map supports activation

### Required Gate Decision
- Workflow 2 stays deferred, or
- Workflow 2 is approved for controlled activation

### Completion State Guidance
Reached when:
- Workflow 2 posture is explicit
- the decision is based on evidence, not excitement

### Next Allowed Step
- controlled Workflow 2 implementation if approved

### Not Allowed Yet
- treating Workflow 2 as automatically active without a readiness decision

---

## 14. M7 — Controlled Workflow 2 Activation

### Purpose
Confirm that the second workflow has been introduced without collapsing the proven spine.

### Required Evidence
- Workflow 2 path implemented in controlled form
- governance still visible
- approval boundaries still hold
- Workflow 1 still remains stable
- no major regression in state/trace clarity
- second workflow outputs are useful

### Required Gate Decision
- continue Phase 1 stabilization with two workflows
- or pause and refactor if coherence drops

### Completion State Guidance
Reached when:
- the architecture supports two bounded workflows cleanly
- the second path does not degrade the first

### Next Allowed Step
- wider Phase 1 stabilization
- modest resource/approval/dashboard deepening

### Not Allowed Yet
- Phase 2 ecosystem sprawl

---

## 15. M8 — Phase 1 Stable Enough for Broader Phase 2 Planning

### Purpose
Confirm that Phase 1 has become stable enough to support disciplined Phase 2 thinking without undermining the command-centre spine.

### Required Evidence
- at least one workflow genuinely reliable
- ideally two workflows handled coherently
- routing stable
- approvals understandable
- memory useful rather than noisy
- trace clear
- runtime truth strong enough for extension
- risk posture acceptable

### Required Gate Decision
- limited Phase 2 planning may begin

### Completion State Guidance
Reached when:
- Phase 1 feels structurally sound
- broader ecosystem ideas no longer threaten the spine immediately

### Next Allowed Step
- careful Phase 2 planning
- not immediate uncontrolled expansion

### Not Allowed Yet
- abandoning Phase 1 discipline just because Phase 2 becomes thinkable

---

## 16. Milestone Register Table

Use this compact table to track the current position.

| Milestone ID | Milestone Name | Current State | Next Allowed Step | Not Allowed Yet |
|---|---|---|---|---|
| M1 | Phase 1 Foundation Locked |  |  |  |
| M2 | Minimum Slice Assembled |  |  |  |
| M3 | First End-to-End Workflow 1 Run |  |  |  |
| M4 | Trustworthy First Proof |  |  |  |
| M5 | Post-Proof Stabilization Complete |  |  |  |
| M6 | Workflow 2 Readiness Confirmed |  |  |  |
| M7 | Controlled Workflow 2 Activation |  |  |  |
| M8 | Phase 1 Stable Enough for Broader Phase 2 Planning |  |  |  |

---

## 17. Suggested Current Interpretation

Given the current document set and intended build path, the project is best interpreted as:

### Likely Current Milestone
- **M1 — Phase 1 Foundation Locked: Reached**
- **M2 — Minimum Slice Assembled: In Progress or Not Started in implementation terms, depending on actual code/build status**

That means the next meaningful aim is:
- **reach M2**
- then use the first-run test to push toward **M3**
- then use the checkpoint and proof criteria to determine **M4**

This prevents you from emotionally jumping ahead to M6/M7 before M2–M4 are real.

---

## 18. How to Use Milestones with Other Documents

### Pair with the Taskboard
Use milestones for major thresholds.
Use the taskboard for actual work sequencing.

### Pair with the Status Dashboard
Use the status dashboard to show:
- current milestone
- current proof level
- current next gate

### Pair with the Checkpoint Review
Use the checkpoint review to determine whether a milestone is:
- not yet reached
- reached but unstable
- reached and stabilized

### Pair with the Risk Register
Use the risk register to decide whether milestone progression is safe or misleading.

---

## 19. Milestone Decision Rules

### Do Not Advance a Milestone Because
- the UI looks nicer
- more documents exist
- one lucky run worked
- enthusiasm increased

### Do Advance a Milestone When
- evidence exists
- the threshold is actually met
- the next allowed step is now safer
- the checkpoint and risk posture support the move

---

## 20. Failure Modes to Avoid

To preserve coherence, avoid:

- treating minor tasks as milestones
- moving to later milestones emotionally
- skipping stabilization between proof and expansion
- assuming Workflow 2 is legitimate because Workflow 1 exists once
- using milestone language when the threshold is still partial
- keeping milestone states vague for too long

---

## 21. Success Criteria

This milestone register is working correctly when:

- the project’s major thresholds are explicit
- the next big target is obvious
- milestone movement requires real evidence
- stabilization and expansion remain distinct
- the build feels progressively more governed rather than merely busier

---

## 22. Closing Principle

A strong Phase 1 does not become mature because it feels active.

It becomes mature because it passes real thresholds in the right order.

The milestone register exists to protect that order.

---

## 23. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#milestones`  
`#proof`  
`#stabilization`  
`#workflow2`  
`#openclaw`
