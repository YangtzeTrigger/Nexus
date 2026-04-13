# Nexus Phase 1 Policy and Approval Types  
## Approval Categories, Consequence Levels, Decision Paths, and Logging Rules

**Document ID:** NEXUS-P1-POL-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Define the Phase 1 policy and approval structure for Nexus, including approval categories, consequence levels, decision paths, requester rules, and logging expectations  
**Last Updated:** 2026-04-05  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`  
- `Nexus_Phase1_Agent_Roles_and_Responsibilities_v1.md`  
- `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`  
- `Nexus_Phase1_Memory_and_State_Model_v1.md`  
- `Nexus_Phase1_Dashboard_Information_Architecture_v1.md`  
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`  
- `Nexus_Phase1_Workflow2_Business_Operations_Coordination_Spec_v1.md`

---

## 1. Purpose

This document defines the Phase 1 approval and policy structure for Nexus.

Its purpose is to ensure that:
- meaningful actions do not occur silently
- consequential actions pause at a visible approval boundary
- approval categories are understandable
- low, medium, and high consequence actions are distinguished
- the Executor Layer remains subordinate to policy
- approval decisions are logged and reviewable

This document is not intended to create bureaucracy for its own sake.

It is intended to create **disciplined control where consequence exists**.

---

## 2. Core Principle

**Planning may proceed further than action. Consequence must not.**

In Phase 1, many tasks may be researched, structured, compared, and prepared without approval.

Approval becomes necessary when the task crosses into:
- external consequence
- structural consequence
- financial consequence
- irreversible consequence
- policy-defined sensitive consequence

The approval layer exists to preserve governance, not to slow useful internal work unnecessarily.

---

## 3. Policy Objectives

The Phase 1 approval and policy layer should do five things well:

### 3.1 Protect Consequential Boundaries
Prevent meaningful actions from occurring without review.

### 3.2 Keep Governance Visible
Make it obvious when the system is paused for approval and why.

### 3.3 Distinguish Planning from Execution
Allow internal preparation while holding consequential execution at a clear boundary.

### 3.4 Preserve Accountability
Record who requested approval, what action was proposed, and what decision was made.

### 3.5 Support Repeatability
Create approval types and rules that can be applied consistently across workflows.

---

## 4. Approval Principle

Approval should be required whenever a proposed action has a meaningful chance of changing something outside the current safe internal planning boundary.

A useful Phase 1 question is:

**If this action goes ahead, what changes — and can that change be meaningfully reversed?**

If the answer involves external impact, structural change, or significant consequence, approval should be considered.

---

## 5. Phase 1 Approval Categories

Phase 1 should use a small number of understandable approval categories.

### 5.1 External Publishing
Use when the system proposes to:
- publish content publicly
- post to a public-facing platform
- release structured material outside the project boundary

### 5.2 Outbound Communication
Use when the system proposes to:
- send email
- send outreach
- dispatch messages
- communicate beyond the internal project boundary

### 5.3 Configuration or System Change
Use when the system proposes to:
- change runtime behavior
- alter configuration
- modify system structure
- affect how Nexus or OpenClaw operates

### 5.4 File or Resource Restructuring
Use when the system proposes to:
- delete files
- overwrite important files
- reorganize major project resources
- perform structurally meaningful file operations

### 5.5 Business-Impacting Action
Use when the system proposes to:
- initiate commercial activity
- trigger monetization-related action
- commit to a business-facing step
- take a practical external action with financial or reputational consequence

### 5.6 Irreversible or Destructive Action
Use when the system proposes to:
- delete or remove meaningfully
- destroy or replace without easy rollback
- trigger an action that cannot easily be undone

### 5.7 Policy or Durable Knowledge Change
Use when the system proposes to:
- change stable governance rules
- redefine durable project meaning
- update long-term memory in a way that affects future behavior materially

This category may be less common in early Phase 1, but it is still useful to define.

---

## 6. Consequence Levels

Phase 1 should use readable consequence levels rather than an overcomplicated scoring system.

### 6.1 Low Consequence
Typically:
- internal drafting
- internal structuring
- non-destructive organization
- low-impact resource creation
- internal research preparation

**Default policy:** no approval usually required.

### 6.2 Medium Consequence
Typically:
- important internal restructuring
- preparation for external action
- non-destructive but meaningful project updates
- proposed updates to durable internal references
- actions that affect future workflow behavior but are still reviewable

**Default policy:** approval may be required depending on policy and context.

### 6.3 High Consequence
Typically:
- external publishing
- outbound communication
- destructive file action
- live configuration change
- business-affecting execution
- irreversible action

**Default policy:** approval required.

---

## 7. Default Approval Matrix

### No Approval Normally Required
- internal notes
- internal drafts
- research gathering
- structured summaries
- internal planning documents
- workflow preparation
- non-destructive temporary state changes

### Approval Often Required
- durable policy updates
- major project restructuring
- meaningful file reorganization
- promoting material into important long-term project definitions
- operational plans that are moving toward execution

### Approval Required
- external publication
- outbound messages
- destructive operations
- live runtime or configuration changes
- financially or reputationally meaningful actions
- irreversible acts

---

## 8. Who May Request Approval

### 8.1 Conductor
The Conductor is the default role responsible for surfacing approvals.

It should request approval when:
- a workflow reaches a policy boundary
- another role flags a consequential next step
- classification shifts into a sensitive state

### 8.2 Specialist Roles
Specialists may trigger an approval recommendation, but should not bypass the Conductor.

Examples:
- Writing and Structuring flags external publication intent
- Business and Operations flags outreach or monetization action
- Technical Build flags configuration change
- Memory and Resource Support flags durable policy update risk

### 8.3 Executor Layer
The Executor may block and escalate when:
- approval is missing
- action exceeds policy
- consequence is unclear
- destruction or irreversibility is involved

The Executor should not create its own approval path independently of governance.

---

## 9. What an Approval Request Must Include

Every approval request should include:

- approval ID
- originating task
- requesting role
- approval category
- proposed action
- reason for action
- expected consequence
- current route context
- relevant related resources if any
- approve / reject / revise options

A strong Phase 1 rule is:

**No opaque approvals. If the request cannot be explained clearly, it is not ready for approval.**

---

## 10. Approval Status States

For dashboard and workflow clarity, approval items should use clear states.

### Recommended States
- Draft
- Pending Review
- Approved
- Rejected
- Revision Requested
- Expired
- Cancelled
- Executed
- Closed Without Action

These states make approval posture visible across:
- task view
- approvals panel
- run history
- workflow detail

---

## 11. Decision Paths

### 11.1 Approve
The action is permitted to proceed.

Outcome:
- approval result logged
- task proceeds to allowed next stage
- Executor may act if relevant

### 11.2 Reject
The action is not permitted to proceed.

Outcome:
- approval result logged
- task may close or return for rework
- no executor action permitted

### 11.3 Revise
The action is not approved as currently framed, but may return after controlled revision.

Outcome:
- revision requested
- route returns to the appropriate role
- approval remains unresolved until resubmitted

### 11.4 Expire or Cancel
The approval becomes irrelevant, out of date, or intentionally withdrawn.

Outcome:
- approval closed
- no action proceeds under that approval ID

---

## 12. Approval Boundaries by Workflow

### 12.1 Research Coordination
Research itself is usually low consequence.

Approval becomes relevant when research turns into:
- external publication
- public-facing messaging
- a structural recommendation that changes system behavior
- action with consequence beyond the internal research boundary

### 12.2 Business and Operations Coordination
Operational planning may proceed internally without approval more often than execution.

Approval becomes relevant when the operational task moves toward:
- outreach
- sending
- publishing
- commercial execution
- irreversible change
- externally meaningful action

This keeps planning productive while keeping action governed.

---

## 13. Category-to-Role Mapping

### External Publishing
Usually requested through:
- Conductor
- Writing and Structuring Specialist

### Outbound Communication
Usually requested through:
- Conductor
- Business and Operations Specialist
- Executor block if attempted without approval

### Configuration or System Change
Usually requested through:
- Conductor
- Technical Build Specialist
- Executor block if attempted without approval

### File or Resource Restructuring
Usually requested through:
- Conductor
- Memory and Resource Support
- Technical Build Specialist if structural tooling is involved

### Business-Impacting Action
Usually requested through:
- Conductor
- Business and Operations Specialist

### Irreversible or Destructive Action
Usually requested through:
- Conductor
- Executor escalation
- Technical Build Specialist if technical deletion or replacement is involved

### Policy or Durable Knowledge Change
Usually requested through:
- Conductor
- Memory and Resource Support

---

## 14. Suggested Approval Package Layout

For a practical Phase 1 approval card or detail view, show:

### Header
- approval ID
- category
- current state

### Summary
- proposed action
- requesting role
- originating task
- expected consequence

### Context
- why this action is being proposed
- what has already happened in the workflow
- what will happen next if approved

### Controls
- Approve
- Reject
- Revise

### Related Items
- linked task
- linked run history
- linked resources

This aligns cleanly with the dashboard architecture already defined elsewhere.

---

## 15. Logging Rules

Approval decisions should be logged in the Event Log.

### Minimum Logged Fields
- approval ID
- task ID
- requesting role
- category
- consequence level
- decision state
- timestamp
- relevant next action
- executor follow-through if any

### Suggested Event Types
- approval_requested
- approval_granted
- approval_rejected
- approval_revised
- approval_cancelled
- approval_expired
- approval_executed

The system should be able to reconstruct:
- why approval was requested
- what was at stake
- what decision was made
- whether action followed

---

## 16. Low / Medium / High Examples

### Low
“Create a structured internal note from this rough idea.”

Expected:
- no approval required

### Medium
“Update this long-term resource and replace the existing version.”

Expected:
- possibly approval depending on project sensitivity and overwrite impact

### High
“Send this outreach email.”
“Publish this publicly.”
“Delete this folder.”
“Apply this live configuration change.”

Expected:
- approval required

---

## 17. Policy Violations to Prevent

Phase 1 should explicitly prevent:

- execution without required approval
- specialist self-authorization
- silent destructive action
- policy changes hidden inside ordinary storage
- approval requests with unclear consequence
- approvals without visible origin
- executor behavior that outruns governance

---

## 18. Success Criteria

The policy and approval layer is working correctly when:

- meaningful actions pause at the right time
- low-risk work is not blocked unnecessarily
- approval types are understandable
- consequence levels are readable
- workflow transitions into approval are visible
- approvals can be reviewed later in history
- the Executor never outruns policy

---

## 19. Closing Principle

Approval should not be everywhere.

It should be exactly where trust would otherwise break.

A good Phase 1 policy layer does not create friction for its own sake.
It creates confidence that Nexus remains under governance when consequence appears.

---

## 20. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#policy`  
`#approval`  
`#governance`  
`#executor`  
`#openclaw`
