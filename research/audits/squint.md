# Squint

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://squint.ai

An enterprise industrial-AI page: a cobalt video band under a floating white nav, then a two-column h1 and a long sequence of use-case panels, tablet-in-the-field footage and stat tiles.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A white rounded nav bar floats 16 px inside a full-width cobalt-blue video band (dim footage of a checklist and a worker in a hard hat), with a separate blue "Book a demo" pill to its right and a Fast Company "Most Innovative Companies 2026" badge bottom-right of the band. Below the band on white, the first screen ends with the h1 in a left column and a large grey subline in the right column; there is no button in the hero copy itself.

### Typography

Measured family Abccameraplain for the h1 and the subline, both 48 px, line-height 1.0, tracking -0.02 em, h1 weight 500 in near-black and the subline in mid-grey (26 px on mobile). Inter, Geist Mono and ui-monospace are also loaded; small monospace-style caps eyebrows ("— OPERATIONAL KNOWLEDGE") label each section. Section titles are mid-size sans; stat tiles show very large figures (10x, 17%, $5M, 19%).

### Visual System

Cobalt blue is the single brand colour: hero band, demo button, link accents, icon tints and the footer. Sections alternate white, pale-blue-grey cards and one black band ("Purpose-built Industrial Agents" with wireframe diagrams). Imagery is workers in blue overalls holding rugged tablets, device mock-ups with checklists, isometric 3D renders (bottles, a car, a wind turbine, a garbage truck in the menu) and a node diagram linking sources (video, manuals, audits) to a central logo. Two customer logo marquees scroll continuously.

### Page Sequence

Floating nav + video band → h1 and subline → logo marquee → "Your operational knowledge is everywhere" node diagram → black "Purpose-built Industrial Agents" band → "Transform every part of your operations" four use-case cards → "Turn frontline execution into competitive advantage" four photo steps → "Squint drives real impact" four stat tiles → second logo marquee → "Built for your team" → "Fast to deploy. Easy to integrate. Built to scale." → documentation-gap teaser → "Ready to put Industrial AI to work?" with Book a demo → blue footer with newsletter and link columns.

### Interaction

Operated the "Solutions" nav item: hovering opened a full-width white mega-menu with a 3D garbage-truck render, four use-case cards and seven industry links; clicking changed nothing further and the URL stayed the same. On load the measurement recorded 138 running animations (143 on mobile), which the live visit attributed to the two logo marquees and the SVG node diagram (lines, circles, rects animating); the hero video was playing. With reduced motion on, running animations dropped to 4 and all seven videos were paused; a prefers-reduced-motion rule is present.

### Accessibility

The logo marquee moves continuously and its images sit far off-canvas, so it cannot be paused by the user. The nav's expanding items are divs rather than buttons in the control scan. The subline is mid-grey at 48 px on white, acceptable at that size. The Fast Company badge is small grey text over dark video. No horizontal overflow at either width.

### Mobile

The nav becomes a blue bar with logo, "Book a demo" pill and a hamburger; the hero video shows a silhouetted worker with the badge bottom-left. H1 and subline stack in one column at 26 px. Logo marquee rows stay as two scrolling bands. All four-card grids become single-column stacks (use cases, photo steps, stat tiles) and the stat tiles keep their 3D renders; the footer link columns stack. Page height 11728 px.

### Copy

H1: "Industrial AI that reduces downtime and improves quality." Primary action: "Book a demo" (nav and closing band); secondary "Login". First-screen proof is the Fast Company 2026 badge inside the video band; the customer logo marquee (BHE GT&S, Komatsu, Nailor, Konecranes, NextEra, Tenneco, AFL, Path Robotics, Fortera, PepsiCo and others) appears just below the fold.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 48 | 26 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.02 | -0.02 |
| Body px | 48 | 26 |
| Characters per line | 24 | 24 |
| Sections | 12 | 12 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Separate the brand band (video, badge) from the message (h1 on white) so the headline is never fighting footage for contrast.
- Put the outcome in the h1 and the mechanism in a large grey subline beside it, so a buyer reads the result first and the how second.
- Make the nav mega-menu carry the use-case and industry taxonomy so the homepage can stay a narrative rather than a catalogue.
- Anchor each proof tile to a named customer segment and a single figure, with one illustration, rather than a wall of quotes.

Suits enterprise B2B software sold through demos to operations and plant leadership; wrong for a self-serve or consumer product, and too heavy for a pre-traction startup without logos and stats to fill it.

Risk: Over a hundred continuously running animations and seven autoplay videos raise CPU and page weight; the logo marquee cannot be paused; the page runs past 10,000 px with many H1-level headings competing for hierarchy; the hero band spends the most valuable screen area on dim footage with no copy.

## Limitations

- Animation attribution was by DOM target type, not by visual inspection of each element.
- Customer logos, stats and the Fast Company badge were not verified beyond their presence on the page.
- The desktop full-page screenshot was truncated at 9000 px; lower sections were read from the live page and the mobile capture.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://squint.ai
- https://sequoiacap.com/companies/squint
