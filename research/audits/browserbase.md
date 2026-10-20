# Browserbase

Inspected: 2026-10-20 · desktop-mobile-audit · expressive-world

https://www.browserbase.com

Dithered pixel-art landscapes and orange highlight-block headings give an invisible browser-infrastructure API its own world, with an interactive ecosystem diagram explaining the product.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A sticky white nav (orange 'B' logo, five links, 'Log in', 'Sign up', black 'Get a demo') sits above a framed hero panel: pale blue dotted ground with a dithered pixel-art mountain range in orange, yellow, green and black. The heading is centred in two orange highlight blocks with white text, followed by a two-line subhead and two pills, black 'Get API key' and pale 'Setup for agents' with a copy icon. The logo-row heading shows below the panel within the first screen.

### Typography

No h1 exists; the hero heading is an h2. Measured display 45px, family gtPlanar (a geometric sans), dropping to 21px at 390; body 20px in 'plain', line-height 1.2 (16px on mobile). gtStandardMono is in the measured families; uppercase monospaced labels ('TRY FOR FREE ▶', 'GET STARTED ▶', 'HUMAN YEARS BROWSING THE WEB') and highlighted keywords ('BRIDGE', 'AI', 'DIGITAL WORLD') are set in a monospace. Key phrases are orange inside black headings.

### Visual System

White ground divided by thin blue-grey blueprint rules and column rails. Orange is the brand colour: logo, headline highlight blocks, accent words and a full-bleed orange footer with a giant 'B'. Dithered pixel-art landscapes and a pixel computer supply the imagery. Some headings and stat cards sit on pastel highlight blocks (yellow, blue, pink). Use cases are pale-blue line sketches of UI: cursors, a sign-in form, a CAPTCHA, a hotel price card.

### Page Sequence

Nav → pixel-landscape hero → logo row ('10,000+ companies building beyond the API') → 'See what agents can do on the web' (Search API, Fetch API, Browser-as-a-Service) → 'Use the whole web like it's an API' with bullet list and pixel computer → eight use-case cards → interactive ecosystem diagram → 'Zero setup. Real results.' three steps → CTA band ('100% of the web at production scale.') → 'Don't use the web. Scale it.' with mountain and '10,000+ years saved' → 'Trusted by' counter cards → orange footer.

### Copy

Hero heading: 'Give your agents access to the whole web.' Subhead: 'Browserbase makes the web as reliable and programmable as APIs'. Primary button: 'Get API key' (secondary 'Setup for agents'; nav 'Get a demo'). The audience is builders of AI agents: headings address 'your agents' and claim 'Anything you can do in a browser, your agent can too.' Use-case cards end in monospaced 'GET STARTED ▶' links.

### Interaction

Operated: the 'Extract structured web data' tab on the ecosystem diagram. The highlighted arc moved round the ring, the centre title changed from 'Research at web scale', a different set of capability chips lit up, the right-hand output switched from browser windows ('Running 128 browsers…') to a code panel with a JSON skeleton, and the left source tiles changed. Two first-screen captures 1.5 s apart were identical. Counters showed placeholder zeros ('000,000') in captures. Reduced motion: no visible change; the measurement records a reduced-motion rule.

### Accessibility

The hero heading is an h2 and no h1 was found. White text on orange highlight blocks and orange accent words on white are the main contrast risks. At 390 the menu icon is 24×24, hero pills 39px tall and logo tiles 153×44; a skip link exists. Several media areas rendered as large blank gaps, and counters read '000,000' or '00,000+' when captured. No unlabeled buttons, images without alt, or horizontal overflow were found at 390.

### Mobile

The hero heading shrinks to 21px highlight blocks; the pills stack vertically and the landscape compresses into a short strip. Logos become a two-column grid with play triangles. The API list, use-case cards and three steps stack single-column with tall blank media slots between them. The pixel computer moves under its text. The 'Don't use the web' mountain does not appear in the capture. The footer reflows to two link columns with the large 'B' at the bottom.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | None | None |
| Headline weight | None | None |
| Headline tracking em | None | None |
| Body px | 20 | 16 |
| Characters per line | None | 30 |
| Sections | 10 | 10 |
| Reduced-motion rule | observed | observed |

## Interpretation

- An infrastructure product with no interface to show can own a recognisable look by applying one illustration technique consistently across hero, diagrams and step cards.
- Make the architecture diagram switchable by job (research, extraction, form filling, testing) so each scenario lights up the capabilities and output it uses.
- Give the hero one action per audience: an API key for developers and a setup action aimed at agents.
- Monospaced micro-labels and highlight blocks can give a developer page texture without adding more imagery.

Suits API and infrastructure products for developers and AI builders, where the product is invisible and identity must come from art direction. Wrong for buyers who must see an interface or dashboard before purchase, such as finance or HR software.

Risk: With no h1 the main claim is weaker for assistive technology and search. The imagery is decorative and says little about how the API works until the diagram section. In automated captures counters showed zeros and media slots were blank, which reads as broken if animations or videos fail. White text on bright orange blocks is a contrast risk.

## Limitations

- No h1 exists, so typography cites the measured display size rather than h1 metrics.
- Four video elements (three with autoplay) did not play in headless Chromium; several media areas were blank and their content is unverified.
- Counter values appeared as placeholders in captures; final figures were not verified.
- The first reduced-motion and 390 live loads timed out on navigation and were rerun once.
- 'Setup for agents' was not clicked; what it copies is unverified.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.browserbase.com
- https://www.lapa.ninja/post/browserbase/
