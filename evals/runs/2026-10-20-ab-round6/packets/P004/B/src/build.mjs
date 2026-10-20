// Writes ../index.html from index.src.html, filling the signature's no-JavaScript still from tide.js.
// Usage: node src/build.mjs
import {readFileSync, writeFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const ctx = {};
ctx.globalThis = ctx;
vm.createContext(ctx);
vm.runInContext(readFileSync(join(root, 'tide.js'), 'utf8'), ctx);
const TW = ctx.TW;
const {morning, t} = TW.DEFAULT;
const st = TW.state(morning, t);
const tabs = TW.ORDER.map(k => `<button type="button" class="tab" data-morning="${k}" aria-pressed="${k === morning}">${TW.MORNINGS[k].tab}</button>`).join('\n            ');
const fill = {TABS: tabs, VW: TW.VW, VH: TW.VH, SVG: st.svg, LABELS: st.labels, MARKER: st.marker, AXIS: TW.axis(), READOUT: st.readout,
  LANES: st.lanes, TITLE: st.title, TIME: TW.hhmm(t), TVALUE: Math.round(t * 60)};
let html = readFileSync(join(here, 'index.src.html'), 'utf8');
html = html.replace(/\{\{([A-Z]+)\}\}/g, (m, k) => { if (!(k in fill)) throw new Error('no value for ' + k); return String(fill[k]); });
writeFileSync(join(root, 'index.html'), html);
console.log('wrote index.html', html.length, 'bytes');
