import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
import {readFileSync} from 'fs';
const dir = process.argv[2];
const fav = readFileSync(dir + '/favicon.svg', 'utf8');
const b = await chromium.launch();
let p = await b.newPage({viewport: {width: 180, height: 180}});
await p.setContent(`<body style="margin:0;background:#f3f6f5;display:grid;place-items:center;height:180px"><div style="width:150px;height:150px">${fav.replace('<svg ', '<svg width="150" height="150" ')}</div></body>`);
await p.screenshot({path: dir + '/apple-touch-icon.png'});
p = await b.newPage({viewport: {width: 1200, height: 630}});
await p.setContent(`<body style="margin:0;width:1200px;height:630px;background:#f3f6f5;font-family:system-ui,sans-serif;color:#13201d;display:grid;grid-template-columns:1.2fr 1fr;align-items:center;padding:0 80px;box-sizing:border-box;gap:40px">
<div><div style="display:flex;align-items:center;gap:14px;font-weight:700;font-size:34px;letter-spacing:-.03em">${fav.replace('<svg ', '<svg width="44" height="44" ')}Swaptide</div>
<div style="font-size:64px;font-weight:650;letter-spacing:-.032em;line-height:1.05;margin-top:40px">Swap a shift on break.<br><span style="color:#0d6a4f">Approved by handoff.</span></div>
<div style="font-size:24px;color:#47544f;margin-top:24px;line-height:1.4">A shift-swap app for hospital nursing units.</div></div>
<div style="background:#fff;border:1px solid #d3dcd8;border-radius:24px;padding:28px 30px;font-size:22px;box-shadow:0 30px 50px -24px rgba(19,32,29,.35)">
<span style="background:#dcefe6;color:#0a5640;font-weight:600;padding:4px 14px;border-radius:99px;font-size:18px">Approved</span>
<div style="color:#47544f;margin-top:14px">Thursday · 7p–7a</div><div style="font-size:38px;font-weight:650;margin-top:4px">Priya → Dana</div>
<div style="margin-top:14px;line-height:1.7">✓ Charge-trained RN on nights<br>✓ 1st twelve in a row<br>✓ Off since Wed 7:30a</div>
<div style="border-top:1px solid #e4eae7;margin-top:14px;padding-top:12px;color:#47544f"><b style="color:#13201d">Kim</b>, unit manager · approved 7:04a</div></div></body>`);
await p.screenshot({path: dir + '/og.png'});
await b.close();
