# C5 · Gate

**Module:** Core · **Version:** 1.0

> **The verdict is what the check printed, not what you hoped it meant.**

## When to use

- Any pass/fail check: a launch checklist, a data-quality rule, a QA script, a go/no-go threshold, an approval step.

## The standard

1. **The check reads the real value.** Confirm it reads the field you think it reads, in the units you think it uses. Run it on one real row and look.
2. **The test must equal the written rule.** If the rule says "fewer than 3 missing years," the code must count years, not rows.
3. **Prove it can fail.** Build the exact case that should fail and confirm the gate fires. A gate you have only seen pass is untested.
4. **Every threshold carries its basis.** One of:
   - Parity (the same as the comparison)
   - Observed range (from your own history)
   - A published benchmark (named)
   - A commercial floor (what it must be to be worth doing)
5. **Rules registered before the run are reported with two counts:** how many passed under the rule as written, and how many under any change you made later.
6. **When the gate fails:**
   1. Stop.
   2. Record the failure.
   3. Fix the defect, not the result.
   4. Register the rebuilt gate before rerunning.

## How to run it

1. Write the rule in one sentence.
2. Write the threshold and its basis.
3. Build the check. Run it on one real case. Read the output by hand.
4. Build the failing case. Confirm the check fails it.
5. Run it for real. Report what it printed.

## Done when

- The rule, threshold and basis are written down.
- The gate has been shown to fail a case it should fail.
- The report quotes the gate's output.

## Common failures

- **Moving the threshold after seeing the result.** If you must, report both counts.
- **A check that reads the wrong field** and passes everything.
- **"It basically passed."** It passed or it did not.

## Template

```markdown
# Gate: [name]

- **Rule:** [one sentence]
- **Threshold:** [value] · **Basis:** parity | observed range | benchmark [name] | commercial floor
- **Checked on real case:** [id, output]
- **Failing case fires:** [id, output]
- **Run result:** [what it printed]
- **If failed:** defect found · fix · rebuilt gate registered [date]
```

**Machine-readable version:** [`schemas/gate.schema.json`](../schemas/gate.schema.json). Fill it as JSON and check it with `node tools/check.mjs your-file.json --schema gate`. The check confirms the fields are there, not that they are any good.

---

Ipalibo Da-Wariboko · CULT+MATH LLC · November 16, 2026
