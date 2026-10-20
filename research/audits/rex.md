# Rex

Inspected: 2026-10-20 · desktop-mobile-audit · immersive-editorial

https://www.rex.inc

A light-weight serif headline over a warm off-white ground leads into a blurred-photo panel carrying three outcome metrics, so an AI back-office service reads as calm and enterprise-grade.

## Company evidence

YC: verified-yc; batch: S26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A thin framed nav with a ruled content column sits on an off-white ground. The left column holds a customer pill ('synthesia AI-native order-to-cash with Rex') and a two-line serif h1; the right column holds a two-sentence pitch and an inline email field joined to a dark 'Book a demo' button plus a sparkle icon button. Below, a wide blurred-photo panel shows '12d', '90%+' and '30m' metrics over a row of seven process chips, then a ticker of running counters.

### Typography

Measured h1: family 'tid', 54px, weight 300, tracking -0.022em, line-height 1.0 - a light high-contrast serif. Measured body: 'gdGaio', 16px, line-height 1.5, 41ch measure. Families also include 'geist' and 'chivoMono'; small monospaced uppercase labels caption metrics ('FASTER DSO') and section kickers ('SECURITY', 'COMPARISON'). Section headings pair a dark serif phrase with a grey continuation ('Built for enterprise.').

### Visual System

Warm off-white ground with hairline rules and dot terminals marking the column edges. Media panels are soft-focus office photography with grain and thin curved line overlays, holding small white UI cards (agent list, DSO chart, credit-memo approval). One near-black integrations band breaks the light ground. Accent colour is restrained: a dark teal button and small status dots.

### Page Sequence

Hero with metrics panel and counter ticker → Synthesia case-study card → logo row (Y, Vercel, Forbes, NVIDIA) → 'Finance operations now run on agents' launch-film poster → eight capability tiles (Agents, Mission Control, SLAs...) → three tall solution cards → dark integrations band → 'Built for enterprise' SOC2/GDPR/SSO cards → 'How Rex works' four-step selector → comparison table vs outsourcing → FAQ → footer.

### Interaction

Operated step '03 Run' in 'How Rex works': the left list expanded Run's description and collapsed Scope, and the right panel swapped from a 'REX EXTRACTED' account card to a 'NEEDS APPROVAL' card ('Apply $44K credit memo to INV-2847', Approve/Edit). On load the hero media panel changed between frames and the counter row scrolls with changing values. With reducedMotion 'reduce' the first screen showed no change between frames.

### Accessibility

Metric captions and counter labels are very small monospaced grey text on light or photographic grounds. The grey second half of headings is low contrast against off-white. The sparkle icon button beside 'Book a demo' has no visible text label. No horizontal overflow at either width; mobile email field and button appear about 44px tall.

### Mobile

At 390 the nav reduces to the logo and a menu icon. The h1 wraps to three lines at a measured 42px; the pitch and email form stack beneath it. The metrics panel stacks the three numbers vertically and wraps process chips into a two-column grid. Capability tiles become a single column of square images with captions, and the page grows to 18,863px.

### Copy

H1: "AI operations partner for order to cash"; primary action "Book a demo" (inline with an email field). First-screen proof is a named customer pill (Synthesia), three outcome metrics (12d faster DSO, 90%+ touchless communications, 30m average response time) and live-looking activity counters.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 54 | 42 |
| Headline weight | 300 | 300 |
| Headline tracking em | -0.022 | -0.022 |
| Body px | 16 | 16 |
| Characters per line | 41 | 33 |
| Sections | 12 | 12 |
| Reduced-motion rule | observed | observed |

## Interpretation

- For a service that replaces headcount, lead with two or three outcome metrics in the first screen rather than a product screenshot.
- Embed small, specific UI cards (an approval with an invoice number, an agent queue) inside atmospheric imagery so evidence and mood share one surface.
- A light-weight serif display on a warm ground can signal enterprise calm without resorting to dark-mode tech tropes.
- Put the demo request inline with an email field next to the pitch so the first action needs no navigation.

Suits AI-native services and back-office automation sold to finance or operations executives who value restraint and credibility. It would be wrong for a self-serve developer tool where visitors need to try the product immediately.

Risk: Blurred photography and tiny monospaced captions lower legibility, and the metrics carry no stated basis or sample. The counter ticker implies live data that a visitor cannot verify. The page is long on mobile (about 18,900px) and the launch film and many tiles repeat the same agent story.

## Limitations

- The launch film and the 'Explore with AI' sparkle control were not opened.
- Whether the counter values reflect live data could not be verified.
- Outcome metrics were not independently verified.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.rex.inc
- https://www.ycombinator.com/companies/rex-inc
