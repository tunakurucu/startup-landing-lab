# HeyClicky

Inspected: 2026-10-19 · desktop-mobile-audit · expressive-world

https://heyclicky.com/

The whole homepage is staged as a macOS desktop: a menu-bar nav, scattered .mov windows, folders and stickers around a lowercase wordmark.

## Company evidence

YC: verified-yc; batch: X26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A macOS-style menu bar serves as nav: text links left, a logo glyph centred, Wi-Fi, battery and clock icons plus a blue 'get heyclicky' link right. The centred lowercase wordmark h1 and 'an ai buddy that lives on your mac' sit above two pill CTAs, 'download for mac' and 'windows waitlist'. Around them float window-framed video thumbnails labelled as .mov files, folder and trash icons, name-tag stickers and kaomoji, over a dotted grid. A large hello.mov video with 'play video' starts at the fold.

### Typography

Measured h1 is Inter 88px, weight 500, tracking -0.03em, line-height 1.1, and its text is the product name only; 56px at 390. Body measured Inter 16px/1.5. Geist Mono is the second measured family; a monospaced face appears on a terminal-style student discount card. Headings, buttons, FAQ and footer copy are set in lowercase throughout.

### Visual System

Light grey ground with a dotted grid; OS-style window chrome (traffic-light buttons, filename captions) frames videos, notes, testimonials and pricing cards. Glossy blue and grey pill buttons. Accents come from collected objects: folders, a trash can, an old candybar phone, a cartoon character image, coloured 3D staircases. Pricing sits on a full-bleed sky-and-clouds photo; the footer wordmark is built from blue folder icons.

### Page Sequence

Hero → hello.mov video → three feature sections (finally do the thing; use your screen as context; spawn agents with your voice), each a window-framed video with a dotted waveform and 'heyclicky' speech bubble → 'the dream' founder note in a notes window → feedback: repeated 'they use it everyday' line and tweet-style cards → '25,000+ happy users' bar → pricing on sky → FAQ accordion → footer with folder-icon wordmark.

### Interaction

Operated the pricing monthly/yearly tab: selecting 'yearly' changed pro from $20 to $16 and max from $100 to $80, added 'save $4/mo' and 'save $20/mo' badges and switched captions to 'billed yearly'. In my normal load, two top-of-page frames 1.5s apart were identical and the page reported 9 running animations. Under reduced motion every video element reported paused at 0s and one animation was still running.

### Accessibility

Feature body copy is pale grey on the light grey ground. On desktop the floating windows' fullscreen buttons measure 12×12px and unmute buttons 16×16px. At 390 a DOM check found 17 links or buttons under 32px in one dimension, including footer links 24px tall and a 17px demo-video button; no unlabelled links or buttons were found. No horizontal overflow at either width.

### Mobile

The menu bar drops its text links and status icons, keeping the logo glyph, 'get heyclicky' and an icon button. Most floating windows disappear; a few stickers and folders remain, clipped at the edges. CTAs stack full width, h1 drops to 56px, each feature's text stacks above its video, pricing cards stack, and the footer becomes two columns. Page height grows from 7,767px to 9,004px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 88 | 56 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.03 | -0.03 |
| Body px | 16 | 16 |
| Characters per line | 36 | 42 |
| Sections | 6 | 6 |
| Reduced-motion rule | observed | observed |

## Interpretation

- If the product lives inside a familiar operating environment, borrowing that environment's chrome can explain where it runs before any copy does.
- Keep one conversion action legible against a busy, collectable field by giving it the strongest colour and the centre of the composition.
- Reuse a single framing device (here, window chrome) across video, testimonials and pricing so a dense page still reads as one system.
- Put plan toggles next to the price numbers they change, with the saving stated in the card.

Suits consumer or prosumer desktop utilities with a playful voice and a founder-led audience. It would be wrong for a compliance or banking product, where faked OS chrome and meme objects would undercut trust.

Risk: The scattered objects compete with the value proposition, and the h1 carries only the name, so the product claim rests on a small subline. Pale grey body text and tiny window controls trade legibility for atmosphere. '100% free' under the download button sits awkwardly beside $20 and $100 paid tiers lower down.

## Limitations

- The full-page 1440 capture was missing from the input bundle; desktop sequence comes from live viewport captures.
- Feature videos and the hello.mov film were not played, so their content was not verified.
- User count and testimonials are company statements, not checked.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://heyclicky.com/
- https://www.ycombinator.com/companies/heyclicky
