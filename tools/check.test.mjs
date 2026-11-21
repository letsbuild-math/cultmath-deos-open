// tools/check.test.mjs — every passing example passes and every failing example fails.
// A check that has never gone red is a hope (C6). Run: node --test tools/check.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { validate, schemaFor, inferSchema, SCHEMAS } from './check.mjs';

for (const name of SCHEMAS) {
  test(`${name}: the passing example passes`, () => {
    const v = JSON.parse(fs.readFileSync(`examples/${name}.pass.json`, 'utf8'));
    assert.deepEqual(validate(schemaFor(name), v), []);
  });
  test(`${name}: the failing example fails`, () => {
    const v = JSON.parse(fs.readFileSync(`examples/${name}.fail.json`, 'utf8'));
    assert.ok(validate(schemaFor(name), v).length > 0);
  });
  test(`${name}: schema file names its standard`, () => {
    assert.match(schemaFor(name).description, /Standard: C\d+/);
  });
}

test('file names map to schemas', () => {
  assert.equal(inferSchema('q4-pricing.decision-record.json'), 'decision-record');
  assert.equal(inferSchema('notes.json'), null);
});

test('the index is current', () => {
  const idx = JSON.parse(fs.readFileSync('standards.json', 'utf8'));
  assert.equal(idx.count, idx.standards.length);
  assert.equal(idx.standards.length, 56);
  for (const s of idx.standards) assert.ok(fs.existsSync(s.path), s.path);
  assert.ok(fs.readFileSync('llms.txt', 'utf8').startsWith('# DEOS Open'));
});
