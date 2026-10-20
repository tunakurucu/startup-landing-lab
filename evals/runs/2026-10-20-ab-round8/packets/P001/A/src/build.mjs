// Builds ../index.html from page.html: inlines sheet.js and pre-renders the default proof sheet
// (so the page reads the same with scripts off) and the two technical drawings.
// Run: node src/build.mjs
import {readFileSync, writeFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const P = require(join(here, 'sheet.js'));
const sheetJs = readFileSync(join(here, 'sheet.js'), 'utf8');
let html = readFileSync(join(here, 'page.html'), 'utf8');

const state = P.make(24, 1, 'outside');

// Cutaway: a 24-page zine open at the centre spread, seen from the head. Sheet 1 (the cover) is the lowest curve.
function cutaway() {
  let s = '';
  const n = 24, S = 6;
  for (let k = 1; k <= S; k++) {
    const y = 156 - 17 * (k - 1);          // fore-edge height of sheet k
    const sp = 226 - 5 * (k - 1);          // where sheet k meets the fold
    const cls = k === 1 ? 'l1' : 'l2';
    s += `<path class="${cls}" d="M68 ${y} C140 ${y}, 178 ${sp - 4}, 200 ${sp} C222 ${sp - 4}, 260 ${y}, 332 ${y}"/>`;
    s += `<text class="lbl${k === 1 ? '-b' : ''}" x="56" y="${y + 5}" text-anchor="end">${2 * k - 1}·${2 * k}</text>`;
    s += `<text class="lbl${k === 1 ? '-b' : ''}" x="344" y="${y + 5}">${n + 1 - 2 * k}·${n + 2 - 2 * k}</text>`;
  }
  // Staple: crown outside the fold, legs through all six sheets, clinched inside the centre spread.
  s += '<path class="l1" d="M193 238 H207 M200 238 V197 L188 193"/>';
  // Leaders and labels
  s += '<path class="l4" d="M200 186 V54"/><circle class="dot" cx="200" cy="186" r="2.2"/>';
  s += '<text class="lbl" x="200" y="40" text-anchor="middle">centre spread, 12·13</text>';
  s += '<path class="l4" d="M96 214 L152.8 189.5"/><circle class="dot" cx="152.8" cy="189.5" r="2.2"/>';
  s += '<text class="lbl" x="22" y="230">sheet 1, the cover</text>';
  s += '<path class="l4" d="M226 252 H212 L203 230"/><circle class="dot" cx="203" cy="230" r="2.2"/>';
  s += '<text class="lbl" x="232" y="257">staple</text>';
  return s;
}

// Saddle stapler, side elevation. Hatching at 45 degrees marks cut material.
function stapler() {
  let s = '<defs><pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V7" stroke="#4a4a47" stroke-width="1"/></pattern></defs>';
  s += '<path class="l4" d="M18 274 H382"/>';
  // Base plate
  s += '<rect x="40" y="252" width="336" height="20" class="l1" style="fill:url(#hatch)"/>';
  // Column and arm
  s += '<rect x="326" y="88" width="30" height="164" class="l1" fill="none"/>';
  s += '<path class="l3" d="M334 100 V240 M348 100 V240"/>';
  s += '<rect x="92" y="88" width="264" height="24" class="l1" fill="none"/>';
  // Head and driver
  s += '<rect x="98" y="112" width="56" height="46" class="l1" fill="none"/>';
  s += '<path class="l3" d="M106 124 H146 M106 134 H146"/>';
  s += '<rect x="122" y="158" width="8" height="13" class="l2" fill="none"/>';
  s += '<path class="l4 hid" d="M126 171 V178"/>';
  // Saddle (cut), apex under the driver
  s += '<path d="M90 252 L126 190 L162 252 Z" class="l1" style="fill:url(#hatch)"/>';
  // The open zine over the saddle: innermost sheet touches the saddle, cover on top.
  s += '<path class="l2" d="M70 236 L126 186.5 L182 236"/>';
  s += '<path class="l2" d="M64 236 L126 183 L188 236"/>';
  s += '<path class="l1" d="M58 236 L126 179.5 L194 236"/>';
  // Staple at the fold
  s += '<path class="red" d="M121 178 H131"/>';
  // Labels
  s += '<path class="l4" d="M154 136 H196"/><circle class="dot" cx="154" cy="136" r="2.2"/><text class="lbl" x="202" y="141">stapling head</text>';
  s += '<path class="l4" d="M132 177 L176 166 H196"/><circle class="dot" cx="132" cy="177" r="2.2"/><text class="lbl" x="202" y="170">staple</text>';
  s += '<path class="l4" d="M150 234 L176 212 H196"/><circle class="dot" cx="150" cy="234" r="2.2"/><text class="lbl" x="202" y="216">saddle</text>';
  s += '<path class="l4" d="M72 226 L46 200 V160"/><circle class="dot" cx="72" cy="226" r="2.2"/><text class="lbl" x="22" y="152">open zine,</text><text class="lbl" x="22" y="168" dy="0">cover on top</text>';
  s += '<text class="lbl" x="250" y="80" text-anchor="middle">arm</text><path class="l4" d="M250 84 V96"/>';
  return s;
}

html = html
  .replace('<!--SHEET-->', P.svg(state))
  .replace('<!--SLUG-->', P.slug(state))
  .replace('<!--STATUS-->', P.status(state))
  .replace('<!--NOTE-->', P.note(state))
  .replace('<!--CUTAWAY-->', cutaway())
  .replace('<!--STAPLER-->', stapler())
  .replace('/*SHEETJS*/', sheetJs);

writeFileSync(join(here, '..', 'index.html'), html);
console.log('wrote index.html', html.length, 'bytes');
