# CodeWisp

Inspected: 2026-10-19 · desktop-mobile-audit · functional-entrance

https://codewisp.ai/

The homepage is the game catalog itself: a showcase slot with leaderboard and rails of user-made games, with no headline or marketing copy.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A sticky 62 px dark nav holds logo, mono uppercase links (PLAY, EXPLORE, DISCUSS, CREATE, MARKETPLACE), a 'Search Game' field, a Discord icon and an outlined lime 'Sign in'. Below a 'Recommended' label, a large game key-art panel sits left and a side panel right with thumbnail strip, game title, creator, description, an all-time leaderboard and a lime-outlined PLAY button; pagination dots underneath. The 'Featured' grid starts within the first screen.

### Typography

No h1 on the page (measured null). Section labels and game titles in sans; the measured display element is 27.2 px Inter at 1440 and 20 px Geist at 390. Body and metadata in measured Geist Mono at 11 px / 1.8 (creator names, play counts, likes, leaderboard). Families measured: Geist Mono, Geist, Inter.

### Visual System

Near-black blue-green ground with a darkened pixel-art village illustration behind the showcase. Colour comes from the games' own thumbnails, which are bright and varied. Accent is a lime/yellow-green used for outlines, the selected thumbnail and PLAY. Cards are thumbnail-over-caption with mono stats; hairline rules extend from section labels.

### Page Sequence

Recommended showcase with leaderboard → Featured (8 cards) → Hot (8) → Top (8) → Recently Updated (8) → New (8) → footer link columns (Navigate, Account, Resources, Legal, Community). Several games repeat across rails.

### Interaction

Operated the 'Next showcase game' arrow (it is transparent until the showcase is hovered). The side panel switched from Aether Rush to Cube Jump: selected thumbnail highlight moved, title and creator changed, the second pagination dot became active, and the main art area was dark 1.5 s after the click. A full-screen loading layer intercepted clicks for several seconds after load. Under reduced motion no animations were running and the first screen did not change across a 1.5 s comparison.

### Accessibility

Body and metadata at 11 px mono, with dim grey text (creator line, lower leaderboard rows) on a dark ground. Showcase arrows are invisible until hover, so not discoverable on touch. Icon buttons carry aria-labels ('Next showcase game', 'Show Cube Jump', 'Random game'). No h1. No horizontal overflow at either width.

### Mobile

Nav reduces to hamburger, logo and Sign in; the search field is not shown. The showcase stacks key art above the panel, the description shows in full, and the leaderboard lengthens to about fifteen rows. Every rail becomes a single column of full-width cards, so the page grows from 3,432 px to 12,920 px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | None | None |
| Headline weight | None | None |
| Headline tracking em | None | None |
| Body px | 11 | 11 |
| Characters per line | 62 | 59 |
| Sections | 7 | 9 |
| Reduced-motion rule | observed | observed |

## Interpretation

- When user-made content is the product, let the homepage be the catalog so the first click is play, not sign-up.
- Attach live social proof (a leaderboard, play and like counts) to the showcased item rather than to a separate testimonial section.
- Use a monospace face for metadata to give a catalog a tool-like texture without changing the display type.

Suits UGC platforms, marketplaces and libraries with enough good inventory to sell themselves. It would be wrong for a product without a content library yet, or for a visitor who needs to learn that they can create, since 'build games with AI' is never stated on the page.

Risk: No headline or value proposition, so a first-time visitor sees a game portal rather than a creation tool. Rails repeat the same games, which makes the catalog look smaller than its length suggests. 11 px mono body, hover-only arrows and a loading layer that blocks input weaken usability, and mobile becomes very long.

## Limitations

- Showcase content varied between loads: one load showed a description and leaderboard, another showed 'No project description yet.' with no leaderboard.
- My probe counted 81 running animations a few seconds after navigation while the measurement record reports 0; the early count may come from the loading layer.
- Did not play a game or use search.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://codewisp.ai/
- https://www.ycombinator.com/companies/codewisp
