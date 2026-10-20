# Idilio

Inspected: 2026-10-20 · desktop-mobile-audit · expressive-world

https://idilio.tv/en

A black, app-store-style page that stacks every persuasion device (badge, stars, download counts, posters, five-step walkthrough, team bios, FAQ) and gates entry behind a QR download modal.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Black ground with a faint purple glow. Left column: a pill badge ('#1 Microdrama app in Latin America · 1.3M+ downloads'), a two-line h1 whose second line is a pink-orange-yellow-green gradient, a paragraph, a purple-ruled second paragraph repeating the pitch, a 4.8-star row, white App Store and Google Play buttons and a dim 'Be the first to know →' link. Right: a large phone frame holding an autoplay video (black here) with a mute icon. On load a 'Download our app' QR modal covers the page and a Spanish cookie bar sits along the bottom.

### Typography

Everything renders in measured 'Arial' (a second family, 'Sofia Pro Zone', appears in the list and shows in the nav and logo). h1 72px, weight 700, line-height 1, tracking -0.025em (48px on mobile). Body 18px/1.6 at ~64ch, mostly light grey on black. Section eyebrows are small, letter-spaced caps in purple, teal, orange or green; step numbers are very large numerals coloured per step; team names are large and bold.

### Visual System

Near-black ground throughout with per-section coloured glows (purple, teal, green, orange). Accent purple for the primary button and pulse dot; a five-hue gradient recurs on display lines and the nav underline. Surfaces are charcoal cards with 1px white/10% borders and rounded corners. Imagery: four telenovela-style show posters, five phone screenshots of the app, three portrait photos. Icons sit in small tinted squares.

### Page Sequence

Nav → hero with phone video → five-stat strip (1.3M+ downloads, 50+ countries, 3M+ monthly views, 29+ series, 400K+ followers) → 'What is a microdrama?' four cards → 'Latest releases' poster row + 'See all shows' → 'How it works' five numbered steps with alternating phone screenshots → 'Made in Latin America' gradient headline, three stats, awards card → 'Built different' six cards → 'We're not just a studio' tech list → creators banner + 'Submit Your Story' → team: three portrait bios → FAQ (six collapsibles) → 'Let's talk' name/email/message form → footer.

### Interaction

Operated: after dismissing the download modal with 'Not now', clicked the first FAQ summary ('What are microdramas?'); the question turned purple, the plus icon became an ×, and a four-line answer expanded beneath. On load the only running animation was a 'pulse' on the badge's purple dot; the hero video element was autoplay+muted but never left readyState 0 in this browser. With reducedMotion: 'reduce' the pulse animation still ran and the video stayed paused. Header is sticky at 100px; the cookie bar is fixed at the bottom.

### Accessibility

Secondary copy is grey (~40-60% white) on black, and the 'Be the first to know →' and 'Not now' links are set at 25-40% white. Nav language buttons measured 16 × 16px on desktop and 18 × 20px on mobile; footer social icons are 20px; 19 targets under 32px at 390. The download modal and cookie bar both overlay the first screen, and the modal's close is a 15px × glyph. No horizontal overflow. The h1 gradient line's green word ('With') sits low-contrast on black.

### Mobile

The hero stacks: badge, three-line h1, paragraph, store buttons, then the phone frame (which is empty) below, pushing the first real content past 1,500px. The stat strip becomes a two-column grid with the fifth stat alone; format cards, how-it-works steps and team bios stack one column; posters become a 2 × 2 grid. The cookie bar covers about a fifth of the viewport and the QR modal still appears. Page height 18,486px.

### Copy

h1: "Latin Microdramas You'll Fall in Love With"; primary actions are the store badges "App Store" / "Google Play" plus the nav's "Be the first to know". First-screen proof is numeric and ratings-based: the '#1 … 1.3M+ downloads' badge, '4.8 · 1.3M+ downloads on iOS and Android' with five stars, and 'Over 1 million people are already watching'.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 72 | 48 |
| Headline weight | 700 | 700 |
| Headline tracking em | -0.025 | -0.025 |
| Body px | 18 | 18 |
| Characters per line | 64 | 38 |
| Sections | 15 | 15 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- For a consumer app, put the store badges and a rating line in the first screen and repeat the download count in the badge, the stars and the body copy; redundancy is the point.
- Show the product's actual content (posters, in-app screenshots) rather than abstractions; a numbered walkthrough with real screens explains a monetisation model without a diagram.
- Pick one accent and one gradient and reuse them on every eyebrow, underline and display line so a long dark page stays one brand.
- Do not stack a modal and a cookie bar on the first screen; one interrupt is already a cost.

Suits mobile-first consumer media and games with an existing audience and app-store presence; wrong for B2B, for anything without downloadable proof, and for a product whose first screen needs to be scannable without dismissing overlays.

Risk: Two overlays on load hide the hero. The page is 15 sections and ~13,500px, with investor, creator and viewer audiences all served on one homepage, so the hero copy repeats itself and the CTA shifts between 'download', 'be the first to know', 'submit your story' and 'let's talk'. Grey-on-black secondary text and tiny language/social controls hurt legibility and tap accuracy. The empty phone frame on mobile is a large blank gap if the video fails.

## Limitations

- The hero video never loaded in headless Chromium (readyState 0), so the phone-frame content was not seen.
- Tablet widths not inspected; no interaction tested at 390 beyond rendering and measurement.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://idilio.tv/en
- https://speedrun.a16z.com/companies/idilio
