# Fixture

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://fixture.ai

Almost the entire page is one scroll-pinned 'day in the life' narrative: a clock, a You/Fixture ledger and a swapping product panel on a gradient stage.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Black ground. Left column: a two-line white headline ('Talk to customers. Fixture does the rest.'), grey body paragraph, a blue 'Request access' button and an outlined 'Watch the day' play button; below, 'WORKS WITH YOUR FAVORITE AGENTS.' with a scrolling row of AI-tool icons. Right two-thirds: a rounded panel with a purple-to-orange gradient holding a pipeline-board product screenshot and an overlapping phone mock. A cookie banner with Decline/Allow sits along the bottom edge.

### Typography

Measured h1 36px, weight 700, line-height 1.1, tracking 0, family 'PP Object Sans'; the largest display text is 84px in the measured family 'Inter' (the orange '8:00 AM' chapter clock). Body 18px / 1.3 in 'Inter', measure 40ch. Nav links, chapter index and footer use a monospace family ('JetBrains Mono') in small tracked caps. Story copy bolds 'You' and 'Fixture' in white against grey sentences.

### Visual System

Pure black page with white and grey text, one saturated blue for buttons, orange for the clock and index tick. Colour otherwise lives only inside the large rounded stage panel, whose gradient shifts between purple, blue and orange across chapters. Product imagery is rendered mock screens (phone, transcript window, pipeline board) tilted in perspective. A vertical tick ruler with hour markers runs down the left edge; a monospace chapter index with up/down arrow buttons sits bottom-left.

### Page Sequence

Nav → hero (headline, CTAs, agent icons, stage panel) → scroll-pinned day story: 8:00 AM 'Your day, already sorted' → 'Walk in knowing everything' → 10:00 AM 'Just talk. Fixture listens.' → 'Know when a cold deal warms up' → 'Hear about risk before it costs you' → further chapters (Slack, pipeline, prospecting) → Saturday check-in → 'You talked to customers. Fixture did the other 36 things.' summary → split card with headline and 'Request early access' email form → footer. Measurement counts 3 sections, with the story measured as a 6599px hero.

### Interaction

Operated 'Watch the day': the URL gained '#story' and the page scrolled to the 8:00 AM chapter, where the stage showed a phone mock and the ledger read 'You 1 / Fixture 3'. During scroll the stage stayed pinned while chapter text, the clock, the index highlight and the ledger changed (10:00 AM: 'You 3 / Fixture 7'). Measurement reported 409 animations and 5 canvases; live, 12–20 ran while scrolling. Agent icon order differed between captures. With reducedMotion set, 0 animations ran at every sample and the stage video had no source.

### Accessibility

Grey story copy on black is mid-contrast; the chapter index items are small grey monospace. The cookie banner overlaps the bottom 70px of every screen until dismissed. The ruler's hour labels are tiny ('8A', '10A'). The full-page capture rendered the pinned stage blank, so the product visuals exist only in-viewport. No horizontal overflow measured. Email form present but not submitted.

### Mobile

Nav shrinks to logo only (no menu, CTAs, or login visible). Hero stacks: headline 26px, body, two full-width buttons, icon row, then the gradient stage panel. The pinned story is unpinned: each chapter becomes a heading, You/Fixture copy and its own gradient image panel in sequence; the clock, ruler and chapter index are gone. Cookie banner covers the lower screen. Page height 7181px, shorter than desktop.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 36 | 26 |
| Headline weight | 700 | 700 |
| Headline tracking em | 0 | 0 |
| Body px | 18 | 16 |
| Characters per line | 40 | 44 |
| Sections | 3 | 3 |
| Reduced-motion rule | observed | observed |

## Interpretation

- If the product's value is 'things done while you weren't looking', narrate a day with a running tally of your actions versus the product's rather than listing features.
- Keep the page monochrome and confine all colour to one stage panel so the product mocks are the only saturated thing on screen.
- Give a long pinned narrative visible instruments (a clock, a ruler, a chapter index with arrows) so the reader knows where they are and can skip.
- Offer a 'watch' CTA beside the conversion CTA so a visitor who is not ready to sign up still has a next step.

Suits agentic or automation products aimed at a single persona whose day can be scripted (founders who sell, ops leads). Wrong for multi-persona platforms or products buyers need to evaluate on specifics, where a linear story hides the feature surface.

Risk: One scroll-pinned story is the whole argument; nothing is skimmable, and the full-page snapshot shows how much depends on JavaScript. Hundreds of animations and five canvases load on a page with no fallback imagery. Mobile loses the clock, ruler and index that made the story navigable. The cookie banner competes with every CTA.

## Limitations

- The pinned stage rendered blank in the full-page capture; chapter visuals were observed only in-viewport at two scroll positions.
- Could not observe the stage video (no source loaded in the headless session) or verify whether the mock screens match the real product.
- Did not count the full number of story chapters precisely; at least eight chapter labels appear in the index.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://fixture.ai
- https://www.ycombinator.com/companies/fixture
