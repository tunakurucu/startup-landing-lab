// Builds ../index.html from the page template and the drawings. Run: node src/build.mjs
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import * as D from './drawings.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const UPLOAD = 'https://staplepress.example/start';

const compare = [
  ['Smallest run', '25 copies', 'Any number', 'Usually 1,000 copies'],
  ['Largest run', '500 copies', 'Whatever the day allows', 'No real limit'],
  ['A proof before binding', 'A photo within two working days', 'Only if you wait at the counter', 'No'],
  ['Who prints it', 'The people who answer your email', 'Whoever is on shift', 'A plant you never see'],
  ['Paper', 'Uncoated, chosen for zines', 'Office paper', 'Coated, unless you pay more'],
  ['Binding', 'Folded, two staples, trimmed', 'Often a staple in the corner', 'Folded, two staples, trimmed'],
  ['Covers to the edge', 'Not yet', 'Rarely', 'Yes'],
  ['50 copies, 24 pages, A5', '$2.10 a copy', 'Depends who is on shift', 'Not offered'],
];
const cols = ['Staplepress', 'A copy shop', 'A big online printer'];

const faq = [
  ['How do I set up my PDF?', `<p>Export single pages in reading order at the finished size: 148 × 210&nbsp;mm for A5. Embed your fonts and keep text at least 5&nbsp;mm inside the edge. For black-ink jobs, use plain black rather than a four-colour black.</p><p>If your page count is not a multiple of four, we add blank pages at the back and show them on the proof.</p>`],
  ['Can you print to the edge of the cover?', `<p>Not yet. Every page keeps an unprinted border of at least 5&nbsp;mm, covers included. If your artwork runs to the edge, the proof shows exactly how it prints with the border, before anything is bound.</p><figure class="bleed">${D.bleed()}<figcaption><span>Your PDF</span><span>How it prints</span></figcaption></figure>`],
  ['What if the proof is wrong?', `<p>Say so on your job page. If the fault is ours (a streak, a skewed page, the wrong paper), we fix it and post a new photo. If you want to change the file, upload a new PDF and we proof it again, which takes another two working days.</p>`],
  ['How long does a whole run take?', `<p>Two working days to the proof photo. Once you say yes, most runs are printed, folded, stapled and posted within five working days.</p>`],
  ['Do you print colour or other sizes?', `<p>Yes. A5 in black ink is our standard. Colour, A4 and larger runs cost more; the calculator above shows the price as soon as you choose them.</p>`],
  ['Who have you printed for?', `<p>About 120 artists and small-press publishers since last year. We don’t name them or show their work without their permission, so there is no client list here. Ask us and we will tell you what we have printed that is like yours.</p>`],
];

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Staplepress: small-run zine printing, proofed before binding</title>
<meta name="description" content="Staplepress prints 25 to 500 copies of zines and art books for independent artists, and posts a photo of your proof off the press before anything is bound. From $2.10 a copy.">
<link rel="stylesheet" href="styles.css">
<script>document.documentElement.classList.add('js')</script>
</head>
<body>
${D.symbols()}
<a class="skip" href="#main">Skip to the page</a>

<header class="hero grid" id="top">
  <a class="wordmark" href="#top" aria-label="Staplepress, back to top">Staplepress</a>
  <nav class="nav" aria-label="Sections">
    <a class="link" href="#proofs">Proofs</a>
    <a class="link" href="#process">Process</a>
    <a class="link" href="#prices">Prices</a>
    <a class="link" href="#questions">Questions</a>
  </nav>
  <details class="menu">
    <summary><span class="menu__label">Menu</span><span class="menu__label menu__label--close">Close</span></summary>
    <nav class="menu__sheet" aria-label="Sections">
      <a href="#proofs">Proofs</a><a href="#process">Process</a><a href="#prices">Prices</a><a href="#questions">Questions</a>
      <a class="button" href="${UPLOAD}">Upload your PDF</a>
    </nav>
  </details>
  <h1 class="hero__title display lines">
    <span class="line"><span data-line style="--i:0">Small-run</span></span>
    <span class="line"><span data-line style="--i:1">zines</span></span>
  </h1>
  <div class="hero__talk">
    <p class="lead" data-load style="--d:420ms">We print 25 to 500 copies of your zine or art book, and post a photo of the proof straight off our press before anything is bound.</p>
    <a class="button" data-load style="--d:500ms" href="${UPLOAD}">Upload your PDF</a>
  </div>
  <figure class="hero__pic" data-open>
    <div class="hero__frame"><div class="drift">${D.hero()}</div></div>
    <div class="figure-block" data-load style="--d:620ms">
      <p class="figure-block__num">$2.10</p>
      <p>a copy, for 50 copies of a 24-page A5 zine in black ink on uncoated paper.</p>
    </div>
  </figure>
  <p class="hero__caption">A proof sheet for a 24-page A5 zine: the back and front cover, printed flat and not yet folded. This is what you see before we bind anything.</p>
</header>

<main id="main">
<section class="proofs" id="proofs" aria-labelledby="proofs-h">
  <article class="chapter" style="--field:#1d2408;--field-ink:#ecebe7">
    <div class="chapter__field" aria-hidden="true"></div>
    <h2 class="chapter__title" id="proofs-h">Your proof, photographed</h2>
    <figure class="chapter__pic">${D.fanned()}</figure>
    <p class="chapter__text">Within two working days we print one copy’s sheets and post a photo of them to your job page, laid flat, before anything is folded.</p>
    <a class="chapter__link link-plain" href="#process">How a job goes</a>
  </article>
  <article class="chapter" style="--field:#38450f;--field-ink:#ecebe7">
    <div class="chapter__field" aria-hidden="true"></div>
    <h3 class="chapter__title">Black ink, uncoated paper</h3>
    <figure class="chapter__pic">${D.loupe()}</figure>
    <p class="chapter__text">Our standard paper is matt and slightly warm, like a good sketchbook. Solid blacks sit flat, and greys print as a fine dot you can see under a loupe.</p>
    <a class="chapter__link link-plain" href="#questions">Paper and file questions</a>
  </article>
  <article class="chapter" style="--field:#cfcdc4;--field-ink:#38450f">
    <div class="chapter__field" aria-hidden="true"></div>
    <h3 class="chapter__title">Two staples in the spine</h3>
    <figure class="chapter__pic">${D.stapled()}</figure>
    <p class="chapter__text">Once you say yes, we print the run, fold every copy, stitch it with two staples, trim the edge and post the box to you.</p>
    <a class="chapter__link link-plain" href="#prices">See the prices</a>
  </article>
</section>

<section class="process grid" id="process" aria-labelledby="process-h">
  <h2 class="process__title head" id="process-h" data-reveal>How a job goes</h2>
  <ol class="stairs">
    <li data-reveal style="--i:0"><p class="stairs__line">First, you upload the PDF.</p><p>Single pages in reading order, at the finished size. We check the page count, fonts and margins the day it arrives.</p></li>
    <li data-reveal style="--i:1"><p class="stairs__line">Then we print a proof.</p><p>One full copy’s sheets, on the same paper and ink your run will use.</p></li>
    <li data-reveal style="--i:2"><p class="stairs__line">You see it in two days.</p><p>A photo straight off the press goes up on your job page. Ask for a change, or say yes.</p></li>
    <li data-reveal style="--i:3"><p class="stairs__line">Only then do we bind.</p><p>We print the run, fold, staple, trim and post it. Nothing is bound before you have seen it.</p></li>
  </ol>
</section>

<section class="prices" id="prices" aria-labelledby="prices-h">
  <div class="plan plan--usual">
    <h2 class="plan__name head" id="prices-h" data-reveal>Prices</h2>
    <p class="plan__for" data-reveal style="--i:1">The usual zine: 50 copies, 24 pages, A5, black ink on uncoated paper.</p>
    <p class="plan__inc" data-reveal style="--i:2">Includes the proof photo, folding, two staples and trimming. Colour, other sizes and larger runs cost more; the calculator prices yours.</p>
    <div class="plan__foot">
      <p class="plan__price"><span class="display nums">$2.10</span><span>a copy, $105 for the run</span></p>
      <a class="button button--inverse" href="${UPLOAD}">Upload your PDF</a>
    </div>
  </div>
  <div class="plan plan--yours">
    <h3 class="plan__name head" data-reveal>Price your run</h3>
    <p class="plan__for" data-reveal style="--i:1">Change the run to see the price, the sheets we print for each copy, and the day your proof goes up.</p>
    <div class="yours">
    <form class="ticket" id="ticket" onsubmit="return false">
      <div class="ticket__row">
        <label for="copies">Copies</label>
        <input id="copies" name="copies" type="range" min="25" max="500" step="25" value="100">
        <output id="copies-out" for="copies" class="nums">100</output>
      </div>
      <div class="ticket__row">
        <span id="pages-l">Pages</span>
        <div class="stepper" role="group" aria-labelledby="pages-l">
          <button type="button" data-step="-4" aria-label="Four fewer pages">−</button>
          <output id="pages-out" class="nums" aria-live="polite">32</output>
          <button type="button" data-step="4" aria-label="Four more pages">+</button>
        </div>
      </div>
      <fieldset class="ticket__row">
        <legend>Ink</legend>
        <div class="choice"><label><input type="radio" name="ink" value="black" checked><span>Black</span></label><label><input type="radio" name="ink" value="colour"><span>Colour</span></label></div>
      </fieldset>
      <fieldset class="ticket__row">
        <legend>Size</legend>
        <div class="choice"><label><input type="radio" name="size" value="A5" checked><span>A5</span></label><label><input type="radio" name="size" value="A4"><span>A4</span></label></div>
      </fieldset>
    </form>
      <div class="sheets" aria-live="polite">
        <p id="q-sheets">8 sheets a copy (A4, printed both sides), nested, folded and stapled. The outer side of each sheet carries these pages:</p>
        <ul class="imposition" id="q-imp" aria-label="How your pages fall on each sheet">${Array.from({ length: 8 }, (_, i) => `<li><span>${32 - 2 * i}</span><span>${1 + 2 * i}</span></li>`).join('')}</ul>
      </div>
    </div>
    <p class="quote__date" data-proof-date="Upload today and your proof photo is up on your job page">Upload today and your proof photo is up on your job page within two working days.</p>
    <div class="quote" aria-live="polite">
      <p class="quote__price"><span class="display nums" id="q-each">$2.54</span><span id="q-total">a copy, $254.00 for 100</span></p>
      <a class="button" href="${UPLOAD}">Upload your PDF</a>
    </div>
  </div>
</section>

<section class="compare grid" id="compare" aria-labelledby="compare-h">
  <h2 class="compare__title head" id="compare-h" data-reveal>Against the alternatives</h2>
  <table class="table" data-reveal>
    <thead><tr><th scope="col"><span class="sr-only">What you get</span></th>${cols.map((c, i) => `<th scope="col"${i === 0 ? ' class="is-us"' : ''}>${c}</th>`).join('')}</tr></thead>
    <tbody>
      ${compare.map(([k, ...v]) => `<tr><th scope="row">${k}</th>${v.map((x, i) => `<td data-col="${cols[i]}"${i === 0 ? ' class="is-us"' : ''}>${x}</td>`).join('')}</tr>`).join('\n      ')}
    </tbody>
  </table>
</section>

<section class="questions" id="questions" aria-labelledby="questions-h">
  <div class="band band--head"><h2 class="display" id="questions-h">Questions</h2></div>
  ${faq.map(([q, a], i) => `<div class="band${i % 2 ? ' band--alt' : ''} grid" data-group><h3 class="band__q" data-part>${q}</h3><div class="band__a" data-part style="--i:1">${a}</div></div>`).join('\n  ')}
</section>

<section class="close" id="upload" aria-labelledby="close-h">
  <h2 class="close__title display" id="close-h" data-slide>See it before <br>we staple it</h2>
  <div class="close__foot">
    <p class="close__text" data-slide style="--i:1" data-proof-date="Upload a print-ready PDF today and your proof photo is up">Upload a print-ready PDF today and your proof photo is up within two working days.</p>
    <a class="button button--inverse" href="${UPLOAD}" data-slide style="--i:2">Upload your PDF</a>
  </div>
</section>
</main>

<footer class="footer">
  <p class="footer__name" aria-hidden="true"><span id="fit">Staplepress</span></p>
  <div class="footer__row grid">
    <ul class="footer__reach">
      <li><a class="link" href="mailto:hello@staplepress.example?subject=A%20zine%20to%20print">hello@staplepress.example</a></li>
      <li><a class="link" href="${UPLOAD}">staplepress.example/start</a></li>
    </ul>
    <ul class="footer__links">
      <li><a class="link" href="#proofs">Proofs</a></li>
      <li><a class="link" href="#process">Process</a></li>
      <li><a class="link" href="#prices">Prices</a></li>
      <li><a class="link" href="#compare">Compared</a></li>
      <li><a class="link" href="#questions">Questions</a></li>
      <li><a class="link" href="${UPLOAD}">Upload your PDF</a></li>
    </ul>
  </div>
  <div class="footer__legal grid">
    <p>Staplepress prints zines and art books in runs of 25 to 500. The pictures on this page are drawings.</p>
    <a class="link" href="#top">Back to top</a>
  </div>
</footer>
<script src="main.js"></script>
</body>
</html>
`;

writeFileSync(join(root, 'index.html'), html);
console.log('index.html written', html.length, 'bytes');
