# Nexus Phase 1 Governance and Routing Rules  
## Task Intake, Delegation, Escalation, and Approval Logic

**Document ID:** NEXUS-P1-GOV-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Define the Phase 1 governance logic, routing rules, escalation paths, and approval conditions for Nexus  
**Last Updated:** 2026-04-05  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`  
- `Nexus_Phase1_Agent_Roles_and_Responsibilities_v1.md`

---

## 1. Purpose

This document defines how Nexus governs work in Phase 1.

Its purpose is to ensure that:
- every task enters the system in a consistent way
- routing decisions are understandable
- delegation is controlled
- escalation happens when needed
- approval-sensitive actions are surfaced properly
- execution remains subordinate to governance

This is the logic layer that turns Nexus from a collection of roles into a **governed operating system**.

---

## 2. Core Principle

**No meaningful action in Nexus should occur without a visible governance path.**

That means:

- tasks should enter through a known intake path
- task type should be classified before action
- delegation should happen for a reason
- escalation should happen by rule, not mood
- approvals should appear where consequence exists
- execution should remain subordinate to routing and policy

In simple terms:

**Nexus should always be able to explain why something happened.**

---

## 3. Phase 1 Governance Objectives

The Phase 1 governance layer must do four things well:

### 3.1 Classify
Recognize what kind of task has entered the system.

### 3.2 Route
Send that task to the right role or workflow path.

### 3.3 Escalate
Detect when the task exceeds a simple path and requires broader handling, approval, or additional roles.

### 3.4 Control
Ensure that actions with consequence are visible, pausable, and auditable.

---

## 4. Governance Entry Point

### 4.1 First Receiver
All tasks should enter through the **Conductor**.

The Conductor is the default first point of governance because it ensures:
- consistent intake
- first-pass classification
- controlled delegation
- visible reasoning path

### 4.2 Rule
No specialist should self-assign work without first being routed through the Conductor, unless the workflow has already been explicitly defined as direct-path by policy.

---

## 5. Task Classification Model

Every incoming task should be classified before deeper action occurs.

### 5.1 Recommended Phase 1 Task Classes

#### Class A — Simple Single-Domain Task
A task that:
- fits one role clearly
- requires no external action
- has low ambiguity
- has low consequence

**Example:** summarize material, structure notes, create internal draft.

#### Class B — Multi-Step Single-Track Task
A task that:
- still fits one main workflow
- may require multiple steps
- may involve one specialist plus a return pass
- remains low to moderate risk

**Example:** research a topic, structure the findings, store the output.

#### Class C — Cross-Domain Task
A task that:
- spans multiple specialist roles
- may need research, structuring, and operational interpretation
- requires stronger coordination

**Example:** compare monetization options, structure the findings, turn them into a project resource.

#### Class D — Approval-Sensitive Task
A task that:
- has external consequence
- changes configuration or structure
- could affect public-facing output
- may trigger irreversible or meaningful action

**Example:** publish, deploy, delete, dispatch, materially alter system behavior.

#### Class E — Ambiguous or Uncertain Task
A task that:
- is not clearly classifiable
- may fit multiple roles equally
- lacks enough information for direct routing

**Example:** vague requests, under-specified goals, conflicting instructions.

---

## 6. Routing Rules

### 6.1 Simple Routing Rule
If the task is **Class A**, the Conductor routes it directly to the best-matched single specialist.

### 6.2 Multi-Step Routing Rule
If the task is **Class B**, the Conductor routes it through the primary workflow path and expects a controlled return to either:
- the Conductor
- the Writing and Structuring Specialist
- storage/review, depending on policy

### 6.3 Cross-Domain Routing Rule
If the task is **Class C**, the Conductor determines:
- lead specialist
- supporting specialist(s)
- whether the work happens sequentially or in a bounded coordination chain

No cross-domain task should become a free-for-all.

### 6.4 Approval Routing Rule
If the task is **Class D**, the Conductor may still route preparatory work, but **execution must pause at the approval boundary** before consequential action occurs.

### 6.5 Ambiguity Routing Rule
If the task is **Class E**, the Conductor should:
- avoid premature execution
- gather clarification internally or from the user if necessary
- reduce ambiguity before task commitment

---

## 7. Specialist Routing Map

### 7.1 Research Specialist Route
Route to Research when the task primarily involves:
- gathering information
- comparing options
- summarizing sources
- identifying key findings
- producing structured research notes

### 7.2 Writing and Structuring Route
Route to Writing and Structuring when the task primarily involves:
- turning rough material into clean output
- outlining
- formatting
- clarifying presentation
- turning findings into usable documents

### 7.3 Technical Build Route
Route to Technical Build when the task primarily involves:
- implementation planning
- technical structure
- integration mapping
- build steps
- architecture-facing technical reasoning

### 7.4 Business and Operations Route
Route to Business and Operations when the task primarily involves:
- monetization planning
- process organization
- content or product workflows
- affiliate/business structuring
- operational action maps

### 7.5 Memory and Resource Support Route
Route to Memory and Resource Support when the task primarily involves:
- storing approved material
- retrieving internal project knowledge
- connecting a current task to prior resources
- organizing resource continuity

---

## 8. Delegation Rules

### 8.1 Delegation Must Be Purposeful
A task should only be delegated when:
- another role is more appropriate
- the current role’s boundary has been reached
- the workflow explicitly requires the handoff

### 8.2 Delegation Must Be Visible
Every handoff should preserve:
- task reason
- expected output
- current status
- any relevant constraints
- whether approval may be required later

### 8.3 Delegation Must Not Dissolve Accountability
Even after delegation, the Conductor remains responsible for:
- route coherence
- policy compliance
- overall task visibility

---

## 9. Escalation Rules

Escalation is required when the task moves beyond its current safe or bounded path.

### 9.1 Escalate for Ambiguity
Escalate when:
- intent is unclear
- instructions conflict
- task meaning is uncertain
- the specialist cannot proceed safely

### 9.2 Escalate for Scope Shift
Escalate when:
- the task changes category mid-flow
- research turns into business action
- writing turns into external publishing
- technical planning turns into live modification

### 9.3 Escalate for Consequence
Escalate when:
- money is involved
- public output is involved
- configuration change is involved
- external communication is involved
- deletion or irreversible action is involved

### 9.4 Escalate for Cross-Domain Complexity
Escalate when:
- more than one specialist is needed
- the specialist cannot resolve the task within its own domain
- the task requires coordination logic rather than direct work

---

## 10. Approval Rules

### 10.1 Approval Principle
Any action with meaningful external consequence, structural consequence, or irreversible consequence should require approval.

### 10.2 Typical Approval Conditions
Approval should be required for:
- external publishing
- outbound messages or email
- deployment or live configuration changes
- deletion or major file restructuring
- public-facing business actions
- irreversible operations
- any action explicitly flagged by policy

### 10.3 Approval Surface Requirements
Before approval is presented, Nexus should show:
- proposed action
- reason for action
- originating task
- role requesting it
- expected impact
- approve / reject / revise options

### 10.4 Approval Outcome Logging
Approval results should be logged visibly, including:
- who or what requested the approval
- what action was proposed
- whether it was approved, rejected, or revised
- any relevant follow-up state

---

## 11. Executor Rules

### 11.1 Executor Subordination Rule
The Executor Layer does not decide what matters.
It performs governed actions.

### 11.2 Executor May Act Only When
- the route is valid
- the task is in an executable state
- required approval is present
- the action is within policy

### 11.3 Executor Must Escalate When
- permission is missing
- the action exceeds policy
- the action has unclear consequence
- the action fails unexpectedly
- the requested operation is destructive or irreversible

### 11.4 Executor Visibility Rule
Nothing significant should happen silently.
The Executor must always return:
- action attempted
- result
- failure state if relevant
- any blocked condition

---

## 12. Confidence and Weighting Guidance

Phase 1 does not need a heavy scoring engine, but it should still express confidence in a readable way.

### 12.1 Suggested Confidence States
- **Direct** — task is clear and low-risk
- **Guided** — task is clear but multi-step
- **Escalated** — task required broader handling
- **Approval-Pending** — task is prepared but blocked pending consequence review
- **Ambiguous** — task cannot safely proceed without clarification

### 12.2 Use of Confidence
Confidence in Phase 1 is primarily for:
- routing clarity
- dashboard visibility
- showing why a task progressed or paused

It is not yet intended as a fully mathematical scoring engine unless you decide to expand it later.

---

## 13. Standard Routing Pattern

The default Phase 1 pattern should be:

**Task Intake → Conductor Classification → Route to Specialist → Return to Conductor → Approval if required → Executor if allowed → Logging / Storage / Final Output**

This preserves:
- clear entry
- clear responsibility
- visible control
- traceable execution

---

## 14. Bounded Multi-Agent Participation

If multiple specialists are involved, Phase 1 should favor:
- sequential bounded handoffs
- one lead specialist
- one return point to the Conductor

Avoid:
- uncontrolled simultaneous role overlap
- circular handoffs
- specialist drift without governance visibility

---

## 15. Routing Examples

### Example 1 — Internal Summary Request
Task: “Turn this rough idea into a clean internal project note.”

Classification:
- Class A

Route:
- Conductor → Writing and Structuring Specialist → Return / Store

Approval:
- none required

---

### Example 2 — Research Then Structure
Task: “Research this topic, summarize the key options, and turn it into a resource file.”

Classification:
- Class B

Route:
- Conductor → Research Specialist → Writing and Structuring Specialist → Memory/Resource Support

Approval:
- none required unless external use is implied

---

### Example 3 — Cross-Domain Business Planning
Task: “Compare low-cost monetization routes for Nexus and turn the result into a structured action map.”

Classification:
- Class C

Route:
- Conductor → Research Specialist → Business and Operations Specialist → Writing and Structuring Specialist → Return

Approval:
- not required unless a live action is proposed

---

### Example 4 — Publish or Send
Task: “Prepare this for external posting and send it.”

Classification:
- Class D

Route:
- Conductor → Writing and Structuring Specialist → Approval Surface → Executor if approved

Approval:
- required

---

### Example 5 — Vague Request
Task: “Sort this out and make it better.”

Classification:
- Class E

Route:
- Conductor holds and clarifies before routing

Approval:
- not yet relevant until task meaning is stable

---

## 16. Governance Failures to Avoid

To preserve coherence, avoid:

- specialists self-routing without governance
- silent execution of meaningful actions
- unclear approval boundaries
- tasks changing category without escalation
- cross-domain work without a lead role
- logging after the fact rather than during flow
- routing based on convenience rather than role fit

---

## 17. Success Criteria

The governance layer is working correctly when:

- every task has a visible intake path
- routing can be explained clearly
- delegation happens for a reason
- escalation occurs when it should
- approvals appear before consequential action
- execution stays subordinate to governance
- logs can reconstruct what happened

---

## 18. Closing Principle

A governed system is not one that does the most.

It is one that can explain itself.

Nexus Phase 1 should not aim for maximum activity.
It should aim for **maximum legibility under control**.

---

## 19. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#governance`  
`#routing`  
`#approval`  
`#delegation`  
`#openclaw`
