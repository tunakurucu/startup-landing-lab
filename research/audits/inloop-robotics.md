# InLoop Robotics

Inspected: 2026-10-20 · desktop-mobile-audit · functional-entrance

https://inloop-robotics.com/

The first screen withholds the product behind a 14-day countdown drawn inside a loop-shaped stroke, then switches to a light, conventional capabilities-and-ROI page.

## Company evidence

YC: verified-yc; batch: P26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Black full-height screen. A large pill-shaped outline (echoing the two linked O's of the INLOOP wordmark) encloses four big numerals labelled days, hours, minutes, seconds; a thick white stroke travels around the pill. Below it the single word 'Loading..'. No headline, no subhead, no hero button. The nav is a floating dark rounded bar with the wordmark, Home, Team and an orange 'Contact' pill.

### Typography

No h1 was measured at either width. Measured display 72px desktop and 36px mobile, body 14px at 1.6 line-height, measure 54ch desktop and 36ch mobile; the only measured family is Instrument Sans. Countdown numerals are bold and large; section headlines are bold, tight sans; body copy is small grey sans. An orange all-caps eyebrow ('CAPABILITIES') labels sections.

### Visual System

Two grounds: black for the hero and the closing CTA/footer, white for everything between. One orange accent for buttons, eyebrows and the active-tab progress bar. Surfaces are light-grey rounded panels and white cards with soft shadows. Imagery is video: a hero video and seven task videos presented as tilted black cards with play buttons scattered across a grey panel.

### Page Sequence

Floating nav → countdown hero ('Loading..') → 'Run the Full Labor Workflow' accordion of five capabilities beside a video pane → 'Maximum impact. Minimal investment.' two-card comparison (Traditional Automation vs InLoop RaaS, Calculate Your ROI) → 'Take a look around' scattered video cards, Book a Demo → FAQ accordion (4 items) → black 'Ready to automate?' Schedule a Demo → footer.

### Interaction

Operated the capabilities accordion: it auto-advances (an orange progress bar runs under the active item); clicking 'Prepare Content' collapsed 'Kitting', expanded the new description and reset the bar. The video pane beside it stayed blank grey in the headless browser. On load the countdown ticked and the stroke moved around the pill; FAQ items were blank in the full-page capture but present live after scrolling. With reduced motion the progress bar still animated and the countdown still ticked.

### Accessibility

The sticky dark nav bar is semi-transparent, so light-page headlines show through behind it when scrolled. Grey body text at 14px on white and grey labels on black (days/hours) are low-contrast. The floating play buttons on video cards are 33×33px. Accordion buttons carry no aria-expanded. No horizontal overflow measured.

### Mobile

The pill splits into a vertical capsule with days/hours above minutes/seconds; nav collapses to wordmark plus hamburger. The accordion stacks above the video pane; the comparison cards stack; the scattered video cards become a two-up grid of cropped tiles. Page height is 5167px, close to desktop's 5164px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | None | None |
| Headline weight | None | None |
| Headline tracking em | None | None |
| Body px | 14 | 14 |
| Characters per line | 54 | 36 |
| Sections | 6 | 6 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Make the brand mark do structural work: the loop shape frames the hero so the identity is read before a word is.
- An auto-advancing accordion with a visible progress bar tells visitors the list is a tour, not a menu.
- A two-card 'old way vs our way' comparison carries the business case without a pricing page.
- If the hero is a teaser, put the first real headline within one scroll so the page still explains the product.

Suits a pre-launch hardware company courting a demo pipeline through a Contact button; wrong for any product that needs the first screen to state what it is, and for self-serve software.

Risk: The first screen says nothing about robots or warehouses; a countdown has an expiry after which the hero is stale; videos are the only product evidence and they did not render headlessly; reduced motion is not honoured; the semi-transparent nav collides with content.

## Limitations

- Task and hero videos did not render in headless Chromium, so their content could not be seen.
- Could not verify what the countdown resolves to.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://inloop-robotics.com/
- https://www.ycombinator.com/companies/inloop-robotics
