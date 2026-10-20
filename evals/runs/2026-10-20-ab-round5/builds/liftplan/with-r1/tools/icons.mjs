import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const css = `body{margin:0;background:#e8e7e2;font-family:"TeX Gyre Heros Cn","Arial Narrow",Arial,sans-serif;color:#141414}`;
const og = `<!doctype html><html><head><style>${css}
.card{width:1200px;height:630px;position:relative;overflow:hidden}
.tape{position:absolute;left:0;right:0;top:0;height:16px;background:#141414 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='16'%3E%3Cpath d='M0 16L16 0h16L16 16z' fill='%23ff8a1f'/%3E%3C/svg%3E") repeat-x;background-size:48px 16px}
h1{position:absolute;left:64px;top:150px;margin:0;font-size:96px;line-height:.94;font-weight:700;text-transform:uppercase;width:1100px;white-space:nowrap}
p{position:absolute;left:64px;top:400px;margin:0;font-family:Inter,Arial,sans-serif;font-size:30px;width:860px;line-height:1.3}
.mark{position:absolute;right:64px;top:60px;font-size:44px;font-weight:700;text-transform:uppercase;display:flex;gap:12px;align-items:center}
.mark i{display:block;width:44px;height:44px;background:#141414;position:relative}
.mark i::after{content:"";position:absolute;left:10px;top:7px;width:7px;height:24px;background:#ff8a1f;box-shadow:0 0 0 0 transparent}
.mark i::before{content:"";position:absolute;left:10px;top:24px;width:25px;height:7px;background:#ff8a1f}
</style></head><body><div class="card"><div class="tape"></div><div class="mark"><i></i>Liftplan</div>
<h1>Lift plans that read<br>the load chart for you</h1>
<p>A lift plan app for construction sites. Load, crane, radius and ground, checked against the chart; the appointed person signs on a tablet.</p></div></body></html>`;
const icon = `<!doctype html><html><head><style>body{margin:0;background:#141414}svg{display:block}</style></head><body><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="180" height="180"><rect width="32" height="32" fill="#141414"/><path d="M7 5h5v17h13v5H7z" fill="#ff8a1f"/></svg></body></html>`;
const browser = await chromium.launch();
let page = await browser.newPage({viewport:{width:1200,height:630}});
await page.setContent(og); await page.evaluate(()=>document.fonts.ready); await page.waitForTimeout(200);
await page.screenshot({path:'/home/claude/r5/work/W003/og.png'});
page = await browser.newPage({viewport:{width:180,height:180}});
await page.setContent(icon); await page.waitForTimeout(100);
await page.screenshot({path:'/home/claude/r5/work/W003/apple-touch-icon.png'});
await browser.close();
console.log('ok');
