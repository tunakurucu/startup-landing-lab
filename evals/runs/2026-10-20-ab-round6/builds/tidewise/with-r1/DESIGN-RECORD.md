# DESIGN-RECORD

Tidewise landing page. Build mode. Page: `index.html` (built from `src/index.src.html` and `tide.js` by `node src/build.mjs`; opens from disk, no network).

## Product interpretation
- Audience, category, business model, brand constraints: People in the UK and Ireland who swim in the sea all year; consumer iPhone app; no business buyer; price not given. Constraints: never say it is safe to swim; no reviews or download numbers; should feel like the sea at 6 am, not a weather app.
- Promise (who / what changes / how): Year-round sea swimmers (who) know before they leave in the dark whether, and until when, conditions line up at their beach, and hear when a window closes early (what changes), because Tidewise reads tide, wind, swell and water temperature together and marks today's swim windows (how).
- Five-second line, quoted as shown in the first screen (who + what): "Tidewise is an iPhone app for people who swim in the sea all year."
- Current alternative, including doing nothing: Checking three websites (wind, swell, sea temperature) and a tide table, then asking the group chat whether it is "too lumpy today"; or going anyway and judging at the water.
- The one advantage only this product has: One look at today's swim windows for your beach, from all four inputs together, with a warning when a window closes early.
- Category frame (existing, subcategory or new) and what it costs to teach: Existing frame "iPhone app for sea swimmers" plus the subcategory term "swim windows", which the hero chart teaches by drawing one.
- Best-fit customer, and who it is not for: Year-round, early-morning sea swimmers at one of the 40 covered UK and Ireland beaches, on iPhone. Not for surfers chasing swell, not for anyone wanting a lifeguard or a go/no-go verdict, not (yet) for Android users or beaches outside the 40.
- Users' own words (three phrases with source, or 'none yet'): one phrase only, "too lumpy today" (the brief, quoting what swimmers ask the group chat); none yet beyond it. The h1 adapts it.
- Biggest reason not to click, and the line that answers it: "Is my beach covered, and is this even out?" → beside the button: "iPhone public beta. 40 UK and Ireland beaches so far."
- Conversion action and destination: "Join the public beta" → https://tidewise.example/beta (supplied in the brief); same label in header, hero, final section and footer.
- Visitor doubt 1 → artifact: "What does a swim window actually look like for my morning?" → the hero chart: three sample mornings, a time slider and a readout of tide, wind, swell and water.
- Visitor doubt 2 → artifact: "How does it decide, and can I trust it?" → the lanes section (tide, swell, wind lanes; window = where all three agree) plus the "your call" section stating it never says safe to swim.
- Visitor doubt 3 → artifact: "What if conditions change after I check?" → the early-close annotation on the default sample, the sample warning card and the two cove drawings (offshore last night, onshore at 07:42).

## Interview log
- Questions asked, each with the recommended default you offered: None sent (no one available). Defaults chosen: (1) primary action = "Join the public beta" to the supplied URL; (2) sample data on an imaginary cove, labelled, rather than a named real beach; (3) UK units (m, mph, °C, 24-hour clock); (4) no price shown because none was given.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: Window rules on the page are invented sample limits (tide over 2.2 m, swell under 0.7 m, onshore wind under 14 mph, offshore under 18 mph); "closes early" is shown as earlier than last night's view of the same window.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Neon (neon.com, casebook audit 2026-10-20): a two-state toggle on one chart changes the annotated callout with the same data. Limit: late-loading media left black voids. | One chart, one annotated moment, and the visitor's control changes what the annotation says. | Black ground with glowing bar field, numbered mono chapters, two-tone headlines. |
| Brand composition | Daylight (daylightcomputer.com, audit 2026-10-20): one object carries the hero and its state changes day to night, ground colour tied to the moment of use. Limit: 18,848px of pinned scroll, four overlays around the product. | Make the ground the time of day the product is used: the chart's sky steps from night to first light to sunrise, and section grounds lighten down the page. | Photo-real scene, pinned scroll, serif-on-photo hero, order bars and badges. |
| Counterexample | Opal Electronics (op.al, audit 2026-10-20): a dated letter over a moody photograph, no h1, no action. Attractive for "the sea at 6 am". | Wrong here: swimmers need the conditions and a way to join; mood alone would answer none of their doubts. Constraint kept: mood lives in ground colour and drawings, while h1, action and artifact stay real. | Full-bleed photograph, letter-as-homepage, no navigation or action. |

Departures from the immersive editorial recipe: the "scene" is a data chart rather than imagery; system font stacks instead of shipped OFL faces (the task forbids reading files outside the work folder, so no font files were copied); h1 max 6.1rem, under the recipe's 6.25rem.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the tide curve between high and low water; the printed tide table line (HW 08:40 4.5 m); wind turning onshore at a set minute; chop on the water surface; first light and sunrise times; the pre-work slot in the dark; the group chat's "too lumpy today?"; the beach steps going into the water; the tow float and towel left on the steps; the sea temperature in °C; the window that closes early
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Tidewise" with seed 1762975305: data-portrait, notation, generative; canon exit.
- Chosen move and why, or canon and the buyer-risk reason: data-portrait. The product's output is a pattern over time (a tide curve with windows), and one annotated moment (closes 07:42, not 09:30) is exactly the product's warning. Notation (the tide table) is used lower down as the "old way" ledger.
- Idea sentence ("[inventory thing] becomes [the move]"): The morning's tide curve becomes the sea itself, drawn chop and all, with the swim window shaded and the minute it closes early annotated.
- The same sentence with the nearest competitor, and why it fails: "A surf forecast's tide curve becomes the sea itself, with the swim window shaded and the minute it closes early annotated": surf forecasts want lumpy water and rate swell for surfing; they have no swim window and no early-close warning, so the sentence is false for them.
- Statement level (quiet, bold or loud) and why: bold. Consumer app, but the subject is personal safety, so the chart owns the first screen and the sections below stay quiet and carry proof.
- First viewport at 1440 (placement, sizes, live thing, refused default): Header 64px; h1 "Too lumpy today?" one line at ~98px left; lede, button and beta line in a 34rem column right; below, full-width signature: sample label and morning buttons, chart 300px tall (sky tone steps, shaded window, choppy surface, annotation), time slider under the chart, readout right. Refused default: phone mockup over a sky gradient with three icon cards.
- First viewport at 390: h1 one line at 45px, five-second lede (4 lines), button, beta line; sample label (2 lines); three morning buttons; chart 184px; time slider; verdict line of the readout at the fold. Control (slider) and result (marker and verdict) on one screen.
- Name test (the one with the …, eight words or fewer): the one with the tide curve that gets choppy

## Hypothesis
- Archetype and why: Immersive editorial (emotional outcome, a time and place) with the opening scene built as a functional data chart, borrowing functional entrance's "input, then output" loop for the slider.
- Type roles, faces and why they fit this product: Display serif via `ui-serif` (New York on iPhone, Georgia-like elsewhere) for headlines: a printed-almanac, tide-table register rather than the SF-style sans of weather apps. Text: `system-ui`. Data: `ui-monospace` with tabular figures for times and heights. No faces shipped (see departures).
- Composition and grid: One 84rem wrap; hero copy as a headline row (h1 left, lede right), then a full-width artifact grid (chart 1fr, readout 17–21rem). Lanes section widens; prose stays at 38rem.
- Ground, colour and material, and why this ground: Pre-dawn blue-black (#0a141c) stepping lighter per section to first light; sea teal for water; dawn peach only for action and "your time"; glass green for an open window; warm coral for early close / no window. Flat tone steps, thin 1.5px line art, no gradients.
- Signature artifact and its local behaviour: Three sample mornings (Calm, Wind turns onshore, Big swell) at an imaginary cove; a 05:00–13:00 slider; readout gives verdict, time left, the early-close note, the failing sample limits and the four conditions. Everything computed locally in `tide.js`.
- Signature on a phone (where the result shows after a tap): Morning buttons sit directly above the chart, which redraws in view; the slider sits under the chart and the verdict line sits directly under the slider (moved there in the structural revision), so both marker and verdict change in view.
- Sample audit (counts, weekdays, states and stated rules agree): No dates or weekdays used. Onshore morning: HW 08:40 4.5 m; window 05:16–07:42 computed from the stated limits; wind 15 mph at 07:45 matches the warning card; ledger line, lanes, warning card and drawings all quote 05:16–07:42 and 09:30; water 13.4°C everywhere. Big swell has no window and the readout lists the failing limits. Calm 05:46–12:34.
- To confirm with the client (claims and terms kept off the page): price or free beta; how the app sets each beach's limits and whether swimmers can set their own; whether water temperature affects a window; how the early-close warning is delivered (push notification or in-app) and what it compares against; the list of the 40 beaches and whether the beta page shows it; an absolute public URL for og:image; a licensed display face to self-host; Android plans; sunrise/first-light being shown in the app.
- Section sequence, with one section deliberately omitted: hero + chart → how a window is found (lanes) → old way vs one line (tide-table ledger) → early warnings (sample + cove drawings) → your call (not a lifeguard) → coverage and join. Omitted: FAQ and pricing (no facts to put in them).
- Primary interaction and motion purpose: Drag the time / pick a morning; the chart and readout swap instantly. Motion contracts: (1) first load, water layer rises 18px once → tide coming in, eye to the chart → static chart is the fallback → 800ms cubic-bezier(.16,1,.3,1), no-preference only; (2) morning switch → window bands fade in → instant swap fallback → 200ms ease-out opacity; (3) button press → scale .97 → none under reduced motion → 150ms ease-out; (4) hover colour on buttons behind (hover:hover) and (pointer:fine) → 150ms. Nothing loops.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): emphasis (what the first screen is made of: a drawn data scene vs the trade's printed notation).
- Category default and anti-default this plan avoids: Default: weather-app page, bright sky gradient, iPhone mockup, three icon cards (Tide / Wind / Swell), App Store badge. Anti-default: moody full-bleed dawn swimmer photograph with a big serif line and nothing to operate. A is neither: dark, data-true chart you operate.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Headline row, then a full-width tide-curve portrait with chop, shaded window, early-close annotation, slider and readout | What a window looks like for my morning, and what changes it | 8 | 8 | 8 | 7 | 7 | Real beach data from the app, a shipped display face, the verdict visible above the fold on phones |
| B | A printed tide-table strip as hero, the Tidewise one-liner set beneath it, the chart lower down | What it replaces | 7 | 6 | 6 | 6 | 5 | An operable element in the first screen; the notation alone does not show the window or the warning |

- Chosen variant and why: A. It is the product's output, operable in seconds, and its annotated moment is the product's one advantage (the early-close warning). B's notation is kept as the "old way" ledger.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches category default or anti-default | Block | Avoided: no phone mockup, no icon cards, no lifestyle photo; hero is the operable chart. |
| Hero visual is decoration | Block | The chart is the product's output on sample data, labelled as such. |
| Three equal adjective cards | Block | None; the explanation is the lanes diagram. |
| Redrawn phone chrome | Warn | Refused; the sample is drawn at the chart's own proportions. |
| Fake liveness | Warn | No pulsing dots or tickers; nothing moves by itself after load. |
| Cream ground with serif display | Warn | Ground is pre-dawn blue-black, chosen from when the app is used. |
| Metrics without sources | Block | Only "40 beaches" (from the brief); all sample numbers labelled as written for this page. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | h1 one line, lede + button right, chart with window, early-close label, slider and readout all in the first screen; legend at the fold. Full page shots/1440.png opened. |
| 768×1024 | shots/768-top.png | Menu button replaces wrapped links; h1 one line; chart full width, slider, readout below. Full page shots/768.png opened. |
| 390×844 | shots/390-top.png | h1 one line, five-second line, button, morning buttons, chart, slider and verdict line in the first screen. Full page shots/390.png opened. |

States captured in shots/states/ (1440 and 390): default, calm, swell, onshore-0800, after-reset, keyboard-end, plus 390-menu-open, 390-no-js, 1440-no-js, 390-reduced-motion; probe log in shots/states/log.txt.

## Checker result
- JSON: check.json
- Failures fixed: CO-01 (window label crossing the time line measured 3.16:1; labels now sit on solid chips); PF-07 missing apple-touch-icon (generated); 768 nav wrapping onto two lines (menu now collapses below 900px); no-JS phone nav sitting beside the brand.
- Warnings kept and why: ST-01, no price shown because the brief gives none (listed under To confirm). PF-07, og:image is relative (og.png) because no public host is confirmed; needs an absolute URL on deploy.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` failed with "npm error code ENOTFOUND" (no network, not installed).

## Checklist
The other 79 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | 390-top and 1440-top: "iPhone app for people who swim in the sea all year… reads the tide, wind, swell and water temperature… shows today’s swim windows". |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second read of 390-top: an iPhone app that shows when the sea at your beach lines up for a swim; click joins the beta. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero is the window chart computed from sample tide, wind and swell, with the product's readout. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubts 1–3 map to the chart, the lanes + your-call section, and the warning card + cove drawings (Product interpretation). |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero = what; lanes = mechanism; ledger = what it replaces; warnings = change after you check; your call = limits; beta = coverage and join. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists four defaults; no answers. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A (data portrait, dealt) and B (notation, dealt) differ on emphasis; defaults named and avoided. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | Neon, Daylight, Opal Electronics in References; departures listed under the table. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "an iPhone app for people who swim in the sea all year". |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Fields filled; "Too lumpy today?" is odd on a tide table or wind forecast page, which cannot answer it. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | e.g. "A window opens only when tide, swell and wind all agree" (picture, falsifiable, not a surf forecast's); "40 beaches in the UK and Ireland so far" (falsifiable, specific). |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | One phrase from the brief, "none yet" beyond it; h1 adapts "too lumpy today". |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "iPhone public beta. 40 UK and Ireland beaches so far." answers platform and coverage; cost unknown and kept off the page. |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Too lumpy today? / A window opens only when tide, swell and wind all agree / Three websites, a tide table and the group chat become one line / When a window closes early, Tidewise warns you / Tidewise shows the water. Getting in is your call. / 40 beaches in the UK and Ireland so far. |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | h1 renders on one line at 1440, 768 and 390 (measured: 1 line each). |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | Hero sized by content; no vh heights in styles.css. |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof supplied (brief: no reviews or download numbers); none shown. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Dawn = buttons, focus, your-time marker; glass = open window; coral = early close / no window. |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | Swim windows, early-close warning and the never-safe line are specific to Tidewise; competitor sentence fails (Statement). |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No Neon bar field, chapters or two-tone heads; no Daylight photo, pinned scroll or overlays; no Opal letter or photo. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | All :hover rules inside (hover: hover) and (pointer: fine); no staggers. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Four contracts under Hypothesis, Primary interaction. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | At 390 minor labels and alternate hour ticks drop, readout moves directly under the slider, lanes stack label over bar (shots/390.png). |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | `.readout` has role="status" aria-live="polite"; slider has aria-valuetext with the verdict. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | "40 beaches" from the brief; chart, ledger and warning numbers each labelled "written for this page". |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Label at the top of the artifact; "Sample line…" under the ledger; "Sample warning…" atop the card; "limits… made up for one imaginary cove" beside the lanes. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | "Join the public beta" links to the supplied beta URL; nav links reach their sections; artifact controls change the chart and readout. |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | Widths checked (1440/768/390); states in shots/states opened, including calm, swell and 08:00 outside-window. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section; shots/before/390-top.png vs shots/390-top.png. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass in Structural revision. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Nothing unverified; checker clean of block failures. |
<!-- checklist:end -->

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | No text inputs; set the slider value to "" via script | Browser sanitises to a valid time; readout stays a real verdict | n/a: the artifact has no text field, only buttons and a bounded slider |
| Out of range | Set slider to 5000 and to −40 by script, then input event | Clamped to 13:00 and 05:00, readout matches (log.txt) | pass |
| Nonsense | Set slider to "abc" | Browser sanitises to 09:00; readout and output agree | pass |
| Repeat | Clicked "Big swell" five times in a row | Same state and readout each time, no error (log.txt) | pass |
| Reset | Changed morning and time, pressed "Reset the sample" | Back to Wind turns onshore, 06:30, slider moved, focus stays on Reset | pass |
| Keyboard only | Enter on a morning button, Tab to slider, arrows and End | Focus never dropped; End gives 13:00 "Outside the windows" (states/*-keyboard-end.png) | pass |
| Phone | Operated all controls at 390 (checker MB-07 and states/390-*) | Chart redraws below the buttons; verdict directly under the slider, in view | pass |
| Reduced motion | Loaded with reduced motion (states/390-reduced-motion.png) | No rise-in or press scaling; full chart and copy at first paint | pass |
| Visitor's own input | Dragged to their own get-in times 05:00 (before window), 06:30, 08:00 (after early close) | Each reads correctly: next window opens 05:16; closes in 1 h 12 min; closed early at 07:42 with the wind reason | pass |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Centred headline over a framed screenshot | Warn | Not present: left headline row and an operable chart, not a framed image. |
| Every section has same width and padding | Warn | Lanes and ledger run full width; prose stays at 38rem; your-call and warnings vary composition. |
| Small tracked-caps label above every heading | Warn | None used. |
| Alternating split sections | Warn | Warnings and your-call are both two-column; kept because each pairs text with a drawing of the beach, but listed as a remaining weakness. |
| Scaled-down desktop on mobile | Block | Not present: phone recomposes the artifact (shots/390-top.png). |

## Structural revision
- Weakest explanation or most template-like decision: On phones the readout (the verdict a swimmer needs) sat below the chart key, off the first screen, so dragging the slider moved only a dot; the tabs plus Reset also wrapped to two rows.
- Change made (structure, not styling): Recomposed the artifact on phones: Reset moved from the tab row to the end of the readout; chart key moved below the readout; verdict placed directly under the slider; the how-to sentence of the sample label hidden on phones; beta line shortened. Desktop grid re-slotted so the key sits under the chart and the readout spans both rows.
- Before: shots/before/390-top.png
- After: shots/390-top.png
- Score after the change and what still keeps it from a 10: Variant A 8/10 overall (Composition 8, Proof 7). Still short of 10: sample data instead of real app output for a real beach, and system font stacks instead of a shipped display face.
- Removal pass (each decorative element → its job, or "removed"): sky tone steps in the chart → first light and sunrise times; surface chop → swell plus onshore wind; dashed ghost band → last night's window; you-dot ring → the visitor's time; section grounds lightening → morning arriving, page rhythm; dawn rule above the beta band → marks the action section; dashed Reset border → secondary control; sun circles in drawings → time of day; label chips → contrast over the chart. Removed: an on-chart "2.2 m sample limit" label (collided with the surface; moved into the key).

## Remaining weaknesses
- What a buyer still cannot judge: Whether their own beach is among the 40; what the app costs; what the real app screen looks like (no screenshots supplied); how limits are set per beach.
- What was not verified: The share card on a public URL (opened from disk); rendering on Safari/iOS with New York (rendered only in Chromium on Linux); Impeccable detect (not installed).

## Status
DONE
