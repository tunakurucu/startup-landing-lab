// Builds ../index.html from core.js (data + drawings), style.css and app.js. Run: node src/build.mjs
import {readFileSync, writeFileSync} from 'node:fs';
import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);
const here = new URL('.', import.meta.url);
const RW = require('./core.js');
const core = readFileSync(new URL('core.js', here), 'utf8');
const css = readFileSync(new URL('style.css', here), 'utf8');
const app = readFileSync(new URL('app.js', here), 'utf8');

const ACCESS = 'https://rackwise.example/early-access';
const CTA = 'Request early access';
const NOTE = 'Opens the request page on rackwise.example. Four labs are testing Rackwise now.';
const box4 = Object.keys(RW.occupancy('3C4')).length;
const def = RW.SAMPLES[0];

const mark = `<svg viewBox="0 0 26 26" aria-hidden="true" focusable="false"><path d="M6 1.5H24.5V24.5H1.5V6Z" fill="#fff" stroke="#121C24" stroke-width="1.5"/>${[0,1,2].map(r=>[0,1,2].map(c=>`<circle cx="${8+c*5.5}" cy="${8+r*5.5}" r="2" fill="${r===2&&c===2?'#C2410C':'#56697A'}"/>`).join('')).join('')}</svg>`;

const chips = [['hek12', 'HEK293 p12'], ['puc', 'pUC19'], ['gfp', 'Anti-GFP'], ['lys', 'Liver lysate M7'], ['all-hek', 'HEK293']];

const finder = `
<section class="finder" data-signature aria-labelledby="finder-title">
  <div class="finder-top">
    <p class="finder-title" id="finder-title"><strong>Find a sample</strong> Sample freezer, made up for this page</p>
    <button type="button" class="reset">Reset</button>
  </div>
  <ol class="strip" aria-hidden="true">
    <li><span class="k">Freezer</span><span class="v">2</span></li>
    <li><span class="k">Shelf</span><span class="v">${def.shelf}</span></li>
    <li><span class="k">Rack</span><span class="v">${def.rack}</span></li>
    <li><span class="k">Box</span><span class="v">${def.box}</span></li>
    <li class="well-cell"><span class="k">Well</span><span class="v">${def.well}</span></li>
  </ol>
  <div class="fig-info">
    <div class="info" role="status" aria-live="polite">
      <p class="info-name echo">${def.name}</p>
      <p class="info-meta">Put here by <b>${def.by}</b>, ${def.on}.</p>
      <p class="sr-only">Freezer 2, shelf ${def.shelf}, rack ${def.rack}, box ${def.box}, well ${def.well}.</p>
    </div>
    <button type="button" class="take" aria-pressed="false">Log it as taken out</button>
  </div>
  <form class="search" role="search">
    <label for="q">Sample name, or a well such as E5</label>
    <input id="q" name="q" type="search" value="HEK293 p12" maxlength="60" autocomplete="off" spellcheck="false">
    <button type="submit">Find</button>
  </form>
  <div class="chips">${chips.map(([id, q]) => `<button type="button" class="chip" data-q="${q}" data-id="${id}" aria-pressed="${id === 'hek12'}">${q}</button>`).join('')}</div>
  <div class="matches" hidden></div>
  <div class="finder-fig">
    <figure class="fig-elev"><div class="draw-slot">${RW.elevSVG(def.shelf, def.rack)}</div><figcaption class="fig-cap">Freezer 2, door open</figcaption></figure>
    <figure class="fig-grid"><div class="draw-slot">${RW.gridSVG('3C4', {target: def.well})}</div><figcaption class="fig-cap">Box ${def.box}, top view</figcaption></figure>
  </div>
</section>`;

const lid = `<svg viewBox="0 0 200 200" role="img" aria-label="A frosted cryobox lid. The marker label has faded to something like HEK p1, with initials M.O. and a date in March.">
  <defs><filter id="smudge" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="5"/></filter></defs>
  <path class="d-tone" d="M22 8H192V192H8V22Z"/>
  <path class="d-thin" d="M30 18H184V184H18V30Z"/>
  <g transform="rotate(-4 100 96)">
    <rect x="34" y="58" width="132" height="76" rx="2" fill="#fff" stroke="#9AABB5"/>
    <g filter="url(#smudge)">
      <text class="marker" x="46" y="92" font-size="30">HEK p1?</text>
      <text class="marker" x="48" y="122" font-size="20">M.O.  3/26</text>
    </g>
  </g>
  <path class="frost" d="M120 40c14-6 30 2 34 12s-6 20-20 18-24 6-30-4 2-20 16-26z"/>
  <path class="frost" d="M30 120c10-4 22 4 30 12s14 20 2 26-26-2-32-12-8-22 0-26z"/>
  <path class="frost" d="M140 140c8-2 18 6 18 14s-10 14-18 10-10-22 0-24z"/>
  <path class="frost" d="M60 30c6-2 12 2 12 6s-8 6-12 4-6-8 0-10z"/>
</svg>`;

const rackDraw = `<svg viewBox="0 0 420 340" role="img" aria-label="Diagram: Shelf 3 of Freezer 2 seen from the front with the slot for Rack C empty, and Rack C pulled out beside it holding five boxes stacked top to bottom. Box 4, fourth from the top, is marked.">
  <text class="d-lab-s" x="12" y="58">Freezer 2, Shelf 3</text>
  <rect class="d-tone" x="10" y="68" width="210" height="132" rx="3"/>
  <rect class="d-white" x="20" y="78" width="190" height="112" rx="2"/>
  ${['A','B','C','D'].map((r,i)=> r==='C' ? `<rect class="d-dash" x="${30+i*45}" y="86" width="36" height="96" rx="1"/><text class="d-lab" x="${48+i*45}" y="140" text-anchor="middle">C</text>` : `<rect class="d-tone2" x="${30+i*45}" y="86" width="36" height="96" rx="1"/><text class="d-lab" x="${48+i*45}" y="140" text-anchor="middle">${r}</text>`).join('')}
  <path class="d-line" d="M138 200 C150 260 220 270 262 250" marker-end="url(#arrow)"/>
  <defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#121C24"/></marker></defs>
  <text class="d-lab-s" x="150" y="296">pulled out</text>
  <path class="d-line" d="M290 22 v-10 h60 v10"/>
  <rect class="d-tone" x="276" y="22" width="88" height="306" rx="3"/>
  ${[1,2,3,4,5].map(b=>{const y=30+(b-1)*59; return b===4
    ? `<rect class="d-hit" x="284" y="${y}" width="72" height="52" rx="2"/><text class="d-lab-w" x="320" y="${y+24}" text-anchor="middle">Box 4</text><text class="d-lab-w" x="320" y="${y+42}" text-anchor="middle">E6</text>`
    : `<rect class="d-white" x="284" y="${y}" width="72" height="52" rx="2"/><text class="d-lab" x="320" y="${y+31}" text-anchor="middle">Box ${b}</text>`;}).join('')}
  <text class="d-lab" x="372" y="40">Rack C</text>
  <path class="d-thin" d="M370 46 h-8"/>
</svg>`;

const logRows = RW.LOG.map(e => `<li data-by="${e.by}"><span class="when">${e.on}</span><span class="what">${e.by}: ${e.act.toLowerCase()} ${e.name}</span><span class="pos">${e.well}</span></li>`).join('');
const people = ['M. Okafor', 'T. Lindqvist', 'J. Reyes'];

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sample location map for lab −80 °C freezers | Rackwise</title>
<meta name="description" content="Rackwise is a live map of the −80 °C freezers in small biotech and university labs: every rack, box and tube position, who put each tube there, and when. Early access by request.">
<meta name="theme-color" content="#EBF0F2">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:title" content="Rackwise: find the tube before you open the door">
<meta property="og:description" content="A live map of your lab's −80 °C freezers: every rack, box and tube position, who put each tube there, and when.">
<meta property="og:url" content="https://rackwise.example/">
<meta property="og:image" content="https://rackwise.example/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Rackwise: find the tube before you open the door">
<meta name="twitter:description" content="A live map of your lab's −80 °C freezers: every rack, box and tube position, who put each tube there, and when.">
<meta name="twitter:image" content="https://rackwise.example/og.png">
<script>document.documentElement.classList.add('js')</script>
<style>
${css}
</style>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-head">
  <div class="wrap head-row">
    <a class="brand" href="#top" aria-label="Rackwise, back to top">${mark}<span>Rackwise</span></a>
    <button type="button" class="menu-btn" aria-expanded="false" aria-controls="site-menu">Menu</button>
    <nav id="site-menu" aria-label="Main">
      <a href="#freezer">At the freezer</a>
      <a href="#managers">For lab managers</a>
      <a href="#questions">Questions</a>
      <a class="btn" href="${ACCESS}">${CTA}</a>
    </nav>
  </div>
</header>
<main id="main" tabindex="-1">
  <section class="hero" id="top" aria-labelledby="h1">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <h1 id="h1">Find the tube before you open the door</h1>
        <p class="lede">Rackwise is a live map of the −80 °C freezers in small biotech and university labs: every rack, box and tube position, who put each tube there, and when.</p>
        <p class="payer">For lab managers, it replaces the shared spreadsheet that is always out of date and the box labels that fade in the cold.</p>
        <div class="cta-row">
          <a class="btn" href="${ACCESS}">${CTA}</a>
          <p class="cta-note">${NOTE}</p>
        </div>
      </div>
      ${finder}
    </div>
  </section>

  <section class="sec" id="today" aria-labelledby="today-h">
    <div class="wrap">
      <div class="sec-head">
        <h2 id="today-h">The spreadsheet is a week behind and the marker has faded</h2>
        <p>Someone takes a tube and forgets the sheet. The lid was labelled in March and has frosted over at every door opening since. So you stand at the open door, scraping frost off lids to read them.</p>
      </div>
      <div class="compare">
        <div class="panel">
          <h3>What you have now</h3>
          <div class="old-pair">
            <figure>${lid}</figure>
            <table class="sheet">
              <caption>The shared sheet (illustration)</caption>
              <tr><th scope="row">Box</th><td>4</td></tr>
              <tr><th scope="row">Where</th><td class="stale">Shelf 2?</td></tr>
              <tr><th scope="row">What</th><td>HEK lines</td></tr>
              <tr><th scope="row">Edited</th><td class="stale">12 Mar 2026</td></tr>
            </table>
          </div>
        </div>
        <div class="panel">
          <h3>What Rackwise keeps for the same box <span class="tag">Sample record</span></h3>
          <dl class="record">
            <dt>Box</dt><dd class="big">Box 4</dd>
            <dt>Where</dt><dd>Freezer 2, Shelf 3, Rack C</dd>
            <dt>Filled</dt><dd>${box4} of 81 positions</dd>
            <dt>Last change</dt><dd>${def.on}: ${def.by} put ${def.name} in ${def.well}</dd>
            <dt>Each tube</dt><dd>Its position, who put it there, and when</dd>
          </dl>
        </div>
      </div>
    </div>
  </section>

  <section class="sec" id="freezer" aria-labelledby="freezer-h">
    <div class="wrap">
      <div class="sec-head">
        <h2 id="freezer-h">Open the door knowing which rack to pull</h2>
        <p>You are in gloves, the door is open, and warm air is getting in. Rackwise moves the searching to before the door opens.</p>
      </div>
      <div class="door-grid">
        <ol class="steps">
          <li><h3>Look it up with the door shut</h3><p>Search the sample name. The answer is one line: freezer, shelf, rack, box and well.</p></li>
          <li><h3>Pull one rack</h3><p>Open the door, pull Rack C from Shelf 3 and count down to Box 4. The door is open for the pull, not for the search.</p></li>
          <li><h3>Log the tube as you take it</h3><p>Mark it taken out, or put back. The map changes for everyone, so the next person is not working from last month’s version.</p></li>
        </ol>
        <figure class="draw">${rackDraw}<figcaption>Shelf 3 of Freezer 2, with Rack C pulled out. Box 4 is fourth from the top.</figcaption></figure>
      </div>
    </div>
  </section>

  <section class="sec" id="managers" aria-labelledby="managers-h">
    <div class="wrap">
      <div class="sec-head">
        <h2 id="managers-h">Lab managers see who put each tube where, and when</h2>
        <p>Every position keeps its history. When a box looks wrong or someone leaves the lab, you read the log instead of asking around.</p>
      </div>
      <div class="logbox">
        <div class="log-top">
          <p class="log-title"><strong>Box 4 log</strong> <span>Freezer 2, Shelf 3, Rack C. Sample entries.</span></p>
          <div class="filters" role="group" aria-label="Show entries by">
            <button type="button" class="chip" data-by-filter="all" aria-pressed="true">Everyone</button>
            ${people.map(p => `<button type="button" class="chip" data-by-filter="${p}" aria-pressed="false">${p}</button>`).join('')}
          </div>
          <p class="log-status" role="status">Showing every entry for Box 4.</p>
        </div>
        <div class="log-body">
          <div class="log-grid" role="img" aria-label="Box 4 from above, 9 by 9 positions">${RW.gridSVG('3C4', {})}</div>
          <ul class="log">${logRows}</ul>
        </div>
      </div>
      <p class="sec-note">Take a tube out with the finder at the top of this page and it shows up here as yours.</p>
    </div>
  </section>

  <section class="sec" id="questions" aria-labelledby="questions-h">
    <div class="wrap">
      <div class="sec-head">
        <h2 id="questions-h">It maps where samples are. It does not watch the temperature.</h2>
      </div>
      <dl class="answers">
        <div><dt>Does Rackwise monitor freezer temperature?</dt><dd>No. Rackwise is a map of positions: racks, boxes, tubes, who put them there and when. It has no temperature readings and no alarms, so keep the monitoring you rely on now.</dd></div>
        <div><dt>Is anyone using it?</dt><dd>Four labs are testing it now. They are not named here, and there are no figures from them yet.</dd></div>
        <div><dt>What does it cost?</dt><dd>Pricing is not published yet.</dd></div>
        <div><dt>What happens when I request early access?</dt><dd>The button opens the request page at <a href="${ACCESS}">rackwise.example/early-access</a>. Nothing is sent from this page.</dd></div>
      </dl>
    </div>
  </section>

  <section class="sec" id="access" aria-labelledby="access-h">
    <div class="wrap close">
      <h2 id="access-h">Put your lab’s −80 freezers on one map</h2>
      <p>Early access is by request, for lab managers at small biotech companies and university labs.</p>
      <div class="cta-row">
        <a class="btn" href="${ACCESS}">${CTA}</a>
        <p class="cta-note">${NOTE}</p>
      </div>
    </div>
  </section>
</main>
<footer class="site-foot">
  <div class="wrap foot-grid">
    <div>
      <a class="brand" href="#top" aria-label="Rackwise, back to top">${mark}<span>Rackwise</span></a>
      <p class="foot-small">A live map of where every sample sits in your lab’s −80 °C freezers. Rackwise does not monitor freezer temperature.</p>
      <p class="foot-small">© 2026 Rackwise</p>
    </div>
    <nav class="foot-links" aria-label="Footer">
      <a href="#freezer">At the freezer</a>
      <a href="#managers">For lab managers</a>
      <a href="#questions">Questions</a>
      <a href="${ACCESS}">${CTA}</a>
    </nav>
  </div>
</footer>
<script>
${core}
${app}
</script>
</body>
</html>
`;
writeFileSync(new URL('../index.html', here), html);
console.log('wrote index.html', html.length, 'bytes; Box 4 holds', box4);
