# Rive

Inspected: 2026-10-20 · desktop-mobile-audit · typographic-technical

https://rive.app

An all-caps Orbitron headline and a CLI install panel with OS tabs lead the first screen, while a column of use-case video tiles scrolls beside them.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Black ground, split layout in a 1000px column. Left: a column of bordered tiles labelled by use case (Product UI, Game UI, Mobile Apps, Film + TV, Websites, Games, Fantasy Interfaces) drifts upward. Right: a spaced 'RIVE' wordmark, a two-line uppercase h1 and a grey subhead. Below them, a dark panel holds 'RIVE CLI' (macOS/Linux and Windows tabs, a curl command, a copy button) and 'RIVE EDITOR' ('Sign up', 'Download desktop app'). A one-line trust claim closes the column.

### Typography

Display measured as Orbitron: h1 40px, weight 900, tracking 0.01em, uppercase. Section h2 24px/700, uppercase. Eyebrows and labels use measured Tomorrow at 14px/500, uppercase with 1.4px tracking, some in orange. Body is measured Inter at 16px/1.6 with a 64ch measure; Inter Display is also present. The install command is set in monospace. At 390 the h1 shrinks to 21px and body to 14px, so the display loses most of its scale.

### Visual System

Black and near-black bands alternate. Text is white and mid-grey, with one orange accent for eyebrows and their icons. The command uses green and cyan syntax colour, which turns red and orange for the Windows command. Dark panels have small radii; buttons are uppercase with small icons. Imagery is product output: video tiles, a large video slot in the Editor section, a grid of 14 platform logos (Web, iOS, Android, Flutter, React, Unity, Unreal and others) and a two-row customer logo wall.

### Page Sequence

Nav → hero (scrolling tile column beside the headline and CLI/Editor panel) → 'Rive Editor: Design, code, and animate' (copy left, large video slot right) → 'Rive Runtimes: Build once, ship anywhere' (platform icons left, copy right) → 'Products built with Rive reach over 2 billion users worldwide': logo wall, a positioning paragraph with comparison stats, and 18 testimonial cards in three columns → newsletter signup → six-column footer with underlined links → wordmark and social icons.

### Copy

h1: 'The Interactive experience engine', rendered uppercase. Subhead: build interactive UI, motion and game experiences in the Editor, or have an agent generate them with the CLI; the output runs natively on mobile, desktop, web, consoles, TVs and vehicles. Primary actions are the copyable CLI command, 'Sign up' and 'Download desktop app'; the nav says 'Get started'. Audience: designers, animators and developers. Proof names Spotify Wrapped and Duolingo, and a paragraph compares Rive with After Effects, Figma, Lottie and CSS animations.

### Interaction

Operated the CLI tab: clicking 'Windows' replaced 'curl -fsSL …/install.sh | sh' with 'irm …/install.ps1 | iex' and moved the underline. The hero tile column moved upward between captures taken 3 s apart, although getAnimations() listed no animations. With reduced motion the column still moved about the same distance. During the scroll getAnimations() stayed empty and no video played. The measurement record found no reduced-motion rule.

### Accessibility

An automated contrast check found no body text under 4.5:1 on the dark ground. The 390 menu trigger is a div with no role or label, removed from the tab order (tabindex -1). The newsletter email field has a placeholder but no label. The CLI tabs are 23px tall and the copy button is 35×20. At 390, 47 of 105 targets are under 24px in one dimension, mostly 20px-tall underlined footer links. No horizontal overflow.

### Mobile

The tile column becomes a horizontal row of tiles across the top, above the wordmark and h1. The h1 drops to 21px. The CLI command wraps onto three lines, and 'Download desktop app' shortens to 'Downloads'. The runtimes icon grid moves below its copy. The logo wall reflows into four rows, testimonials go single-column, and the footer becomes two columns. The nav keeps the logo, a menu icon and 'Get started'.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 40 | 21 |
| Headline weight | 900 | 900 |
| Headline tracking em | 0.01 | 0.01 |
| Body px | 16 | 14 |
| Characters per line | 64 | 48 |
| Sections | 0 | 0 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- For a product developers install, put the exact install command in the hero, with an OS selector and a copy button, next to the GUI sign-up path.
- Let a moving column of real output tiles carry the use cases, so the headline can stay short.
- Keep a distinctive display face for the headline and section titles only, and set body text in a neutral sans.
- On phones, shrink the display size less than the body, or the headline stops reading as a headline.

Suits tools with two entry points, a GUI for designers and a CLI or SDK for developers, whose visual output proves itself in motion. Wrong for buyers who never install software or use a terminal, such as finance or HR teams, for whom a curl command in the hero means nothing.

Risk: The hero depends on video. In this browser every tile and the Editor video stayed blank, leaving grey boxes and an empty half-section. The drifting tile column ignores reduced motion. The futuristic display face sets a gaming tone that may undersell product-UI use. The 21px mobile h1 and the three-line command weaken the first phone screen. The menu trigger cannot be reached by keyboard.

## Limitations

- The hero tiles and the Editor-section video are MP4s that failed to load in the test Chromium (no H.264), so their content was not seen.
- In this proxied session the tile column appeared only after a long delay; its normal start-up timing is unverified.
- Platform icons and some button icons were missing in some live loads but present in the measurement capture.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://rive.app
- https://www.landingfolio.com/inspiration/post/rive
- https://a16z.com/portfolio/
