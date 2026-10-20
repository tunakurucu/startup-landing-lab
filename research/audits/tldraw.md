# tldraw

Inspected: 2026-10-20 · desktop-mobile-audit · canvas-first

https://tldraw.dev

The hero ships the product itself: an npm command, a ten-line App.tsx and a live, drawable tldraw canvas side by side.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Left-aligned on white: two-line h1, one-line subhead with 'high-performance web canvas' in bold, a black monospaced 'npm create tldraw' button with copy icon and an 'or Build with a starter kit →' blue link. Below, two framed panels: a dark 'App.tsx' code panel with a ten-line React example, and a blue-bordered live canvas with toolbar (draw tool preselected) and style panel. A customer-logo strip starts at the fold.

### Typography

Measured h1 48px, weight 600, line-height 0.9, tracking -0.02em, family Archivo; 32px with -0.03em at 390. Body 14px/1.5 Archivo. Measured families also include Inter and Geist Mono; the command button and code panel are monospaced. Section headings are short, bold and left-aligned ('Why tldraw?', 'What's inside'); a customer quote is set large in grey italic.

### Visual System

White ground, full-width hairline dividers between sections and a narrow (1024px measured) content column. One accent blue for links, the Quick Start button and the canvas frame; black for the command button, code panel and footer. Case cards use tilted isometric screenshots of customer products. The tldraw toolbar and style panel recur as the motif: in the hero, in 'Save months of work' and in the starter-kit illustration.

### Page Sequence

Hero (command, code, live canvas) → customer-logo strip → 'Why tldraw?' four points in 2×2 → 'Powering software across industries' four case cards (ClickUp, Padlet, Mobbin, Jam) → 'What's inside' six features → 'Join the community' stats (51K stars, 74K followers, 8.72K Discord, 265.5K weekly npm downloads with chart) → 'Save months of work' wide canvas with three overlay cards → 'Starter kits' accordion → ClickUp quote and case-study links → black footer.

### Copy

H1: 'Build infinite canvas apps in React with the tldraw SDK'. Subhead: make whiteboards, diagrams and canvas tools with tldraw's high-performance web canvas. Primary action is the copyable command 'npm create tldraw'; nav button 'Quick Start'. The category ('infinite canvas apps', 'SDK') and audience (React developers) are both in the h1; case cards add industries (productivity, education, design, issue tracking).

### Interaction

Dragged across the hero canvas with the preselected draw tool: a black freehand stroke appeared and the undo button became active. On load the hero did not change over 1.5 s; the logo strip at the fold changed between frames in both normal and reduced-motion loads. Measurement counted 2 running animations on load and after scroll at both widths; reduced-motion rule 'observed'.

### Accessibility

Body text is 14px grey on white and the italic quote is mid-grey. At 390 a DOM check found the menu button 28×28px and text links ('Learn more', 'Read case study', 'Build with a starter kit') 20px tall. The hero canvas was operated by pointer only; keyboard access was not tested. No horizontal overflow.

### Mobile

The canvas moves above the code panel and fills the width; its toolbar shrinks to five tools plus an expand control and the style panel is hidden. Command button and starter-kit link stack; the nav becomes logo and menu icon. Features and case cards go to one column, images above text. Community stats regroup (stars full width, two small cards, then the npm chart). In 'Save months of work' the wide canvas is absent and its three cards stack. Footer becomes two columns.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 48 | 32 |
| Headline weight | 600 | 600 |
| Headline tracking em | -0.02 | -0.03 |
| Body px | 14 | 14 |
| Characters per line | None | 44 |
| Sections | 8 | 8 |
| Reduced-motion rule | observed | observed |

## Interpretation

- For an SDK, put the install command, the minimal code and the running result in one view so the claim can be checked in seconds.
- Make the hero demo the real component with a sensible tool preselected, so the first pointer action already produces output.
- Use the product's own interface chrome as the page's recurring motif instead of decorative illustration.
- For open-source developer products, show adoption as concrete numbers (stars, weekly downloads) next to named customer cases.

Suits embeddable UI SDKs, component libraries and editors whose output is visual and safe to run in the page. Wrong for backend or data APIs, where a live widget in the hero would show nothing meaningful.

Risk: The hero canvas starts empty, so a visitor who does not draw sees a framed blank box; the narrow column leaves wide unused margins at 1440. The main proof depends on a script-rendered component; in one live load at 390 the canvas toolbar had not rendered when captured.

## Limitations

- The first desktop visit ran in parallel with other sites and loaded without toolbar icons; the canvas interaction was repeated in a clean sequential load.
- Did not test keyboard operation of the canvas or the starter-kit accordion.
- Whether the 'Save months of work' canvas is interactive was not tested.
- Single browser, single inspection date; homepage content can change.
- Selected as a maintainer pick; no public design recognition was found and recorded.

## Sources

- https://tldraw.dev
