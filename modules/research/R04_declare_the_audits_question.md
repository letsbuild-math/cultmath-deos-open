# R4 · Declare the Audit's Question

**Module:** Research · **Version:** 1.0 · **From DEOS:** cm_115

> **An audit answers the question it was built around, and nothing else, including the one you care about.**

## When to use

- Any audit: a brand audit, a content audit, a site audit, a funnel audit, a competitive audit, a process review.

## The standard

1. **Declare which of five questions the audit answers,** before you build it:

   | Question | Asks | Proves | Does not prove |
   |---|---|---|---|
   | **Conformance** | Does it follow its own rules? | The rules are followed. | That the rules are right. |
   | **Coherence** | Do the parts agree? | It is consistent. | That it is right. A wrong system can be perfectly consistent. |
   | **Completeness** | Is anything missing? | Nothing on the checklist is missing. | Anything about what is not on the checklist. |
   | **Currency** | Does it meet today's standard? | It is current. | Needs an outside reference to mean anything. |
   | **Quality** | Is it good? | Only against a bar named before measuring. | Without that bar, it is taste in a table. |

2. **State the scope and where it ends.** Which surfaces, which dates, what was not looked at.
3. **An audit is not a work estimate.** It counts what it found where it looked. It is not a count of the work to fix it.
4. **If the audit says green and informed judgment says red, suspect the audit first.**
5. **Mark how every figure was produced:**
   - **Measured:** read off the real thing.
   - **Calculated:** from a formula. Correct arithmetic; not checked in place.
   - **Inferred:** reasoned. A claim.
   - **Measured on a stand-in:** a mockup, sample, export or screenshot. Ask: is what I measured the thing I am deciding about?
6. **An audit expires when its subject changes.** Re-audit, or mark the old one superseded.
7. **What you could not measure is a finding.** Report it.

## How to run it

1. Pick the question type. Write it down.
2. Write the scope and the bar (for quality audits).
3. Run the audit. Mark every figure Measured, Calculated, Inferred or Stand-in.
4. Write what you could not measure.
5. Compare the result to informed judgment. If they disagree, check the instrument.

## Done when

- The question type, scope and (where needed) bar are written before the first row.
- Every figure is marked.
- Measurement gaps are listed as findings.

## Common failures

- **A completeness audit read as a quality verdict.**
- **Screenshots audited as if they were the live site.**
- **An old audit carried forward after the thing changed.**

## Template

```markdown
# Audit: [subject] · [date]
- **Question type:** conformance | coherence | completeness | currency | quality
- **Bar (if quality):**
- **Scope:** [surfaces, dates] · **Not covered:**
| Item | Finding | Figure | How produced (M / C / I / S) |
|---|---|---|---|
**Could not measure:**
**Expires when:**
```

---

Ipalibo Da-Wariboko · CULT+MATH LLC · November 16, 2026
