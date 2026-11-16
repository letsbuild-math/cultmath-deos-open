# P6 · Where Does the Knowledge Live?

**Module:** Product & Innovation · **Version:** 1.0 · **From DEOS:** cm_110

> **When a system has grown past what one person can hold in their head, audit where its knowledge lives, not whether it is good.**

## When to use

Any one of these:

- Output quality varies across inputs of the same type, and nobody can explain why.
- The system has been through two or more versions, each adding pieces nobody reconciled.
- A rebuild is being considered. Never decide to rebuild without this read.
- A new person is about to work on it.
- It produces fluent output you do not trust.

"System" means anything built up over time: a tech stack, a CRM setup, a set of campaign templates, a prompt library, a reporting pipeline.

## The standard

1. **Read-only.** Change nothing during the audit. The moment you fix something, you stop mapping.
2. **One day maximum.** If it cannot be read in a day, split it and read the parts.
3. **Six passes:**
   1. **Trace:** follow one real input all the way to its output.
   2. **Elements:** list every rule, setting, template, field and prompt that shaped it.
   3. **Layers:** sort each element by layer: facts, rules, judgment, surface (P7).
   4. **Flow:** where does information move, and where is it copied or re-entered?
   5. **Class:** group elements that do the same job in different places.
   6. **Standing:** for each, is it current, duplicated, contradicted or orphaned?
4. **Every finding goes to a register,** not to a fix.
5. **The output is a count:** how many elements, how many duplicated, how many contradicted. That count, not a feeling, decides rebuild or repair.

## How to run it

1. Pick one real input. Trace it.
2. Run the remaining passes.
3. Write the register and the counts.
4. Decide: repair, consolidate or rebuild.

## Done when

- The register exists, with counts by standing.
- The repair-or-rebuild decision cites the counts.

## Common failures

- **Fixing as you go.**
- **Rebuilding on instinct.**
- **Reading the documentation** instead of tracing a real case.

## Template

```markdown
| Element | Where it lives | Layer | Job | Standing (current/duplicated/contradicted/orphaned) |
|---|---|---|---|---|
**Counts:** total · duplicated · contradicted · orphaned
**Decision:** repair | consolidate | rebuild
```

---

Ipalibo Da-Wariboko · CULT+MATH LLC · November 16, 2026
