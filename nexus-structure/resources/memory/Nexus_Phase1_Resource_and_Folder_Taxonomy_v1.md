# Nexus Phase 1 Resource and Folder Taxonomy  
## Project Structure, Document Placement, Naming Rules, Versioning, and Archive Guidance

**Document ID:** NEXUS-P1-TAX-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Define the Phase 1 resource and folder taxonomy for Nexus, including project folder hierarchy, document placement rules, naming conventions, versioning guidance, workflow output locations, and archive principles  
**Last Updated:** 2026-04-06  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`  
- `Nexus_Phase1_Memory_and_State_Model_v1.md`  
- `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`  
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`

---

## 1. Purpose

This document defines how Nexus Phase 1 project materials should be organized on disk.

Its purpose is to ensure that:
- the project has a stable folder hierarchy
- documents live in predictable locations
- resource growth remains coherent
- workflow outputs do not become scattered
- governance materials, runtime materials, and UI materials remain distinct
- versioning and archival behavior are understandable

This document turns the Phase 1 resource layer into a usable operational structure rather than a loose pile of files.

---

## 2. Core Principle

**A coherent system should have a coherent home.**

Phase 1 should avoid:
- scattered files
- inconsistent naming
- unclear ownership of documents
- mixing temporary work with durable resources
- burying governance files inside unrelated implementation folders

A useful rule for Phase 1 is:

**Place by purpose, not convenience.**

---

## 3. Taxonomy Objectives

The Phase 1 folder and resource taxonomy should do six things well:

### 3.1 Preserve Structural Clarity
The folder tree should reflect the actual architecture of Nexus.

### 3.2 Preserve Document Findability
A person should be able to predict where a file belongs.

### 3.3 Preserve Separation of Concerns
Governance, workflows, agents, memory, UI, integration, and logs should not be mixed carelessly.

### 3.4 Preserve Version Discipline
Documents should evolve predictably rather than being overwritten chaotically.

### 3.5 Preserve Archive Discipline
Outdated materials should not remain indistinguishable from active materials.

### 3.6 Support Workflow Outputs
Research and operational outputs should have clear storage homes.

---

## 4. Root Project Structure

A practical Phase 1 root structure is:

```text
Nexus/
├── resources/
├── frontend/
├── backend/
├── integrations/
├── runtime/
├── logs/
├── archives/
└── notes/
```

This structure is intentionally simple.
It supports both architecture planning and early implementation without creating premature complexity.

---

## 5. Root Folder Roles

### 5.1 `resources/`
Home for durable internal project documents, specs, references, templates, workflow outputs, and governed knowledge resources.

### 5.2 `frontend/`
Home for Nexus shell and dashboard implementation work, UI components, styling, layouts, and view structure.

### 5.3 `backend/`
Home for supporting application logic, APIs, services, storage coordination, and other system-facing backend materials if used in Phase 1.

### 5.4 `integrations/`
Home for documents and implementation notes governing how Nexus connects with OpenClaw and any other approved Phase 1 runtime relationships.

### 5.5 `runtime/`
Home for OpenClaw-facing runtime concerns, execution support materials, adapters, or task-execution-specific implementation assets where appropriate.

### 5.6 `logs/`
Home for trace design notes, schema references, example run logs, and other implementation-facing logging materials.
This is not the same as durable project resources.

### 5.7 `archives/`
Home for older versions, superseded materials, retired drafts, and intentionally preserved historical artifacts that are no longer active.

### 5.8 `notes/`
Home for rough thinking, temporary working notes, experiments, sketches, and material that has not yet been promoted into governed project resources.

---

## 6. Recommended `resources/` Taxonomy

The most important Phase 1 folder is `resources/`.

A practical structure is:

```text
resources/
├── blueprints/
├── governance/
├── agents/
├── memory/
├── workflows/
├── dashboard/
├── integrations/
├── policies/
├── references/
├── templates/
└── outputs/
```

This gives the core project documents a governed home.

---

## 7. `resources/` Subfolder Roles

### 7.1 `blueprints/`
Home for core architecture and high-level project-definition documents.

Examples:
- Phase 1 blueprint
- command-centre definition
- strategic scope documents
- phase summary documents

### 7.2 `governance/`
Home for routing, approval, orchestration, event, and control-layer documents.

Examples:
- governance and routing rules
- policy and approval types
- event types and run log schema
- escalation notes

### 7.3 `agents/`
Home for role definitions, permissions, restrictions, escalation boundaries, and role-specific supporting files.

Examples:
- agent roles and responsibilities
- conductor notes
- specialist role summaries

### 7.4 `memory/`
Home for memory and state model documents, storage rules, promotion logic, retrieval rules, and resource-governance notes.

Examples:
- memory and state model
- resource taxonomy
- storage rules
- naming conventions

### 7.5 `workflows/`
Home for defined workflow specifications and supporting workflow documents.

Examples:
- Workflow 1 research coordination
- Workflow 2 business and operations coordination
- future workflow specs

### 7.6 `dashboard/`
Home for UI-facing architectural documents related to the command-centre surface.

Examples:
- dashboard information architecture
- panel definitions
- task detail view notes
- UI view schemas

### 7.7 `integrations/`
Home for resource-level integration documents.
This is the document side of integration, not necessarily implementation code.

Examples:
- OpenClaw runtime integration spec
- adapter notes
- runtime visibility contracts

### 7.8 `policies/`
Home for policy-specific reference materials if they become numerous enough to merit separation from general governance docs.

Examples:
- approval policy matrices
- consequence categorization
- future policy overrides or exceptions

### 7.9 `references/`
Home for reusable internal references that support project understanding without necessarily defining system behavior.

Examples:
- glossary
- internal terminology
- comparison references
- architectural context notes

### 7.10 `templates/`
Home for reusable document patterns.

Examples:
- workflow template
- agent role template
- policy template
- checklist template
- decision log template

### 7.11 `outputs/`
Home for stable workflow outputs that deserve to remain available as reusable artifacts.

Examples:
- approved research summaries
- internal operational plans
- structured comparison documents
- reusable decision-support notes

---

## 8. Suggested Active Phase 1 File Placement

The current Phase 1 set would fit naturally as follows:

### `resources/blueprints/`
- `Nexus_Phase1_Blueprint_v1.md`
- `Nexus_Phase1_Blueprint_v1_Resource.md`
- `Nexus_Phase1_Build_Order_Checklist_v1.md`

### `resources/agents/`
- `Nexus_Phase1_Agent_Roles_and_Responsibilities_v1.md`

### `resources/governance/`
- `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`
- `Nexus_Phase1_Policy_and_Approval_Types_v1.md`
- `Nexus_Phase1_Event_Types_and_Run_Log_Schema_v1.md`

### `resources/memory/`
- `Nexus_Phase1_Memory_and_State_Model_v1.md`
- `Nexus_Phase1_Resource_and_Folder_Taxonomy_v1.md`

### `resources/dashboard/`
- `Nexus_Phase1_Dashboard_Information_Architecture_v1.md`

### `resources/workflows/`
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`
- `Nexus_Phase1_Workflow2_Business_Operations_Coordination_Spec_v1.md`

### `resources/integrations/`
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`

This gives the existing body of work a clean governed home.

---

## 9. Naming Convention

### 9.1 Recommended Pattern
Use:

`Nexus_[Phase]_[Subject]_[Type]_v1.md`

Examples:
- `Nexus_Phase1_Memory_and_State_Model_v1.md`
- `Nexus_Phase1_Workflow1_Research_Coordination_Spec_v1.md`
- `Nexus_Phase1_OpenClaw_Runtime_Integration_Spec_v1.md`

### 9.2 Naming Goals
Names should make the following obvious:
- project
- phase
- subject
- document type
- version

### 9.3 Avoid
Avoid:
- vague titles
- inconsistent separators
- missing version labels
- filenames that only make sense in immediate context
- multiple unrelated abbreviations in one title

---

## 10. Versioning Guidance

### 10.1 Version by Meaningful Revision
Increase the document version when:
- the structure changes materially
- the policy meaning changes
- the workflow logic changes
- the guidance would affect implementation decisions

### 10.2 Do Not Over-Version Minor Edits
Do not create a new file version for:
- typo corrections
- minor wording refinement
- tiny formatting cleanups
- cosmetic edits with no implementation consequence

### 10.3 Practical Rule
Use the same file while refining early drafts if the document still represents the same operative version.
Create a new versioned file when the meaning materially changes.

### 10.4 Suggested Early Pattern
- `v1` = first stable working version
- `v2` = materially revised working version
- archive earlier versions when superseded

---

## 11. Archive Rules

### 11.1 What Belongs in `archives/`
Move a file to archive when:
- it has been superseded by a newer governed version
- it reflects an abandoned direction
- it is historically useful but no longer active
- it should be preserved without remaining in the active taxonomy

### 11.2 What Should Remain Active
Keep in the active structure when:
- the file still reflects current Phase 1 meaning
- it is still the current reference point
- implementation is still using it directly

### 11.3 Archive Naming Guidance
Archived files may keep their original names, optionally with a dated archive prefix or folder path.

Example:
```text
archives/phase1/2026-04/Nexus_Phase1_Blueprint_v1.md
```

### 11.4 Rule
Archive to preserve history.
Do not archive to hide disorder.

---

## 12. Draft vs Governed Material

Phase 1 should distinguish clearly between rough material and governed material.

### 12.1 Rough / Working Material
Place in:
- `notes/`
- temporary subfolders inside `resources/templates/` or `resources/references/` only if clearly marked as draft

### 12.2 Governed Material
Place in:
- `resources/` subfolders according to purpose

### 12.3 Rule
A document becomes governed when:
- it is being used as a reference for implementation
- it changes system meaning
- it defines a role, workflow, rule, or architecture decision
- it is stable enough to deserve durable retrieval

---

## 13. Workflow Output Placement

Workflow outputs should not be mixed blindly with architecture documents.

### 13.1 Research Outputs
Place stable reusable outputs in:
- `resources/outputs/research/`

Examples:
- approved comparison files
- reusable internal research summaries
- structured topic notes

### 13.2 Business / Operations Outputs
Place stable reusable outputs in:
- `resources/outputs/operations/`

Examples:
- internal action maps
- monetization route plans
- content pipeline notes
- structured operational summaries

### 13.3 Temporary Workflow Material
Place transient or provisional output in:
- task-local storage
- `notes/`
- runtime-local state
- Session State, not durable resource folders

### 13.4 Rule
Do not elevate every workflow output into a durable resource.
Only promote outputs worth retrieving later.

---

## 14. Policy, Governance, and Runtime Separation

To preserve architectural clarity:

### Governance Files
Belong in:
- `resources/governance/`

### Policy Files
Belong in:
- `resources/policies/` or `resources/governance/` depending on scale

### Runtime Integration Files
Belong in:
- `resources/integrations/`

### Runtime Implementation Assets
Belong in:
- `runtime/` or `integrations/` implementation folders

### Rule
A document about policy should not be buried in runtime code folders.
A runtime adapter should not be stored beside blueprint prose unless it is a governed spec.

---

## 15. UI and Dashboard Separation

To preserve the command-centre architecture:

### UI Implementation Assets
Belong in:
- `frontend/`

### Dashboard Architecture Docs
Belong in:
- `resources/dashboard/`

### Rule
Architecture descriptions live in resources.
Actual UI implementation lives in frontend.

This keeps design logic and built surface related but not confused.

---

## 16. Memory and Durable Resource Separation

To preserve the memory model:

### Memory Rules and Taxonomy
Belong in:
- `resources/memory/`

### Actual Reusable Resource Outputs
Belong in:
- `resources/outputs/`

### Event/Trace Materials
Belong in:
- `resources/governance/` for schema
- `logs/` for implementation-facing examples or generated traces

### Rule
Do not confuse:
- the rules for memory
- the outputs stored by memory
- the historical logs produced by runs

They are related, but they are not the same thing.

---

## 17. Suggested Future Subfolders

If Phase 1 grows but should remain orderly, future additions could include:

```text
resources/
├── blueprints/
├── governance/
│   ├── approvals/
│   ├── routing/
│   └── logging/
├── workflows/
│   ├── research/
│   └── operations/
├── outputs/
│   ├── research/
│   └── operations/
├── integrations/
│   └── openclaw/
└── templates/
```

This should only be introduced if the simpler structure begins to strain.

---

## 18. Minimal Operating Rules

To keep the taxonomy healthy, Phase 1 should follow these rules:

1. Every durable file must have a predictable home.  
2. Every governed file must have a versioned name.  
3. Rough notes should not masquerade as active policy.  
4. Workflow outputs should not crowd blueprint folders.  
5. Archived files should remain retrievable but visibly non-active.  
6. Folder growth should happen by purpose, not by impulse.

---

## 19. Success Criteria

The resource and folder taxonomy is working correctly when:

- you can predict where a file belongs
- active documents are easy to find
- governed docs are distinct from rough notes
- workflow outputs have clear homes
- versioning is understandable
- archives preserve history without cluttering current work
- the file structure mirrors the Phase 1 architecture

---

## 20. Failure Modes to Avoid

To preserve coherence, avoid:

- storing everything in one folder
- using `resources/` as an undifferentiated dumping ground
- leaving rough notes beside governed reference docs without distinction
- letting workflow outputs crowd architecture folders
- mixing runtime implementation files with policy documents
- renaming files inconsistently over time
- archiving active files prematurely
- failing to archive superseded versions

---

## 21. Closing Principle

A project folder is part of the architecture.

If Nexus is meant to become a governed command centre, then even its file structure should reflect governance, clarity, and deliberate separation.

Phase 1 does not need a huge taxonomy.
It needs one strong enough to prevent disorder from becoming normal.

---

## 22. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#taxonomy`  
`#folders`  
`#resources`  
`#versioning`  
`#openclaw`
