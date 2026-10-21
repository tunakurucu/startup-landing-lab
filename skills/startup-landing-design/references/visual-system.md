# Visual system: the craft that reads as a startup

Read this before writing any CSS. It holds the components and motion that won this project's person-judged bake-off (2026-10-21). On both briefs, a person ranked pages built with Taste Skill's `high-end-visual-design` first, ahead of this skill's v1.0, Taste v2, Anthropic's frontend-design and no skill. His reasons: it "looks like a startup page", "comes down one by one", is "very easily readable", and makes "what we do, what we want from you" the easiest to understand. Most rules below are adapted from that skill (Leonxlnx/taste-skill-classics, MIT) and filtered through his notes. This skill keeps its own rules for honesty, clarity and checks.

Choose one look per product, not one look for every product:

| Look | For | Ground and type |
| --- | --- | --- |
| **Soft editorial** | Consumer, creative and small-business tools | Warm cream or bone (#F7F4EE to #EFEBE3), espresso ink. A high-contrast serif headline (Instrument Serif, PP Editorial New, a Palatino or Newsreader cut) with one phrase in italic, and a quiet grotesk for text. |
| **Soft structural** | Health, work, operations and B2B apps | Near-white or pale silver (#F4F5F7), near-black ink. A confident grotesk headline (Geist, Satoshi, General Sans, Plus Jakarta Sans), weight 500–600, tracked −0.03em. One accent colour. |
| **Dark glass** | Developer, AI and infrastructure tools | Deep black (#07080A) with one or two very soft radial colour washes behind the hero. White text at 92%, hairlines at white/10. A wide grotesk. |

Whatever the look, no Inter, Roboto, Arial or Open Sans as the display face. Ship the files you use (TY-11).

## Components

- **The floating nav.** A pill detached from the top: 16–24px down from the top, centred, as wide as its contents, with a full radius, a 1px hairline (black/6 or white/10) and a soft background with backdrop blur. It holds the wordmark, three to five links and one filled action. On phones the pill holds the wordmark and a menu button. The menu opens as a full-screen overlay whose links slide up in a stagger (60ms apart), and the menu icon's two lines turn into an X.
- **Buttons.** Fully rounded pills, 48–52px tall, 22–28px horizontal padding, 15–16px labels at weight 500. The primary button is filled. A trailing arrow sits inside its own 28–32px circle, flush with the right padding, never loose beside the text. On hover the circle nudges up and right by 2px; on press the button scales to 0.98. The secondary button is a hairline pill, or a plain text link with an arrow. **Buttons side by side share height and centre (LY-09).**
- **Cards, nested.** A card is never a flat box on the page. Use an outer shell (background black/4 or white/5, 1px hairline, 6–8px padding, 28–32px radius) holding an inner core (its own background, a 1px inner top highlight, radius = outer radius − padding). Shadows are wide and faint (`0 30px 60px -20px rgba(20,20,30,.12)`), never dark and tight. No plain 1px grey borders.
- **The example card.** The most liked element in the bake-off was a small "example job" ticket: a card with six or fewer labelled rows (run, format, ink, paper, per copy) and one status line. Use a card like this as the hero picture's companion, or as the hero picture itself, to show the product's output at a glance. Small labels may be set in a mono or small caps at 12px and up, inside cards only.
- **One small tag above the headline is allowed:** a pill with 12px text and letter-spacing 0.08–0.14em, saying what the product is in five words or fewer ("Zines & art books · 25–500 copies"). It replaces, rather than adds to, any other line above the headline.
- **The stat row,** only with numbers the brief supplies: three plain figures under a hairline beneath the buttons ("From $2.10 / a copy"), each with a small label. Never invented, never in a card grid.

## Layout

Choose one layout per page:

1. **Editorial split.** Big type on the left half, and the picture and example card on the right, overlapping slightly, one of them tilted 2–3°.
2. **Z-axis cascade.** Two or three cards stacked with depth, slight overlaps and small rotations.
3. **Asymmetric bento,** for the sections after the hero: a grid of unequal cards (one wide and tall, two stacked). At most one bento on the page.

Below 768px, everything becomes one column: rotations and overlaps go, and the side padding is 20px. Use `min-height: 100dvh` for a full hero, never `100vh`.

## Space

Section padding is 96–160px at 1440 and 64–96px at 390. Gaps between cards are 20–28px. Let it breathe: when in doubt, remove an element instead of shrinking the gaps.

## Motion

- **The page builds itself once.** On load, the hero's tag, headline, sentence, buttons and picture rise into place one after another: 16–24px, 700–900ms, `cubic-bezier(.32,.72,0,1)`, about 80ms apart.
- **Sections enter as you reach them,** once, with the same curve, via `IntersectionObserver` (never a scroll listener). Stagger the items inside a section; don't fade every block identically.
- **One signature scroll moment** per page, usually the hero picture handing over to the demo (see [the first screen](first-screen.md)).
- Animate only `transform` and `opacity`. No blur filters on scrolling content (use backdrop blur only on the fixed nav and overlays), no `linear` or `ease-in-out`, and a fixed, pointer-free grain overlay if you use grain at all.
- Under `prefers-reduced-motion`, everything is in place at once.

## Every section, at a glance

His most repeated note was "a lot of text, I'm lost". Every section after the hero follows the same contract:

- **A heading that makes the point in eight words or fewer,** then short paragraphs. Count pieces, not words: the winning pages ran 70–160 words a section and still read at a glance, because each section had one heading, one card and one idea. A section holding a diagram, a grid of cells and a form was called confusing at half the words.
- **One picture or card that shows what the heading says,** readable in a second. A drawing whose proportions need explaining is cut, or replaced by a product card.
- **Details live behind a door:** a closed `<details>` question list, a "See all prices" link or a second page. The reader who wants them opens them.
- **The demo asks for one decision and shows one result** (MB-11 allows three controls at most). Choosing a nurse from four is one decision; a file input plus a stepper plus toggles plus a reset is a form.

## Checks before you finish

- Look at every row of buttons at 1440 and 390: same height, same centre (LY-09). Stacked controls share one left edge; a button that starts at the margin under a field indented by its label looks misaligned.
- Squint at each section: can you say its point without reading the body text?
- Name the one thing on the page a person will remember. If it's a paragraph, start again.
