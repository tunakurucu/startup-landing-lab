# DESIGN-RECORD

Page: `index.html` (opens from disk; no network, no web fonts). Mode: Build. Brief: `BRIEF.md`.

## Product interpretation
- Audience, category, business model, brand constraints: Consumers who wake in the dark and want a phone-free bedroom; category "sunrise lamp" (bedside lamp that wakes you with rising light); pre-order with a refundable $20 deposit, checkout not connected; no brand system supplied, only the name Morrow and the facts in the brief.
- Promise (who / what changes / how): People who wake to a phone alarm / wake to a room that has been brightening for thirty minutes instead of a sound / a bedside lamp whose single dial sets the wake time, no app, no screen.
- Current alternative, including doing nothing: The phone alarm (doing nothing), or an app-driven wake-up light such as Philips SmartSleep or Hatch Restore, both set from a phone or a screen on the device.
- The one advantage only this product has: The whole interface is one dial on the base; no app, no screen, no account, and the rise is a fixed thirty minutes ending at the time set.
- Category frame (existing, subcategory or new) and what it costs to teach: Existing frame "sunrise lamp" / "bedside lamp that wakes you with light"; costs one sentence ("Morrow is a bedside lamp. Turn the dial…"), paid in the subhead.
- Best-fit customer, and who it is not for: Best fit: adults who dislike waking to sound and want nothing glowing or needing charge on the nightstand. Not for: people who want smart-home or app integration, sunrise-plus-sounds features, or a clinical sleep claim.
- Users' own words (three phrases with source, or 'none yet'): none yet (no reviews, no interviews supplied; the brief says no reviews and no press).
- Biggest reason not to click, and the line that answers it: Paying a deposit for an unphotographed product with no date; answered beside the button: "$20 deposit, refunded whenever you ask. Checkout isn't connected yet, so no card today."
- Conversion action and destination: "Reserve a Morrow" → `#reserve` (terms, price, FAQ); there, "Reserve a Morrow" opens `mailto:reserve@morrow.example` with a prefilled subject, and the line beside it says checkout is not connected and nothing is taken today. Client must supply: the real checkout URL (replace the mailto), the real reservation and hello addresses, and the real domain for `og:image`.
- Visitor doubt 1 → artifact: "What does waking to light feel like?" → the hero room scene driven by a draggable dial, a slider and a 15-second Play, with a readout for every minute and a "drawn, not measured" label beside it.
- Visitor doubt 2 → artifact: "Is this real, and what exactly am I buying?" → the annotated line drawing of the prototype (captioned as drawn from CAD, shape may change) with the Settled / Still changing lists.
- Visitor doubt 3 → artifact: "What does reserving commit me to, and when do I get it?" → the reserve panel: $20, refundable whenever you ask, first batch planned for next autumn with no date promised, full price told before any further charge, plus the five-question FAQ.

## Interview log
- Questions asked, each with the recommended default you offered: (1) Checkout link or waitlist endpoint? default: anchor to terms plus a mailto stand-in address. (2) Reservation email address and domain? default: `reserve@morrow.example`, `hello@morrow.example`, `https://morrow.example/`. (3) Does the dial also switch the lamp on as a normal bedside light? default: do not claim it. (4) Does the deposit come off the final price? default: say only that the full price is told before any further charge. (5) Is "next autumn" safe to print as a season? default: yes, as "planned for next autumn", no date.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: the mailto path stands in for checkout; the base is described as "weighted" (a design-goal sentence, confirm with the client); no claim that the lamp works as an on-demand reading light; no final price shown.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Daylight (daylightcomputer.com, 2026-10-20): one device carries the hero and its signature mode (amber night) is demonstrated by changing the scene's state on scroll; limit: 18,848px of pinned scroll, canvas scenes blank in capture, four overlays around the product. | Demonstrate the product's signature state change instead of listing it, and tie each chapter's ground to the benefit it describes. | No pinned or scroll-scrubbed scene, no photography, no day-to-night on scroll: Morrow's state is changed by the visitor's own dial and runs night-to-morning, and the grounds step from night to morning down the page without pinning. |
| Brand composition | Nori (norirobotics.com, 2026-10-19): the physical artifact dominates the first field; price and fulfilment timing sit beside the order action; limit: task clips rendered black, claims are company statements. | Keep price and timing next to the purchase action, and let the object carry the opening. | No render-at-robot-scale, no chunky uppercase wordmark, no YC badge or shipping badge; Morrow's object sits in a drawn room at nightstand scale, and the price block carries the refund and "no date yet" lines. |
| Counterexample | Button Computer (buttoncomputer.com, 2026-10-19): a lifestyle video hero that says "PREORDER NOW" meets a sold-out buy box lower down; the structure is a generic commerce theme. | Keep the hero promise and the buy block in the same state: the hero's line already says checkout is not connected, and the reserve block says the same thing in more words. | No lifestyle footage, no press strip, no commerce-theme accordion footer; honesty sits beside the button, not in a separate section. |

Departures from the immersive-editorial recipe: the recipe wants real imagery and says it is wrong when product imagery is unavailable; here the scene is original SVG the visitor controls, because the only assets are CAD renders that will change. H1 runs 40–64px rather than the recipe's 42–100px because the artifact, not the headline, is the signature. Sections follow the recipe order (scene → offering → object evidence → point of view → terms and action) with "real proof" omitted because none exists.

## Hypothesis
- Archetype and why: Immersive editorial (a physical object and an emotional outcome, a scene that carries the first screen) with a functional-entrance artifact inside it (one control, immediate visible result), because the brief asks visitors to "get a feel for the wake-up light on the page".
- Type roles, faces and why they fit this product: Display Lora 500 (a warm, bookish serif for a bedside object; SIL OFL; installed locally, with Palatino/Georgia fallbacks since no web fonts can load from disk); text Carlito 400/700 (humanist sans for instructions and terms, Calibri/Segoe/Helvetica fallbacks); mono (system `ui-monospace` stack) only for the minute readout and step numbers, where tabular figures matter.
- Composition and grid: Max width 76rem; hero is two equal columns (copy left, the room right) collapsing to one column at ≤1100px; later sections alternate 5/7 and 6/6 splits and a single 46rem column for the point-of-view section; section padding 88px desktop, 56px phone.
- Ground, colour and material, and why this ground: The page starts on night blue (#0f1321, the bedroom before dawn), steps to dawn brown (#2a1a13) for how-it-works, sand (#eddcc0) for the prototype and morning cream (#fbf4e7) for the argument and the reservation: the page's own thirty-minute rise, read top to bottom. One accent, amber #d4781c, only on actions, the dial pointer and the slider. No shadows beyond the lamp's own cast shadow; depth comes from rules and ground changes.
- Signature artifact and its local behaviour: A drawn bedroom (window stays night, bed, nightstand, Morrow) whose light colour, glow and every surface colour are computed from the dial value (−30…0 min). Three ways to drive it: drag the round dial (pointer events), move the labelled range slider (keyboard), or press "Play the thirty minutes" (runs the rise in 15 s; label becomes "Pause the sunrise", then "Resume"/"Play it again"). The readout shows the minute and a one-line phase description via `role=status`. Nothing runs on load. Labelled "Drawn, not measured" beside it.
- Section sequence, with one section deliberately omitted: Hero with scene → How it works (four real steps) → The prototype (annotated drawing + Settled / Still changing) → Why thirty minutes (point of view, with the no-sleep-science line) → Reserve (terms, $20 panel, FAQ) → footer. Omitted on purpose: a proof/press/testimonial section (nothing exists) and a specs table (nothing is final).
- Primary interaction and motion purpose: Turning the dial; motion exists only as 180ms colour/opacity transitions on the scene so each dial step reads as a continuous dawn, and as the user-started 15 s play. No entrance, scroll or hover motion.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): Structure: where the controllable scene lives relative to the copy.
- Category default and anti-default this plan avoids: Default for a sleep-wellness device pre-order: full-bleed golden-hour bedroom photo, centred serif headline, "Pre-order now", three benefit cards (natural wake / better sleep / beautiful design), press logos. Anti-default: black tech page with a rotating 3D render, spec table and countdown. This plan: a drawn scene the visitor operates, left-aligned type, no cards, no photo, no countdown, honesty lines beside each claim.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Split hero: copy on a stable night ground left; the room scene in a framed panel right with the dial, readout and slider in a control bar under it. | "What does waking to light feel like?" with the promise readable at every dial state. | 8 | 7 | 7 | 7 | 7 | Footage of the real prototype running the rise, a measured brightness curve under the slider, and a named maker beside the copy. |
| B | Full-bleed room: the whole hero is the scene, headline and button sit on the wall, and the page ground itself goes from night to morning as the dial turns. | Same doubt, more immersively; the page "wakes up". | 8 | 8 | 8 | 5 | 7 | Text that keeps 4.5:1 through every mid-tone state, which needs a scrim or a text panel, which undoes the immersion; plus real footage. |

Score each dimension 0–10.

- Chosen variant and why: A. B cannot keep the headline and button legible across the mid-tones of the rise without a scrim, and the first-screen copy must be readable at every state; A keeps the promise on a fixed ground and gives the scene a frame the visitor understands as "the thing you operate".

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Hero visual is decoration | block if true | Not true: the scene is the product's output (the light) and changes with the product's only control. |
| Gradient blob / coloured glow as hero evidence | warn | The radial glow is the lamp's light on the wall and nightstand; it is drawn inside the SVG with `stop-color` tied to the dial value, carries the minute-by-minute information, and is zero when the lamp is off. Kept. |
| Centred headline over framed screenshot | warn | Not used: left-aligned copy beside the frame; the frame holds the operable scene, not a screenshot. |
| Three equal adjective cards | block | Plan had a "No app / No screen / One dial" triad under the steps; removed in the structural revision (it repeated the hero and the steps). |
| Cream ground with a serif display | warn | The page ground is night blue; cream appears only in the last two chapters as the morning the lamp produces. Reason recorded; CO-03 passes. |
| Overused display face | warn | Lora is not on the everywhere list; Inter and Poppins (both installed locally) were rejected. |
| Auto-advancing content / fake liveness | warn/block | Nothing runs on load; the 15 s play starts on click and its button becomes the pause control. |
| No reduced-motion rule | block | `@media (prefers-reduced-motion: reduce)` removes the scene transitions; motion rules are inside `no-preference`. |
| Control without destination/result | block | Dial, slider and Play all change the scene within one frame; nav anchors resolve; the reserve button opens a mailto and says so beside it. |
| Metrics without sources | block | The only numbers are $20, thirty minutes and fifteen seconds, all from the brief or the page's own behaviour. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | `shots/1440-top.png` | h1 in three lines, no orphan; button and its line above the fold; the control bar is cut by the fold (HR-05); full page `shots/1440.png`: section grounds step night → dawn → sand → cream; no empty bands. Artifact states: `shots/state-1440-m30.png` (off), `shots/state-1440-m8.png` (gold), `shots/state-1440-0.png` (full), `shots/state-1440-playing.png` (Pause label mid-run). |
| 768×1024 | `shots/768-top.png` | One-column hero: h1 in two lines, lede, button and line, scene top cut by the fold; `shots/768.png`: steps, drawing, status lists and reserve panel stack without cramped columns. |
| 390×844 | `shots/390-top.png` | Header is wordmark + Menu; h1 three lines at 40px; button at 44px tall; scene caption cut by the fold at 831px. `shots/390.png`: controls recomposed to dial + readout with the Play row full width, slider below; `shots/state-390-menu.png` (menu open), `shots/state-390-m30.png`, `shots/state-390-m8.png`, `shots/state-390-0.png`, `shots/state-390-playing.png`. |

Each screenshot cell is a relative `.png` path, or `unavailable: "<decisive error line>"` with the full log linked in the next cell. Open every PNG before listing it.

## Checker result
- JSON: `check.json`
- Summary: 68 checks ran, 0 failures, 0 warnings, 0 not run; lab LCP 544 ms, CLS 0, FK grade 3.6
- Failures fixed: LY-02 and AX-11 (header overflow at 320 and with WCAG text spacing: nav Reserve button hidden under 560px, menu kept); AX-11 again at 1440 (a `nowrap` span on "One dial, no app." overflowed under 0.12em tracking: span removed, h1 size and hero columns retuned, line breaks measured at six widths with `tools/h1lines.mjs`, no single-word last line); AX-03 (focus ring 2.95:1 on the white reserve panel: dark outline applied to `.reserve`); LY-05 (reserve price box was a card inside a card: border removed); CP-02 (lede cut to two sentences); TY-07 (why-section paragraphs capped at 37rem).
- Warnings kept and why: none remain.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` → "npm error code ENOTFOUND" (no network, package not installed).

## Checklist
The other 68 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | `shots/1440-top.png`: h1 (wake to thirty minutes of sunrise, one dial, no app) + lede (a bedside lamp; turn the dial; light rises half an hour before). |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | "Bedside lamp" and "wakes you with rising light" are in the h1/lede, and the lit lamp on a nightstand is in the same screen. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The scene shows the lamp and the light it produces at the chosen minute; `shots/state-1440-m30.png` vs `state-1440-0.png`. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubt 1 → dial scene; doubt 2 → annotated drawing + Settled/Still changing; doubt 3 → reserve panel + FAQ (see Product interpretation). |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Triad that repeated "no app / no screen / one dial" removed in the revision; remaining sections: mechanism, status, point of view, terms. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log: five questions with defaults, no answer, defaults applied. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants table above; axis = structure; default and anti-default named. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References table and the departures paragraph under it. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | Lede: "Morrow is a bedside lamp." |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Product interpretation; "One dial, no app" is false on Philips SmartSleep's and Hatch's pages and meaningless on a phone alarm. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | "Set it once before bed. The light does the rest, slowly." / "The prototype works. The shape isn't final." / "A sound alarm takes one second. Morrow takes thirty minutes, on purpose." / "Reserve one for $20, refunded whenever you ask." each picturable and falsifiable. |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet" recorded; hero written from the brief's own words ("no app, no screen, one dial"). |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "$20 deposit, refunded whenever you ask. Checkout isn't connected yet, so no card today." under the hero button (`shots/1440-top.png`). |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings read: wake to thirty minutes of sunrise, one dial → set it once, the light does the rest → the prototype works, shape not final → sound takes a second, Morrow takes thirty minutes → reserve for $20, refundable. |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | `tools/h1lines.mjs` output: 1440 ends "One dial, no app.", 768 "sunrise. One dial, no app.", 390 "One dial, no app.", 320 "dial, no app.". |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | `.hero` has no height; it is sized by its content (CSS in `index.html`). |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof was supplied (no reviews, press or studies); none was invented. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Amber appears only on the two Reserve buttons, the dial pointer, the slider and the wordmark's sun dot; the terms list's accent bullets were removed in the removal pass. |
| TT-05 | Replacing the logo would not turn this into another company's page. | pass | The room scene, the dial control, the minute-by-minute phase copy and the "drawn, not photographed" stance are specific to this lamp and this stage. |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Daylight: no pinned scroll, photo or day→night; Nori: no robot-scale render, uppercase wordmark or badges; Button Computer: no video hero, press strip or commerce accordion. Shared grammar only (left copy, right artifact, footer). |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | No hover-only effects or staggers; button hover only changes fill colour, which also happens on focus. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | (1) Scene colour transitions: trigger dial/slider/play input → purpose: continuous dawn between integer minutes → fallback: instant colour under reduced motion → 180ms linear. (2) Play: trigger click → purpose: show the full rise → fallback: static states via dial/slider → 15 s, smoothstep on the room mix, with a pause control. (3) Button hover/focus: 160ms ease-out fill change, no fallback needed. No entrance or scroll motion. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | `shots/390.png` and `shots/state-390-playing.png`: scene recropped to 4:3 with the lamp and window kept, controls reflow to dial + readout, full-width Play row, slider below. |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | `#phase` has `role="status" aria-live="polite"` and updates when the phase changes; the slider carries `aria-describedby="phase"`. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | $20, thirty minutes and "next autumn" come from the brief; "fifteen seconds" is the page's own play duration; the scene is labelled "Drawn, not measured". |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Scene caption "Drawing of the prototype; not a photo" and the "Drawn, not measured" note sit inside the figure; the drawing's figcaption says "Drawn from the current CAD, not photographed". |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Reserve buttons reach the terms, then a mailto whose line says checkout is not connected; nav anchors resolve (AX-08 pass); dial, slider and Play change the scene (`tools/states.mjs` log). Stand-in addresses and domain listed for the client. |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All PNGs opened; widths read from IHDR: 1440, 768, 390; artifact captured off, gold, full and playing at 1440 and 390, plus the open phone menu. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section: `shots/before/1440.png` → `shots/1440.png`. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass below. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | No unverified rows; renders and checker ran. |
<!-- checklist:end -->

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Hero visual is decoration | block | Not matched: `shots/state-1440-m30.png` vs `state-1440-0.png` show the lamp's output changing with its control. |
| Coloured glow as decoration | warn | Stays: the glow is the light on the wall, zero when the lamp is off, and CO-02 passes (it is an SVG gradient, not a box-shadow). |
| Three equal adjective cards | block | Was present in the first render (`shots/before/1440.png`, "No app / No screen / One dial"); removed. |
| Every section same width and padding | warn | Not matched: hero 2-col, steps 5/7, prototype 6/6, why single 46rem column, reserve panel. |
| Small tracked-caps label above every heading | warn | None used. |
| Section numbers on non-sequences | warn | Numbers only on the four real steps and the three drawing callouts. |
| Only destination-free actions | warn | Primary label "Reserve a Morrow" (HR-02 pass). |
| Cream ground with serif display | warn | CO-03 pass; cream appears only as the page's morning chapters, reason above. |
| Scaled-down desktop on mobile | block | Not matched: `shots/390.png` recomposes the controls and crops the scene. |
| rounded-xl on every surface | warn | Radius only on the scene frame, the reserve panel, the pill buttons and the phone menu; lists and the drawing use rules. |

## Structural revision
- Weakest explanation or most template-like decision: The "No app / No screen / One dial" three-column list closing the how-it-works section: a template triad that repeated the hero and the steps, and the hero's control bar, where the dial (the product's whole interface) sat as a small secondary widget beside a slider.
- Change made (structure, not styling): Deleted the triad and folded its two new facts into the steps' sub-lines; restructured the control bar so the dial is the lead element (9rem, two-row span) with the minute readout and Play beside it, and the labelled slider demoted to a full-width row underneath; the hero grid changed from 5/7 to equal columns so the h1 sets in three lines instead of four. Then, on the phone render, the controls were recomposed again (title full width, dial + readout, Play row full width).
- Before: `shots/before/1440.png`
- After: `shots/1440.png`
- Score after the change and what still keeps it from a 10: Fit 8/10, Identity 7/10, Originality 7/10, Composition 8/10, Proof 7/10. A 10 needs footage of the real prototype doing the rise, a measured brightness curve under the slider instead of drawn colours, and a named person behind the "we" with a way to reach them.
- Removal pass (each decorative element → its job, or "removed"): window moon and stars → show that outside is still night, so the light is the lamp's (kept); radial glow and nightstand glow → the lamp's output (kept); diffuser shine gradient → reads the diffuser as a cylinder, not a flat blob (kept); lamp cast shadow → grounds the lamp on the nightstand (kept); book on the nightstand → scale (kept); accent dots on the terms list → removed, replaced by rules; border on the reserve price box → removed (was a card in a card); scene frame radius and 1px rule → marks the operable panel (kept); drawing "width: not final" dimension line → tells the visitor the drawing is not a spec (kept); Menu button border → affordance on phones (kept); h1 `nowrap` span → removed.

## Remaining weaknesses
- What a buyer still cannot judge: how bright the real lamp gets and how it looks in a real room (the colours are drawn, not measured); the final shape, size and price; who makes it (no names on the page); whether it has any other controls or a power lead, which the brief does not say.
- What was not verified: the share card on a public URL (checked only as tags from disk); the mailto addresses and `morrow.example` domain are stand-ins the client must replace, together with the checkout link; rendering of Lora/Carlito on visitors' machines without those fonts (fallback stacks are set but were not rendered); Impeccable detect not run (no network).

## Status
DONE
