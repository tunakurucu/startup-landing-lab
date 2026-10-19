# Hedge

Inspected: 2026-10-19 · desktop-mobile-audit · typographic-technical

https://www.hedgespecialty.com/

A full-width two-line headline with a green second clause carries the pitch, backed by a numbered, ledger-like page of broker tools.

## Company evidence

YC: verified-yc; batch: P26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Monospaced eyebrow 'HEDGE INSURANCE · SPECIALTY RISK SPECIALISTS' above a two-line headline that spans the full content width; the second line, 'for hard-to-place risks.', is set in dark green. A hairline rule separates a three-line paragraph and two pill buttons (black 'Submit a risk', outlined 'Get appointed'). A monospaced ticker of coverage classes (Property · Cat-exposed, Energy, Marine...) runs along the bottom edge; faint vertical grid lines sit behind everything. No imagery.

### Typography

Measured h1 93.6px, line-height 1.0, weight 500, tracking -0.045em, family Geist; 39px at 390. Body 17.8px/1.5 Geist, measure 77ch (16px/1.6, 44ch on mobile). Geist Mono is the only other measured family; it carries the uppercase eyebrows, section numbers ('/ 01 · THE DIFFERENCE') and ticker labels. Section headings repeat the hero device: black first clause, green second clause.

### Visual System

Off-white ground with thin vertical column lines and hairline section dividers. Palette is near-black, one dark green and grey; the only dark tile in the page body is 'Browse all guides' in the coverage grid. Surfaces are flat white cards with 1px borders, numbered 01–03 or tagged with mono labels. No photography or illustration; the closing footer sets the 'hedge' wordmark very large.

### Page Sequence

Hero + coverage ticker → /01 'Named brokers on the hard files' (3 cards) → /02 how it works, four steps → /03 'A running file note from intake through bind' (3 cards) → /04 coverage grid of 12 classes + public appetite checker panel → /05 broker resources (6 tiles) → /06 testimonial tabs → 'Send us the account everyone else said no to.' CTA with direct line → footer with oversized wordmark.

### Interaction

Operated the /06 'In their words' tab list: selecting '02 Senior Producer' swapped the large quote and attribution and moved a short underline from 01 to 02. The coverage ticker scrolled continuously on load. While scrolling, a 'Hedge Connector' promo card appeared bottom-left alongside the cookie panel bottom-right. With reducedMotion 'reduce', no running animations were found and the first screen did not change over 1.2s.

### Accessibility

Mono eyebrows and ticker labels are small and grey on off-white. The cookie panel covers the lower right of the first screen at 1440 and most of the lower half at 390; mid-scroll the promo card covered the lower left at the same time. No horizontal overflow at either width. The header did not stay in view after scrolling down.

### Mobile

Nav collapses to the wordmark and a circular menu button. The headline rewraps to four lines at 39px with the green clause kept. All card rows and the 12-class coverage grid stack to one column, taking the page from 7,160px to 11,382px. The cookie panel occupies most of the first screen below the buttons.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 93.6 | 39 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.045 | -0.045 |
| Body px | 17.8 | 16 |
| Characters per line | 77 | 44 |
| Sections | 8 | 8 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Split the headline into a plain category clause and a coloured qualifier so the niche reads as the emphasis, then reuse that two-tone device on every section heading.
- Number sections like a document ('/01', '/02') when the audience is professional and expects to scan for a specific part.
- Turn domain inventory (coverage classes, forms, checklists) into a browsable grid so the homepage doubles as a reference tool for repeat visitors.
- A scrolling ticker of covered categories can state breadth without a logo wall when the buyer cares about scope more than social proof.

Suits B2B services sold to practitioners who know the jargon (wholesale insurance, lending, logistics brokerage) and judge credibility by specificity. Wrong for a consumer product, where the lack of imagery and the density of trade terms would read as cold.

Risk: With no imagery, every section looks the same in weight, so the long middle (coverage grid, resources) can blur together. Two simultaneous overlays (cookie panel and promo card) cover content on scroll, and the mobile page grows to over 11,000px because dense grids stack one item per row.

## Limitations

- Measurement record lists the nav height as 777px at 1440, which does not match the visible ~73px header; not relied on.
- Did not operate the appetite checker, which links away from the homepage.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.hedgespecialty.com/
- https://www.ycombinator.com/companies/hedge
