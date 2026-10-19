# End Close

Inspected: 2026-10-19 · desktop-mobile-audit · workflow-theater

https://endclose.com

A framed split hero pairs a plain reconciliation promise with a live-looking matching table and an 'Agent resolved' toast, then walks the workflow tab by tab.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Redirects to www.endclose.com. A white page with a wordmark, a centered outlined nav pill (Product, Company, Docs) and a violet 'Learn more on a call' button. The hero is a hairline-framed two-column box: left a four-line headline, subhead, violet 'Book a demo' and 'Find out more →'; right a reconciliation table mock (24 / 14 matched / 10 unmatched) with an 'Agent resolved · EXC-004' toast. A four-cell stat row closes the frame. A cookie banner overlays the lower left.

### Typography

Measured h1 60px, weight 600, 0em tracking, line-height 1.0, family ui-sans-serif (system stack); body 18px / 1.6 with a 45ch measure. Geist Mono is used for amounts, references and the feature-chip cloud. Hierarchy is weight and size only; no display face.

### Visual System

White and very light grey bands, hairline borders with small crosshair marks at frame corners, one violet accent for primary buttons, active tab rules and highlighted chips. Imagery is product UI only: tables, a data-source picker modal, a reconciliation overview with record counts. Green/red amounts and status pills come from the mocks. One testimonial card uses a blue gradient panel with a headshot.

### Page Sequence

Framed hero + stat row → 'From origination to closed books' three tabs (Ingest, Automated matching, AI agents) over a product mock → Sunbound testimonial → 'Everything you need out of the box' four tabs + mono feature-chip cloud → 'Compare us to building in-house or buying a legacy vendor' three-column table → 'Trust your numbers. Stop chasing them.' CTA card → footer with SOC badge.

### Interaction

I clicked the 'Automated matching' tab: its top rule turned violet and the mock changed from an 'Add a data source' modal to a 'TabaPay vs CRB' reconciliation overview (102,009 of 161,396 reconciled). On scroll the nav re-formed as a centered floating pill holding the logomark, links and CTA. The active tab's rule filled like a progress bar; that fill kept running under reduced motion, while the hero stayed static in both modes.

### Accessibility

Inactive tab titles and descriptions are light grey on white, a contrast concern. Mono chips are small. The cookie banner covers part of the first screen at both widths. At 390 the word 'reconciliation' extends past the hero frame's right border, though no page-level horizontal overflow was measured. A progress animation continues under reduced motion.

### Mobile

Nav collapses to a hamburger (measured nav height 0). h1 drops to 48px; the table mock moves below the CTAs and the stat row stacks two-up. Tabs stack vertically, the comparison table becomes stacked per-row blocks, and the page more than doubles to 9387px. The cookie banner covers roughly the lower quarter of the first screen.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 60 | 48 |
| Headline weight | 600 | 600 |
| Headline tracking em | 0 | 0 |
| Body px | 18 | 18 |
| Characters per line | 45 | 29 |
| Sections | 7 | 7 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Show the exception being resolved, not just the dashboard: a single toast like 'Agent resolved · Duplicate refund' carries the AI claim more credibly than a slogan.
- Tie each workflow tab to its own product state so clicking a step changes what the buyer sees.
- Use a three-way comparison (you, build in-house, legacy vendor) when the real competitor is the buyer's own engineering team.
- Reserve a monospace face for money and identifiers so financial data reads as data.

B2B finance, payments ops and other back-office software where buyers want proof of correctness and audit trails. Wrong for a consumer product or anything that needs emotional brand pull over evidence.

Risk: The layout follows a common B2B SaaS pattern and is visually hard to tell apart from peers. The hero headline breaks its frame on mobile, the cookie banner hides first-screen content, and the tab progress fill ignores reduced motion. The 99.999% claim sits without visible sourcing.

## Limitations

- Whether the workflow tabs auto-advance on their own was not confirmed.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://endclose.com
- https://www.ycombinator.com/companies/end-close
