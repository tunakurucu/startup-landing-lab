# Remix

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://remix.re

The hero is a before/after phone pair driven by a 'simple to complex' slider, so the product's output is the first thing shown, not the product.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

remix.re redirects to remix.is. Centred two-line headline, second line olive green, above a split stage: left, a fanned stack of portrait phone frames labelled 'The original'; centre, the logo, 'Remix any trend, reference, product or idea' and an arrow; right, one larger phone labelled 'Your remix'. Below: a row of trend names, left/right arrows and a gradient range slider from 'Simple' to 'Complex'. Nav holds four anchors, 'Book Demo' and a black 'Start Creating' button. Videos showed 'This video couldn't load' in the capture and the live session.

### Typography

Measured h1 60px, weight 600, line-height 1, tracking -0.06em, family 'Bricolage Grotesque'; body 17px / 1.7 in the same single family, measure 59ch. Section headings repeat a two-line pattern with the second line in olive; eyebrow labels are uppercase tracked ('CONTENT FACTORY', 'HOW IT WORKS'). The 'POLISH IT. POST IT. ANYWHERE.' heading is set in caps.

### Visual System

Warm off-white ground alternating with pale sage-green bands and cards; near-black text, one olive accent, a blue-to-pink gradient only on the slider. Imagery is dense: phone frames, product-UI mock panels ('Content Factory', 'Your assets', 'Your next campaign'), 3×3 grids of social-post thumbnails with view counts, a 5×4×3=60 arithmetic strip, and tool icons (Claude, Codex, Cursor) connected by a tree line. Rounded cards with 1px borders throughout.

### Page Sequence

Nav → hero showcase (originals → remix, slider) → 'Content Factory' batch math plus workspace mock → 'How it works' three numbered cards → 'Made for production' four video cards → 'Assets' media-library mock with tabs → 'Millions of views' two account cards with thumbnail grids → 'Polish it. Post it.' editor mock plus mobile phone → 'Advanced workflows & integrations' MCP tree → closing CTA band with two buttons → footer with a 'Pause effects' control.

### Interaction

Operated the hero's right arrow: the active trend label moved from 'Podcast Chemistry' to 'UGC in Motion', the slider handle slid right, and both phone frames swapped to a different original/remix pair. Clicking a trend label alone changed nothing. Live, 3 animations ran at the top on load, 1 during scroll; the seven hero/feature videos never played (load errors). With reducedMotion set, 0 animations ran at every sample point.

### Accessibility

The page exposes a 'Skip to content' link, a labelled range input ('Explore trends from simple to complex') and a footer 'Pause effects' control. Body copy in grey-olive on off-white is lower contrast than the headings. Phone-cover buttons in the fanned stack overlap each other and are partly off-canvas. A caption states 'Views shown in the captured Instagram posts, not live account totals'. No horizontal overflow measured.

### Mobile

Nav keeps a 'Create' button plus hamburger. Headline h1 34.3px; the centre explainer text moves above the phones, which sit side by side at reduced size; trend labels clip at the right edge. Feature cards go to a 2×2 grid, asset tiles stack vertically, the two results cards stack, and the MCP tree stacks. Page grows from 6323px to 9807px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 60 | 34.3 |
| Headline weight | 600 | 600 |
| Headline tracking em | -0.06 | -0.06 |
| Body px | 17 | 16 |
| Characters per line | 59 | 44 |
| Sections | 9 | 9 |
| Reduced-motion rule | observed | observed |

## Interpretation

- If the product's output is the proof, make the hero an input-to-output comparison and let a single slider tour the range of what it can do.
- Use one accent colour and a two-line heading pattern (plain line, accent line) across every section so a long page still reads as one voice.
- Make scale legible with arithmetic (5 × 4 × 3 = 60) rather than adjectives when the pitch is volume of variations.
- Expose a visible 'pause effects' control and a labelled slider so a motion-heavy page stays controllable without hunting for OS settings.

Suits creative and media-generation tools whose value is visible in a sample. Wrong for infrastructure or compliance products, where example outputs cannot carry the argument and the many mock panels would read as decoration.

Risk: The whole first screen depends on streamed video; when it fails, the hero is two dark rectangles with error buttons. Nine sections of product mocks and thumbnails make the page long and image-heavy on mobile. The 'Millions of views' claims rest on two accounts with a caveat footnote.

## Limitations

- Hero and feature videos did not load in the headless browser (load errors), so their motion and content were not observed.
- Could not verify whether the mock product panels reflect the real product UI.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://remix.re
- https://www.ycombinator.com/companies/remix-3
