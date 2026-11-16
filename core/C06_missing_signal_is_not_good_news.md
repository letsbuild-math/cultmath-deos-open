# C6 · Missing Signal Is Not Good News

**Module:** Core · **Version:** 1.0 · **From DEOS:** cm_84

> **An absence is not a fact. A check that has never gone red is a hope.**

## When to use

- Whenever you are about to say "no complaints," "no issues found," "nothing came up," or "the dashboard is green."
- When reviewing any report, check or AI answer that reports zero of something.

## The standard

1. **"None found" is only as good as where you looked.** Name what the check looked at and what it did not.
2. **A check that has never gone red has not been tested.** Feed it a known bad case.
3. **A passing check tells you only about what it looked at.** It says nothing about the rest.
4. **Sentences are claims too.** "Customers are happy" is a claim that needs evidence, even if nobody complained.
5. **You cannot pay attention your way out of this.** You need a check that goes red on its own. Attention runs out; a machine does not.

## How to run it

1. Find every "none," "zero," "no issues" and "all clear" in the work.
2. For each one, write what was checked, how, and what was not checked.
3. Ask: has this check ever reported a problem? If not, test it with a case that should fail.
4. Rewrite the claim to its true size: "No complaints in the support inbox" instead of "No complaints."

## Done when

- Every absence in the work says where it looked.
- Every check you rely on has gone red at least once on a known case.

## Common failures

- **Silence read as satisfaction.** Customers who leave often say nothing.
- **A dashboard that cannot show a problem** because the field is never filled.
- **An AI answer that "found nothing"** because it could not reach the source.

## Template

```markdown
# Absence check: [claim]

- **Claim as written:**
- **What was checked:**
- **What was not checked:**
- **Has this check ever gone red?** [date, case] | no → test case: [ ]
- **Claim at its true size:**
```

---

Ipalibo Da-Wariboko · CULT+MATH LLC · November 16, 2026
