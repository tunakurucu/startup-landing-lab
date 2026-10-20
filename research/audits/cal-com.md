# Cal.com

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://cal.com

Sign-up buttons share a framed hero card with a recreated booking page and calendar, so visitors see the surface their invitees will use before reading feature copy.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A white rounded card on a light-grey ground holds two columns. Left: a release pill ('Cal.com launches v6.9.5'), a three-line h1, a grey subhead, a full-width dark 'Sign up with Google' button, a lighter 'Sign up with email' button and 'No credit card required'. Right: a recreated booking page (host avatar, meeting title, 15m/30m/45m/1h chips, video app, timezone) beside a May 2025 month grid cropped at the card edge, above Trustpilot, Product Hunt and G2 star rows. Customer logos sit below the card.

### Typography

Display measured as Cal Sans: h1 64px, weight 600, line-height 1.1, tracking 0, a face that sets tight. Section h2 48px/600. Body and card titles use measured Cal Sans UI Variable Light at weight 300 (body 16px/1.5, h3 18px). Inter and Matter are also measured on the page. Body measure is 50ch at 1440 and 38ch at 390; the h1 is 40px at 390. The heavy display against light text weight is the main hierarchy device.

### Visual System

Light-grey ground (rgb 244) framed by thin vertical guide lines, with '+' crosshair marks at section seams. Every module is a white card with a hairline border and soft shadow. Buttons are near-black or white only; colour comes from third-party logos, rating stars and app icons. Imagery is recreated product UI: booking page, availability toggles, buffer selects, calendar overlay, notification toasts. The only photos are avatars. Small icon pills label each section.

### Page Sequence

Nav → hero card → logo strip → 'How it works': three numbered steps (connect calendar, set availability, choose how to meet) → 'Benefits': 2×2 feature cards with UI → '…and so much more!': eight icon tiles → testimonial quote carousel → 'App store' integrations grid → 'Wall of love' masonry of social posts with 'Show more' → FAQ accordion → logo strip again → 'Smarter, simpler scheduling' CTA card with Product Hunt badges → footer with compliance badges and download links.

### Copy

h1: 'The better way to schedule your meetings'. The subhead names three audiences: individuals, businesses taking calls, and developers building scheduling platforms. Primary button 'Sign up with Google'; the nav button is 'Get started'. The category is named plainly as a scheduling app or software ('Your all-purpose scheduling app'). Several section heads carry a dark-and-light button pair ('Get started' with 'Book a demo' or 'Explore apps'; 'Talk to sales' with 'Get started'). Testimonials and social posts compare it directly with Calendly.

### Interaction

Clicking the hero '1h' chip and a date changed nothing; the cursor stayed default, so the booker acted as a static picture. I operated the FAQ instead: clicking the second question opened its answer and closed the first. It responded only after a long settle in this proxied session. After scrolling, the nav moved into a rounded white bar with a hairline border. No running animations or pixel changes appeared on the first screen, with or without reduced motion.

### Accessibility

The subhead and most supporting text compute to rgb(137,137,137): about 3.5:1 on white and 3.2:1 on the grey ground. No <button> or aria-expanded elements were found, so FAQ rows are not exposed as buttons. The 390 menu trigger is a focusable div with no role or label. At 390, 85 of 124 targets are under 44px tall ('Sign in' is 45×16). In one capture the nav had no background and its links overlapped the FAQ heading. No horizontal overflow.

### Mobile

The hero card stacks: copy and both sign-up buttons first, then the booker and the month grid, which stays cropped at its right edge. Section heads move from centred to left-aligned. Step and feature cards go single-column, and the eight icon tiles become two columns. In the capture the logo strip showed only its caption. The nav keeps the wordmark, 'Sign in', 'Get started' and a menu icon. The page grows from 8,569px to 11,874px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 64 | 40 |
| Headline weight | 600 | 600 |
| Headline tracking em | 0 | 0 |
| Body px | 16 | 16 |
| Characters per line | 50 | 38 |
| Sections | 1 | 1 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- Put the artifact your users' customers will see (here, a booking page) in the hero, so visitors judge the output instead of reading claims.
- Make one-click OAuth sign-up the primary hero action, and state the friction removed ('No credit card required') directly beneath it.
- Use one module shape (a white bordered card on a quiet ground) for every section, so a long page stays scannable.
- If a hero artifact looks interactive (chips, dates), make it respond locally or mark it as an illustration.

Suits self-serve SaaS whose output is a recognisable surface (booking pages, forms, invoices) and whose buyers compare it with a known incumbent. Wrong for products whose value does not show in one screen, such as back-end infrastructure, where a recreated UI would show little.

Risk: The hero booker invites clicks it ignores. Light-weight grey body text falls below 4.5:1. Repeated CTA pairs and a long run of proof sections (carousel, wall of love, FAQ, repeated logos) make the page long, close to 12,000px at 390. Interactive elements are not exposed as buttons, which hurts keyboard and screen-reader use.

## Limitations

- The FAQ responded only after about 30 s in this proxied session; earlier clicks did nothing, so its behaviour on a normal connection is unverified.
- The two measurement captures showed different sample bookers (Partnerships Meeting with 15m selected vs Academic Counseling with 45m). Whether the booker rotates was not confirmed: it stayed static for 20 s in my session.
- The measurement record counted 2 (desktop) and 8 (390) running animations on load; I saw no movement and could not identify them.
- Whether the testimonial carousel auto-advances was not verified.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://cal.com
- https://saaslandingpage.com/cal-com/
