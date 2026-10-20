# Vanta

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://www.vanta.com/

A light serif 'Get your compliance together' over lilac, an email-to-demo field and a llama mascot, with an agent demo that walks through the compliance steps.

## Company evidence

YC: verified-yc; batch: W18. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Under a white nav and a dark purple event banner ('Don't tackle AI risk alone. Join us at VantaCon'), a lilac field holds a centred three-line serif headline, a two-line serif subhead and an inline email field with a purple 'Get a demo' button. A line-drawn llama wearing framework medals (HIPAA, GDPR, SOC 2, ISO) stands at the right. A product frame begins at the fold, and a customer logo strip runs along the bottom edge of the viewport.

### Typography

h1 measured 88px, weight 300, line-height 1 (computed 83.6px), tracking 0, measured family SC Ripley, a light serif; the subhead is the same serif (the record's 30px/1.3 body sample, 41ch). Section h2s are 56px weight 400 and the closing 'The new standard for trust' 96px weight 300 in that serif. Product card titles (24px weight 500) and paragraph copy are sans; the probe gave the card titles the other measured family, Soehne. Eyebrows are small uppercase sans ('GET COMPLIANT'). Phone h1 48px.

### Visual System

White and warm off-white grounds alternate with lilac fields and a dark navy band ('Built for you', proof portraits); the footer is deep aubergine. One violet accent for pill buttons with a circled arrow. A line-drawn llama mascot in aubergine and white recurs in the hero, the three audience cards (couch, doorway, window ledge) and the closing tightrope scene. Product proof is light UI: agent chat, framework progress cards, a risk heat map, a vendor table, a trust-center page. Customer portraits are photographic.

### Page Sequence

Nav + event banner → lilac hero with email capture, llama and agent product frame → '16,000+ customers' logos → 'It's all here', six product cards (Compliance, Risk, Third Party Risk, Audit, Trust Center, Questionnaire Automation) → 'The Vanta Agent: your 24/7 GRC engineering team' → GitHub quote in large serif → frameworks carousel (8) → navy 'Built for you' (Startups, Mid-market, Enterprise) → 'Proof? We've got proof.' portraits → Forrester Wave → resources → 'The new standard for trust' CTA → footer with badges.

### Copy

h1: 'Get your compliance together'. Subhead: 'SOC 2, ISO 27001, HIPAA, and 35+ frameworks—automated and continuously monitored.' Primary 'Get a demo', paired with an email field whose placeholder is 'nodrama@llama.com'. The page names its category as the '#1 Agentic Trust Platform' and 'GRC', and its audiences by company stage (Startups, Mid-market, Enterprise) and role ('CISOs and security leaders'). The tone is wry: 'Proof? We've got proof.', a founder 'in need of a SOC 2 yesterday'.

### Interaction

Clicked the next arrow on 'All the frameworks you need': the eight cards shifted one position left (SOC 2 left, 'NIST AI RMF / Manage AI risk' entered) and a live region read 'Slide 2 of 8.'; the previous arrow stayed enabled. On load the hero frame cycles an agent run: 'Thinking… Connecting AWS…', then 'Connected', a remediation card ('RDS snapshots are not encrypted', 'Generate fix'), as the ISO 42001 progress bar and checklist advance. It kept cycling under reduced motion. Resource cards faded in on scroll. The nav stayed pinned.

### Accessibility

The hero email field has only a placeholder, no label. An Osano consent dialog covered the lower-left of the 1440 first screen, including part of the product frame. Nav dropdowns and the phone menu are div elements with role button and aria-expanded. The probe found no text under 4.5:1. At 390 the menu target is 40×48; 86 of 101 targets are under 44px tall, one under 24px. No horizontal overflow.

### Mobile

The header reduces to logo and hamburger; Log in and Get a demo leave the header. The event banner wraps. The hero centres a 48px three-line headline, the serif subhead and the email-plus-button pill, then the product frame shrunk to full width with unreadably small text, then the llama. Logos become a two-column grid; product cards stack with their UI. Page height grows from 10,276px to 14,637px; eight sections at both widths.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 88 | 48 |
| Headline weight | 300 | 300 |
| Headline tracking em | 0 | 0 |
| Body px | 30 | 18 |
| Characters per line | 41 | 27 |
| Sections | 8 | 8 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Put the standards buyers must satisfy (SOC 2, ISO 27001, HIPAA) in the subhead, since that is how they search and qualify vendors.
- Animate the actual workflow in the hero (connect tools, find a failing test, fix it, progress toward audit) so the outcome promise has visible steps.
- Soften a fear-driven category with a light serif headline and one recurring mascot, while keeping product UI as the proof in every section.
- Segment by company stage in one row of cards rather than separate hero variants.

Suits compliance, security and risk products sold to both founders and security leaders, where reassurance and evidence must coexist. Wrong for a developer-first infrastructure tool, where a mascot and wry copy can read as unserious next to code.

Risk: The hero's agent demo is small, partly behind the consent dialog and the fold, and illegible on phones. It keeps cycling under reduced motion. The page is long (eight measured sections plus analyst report, resources and closing CTA) and repeats logo rows and proof blocks. The email field lacks a label.

## Limitations

- The measurement record lists sticky_nav false and a 1,519px nav height, but the nav stayed pinned in every scroll capture; the nav metrics look unreliable for this page.
- The measurement record reports a reduced-motion rule as observed, yet the hero demo still cycled with reduced motion set; which animations the rule covers was not determined.
- The consent dialog was left in place to avoid setting consent.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.vanta.com/
- https://www.lapa.ninja/post/vanta/
- https://www.ycombinator.com/companies/vanta
