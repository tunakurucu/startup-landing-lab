# The 100 checks

Generated from `assets/checks.json`. **64 auto** checks are decided by `scripts/check-page.mjs`; **12 screenshot**, **6 code** and **18 record** checks are answered in the `## Checklist` section of `DESIGN-RECORD.md`, one line each: `ID | pass, fail or n/a | evidence`. `scripts/verify-record.mjs` refuses to finish while any of them is unanswered.

**block** = fix before calling the page done, or end with DONE_WITH_CONCERNS. **warn** = fix, or record the product reason it stays.

Credits: **IMP** Impeccable (Paul Bakaus); **GST** gstack design-review (Garry Tan); **EK** Emil Kowalski's skills; **VWG** Vercel Web Interface Guidelines; **MP** Matt Pocock's skills; **AFD** Anthropic frontend-design; **ASC** Anthropic skill-creator; **JK** Jakub Krehel's interface skills; **MT** Meng To's design skills; **SLL** Startup Landing Lab research. Every rule is written in this project's own words; see `docs/attribution.md` in the repository for links and licences.

## Product and story

| ID | Check | Verify | Severity | Credit |
| --- | --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | shot | block | SLL GST |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | shot | block | GST |
| PS-03 | The hero artifact is the product or its real output, not decoration. | shot | block | SLL |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | record | block | SLL |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | record | warn | SLL GST |
| PS-06 | There is one primary action, worded the same wherever it appears. | auto | warn | GST |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | record | warn | MP |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were compared and scored before any code. | record | block | SLL GST AFD JK |
| PS-09 | Two references serve different jobs, one counterexample is named, and what is not borrowed is stated. | record | block | SLL |
| PS-10 | The page starts from one archetype recipe and records where it departs from it. | record | warn | SLL |

## Hero

| ID | Check | Verify | Severity | Credit |
| --- | --- | --- | --- | --- |
| HR-01 | The headline and primary action are visible without scrolling at 1440×900 and 390×844. | auto | block | GST |
| HR-02 | A centred headline above a framed screenshot is used only with a product reason in the record. | shot | block | SLL AFD |
| HR-03 | The headline has no single-word last line at any of the three widths. | shot | warn | IMP VWG JK |
| HR-04 | A headline above about 6.5rem is the signature of the page and keeps each line to three words or fewer. | auto | warn | IMP SLL |
| HR-05 | The primary action names what the visitor will do, not "Get started" or "Learn more" alone. | auto | warn | IMP GST VWG |
| HR-06 | The hero is sized with svh/dvh or content, not a fixed 100vh that clips under mobile browser bars. | code | warn | EK |
| HR-07 | Nothing in the hero waits for an animation before it can be read. | shot | block | SLL IMP |

## Type

| ID | Check | Verify | Severity | Credit |
| --- | --- | --- | --- | --- |
| TY-01 | Exactly one h1. | auto | block | GST VWG |
| TY-02 | Heading levels never skip (no h1 → h3). | auto | block | IMP VWG |
| TY-03 | The h1 and the first h2 are each at least 1.25× the body size. | auto | block | IMP GST |
| TY-04 | At least two font weights carry the hierarchy. | auto | block | IMP |
| TY-05 | Headline letter-spacing is no tighter than −0.04em. | auto | block | IMP |
| TY-06 | Text above 14px is not tracked wider than 0.12em, and no paragraph is set in all caps. | auto | warn | IMP |
| TY-07 | Body text is at least 16px on phones. | auto | warn | GST IMP |
| TY-08 | No readable text below 11px. | auto | block | IMP GST |
| TY-09 | Body paragraphs stay under about 80 characters per line. | auto | warn | IMP AFD |
| TY-10 | Body line-height is at least 1.35. | auto | warn | IMP |
| TY-11 | Weights under 400 appear only at 28px and up; smaller text is 400 or heavier. | auto | warn | JK |
| TY-12 | A display face that is everywhere (Inter, Space Grotesk, Fraunces, Roboto, Poppins, Montserrat) has a stated reason. | auto | warn | IMP GST |
| TY-13 | Each face has a role (display, text, data); a family is not added just to have two. | record | warn | AFD SLL |

## Layout and rhythm

| ID | Check | Verify | Severity | Credit |
| --- | --- | --- | --- | --- |
| LY-01 | No horizontal scroll at 390px. | auto | block | GST VWG |
| LY-02 | No horizontal scroll at 320px. | auto | block | EK |
| LY-03 | No text is cut off by its container. | auto | block | IMP |
| LY-04 | Body text keeps at least 12px from the screen edge on phones. | auto | block | IMP |
| LY-05 | Sections do not all share one padding; spacing changes where the reading task changes. | auto | warn | IMP SLL |
| LY-06 | No boxed card sits inside another boxed card. | auto | warn | IMP |
| LY-07 | Density changes down the page on purpose: open, dense, quiet, active, short. | shot | warn | SLL |
| LY-08 | In-page anchor targets are not hidden under a sticky header. | auto | warn | VWG JK |
| LY-09 | A footer exists and holds real destinations. | auto | warn | SLL |
| LY-10 | At 768px nothing is a cramped leftover of the desktop grid. | shot | warn | SLL GST |

## Colour and surface

| ID | Check | Verify | Severity | Credit |
| --- | --- | --- | --- | --- |
| CO-01 | Text meets WCAG AA contrast (4.5:1, or 3:1 for large text). | auto | block | IMP VWG GST |
| CO-02 | No gradient-filled text. | auto | warn | IMP AFD |
| CO-03 | No coloured glow or halo used as decoration. | auto | warn | IMP |
| CO-04 | Depth does not come from a hairline border plus a wide soft shadow on every surface. | auto | warn | IMP |
| CO-05 | The ground colour is chosen from where the product is used; cream with a serif display needs a reason. | auto | warn | IMP AFD |
| CO-06 | Accent colour marks state or action and is not sprinkled for decoration. | shot | warn | GST |
| CO-07 | The theme-color meta matches the page background. | auto | warn | VWG |

## Template tells

| ID | Check | Verify | Severity | Credit |
| --- | --- | --- | --- | --- |
| TT-01 | No row of three equal cards with short adjective headings standing in for a product explanation. | auto | warn | GST AFD SLL |
| TT-02 | No icon tile stacked above every card heading. | auto | warn | IMP |
| TT-03 | No small tracked-caps label above nearly every section heading. | auto | warn | IMP AFD |
| TT-04 | Section numbers appear only on content that is a real sequence. | shot | warn | IMP AFD |
| TT-05 | No thick coloured stripe down one side of cards or callouts. | auto | warn | IMP GST |
| TT-06 | No pulsing dot, blinking cursor or marquee on content that is not live. | auto | warn | IMP |
| TT-07 | No stock marketing verbs (seamless, supercharge, unleash, revolutionize, cutting-edge, next-gen). | auto | warn | IMP GST |
| TT-08 | No grid, dot or stripe background used as filler. | auto | warn | IMP |
| TT-09 | Replacing the logo would not turn this into another company's page. | record | block | SLL |
| TT-10 | The signature idea still works if the palette changes. | record | warn | SLL |
| TT-11 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | record | block | SLL MT |

## Motion

| ID | Check | Verify | Severity | Credit |
| --- | --- | --- | --- | --- |
| MO-01 | With reduced motion, nothing moves and nothing is hidden. | auto | block | VWG EK SLL |
| MO-02 | After loading and one scroll, no text is still invisible. | auto | block | IMP |
| MO-03 | No transition: all. | auto | block | VWG EK |
| MO-04 | Only transform, translate, scale, rotate and opacity animate; never layout properties. | auto | warn | VWG IMP |
| MO-05 | Nothing large loops forever without a way to pause it. | auto | warn | VWG |
| MO-06 | Overshoot or bounce easing appears only in playful archetypes; entrances never start from scale(0) or ease in. | auto | warn | IMP EK |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine). | code | warn | EK |
| MO-08 | Staggers stay between 30 and 80ms and never block input. | code | warn | EK |
| MO-09 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | record | block | SLL |
| MO-10 | Text that must be read moves into place rather than fading in. | code | warn | SLL |

## Mobile and touch

| ID | Check | Verify | Severity | Credit |
| --- | --- | --- | --- | --- |
| MB-01 | The viewport meta never disables zoom. | auto | block | VWG EK |
| MB-02 | Header, nav and boxed buttons are at least 44px tall. | auto | block | GST |
| MB-03 | Every other control is at least 24px tall. | auto | block | GST VWG |
| MB-04 | Inputs use at least 16px text, so phones do not zoom on focus. | auto | warn | EK VWG |
| MB-05 | If the nav collapses on phones, a working menu control replaces it. | auto | block | GST |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk. | shot | block | SLL |
| MB-07 | Fixed or full-bleed elements respect safe-area insets. | code | warn | VWG EK |
| MB-08 | At 200% zoom (720px at 2×) the page still has no horizontal scroll. | auto | warn | VWG |

## Accessibility and interaction

| ID | Check | Verify | Severity | Credit |
| --- | --- | --- | --- | --- |
| AX-01 | Every link and button has an accessible name. | auto | block | VWG |
| AX-02 | Every image has alt text, empty only when decorative. | auto | block | VWG |
| AX-03 | Decorative SVGs are hidden from assistive tech; meaningful ones are labelled. | auto | warn | VWG |
| AX-04 | Every focusable control looks different when focused from the keyboard. | auto | block | VWG |
| AX-05 | Nothing is clickable without being a link or button. | auto | block | VWG |
| AX-06 | Every form control has a label. | auto | block | VWG |
| AX-07 | The page has a main landmark. | auto | warn | VWG |
| AX-08 | The html element declares a language. | auto | block | VWG |
| AX-09 | No script errors or console errors while loading. | auto | block | IMP GST |
| AX-10 | Links point somewhere real: no empty href, "#" or missing anchor or file. | auto | block | SLL |
| AX-11 | No broken images. | auto | block | IMP |
| AX-12 | Results of local actions are announced (aria-live or role=status). | code | warn | VWG |

## Performance and assets

| ID | Check | Verify | Severity | Credit |
| --- | --- | --- | --- | --- |
| PF-01 | Images declare width and height, or an aspect-ratio. | auto | warn | VWG |
| PF-02 | Images below the first screen load lazily. | auto | warn | VWG |
| PF-03 | Web fonts use font-display: swap (or optional). | auto | warn | VWG |
| PF-04 | The first load transfers under about 2.5 MB. | auto | warn | SLL |

## Honesty and proof

| ID | Check | Verify | Severity | Credit |
| --- | --- | --- | --- | --- |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | record | block | SLL GST |
| HP-02 | Every number has a source or is labelled illustrative. | record | block | SLL |
| HP-03 | Illustrative interfaces say so on the page. | shot | block | SLL |
| HP-04 | The primary action leads somewhere real or produces a visible local result. | record | block | SLL |

## Process

| ID | Check | Verify | Severity | Credit |
| --- | --- | --- | --- | --- |
| PR-01 | Every screenshot listed as evidence was opened, is not blank and is the width it claims. | record | block | IMP |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | record | block | SLL GST |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | record | warn | MT |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | record | block | GST IMP ASC |
