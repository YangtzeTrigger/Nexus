# Nexus Phase 1 Document Index and Reading Order  
## Master Reference Guide for Strategy, Governance, Workflows, Implementation, Review, and Active Use

**Document ID:** NEXUS-P1-INDEX-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Provide a master index for the current Nexus Phase 1 document set, including document purpose, category, recommended reading order, implementation-use order, and always-active references during the build  
**Last Updated:** 2026-04-06  
**Related Documents:** Entire current Nexus Phase 1 resource set

---

## 1. Purpose

This document provides a **master index and reading order** for the current Nexus Phase 1 document library.

Its purpose is to ensure that:
- the growing document set remains navigable
- strategy documents are distinct from implementation documents
- governance/control documents are easy to find
- build-use order is obvious
- “always active” references are clear during implementation
- the project folder functions like a governed library rather than a stack of disconnected files

At this stage, the document set is large enough that navigation itself now deserves structure.

---

## 2. Core Principle

**Not every document is for the same moment.**

Some documents define:
- what Nexus is

Others define:
- how Nexus behaves

Others define:
- how to build it

Others define:
- how to review, stabilize, and protect it

A useful rule is:

**Read for purpose, not for completionism.**

You do not need every file open at once.
You need the right files open for the current stage of work.

---

## 3. Current Phase 1 Library at a Glance

The current Phase 1 set contains these document families:

- **Foundation / Identity**
- **Governance / Control**
- **Roles / Behavioral Boundaries**
- **Memory / Resource Structure**
- **Dashboard / UI Architecture**
- **Workflow Specifications**
- **Runtime / Integration**
- **Implementation / Build Execution**
- **Review / Risk / Stabilization**

Together, these documents form the current Phase 1 command-centre library.

---

## 4. Document Family Map

## 4.1 Foundation / Identity Documents

### `Nexus_Phase1_Blueprint_v1.md`
Shorter architectural blueprint version.

### `Nexus_Phase1_Blueprint_v1_Resource.md`
Primary governed Phase 1 blueprint resource.

### `Nexus_Phase1_Build_Order_Checklist_v1.md`
High-level staged build sequence and architecture progression checklist.

**Use these when:**
- defining what Phase 1 is
- re-anchoring the project
- checking whether expansion is premature
- explaining the project to yourself or another person at a high level

---

## 4.2 Roles / Behavioral Boundaries

### `Nexus_Phase1_Agent_Roles_and_Responsibilities_v1.md`

**Use this when:**
- checking role boundaries
- deciding which roles are active now
- preventing role overlap
- reviewing escalation responsibility

---

## 4.3 Governance / Control Documents

### `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`
Core task intake, routing, escalation, and approval posture logic.

### `Nexus_Phase1_Policy_and_Approval_Types_v1.md`
Approval categories, consequence levels, and decision paths.

### `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`
Canonical event language and run-history structure.

### `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md`
Canonical field meanings for status, stage, owner, confidence, approval posture, and closure.

**Use these when:**
- defining what the system is allowed to do
- checking whether a route is valid
- deciding whether approval is required
- aligning runtime events with dashboard truth
- validating field meaning during implementation

---

## 4.4 Memory / Resource Structure

### `Nexus_Phase1_Memory_and_State_Model_v1.md`
Session state, project memory, event log, and durable resource model.

### `Nexus_Phase1_Resource_and_Folder_Taxonomy_v1.md`
Folder placement, naming, versioning, archive, and output-location guidance.

**Use these when:**
- deciding what gets stored
- deciding what should not be stored
- organizing files and outputs
- preventing resource clutter
- structuring the project folder itself

---

## 4.5 Dashboard / UI Architecture

### `Nexus_Phase1_Dashboard_Information_Architecture_v1.md`
What the dashboard should show and how the command-centre surface is structured.

### `Nexus_Phase1_UI_Field_Binding_and_Data_Contract_v1.md`
Exactly which fields power which views and how runtime returns map into UI-visible truth.

**Use these when:**
- designing or building the shell
- checking what each panel should contain
- aligning visible UI with canonical state
- avoiding misleading interface behavior

---

## 4.6 Workflow Specifications

### `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`
The first proof workflow and current primary implementation path.

### `Nexus_Phase1_Workflow2_Business_Operations_Coordination_Spec_v1.md`
The second workflow for later controlled expansion.

**Use these when:**
- building the first proof path
- testing route logic
- validating end-to-end behavior
- deciding whether Workflow 2 should remain deferred

---

## 4.7 Runtime / Integration

### `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`

**Use this when:**
- implementing Nexus ↔ OpenClaw handoff
- checking command/runtime responsibility boundaries
- validating return payload quality
- reviewing approval pause behavior at the runtime boundary

---

## 4.8 Implementation / Build Execution

### `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`
Smallest coherent first proof target.

### `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`
First sprint sequence, build blocks, dependencies, and definitions of done.

### `Nexus_Phase1_Component_Map_and_Implementation_Ownership_v1.md`
Implementation-facing component ownership map.

### `Nexus_Phase1_Build_Sequence_Taskboard_v1.md`
Execution-facing board structure for Now / Next / Soon / Later / Blocked / Done.

**Use these when:**
- deciding what to build first
- reducing the architecture into real work
- sequencing tasks for current implementation
- preventing scope creep during the first build

---

## 4.9 Review / Risk / Stabilization

### `Nexus_Phase1_Implementation_Checkpoint_Review_v1.md`
Structured truth review for the first build cycle.

### `Nexus_Phase1_Risk_Register_and_Mitigation_Log_v1.md`
Active risk tracking and mitigation log.

**Use these when:**
- reviewing whether the first proof is actually trustworthy
- deciding whether to stabilize or expand
- tracking recurring risk pressure
- checking whether the build is drifting from the architecture

---

## 5. Full Document Index

Below is the current working index of the Phase 1 set.

| Document | Primary Role | Category | Use When |
|---|---|---|---|
| `Nexus_Phase1_Blueprint_v1.md` | Short-form architectural blueprint | Foundation | Quick re-anchor |
| `Nexus_Phase1_Blueprint_v1_Resource.md` | Main Phase 1 governed blueprint | Foundation | Core reference |
| `Nexus_Phase1_Build_Order_Checklist_v1.md` | High-level staged build path | Foundation / Execution | Checking sequence |
| `Nexus_Phase1_Agent_Roles_and_Responsibilities_v1.md` | Role boundaries and escalation | Roles | Clarifying ownership |
| `Nexus_Phase1_Governance_and_Routing_Rules_v1.md` | Intake, routing, escalation, approval logic | Governance | Route/policy checks |
| `Nexus_Phase1_Memory_and_State_Model_v1.md` | Session, memory, event, durable resource rules | Memory | Storage/retrieval decisions |
| `Nexus_Phase1_Dashboard_Information_Architecture_v1.md` | What the shell should show | Dashboard | UI structure work |
| `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md` | First proof workflow | Workflows | Current build path |
| `Nexus_Phase1_Workflow2_Business_Operations_Coordination_Spec_v1.md` | Second workflow | Workflows | Later expansion |
| `Nexus_Phase1_Policy_and_Approval_Types_v1.md` | Approval categories and consequence logic | Governance / Policy | Approval implementation |
| `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md` | Canonical event and run model | Governance / Trace | Logging and trace work |
| `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md` | Nexus ↔ OpenClaw contract | Integration | Runtime boundary work |
| `Nexus_Phase1_Resource_and_Folder_Taxonomy_v1.md` | Folder, naming, archive, output structure | Memory / Resources | Organizing files |
| `Nexus_Phase1_Minimum_Buildable_Slice_v1.md` | Smallest truthful first build | Implementation | Reducing scope |
| `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md` | First build blocks and sprint order | Implementation | Current sprint sequencing |
| `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md` | Canonical state vocabulary | Governance / State | Field alignment |
| `Nexus_Phase1_UI_Field_Binding_and_Data_Contract_v1.md` | Which fields power which views | UI / Data | Panel implementation |
| `Nexus_Phase1_Component_Map_and_Implementation_Ownership_v1.md` | Component responsibilities and boundaries | Implementation | Build ownership |
| `Nexus_Phase1_Build_Sequence_Taskboard_v1.md` | Practical work board | Execution | Daily/weekly build flow |
| `Nexus_Phase1_Implementation_Checkpoint_Review_v1.md` | Structured post-build review | Review | Stabilization decisions |
| `Nexus_Phase1_Risk_Register_and_Mitigation_Log_v1.md` | Risk tracking and mitigation | Review / Risk | Ongoing protection |

---

## 6. Recommended Reading Order by Situation

## 6.1 If You Need the Big Picture First

Read in this order:

1. `Nexus_Phase1_Blueprint_v1_Resource.md`
2. `Nexus_Phase1_Build_Order_Checklist_v1.md`
3. `Nexus_Phase1_Agent_Roles_and_Responsibilities_v1.md`
4. `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`
5. `Nexus_Phase1_Memory_and_State_Model_v1.md`
6. `Nexus_Phase1_Dashboard_Information_Architecture_v1.md`

This gives the conceptual spine first.

---

## 6.2 If You Are Starting the First Real Build

Read in this order:

1. `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`
2. `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`
3. `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md`
4. `Nexus_Phase1_UI_Field_Binding_and_Data_Contract_v1.md`
5. `Nexus_Phase1_Component_Map_and_Implementation_Ownership_v1.md`
6. `Nexus_Phase1_Build_Sequence_Taskboard_v1.md`
7. `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`
8. `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`
9. `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`

This gives the shortest path from concept to implementation.

---

## 6.3 If You Are Working on Governance or Runtime Behavior

Read in this order:

1. `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`
2. `Nexus_Phase1_Policy_and_Approval_Types_v1.md`
3. `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md`
4. `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`
5. `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`

This gives the control layer first, then the field language, then trace/runtime binding.

---

## 6.4 If You Are Working on the Dashboard or Front-End Shell

Read in this order:

1. `Nexus_Phase1_Dashboard_Information_Architecture_v1.md`
2. `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md`
3. `Nexus_Phase1_UI_Field_Binding_and_Data_Contract_v1.md`
4. `Nexus_Phase1_Component_Map_and_Implementation_Ownership_v1.md`
5. `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`

This gives visual structure first, then state truth, then binding, then component ownership.

---

## 6.5 If You Are Reviewing Whether the Build Is Safe to Extend

Read in this order:

1. `Nexus_Phase1_Implementation_Checkpoint_Review_v1.md`
2. `Nexus_Phase1_Risk_Register_and_Mitigation_Log_v1.md`
3. `Nexus_Phase1_Build_Sequence_Taskboard_v1.md`
4. `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`
5. `Nexus_Phase1_Blueprint_v1_Resource.md`

This gives the truth review first, the risk posture second, then the original Phase 1 intent.

---

## 7. Always-Active References During Current Implementation

If you are actively building the first Nexus proof, the most useful “always open” set is:

### Core Five
- `Nexus_Phase1_Minimum_Buildable_Slice_v1.md`
- `Nexus_Phase1_First_Implementation_Sprint_Plan_v1.md`
- `Nexus_Phase1_Task_and_Run_State_Dictionary_v1.md`
- `Nexus_Phase1_UI_Field_Binding_and_Data_Contract_v1.md`
- `Nexus_Phase1_Component_Map_and_Implementation_Ownership_v1.md`

### Add These Beside Them
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`
- `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`
- `Nexus_Phase1_Build_Sequence_Taskboard_v1.md`

These are the documents most likely to be used repeatedly during the first proof build.

---

## 8. Documents That Can Stay Nearby But Not Always Open

These are important, but not necessarily needed all the time:

- `Nexus_Phase1_Agent_Roles_and_Responsibilities_v1.md`
- `Nexus_Phase1_Policy_and_Approval_Types_v1.md`
- `Nexus_Phase1_Memory_and_State_Model_v1.md`
- `Nexus_Phase1_Dashboard_Information_Architecture_v1.md`
- `Nexus_Phase1_Resource_and_Folder_Taxonomy_v1.md`

Use these as reference checks rather than constant working companions unless the current implementation block is directly about them.

---

## 9. Documents That Should Usually Stay Deferred Until the First Proof Is Stable

These should remain available, but not drive the current build until the minimum slice is genuinely trustworthy:

- `Nexus_Phase1_Workflow2_Business_Operations_Coordination_Spec_v1.md`
- more complex future workflow material
- any later-phase policy or expansion documents
- any large-scale ecosystem planning notes

This protects Phase 1 from widening too early.

---

## 10. Recommended Build-Use Order

A practical “use while building” order is:

### First
- Minimum Buildable Slice
- First Implementation Sprint Plan
- Build Sequence Taskboard

### Then
- Task and Run State Dictionary
- UI Field Binding and Data Contract
- Component Map and Implementation Ownership

### Then
- Workflow 1 Spec
- OpenClaw Runtime Integration Spec
- Event Types and Run Log Schema

### Then
- Policy and Approval Types
- Memory and State Model
- Resource and Folder Taxonomy

### Finally
- Checkpoint Review
- Risk Register

This is the most practical progression from build start to stabilization.

---

## 11. Suggested Folder Placement for the Current Library

A clean Phase 1 resource arrangement would be:

### `resources/blueprints/`
- Blueprint files
- Build Order Checklist

### `resources/agents/`
- Agent Roles and Responsibilities

### `resources/governance/`
- Governance and Routing Rules
- Policy and Approval Types
- Event Types and Run Log Schema
- Task and Run State Dictionary

### `resources/memory/`
- Memory and State Model
- Resource and Folder Taxonomy

### `resources/dashboard/`
- Dashboard Information Architecture
- UI Field Binding and Data Contract

### `resources/workflows/`
- Workflow 1
- Workflow 2

### `resources/integrations/`
- OpenClaw Runtime Integration Spec

### `resources/implementation/`
- Minimum Buildable Slice
- First Implementation Sprint Plan
- Component Map and Implementation Ownership
- Build Sequence Taskboard
- Implementation Checkpoint Review
- Risk Register and Mitigation Log

This gives the library a governed, predictable home.

---

## 12. What This Index Should Help Prevent

If used properly, this index should help prevent:

- repeatedly rereading the wrong documents for the current task
- mixing strategy files with implementation files
- pulling Workflow 2 into focus too early
- losing track of the “always active” references
- treating the library as a pile rather than a structured project resource system
- expansion by document sprawl instead of deliberate progression

---

## 13. Success Criteria

This index is working correctly when:

- you can locate the right document quickly
- the current implementation set feels manageable
- build-use order is obvious
- stable references stay distinct from deferred ones
- the document library supports momentum rather than creating noise

---

## 14. Closing Principle

A mature project is not only defined by what it builds.

It is also defined by whether its knowledge is navigable.

Nexus Phase 1 now has enough structure that its document set should be treated as part of the architecture itself.

---

## 15. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#document-index`  
`#reading-order`  
`#resources`  
`#implementation`  
`#openclaw`
