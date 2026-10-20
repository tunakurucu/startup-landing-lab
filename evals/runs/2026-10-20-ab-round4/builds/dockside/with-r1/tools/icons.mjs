import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const icon = `<html><body style="margin:0;background:#2c3036"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="180" height="180"><rect width="32" height="32" fill="#2c3036"/><g fill="#e8e9e5"><rect x="4" y="9" width="6" height="12"/><rect x="13" y="9" width="6" height="12"/><rect x="22" y="9" width="6" height="12"/></g><rect x="4" y="23" width="24" height="3" fill="#e3b422"/></svg></body></html>`;
let p = await b.newPage({viewport:{width:180,height:180}}); await p.setContent(icon); await p.screenshot({path:'apple-touch-icon.png'}); await p.close();
const og = `<html><body style="margin:0;background:#e8e9e5;font-family:'TeX Gyre Heros Cn','Arial Narrow',sans-serif;color:#171a1d">
<div style="padding:72px 80px;display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;height:630px;box-sizing:border-box">
<div><div style="font-size:88px;font-weight:700;line-height:1.02">Every truck gets a door and a time.</div><div style="font-family:Helvetica,Arial,sans-serif;font-size:28px;margin-top:28px;color:#4b5057">Dock appointment booking for mid-size warehouses — Dockline</div></div>
<svg viewBox="0 0 480 330" width="480"><rect width="480" height="200" fill="#2c3036"/><rect y="200" width="480" height="12" fill="#8d9096"/><rect y="200" width="480" height="4" fill="#e3b422"/><rect y="212" width="480" height="118" fill="#d4d5d0"/>
<g fill="#7b838d" stroke="#1d2024" stroke-width="3"><rect x="20" y="56" width="120" height="144"/><rect x="180" y="56" width="120" height="144"/><rect x="340" y="56" width="120" height="144"/></g>
<g fill="#eceae4"><rect x="54" y="16" width="52" height="30"/><rect x="214" y="16" width="52" height="30"/><rect x="374" y="16" width="52" height="30"/></g>
<g font-size="22" font-weight="700" fill="#171a1d" text-anchor="middle"><text x="80" y="38">1</text><text x="240" y="38">2</text><text x="400" y="38">3</text></g>
<g transform="translate(240 0)"><polygon points="-50,100 50,100 0,134 -100,134" fill="#f3f2ed" stroke="#1d2024" stroke-width="2"/><polygon points="50,100 0,134 0,234 50,200" fill="#b9bab4" stroke="#1d2024" stroke-width="2"/><rect x="-100" y="134" width="100" height="100" fill="#dedcd5" stroke="#1d2024" stroke-width="2"/><circle cx="34" cy="214" r="8" fill="#111315"/><circle cx="16" cy="226" r="8" fill="#111315"/></g>
</svg></div></body></html>`;
p = await b.newPage({viewport:{width:1200,height:630}}); await p.setContent(og); await p.screenshot({path:'og.png'}); await p.close();
await b.close(); console.log('icons written');
