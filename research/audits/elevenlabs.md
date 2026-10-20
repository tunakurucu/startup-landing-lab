# ElevenLabs

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://elevenlabs.io

A quiet split hero hands the first screen to a tabbed sampler of playable voice orbs, and three product families (Creative, Agents, API) organize the whole page.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A slim announcement bar ('Meet Eleven v4, our most emotive model yet.' plus Discover) sits above a non-sticky nav. The hero splits: two-line h1 with black 'Sign up' and outlined 'Contact sales' pills on the left, a three-line subhead on the right. Below, a wide rounded grey panel with three tabs (ElevenCreative, ElevenAgents, ElevenAPI) holds a carousel of gradient voice orbs with play buttons, captions (Characters, Narration, Conversational), prev/next arrows and a row of product sub-tabs that falls below the fold.

### Typography

Measured h1 48px, weight 300, line-height 1.1, tracking -0.02em, family Waldenburg; 36px at 390. Section heads repeat the light, large sans treatment, each under a small grey eyebrow (ElevenCreative, ElevenAgents, ElevenAPI). Body 15px Inter, line-height 1.5, about 50ch measure. Geist Mono is in the measured family list and the API code samples are set in a monospace.

### Visual System

Off-white ground, light grey rounded panels, pill buttons in black or white outline. Colour comes almost entirely from imagery: blurred gradient orbs for voices, noise-textured gradient cards (orange-red, blue-grey), gradient news thumbnails and photo case-study cards. Hairline rails and rules with small tick marks frame each section. Product proof is two app-dashboard screenshots, chat bubbles, a line chart and code cards; the Safety section uses thin line-drawn wireframe figures.

### Page Sequence

Announcement → nav → split hero → tabbed voice sampler → 18-logo wall → 'Two platforms built on the same research foundation' with two app screenshots → ElevenCreative (editor demo, speech demo, four capability cards, customer tabs) → ElevenAgents (chat demo, analytics chart, three cards, customer tabs) → ElevenAPI (text to speech, speech to text, music, each with code) → impact stories (Creative/Agents toggle, photo cards) → research timeline and posts → 'Safety, built in' → Latest updates → 'AI Communication Platform' CTA band → footer with a column per product family.

### Copy

H1: 'Bringing technology to life'. The subhead names three audiences (enterprises, creators, developers) and maps them to ElevenAgents (customer experience), ElevenCreative (content creation) and 'the leading AI voice generator'. Primary button: 'Sign up' (secondary 'Contact sales'). Section heads are plain capability statements ('Deploy agents that talk, type, and take action'); the closing band names the category 'AI Communication Platform' with 'Talk to sales' and 'Create an AI agent'.

### Interaction

Operated: the ElevenAgents hero tab. In four attempts it took a grey hover fill and one run reported aria-selected=true, but the panel still showed the ElevenCreative orb carousel up to 10 s later; no content swap was seen. Two first-screen captures 1.5 s apart were identical and no running CSS/WAAPI animations were reported at 1440. A 'Voice chat' floating button appeared bottom-right after load. Reduced motion: top and mid-page captures were static; the measurement records a reduced-motion rule.

### Accessibility

Inactive orb captions and card descriptions are light grey on pale grey panels (low contrast). A 'Skip to content' link exists. At 390 the nav 'Sign up' is 78×36, the menu 36×36 and the announcement arrow 28×28; hero buttons and tabs are 44px tall. No unlabeled buttons or images without alt were found. The measurement flags horizontal overflow at 390; the live load reported document width 390 with body overflow-x hidden, while the sub-tab strip extends to about 794px and code samples are cut off at the right edge.

### Mobile

The nav collapses to 'Sign up' plus a menu; the announcement shortens to 'Introducing Eleven v4'. The hero stacks h1 (36px), subhead, then side-by-side buttons. Tabs shorten to Creative/Agents/API and the product sub-tabs move above the orbs as a sideways-scrolling pill strip, with one large orb and partial neighbours. The logo wall becomes two columns; app screenshots stack under their labels; bento cards go single-column; code samples keep their width and clip.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 48 | 36 |
| Headline weight | 300 | 300 |
| Headline tracking em | -0.02 | -0.02 |
| Body px | 15 | 15 |
| Characters per line | 50 | 33 |
| Sections | 0 | 3 |
| Reduced-motion rule | observed | observed |

## Interpretation

- When one company sells distinct product families to different buyers, put a family switcher inside the hero so each audience finds its path before the long scroll.
- For a product whose output can be sampled, make samples (here, playable voice previews) the first-screen artifact instead of a feature list.
- Mirror the business structure everywhere: the same three families should organize hero tabs, section order, eyebrow labels and footer columns.
- Keep display type light and quiet when imagery supplies the colour and emotion, so the two do not compete.

Suits multi-product AI or platform companies with distinct creator, enterprise and developer buyers and an output that can be sampled (audio, images, generated media). Wrong for a single-purpose developer tool, where three tabs and a 10,000px tour would bury one clear job.

Risk: The hero sampler is heavy: in a loaded headless session screenshots timed out and the tab switch never visibly completed, so the first interaction may feel unresponsive on weak devices. Grey secondary text is faint. The page runs about 10,800px at 1440 and 15,800px at 390, with much content behind tabs that scanners will not open. The light 48px h1 is easily outweighed by the sampler below it.

## Limitations

- The ElevenAgents tab never visibly switched panels in four automated attempts (one run reported aria-selected=true); tab content is not described.
- Voice previews were not played; audio quality was not assessed.
- The 1440 full-page capture stops at 9,000px of a 10,822px page; the closing band and footer were seen only in live scroll captures.
- The headless session was heavily loaded and several screenshots timed out, so load-time motion may be under-observed.
- The measurement's horizontal-overflow flag at 390 disagrees with the live document-width check.
- Single browser, single inspection date; homepage content can change.
- Selected as a maintainer pick; no public design recognition was found and recorded.

## Sources

- https://elevenlabs.io
- https://a16z.com/portfolio/
