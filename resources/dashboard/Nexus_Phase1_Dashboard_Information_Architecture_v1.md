# Nexus Phase 1 Dashboard Information Architecture  
## Command Centre Layout, Panels, Status Fields, and Task Views

**Document ID:** NEXUS-P1-DASH-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Define the Phase 1 dashboard information architecture for Nexus, including layout zones, core panels, task views, approval views, and visible state indicators  
**Last Updated:** 2026-04-05  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`  
- `Nexus_Phase1_Agent_Roles_and_Responsibilities_v1.md`  
- `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`  
- `Nexus_Phase1_Memory_and_State_Model_v1.md`

---

## 1. Purpose

This document defines how Nexus should present information in Phase 1.

Its purpose is to ensure that the dashboard:
- feels like a command centre rather than a chatbot wrapper
- surfaces governance clearly
- makes task flow visible
- makes agent activity visible
- makes approvals obvious
- makes memory and history retrievable
- keeps the system understandable under live use

The dashboard is not only a visual layer.

It is the **visible face of governance**.

---

## 2. Core Principle

**The dashboard should answer the four Phase 1 questions at a glance:**

1. What is running?  
2. Why is it doing that?  
3. Who decided that?  
4. What happens next?

If the interface cannot answer those questions clearly, it is not yet functioning as a Nexus command centre.

---

## 3. Phase 1 Dashboard Objectives

The dashboard should do five things well:

### 3.1 Surface State
Show current system status and active workflow state clearly.

### 3.2 Surface Governance
Show route decisions, approvals, escalations, and confidence states.

### 3.3 Surface Activity
Show what agents are doing, what recently happened, and what is pending.

### 3.4 Surface Retrieval
Allow memory, resources, and prior run context to be retrieved without clutter.

### 3.5 Preserve Legibility
Keep the interface understandable even when multiple tasks are active.

---

## 4. Design Character

The Nexus dashboard should feel:

- structured
- calm
- operational
- readable
- authoritative without being crowded

It should not feel like:
- an ordinary chat app
- a noisy admin console
- an overloaded analytics dashboard
- a stream of unstructured messages

The visual tone should reinforce that Nexus is a **seat of coordination and control**.

---

## 5. Phase 1 Layout Model

A simple and practical Phase 1 layout is:

- **Top Bar**
- **Primary Navigation**
- **Main Command Surface**
- **Right-side Detail / Context Rail**
- **Optional Lower Activity Strip or Run Log Panel**

This layout gives Nexus a recognizable operating frame without demanding excessive UI complexity in Phase 1.

---

## 6. Top Bar

### 6.1 Purpose
The Top Bar provides immediate system-level awareness.

### 6.2 Suggested Contents
- project/system name: Nexus
- current mode or phase indicator
- system health indicator
- active workflow count
- pending approvals count
- search/access point for resources
- optional user/profile or session indicator

### 6.3 Role
The Top Bar should answer:
- Is the system stable?
- Is anything urgent?
- How much is active right now?

---

## 7. Primary Navigation

### 7.1 Purpose
The Primary Navigation gives access to the major operational views.

### 7.2 Suggested Navigation Sections
- Governance Overview
- Active Tasks
- Agents
- Approvals
- Trace / Run History
- Memory / Resources
- Workflows
- Settings or Policies

### 7.3 Rule
Navigation labels should match the governance language already established in the project documents.

The UI should reinforce the structure of the system rather than invent a competing language.

---

## 8. Governance Overview

### 8.1 Purpose
This is the home view of the dashboard.

It provides the broadest operational snapshot.

### 8.2 What It Should Show
- current system health
- number of active tasks
- number of approvals pending
- active agents summary
- current escalations or blocked items
- latest notable run events
- high-level confidence or state indicators

### 8.3 Required Cards or Panels
Suggested components:
- System Health Card
- Active Tasks Card
- Pending Approvals Card
- Escalations Card
- Recent Activity Card
- Current Workflow Summary Card

### 8.4 Role
This view should allow you to understand system posture in one glance.

---

## 9. Active Tasks View

### 9.1 Purpose
The Active Tasks view shows what is currently in motion.

### 9.2 Each Task Row Should Show
- task ID
- task title or short description
- task class
- current owner
- current stage
- current confidence state
- approval state if relevant
- last updated timestamp
- next expected action

### 9.3 Recommended Filters
- all tasks
- active
- paused
- approval-pending
- completed recently
- escalated
- by specialist owner

### 9.4 Role
This is the operational queue view.

It should answer:
- what exists
- what state it is in
- where attention is needed

---

## 10. Task Detail View

### 10.1 Purpose
The Task Detail view is where a single task becomes fully inspectable.

### 10.2 Required Sections
- Task Summary
- Classification and Routing
- Current Owner
- Current Stage
- Timeline / Event Log
- Related Approvals
- Related Resources
- Suggested Next Action

### 10.3 Recommended Task Summary Fields
- task ID
- creation time
- originating request
- task class
- confidence state
- workflow type
- current owner
- current status

### 10.4 Routing Section
This should show:
- initial classification
- why that classification was assigned
- route path taken
- any handoffs
- any escalation reason

### 10.5 Timeline / Event Log Section
This should show:
- major events in order
- role actions
- approvals requested
- executor actions
- failures or pauses

### 10.6 Role
This view should make reconstruction easy.

A user should not have to guess what happened.

---

## 11. Agent Status View

### 11.1 Purpose
The Agent Status view shows the state of available roles.

### 11.2 Each Agent Card Should Show
- agent name
- role type
- current status: idle / active / blocked / error
- current assigned task if any
- last completed task or recent activity
- permission scope summary
- escalation flag if relevant

### 11.3 Suggested Agents for Phase 1
- Conductor
- Research Specialist
- Writing and Structuring Specialist
- Technical Build Specialist
- Business and Operations Specialist
- Memory and Resource Support
- Executor Layer

### 11.4 Role
This view helps show whether the system is balanced, overloaded, blocked, or inactive.

---

## 12. Approvals View

### 12.1 Purpose
The Approvals view is where meaningful actions pause for human review.

### 12.2 Each Approval Item Should Show
- approval ID
- originating task
- requesting role
- proposed action
- reason for action
- expected impact
- urgency level if used
- time requested
- approve / reject / revise controls

### 12.3 Approval Detail View
For a selected approval, show:
- full rationale
- related task summary
- relevant prior events
- policy reason it requires approval
- consequences if executed

### 12.4 Role
This view is one of the clearest symbols that Nexus is governed rather than self-authorizing.

---

## 13. Trace / Run History View

### 13.1 Purpose
This view provides historical visibility into what happened.

### 13.2 Each Run Entry Should Show
- run ID
- task reference
- route summary
- agents involved
- execution status
- approval involvement
- completion state
- timestamps

### 13.3 Run Detail View
For deeper inspection, show:
- event sequence
- handoff chain
- tool usage
- execution results
- failures or blocked conditions
- storage outcome

### 13.4 Role
This is the debugging and auditability layer.

It should support:
- reconstruction
- diagnosis
- review
- trust

---

## 14. Memory / Resources View

### 14.1 Purpose
This view surfaces durable project knowledge and reusable artifacts.

### 14.2 Suggested Sections
- Project Memory
- Durable Resources
- Recent Additions
- Frequently Used Resources
- Resource Search

### 14.3 What Each Resource Entry Should Show
- resource title
- resource type
- version if relevant
- date created or updated
- subject area
- brief description
- linked workflow or task if relevant

### 14.4 Role
This view should help the system feel continuous and organized, not buried in forgotten documents.

---

## 15. Workflow View

### 15.1 Purpose
The Workflow view shows the predefined pathways Nexus can run.

### 15.2 Suggested Fields Per Workflow
- workflow name
- workflow purpose
- involved roles
- approval points
- expected outputs
- current status if active
- linked recent runs

### 15.3 Phase 1 Recommended Workflows
- Research Coordination
- Business / Operations Coordination

### 15.4 Role
This view helps connect governance logic to practical operating paths.

---

## 16. Confidence and State Indicators

### 16.1 Purpose
These indicators make task posture visible without forcing the user to open every detail view.

### 16.2 Recommended States
- Direct
- Guided
- Escalated
- Approval-Pending
- Ambiguous
- Blocked
- Completed

### 16.3 Where to Surface Them
- task list
- task detail
- governance overview
- approvals
- run history

### 16.4 Role
The point is not mathematical precision.

The point is readable posture.

---

## 17. Suggested Main Dashboard Zones

A practical Phase 1 main screen could be divided into these zones:

### Zone A — Governance Summary
Top-level cards:
- system health
- active tasks
- pending approvals
- active escalations

### Zone B — Current Task Focus
A central panel showing:
- selected task
- route summary
- next action
- confidence state
- assigned owner

### Zone C — Live Activity
Recent events such as:
- task classified
- routed to specialist
- approval requested
- executor completed
- task paused

### Zone D — Context Rail
A side panel showing:
- related resources
- relevant memory items
- linked approvals
- linked recent runs

This gives the dashboard both breadth and depth without overcrowding it.

---

## 18. Suggested Empty States

Phase 1 should handle quiet moments gracefully.

Examples:

### No Active Tasks
“System idle. No active tasks in motion.”

### No Pending Approvals
“No approvals are currently awaiting review.”

### No Recent Escalations
“No active escalations at this time.”

### No Matching Resources
“No related resources found for this view.”

Good empty states reinforce calm rather than making the dashboard feel broken.

---

## 19. Alerting and Emphasis Rules

Phase 1 should use emphasis sparingly.

### Use stronger visual emphasis for:
- blocked tasks
- approval-pending items
- errors
- escalations
- failed executions

### Use lighter visual treatment for:
- completed tasks
- historical runs
- archived resources
- informational notes

The dashboard should guide attention, not shout constantly.

---

## 20. Information Priority Rules

When deciding what is most visible, Phase 1 should prioritize:

1. blocked or approval-sensitive items  
2. active tasks  
3. current route and owner  
4. recent major events  
5. supporting resources  
6. older history

This preserves the command-centre feel by surfacing what matters now.

---

## 21. Mobile and Narrow Layout Guidance

Even if Phase 1 is primarily desktop-oriented, narrow layouts should still preserve:

- task state
- owner
- approval status
- next action

On smaller layouts, lower priority items such as extended trace details can collapse behind secondary views.

---

## 22. Failure Modes to Avoid

To preserve coherence, avoid:

- making the dashboard feel like chat first and governance second
- surfacing too many metrics with too little meaning
- hiding approval state
- hiding routing logic
- forcing users to dig for current owner or next action
- mixing durable resources with temporary live state
- overloading the home screen with every possible panel

---

## 23. Success Criteria

The dashboard architecture is working correctly when:

- the system feels like a command centre
- active work is easy to locate
- route decisions are easy to inspect
- approvals are hard to miss
- history is easy to reconstruct
- resources are easy to retrieve
- the interface remains legible during live use

---

## 24. Closing Principle

A good Phase 1 dashboard does not try to show everything.

It shows the right things, in the right order, with the right level of visibility.

The Nexus dashboard should feel like a place where work is governed, not merely displayed.

---

## 25. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#dashboard`  
`#information-architecture`  
`#ui`  
`#governance`  
`#openclaw`
