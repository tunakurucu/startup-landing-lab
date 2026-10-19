# Arbital

Inspected: 2026-10-19 · desktop-mobile-audit · expressive-world

https://www.arbital.xyz

Market motion is the brand: a dot-matrix headline over a dotted price chart, with a scrolling ticker and flip counters, ahead of a single 'Start Trading' action.

## Company evidence

YC: verified-yc; batch: S26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Centred on a dark navy-to-black ground: the headline 'Trade what's moving.' in dot-matrix letterforms over a faint dotted price chart. Below it sit 'Memes, stocks, and perps in one app.', a blue 'Start Trading' button and 'Backed by Y Combinator'. Trade toasts ('@hannah_ok bought SOL +8.4%') appear at the right. A full-width ticker strip of assets with % changes sits above a three-up row of split-flap counters for volume traded, traded monthly and traders.

### Typography

The measured h1 element computes to 16px geist, weight 400, 0 tracking. The visible headline is drawn as dot-matrix letters, and GeistPixelCircle is among the measured families. The largest measured text is 52px geist. Body text is 14px geist, 1.6 line height, at about 81ch. The 'Institutional market making.' heading is a high-contrast serif; Playfair Display is among the measured families. Counters use monospaced digits in flip tiles.

### Visual System

The ground is dark navy fading to near-black, with one saturated blue for CTAs and highlighted words. Green and red mark price changes. The motifs are dotted fields for the chart, world map and pixel letters, plus ticker chips, token rows, a trade ticket and bento cards with coin icons. A giant outlined 'Arbital' wordmark sits in the footer.

### Page Sequence

Hero → ticker strip → flip counters → Memes 'Catch them early.' (token list) → split pair: Stocks 'The world's markets. Always OPEN' (dot map) | Perps 'Long it. Short it.' (trade ticket) → 'Everything in one place.' 4-card bento → 'Institutional market making. For everyone.' + Deploy a Strategy + 4 feature cards → FAQ (4) → 'Join 2,500+ traders.' CTA → footer.

### Interaction

I clicked FAQ item 02 'Are the stocks real stocks?'. Its answer expanded and item 01 collapsed, with the +/× icons swapping. On load the ticker scrolled, trade toasts appeared, the chart backdrop shifted and counter digits flipped; the trader count read 2,620–2,623 across loads. The perps ticket switched from BTC to ETH to SOL between frames. Sections below the counters rendered only after scrolling. Under reduced motion the ticker held still, but the chart backdrop and counters still changed, with 2,118 running animations reported at load.

### Accessibility

The dot-matrix headline has broken strokes and lower edge contrast than solid text. Small grey caps labels and the muted subcopy under 'Catch them early.' are low contrast on black. Reduced motion does not stop the counters or backdrop. On mobile, footer links measured 16px tall. In the stored full-page captures, about 3,000px below the counters is blank because those sections render only on scroll. No horizontal overflow was measured.

### Mobile

The nav, X and Discord buttons collapse to a hamburger. The dotted chart moves above the headline instead of behind it, and the largest text drops to 32px. The ticker shows about three chips. The three counters stack vertically. The footer stacks links, socials and legal lines, with a smaller outlined wordmark. Mid-page sections were blank in the stored 390 capture and were not seen live on mobile.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 16 | 16 |
| Headline weight | 400 | 400 |
| Headline tracking em | 0 | 0 |
| Body px | 14 | 14 |
| Characters per line | 81 | 42 |
| Sections | 0 | 0 |
| Reduced-motion rule | observed | observed |

## Interpretation

- For a product about live data, let a few real-looking feeds (ticker, counters, activity toasts) carry the visual identity instead of illustration.
- Give each product line one sentence and one artifact (token list, world map, order ticket) so a multi-market app reads as distinct, concrete choices.
- Use a split-flap or monospaced counter for traction numbers so they read as instruments, not marketing claims.
- Close with an FAQ that answers custody and 'is it real' questions before the final CTA.

Consumer trading, crypto and market-data products, where motion signals liveness and the audience expects tickers. It would be wrong for regulated advice or banking products, where constant motion and gamified toasts undercut a sense of care.

Risk: Motion runs even under reduced motion, and the headline is set in a less legible dot-matrix form. Content that renders only on scroll leaves full-page captures, previews and some readers with a large blank page. Counters and toasts give no source or time basis for the numbers.

## Limitations

- Mid-page sections at 390 were not observed live; the stored mobile capture shows them blank.
- Did not follow 'Start Trading', 'Deploy a Strategy' or any app link.
- Could not verify whether ticker, toast and counter values are live data or simulated.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.arbital.xyz
- https://www.ycombinator.com/companies/arbital
