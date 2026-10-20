# Composition and type

Start with the product artifact's shape. An API trace is sequential. A creative board is spatial. An operations handoff has owners, status and unresolved decisions. Let that shape inform the grid rather than putting every artifact in the same browser frame. Keep the page structure familiar; distinctiveness belongs in the artifact, the voice and the type ([page structure](page-structure.md)).

Pick a typographic role for the promise: compact authority, expansive clarity, editorial distinction or expressive play. Establish a body face that can handle the longest real sentence. Use a mono face only where alignment or code semantics matter. Choose licensed local fonts or system stacks; never copy a reference's font files.

Before styling sections, draw their relative densities in words: open promise → dense explanation → quiet argument → active example → short action. This rhythm is a craft habit, not a research finding. Repetition is useful when it provides a stable comparison; break it when a new idea needs a new reading mode.

Treat headline line breaks as responsive decisions, change the layout when text and artifact start to compete, and avoid fixed-height heroes containing variable text. Zoom and reflow rules are in [motion and responsive](motion-and-responsive.md).

A signature detail must communicate something: a trace that keeps its event identity across retries, a board that reacts to a creative choice, or an annotated handoff that shows responsibility. A random orbit or grain texture is not a product explanation.

## Fluid scale and measure

- Write fluid sizes as `clamp(min-rem, rem + vw, max-rem)`, never with a bare `vw` middle term, which ignores zoom ([WCAG F94](https://www.w3.org/WAI/WCAG22/Techniques/failures/F94)). Keep the maximum at or below 2.5× the minimum so text still reaches 200% ([Barvian](https://www.smashingmagazine.com/2023/11/addressing-accessibility-concerns-fluid-type/)). Generate type and space steps from one scale running from a 360px to a 1440px viewport (recommended), as [Utopia](https://utopia.fyi/type/calculator/)'s calculators do, rather than hand-picking each clamp.
- The clamp minimum is the phone headline: about 36–44px (recommended; the measured startup set's phone median is 38px). Give the h1 `overflow-wrap: break-word` and check the longest real word at 320px.
- Set sizes in rem, and never set `html { font-size }` in px, so the visitor's default text size still applies.
- Body text runs 55–75 rendered characters per line (recommended): about 45–60ch in most faces, since `1ch` is the width of "0", which is wider than an average letter ([Meyer](https://meyerweb.com/eric/thoughts/2018/06/28/what-is-the-css-ch-unit/)). [Butterick](https://practicaltypography.com/line-length.html) allows 45–90; [WCAG 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html) caps lines at 80. Check the count TY-07 reports, not the CSS value.

## Type details that are easy to miss

- Text under 18px stays at weight 400 or heavier. Light weights belong to display sizes, 28px and up (TY-09), and still need a contrast check. If a light display weight looks faint at 390px, go up a weight ([Apple HIG](https://developer.apple.com/design/human-interface-guidelines/typography)).
- Line-height is unitless and set by role (recommended, after [Butterick](https://practicaltypography.com/line-spacing.html), Apple HIG and Material 3's 1.12–1.22 display styles): display, 40px and up, 1.0–1.12 and never below 1.0 on phones, where headlines stack; headings from 24 to 40px, 1.15–1.3; body 1.45–1.6, higher for longer measures. Running text under 24px that wraps to three lines or more needs at least 1.4 (TY-08's floor is 1.35). That rule is for running text; display lines are few and short.
- Tracking depends on face and size. Tighten display text only when the face was drawn for text sizes; a face with an optical-size axis or a Display cut usually needs −0.01em or nothing (recommended; Material 3 display text is about −0.004em). Never tighter than −0.04em (TY-04). Text at 12px or below takes +0.01 to +0.04em (recommended, after Apple's SF tracking table); all caps and small caps take +0.05 to +0.12em ([Butterick](https://practicaltypography.com/letterspacing.html)).
- `text-wrap: balance` goes on headings and captions of six lines or fewer, never on every element or on a filled or bordered box that should hug its text ([Chrome](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance)). `text-wrap: pretty` on paragraphs is an enhancement; HR-03 still checks the rendered breaks.
- Numbers that change or line up (counters, prices, table columns, timers) use `font-variant-numeric: tabular-nums`. Figures inside prose stay proportional.
- Rendered copy uses typographic punctuation: curly quotes, en dashes for ranges, the ellipsis character. Code keeps straight quotes.
- Group with space before lines or boxes: the gap between groups is at least twice the gap inside one (recommended). Take both from one space scale (`--space-s` inside, `--space-l` between) so the ratio holds at every width.
- With a sticky header, set `scroll-padding-top` to its height plus 8px (recommended), and `scroll-padding-bottom` for a fixed bottom bar, so anchor targets and keyboard focus stay in view ([WCAG 2.4.11](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html), LY-06).
