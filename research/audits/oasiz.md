# Oasiz

Inspected: 2026-10-19 · desktop-mobile-audit · functional-entrance

https://www.oasiz.ai/

The whole homepage is one screen: wordmark, App Store badge and an auto-advancing phone carousel set over a pixel-art arcade world.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

The root URL redirects to /landing. One screen: a widely tracked "OASIZ" wordmark headline, two lines of tagline ("The ultimate social arcade. Play, remix, and create games with friends!") and an App Store badge on the left; a large phone mockup on the right; a pixel-art island party scene, palms, water and city skyline across the bottom. "Join Discord" and "Sign In" ghost pills top right. A cookie banner overlaps the lower centre.

### Typography

Display and body are a squared, techno geometric sans, measured family Kodchasan: h1 96px, weight 600, tracking 0.2em, line-height 1; body 14px/1.6. Montserrat also appears among the measured families. Phone slides use spaced uppercase titles (PLAY, REMIX, CREATE, EXPLORE).

### Visual System

Blue-to-violet gradient sky with pixel sparkle stars; saturated pixel-art characters, arcade cabinets, tetromino blocks and a skyline. The phone mockup has a cyan rim and dark screen showing real app UI per slide. Footer is near-black with grey link columns.

### Page Sequence

Single hero screen → footer (Resources, Legal, Company, Social). The measurement record counts zero sections.

### Interaction

Clicked the fourth carousel dot: the phone switched to the EXPLORE slide. Without input the carousel advanced every few seconds through six slides including Play with friends, Play, Remix, Create and Explore. Nothing else was seen moving. With reduced motion the carousel still advanced on its own.

### Accessibility

Carousel dots measure 6×6px (active 18×6px) at 390, and I found no pause control for the auto-advancing carousel. Footer links are 20px tall on mobile. The cookie banner covers the lower part of the phone at both widths until dismissed. White tagline text sits on a mid-blue gradient.

### Mobile

Logo and "Join Discord" disappear, leaving only "Sign In". Wordmark (48px), tagline and App Store badge centre-stack at the top, and the phone mockup fills most of the width below, hiding most of the pixel world. The footer becomes a two-column grid.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 96 | 48 |
| Headline weight | 600 | 600 |
| Headline tracking em | 0.2 | 0.2 |
| Body px | 14 | 14 |
| Characters per line | 63 | 32 |
| Sections | 0 | 0 |
| Reduced-motion rule | observed | observed |

## Interpretation

- When the product lives in an app, a homepage can be just a door: one download action and real screens cycling in a device frame.
- Let a carousel of named verbs (play, remix, create) explain a multi-mode product in one slot.
- Build the backdrop from the product's own visual language, here pixel-art game assets, so the brand and the content read as one world.

Suits consumer mobile apps and games where the store page and the app do the persuading. Wrong for anything needing a web sign-up, pricing, or trust-building copy, such as B2B or paid subscriptions.

Risk: With no sections there is no explanation of how AI-built games work, no social proof and no Android path. The auto-advancing carousel ignores reduced motion and has tiny dots, and the cookie banner sits on top of the key visual.

## Limitations

- Did not test Sign In, Join Discord or the App Store link.
- The full slide list was read from screenshots over time; one slide title was not captured.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.oasiz.ai/
- https://speedrun.a16z.com/companies/oasiz
