# C2 · Cutting a Decision Down

**Module:** Core · **Version:** 1.0

> **Before you optimize a plan, delete the parts of it that should not exist.**

## When to use

- A plan, process or requirement list that feels heavy.
- Before any decision that is hard to reverse.
- Before automating anything.

## The standard

1. **Sort the door first.** A two-way door (cheap to undo) is decided at about 70% confidence and moved on. A one-way door (expensive or impossible to undo) gets the full reduction below.
2. **Find the binding constraint.** The one limit that, if lifted, would change the answer. Everything else is secondary.
3. **Find the fundamental truth.** What is true about the problem no matter who is asking. Build from that, not from how it was done last time.
4. **Run the five steps, in order:**
   1. **Question every requirement.** Each one gets a named owner. A requirement with no owner is a guess.
   2. **Delete.** Remove parts and steps. If you do not end up adding back about 10% of what you cut, you did not cut enough.
   3. **Simplify** what is left.
   4. **Speed up** what is left.
   5. **Automate** last. Automating a step that should have been deleted makes the mistake faster.
5. **One-way doors get a calibration entry:** the decision, the outcome you expect, your confidence from 0 to 100, and the date you will check.

## How to run it

1. Name the decision and mark the door: one-way or two-way.
2. If two-way: decide now. Stop here.
3. If one-way: write the binding constraint and the fundamental truth in one sentence each.
4. List every requirement and its owner. Strike the ones with no owner.
5. Run delete, simplify, speed up, automate, in that order.
6. Write the calibration entry and set the review date.

## Done when

You have a six-item output:

1. Door type
2. Binding constraint
3. Fundamental truth
4. What was deleted
5. The reduced plan
6. Calibration entry (one-way doors only)

## Common failures

- **Treating every decision as one-way.** You will move too slowly on things that do not matter.
- **Simplifying before deleting.** You polish a step that should be gone.
- **Requirements "from the client" or "from leadership"** with no named person. Ask who, then ask them.
- **No review date on the calibration entry.** Then you never learn whether your confidence was right.

## Template

```markdown
# Cut-down: [decision]

1. **Door:** one-way | two-way
2. **Binding constraint:**
3. **Fundamental truth:**
4. **Deleted:** [list, with what was added back]
5. **Reduced plan:**
6. **Calibration:** expected outcome · confidence 0–100 · review date
```

---

Ipalibo Da-Wariboko · CULT+MATH LLC · November 16, 2026
