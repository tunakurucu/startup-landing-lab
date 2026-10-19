# Context.dev

Inspected: 2026-10-19 · desktop-mobile-audit · functional-entrance

https://context.dev

The hero is a working, prefilled request box with five API modes as tabs, framed in saturated blue and wrapped in a dot-matrix motif carried through the page.

## Company evidence

YC: verified-yc; batch: S26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

An announcement bar sits above a nav with 'Book demo' and a black 'Start for free'. Centred: a 'Backed by Y Combinator' badge, the headline with 'agents' in blue, one-line description, 'Start for free' and a 'Connect Context.dev' dropdown. Below, a thick blue frame holds a search box with mode tabs (Search Web, Scrape, Answer, Map, Brand), a self-typing placeholder query, and a blue submit arrow. Blue dot fields fill both margins.

### Typography

Measured h1 56px, line-height 1.1, weight 400, tracking −0.035em, family rethinkSans; body 12.6px/1.3 rethinkSans at about 48 characters. Phone h1 40px, body 13px/1.7. The second measured family is doto; the demo placeholder and the ASCII-like card illustrations use a dot-matrix face. Section headings set a phrase in blue ('fully loaded.', 'at any scale.', 'what the web knows.').

### Visual System

White ground, black text, one saturated blue for accents, frames and filled customer-story cards. Dot-matrix motif throughout: margin dot fields, dotted diagrams inside product cards, a giant dotted 'context.dev' wordmark in the footer. Hairline grid frames with corner marks. A dark band for 'Latest updates' and a dark footer.

### Page Sequence

Hero demo → customer logo strip → 'Give your agent access to the web' with Prompt / MCP / CLI terminal → 2×2 product cards (Search, Scrape, Research, Monitor) → 'Also in the API' chips → 'Every page, fully loaded.' 99.96% stat and request log → tabbed code examples with six language tabs → 'Build on what the web knows' 3×2 use cases → 'Enterprise-grade security' → blue customer-story carousel → dark 'Latest updates' → FAQ with category tabs and 'Ask anything' box → footer.

### Interaction

Clicked the hero 'Scrape' mode: the tab expanded to 'Scrape Any Page', a tooltip appeared ('Scrape any URL as Markdown, HTML, images, or a screenshot'), 'Search Web' shortened to 'Search', and the placeholder cleared and restarted typing. A click on the 'Python' code tab produced no visible change. The nav stays fixed on scroll. Under reduced motion no animations were running and the dot fields were still, but the placeholder still changed ('latest AI research papers' → 'open source vector databases').

### Accessibility

Measured body text is 12.6px at desktop. Chip and caption text is light grey. At several scroll positions section copy showed through the fixed nav and overlapped the logo. Hero mode buttons and the search input carry aria-labels; the FAQ 'Ask anything' input had no aria-label attribute. No horizontal overflow.

### Mobile

Nav collapses to logo and menu icon; the announcement bar stays. The hero drops the demo box and the 'Connect' dropdown, keeping one 'Start for free' with '1,000 free credits. No card required.' Headline breaks to two lines at 40px. Logos sit in a boxed three-up strip; the terminal and product cards stack singly. The 390 capture is blank below about 4,800px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 56 | 40 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.035 | -0.035 |
| Body px | 12.6 | 13 |
| Characters per line | 48 | 44 |
| Sections | 10 | 9 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Put a prefilled, safe request in the first screen and expose the product's verbs as modes of that one input.
- Carry one visual motif from hero to footer so a long developer page reads as one system.
- Offer the integration paths a developer will ask about (prompt, MCP, CLI, six SDK languages) as tabs near the top rather than on a docs page.

Suits developer APIs whose value is visible in a single request and response. Wrong for a non-technical buyer who needs outcomes before parameters.

Risk: Body copy at 12.6px is small for a ten-section page. The phone hero removes the demo, losing the page's strongest proof where most visitors arrive. Placeholder typing continues under reduced motion. Density is high: many tabs, chips and carousels compete.

## Limitations

- One reduced-motion load failed through the proxy ('upstream request failed') and two succeeded; the paired default-motion load timed out, so default dot-field motion was not sampled side by side.
- I did not submit the hero demo, so its output view was not seen.
- The 390 full-page capture is blank below about 4,800px; mobile was not operated live.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://context.dev
- https://www.ycombinator.com/companies/contextdev
