# Gutgutgoose

Inspected: 2026-10-20 · desktop-mobile-audit · expressive-world

https://gutgutgoose.com/

A DTC product page built on a sky-and-moss photographic world, with a symptom explorer and a comparison table doing the persuasion instead of science copy.

## Company evidence

YC: verified-yc; batch: S26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A dark-green announcement bar ('Take the quiz') sits above a floating nav: a frosted logo pill at left, a frosted five-link pill in the centre, a solid green 'Get Started' pill at right. The hero is a full-bleed blue-sky photograph with a centred white two-line headline, three lines of body, one green pill CTA, and below it a rendered product jar standing on a mossy mound. A 'Backed by Y Combinator' tag and a row of white institution logos (Calico, Johns Hopkins, Oxford, Alphabet, Griffith) sit on the lower edge of the photo.

### Typography

The page has no h1 (measurement h1 fields null) and no section landmarks counted. The largest text the measurement found is 18px in 'Manrope'; body is 20px / 1.3 in 'Figtree', measure 58ch; a third family 'Griffith Sans Text' is listed. Visually the hero and section headings are large, light-to-regular weight geometric sans in white or dark green; the footer carries a wordmark set at near-viewport width in low-contrast green.

### Visual System

Two grounds: off-white/warm grey for product and science sections, and deep forest green for the comparison table, booking card and footer. Sky and moss photography bookends the page (hero and the 'Go through your day without…' band). Rounded pill buttons and large-radius cards throughout. Imagery: rendered jars in green and plum, macro science photos (bacteria, DNA gel, capsule), a translucent anatomical figure whose highlighted band tracks the selected body region, and three advisor portraits on green backdrops.

### Page Sequence

Announcement bar → floating nav → sky hero with jar and logo row → 'Two formulas' product cards with prices and 180-day guarantee → symptom explorer (Head/Abdomen/Intestines) → dark green comparison table vs generic probiotics → 'Fifty strains' three science cards → 'What personalized means' → 'Every cycle knows more' six-step dark panel with DNA gel → 'Six inputs' six cards → 'The experts who check our work' three portraits → 'Got questions?' booking card with phone number → sky band listing daily frustrations, one highlighted → footer with giant wordmark.

### Interaction

Operated the 'Abdomen' tab in the symptom explorer: the four symptom rows swapped (Bloated, Stomach pain, Food reactions, Feeling sick), the italic quote and explanation changed, and the figure's dark highlight band moved from the head to the torso. Live, 0–1 animations ran at the top but 93–355 were running mid-scroll, matching the measurement's 0 on load / 93 after scroll. The sky band showed a phrase list with one line highlighted. With reducedMotion set, 2–4 animations still ran during scroll; the measurement records no reduced-motion rule.

### Accessibility

White body copy over the sky photo and grey text on the dark comparison panel are mid-contrast. The symptom tabs are plain text elements, not buttons; my control scan found zero native buttons, tabs or inputs on the page. The 390 hero paragraph breaks mid-word ('m ade-to-order'). The footer wordmark is decorative low-contrast text. No h1 or section landmarks measured. No horizontal overflow at either width.

### Mobile

Floating nav keeps the logo pill and a hamburger pill. Hero headline shrinks to fit two lines; the jar sits below the CTA and the logo row scrolls. Product cards stack; the symptom explorer stacks list above figure; the comparison table keeps three columns in a narrow dark panel; science and input cards go to one column; advisor cards stack. Body drops to 18px / 1.5. Page grows from 11315px to 12124px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | None | None |
| Headline weight | None | None |
| Headline tracking em | None | None |
| Body px | 20 | 18 |
| Characters per line | 58 | 41 |
| Sections | 0 | 0 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- Let the visitor pick their own symptom and watch the page re-explain itself around it; a self-selected path reads as personal in a way a generic benefits list does not.
- Put the price and guarantee in the second screen so a consumer product page answers 'how much' before the science.
- Frame against the generic alternative in a plain two-column check/cross table when the category is crowded with look-alikes.
- Use one deep brand colour for both trust sections (comparison, booking, footer) so the dark panels read as authority rather than mood.

Suits DTC health and wellness products with a tangible object to photograph and a quiz or consult as the entry step. Wrong for B2B software or anything bought on specification, where the sky-and-moss world would feel like packaging over substance.

Risk: Headings are not real headings and controls are not real controls, so screen readers and keyboards get little structure. Hundreds of animations run mid-scroll with no reduced-motion rule. The page is long for a two-SKU store, and mid-word wrapping on mobile shows the copy was not checked at 390.

## Limitations

- The 1440 full-page capture stopped at 9000px; the booking, phrase band and footer were observed only in the live browser.
- Could not verify the identities or affiliations of the advisors shown, or that the product renders match shipped packaging.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://gutgutgoose.com/
- https://www.ycombinator.com/companies/gutgutgoose
