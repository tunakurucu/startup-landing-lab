# InsForge (InstaCloud)

Inspected: 2026-10-20 · desktop-mobile-audit · typographic-technical

https://insforge.dev/

A fixed HUMAN/AGENT toggle swaps the whole marketing page for a monospace markdown overview with a 'Copy page' button, making the agent a first-class reader.

## Company evidence

YC: verified-yc; batch: P26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Black ground with a faint grey grid; a slim nav (Products, Blogs, Docs, Integrations, Templates, Pricing, Careers, Roadmap, language, Discord, GitHub count, Login, green Sign Up). Centred stack: orange 'Backed by Y Combinator' chip, a two-line headline with the first line mint green and the second white, a grey subhead, a small pixel-art robot sprite, then a wide white 'Start Building Today' button beside an outlined 'Read Docs'. A 'Works perfectly with' logo strip and a floating HUMAN/AGENT pill close the first screen.

### Typography

Measured h1 48px, weight 400, line-height 1.2, tracking 0, family Manrope; body 16px / 1.5 Manrope, measure 74ch. Families present: Manrope, Inter, Source Code Pro. The headline is regular weight rather than bold, with colour (mint vs white) doing the emphasis work. Service-card titles are small and regular; small monospace chips ('item', 'price', '<Hello World>') label the service cards. The AGENT view renders the entire page in a monospace family.

### Visual System

Near-black ground, thin grid lines in the hero and the 'Safe for Agents' section, one mint-green accent (headline line, active toggle, status dot, 'Real Apps'), orange only for the YC chip. Surfaces are dark cards with 1px borders; no photography. Imagery is a pixel-art robot sprite, a 3D-ish logo mark in a centre tile flanked by service icon tiles, small per-service glyphs, and avatar-plus-handle testimonial cards. Four large stat tiles at the bottom.

### Page Sequence

Nav → hero (chip, headline, subhead, robot, two CTAs) → 'Works perfectly with' logo marquee → 'Ship Faster' / 'Let your agent run the whole stack' icon-tile diagram → 'Everything You Need for Production' 12-card service grid → 'Safe for Agents to Operate' branch-preview diagram → Changelog four cards → 'Join Our Community' testimonials (GitHub Discussion, Discord buttons) → FAQ accordion → 'Start Building Real Apps' CTA → four stat tiles → footer with status line.

### Interaction

Operated the fixed HUMAN/AGENT tab pill: AGENT became aria-selected and the whole page was replaced by a monospace markdown document ('InsForge Machine-Readable Overview', front-matter listing index.md, agents.md, llms.txt) with a 'Copy page' button top right; the pill stayed fixed at the viewport bottom. On load the logo strip scrolled right-to-left and the robot sprite sat at different positions between captures. With reducedMotion set the marquee reported no running animation, yet the first screen still changed over one second, and scrolling to the bottom started line-draw animations in the 'Safe for Agents' diagram and digit-roll transitions in the stat tiles.

### Accessibility

Grey subhead and card descriptions on black are mid-contrast; the service-card chips are very small. The floating pill overlaps page content (the 'Works perfectly with' strip, and the 'Ship Faster' heading on mobile), and its tabs are about 33px tall. The first FAQ item is expanded by default. No horizontal overflow at either width. Measured desktop nav height was 0px.

### Mobile

Nav collapses to logo, globe icon and hamburger. Headline wraps to three lines at 32px; the two CTAs stack to full width. The logo strip persists, overlapped by the fixed HUMAN/AGENT pill. The 'Ship Faster' diagram recomposes as a centre tile with icon tiles in left and right columns; the 12-card service grid becomes a single column list; testimonials and stat tiles stack one per row. Page height grows from 6358px to 11193px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 48 | 32 |
| Headline weight | 400 | 400 |
| Headline tracking em | 0 | 0 |
| Body px | 16 | 16 |
| Characters per line | 74 | 37 |
| Sections | 8 | 8 |
| Reduced-motion rule | observed | observed |

## Interpretation

- If your buyer is partly a machine, publish the page in the machine's format too and make the switch a one-tap toggle rather than a hidden /llms.txt.
- Carry emphasis with one accent colour at regular weight rather than heavy type; it keeps a dense developer page quiet.
- Put the whole product surface in one scannable grid of small cards so breadth reads at a glance before any single feature is argued.
- A fixed floating control must have a reserved lane; otherwise it will collide with content, especially on narrow screens.

Suits infrastructure and developer platforms whose users arrive via coding agents, docs or CLIs and want to verify scope quickly. Wrong for a consumer or design-led product where the dark grid, monospace chips and feature-inventory layout would read as cold and undifferentiated.

Risk: Twelve equal-weight service cards and a 12-item nav dilute any single argument; nothing on the page shows the product actually being operated. The fixed pill overlaps content, the hero headline is regular weight at 48px and competes with the toggle for attention, and scroll-triggered line draws and counters keep running under reduced motion.

## Limitations

- First live load returned HTTP 502 and succeeded on retry; the AGENT view was inspected only at 1440 wide.
- Could not determine what moved on the first screen under reduced motion (likely the sprite), nor the behaviour of the Products dropdown or FAQ items beyond their default state.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://insforge.dev/
- https://www.ycombinator.com/companies/insforge-instacloud
