// Bakes the planner's default state into index.html so the first screen is complete without JavaScript.
// Usage: node build/bake.mjs   (run from the page directory)
import {readFileSync, writeFileSync} from 'node:fs';
import vm from 'node:vm';

const dir = new URL('..', import.meta.url).pathname;
const ctx = {window: undefined};
vm.createContext(ctx);
vm.runInContext(readFileSync(dir + 'planner.js', 'utf8'), ctx);
const P = ctx.Pantrywise;
const r = P.plan(P.defaultState());
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const inSet = new Set(P.DEFAULT_IN);

const shelf = P.ITEMS.map(it => `        <li><label class="chip"><input type="checkbox" name="have" value="${it.id}"${inSet.has(it.id) ? ' checked' : ''}><span class="chip-body"><svg aria-hidden="true"><use href="#i-${it.id}"/></svg><span>${esc(it.name)}</span><span class="mark" aria-hidden="true"></span></span></label></li>`).join('\n');
const vetoes = P.VETOES.map(v => `          <li><label class="chip chip-veto"><input type="checkbox" name="veto" value="${v.id}"><span class="chip-body"><span>${esc(v.label)}</span><span class="mark" aria-hidden="true"></span></span></label></li>`).join('\n');
const n = r.list.length;
const count = n === 0 ? 'nothing' : n === 1 ? '1 thing' : n + ' things';

const fill = {
  shelf, vetoes,
  status: P.summary(r),
  rows: P.renderRows(r),
  list: P.renderList(r),
  list2: P.renderList(r),
  count,
  phonesub: count + ' for the week'
};
let html = readFileSync(dir + 'index.html', 'utf8');
for (const [k, v] of Object.entries(fill)) {
  const re = new RegExp(`(<!-- build:${k} -->)[\\s\\S]*?(<!-- /build:${k} -->)`);
  if (!re.test(html)) throw new Error('marker missing: ' + k);
  const block = /^(shelf|vetoes|rows|list|list2)$/.test(k) ? `\n${v}\n        ` : v;
  html = html.replace(re, `$1${block}$2`);
}
writeFileSync(dir + 'index.html', html);
console.log('baked:', P.summary(r));
