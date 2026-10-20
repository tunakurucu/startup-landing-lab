# Vercel

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://vercel.com

A two-word category claim beside the brand triangle, then three use-case chapters, each proven by a named customer's live product and one usage number.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Left: a two-line h1 'Agentic Infrastructure' above a black 'Deploy now' pill and an outlined 'Talk to sales' pill. Centre: a solid black triangle with a soft shadow, missing from the measurement's first-screen capture but present in later captures. Right: three short stacked lines saying who it is for. Wide empty margins above and below; a seven-logo customer row (Meta, Blackbox.ai, DoorDash, OpenAI, SpaceX, The Weather Company, Polymarket) closes the first screen.

### Typography

Measured h1 64px, weight 400, tracking -0.06em, line-height 1.0, family GeistSans; 48px with line-height 1.2 at 390. Body 16px/1.5 GeistSans; measured families GeistSans and Geist Mono. Section headings run near display size with visibly tight tracking and regular weight, so hierarchy comes from size and space, not boldness. Customer stats set the first clause in black and the rest in grey. At 390 the hero subline is set in the mono family (measured body family Geist Mono).

### Visual System

Near-white ground, black type, and no accent colour except a blue folded-corner graphic on the Backends card. The only imagery is the triangle mark and greyscale, bottom-faded screenshots of customer products (a Notion AI chat, the Zapier homepage, Mintlify docs). Pill buttons, 1px card borders and large blank areas; no photography, gradients or illustration.

### Page Sequence

Hero → customer logo row → 'Build agents on infrastructure that thinks like them' (Notion artifact, stat, features) → 'Ship apps that scale from zero to millions instantly' (Zapier) → 'Host platforms that serve every customer' (Mintlify) → 'Recently shipped' (Backends, Agents, Sandbox cards) → 'Built by you, or your agents' CTA (Deploy now, Onboard your agent) → six-column footer link grid.

### Copy

H1: 'Agentic Infrastructure'. No subhead paragraph; instead three lines: 'For coding agents', 'To ship apps and agents', 'Automated by agents'. Primary button 'Deploy now'; secondary 'Talk to sales'; the header adds 'Get a Demo', 'Log In' and 'Sign Up'. The h1 names the category and the lines name agents and the teams building them as the audience. Each use case carries one customer claim, e.g. 'Zapier serves over 100 million monthly website visits on Vercel.'

### Interaction

Hovering 'Products' opened a full-width menu of three columns (Agent Stack, Core Platform, Tools) in large type and greyed the page; a click straight after the hover left it closed. Captures 2s apart at the top and mid-page were identical. Customer artifacts appeared during slow scrolling but were blank after instant jumps; the full-page captures are blank from the Mintlify section down. At 390 the logo row moved on its own and the mono subline changed between captures. Under reduced motion the hero was unchanged and artifacts still appeared.

### Accessibility

No horizontal overflow at either width. At 390, 87 of 91 visible links and buttons were under 44px tall (hero buttons 40px, footer links 24px); the menu button is 44×44 and labelled 'Open menu'. The three Recently shipped card links (/backends, /agents, /sandbox) had no text content or aria-label. Grey second clauses and faded artifact text are lighter than body copy; one footer label computed at about 3.1:1.

### Mobile

The triangle moves above a centred 48px h1; the three audience lines collapse to one mono line that changed between captures; buttons stretch full width and stack; nav reduces to the triangle and a menu button; the logo row becomes a cropped strip that scrolls by itself. Case studies stack heading → artifact (overlapping cards cropped at the right edge) → stat → features. Page height measured 5557px against 5930px at 1440.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 64 | 48 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.06 | -0.06 |
| Body px | 16 | 16 |
| Characters per line | None | None |
| Sections | 4 | 5 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Organise a broad platform by the jobs buyers hire it for, and back each job with one named customer, one number and a four-item feature list.
- Let customers' real products be the imagery; a strict monochrome keeps those screenshots reading as evidence rather than decoration.
- Replace the subhead paragraph with a short list of who the product is for, placed beside the headline.

Suits broad infrastructure or platform companies with recognisable customers and several distinct buyer jobs. Wrong for an early developer tool without marquee customers, where readers need to see the API or a working example before they trust a category claim.

Risk: The first screen carries no product evidence and the h1 is an abstract category label. The proof depends on artifacts that render only as they scroll into view, so full-page captures and fast scrolls show large empty areas. No code, pricing or deploy flow appears on the page; developers have to click through to evaluate.

## Limitations

- The 390 full-page capture is blank below the second case study, so later mobile sections were not visually inspected.
- Whether the hero triangle responds to the pointer was not tested.
- Contrast was checked by computed-style sampling only, not a full audit.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://vercel.com
- https://saaslandingpage.com/vercel/
