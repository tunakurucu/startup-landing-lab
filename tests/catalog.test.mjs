import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>JSON.parse(readFileSync(new URL('../'+p,import.meta.url),'utf8'));
const candidates=read('research/candidates.json');
const sites=read('research/sites.json');
test('YC identity collisions cannot masquerade as Ramp or Tally verification',()=>{for(const n of ['Ramp','Tally'])assert.notEqual(candidates.find(c=>c.name===n)?.yc_status,'verified-yc',`${n} must not be labelled a verified YC company`);assert(candidates.filter(c=>c.yc_status==='verified-yc').every(c=>c.verification_url&&c.batch))});
test('only observed references appear in the gallery source',()=>{assert(sites.every(s=>candidates.find(c=>c.id===s.id)?.audit_id===s.id));// A phone claim must be backed: a desktop+phone audit needs a phone observation and phone measurements;
  // every other record says its phone view was not inspected, or was measured only.
  for(const s of sites){
    if(s.coverage==='desktop-mobile-audit'){assert(s.observations.mobile,`${s.id}: phone observation missing`);assert(s.measurements?.mobile,`${s.id}: phone measurements missing`);}
    else assert(s.viewports.mobile==='not inspected'||/measured.*not visually inspected/.test(s.viewports.mobile),`${s.id}: phone view claimed without a phone audit`);
  }assert(sites.every(s=>s.limitations.length>0))});
test('the research includes recent cohorts without relabelling older companies',()=>{assert.equal(candidates.find(c=>c.id==='onlook').batch,'W25');assert.equal(candidates.find(c=>c.id==='lightsprint').batch,'P26');assert.equal(candidates.find(c=>c.id==='firecrawl').batch,'S22')});

const checks=read('skills/startup-landing-design/assets/checks.json');
const text=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
test('the v1.0 catalogue has 116 checks in the agreed sections and verify split',()=>{
  assert.equal(checks.length,116);assert.equal(new Set(checks.map(c=>c.id)).size,116);
  const by=k=>checks.reduce((m,c)=>(m[c[k]]=(m[c[k]]||0)+1,m),{});
  assert.deepEqual(by('verify'),{shot:13,record:15,auto:85,code:3});
  const sections={};for(const c of checks){const s=c.id.slice(0,2);sections[s]=(sections[s]||0)+1;}
  assert.deepEqual(sections,{PS:9,CP:13,HR:10,ST:6,TY:11,LY:9,CO:4,TT:6,MO:8,MB:11,AX:13,PF:7,HP:5,PR:4});
  for(const c of checks){assert.match(c.id,/^[A-Z]{2}-\d{2}$/);assert.ok(['block','warn'].includes(c.severity),c.id);assert.ok(c.credit.length>0,c.id);}
  // spot checks against the spec
  const get=id=>checks.find(c=>c.id===id);
  assert.equal(get('MO-05').severity,'block');assert.equal(get('MB-07').verify,'auto');assert.equal(get('HR-07').severity,'block');assert.equal(get('MB-02').severity,'warn');assert.equal(get('AX-11').verify,'auto');
  assert.equal(get('CP-04').verify,'record');assert.equal(get('ST-04').verify,'record');assert.deepEqual(get('PF-07').credit,['UI','CHN','VWG']);
  assert.equal(checks.find(c=>c.id==='TT-07'),undefined);assert.equal(checks.find(c=>c.id==='PS-10'),undefined);
});
test('every credit key is defined in the generated checklist',()=>{
  const md=text('skills/startup-landing-design/references/checklist.md');
  const defined=new Set([...md.match(/^Credits: .*$/m)[0].matchAll(/\*\*([A-Z0-9]+)\*\*/g)].map(m=>m[1]));
  for(const c of checks)for(const k of c.credit)assert.ok(defined.has(k),`${c.id}: credit ${k} is not defined`);
  for(const k of ['NNG','WCAG','WEB','APL','JS','HD','AD','CH','PG','YC','37S','SWC','UB','WPAI','CHN','AUT','UI','EM','CXL','SO','HS','HUB','BAY','GOOG','FTC','MATH'])assert.ok(defined.has(k),k);
  assert.match(md,/\*\*85 auto\*\*/);
});
test('check-page.mjs decides every automatic check, and only those',()=>{
  const src=text('skills/startup-landing-design/scripts/check-page.mjs');
  const used=new Set([...src.matchAll(/\b(?:check|notRun)\('([A-Z]{2}-\d{2})'/g)].map(m=>m[1]));
  const auto=checks.filter(c=>c.verify==='auto').map(c=>c.id);
  for(const id of auto)assert.ok(used.has(id),`${id} is never decided by check-page.mjs`);
  for(const id of used)assert.ok(auto.includes(id),`check-page.mjs decides ${id}, which is not an automatic check`);
});
test('the decision-record template lists exactly the checks that need eyes',()=>{
  const rec=text('skills/startup-landing-design/assets/decision-record.md');
  const table=rec.slice(rec.indexOf('<!-- checklist:start -->'),rec.indexOf('<!-- checklist:end -->'));
  const ids=[...table.matchAll(/^\| ([A-Z]{2}-\d{2}) \|/gm)].map(m=>m[1]);
  assert.deepEqual(ids,checks.filter(c=>c.verify!=='auto').map(c=>c.id));
  assert.match(rec,/The other 85 checks run automatically/);
});
