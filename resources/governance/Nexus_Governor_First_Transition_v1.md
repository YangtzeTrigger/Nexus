# Nexus Governor-First Transition v1

## Purpose

This document locks the architectural correction for Nexus Phase 1.

Nexus is no longer to be treated as a research-first application with governance attached through API logic.

Nexus is to be treated as a **governed command centre** where:

- **Governor** is the constitutional authority
- **governance agents** make up the governing layer
- **department agents** perform bounded work
- **OpenClaw and model APIs** remain runtime and execution substrate

The governing layer is the identity of the system.
Research is only one governed lane beneath it.

---

## Core Correction

### Old Drifted Shape

Research-first application:

Task Intake → API / Controller Classification → Research Flow → Output

In this shape, governance is mostly embedded in controller logic.
That is not the intended identity of Nexus.

### Correct Shape

Governor-first command centre:

Task Intake → Governor → Governance Layer → Department Lane → Runtime Execution → Return to Governor

In this shape:

- governance is explicit
- authority is named
- departments are subordinate to governance
- runtime is machinery, not government

---

## Canonical Layer Model

### 1. Governor Layer
The Governor is the top constitutional authority for Phase 1.

Responsibilities:
- receive all incoming tasks
- classify task type
- determine workflow path
- assign the next responsible role
- define acceptance posture
- pause at approval boundaries
- close or return the task

### 2. Governance Agent Layer
These agents make up the governing system beneath the Governor.

Phase 1 governing functions:
- routing
- policy / approval posture
- trace / records
- verification / audit posture
- memory / record integrity

These may begin as controllers or lightweight system roles, but they must be treated conceptually as governance agents rather than generic helper logic.

### 3. Department Layer
These are the bounded work lanes.

Phase 1 departments:
- Research
- Writing and Structuring

Deferred departments:
- Business and Operations
- Technical Build
- Security / AegisNet doctrine reserve

### 4. Runtime Layer
This is the execution substrate.

Includes:
- OpenClaw
- model APIs
- adapters
- tools

Rule:
**Runtime executes. Runtime does not govern.**

---

## Canonical Phase 1 Workflow Identity

The first proof path remains Workflow 1, but its constitutional meaning changes.

### Workflow 1

Task Intake → Governor Classification → Research Department → Writing and Structuring Department → Governor Review → Final Output

Optional later strengthening:
- deliberate save
- approval stop where posture changes
- audit layer after writing phase

Research is therefore:
- the first proof lane
- not the identity of the whole application
- not the top layer of the architecture

---

## Naming Rule

To remove drift, Phase 1 should use one naming system consistently.

### Canonical Top Role
Use:
- **Governor**

### Canonical Department Roles
Use:
- **Research Specialist** or **Research Department Agent**
- **Writing and Structuring Specialist** or **Writing Department Agent**

### Canonical Runtime Principle
Use:
- **OpenClaw runtime**
- **execution substrate**

Avoid mixing multiple constitutional vocabularies in the active implementation.

---

## Implementation Rule

From this point forward:

- the app should not be described as a research app with governance attached
- the Governor should be treated as the visible governance entry point
- routing logic should be understood as governance behavior
- research routing should be understood as departmental delegation
- OpenClaw should remain below the governance layer

---

## Immediate Refactor Direction

### Step 1
Re-anchor the current Conductor role as Governor.

### Step 2
Treat existing classification and routing logic as Governor behavior.

### Step 3
Treat Research Specialist as a department lane rather than the app identity.

### Step 4
Treat Writing and Structuring as the second bounded department lane.

### Step 5
Only after Workflow 1 is trustworthy, consider adding:
- audit / verification layer
- approval richness
- Workflow 2

---

## Do-Not-Drift Rules

Do not:
- let research become the constitutional centre of Nexus
- let API logic become the de facto government
- describe runtime as governance
- activate Workflow 2 before Workflow 1 is trustworthy
- widen active departments before Governor-first identity is stable

---

## Canonical Summary

**Nexus should be a government with a research department, not a research app with some governance attached.**

That is the architectural direction now locked for Phase 1.
