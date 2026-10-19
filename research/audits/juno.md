# Juno

Inspected: 2026-10-19 · desktop-mobile-audit · immersive-editorial

https://junocompanion.com/

A warm portrait photograph in an inset hero card, then photo-led step cards with chat overlays, frame a health tool as personal support rather than software.

## Company evidence

YC: verified-yc; batch: X26.

- desktop: 1440 × 900: rendered and measured from batch captures; live visit returned HTTP 502, no control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

An inset rounded card fills the first screen with a golden-hour photograph of a woman seated on a hillside. A translucent pill nav inside the card holds the logo, five links, 'Example report' and a white 'Download' pill. Bottom-left, a three-line h1, a two-line subline, a white 'Download Juno' pill and an 'HSA/FSA eligible' check mark sit over the photo.

### Typography

Single measured family, Instrument Sans. Measured h1 64px, weight 500, tracking -0.03em, line-height 1.0; 40px with line-height 1.1 at 390. Body measured 20px/1.4 at desktop and 18px at 390, with a 54-character measure. Section heads are large, light-grey or dark, centred or left-aligned, with no display contrast family.

### Visual System

White ground after the photographic hero. Imagery is lifestyle photography of people using phones or resting, with chat-bubble and data overlays ('Headache · logged today', '5h 10m'). Condition categories use soft gradient sky thumbnails. Advisor portraits sit in rounded cards. Buttons are pill-shaped, black or white. Colour comes from photography, not a brand accent.

### Page Sequence

Hero → institution and press logos (UCL, Forbes, Oxford, Y Combinator) → 'How it works': four-step index at left beside photo cards with bullet lists → 'Built for your condition' list of five condition groups → 'Built with doctors and patients' advisor cards → 'Hear from our community' video testimonial carousel → (seen only at 390) download CTA, reviews, App Store rating, 'Always free' plan list, privacy commitments, FAQ, 'Start with one conversation' closing card, footer with medical disclaimer and crisis line.

### Interaction

Not operated: both live visits returned HTTP 502 ('upstream request failed'), so no control, scroll or reduced-motion load was performed. The measurement record lists 3 running animations on load and 14 after scroll at 1440, and marks a reduced-motion rule as observed. In the batch desktop capture, a band of roughly 1,700px below the hero rendered blank.

### Accessibility

Hero subline is white over a bright sky and foliage with no visible scrim. In the batch captures several headings and paragraphs ('Built for your condition', 'Built with doctors and patients') render in very pale grey, some images are grey placeholders, and at 390 two step images show alt text instead of images. At 390 the floating nav pill overlaps advisor content. No horizontal overflow measured.

### Mobile

Nav collapses to logo and a menu button inside the pill. The hero photo is recropped so the face fills the top half, with text and CTA stacked beneath. Logos shrink to one row. How it works becomes numbered headings each followed by its image and bullets. Advisors form a compact two-column list; community videos scroll horizontally. Page height falls from 14,619px to 7,924px and measured sections from 9 to 8.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 64 | 40 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.03 | -0.03 |
| Body px | 20 | 18 |
| Characters per line | 54 | 37 |
| Sections | 9 | 8 |
| Reduced-motion rule | observed | observed |

## Interpretation

- For a sensitive consumer category, lead with a human photograph and a plain-language claim before any interface.
- Show the product through what a user would say ('My headache is bad today') overlaid on real-life scenes rather than through screenshots.
- When the product handles health data, place clinical credibility (advisors, institutions) high on the page and data commitments beside the plan details.
- Keep eligibility details such as HSA/FSA directly under the primary button where purchase anxiety is highest.

Suits consumer health, wellness and care apps where reassurance and empathy matter more than feature density. It would be wrong for a clinician-facing or enterprise tool, where buyers need workflow, integration and compliance detail up front.

Risk: The long photographic page depends on lazy-loaded images and reveals that rendered blank, grey or as alt text in captures. Stock-feeling portraits risk reading as generic. The desktop page is very long (14,619px), and the product UI itself is barely shown.

## Limitations

- Live visits on 2026-10-19 returned HTTP 502 twice; no control was operated and reduced motion was not tested live.
- The desktop full-page capture stops at 9,000px of 14,619px; later desktop sections were inferred only from the 390 capture.
- Blank band, pale text and missing images may be capture artefacts of scroll reveals rather than real-user states.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://junocompanion.com/
- https://www.ycombinator.com/companies/juno-chat
