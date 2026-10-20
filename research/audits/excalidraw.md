# Excalidraw

Inspected: 2026-10-20 · desktop-mobile-audit · canvas-first

https://plus.excalidraw.com

The editor's own hand-drawn idiom (handwritten words, doodles, cursor tags, an editor screenshot) becomes the brand, with a free, no-account start repeated throughout.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Pale mint-white ground scattered with pastel doodles and collaborator cursor tags ('brocketdeer', 'allosaurus'). Centred: the h1 with 'Whiteboard' in a hand-drawn face on a mint highlight, a one-line subhead, a yellow '134.2k on GitHub' star badge and a sketched pen. A framed screenshot of the editor (toolbar, style panel, comments) starts at the bottom of the first screen. The hero body has no primary button; the nav holds 'Free whiteboard'.

### Typography

Measured h1 56px, weight 600, line-height 1.2, tracking 0, family Assistant; body 14px Assistant at 1.4, about 46ch. Measured families also include Excalifont, the hand-drawn face used for highlighted words ('Whiteboard', 'Excalidraw'), section tags and margin notes ('14 days of free trial'). Text is navy throughout. The phone h1 stays at 56px, the same as desktop.

### Visual System

White and pale mint ground, navy text, an indigo-violet primary button, mint highlighter blocks behind handwritten words, pastel confetti doodles and cursor name tags borrowed from the editor. Features hang off a thin vertical timeline with round sketched icons; each has a browser-frame media slot and small white cards. Tweet cards carry doodle corners. Plus gets a pale blue band with a sketched illustration; the footer is near-black with a faint doodle pattern.

### Page Sequence

Hero + editor screenshot → 'Trusted by the largest companies in the world' logo row → 'Say hi to Excalidraw' ('Free & Open source', Start drawing / Try Plus) → timeline: Create → Collaborate → Common usecases → Generative AI → 'The easiest way to get your thoughts on screen' (two tweets) → 'Online whiteboard' Draw now / Try Plus for free → 'Loved by individuals' tweet carousel → 'Free' editor CTA (Draw now / Checkout Github) → 'Plus' upsell → dark footer.

### Copy

H1: 'Online Whiteboard made simple'. Subhead: 'Ideate, Collaborate, Share. Simply with Excalidraw.' Primary button: 'Free whiteboard' in the nav; the first in-page buttons are 'Start drawing' and 'Try Plus', later 'Draw now'. The h1 itself names the category; the audience is individuals first ('Loved by individuals', 'No account is needed. Just start drawing.'), with Plus offered to those wanting more.

### Interaction

Clicked the 'Next' arrow on 'Loved by individuals': the row shifted one card (François Fleuret / Theo / Gergely Orosz → Theo / Gergely Orosz / Andrej Karpathy). Nothing moved on the first screen in normal or reduced-motion captures. The five feature videos did not play in this Chromium (each reported a media-not-supported error), so their browser frames stayed blank; with reduced motion they were also reported paused.

### Accessibility

Navy on white or mint reads strongly. Handwritten margin notes are small, light violet script. The Plus carousel's dot buttons are 8×8px (one 16×8px) and labelled only '0'–'4'. Phone: 'Menu' 81×38px, GitHub badge 30px tall; no unlabelled controls counted; no horizontal overflow. On phone the editor screenshot shrinks to an unreadable thumbnail.

### Mobile

The h1 keeps its 56px size and breaks into three lines, 'Whiteboard' alone on the middle line. The nav collapses to a 'Menu' pill, and after scrolling only that pill stays visible. The logo row is cropped to three logos, buttons go full width, timeline cards stack singly, and the tweet carousel shows one card with neighbours peeking. The dark footer stacks.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 56 | 56 |
| Headline weight | 600 | 600 |
| Headline tracking em | 0 | 0 |
| Body px | 14 | 14 |
| Characters per line | 46 | 30 |
| Sections | 5 | 6 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Turn the product's own output style (hand-drawn type, doodles, cursor tags) into the page's brand system so the page previews what users will make.
- Repeat the zero-friction start ('No account is needed') beside the primary buttons of a free tool.
- Hang a long feature list on one vertical timeline with icon nodes so it reads as a sequence rather than a grid.

Suits free or open-source creative tools whose output has a recognisable look. Wrong for enterprise or regulated products, where a playful handwritten idiom would undercut credibility with buyers.

Risk: The hero has no in-body action and shows the editor as a static screenshot rather than a usable canvas; feature sections depend on MP4 videos and showed empty frames, with no visible fallback, when they failed to play here; small handwritten notes and 8px carousel dots are hard to read and hit; the 56px phone h1 takes three lines.

## Limitations

- The five feature videos failed to decode in Playwright's Chromium (MEDIA_ERR_SRC_NOT_SUPPORTED), so their content is unknown.
- The linked editor ('Start drawing', 'Draw now') was not opened.
- No control was operated at 390 wide.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://plus.excalidraw.com
- https://www.lapa.ninja/post/excalidraw/
