# Paper

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://paper.design/

A scripted agent terminal builds one playlist page inside a realistic editor window, and the page itself is drawn as an artboard with rulers and paper grain.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Left-aligned stack on a warm, grainy paper ground: a two-tone headline (dark 'design incredible', then a grey continuation), a one-sentence subhead, a black 'download Paper' button and a text link 'open Paper in the browser →'. From about y=430 a full-width editor window (pages panel, empty canvas, layout inspector) fills the rest of the screen, overlapped by a terminal pane running the prompt 'build my playlist screen with real data'. A tick-mark ruler and a folded-paper diagonal sit at the right edge.

### Typography

h1 'design incredible' measured 48px, weight 360, line-height 1, tracking -0.02em, measured family Matter; the grey continuation is an h2 at the same size and weight, so the headline reads as one three-line block. Section h2s repeat 48px/360; card h3s are 18px weight 550. Body 18px/1.6, measure 67ch, Matter. Terminal text is monospace (Paper Mono is in the measured family list). Phone h1 40px, tracking -0.015em.

### Visual System

Off-white paper ground with visible grain (computed lab L 94). The content column is framed by hairlines with small square handles at the corners, like a selected artboard, plus a ruler and folded-corner diagonals at the right edge. Product windows use light-grey desktop chrome. Accent is sparse: one soft blue download button and coloured multiplayer cursor tags. Imagery is dithered or halftone (vinyl photo, Series A collage) and a Mondrian-like grid. Statement sections sit inside large white semicircles.

### Page Sequence

Hero with editor and agent terminal → 'used in production by designers at' (11 logos) → 'Introducing Paper Desktop' with a cycling app-icon dock and download → semicircle 'finally a continuous loop, from Paper to code and back' → editor demo ('Vinyl Sundays' playlist page) → two feature cards → 'connected to real content, real data' + demo → two cards → 'hand off boilerplate work' + demo → two cards → semicircle 'the full-circle, anti-slop workflow' → roadmap → 'what's new' and Series A cards → footer.

### Copy

h1: 'design incredible', continued by 'the connected canvas for teams shipping with agents'. Subhead: Paper connects teams, agents, code and data on one design space built on web standards, 'so nothing gets lost in translation'. Primary button 'download Paper' (later buttons read 'download for Linux' in this browser); secondary 'open Paper in the browser →'. Category named as a 'connected canvas'; audience as teams working with agents and designers at named companies. Copy is mostly lower-case, nav and buttons included, with lines like 'good bye lorem ipsum'.

### Interaction

Clicked the 'Paper' app icon in the Desktop dock: the centre icon changed from a solid blue mark to a teal noise-filled version; the side icons cycled through other app icons before and after. On load the hero terminal typed its prompt and listed tool calls while the canvas stayed empty; later editor demos replayed typed prompts ('build my…', 'generate 6 mobi…') beside the playlist page. The nav stayed pinned. With reduced motion the hero loaded finished (full log, built page) and frames 1.5 s apart did not change.

### Accessibility

The header logo link to '/' has no accessible name. The grey headline continuation computes to about 2.8:1 against the ground (lab L 60 on L 94), below 3:1 for large text. White text on the soft blue download button reads faint by eye. At 390 the menu is a 44×44 'Open menu' button and the main button is 40px tall; 34 of 38 visible targets are under 44px tall, two footer labels under 24px. No horizontal overflow at 1440 or 390.

### Mobile

The header shows only the logo and a hamburger. The headline wraps to five lines (h1 40px), the subhead follows, and only 'download Paper' remains in the first screen. The editor window shows mainly its terminal pane. Feature card pairs stack. In the 390 full-page capture the demo windows under 'finally a continuous loop' and 'connected to real content' rendered as empty panels. The measurement counts 10 sections at 1440 and 4 at 390; page height 9,585px against 9,312px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 48 | 40 |
| Headline weight | 360 | 360 |
| Headline tracking em | -0.02 | -0.015 |
| Body px | 18 | 18 |
| Characters per line | 67 | 34 |
| Sections | 10 | 4 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- Script an agent session inside a realistic editor window and reuse the same finished artifact in every demo, so each feature reads as a step on one piece of work.
- Dress the page in the product's own medium (artboard handles, rulers, paper grain) so the brand and the tool share one visual language.
- When reduced motion is requested, load a scripted demo in its finished state rather than an empty canvas.
- Split the headline into a short dark claim and a lighter category line to get a memorable phrase and a clear category in one block.

Suits design and creative tools whose output can be shown being built, especially ones selling an agent or code workflow to designers. Wrong for a product with no visual artifact, such as an API or a back-office service, where a staged editor would be decoration.

Risk: Light 360-weight type and the grey second headline line trade contrast for tone. The same editor-window demo appears four times, so the middle of the page repeats itself, and the feature cards between demos are text-only. The download button names the visitor's OS ('download for Linux'). In the phone capture several demo panels rendered empty, leaving large blank areas.

## Limitations

- The dock icon change after the click may be a timed swap rather than a response to the click; the side icons cycle on their own.
- Buttons read 'download for Linux' because the headless browser reports Linux; other platforms will see a different label.
- The empty demo panels in the 390 full-page capture may fill in on a real phone after lazy loading; not verified.
- The measurement record's hero height (8,584px) and the drop from 10 to 4 sections at 390 were not explained by what I saw.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://paper.design/
- https://saaslandingpage.com/paper/
