# Mintlify

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://www.mintlify.com

A serif headline beside a realistic docs-site mockup, with live agent-traffic counters reframing documentation as infrastructure for AI agents.

## Company evidence

YC: verified-yc; batch: W22. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Left column: a bordered chip 'Agent traffic' with a green monospace percentage and chevron, a three-line h1, a grey subhead with bolded audience words, then black 'Get started' and outlined 'Sign up with Google'. Right and below: a large mockup of a Mintlify docs site (sidebar, API Reference tabs, Quickstart Guide cards) bleeding off the right edge, crossed by sweeping green-to-lime thread lines in the measurement capture. A floating 'Ask assistant' button sits bottom-right. Sticky nav: logo, three menus, Pricing, 'Sign in', black 'Contact sales'.

### Typography

Measured h1 50px, weight 400, line-height 1.0, tracking -0.04em, family arizonaFlare (a serif); 40px at 390. The serif returns only in the closing CTA; other section heads are two-tone sans statements, a black first sentence and a grey second. Body 14px inter, line-height 1.4, about 45ch measure. paperMono is in the measured families, and the counters ('Agent traffic', ticker values) are monospaced.

### Visual System

White ground with thin vertical rails framing the content and short green bars beside section heads. The signature motif is bundles of thin green/lime/teal lines sweeping through the hero, bento cards and closing band. The product appears as pale, green-tinted docs UI. Bento cards are warm off-white with small UI fragments (role list, agent cursors, AI-tool icons). Colour arrives in customer cards: Anthropic orange, Coinbase blue, HubSpot salmon, gradient startup art. Buttons are square-cornered black or white.

### Page Sequence

Nav → hero (counter chip, serif h1, buttons, docs mockup) → logo grid ('Join 20,000+ of the world's most ambitious companies building for agents') → 'Agents at work today' ticker → knowledge-platform bento (six cards) → 'Powering businesses of all sizes' enterprise story carousel → 'Built to scale with the agent web' with stats (300M+, 2B+, 99.99%) → 'Enabling the next generation of startups' carousel → testimonial grid → Latest updates → closing CTA 'The knowledge platform built for agents' → footer with status pill and theme switch.

### Copy

H1: 'The intelligent documentation platform'. Subhead: 'Self-updating documentation for startups, enterprises, and agents', with the three audiences bolded. Primary button: 'Get started' (also 'Sign up with Google'; nav 'Contact sales'). The page recasts docs as agent infrastructure: 'Agent traffic' counter, 'Agents at work today', 'Trusted by teams building for agents', and a closing 'knowledge platform built for agents'. Proof splits into 'For enterprises' and 'For startups' buttons.

### Interaction

Operated: 'Next customer story' in the enterprise carousel. The Anthropic card slid left and dimmed, a Coinbase card ('How Coinbase became agent-ready with Mintlify', +50x, 12+) took focus, a HubSpot card peeked at right, and the previous arrow became active. Two first-screen captures 1.5 s apart showed no visible change although 7 running animations (3 infinite) were reported. The 'Agent traffic' figure differed between loads. Reduced motion: the first screen was static and 5 animations still reported running.

### Accessibility

Grey second-clause headings and grey body text sit lighter than the black lead text. The disabled previous arrow is nearly invisible. The floating 'Ask assistant' button overlaps content at bottom-right at both widths. A 'Pause testimonials' control sits above the testimonial grid. At 390 the menu button is 38×38 and hero buttons 42px tall; no unlabeled buttons, images without alt, or horizontal overflow were found.

### Mobile

The nav collapses to logo and menu. The hero stacks chip, 40px h1, subhead and two buttons; the docs mockup shrinks and crops off the right edge. The logo grid becomes two columns (the logos shown differed between captures). Bento cards go single-column, each keeping its line motif. Stats stack vertically. Story carousels show one card with the next peeking, arrows under the heading.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 50 | 40 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.04 | -0.02 |
| Body px | 14 | 14 |
| Characters per line | 45 | 45 |
| Sections | 8 | 9 |
| Reduced-motion rule | observed | observed |

## Interpretation

- When the product publishes something, show that published artifact (here a docs page) beside the headline instead of an abstract illustration.
- Back a new positioning claim with a live-looking number in the hero and a ticker below it, so the claim reads as measured rather than asserted.
- Split proof by buyer size with separate carousels and segment buttons ('For enterprises', 'For startups') instead of one mixed logo wall.
- One serif headline inside an otherwise sans system can carry the brand voice without slowing scanning.

Suits developer and B2B tools that sell to both startups and enterprises, especially when the output can be shown as a screenshot. Wrong for a product with few customers yet: most of this page's length is named-customer proof.

Risk: Much of the scroll is customer proof; the bento cards explain capabilities with one-line labels and abstract fragments, and several rendered empty in the full-page capture. Counters invite scrutiny without a visible source. The floating assistant button covers content, and the two-tone grey headings weaken contrast.

## Limitations

- The hero line graphic seen in the measurement capture had not drawn in either live load within about 4 s, so its motion was not observed.
- Several bento cards rendered empty in the 1440 full-page capture; their final content was only partly seen.
- Counter values (agent traffic, ticker, stats) were not checked against any source.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.mintlify.com
- https://saaslandingpage.com/mintlify/
- https://www.ycombinator.com/companies/mintlify
