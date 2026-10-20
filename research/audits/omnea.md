# Omnea

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://omnea.co/

A very long, light-ground enterprise page that stacks proof (logos, customer numbers, quotes, compliance badges) under one serif headline per section, with one scroll-pinned dark interlude.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Centred stack on an off-white ground: a small avatar-plus-mono 'DISCOVER THE AOS' link, a two-line serif h1, one sentence of body copy and a single black 'Book a demo' button. Behind the text sits a circular field of fine dots drawn on a canvas, with small mono labels ('INTAKE AGENT', 'REVIEW AGENT', 'PROCUREMENT OFFICER') scattered around its edge. A 'TRUSTED BY INDUSTRY LEADERS' logo row (Spotify, Albertsons, Proofpoint, Adyen, DeepL, Adecco) sits at the fold.

### Typography

Display is a high-contrast serif, measured family 'Season Mix VF Variable Light': h1 68px, weight 300, line-height 1, tracking -0.026em (44px, line-height 1.1 on mobile). Body is measured 'Inter Variable' at 18px/1.4, measure ~55ch (16px/1.5 on mobile). Section eyebrows and hero labels use an all-caps monospace (measured 'Paper Mono Variable Regular' is in the family list). Many section headlines use a two-tone device: black first sentence, grey second sentence.

### Visual System

Warm off-white ground with thin 1px hairline card borders and very low-saturation surfaces; black is used only for buttons and two dark bands (the pinned 'Every agent's dream workplace' section and the footer). A small green dot precedes every eyebrow label. Imagery alternates between real photographs (PayPal card, customer portraits, a video still) and flat product-UI mockups on grey panels; the dark band uses an isometric line-drawn stack of layers. Dotted/particle textures recur as canvas backgrounds.

### Page Sequence

Nav → canvas-particle hero → logo marquee → 'Platform' headline with arc of agent names → four pillar cards with link lists → '99% customer retention' proof block (photo, quote, three stats) → 'Why Omnea' two UI panels + three feature cards → testimonial carousel → three average-outcome stats → dark pinned layer explorer → dark 'Real humans' team-card cloud → customer story with video still → 'Enterprise ready' three security cards → trust badges → masonry wall of ~15 quotes → featured posts → newsletter form → dark CTA + footer.

### Interaction

Operated: clicked the 'CONTEXT ENGINE' label in the dark pinned section; its description expanded beneath the label and one layer of the isometric stack turned pale green while the others stayed outline-only. On load the hero dot field redraws continuously (two screenshots 1.2s apart differed) and the logo row scrolls sideways. The dark section is pinned for roughly 900px of scroll and the nav switches to light-on-dark over it. With reducedMotion: 'reduce', zero CSS/WAAPI animations were running, but the canvas dot field and logo marquee still changed between frames.

### Accessibility

Several headline second-sentences and stat captions are mid-grey on off-white (e.g. 'Built on trust. Measured on impact.'), and the pinned dark section's inactive labels are dark grey on near-black. Hero agent labels and eyebrows are very small mono caps. On mobile, product-pillar link rows measured 28px tall (51 links or buttons under 32px). No horizontal overflow at 390. The newsletter input has placeholder text only as its visible label.

### Mobile

Everything stacks to one column: the four pillar cards, the PayPal proof block (photo above quote above three stats), security cards and stats. The agent arc shrinks to a compressed half-ring. The logo row becomes a narrow marquee showing two logos at a time. The testimonial carousel is cropped at the right edge, and the nav collapses to logo plus hamburger. Page height grows to 16,950px.

### Copy

h1: "The Agentic Operating System for Procurement."; primary action: "Book a demo". First-screen proof is the customer logo row directly under the hero; the first numeric proof ('99% customer retention', '$5bn', '50%', '38%') arrives two screens later.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 68 | 44 |
| Headline weight | 300 | 300 |
| Headline tracking em | -0.026 | -0.023 |
| Body px | 18 | 16 |
| Characters per line | 55 | 36 |
| Sections | 0 | 0 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- If you sell to enterprise, let the page be long and front-load named customers; one proof block with a photo, quote and three numbers does more than a feature grid.
- A single serif display face at light weight can carry a 16,000px page if every section repeats the same eyebrow-headline-body rhythm.
- Use a dark band sparingly as a chapter break for the 'how it works' part, and let the nav recolour over it instead of staying opaque.
- Pair a two-tone headline (black claim, grey consequence) with hairline cards to keep a dense page quiet.

Suits enterprise SaaS with a real customer roster and a demo-led sales motion; wrong for a self-serve or developer product where the visitor needs to try something within the first screen.

Risk: Length: the page is ~18 screens, and the pinned section plus a masonry wall of fifteen quotes push the final CTA very far down. Grey-on-off-white secondary text and tiny mono labels trade legibility for restraint. Canvas and marquee motion keeps running under reduced-motion, and the measurement record found no reduced-motion rule.

## Limitations

- Tablet widths not inspected; no interaction tested on the 390 viewport beyond rendering and measurement.
- The headless full-page capture does not reproduce the pinned section as a user scrolls it; its behaviour was sampled at five scroll offsets only.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://omnea.co/
- https://www.joinef.com/portfolio/
