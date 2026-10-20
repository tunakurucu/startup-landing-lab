# Attio

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://attio.com

A centred one-line category claim over a live-typing CRM workspace, then a sticky five-step rail walks the revenue lifecycle through dense product panels.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A black announcement bar and white nav sit above a centred stack: a pill link ('GTM lessons from Elena Verna and more'), a one-line h1, a two-line grey subhead, and an outlined 'Talk to sales' beside a dark 'Start for free'. Below, a macOS-style frame of the Attio workspace (Basepoint sidebar, Home, a prompt box) begins inside the first screen and continues past the fold.

### Typography

Measured h1 64px, weight 600, line-height 1, tracking −0.02em, family interDisplay; body 18px inter at 1.3 line-height, about 48ch. Section headings are two-tone: a black clause followed by a mid-grey clause at the same size. Measured families also include JetBrains Mono and tiemposText; the only serif I saw is the large testimonial quote. Phone h1 40px, tracking −0.01em, body 15px.

### Visual System

White ground with a faint lavender wash under the hero and hairline vertical rules framing the content column. Product UI (tables, kanban, workflow nodes, charts, email drafts) is the main imagery. Mid-page the ground turns near-black: a spectral arc behind 'Universal Context™', a wireframe funnel with dots, integration icon tiles, an isometric SDK diagram. Small tinted pill labels ('Platform', 'Signals', 'Changelog') head sections. The measurement record flags a dark background and a canvas.

### Page Sequence

Hero + workspace frame → 10-logo grid → 'The intelligent system that never sleeps' with a sticky five-step rail (Build pipeline → Retain and expand) beside product panels → 'Live from day one' self-building record → dark 'Universal Context™' + five-claim strip → Signals → Connectivity icon row → 'SDK. API. MCP.' → serif testimonial on a dotted ground → 'Run at any scale' stats → tabbed customer stories → changelog cards → dark 'Agentic revenue runs on Attio.' CTA → footer.

### Copy

H1: 'Welcome to agentic revenue.' Subhead: Attio is the platform that builds pipeline, advances deals and grows accounts around the clock. Primary button 'Start for free' (secondary 'Talk to sales'). The category is named as CRM ('The only CRM with Universal Context™'; page title 'The CRM for agentic revenue'); the audience is sales and revenue teams ('Free your reps to sell', 'For the people who own the number').

### Interaction

Clicked the 'Railway' tab in Customer stories: aria-pressed became true, the tab cell shaded, and the panel swapped from '83% faster lead triage' (Granola, billboard photo) to '100% adoption, no admin' (Railway, team photo). On load the hero workspace typed 'How do I win my deal with GreenLeaf' and then switched to a deal view and a companies table showing 'AI is thinking…'. On scroll the rail highlight moved down the five steps. With reduced motion set, the hero demo still advanced between captures.

### Accessibility

Grey second clauses of headings and grey subheads are noticeably lighter than the black text on white. Phone: 'Dismiss banner' 32×32px, menu button 36×36px, 'Talk to sales' 36px tall, email field and 'Send me a demo' 40px tall; four links or buttons with no text or label were counted. No horizontal overflow at 1440 or 390. A cookie card covers the bottom-left corner until dismissed.

### Mobile

H1 drops to 40px over two centred lines. The hero buttons become an email field, a full-width 'Send me a demo' button and a 'Talk to sales →' link. The workspace frame is cropped at the right edge. The sticky rail becomes a horizontally scrolling tab strip (Build pipeline, Convert leads, Run sales motion…) with product tables running off-screen. A 'Stay ahead of GTM' email block sits before the final CTA; the footer stacks to two columns. Measured sections: 9.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 64 | 40 |
| Headline weight | 600 | 600 |
| Headline tracking em | -0.02 | -0.01 |
| Body px | 18 | 15 |
| Characters per line | 48 | 32 |
| Sections | 8 | 9 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Back the category claim in the first screen with a working-looking product session rather than an illustration.
- Walk a multi-stage workflow with a sticky step rail: one short claim per step, one dense, realistic product panel beside it.
- Use two-tone headlines (statement in full black, elaboration in grey) to carry a long proposition without a separate subhead.

Suits horizontal B2B software whose value spans several workflow stages and whose interface is presentable at close range. Wrong for a single-action product or an unfinished UI, where the rail would expose thin or repetitive screens.

Risk: At about 17,600px and eight-plus chapters the story is long and the platform message repeats; grey heading clauses trade contrast for rhythm; the hero demo keeps running under reduced motion; on phones the rail's tables are cropped and hard to read.

## Limitations

- Did not accept or dismiss the cookie card, so it covers part of several captures.
- Hero and section demos change over time; captures show different states and the full demo sequence was not verified.
- No control was operated at 390 wide; mobile is described from captures and measurements.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://attio.com
- https://saaslandingpage.com/attio/
