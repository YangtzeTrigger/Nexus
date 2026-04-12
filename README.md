# Nexus

**A private, governed multi-agent command centre built on OpenClaw.**

Nexus is not a general-purpose AI wrapper. It is a structured command centre that coordinates specialist AI agents through a defined governance architecture — with visible routing, approval checkpoints, full run traceability, and deliberate output management.

-----

## What Nexus Does

Nexus receives tasks, governs how they are handled, and returns trustworthy structured outputs. Every task passes through a defined workflow path:

```
Governor → Librarian → Artisan → Auditor → Governor
```

|Role         |Responsibility                                                     |
|-------------|-------------------------------------------------------------------|
|**Governor** |Classifies the task, routes it, makes the final acceptance decision|
|**Librarian**|Researches and structures findings                                 |
|**Artisan**  |Produces the output document                                       |
|**Auditor**  |Verifies output against the original success criteria              |

Every run produces nine canonical events from `task_created` to `task_completed`. Nothing meaningful happens silently.

-----

## Core Design Principle

> **Can Nexus clearly govern what it already does?**

Phase 1 prioritises:

- Visibility over feature sprawl
- Control over expansion
- Governance over novelty
- Foundation before operation

-----

## Architecture

```
Nexus UI Shell (Electron + React)
    └── Harmonic Command Design System
    └── State Stores: taskStore, runEventStore, configStore, resourceStore

Conductor Controller
    └── Task classification (Classes A–E)
    └── Routing decisions
    └── Approval gate

OpenClaw Runtime (via Handoff Adapter)
    └── Anthropic: Claude Sonnet 4
    └── OpenAI: GPT-4o (selectable)

Specialist Agents (Phase 1 active)
    └── Governor (Conductor)
    └── Librarian (Research Specialist)
    └── Artisan (Writing & Structuring Specialist)
    └── Auditor (Verification Specialist)
```

-----

## Tech Stack

- **Frontend:** Electron + React
- **Design System:** Harmonic Command (Obsidian surfaces, Nexus Cyan, Violet Blue, Amber, Emerald)
- **State:** Zustand stores
- **Runtime:** OpenClaw
- **LLM Providers:** Anthropic API (Claude Sonnet 4) / OpenAI API (GPT-4o)
- **Package Manager:** npm

-----

## Getting Started

```bash
# Install dependencies
npm install

# Launch Nexus
npm run dev
```

Project workspace: `C:\Users\jason\.openclaw\workspace\nexus`

-----

## Project Status

|Milestone                                  |Status    |
|-------------------------------------------|----------|
|M1 — Foundation Locked (33 governance docs)|✅ Complete|
|M2 — Minimum Slice Assembled               |🔄 Active  |
|M3 — First End-to-End Workflow 1 Run       |⏳ Pending |
|M4 — Trustworthy First Proof               |⏳ Pending |
|M5 — Post-Proof Stabilisation              |⏳ Pending |
|M6 — Workflow 2 Readiness                  |⏳ Pending |
|M7 — Controlled Workflow 2 Activation      |⏳ Pending |
|M8 — Phase 1 Stable / Phase 2 Planning     |⏳ Pending |

-----

## Governance Documents

33 governance documents define the full Phase 1 architecture. These cover constitutional blueprints, agent roles, routing rules, policy and approval types, event schemas, memory and state model, dashboard information architecture, OpenClaw runtime integration, resource taxonomy, sprint plan, risk register, and more. They are the canonical source of truth for all build decisions.

-----

## Owner

Jason Mercer — Independent Researcher  
Extended Unified Theory (EUT) / Nexus Command Centre
