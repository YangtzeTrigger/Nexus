# Nexus Phase 1 Memory and State Model  
## Session Context, Project Memory, Event Logs, and Durable Resources

**Document ID:** NEXUS-P1-MEM-001  
**Version:** 1.0  
**Status:** Active Draft  
**Owner:** Jason Mercer  
**Project:** Nexus  
**Related System:** OpenClaw  
**Classification:** Internal Project Resource  
**Purpose:** Define the Phase 1 memory and state model for Nexus, including what is temporary, what is durable, what is logged, and what requires confirmation before storage  
**Last Updated:** 2026-04-05  
**Related Documents:**  
- `Nexus_Phase1_Blueprint_v1_Resource.md`  
- `Nexus_Phase1_Build_Order_Checklist_v1.md`  
- `Nexus_Phase1_Agent_Roles_and_Responsibilities_v1.md`  
- `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`

---

## 1. Purpose

This document defines how Nexus should handle memory and state in Phase 1.

Its purpose is to ensure that:
- the system preserves continuity without becoming cluttered
- temporary context is not confused with durable knowledge
- task history is inspectable
- useful project material can be retrieved later
- storage behavior remains governed rather than automatic by default

Phase 1 does not need an overly complex memory system.

It needs a **clear one**.

---

## 2. Core Principle

**Not everything should be remembered, and not everything remembered should be treated equally.**

Phase 1 memory should be divided by purpose, not stored as one undifferentiated mass.

The system should always be able to distinguish between:
- what is active now
- what happened before
- what should persist
- what should remain provisional
- what has been approved as durable project knowledge

---

## 3. Memory Objectives

The Phase 1 memory layer should do four things well:

### 3.1 Preserve Continuity
Allow tasks and workflows to continue without unnecessary repetition.

### 3.2 Preserve History
Record what happened so the system can be inspected and understood.

### 3.3 Preserve Useful Knowledge
Keep stable project information available for later retrieval.

### 3.4 Prevent Memory Sprawl
Avoid storing everything automatically and turning memory into noise.

---

## 4. Phase 1 Memory Classes

Phase 1 should use four main memory classes:

1. **Session State**
2. **Project Memory**
3. **Event Log**
4. **Durable Resources**

Each class has a different purpose and should not be confused with the others.

---

## 5. Session State

### 5.1 Definition
Session State is the live working context for the current task, conversation, or active workflow.

It is temporary, task-oriented, and expected to change frequently.

### 5.2 Purpose
Its purpose is to support:
- current task continuity
- active reasoning context
- in-progress workflow awareness
- handoffs during the current run

### 5.3 Typical Contents
Session State may include:
- current task description
- current classification
- active workflow stage
- current specialist assignment
- immediate constraints
- short-lived intermediate notes
- approval status for the current run

### 5.4 Storage Rule
Session State may be updated freely during a run, but it should not automatically become durable project knowledge.

### 5.5 Lifecycle
Session State should:
- begin at task intake
- evolve during routing and execution
- support live handoffs
- expire or be archived at the end of the task depending on policy

---

## 6. Project Memory

### 6.1 Definition
Project Memory is the stable internal knowledge of the Nexus project itself.

It is durable, reusable, and intended to support continuity across sessions.

### 6.2 Purpose
Its purpose is to preserve:
- stable definitions
- system concepts
- role summaries
- governance rules
- structural project decisions
- recurring standards and conventions

### 6.3 Typical Contents
Project Memory may include:
- what Nexus is
- what OpenClaw is
- current Phase 1 scope
- agent role definitions
- routing rules
- folder conventions
- project glossary
- architectural principles
- approved recurring preferences

### 6.4 Storage Rule
Only information with durable project relevance should enter Project Memory.

### 6.5 Restrictions
Project Memory should not become:
- a dumping ground for every conversation
- a raw transcript archive
- a collection of unreviewed temporary thoughts
- a replacement for event logs

---

## 7. Event Log

### 7.1 Definition
The Event Log is the historical record of what happened.

It is not the same as knowledge.
It is a record of activity.

### 7.2 Purpose
Its purpose is to preserve:
- task history
- routing history
- role activity
- approvals
- failures
- important state changes

### 7.3 Typical Contents
The Event Log may include:
- task received
- task class assigned
- route chosen
- specialist engaged
- approval requested
- approval granted or rejected
- action executed
- action blocked
- failure encountered
- task completed

### 7.4 Storage Rule
The Event Log should be written automatically for significant workflow events.

### 7.5 Restrictions
The Event Log should not be treated as:
- polished knowledge
- a substitute for project resources
- final guidance without interpretation

---

## 8. Durable Resources

### 8.1 Definition
Durable Resources are organized artifacts worth keeping for repeated use.

They are the structured outputs of the system that deserve a stable home.

### 8.2 Purpose
Its purpose is to preserve:
- reusable documents
- project reference files
- templates
- approved summaries
- structured outputs from workflows

### 8.3 Typical Contents
Durable Resources may include:
- blueprint documents
- checklist files
- role definitions
- workflow specs
- approved research summaries
- internal reference notes
- templates and process files

### 8.4 Storage Rule
Durable Resources should usually be created intentionally, not by default.

A useful rule for Phase 1 is:
**store deliberately, not impulsively.**

---

## 9. Memory Separation Rules

To keep the system coherent, Nexus should maintain these separations:

### 9.1 Session State vs Project Memory
- Session State is temporary and active
- Project Memory is stable and recurring

### 9.2 Event Log vs Durable Resources
- Event Log records what happened
- Durable Resources preserve what is worth reusing

### 9.3 Project Memory vs Durable Resources
- Project Memory holds stable system knowledge
- Durable Resources hold structured artifacts and documents

### 9.4 Session State vs Event Log
- Session State supports live execution
- Event Log records important milestones during execution

---

## 10. Automatic vs Confirmed Storage

Phase 1 should not make every storage decision automatically.

### 10.1 Store Automatically
These may be stored automatically:
- task lifecycle events
- routing decisions
- approval decisions
- execution outcomes
- failure states
- current session state while task is live

### 10.2 Store with Confirmation
These should usually require confirmation before becoming durable:
- new project definitions
- recurring preferences
- major structural notes
- research outputs intended for long-term reuse
- new templates
- revised governance principles
- anything that changes project meaning

### 10.3 Do Not Store by Default
These should not be stored durably by default:
- fleeting thoughts
- exploratory fragments
- duplicate drafts
- low-value chatter
- unstable interpretations
- unfinished noise

---

## 11. Memory Write Rules

### 11.1 Session Write Rule
Write freely during the active task, but treat the data as temporary unless promoted.

### 11.2 Event Write Rule
Write automatically when a meaningful event occurs.

### 11.3 Project Memory Write Rule
Only write when the information is stable, useful, and likely to matter again.

### 11.4 Durable Resource Write Rule
Create when the output is organized enough to be worth retrieving later.

---

## 12. Memory Promotion Model

Information should move upward only when justified.

Suggested promotion path:

**Session State → Review → Project Memory or Durable Resource**

Not everything should be promoted.

A useful Phase 1 question is:

**Will this matter again, and in a stable enough form to be worth keeping?**

If the answer is no, leave it in Session State or the Event Log only.

---

## 13. Retrieval Rules

### 13.1 Retrieve by Relevance
Memory should be retrieved because it is relevant, not because it exists.

### 13.2 Retrieve by Class
The system should know what kind of information it is retrieving:
- active state
- historical event
- durable project knowledge
- reusable resource

### 13.3 Retrieve with Context
When retrieving memory, Nexus should preserve:
- source class
- original purpose
- current relevance
- any uncertainty or age sensitivity if needed

### 13.4 Avoid Blind Retrieval
Do not flood a workflow with memory just because it is available.

Retrieval should improve clarity, not increase noise.

---

## 14. Memory Support Role

The **Memory and Resource Support** role should help govern this layer.

### Responsibilities
- organize stored materials
- help determine what should be preserved
- retrieve relevant resources
- maintain naming consistency
- keep durable resources orderly

### Restrictions
This role should not:
- treat all outputs as equally valuable
- silently convert temporary material into permanent knowledge
- redefine project meaning without confirmation

---

## 15. Suggested State Elements for Phase 1

For each active task, Phase 1 may track:

- task ID
- task description
- task class
- current owner
- current workflow stage
- current confidence state
- approval status
- last major event
- next expected action
- storage outcome

This is enough to make the system legible without overengineering state.

---

## 16. Suggested Event Types

Useful event types for Phase 1 include:

- task_created
- task_classified
- task_routed
- specialist_started
- specialist_completed
- approval_requested
- approval_granted
- approval_rejected
- executor_started
- executor_completed
- executor_failed
- task_paused
- task_completed
- resource_created
- memory_promoted

These event types can later be refined, but they are enough for Phase 1 visibility.

---

## 17. Resource Naming Guidance

To keep memory usable, durable resources should use consistent naming.

Suggested pattern:

`Nexus_[Phase]_[Subject]_[Type]_v1.md`

Examples:
- `Nexus_Phase1_Blueprint_v1_Resource.md`
- `Nexus_Phase1_Governance_and_Routing_Rules_v1.md`
- `Nexus_Phase1_Memory_and_State_Model_v1.md`

Consistent naming improves retrieval, storage discipline, and project clarity.

---

## 18. Failure Modes to Avoid

To preserve coherence, avoid:

- storing everything
- confusing logs with knowledge
- confusing temporary context with durable memory
- promoting unstable content too early
- retrieving irrelevant memory during active work
- letting memory grow without structure
- treating memory as authority without review

---

## 19. Success Criteria

The memory layer is working correctly when:

- active tasks retain enough context to continue smoothly
- history can be inspected clearly
- useful project knowledge persists across sessions
- durable resources are easy to retrieve
- memory remains organized rather than bloated
- not every transient thought becomes permanent

---

## 20. Closing Principle

A good memory system does not remember the most.

It remembers the right things, in the right place, for the right reason.

Nexus Phase 1 memory should support coherence, not create clutter.

---

## 21. Suggested Resource Tags

`#nexus`  
`#phase1`  
`#memory`  
`#state`  
`#event-log`  
`#resources`  
`#openclaw`
