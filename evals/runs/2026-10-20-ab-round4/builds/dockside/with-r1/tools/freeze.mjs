// Write the 09:30 sample state into index.html so the page carries it without JavaScript.
import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
import {readFileSync, writeFileSync} from 'node:fs';
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1440,height:900}});
await p.goto('file:///home/claude/r4/work/W001/index.html'); await p.waitForTimeout(300);
const st = await p.evaluate(() => ({
  grid: document.getElementById('grid').innerHTML,
  trailers: [...document.querySelectorAll('.trailer')].map(t => ({door: t.dataset.door, cls: t.getAttribute('class'), nose: t.querySelector('.nose-text').textContent})),
  lights: [...document.querySelectorAll('.light')].map(l => ({door: l.dataset.door, cls: l.getAttribute('class')})),
}));
await b.close();
let s = readFileSync('index.html', 'utf8');
s = s.replace(/(<div class="grid col-1" id="grid"[^>]*>)[\s\S]*?(<\/div>\s*<div class="now")/, (m, a, z) => a + '\n' + st.grid.replace(/<\/button>|<\/div>/g, '$&\n') + z);
for (const t of st.trailers) s = s.replace(new RegExp(`<g class="trailer[^"]*" data-door="${t.door}"><use href="#trailer-shape"/><foreignObject class="nose" x="-80" y="172" width="100" height="26"><div xmlns="http://www.w3.org/1999/xhtml" class="nose-text">[^<]*</div>`),
  `<g class="${t.cls}" data-door="${t.door}"><use href="#trailer-shape"/><foreignObject class="nose" x="-80" y="172" width="100" height="26"><div xmlns="http://www.w3.org/1999/xhtml" class="nose-text">${t.nose}</div>`);
for (const l of st.lights) s = s.replace(new RegExp(`<g class="light[^"]*" data-door="${l.door}">`), `<g class="${l.cls}" data-door="${l.door}">`);
writeFileSync('index.html', s);
console.log('frozen: cells', (st.grid.match(/class="slot/g)||[]).length, 'trailers in', st.trailers.filter(t=>/is-in/.test(t.cls)).length);
