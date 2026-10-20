# Pravah

Inspected: 2026-10-20 · desktop-mobile-audit · typographic-technical

https://www.pravah.com/

A one-and-a-half-screen research-lab page: a canvas glyph of a transformer symbol, one 52px headline, four hairline-ruled use cases, an affiliations row, and nothing to click but 'Get in touch'.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Warm off-white ground. A thin nav (wordmark 'Pravāh' left; 'Research', 'Team', 'Get in touch' right) above a 660 × 198px canvas drawing of an electrical transformer symbol (two overlapping circles between two bus lines), rendered either as hairline strokes or as rows of 0/1 digits depending on when it was captured. Below it, left-aligned in a ~660px column: a two-line h1 and a five-line paragraph. No button, image or logo row in the first screen; the first screen is otherwise empty space.

### Typography

One family throughout, measured 'Switzer'. h1 52px, weight 400, line-height 1.1, tracking -0.025em (30px on mobile). Body 16px/1.5 at ~56ch (~40ch on mobile). Use-case blocks use tiny letter-spaced grey caps for the audience label, a slightly-larger-than-body regular title and smaller grey description text. The canvas glyph's digits are set in a tiny monospace. Footer links are small.

### Visual System

No colour: off-white ground (rgb 253,252,249), near-black text, mid-grey secondary text and 1px hairline rules; a 'Dark' footer toggle inverts to rgb(26,26,26) with light text. The only graphic is the canvas transformer glyph, which doubles as the brand motif. Affiliation marks (Stanford, MIT, Google, IIT, University of Chicago, Octopus Energy) are rendered in grey. Research and Team exist as hidden views swapped in by the nav rather than as sections below.

### Page Sequence

Nav → canvas glyph → h1 + paragraph → four hairline-separated use cases, each with an audience eyebrow (Hyperscalers & Neoclouds / Data center developers / Chip companies / Power traders), a title and two lines → 'Built by engineers, scientists and researchers from' + six grey marks → footer (© Pravāh 2026 · Dark · Open roles). Research (six papers) and Team (four people, six advisors) are separate hidden views reached from the nav.

### Interaction

Operated: clicked the footer 'Dark' button (aria-label 'Switch to dark'); the page inverted to a near-black ground, the label changed to 'Light', and the glyph re-rendered in light digits. On load the page was blank at t=0 and content had faded in by 1.5s (the CSS fades [data-in] blocks in); the canvas glyph was seen in two states (line drawing and binary digits) across captures. No CSS/WAAPI animations ran after load. With reducedMotion: 'reduce' nothing ran, two frames 2s apart were identical, and the CSS disables the fade-in under that query.

### Accessibility

The markup has no viewport meta tag: with mobile device emulation the document laid out at 980px wide (scrollWidth 980 at a 390px viewport), so a real phone would see a zoomed-out desktop layout; the non-emulated 390 capture shows a clean single column. Use-case eyebrows are tiny and descriptions are mid-grey on off-white. Nav and footer links measured 20px tall. Headings are well structured (h1 then h2s). The glyph canvas is aria-hidden.

### Mobile

In the 390 capture (no device emulation) the column fills the width: glyph shrinks with its binary rows, h1 wraps to three lines at 30px, the four use cases stack with the same hairlines, and the affiliation marks reflow to two rows of three. Nav stays a single row with all three links. Page height 1,823px. Under true mobile emulation the page did not adapt (see accessibility).

### Copy

h1: "Agents and machine learning for power systems."; the only primary action is the nav link "Get in touch", which is a mailto. First-screen proof: none; the affiliations row ('Built by engineers, scientists and researchers from' Stanford, MIT, Google, IIT, Chicago, Octopus Energy) sits at the bottom of the page, and research papers are one click away in a hidden view.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 52 | 30 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.025 | -0.025 |
| Body px | 16 | 16 |
| Characters per line | 56 | 40 |
| Sections | 1 | 1 |
| Reduced-motion rule | observed | observed |

## Interpretation

- A deep-tech company can run a homepage as a single column of plain statements: one headline, four audience-labelled use cases, one affiliations line, and no buttons.
- Use a schematic of the domain (here a transformer symbol) as the only graphic so the glyph carries both brand and subject.
- Label each use case by who it is for before what it does; audience eyebrows let four buyers find their row in one scan.
- If proof is academic (papers, affiliations), put it on the page body rather than behind a nav view, so a first-time visitor sees it without clicking.

Suits research-led infrastructure or ML companies in a recruiting or partnership phase where credibility comes from people and papers; wrong for anything self-serve, for a product with a UI to show, or for a sales motion that needs a form rather than a mailto.

Risk: The missing viewport meta means phones render a 980px desktop layout, undercutting an otherwise simple page. There is no call to action beyond an email link, no product evidence, and the strongest proof (papers, team, advisors) is hidden until the nav is used. The fade-in leaves the first second blank. Tiny eyebrow caps and grey descriptions are at the edge of legibility.

## Limitations

- The canvas glyph's transition between line drawing and binary digits was inferred from two captures in different states; its trigger was not observed.
- No candidate location in the record, so no geography evidence.
- Tablet widths not inspected; no interaction tested at 390 beyond rendering and measurement.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.pravah.com/
- https://pear.vc/companies/
