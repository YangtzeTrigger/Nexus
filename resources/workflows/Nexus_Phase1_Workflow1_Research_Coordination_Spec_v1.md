# Nexus Phase 1 Workflow 1 Research Coordination Spec  
## Intake, Routing, Research Execution, Structuring, Storage, and Review

**Document ID:** NEXUS-P1-WF1-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Define the Phase 1 Research Coordination workflow for Nexus, including intake, classification, routing, specialist participation, memory handling, output structure, and success criteria  
**Last Updated:** 2026-04-05  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`  
- `Nexus_Phase1_Agent_Roles_and_Responsibilities_v1.md`  
- `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`  
- `Nexus_Phase1_Memory_and_State_Model_v1.md`  
- `Nexus_Phase1_Dashboard_Information_Architecture_v1.md`

---

## 1. Purpose

This document defines the first practical Phase 1 workflow for Nexus:

**Research Coordination**

Its purpose is to specify how Nexus should handle a research-oriented task from intake to final output while preserving:
- clear governance
- bounded specialist participation
- visible routing
- structured memory behavior
- reusable final outputs

This workflow is intended to be the first end-to-end proof that the Nexus Phase 1 spine can function in practice.

---

## 2. Workflow Objective

The objective of this workflow is:

**To receive a research-oriented task, route it through the appropriate governed path, produce structured findings, preserve relevant outputs, and return a clear usable result without losing coherence.**

This means the workflow should:
- classify the task correctly
- assign the right specialist roles
- keep the Conductor in charge of routing
- create structured rather than noisy findings
- store useful outputs deliberately
- leave a readable trace behind

---

## 3. Workflow Position in Phase 1

This workflow is the recommended first operational path for Phase 1 because it fits the current architecture well.

It uses:
- Conductor governance
- Research Specialist execution
- Writing and Structuring support
- optional Memory and Resource Support
- traceability and event logging
- low-risk output generation

It is ideal for proving the system because it is:
- meaningful
- useful
- low-risk compared with live external action
- rich enough to test routing, memory, and dashboard visibility

---

## 4. When to Use This Workflow

Use Research Coordination when the user or system needs to:

- investigate a topic
- compare options
- summarize information
- extract findings from source material
- organize research into structured notes
- prepare reusable internal research documents
- build a reference resource for later work

### Example Use Cases
- research a topic relevant to Nexus development
- compare external tools or architectures
- gather structured findings on a workflow idea
- summarize a body of reference material
- turn exploratory research into an internal resource file

---

## 5. When Not to Use This Workflow

Do not use this workflow when the task is primarily:

- direct writing without research
- technical implementation without research need
- live operational action
- publication or external dispatch
- deletion, deployment, or configuration change
- heavily approval-sensitive from the outset

In those cases, another workflow or a more explicit approval path is more appropriate.

---

## 6. Default Classification

The Research Coordination workflow will most often begin as:

- **Class B — Multi-Step Single-Track Task**

It may also become:

- **Class A** if it is a very simple, single-pass research note
- **Class C** if it expands into a cross-domain interpretation task
- **Class D** if it shifts toward publication or externally consequential action
- **Class E** if the request is too vague to classify safely

This means the workflow must begin with classification rather than assuming that every research task is the same.

---

## 7. Workflow Entry Conditions

The workflow may start when the following are present:

- a research-oriented request
- enough information to identify the broad subject
- a likely internal output type
- no immediate policy violation
- no missing prerequisite that prevents starting

If the task lacks basic clarity, the Conductor should hold the workflow in an ambiguity state before further routing.

---

## 8. Input Model

### 8.1 Required Inputs
A minimum viable research task should include:

- subject or topic
- reason for research
- intended output type
- relevant constraints if any

### 8.2 Helpful Optional Inputs
If available, also capture:

- preferred depth
- target audience
- desired structure
- source constraints
- time sensitivity
- storage intent
- whether comparison is required
- whether the output is purely internal

### 8.3 Suggested Input Fields
For implementation purposes, the workflow can treat the input form as:

- task ID
- request text
- topic
- objective
- output type
- constraints
- urgency
- initial storage intent
- approval sensitivity flag if relevant

---

## 9. Workflow Summary Pattern

The default high-level pattern is:

**Task Intake → Conductor Classification → Research Specialist → Writing and Structuring Specialist → Conductor Review → Memory/Resource Support if needed → Final Output**

This is the normal Phase 1 path.

A shorter version may occur if:
- the research is very simple
- the output does not require substantial structuring
- no durable storage is needed

A longer version may occur if:
- the task becomes cross-domain
- the findings need business or technical interpretation
- storage as a reusable resource is explicitly desired

---

## 10. Detailed Workflow Stages

## Stage 1 — Intake

### Purpose
Receive the research task into the system.

### Responsible Role
Conductor

### Actions
- register the task
- assign a task ID
- capture request text
- capture initial context
- create initial Session State

### Outputs
- task created
- Session State initiated
- event log entry written

### Suggested Event
- `task_created`

---

## Stage 2 — Classification

### Purpose
Determine what class of task has entered the system and whether this workflow is appropriate.

### Responsible Role
Conductor

### Actions
- inspect the request
- determine likely task class
- identify whether the task is truly research-oriented
- flag ambiguity if present
- decide whether the workflow proceeds, pauses, or reroutes

### Default Outcome
- Class B — Multi-Step Single-Track Task

### Alternate Outcomes
- Class A if very simple
- Class C if broader coordination is clearly required
- Class D if consequence becomes central
- Class E if ambiguity blocks routing

### Outputs
- task class assigned
- confidence state assigned
- workflow commitment or hold decision made

### Suggested Events
- `task_classified`
- `task_paused` if ambiguous

---

## Stage 3 — Routing to Research Specialist

### Purpose
Send the task to the role best suited to gather and organize findings.

### Responsible Role
Conductor

### Actions
- define research objective
- state expected output from research phase
- include any relevant constraints
- route task to Research Specialist

### Required Handoff Information
- task purpose
- research scope
- known constraints
- expected return format
- whether durable storage is likely later
- current confidence state

### Outputs
- specialist assignment
- updated Session State
- visible routing path

### Suggested Event
- `task_routed`

---

## Stage 4 — Research Execution

### Purpose
Gather, compare, and organize findings relevant to the task.

### Responsible Role
Research Specialist

### Actions
- gather relevant information
- identify useful source material
- compare options where appropriate
- synthesize findings
- identify gaps or uncertainty
- produce structured research notes

### Output Standard
The research phase should return:
- key findings
- relevant distinctions
- uncertainties or gaps
- suggested structure for final output if useful

### Restrictions
The Research Specialist should not:
- make governance decisions
- jump directly to external action
- silently convert findings into business execution
- store everything durably by default

### Suggested Events
- `specialist_started`
- `specialist_completed`

---

## Stage 5 — Optional Escalation Check

### Purpose
Determine whether the task has remained within research scope or expanded beyond it.

### Responsible Role
Conductor

### Escalation Triggers
Escalate if:
- the task now spans multiple domains
- technical interpretation is required
- business consequence becomes central
- the output is moving toward external use
- the findings are too uncertain for stable output

### Possible Outcomes
- continue to Writing and Structuring
- route to another specialist first
- pause for clarification
- flag approval sensitivity if external consequence emerges

### Suggested Events
- `task_routed` again if rerouted
- `task_paused` if held
- `approval_requested` only if consequential action is now in view

---

## Stage 6 — Writing and Structuring

### Purpose
Turn research notes into a clean, usable, readable output.

### Responsible Role
Writing and Structuring Specialist

### Actions
- organize findings into hierarchy
- improve clarity
- create a usable internal format
- preserve uncertainty honestly
- produce polished internal output

### Typical Output Forms
- summary note
- structured comparison
- internal report
- project resource draft
- decision-support note

### Restrictions
This role should not:
- invent certainty where there is none
- change meaning silently
- publish externally
- treat rough findings as final policy unless confirmed

### Suggested Events
- `specialist_started`
- `specialist_completed`

---

## Stage 7 — Conductor Review

### Purpose
Confirm that the output matches the workflow purpose and determine the next state.

### Responsible Role
Conductor

### Actions
- review structured output
- confirm workflow coherence
- determine whether additional routing is needed
- determine whether durable storage is justified
- determine whether the task is complete

### Possible Outcomes
- return final output directly
- send to Memory and Resource Support
- flag for approval if external use is now intended
- request refinement if output quality is insufficient

### Suggested Event
- `task_routed` if another handoff occurs
- `task_completed` if workflow ends here

---

## Stage 8 — Optional Memory / Resource Support

### Purpose
Deliberately store the output if it deserves to become a reusable project artifact.

### Responsible Role
Memory and Resource Support

### Entry Condition
Use this stage only if:
- the output is likely to matter again
- the output is stable enough to preserve
- the task was intended to create a reusable internal resource
- the Conductor or policy determines it should be promoted

### Actions
- determine appropriate storage class
- create or update durable resource if justified
- maintain naming consistency
- connect the resource to the relevant task or workflow

### Storage Targets
Likely destinations:
- Durable Resource
- Project Memory only if it changes stable project knowledge

### Restrictions
This role should not:
- store unstable drafts as stable knowledge
- overwrite policy meaning silently
- promote material without clear reason

### Suggested Events
- `resource_created`
- `memory_promoted`

---

## Stage 9 — Final Output

### Purpose
Return a usable result and close the workflow cleanly.

### Responsible Role
Conductor

### Actions
- deliver final structured output
- confirm completion state
- ensure final event logging
- ensure task status is visible in dashboard views

### Final Output Should Include
- the structured research result
- any unresolved uncertainty
- any stored resource reference if relevant
- suggested next action only if appropriate

### Suggested Event
- `task_completed`

---

## 11. Role Participation Summary

### Required Roles
- Conductor
- Research Specialist

### Usually Involved
- Writing and Structuring Specialist

### Optional
- Memory and Resource Support
- Technical Build Specialist if research becomes technical interpretation
- Business and Operations Specialist if research becomes operational strategy

### Executor Layer
The Executor is generally not central to this workflow unless:
- a governed tool action is required
- file creation or structured system action is needed
- some bounded action occurs under policy

This makes the workflow an excellent early Phase 1 proving ground because it does not depend heavily on high-risk execution.

---

## 12. Memory Behavior

### 12.1 Session State
Should hold:
- task description
- current class
- current stage
- current owner
- confidence state
- immediate constraints
- interim findings status

### 12.2 Event Log
Should record:
- task creation
- classification
- routing
- specialist start and completion
- escalation if any
- storage action if any
- workflow completion

### 12.3 Durable Resource
Should only be created when:
- the research output is organized
- it is likely to matter again
- the result is stable enough to keep
- storage was intended or justified

### 12.4 Project Memory
Should only be updated if the research output changes stable project understanding, not merely because the research was interesting.

---

## 13. Approval Handling

### Default Rule
This workflow usually does **not** require approval.

### Approval Becomes Relevant If
- the research output is to be published externally
- the research directly drives a consequential action
- the task transforms into public messaging, deployment, or other sensitive activity
- a structural change is proposed as a result of the findings

### Rule
Research itself is normally low-risk.
Action arising from research may not be.

---

## 14. Logging Requirements

At minimum, the following should be logged:

- task_created
- task_classified
- task_routed
- specialist_started
- specialist_completed
- task_paused if needed
- resource_created if used
- memory_promoted if used
- task_completed

The log should make it possible to reconstruct:
- what was asked
- how it was classified
- who worked on it
- what happened next
- what was stored
- how it ended

---

## 15. Suggested Dashboard Visibility

The workflow should be visible in the dashboard through:

### Governance Overview
- active task count
- current route state
- escalation or approval state if any

### Active Tasks
- task title
- current owner
- current stage
- confidence state
- next action

### Task Detail
- classification
- route summary
- timeline
- findings status
- related resource if created

### Trace / Run History
- ordered event history
- involved roles
- storage outcome

### Memory / Resources
- newly created internal resource if one is produced

---

## 16. Success Criteria

This workflow is successful when:

- the task is classified correctly
- the Conductor route is understandable
- research findings are clear and useful
- the output is structured rather than raw
- uncertainty is preserved honestly
- storage happens deliberately rather than automatically
- the run can be reconstructed clearly
- the final result feels genuinely useful

---

## 17. Failure Modes to Avoid

To preserve Phase 1 coherence, avoid:

- skipping classification
- allowing research to become unbounded wandering
- letting specialists self-route without governance
- storing every research output as durable memory
- turning research into action without approval when consequence exists
- producing raw information dumps instead of structured findings
- hiding uncertainty
- losing traceability between intake and final output

---

## 18. Suggested Test Cases

Useful Phase 1 test cases for this workflow include:

### Test Case 1 — Simple Internal Research Note
“Research this idea briefly and turn it into a short internal note.”

Expected:
- Class A or B
- Research Specialist
- Writing and Structuring
- no approval
- optional no durable storage

### Test Case 2 — Comparative Research File
“Compare three options and create a reusable resource document.”

Expected:
- Class B
- Research Specialist
- Writing and Structuring
- Memory/Resource Support
- durable resource created

### Test Case 3 — Research With Ambiguity
“Look into this and tell me what to do.”

Expected:
- possible Class E first
- clarification or narrowed classification before full routing

### Test Case 4 — Research Turning Consequential
“Research this and prepare it for external publication.”

Expected:
- research phase may proceed
- later approval boundary appears before external action

---

## 19. Completion Condition

The Research Coordination workflow is considered operational in Phase 1 when:

- it can run end to end without structural confusion
- the output is useful
- the route is visible
- the logs make sense
- storage is controlled
- the workflow feels repeatable rather than improvised

---

## 20. Closing Principle

The first workflow should not merely function.

It should prove that Nexus can think, route, structure, remember, and conclude without losing itself.

Research Coordination is the right first workflow because it exercises the Phase 1 spine without forcing premature complexity.

---

## 21. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#workflow1`  
`#research`  
`#coordination`  
`#governance`  
`#openclaw`
