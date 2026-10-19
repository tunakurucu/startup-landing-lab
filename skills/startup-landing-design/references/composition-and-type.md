# Composition and type

Start with the product artifact's shape. An API trace is sequential. A creative board is spatial. An operations handoff has owners, status and unresolved decisions. Let that shape inform the grid rather than putting every artifact in the same browser frame.

Pick a typographic role for the promise: compact authority, expansive clarity, editorial distinction or expressive play. Establish a body face that can handle the longest real sentence. Use a mono face only where alignment or code semantics matter. Choose licensed local fonts or system stacks; never copy a reference's font files.

Before styling sections, draw their relative densities in words: open promise → dense explanation → quiet argument → active example → short action. Repetition is useful when it provides a stable comparison; break it when a new idea needs a new reading mode.

Define minimum and maximum text measures. Treat headline line breaks as responsive decisions. Use clamp() for scale and explicit layout changes when text/artifact competition starts; avoid fixed height heroes containing variable text. Keep space for translation and 200% zoom.

A signature detail must communicate something: a trace that keeps its event identity across retries, a board that reacts to a creative choice, or an annotated handoff that shows responsibility. A random orbit or grain texture is not a product explanation.

## Type details that are easy to miss

- Text under 18px stays at weight 400 or heavier. Light weights belong to display sizes, 28px and up, and still need a contrast check against their ground.
- Line-height is unitless so it scales with size: about 1.1 for display, 1.2–1.3 for headings, 1.5–1.6 for body. Anything that wraps to three lines or more needs at least 1.4.
- Headings and short descriptions use `text-wrap: balance`; paragraphs use `text-wrap: pretty` so no single word sits alone on the last line.
- Numbers that change or line up (counters, prices, table columns, timers) use `font-variant-numeric: tabular-nums`. Figures inside prose stay proportional.
- Rendered copy uses typographic punctuation: curly quotes, en dashes for ranges, the ellipsis character. Code keeps straight quotes.
- Group with space before lines or boxes: the gap between groups is at least twice the gap inside one.
- With a sticky header, set `scroll-padding-top` to its height so anchored sections do not land under it.
