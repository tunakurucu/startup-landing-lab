# Harvey

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://www.harvey.ai

A serif declaration with a full-width product dashboard directly beneath, then a buyer split, an auto-advancing product accordion and a stack of enterprise proof.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Split first screen under a black funding announcement bar: a two-line serif h1 on the left; on the right a one-sentence trust claim and a square black 'Request a Demo' button. Directly below, a full-width rounded panel with a dark painterly texture frames a large product screenshot, 'Whitford Lane's Command Center', with usage charts. The nav repeats 'Request a Demo' beside 'Login'.

### Typography

Measured h1 72px, weight 400, tracking -0.012em, line-height 1.0, family HarveySerifFont; 48px/1.1 at 390. Body 14px/1.3, family HarveySansFont, 43ch measure at 1440. The serif sets the h1, several section heads, the testimonial quote, video-card titles and the stat numerals; the sans sets 'Product Innovation for the Best Legal Minds', labels and body. The product UI itself uses the serif for page titles.

### Visual System

Off-white upper page that turns near-black from the client videos onward. Product screenshots sit on dark green-grey painterly textures; law-firm logos are greyscale. Square-cornered black buttons, thin rules between accordion items and stats, a portrait photo for the testimonial, and no accent colour outside the product UI.

### Page Sequence

Funding bar → nav → split hero → full-width product screenshot → '3,500+ Legal Organizations Build on Harvey' logo grid → 'One Platform for Legal Work' (For Law Firms / For In-House cards) → 'Introducing Harvey II' with video → 'Product Innovation for the Best Legal Minds' accordion and product panel → three-slide testimonial carousel → 'Real Impact for Real Clients' video cards → stats → 'Enterprise-Grade Security and Controls' certifications → 'Unlock Professional Class AI for Your Organization' CTA → footer.

### Copy

H1: 'Build a Frontier Legal Organization'. Subhead: the world's top law firms and in-house legal teams trust Harvey with their highest-stakes work. Primary button 'Request a Demo', repeated in the nav, hero, Harvey II block and closing band; no trial or pricing path appears. Audiences are named explicitly (law firms, in-house teams), and scale is asserted with numbers (3,500+ organizations, 200,000+ professionals, 80+ AmLaw 100 firms) and the funding headline.

### Interaction

The Product Innovation list auto-advances, with a growing progress line and a 'Pause auto-advance' button; it had reached Spaces on arrival. Clicking 'Vault' set aria-expanded to true, expanded its description and 'Learn More', collapsed Spaces, and swapped the right panel from a 'Project Titan — Acme Co' space to a 'Create a vault' file-source dialog. Product images were semi-transparent in some scroll captures and blank after instant jumps. With reduced motion the progress line did not change across captures 2s apart; in the normal run it did.

### Accessibility

Accordion buttons expose aria-expanded, and auto-advance has a labelled pause button. Inactive accordion labels are light grey on off-white. At 390 the menu button is 24×25px, the funding announcement becomes an 18px-tall scrolling ticker link, 43 of 97 targets were under 24px tall, and the hero dashboard's text becomes too small to read. No horizontal overflow at either width.

### Mobile

The announcement becomes a scrolling ticker; nav reduces to the wordmark and a menu button that opens a black full-screen overlay with large serif items and 'Request a Demo' / 'Login' buttons. The h1 wraps to three lines at 48px above the subhead, button and a shrunken dashboard. Logos form three columns; buyer cards stack; the accordion becomes every item expanded with its image; client videos stack as dark tiles showing an 'H' placeholder. Page height grows to 14,611px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 72 | 48 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.012 | -0.012 |
| Body px | 14 | 14 |
| Characters per line | 43 | 63 |
| Sections | 9 | 9 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Put a real, detailed product screen at full width directly under the headline so the first scroll lands on product rather than marketing.
- Split readers by buyer type early (law firm or in-house) before the feature tour begins.
- If a feature list auto-advances, sync it to a product panel, show progress, and give it a pause control.
- Use the serif for claims and numbers and the sans for explanation and UI, so voice and evidence stay visually distinct.

Suits vertical enterprise software sold to conservative, high-stakes professional buyers who look for peers, numbers and certifications. Wrong for a self-serve or early-stage product: without logos, usage figures and certifications the proof stack has nothing to stand on.

Risk: Much of the persuasion is accumulated enterprise proof (funding, logos, AmLaw counts, certifications) that a young company cannot copy. A single demo-request path excludes evaluators who want to try the product. Dense dashboards become illegible at 390, and the page runs to 14,611px on a phone.

## Limitations

- No 1440 full-page screenshot was in the bundle; the desktop sequence comes from the live slow scroll.
- Client case-study videos were not played; the 390 capture shows placeholder tiles in their place.
- Whether reduced motion fully stops auto-advance was inferred from two captures 2s apart.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.harvey.ai
- https://saaslandingpage.com/harvey/
- https://a16z.com/portfolio/
