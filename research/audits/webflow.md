# Webflow

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://webflow.com/

A generic headline is offset by an inline role selector that swaps the proof cards, so marketing, design, engineering and agency buyers each see their own reasons.

## Company evidence

YC: verified-yc; batch: S13. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A blue announcement bar ('The biggest announcements from Webflow Conf '26') sits above a white nav with a blue 'Start for free'. The hero is left-aligned: a one-line 80px headline, a two-line subhead and two buttons, blue 'Get started' and grey 'Talk to Sales'. At the right, a sentence with an inline dropdown reads 'What [marketing teams] love about Webflow'. Below, a row of image cards (product UI scenes and customer stat cards) drifts sideways, cropped at both edges.

### Typography

h1 measured 80px, weight 600, line-height 1 (computed 83.2px), tracking -0.01em, measured family WF Visual Sans Variable, the only family on the page. Section h2s are 56px/600; card and footer headings 20px/500; '#MadeinWebflow' is a second 80px h1. Body 16px/1.6, measure 49ch. With one grotesque family and tight tracking, hierarchy is carried by size alone. Phone h1 46.3px.

### Visual System

White ground with thin grey rules; a saturated blue for primary buttons, links and the announcement bar; light grey secondary buttons. Imagery is mostly real: dark product UI (agent sessions beside a site preview), customer portrait videos with white stats, a builder screenshot of a Dyson product page, and a skewed collage of customer websites. A fixed 'Made in Webflow' badge sits bottom right.

### Page Sequence

Announcement bar → hero with audience selector → drifting card row → 16-logo grid → 'Introducing Source by Webflow' with a large agent-and-preview product frame and 'Watch launch video' → 'Where modern teams and agents run the web' with four capability lines → '300,000+ brands move the needle with Webflow' customer video carousel → 'Turn your website into a growth engine' contact-sales form beside a builder screenshot → 'Recent updates' (three cards) → '#MadeinWebflow' skewed site collage → footer.

### Copy

h1: 'Build for what's next'. Subhead: Webflow gives every team the tools to build, manage and grow a website that drives real revenue. Primary 'Get started'; header 'Start for free'; secondary 'Talk to Sales' and 'Contact Sales'. The title names the category, 'The agentic web platform for modern businesses'. The visitor chooses the audience: marketing, design or engineering teams, or agencies. Proof is outcome numbers ('$200M in new pipeline', '20% increase in site-wide conversion') and '300,000+ brands'.

### Interaction

Opened the 'What ___ love about Webflow' dropdown (Marketing teams, Design teams, Engineering teams, Agencies) and chose Design teams: the inline label changed to 'design teams', its aria-label to 'Designer, selected item 2 of 4', and the card row swapped to design cards (GSAP interactions, AI handling repetitive work, Shared Libraries) plus an Amazon '49.5% reduction in development time' card. The card row drifts left continuously, also under reduced motion. Six story videos stayed paused. The nav stayed pinned after the bar scrolled away.

### Accessibility

A 'SKIP TO MAIN CONTENT' link is present. The page has two h1 elements. A cookie dialog covered the lower-left of the 1440 first screen, over the card row. White stat and quote text sits on photos and video stills; contrast could not be computed there. At 390 the menu is a 36×38 div with role button; 99 of 150 targets are under 44px tall and nine under 24px (customer name links 22px, 'Talk to sales →' 19px). No horizontal overflow.

### Mobile

The announcement bar wraps to two lines; the header keeps logo, 'Contact Sales' and a hamburger. The hero centres a two-line 46px headline, the subhead and both buttons side by side, then the audience sentence, then the drifting card row cropped at both edges. Customer stories become a one-card carousel with arrows, and the contact form stacks its six fields in one column. Page height grows from 7,577px to 9,403px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 80 | 46.3 |
| Headline weight | 600 | 600 |
| Headline tracking em | -0.01 | -0.01 |
| Body px | 16 | 16 |
| Characters per line | 49 | 32 |
| Sections | 4 | 4 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Let visitors pick their role in a sentence-shaped selector ('What [design teams] love about…') and swap the proof cards beneath it, so one hero serves several buyers.
- Back each customer story with one outcome number set larger than the quote.
- When the product's output is visual, close with a collage of real customer work instead of another logo row.

Suits mature platforms with several buyer roles and both self-serve and sales paths. Wrong for an early product with one buyer and few customers, where a role selector, logo grid and contact form would expose thin proof.

Risk: The h1 'Build for what's next' says nothing about websites; the category lives in the subhead and the page title. Continuous drift in the card row ignores reduced motion and makes the cards hard to read. Several conversion paths (Get started, Start for free, Talk to Sales, Contact Sales, the form) compete. The page carries two h1s.

## Limitations

- The cookie dialog was left in place to avoid setting consent.
- Customer story videos did not load or play in headless Chromium.
- The measurement record lists sticky_nav false and a 0px mobile nav height, but the nav stayed pinned while scrolling at 1440 and a header was visible at 390.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://webflow.com/
- https://saaslandingpage.com/webflow/
- https://www.ycombinator.com/companies/webflow
