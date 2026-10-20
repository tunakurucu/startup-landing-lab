# Scope

Inspected: 2026-10-20 · desktop-mobile-audit · expressive-world

https://www.getscope.ai/

An industrial-mood page that alternates near-black and cream bands, uses a grainy amber gradient as its only colour, and sets every label in mono caps.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A cream nav (logo, a grey pill holding three mono-caps links, 'LOG IN' and a black 'BOOK A DEMO') sits over a full-bleed near-black hero. Centre-aligned: a two-line h1, a two-line subhead and one cream 'BOOK A DEMO' button. Diagonal grainy amber-to-yellow stripes rise from the lower-left and upper-right corners; there is no product image in the first screen.

### Typography

Measured h1 68px (36px mobile), weight 400, tracking -0.02em, line-height 1, family Archivo (a grotesque sans). Body measured 20px/1.5 (16.8px mobile) in Manrope. Geist Mono carries nav links, buttons, eyebrow labels ('HOW IT'S DONE', 'JOIN US'), image captions, security card titles and footer links, all in caps. Three oversized slashed-zero numerals ('10X', '55%', '0') act as display elements mid-page.

### Visual System

Alternating bands: black hero, cream industries section, black workflow grid, cream/black split stat tiles, cream testimonials, black security block, amber-gradient closing CTA, black footer. Colour is restricted to the grainy amber gradient and a small orange square bullet; photographs are orange-duotoned industrial scenes. Motifs: faint grid lines behind product mocks, a thin line-drawn part outline, wireframe polygons, hairline-bordered cards.

### Page Sequence

Nav → black hero (h1, subhead, button) → 'Trusted by 7 of the top 10' orange eyebrow + 'Accelerate report writing' + horizontal strip of five duotone industry photos → black 'HOW IT'S DONE' four-step grid with dark UI mocks → split tile: line-drawing with 'More field time…' beside stacked 10X / 55% / 0 → 'JOIN US' (black) and 'FOR BUSINESSES' (cream) panels with wireframe shapes → three testimonials → black 'Data security' four-card row + SOC/ISO/GDPR badges → amber 'See Scope run on your own reports' CTA → footer.

### Interaction

Operated the horizontal industries strip by dragging it: it scrolled 800px, revealing 'Energy' and 'Infrastructure' after 'Chemical'; no arrows or dots are provided. Nothing continued moving after load (four animations counted then zero); the measurement record counted seven animations after scroll at 1440, which I did not see as sustained motion. With reducedMotion 'reduce' nothing moved; no reduced-motion rule was observed in the measurement record.

### Accessibility

Mono caps labels and captions appear small by eye (not measured) on black and cream. The closing 'BOOK A DEMO' button is dark brown text on a dark translucent panel over the amber gradient, with low contrast at both widths. The industries strip has no visible affordance that it scrolls. All four 'BOOK A DEMO' buttons leave the site for the same external scheduling page.

### Mobile

Hero keeps the centred stack; the nav shows logo, 'BOOK A DEMO' and a hamburger. The industries strip shows one photo at a time; the four workflow steps stack vertically with their mocks; the 10X/55%/0 tiles become full-width black bands; 'JOIN US' and 'FOR BUSINESSES' panels stack; testimonials stack; security cards stack in one column. Page height grows to 10,614px.

### Copy

h1: "Supercharge your inspection team". Primary action: "BOOK A DEMO". The first screen offers no logos, numbers or demo; the subhead claims '10x faster inspections' and the first proof ('Trusted by 7 of the top 10 largest inspection providers') appears one scroll down.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 68 | 36 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.02 | -0.02 |
| Body px | 20 | 16.8 |
| Characters per line | 103 | 34 |
| Sections | 0 | 0 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- Build an industrial identity from one textured gradient and mono-caps labels instead of a multi-colour palette.
- Alternate dark and light full-width bands so each section reads as a distinct room rather than a list.
- Let three giant numerals carry the outcome claims, with the explanation in small type beside them.
- Duotone all photography to one hue so stock imagery looks owned.

Suits field-operations, hardware-adjacent or heavy-industry software selling to buyers who book demos; wrong for self-serve products that need the product visible in the first screen or a sign-up path.

Risk: No product or proof in the first screen; an unlabelled horizontal scroller hides two of five industries; the closing CTA button has weak contrast; mono caps at small sizes reduce readability; section_count measured as 0, suggesting no semantic sectioning.

## Limitations

- Could not verify what the seven post-scroll animations in the measurement record were.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.getscope.ai/
- https://www.joinef.com/portfolio/
