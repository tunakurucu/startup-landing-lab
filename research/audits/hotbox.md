# Hotbox

Inspected: 2026-10-19 · desktop-mobile-audit · workflow-theater

https://hotbox.app

A serif promise flanked by fan-comment chips and outcome pills, then a tabbed DM-to-checkout chat mock that replays the sale per vertical.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Centred stack: pill eyebrow 'The AI system for high-demand drops', two-line serif headline with 'revenue' in rust and underlined by a brush stroke, one-sentence subhead, single 'Book a demo' button. Five tilted fan-question chips on the left and four outcome pills ('Tickets sold', 'Jersey purchased') on the right connect to the headline by thin curved lines. A row of product-category cards with 3D object renders sits along the fold.

### Typography

Display h1 72px, weight 700, tracking -0.035em, line-height 0.9, measured family Honoka Mincho (a serif); the same serif carries every section headline. Body 19px / 1.5, measured family General Sans, measure about 74ch at desktop. Small caps-spaced sans eyebrows in rust or lime label each section.

### Visual System

Warm cream ground with a faint square grid, alternating with near-black espresso bands lit by a rust radial glow. Accents: rust-orange (underline stroke, connector lines, eyebrows) on light, acid lime (progress bar, checkmarks, CTA in footer card) on dark. Imagery is glossy 3D product renders on tilted white cards plus UI mocks: an Instagram-style DM thread, a dashboard, a brand-voice slider card. Wordmark sits on a tan cardboard-textured tag.

### Page Sequence

Hero with comment chips and outcome pills → category card row → 'From message to order' dark demo (6 vertical tabs + phone chat) → 'The crowd is already telling you what they want' 3 feature cards → 'One system. Three views.' Automate/Measure/Retarget dashboard → 'Less inbox grind' without/with comparison → 'Automatic does not have to mean generic' voice section → FAQ accordion → dark CTA card with oversized wordmark and footer links.

### Interaction

Clicked the 'Trading cards' tab in 'From message to order': the tab took the rust fill with lime title and the phone mock swapped from a mika.22 jersey conversation to a ryan.rips conversation about a 1/1 card, with the lime progress bar restarting. On load the category card row scrolls sideways and chat bubbles appear in sequence. While scrolling, 'Three views' moved from Automate to Measure. With reduced motion the card row still moved; running animations fell from 15 to 7.

### Accessibility

Hero comment chips and outcome-pill labels are small (roughly 11-13px) and rotated. Grey body text inside the beige 'Without Hotbox' card is light against its ground. The category card row keeps moving under reduced motion. No horizontal overflow at either width. The header stayed at the top in every desktop scroll capture although the measurement recorded sticky_nav false.

### Mobile

Header drops to wordmark and 'Login' with no other navigation visible. The desktop eyebrow is replaced by a 'Backed by a16z speedrun' line; comment chips and outcome pills are removed. h1 shrinks to 35.1px over three lines. Category cards stay a horizontal row. The vertical tabs stack above the phone mock, the three views become a horizontal button row, the comparison cards stack, and body drops to 16px at 44ch.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 72 | 35.1 |
| Headline weight | 700 | 700 |
| Headline tracking em | -0.035 | -0.035 |
| Body px | 19 | 16 |
| Characters per line | 74 | 44 |
| Sections | 8 | 8 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Let one vertical selector drive a single product mock so each buyer segment sees its own worked example without leaving the page.
- End the demo on the business outcome (a revenue-added receipt) rather than on interface chrome.
- Surround the headline with literal inputs on one side and outcomes on the other so the product's job reads as a transformation before any copy is parsed.
- Alternate light editorial bands for claims with dark bands for proof so the reader can tell argument from evidence by colour alone.

Suits B2B tools whose value is a conversation or workflow that can be scripted end to end (commerce agents, support automation, sales assistants). Wrong for infrastructure or APIs where the output is not a human-readable exchange.

Risk: The page is long (about 8,700px) with three separate simulated UIs, so proof repeats rather than deepens. Persistent marquee motion ignores reduced motion. Mobile strips navigation to Login only and drops the input/outcome framing that explains the hero on desktop. Only one CTA (book a demo) exists for every reader.

## Limitations

- Did not open 'Book a demo' or log in; no conversion flow inspected.
- Playwright screenshots timed out on this page; captures were taken through the DevTools protocol instead.
- Mobile navigation behaviour (menu, sticky header) not operated.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://hotbox.app
- https://speedrun.a16z.com/companies/hotbox
