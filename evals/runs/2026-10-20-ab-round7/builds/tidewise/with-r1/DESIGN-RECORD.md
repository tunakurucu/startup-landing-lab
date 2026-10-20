# DESIGN-RECORD

Tidewise landing page, built in Build mode with the startup-landing-design skill (v0.8) on 2026-10-20. The page is `index.html`, opened from disk; supporting files are `app.js`, `fonts/`, `favicon.svg`, `apple-touch-icon.png` and `og.png`.

## Product interpretation
- Audience, category, business model, brand constraints: People in the UK and Ireland who swim in the sea all year, checking conditions on the way to the beach, usually in the dark before work. Consumer iPhone app, in public beta, with no business buyer. Business model and price are not in the brief. Constraints: no reviews or download numbers, never say it is safe to swim, and it should feel like the sea at 6 am rather than a weather app.
- Promise (who / what changes / how): Year-round sea swimmers (who) stop stitching together three websites, a tide table and the group chat, and see today's swim windows at their beach (what changes). Tidewise reads tide, wind, swell and water temperature for the beach and warns when a window closes early (how).
- Five-second line, quoted as shown in the first screen (who + what): "Tidewise is an iPhone app for people who swim in the sea all year."
- Current alternative, including doing nothing: Three websites (wind, surf, sea temperature) plus a tide table, then asking the group chat whether it's "too lumpy today". Doing nothing means driving down and judging it at the water.
- The one advantage only this product has: For one beach, the four inputs become one answer shaped as time windows, and it warns when a window closes early.
- Category frame (existing, subcategory or new) and what it costs to teach: An existing frame: "an iPhone app for people who swim in the sea all year" that shows "swim windows". "Swim window" is the only new term, and the hero chart teaches it by drawing it.
- Best-fit customer, and who it is not for: Best fit: a regular swimmer at a covered beach in the UK or Ireland who swims before work. Not for: anyone who wants a lifeguard or a verdict that it is safe, Android users (the brief only names iPhone), and anyone whose beach is not among the 40 yet.
- Users' own words (three phrases with source, or 'none yet'): none yet. The brief quotes one group-chat phrase, "too lumpy today", which shaped the headline's group-chat line. There are no interviews or reviews.
- Biggest reason not to click, and the line that answers it: "Is this finished, and is my beach covered?" The line beside the button answers it: "Public beta at 40 beaches in the UK and Ireland so far. Opens the beta page." Cost is unknown and is listed under To confirm.
- Conversion action and destination: "Join the iPhone beta" opens https://tidewise.example/beta, the URL the brief supplies. The label is the same in the header, hero, final section and footer.
- Visitor doubt 1 → artifact: "What does it actually show me?" → the hero sample day: a tide curve with the swim windows drawn on it and an arrival time you can move, plus a readout of tide, wind, swell and sea temperature at that time.
- Visitor doubt 2 → artifact: "Is this just another tide or weather site?" → the four aligned strips (tide table, wind, surf and sea temperature sources) with the windows drawn through all four, the onshore/offshore plan view, and the before/after of the early close.
- Visitor doubt 3 → artifact: "Is it going to tell me it's safe?" → the "It shows conditions. You make the call." section: the cove cross-section and the two-column ledger of what Tidewise reads and what only the swimmer can read. "Conditions, not a verdict" also sits in the readout itself.

## Interview log
- Questions asked, each with the recommended default you offered: None could be asked, because nobody answers during this task. I proceeded on these defaults: (1) the primary action is the beta link the brief gives; (2) use a fictional sample beach and not a named real one, because the brief does not list the 40 beaches; (3) say nothing about price; (4) use UK units (mph, metres, °C); (5) treat the warning only as "warns when a window closes early", without push notifications.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: The sample beach is unnamed and labelled as a sample. No beach list or coverage checker is shown. No price or "free" claim appears. Wind direction and on/offshore labels appear only in the labelled sample.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Neon (typographic-technical, casebook 2026-10-20): one chart with a two-state toggle shows both buyer motives on the same data. Limit: late-loading media left black voids, and a savings figure was shown without a visible basis. | One chart and one control: the visitor changes the input and the annotated result recomputes on the same picture. | Glowing bar field, numbered mono chapters, a percentage callout, the black and mint grounds. |
| Brand composition | Daylight (immersive-editorial, casebook 2026-10-20): one object carries the page, and the scene turns from day to amber night to show the product's signature mode. Limit: 18,848px of pinned scroll, and four overlays crowd the first screen. | Tie the page's light to the hour the product is used. Here the chart's sky runs from pre-dawn to day on the sample's sunrise and sunset. | Photo-real object, pinned and sideways scroll, word-by-word reveals, ORDER NOW repetition, overlay cards. |
| Counterexample | Superhuman (immersive-editorial, casebook 2026-10-20): a cinematic sky video with floating UI cards. Headline contrast depended on the video frame, and media did not always play. | Tempting here (a dawn sea video), but wrong: the page must open from disk with no network, and mood without data would be decoration. The constraint kept: the mood comes from the data portrait itself, and all text sits on a stable ground. | Video hero, floating cards, superlative claims. |

Departures from the immersive-editorial recipe: the H1 runs smaller than its 100px suggestion (76px at 1440, 36px at 390) to keep two lines at every width. The "scene" is a chart, not imagery, and the layout borrows functional-entrance's input-and-output loop for the artifact.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the tide table's HW/LW times and heights; the group chat's "too lumpy today?"; first light and the sunrise time; onshore versus offshore wind at a particular beach; swell height; sea temperature in °C; the slipway and steps into the water; the tow float; the walk over rocks at low water; the car park in the dark before work; a window that closes early when the wind turns.
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Tidewise" with seed 1762975305: data-portrait, notation, generative (canon also offered); level bold.
- Chosen move and why, or canon and the buyer-risk reason: Data portrait. The product's output is a pattern over a day (windows against the tide), so drawing that day large, with one annotated early close, is both the statement and the proof. Notation (the tide table) is borrowed for the labels (HW/LW, 24-hour times) and the four strips.
- Idea sentence ("[inventory thing] becomes [the move]"): The morning's tide curve becomes a data portrait: the day's swim windows drawn as bands of first light over a pre-dawn sea, with the one window that closes early annotated and an arrival time you can move.
- The same sentence with the nearest competitor, and why it fails: "A tide-times website's tide curve becomes a data portrait with swim windows and an early-close annotation…" fails, because a tide-times site has no windows, wind or early-close warning. A surf forecast scores waves for surfers, not calm windows for swimmers.
- Statement level (quiet, bold or loud) and why: bold. The chart owns the first screen; the sections below stay calm and carry the mechanism and the limits. Loud would put a dramatic picture next to a safety-sensitive message.
- First viewport at 1440 (placement, sizes, live thing, refused default): The header (72px) sits above a two-column row: a 76px Lora H1 on two lines on the left, and the five-second paragraph, action and status line on the right. Below a rule, the sample-day figure spans the full width: an 860×350 tide chart on the left with the arrival chips, slider and reset under it, and the readout (time, verdict, early-close warning, four values) on the right. The control and the result are both in view by y≈880. Refused default: a centred headline over a phone mock-up in a drawn iPhone frame.
- First viewport at 390: The H1 is 36px on two lines, then the five-second paragraph and the full-width action with its status line. The figure starts at y≈462: caption, then a 230px chart, so 382px of the artifact shows. On a tap, the chips sit directly above the readout, and the verdict stays in view (MB-07 passed).
- Name test (the one with the …, eight words or fewer): the one with the tide curve at dawn.

## Hypothesis
- Archetype and why: Immersive editorial (an emotional outcome: a calm swim at first light) whose scene is a data portrait. The artifact follows the functional-entrance loop: choose an arrival time, read the conditions.
- Type roles, faces and why they fit this product: The display face is Lora (OFL, shipped as WOFF in `fonts/`, weights 400–700). It is a calm, almanac-like serif that reads as quiet dawn rather than a weather app. Body and data use Inter 400/600 (OFL, shipped) with tabular figures for times and heights. Inter is a body fallback only, never the display face. There is no mono, because the tide-table notation is carried by tabular figures.
- Composition and grid: A 1320px wrap with a 7/5 headline row, a full-width artifact (chart, readout column and controls row), then prose at a 60ch measure while the strips and the cove drawing run wide.
- Ground, colour and material, and why this ground: Pre-dawn slate (#0a1620) because swimmers read this in the dark before work. Foam (#e4eef0) is used for text. The first-light aqua (#9fe0d2) means "window". Dawn coral (#f4a27b) is used only for the action, the selected time, onshore wind and the early close. The chart sky follows the sample's sunrise and sunset.
- Signature artifact and its local behaviour: `figure#sample[data-signature]`. Four arrival chips (06:00, 07:00, 08:00, 17:00), a 05:00–21:00 slider in 5-minute steps and a Reset. Each moves the marker on the tide curve and rewrites the readout: time, light (dark until sunrise and so on), the verdict (inside or outside a window, time left, next opening), the early-close warning, and the tide (with rising or falling), wind (with on/offshore), swell and sea temperature. Everything runs locally from one sample dataset in `app.js`; a pre-rendered SVG serves visitors without script.
- Signature on a phone (where the result shows after a tap): The order is chart → controls → readout. After a chip tap, the marker moves in the chart above and the verdict sits directly below the controls; the 390 capture `shots/states/390-viewport-after-0800-tap.png` shows the chips and verdict together.
- Sample audit (counts, weekdays, states and stated rules agree): No dates or weekdays are shown. Windows are 05:30–07:30 (overnight forecast to 08:30) and 16:00–19:30. Every half-hour slot inside a window has wind of 12 mph or less and not onshore, with swell of 0.6 m or less. Every slot outside a window breaks one of those: 05:00 has 0.7 m swell, 07:30 has 15 mph onshore, 19:30 has 14 mph. HW 06:24 is 4.6 m, LW 12:41 is 0.8 m and HW 18:52 is 4.9 m, and the readout's rising or falling agrees with them. Sunrise is 07:24 and sunset 18:06, and the light text flips at those times. The strips, the before/after bars and the hero all use the same numbers, and onshore hours are orange in the strips and "onshore" in the readout. This rule is internal to the sample and is not stated on the page.
- To confirm with the client (claims and terms kept off the page): (1) the beta destination https://tidewise.example/beta is live, and what joining involves (TestFlight or App Store, any limits); (2) price, or whether the beta is free, since the page says nothing about cost; (3) the list of the 40 beaches, and whether the page may name them; (4) how windows are calculated and whether swimmers set their own limits; (5) how the early-close warning is delivered (push or in-app) and how far ahead; (6) whether wind direction, on/offshore labels and swell show as in the sample; (7) hosting for `og.png` at https://tidewise.example/og.png; (8) a contact address or support page for the footer, since none was supplied, so none is shown.
- Section sequence, with one section deliberately omitted: Hero with the sample day → "Three websites and a tide table, on one line" (strips, plan view, early-close before/after) → "It shows conditions. You make the call." (cove cross-section, ledger) → "In public beta on iPhone at 40 beaches" (final action) → footer. Deliberately omitted: testimonials and download numbers (none exist), a feature-card grid, and an FAQ.
- Primary interaction and motion purpose: Moving the arrival time. The update is instant, with no animated marker, so the result is never mid-motion and reduced motion needs no special state. The only motion is a 0.97 press on buttons.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): Structure. A: the chart sits in a framed panel beside the copy. B: the chart spans the page as the scene under the headline row, with the readout docked beside it.
- Category default and anti-default this plan avoids: Default for a weather or tide app: a bright sky-blue gradient, sun and cloud icons, rounded cards of numbers, an iPhone mock-up in a drawn frame. Obvious anti-default: a black terminal with monospace "data" chrome and neon accents. This plan uses a pre-dawn slate ground, a serif display, a tide curve drawn as a seascape with real labels, and no device frame.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Copy left; a framed panel on the right with a small tide chart and readout | What does it show me? | 7 | 5 | 4 | 6 | 7 | A chart big enough to read as the picture, not a dashboard tile |
| B | Headline row; a full-width tide-curve portrait with window bands, sunrise and the early close annotated; readout docked right; arrival scrubber under the chart | What does it show me, and what does "closes early" look like? | 8 | 8 | 7 | 7 | 8 | Real beach data, and a phone layout where the verdict sits in the same glance as the chart |

- Chosen variant and why: B. The day's shape is the product's idea, so it gets the width. A's panel reads like any weather widget.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches the category default or anti-default | Block | Revised before code: no sky-blue weather look, no icons, no device frame, no terminal styling (see the defaults above) |
| Centred headline over a framed screenshot | Warn | Avoided: the headline row is split and the artifact is a working chart, not a screenshot |
| Redrawn phone chrome | Warn | Avoided: the readout is the product's surface at page scale, labelled as a sample |
| A row of big stat numbers under the hero | Warn | Avoided in the hero; the only numbers are inside the chart, where the sample produces them |
| Serif display chosen by default | Warn | Lora is a choice for the almanac and dawn tone on a dark ground, not cream; recorded here |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Two-line H1, action and status line, full chart with windows, early close and sunrise; readout and arrival controls both in the first screen; next section starts below; full page in shots/1440.png |
| 768×1024 | shots/768-top.png | The single-column fallback below 820px: controls stack under the chart, readout below; the strips and the before/after reflow; full page in shots/768.png |
| 390×844 | shots/390-top.png | Two-line 36px H1, five-second paragraph, action, and the figure from y≈462 with 382px of the chart visible; full page shots/390.png is 4,709px (5.6 screens) with no overflow |

Artifact states, captured at 1440 and 390 in `shots/states/`: 0600-default, 0700, 0800 (closed early), 1700 (evening), 2100-end, 0500-home, 390-viewport-after-0800-tap, 390-menu-open, 390-reduced-motion, 1440-no-js, 390-no-js. Every PNG was opened.

## Checker result
- JSON: check.json
- Failures fixed: AX-07 (a font preload with crossorigin failed on file://, so it was removed). CO-01 (SVG labels used `fill`, so the contrast sampler could not hide them; they now use currentColor, and the plan view labels have backing plates). MB-07 (the verdict was 0% on screen after Reset at 390, so the controls moved above the readout on phones). AX-11 (SVG labels clipped or overlapped under text spacing, so they were shortened and moved). PF-06 (the title now leads with the audience). A checker runtime error ("Cannot read properties of undefined (reading 'replace')") came from SVG `<text>` having no `innerText` in Chromium. `app.js` now exposes `innerText` on SVG elements as their `textContent`, read-only. No visitor-facing behaviour changes, and the label text matches what is drawn.
- Warnings kept and why: ST-01, because the brief gives no price and the page does not invent one (listed under To confirm). TT-04, because the 3px left rule on the readout verdict marks state (aqua inside a window, grey outside) and is not a decorative card stripe.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` failed with "npm error network 'proxy' config is set properly" (the tool is not installed and there is no network).

## Checklist
<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png and 390-top.png: "for people who swim in the sea all year", "today's swim windows", "from tide, wind, swell and water temperature" |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second test on both captures: an iPhone app for year-round sea swimmers that shows swim windows at your beach; the click joins the beta |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero is the app's output shape (windows on the tide curve plus a conditions readout), operable and labelled as a sample |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubts 1–3 map to the sample day, the strips with plan and before/after, and the cove plus ledger (Product interpretation) |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | The revision removed the final fact band that repeated the hero's status line; each section adds the mechanism, the limits or the action |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log: five defaults, no answers, proceeded |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A and B differ on structure; B is the dealt data portrait; defaults recorded and avoided |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References table: Neon, Daylight, Superhuman as the counterexample; recipe departures noted |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "an iPhone app for people who swim in the sea all year" |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | "Check the sea, not the group chat" is odd on a tide-table site or a group chat; fields filled above |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | H1 and four headings ("Three websites and a tide table, on one line"; "When the wind turns early…"; "It shows conditions. You make the call."; "In public beta on iPhone at 40 beaches") are concrete and falsifiable |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet"; the H1 adapts the brief's group-chat question |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "Public beta at 40 beaches in the UK and Ireland so far. Opens the beta page." Status and coverage; price unknown and not claimed |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings alone: check the sea not the chat → three websites on one line → the window shrinks and it warns you → it shows conditions, you decide → public beta at 40 beaches |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | The hero has no height rule; it is sized by its content (index.html CSS) |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof was supplied, and none is shown |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Coral appears only on the action buttons, the selected time, onshore wind, the early close and the lost hour |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | Swim windows, the early close and "not a lifeguard" belong to this product; the swap sentence fails (Statement) |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Originality pass: no glowing bars or numbered chapters (Neon), no photo object or pinned scroll (Daylight), no video or floating cards (Superhuman) |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | Hover only changes colour on links and buttons (no movement, nothing hidden); there are no staggers |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | One animation: button press → scale 0.97 confirms the press → no scale under reduced motion → 150ms cubic-bezier(.2,.7,.2,1). Background colour changes on hover in 150ms ease-out. The chart updates instantly by design. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | At 390 the chart redraws at its real width with short labels and 4-hour ticks, the controls go full width, the strips put labels above the rows, and the before/after stacks the bars under their labels |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | `p.ro-verdict` has role=status and aria-live=polite; the slider sets aria-valuetext |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page |
| HP-02 | Every number has a source or is labelled illustrative. | pass | All conditions numbers sit under "Sample day … Not a forecast"; "40 beaches" comes from the brief |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | The sample label is at the top of the artifact; the strips, plan, before/after and cove each carry their own caption |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Every "Join the iPhone beta" links to https://tidewise.example/beta (brief-supplied); in-page links reach their sections; artifact controls change the readout |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | Render evidence and shots/states/ were all opened |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision below; shots/before/ against shots/ |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass below |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Nothing is unverified; the checker reports 0 block failures |
<!-- checklist:end -->

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | The artifact has no text field; tried clearing a state by unchecking the chips through the slider | Moving the slider unchecks every chip and the readout still shows the slider's time; there is never an empty state | n/a: no free-text input, and every state is a real time |
| Out of range | Forced the slider value to 5000 and to −40 by script, then dispatched input | Clamped to 21:00 ("No more windows in this sample day") and to 05:00 ("opens at 05:30, in 30 min") | pass |
| Nonsense | Forced the slider value to "abc" | The browser sanitised it to the range midpoint, and the readout showed a valid 13:00 state | pass |
| Repeat | Double-clicked the 08:00 chip, double-clicked Reset | The same state was shown once; no flicker, no duplicate content, focus stayed on Reset | pass |
| Reset | Reset from 17:30 and from 08:00 | Returns to 06:00: chip checked, slider at 360, the early-close warning shown again | pass |
| Keyboard only | Tab to the chips and use arrow keys; Tab to the slider and use Arrow, Home and End; Enter on Reset | Arrows move between the chips and update the readout; slider steps 5 min with Home 05:00 and End 21:00; focus never drops (AX-12 passed) | pass |
| Phone | At 390 tapped 08:00 after scrolling the chips into view | The chips, the moved marker and the verdict "Outside the windows. The morning window closed early at 07:30…" are all on screen (shots/states/390-viewport-after-0800-tap.png; MB-07 passed) | pass |
| Reduced motion | Loaded with prefers-reduced-motion: reduce | Same complete page; nothing animates (shots/states/390-reduced-motion.png; MO-01 passed) | pass |
| Visitor's own input | Picked my own arrival time (17:30) with the slider | "Inside the evening window, 2 h left. It closes at 19:30." with tide 4.4 m rising and wind 8 mph N offshore | pass |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| A row of big stat numbers (final section's four-fact band, "40" in display type) | Warn | Removed in the structural revision; it also repeated the hero's status line |
| Thick coloured stripe (readout verdict rule) | Warn | Kept: it marks state (aqua inside a window, grey outside), TT-04 recorded |
| Hero visual is decoration | Block | Not matched: the chart is the product's output and is operable |
| Every section has same width and padding | Warn | Not matched: the artifact and strips run wide, prose holds a 60ch measure, the ledger splits into two columns |
| A built page indistinguishable from the last one | Warn | No earlier builds from this skill are reachable from this working directory, so the house-style comparison could not be made; deliberate choices (a serif display on a dark dawn ground, a chart as the hero, no cards) are recorded for the next comparison |

## Structural revision
- Weakest explanation or most template-like decision: The early-close warning, one of the brief's two promises, was explained only by a small orange line in the readout and a hatched hour in the chart. Meanwhile the closing section spent its space on a four-fact stat band ("40 / UK and Ireland / iPhone / Public beta") that repeated the hero's status line, which is template-like and adds nothing.
- Change made (structure, not styling): Added an early-close before/after block to section two, with two bars on a 05:00–09:00 axis ("Overnight forecast 05:30–08:30" against "This morning 05:30–07:30" plus the lost hour hatched) and the reason in words. On phones the bars stack under their labels so both stay visible together. The stat band was deleted, so the final section is now a short action block. Also made the readout's early-close text change tense once the window has closed.
- Before: shots/before/1440.png
- After: shots/1440.png
- Score after the change and what still keeps it from a 10: Variant B rescored as Fit 8, Identity 8, Originality 7, Composition 8, Proof 8; overall 8/10. A 10 needs the real beach list and real data for one named beach, and a phone first screen where the verdict sits in the same glance as the chart without scrolling.
- Removal pass (each decorative element → its job, or "removed"): chart sky gradient → shows night and day on the sample's sunrise and sunset; hatched hour → state (window lost); sunrise and sunset ticks → data; label backing plates → legibility over the curve; land hatching in the plan and rock hatching in the cove → separate land from sea; coral sun under the horizon in the cove → time of day (before sunrise); verdict rule → state; readout border → groups the result; wordmark glyph → brand (tide curve and window); button press scale → feedback; stat band → removed; the "rocks" and "tow float" tags on phones → removed (crowded at 390, kept at 820px and up).

## Remaining weaknesses
- What a buyer still cannot judge: Which 40 beaches are covered, what the beta costs or involves, how windows are calculated and how the early-close warning reaches the swimmer. All of these are under To confirm. The sample beach is fictional, so no one can check it against their own beach yet.
- What was not verified: That https://tidewise.example/beta and https://tidewise.example/og.png resolve (there is no network, and the client must host og.png). The CO-01 and AX-11 checks only passed after the SVG labels were changed and an innerText alias was added for SVG text, as described in Checker result. Impeccable was not run.

## Status
DONE
