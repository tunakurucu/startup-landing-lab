# Sparkles

Inspected: 2026-10-19 · desktop-mobile-audit · expressive-world

https://sparkles.dev

A cast of hand-drawn shape characters carries the brand, while plain UI mocks below explain how agents turn requests into pull requests.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A 56 px nav (logo, four links, Sign in, Book a demo) sits over a thin 'Backed by Y Combinator' strip. The hero is split: centred serif headline, three-line subcopy, Sign in and Book a demo buttons, 'Free to start' note and greyed trusted-by logos on the left; a grid of thick-outlined coloured shapes with cartoon eyes fills the right half. A consent dialog overlays the lower centre of the first screen.

### Typography

Headline in measured family Gelica, a soft display serif: h1 60 px, weight 600, line-height 1.0, tracking 0. Section heads reuse it. Body in measured Inter at 18 px / 1.6 with a 64ch measure. UI mocks, chips and footer use the same sans at smaller sizes; tracked uppercase small labels for 'TRUSTED BY' and 'BACKED BY'.

### Visual System

Warm off-white ground, near-black text and buttons, hairline borders. Colour comes almost entirely from the illustrated characters (coral, sky blue, ochre, green) with heavy black outlines; the same cast reappears beside the FAQ. Product is shown through flat, low-chrome mocks (browser window, green Slack panel, integration chips). The page closes on a black CTA band, then a saturated green footer with an oversized outlined wordmark.

### Page Sequence

Hero with character grid → 'Run a coding agent from wherever you work' (Web UI and Slack mocks joined by dotted lines to a 'Your agents' node, then 3,000+ integrations chip cloud) → 'From prompt to pull request' four-step accordion beside a media panel → Pricing (Monthly/Annual toggle, Credits and Enterprise cards) → FAQ accordion beside character illustration → black CTA band → investor grid → green footer.

### Interaction

Operated the pricing Monthly/Annual toggle. After full load, choosing Annual flipped aria-checked and the Credits card changed from '$50.00 / month, 500 credits every month' to '$500.00 / year, 2 months free, 6,000 credits granted up front'; an earlier click before the page finished loading changed nothing. The first screen did not change across a 1.5 s frame comparison; my probe counted 10 running animations. Under reduced motion: 1 running animation, all video elements paused, but a frame comparison after scrolling still differed.

### Accessibility

The consent dialog stays fixed over mid-page content at every scroll position until a choice is made; at 390 it covers the hero's Book a demo button. Trusted-by logos are rendered in light grey. Accordion and FAQ buttons expose aria-expanded; the billing toggle uses role=radio. No horizontal overflow measured at either width. Mobile primary buttons are full-width and roughly 40 px tall.

### Mobile

Nav collapses to logo plus hamburger; the YC strip stays. h1 drops to 48 px and the character grid moves below the stacked full-width Sign in / Book a demo buttons, pushing hero height to 1,043 px. Web UI and Slack mocks stack, the integration chips rewrap, pricing cards and toggle stack, the FAQ character illustration is not visible in the 390 capture, and the investor grid becomes two columns. Page grows from 7,385 to 10,490 px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 60 | 48 |
| Headline weight | 600 | 600 |
| Headline tracking em | 0 | 0 |
| Body px | 18 | 18 |
| Characters per line | 64 | 40 |
| Sections | 7 | 7 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Give an abstract product a recurring illustrated cast so the brand is recognisable before the visitor understands the mechanics.
- Keep product mocks plain and low-chrome when the brand layer is loud, so the two do not compete.
- Explain multiple entry points with one convergence diagram (each surface drawn as a mock, joined to a single agent node) rather than separate feature blocks.
- Put the billing toggle's consequence in the card itself (price, period and credits all change) so the choice is legible without footnotes.

Suits collaboration tools sold to mixed technical and non-technical teams, where approachability is part of the pitch. It would be wrong for security or compliance infrastructure, where cartoon faces in the hero can read as unserious to a risk-averse buyer.

Risk: Half the hero is illustration that says nothing about agents, sandboxes or pull requests, so the copy carries all the explanation. Sign in and Book a demo appear as equal pairs repeatedly, leaving no single primary action. The persistent consent dialog sits on content, and the mobile page is long.

## Limitations

- The media panel in 'From prompt to pull request' rendered blank in all captures; its content was not verified.
- Reduced-motion behaviour was judged from frame comparisons and animation counts only; I did not identify which element still moved.
- Did not interact with the consent dialog, so the page was always seen with it open.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://sparkles.dev
- https://www.ycombinator.com/companies/sparkles
