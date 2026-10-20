# Voxel Energy

Inspected: 2026-10-20 · desktop-mobile-audit · immersive-editorial

https://voxelenergy.com/

A full-bleed solar-farm video hero with a bottom-anchored headline, followed by magazine-style sections (claims, a US wait-time map, process, team, newsroom) on alternating grounds.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Edge-to-edge aerial footage of a desert solar array fills the first screen, darkened by an overlay. Content hugs the bottom edge: an orange-outlined 'Backed by Y Combinator' pill, a two-line white headline at bottom-left, and at bottom-right a one-line claim ('builds data centers in months, not years') with a small translucent 'Talk to our team' button. The nav is only the wordmark; no links.

### Typography

Desktop measured no h1 (the headline is an h2); display 22px and body 16px at 1.3 line-height, measure 29ch, family Geist. Mobile measured h1 51.2px, weight 400, line-height 1, tracking -0.07em, Geist. Families present: Geist, Inter, Fragment Mono, sans-serif; a monospace is used for small all-caps eyebrows ('+ WHAT WE DO', '[01]') and card dates. Headlines are regular-weight, tightly tracked sans.

### Visual System

Alternating grounds: dark photo/video, warm off-white, dark photo again, off-white, then a lime-green newsroom band and a sky-blue photo band before a black footer. Imagery is photographic (solar fields, team portraits, article covers). A choropleth US map in a yellow-to-dark-red scale is the one data graphic. Small line icons sit in three claim cards.

### Page Sequence

Wordmark → video hero → 'What we do' statement + three claim cards → 'Interconnection Wait Times' US map with Grid/Vessel toggle and 'Can you afford to wait for the grid?' → dark 'How we work' three numbered steps over solar imagery → 'Who we are' three founder portraits and bios → lime 'Newsroom' carousel with arrows → sky photo 'Let's get to work' Contact → footer.

### Interaction

Operated the Newsroom 'Next' arrow: the row slid one card left, the first article moved out and later cards came into view; URL unchanged. On load about 40 span-level animations ran; the mobile capture shows the headline only partly rendered. Nothing was still running after scroll. The hero video element was paused in the headless browser. With reduced motion the same span animations still ran on load; the top screen was static 1.2s later.

### Accessibility

White headline over bright sunlit panels on mobile has uneven contrast where text crosses light cells. The hero 'Talk to our team' button is translucent grey on dark footage. Carousel arrows are 42×42 and labelled; pagination dots are 10px wide. Eyebrow mono text is very small. No horizontal overflow measured. The nav has no links, so in-page navigation relies on scrolling.

### Mobile

Headline wraps to four lines and the CTA drops below the fold. Sections reorder: 'How we work' appears before the map on mobile, after it on desktop. Claim cards, process steps, founder cards and news cards all stack to one column; the map keeps its toggle and legend. Page height grows from 6271 to 7070px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | None | 51.2 |
| Headline weight | None | 400 |
| Headline tracking em | None | -0.07 |
| Body px | 16 | 16 |
| Characters per line | 29 | 37 |
| Sections | 6 | 6 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- Anchor hero text to the bottom edge so the full-bleed footage reads first and the claim second, without a centred overlay.
- Use one data graphic (a map of the problem) to argue urgency instead of a feature list.
- Change ground colour at each section boundary so a long editorial page still has rhythm without motion.
- Put founder bios on the homepage when the buyer is betting on execution of physical infrastructure.

Suits capital-intensive, physical-world companies selling to a few enterprise buyers through conversations; wrong for self-serve software that needs a product screenshot and sign-up above the fold.

Risk: No nav links and a single quiet CTA; reduced motion is ignored for the load animations; headline contrast depends on the frame of video behind it; the desktop headline is an h2 while mobile has an h1, so the document outline differs by viewport.

## Limitations

- The hero video did not play in headless Chromium, so its motion could not be observed.
- The Grid/Vessel map toggle could not be located as an element to operate.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://voxelenergy.com/
- https://www.ycombinator.com/companies/voxel-energy
