// Compare two check-page.mjs results: what a change fixed and what it broke.
// Usage: node scripts/compare-checks.mjs <before.json> <after.json>
// Exits 1 if any check that passed before fails after (a regression), 0 otherwise.
import {readFileSync} from 'node:fs';

const [a, b] = process.argv.slice(2);
if (!a || !b) { console.error('usage: compare-checks.mjs <before.json> <after.json>'); process.exit(2); }
const load = p => { const j = JSON.parse(readFileSync(p, 'utf8')); if (j.status === 'unavailable') { console.error(`${p}: checker did not run (${j.error})`); process.exit(3); } return Object.fromEntries(j.checks.map(c => [c.id, c])); };
const before = load(a), after = load(b);
const fixed = [], broke = [], still = [];
for (const [id, c] of Object.entries(after)) {
  const p = before[id];
  if (!p) continue;
  if (p.pass === false && c.pass === true) fixed.push(id);
  else if (p.pass === true && c.pass === false) broke.push(`${id} (${c.severity}): ${JSON.stringify(c.detail).slice(0, 120)}`);
  else if (c.pass === false) still.push(`${id} (${c.severity})`);
}
console.log(`fixed: ${fixed.join(', ') || 'none'}`);
console.log(`regressed: ${broke.length ? '\n  ' + broke.join('\n  ') : 'none'}`);
console.log(`still failing: ${still.join(', ') || 'none'}`);
process.exit(broke.length ? 1 : 0);
