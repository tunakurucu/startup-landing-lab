# Mindy

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://mindy.com

The homepage has been replaced by a single acquisition letter in a bordered card; the only action is an outbound press-release link.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A white rounded logo tile sits centered at the top of a near-black page, followed by the centered heading "Mindy's Next Chapter" and a bordered, slightly lighter card holding a letter. The card (about 710 px wide at 1440) begins in the first screen and the letter runs below the fold. There is no navigation bar, no button and no image.

### Typography

Single measured family Instrument Sans for everything. H1 measured 48 px, weight 600, line-height 1.1, tracking -0.02 em (36 px on mobile). Body 16 px at 1.7 line-height in mid-grey (rgb 161,161,170) on near-black; key phrases are bolded in white. The link is set in a muted violet without underline until hover.

### Visual System

Body background rgb(17,17,17) with a faint violet radial glow at the top centre; the letter sits in a card with a thin lighter border and rounded corners. Colour is limited to white text, grey body, one violet accent for the link and the small star in the logo. No imagery, no product screenshots, no motifs beyond the glow.

### Page Sequence

Logo tile → h1 → letter card (origin story → acquisition announcement → gratitude → sign-off with press-release link) → one-line footer "© 2026 Mindy. With gratitude."

### Interaction

No buttons, tabs, inputs or toggles exist on the page (control scan returned zero elements). The only operable element is the press-release text link; hovering it added an underline and nothing else changed. Nothing moved on load or scroll (0 running animations at both viewports). With reduced motion on, the page was identical; no prefers-reduced-motion rule was found in accessible stylesheets.

### Accessibility

Body copy is mid-grey on near-black, which looks low-contrast in the screenshot though it was not measured. The link relies on colour alone at rest (underline only on hover). No horizontal overflow at either width. Only one link and no form controls, so tap-target concerns are minimal.

### Mobile

Same single column: logo tile, 36 px heading, and the card shrinks to 348 px content width with the letter wrapping to roughly 41 characters per line, making the page 1808 px tall versus 1260 px on desktop. Nothing is hidden or recomposed; the footer stays at the bottom.

### Copy

H1: "Mindy's Next Chapter". There is no primary action button; the only labelled action is the text link "Mindy's Team Joins WorkWhile to Accelerate AI Adoption in Enterprise Workforce Management". The first screen offers no proof: no logos, numbers or demo, only the opening of the letter.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 48 | 36 |
| Headline weight | 600 | 600 |
| Headline tracking em | -0.02 | -0.02 |
| Body px | 16 | 16 |
| Characters per line | None | 41 |
| Sections | 0 | 0 |
| Reduced-motion rule | unverified | unverified |

## Interpretation

- When the product is gone, replace the homepage with one honest letter rather than leaving a stale marketing site live.
- A single column of about 700 px with 1.7 line-height makes long-form text readable without any layout machinery.
- Keep the brand's existing palette (dark ground, one accent) so a transition notice still reads as the same company.

Suits acquisition, sunset or wind-down notices and investor-facing updates; wrong for any company that still needs to convert visitors, since there is no navigation, product or call to action.

Risk: Grey-on-black body text and a colour-only link are weak for readability; the page gives no route to the acquirer's product or a contact beyond an external press release, and nothing signals what visitors should do next.

## Limitations

- Contrast ratios were not measured, only judged visually.
- No operable control other than a text link existed, so the control test was a hover rather than a click.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://mindy.com
- https://sequoiacap.com/companies/mindy
