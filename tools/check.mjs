#!/usr/bin/env node
// tools/check.mjs — check a filled DEOS Open template against its schema.
// DEOS Open · Ipalibo Da-Wariboko · CULT+MATH LLC · November 16, 2026 · MIT
//
// No dependencies. Supports the JSON Schema keywords the four DEOS Open schemas use:
// type, required, properties, additionalProperties:false, enum, const, minLength, pattern,
// minItems, maxItems, items, allOf, contains. Any full JSON Schema 2020-12 validator works too.
//
//   node tools/check.mjs examples/decision-record.pass.json
//   node tools/check.mjs my-record.json --schema decision-record
//
// The schema is taken from --schema, or from the file name (anything containing
// "decision-record", "brief", "gate" or "six-lens-board"). Exit 0 if it passes, 1 if not.
//
// What this checks: that every required field is there and has the right shape. What it cannot
// check: whether the falsifier is a real one, or the tradeoff is honest. A record can pass this
// and still say nothing. Read the standard's "Done when" list for that.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const SCHEMAS = ['decision-record', 'brief', 'gate', 'six-lens-board'];

const typeOf = (v) => (v === null ? 'null' : Array.isArray(v) ? 'array' : typeof v === 'number' ? (Number.isInteger(v) ? 'integer' : 'number') : typeof v);
const fits = (v, t) => t === typeOf(v) || (t === 'number' && typeOf(v) === 'integer');

export function validate(schema, value, at = '$') {
  const errs = [];
  const err = (m) => errs.push(`${at}: ${m}`);
  if (schema.type) {
    const types = [].concat(schema.type);
    if (!types.some((t) => fits(value, t))) { err(`should be ${types.join(' or ')}`); return errs; }
  }
  if ('const' in schema && value !== schema.const) err(`should be ${JSON.stringify(schema.const)}`);
  if (schema.enum && !schema.enum.includes(value)) err(`should be one of: ${schema.enum.join(', ')}`);
  if (typeof value === 'string') {
    if (schema.minLength && value.trim().length < schema.minLength) err(`too short (at least ${schema.minLength} characters)`);
    if (schema.pattern && !new RegExp(schema.pattern).test(value)) err(`does not match ${schema.pattern}`);
  }
  if (Array.isArray(value)) {
    if (schema.minItems && value.length < schema.minItems) err(`needs at least ${schema.minItems} item(s)`);
    if (schema.maxItems && value.length > schema.maxItems) err(`allows at most ${schema.maxItems} item(s)`);
    if (schema.items) value.forEach((v, i) => errs.push(...validate(schema.items, v, `${at}[${i}]`)));
    if (schema.contains && !value.some((v) => validate(schema.contains, v).length === 0)) {
      const want = Object.entries(schema.contains.properties || {}).map(([k, v]) => `${k} "${v.const}"`).join(', ');
      err(`must include an item with ${want || 'the required shape'}`);
    }
  }
  if (typeOf(value) === 'object') {
    for (const k of schema.required || []) if (!(k in value)) err(`missing required field "${k}"`);
    const props = schema.properties || {};
    for (const [k, v] of Object.entries(value)) {
      if (props[k]) errs.push(...validate(props[k], v, `${at}.${k}`));
      else if (schema.additionalProperties === false) err(`unknown field "${k}"`);
    }
  }
  for (const sub of schema.allOf || []) errs.push(...validate(sub, value, at));
  return errs;
}

export function schemaFor(name) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, 'schemas', `${name}.schema.json`), 'utf8'));
}

export function inferSchema(file) {
  const base = path.basename(file);
  return SCHEMAS.find((s) => base.includes(s)) || null;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const file = args.find((a) => !a.startsWith('--'));
  const i = args.indexOf('--schema');
  const name = i >= 0 ? args[i + 1] : file && inferSchema(file);
  if (!file || !name || !SCHEMAS.includes(name)) {
    console.error(`usage: node tools/check.mjs <file.json> [--schema ${SCHEMAS.join('|')}]`);
    process.exit(2);
  }
  let value;
  try { value = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { console.error(`cannot read ${file}: ${e.message}`); process.exit(2); }
  const errs = validate(schemaFor(name), value);
  if (errs.length) {
    console.log(`FAIL  ${file}  (${name})`);
    for (const e of errs) console.log(`  - ${e}`);
    process.exit(1);
  }
  console.log(`PASS  ${file}  (${name})`);
  console.log('  Shape only. Read the standard\'s "Done when" list to check the substance.');
}
