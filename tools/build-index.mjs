#!/usr/bin/env node
// tools/build-index.mjs — writes standards.json and llms.txt from the standard files.
// DEOS Open · Ipalibo Da-Wariboko · CULT+MATH LLC · November 16, 2026 · MIT
// No dependencies. Run from the repo root:  node tools/build-index.mjs   (add --check to fail if stale)
import fs from 'node:fs';
import path from 'node:path';

const REPO = 'letsbuild-math/cultmath-deos-open';
const BLOB = `https://github.com/${REPO}/blob/main/`;
const RAW = `https://raw.githubusercontent.com/${REPO}/main/`;
const MODULES = [
  ['core', 'Core'], ['modules/research', 'Research'], ['modules/marketing', 'Marketing & Brand'],
  ['modules/product', 'Product & Innovation'], ['modules/projects', 'Projects & People'],
];
const SCHEMAS = { C1: 'decision-record', C3: 'brief', C5: 'gate', C13: 'six-lens-board' };

const standards = [];
for (const [dir, module] of MODULES) {
  for (const f of fs.readdirSync(dir).filter((x) => /^[A-Z]\d\d_.+\.md$/.test(x)).sort()) {
    const p = `${dir}/${f}`;
    const text = fs.readFileSync(p, 'utf8');
    const head = text.split('\n')[0].replace(/^#\s*/, '');
    const [id, title] = head.split(' · ');
    const one = (text.match(/^> \*\*(.+?)\*\*/m) || [])[1] || '';
    const version = (text.match(/\*\*Version:\*\* ([\d.]+)/) || [])[1] || '1.0';
    standards.push({
      id, title, module, version, one_line: one, path: p, url: BLOB + p, raw_url: RAW + p,
      ...(SCHEMAS[id] ? { schema: `schemas/${SCHEMAS[id]}.schema.json` } : {}),
    });
  }
}

const json = JSON.stringify({
  name: 'DEOS Open', version: fs.readFileSync('CHANGELOG.md', 'utf8').match(/^## ([\d.]+)/m)[1],
  repo: `https://github.com/${REPO}`, guide: 'https://cultmath.com/deos',
  license: { text: 'CC BY 4.0', templates: 'MIT', credit: 'DEOS Open, Ipalibo Da-Wariboko, CULT+MATH LLC' },
  count: standards.length, standards,
}, null, 2) + '\n';

const lines = [
  '# DEOS Open', '',
  `> Short written standards for marketing, research, product and project work. Each says when to use it, the rules, how to run it, how you know it is done, common failures and a template. Text CC BY 4.0, templates MIT. Credit: DEOS Open, Ipalibo Da-Wariboko, CULT+MATH LLC.`, '',
  'How to use these with an agent: fetch the one standard the task needs (raw links below), follow its "How to run it" steps in order, fill its template, and check the result against its "Done when" list. Never invent facts, figures or sources. Four standards have a JSON Schema for their template (schemas/), and tools/check.mjs validates a filled record with no dependencies.', '',
  `- [standards.json](${RAW}standards.json): every standard as structured data`,
  `- [START-HERE.md](${RAW}START-HERE.md): where to begin`,
  `- [Beginner setup guide](https://cultmath.com/deos): Claude, ChatGPT and other AI tools`, '',
];
for (const [, module] of MODULES) {
  lines.push(`## ${module}`, '');
  for (const s of standards.filter((x) => x.module === module)) {
    lines.push(`- [${s.id} · ${s.title}](${s.raw_url}): ${s.one_line}${s.schema ? ` Schema: ${RAW}${s.schema}` : ''}`);
  }
  lines.push('');
}
const txt = lines.join('\n');

if (process.argv.includes('--check')) {
  const stale = ['standards.json', 'llms.txt'].filter((f, i) => !fs.existsSync(f) || fs.readFileSync(f, 'utf8') !== [json, txt][i]);
  if (stale.length) { console.error(`stale: ${stale.join(', ')} — run node tools/build-index.mjs`); process.exit(1); }
  console.log(`index current: ${standards.length} standards`);
} else {
  fs.writeFileSync('standards.json', json);
  fs.writeFileSync('llms.txt', txt);
  console.log(`wrote standards.json and llms.txt: ${standards.length} standards`);
}
