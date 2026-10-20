# Ambiguous AI

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://www.ambiguous.ai

Full-fidelity app mockups switched by task tabs, plus a split 'what your team sees / what your agent runs' panel, stage the human-and-agent workspace claim.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A floating rounded white nav bar sits over a pale ground with a blue haze at the top right. Centred: a 'Backed by a16z Speedrun' line, a two-line h1 with 'Human-AI Collaboration' in blue, a one-line subhead, a 'Works with' row of six agent-tool logos, an orange 'Create a workspace' button beside a grey 'Invite your agent' button, and three check-marked terms. Colourful app icons (docs, chat, calendar, mail) float at both edges.

### Typography

Measured h1: Inter, 72px, weight 700, tracking -0.02em, line-height 1.1, set in Title Case. Measured body: Google Sans Flex, 16px, line-height 1.5, 88ch measure. JetBrains Mono is present and used in the agent code panel ('agent.ts'). Section headings are bold sans at a smaller size, centred.

### Visual System

Near-white and very pale grey bands with a soft blue gradient at hero and closing CTA. Orange is the single action colour; blue marks the h1 accent. Product evidence is full-width light-theme app chrome (Docs, Sheets, Mail) with a left rail of coloured app icons. Glossy 3D-style app icons are the recurring motif; customer-employer logos (Uber, Microsoft, Amazon, Meta, Google) appear greyed.

### Page Sequence

Hero → 'Brought to you by AI professionals from' logo row → '18 AI-Native Applications in One Place' app directory beside a Docs preview → 'An AI coworker that actually does the work' with four scenario tabs and app mockup → 'One workspace, two ways in' app tabs with UI and code side by side → pricing comparison ($465/mo vs $0) → testimonial carousel → FAQ accordion → 'Start free. 18 apps included.' CTA with MCP/CLI/REST links → footer.

### Interaction

Operated the 'Fill a column from a doc' tab: the mockup switched from a Docs NDA with a comment thread to a Sheets 'Prospect Research' table with an 'Ambi' assistant side panel (empty at the moment of capture). On load and scroll no frame-to-frame change was detected in the first screen at 1440. With reducedMotion 'reduce' the first screen also showed no change.

### Accessibility

Greyed employer logos and small check-marked terms are low contrast on the pale ground. App mockup text inside the scenario panels is very small at both widths. On mobile the main buttons are full width and well over 44px tall, but scenario tabs are clipped at the right edge of their row. No horizontal page overflow at 1440 or 390.

### Mobile

At 390 the nav keeps the logo, a compact orange 'Create a workspace' button and a menu icon. Floating app icons gather into a single row above the h1, which drops to a measured 35.1px over three lines. 'Works with' logos form a 3×2 grid, buttons go full width, the app directory list is dropped in favour of Docs/Sheets/Slides pills over the preview, and scenario tabs scroll horizontally.

### Copy

H1: "The Workspace Built For Human-AI Collaboration."; primary action "Create a workspace" (secondary "Invite your agent"). First-screen proof is the a16z Speedrun backing line, compatibility logos for agent tools and three plan terms (free up to 5 members, 1,000 AI actions a month, sign up in under 60 seconds).

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 72 | 35.1 |
| Headline weight | 700 | 700 |
| Headline tracking em | -0.02 | -0.02 |
| Body px | 16 | 16 |
| Characters per line | 88 | 44 |
| Sections | 7 | 7 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Give the agent its own entry point beside the human one ('Invite your agent' next to 'Create a workspace') when agents are first-class users.
- Show the same action twice, as UI the team sees and as the code the agent runs, to prove an API-parity claim in one glance.
- Name scenario tabs as concrete jobs ('Redline a contract', 'Triage your inbox') instead of feature names.
- Put the price comparison against the stack being replaced in the page body when the product's pitch is consolidation.

Suits horizontal productivity suites and agent platforms where breadth and agent compatibility are the differentiators. It would be wrong for a single-purpose tool, where 18 apps and many tabs would dilute one clear job.

Risk: Inter in bold Title Case with a blue accent word reads as a common AI-startup default. Breadth (18 apps, many tabs) risks diluting the core claim, the mockups are too small to read on phones, and the employer-logo row signals founders' backgrounds rather than customers, which a visitor could misread.

## Limitations

- The scenario panel may play a scripted sequence after a tab switch; only one frame 1.5s after the click was captured.
- Pricing figures and testimonial metrics were not independently verified.
- Mobile 'animations_on_load' measured 6 running animations; what moved at 390 was not observed live.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.ambiguous.ai
- https://speedrun.a16z.com/companies/ambiguous-ai
