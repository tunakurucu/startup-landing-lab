# Plain

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://www.plain.com

A centred two-tone promise, then four feature chapters that each pair a wide product video with three close-up UI fragments, ending in a 29-minute onboarding ladder.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled; no control could be operated (see limitations)
- tablet: not inspected
- mobile: 390 × 844: rendered and measured; menu toggle operated

## Observations

### Hero

Centred on white: a two-line h1 with the first line bright green and the second near-black, a two-line subhead, and two square-cornered mono buttons ('BOOK A DEMO' filled green, 'START A TRIAL' outlined). Below sits a wide pale-green panel framed by solid and dashed green curves that holds a product video, with a full-width logo strip across it at the fold. A dark green bar above the nav promotes Ari; a cookie prompt covered the lower right.

### Typography

Measured h1 80px, weight 400, tracking -0.02em, line-height 1.0, family ABC Favorit Regular; 46px at 390. Body 18px/1.3 with a 73ch measure at 1440, 20px at 390. Measured families ABC Favorit Regular and Medium, Roboto and Geist Mono. Mono uppercase is reserved for buttons, eyebrows ('HUNDREDS OF FAST-MOVING TEAMS RELY ON PLAIN'), chapter pills (AGENTS, WORKFLOWS) and 'DISCOVER …' links.

### Visual System

White ground alternating with deep forest-green bands with rounded top corners; one bright green accent for buttons, links, icons and line-art. Pale green panels with green curves frame product media; warm off-white cards hold small UI fragments (an if/else rule, an agent reply, 'Create Linear Ticket', auto-triage labels). Dotted vertical lines connect sections. A maroon Granola case-study card breaks the green palette.

### Page Sequence

Ari bar → nav → centred hero → product panel and logo strip → second logo row → 'Tools add [icon] distance.' problem → dark 'Meet a new approach: Support Infrastructure' with six capability cards → Agents → Workflows → Sidekick → Insights chapters → dark 'Speed, meet power.' comparison rows → 'Take their word for it' testimonials → 'Here's what you can do in 29 mins and 59 secs' (5/15/29 mins) → security → closing CTA → footer.

### Copy

H1: 'Build support your own way'. Subhead: Plain is AI support infrastructure that lets B2B teams build anything, no-code or all-code. Primary button 'BOOK A DEMO'; secondary 'START A TRIAL', with 'START FOR FREE' in the closing CTA. The page names the category 'Support Infrastructure' and the audience 'B2B teams', frames the problem as 'Tools add distance.', and addresses comparison shoppers directly ('Here's why, and when, we win').

### Interaction

No tabs, toggles, carousels or demo inputs were found in a scan of buttons, tabs and pointer-cursor elements. The header 'Product' dropdown, built as a link, did not open on hover or click, and the floating chat launcher sat under the cookie prompt. Product media are videos that did not play here. Captures 2s apart at top and mid-page were identical with and without reduced motion; the measurement counted 2 animations at 1440 and 50 on load, 143 after scroll at 390. At 390 the menu opened as a full-screen accordion.

### Accessibility

The accent green (computed rgb 26,211,121) on white is about 2.0:1, used for the first h1 line and 'START A TRIAL'; light text on the green 'BOOK A DEMO' is about 1.9:1, as is 'START FOR FREE' on pale green. At 390 the menu toggle is a 24×24 element exposed as neither button nor link, the logo link had no name, 11 of 15 targets were under 24px tall, and the chat bubble overlapped 'BOOK A DEMO' in the open menu. No horizontal overflow.

### Mobile

The h1 stays centred at 46px; buttons stretch and stack; the announcement shortens to 'Your new autonomous support agent'. The hero panel shows product UI (a webhook ticket thread with an 'Ask a follow up' composer). The problem line's single Slack icon becomes a row of app icons with a 999+ badge; the dark section heading overlays a monitor photo; capability cards and chapters stack (pill → media → headline → text). Page height grows from 12,155px to 16,328px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 80 | 46 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.02 | -0.02 |
| Body px | 18 | 20 |
| Characters per line | 73 | 32 |
| Sections | 0 | 0 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- Under each wide product view, add three close-up fragments of real states (a routing rule, an agent reply, a created ticket) so every feature claim has something concrete to point at.
- Name the pain in a short visual phrase before introducing the new category.
- Turn onboarding claims into a time ladder (5, 15, 29 minutes) with specific tasks at each step.
- Reserve a mono uppercase voice for actions and labels so navigation cues never blend into prose.

Suits B2B workflow software sold against incumbents, where buyers want to see mechanics, routing and integrations. Wrong for a single-action consumer product, where twelve thousand pixels of repeated chapters would bury the one thing to do.

Risk: The brand green fails text contrast on the h1, buttons and links. Wide product proof depends on videos that this browser could not play, leaving the static fragments to carry the evidence alone. Four identical chapter templates flatten priority, and the page is very long on both widths.

## Limitations

- No desktop control could be operated: the page has no tabs, toggles, carousels or demo inputs, and the header dropdown and chat launcher did not respond in headless Chromium.
- Product videos did not play in this Chromium build (it reports no H.264 support; WebM sources never loaded), so their content was not seen at 1440.
- Contrast values come from computed styles or screenshot pixels, not a full audit.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.plain.com
- https://www.siteinspire.com/website/10881-plain
