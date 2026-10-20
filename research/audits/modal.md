# Modal

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://modal.com

A one-line dark-mode platform claim over a self-assembling green dot-matrix cube, then a sticky product rail and numbered line diagrams for each infrastructure capability.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A bright green announcement bar ('Series D: $1B in annualized run rate…'), then a dark nav with 'Log in' and a light 'Sign up' pill. Centred: a one-line h1 with 'production AI' in green, a two-line grey subhead, a light 'Get started' pill and a dark 'Contact us' pill. A glowing green dot-matrix cube fills the rest of the screen; a 'Trusted by the world's leading AI teams' logo strip follows just below the fold.

### Typography

Measured h1 45px, weight 500, line-height 1.1, tracking −0.01em, family ABC Diatype; body 18px ABC Diatype at 1.3, about 47ch. One sans family does display and body; DM Mono is the only other measured family (the small '$30 / month free compute' line looks monospaced). The h1 is small relative to the canvas under it. Phone h1 37px, body 17px.

### Visual System

Near-black ground with one bright green accent for the logo, the headline phrase and small section-label icons. Imagery is abstract: a dot-matrix cube canvas, a dotted world map, three numbered thin-line diagrams with coloured nodes, and dark dashboard cards (audit logs, container chart, live GPU usage). Customer proof switches to a warm light-grey ground with a scattered geometric icon field and grey logo tiles.

### Page Sequence

Announcement bar → hero with cube canvas → logo strip → 'Container infrastructure that won't box you in' with sticky rail (Inference, Training, Sandboxes, Functions) beside four product panels → 'Infrastructure reimagined…' three numbered diagrams → 'Capacity that scales with your ambition' world map + four capabilities → 'Production-ready from day one' dashboard cards → light customer carousel + eight logo tiles → 'Latest updates' three posts → 'Ship your first app in minutes' CTA → footer.

### Copy

H1: 'The platform for production AI'. Subhead: cloud infrastructure for teams that develop, train and serve AI applications at scale. Primary button 'Get started' (secondary 'Contact us'; nav 'Sign up'). The category is cloud or container infrastructure; the audience is AI teams ('Trusted by the world's leading AI teams'). The closing CTA adds a concrete offer: '$30 / month free compute'.

### Interaction

Clicked 'Next customer story': the card changed from a DoorDash quote with a red-accented icon field to a Cognition quote with a blue-accented field. On load, successive captures showed a small cluster of green dots growing into the full cube. In my scroll captures the rail highlight stayed on 'Inference' while later panels were in view. With reduced motion the cube rendered complete and three captures 1.5s apart were identical.

### Accessibility

Secondary text is small and mid-grey on near-black (feature descriptions, footer links). Desktop carousel arrows are 32×32px. Phone: menu button 32×32px, 'Get started' and 'Contact us' 36px tall; no unlabelled controls counted; no horizontal overflow at either width.

### Mobile

H1 drops to 37px and wraps to two centred lines, 'production AI' on the second; the cube stays below the buttons and the logo strip peeks at the bottom. The sticky rail is removed: each product becomes a stacked section headed by its icon label (Inference, Training…). Diagrams, capabilities and dashboards stack singly; the footer becomes a two-column link list. Page height rises to 14,611px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 45 | 37 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.01 | -0.01 |
| Body px | 18 | 17 |
| Characters per line | 47 | 47 |
| Sections | 7 | 7 |
| Reduced-motion rule | observed | observed |

## Interpretation

- For a multi-product platform, give every product the same anatomy (one claim, three capabilities, one link) behind a sticky product selector.
- Explain infrastructure that has no natural screenshot with numbered, monochrome line diagrams rather than stock illustration.
- Keep the hero to one short line with a single accent-coloured phrase and let one abstract motif carry the brand.
- Change the ground colour when the page moves from capability to customer proof so the evidence reads as its own chapter.

Suits developer and infrastructure platforms whose buyers already know the category and want breadth, reliability and proof. Wrong for a new category that needs the first screen to explain what the product does.

Risk: The hero says little beyond the category and the cube is decorative rather than explanatory; no code or product UI appears above the fold; grey-on-black secondary text is low in contrast; canvas and loaded media leave empty frames when slow.

## Limitations

- Product-panel media were empty dark rectangles in live captures but filled in the measurement capture; their animated states were not verified.
- The customer carousel arrows only became available after scrolling the whole page once; the carousel's autoplay behaviour, if any, was not checked.
- No control was operated at 390 wide.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://modal.com
- https://www.siteinspire.com/website/12993-modal
