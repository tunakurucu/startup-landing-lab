# Tailscale

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://tailscale.com

A centred category claim is followed, inside the first screen, by five product cards that swap a full product panel, sorting the platform by job before proof.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Dark utility bar with a monospaced uppercase announcement, then a light nav ending in a black 'Get started - it's free!' button. Centred two-line h1, three-line centred subhead, black primary button beside an underlined 'Contact sales' link. Still in the first screen: a row of five product cards (icon, name, one-line job), the first filled red, with the top of a white product panel below. A Ketch privacy banner covered the lower fifth in the measurement capture.

### Typography

Measured h1 64px, weight 500, line-height 1.1, tracking -0.01em, family inter; 37.5px at 390. Measured body 14px Arial at desktop and 16.9px inter at 390. A second measured family is mdio; the utility bar and footer column labels are set in monospaced uppercase. Section headings use two tones: first line mid-grey, second near-black ('50,000 businesses / choose Tailscale').

### Visual System

Warm off-white ground, white rounded panels, black buttons. Each product has its own accent (red for Business VPN, purple for Privileged Access) on the active card and the panel eyebrow. Proof is product UI: a laptop with an app and a 'Tailscale Status' card; later a terminal install, a login screen and an admin 'Machines' table. One blue gradient panel and one near-black CTA band break the light rhythm. Customer logos sit in grey tiles.

### Page Sequence

Utility bar → nav → centred hero + five product cards → product panel (bullets, button, laptop UI) → '50,000 businesses choose Tailscale' with three metric case cards → 17-logo wall → blue panel 'Easy, secure, identity-based access to anything' with role pills and UI composite → three benefit columns → developer tweets row → integrations icon grid with 'Over 100 integrations' card → dark CTA band → footer.

### Copy

H1: 'The best secure connectivity platform for the AI era'. Subhead: a Zero Trust identity-based platform that replaces legacy VPN, SASE and PAM and connects remote teams, multi-cloud, CI/CD, Edge & IoT and AI workloads. Primary button 'Start connecting devices'; nav CTA 'Get started - it's free!'. Audience is named by product job (five cards) and by role (IT, Security, DevOps, Engineering pills); proof copy addresses developers ('Developer approved').

### Interaction

Clicked the 'Privileged Access' card: it filled purple, Business VPN reverted to plain, and the panel below changed its heading to 'Privileged Access' with a purple eyebrow, keeping a laptop mock. On load the first screen did not change over 1.5 s. Measurement counted 2 running animations on load (1 at 390); reduced-motion rule 'unverified'. With reduced motion, frames 1.5 s apart were identical at the top and at 35% depth.

### Accessibility

Grey first lines of two-tone headings and grey logos on grey tiles sit at lower contrast on the off-white ground. At 390 a DOM check found utility links 30px tall and 'Read case study' and 'Contact sales' text links 23px tall. The measured desktop body family is Arial while display text is inter. No horizontal overflow at either width.

### Mobile

The utility bar wraps to two centred lines; the nav collapses to logo and a black menu button. H1 drops to 37.5px over four lines. Product cards become wrapped icon-and-label chips without descriptions, the active one a red pill. The product panel stacks eyebrow, heading, laptop image, bullets and button. Metric cards stack, logos go to three columns, integrations to four columns around the text card, and the CTA band stacks.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 64 | 37.5 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.01 | -0.01 |
| Body px | 14 | 16.9 |
| Characters per line | 114 | 34 |
| Sections | 6 | 6 |
| Reduced-motion rule | unverified | unverified |

## Interpretation

- Put the product menu directly under the hero as selectable cards that swap a full panel, so each buyer reaches their job within the first scroll.
- Give each product its own accent colour and reuse it on the active control and the panel it opens.
- Back a logo wall with a few quantified customer results that link to case studies.
- Offer a second entry by role (IT, Security, DevOps, Engineering) for buyers who think in teams rather than products.

Suits infrastructure or security platforms with several products and both self-serve and sales paths. Wrong for a single-feature tool, where a five-way product switch would invent breadth.

Risk: The centred hero and superlative claim ('the best … for the AI era') are generic and unproven in the first screen; the specific mechanism appears only in the panel and the blue section. Five products, four roles and two CTAs add choices before any explanation of how it works.

## Limitations

- Two reduced-motion loads failed with an upstream proxy 502 ('upstream request failed'); a third, sequential load succeeded.
- The first desktop and mobile loads timed out before the load event; the product-card click was verified on a later sequential load.
- Did not open nav dropdowns, the role pills or the tweets row; whether the tweets row moves was not checked.
- Tap-target sizes come from a DOM bounding-box check, not a device test.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://tailscale.com
- https://saaslandingpage.com/tailscale/
