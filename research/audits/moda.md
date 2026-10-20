# Moda

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://moda.dev

A short white page whose hero is a clickable, HTML-built replica of the product dashboard, framed by blurred colour blocks instead of illustration.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

White ground, centred two-line h1 and a two-line grey subtitle, then a wide product dashboard (sidebar with Observe/Harness/Validate groups, three stat tiles, a 'Needs Attention' list, a line chart) that is cut off by the fold, with a 'Results' pass/fail card overlapping its lower right. Blurred rectangles in orange, yellow, blue and mint float in the margins on both sides. The nav has 'Book a demo' (outlined) and 'Sign in' (black) at right; no hero button below the subtitle.

### Typography

One sans family throughout, measured 'GT Standard L' with a mono companion 'gtStandardMono' for the prompt snippet. The h1 is small for a hero: 32px, weight 600, line-height 1.3, tracking -0.02em (26px, tracking 0 on mobile). Body measured 20px/1.4 at ~55ch (17px on mobile). Section headings ('Monitor every trace', 'Tailored to your workflow') are about the same size as the h1, so the hierarchy is flat and the dashboard carries the weight.

### Visual System

Pure white ground with hairline-bordered cards and light grey panels. Accent is a hot orange-red (nav dot, FAQ plus signs, 'Run comparison' button, 'High priority' labels) with yellow, sky-blue and mint used as soft radial gradients behind feature mockups. The repeated motif is the blurred colour block scattered around headlines, echoed on mobile. All imagery is rendered product UI; no photography, no illustration beyond integration logos on a thin orbit ring.

### Page Sequence

Nav → h1 + interactive dashboard hero → 'For teams running agents in production' logo marquee → 'The loop' headline with 'Book a demo' → three alternating feature rows (Monitor every trace / Find the mistakes they keep repeating / Test every change before it ships), each text left and gradient-backed UI card right → 'Tailored to your workflow' bento: Custom signals, Monitors, Right where you work (orbiting integration icons) → FAQ accordion (seven questions) → closing headline + 'Book a demo' → footer.

### Interaction

Operated: clicked the 'Problems' item in the hero dashboard's sidebar; the highlight moved from 'Home' to 'Problems' and nothing else in the panel changed, so the hero is live HTML with a selectable sidebar rather than an image. On load four CSS animations were running: a sideways logo marquee and three 'orbit' animations on the integration ring; the monitors mockup also exposes real selects, a number input and checkboxes. With reducedMotion: 'reduce' no animations were running and the scrolled screen was static, though two first-screen frames still differed.

### Accessibility

The dashboard mockup's text is very small on desktop and unreadable on mobile (sidebar buttons measured 51 × 11px; 31 links or buttons under 32px at 390). Grey subtitle and feature body copy sit at mid-grey on white. The hero dashboard is a cluster of real buttons and inputs that are decorative, so they appear in the tab order without a page-level purpose. No horizontal overflow at either width.

### Mobile

The h1 wraps to three lines at 26px; the dashboard shrinks to a 350px-wide image-like block with illegible text, and the floating colour blocks bunch below the logo row. Feature rows stack text-above-card; the bento becomes three stacked cards; the FAQ keeps its full-width rows. Nav collapses to logo plus hamburger with the two buttons hidden. Page height 5,516px versus 5,831px on desktop.

### Copy

h1: "Your agents should never make the same mistake twice."; the first action is the nav's "Book a demo" (there is no button in the hero body), repeated under 'The loop' and in the closing section. The first-screen proof is the dashboard itself with plausible numbers (109K conversations, 14.8% signal rate, 94% pass); customer logos (Final Round AI, Kanu, Brief, Corelayer, Autumn, CodeWisp) sit just under the fold.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 32 | 26 |
| Headline weight | 600 | 600 |
| Headline tracking em | -0.02 | 0 |
| Body px | 20 | 17 |
| Characters per line | 55 | 41 |
| Sections | 6 | 5 |
| Reduced-motion rule | observed | observed |

## Interpretation

- If the product is a dashboard, build the hero as working HTML and let it be clicked; a 32px headline is enough when the artefact underneath is the argument.
- Keep one accent colour for every interactive cue (nav dot, plus signs, primary button) and push the rest of the palette into soft gradients behind mockups.
- Alternate text-left/UI-right rows with one verb-led heading each ('Monitor', 'Find', 'Test') so a feature list reads as a loop.
- Put the FAQ on the homepage when the category is crowded; naming competitors in a question answers positioning cheaply.

Suits developer and ops tools whose UI is dense and legible at a glance, especially pre-launch teams without customer photos; wrong for consumer or brand-led products and for any product whose UI is not yet presentable.

Risk: The dashboard dominates the first screen but its text is small on desktop and lost on mobile. The hero has no in-body call to action, and the two nav buttons disappear on mobile, so the only visible CTA at 390 is below the logo row. Decorative buttons and inputs in the mockups add keyboard noise. The blurred colour blocks are the only brand gesture and read as placeholders.

## Limitations

- Which element changed between two first-screen frames under reduced motion was not isolated.
- Tablet widths not inspected; no interaction tested at 390 beyond rendering and measurement.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://moda.dev
- https://www.ycombinator.com/companies/moda
