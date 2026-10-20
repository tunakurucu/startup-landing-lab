import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {mkdirSync,writeFileSync,readFileSync} from 'node:fs';
const SITES=JSON.parse(readFileSync('research/sites.json','utf8')) as {yc_status:string;archetype:string;tier?:string}[];
// The "Company evidence" filter puts each record in one class: reference-tier records are "Reference tier" even when they are also verified YC.
const N=SITES.length, YC=SITES.filter(s=>s.yc_status==='verified-yc'&&s.tier!=='reference').length, WT=SITES.filter(s=>s.archetype==='workflow-theater').length;
// Twelve committed screenshots: six routes at desktop and phone width. Every route is still tested at all three sizes.
const SHOT_ROUTES=new Set(['/','/references','/skill','/demo/relayline','/demo/sidequest','/demo/ledger']);
const routes=['/','/references','/skill','/demos','/evals','/reference/resend','/reference/lightsprint','/reference/palette','/reference/sherpa','/reference/nori','/reference/cyclon','/reference/airweave','/reference/normal','/reference/answerthis','/reference/pingo','/reference/cactus','/reference/interfere','/reference/toothy','/reference/canary','/reference/snag','/reference/elyra','/demo/relayline','/demo/sidequest','/demo/ledger'];
for(const size of [{width:1440,height:900},{width:768,height:1024},{width:390,height:844}]){
 test.describe(`${size.width}px`,()=>{
  test.use({viewport:size});
  for(const route of routes){test(`${route} renders without overflow and has accessible structure`,async({page})=>{
   const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('#'+route);await expect(page.locator('h1')).toHaveCount(1);
   await expect(page.locator('footer')).toBeVisible();
   await page.evaluate(()=>document.fonts.ready); // measure after the self-hosted faces have swapped in
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
   expect(errors).toEqual([]);
   const a11y=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
   expect(a11y.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))).toEqual([]);
   if(SHOT_ROUTES.has(route)&&(size.width===1440||size.width===390)){mkdirSync('docs/screenshots',{recursive:true});const slug=route==='/'?'home':route.slice(1).replaceAll('/','-');await page.screenshot({path:`docs/screenshots/${slug}-${size.width}.png`,fullPage:true});}
  })}
 })
}
test('reference filters combine and reset, including empty state',async({page})=>{await page.goto('#/references');await expect(page.getByRole('status')).toHaveText(`${N} of ${N} records`);await page.getByLabel('Company evidence').selectOption('verified-yc');await expect(page.getByRole('status')).toHaveText(`${YC} of ${N} records`);await page.getByLabel('Find a reference').fill('nothing matches');await expect(page.getByRole('heading',{name:'No matching records.'})).toBeVisible();await page.getByRole('button',{name:'Reset filters'}).click();await expect(page.getByRole('status')).toHaveText(`${N} of ${N} records`);await page.getByLabel('Design family').selectOption('workflow-theater');await expect(page.getByRole('status')).toHaveText(`${WT} of ${N} records`)});
test('mobile navigation and reference route work',async({page})=>{await page.setViewportSize({width:390,height:844});await page.goto('#/');await page.getByRole('button',{name:'Menu +'}).click();await page.getByRole('link',{name:'Field guide',exact:true}).click();await expect(page).toHaveURL(/#\/references$/);await page.getByRole('link',{name:'Resend ↗',exact:true}).click();await expect(page.getByRole('heading',{level:1})).toContainText('Resend');await expect(page.getByText('Where evidence ends.',{exact:true})).toBeVisible()});
test('trace explorer changes state and downloads honest data',async({page})=>{await page.goto('#/demo/relayline');await page.getByRole('button',{name:'Try a trace'}).click();await page.getByLabel('Invalid signature').check();await page.getByRole('button',{name:/Action.*Review configuration/}).click();await expect(page.getByRole('status')).toContainText('Correct credentials');const dl=page.waitForEvent('download');await page.getByRole('button',{name:'Download sample trace'}).click();expect((await dl).suggestedFilename()).toBe('relayline-example-trace.json')});
test('Sidequest deals a new brief and exports it',async({page})=>{await page.goto('#/demo/sidequest');await expect(page.getByRole('heading',{name:'A tiny moon café'})).toBeVisible();await page.getByRole('button',{name:'Another little idea'}).click();await expect(page.getByRole('heading',{name:'A record shop for ghosts'})).toBeVisible();const dl=page.waitForEvent('download');await page.getByRole('button',{name:'Keep this brief'}).click();expect((await dl).suggestedFilename()).toBe('my-sidequest.txt')});
test('Fieldwork switches workflow and compares handoffs',async({page})=>{await page.goto('#/demo/ledger');await page.getByLabel('Choose a workflow').selectOption('onboarding');await expect(page.getByRole('heading',{name:'Client onboarding'})).toBeVisible();await expect(page.getByText('Alex · Operations',{exact:true})).toBeVisible();await page.getByLabel('Show the structured handoff').uncheck();await expect(page.getByText('Owner: unclear',{exact:false})).toBeVisible();await page.getByLabel('Show the structured handoff').check();const dl=page.waitForEvent('download');await page.getByRole('button',{name:'Download the structured brief'}).click();expect((await dl).suggestedFilename()).toBe('fieldwork-sample-handoff.txt')});
test('reduced motion leaves content visible and removes transitions',async({page})=>{await page.emulateMedia({reducedMotion:'reduce'});await page.goto('#/demo/sidequest');await expect(page.locator('h1')).toBeVisible();expect(await page.locator('.sq-play').evaluate(e=>getComputedStyle(e).transitionDuration)).toBe('0s');});
test('all navigation destinations are meaningful',async({page})=>{await page.goto('#/');const hrefs=await page.locator('a').evaluateAll(as=>as.map(a=>a.getAttribute('href')));expect(hrefs.filter(h=>!h||h==='#')).toEqual([]);writeFileSync('test-results/link-inventory.json',JSON.stringify(hrefs,null,2));});
// The evals page must show what the committed run files say: recompute every table cell and criterion sum from the grades and the A/B key.
test('evals page derives its results from the run files and shows the comparisons',async({page})=>{
  type Scores=Record<string,number>;type Grade={A:{scores:Scores};B:{scores:Scores};preference:'A'|'B';confidence:string};
  const total=(s:Scores)=>Object.values(s).reduce((a,b)=>a+b,0);
  const rows=(dir:string)=>Object.entries(JSON.parse(readFileSync(`evals/runs/${dir}/mapping.json`,'utf8')) as Record<string,Record<'A'|'B',string>>).map(([brief,key])=>{
    const g=JSON.parse(readFileSync(`evals/runs/${dir}/${brief}-grade.json`,'utf8')) as Grade;const w=key.A==='without'?'B':'A',wo=w==='A'?'B':'A';
    return {preferred:g.preference===w?'With skill':'Without',with:g[w].scores,without:g[wo].scores,confidence:g.confidence};
  });
  const rounds=['2026-10-19-ab-round1','2026-10-19-ab-round2'].map(rows);
  await page.goto('#/evals');
  await expect(page.getByRole('heading',{level:1})).toContainText('Does it work?');
  for(const [i,round] of rounds.entries()){
    const body=page.getByRole('table',{name:`Round ${i+1}: blind preference and totals out of 80`}).locator('tbody tr');
    await expect(body).toHaveCount(round.length);
    for(const [j,r] of round.entries())await expect(body.nth(j).locator('td')).toHaveText([r.preferred,String(total(r.with)),String(total(r.without)),new RegExp(`^${r.confidence}$`,'i')]);
  }
  const last=rounds[1];
  for(const c of Object.keys(last[0].with)){
    const item=page.locator('.criteria li').filter({hasText:new RegExp(`^${c[0].toUpperCase()+c.slice(1)}, difference`)});
    await expect(item.locator('.bar-value')).toHaveText([String(last.reduce((n,r)=>n+r.with[c],0)),String(last.reduce((n,r)=>n+r.without[c],0))]);
  }
  const imgs=page.locator('main img');
  await expect(imgs).toHaveCount(rounds.flat().length);
  for(const img of await imgs.all()){
    await expect(img).toHaveAttribute('loading','lazy');await expect(img).toHaveAttribute('width','3064');await expect(img).toHaveAttribute('height','780');
    await expect(img).toHaveAttribute('alt',/Left, .*without the skill.*Right, .*skill/);
    await img.scrollIntoViewIfNeeded();
    await expect.poll(()=>img.evaluate(i=>(i as HTMLImageElement).complete&&(i as HTMLImageElement).naturalWidth>0)).toBe(true);
  }
  for(const href of await page.locator('figcaption a').evaluateAll(as=>as.map(a=>(a as HTMLAnchorElement).href))){
    const res=await page.request.get(href);expect(res.ok()).toBeTruthy();expect((await res.body()).length).toBeLessThan(300_000);
  }
  await expect(page.getByRole('link',{name:'Read the full run log ↗'})).toHaveAttribute('href','https://github.com/tunakurucu/startup-landing-lab/blob/main/evals/run.md');
  for(const dir of ['2026-10-19-ab-round1','2026-10-19-ab-round2'])await expect(page.locator(`a[href="https://github.com/tunakurucu/startup-landing-lab/tree/main/evals/runs/${dir}"]`)).toHaveCount(2);
});
test('evals page is reachable from the navigation and the home page',async({page})=>{
  await page.goto('#/');
  await page.getByRole('link',{name:'Does it work? Read the blind A/B results ↗'}).click();
  await expect(page).toHaveURL(/#\/evals$/);
  await expect(page).toHaveTitle('Evals · Startup Landing Lab');
  await expect(page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'Evals',exact:true})).toHaveAttribute('aria-current','page');
  await page.setViewportSize({width:390,height:844});await page.goto('#/skill');
  await page.getByRole('button',{name:'Menu +'}).click();await page.getByRole('link',{name:'Evals',exact:true}).click();
  await expect(page.getByRole('heading',{level:1})).toContainText('Does it work?');
});
