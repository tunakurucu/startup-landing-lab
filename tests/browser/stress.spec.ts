import {test,expect} from '@playwright/test';

// Narrow-screen stress: 320 px wide (iPhone SE class) must not overflow or hide the primary control on any demo or the home page.
const routes=['/','/demo/relayline','/demo/sidequest','/demo/ledger'];
for(const route of routes){
  test(`320px: ${route} has no horizontal overflow and a reachable primary action`,async({page})=>{
    await page.setViewportSize({width:320,height:640});
    await page.goto('#'+route);
    await expect(page.locator('h1')).toBeVisible();
    await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(700); // let fonts swap and entrance motion settle before measuring
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
    // Elements that run past the right edge are only a problem when no ancestor clips or scrolls them.
    const wide=await page.evaluate(()=>{const clipped=(e:Element|null)=>{for(let a=e;a&&a!==document.body;a=a.parentElement){const o=getComputedStyle(a).overflowX;if(o==='hidden'||o==='clip'||o==='auto'||o==='scroll')return true}return false};
      return [...document.querySelectorAll('main *')].filter(e=>e.getBoundingClientRect().right>innerWidth+1&&!clipped(e)).slice(0,5).map(e=>e.className||e.tagName)});
    expect(wide).toEqual([]);
    const action=page.locator('main button, main a[href]').first();
    await expect(action).toBeVisible();
  });
}
test('200% zoom equivalent (720px, 2x scale) keeps the demos readable without overflow',async({browser})=>{
  const context=await browser.newContext({viewport:{width:720,height:450},deviceScaleFactor:2});
  const page=await context.newPage();
  for(const route of routes){await page.goto('#'+route);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();}
  await context.close();
});
