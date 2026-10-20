# Cursor

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://cursor.com

Small, quiet type defers to staged product windows—agent queue, CLI, Slack, phone—set on painted landscapes, so the product's working state carries the pitch.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A thin nav, then a left-aligned two-line h1 and two pill buttons (dark download, light 'Request a demo →'); no subhead. Below, a full-width beige panel holds a 'Cursor Desktop' window mock—agent task sidebar ('In progress', 'Ready for review'), chat pane, browser or editor pane—overlapped by a 'Cursor CLI' window, set over a painted landscape. The demo fills the lower half of the first screen.

### Typography

Measured h1 26px/1.3, weight 400, tracking -0.012em, CursorGothic—small for a hero; 24.4px at 390. Measured body 17.3px/1.3 EB Garamond; the only serif visible is inside the hero's mock 'Acme Labs' page, while section copy is a grotesque like the h1. berkeleyMono and system-ui are also measured; CLI text is monospace. Section heads pair a dark lead sentence with a grey continuation. The largest type is the closing 'Try Cursor now.'

### Visual System

Warm off-white ground with slightly darker beige panels and borderless cards; near-black pill buttons; orange reserved for text links ('Learn about cloud agents →'). Every feature panel pairs copy with a macOS-style window (traffic-light dots) floating over a painted landscape. Customer logos sit in eight grey tiles. Two photographs (code on monitors, a team at a whiteboard); otherwise all imagery is product UI.

### Page Sequence

Hero (h1, CTAs, desktop + CLI demo) → logo tiles 'Trusted every day by teams that build world-class software' → four alternating feature panels (agents turn ideas into code → works autonomously, in parallel → in every tool: terminal, Slack, GitHub, with a curl install line → hand work to AI teammates) → 'The new way to build software.' six named testimonials → 'Stay on the frontier' three cards → dated changelog → research-team photo panel → recent blog highlights → 'Try Cursor now.' → footer with theme toggle.

### Copy

h1: 'Cursor is your coding agent for building ambitious software.' No hero subhead. The primary button is platform-specific: 'Download for Linux' in the measurement capture, 'Download for macOS' in the live visit, 'Get started →' at 390. The category is named directly ('coding agent'); audience is implied by 'teams that build world-class software' and the enterprise card's 'Trusted by over half of the Fortune 500'.

### Interaction

Clicked the 'presence.ts' file tab in the first feature panel's editor mock: only a hover state appeared (a close ×); the panel stayed on feature-prd.md. Frame pairs 1–1.5 s apart at the top and eight scroll positions showed no visible change. Demo windows (Slack, CLI, phone repo list) were empty when scrolled into view live but filled in the measurement capture, and the hero showed a different task state in each capture. Reduced motion: sampled frames still.

### Accessibility

Grey continuation sentences and grey card metadata sit on beige at visibly reduced contrast. Demo windows are built from real DOM controls: four icon-only buttons in them have no accessible name and two textareas are labelled only by placeholder. 30 visible controls at 390 are under 24px in one dimension, mostly inside demos (model pickers ~19px tall). No horizontal overflow at either width (measured). A cookie banner covers the lower first screen in the measurement captures.

### Mobile

Nav reduces to logo, 'Sign in' and a menu icon; the two hero buttons become one 'Get started →'. The hero demo keeps desktop scale and is cropped by its frame's right edge. Logo tiles become 4×2; feature panels stack copy above demo; testimonials drop from six to three; frontier cards stack; changelog and blog rows become horizontal strips with the next card cut off at the edge; footer goes to two columns.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 26 | 24.4 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.012 | -0.013 |
| Body px | 17.3 | 16.2 |
| Characters per line | 48 | 48 |
| Sections | 8 | 9 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Let the product carry the hero: a modest headline and two buttons leave room for a large, realistic working-state window above the fold.
- Use one staging device—an app window over the same painted backdrop—in every feature section so varied demos read as one system.
- Split each section head into a dark claim and a grey elaboration to get headline and subhead in one typographic block.
- Match the primary download button to the visitor's platform so the first action needs no choice.

Suits products whose interface is the proof—editors, agent consoles, developer tools—sold to audiences who recognise the UI. Wrong for back-end or abstract products (a payments API, a compliance engine) where a window mock shows nothing a visitor can read.

Risk: A 26px h1 gives the category claim little weight, so the page leans on brand recognition. Demo windows are dense small-text UI, unreadable when cropped at 390, and their filled state depends on timing—early viewers can see empty windows. Grey secondary text on beige lowers contrast, and tabs that look clickable do nothing.

## Limitations

- The live visit rendered without the painted backdrops and some card images; visual-system notes rely on the measurement captures.
- A second desktop load returned HTTP 502 and was stopped as instructed; observations use the first live visit.
- Could not establish when or how the demo windows fill with content; no motion appeared in 1–1.5 s frame pairs.
- Cookie banner and platform-specific button label varied between captures.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://cursor.com
- https://saaslandingpage.com/cursor/
