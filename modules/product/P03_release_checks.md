# P3 · Release Checks

**Module:** Product & Innovation · **Version:** 1.0 · **From DEOS:** cm_24

> **Test the paths a customer actually takes, in order, before any customer takes them.**

## When to use

- Before releasing a product, a site, a campaign landing page, a checkout or an email flow.

## The standard

1. **Check the environment first:** you are testing the version that will ship, with real (test-mode) payments and real email delivery.
2. **Test in categories, in order,** because each depends on the one before. A typical set for a digital product:

   | Category | What it tests |
   |---|---|
   | 1 · Sign-in | Account creation, password, session |
   | 2 · Checkout | Payment, confirmation, account access after paying |
   | 3 · Core use | Each main feature's input and output |
   | 4 · Account | Settings, links, subscription status |
   | 5 · Email | Every automated email arrives, reads right, links work |
   | 6 · Admin | Permissions, records, repeat actions do not double-charge |

   For a campaign, swap in: link tracking, form submission, CRM record, confirmation email, landing page on mobile.
3. **Each category has written pass criteria** before testing starts.
4. **If something fails:** stop, log it, fix it, and rerun that category and every one after it.
5. **Test as a new user,** in a fresh browser, on a phone and a computer.
6. **Sign-off is written:** date, version, who tested, results.

## How to run it

1. Write the categories and pass criteria for this release.
2. Run them in order.
3. Log every failure with steps to repeat it.
4. Fix, rerun, sign off.

## Done when

- Every category passed on the version that ships, with a written sign-off.

## Common failures

- **Testing as an admin** who sees things customers do not.
- **Testing only on a computer.**
- **Skipping email** because "it worked last time."

## Template

```markdown
**Release:** · **Version:** · **Tester:** · **Date:**
| Category | Pass criteria | Result | Failure / steps to repeat | Fixed & rerun |
|---|---|---|---|---|
**Sign-off:**
```

---

Ipalibo Da-Wariboko · CULT+MATH LLC · November 16, 2026
