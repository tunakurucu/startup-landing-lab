# Daylight

Inspected: 2026-10-20 · desktop-mobile-audit · immersive-editorial

https://daylightcomputer.com/

One device lying on grass carries the page: a pinned hero turns from day to amber night on scroll, and a 'de-invented' manifesto sells focus over specs.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A rounded full-bleed card holds a photo-real overhead scene: a pale tablet showing a botanical engraving lies on grass among leaves. Top left: white serif h1 and a two-line subhead; bottom left: an amber-framed video thumbnail with a play triangle. Top right: a grey nav cluster (Home, Product, FAQ, orange ORDER NOW) with a 'Meet Daylight Kids' card and round 'Limited daylight KIDS bundle' badge; bottom right: a Newsletter card, 'IN STOCK · SHIPS IN 3-5 BUSINESS DAYS' and a wide orange ORDER NOW.

### Typography

Measured h1 60px, weight 300, tracking -0.07em, line-height 1.0, family __abcArizonaFlareFont (a light serif); 40px at 390. Section headings repeat the light serif at 55-65px, weight 300, with single words in italic ('Daylight', 'paper-like', 'computer', 'outside'). Body 18px/1.1 in measured family __abcRoomFont (a sans), measure 45ch; small uppercase labels ('GET UPDATES · NO SPAM') carry metadata. A third measured family, __abcRoomExtendedFont, is in the families list.

### Visual System

Warm off-white ground (rgb 250,245,242) with a diagonal window-blind shadow over the light sections. Saturated orange is reserved for ORDER NOW and accents. Imagery is warm lifestyle photography (hands, grass, sky, backpack) and device close-ups. Chapter grounds shift: off-white, sky blue for outdoor use, amber/peach then black for night use, ending on an orange-gradient footer with a giant orange 'daylight' wordmark. Rounded cards, line icons and a dotted sunburst motif.

### Page Sequence

Pinned hero → manifesto line 'We refuse to accept a future…' → 'Introducing Daylight' → full-bleed 'The world's first full-speed paper-like display' + three benefits → sideways stretch: Reading / Note-taking / Writing photos, 'With all the apps you need' icon grid, lifestyle photo, sunburst vision statement → 'it's a computer you can use outside' → amber 'When the lights go off…' → black 'Goodbye, blue light' → 'Dive deeper' tiles → testimonials → press logos → founder letter → 'DC-1 at a glance' → wordmark, ORDER NOW, footer.

### Copy

H1: 'The computer, de-invented'. Subhead: 'Meet DC-1. A new kind of computer, designed for deep focus and wellbeing.' Primary button 'ORDER NOW' (nav, hero, footer). The category is named by negation ('de-invented'; 'We refuse to accept a future where our devices are exhausting, addictive, and distracting') and by benefits (paper-like display, amber glow, no blue light). The audience is implied as people seeking focus and health; families are addressed through 'Daylight Kids'.

### Interaction

Clicked the hero 'Play video' thumbnail: a dark full-card player with native controls and a close × replaced the hero; it stayed at 0:00 because the video did not load in this browser. On load the Kids card slid down from under the nav. Scrolling the pinned hero turned the scene to night with an amber device screen; manifesto words revealed progressively; a mid-page stretch moved panels sideways. Reduced motion: no running animations, manifesto text shown whole, window shadow absent; the Kids card still slid down.

### Accessibility

No horizontal overflow at either width. Two h1 elements (hero and the paper-like display chapter). Three email inputs are labelled only by the placeholder 'E-MAIL'. White hero text sits on the photo scene without a scrim. The Newsletter card stays pinned bottom right on every desktop screen. At 390, 17 of 23 visible targets were under 44px tall: menu toggle 28×28 (labelled 'Toggle menu'), nav ORDER NOW 34px, footer links 16px, social icons 22px.

### Mobile

The hero stays one full-height card (measured 844px versus 1,800px pinned on desktop): h1 breaks to two lines at 40px, nav collapses to ORDER NOW plus a menu icon, the video thumbnail shrinks to the bottom left and the Newsletter card overlaps it; the Kids card drops below the hero. Reading / Note-taking / Writing photos stack vertically, the app grid becomes a centred 3×3, and benefits become icon rows. Page height 19,840px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 60 | 40 |
| Headline weight | 300 | 300 |
| Headline tracking em | -0.07 | -0.07 |
| Body px | 18 | 18 |
| Characters per line | 45 | 45 |
| Sections | 11 | 11 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Let one physical object carry the hero and change its state on scroll (day to night, white to amber) so the product's signature mode is demonstrated rather than listed.
- When the product's value is what it leaves out, name the category by negating the incumbent ('de-invented', a 'we refuse' manifesto) before naming features.
- Repeat one purchase action in fixed positions (nav, hero, footer) so a long narrative page never strands a ready buyer.
- Tie each chapter's ground colour to the benefit it describes, such as sky blue for outdoor reading and amber then black for night use.

Suits consumer hardware and wellbeing products bought on feeling and daily ritual; wrong for B2B tools whose buyers need specs, integrations and pricing within the first screens.

Risk: 18,848px of pinned and sideways scroll, canvas scenes and word-by-word reveals make content depend on scroll position (the desktop full-page capture is blank below the hero). The first screen stacks four overlays (nav, Kids card, newsletter, order bar) around the product. Specs are deferred to other pages, and two h1s blur the outline.

## Limitations

- The hero player and the display-chapter video stayed at readyState 0 in headless Chromium, so their content was not seen.
- The desktop full-page capture was blank below the hero; the desktop sequence comes from slow-scroll live captures.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://daylightcomputer.com/
- https://www.awwwards.com/sites/daylight
