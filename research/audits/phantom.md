# Phantom

Inspected: 2026-10-20 · desktop-mobile-audit · expressive-world

https://phantom.com/

A consumer-app page built from three chapters (trade, move money, stay secure), each a headline with the ghost mascot set inline and a one-sentence card carousel.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A lavender page with a floating white nav pill (Features, Learn, Explore, Company, Developers, Support), a round search button and a lavender 'Download' pill. Below, a large rounded panel holds centred white text: eyebrow 'Where the world trades', a three-line h1 and a pale 'Download Phantom' pill with a phone icon. The panel is a video element that never loaded here and rendered flat grey. A cookie banner covers the lower right.

### Typography

Single measured family 'Phantom' (a rounded geometric sans) for everything. Measured h1 80px, weight 400, tracking -0.025em, line-height 1.1; 29.3px at 390. Section h2s are larger than the h1, 96px (measured display_px), also weight 400. Body 20px/1.4, 16px at 390; card statements about 30px. Hierarchy comes from size alone; no bold weights seen. Legal disclosures near the footer are small italic.

### Visual System

Lavender ground (rgb 245,242,255) with rounded cards in lavender, near-black, grey, blue, aubergine, cream, yellow and pink. The purple ghost mascot is set inline inside headlines as a glyph ('for [ghost] everyone', 'secured [ghost] by us', 'Download [ghost] Phantom.'). In live scrolling the ground changed per chapter: lavender, then dark aubergine for Move Money and Security, then lilac for the closing CTA and footer. Security cards carry flat illustrations (chat bubbles, a transaction warning).

### Page Sequence

Hero panel → 'Trading tools for everyone' + See more → Trading carousel (buy/sell, trending tokens, prediction markets, perps, Terminal) → 'Spend, Send, & Save' → Move Money cards → 'Controlled by you, secured by us' → Your security cards (self-custody, 24/7 support, scam detection) → 'Trusted by a community of 20+ million users' → 'Get started. Download Phantom.' → card legal disclosures → footer with large email field and link columns.

### Copy

H1: 'Your home for trading crypto, predictions, perps, and more'. Eyebrow 'Where the world trades'; no subhead paragraph. Primary button 'Download Phantom'. The category is named directly as trading crypto, predictions and perps; the audience is 'everyone'. Proof is one number: 'Trusted by a community of 20+ million users. It's more than a wallet.' Cards hold one sentence each, e.g. 'Self-custodial means you control your funds. We never have access.'

### Interaction

Clicked 'Next slide' on the Trading carousel: the row shifted one card, so 'Buy and sell all types of crypto in an instant.' left the view and 'Go long, go short, go anywhere with Perps.' entered at the right. Scrolling changed the page ground colour per chapter. No CSS animations ran on load or scroll and every video stayed unloaded, so media motion was not seen. Reduced motion: no running animations and identical frames, the same as the default load here.

### Accessibility

No horizontal overflow. The h1 is near-white (rgb 255,253,248); with the hero video unloaded it sat on mid-grey at low contrast. Footer column labels measured 3.6:1 at 16px; white 30px card text on blue 3.42:1. The newsletter email field has no label beyond its placeholder. At 390, 34 of 56 visible targets were under 44px tall, with footer links 16px tall. The cookie banner covers part of the first screen at both widths.

### Mobile

The nav reduces to the ghost logo, a 'Download' pill and a 47px round menu button. The hero keeps its rounded panel with the h1 on three lines at 29.3px. Each carousel shows one full-width card with the next one peeking at the right edge, arrows above the row. Footer link columns become a two-column grid. Page height 7,228px versus 8,075px on desktop.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 80 | 29.3 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.025 | -0.025 |
| Body px | 20 | 16 |
| Characters per line | 92 | 40 |
| Sections | 6 | 6 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Set the mascot inside the headline as a glyph so brand character recurs in every chapter without separate illustration.
- Organise a broad app into three verb-led chapters (trade, move money, stay secure), each a headline plus a swipeable row of one-sentence cards.
- Change the page ground colour per chapter to mark topic shifts without dividers.
- Give trust a single plain number ('20+ million users') right before the final download call.

Suits consumer finance and multi-feature mobile apps with a strong brand character; wrong for institutional or compliance-heavy products, where a cartoon mascot and one-line claims undercut seriousness.

Risk: Nearly every proof surface is video, so when media fails the hero becomes a grey block with low-contrast white text and the cards become empty colour slabs. Section h2s outsize the h1, flattening the outline. One-sentence cards trade depth for brevity, and fees and risk appear only in small italic legal text near the footer.

## Limitations

- All videos stayed at readyState 0 in headless Chromium; hero and card media were not seen.
- Reduced-motion behaviour could not be told apart because nothing moved in the default load in this browser either.
- In the 390 full-page capture the chapter h2s were missing (scroll-dependent rendering); mobile chapter headings were not verified.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://phantom.com/
- https://www.siteinspire.com/website/10714-phantom
- https://a16z.com/portfolio/
