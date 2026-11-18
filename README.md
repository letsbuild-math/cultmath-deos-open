# DEOS Open

**A decision operating system for marketers and solo founders.**

DEOS Open is a set of written standards for doing marketing, research, product and project work so that every decision can be traced, checked and learned from. It is the open edition of DEOS, the internal operating system of CULT+MATH LLC.

Each standard is one short file. Each one says when to use it, the rules, how to run it, how you know it is done, the common ways it goes wrong, and a template you can copy.

## What is in it

| Module | Standards | What it covers |
|---|---|---|
| [Core](core/) | 14 | Decisions, briefs, controls, gates, failures, open questions, writing, rhythm, the six-lens board, the humane check |
| [Research](modules/research/) | 10 | Mapping a market, category and entry-point reads, evidence, signals, customer voice |
| [Marketing & Brand](modules/marketing/) | 13 | Strategy sequence, personas, positioning, value, brand, occasions, persuasion, sell-in |
| [Product & Innovation](modules/product/) | 8 | Research-to-product loop, user sessions, release checks, trust, scope |
| [Projects & People](modules/projects/) | 10 | Picking the process, ranking work, meetings, sessions, advisors, working with AI |

55 standards in all. Start with [START-HERE.md](START-HERE.md).

**New to this?** The step-by-step setup guide for Claude, ChatGPT and other AI tools is at **[cultmath.com/deos](https://cultmath.com/deos)**. No GitHub needed.

## The three rules under everything

1. **Write the question down before you look at the evidence.** A finding you could not have predicted wrong is not a finding.
2. **A missing signal is not good news.** A check that has never failed has not been tested.
3. **Every judgment carries the thing that would prove it wrong.** If nothing could, it is an opinion and should be labeled as one.

## How to use it

- **At work:** copy the [workspace layout](workspace/) into a folder or repo you own. Run the Core standards on every decision that matters. Add modules as the job needs them.
- **On one job:** open the module for the job (for example, Research and Marketing for a category growth project), read the "When to use" line of each standard, and run only the ones that apply.
- **With an AI assistant:** give it the standard as context at the start of the session. Every standard is written so a model can follow it.

## For AI agents and developers

- **[llms.txt](llms.txt):** a map of all 55 standards with direct links to their raw text, for an agent to fetch the one it needs.
- **[standards.json](standards.json):** every standard as structured data (id, title, module, one line, links).
- **[schemas/](schemas/):** JSON Schemas for four templates: Decision Record (C1), Brief (C3), Gate (C5) and the Six-Lens Board (C13).
- **[tools/check.mjs](tools/check.mjs):** checks a filled template against its schema. No dependencies: `node tools/check.mjs examples/brief.pass.json`. It checks shape, not substance.
- **CULT+MATH connector:** agents connected to `https://cultmath.com/mcp` can call `list_standards` and `get_standard` to read any standard by its id.

## Help improve it

Report a mistake, request a standard, or tell us how you used it: [open an issue](https://github.com/letsbuild-math/cultmath-deos-open/issues/new/choose), join [Discussions](https://github.com/letsbuild-math/cultmath-deos-open/discussions), or use the form at [cultmath.com/deos](https://cultmath.com/deos#feedback) if you don't have GitHub. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Text: [CC BY 4.0](LICENSE). Templates: MIT. See [LICENSE](LICENSE).

---

Ipalibo Da-Wariboko · CULT+MATH LLC · November 16, 2026
