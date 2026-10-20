# Neon

Inspected: 2026-10-20 · desktop-mobile-audit · typographic-technical

https://neon.com

Numbered, mono-labelled chapters of two-tone sentence headlines on black carry a backend-platform argument, switching to a mint ground with marker highlights for the architecture story.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

An announcement bar ('Neon now has realtime…') tops a black nav with Discord, a GitHub star count, Log in and Sign up. The upper two-thirds is a field of glowing vertical green, blue and white bar clusters. Lower left: a monospace line 'NEON IS PART OF THE DATABRICKS PLATFORM', a two-line h1 with a dotted underline under 'Lakebase', and white 'Get started' plus outline 'Read the docs' pills. A divider and a scrolling logo row close the screen.

### Typography

Measured h1 56px/1.1, weight 400, tracking -0.04em, Inter (32px at 390). Measured body 18px/1.3 Inter at a narrow 29ch measure. GeistMono is the other measured family; uppercase labels, the large outline-grey chapter numerals ('01', '02', '03') and terminal-style blocks are monospace. Section heads are one paragraph—a white lead sentence, then a grey continuation—with the first line indented.

### Visual System

Pure black ground for the first half, with green as the main accent and small red triangles marking chapter labels. Mid-page the ground switches to pale mint, where key phrases get green marker highlights. Surfaces are hairline-bordered dark cards and stat tiles (100K+, 70%, 20M+, 3M+); uppercase labels such as 'WHERE STARTUPS START' sit on dark-green bars. Charts are pixel and bar grids; the closing panel at 390 shows a grey wireframe mountain.

### Page Sequence

Hero → logo marquee → 01 Build your backend (five product cards: Lakebase Postgres, Authentication, Compute, Storage, AI Gateway) → 02 Operate it with agents (three points + agent chat panel) → 03 Scale your app and agent (startups, agent platforms, Fortune 500 tiers with stats and a quote) → mint manifesto with side index (Lakebase Architecture, Advanced Autoscaling, Built by Databricks) → autoscaling chart toggle → 'Backed by giants' stats → usage-based pricing cards → 'The world's most advanced backend platform.' CTAs → footer.

### Copy

h1: 'The backend for apps and agents, built to scale on Lakebase Postgres.' No separate subhead; the Databricks line above the h1 supplies the reassurance. Primary button 'Get started', secondary 'Read the docs'; the close adds a copyable '$ npx neon init'. The audience is named as apps and agents, then segmented into startups, agent platforms and the Fortune 500 in chapter 03.

### Interaction

Clicked 'Save costs' in the autoscaling toggle: it took the pressed state and the chart changed from a split 'Without Neon' (red spike, 'Resource limit reached… Outage triggered') vs 'With Neon' ('Autoscaling active', '+4 vCPU') view to one chart with a '4 vCPU/16 GB RAM… Savings estimation 80%' callout. The logo row scrolled continuously; the chapter-02 agent panel shifted between frames; the hero bars held still across ~7 s. Reduced motion: the logo row stopped; sampled frames still.

### Accessibility

Grey continuation sentences and small grey card copy on black are low-contrast. The Databricks label link measures 10px tall at 390. Broken-image placeholders are visible in captures (announcement bar, Storage card, Databricks logo); the live check found 4 broken images at 1440 and 2 at 390. Large black voids sit between chapter-03 items at 1440. No horizontal overflow (measured); footer legal links are ~15px tall at 390.

### Mobile

Announcement text truncates with an ellipsis; nav becomes logo plus menu. The hero bar field shrinks to a band above the h1; buttons stay side by side. Chapters keep the numeral above the two-tone sentence; the five product cards become a sideways strip with the next card peeking; the agent panel moves below the text and shows a prompt and 'Thinking…'. Pricing cards and stats stack; the closing panel puts the wireframe mountain above full-width buttons.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 56 | 32 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.04 | -0.04 |
| Body px | 18 | 16 |
| Characters per line | 29 | 29 |
| Sections | 7 | 7 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Number the chapters and label them in monospace so a long technical page reads as a sequence, not a feature dump.
- Write each section head as one sentence pair—bright claim, grey elaboration—so the point lands before any card.
- Use a two-state toggle on one chart to show both buyer motives (avoid outages, save costs) with the same data.
- Place the backing or ownership signal above the h1 when it answers the buyer's first risk question.

Suits developer infrastructure with a clear technical claim and buyers who read docs before talking to sales. Wrong for consumer or design-led products, where the restraint and long grey-on-black text would feel cold and slow.

Risk: Much of the page depends on late-loading media: captures show black voids, broken-image icons and blank card illustrations, which undercuts a reliability pitch. Grey text on black lowers contrast. The h1 packs two audiences and a product name into 13 words.

## Limitations

- Several images failed to load in this browser; whether they render for real visitors was not verified.
- The desktop full-page capture stops at 9,000px; the lower page was seen in live frames only.
- The closing wireframe mountain was seen only at 390; the matching desktop area was empty in live frames.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://neon.com
- https://saaslandingpage.com/neon/
