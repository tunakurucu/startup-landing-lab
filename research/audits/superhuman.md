# Superhuman

Inspected: 2026-10-20 · desktop-mobile-audit · immersive-editorial

https://superhuman.com

A cinematic sky-and-portrait video carries the brand mood while floating product UI cards supply proof, then a sticky-tabbed suite walks through four products.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Full-bleed video of a person in profile against a dusk sky. A centred white headline, a one-line subhead and a dark 'Get Superhuman' button with a purple arrow sit on the sky. Translucent product cards float over the video: a Go chat booking a meeting, a vertical app rail, an inbox list, a doc with an editing toolbar and a 'Tailor this language for executives' chip. A dark pill above the nav asks 'Looking for Superhuman Mail?'. The person differed between captures.

### Typography

Measured h1 64px, weight 540, tracking 0, line-height 1.0, family Super Sans VF; 32px at 390. Body 18px/1.5 with a 55ch measure at 1440 and 28ch at 390; Super Sans VF is the only measured family. Section and product headlines are large, light-weight dark grey on stone; the wordmark is spaced uppercase. Links are purple, underlined, with a trailing arrow.

### Visual System

Two grounds: a photographic sky video with frosted, purple-tinted UI cards, then warm stone with diagonal hatch-pattern gutters, hatched dividers, dashed rules and bordered panels. Product panels pair text with screenshots set on photographic or gradient backdrops. Later come a dark teal brand block with a collage portrait, a pink-and-blue blurred cloud band with faint mono text, and a maroon footer with a giant tonal 'SUPERHUMAN' wordmark.

### Page Sequence

Mail announcement pill → nav → video hero with floating UI → 'Trusted by the most innovative companies in the world' logo grid → 'Your Superhuman suite' with sticky tabs (Mail, Grammarly, Docs, Go) over four stacked product panels → 'Becoming Superhuman.' brand statement with 'Read our announcement' → 'AI that works everywhere you work' closing band with 'Get Superhuman' → footer.

### Copy

H1: 'Superpowers, everywhere you work'. Subhead: 'Mail, Docs, and AI that works in every app and tab'. Primary button 'Get Superhuman'. The category is presented as a suite; each product gets a superlative headline ('The most productive email app ever made', 'Everyone's favorite AI writing partner') and four outcome bullets such as 'Save 4 hours every single week'. The audience is anyone working across apps; no role or company size is named.

### Interaction

Clicking 'Docs' in the suite tabs scrolled the Docs panel up under the sticky tab bar and shaded Docs; the shading also followed scroll position before the click. On load one video was playing and the measurement counted 10 running animations; floating cards and chips shifted while scrolling, and logo-grid cells changed between captures, sometimes blank. With reduced motion the hero video stayed paused on a still frame and one animation on an image in an asset grid kept running.

### Accessibility

White headline over moving video: estimated from screenshot pixels at about 3.9:1 for the h1 and 3.0:1 for the 26px subhead, varying with the frame. Frosted cards carry small light text over video. At 390 the menu button is 36×36, the wordmark link had no text or aria-label in the DOM scan, and 39 of 44 targets were under 44px tall. No horizontal overflow. The alternate variant noted in limitations had no h1 element.

### Mobile

The text block stacks above the video; the h1 drops to 32px over two lines; floating UI cards are removed, leaving the portrait. Nav becomes wordmark plus a menu button that opens a full-screen list. The logo grid becomes 3×2. The suite loses its tab bar: products stack, each with its screenshot below the bullets, and 'Get the suite' moves under the heading. Page height grows from 6446px to 8505px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 64 | 32 |
| Headline weight | 540 | 540 |
| Headline tracking em | 0 | 0 |
| Body px | 18 | 18 |
| Characters per line | 55 | 28 |
| Sections | 4 | 4 |
| Reduced-motion rule | unverified | unverified |

## Interpretation

- Layer real product UI fragments over an emotional full-bleed scene so mood and proof are read in the same glance.
- For a multi-product suite, put a sticky tab bar over stacked chapters so it both navigates and shows where the reader is.
- Give every product chapter the same structure (headline, one sentence, learn-more link, four outcome bullets, screenshot) so several products read as one system.

Suits prosumer or team productivity suites selling an outcome such as time saved across several products. Wrong for developer or infrastructure products whose buyers need technical specifics rather than atmosphere.

Risk: Headline contrast depends on the video frame, and the hero leans on video that some browsers and capture tools will not play. Two homepage variants were served on the same day, so first impressions differ by visitor. Four products and superlative claims compete for one button, and the outcome bullets have no supporting evidence on the page.

## Limitations

- Two of four fresh desktop loads served a different variant: a dark hero, 'Save 4+ hours each week with Superhuman Mail', with an auto-advancing Mail/Go/Docs list and no h1. This record describes the variant that matches the measurement record.
- Desktop product-panel images were blank in the full-page capture and appeared only during the live scroll.
- The measurement record lists the reduced-motion rule as unverified; reduced-motion behaviour here comes from one load.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://superhuman.com
- https://saaslandingpage.com/superhuman/
- https://a16z.com/portfolio/
