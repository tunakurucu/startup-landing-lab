import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
import {writeFileSync} from 'node:fs';
const b = await chromium.launch();
const icon = `<html><body style="margin:0;background:#1d5a46"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="180" height="180"><rect width="64" height="64" fill="#1d5a46"/><path d="M16 34l10 10 22-24" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg></body></html>`;
let p = await b.newPage({viewport:{width:180,height:180}});
await p.setContent(icon); writeFileSync('apple-touch-icon.png', await p.screenshot());
const share = `<html><body style="margin:0;width:1200px;height:630px;background:#eef1ee;font-family:Inter,sans-serif;color:#15211c">
<div style="padding:72px 80px;display:grid;gap:28px;height:100%;box-sizing:border-box;align-content:space-between">
<div style="display:flex;align-items:center;gap:14px;font-family:Lora,serif;font-weight:600;font-size:34px"><svg viewBox="0 0 64 64" width="36" height="36"><rect width="64" height="64" rx="6" fill="#1d5a46"/><path d="M16 34l10 10 22-24" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>Settle</div>
<div style="font-family:Lora,serif;font-weight:600;font-size:76px;line-height:1.08;letter-spacing:-0.01em;max-width:1000px">Who to tell, in what order, and what each one needs.</div>
<div style="font-size:30px;line-height:1.4;color:#3f4d47;max-width:980px">A checklist for adult children settling a parent’s affairs in England and Wales. Not legal advice.</div>
</div></body></html>`;
p = await b.newPage({viewport:{width:1200,height:630}});
await p.setContent(share); await p.evaluate(()=>document.fonts.ready); writeFileSync('share.png', await p.screenshot());
await b.close();
