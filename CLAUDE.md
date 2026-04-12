# CLAUDE.md — Nexus Command Centre

This file tells you what this project is, how it works, and the rules that govern all build decisions. Read this before touching anything.

-----

## What This Project Is

Nexus is a **private, governed multi-agent command centre** built on Electron + React, coordinating AI specialist agents through OpenClaw runtime.

It is **not** a general chatbot wrapper. It is a structured governance system where every task is classified, routed, worked, verified, and accepted through a defined chain of responsibility. Every meaningful action is visible. Nothing important happens silently.

-----

## What This Project Is Not

Do not treat this as a standard React app or a generic AI integration project.

- Do not add features because they seem useful — check the governance docs first
- Do not skip the event log for any meaningful state change
- Do not let agents self-authorise outside their defined role boundaries
- Do not add complexity before the current workflow is proven stable
- Do not implement Workflow 2 logic until Workflow 1 is fully trustworthy

-----

## Core Architecture

### The Workflow Chain

Every task follows this path:

```
Governor → Librarian → Artisan → Auditor → Governor
```

|Role         |Function                                                           |
|-------------|-------------------------------------------------------------------|
|**Governor** |Classifies the task, routes it, makes the final acceptance decision|
|**Librarian**|Researches and structures findings                                 |
|**Artisan**  |Produces the output document                                       |
|**Auditor**  |Verifies output against the original success criteria              |

The Governor appears twice — opening (classify and route) and closing (accept or return). These are different acts from the same authority.

### Nine Canonical Events

Every complete run produces these nine events in order:

```
task_created
task_classified
task_routed
specialist_started     (Librarian)
specialist_completed   (Librarian)
specialist_started     (Artisan)
specialist_completed   (Artisan)
audit_complete
task_completed
```

If an audit fails, the task returns — either to the Artisan directly or via the Governor depending on severity. This decision must be explicit, not silent.

-----

## Task Classification

The Governor classifies every task before routing. Use these classes precisely:

|Class|Type                   |Description                                            |
|-----|-----------------------|-------------------------------------------------------|
|A    |Simple Single-Domain   |One role, low ambiguity, low consequence               |
|B    |Multi-Step Single-Track|One workflow path, multiple bounded steps              |
|C    |Cross-Domain           |Multiple specialist roles, stronger coordination needed|
|D    |Approval-Sensitive     |External consequence, must pause at approval boundary  |
|E    |Ambiguous              |Cannot safely classify yet — gather clarification first|

**Rule:** Class D tasks must pause at the approval boundary. Execution cannot proceed until approval is granted.

-----

## Event Schema Rules

Every event record must contain at minimum:

- `event_id`
- `event_type` (use canonical types only — see below)
- `timestamp`
- `run_id`
- `task_id`
- `actor_type` (system / conductor / specialist / executor / approval_surface / user)
- `actor_name`
- `event_summary`
- `current_stage`
- `resulting_status`

### Canonical Event Types

Use only these. Do not invent new event types without a governance reason.

**Task Lifecycle:** `task_created` `task_paused` `task_resumed` `task_cancelled` `task_completed`

**Classification & Routing:** `task_classified` `task_reclassified` `task_routed` `task_escalated`

**Specialist Activity:** `specialist_started` `specialist_completed` `specialist_blocked` `specialist_failed`

**Approval Activity:** `approval_requested` `approval_granted` `approval_rejected` `approval_revised`

**Storage & Memory:** `resource_created` `resource_updated` `memory_promoted`

-----

## Task Status Values

Use only these canonical values for task status:

`active` `paused` `blocked` `approval_pending` `completed` `failed` `cancelled`

-----

## Approval Rules

An approval boundary is required when a task:

- has external consequence (publish, send, deploy)
- changes system configuration
- performs a destructive or irreversible action
- crosses into business-impacting territory

**The system must pause and surface the proposed action + rationale before any consequential action executes.**

-----

## Tech Stack

|Layer          |Technology                                                    |
|---------------|--------------------------------------------------------------|
|Frontend       |Electron + React                                              |
|Design System  |Harmonic Command                                              |
|State          |Zustand (taskStore, runEventStore, configStore, resourceStore)|
|Runtime        |OpenClaw                                                      |
|LLM — Primary  |Anthropic API — Claude Sonnet 4 (`claude-sonnet-4-20250514`)  |
|LLM — Secondary|OpenAI API — GPT-4o (selectable via handoff adapter)          |
|Package Manager|npm                                                           |

-----

## Design System — Harmonic Command

|Token            |Use                            |
|-----------------|-------------------------------|
|Obsidian surfaces|Primary background             |
|Nexus Cyan       |Primary accent, active state   |
|Violet Blue      |Secondary accent               |
|Amber            |Warning, approval-pending state|
|Emerald          |Success, completed state       |

Stick to these. Do not introduce colours outside the design system without a deliberate reason.

-----

## File & Naming Conventions

- Components: PascalCase (`TaskIntakeForm.jsx`)
- Stores: camelCase (`taskStore.js`)
- Controllers: camelCase with suffix (`conductorController.js`)
- Event types: snake_case strings (`task_created`)
- Task IDs: `TASK-XXXX`
- Run IDs: `RUN-XXXX`
- Event IDs: `EVT-XXXX`
- Resource IDs: `RES-XXXX`

-----

## State Stores

|Store          |Owns                                      |
|---------------|------------------------------------------|
|`taskStore`    |Task creation, status, class, stage, owner|
|`runEventStore`|Event log, run history, trace             |
|`configStore`  |Provider selection, system config         |
|`resourceStore`|Saved outputs, resource metadata          |

Do not mix concerns between stores.

-----

## Project Folder Structure

```
nexus/
├── src/
│   ├── components/       # React UI components
│   ├── controllers/      # Conductor, routing, approval gate
│   ├── stores/           # Zustand state stores
│   ├── adapters/         # OpenClaw handoff adapter, return translator
│   ├── agents/           # Agent definitions and system prompts
│   └── styles/           # Harmonic Command design tokens
├── resources/            # Governance docs, templates, project resources
├── logs/                 # Run logs and event history
└── CLAUDE.md
```

-----

## Agent Build Order

Build agents one at a time. Test and validate each in the live Nexus environment before adding the next.

**Current Phase 1 sequence:**

1. Governor (Conductor) — harden classification and routing first
1. Librarian (Research Specialist) — primary research path
1. Artisan (Writing & Structuring Specialist) — already proven in first proof
1. Auditor — verification against success criteria
1. AION — meta-coordinator, add once governance chain is stable

Do not wire multiple agents simultaneously.

-----

## Governance Principle

> **Foundation before operation. Governance before expansion. Visibility over cleverness.**

If in doubt, check the governance documents before writing code. The 33 Phase 1 governance documents are the canonical source of truth for all architectural decisions. Implementation follows governance — not the other way around.

-----

## Launch

```bash
cd C:\Users\jason\.openclaw\workspace\nexus
npm run dev
```
