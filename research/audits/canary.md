# Canary

Inspected: 2026-10-19 · desktop-mobile-audit · typographic-technical

https://www.runcanary.ai

A two-line poster headline, 'CANARY TESTS IT.' on a yellow highlight bar, then a long proof sequence of agent transcripts, diffs and replayed failures.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Left-aligned on near-black: a 'Backed by Y Combinator' chip, a grey line '[agent] WRITES YOUR CODE.' whose agent name rolls between Claude, Codex, Cursor and Copilot, then 'CANARY' in yellow and 'TESTS IT.' in black on a yellow bar. Below are one paragraph, a single yellow 'COPY THE PROMPT' button and the mono caption 'One line for your agent.' The bottom edge shows the top of a mock agent window with a floating 'Start Demo' pill.

### Typography

The measured h1 element is 32px, weight 400, −0.01em tracking, in Archivo Black. The largest display text measures 124px Archivo Black, set in caps. Body text is 17px Archivo with 1.7 line height and a 64ch measure. Nav, eyebrows, buttons and terminal text are in a monospace face; IBM Plex Mono is among the three measured families. Section heads repeat the heavy all-caps display style.

### Visual System

The ground is a warm near-black with sparse yellow constellation dots and lines. A single yellow accent carries CTAs, the highlight bar and active tabs. Red and green mark failures, diffs and two of the stats. Surfaces are thin-bordered dark panels, terminal panes, code diffs and a case-file timeline. There are no photographs; the diagrams are a dot sphere of failure paths and an integration fan-in.

### Page Sequence

Hero → agent demo window (thread + diff) → stats row (10K+ bugs, 12K+ hours, 80%+ fix rate, 55% P0/P1) → 01 Install (3 steps, copyable prompt) → 02 Problem (three points + failure-path sphere) → 03 How it works (4 tabs) → 04 Where it runs (4 tabs) → 05 Integrations diagram → 06 Examples (4 case tabs + case file) → 07 Research (QA-Bench bar chart) → 08 closing CTA → footer.

### Interaction

I clicked '02 ONE CLICK, TWO RECORDS' in Examples, then on a second load '02 Run' in How it works. Neither tab stayed selected: the How-it-works row advanced on its own from 01 to 03 while I waited. On load the hero agent name rolled between names, stats counted up from 0 when scrolled into view, and the 'Start Demo' pill stayed fixed over the demo. With reducedMotion set to reduce, the running-animation count was 0–1 versus 5 by default. Hero frames taken 2s apart were identical in both modes.

### Accessibility

Several small mono captions and labels sit at low contrast on near-black: 'One line for your agent.', stat labels and footer column heads. The floating 'Start Demo' pill overlaps the demo window's title text. On mobile, footer links measured 18px tall and the demo message input 22px; the demo's 'Claude Code' tab is clipped at the right edge. No horizontal overflow was measured. Tab rows that advance on their own change content while it is being read.

### Mobile

The nav collapses to the logo and a hamburger. The display drops to 44px, and the headline wraps to four short lines with the bar still behind 'TESTS IT.' The demo window becomes one tall column, thread above diff. The stats stack vertically, install steps stack, 4-tab rows become 2×2 grids and Examples tabs stack vertically. The integrations fan-in becomes a 2-column chip grid with arrows down to Canary, then Codex. The page grows to 11,532px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 32 | 16 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.01 | -0.01 |
| Body px | 17 | 14.5 |
| Characters per line | 64 | 46 |
| Sections | 10 | 10 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Make the claim evidence itself: replay a real failure as terminal output plus a case file (test, break, root cause, fix) instead of listing features.
- When the buyer's tool is the entry point, make the primary CTA something that runs inside that tool (a copyable prompt) rather than a signup form.
- Keep one accent colour, use it for action and emphasis only, and reserve red/green for pass/fail meaning.
- Number sections like a document (01 / INSTALL … 08 / YOUR MOVE) so a long proof sequence stays navigable.

Developer tools where trust comes from seeing a concrete failure caught, such as testing, security or observability. It would be wrong for a non-technical buyer who cannot read diffs or terminal logs.

Risk: At ten sections and over 9,000px, the page asks for a lot of scrolling before the closing CTA. Self-advancing tabs ignored my clicks, so visitors can lose control of what they read. The heavy all-caps display face is loud on every section head, which flattens the hierarchy. The stats are unsourced on the page.

## Limitations

- On the first exploratory load the page rendered before its styles applied (cream ground, stacked nav, monospace headings). Later loads rendered the dark design, so I treat the first as a load-timing artefact, not a variant.
- Could not confirm whether tab clicks are ignored by design or lost to timing; two attempts on different tab rows did not hold.
- The 'Start Demo' walkthrough was not started.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.runcanary.ai
- https://www.ycombinator.com/companies/canary
