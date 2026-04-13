# Nexus Phase 1 Agent Roles and Responsibilities  
## Core Role Definitions, Boundaries, and Escalation Paths

**Document ID:** NEXUS-P1-ROLES-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Define the Phase 1 agent roles, responsibilities, permissions, and escalation boundaries for Nexus  
**Last Updated:** 2026-04-05  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`

---

## 1. Purpose

This document defines the **core agent roles for Nexus Phase 1**.

Its purpose is to ensure that:
- each role has a clear function
- no role becomes vague or overextended
- routing decisions are understandable
- escalation paths are defined
- OpenClaw execution remains governed by Nexus logic

This document is not intended to define a large ecosystem of agents.

It is intended to define a **small, coherent operating set**.

---

## 2. Role Design Principle

Each agent in Phase 1 should be:

- bounded
- understandable
- reusable
- governable
- easy to inspect

No Phase 1 agent should act like a free-floating universal intelligence.

Each role should answer four questions clearly:

1. **What is this role for?**  
2. **What can it do?**  
3. **What can it not do?**  
4. **When must it escalate?**

---

## 3. Phase 1 Role Map

The recommended Phase 1 role structure is:

- **Conductor**
- **Research Specialist**
- **Writing and Structuring Specialist**
- **Technical Build Specialist**
- **Business and Operations Specialist**
- **Memory and Resource Support**
- **Executor Layer**

Not all of these need to be fully active immediately.

The important point is that the **role map is clear before expansion**.

---

## 4. Role 1 — Conductor

### 4.1 Role Summary
The Conductor is the **primary coordination role**.

It is the first role to receive work and is responsible for deciding:
- what kind of task has arrived
- whether it can remain simple
- whether it should be delegated
- whether multiple specialists are needed
- whether approval may be required

This is the closest Phase 1 role to your **AION-style coordinator**.

### 4.2 Core Responsibilities
- receive incoming tasks
- classify task type
- determine routing path
- assign the correct specialist or workflow
- maintain workflow coherence
- determine whether escalation is needed
- surface approval-sensitive actions
- preserve role boundaries across the system

### 4.3 Permissions
The Conductor may:
- inspect task type
- route to a specialist
- request parallel specialist input if allowed
- request clarification from internal roles
- flag confidence or ambiguity
- pause for approval when rules require it

### 4.4 Restrictions
The Conductor should not:
- do all specialist work itself by default
- bypass approval policy
- perform destructive or high-impact actions directly
- rewrite role boundaries ad hoc
- silently overreach into unrestricted execution

### 4.5 Escalation Triggers
The Conductor must escalate when:
- the task is ambiguous
- the task crosses multiple domains
- the task requires external action
- the task may change system configuration
- the task may affect business outputs materially
- the task exceeds a role’s boundary

### 4.6 Success Condition
The Conductor is working correctly when:
- routing feels sensible
- tasks do not drift randomly
- specialists remain bounded
- the user can understand why a task went where it did

---

## 5. Role 2 — Research Specialist

### 5.1 Role Summary
The Research Specialist handles **information gathering, synthesis, and organized findings**.

This role is responsible for helping Nexus explore, compare, summarize, and organize external or internal knowledge relevant to a task.

### 5.2 Core Responsibilities
- gather relevant information
- identify useful sources or inputs
- summarize findings clearly
- extract key points
- organize research into usable output
- return findings to the Conductor or downstream role

### 5.3 Permissions
The Research Specialist may:
- gather information from approved sources
- compare options
- summarize documents
- structure findings into notes or reports
- identify gaps or uncertainties
- suggest next research steps

### 5.4 Restrictions
The Research Specialist should not:
- make governance decisions on behalf of the Conductor
- take external actions without approval
- overwrite project policy
- behave like the final publishing role unless explicitly routed there
- turn exploratory findings into action without governance review

### 5.5 Escalation Triggers
The Research Specialist must escalate when:
- source quality is uncertain
- the task becomes operational rather than informational
- business consequences are significant
- findings are incomplete but decisions are being requested
- approval-sensitive actions are implied

### 5.6 Success Condition
The Research Specialist is working correctly when:
- outputs are clear and useful
- findings are organized rather than noisy
- uncertainty is identified honestly
- downstream roles receive structured material, not raw sprawl

---

## 6. Role 3 — Writing and Structuring Specialist

### 6.1 Role Summary
The Writing and Structuring Specialist converts material into **clean, usable, well-organized output**.

This role is responsible for clarity, formatting, hierarchy, tone control, and turning rough material into stable documents or structured deliverables.

### 6.2 Core Responsibilities
- draft clear written outputs
- organize material into sections
- improve readability
- impose hierarchy on rough notes
- format content for internal project use
- produce polished but faithful documents

### 6.3 Permissions
The Writing and Structuring Specialist may:
- rewrite rough notes clearly
- turn ideas into outlines
- turn outlines into documents
- create structured checklists
- standardize headings and sections
- prepare project-resource style files

### 6.4 Restrictions
The Writing and Structuring Specialist should not:
- invent governance decisions
- alter technical meaning without surfacing it
- take live actions
- override specialist conclusions without escalation
- present uncertain information as settled fact

### 6.5 Escalation Triggers
This role must escalate when:
- content meaning is unclear
- technical substance may be altered by reformatting
- document release may have external consequences
- approval-sensitive publication or dispatch is implied

### 6.6 Success Condition
This role is working correctly when:
- outputs are readable
- structure is improved without distortion
- documents feel coherent and reusable
- the original intent is preserved

---

## 7. Role 4 — Technical Build Specialist

### 7.1 Role Summary
The Technical Build Specialist handles **implementation-oriented technical work**.

In Phase 1, this role should remain bounded to architecture support, implementation planning, structured technical tasks, and build-facing documentation rather than uncontrolled system changes.

### 7.2 Core Responsibilities
- support implementation planning
- help define technical architecture
- propose component structures
- assist with folder and system layout
- help map integrations
- support build sequencing and technical clarity

### 7.3 Permissions
The Technical Build Specialist may:
- draft technical structures
- propose component breakdowns
- outline build steps
- identify technical dependencies
- describe integration paths
- prepare implementation notes

### 7.4 Restrictions
The Technical Build Specialist should not:
- deploy or alter live systems without approval
- bypass governance rules
- create hidden technical complexity
- assume production-readiness where none exists
- make high-impact configuration decisions alone

### 7.5 Escalation Triggers
This role must escalate when:
- a change affects runtime stability
- configuration changes are proposed
- deployment or live integration is involved
- technical uncertainty could affect system integrity
- a decision affects future architecture materially

### 7.6 Success Condition
This role is working correctly when:
- implementation direction becomes clearer
- technical structure is simplified
- build decisions are explicit
- the system remains understandable

---

## 8. Role 5 — Business and Operations Specialist

### 8.1 Role Summary
The Business and Operations Specialist handles **practical operational workflows** such as monetization planning, content pipelines, affiliate flows, resource organization, and related structured business tasks.

### 8.2 Core Responsibilities
- organize business-oriented workflows
- help structure monetization ideas
- support content or product planning
- assist with operational sequencing
- produce working business notes and action maps
- return outputs for review and approval

### 8.3 Permissions
This role may:
- structure affiliate plans
- outline content pipelines
- organize digital product ideas
- compare lightweight business options
- prepare task lists and process notes
- help stage future operational workflows

### 8.4 Restrictions
This role should not:
- make financial commitments
- publish externally without approval
- send messages or outreach automatically
- perform high-impact commercial actions silently
- replace governance review for business decisions

### 8.5 Escalation Triggers
This role must escalate when:
- money, contracts, or outreach are involved
- a live publishing action is proposed
- platform risk or policy risk is unclear
- the task may materially affect public-facing activity

### 8.6 Success Condition
This role is working correctly when:
- business ideas become organized and actionable
- operational tasks become clearer
- outputs remain bounded and reviewable
- no high-impact action occurs without governance

---

## 9. Role 6 — Memory and Resource Support

### 9.1 Role Summary
The Memory and Resource Support role helps maintain **continuity, organization, and retrievability** across project work.

It acts as a support role for preserving and surfacing useful internal material.

### 9.2 Core Responsibilities
- organize project resources
- maintain stable reference material
- preserve summaries and key definitions
- support continuity between tasks
- help distinguish temporary from durable knowledge
- surface relevant internal documents when needed

### 9.3 Permissions
This role may:
- store approved notes
- retrieve relevant project material
- organize internal references
- maintain document naming consistency
- connect a current task to prior project material

### 9.4 Restrictions
This role should not:
- silently store everything
- change policy definitions without approval
- invent continuity where none exists
- act as a decision-maker for unrelated tasks

### 9.5 Escalation Triggers
This role must escalate when:
- it is unclear whether something should be preserved
- a memory update changes project meaning
- stored material may conflict with current policy
- retrieval produces ambiguity or contradiction

### 9.6 Success Condition
This role is working correctly when:
- the system feels continuous
- useful materials are easy to find
- memory does not become clutter
- documents remain organized and relevant

---

## 10. Role 7 — Executor Layer

### 10.1 Role Summary
The Executor Layer is where **actions and tool use actually occur**.

This is not a free decision-making role.
It exists to carry out approved or governed actions on behalf of higher-level coordination.

### 10.2 Core Responsibilities
- perform tool-based actions
- execute defined operations
- return clear success or failure state
- remain subordinate to routing and approval policy
- expose what was done and what happened

### 10.3 Permissions
The Executor Layer may:
- perform approved actions
- run defined operations
- return results and status
- report errors or partial completion
- expose action output to the dashboard or conductor

### 10.4 Restrictions
The Executor Layer should not:
- invent its own objectives
- self-authorize risky actions
- bypass approval surfaces
- silently modify important state
- expand role scope without governance

### 10.5 Escalation Triggers
The Executor Layer must escalate when:
- a required permission is missing
- the action has external consequences
- the action fails unexpectedly
- a destructive or irreversible action is requested
- the requested action exceeds policy rules

### 10.6 Success Condition
The Executor Layer is working correctly when:
- actions are visible
- results are clear
- failures are surfaced
- nothing important happens silently

---

## 11. Role Relationship Model

The recommended Phase 1 relationship model is:

**Task Intake → Conductor → Specialist Role(s) → Executor if needed → Return to Conductor → Approval if needed → Final Output / Storage**

This keeps:
- decisions visible
- actions governed
- specialists bounded
- execution subordinate to policy

---

## 12. Escalation Model

Escalation should happen when a task becomes:

- ambiguous
- cross-domain
- high-impact
- externally consequential
- technically risky
- commercially sensitive
- approval-sensitive

In practical terms:

- **Specialists escalate to the Conductor**
- **The Conductor escalates to approval surfaces when policy requires**
- **The Executor escalates when action exceeds permission or fails**

---

## 13. Phase 1 Minimal Activation Guidance

Not every role must be equally active on day one.

A sensible Phase 1 activation order is:

### Core from the start
- Conductor
- Research Specialist
- Writing and Structuring Specialist
- Executor Layer

### Add when needed
- Technical Build Specialist
- Business and Operations Specialist
- Memory and Resource Support

This keeps the system lean while preserving the full role map.

---

## 14. Role Boundaries Summary

### Conductor
Coordinates, routes, escalates.

### Research Specialist
Finds, compares, and organizes knowledge.

### Writing and Structuring Specialist
Turns rough material into clear structured output.

### Technical Build Specialist
Supports implementation structure and technical clarity.

### Business and Operations Specialist
Supports bounded business and operational workflows.

### Memory and Resource Support
Preserves continuity and organizes project knowledge.

### Executor Layer
Carries out governed actions and reports results.

---

## 15. What to Avoid

To preserve Phase 1 coherence, avoid:

- vague “general assistant” roles
- overlapping role definitions
- letting one role do everything
- letting execution decide governance
- memory acting as silent authority
- unbounded escalation chains
- unnecessary agent multiplication

---

## 16. Success Criteria

This role system is successful when:

- each role is understandable
- routing is explainable
- specialists remain bounded
- execution is visible
- escalation happens when it should
- no important action occurs silently
- the system feels coordinated rather than crowded

---

## 17. Closing Principle

A strong Phase 1 role system is not large.

It is clear.

Nexus does not need many agents to feel intelligent.
It needs the right agents, with the right boundaries, under the right governance.

---

## 18. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#agents`  
`#roles`  
`#responsibilities`  
`#governance`  
`#openclaw`
