// Deal statement directions for a landing page, so the first idea is not the model's habitual one.
// No dependencies; Node 18+.
// Usage: node scripts/deal.mjs "<product name>" [--lane developer|b2b-sales|b2b-self-serve|consumer|marketplace] [--seed <n>] [--level quiet|bold|loud] [--exclude id,id] [--no-history]
// Prints a Markdown block to paste into the record's "Statement" section: three statement moves and two worlds to
// draw from, dealt deterministically from the seed (default: a hash of the product name), plus the canon exit.
// Pick one move, or say why none fits and use canon; never redeal to reach a favourite. Record the seed.
// It also deals the page's frame (nav, hero composition, look, type, buttons, motion) from assets/frames.json, filtered
// by lane, and skips any option this machine was dealt in its last two deals (history in SLD_HISTORY, default
// ~/.config/startup-landing-design/history.json), so two products built by the same person do not share a frame.
import {readFileSync, writeFileSync, mkdirSync} from 'node:fs';
import {homedir} from 'node:os';
import {dirname, join} from 'node:path';

const args = process.argv.slice(2);
const flag = (name, dflt) => { const i = args.indexOf(name); return i > -1 ? args[i + 1] : dflt; };
const name = args.find((a, i) => !a.startsWith('--') && !['--seed', '--level', '--exclude', '--lane'].includes(args[i - 1]));
if (!name) { console.error('usage: deal.mjs "<product name>" [--lane <lane>] [--seed n] [--level quiet|bold|loud] [--exclude id,id] [--no-history]'); process.exit(2); }
const level = flag('--level', 'bold');
if (!['quiet', 'bold', 'loud'].includes(level)) { console.error('--level must be quiet, bold or loud'); process.exit(2); }
const exclude = new Set((flag('--exclude', '') || '').split(',').filter(Boolean));
const catalog = JSON.parse(readFileSync(new URL('../assets/statement-moves.json', import.meta.url), 'utf8'));

// FNV-1a hash of the name gives the default seed; mulberry32 turns the seed into a stream.
const fnv = s => { let h = 0x811c9dc5; for (const c of s) { h ^= c.codePointAt(0); h = Math.imul(h, 0x01000193) >>> 0; } return h; };
const seed = Number(flag('--seed', fnv(name.trim().toLowerCase())));
let t = seed >>> 0;
const rand = () => { t = (t + 0x6d2b79f5) >>> 0; let r = Math.imul(t ^ (t >>> 15), 1 | t); r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r; return ((r ^ (r >>> 14)) >>> 0) / 4294967296; };
const shuffle = a => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

const moves = shuffle(catalog.moves.filter(m => !exclude.has(m.id))).slice(0, 3);
const worlds = shuffle(catalog.worlds).slice(0, 2);
const LEVEL = {
  quiet: 'the move lives inside the signature artifact; the rest of the page is calm and conventional',
  bold: 'the move owns the first screen; the sections below stay quiet and carry proof',
  loud: 'the move carries the whole page: the world, character or system recurs in every section and the nav, headline and action are working parts inside it',
};
const out = [`Dealt for "${name}" with seed ${seed} (node scripts/deal.mjs "${name}" --seed ${seed}${level !== 'bold' ? ` --level ${level}` : ''}${exclude.size ? ` --exclude ${[...exclude].join(',')}` : ''}).`, '',
  `Statement level: **${level}**: ${LEVEL[level]}.`, '', 'Moves dealt (pick one, or take canon and say why):', ''];
moves.forEach((m, i) => out.push(`${i + 1}. **${m.name}** (\`${m.id}\`). ${m.what} Fits: ${m.fits} Avoid when: ${m.avoid_when} First screen: ${m.first_screen}`));
out.push(`4. **${catalog.canon.name}** (\`canon\`). ${catalog.canon.what} ${catalog.canon.use_when}`, '',
  `Draw the subject inventory from: ${worlds.join('; ')}.`);

// The frame.
const frames = JSON.parse(readFileSync(new URL('../assets/frames.json', import.meta.url), 'utf8'));
const lane = flag('--lane', null);
if (lane && !frames.lanes.includes(lane)) { console.error(`--lane must be one of ${frames.lanes.join(', ')}`); process.exit(2); }
const histPath = process.env.SLD_HISTORY || join(homedir(), '.config', 'startup-landing-design', 'history.json');
const useHistory = !args.includes('--no-history');
let history = [];
if (useHistory) { try { history = JSON.parse(readFileSync(histPath, 'utf8')); } catch { history = []; } }
const recent = history.filter(h => h.product !== name).slice(-2);
const AXES = [['nav', 'Nav'], ['hero', 'Hero composition'], ['look', 'Look'], ['type', 'Type'], ['buttons', 'Buttons'], ['motion', 'Motion signature']];
const frame = {};
out.push('', `Frame dealt${lane ? ` for the **${lane}** lane` : ''} (take each, or swap one for its alternate with a product reason in the record):`, '');
for (const [axis, label] of AXES) {
  const fit = frames[axis].filter(o => (!lane || !o.fits.length || o.fits.includes(lane)) && !(lane && o.not_for?.includes(lane)));
  // Weighted draw without replacement: options people preferred come up more often, untested ones still appear.
  const wpick = list => { const tot = list.reduce((n, o) => n + (o.weight ?? 1), 0); let r = rand() * tot; for (const o of list) { r -= o.weight ?? 1; if (r <= 0) return o; } return list[list.length - 1]; };
  const fresh = fit.filter(o => !recent.some(h => h.frame?.[axis] === o.id));
  const pick = wpick(fresh.length ? fresh : fit);
  const rest = fit.filter(o => o.id !== pick.id), alt = rest.length ? wpick(rest) : null;
  frame[axis] = pick.id;
  out.push(`- **${label}: ${pick.name}** (\`${pick.id}\`). ${pick.what}${alt ? ` Alternate: ${alt.name} (\`${alt.id}\`).` : ''}`);
}
if (useHistory) {
  try { mkdirSync(dirname(histPath), {recursive: true}); writeFileSync(histPath, JSON.stringify([...history, {product: name, lane, seed, frame, dealt_on: new Date().toISOString().slice(0, 10)}].slice(-20), null, 1)); }
  catch { out.push('', `(Could not write the history file at ${histPath}; frames are not kept apart across products on this machine.)`); }
}
console.log(out.join('\n'));
