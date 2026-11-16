# C4 · Control

**Module:** Core · **Version:** 1.0 · **From DEOS:** cm_143

> **A control is a claim about what "no effect" looks like. Write it down before you run.**

## When to use

- Any measurement you will use to say something worked, moved or differs.
- A campaign lift, a pricing test, a sentiment read, an AI visibility check, a before-and-after.

## The standard

1. **Every control names what it controls for.** Seasonality, a market-wide move, a measurement change, chance.
2. **Every control has an expected value, written before the run.** "If nothing happened, this number stays within 5% of last month."
3. **A good control has four properties:**
   - It is exposed to everything your test is, except the thing you changed.
   - It is measured the same way, at the same time.
   - Its expected value is written down in advance.
   - It can fail.
4. **There are two ways a control fails you:**
   - **It has only ever passed.** Then you do not know if it can catch anything. Test it on a case where you know the answer should be "effect."
   - **It changes what it measures.** If running the control alters the thing being tested, it is not a control.
5. **Use two controls of different kinds** for any result you will act on. A comparison group and a placebo date, for example.
6. **Retire a control** when what it controls for no longer applies, and write down why.
7. **A control cannot fix a bad sample.** If the sample is wrong, the control will be wrong with it.

## How to run it

1. Name what the control controls for.
2. Check your failure register for past problems with this kind of control.
3. Plot the control's history. Is it stable enough to show an effect?
4. Write the expected value.
5. Add a second control of a different kind.
6. Run the test. Check the control first. If it moved, stop and find out why before reading the test.

## Done when

- The expected value is dated before the run.
- The control has been shown, at least once, to catch a known effect.
- The result names what the control showed, not just what the test showed.

## Common failures

- **The control and the test share a hidden cause.** Both move, and you call it "no effect."
- **Expected value written after the run.**
- **One control, never tested.** It passes every time because it cannot fail.

## Template

```markdown
# Control: [name] for [test]

- **Controls for:**
- **How measured:** [same instrument, same time as test]
- **Expected value (written [date]):**
- **Has it caught a known effect?** [date and case] | not yet
- **Second control:** [name and kind]
- **Result:** control [held | moved] · test [result]
```

---

Ipalibo Da-Wariboko · CULT+MATH LLC · November 16, 2026
