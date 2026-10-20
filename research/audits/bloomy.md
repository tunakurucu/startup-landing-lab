# Bloomy

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://bloomylearning.com

A split hero whose right panel is a tabbed, self-cycling product mock (diagnostic, gating, tutor), followed by a research-and-proof ladder aimed at school buyers.

## Company evidence

YC: verified-yc; batch: S26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Pale blue-to-mint ground with a faint dot grid. Left: a two-line headline with the second line in a blue-to-teal gradient, a four-line body paragraph, three feature labels separated by rules, a full-width gradient 'Request a school demo' button, and two small linked lines for parents and sign-in. Right: a white card with a gradient header bar and a product mock that differs between captures ('BloomyBot scaffolds student learning' chat; 'integrates with your 3rd-party data' diagram), with three pill tabs below it. Nav: logo, two links, gradient CTA, 'Sign in'.

### Typography

Measured h1 55.2px, weight 700, line-height 1, tracking -0.025em, family 'Inter'; the largest display text is 80px (the stat numerals '90%', '~25', '3', '1'), also 'Inter'. Body 16.8px / 1.7, 'Inter', measure 63ch. The mock's reading passage uses a serif (measured family 'Georgia'); a monospace family is listed. Section eyebrows are small tracked caps inside outlined pills ('PEDAGOGY', 'TRUSTED BY EDUCATORS').

### Visual System

Alternating bands: off-white sections with white rounded cards, and full-bleed blue-to-teal gradient bands for the K-12 strip, testimonials and the demo form. One gradient (blue to green) carries the CTA, the headline accent, stat numerals and panel headers. Imagery is entirely product mocks: diagnostic node diagram, skill list with a 97% ring, Socratic chat, three stage cards (Base Camp complete, Climb active, Summit locked), accessibility widgets, curriculum map, teacher dashboard. School logos appear in white tiles. Footer is near-black.

### Page Sequence

Nav → split hero with tabbed mock → gradient strip (K-12 / Standards-aligned / Self-paced) → 'Designed by educators. Backed by research' with named theories and four stat cards (90%, ~25 min, 3 stages, 1 tutor) → gradient testimonials from three school leaders → 'Intelligent learning that scaffolds to mastery' three stage cards → 'Designed for every student' accessibility cards → BloomyBot Socratic chat → curriculum map (1,200+ skills, ELA/Math totals) → real-time teacher dashboard → gradient 'Want to learn more?' demo form with Cloudflare human check → dark footer.

### Interaction

Operated the hero's 'Mastery gating' tab: the panel header changed to 'Students advance only after proving mastery', the mock became a skill list with a locked next skill, a 97% mastery ring, '301 Bloomy Bucks' and a '4 day streak'; the tab pill filled with the gradient. The hero panel's content differed between captures without a click. Live, 42 animations ran at the top, 8–19 during scroll. With reducedMotion set, 4 ran at the top and 7–19 during scroll. The full-page capture had a 1700px blank run after the stage cards.

### Accessibility

The page documents its own accessibility (read-aloud, text size, keyboard navigation) in a dedicated section. Hero body and feature labels are grey on pale blue, mid-contrast; white text on the gradient bands is high-contrast. Mock text inside cards is very small (approx. 9–11px in the stage cards). Tabs are native buttons. The demo form includes a Cloudflare 'verify you are human' box and was not submitted. No horizontal overflow measured.

### Mobile

Nav collapses to logo and hamburger; CTA leaves the bar. The hero's mock panel and tabs are removed entirely; the three feature labels become a checklist with green ticks, and the gradient CTA goes full-width. h1 36px / 1.1. The gradient strip stacks its three claims vertically; stat cards, testimonials, stage cards and accessibility cards all go to one column. Page nearly doubles from 8225px to 15611px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 55.2 | 36 |
| Headline weight | 700 | 700 |
| Headline tracking em | -0.025 | -0.025 |
| Body px | 16.8 | 16 |
| Characters per line | 63 | 43 |
| Sections | 10 | 10 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Make the hero mock tabbed and let it cycle on its own, so a visitor sees three product moments without scrolling or clicking.
- For a buyer who answers to a board, name the research (authors and theories) and put the operating numbers (90% threshold, 25 minutes) in oversized numerals before any testimonial.
- Show the product's state model (complete / active / locked) as three side-by-side cards; a reader grasps gating faster from state than from prose.
- Carry a single gradient through the CTA, headline accent and stat numerals so the page has one signature without a second brand colour.

Suits institutional edtech and other B2B products sold to administrators who want pedagogy, compliance and proof in one scroll. Wrong for a consumer or student-facing product, where the research ladder and demo form would read as a sales deck.

Risk: Ten sections of mock UI make a long page whose proof is self-illustrated rather than captured. Mobile drops the hero mock, so the product is unseen until far down a 15,600px page. Scroll-reveal leaves large blanks for non-scrolling readers, and reduced motion still leaves animations running. Stat numerals are framed as product rules, not outcomes.

## Limitations

- Lower sections were observed in-viewport only, since the 1440 full-page capture rendered a 1700px blank after the stage cards.
- Could not verify whether the product mocks match the real product or the school testimonials' provenance.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://bloomylearning.com
- https://www.ycombinator.com/companies/bloomy
