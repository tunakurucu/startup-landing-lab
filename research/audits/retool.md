# Retool

Inspected: 2026-10-20 · desktop-mobile-audit · functional-entrance

https://retool.com

A prompt box, not a screenshot, is the hero's centrepiece: the page asks visitors to describe an app, then spends most of its length on governance and enterprise proof.

## Company evidence

YC: verified-yc; batch: W17. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A gradient announcement bar and a dark nav sit above a rounded blue-to-rust gradient panel, with tilted, dimmed dashboard screenshots behind the content. Centred in the panel: a light-weight h1, a 'NEW: Explore the new Retool app builder for free' pill, and a large cream prompt box (placeholder 'Write a prompt, use @ to include data', 'Starter prompts', submit arrow). Under the box are two dropdowns, 'Import code' and 'Build with AI agents', with tool logos, and a 'Watch the film' pill.

### Typography

Display and body measured as saansFont: h1 72px, weight 300, line-height 1, tracking -0.022em. Section heads 48px/300; 'Start today' 60px/300. Labels, nav items and buttons use measured pxGroteskFont at 14px, with 12px uppercase in places; ui-monospace appears in code. Body 16px/1.5 with a 36ch measure. At 390 the h1 is 40px/300. The light weight at large size keeps headlines quiet against the dark ground.

### Visual System

Near-black ground (rgb 21,21,21) with off-white text (rgb 233,235,223) and cream surfaces for interactive objects (the prompt box, the primary pill button). Blue, violet and rust gradients appear only in the announcement bar, hero panel and closing scene. Product imagery: dashboard screenshots, an app gallery, and tall rounded media cards (MCP terminal, import drop zone, integrations constellation, compliance rings with SOC 2, ISO 27001 and SAML SSO). The closing scene shows glassy 3D shapes and a reaching hand.

### Page Sequence

Announcement bar → nav → hero prompt panel → 'Apps that mean business' screenshot gallery → split scroll: pinned left heads ('Build powerful apps from anywhere', 'Securely connect to your production data', 'Ship safely, with governance built in') beside tall media cards → 'Why enterprises choose Retool', three columns → logo row and outcome grid ('Ramp saved $8M and 20,000+ hours') with industry cards → 'Start today', prompt box repeated → 'Get the latest from Retool' posts → footer with oversized wordmark.

### Copy

h1: 'Secure your vibe-coded apps'. There is no subhead sentence; the 'NEW' pill line ('Explore the new Retool app builder for free') stands in for one. The announcement bar promotes 'A unified harness to run and govern AI agents'. Nav primary: 'Start for free'. Nav secondary: 'Contact sales' ('Book a demo' on one load). The audience is framed as enterprises ('Why enterprises choose Retool'). The page title says 'Build internal software better, with AI.'

### Interaction

'Starter prompts' did not open after two clicks, so I operated 'Import code': it opened an 'Import external React apps' panel with React App, Lovable and Replit tabs and an explanatory accordion. The prompt box then held 'Build a customer support queue'; other captures show other example prompts. On load the placeholder changed brightness between captures, and getAnimations() listed a text shimmer and a border pulse. On scroll the left heads stay pinned as media cards pass. With reduced motion only the shimmer was still listed.

### Accessibility

Over mid-page content the fixed nav has no opaque backdrop: in one desktop capture, body copy showed through behind the nav links. The 'Import code' and 'Build with AI agents' labels are 60% black on light grey, about 4.3:1 from computed colours. There is a skip link. The 390 menu button is labelled 'Open navigation' (40×40), and no unnamed buttons or links were found. At 390, 82 of 95 targets are under 44px tall, and the tool-logo buttons are 20×20. No horizontal overflow.

### Mobile

The hero keeps its order in a narrower rounded panel: a two-line 40px h1, the pill, a prompt box showing a typed example, and dropdowns shortened to 'Import' and 'Build'. A two-row logo grid follows (Amazon, Taco Bell, Conagra, EA, Lyft, Quest, Boeing, Adobe). The app gallery becomes a horizontal strip. The pinned split becomes stacked items, each with its media card above the copy. The nav shrinks to the wordmark, 'Contact sales' and a menu button.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 72 | 40 |
| Headline weight | 300 | 300 |
| Headline tracking em | -0.022 | -0.01 |
| Body px | 16 | 16 |
| Characters per line | 36 | 36 |
| Sections | 7 | 7 |
| Reduced-motion rule | observed | observed |

## Interpretation

- When the product starts from a sentence, make the input itself the hero object, with secondary entrances (import, agent integrations) beside it.
- Name the visitor's current problem in the headline ('vibe-coded apps') and let the section order answer it with data-access, governance and security proof.
- Walk through several capabilities with a pinned heading column and scrolling media cards, rather than a new section for each.
- Repeat the hero input at the close, so the last screen offers an action rather than a summary.

Suits AI builders and agent platforms where a prompt is the real first step, and enterprise-leaning products that must pair speed with control. Wrong where the input cannot be described in a sentence, or where a prompt box that only leads to sign-up would read as a fake demo.

Risk: The hero prompt produces nothing until sign-up, so it promises an interaction and then defers it. The h1 is four words, there is no subhead, and a promo pill sits beside it; 'internal software' appears in the page title but not on the first screen. Captures show large dark gaps where content had not rendered. The transparent fixed nav collides with body text, and copy and nav labels varied between loads.

## Limitations

- The hero film and video did not load in the test Chromium (no H.264), and 'Watch the film' was not opened.
- 'Starter prompts' gave no visible response; it may need a state I did not reach.
- The nav CTA label ('Contact sales' vs 'Book a demo') and the example prompts varied between loads; this may be an experiment.
- Several scroll-revealed cards and images stayed blank during fast scrolling and in the measurement full-page capture; one live load arrived unstyled and was reloaded.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://retool.com
- https://saaslandingpage.com/retool/
- https://www.ycombinator.com/companies/retool
