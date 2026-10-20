import {test,expect} from '@playwright/test';
import {spawnSync} from 'node:child_process';

// The site must pass the skill's own 79 automatic checks (v0.6). Block failures are never allowed.
// Warnings are allowed only where docs/demo-decisions.md records the product reason ("Gate warnings we kept");
// KEPT lists exactly those per route, so a new warning fails and a fixed one must be removed here too.
const GALLERY=['TY-10'];                  // four faces, each with a role: display, text, data, accent
const INDEX=[...GALLERY,'HR-02','ST-03']; // index pages: choosing a record or an experiment is the action, no hero button
const KEPT:Record<string,string[]>={
  '/':[...GALLERY,'MB-10'],
  '/references':[...INDEX,'CP-11','MB-10'],
  '/skill':[...GALLERY,'CP-11'],
  '/demos':[...INDEX,'CP-11'],
  '/evals':[...GALLERY,'MB-10'],
  '/reference/resend':[...GALLERY,'CP-11'],
  '/demo/relayline':['TY-10','ST-06'],
  '/demo/sidequest':['TY-10','TT-03','MO-06'],
  '/demo/ledger':[],
};
// PF-05 is a lab timing (median LCP of three throttled runs), so it is budgeted rather than matched exactly:
// every page must meet the checker's own 2.5 s, except a record page, which paints its frame first and the
// record catalog chunk second (about 3 s; the reason is recorded with the other kept warnings).
const LCP_BUDGET_MS:Record<string,number>={'/reference/resend':4000};
const routes=Object.keys(KEPT);
for(const route of routes){
  test(`skill gate: ${route}`,async()=>{
    test.setTimeout(150000);
    // spawnSync keeps the checker's JSON when it exits 1 (block failures), so the assertion can name the failing check.
    const run=spawnSync(process.execPath,['skills/startup-landing-design/scripts/check-page.mjs',`http://127.0.0.1:4173/startup-landing-lab/#${route}`],{encoding:'utf8',maxBuffer:32*1024*1024});
    const result=JSON.parse(run.stdout||'{}');
    const failed=(result.checks||[]).filter((c:{pass:boolean,severity:string})=>c.pass===false&&c.severity==='block');
    expect(failed,`block failures on ${route}: ${JSON.stringify(failed)}`).toEqual([]);
    expect(result.checks).toHaveLength(79);
    expect(result.failures).toEqual([]);
    expect(result.not_run).toEqual([]);
    expect(result.warnings.filter((w:string)=>w!=='PF-05').sort()).toEqual([...KEPT[route]].sort());
    const lcp=result.checks.find((c:{id:string})=>c.id==='PF-05');
    expect(lcp.detail.lab_lcp_ms,`lab LCP on ${route}: ${JSON.stringify(lcp.detail)}`).toBeLessThanOrEqual(LCP_BUDGET_MS[route]??2500);
  });
}
