# C13 · The Six-Lens Board

**Module:** Core · **Version:** 1.0

> **Read every big decision through six executive seats, then name the one course that satisfies most of them.**

## When to use

- Any recommendation going to a decision-maker.
- Any decision of your own that is hard to reverse.
- The end of a research brief, a strategy memo or a case analysis.

## The standard

1. **The six seats, always in this order:**

   | Seat | What it reads |
   |---|---|
   | **CEO** | Vision, strategic fit, where capital goes, long-term brand. What the decision does to who they are. |
   | **CFO** | Unit economics, margin, cash, capital efficiency. What it costs and what it returns. |
   | **CRO** | Positioning, value proposition, go-to-market friction, what the customer gains. Where demand is and what blocks it. |
   | **CPO** | The user, simplicity, priorities, delivering value in steps. What the product actually is to the buyer. |
   | **Legal** | Contract risk, IP, structural limits, compliance. The instrument and its boundaries. |
   | **Risk** | Downside, fragility, dependencies, what can be separated. What breaks, and the exposure if it does. |

2. **Each seat gives three things, in order:**
   1. **The read:** what this seat sees in the evidence, with the figure in it.
   2. **The tension:** what this seat weighs against, and which other seat it disagrees with.
   3. **The move:** what this seat would do, in **bold**.
3. **Bullets, never a table.** A table implies the seats carry equal weight. They never do. Let one seat run four sentences and another run one.
4. **End with the reconciliation.** This is the deliverable. Name which seats pull against each other and the single course that satisfies the most of them. A board that ends on the sixth seat has described a decision without taking one.
5. **A seat with no evidence says so.** "CFO: no cost data in this read; the move is to get it before committing." The board is a check for blind spots, not a source of authority.
6. **The board does not repeat the path.** The reconciliation names the course; the path (C10) costs it and says how you would know it is working.

## How to run it

1. Name the decision-maker and the decision in one line.
2. Write each seat's read, tension and move, in order.
3. Check: does at least one seat disagree with another? If all six agree, look harder or say the decision is easy.
4. Write the reconciliation.
5. Check that every figure in the board appears in your evidence.

## Done when

- Six seats, each with a read, a tension and a bold move.
- A reconciliation that names the conflict and the course.
- No figure appears that is not in the evidence.

## Common failures

- **The board agrees with itself.** Six seats, one opinion. No tension named.
- **A seat claims more than the evidence holds.** Most often the CFO, because money is usually the thinnest data in an outside read.
- **No reconciliation.**

## Template

```markdown
**Decision:** [who] must decide [what] by [when]

- **CEO.** [read with figure]. [tension]. **[move]**
- **CFO.** [read with figure]. [tension]. **[move]**
- **CRO.** [read with figure]. [tension]. **[move]**
- **CPO.** [read with figure]. [tension]. **[move]**
- **Legal.** [read]. [tension]. **[move]**
- **Risk.** [read with figure]. [tension]. **[move]**

**Reconciliation.** [Seat] and [seat] pull against each other because [ ]. The course that satisfies most seats is [ ], which [seat] will resist because [ ].
```

**Machine-readable version:** [`schemas/six-lens-board.schema.json`](../schemas/six-lens-board.schema.json). Fill it as JSON and check it with `node tools/check.mjs your-file.json --schema six-lens-board`. The check confirms the fields are there, not that they are any good.

---

Ipalibo Da-Wariboko · CULT+MATH LLC · November 16, 2026
