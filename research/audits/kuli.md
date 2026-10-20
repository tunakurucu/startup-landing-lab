# Kuli

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://kuli.one

A self-running chat demo under the headline scans 1,284 creators into a shortlist while every later section is another fabricated product panel with hard numbers.

## Company evidence

YC: verified-yc; batch: P26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A white sticky 65px nav: wordmark, six text links, an 'FR' globe pill, 'Log in' and a dark purple pill 'Book a Demo'. On a pale lavender dot-grid with a soft glow, a centred 'Backed by Y Combinator' chip sits over a one-line headline 'Run [rotating phrase] 10× faster.' whose middle phrase is a lilac italic serif ('social media' at 1440, 'creator marketing' at 390 in measurement). Two lines of grey body, a purple pill 'Book a Demo' and a text link 'See how it works'. A greyscale logo marquee and the top of a two-pane product demo close the first screen.

### Typography

Measured h1 68px, weight 700, line-height 1, tracking -0.035em, family Manrope, with the rotating phrase in the measured display family Fraunces (italic); body 18px / 1.5 Manrope, measure 77ch. Families present: Manrope, Inter, ui-monospace, Fraunces. Section headings mix bold Manrope with an italic serif phrase ('manual work', 'millions of videos'); eyebrows are small lilac uppercase pills; stats and timestamps inside panels are monospace. The closing headline sets '10×' in a very large lilac italic serif. Mobile h1 36px.

### Visual System

Off-white and lavender ground with a faint dot grid and plus-sign corner marks in the hero. Palette: deep aubergine text and buttons, lilac accent, green for 'do's' and uplift percentages, red-pink for 'don'ts' and rival alerts. Surfaces are white rounded panels with 1px borders and soft shadows styled as product UI (chat pane, shortlist cards, 'Brand HQ' brain, video-watching strip, post-analysis checklist, rivals' top posts, comparison table). Creator video thumbnails and greyscale brand logos are the only photography.

### Page Sequence

Nav → hero (chip, rotating headline, body, two CTAs) → 'Iconic brands and agencies trust Kuli' logo marquee → self-running demo: chat pane left ('Find me US clean-beauty micro-influencers…', progress steps) and shortlist pane right (1,284 scanned → 38 strong fits → 6 picks, ranked creator cards) → 'How Kuli works': alternating rows (Brand HQ do's/don'ts panel; video-watching strip with 'Kuli's read'; a third row) → 'Four jobs your spreadsheet can't do' cards → comparison table Kuli vs agencies vs influencer platforms → 'Make your team 10× more productive' CTA with Book a Demo and Talk to sales → five-column footer.

### Interaction

Operated the 'FR' toggle (aria 'Passer en français'): the page navigated to /fr/, the nav, headline ('Pilotez votre stratégie d'influence 10× plus vite.'), body and CTAs switched to French, the demo's chat brief stayed in English, and the toggle read 'EN'. On load 46 transitions were running: the hero demo typed a brief, stepped through 'Pulled 1,284 candidates… Watched 6,400 posts… Scored brand fit' and filled the shortlist; 'live' dots pulsed; one of 26 creator videos played. With reducedMotion set the first screen was still over one second but 11–13 animations (ping/pulse dots, chip transitions) kept running and all videos stayed paused.

### Accessibility

Headline contrast is high; grey body and the tiny monospace meta text inside panels (around 10–11px) are low-contrast and small. The demo's 'send' button is 24×24px, and 'Export' and 'Brief campaign on these' are 22–24px tall. The hero demo input has a placeholder but no visible label. The full-page capture left large blank regions where sections had not yet been revealed by scroll. No horizontal overflow at either width.

### Mobile

Nav keeps the wordmark, a 'Book a Demo' pill and a hamburger; the FR toggle and Log in move out of view. The headline stacks to three centred lines with the rotating phrase on its own line; CTAs sit side by side. The logo marquee shows two logos at a time. The two-pane hero demo is not present in the 390 capture; the page goes from logos to 'How Kuli works', and each feature row stacks copy above a full-width product panel. Page height 10150px versus 7400px at 1440.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 68 | 36 |
| Headline weight | 700 | 700 |
| Headline tracking em | -0.035 | -0.035 |
| Body px | 18 | 18 |
| Characters per line | 77 | 31 |
| Sections | 6 | 6 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Let the hero demo run itself from a real-looking brief to a ranked result so the visitor sees the whole job finish before reading a feature.
- Switch one phrase of the headline into an italic serif to carry the brand voice; keep everything else in a single quiet sans.
- Give every section a fabricated product panel with specific numbers rather than an illustration; specificity reads as proof even without customers.
- Localise the whole page behind a one-tap toggle, but make sure demo content switches too or the seam shows.

Suits B2B AI agents sold to marketing or operations teams where the output (a shortlist, a report) is more convincing than the interface. Wrong for products that cannot script a believable end-to-end run, or for audiences who will test the numbers, since every figure on the page is illustrative.

Risk: Dozens of concurrent transitions and 26 video elements make the page heavy, and reduced motion only partly quiets it. The demo and panels present invented stats (1,284 scanned, €1.2M EMV) with no customer attribution; the comparison table prices competitors without sources. The hero demo disappears on mobile, removing the page's main argument for phone visitors.

## Limitations

- Only one creator video played in headless Chromium; the content of the 26 video elements was not verified. Which sections stay blank until scroll-reveal on a real device was not confirmed.
- The FR toggle was operated once; the rotating headline phrases beyond 'social media', 'creator marketing' and 'd'influence' were not enumerated.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://kuli.one
- https://www.ycombinator.com/companies/kuli
