# Tutor Intelligence

Inspected: 2026-10-20 · desktop-mobile-audit · expressive-world

https://tutorintelligence.com/

A graph-paper hardware page that lets an oversized robot-head render break out of the hero under a light serif headline, with mono-caps navigation and one yellow accent.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

An amber announcement bar in mono caps, then a sticky nav (logo, '+ ROBOTS', '+ SOLUTIONS', 'PRICING', '+ COMPANY', 'CAREERS', 'GET IN TOUCH', 'SIGN IN', black 'SIGN UP'). The hero sits on a graph-paper grid: a centred two-line serif h1 in a pale panel, below it a large white robot sensor-head render on a column that extends past the fold. Bottom-left a grey panel holds the one-sentence description with '$14 an hour'; bottom-right a video thumbnail with play control, a yellow 'GET IN TOUCH' and a white 'DISCOVER OUR RESEARCH' button.

### Typography

Measured h1 72px (32px mobile), weight 300, tracking -0.05em, line-height 1, family Sentient (a serif). Body 16px/1.4 (14px mobile) in Manrope. Roboto Mono carries the announcement bar, nav items, buttons and footer links in caps. Mid-page h2s reuse the serif in blue at roughly 36px in a left column; the 'Get in touch' form title is the same serif in black.

### Visual System

Light grey graph-paper grid behind the hero, plain white for the rest, with hairline blue rules separating the three solution rows. Accents: an amber bar, a yellow button and form panel (the panel repeats the grid motif in darker yellow), one green button for Sonny, and blue for the solutions text. Imagery is product-led: a CG render of the robot head, two photographs of robots in warehouses, a frosted-glass office photo. Nav items carry '+' prefixes that turn to '−' when open.

### Page Sequence

Announcement bar → nav → hero (h1, robot render, blurb, video thumb, two buttons) → 'A robotics research and deployment company' photo + text + button → 'Meet Cassie' text + warehouse photo + yellow button → 'Meet Sonny' photo + text + green button → three blue-ruled rows: palletizing, fleet picking, usage-based pricing, each with a short paragraph and underlined links → yellow 'Get in touch' form (first name, last name, work email, mobile phone) → footer with mono link columns.

### Interaction

Operated the '+ ROBOTS' nav button: a full-width white panel dropped over the hero with a photo of the Cassie robot, the links 'Cassie' and 'Sonny', and a small grid tile graphic; the '+' became '−' and the label turned blue. Nothing ran on load; sections fade in as they scroll into view (8 transitions and ~285 elements moved after a scroll). With reducedMotion 'reduce' all heading text was present on load and nothing moved after scrolling. The two videos stayed paused in headless.

### Accessibility

Without reduced motion, the h1 and h2 elements still had empty text about four seconds after load (they were populated under 'reduce'), and lower sections stay blank until their reveal fires. Mono caps nav and footer links are small (not measured). The three nav menu buttons exposed no text name and no aria-expanded value after opening. Measured mobile body is 14px. The announcement bar plus nav takes 111px of sticky height on desktop.

### Mobile

Announcement bar wraps to two lines; nav collapses to logo and hamburger. Hero stacks h1 (32px), the robot render cropped at the right edge, the blurb, the video thumbnail, then the yellow and white buttons full-width. Company, Cassie and Sonny sections become text-then-photo stacks; the blue-ruled rows stack heading over paragraph; the form sits in a full-width yellow panel; footer links become one long column.

### Copy

h1: "Intelligent robot workers for industry". Primary action: "GET IN TOUCH" (yellow), with "DISCOVER OUR RESEARCH" beside it. First-screen proof is the video thumbnail of a robot palletizing and the price claim 'from $14 an hour'; no logos or counts appear.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 72 | 32 |
| Headline weight | 300 | 300 |
| Headline tracking em | -0.05 | -0.05 |
| Body px | 16 | 14 |
| Characters per line | 36 | 54 |
| Sections | 4 | 4 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Let a single product render break the hero's frame so the hardware, not the copy, is the first thing read.
- Use mono caps for all wayfinding and a serif only for statements, so hierarchy survives without colour.
- State price in the first screen when the business model ('from $14 an hour') is itself the differentiator.
- Keep one accent for action (yellow) and a second (blue) for reading, so buttons never compete with headings.

Suits hardware and robotics companies with a photogenic product and a sales-led motion; wrong for software without a physical object to render, or for any page that must be readable before scroll-reveal scripts run.

Risk: Scroll-gated reveals leave text absent for assistive tech and captures until motion fires; the hero spends its right column on a paused video thumbnail; mobile body at 14px and small mono caps reduce readability; the announcement bar plus sticky nav consume a large share of the mobile screen.

## Limitations

- Videos did not play in headless Chromium, so the reel content was not seen.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://tutorintelligence.com/
- https://neo.com/startups?tab=Neo%20portfolio
