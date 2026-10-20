# Krea

Inspected: 2026-10-20 · desktop-mobile-audit · immersive-editorial

https://www.krea.ai

A dark photographed desk scene frames the app UI under a superlative claim, then a long catalogue of models, features and full pricing follows.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Dark full-bleed scene of a desk at night (a video element is present): a large monitor shows the Krea app ('Let's create something' prompt and thumbnails), with keyboard and mouse in warm light. Centred above it: a 'NEW · Try the new Seedance 2.5 model' pill, two-line h1, one-line subhead, a white 'Open Krea' pill and a translucent 'Krea Agent' pill that overlaps the top of the monitor. Nav: logo mark, ten links (Pricing with a '40% OFF' badge), 'Sign up for free' and 'Log in' pills.

### Typography

Measured h1 60px, weight 400, line-height 1.1, tracking 0, family Suisse Intl; 36px with line-height 1.0 at 390. Body 14px/1.4 Suisse Intl. 'Krea.ai' in the h1 is filled with a grey gradient while the rest is white. Later section headings are heavier ('The industry's best Generative models.'), and bento tiles use oversized numerals ('22K', '4K', '64+').

### Visual System

Dark scene hero, then white and light-grey sections with rounded cards. A bento grid mixes photographic tiles (an eye, a portrait for 'Krea 3', light streaks) with plain grey tiles and big numerals. Black pill buttons on light sections; one blue for the '40% OFF' and 'New' badges. App UI appears inside cards; customer and investor logos are monochrome grey.

### Page Sequence

Hero → model carousel (prompt cards with arrows) → 'The industry's best Generative models. In one subscription.' with model-provider logos → feature bento → 'Krea powers millions of creatives, enterprises, and everyday people.' logos → use-case list beside app video → 'Trusted by over 30,000,000 users… We've got a plan for everybody' pricing with Monthly/Yearly toggle → teams and enterprise plans → 'Dead simple UI' prompt-box demo → 'Krea 3' image carousel → investors and hiring → 'Edit images with Krea 3' card → footer.

### Copy

H1: 'Krea.ai is the world's most powerful creative AI suite.' Subhead: generate, enhance and edit images, videos or 3D meshes for free with AI. Primary button 'Open Krea'; secondary 'Krea Agent'; nav 'Sign up for free'. The category is 'creative AI suite'; audience is named as 'creatives, enterprises, and everyday people' and 'pros and beginners alike', with the scale claim 'Trusted by over 30,000,000 users From 191 countries'.

### Interaction

Clicked the right arrow of the model carousel below the hero: no visible change after 3 s and no horizontal scroll offset changed. The page scrolls inside a <main> element (document height equals the viewport), so scrolling worked via the wheel over content. The hero did not change over 1.5 s; a video element was present but not playing. Reduced motion: same static hero. Measurement: 10 animations on load and after scroll (12 at 390); rule 'observed'.

### Accessibility

The carousel arrow buttons have no text or aria-label, and at 390 a header button has none either (the only icon button visible there is the menu icon). The h1 carries an aria-label ('Krea.ai is a powerful AI suite for Creatives.') that differs from its visible text. Inactive use-case items are light grey on white. Scrolling happens in an inner container, not the document. At 390 the home logo link is 22×22px. No horizontal overflow.

### Mobile

The nav keeps logo, 'Sign up for free', 'Log in' and a menu icon. The hero photo is cropped to keyboard and chair, so the monitor with the app UI is not visible; the h1 wraps to three centred lines and the two CTAs stack as wide pills. The carousel shows one card with the next peeking. Bento tiles recompose into a two-column mosaic; pricing and enterprise plans stack; the prompt-box demo and Krea 3 carousel go full width.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 60 | 36 |
| Headline weight | 400 | 400 |
| Headline tracking em | 0 | 0 |
| Body px | 14 | 14 |
| Characters per line | 78 | 44 |
| Sections | 15 | 15 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Stage the real app UI inside a physical scene (a desk, a monitor) so a software tool reads as a place where work happens.
- When the product is self-serve with a free tier, put full pricing on the homepage rather than behind a link.
- Use a bento grid with oversized numerals to compress a broad capability list into scannable claims.
- Announce the newest model in a pill above the h1 so a fast-moving product shows freshness without rewriting the hero.

Suits broad, self-serve creative tools with many models and a free tier. Wrong for a focused single-job tool, where a large bento and multi-plan pricing would bury the one action.

Risk: The superlative h1 has no proof beside it, and the monitor in the hero scene is small and drops out entirely on mobile. The page is a long catalogue with repeated sign-up blocks. Inner-container scrolling defeats full-page capture; unlabeled carousel controls and the aria-label mismatch weaken accessibility.

## Limitations

- The page scrolls inside <main>, so the measurement full-page captures equal one viewport; sections were reviewed from live scroll snapshots at both widths.
- The carousel arrow produced no visible change; carousel media had not loaded in the control screenshots, so whether the carousel works after full load is unverified.
- The first 390 scroll pass ended with the page closing; a second pass completed.
- Did not operate the Monthly/Yearly pricing toggle, the plan sliders or the prompt-box demo.
- Single browser, single inspection date; homepage content can change.
- Selected as a maintainer pick; no public design recognition was found and recorded.

## Sources

- https://www.krea.ai
- https://a16z.com/portfolio/
