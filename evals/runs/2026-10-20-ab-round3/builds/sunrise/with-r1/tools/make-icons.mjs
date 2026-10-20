import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const dir='/home/claude/r3/work/W014';
const b=await chromium.launch();
const icon=`<html><body style="margin:0;background:#0f1321"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="180" height="180"><rect width="32" height="32" fill="#0f1321"/><path d="M6 21a10 10 0 0 1 20 0" fill="none" stroke="#f3eadb" stroke-width="2.5"/><path d="M4 25h24" stroke="#f3eadb" stroke-width="2.5" stroke-linecap="round"/><circle cx="16" cy="21" r="4" fill="#d4781c"/></svg></body></html>`;
let p=await b.newPage({viewport:{width:180,height:180}});
await p.setContent(icon); await p.screenshot({path:dir+'/apple-touch-icon.png'});
const og=`<html><body style="margin:0;width:1200px;height:630px;background:#0f1321;color:#f3eadb;font-family:Lora,Georgia,serif;position:relative;overflow:hidden">
<div style="position:absolute;left:0;top:0;width:1200px;height:630px;background:radial-gradient(circle at 880px 330px, rgba(230,134,28,.55), rgba(230,134,28,0) 420px)"></div>
<div style="position:absolute;left:800px;top:150px;width:160px;height:150px;border-radius:60px;background:#e6861c;box-shadow:0 0 0 0"></div>
<div style="position:absolute;left:816px;top:296px;width:128px;height:46px;border-radius:12px;background:#1f1d1a"></div>
<div style="position:absolute;left:868px;top:306px;width:24px;height:24px;border-radius:50%;background:#3a3630;border:2px solid #15130f"></div>
<div style="position:absolute;left:600px;top:344px;width:560px;height:16px;border-radius:4px;background:#352e27"></div>
<div style="position:absolute;left:80px;top:90px;font-size:28px;font-weight:600;letter-spacing:.01em">Morrow</div>
<div style="position:absolute;left:80px;top:210px;width:620px;font-size:62px;line-height:1.08;font-weight:500">Wake to thirty minutes of sunrise. One dial, no app.</div>
<div style="position:absolute;left:80px;top:470px;width:600px;font-family:Carlito,Calibri,'Segoe UI',sans-serif;font-size:28px;color:#bfb4a0">A bedside lamp. Reserve one from the first batch with a refundable $20 deposit.</div>
</body></html>`;
p=await b.newPage({viewport:{width:1200,height:630}});
await p.setContent(og); await p.screenshot({path:dir+'/og.png'});
await b.close();
