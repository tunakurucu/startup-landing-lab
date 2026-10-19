import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>JSON.parse(readFileSync(new URL('../'+p,import.meta.url),'utf8'));
const candidates=read('research/candidates.json');
const sites=read('research/sites.json');
test('YC identity collisions cannot masquerade as Ramp or Tally verification',()=>{assert.equal(candidates.find(c=>c.name==='Ramp')?.yc_status,undefined);assert.equal(candidates.find(c=>c.name==='Tally')?.yc_status,undefined);assert(candidates.filter(c=>c.yc_status==='verified-yc').every(c=>c.verification_url&&c.batch))});
test('only observed references appear in the gallery source',()=>{assert(sites.every(s=>candidates.find(c=>c.id===s.id)?.audit_id===s.id));// A phone claim must be backed: a desktop+phone audit needs a phone observation and phone measurements;
  // every other record says its phone view was not inspected, or was measured only.
  for(const s of sites){
    if(s.coverage==='desktop-mobile-audit'){assert(s.observations.mobile,`${s.id}: phone observation missing`);assert(s.measurements?.mobile,`${s.id}: phone measurements missing`);}
    else assert(s.viewports.mobile==='not inspected'||/measured.*not visually inspected/.test(s.viewports.mobile),`${s.id}: phone view claimed without a phone audit`);
  }assert(sites.every(s=>s.limitations.length>0))});
test('the research includes recent cohorts without relabelling older companies',()=>{assert.equal(candidates.find(c=>c.id==='onlook').batch,'W25');assert.equal(candidates.find(c=>c.id==='lightsprint').batch,'P26');assert.equal(candidates.find(c=>c.id==='firecrawl').batch,'S22')});
