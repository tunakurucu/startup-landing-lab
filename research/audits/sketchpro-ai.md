# SketchPro.ai

Inspected: 2026-10-20 · desktop-mobile-audit · immersive-editorial

https://sketchpro.ai/

A full-bleed architectural video hero with a 96px light-weight four-word headline, followed by a quiet off-white page of demo videos, a stats band and one quote carousel.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

The whole first screen is a blue-grey photograph (the poster of a 1440px-wide autoplay video) of a curved glass facade shot from below. Centred white text: a one-line h1 'Design more. Document less.', a two-line subtitle, a white pill 'Request a demo' and an outlined pill 'See how it works →'. A row of white customer logos (RAMSA, SOM, Ware Malcomb, dar, FFKR, Devcon, Premier) scrolls along the bottom edge of the image. The nav is transparent over the image with a moon icon for dark mode.

### Typography

Single grotesque, measured family 'fkGrotesk' (Plus Jakarta Sans also listed). h1 96px, weight 300, line-height 1, tracking -0.035em; 40px on mobile at the same weight and tracking. Body 20px/1.4 at a narrow ~31ch measure (18px/1.6 on mobile). Section headlines are roughly half the h1 size at regular weight; eyebrows are small letter-spaced grey caps ('PLATFORM', 'FIRM STANDARDS', 'SECURITY'); ampersands in headings are set in a serif italic. Stats use large light numerals. The closing headline returns to near the hero's size and weight.

### Visual System

After the photographic hero, the ground is off-white/near-white with hairline rules dividing sections and a 1px-bordered stat band. There is no accent colour: buttons are black or white pills, links are grey, the only colour is the hero photograph and the logo's blue-green mark. Imagery is two large white-framed demo video panels (blank in headless) and a mock 'AI Knowledge Base' card with a text cursor. The page ships a dark-mode toggle.

### Page Sequence

Transparent nav over video hero + logo marquee → two-tone positioning statement ('SketchPro is AI designed for architecture & engineering firms…') → large demo video panel with expand/mute controls → 'Platform' split: headline left, six-row feature list right (Automated dimensioning, Tagging, Views & sheets, Schedules, QA/QC checks, Firm standards) → second demo video panel → three-stat band (15 mins, 20+ hrs, 50+) → 'Firm standards' split with typing knowledge-base card and three benefit rows → quote carousel (4 quotes) → 'Security' four-point grid → closing headline + 'Request a demo' → one-line footer.

### Interaction

Operated: clicked the 'Next quote' arrow; the quote changed from a Dar engineer's airport-scale quote to a RAMSA associate's 'SketchPro isn't about replacing…', the attribution updated, and the active dot moved from first to second. On load two 'logo-scroll' CSS animations ran (the logo marquee); on scroll, the knowledge-base card's text typed itself out (character count rose from 332 to 424). The hero and demo videos were autoplay+muted but stayed at readyState 0 in this browser. With reducedMotion: 'reduce' the two logo-scroll animations still ran; the measurement record found a reduced-motion rule.

### Accessibility

White 300-weight text over a mid-tone photograph; subtitle contrast depends on the frame behind it. Mobile quote dots measured 6 × 6px (24 × 6px when active) and the mobile menu button is 24px; 10 targets under 32px at 390. Demo-video panels are large transparent 'Play demo video' buttons covering the whole frame with an unmute button inside. Feature-list descriptions are light grey on off-white. No horizontal overflow at either width.

### Mobile

Hero stays full-bleed with the headline on two lines at 40px and both pills stacked full-width; the logo marquee shows two logos at a time. The positioning statement runs seven lines. Feature list keeps its two-column name/description rows at reduced width; stat band and security grid stack to one column; the knowledge-base card goes above the 'Firm standards' copy. Page height 7,615px versus 6,183px on desktop.

### Copy

h1: "Design more. Document less."; primary action: "Request a demo" (nav button reads "Request a Demo"). First-screen proof is the logo marquee of named architecture firms and the subtitle's claim 'The world's leading architecture and engineering firms trust SketchPro'; numeric proof ('15 mins', '20+ hrs', '50+') arrives three screens later.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 96 | 40 |
| Headline weight | 300 | 300 |
| Headline tracking em | -0.035 | -0.035 |
| Body px | 20 | 18 |
| Characters per line | 31 | 31 |
| Sections | 7 | 7 |
| Reduced-motion rule | observed | observed |

## Interpretation

- A four-word, two-sentence headline at light weight over a single evocative image can replace a product shot in the first screen when the logos beneath it do the proving.
- Keep the body of the page colourless and let one photograph carry all the hue; black and white pills then read as the only interactive elements.
- Put a feature list in a name/description two-column table with hairlines instead of cards; it scans faster and scales to mobile without re-composition.
- Pair a stats band with the demo video it summarises so the number has a visible referent.

Suits tools sold to design, architecture or engineering professionals where the customer logos are recognisable and a cinematic image signals taste; wrong for products that need the UI visible in the first screen, or for teams without a loadable video, since the page's two largest panels are then empty.

Risk: Two large video panels failed to load here and rendered as blank white frames, leaving roughly 1,250px of empty space; the page depends on media that may not play. Light-weight white type over a photograph is contrast-fragile. The logo marquee ignores reduced motion. Quote-carousel dots are too small to tap on mobile. Proof is logo- and claim-based; no customer numbers appear until the stats band.

## Limitations

- Hero and demo videos never loaded in headless Chromium (readyState 0), so their motion and content were not seen; the hero image described is the video poster frame.
- Tablet widths not inspected; no interaction tested at 390 beyond rendering and measurement; dark-mode toggle not operated.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://sketchpro.ai/
- https://neo.com/startups?tab=Neo%20portfolio
