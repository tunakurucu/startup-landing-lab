# Plena Health

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://www.plena.health/

A rotating problem-statement headline hands off to a carousel of before/after workflow cases, each paired with a mock product screen and a hard number.

## Company evidence

YC: verified-yc; batch: P26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A thin lavender announcement bar (a customer result) sits above a white sticky nav with a pill 'Book a demo' button. The hero is a large rounded card with a pale lavender gradient, left-aligned: a 'Backed by Y Combinator' badge, a three-line headline whose last line is in violet and changes between captures ('patients stuck on hold', 'prior auths that stall for days', 'fax queues that never empty'), one paragraph of body, and a single violet pill CTA. No product image in the first screen.

### Typography

Measured h1 86.4px, weight 800, line-height 1, tracking -0.04em, family 'Inter Display'; body 20px / 1.6 in 'Inter', measure 66ch. Section headings reuse the same heavy tight-set display style; a monospace family ('JetBrains Mono') appears for the mock-window title bars and the '+ Allscripts · Practice Fusion…' line. Small uppercase tracked labels ('THE PROBLEM', 'THE WORKFLOW') mark card sections.

### Visual System

White ground with large rounded lavender-gradient cards for hero, manifesto, CTA and security sections. Palette is near-black navy text, one violet accent, pale lavender fills, a pink 'problem' box and green 'done' / result boxes. Imagery is fabricated product windows (mac-style traffic-light dots, 'Plena AutoFlow · Referrals') on a dark navy panel. Customer and EMR logos appear in greyscale; two round HIPAA/SOC 2 seals.

### Page Sequence

Announcement bar → nav → hero card → trusted-by logo marquee → 'Technology that adapts' workflow carousel (problem box, numbered workflow steps, result stat, mock screen) → 'Results from practices like yours' three case cards → 'Don't think in agents. Think in workflows' manifesto with three-column vendor-claims table → demo CTA card → EMR integrations card → 'Real numbers' four stat-plus-quote cards → second demo CTA card → security card → navy footer.

### Interaction

Operated the carousel's right arrow: the indicator pill moved one step, the case swapped from a scheduling/waitlist case to 'Recover down coded claims' with a new problem box, new steps and a 'Revenue Cycle' mock window. The headline's violet last line also cycled on its own between page loads. Measurement counted 8–9 running animations; live, logo positions in the strip differed between captures and the workflow rows were blank in the 390 capture until scrolled into view. With reducedMotion set, the page still reported 1–6 running animations during scroll; which ones kept moving was not verified.

### Accessibility

Headline and body contrast is high (navy on lavender). The announcement-bar text is small violet-on-lavender. The logo marquee moves continuously with no visible pause control. The carousel arrows are 38px circles. In the 390 full-page capture the workflow step rows under 'THE WORKFLOW' rendered as blank until scrolled into view, so scroll-reveal content is invisible to a non-scrolling snapshot. No horizontal overflow measured at either width.

### Mobile

Nav collapses to logo plus hamburger. Hero card keeps the same layout at h1 35.1px; the headline's last line still rotates. Logo marquee becomes a two-logo-wide scrolling strip. Carousel card stacks text above the mock screen, which becomes a tall dark panel. The vendor-claims table keeps three narrow columns with wrapped text. Stat-plus-quote cards stack to one column; EMR logos become a 2×4 grid. Page grows from 7119px to 10442px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 86.4 | 35.1 |
| Headline weight | 800 | 800 |
| Headline tracking em | -0.04 | -0.03 |
| Body px | 20 | 20 |
| Characters per line | 66 | 26 |
| Sections | 9 | 9 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Rotate the pain point in the headline rather than the product claim, so one hero speaks to several buyer segments without lengthening the copy.
- Pair every workflow story with a problem box, numbered steps, a single outcome number and a mock screen; the repeated structure lets a reader compare cases fast.
- Position against the market's vocabulary explicitly (a 'what vendors say / what you need / what we do' table) when buyers are fatigued by generic AI claims.
- Reuse one rounded gradient card as the container for every high-emphasis section so the page reads as a system without a second colour.

Suits vertical B2B services sold to operators who buy on outcomes and integration proof (clinics, back-office automation). Wrong for a self-serve developer tool or a consumer app, where a demo-only CTA and fabricated screens would read as evasive.

Risk: Two 'Book a demo' cards, a nav CTA and a hero CTA repeat the same ask; there is no product to try. The mock screens are illustrations, not captures, so the product remains unseen. Continuous marquee and rotating headline keep moving under reduced motion. Scroll-reveal hides workflow steps from anyone who does not scroll.

## Limitations

- Could not verify whether the mock product windows reflect the real product UI.
- Could not determine the full set of headline phrases; three variants were observed.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.plena.health/
- https://www.ycombinator.com/companies/plena-health
