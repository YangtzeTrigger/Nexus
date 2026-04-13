# Nexus Phase 1 Build Order Checklist  
## Structured Implementation Sequence for Core Development

**Document ID:** NEXUS-P1-CHECKLIST-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Provide a practical build-order checklist for implementing Nexus Phase 1 in the correct sequence  
**Last Updated:** 2026-04-05  
**Related Document:** `Nexus_Phase1_Blueprint_v1_Resource.md`

---

## 1. Checklist Purpose

This document translates the Phase 1 blueprint into a practical sequence of build steps.

Its purpose is to help ensure that Phase 1 is developed in a disciplined order so that:

- identity is locked before expansion
- structure is built before complexity
- governance is added before external sprawl
- visibility is present before scaling decisions

This is not a feature wish list.

It is a **controlled implementation path**.

---

## 2. Core Rule

Before moving to the next stage, the current stage should be at least:

- understandable
- stable enough to test
- structurally coherent
- not actively collapsing under change

The goal is not perfection.

The goal is to avoid stacking uncertainty on top of uncertainty.

---

## 3. Stage 1 — Identity Lock

### Objective
Define what Nexus is in Phase 1 and what it is not.

### Checklist
- [ ] Define Nexus in one clear sentence
- [ ] Define OpenClaw in one clear sentence
- [ ] Define the relationship between Nexus and OpenClaw
- [ ] Define the role of the governance/orchestration layer
- [ ] Define what Phase 1 must deliver
- [ ] Define what is explicitly out of scope for Phase 1
- [ ] Define one to two target workflows only
- [ ] Define the command-centre metaphor clearly enough to guide UI decisions
- [ ] Confirm the difference between command layer, runtime layer, and action layer
- [ ] Place this definition in a permanent project resource file

### Completion Condition
Stage 1 is complete when the architecture can be explained simply and consistently without drifting into Phase 2 ideas.

---

## 4. Stage 2 — Resource and Folder Structure

### Objective
Create a clean internal project structure before the build becomes crowded.

### Checklist
- [ ] Create main project folders
- [ ] Create a dedicated `resources` folder
- [ ] Create a `blueprints` or `architecture` subfolder if needed
- [ ] Create a `governance` folder for orchestration rules
- [ ] Create an `agents` folder for role definitions
- [ ] Create a `memory` or `state` folder for structure planning
- [ ] Create a `workflows` folder
- [ ] Create a `ui` or `frontend` folder
- [ ] Create an `integration` folder for OpenClaw linkage notes
- [ ] Create a `logs` or `trace-design` folder for planning run history and visibility

### Suggested Structure
```text
Nexus/
├── resources/
│   ├── blueprints/
│   ├── governance/
│   ├── workflows/
│   ├── agents/
│   ├── memory/
│   └── references/
├── frontend/
├── backend/
├── integrations/
├── runtime/
└── notes/
```

### Completion Condition
Stage 2 is complete when the project has a stable home for documents, rules, roles, workflows, and technical build material.

---

## 5. Stage 3 — Nexus Shell Skeleton

### Objective
Create the visible structure of the command centre.

### Checklist
- [ ] Define main dashboard layout
- [ ] Define navigation structure
- [ ] Create placeholder view for governance overview
- [ ] Create placeholder view for agent status
- [ ] Create placeholder view for active tasks
- [ ] Create placeholder view for trace/run history
- [ ] Create placeholder view for memory/resources
- [ ] Create placeholder view for approvals
- [ ] Create placeholder view for confidence/weighting if used
- [ ] Confirm the interface feels like a command centre rather than a generic chatbot

### Questions to Check
- [ ] Can the dashboard show what is running?
- [ ] Can it show what is pending?
- [ ] Can it show what needs approval?
- [ ] Can it show what recently happened?

### Completion Condition
Stage 3 is complete when the shell is visually understandable even if much of the logic is still placeholder.

---

## 6. Stage 4 — OpenClaw Runtime Link

### Objective
Connect the command layer to the execution layer.

### Checklist
- [ ] Confirm Nexus can send a task into OpenClaw
- [ ] Confirm OpenClaw can return output to Nexus
- [ ] Confirm task state can be surfaced in the UI
- [ ] Confirm agent activity can be surfaced in the UI
- [ ] Confirm handoff events can be tracked
- [ ] Confirm failure states can be surfaced visibly
- [ ] Confirm output formatting is readable
- [ ] Confirm the shell and runtime remain conceptually separate

### Questions to Check
- [ ] Does Nexus govern, rather than disappear behind OpenClaw?
- [ ] Can the user tell which layer is doing what?
- [ ] Is runtime behavior legible enough to debug?

### Completion Condition
Stage 4 is complete when Nexus can visibly send, receive, and monitor real OpenClaw activity.

---

## 7. Stage 5 — Governance and Orchestration Rules

### Objective
Add the conductor logic that makes the system governed.

### Checklist
- [ ] Define the first-pass conductor role
- [ ] Define how task triage works
- [ ] Define when a task stays with one agent
- [ ] Define when a task is delegated
- [ ] Define when multiple agents may contribute
- [ ] Define when approval is required
- [ ] Define escalation rules
- [ ] Define role boundaries for specialists
- [ ] Define confidence or weighting logic if used
- [ ] Document routing rules in a stable file

### Questions to Check
- [ ] Who receives tasks first?
- [ ] Why was a task routed to that specialist?
- [ ] What causes escalation?
- [ ] What prevents one agent from overreaching?

### Completion Condition
Stage 5 is complete when routing and escalation are rule-based rather than improvised.

---

## 8. Stage 6 — Agent Role Definitions

### Objective
Define the Phase 1 agents clearly and minimally.

### Checklist
- [ ] Define the conductor agent
- [ ] Define the research agent if included
- [ ] Define the writing/structuring agent if included
- [ ] Define the technical/build agent if included
- [ ] Define the business/operations agent if included
- [ ] Define the memory/resource support role if included
- [ ] Define what each agent can do
- [ ] Define what each agent cannot do
- [ ] Define expected input and output style for each agent
- [ ] Save each role definition as a versioned resource

### Completion Condition
Stage 6 is complete when each agent has a bounded role and the system is not relying on vague “general intelligence.”

---

## 9. Stage 7 — Structured Memory Design

### Objective
Create clean memory classes before memory becomes messy.

### Checklist
- [ ] Define session state
- [ ] Define project memory
- [ ] Define event log structure
- [ ] Define knowledge resources structure
- [ ] Define what is temporary versus durable
- [ ] Define what gets written automatically
- [ ] Define what requires manual confirmation
- [ ] Define how memory supports handoffs
- [ ] Define how memory is surfaced in Nexus
- [ ] Document the memory model clearly

### Questions to Check
- [ ] What should persist across sessions?
- [ ] What should only exist during a task?
- [ ] What counts as history?
- [ ] What counts as knowledge?

### Completion Condition
Stage 7 is complete when memory has clear classes and purpose rather than becoming one large storage bucket.

---

## 10. Stage 8 — Trace and Run Visibility

### Objective
Make the system inspectable.

### Checklist
- [ ] Define what counts as a run
- [ ] Define what events should be logged
- [ ] Record task origin
- [ ] Record task route
- [ ] Record agent actions
- [ ] Record tool usage
- [ ] Record approvals
- [ ] Record failures
- [ ] Surface recent runs in the dashboard
- [ ] Confirm logs are readable rather than noisy

### Questions to Check
- [ ] Can you reconstruct what happened?
- [ ] Can you see why something failed?
- [ ] Can you tell who acted and when?

### Completion Condition
Stage 8 is complete when Nexus can explain recent activity without guesswork.

---

## 11. Stage 9 — Approval and Policy Layer

### Objective
Introduce disciplined control over meaningful actions.

### Checklist
- [ ] Define what actions require approval
- [ ] Define what actions do not require approval
- [ ] Create approval surface in the dashboard
- [ ] Show action summary before approval
- [ ] Show rationale before approval
- [ ] Allow approve / reject / revise options
- [ ] Record approval outcomes in history
- [ ] Prevent high-impact actions from bypassing policy
- [ ] Confirm approval rules are understandable
- [ ] Save policy definitions as a project resource

### Completion Condition
Stage 9 is complete when important actions are visible, pausable, and auditable.

---

## 12. Stage 10 — First Real Workflow

### Objective
Prove the system with one practical use case.

### Recommended First Workflow
Research coordination.

### Checklist
- [ ] Define the exact input form
- [ ] Define the route through conductor and specialists
- [ ] Define expected outputs
- [ ] Define what gets stored
- [ ] Define whether approval is needed at any stage
- [ ] Run the workflow end to end
- [ ] Check whether routing made sense
- [ ] Check whether memory captured useful material
- [ ] Check whether logs explain the run
- [ ] Refine until the workflow feels reliable

### Completion Condition
Stage 10 is complete when one real workflow works cleanly from intake to result.

---

## 13. Stage 11 — Second Workflow

### Objective
Test whether the architecture generalizes.

### Recommended Second Workflow
Business or operational coordination.

### Checklist
- [ ] Choose one bounded operational workflow
- [ ] Reuse the same governance spine
- [ ] Reuse the same traceability model
- [ ] Reuse the same approvals model
- [ ] Confirm the system can handle a second pattern without becoming messy
- [ ] Compare where the architecture held and where it strained
- [ ] Refine only what truly needs refinement

### Completion Condition
Stage 11 is complete when the second workflow fits the architecture without breaking coherence.

---

## 14. Stage 12 — Stability Pass

### Objective
Refine what exists before expanding further.

### Checklist
- [ ] Review all routing rules
- [ ] Review all role definitions
- [ ] Review dashboard clarity
- [ ] Review memory usefulness
- [ ] Review log readability
- [ ] Review approval burden
- [ ] Remove unnecessary complexity
- [ ] Note recurring pain points
- [ ] Note what Phase 2 should inherit
- [ ] Note what Phase 2 should not inherit

### Completion Condition
Stage 12 is complete when Phase 1 feels clean enough to trust.

---

## 15. Phase 1 Readiness Review

### Final Questions
- [ ] Can Nexus show what is running?
- [ ] Can Nexus show why it is running?
- [ ] Can Nexus show who made the decision?
- [ ] Can Nexus show what happens next?
- [ ] Is OpenClaw clearly serving as runtime rather than identity?
- [ ] Are approvals appearing in the right places?
- [ ] Is memory helping rather than cluttering?
- [ ] Are traces understandable?
- [ ] Does at least one workflow feel genuinely useful?
- [ ] Can a second workflow fit without structural confusion?

### Decision
- [ ] Ready to stabilize Phase 1
- [ ] Ready for limited Phase 2 planning
- [ ] Not ready — continue refinement

---

## 16. Notes Section

### Current Priorities
```text
1.
2.
3.
```

### Current Risks
```text
1.
2.
3.
```

### Deferred to Phase 2
```text
1.
2.
3.
```

### Observations
```text
-
-
-
```

---

## 17. Closing Principle

Do not expand Nexus because the ecosystem is exciting.

Expand Nexus when the spine is strong enough that expansion does not weaken it.

**Phase 1 wins by coherence, not by size.**
