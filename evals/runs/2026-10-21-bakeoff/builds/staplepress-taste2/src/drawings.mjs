// Drawings of Staplepress's own things, in one flat language and the page's palette.
// Generated into index.html by build.mjs. Flat fills, tone steps for light, no strokes.

export const C = {
  paper: '#f6f5f0', bone: '#ecebe7', surface: '#e1dfd9', tone: '#cfcdc4', stone: '#b9b8ac',
  olive: '#38450f', muted: '#5d683a', sage: '#8d9466', steel: '#a9ad96',
  deep: '#1d2408', deeper: '#12170a', bench: '#2a330d', bench2: '#262e0b', lamp: '#efe8c6', glass: '#d9d3b0',
};

// deterministic random
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
const r1 = (n) => Math.round(n * 10) / 10;

// ---------- page symbols (A5, 300 x 424) ----------
export function symbols() {
  const R = rng(7);
  const stars = Array.from({ length: 16 }, () => `<circle cx="${r1(24 + R() * 250)}" cy="${r1(22 + R() * 120)}" r="${r1(0.8 + R() * 1.2)}" fill="${C.bone}"/>`).join('');
  const blocks = [[14, 168, 46, 140], [62, 150, 38, 158], [102, 182, 56, 126], [160, 160, 44, 148], [206, 176, 40, 132], [248, 154, 40, 154]]
    .map(([x, y, w, h]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#283110"/>`).join('');
  const W = rng(11);
  const lit = Array.from({ length: 14 }, () => {
    const x = 20 + Math.floor(W() * 13) * 20, y = 190 + Math.floor(W() * 5) * 20;
    return `<rect x="${x}" y="${y}" width="8" height="10" fill="${W() > 0.4 ? C.lamp : C.muted}"/>`;
  }).join('');
  const bus = `
    <g transform="translate(30 214)">
      <rect x="4" y="-7" width="212" height="10" rx="4" fill="${C.muted}"/>
      <rect x="0" y="0" width="226" height="96" rx="9" fill="${C.sage}"/>
      <rect x="0" y="68" width="226" height="28" rx="6" fill="${C.muted}"/>
      ${[0, 1, 2, 3].map((i) => `<rect x="${10 + i * 35}" y="12" width="29" height="36" rx="2" fill="${C.lamp}"/>`).join('')}
      <circle cx="24" cy="36" r="7" fill="${C.olive}"/><rect x="15" y="41" width="18" height="7" rx="3" fill="${C.olive}"/>
      <circle cx="96" cy="34" r="6.5" fill="${C.olive}"/><rect x="88" y="39" width="17" height="9" rx="3" fill="${C.olive}"/>
      <circle cx="129" cy="38" r="6" fill="${C.olive}"/><rect x="121" y="42" width="16" height="6" rx="3" fill="${C.olive}"/>
      <rect x="152" y="12" width="26" height="80" rx="2" fill="${C.muted}"/>
      <rect x="155" y="16" width="9" height="40" fill="${C.glass}"/><rect x="166" y="16" width="9" height="40" fill="${C.glass}"/>
      <rect x="186" y="4" width="34" height="9" rx="1" fill="${C.deeper}"/><rect x="190" y="6.5" width="16" height="4" fill="${C.lamp}"/>
      <rect x="186" y="16" width="34" height="44" rx="3" fill="${C.lamp}"/>
      <rect x="186" y="16" width="12" height="44" fill="${C.glass}"/>
      <circle cx="217" cy="80" r="4.5" fill="${C.lamp}"/>
      <polygon points="221,76 300,62 300,104 221,84" fill="${C.lamp}" opacity="0.16"/>
      <circle cx="44" cy="96" r="15" fill="${C.deeper}"/><circle cx="44" cy="96" r="6" fill="${C.sage}"/>
      <circle cx="182" cy="96" r="15" fill="${C.deeper}"/><circle cx="182" cy="96" r="6" fill="${C.sage}"/>
    </g>`;
  const cover = `
  <symbol id="pg-cover" viewBox="0 0 300 424">
    <rect width="300" height="424" fill="${C.paper}"/>
    <rect x="12" y="12" width="276" height="400" fill="${C.deep}"/>
    ${stars}
    <circle cx="232" cy="74" r="24" fill="${C.bone}"/><circle cx="243" cy="67" r="22" fill="${C.deep}"/>
    <text x="28" y="72" font-family="SP Display, serif" font-size="44" fill="${C.bone}" letter-spacing="1">LATE</text>
    <text x="28" y="114" font-family="SP Display, serif" font-size="44" fill="${C.bone}" letter-spacing="1">BUSES</text>
    <rect x="28" y="128" width="96" height="4" fill="${C.sage}"/>
    ${blocks}${lit}
    <rect x="12" y="306" width="276" height="12" fill="#3a4415"/>
    <rect x="12" y="318" width="276" height="94" fill="#151b07"/>
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="${22 + i * 58}" y="372" width="30" height="5" fill="${C.muted}"/>`).join('')}
    <rect x="268" y="232" width="3" height="76" fill="${C.sage}"/><rect x="257" y="222" width="25" height="16" rx="2" fill="${C.bone}"/>
    <rect x="262" y="227" width="15" height="3" fill="${C.olive}"/>
    ${bus}
  </symbol>`;

  const lines = (x, y, n, w, gap, seed, fill = C.stone) => {
    const L = rng(seed);
    return Array.from({ length: n }, (_, i) => `<rect x="${x}" y="${y + i * gap}" width="${r1(i === n - 1 ? w * (0.35 + L() * 0.3) : w * (0.82 + L() * 0.18))}" height="${r1(gap * 0.42)}" fill="${fill}"/>`).join('');
  };

  const back = `
  <symbol id="pg-back" viewBox="0 0 300 424">
    <rect width="300" height="424" fill="${C.paper}"/>
    <g transform="rotate(-8 150 170)">
      <rect x="84" y="128" width="132" height="70" fill="${C.surface}"/>
      <rect x="84" y="128" width="30" height="70" fill="${C.tone}"/>
      <circle cx="99" cy="163" r="6" fill="${C.paper}"/>
      <rect x="124" y="140" width="76" height="8" fill="${C.olive}"/>
      <rect x="124" y="156" width="56" height="5" fill="${C.muted}"/>
      <rect x="124" y="166" width="64" height="5" fill="${C.muted}"/>
      <rect x="124" y="180" width="30" height="8" fill="${C.olive}"/>
    </g>
    ${lines(70, 262, 5, 160, 12, 3, C.stone)}
    <rect x="70" y="342" width="70" height="5" fill="${C.sage}"/>
    <rect x="70" y="352" width="110" height="5" fill="${C.stone}"/>
  </symbol>`;

  // drawing page: inside the bus at night, seats from behind
  const seats = [0, 1, 2].map((row) => {
    const y = 210 + row * 62, s = 1 - row * 0.12, w = 92 * s;
    return [64, 176].map((x0) => {
      const x = 150 + (x0 - 150) * (1 - row * 0.18) - w / 2;
      return `<rect x="${r1(x)}" y="${y}" width="${r1(w)}" height="${r1(64 * s)}" rx="8" fill="${row % 2 ? C.muted : C.sage}"/><rect x="${r1(x)}" y="${y}" width="${r1(w)}" height="10" rx="5" fill="${C.olive}"/>`;
    }).join('');
  }).join('');
  const pa = `
  <symbol id="pg-a" viewBox="0 0 300 424">
    <rect width="300" height="424" fill="${C.paper}"/>
    <rect x="12" y="12" width="276" height="400" fill="${C.deep}"/>
    <rect x="12" y="40" width="276" height="120" fill="#151b07"/>
    ${[40, 104, 168, 232].map((x) => `<rect x="${x - 26}" y="50" width="52" height="100" rx="4" fill="#2b3410"/><circle cx="${x + 8}" cy="${80 + (x % 3) * 8}" r="5" fill="${C.lamp}"/><circle cx="${x - 10}" cy="${118 - (x % 5) * 3}" r="3" fill="${C.sage}"/>`).join('')}
    <rect x="12" y="160" width="276" height="14" fill="${C.olive}"/>
    <rect x="148" y="174" width="4" height="238" fill="#2b3410"/>
    ${seats}
    <circle cx="96" cy="196" r="15" fill="${C.deeper}"/><rect x="78" y="206" width="36" height="20" rx="8" fill="${C.deeper}"/>
  </symbol>`;
  const pb = `
  <symbol id="pg-b" viewBox="0 0 300 424">
    <rect width="300" height="424" fill="${C.paper}"/>
    <rect x="40" y="44" width="150" height="14" fill="${C.olive}"/>
    ${lines(40, 80, 9, 220, 13, 9)}
    <rect x="40" y="208" width="220" height="150" fill="${C.deep}"/>
    <circle cx="210" cy="250" r="16" fill="${C.bone}"/><circle cx="218" cy="245" r="15" fill="${C.deep}"/>
    <rect x="40" y="318" width="220" height="40" fill="#151b07"/>
    <rect x="70" y="296" width="2.5" height="40" fill="${C.sage}"/><rect x="62" y="290" width="18" height="8" fill="${C.lamp}"/>
    ${lines(40, 374, 2, 220, 13, 21)}
  </symbol>`;
  return `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>${cover}${back}${pa}${pb}</defs></svg>`;
}

// a sheet = two pages side by side (A4 landscape, 600 x 424 in page units)
function sheet(x, y, w, left, right, rot = 0, under = []) {
  const h = w / 1.4151, pw = w / 2;
  const cx = x + w / 2, cy = y + h / 2;
  const u = under.map(([dx, dy, dr, fill]) => `<rect x="${x + dx}" y="${y + dy}" width="${w}" height="${r1(h)}" fill="${fill}" transform="rotate(${dr} ${cx} ${cy})"/>`).join('');
  return `${u}<g transform="rotate(${rot} ${r1(cx)} ${r1(cy)})"><rect x="${x}" y="${y}" width="${w}" height="${r1(h)}" fill="${C.paper}"/><use href="#${left}" x="${x}" y="${y}" width="${r1(pw)}" height="${r1(h)}"/><use href="#${right}" x="${r1(x + pw)}" y="${y}" width="${r1(pw)}" height="${r1(h)}"/></g>`;
}

// ---------- hero: the proof sheet on the bench, under the press delivery ----------
export function hero() {
  const planks = [0, 1, 2, 3, 4, 5].map((i) => `<rect x="0" y="${110 + i * 120}" width="1200" height="120" fill="${i % 2 ? C.bench2 : C.bench}"/>`).join('');
  const grippers = Array.from({ length: 10 }, (_, i) => `<rect x="${40 + i * 120}" y="92" width="34" height="14" fill="${C.sage}"/>`).join('');
  const ticks = Array.from({ length: 36 }, (_, i) => `<rect x="${12 + i * 10}" y="0" width="2" height="${i % 5 ? 9 : 16}" fill="${C.muted}"/>`).join('');
  return `
  <svg class="draw" viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice" role="img" aria-labelledby="hero-pic-t">
    <title id="hero-pic-t">A printed proof sheet lying flat on a dark bench under the press: the back cover and the front cover of a 24-page zine called Late Buses, side by side and not yet folded, with a paper tag reading Proof clipped to it.</title>
    <rect width="1200" height="760" fill="${C.bench}"/>${planks}
    <rect width="1200" height="110" fill="${C.deeper}"/>
    <rect y="30" width="1200" height="52" fill="${C.muted}"/><rect y="38" width="1200" height="12" fill="${C.sage}"/><rect y="68" width="1200" height="14" fill="${C.olive}"/>
    ${grippers}
    ${sheet(168, 150, 860, 'pg-back', 'pg-cover', -2, [[22, 20, -4, C.tone], [10, 10, -1, C.surface]])}
    <g transform="rotate(-2 600 450) translate(330 0)">
      <rect x="150" y="112" width="40" height="58" rx="3" fill="${C.deeper}"/><rect x="156" y="104" width="28" height="14" rx="2" fill="${C.steel}"/>
      <rect x="128" y="150" width="170" height="74" fill="${C.bone}"/>
      <rect x="128" y="150" width="170" height="10" fill="${C.surface}"/>
      <text x="144" y="206" font-family="SP Display, serif" font-size="38" fill="${C.olive}" letter-spacing="1">PROOF</text>
    </g>
    <g transform="translate(830 690) rotate(-14)"><rect width="380" height="42" fill="${C.steel}"/><rect y="30" width="380" height="12" fill="${C.stone}"/>${ticks}</g>
    <g transform="translate(40 560) rotate(28)"><rect width="250" height="18" fill="${C.sage}"/><rect y="9" width="250" height="9" fill="${C.muted}"/><polygon points="250,0 284,9 250,18" fill="${C.bone}"/><polygon points="274,6 284,9 274,12" fill="${C.deeper}"/><rect x="-24" width="24" height="18" fill="${C.olive}"/></g>
  </svg>`;
}

// ---------- chapter 1: one copy's sheets, fanned on the bench ----------
export function fanned() {
  const order = [['pg-b', 'pg-a', 6, 0], ['pg-a', 'pg-b', -5, 1], ['pg-b', 'pg-a', 4, 2], ['pg-a', 'pg-b', -3, 3], ['pg-b', 'pg-a', 2, 4], ['pg-back', 'pg-cover', -2, 5]];
  const sheets = order.map(([l, r, rot, i]) => sheet(56 + i * 10, 70 + i * 104, 470, l, r, rot)).join('');
  return `
  <svg class="draw" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" role="img" aria-labelledby="ch1-t">
    <title id="ch1-t">Six printed sheets, one copy's worth of a 24-page zine, fanned out on the bench so every spread can be seen; the top sheet shows the back and front covers.</title>
    <rect width="600" height="800" fill="${C.bench}"/>
    <rect y="0" width="600" height="190" fill="${C.bench2}"/><rect y="420" width="600" height="190" fill="${C.bench2}"/>
    ${sheets}
    <g transform="rotate(8 470 720)"><rect x="400" y="690" width="150" height="62" fill="${C.bone}"/><rect x="400" y="690" width="150" height="10" fill="${C.surface}"/><text x="414" y="736" font-family="SP Display, serif" font-size="30" fill="${C.olive}">PROOF</text></g>
  </svg>`;
}

// ---------- chapter 2: black ink on uncoated paper, under a loupe ----------
export function loupe() {
  const F = rng(5);
  const fibres = Array.from({ length: 170 }, () => {
    const x = r1(F() * 420), y = r1(F() * 420), w = r1(10 + F() * 34), a = r1(F() * 180);
    return `<rect x="${x}" y="${y}" width="${w}" height="1.6" fill="${F() > 0.5 ? '#e2dfd2' : '#ebe8dd'}" transform="rotate(${a} ${x} ${y})"/>`;
  }).join('');
  const dots = [];
  for (let gy = 0; gy < 9; gy++) for (let gx = 0; gx < 12; gx++) {
    const x = 18 + gx * 22 + (gy % 2) * 11, y = 26 + gy * 20;
    const r = 2 + (gx / 12) * 6.5 + (F() - 0.5) * 0.8;
    if (x < 300) dots.push(`<circle cx="${x}" cy="${y}" r="${r1(r)}" fill="${C.deep}"/>`);
  }
  // ink edge: ragged where black meets uncoated paper
  const E = rng(17);
  let edge = 'M0 236';
  for (let x = 0; x <= 420; x += 12) edge += ` L${x} ${r1(232 + (x * 0.12) + (E() - 0.5) * 9)}`;
  edge += ' L420 420 L0 420 Z';
  return `
  <svg class="draw" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" role="img" aria-labelledby="ch2-t">
    <title id="ch2-t">A loupe over the zine's cover: magnified, the paper's fibres show, the grey sky prints as a fine pattern of black dots, and the solid black of the street has a slightly soft edge where the ink meets uncoated paper.</title>
    <use href="#pg-cover" x="-120" y="-60" width="840" height="1187"/>
    <defs><clipPath id="lens"><circle cx="300" cy="420" r="196"/></clipPath></defs>
    <circle cx="300" cy="420" r="214" fill="${C.deeper}"/>
    <circle cx="300" cy="420" r="206" fill="${C.muted}"/>
    <g clip-path="url(#lens)"><g transform="translate(90 210)">
      <rect width="420" height="420" fill="#f1efe7"/>${fibres}
      ${dots.join('')}
      <path d="${edge}" fill="${C.deep}"/>
      <rect x="250" y="40" width="170" height="180" fill="${C.deep}"/>
      <rect x="300" y="80" width="80" height="96" fill="#f1efe7"/>
    </g></g>
    <g transform="rotate(42 300 420)"><rect x="508" y="396" width="240" height="48" rx="6" fill="${C.deeper}"/><rect x="548" y="396" width="14" height="48" fill="${C.olive}"/><rect x="580" y="396" width="14" height="48" fill="${C.olive}"/><rect x="612" y="396" width="14" height="48" fill="${C.olive}"/></g>
  </svg>`;
}

// ---------- chapter 3: folded, stapled, trimmed ----------
export function stapled() {
  return `
  <svg class="draw" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" role="img" aria-labelledby="ch3-t">
    <title id="ch3-t">The finished zine: one copy lying open at its centre pages with two staples in the fold, and two closed copies stacked beside it, the top one showing its cover with the unprinted border.</title>
    <rect width="600" height="800" fill="${C.tone}"/>
    <g transform="rotate(-5 300 250)">
      <rect x="46" y="90" width="516" height="364" fill="${C.stone}"/>
      <use href="#pg-a" x="40" y="80" width="258" height="364"/>
      <use href="#pg-b" x="298" y="80" width="258" height="364"/>
      <rect x="282" y="80" width="16" height="364" fill="#000" opacity="0.08"/>
      <rect x="295.5" y="148" width="5" height="40" fill="${C.steel}"/><rect x="295.5" y="148" width="2.5" height="40" fill="#7c8270"/>
      <rect x="295.5" y="336" width="5" height="40" fill="${C.steel}"/><rect x="295.5" y="336" width="2.5" height="40" fill="#7c8270"/>
    </g>
    <g transform="rotate(8 400 600)">
      <rect x="276" y="420" width="248" height="350" fill="${C.stone}"/>
      <rect x="268" y="410" width="248" height="350" fill="${C.surface}"/>
      <rect x="262" y="402" width="248" height="350" fill="${C.stone}"/>
      <use href="#pg-cover" x="256" y="394" width="248" height="350"/>
      <rect x="256" y="394" width="5" height="350" fill="#000" opacity="0.07"/>
    </g>
  </svg>`;
}

// ---------- questions: what a full-bleed cover becomes ----------
export function bleed() {
  const page = (x, inset, label) => `
    <g transform="translate(${x} 0)">
      <rect width="150" height="212" fill="${C.paper}"/>
      <rect x="${inset}" y="${inset}" width="${150 - inset * 2}" height="${212 - inset * 2}" fill="${C.deep}"/>
      <circle cx="${112 - inset * 0.2}" cy="${44 + inset * 0.2}" r="13" fill="${C.bone}"/><circle cx="${118 - inset * 0.2}" cy="${40 + inset * 0.2}" r="12" fill="${C.deep}"/>
      <rect x="${inset}" y="150" width="${150 - inset * 2}" height="${62 - inset}" fill="#151b07"/>
      <rect x="${18 + inset * 0.3}" y="124" width="${114 - inset * 0.6}" height="38" rx="6" fill="${C.sage}"/>
    </g>`;
  return `
  <svg class="draw draw--bleed" viewBox="0 0 400 212" role="img" aria-labelledby="bleed-t">
    <title id="bleed-t">Two versions of the same cover: on the left the artwork runs to the edge, on the right it prints with an unprinted paper border on every side.</title>
    ${page(0, 0)}
    <polygon points="176,98 212,98 212,88 230,106 212,124 212,114 176,114" fill="${C.muted}"/>
    ${page(250, 9)}
  </svg>`;
}
