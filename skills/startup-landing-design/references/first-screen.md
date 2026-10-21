# The first screen is a poster

The first screen is judged in seconds, by eye, before anyone reads. Make it a poster: a headline, one sentence, one or two buttons and one beautiful picture, with room around them. The working demo, the proof and the details start in the next screen.

**Why this rule leads the skill.** In rounds 3–8 of this project's blind tests, AI graders preferred this skill's pages (84 against 69 out of 100). Then a person looked at the four round 8 pairs, first screens only, and picked the page built *without* the skill every time. His reasons: the skill's first screens were cluttered, with too many words, buttons and controls, a table he didn't want to read, small mono captions, a picture that showed controls rather than a result, and a dull ground and logo. The pages he liked had space, few words, one modern picture, soft well-proportioned buttons and a confident face. The 43 best-designed sites in this project's research agree. Their median headline is lighter and smaller than the average startup's (400 weight, 56px against 500 and 64px), their body text is 16px, and their lines run 49 characters.

## What goes in it, and nothing else

At 1440 × 900 and at 390 × 844:

1. **The site header.** A wordmark, three to five links, and one action. A centred pill-shaped nav bar floating over the hero is a good default; a plain bar works too.
2. **One headline.** Eight words at most, two lines at 1440, three lines at 390. Use a display face with character at weight 400–600, tracked −0.02 to −0.04em. You may set one or two words in a single accent colour, or in the italic of the same family. That's the only flourish allowed.
3. **One sentence under it.** Twenty-two words at most, in plain words: who it's for, what it does and what changes. This is the five-second line.
4. **One or two buttons.** One is filled, the second (if any) quiet. Make them soft and well proportioned: 48–56px tall, horizontal padding 24–32px, a full pill or a 12–16px radius, 15–16px labels at weight 500–600. The label says what happens ("Upload your PDF", "Book a pilot call").
5. **One dominant picture,** at least 40% of the first screen at 1440 and the next thing below the button at 390. Mark it `data-hero-visual`. It shows the **result**, finished and beautiful, never the controls:
   - **A product screen** in a phone or tablet frame (a device frame is welcome; a fake browser window is not), or floating cards cut from the product. Use real-looking content at true size, a slight angle or overlap, and soft depth.
   - **A finished illustration** of the outcome in the page's palette: the printed zine fanned open, the shift board with the swap accepted.
   - **A real photograph,** when the brief supplies one.

   It may move gently (a slow float, a crossfade between two states), but it holds no buttons, fields, tabs or chips. It's a picture.

That's all. HR-09 counts the words (45 at most outside the header and the picture). HR-10 fails any table, form field, tab list, slider, monospace text or tracked-caps label above the headline, more than two actions, or a control inside the picture.

## What moves out of the first screen

All of these have a place, just not in the poster:

| Was in the first screen | Goes to |
| --- | --- |
| The working demo with its controls | Section two, directly after the hero (HR-07 now asks for it within the first two screens). Introduce it with a short heading such as "Try it", and keep the picture and the demo visibly the same product. |
| The sample label ("Sample sheet drawn for this page") | The demo section, once, at the top of the demo. The hero picture carries no caption. |
| The payer's line, the diligence answers | The section written for that buyer. |
| "Not live yet" | Folded into the sentence or the button ("Join the pilot", "Book a pilot call"). Never a separate paragraph or a status chip. |
| Prices, stats, logos, steps | Their own sections below. Logos of real customers or investors the brief supplies may scroll slowly in a strip, below the first screen. |

## The ground, the logo and the face

- **Ground.** Use near-white with a whisper of the brand hue, a deliberate dark, or one soft gradient wash behind the picture. Never flat mid-grey or beige, which reads as unfinished. The picture brings the colour.
- **Logo.** The product name set in the display face, with at most one simple mark built from the product's world. No clip-art icon.
- **Face.** One display face with character plus one quiet text face. Not Inter, Arial or Georgia for the headline. Ship the files (TY-11).

## Space

- The headline column is at most about 560px wide at 1440, with the picture taking the rest. The headline, sentence and buttons sit as one group in the headline column, with 24–32px between the headline and the sentence and 32–40px between the sentence and the buttons.
- Leave real air: at least 96px between the header and the headline at 1440, and 40px at 390. Nothing else crowds the group.
- On a phone, the headline, sentence, buttons and the top of the picture fit in one screen.

## Motion: one moment, done well

- **On load,** the headline, sentence, buttons and picture enter once, staggered by 60–90ms, rising 16–24px over 700–900ms with a strong ease-out (`cubic-bezier(.16,1,.3,1)`). Animate transform and opacity only. Nothing else animates on load.
- **One signature scroll moment** per page, usually the hand-off from the hero picture to the working demo: the picture settles into the demo, the phone screen scrolls through its states as the visitor scrolls, or the printed sheet folds into the finished zine. Use `position: sticky` and scroll progress, keep it short (one to two screens of scroll), and give it a static fallback and a reduced-motion version.
- Other sections reveal once, quietly. Never use the same fade-up on every block.

## The test

Look at the first screen for five seconds, then look away. You should be able to say what the product is, who it's for and what the button does, and you should *want* to scroll. If you remember a table, a row of chips or a paragraph, cut it. Then ask the founder's question: would I put this live under my name today?

Sources: this project's human check (round 8) and reference-tier measurements; Taste Skill v2.1 (Leonxlnx, MIT): one headline of two lines or fewer, one action, one dominant visual, no eyebrow or mono; Anthropic frontend-design (2026-09): spend boldness in one place, no element rather than a weak one; Hallmark (Nutlope): a distinct display face; Emil Kowalski: strong ease-out, short stagger.
