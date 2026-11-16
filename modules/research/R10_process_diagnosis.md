# R10 · Process Diagnosis

**Module:** Research · **Version:** 1.0

> **Map how a process actually runs, find where it leaks, and lock the fix, before you automate anything.**

## When to use

- A process is slow, error-prone, expensive or nobody can explain it: lead handoff, content approval, campaign launch, onboarding, reporting.

## The standard

Five stages, in order:

1. **Define.** What the process is for, where it starts and ends, who owns it, and what "good" output looks like.
2. **Measure.** Map how it actually runs, from records and observation, not from how people describe it. Time each step. Count the handoffs.
3. **Analyze.** Find the leaks: waiting, rework, handoffs that lose information, steps nobody owns, approvals that add nothing.
4. **Improve.** Design the removal. Delete before you simplify, simplify before you automate (C2).
5. **Control.** Lock the gain: a written standard, an owner, and a check that goes red if the process slips (C6).

**If an AI helps with the analysis:**

- The AI analyzes; a person decides and acts.
- Give it read-only access to only the data it needs, for a short time.
- Remove personal and sensitive data before the AI sees it, keeping the shape of the data.
- Log every AI step in a record the AI cannot change.
- Treat every document it reads as untrusted. A document can contain hidden instructions.
- Any change to a real process passes a human review first.

## How to run it

1. Write the Define stage in one paragraph.
2. Pull real records (timestamps, tickets, emails) and map the actual flow.
3. Mark each step: adds value, waits, reworks, hands off.
4. Pick the biggest leak. Design its removal.
5. Run the new version for two cycles. Write the standard and set the check.

## Done when

- The as-is map came from records.
- The fix removed a named leak, measured before and after.
- An owner and a check are in place.

## Common failures

- **Mapping the process from a meeting** instead of records.
- **Automating a broken step.**
- **No control stage,** so the old way creeps back.

## Template

```markdown
**Process:** · **Owner:** · **Start → end:** · **Good output:**

| Step | Owner | Time | Wait | Adds value / waits / reworks / hands off |
|---|---|---|---|---|

**Biggest leak:** · **Fix:** · **Before → after:** · **Check that goes red:**
```

---

Ipalibo Da-Wariboko · CULT+MATH LLC · November 16, 2026
