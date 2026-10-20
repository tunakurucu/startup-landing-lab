# Whimsical

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://whimsical.com/

A dense, real board screenshot is framed inside a soft painted landscape under a plain category headline, then each product mode gets its own section.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A floating white pill nav (logo; Product, Resources, Pricing, Download; Contact sales, Log in, a dark 'Sign up') sits above a large rounded card filled with a grainy painted landscape: lilac sky, coral sun, deep blue hills. Centred in it are a two-line white headline, a two-line subhead and a dark 'Get started free' button with an arrow tile. A real board screenshot ('Implementation planning' with a flowchart, mind map and sticky notes) rises from about y=595 and is cut by the fold.

### Typography

Display measured family Agrandir, a wide heavy grotesque: the visible headline is 64px (display_px), weight 700, tracking -0.64px, line-height 1.1 in a live probe. The measurement record's desktop h1 entry is empty (32px Manrope 700), so it did not capture the visible headline. Section h2s are 48px with gradient fills; the closing h2 is 96px. Body 16px/1.4, measured family Manrope, hero measure 55ch. At 390 the h1 measures 48px Agrandir, line-height 1.1, tracking -0.005em.

### Visual System

Light grey ground (computed p3 0.97) with large rounded-corner panels. The signature image is a soft, grainy painted landscape, reused in the hero, behind product shots and in the closing card. Text and buttons are dark aubergine; display words take purple-to-magenta or blue-to-coral gradients. Feature tiles float UI fragments (keyboard keys, comment threads, a version slider, cursor tags 'Marketing', 'Design', 'Engineering') over blurred colour blobs. Product cards are white with simple line previews.

### Page Sequence

Hero card with board screenshot and a scrolling customer-logo row → scroll-filled statement 'Capture and share your ideas at the speed of thought' → 'Diagrams' (image left, text right) → 'Wireframes' (text left, image right) → 'Features / The essentials, done right', six tiles and 'Get started free' → 'An infinite canvas to capture all your ideas', five product cards (Diagrams, Flowcharts, Mind maps, Whimsical AI, Wireframes) → closing landscape card 'It's time to work differently.' with the footer set inside it.

### Copy

h1: 'The whiteboard for product builders'. The subhead names three jobs: design and document implementation with diagrams, shape UI with wireframes, collaborate with your team and AI. Primary button 'Get started free'; nav button 'Sign up'. The h1 names the category ('whiteboard') and audience ('product builders'); feature art tags marketing, design and engineering. Section copy is short and benefit-led ('Built for speed', 'Multiplayer editing'), and the page closes on 'It's time to work differently.'

### Interaction

Clicked the 'Product' nav button: a mega panel opened listing Tools (Boards, Mind maps, Diagrams, Wireframes, Flowcharts, Integrations) and Artificial Intelligence (AI Flowcharts, AI Wireframes, AI Mind Maps) with a release-note line; it stayed open after Escape and while scrolling. The logo row at the bottom of the hero card scrolls sideways continuously, and the statement fills word by word from pale to purple as it passes through the viewport. Under reduced motion both still happened.

### Accessibility

The Product button exposes no aria-expanded state before or after opening. The footer logo link has no accessible name. White subhead text over the pale lilac part of the hero reads low-contrast by eye; the probe could not compute contrast over the image. Unfilled statement words are very pale on grey. At 390 the nav buttons are 48px tall and 'Open navigation' is 48×48; 39 of 51 targets are under 44px tall, footer legal links 20px. No horizontal overflow.

### Mobile

The pill nav keeps logo, Log in, Sign up and a hamburger. The headline sets 48px over four centred lines, with the subhead and a larger 'Get started free' (56px tall) below; the board screenshot is cropped at the right edge. Diagrams and Wireframes stack text above a rounded image that bleeds off the right. Feature tiles become one column. Page height grows from 7,667px to 11,895px; five sections at both widths.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 32 | 48 |
| Headline weight | 700 | 700 |
| Headline tracking em | 0 | -0.005 |
| Body px | 16 | 16 |
| Characters per line | 55 | 28 |
| Sections | 5 | 5 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- Set a dense, real product screenshot inside a soft painted scene so a busy canvas reads calm without being simplified.
- Name the category and the audience in the headline and use the subhead for the three main jobs the product does.
- Give each product mode its own alternating section with a large cropped screenshot before summarising features in a grid.

Suits visual collaboration tools with several modes whose screens already look good. Wrong for products whose UI is plain tables or text, where a painted backdrop sets expectations the product cannot meet.

Risk: Static screenshots do all the explaining; nothing on the page lets a visitor try the canvas. The scroll-filled statement and gradient headings lose legibility while unfilled. Motion ignores the reduced-motion preference. The Product menu has no expanded state, and the hero's white subhead depends on the image behind it for contrast.

## Limitations

- The measurement record's desktop h1 (empty, 32px Manrope) and hero height (0px) disagree with the visible 64px headline; typography values for the headline come from a live probe.
- The mega panel did not close on Escape in automation; whether it closes on pointer-out for a real mouse was not checked.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://whimsical.com/
- https://www.awwwards.com/sites/whimsical-1
