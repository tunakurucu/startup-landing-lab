# Measured homepages · 2026-10-19

`measurements.jsonl` holds one record per homepage, produced by [`scripts/measure.mjs`](../scripts/measure.mjs): headless Chromium, one visit per viewport (1440 × 900 and 390 × 844), robots.txt respected, numbers only. No markup, assets or screenshots are stored. 114 homepages were attempted: the 94 new 2026 candidates plus the 20 previously audited sites. 103 returned complete measurements; 11 refused automated visits (HTTP 403/405/502, a robots.txt disallow, or a timeout), and those are recorded with the error.

## What 103 startup homepages actually do

| Measure | 10th pct | 25th | Median | 75th | 90th |
| --- | --- | --- | --- | --- | --- |
| Desktop h1 size (px) | 42 | 55 | **64** | 77 | 95 |
| Desktop h1 weight | 400 | 400 | **500** | 600 | 700 |
| Desktop h1 tracking (em) | −0.045 | −0.03 | **−0.025** | −0.003 | 0 |
| h1 ÷ body size | 2.1 | 3.2 | **3.8** | 4.6 | 5.5 |
| Desktop body size (px) | 14 | 16 | **17** | 18 | 20 |
| Body characters per line | 45 | 52 | **62** | 74 | 84 |
| Phone h1 size (px) | 24 | 32 | **37** | 42 | 48 |
| Phone h1 ÷ desktop h1 | 0.45 | 0.50 | **0.58** | 0.67 | 0.80 |
| Phone body size (px) | 13.5 | 14 | **16** | 16 | 18 |
| Font families in use | 1 | 2 | **2** | 3 | 4 |
| Top-level sections | 1 | 5 | **7** | 9 | 11 |
| Desktop nav height (px) | 52 | 62 | **72** | 86 | 132 |

- A `prefers-reduced-motion` rule was found on 82 of 103 pages (15 had none; 6 could not be inspected because their CSS is cross-origin).
- 51 heroes sit on a dark ground, 52 on a light one.
- 62 headers are sticky or fixed.
- 82 pages had animations running at load; 49 contain a `<video>`, 36 a `<canvas>`.
- One page scrolled sideways at 390 px.
- The most common first or second family is Inter (27 pages), then Geist (15). Monospace families are common as a secondary face: IBM Plex Mono, Geist Mono, JetBrains Mono and system monospace together appear on 21.

## How to read this

These are computed styles, not verified font identities: the family is the first name in the computed stack, which can be a site's alias. Animation counts are animations running at that moment, not an inventory of motion. Section counts depend on markup. The sample is 2026 YC, a16z speedrun and Pear companies plus earlier audited sites, so it describes what these startups ship, not what converts.

The archetype recipes now quote these numbers as **observed** next to their **recommended** values. The recommended headline cap (about 6.5rem, 104 px) sits just above the 90th percentile; the recommended tracking floor (−0.04em) sits near the 10th.
