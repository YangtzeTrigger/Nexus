# Nexus Phase 1 Blueprint  
## Core Components, Responsibilities, and Build Order

### Purpose
Phase 1 of Nexus is not about building the full ecosystem at once.  
Its purpose is to establish a **coherent private command centre** that can govern OpenClaw cleanly, display system state clearly, and support a small number of real workflows with stability and visibility.

The aim is to make Nexus:
- understandable
- governable
- inspectable
- extensible later without losing structural clarity

---

## 1. Phase 1 Objective

Nexus Phase 1 should deliver:

**A private, stable command centre that coordinates OpenClaw agents, reflects governance logic, displays live system state, and supports at least one to two meaningful workflows with clear approval and traceability.**

In simple terms:

- **Nexus** is the command centre
- **OpenClaw** is the runtime and execution layer
- **AION-style governance logic** is the orchestration intelligence
- **Memory, logs, and approvals** provide coherence and control

---

## 2. Core Design Principle

Phase 1 should borrow **discipline**, not **complexity**.

That means prioritising:
- visibility over feature sprawl
- control over expansion
- consistency over novelty
- modular structure over crowded tooling

The question in Phase 1 is not:
**“What else can Nexus do?”**

The real question is:
**“Can Nexus clearly govern what it already does?”**

---

## 3. Phase 1 Core Components

### 3.1 Nexus UI Shell
This is the main command centre interface.

Its role is to provide:
- system overview
- live workflow visibility
- agent status
- active tasks
- approvals
- logs
- governance state

This should feel like the **seat of control**, not a generic chatbot wrapper.

#### Responsibilities
- present agent and workflow activity
- provide a unified dashboard
- surface alerts, confidence, and routing state
- display approvals and pending decisions
- act as the visual governance layer

---

### 3.2 OpenClaw Runtime
This is the execution engine underneath Nexus.

Its role is to:
- run agents
- handle handoffs
- execute tool calls
- manage workflow progression
- support specialist delegation

#### Responsibilities
- receive tasks from Nexus
- execute agent actions
- return outputs and execution state
- support modular specialist roles
- remain separate from the presentation layer

OpenClaw should be treated as the **operational machinery**, not the identity of the system.

---

### 3.3 AION-Style Orchestration Layer
This is the governance intelligence that sits between command and execution.

Its role is to decide:
- where a task goes first
- whether it stays local or is delegated
- whether multiple agents contribute
- whether approval is required
- how confidence and weighting are interpreted

#### Responsibilities
- task triage
- routing logic
- specialist coordination
- escalation rules
- confidence interpretation
- governance consistency

This is the part that makes Nexus feel like **your system** rather than a general-purpose assistant shell.

---

### 3.4 Structured Memory Layer
Phase 1 should not use memory as one undifferentiated blob.

It should be separated into functional layers.

#### Recommended memory classes
**Session state**
- current conversation/task context
- short-term working memory
- temporary run-specific data

**Project memory**
- durable notes
- stable project definitions
- agent role descriptions
- governance rules
- configuration knowledge

**Event log**
- action history
- routing history
- approvals
- failures
- notable system decisions

**Knowledge resources**
- cheat sheets
- internal references
- structured documents
- workflow templates

#### Responsibilities
- preserve continuity
- support handoffs
- reduce repetition
- make the system inspectable
- separate ephemeral from durable information

---

### 3.5 Approval and Policy Layer
This is essential in Phase 1.

Anything with external consequence, meaningful change, or significant ambiguity should be surfaced for approval.

#### Responsibilities
- define what requires approval
- pause risky actions
- surface proposed action + reason
- preserve auditability
- prevent silent overreach

#### Examples of approval-worthy actions
- external publishing
- changes to live configurations
- sending messages or emails
- file deletion or major restructuring
- irreversible operations
- high-impact business actions

This layer gives Nexus discipline without making it rigid.

---

### 3.6 Trace and Run History Layer
This provides visibility into what happened and why.

#### Responsibilities
- record task origin
- record routing path
- record which agent acted
- record tools used
- record outcome
- record failures or interventions
- show timing/confidence where useful

This is one of the most valuable coherence tools in Phase 1 because it makes the system debuggable and legible.

---

## 4. Phase 1 Recommended Internal Roles

These roles can remain lightweight at first.

### 4.1 Conductor
The first point of coordination.

#### Role
- receives tasks
- interprets intent
- routes to the right specialist or workflow
- decides whether task is simple, multi-step, or approval-sensitive

This is effectively the AION-style coordinator.

---

### 4.2 Specialist Agents
Focused agents with defined domains.

Examples might include:
- research agent
- writing/structuring agent
- technical/build agent
- business/operations agent
- memory/resource agent

#### Role
- perform bounded work
- return outputs to conductor
- do not govern the whole system
- operate within role boundaries

---

### 4.3 Executor Layer
Where actual tools or actions happen.

#### Role
- carry out actions
- retrieve or update system state
- execute structured steps
- report results back clearly

This should stay under governance rather than acting freely.

---

## 5. Phase 1 Dashboard Sections

The dashboard should be simple, useful, and governable.

### Recommended sections

**1. Governance Overview**
- active workflows
- approvals pending
- system status
- routing summary

**2. Agent Status**
- available agents
- current role/activity
- idle/busy/error state

**3. Active Tasks**
- what is in motion
- who owns it
- what stage it is at

**4. Trace / Run Log**
- recent actions
- routing chain
- tool usage
- outcomes

**5. Memory / Resources**
- project docs
- templates
- definitions
- internal references

**6. Approvals Panel**
- pending actions
- reason for approval
- accept / reject / revise

**7. Confidence / Weighting View**
- optional, but helpful
- show decision confidence
- show whether task was simple, escalated, or consensus-based

---

## 6. Phase 1 Workflow Scope

Keep this intentionally narrow.

Phase 1 should support only **one or two real workflows**.

### Recommended choices

**Workflow A: Research coordination**
- take a topic or objective
- route to the right agent(s)
- collect outputs
- organise findings
- store useful material
- surface any approvals if needed

**Workflow B: Business or operational coordination**
- affiliate/content pipeline
- digital product planning
- project resource organisation
- structured writing or documentation flow

These are enough to prove the concept without overloading the architecture.

---

## 7. Build Order

This is the sensible order for Phase 1.

### Step 1 — Lock identity and structure
Define:
- what Nexus is
- what OpenClaw is
- what the governance layer does
- what belongs in Phase 1
- what explicitly does not

This stops architectural drift.

---

### Step 2 — Build the Nexus shell
Create the front-end structure for:
- dashboard
- task view
- agent status
- approvals
- traces
- resources

This gives Nexus a visible operating form.

---

### Step 3 — Stabilise OpenClaw integration
Confirm:
- tasks can be received
- agents can run
- handoffs work
- outputs return cleanly
- tool execution is understandable

This establishes the runtime relationship.

---

### Step 4 — Add orchestration rules
Implement:
- routing logic
- specialist boundaries
- escalation logic
- approval triggers
- confidence display

This is where Nexus becomes governed rather than merely functional.

---

### Step 5 — Implement structured memory
Add:
- session context
- project references
- event log
- reusable resources

This creates continuity and reduces chaos.

---

### Step 6 — Add traceability
Make sure Nexus can answer:
- what ran
- why it ran
- what it used
- what happened
- what needs attention next

This is essential for coherence.

---

### Step 7 — Support one real workflow
Choose one practical workflow and make it clean.

Do not broaden yet.

A single well-governed workflow is more valuable than five half-built ones.

---

### Step 8 — Add second workflow only when the first is stable
This tests whether the architecture generalises without collapsing into clutter.

---

## 8. What to Avoid in Phase 1

To preserve cohesion, avoid:

- multi-model sprawl
- too many SaaS integrations
- helpdesk/support platforms
- enterprise-scale infrastructure decisions
- over-engineered memory
- too many agents at once
- public-scale ambitions before private utility is proven

Phase 1 should prove:
- coherence
- governability
- clarity
- usefulness

Not scale theatre.

---

## 9. Success Criteria

Phase 1 is successful if Nexus can clearly answer:

**1. What is running?**  
**2. Why is it doing that?**  
**3. Who decided that?**  
**4. What happens next?**

If Nexus can answer those four questions cleanly, then the spine is working.

Additional success signs:
- agents behave consistently
- approvals appear where expected
- logs are readable
- memory supports continuity
- at least one real workflow feels useful end to end

---

## 10. Phase 1 Outcome

By the end of Phase 1, Nexus should be:

- a real command centre
- visibly governed
- connected cleanly to OpenClaw
- capable of routing work intelligently
- able to display live state and history
- structured enough to expand later without losing itself

Phase 2 can then introduce:
- additional tools
- extra services
- broader automation
- external model ecosystems
- support and business layers

But only after the command centre has proven it can govern itself.

---

## 11. Final Principle

**Phase 1 is about sovereignty.**

Before Nexus becomes an ecosystem, it should first become:
- coherent
- disciplined
- inspectable
- trustworthy

The best first build is not the biggest build.

It is the one that makes the rest possible.
