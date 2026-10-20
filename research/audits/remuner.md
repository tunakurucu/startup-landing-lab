# Remuner

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://www.remuner.com/

A conventional SaaS hero is followed by tabbed panels of product UI where an AI assistant drafts plans and answers questions, carrying the argument through screens.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A dark promo bar ('Remu AI vs Excel: we put it to the test') sits above a white nav. On a deep indigo ground, the left column holds the h1 with a green underline stroke under 'drive results', a green subhead, a grey paragraph and two pill buttons; the right column holds a dashboard screenshot with a play button. Capterra and G2 ratings and three G2 badges follow, with a client-logo strip at the fold.

### Typography

Measured h1: IBM Plex Sans, 43px, weight 600, tracking -0.047em, line-height 1.2. Measured body: Montserrat, 14px, line-height 1.4, measure 93ch on desktop. Section headings use the same semibold sans and appear larger than the h1 in the captures (e.g. 'Everything you need to run compensation, end to end'). Small spaced uppercase green labels ('PLAN DESIGN', 'DATA & CLOSE') introduce tab panels.

### Visual System

Indigo-to-violet gradient bands alternate with white and pale lavender sections; teal-green is the action and accent colour. Product evidence is cropped UI cards (plan builder, issue table, chat replies) floated on pale panels. Illustrated 3D-style icons sit on the role cards. A dark indigo footer closes the page.

### Page Sequence

Promo bar → hero with ratings → client logos → 'Meet Remu' AI section with three feature tabs and sample prompts → 'Everything you need' Design/Automate/Motivate tabs → stats band (15%, 95%, +2) → savings calculator with blurred results → six role cards → integrations and security → video testimonial carousel → resources → newsletter → closing CTA → footer with competitor-comparison links.

### Interaction

Operated the 'Automate' tab: the panel swapped from 'Any plan structure, live in minutes with Remu AI' to 'From CRM data to approved payouts, on autopilot' with an issue-table and chat mockup. A HubSpot email-capture modal ('Wonder how Sales Directors manage variable pay?') appeared on load and blocked clicks until closed. The client-logo strip moves on load; with reducedMotion 'reduce' that strip still moved.

### Accessibility

On load a cookie banner and an email-capture modal cover the hero at both widths; the modal intercepted pointer events. Body copy is 14px. Inactive tab labels and hero paragraph are light grey on light and indigo grounds respectively. The logo strip keeps moving under reduced motion. No horizontal overflow at 1440 or 390.

### Mobile

At 390 the nav collapses to the logo mark, a 'Book a Meeting' pill and a menu icon. The modal fills most of the first screen. Feature tabs stack as full-width cards, the stats band stacks its three numbers vertically, and the calculator stacks inputs above results. Measured h1 drops to 32px; the page grows to 14,128px.

### Copy

H1: "The sales compensation software to drive results"; primary action "Book a demo" (nav: "Book a Meeting"). First-screen proof is a dashboard screenshot, Capterra 5/5 and G2 4.9/5 ratings, three G2 badges and a client-logo strip.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 43 | 32 |
| Headline weight | 600 | 600 |
| Headline tracking em | -0.047 | -0.062 |
| Body px | 14 | 14 |
| Characters per line | 93 | 46 |
| Sections | 13 | 15 |
| Reduced-motion rule | observed | observed |

## Interpretation

- When the product's value is a calculation people distrust, show the calculation surface itself (plan builder, payout table) rather than describing it.
- Put the AI assistant inside real product mockups with concrete sample questions so the AI claim is tied to a recognisable workflow.
- Use one tab set per job-to-be-done (Design, Automate, Motivate) to keep a broad platform scannable in a single section.

Suits mid-market B2B tools sold to operations buyers who compare vendors on features and reviews. It would be wrong for a developer tool or consumer product where a gated calculator and modal interruptions read as sales friction.

Risk: The load-time modal and cookie banner bury the hero and block interaction, and the calculator withholds results behind 'Unlock full report'. Thirteen-plus sections, small body text and many mixed accents make the page long and visually busy, and the stats band gives percentages without stated sources.

## Limitations

- The modal was removed programmatically after Escape to operate the tab; its intended close behaviour was not tested.
- The hero video behind the play button was not played; its content is unverified.
- Stats (15%, 95%, +2) and review scores were not independently verified.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.remuner.com/
- https://pear.vc/companies/
