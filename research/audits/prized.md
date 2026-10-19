# Prized

Inspected: 2026-10-19 · desktop-mobile-audit · expressive-world

https://prized.dev

A saturated cobalt brand world, with ASCII art, a split-flap board and a giant clock, shows always-on dev boxes as scenes rather than feature lists.

## Company evidence

YC: verified-yc; batch: S26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A white YC announcement strip sits above a full-bleed cobalt hero. Left: a three-line light-weight headline, one-line subhead, white 'Create my box' and outlined 'Read the docs' pills, a '$30 of credit. No card.' note, and a black terminal chip with a curl install command and copy button. Right: a large cloud drawn in ASCII characters over a dotted field.

### Typography

Measured h1 77.4px, weight 300, -0.035em tracking, line-height 1.0, family prizedSans; body 17px / 1.6 prizedSans with an 87ch measure. JetBrains Mono is used for commands, labels and the split-flap board; a 'mockFace' family appears in product mocks. The display reads as a light grotesque with tight tracking.

### Visual System

Three grounds alternate: cobalt blue, black, and white rounded cards. Imagery is all typographic: ASCII clouds and laptops, a split-flap departures board, a 24-hour bar chart, a huge 17:58 clock. Pills for CTAs, mono for anything machine-like. Footer ends with an oversized ghosted wordmark and asterisk logo. A floating 'Watch the launch 1:02' video tile sits bottom-right.

### Page Sequence

YC strip → blue hero → 'New: Sandboxes' strip → black 'Check on it from anywhere' dashboard mock → white '24 hours a day' bar chart → black 'Ports are localhost' split-flap board plus terminal → white card 'Files go both ways' with ASCII laptops → pinned blue 'At six you close the lid' clock scene → 'A clear advantage' table vs Codespaces and Coder → blue 'Your box is two minutes away' CTA → black footer.

### Interaction

I clicked 'on Windows?' under the install chip: the command changed to 'irm https://prized.dev/install.ps1 | iex' and the caption to 'Windows PowerShell · on macOS or Linux?'. The dashboard mock's filter tabs could not be clicked; an overlay intercepted pointer events. With motion on, the hero ASCII cloud and the split-flap characters changed between captures, and the clock scene stayed pinned across about 1,800px of scroll. Under reduced motion, paired captures at top and mid-page were identical.

### Accessibility

White text on cobalt reads clearly at display sizes, but small light-blue mono captions ('macOS and Linux') on blue look low-contrast. The copy button is icon-only but exposed an accessible name. Product-mock buttons are present in the DOM but blocked from pointer input. No horizontal overflow measured. Mobile CTA pills are large.

### Mobile

h1 drops to 34px over four lines; the YC strip shortens to 'Backed by Combinator'; 'Sandboxes' leaves the nav. The ASCII cloud moves below the install chip, which wraps the curl command with a backslash continuation. Sections stack single-column; the comparison table stays tabular. Measured content width 249px; page 9473px with 9 sections.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 77.4 | 34 |
| Headline weight | 300 | 300 |
| Headline tracking em | -0.035 | -0.035 |
| Body px | 17 | 17 |
| Characters per line | 87 | 41 |
| Sections | 8 | 9 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Turn each product claim into one memorable scene (a clock, a port board, a sync diagram) instead of a feature grid.
- Put the real install command in the hero with a copy button and an OS toggle, so a developer can act without leaving the first screen.
- Build imagery from the product's own medium, here text characters, so the brand and the subject reinforce each other.
- Gate ambient motion on prefers-reduced-motion so the scenes still read when frozen.

Developer infrastructure and CLI-first tools whose buyers trust terminal output more than illustrations. Wrong for a regulated enterprise purchase where buyers need security, compliance and integration detail early.

Risk: Scene-per-section pacing makes a long page (8,845px) with little dense information; the pinned clock scene costs a lot of scroll for one idea. Mock UI that looks clickable but is not may frustrate. Small mono captions on blue risk contrast failures.

## Limitations

- Did not play the launch film or inspect the docs; the hero ASCII cloud's motion was observed only as changes between two captures.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://prized.dev
- https://www.ycombinator.com/companies/prized
