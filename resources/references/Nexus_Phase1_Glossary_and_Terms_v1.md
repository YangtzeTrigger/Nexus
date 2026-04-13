# Nexus Phase 1 Glossary and Terms  
## Shared Language for Architecture, Governance, Workflows, Runtime, Proof, and Continuation

**Document ID:** NEXUS-P1-GLOSSARY-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Reference Resource  
**Purpose:** Define the core terms used across the Nexus Phase 1 document library so architecture, governance, workflow, implementation, proof, and continuation language remain consistent over time  
**Last Updated:** 2026-04-06  
**Related Documents:** Entire current Nexus Phase 1 resource set

---

## 1. Purpose

This document provides a shared glossary for the current Nexus Phase 1 library.

Its purpose is to ensure that repeated terms such as:
- Conductor
- proof level
- workflow type
- approval posture
- minimum slice
- checkpoint review
- controlled expansion
- runtime boundary
- task state
- durable resource

continue to mean the same thing across:
- architecture docs
- governance docs
- workflow specs
- implementation docs
- review and risk docs
- project-control templates

This is the language layer beneath the project library.

---

## 2. Core Principle

**A project becomes harder to govern when its words stop meaning one thing clearly.**

The larger the library becomes, the more valuable a stable shared vocabulary becomes.

This glossary is not meant to be philosophical ornament.
It is meant to reduce drift, confusion, and repeated reinterpretation.

---

## 3. How to Use This Glossary

Use this glossary when:
- a term appears repeatedly across documents
- two terms sound similar but should not be treated as identical
- implementation language starts drifting from architecture language
- you need to re-anchor what a phrase actually means in Phase 1
- you want a quick shared-language check before updating other documents

This glossary should support the rest of the library, not compete with it.

---

## 4. Core Identity Terms

### Nexus
The command centre and governance surface of the system.

In Phase 1, Nexus is the visible operating face that:
- receives work
- governs routing
- shows state
- shows trace history
- surfaces approvals
- coordinates the whole flow

### OpenClaw
The runtime and execution layer beneath Nexus.

In Phase 1, OpenClaw is responsible for:
- bounded execution
- specialist work phases
- governed tool use
- returning results and runtime posture back to Nexus

### Command Centre
The intended operational character of Nexus.

It means Nexus should feel like:
- a seat of control
- a place where work is governed
- a place where activity is inspectable
- a place where decisions and state are visible

It does **not** mean a generic chat wrapper.

### Governance Layer
The decision spine that determines:
- task classification
- routing
- escalation
- approval posture
- bounded control over consequential action

### Runtime
The part of the system where bounded task execution actually occurs.

In Phase 1, OpenClaw is the runtime.

### Sovereignty
A guiding Phase 1 idea meaning that the core Nexus spine should become coherent, governable, and self-consistent before the project widens into broader ecosystem thinking.

---

## 5. Role Terms

### Conductor
The first receiver of incoming work and the primary coordination role.

The Conductor:
- classifies tasks
- routes tasks
- preserves route coherence
- surfaces approval when needed
- reviews returned phases
- protects role boundaries

### Specialist
A bounded role designed for a specific kind of work rather than general authority.

Phase 1 specialists include:
- Research Specialist
- Writing and Structuring Specialist
- Technical Build Specialist
- Business and Operations Specialist
- Memory and Resource Support

### Research Specialist
The role focused on:
- gathering information
- comparing options
- producing structured findings
- surfacing uncertainty honestly

### Writing and Structuring Specialist
The role focused on:
- turning rough material into clear output
- organizing findings into readable structure
- producing reusable internal documents or notes

### Technical Build Specialist
The role focused on:
- implementation planning
- architecture support
- system layout
- technical clarity

This role is generally deferred in early minimum-slice work.

### Business and Operations Specialist
The role focused on:
- structured operational planning
- monetization paths
- content or product workflows
- bounded business/operations tasks

This role is mainly relevant when Workflow 2 becomes legitimate.

### Memory and Resource Support
The role focused on:
- continuity
- resource organization
- retrieval support
- durable output handling

### Executor Layer
The action layer that performs governed operations when permitted.

It does not self-authorize meaningful action.
It executes within policy and approval boundaries.

### Approval Surface
The visible place where consequential actions pause for review.

---

## 6. Workflow Terms

### Workflow
A defined operational path through the system.

A workflow specifies:
- intended use case
- likely route
- participating roles
- stage sequence
- memory behavior
- approval posture

### Workflow 1 — Research Coordination
The first practical Phase 1 workflow.

It is the preferred first proof path because it:
- is meaningful
- is low-risk
- exercises routing and traceability
- supports useful internal outputs

### Workflow 2 — Business and Operations Coordination
The second practical Phase 1 workflow.

It is intended for later controlled expansion after Workflow 1 becomes trustworthy and stable.

### Workflow Type
A canonical field describing which defined path the task belongs to.

Examples:
- `research_coordination`
- `business_operations_coordination`

### Route
The path a task takes between roles or stages.

### Routing
The act of deciding where the task goes next and why.

### Handoff
The controlled transition of responsibility from one role or layer to another.

### Cross-Domain Task
A task requiring more than one specialist domain or stronger coordination.

### Approval-Sensitive Task
A task whose next meaningful action may require an approval boundary before continuation.

---

## 7. State Terms

### Task
The governed unit of work the system is handling.

A task answers:
- what is being done
- who owns it now
- where it is now
- what should happen next

### Run
The bounded lifecycle instance of a task as it moves through the system.

A run answers:
- what happened in this execution pass
- what events occurred
- how the task moved from intake to completion, pause, or closure

### Task Class
The structural type of a task.

Phase 1 classes:
- Class A — Simple Single-Domain Task
- Class B — Multi-Step Single-Track Task
- Class C — Cross-Domain Task
- Class D — Approval-Sensitive Task
- Class E — Ambiguous or Uncertain Task

### Status
The current operational standing of a task or run.

Examples:
- active
- paused
- blocked
- approval_pending
- completed
- failed

### Stage
The current location of the task inside the workflow path.

Examples:
- intake
- classification
- routing
- specialist_work
- review
- approval
- execution
- storage
- completion

### Owner
The role currently responsible for the next bounded step.

### Confidence State
A readable operational posture field, not a mathematical probability field.

Examples:
- direct
- guided
- escalated
- approval_pending
- ambiguous
- blocked
- completed

### Approval Posture
A field describing the task’s relationship to approval requirements.

Examples:
- not_required
- potentially_required
- required
- pending_review
- approved
- rejected
- revised
- expired

### Next Expected Action
A concise operational sentence describing what should happen next.

### Output State
A field describing the maturity of the current output.

### Storage State
A field describing what happened to the output as a resource decision.

### Terminal State
A run-level closure description such as:
- completed_successfully
- failed
- cancelled
- closed_without_action
- archived_paused

---

## 8. Memory and Resource Terms

### Session State
The live working context for the current task or run.

It is temporary and active.

### Project Memory
Stable internal project knowledge worth carrying across sessions.

### Event Log
The historical record of what happened.
It is history, not the same thing as knowledge.

### Durable Resource
A structured artifact worth keeping for reuse.

Examples:
- blueprint docs
- workflow specs
- approved research outputs
- reusable internal reference files

### Memory Promotion
The deliberate act of moving information from temporary or intermediate form into a more durable class.

### Retrieval
The act of bringing relevant prior material back into the active context.

### Save Behavior
The deliberate act of turning a final output into a durable artifact.

### Resource Metadata
The descriptive record attached to a durable output, such as title, type, version, links, and timestamps.

### Resource Taxonomy
The folder and placement logic governing where resources live and how they are named.

---

## 9. Governance and Approval Terms

### Governance
The overall discipline that makes the system:
- inspectable
- bounded
- explainable
- auditable
- able to stop before consequence

### Escalation
The act of moving a task into broader handling because:
- it is ambiguous
- it crosses domains
- it becomes sensitive
- consequence increases
- current role boundaries are exceeded

### Approval
A formal pause-and-review step before a consequential action proceeds.

### Approval Boundary
The point in a workflow where planning may continue no further without review.

### Consequence
The meaningful effect of an action if it proceeds.

In Phase 1, consequence matters especially when actions become:
- external
- structural
- financial
- irreversible
- policy-sensitive

### Consequence Level
A readable rating of effect scope:
- low
- medium
- high

### Approval Category
The type of approval required, such as:
- external publishing
- outbound communication
- configuration/system change
- file/resource restructuring
- business-impacting action
- irreversible/destructive action
- policy or durable knowledge change

### Policy
The rule layer that determines what actions require approval and what actions remain allowed.

### Approval Item
The object representing one approval request and its lifecycle.

### Decision Path
The resolution of an approval item:
- approve
- reject
- revise
- expire
- cancel

---

## 10. Trace and Logging Terms

### Trace
The readable ordered history of what happened during a run.

### Run History
The collection of runs and their associated event sequences.

### Event
A meaningful recorded occurrence inside a run.

### Canonical Event
A named event type that belongs to the shared run-log grammar.

Examples:
- `task_created`
- `task_classified`
- `task_routed`
- `specialist_started`
- `specialist_completed`
- `approval_requested`
- `task_completed`

### Event Family
A grouping of similar event types, such as:
- task lifecycle
- governance
- specialist activity
- approval activity
- executor activity
- storage and memory

### Event Summary
A short readable description of what happened in that event.

### Actor
The role or system source that caused the event.

### Trace Quality
The degree to which a run can be reconstructed clearly and usefully.

---

## 11. Implementation Terms

### Minimum Buildable Slice
The smallest coherent implementation that still expresses the truth of the Phase 1 architecture.

### First Proof
The first trustworthy end-to-end working path proving that Nexus can act as a governed command centre over OpenClaw.

### First Implementation Sprint
The first bounded build sequence used to turn the minimum slice into a real working proof.

### Build Block
A practical implementation chunk inside the sprint plan.

### Taskboard
The practical Now / Next / Soon / Later / Blocked / Done board used to sequence current work.

### Definition of Done
The actual condition under which a piece of work counts as complete.

### Component
A discrete build responsibility such as:
- App Shell
- Task State Store
- Conductor Controller
- OpenClaw Return Translator
- Trace Panel

### Component Ownership
The clear boundary of responsibility between renderers, controllers, stores, integrations, and runtime pieces.

### Data Contract
The defined fields a view, adapter, or return payload expects to consume or emit.

### Field Binding
The mapping from canonical state objects into visible UI fields.

### Source of Truth
The authoritative data source for a given visible field or control-state interpretation.

### Translation Layer
The adapter logic that converts runtime returns into canonical Nexus state.

---

## 12. Proof and Review Terms

### Proof Level
The current strength of the first proof.

Levels:
- Level 0 — Not Ready
- Level 1 — Demonstrable but Partial
- Level 2 — Trustworthy First Proof
- Level 3 — Stable Enough to Extend

### Checkpoint Review
The structured truth review used after meaningful implementation progress.

### Risk Register
The active record of known Phase 1 risks and mitigations.

### Gate Decision
A project-control decision such as:
- keep building core proof
- stabilize before expanding
- proof complete — do not widen yet
- begin controlled expansion
- Workflow 2 still deferred
- Workflow 2 eligible for activation

### Stabilization
The post-proof work of making the proven path reliable, repeatable, and less fragile.

### Controlled Expansion
The deliberate addition of one bounded next capability after proof and stabilization, rather than broad uncontrolled widening.

### Workflow 2 Readiness
The explicit decision point about whether Business and Operations Coordination may now be activated.

### Milestone
A major project threshold marking a meaningful shift in trust or capability.

---

## 13. Project-Control Terms

### Status Dashboard
A short live control summary of current proof level, build stage, top now items, top risks, last checkpoint outcome, and next gate decision.

### Daily Implementation Log
A short day-to-day working log of what changed, what broke, what was learned, and what should happen next.

### Milestone Register
The high-level map of major thresholds such as:
- foundation locked
- minimum slice assembled
- first end-to-end run
- trustworthy first proof
- post-proof stabilization
- Workflow 2 readiness

### Reading Order
The recommended sequence for using the document library depending on purpose.

### Always-Active References
The smaller set of documents that should stay closest during active implementation work.

### Deferred
A valid item intentionally held back because it does not yet belong in the current phase of work.

### Scope Creep
The widening of the build beyond the minimum truthful target before the core proof is stable.

---

## 14. Architectural Culture Terms

### Borrow Discipline, Not Complexity
A guiding principle meaning that outside influence should improve structure, visibility, and control — not widen the stack unnecessarily.

### Truthful UI
A UI that reflects canonical task/run reality rather than approximate or misleading placeholder behavior.

### Legibility
The quality of being understandable, inspectable, and explainable.

### Governance Drift
The loss of routing, approval, or control clarity as convenience-based behavior begins replacing the defined governance model.

### Runtime Opacity
A condition where OpenClaw activity becomes too unclear or hidden to govern properly.

### False Progress
Visible work that appears complete but is not yet trustworthy enough to build on safely.

### Post-Proof Energy
The surge of momentum that arrives after the first proof succeeds once, and can easily tempt premature widening if left unguided.

---

## 15. Term Distinctions Worth Preserving

### Task vs Run
A task is the governed work unit.
A run is one bounded lifecycle instance of that task.

### Status vs Stage
Status = current condition.  
Stage = current location in the path.

### Approval Posture vs Approval Item State
Approval posture = how the task relates to approval.  
Approval item state = lifecycle of the approval object itself.

### Event Log vs Project Memory
Event log = what happened.  
Project memory = what should remain stable and useful.

### Durable Resource vs Session State
Durable resource = kept artifact.  
Session state = live temporary context.

### Demonstration vs Proof
A demonstration can look convincing.
A proof is trustworthy enough to build on.

### Stabilization vs Expansion
Stabilization strengthens a proven path.
Expansion adds new bounded capability.

---

## 16. Suggested Future Additions

As the library grows, future glossary additions may include:
- new workflow-specific terms
- richer approval terminology
- runtime adapter vocabulary
- UI component naming conventions
- later Phase 2 ecosystem terms

Only add them when the terms are actually stable enough to deserve shared meaning.

---

## 17. Success Criteria

This glossary is working correctly when:

- repeated project terms remain stable
- implementation language and architecture language align
- documents are easier to revisit after time away
- handover or re-entry into the project becomes easier
- fewer terms need re-explaining in later documents

---

## 18. Closing Principle

Architecture is not only structure.
It is also language.

If Nexus Phase 1 is to become coherent, then the words used to describe it should become coherent too.

This glossary exists to help that happen.

---

## 19. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#glossary`  
`#terms`  
`#language`  
`#governance`  
`#openclaw`
