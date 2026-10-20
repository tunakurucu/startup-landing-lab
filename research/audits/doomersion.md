# Doomersion

Inspected: 2026-10-20 · desktop-mobile-audit · expressive-world

https://doomersion.com/

A giant mascot wordmark and three looping phone screens stand in for any argument; the page has no buttons, only two app-store links.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

No nav. A black ground carries a pink-faced mascot with a blue tuft beside a very large white 'Doomersion' wordmark, a small globe glyph dotting the i. Below, two phone screens flank a centred pink three-line headline 'Learn Languages By Doomscrolling.' and a grey subhead: left a search/explore screen with Spanish cooking videos, right a 'For You' feed with an Arabic transcript panel and a tapped-word definition. A third phone (a Japanese video) begins at the bottom edge.

### Typography

Measured h1 55.4px, weight 700, line-height 1, tracking -0.03em, family Arial; body 25.8px / 1.4 Arial, measure 29ch; Arial is the only family. The wordmark is a rounded heavy sans rendered as an image. Section headings are bold Arial in pink, yellow, mint and cyan; body copy is bold grey. On mobile h1 is 32px and body 14px.

### Visual System

Flat black ground, no gradients, no borders. Colour arrives through pastel pink, yellow, mint and cyan: as heading colour on desktop, and on mobile as floating language pills and full-bleed rounded tiles. Imagery is entirely phone-shaped product video (muted looping video elements with poster frames) showing the feed, transcript, lessons and flashcards screens, which share the same pastel palette. The mascot recurs inside the app screens.

### Page Sequence

Mascot + wordmark → hero (explore phone, pink headline and subhead, feed phone) → three-column row: 'Every Subtitle Is A Lesson' (yellow) | Japanese feed phone | '11 Languages. Every Level.' (mint) with a language list → three-column row: lessons phone | 'Built-in Language Learning Center.' (cyan) | flashcards phone → 'Get Doomersion.' with App Store and Google Play buttons → footer links (Privacy, Terms, Support, Careers, Creators, Contact).

### Interaction

At 1440 the DOM held no buttons, tabs or inputs, only store and footer links, so the one control operated was the 'see how it works' anchor, which is visible only at 390: it scrolled the page one screen (to y=844) to the yellow 'Learn from Subtitles' tile. Measurement reported 0 running animations at 1440 and 11 at 390; live at 390 the eleven language pills alternated between English and native-script labels ('Japanese'/'日本語'). With reducedMotion set only the English labels rendered and the first screen stayed still. Videos did not play in headless Chromium; posters showed.

### Accessibility

Grey bold body on black is mid-contrast; the pink and yellow headings are readable. The phone videos have no visible captions or controls and carry status-bar chrome. Footer links are small (about 14px). At 390 the store buttons are large full-width targets; the pills are decorative and not interactive. No horizontal overflow at either width. No h-level structure was visible for the three-column rows beyond coloured headings.

### Mobile

A different composition rather than a stacked desktop: a small mascot-plus-wordmark header, a cloud of eleven tilted pastel language pills, a white two-line headline, two full-width store buttons and a 'see how it works' chevron fill the first screen. Below, content becomes bento tiles: a yellow 'Learn from Subtitles' tile with a phone video, a cyan '11' tile beside a pink explore-phone tile, a green 'Language Learning Center' tile with two phones, then repeated store buttons and footer. Page height 2710px, measured section count 0.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 55.4 | 32 |
| Headline weight | 700 | 700 |
| Headline tracking em | -0.03 | -0.03 |
| Body px | 25.8 | 14 |
| Characters per line | 29 | 44 |
| Sections | 9 | 0 |
| Reduced-motion rule | observed | observed |

## Interpretation

- If the product is a feed, show the feed moving in a phone frame and let the screens carry the explanation instead of feature prose.
- Design the phone layout as its own composition when the product is mobile-only; the first screen should already be the install decision.
- Pick three or four pastel accents and reuse them identically in the app screens and the page so product and marketing read as one object.
- A page with no secondary navigation forces one outcome; accept that only when install is the sole conversion.

Suits consumer mobile apps with a visually self-explanatory loop (short video, games, social) where install is the only ask. Wrong for anything that must justify a price, integrate with other tools or be evaluated on desktop, since the desktop page is a shrunken phone showcase with no proof, pricing or depth.

Risk: Desktop is served by the same five phone videos with no interaction, no social proof and no way to try anything; large grey bold body copy in a system font and a 29ch measure make the desktop layout feel unfinished next to the mobile one. Autoplaying video posters depend on codec support, and the only CTA is an outbound store link.

## Limitations

- Headless Chromium could not decode the H.264 phone videos (media error 4), so looping video playback and what it shows was inferred from poster frames only.
- First live load returned HTTP 502 on one attempt and succeeded on retry; no operable control existed at 1440, so the anchor link was operated at 390 instead.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://doomersion.com/
- https://www.ycombinator.com/companies/doomersion
