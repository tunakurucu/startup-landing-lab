# Clay

Inspected: 2026-10-20 · desktop-mobile-audit · expressive-world

https://www.clay.com/

A handmade claymation toy world brands the page, and each product chapter gets its own colour, 3D object and named customer result, with use-case tabs swapping product mocks.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

The upper two-thirds is a full-bleed claymation-style scene of green hills, trees and toy machinery (funnel, magnifier, seesaw, coiled tube, block bar chart, mailbox) with coloured balls. A lower dark-green band holds a large white two-line h1 at left; at right a three-line subhead, a white 'Start free trial' button, a lime 'Get a demo' button and 'or install directly with' three AI-app icons. A floating white nav has ⌘K search, Log in, Get a demo and a black Start free trial.

### Typography

Single measured family Roobertvf (a variable grotesque sans). Measured h1 88px, weight 575, tracking -0.04em, line-height 1.0; 41.6px at 390. The section h2 is 72px and chapter headings 48px, weight 500, with each heading's second line in that chapter's accent colour (blue, rust, olive, magenta, teal). Measured body sample 12px/1.3, measure 30ch; uppercase letter-spaced pill labels (DATA, AGENTS, ORCHESTRATION, ACTIVATION) open each chapter.

### Visual System

After the dark-green hero the ground is white and warm grey. Each product chapter is a rounded panel tinted light blue, peach, pale lime or pink, with a matching saturated accent on the label pill, heading line and button, beside a 3D clay object on a sand-coloured stage; the infrastructure panel assembles all the objects together. Product evidence is light spreadsheet-style tables with side panels. The footer sits on a ball-pit illustration.

### Page Sequence

Hero → customer grid (logos, quotes, stats such as '80%+ enrichment coverage') → 'GTM engineers build on Clay' use-case tabs + product mock → 'What do you want to build?' prompt box with three chips → Data, Agents, Orchestration, Activation chapters → 'Build systems that make reps more productive' → video testimonial carousel → 'Learn more about GTM engineering' content grid → 'Turn your growth ideas into reality today' CTA → link-dense footer.

### Copy

H1: 'Build systems to grow revenue'. Subhead: 'Infrastructure to get any data, run agentic workflows, and launch GTM plays.' Primary button 'Start free trial'; secondary 'Get a demo'. The audience is named as 'GTM engineers' and the field as 'GTM engineering'. Each chapter carries one named customer result; the named customers differed between loads (e.g. Rippling, Mistral AI, Intercom). The closing CTA adds 'Start for free today. No credit card required.'

### Interaction

Clicked the 'Lead Scoring' tab: it turned purple and centred in the row, the subhead changed to 'Prioritize the highest-converting leads using real-time intent and engagement signals.', and the mock swapped from a demo-form table with an email preview on lime to a lead-scoring table, 'Lead Score Formula' panel and 'Sample Outputs' on purple. The customer grid drifted left on its own, and the prompt placeholder showed different text across captures. No CSS animations ran; the hero video did not load. With reduced motion the customer grid stayed still.

### Accessibility

No horizontal overflow. 69 visible images had no alt attribute, and the prompt textarea has no label. Accent heading lines measured 4.08:1 ('visual canvas', olive on pale lime) and 3.57:1 ('reps more productive', teal on grey) at 48px. At 390, 118 of 157 visible targets were under 44px tall (footer links 16px), and several customer-grid links reported only the text 'text'. The cookie banner covers the h1 at 1440.

### Mobile

The hero scene crops to a band behind the nav and the 41.6px two-line h1 overlaps its lower edge; subhead and the two buttons stack below. The nav reduces to logo, 'Get a demo' and a menu icon. The tab row scrolls sideways above the mock, and the prompt chips stack vertically. Each chapter becomes label, heading, copy, proof and buttons with its 3D image below. The footer becomes two columns over the ball-pit art. Page height 11,352px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 88 | 41.6 |
| Headline weight | 575 | 575 |
| Headline tracking em | -0.04 | -0.04 |
| Body px | 12 | 12 |
| Characters per line | 30 | 30 |
| Sections | 9 | 9 |
| Reduced-motion rule | unverified | unverified |

## Interpretation

- Give each product module its own colour, label pill and physical object, and reuse that colour in its heading, button and proof, so a long platform page reads as distinct chapters.
- Make the use-case selector a tab row that swaps both the one-line promise and the product mock, so each buyer sees their own workflow in one click.
- Attach one named customer and one number to every chapter instead of relying on a single logo wall.
- Carry one illustration language from hero to footer so the brand world doubles as an icon system for modules.

Suits multi-module B2B platforms selling to operators who want to see real tables and outcomes; wrong for a single-feature tool, where the chapter apparatus and illustration budget would outweigh the product.

Risk: The hero spends two-thirds of the first screen on illustration, so the h1 and buttons sit low and the cookie banner covers them. Ten thousand pixels of dense proof grids and chapters ask for a lot of scrolling; images widely lack alt attributes; proof rotating between loads makes the page's claims inconsistent from visit to visit.

## Limitations

- The hero and chapter videos stayed at readyState 0 in headless Chromium; the hero was seen only as a still.
- The desktop full-page capture stops at 9,000px of a 10,255px page; the end was seen in live captures.
- Customer proof lines differed between loads; the examples recorded are samples.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.clay.com/
- https://saaslandingpage.com/clay/
