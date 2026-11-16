# C8 · Open Question Register

**Module:** Core · **Version:** 1.0

> **Write down the questions whose answers would change a decision, and do not let them rot.**

## When to use

- A question comes up that you cannot answer now and that matters.
- Threshold: the answer would change a decision. If it would not, do not log it.

## The standard

1. **One row per question.** Written as a question.
2. **Each row names the decision it would change.**
3. **Each question has a state:**
   - **OPEN**: not answered.
   - **PROVISIONAL**: a working answer exists but is not proven.
   - **ANSWERED**: with the evidence linked.
   - **RETIRED**: no longer matters, with the reason.
4. **Your guess is timestamped and never edited.** When the answer arrives, compare it to the guess. That is how you learn how good your guesses are.
5. **The rhythm:**
   - **Daily:** add new questions.
   - **Weekly:** triage. Which ones can be answered this week?
   - **Monthly:** report how many closed and the age of the oldest open one.
6. **A question open more than 30 days is one of two things:**
   - Not load-bearing. Retire it.
   - Being avoided. Name that and schedule it.

## How to run it

1. When a question comes up, check: would the answer change a decision? If yes, add a row.
2. Write your current guess and the date.
3. Each week, pick the questions that can be closed and close them.
4. Each month, count closures and find the oldest open question. Retire it or schedule it.

## Done when

- Every open question names its decision and has a dated guess.
- Nothing has been open more than 30 days without a reason written down.

## Common failures

- **The register becomes a to-do list.** Tasks are not questions.
- **Guesses edited after the answer.** You lose the only data on how good your judgment is.
- **Questions that never close** because nobody owns them.

## Template

```markdown
| # | Question | Decision it changes | Owner | Opened | Guess (dated) | State | Answer / reason | Closed |
|---|---|---|---|---|---|---|---|---|
| Q1 | | | | | | OPEN | | |
```

---

Ipalibo Da-Wariboko · CULT+MATH LLC · November 16, 2026
