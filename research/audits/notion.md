# Notion

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://www.notion.com

A centred 96px headline with one rotating verb chip sits above a framed product-UI video, so one general promise and the workspace itself share the first screen.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Centred stack on white: two-line h1 whose middle word sits in a coloured pill that swaps verbs, a one-line subhead, then blue 'Get Notion free' beside pale-blue 'Request a demo'. Below sits a framed Notion workspace (Ramp HQ board, agents sidebar) delivered as a video with a Pause button, with line-drawn characters peeking around it. A row of customer logos is pinned to the bottom edge of the viewport and overlaps the mockup.

### Typography

One measured family, NotionInter, for display and body. Measured Lyon Text sets the testimonial quotes, and the footer quotation is also serif. h1 96px, weight 600, line-height 1, tracking -0.048em. Section h2 54px/700 at -1.875px, card titles 22px/700, subhead 20px, body 16px/1.5. At 390 the h1 is 42px at -0.036em. Weight and tight tracking create the hierarchy; there is no second display face.

### Visual System

White ground and black type. One saturated blue (computed rgb(0,117,222)) marks primary actions, with a pale-blue secondary. Other colour comes from the verb chip (teal, green, blue and purple seen), product-UI tags, and three duotone testimonial photos in red, blue and ochre. Light-grey rounded panels frame cropped product UI. Black line-drawn characters and emoji-style icons form the motif. The closing CTA sits on a warm grey band.

### Page Sequence

Nav → hero (rotating-verb h1, CTAs, product video, pinned logo row) → logo wall 'The most ambitious companies run on Notion.' → 'AI where your team works.' with three job cards (capture knowledge, find answers, automate busywork), each with a UI crop → 'See what Notion can do', five use-case tiles → 'Trusted by teams that ship.', three photo quotes (Cursor, Faire, Ramp) → stats strip → 'Get started today.' → footer with a McLuhan quotation.

### Copy

h1: 'Where teams and agents [verb] together.' The verb rotates; Scale, Ship, Think, Jam and Create were all seen. Subhead: capture context, find answers and automate tasks with AI built for your team. Primary button 'Get Notion free', secondary 'Request a demo'. The audience is named as 'teams and agents'. The page title, not the first screen, names the category ('The AI workspace that works for you'). Proof lines include 'Over 50% of YC companies'.

### Interaction

Operated the Pause button at the bottom-left of the hero mockup: the video element paused and the button label changed to 'Play'. On load, the h1 chip changed word between captures taken 1.5 s apart, and a marquee animation was running. After scrolling, the pinned logo row became a two-row wall and a divider appeared under the nav. With reduced motion, the chip kept one word for 5 s, the marquee animation was no longer running, and the hero video did not start.

### Accessibility

On the first desktop screen, the pinned logo row covers the lower edge of the hero mockup. The closing 'Request a demo' link computes to about 4.0:1 on white. Testimonial names and quotes are white text over duotone photos; their contrast was not measured. At 390, 42 of 54 visible targets are under 44px tall. The menu toggle is 44×44 and labelled 'Toggle main menu'. Neither width has horizontal overflow, and no unnamed buttons or links were found.

### Mobile

The hero product video is dropped. A row of seven illustrated avatars sits above a three-line 42px h1, and the two CTAs become full-width stacked buttons. Logos run as a one-row marquee. Job cards stack, use-case tiles become full-width list rows, and testimonials become a horizontal swipe row with the next card peeking in. Footer columns pair up. The nav shrinks to the logo, 'Get Notion free' and a menu toggle.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 96 | 42 |
| Headline weight | 600 | 600 |
| Headline tracking em | -0.048 | -0.036 |
| Body px | 16 | 16 |
| Characters per line | None | None |
| Sections | 4 | 4 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Keep the headline frame fixed and rotate one word inside a coloured chip; the claim can then cover several jobs and still read as one sentence.
- Pair a short, type-only promise with a large, real product surface on the first screen, so the product is visible before any scrolling.
- Organise capabilities by the job a buyer hires the product for (capture, find, automate), each with its own UI crop, instead of a feature list.
- Under reduced motion, stop rotating copy and marquees and leave one static word in place.

Suits broad, well-known horizontal tools with many use cases, where the promise has to stay general and the UI proves the breadth. Wrong for a narrow, unknown product: a rotating verb and a generic promise to 'teams' would hide what it actually does.

Risk: The first screen never names a category noun. Because the verb rotates, a glance or a screenshot can catch a different claim each time. The pinned logo row hides part of the product mockup. With four measured sections, the page pushes pricing, security and integrations to other pages. When video cannot play, the hero shows only a poster frame.

## Limitations

- The hero video did not decode in the test Chromium (no H.264 support), so only its poster frame and the Pause-to-Play label change were seen.
- The rotating verb set was compiled across several loads; the full list and its order were not verified.
- The first live load timed out through the proxy and was retried.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.notion.com
- https://saaslandingpage.com/notion/
