# Known

Inspected: 2026-10-19 · desktop-mobile-audit · immersive-editorial

https://knowndating.com

The homepage is a single centered manifesto on black, a short protest against swiping, ending in one Apply to Join button.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled; no in-page control at this width (menu toggle operated at 390)
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

knowndating.com redirects to known.com. The first screen is pure black with a wordmark top-left, three text links and an outlined Apply to Join pill top-right, and a narrow centered block of short sentences in four stanzas ('Profiles told us nothing...', 'Not a game. Not a job. Not a gamble.'). There is no headline, image or product shot above the fold.

### Typography

Measured h1 is 16px, weight 500, 0em tracking, family -apple-system, and holds 'Known: your pocket matchmaker, a swipeless dating app'; it is not the visible copy. Largest measured display text is 18px. The manifesto is set as small, centered, regular-weight sans lines with blank-line stanza breaks; body measured 16px / 1.5. The wordmark is a custom lowercase logotype; only -apple-system is in the measured families.

### Visual System

Black ground (#000-like) with off-white text; footer shifts to a slightly warm near-black. The bottom CTA is a light grey pill with a metallic sheen. Press logos (Union-Tribune, LA Times, WSJ and more) are dimmed grey. A QR code sits in the desktop footer. A full-viewport video element exists but was paused and not visible in any capture.

### Page Sequence

Manifesto stanzas → 'This is Known.' → Apply to Join button → 'Available on iOS & Android, featured in' press logos → footer (QR code, Discover / Here / Elsewhere link columns, wordmark, copyright). Measured as one section, 1317px tall at 1440.

### Interaction

At 390 I operated the hamburger: it became an X and a black panel dropped down with three large links (How it Works, Guidelines, Journal) over the top of the manifesto. With motion on, manifesto lines changed between captures and the 390 full capture shows lines fading in from a blur. In motion mode only three press logos showed, the first cropped at the edge; under reduced motion all lines rendered at once, eight press logos appeared in a static grid, and paired captures were identical.

### Accessibility

Small grey 'Available on iOS & Android' text and dimmed press logos sit on black at low apparent contrast. The visible manifesto is not the h1; the h1 is a 16px line. Transparent sticky nav lets manifesto text scroll beneath the links. No horizontal overflow measured. Mobile header CTA and hamburger are comfortably sized.

### Mobile

Nav links collapse into a hamburger and the Apply to Join pill moves beside it. Stanzas rewrap to the same centered column. The footer QR code is replaced by an app icon labeled 'Tap to Install', and link columns go two-up then stack. Page grows to 1601px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 16 | 16 |
| Headline weight | 500 | 500 |
| Headline tracking em | 0 | 0 |
| Body px | 16 | 16 |
| Characters per line | None | None |
| Sections | 1 | 1 |
| Reduced-motion rule | observed | observed |

## Interpretation

- When the product's pitch is a rejection of category norms, a short manifesto can carry the whole first screen without any product imagery.
- Pair a single-action page with one CTA repeated in the nav and at the end of the text, so the reader never has to search for the next step.
- Swap a desktop QR code for a direct install link on mobile so the download path fits the device.

Consumer apps with a clear stance and an application or waitlist gate, where tone matters more than features. Wrong for any B2B or technical product whose buyer needs to see how it works.

Risk: The page explains almost nothing: no screenshot, no how-it-works, no pricing, and the real h1 is hidden from sight. The line-by-line blur reveal delays reading on load, and the low-contrast grey details may fail contrast checks.

## Limitations

- Could not operate an in-page control at 1440; the only interactive elements were nav links and Apply to Join, which leads to an application flow.
- A video element was present but paused; whether it plays under other conditions was not verified.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://knowndating.com
- https://pear.vc/companies/
