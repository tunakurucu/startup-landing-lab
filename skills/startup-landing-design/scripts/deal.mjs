// Deal statement directions for a landing page, so the first idea is not the model's habitual one.
// No dependencies; Node 18+.
// Usage: node scripts/deal.mjs "<product name>" [--seed <n>] [--level quiet|bold|loud] [--exclude id,id]
// Prints a Markdown block to paste into the record's "Statement" section: three statement moves and two worlds to
// draw from, dealt deterministically from the seed (default: a hash of the product name), plus the canon exit.
// Pick one move, or say why none fits and use canon; never redeal to reach a favourite. Record the seed.
import {readFileSync} from 'node:fs';

const args = process.argv.slice(2);
const flag = (name, dflt) => { const i = args.indexOf(name); return i > -1 ? args[i + 1] : dflt; };
const name = args.find((a, i) => !a.startsWith('--') && !['--seed', '--level', '--exclude'].includes(args[i - 1]));
if (!name) { console.error('usage: deal.mjs "<product name>" [--seed n] [--level quiet|bold|loud] [--exclude id,id]'); process.exit(2); }
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
console.log(out.join('\n'));
