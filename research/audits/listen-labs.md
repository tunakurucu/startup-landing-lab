# Listen Labs

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://listenlabs.ai

A two-colour editorial page (cream ground, one saturated blue) that runs an 88px headline over a strip of art-directed portraits, then a long numbered product walkthrough.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Thin nav (logo, five menu items, a moon icon, Sign in, Demo) over a cream field. A small outlined pill ('Join us at an event'), a two-line blue headline spanning about three-quarters of the width, a two-line subhead, and an inline email field joined to a 'Book a demo' button. Below, a full-width row of five colour-graded portraits on green and blue backdrops; one carries a small 'Insight Quote' card. A cookie dialog covers the lower right.

### Typography

Measured h1 88px at both widths, weight 400, tracking -0.04em, line-height 1, family Inter; the same family carries everything (single measured family). Desktop body measured 12px/1.3 (the small section labels and card captions); mobile body 16px/1.4. Section titles are regular-weight blue sans well below h1 size; step numbers ('01'–'05') are large blue numerals; small sentence-case labels ('Trusted Partners', 'How it Works') sit at both ends of hairline rules at section tops.

### Visual System

Two colours do almost all the work: a warm cream ground and one saturated blue for headline, text, numerals, rules and the footer block; a second cream-on-blue inversion is available via the moon toggle. Surfaces are flat; the logo wall is a beige tile grid mixing logos with big stats. Imagery is heavily art-directed: colour-graded studio portraits, retro office scenes, team photos run through a blue duotone, and light product screenshots of a chat-style study builder.

### Page Sequence

Nav → h1 + email/demo field → portrait strip → 'Trusted Partners' logo/stat tile grid → 'How it Works' five numbered steps, each with a product screenshot → 'Case Studies' three video cards with stat and quote → 'Use cases' six-row list beside a photo → 'See Listen in action' video with 3x/120+/50m+ stats → 'Research Partners' team grid (duotone portraits with prior employers) → 'Book a Demo' form over an office photo → blue footer with seven link columns.

### Interaction

Operated the nav moon button ('Toggle dark mode'): body background switched from cream to the brand blue and headline/text from blue to cream; the portrait strip and layout were unchanged. On load the portrait strip filled in after the text (one capture showed it still empty) and the hero form re-laid itself out; the four videos stayed paused until played. With reducedMotion 'reduce', no visible element moved after load; the measurement record found no reduced-motion rule.

### Accessibility

Measured desktop body text is 12px (section labels, captions, form legal copy); the outlined 'Join us at an event' pill is similarly small. Cookie dialog overlaps the hero portraits on both widths. The moon toggle is a 16×16px icon whose aria-pressed stayed 'false' after the colours switched. Four videos sit behind 'Play video' buttons and stayed paused.

### Mobile

The h1 keeps its 88px measurement but the rendered hero shows the headline at a smaller visual size over two lines; the nav collapses to logo, a 'Book a Demo' button and a grid icon. The email field and button stay side by side in one full-width row; the portrait strip shows one portrait; the tile grid becomes two columns; each step's screenshot sits above its number and text; case-study cards show one at a time with the next peeking in; the use-case photos appear as a cropped two-image strip; footer columns go two-up.

### Copy

h1: "Customer Understanding, Loud and Clear". Primary action: "Book a demo" next to a 'What's your work email?' field. The first screen offers no logos or numbers; its proof is the strip of interviewee portraits with a sample 'Insight Quote' card, and the logo/stat grid arrives one scroll down.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 88 | 88 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.04 | -0.04 |
| Body px | 12 | 16 |
| Characters per line | 33 | 46 |
| Sections | 1 | 1 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- Commit to one brand colour and one neutral so that photography can carry the mood without competing palettes.
- Let a single oversized headline and a joined email-plus-button pair do the whole first-screen job, with proof one scroll below.
- Number the product walkthrough and pair each step with a real screenshot so a long page reads as a sequence rather than a feature list.
- Show the humans behind the service (team grid with prior employers) as a trust section for a services-heavy product.

Suits research, agency-like or insight products sold to marketing and product teams where tone and taste matter; wrong for a developer tool or utility where a 12,500px page and portrait-led hero would delay the concrete demonstration.

Risk: A very long page (12,500px desktop) with only one h1 and no h2 until far down; 12px measured body copy on desktop; 61 animations on load at 390 wide with no reduced-motion rule; a cookie dialog sits on the hero at both widths.

## Limitations

- The nav bar did not render in this session's headless captures (visible in the earlier screenshots), so the toggle was triggered programmatically.
- The use-case list's active row changed between captures but neither click nor hover changed it; its driver was not identified.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://listenlabs.ai
- https://sequoiacap.com/companies/listen-labs
