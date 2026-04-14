# CHATGPT.md — Nexus Governor-First Build Guide

Read this before making architectural or implementation changes.

---

## What This Project Is

Nexus is a **private governed command centre** built to coordinate OpenClaw as its runtime and execution substrate.

It is **not** a generic AI wrapper, not a research-first app with governance attached afterward, and not a loose automation bundle.

Nexus should be treated as:

- **Governor-first**
- governance-led
- visibly inspectable
- workflow-bounded
- runtime-separated

---

## Core Direction

The active architectural correction for Nexus Phase 1 is:

**Nexus is a government with departments, not a research app with some governance attached.**

That means:

- **Governor** is the constitutional authority
- **governance agents** make up the governing layer
- **department agents** perform bounded work
- **OpenClaw and model APIs** remain runtime machinery

Research is the first operational lane.
It is not the identity of the system.

---

## Phase 1 Constitutional Shape

Use this model:

```text
Task Intake
→ Governor
→ Governance Layer
→ Department Lane
→ OpenClaw Runtime Execution
→ Return to Governor
→ Final Output / Save / Approval Pause
```

### Governor Responsibilities
- receive all incoming tasks
- classify task type
- assign workflow path
- route to the correct next role
- preserve policy boundaries
- pause at approval boundaries
- review returned work
- close or reroute the task

### Governance Layer Responsibilities
- routing
- policy / approval posture
- trace / records
- verification posture
- memory / record integrity

### Department Lanes for Phase 1
- Research Specialist
- Writing and Structuring Specialist

Deferred lanes:
- Business and Operations Specialist
- Technical Build Specialist
- Security / AegisNet reserve

### Runtime Rule
**OpenClaw executes. OpenClaw does not govern.**

---

## Current Phase 1 Proof Path

The first real proof path remains:

```text
Task Intake
→ Governor Classification
→ Research Specialist
→ Writing and Structuring Specialist
→ Governor Review
→ Final Output
```

Optional strengthening once the path is working:
- deliberate save
- simple approval stop
- later audit/verification layer

---

## Current Implementation Priority

Do not widen yet.
The next code-level priority is to complete the first trustworthy Workflow 1 chain:

1. Governor receives and classifies task
2. Governor routes to Research Specialist
3. OpenClaw returns structured research output
4. Governor routes to Writing and Structuring Specialist
5. OpenClaw returns structured final output
6. Governor completes task cleanly
7. Save and approval stop come after the main path is trustworthy

---

## Do-Not-Drift Rules

Do not:
- let research become the constitutional centre of Nexus
- let API logic become the de facto government
- treat OpenClaw as governance
- activate Workflow 2 before Workflow 1 is trustworthy
- widen roles before the Governor-first model is stable
- count visible shell work as proof if the run path is incomplete
- let UI polish outrun workflow truth
- auto-save everything into durable memory

---

## Naming Discipline

For active Phase 1 work, prefer one naming system consistently.

### Canonical Top Role
- **Governor**

### Canonical Phase 1 Department Roles
- **Research Specialist**
- **Writing and Structuring Specialist**

### Canonical Runtime Language
- **OpenClaw runtime**
- **execution substrate**

Avoid mixing multiple constitutional vocabularies in the active implementation.

---

## Truth Standard

A feature is not done because it appears in the shell.
It is done when:

- it behaves according to governance rules
- it preserves canonical task/run state
- it writes meaningful trace events
- it remains explainable in task detail and trace view
- it does not bypass approval boundaries

---

## Collaboration Note

This Governor-first clarification was refined collaboratively with **ChatGPT** during the Nexus repository review and architectural correction phase.

The contribution was to help:
- identify drift between research-first and governor-first directions
- re-anchor Nexus around explicit governance authority
- clarify that runtime is machinery, not government
- protect Workflow 1 as the first trustworthy proof lane

This note records that collaboration as part of the project’s architectural evolution.

---

## Practical Rule for Build Work

When uncertain, choose the option that makes Nexus:
- more governed
- more visible
- more explainable
- less drift-prone
- less dependent on hidden runtime logic

Build the first truth.
Do not widen the dream until the truth is real.
