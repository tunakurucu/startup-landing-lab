# Acely

Inspected: 2026-10-20 · desktop-mobile-audit · functional-entrance

https://acely.com

A navy consumer landing page that puts a student photo with a score overlay beside a serif promise and repeats one free-trial button through pricing and FAQ.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A light-green promo bar and a white sticky nav sit above a full-width navy hero. Left column: three-line serif h1, a one-line sans subhead, a green pill button and a small 'No credit card required' note. Right column: a rounded photo of a student at a laptop with a large green '1480' overlaid and a caption about a 110-point gain. A cookie notice overlaps the bottom-right corner.

### Typography

Measured h1 64px (40px mobile), weight 400, tracking -0.02em, line-height 1.1, family Lora (a serif). Body 18px/1.5 (16px mobile) in measured DM Sans; DM Mono appears in small uppercase labels ('STUDENTS AT TOP SCHOOLS LOVE ACELY', 'SAT 1410 → 1520', 'BEST VALUE'). Section headings reuse the serif at smaller sizes; feature titles use the bold sans.

### Visual System

Navy ground for hero and footer, warm off-white elsewhere; accents are a light green (promo bar, primary button, score chips), a blue (plan highlight, numbered steps) and a lavender panel. Surfaces are rounded cards with soft shadows; small pixel-dot textures decorate plan-card headers. Imagery: one lifestyle photo, product screenshots, four illustrated feature tiles, avatar chips, and a line-art character near the final call to action.

### Page Sequence

Promo bar → nav → hero (serif h1 + photo) → university logo marquee → '20 minutes a day' three-step with product screenshot → blue score-change ticker (name, SAT/ACT before→after) → four feature tiles → three testimonial cards → 'Know what you need' checklist + question-card image → three pricing cards + button → FAQ accordion (15 items) → illustration + final CTA → dark footer.

### Interaction

Operated the FAQ item 'What is Acely?': aria-expanded turned true, the chevron flipped and two paragraphs of answer text appeared inline; no URL change. On load the university logo row and the score ticker scroll sideways continuously (swiper slides moved ~70px in 1.5s). With reducedMotion 'reduce' no visible element moved at the logo row; the measurement record notes a reduced-motion rule is present.

### Accessibility

A persistent cookie notice covers the bottom-right of the hero on desktop. Small mono labels (~12px) sit on green and blue chips. Pricing cards are whole-card buttons (each 324×400px) whose selected state is a checkbox icon. The score ticker has no visible pause control. No horizontal overflow measured at either width.

### Mobile

Hero stacks: centred h1, subhead, button, then the photo below. Logo row and ticker keep scrolling horizontally; the three steps move above the screenshot; feature tiles become icon-left rows; testimonials and pricing cards become one-at-a-time swipeable carousels with arrow buttons and a progress bar; FAQ items stay full-width; footer columns stack to two per row.

### Copy

h1: "Your personal study trainer for the SAT & ACT." Primary action: "Try for free" (with a 'No credit card required' line beneath). First-screen proof is the photo overlay '1480 — Ava increased her SAT score by 110 points in 2 months'; university logos sit just below the fold.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 64 | 40 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.02 | -0.02 |
| Body px | 18 | 16 |
| Characters per line | 95 | 37 |
| Sections | 8 | 8 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Put one concrete outcome number inside the hero image so the proof is read before the copy.
- Pair a warm serif headline with a plain sans body to make a tutoring product feel personal rather than corporate.
- Repeat the same low-friction action label at every section boundary instead of introducing new asks.
- Turn social proof into a compact ticker of before→after results rather than long quotes.

Suits consumer subscriptions with a free trial and measurable outcomes (test prep, fitness, language apps); wrong for developer tools or infrastructure where a lifestyle photo and pricing-first flow would feel off-register.

Risk: Two auto-scrolling marquees and a cookie notice compete with the hero; three plan cards and 15 FAQ items make a long page (8,000+px) that leans on the reader scrolling; the serif at weight 400 reads light on navy at mobile size.

## Limitations

- Could not verify animation timing or whether the ticker pauses on hover.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://acely.com
- https://pear.vc/companies/
