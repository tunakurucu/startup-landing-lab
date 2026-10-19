# Marble

Inspected: 2026-10-19 · desktop-mobile-audit · workflow-theater

https://joinmarble.ai/

A light, single-accent page that walks each back-of-house job through its own concrete artifact: invoice, purchase-order checklist, prep sheet, schedule grid.

## Company evidence

YC: verified-yc; batch: S26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Left column: a three-line headline with 'autonomous' in burnt orange, a two-sentence description, and an orange 'Get a demo' button beside an outlined 'Learn more'. The right half holds a greyscale isometric kitchen illustration with an orange floor line. A row of greyed restaurant-group logos labelled 'Trusted by leading restaurant groups' closes the first screen.

### Typography

Measured h1 64px, line-height 1.1, weight 300, tracking −0.025em, family Geist; body 17px/1.5 in measured Inter at about 68 characters. Phone h1 40px, body 15px. Nav labels are small tracked uppercase; section eyebrows ('THE PROBLEM', 'THE SOLUTION') are small orange uppercase. Large light-weight headings pair a dark first line with a grey second line ('Reimagine your operation. / Give your team more time for hospitality.').

### Visual System

Off-white ground, near-black text, one burnt-orange accent used for buttons, accent words, active tabs and chart highlights. Greyscale isometric illustration; black-and-white photographs on the problem cards; pale grey UI mockups (invoice, prep sheet, demand chart, schedule grid). Contrast bands: a near-black stats band, a full-bleed orange CTA band, and a grey marble-texture band above a dark footer.

### Page Sequence

Hero + logo row → founders video band with 'Watch the full video' → rotating word list ('Top restaurant brands use Marble for' Inventory Counting, etc.) → 'The old operating stack was broken' with three photo cards → four modules (Inventory, Labor, Finance, Intelligence) → 'Purpose-built tools' four-tab panel → 'Better decisions' four artifact cards → dark stats band → A&W customer story with metrics → Connect / Learn / Compound steps → integrations → orange CTA 'See it in your kitchen next week.' → marble band → footer.

### Interaction

Clicked tab '03 Agents on autopilot': its label turned orange (aria-selected false→true) and the right panel switched from a vendor-invoice card ($215.24 total) to a four-step 'Purchase order workflow' list. While scrolling, the active tab also changed without clicks (02, then 04). The logo row drifted sideways; the word list highlighted one word at a time; artifact cards went from pale to full contrast. Under reduced motion the logo row stayed still over 2 s and no animations were running.

### Accessibility

Inactive tab copy and not-yet-revealed card text render very pale grey on off-white. One trust-row logo appeared as a broken image showing alt text 'The'. The founders video has a labelled pause control. No horizontal overflow at 1440 or 390. Phone CTAs are full-width bars roughly 44px tall.

### Mobile

Nav collapses to wordmark, orange 'Get a demo' and a menu icon. The hero illustration is not shown; both CTAs become full-width stacked bars. Logos become a three-up strip. Modules form a 2×2 grid. The four-tab tools panel is recomposed into stacked sections, each with eyebrow, heading, copy and its own mockup. 'Better decisions' cards stack singly. Measured h1 drops from 64 to 40px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 64 | 40 |
| Headline weight | 300 | 300 |
| Headline tracking em | -0.025 | -0.025 |
| Body px | 17 | 15 |
| Characters per line | 68 | 49 |
| Sections | 4 | 3 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Give every product capability its own concrete artifact so switching tabs visibly changes the evidence, not only the caption.
- State the operator's cost (hours, waste, labour overage) before introducing modules, so each module answers a named loss.
- Reserve one accent colour for actions and the single word that carries the claim.
- On phones, unroll a tab set into stacked sections rather than shrinking the tab panel.

Suits multi-location operations software sold to managers who need to see the documents the system produces. Wrong for a self-serve consumer app where a 16,000px explanatory scroll delays the one action.

Risk: The page is very long (16,376px measured at desktop). Scroll-driven tab changes compete with clicks. Much secondary copy is pale grey, and the phone first screen has no product image at all. A broken logo undermines the trust row.

## Limitations

- Video elements reported paused in this headless Chromium, so the founders video and any video-driven hero behaviour were not seen playing.
- Measurement says no sticky nav, but a floating nav bar appeared at the top of every scrolled desktop frame; the discrepancy was not resolved.
- The 390 full-page capture is cut at 12,000px and later sections were not yet revealed; mobile was not operated live.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://joinmarble.ai/
- https://www.ycombinator.com/companies/joinmarble
