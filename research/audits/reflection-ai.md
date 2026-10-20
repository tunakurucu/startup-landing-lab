# Reflection AI

Inspected: 2026-10-20 · desktop-mobile-audit · canvas-first

https://reflection.ai

A warm-neutral research-lab page whose hero is a slowly drifting dot-matrix canvas with a light serif announcement headline centred inside it.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A floating rounded nav bar (logo, five text items, an outlined 'Get in touch' pill with a dot) sits over an off-white field. The whole first screen is a canvas of olive-grey dots forming nested rings and arcs; centred in it are a three-line serif h1, a one-line sans subhead, and two pill buttons, dark 'Try it now' and outlined 'Learn more', each ending in a small dot. No image, product or logos appear in the first screen.

### Typography

Measured h1 57px (36.5px mobile), weight 350, tracking -0.045em, line-height 1.1, family 'NaN Serf B' (a serif with moderate contrast). Body 16px/1.5 at both widths in measured 'NaN Serf Sans'. Section h2s reuse the serif at roughly 40px; card titles are the serif at about 20px; small uppercase tags ('Solutions', 'Open intelligence') sit in beige chips. Buttons use the sans at about 14px.

### Visual System

Off-white ground with beige card surfaces and a dark olive used for primary buttons and one full-width panel; a chartreuse appears on icon chips and two buttons ('Our mission', 'Join us'). Dot-matrix motifs recur: the hero canvas, a second dotted-ring figure beside 'Build with Beam', a stippled green-and-white landscape image, and three circular photo crops in the olive panel. Corners are large radii throughout; a ○● logo mark is repeated as a divider.

### Page Sequence

Nav → dot canvas hero (h1, subhead, two buttons) → dot figures descending to the ○● mark → 'We're making intelligence open' + 'Our mission' button → 'Solutions' four beige cards (Open-weight models, Open source software, Infrastructure, Solutions) → 'Build with Beam' text + 'Weights'/'API' buttons beside dotted figure → 'Our Partners' logo rows → stippled image with 'The most important technology…' overlay → 'Our convictions' three icon cards → olive 'Build the future of open intelligence' panel with 'Join us' → newsletter form + footer columns.

### Interaction

Operated the 'Beam' nav item: a click only toggled a small dot before the label (aria-expanded stayed false); hovering set aria-expanded true and dropped a full-width panel with five links (Model card, API, Documentation hub, Weights, Learn more) and a 'Try Beam today' card. The hero dot canvas drifts continuously (about 46k pixels changed in 1.5s). With reducedMotion 'reduce' the canvas was static between captures but still re-drew when the pointer moved; the measurement record notes a reduced-motion rule.

### Accessibility

Nav labels are small sans text and the mobile menu control is a small four-dot icon. Menu panels open on hover but a click does not open them. Dot canvas sits behind the headline with low contrast between dots and ground, so text remains readable. Partner logos are rendered in a muted olive at low contrast. Newsletter form in the footer; no cookie banner observed.

### Mobile

The floating nav keeps its rounded bar with logo and a dot-grid icon; the canvas persists behind a three-line 36.5px h1 and stacked full-width pill buttons. Solution cards stack one per row; 'Build with Beam' places the dotted figure above the text; partner logos drop to two columns; the stippled image becomes a tall card with the quote overlaid; conviction cards become icon-left rows; the olive panel keeps its three photo circles below the 'Join us' button; footer columns collapse into accordion rows ('Company' open, 'Connect with us' and 'Legal' closed).

### Copy

h1: "Introducing Beam: Reflection's 501B open-weight model". Primary action: "Try it now" with "Learn more" beside it. The first screen offers no proof beyond the parameter count in the headline; partner logos (AWS, NVIDIA, Modal, Nebius and others) appear several screens down.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 57 | 36.5 |
| Headline weight | 350 | 350 |
| Headline tracking em | -0.045 | -0.045 |
| Body px | 16 | 16 |
| Characters per line | 45 | 34 |
| Sections | 6 | 6 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Use a generative canvas as the hero's only image when the product is abstract, but keep text contrast independent of it.
- Lead the homepage with the current release as the headline so the page doubles as the announcement.
- Build the palette from one warm neutral, one dark and one bright accent, and let repeated motifs (dots, circles) do the branding.
- Put secondary actions (weights, API, docs) in the nav menu panel rather than crowding the hero.

Suits research labs, model providers and infrastructure companies whose audience already knows what the product is; wrong for a product that needs a screenshot or concrete outcome in the first screen, or for a hero that must be read fast on slow devices where canvas rendering lags.

Risk: No product or proof in the first screen; menus require hover; the dot canvas keeps moving unless reduced motion is set; partner logos are muted to near-invisibility; the page's section labels ('Solutions' used for both a section and a card) repeat.

## Limitations

- The measurement record counts 4 animations on load that my getAnimations sampling did not capture; motion was confirmed only by pixel difference on the canvas.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://reflection.ai
- https://sequoiacap.com/companies/reflection-ai
