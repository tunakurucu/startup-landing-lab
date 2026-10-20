# Casa

Inspected: 2026-10-20 · desktop-mobile-audit · immersive-editorial

https://getcasa.com

A black serif hero with one address prompt gives way to a long cream page that treats each membership benefit as its own illustrated chapter before naming the price.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

The first screen is black edge to edge: wordmark top-left, outlined "Benefits" and white "Get started" pills top-right, and a centred dark pill reading "AS FEATURED IN The New York Times" and "A letter from our CEO". The serif h1 and a four-line subline sit in the exact centre; near the bottom a rounded input-style bar reads "Find your home to get started" with a map thumbnail, above a line listing three served metros. A full-viewport autoplay video element exists but had not loaded in headless captures, so the ground appears solid black.

### Typography

Measured display family casaLitteratur (a high-contrast serif) for the h1 at 68 px, weight 400, line-height 1.1, tracking -0.02 em (36 px on mobile); measured body family casaDiatype (a grotesque sans) at 24 px, line-height 1.3, about 32 characters per line (18 px on mobile). Section titles repeat the serif at a smaller size; eyebrows are tiny caps in coloured pills; the price line "All for $199/month." is set in the serif at display size.

### Visual System

Black hero, then a white/cream ground with pale-green rounded cards for explanatory blocks. Imagery is warm interior photography (a kitchen with a handwritten-style overlay of chores, a living room), isometric 3D illustrations (a house on a green lawn, small objects like a bell, boxes, a plant), and stacked notification-style cards showing tasks. Colour appears only in small eyebrow pills (peach, green, yellow) and a yellow credit badge.

### Page Sequence

Black hero → "How Casa membership works" three-column card → "Your to-do list, done." → kitchen photo with chore-list overlay → Handyman (text, task cards, credit badge) → Concierge (chat card) → Autopilot → five-slide maintenance carousel → "And for the everyday chores" four cards → "Enabled by a deep understanding of your home" with isometric house and seven-tab inventory → "All for $199/month" with eight benefit rows → two trust cards → four-item FAQ → closing statement + newsletter → footer, "With love, from San Francisco".

### Interaction

Operated the "Appliances" tab in the home-inventory section: the active label moved from "3D Model" to "Appliances" (grey to dark, underline moved) and the caption changed to a sentence about makes, models, serial numbers and warranties; the URL did not change. On load 0 animations ran and the hero video stayed unloaded; while scrolling, 1–6 animations ran as sections entered view (measurement: 9 after scroll desktop, 3 mobile). A subscribe toast with an email field appeared lower right after load. Under reduced motion counts were 0 and the video stayed paused; no prefers-reduced-motion rule found.

### Accessibility

The inventory tabs are plain buttons without aria-selected; the carousel dots are 10 × 10 px targets with "Go to slide" labels. The chore-list text over the kitchen photograph is thin white on a mid-tone image. A newsletter toast overlays content on load and has a 32 px dismiss button. No horizontal overflow at either width. The full-page desktop capture was cut at 9000 px of a 10746 px page.

### Mobile

Nav keeps the logo mark (wordmark dropped) with both pills. The hero stacks: press pill, 36 px serif h1, subline, and the address bar pinned near the bottom. All two-column benefit sections stack with imagery below text; the maintenance carousel becomes one card wide; the inventory tabs become a horizontally scrolling strip; the price benefit list becomes one column; FAQ and footer stack. Body drops to 18 px. Page height 10943 px.

### Copy

H1: "Home, taken care of." Primary action: "Get started" (nav) and the hero bar "Find your home to get started". First-screen proof is a press mention (The New York Times) and a CEO letter link; no numbers, logos beyond the one outlet, or demo.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 68 | 36 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.02 | -0.02 |
| Body px | 24 | 18 |
| Characters per line | 32 | 32 |
| Sections | 10 | 10 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- Lead with a short serif promise on an empty ground and defer every feature to its own chapter below, so the hero reads as a brand rather than a feature list.
- Name the price late but plainly, in display type, after the benefits have each been shown.
- Let the first-screen input describe the first step in words ("Find your home") rather than presenting an empty form field.
- Use one press mention in the hero rather than a logo wall when you have a single strong outlet.

Suits premium consumer memberships and services where tone matters more than feature comparison (home, health, hospitality); wrong for utility software where buyers want screenshots and pricing in the first screen.

Risk: A heavy 12 Mbps hero video that may not load leaves a flat black first screen; the page is very long (over 10,000 px) before price and FAQ; a newsletter toast competes with the hero on load; tab controls lack selected-state semantics.

## Limitations

- The hero video never loaded in headless Chromium, so its content and motion are unknown.
- The desktop full-page screenshot was truncated at 9000 px; the lower sections were read from the live visit and the mobile capture.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://getcasa.com
- https://neo.com/startups?tab=Neo%20portfolio
