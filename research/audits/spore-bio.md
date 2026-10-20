# Spore.Bio

Inspected: 2026-10-20 · desktop-mobile-audit · immersive-editorial

https://www.spore.bio/

A pixel-bitmap display face over pixelated greyscale imagery turns a lab-instrument company into a sparse sequence of full-screen statements with very little body copy.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A full-bleed greyscale image of large blurred pixel squares fades to black at the bottom. Centred over it: a two-line h1 in a pixel display face ('MICROBIOLOGY,' in white, 'REINVENTED.' in mint green) and a one-line sans subhead. A floating dark pill nav (Mission, Technology, Product, Team, Resources) sits at the bottom of the viewport; the top bar holds only the logo, 'Request a discovery call' and 'Join us'.

### Typography

Measured h1: Offbit 101, 112px, weight 700, tracking 0, line-height 1.1, set in capitals. Measured body: Archivo Variablefont Wdth Wght, 20px, line-height 1.3, 31ch measure; Poppins also present. The pixel face recurs for the mission statement and the industries list; small grey uppercase sans labels ('APPLICATION', 'JOIN THE EARLY ADOPTERS') act as kickers.

### Visual System

Black and white grounds alternate with one saturated royal-blue contact band; mint green highlights key words. Imagery is pixelated or soft-focus: the hero pixel grid, a glowing teal ring for the 'TMSI' technology section, a pixel-edged cut-out of the instrument and pixel-edged pill drops. Press cards use pale lavender tiles with publication logos.

### Page Sequence

Pixel hero → black mission statement ('The first direct method that can detect, quantify, and identify micro-organisms...') → 'TMSI' technology teaser with glowing ring and 'Discover our technology' → white industries list (water, beverages, cosmetics, pharma, cell/gene, food) → blue 'Join the early adopters' contact form beside the instrument → 'Hungry for more?' press and news list → dark blue footer repeating the pixel headline.

### Interaction

Operated 'Technology' in the floating pill nav: it navigated to a separate page (/tech-science) with a dark radial-glow statement ('Pasteur began with a microscope...') and the pill now highlighting Technology. During scroll the industries list highlighted one word in blue at a time and the adjacent image changed. With reducedMotion 'reduce', the h1 still assembled on load (letters partly drawn in one frame, complete later).

### Accessibility

Grey kicker and subhead text on near-white ('APPLICATION', 'Designed for seamless integration...') is low contrast, especially at 390. The pixel display face in capitals reduces letter distinction for long statements. The headline entrance still runs under reduced motion. Full-page captures show long empty black and white stretches where content appears only on scroll. No horizontal overflow.

### Mobile

At 390 the top bar becomes a translucent logo chip and a square menu button; the floating pill nav is not shown in the first screen. The h1 drops to a measured 48px on two lines and the subhead wraps to two lines. The industries list becomes one item per line, the instrument image moves above the contact form, and the page is 9,827px.

### Copy

H1: "Microbiology, reinvented." (rendered in capitals); primary action "Request a discovery call". The first screen offers no proof beyond the one-line claim 'The new, ultra fast, AI-based microbiology testing technology'; press coverage appears near the end.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 112 | 48 |
| Headline weight | 700 | 700 |
| Headline tracking em | 0 | 0 |
| Body px | 20 | 16 |
| Characters per line | 31 | 27 |
| Sections | 7 | 7 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Derive the display type and imagery from one product-specific motif (here, the pixel as the unit of imaging) so the identity explains the technology.
- When the technology is hard to show, let one declarative capability sentence carry a full screen instead of diagrams.
- Let press and announcements serve as the proof section when the buyer is regulated and slow to buy, rather than inventing metrics.

Suits deep-tech or hardware companies at pre-commercial stage, recruiting partners and talent more than selling. It would be wrong for a product with self-serve purchase or many SKUs, where visitors need specifications and pricing fast.

Risk: Very little copy (about 48 visible words in the candidate check) and no first-screen proof leave regulated buyers without detail on validation or throughput. Scroll-gated content leaves blank stretches, low-contrast grey labels hurt legibility, and the headline animation ignores reduced motion.

## Limitations

- Nine product and sector videos were present but paused with autoplay off; their content and triggers were not verified.
- The pill nav links to separate pages, so no in-page control was operated; the contact form was not submitted.
- Measurement reports no sticky nav, while the pill appeared fixed at the bottom during the live scroll; the discrepancy was not resolved.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.spore.bio/
- https://www.joinef.com/portfolio/
