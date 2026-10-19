# Andera

Inspected: 2026-10-19 · desktop-mobile-audit · workflow-theater

https://www.andera.ai/

A centered, lavender-tinted hero hands off to a scroll-pinned walkthrough in which mock audit workpapers fill in and log checks as you scroll.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A lavender announcement bar ('We raised $37M led by Lightspeed...'), then a white nav with six links and an outlined Book a demo. The centered headline 'Audit just got / a whole lot easier' has 'lot easier' in a purple gradient and small selection-handle squares and dots around it. Below: a two-line subhead, a dark 'Book a demo' button, a 'Trusted by audit teams at' logo row, and the top of a 'My Tasks' dashboard mock.

### Typography

Measured h1 64px, weight 550, -0.01em tracking, line-height 1.1, family Manrope; body 16px / 1.5 Manrope with a 52ch measure. Inter is also present. Section headings repeat a two-tone pattern: dark indigo plus a purple-gradient phrase ('end-to-end.', 'your controls', 'security.').

### Visual System

Near-white ground with lavender tints, dark-indigo text and a purple accent. Faint fine-line wave patterns at the hero edges; small rounded pill labels ('Features', 'Explore GRC', 'Security') above each section. Imagery is product UI: task dashboards, a spreadsheet with an audit log, RCM and testing tables, plus concentric rings around a SOC badge and a team photo.

### Page Sequence

Announcement bar → centered hero + logos → dashboard mock with progress chart → 'Fieldwork automated, end-to-end' pinned three-step (Control Testing, Evidence Gathering, Exception Management) → 'A home for your controls' tabs (RCM, Risks, Dashboard) → 'Focus on risk, not reconciliation' three staggered numbered cards → 'Enterprise-grade security' → 'Give your team their best hours back' CTA → 'We are the industry experts' about + photo → FAQ accordion → footer.

### Interaction

I clicked the 'Dashboard' tab under 'A home for your controls': the caption changed to 'Track anything and everything...' and the two-table RCM/Testing mock was replaced by an 'Acme Inc' dashboard (58% completed, workload bar, control rows). While scrolling, the features section pinned and its step titles lit in turn. Under reduced motion the hero was static, but audit-log check icons still appeared between captures in the features mock.

### Accessibility

Several texts are pale lavender-grey on near-white ('Trusted by audit teams at', inactive step titles, card body text), a contrast concern. Measured mobile body text is 12px. The 1440 full-page capture shows a long blank band where the pinned section sits. No horizontal overflow measured. The FAQ uses buttons for questions.

### Mobile

The announcement bar wraps to two link lines; nav reduces to Book a demo plus a hamburger. h1 drops to 44px and still fits on two lines. Logos wrap to three rows. Tabs, the three numbered cards and the about section stack single-column; the dashboard mock is scaled down rather than recomposed. Measured body text drops to 12px; page 9587px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 64 | 44 |
| Headline weight | 550 | 550 |
| Headline tracking em | -0.01 | -0.01 |
| Body px | 16 | 12 |
| Characters per line | 52 | 60 |
| Sections | 9 | 9 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Let a pinned scroll section narrate a multi-step workflow, with one step lit at a time and its mock filling in beside it.
- Show the work being done (timestamped audit-log lines, 'Control passes with no deviations') rather than a static result when selling automation to auditors.
- Repeat one heading device, like a gradient tail phrase, across sections to give a light-ground B2B page a recognizable rhythm.
- Answer the buyer's incumbent question (RPA, existing GRC tool) directly in the FAQ.

Enterprise compliance, audit and GRC tools sold to professional users who need to see their own artifacts (RCMs, workpapers, exceptions). Wrong for a self-serve product, where a long pinned walkthrough delays the moment of trying it.

Risk: Pale lavender text costs legibility, and 12px mobile body text is small. The pinned section adds scroll length and renders as empty space in static captures and possibly for crawlers. Some log animation continues under reduced motion. The decorative selection handles around the headline say little about the product.

## Limitations

- The FAQ accordion and the other two pinned feature steps' mocks were not inspected in detail.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.andera.ai/
- https://pear.vc/andera-series-a/
