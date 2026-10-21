# Craft measures

Fifteen measurable rules for the two criteria blind graders marked lowest on this skill's pages: craft and distinctiveness. Each says what to do and how to check it in the rendered page at 1440 × 900 unless stated. They are paraphrased from the sources named in brackets, read on 2026-10-20: Taste Skill v2.1 (Leonxlnx, MIT), Impeccable 4.7 (Paul Bakaus), Jakub Krehel's skills, Hallmark (Nutlope), Anatomy, OpenAI's frontend guidance, Every Layout, and modernfontstacks.com. Where sources disagree, the decision is stated.

## First screen

1. **No hole bigger than about a quarter of the screen.** Below the nav, no empty rectangle covers more than 28% of the first screen. When the headline sits in the left third, the right side holds the demo, a picture, a fact or the action, not plain ground. [Taste; HR-08 checks a stricter version]
2. **One dominant element, at least 40% of the first screen.** The hero picture covers 40% or more of the 1440 × 900 area, ideally bleeding off one edge. A grid of many small things is not a focal point. [Taste, OpenAI]
3. **The button lives in the headline's column,** 32–48px below the supporting sentence, on the headline's left edge. No first-screen row has content at both edges with 45% or more of the width empty between them. [Taste, Every Layout]
4. **Even margins, real rhythm.** Left and right content margins differ by less than 16px. The gap between sections is 120–240px (72–112px on a phone), the gap between groups is at least twice the gap within a group, and a heading has at least twice as much space above it as below. There's no blank vertical stretch taller than 42% of the viewport, and cards in a row share their bottoms. [Taste, Jakub Krehel, Impeccable]
5. **No stray word, short headlines.** The last line of any heading or paragraph holds at least two words: use `text-wrap: balance` on headings and `pretty` on paragraphs. Headlines are two lines or fewer at every width; the hero headline is at most about 7 words and about 42 characters. If wrapping doesn't fix it, cut a word rather than shrink the type. [Impeccable, Jakub Krehel, Taste; HR-03]
6. **The hero fits the fold at 1440 × 900 and 1280 × 800:** headline, support sentence, button and the artifact's focal point. Bottom padding is at least 1.3 times top padding. The support sentence is two lines at most, and a full-height hero subtracts the sticky header. [Hallmark, OpenAI]

## Around the artifact

7. **The hero picture shows the finished result at true size.** Use a product screen in a phone or tablet frame, floating cards cut from the product, a finished illustration or a supplied photograph, with no controls in it (HR-10). Use no fake browser window, no card around the headline, and no pill or eyebrow above the headline. The working demo with its controls comes right after the hero (HR-07). [Taste, OpenAI, Impeccable; this project's human check]
8. **Vary the sections and count them.** Give each section a one-word layout (list, split, statement, band, mosaic, table, strip). No two neighbours share one, none appears three times, and there's no row of three identical cards. Aim for about six sections, three to five different picture placements, and one deliberate break in the system. [Taste, OpenAI, Hallmark]

## Text and data inside the artifact

9. **Size and contrast floors.** Nothing under 11px; secondary lines 12px; data and labels 13–14px; marketing copy 16px or more. Small grey labels reach 4.5:1, and the weight is 400 or more below 18px. Monospace only for short labels inside cards and tags (12px and up), never for sentences or captions; numbers in the text face with `font-variant-numeric: tabular-nums`. *Decision, revised after the bake-off: grey mono captions were marked down, while mono row labels on a well-made example card were liked.* [Taste, Jakub Krehel]
10. **Size grids for the data shown.** Show 6–25 data points in a hero fragment. Rows are 44–56px with 16–24px cell padding. Numbers are right-aligned and tabular, units are grey, and there are no zebra stripes. Change type size, padding and row height together, never type alone. [Taste]

## Drawings

11. **Finished illustration or precise technical drawing, never block art.**
    - **Illustration:** flat shapes in the page palette with three levels of detail (big shapes, describing shapes, small rewards). Light comes from one lit and one shaded tone per volume, the drawing is large, and every object is nameable.
    - **Technical drawing:** every view comes from one model. Use a four-weight line hierarchy at about 1 : 0.63 : 0.46 : 0.37, with the finest line at least 0.6px on screen. Hidden edges are dashed and hatching runs at 45°.
    - **Test:** could it pass as a placeholder icon at full size? If yes, it isn't finished. [Taste, Jakub Krehel, Anatomy]
12. **Every line lands; labels are legible.** Leaders end on a face, line or dot. The drawing fills 55–65% of its card and still reads at 390px. Labels are 12px or more on screen, in the text face. Flow diagrams have at most 9 nodes and 12 arrows, with accent on at most 2. [Anatomy, Jakub Krehel]

## Type

13. **Ship the faces.** Every face comes as woff2, woff or otf files beside the page, with `font-display: swap`, at most two families and four files. After rendering, every declared family reports `status === 'loaded'` in `document.fonts`. A page that renders in a fallback face is not the design. [Impeccable, Taste, Jakub Krehel; TY-11]
14. **If you must use a system stack, make it resolve.** Lead with faces that exist on Linux as well as macOS and Windows, in the same style:
    - **Serif:** `Charter, 'Bitstream Charter', 'Iowan Old Style', 'TeX Gyre Pagella', Palatino, Caladea, Georgia, serif`
    - **Sans:** `Seravek, 'Gill Sans Nova', Ubuntu, Carlito, Calibri, sans-serif`

    Check that a probe string measures differently from bare `serif` or `sans-serif`; if it doesn't, ship files instead. On Linux the Charter family is named `Bitstream Charter`. [modernfontstacks.com, Hallmark]
15. **A type scale that reads as designed.** Use at most 5 sizes and 2 faces. Display type is at least four times the body size on desktop, tracked −0.02 to −0.05em with line height 0.95–1.1. Body text is 16–20px with line height 1.45–1.6 and 45–75 characters per line. Use two or three distinct left edges on the page and at most one centred moment. *Decision: Hallmark caps display type at 88px and Taste's top sites run about 121px; pick the largest size that still passes rule 6.* [Taste, Jakub Krehel, Hallmark]
