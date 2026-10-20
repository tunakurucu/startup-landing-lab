# Runway

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://runwayml.com

A mission statement over a cinematic still, then the company splits into three buyer platforms (Creative, Dev, Robotics) that share one model claim.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A gradient promo bar ('Enterprises get 2 months of usage free. Sign by 10/31.') above a white nav with 'Enterprise Sales', 'Login' and 'Try Runway' buttons. The first screen is one rounded black card across the width: a dark close-up still with an orange light streak, the h1 and a four-line paragraph bottom-left in white, and a white 'Try Runway for free' button. A partner-logo strip sits below the card. A Cookiebot dialog covered the lower third in the measurement capture.

### Typography

Measured h1 40px, weight 400, line-height 1.2, tracking -0.012em, family abcNormal; the measured display size is 56px, and the 'Three platforms…' heading is visibly larger than the h1. Body 15px/1.6, measured family generic sans-serif. Nav buttons ('Enterprise Sales', 'Login', 'Try Runway') and the product-switcher labels render in a serif face in the measurement capture and the live visit. At 390: h1 28px, display 36px.

### Visual System

White ground with large rounded media cards, near-black primary buttons and light-grey secondary buttons. Imagery is photographic: an abstract cinematic still, one documentary photo per platform (students, a developer in a workshop, robot grippers over a cup), a pencil sketch of a sofa and cat in the switcher, a blurred green-brown field behind the research block. The footer is a black link directory in eight groups.

### Page Sequence

Promo bar → nav → hero card → partner-logo strip → 'Three platforms built on-top of the same Real-World Intelligence models' with Creative / Dev / Robotics columns → product switcher (three labels with progress rules, list of uses beside media) → Runway Research block (GWM-1, Gen-4.5, General World Models) → 'See the latest from Runway' four news cards → black footer.

### Copy

H1: 'Building Real-World Intelligence'. The paragraph says Runway builds foundational Real-World Intelligence that can understand, simulate and act, with products for individuals and organisations. Primary button 'Try Runway for free'. Audiences are three platforms: Creative ('Used by 60m+ creatives'), Dev ('for developers') and Robotics ('policy inference'), each with its own buttons (Try now, Get API Key, View documentation, Learn more, For Enterprise, Contact Sales). The nav repeats the split: Creative, Dev, Robotics.

### Interaction

Clicked 'Runway Robotics' in the product switcher: within about 1 s nothing switched and the rule under 'Runway Creative' kept filling. During the scroll pass the switcher had advanced by itself to Runway Dev (dark panel: Workflows, Recipes, Characters). The hero did not change over 1.5 s; the partner-logo strip changed between frames, also with reduced motion. Measurement counted 0 running animations; reduced-motion rule 'observed'.

### Accessibility

Inactive switcher items are very light grey on white; research-block descriptions are small light text over a blurred photo; footer column labels are dim grey on black. At 390 the Cookiebot dialog filled almost the whole first screen in the measurement capture. A DOM check at 390 found switcher labels 25px tall, list items 26px and 'See terms' 18px. No horizontal overflow.

### Mobile

The promo bar wraps to three lines; the nav keeps wordmark, 'Try Runway' and a menu icon. The hero card becomes tall with the image cropped and text over it. The three platform columns stack into label, photo, headline, paragraph and buttons. Switcher labels wrap onto two lines above a stacked list and a small media panel. The research block, news cards and footer go to one column; page height grows from 5144 to 9396px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 40 | 28 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.012 | -0.012 |
| Body px | 15 | 15 |
| Characters per line | 90 | 45 |
| Sections | 5 | 5 |
| Reduced-motion rule | observed | observed |

## Interpretation

- When one technology serves distinct buyers, state the shared foundation once, then give each buyer a parallel column with its own primary action.
- Mirror the buyer split in the top nav so routing is consistent from the first screen to the footer.
- Give research credibility its own block with direct links to named models rather than mixing it into product copy.

Suits companies with one core capability sold to several distinct audiences (creative, developer, robotics or enterprise). Wrong for a single-audience startup, where three platform columns would read as unfocused.

Risk: The first screen shows an abstract image rather than the product, so what Runway makes becomes clear only after scrolling. The h1 is smaller than a later heading, which flattens hierarchy. The auto-advancing switcher did not respond to a click within a second, and serif rendering on buttons and switcher labels breaks the typographic system.

## Limitations

- The first live desktop visit (run in parallel with other sites) loaded without web fonts or images; a second sequential visit was used for scroll observations.
- One mobile load returned an upstream proxy 502; a later sequential load succeeded.
- The switcher click was checked about 1 s after clicking; a slower response was not tested.
- Cookie dialogs covered part of the measurement captures; the live visit hid them with CSS rather than answering them.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://runwayml.com
- https://saaslandingpage.com/runway/
