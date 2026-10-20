# Warp

Inspected: 2026-10-20 · desktop-mobile-audit · typographic-technical

https://www.warp.dev

An all-monospace page built like a technical paper: numbered figures, section tags, a live task grid in the hero and factory config shown as real files.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Left-aligned on a pale lavender ground with a faint dot grid and vertical rules: two-line monospaced h1, one-line grey subhead, a dark 'REQUEST EARLY ACCESS' button and an outlined 'DOWNLOAD WARP TERMINAL' button. Below, a framed '[ fig. 1 — the factory ]' panel: an 8×28 grid of task squares in grey and electric blue, a queued/working/waiting/shipped legend and counters. Tiny vertical 'WARP · HOME · 2026' labels run on both edges; a speaker-icon button sits bottom-left.

### Typography

Measured h1 54px, weight 400, line-height 1.1, tracking -0.037em, family azeretSemiMono; 32px with -0.062em at 390. Body 16px/1.7, also azeretSemiMono, so headings, body, nav and buttons share one monospaced voice. Measured families add theFuture; a proportional sans appears in the SDLC item titles and the case-study headline. Nav, buttons and section tags are spaced uppercase ('# CONFIGURATION [ONLINE]').

### Visual System

Near-white lavender ground, navy text, one electric blue (rgb(42, 30, 255) computed on the active tab) for states and a full-width case-study band, and a yellow 'BOOK A DEMO' button. Every artifact sits in a bordered 'fig.' frame with corner icons: task grid, file tree and code viewer, line charts, scatter plot, stacked layer diagram, control-plane dashboard. Photography appears only in two customer-story cards.

### Page Sequence

Hero with fig. 1 → 'trusted by 800k+ devs at' logos → Configuration: 'Your software factory, defined in code.' with eight tabs and file viewer → SDLC coverage: six numbered points beside product UI → Quality loop: three charts → blue case-study band ('Cutting our cost per PR from $80 to $30') → Enterprise ready: two customer stories → 'Open at every layer' four-layer figure → Governance: control-plane figure → 'Use Warp everywhere': Factories, Terminal, Agent CLI → FAQ.

### Copy

H1: 'Open infrastructure for cloud software factories'. Subhead: build on Warp with factories as code, any model or harness, and evals, benchmarks and self-improvement built in. Primary button 'REQUEST EARLY ACCESS'; secondary 'DOWNLOAD WARP TERMINAL'; nav adds 'BOOK A DEMO' and 'GET STARTED'. The h1 coins the category ('cloud software factories'); audience is developers ('800k+ devs') and enterprise teams. FAQ items are lowercase terminal prompts ('> what is a cloud software factory?').

### Interaction

Clicked the 'AGENTS' tab: it turned electric blue, the description switched to agents and 'the Foreman', and the file tree opened agents/implementation/agent.md in the viewer instead of factory.yaml. On load, fig. 1 squares changed state between frames 1.5 s apart. After scrolling, the nav became a blue section index ([C] Configuration … [F] FAQ). Reduced motion: frames identical at top and at 35% depth. Measurement: 5 animations on load, 23 after scroll; rule 'observed'.

### Accessibility

Small light-grey uppercase labels (edge labels, figure legends, chart axes) and pale pill labels in the layers figure are low contrast. At 390 the fig. 1 squares are interactive elements about 8×13px; a DOM check found 265 of 302 visible interactive elements under 32px, most of them those squares. The menu button is 30×30px and 'BOOK A DEMO' 32px tall. The speaker-icon button is present at both widths. No horizontal overflow.

### Mobile

The nav keeps logo, yellow 'BOOK A DEMO' and a menu icon. The h1 wraps to three lines; buttons sit side by side with two-line labels. Fig. 1 recomposes into a denser grid with a wrapped legend. Configuration tabs become a vertical list above the description and viewer; quality-loop charts stack inside one figure; stories, layers and product cards stack. Page height grows from 9363 to 14029px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 54 | 32 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.037 | -0.062 |
| Body px | 16 | 16 |
| Characters per line | None | 28 |
| Sections | 10 | 10 |
| Reduced-motion rule | observed | observed |

## Interpretation

- On a long technical page, number the figures and tag the sections so the page reads like a spec and can be navigated by section.
- Prove an 'as code' claim with a browsable file tree whose files change with each tab.
- Put one live-state figure in the hero (items moving through named states) to make an abstract system feel operational.
- Replace the global nav with a section index once the reader is inside a long page.

Suits developer infrastructure and agent platforms whose buyers read configuration and metrics. Wrong for non-technical or consumer audiences, for whom an all-monospace page with 'fig.' framing reads as opaque.

Risk: Monospaced body text at 16px/1.7 with wide tracking is slow to read across long paragraphs, and many labels are pale. The hero figure is abstract squares, so it signals activity without showing what a task is. In the full-page measurement capture several sections below the case study rendered blank, so content depends on scroll-triggered rendering.

## Limitations

- The desktop measurement capture was capped at 9000px and left several scroll-revealed sections blank; those sections were reviewed from the live scroll and the 390 capture.
- The first live desktop visit (run in parallel) lost its stylesheet; a sequential visit was used. A locator click on the AGENTS tab did not register; a pointer click at the tab's coordinates did.
- The footer below the FAQ was not captured.
- The speaker-icon button was not operated.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.warp.dev
- https://www.lapa.ninja/post/warp/
