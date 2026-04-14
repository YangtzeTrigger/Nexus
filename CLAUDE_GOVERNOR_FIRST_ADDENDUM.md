# CLAUDE_GOVERNOR_FIRST_ADDENDUM.md

Read this alongside `CLAUDE.md` until the repo’s instruction files are fully consolidated.

---

## Purpose

This addendum records the Governor-first architectural correction for Nexus Phase 1.

It exists because Nexus had begun to drift toward a research-first interpretation, where controller and API logic risked becoming the de facto governance layer.

That is **not** the intended constitutional identity of Nexus.

---

## Canonical Correction

Nexus should be treated as a **governed command centre** where:

- **Governor** is the constitutional authority
- **governance agents** make up the governing layer
- **department agents** perform bounded work beneath governance
- **OpenClaw** remains the runtime and execution substrate

In simple terms:

**Nexus is a government with departments, not a research app with some governance attached.**

---

## What Changes in Practice

### Old Drifted Shape
Task Intake → API / Controller Classification → Research Flow → Output

### Correct Shape
Task Intake → Governor → Governance Layer → Department Lane → OpenClaw Runtime Execution → Return to Governor

---

## Governor-First Workflow Identity

For Phase 1, the first proof lane remains:

Task Intake → Governor Classification → Research Specialist → Writing and Structuring Specialist → Governor Review → Final Output

Research is therefore:
- the first operational proof lane
- not the constitutional centre of the application
- not the governing identity of Nexus

---

## Runtime Rule

**OpenClaw executes. OpenClaw does not govern.**

Do not:
- treat model/API logic as government
- let OpenClaw become the hidden truth source
- allow runtime to redefine routing or authority silently

---

## Immediate Refactor Direction

1. Re-anchor Conductor behavior toward Governor semantics
2. Treat routing/policy/trace as governance functions
3. Treat Research Specialist as a departmental lane
4. Treat Writing and Structuring as the second bounded lane in Workflow 1
5. Complete Workflow 1 before broadening into Workflow 2

---

## Collaboration Note

This Governor-first clarification was refined collaboratively with **ChatGPT** during the Nexus repository review and architectural correction phase.

That collaboration helped:
- identify the split between research-first drift and governor-first intent
- clarify that governance should be explicit authority, not just process logic
- protect the boundary between Nexus governance and OpenClaw runtime
- re-center Workflow 1 as the first proof lane beneath governance

---

## Temporary Rule

Until `CLAUDE.md` itself is fully consolidated with the Governor-first model, use this addendum as the controlling clarification wherever the two directions appear to conflict.
