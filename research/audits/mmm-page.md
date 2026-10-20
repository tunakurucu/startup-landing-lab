# mmm.page

Inspected: 2026-10-20 · desktop-mobile-audit · canvas-first

https://mmm.page/

The homepage is itself an editable mmm page: visitors tap EDIT and get the real tool palette over a maximalist collage, with no sign-up first.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A persistent left sidebar (an info/LOGIN/SIGN UP pill, Home, Explore, a numbered 'An Internet for People' note, a botanical illustration) frames a white canvas. Centred on it: an oversized 'mmm' wordmark on a yellow-and-pink paint stroke with a pixel cursor, a two-line headline, grey instructions with an inline 'EDIT' chip, and two full-width buttons, purple 'EXPLORE →' and green 'SIGN UP →'. White 3D clay shapes float at the edges; a teal 'EDIT' button is fixed bottom right.

### Typography

There is no h1; the measurement record has no h1 values. The wordmark is the largest text, measured 195.4px, family Playfair Display. The headline sets 48px in Lato regular; the measured body sample is 32px/1.3 Lato, measure 41ch. Section labels are 57.6px Playfair Display on ochre paint strokes. Sidebar text uses NationalPark-Variable (in the measured family list) at 14px. Near the end a heavy rounded slab face sets 'Digital Paper' at about 106px. Sizes stay large throughout; contrast comes from pairing a high-contrast serif with a plain sans.

### Visual System

White ground with a light grey sidebar. Collage is the system: tilted screenshots of user pages with thick black offset shadows, cut-out stickers (frog, balloon photo, orchid illustration, a psychedelic head), white clay 3D shapes, retro pixel cursors with click sparkles, ochre paint-stroke highlights, a purple scribble underline, and dotted vertical lines linking sections. Buttons are saturated purple and mint. The closing scene is a grass field with a painted seated figure and tilted email, Discord and Twitter tiles.

### Page Sequence

Hero → dotted line → 'Join 100,000+ people in making fun websites' ringed by tilted user-page cards → 'Add Anything' collage → 'Works Everywhere' (one user page in a wide and a narrow window) → 'Messy Encouraged' → 'Free Forever' → 'Long term vision' arrow to 'Digital Paper' (with a 'click me' burst) → contact tiles on grass with 'Sorry, minimalism'. The page scrolls inside a container to the right of the sidebar, not the document.

### Copy

No h1. Headline 'Dead simple, drag & drop websites for anything'. Subhead: websites 'don't have to be so cookie cutter', then an instruction to tap EDIT and 'tap anything on this page'. Two equal buttons, 'EXPLORE →' and 'SIGN UP →'. Use cases are named plainly: 'Link-in-bio, portfolios, landing pages, moodboards. Anything you want.' Section labels state positions against the category: 'Messy Encouraged' ('We prefer campy, kitschy, messy, imperfect'), 'Free Forever' ('Otherwise $0/mo'). Title: 'Your Corner of the Internet'.

### Interaction

Clicked the fixed 'EDIT' button: the page entered edit mode with no login prompt. A vertical tool palette appeared beside the canvas (text, brush, GIF, shapes, image, more, colour palette, collapse arrow), and the EDIT button was replaced by 'ADVANCED', a 'Preview ⌘.' label and an eye button. A follow-up click on the headline did not register in automation. On load the pixel cursors and sparkle changed between frames 1.5 s apart; under reduced motion they still changed, while the one spinner animation the probe counted stopped.

### Accessibility

The document has no h1 or h2; section titles are styled spans. Eleven visible links (the tilted user-page thumbnails) and the account icon button have no accessible name. White 44px text on the contact tiles measures 2.8:1 (Twitter blue), 3.3:1 (Discord) and 3.9:1 (email red). At 390, 14 of 29 targets are under 44px tall, and 'Sorry, minimalism' is a 13px-tall link. No horizontal overflow.

### Mobile

The desktop sidebar stays at about 200px wide on a 390 screen, leaving about 190px for the canvas. The canvas is not reflowed: the measurement reports the same 195.4px wordmark and 32px body as desktop, and the screen shows the desktop composition scaled down, with instructions and buttons at very small sizes. The fixed EDIT button covers part of the collage. Because the page scrolls in an inner container, the measured document height is only 844px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | None | None |
| Headline weight | None | None |
| Headline tracking em | None | None |
| Body px | 32 | 32 |
| Characters per line | 41 | None |
| Sections | 0 | 0 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Make the homepage a live instance of the product and invite visitors to edit it in place, so trying the product costs one click and no account.
- State a stance against the category default in short section labels ('Messy Encouraged', 'Free Forever') and back each with one plain sentence.
- For a self-expression product, use many real customer pages, tilted and overlapping, as social proof instead of a logo row.

Suits consumer creative tools where personality is the product and the output is a page or canvas visitors can touch. Wrong for B2B buyers who need security, pricing and integration detail, or for any audience that would read the collage as unserious.

Risk: No heading structure and many unnamed image links leave screen-reader users little to navigate. Scrolling inside an inner container breaks standard scroll measurement and can confuse keyboard and assistive scrolling. The phone layout keeps the desktop sidebar and shrinks the canvas into a narrow column, so copy becomes hard to read. Two equal-weight buttons leave the primary action unclear.

## Limitations

- The measurement record's page height (900px) and section count (0) reflect only the viewport, because content scrolls in an inner container; the live container was 5,435px tall.
- Only the EDIT click was verified; selecting and editing an element on the page did not register in automation, and I did not check whether edits persist.
- Whether the moving cursor graphics are animated images or scripted could not be determined.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://mmm.page/
- https://www.lapa.ninja/post/mmm-page-2/
