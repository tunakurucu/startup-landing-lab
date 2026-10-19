# Clair Health

Inspected: 2026-10-19 · desktop-mobile-audit · immersive-editorial

https://www.wearclair.com

A soft-luxury editorial page: high-contrast serif headlines, full-bleed product renders and lifestyle video, with a floating pre-order pill throughout.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

After a brief grey-green loading screen with a progress bar, a mauve-to-blush gradient shows a centred two-line serif headline "The first continuous hormone monitor" above a large render of a pearl-and-rose-gold wrist band cropped at the bottom. A frosted pill nav (About, FAQ, Partners, Careers, Ask Clair, white "Pre-order now") floats at top with a faint funding announcement link below; a cream "Pre-order now" pill sits bottom centre.

### Typography

Display is a high-contrast old-style serif, measured family EB Garamond: h1 96px, weight 400, line-height 1, tracking -0.03em (-0.035em on mobile at 48.8px). Body is measured Geist at 16px/1.2. Families: Geist, EB Garamond, Inter. The "100,000+" stat is set very large in a grey sans.

### Visual System

Warm, soft grounds that change per section: mauve, blush, pale sage, orange gradient, cool grey. Imagery is glossy product renders, lifestyle video, clinician portraits on tilted cards with Stanford Medicine marks, and social-post thumbnails. Feature panels switch between green, dark green and red with short messages.

### Page Sequence

Loader → hero → "Understand your body like never before" video → "For every stage of your life" list with coloured message panel → "The breakdown" (three icons, band render) → "Trained on clinical data from 100,000+ women" → "Developed with leading scientists" cards → video testimonial → tabbed FAQ → founding-member offer and form → "Join 32,000+" social posts and email field → footer "Stay in the loop".

### Interaction

Clicked the "About & Privacy" FAQ tab: the questions swapped to that set with "Is Clair a medical device?" open. On load a loader ran, then the hero video elements were reported playing. During scroll the life-stage list highlight moved down and the side panel changed colour and message without a click. With reduced motion the hero videos stayed paused and no load animations were reported, but the life-stage list still advanced during scroll.

### Accessibility

The funding announcement and unselected list and FAQ items are light grey on light grounds, low contrast. On 390 the floating pre-order pill overlaps headings and FAQ text, and the scientist carousel dots measure about 7–8px. Footer nav links are 14px tall on mobile. No horizontal overflow measured.

### Mobile

Nav becomes logo plus hamburger; the announcement wraps to two lines; the headline sets in two lines at 48.8px; the band render is cropped off both edges. Scientist cards become a one-card carousel with dots, the FAQ tabs compress to small two-line labels, and the offer list and form stack. The floating pre-order pill remains on every screen.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 96 | 48.8 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.03 | -0.035 |
| Body px | 16 | 15 |
| Characters per line | 44 | 39 |
| Sections | 9 | 9 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Pair a classical serif display with a neutral sans body to make a medical-adjacent device read as personal and premium rather than clinical.
- Translate abstract sensing into concrete daily messages ("Hot flashes likely. Stay cool tonight.") shown in context.
- Stack credibility in escalating order: data scale, named clinicians, then a real person on video.
- A persistent purchase pill works only if it never covers the copy it floats over; reserve space for it on mobile.

Suits consumer health and wellness hardware sold on trust and aspiration. Wrong for a clinical or B2B buyer who needs regulatory status and evidence near the top rather than in a FAQ tab.

Risk: Long page (about 11,300px) with a loader before the hero adds delay. Several low-contrast greys carry real information. The floating pill covers text on mobile, and the scroll-driven list ignores reduced motion. The medical-device answer sits in the second FAQ tab near the bottom of the page.

## Limitations

- Did not submit any of the pre-order or email forms, play the testimonial with sound, or open Ask Clair.
- The provided 1440 full-page capture was truncated at 9,000px; the lower page was checked live.
- Could not tell whether the life-stage list advances on a timer or on scroll position.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.wearclair.com
- https://speedrun.a16z.com/companies/clair-health
