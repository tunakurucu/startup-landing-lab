# Origin

Inspected: 2026-10-20 · desktop-mobile-audit · immersive-editorial

https://origin.bio/

A typed-out serif question over a live embedded platform opens a scroll-pinned, 6-plus-7-step data-driven essay that argues from trial statistics to tumour samples.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Deep navy ground with a soft radial glow. A small ring logo and wordmark top-left; a centred frosted pill holds DATA ENGINE, RESEARCH and an outlined GET ACCESS button. One line of serif headline types itself out with a blinking caret ('What if we made as many cancer drugs next year as we have in the last decade?', last word italic). Beneath, a mac-style window frames a live embed of 'Origin Spatial': layers panel, a circular lung tissue section coloured by predicted cell type, and a right panel of tabs with tissue-composition percentages. A 'Click to interact' hint sits at the window's bottom edge.

### Typography

Measured h1 43.2px, weight 400, line-height 1.2, tracking -0.012em, family Instrument Serif; measured body 10.2px in Inter, measure 45ch (the sampler caught the small caption text; essay paragraphs render larger). Families: Inter, Instrument Serif. Every section heading is regular-weight serif, often broken into four short lines ('Most patients / are unlikely / to respond / to a drug.'); labels, step counters ('2 / 6'), nav and tables use small tracked uppercase sans; the drug table sets names in serif and dosages in tiny tracked caps. Mobile h1 24.8px.

### Visual System

Two grounds: navy with radial glow for the hero, the 'How do we know who will respond?' interlude and the Data Engine intro; near-white for the two essay sequences. Colour is carried by data: a blue/green stacked area chart, blue sparklines, 3D clusters of pink, mauve, blue and tan spheres, H&E tissue thumbnails in pink-purple and greyscale, blue versus rose person glyphs. Progress bars run navy-to-pink. The embedded platform is a dark UI around a light slide viewport. Three research cards show grey placeholders; the footer logo rendered as alt text.

### Page Sequence

Nav → typed question → embedded platform window → 'Data & logs' row → Advisors (three) and Investors (eighteen names) → pinned sequence 1/6–6/6: drugs-tested area chart → Phase 1–3 success sparklines → 'But why?' annotated tumour cluster → '20.6 million new cases' → 'Most patients are unlikely to respond' 20-cluster grid → 'Response could be predicted before enrollment' → navy interlude 'How do we know who will respond?' → DATA ENGINE intro → pinned sequence 1/7–7/7 from real tumour through regions, spatial transcriptomics, cohorts and model training to a responders person-grid → 'Optimized trials cost less' with Get in touch / See the platform and a seven-drug table → Research: three cards → footer.

### Interaction

Operated the 'Genes' tab inside the embedded platform. A first click on the window removed the cover layer ('Click to interact'); clicking the tab then marked Genes active, blurred the app and raised a centred 'Request access' form (first name, last name, work email, company). Nothing was submitted. On load the headline typed out over several seconds with a blinking caret; three videos were present but paused. On scroll each pinned sequence held its figure while text and figure state changed and a counter advanced; 'SKIP AHEAD' is an anchor past each sequence. With reducedMotion set the caret still blinked and the first screen still changed over one second; nothing else was reported running.

### Accessibility

Headline contrast on navy is good; the essay's grey body on off-white and the tiny tracked captions (measured 10.2px) are low-contrast and small. The nav's first link has no text (logo link). The embedded platform gates every control behind a request-access form. Pinned sequences produce full-page captures that are mostly blank, so the page depends on scroll position to be legible. The research cards' images did not load and the footer logo image was broken at inspection. No horizontal overflow at either width.

### Mobile

The nav becomes one frosted pill with the ring logo, two links and GET ACCESS. The typed question wraps to two lines at 24.8px. The platform embed recomposes vertically: hamburger toolbar, a small square slide viewport with 'Tap to interact', a 'Data & logs' disclosure and the tissue-composition list below. Advisors and investors become two columns. Each pinned step stacks the figure above its heading and paragraph with the counter and SKIP AHEAD beneath; 20-cluster grids become 3×4; the drug table becomes stacked rows. Page height 20477px versus 22751px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 43.2 | 24.8 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.012 | -0.012 |
| Body px | 10.2 | 10.2 |
| Characters per line | 45 | 45 |
| Sections | 10 | 10 |
| Reduced-motion rule | unverified | unverified |

## Interpretation

- Open with a single typed question and a live product window; the question sets the thesis and the window proves the product exists before any argument begins.
- Build the page as a numbered, scroll-pinned essay where each step changes one figure; the counter and a skip link let readers control pace without losing the argument.
- Use a regular-weight serif for every claim and reserve colour for data, so the charts and tissue images carry the emotion the type withholds.
- Gate the embedded product's controls behind an access form, but let visitors see the real interface first.

Suits research-led deep-tech and biotech companies selling datasets or platforms to scientific buyers who will read a long argument and value primary figures. Wrong for a transactional or self-serve product, where a 20,000px pinned essay delays the call to action by many screens.

Risk: The argument lives in scroll-pinned sequences that render as blank pages in static capture, in feeds and under broken JavaScript. Body and caption type are small and grey on both grounds. The product embed invites interaction and then blocks it with a form, which can read as bait. Broken research-card images and a broken footer logo were visible at inspection, and the typed headline delays the thesis by several seconds.

## Limitations

- Two full-viewport canvases exist in the main page and three inside the platform embed; what they render was not verified. Three videos (in research assets) were paused and not inspected.
- Frame-by-frame changes inside each pinned sequence were seen only at 900px scroll intervals; intermediate states and the 'Data & logs' disclosure were not operated.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://origin.bio/
- https://www.ycombinator.com/companies/origin-bio
