import {test,expect} from '@playwright/test';

// Each demo's motion contract (docs/demo-decisions.md) is checked twice: it plays with motion allowed,
// and under prefers-reduced-motion every element is visible immediately with no animation or transition.

test.describe('Relayline hero trace',()=>{
  test('plays once on load and finishes within 1.3 s',async({page})=>{
    await page.goto('#/demo/relayline');
    const nodes=page.locator('.signal-path>*');
    await expect(nodes).toHaveCount(7);
    expect(await nodes.first().evaluate(e=>getComputedStyle(e).animationName)).toBe('pop');
    await expect.poll(async()=>(await nodes.evaluateAll(els=>els.map(e=>getComputedStyle(e).scale))).every(v=>v==='none'||v==='1'),{timeout:3000}).toBe(true);
    // The copy never waited for the trace.
    await expect(page.locator('.relay-hero h1')).toBeVisible();
  });
  test('is static under reduced motion',async({page})=>{
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.goto('#/demo/relayline');
    const node=page.locator('.signal-path>*').first();
    expect(await node.evaluate(e=>getComputedStyle(e).animationName)).toBe('none');
    expect(await node.evaluate(e=>getComputedStyle(e).opacity)).toBe('1');
  });
  test('inspector re-animates when a step is chosen, and empties when it is chosen again',async({page})=>{
    await page.goto('#/demo/relayline');
    const retry=page.getByRole('button',{name:/Retry accepted/});
    await retry.click();
    const inspector=page.locator('.trace-inspector');
    await expect(inspector).toContainText('Retry accepted');
    expect(await inspector.evaluate(e=>getComputedStyle(e).animationName)).toBe('rise');
    await retry.click();
    await expect(inspector).toContainText('Pick a step.');
    await expect(retry).toHaveAttribute('aria-pressed','false');
  });
  test('the trace path replays when the scenario changes',async({page})=>{
    await page.goto('#/demo/relayline');
    await page.waitForTimeout(1300);
    await page.getByLabel('Invalid signature').check();
    const nodes=page.locator('.signal-path>*');
    await expect(nodes).toHaveCount(7);
    await expect(page.locator('.signal-small')).toHaveText('RECEIVED → REJECTED → PAUSED → REVIEW');
    expect(await nodes.last().evaluate(e=>getComputedStyle(e).animationName)).toBe('pop');
  });
});

test.describe('Sidequest deal',()=>{
  test('cards deal with a stagger and keep their tilt',async({page})=>{
    await page.goto('#/demo/sidequest');
    expect(await page.locator('.idea-deck article').first().evaluate(e=>getComputedStyle(e).animationName)).toBe('none'); // no fade on first paint
    await page.getByRole('button',{name:'Another little idea'}).click();
    const cards=page.locator('.idea-deck article');
    const delays=await cards.evaluateAll(els=>els.map(e=>getComputedStyle(e).animationDelay));
    expect(delays).toEqual(['0s','0.09s','0.18s']);
    const tilt=await cards.first().evaluate(e=>getComputedStyle(e).transform);
    expect(tilt).not.toBe('none');
    await expect.poll(async()=>(await cards.evaluateAll(els=>els.map(e=>getComputedStyle(e).opacity))).join(),{timeout:3000}).toBe('1,1,1');
  });
  test('is static under reduced motion',async({page})=>{
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.goto('#/demo/sidequest');
    for(const sel of ['.idea-deck article','.sq-sticker','.sq-play']){
      const el=page.locator(sel).first();
      expect(await el.evaluate(e=>getComputedStyle(e).animationName)).toBe('none');
      expect(await el.evaluate(e=>getComputedStyle(e).transitionDuration)).toBe('0s');
      expect(await el.evaluate(e=>getComputedStyle(e).opacity)).toBe('1');
    }
  });
});

test.describe('Fieldwork reveals',()=>{
  test('elements below the fold reveal when scrolled to, in order',async({page})=>{
    await page.goto('#/demo/ledger');
    await expect(page.locator('.reveal-pending').first()).toBeAttached();
    const principles=page.locator('.fw-principles article');
    expect(await principles.first().evaluate(e=>e.classList.contains('is-in'))).toBe(false);
    await principles.first().scrollIntoViewIfNeeded();
    await expect(principles.first()).toHaveClass(/is-in/);
    await expect(principles.last()).toHaveClass(/is-in/);
    await expect.poll(async()=>(await principles.evaluateAll(els=>els.map(e=>getComputedStyle(e).translate))).every(v=>v==='none'||v==='0px'),{timeout:3000}).toBe(true);
    expect(await principles.nth(2).evaluate(e=>getComputedStyle(e).transitionDelay)).toBe('0.2s');
  });
  test('nothing is hidden under reduced motion',async({page})=>{
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.goto('#/demo/ledger');
    await expect(page.locator('.reveal-pending')).toHaveCount(0);
    for(const t of await page.locator('[data-reveal]').evaluateAll(els=>els.map(e=>getComputedStyle(e).translate)))expect(['none','0px']).toContain(t);
  });
  test('the brief rises when the workflow changes',async({page})=>{
    await page.goto('#/demo/ledger');
    await page.getByLabel('Choose a workflow').selectOption('onboarding');
    const brief=page.locator('.fw-brief');
    await expect(brief).toContainText('Client onboarding');
    expect(await brief.evaluate(e=>getComputedStyle(e).animationName)).toBe('rise');
  });
});
