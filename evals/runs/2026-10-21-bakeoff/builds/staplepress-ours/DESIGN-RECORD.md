# DESIGN-RECORD

Page: `index.html` (static, opens from disk, no network). Source: `work/src.html`, built by `node work/build.mjs` (it adds the generated halftone cover art). Share image `og.png`, `favicon.svg` and `apple-touch-icon.png` sit next to the page.

## Product interpretation
- Audience, category, business model, brand constraints: Independent artists and small-press publishers, usually on a laptop with their PDF open; one reader who is also the buyer. Small-run print shop (zines and art books, 25 to 500 copies), paid per run. No logo or brand files supplied; must feel made by people who run a press, not a print marketplace.
- Promise (who / what changes / how): Independent artists get 25–500 printed copies and see a photo of their real proof, straight off the press, within two working days and before anything is bound.
- Five-second line, quoted as shown in the first screen (who + what): "Zine and art-book printing for independent artists, 25 to 500 copies, with a photo of your proof within two working days."
- Current alternative, including doing nothing: A copy shop (prints small runs badly), a big online printer (1,000-copy minimums, no proof), or not printing the zine at all.
- The one advantage only this product has: A photo of the actual proof off the press before binding, at runs of 25 to 500.
- Category frame (existing, subcategory or new) and what it costs to teach: Existing category, "zine and art-book printing", with the subcategory "small run"; nothing to teach.
- Best-fit customer, and who it is not for: Artists printing 25–500 copies of an A5 black-ink zine from a finished PDF; not for runs of 1,000+, people without a print-ready PDF, or covers that need full bleed (not offered yet).
- Users' own words (three phrases with source, or 'none yet'): none yet. The brief supplies no interviews or reviews, and the 120 artists cannot be named or quoted.
- Biggest reason not to click, and the line that answers it: "What will it cost and will my file even work?" Answered beside the button by "From $2.10 a copy: 50 copies of a 24-page A5 zine in black ink." and by the "Check your PDF first" action.
- Conversion action and destination: "Upload your PDF" → https://staplepress.example/start (the only destination the brief gives).
- Visitor doubt 1 → artifact: "Will my PDF actually work as a stapled zine?" → the press check (section 2): reads the visitor's own PDF in the browser, counts pages into folded sheets, shows blanks, size and the cover-bleed limit.
- Visitor doubt 2 → artifact: "Will it come out badly like the copy shop?" → the proof sheet (hero) and the three-frame contact sheet: PDF → proof photo within two working days → bound.
- Visitor doubt 3 → artifact: "What does a small run cost?" → the job ticket: 50 × $2.10 = $105.00, with what costs more.

## Interview log
- Questions asked, each with the recommended default you offered: None could be asked (no one answers during this task). Defaults I would have offered: (1) Is there a sign-up or quote destination beyond /start? default: /start only; (2) Can we show any artist's work? default: no, the brief says so; (3) Is binding always saddle-stitch? default: say "bound" in claims, "stapled" only about our own test zine.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: The test zine shown is Staplepress's own invented "Press Test No. 7", so no artist's work appears; the four-pages-per-sheet rule is printing geometry, stated as such, not a new business claim.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Firecrawl (functional-entrance, desktop audit 2026-10-18/19): the operation field with modes changes the preview to structured output under the headline. Limit: desktop only, pale microtext, long page. | Show the input and output shape (your PDF in, folded sheets out) before any feature list. | Orange accent, mode tabs, developer copy, its 18-section length. |
| Brand composition | Nori (immersive-editorial, desktop audit 2026-10-19): the physical robot fills most of the opening field; price sits beside the order action. Limit: media playback failed; claims are the company's own. | Let one physical object (the proof sheet) dominate the first screen and put the price beside the action. | Sage field, cream badges, chunky NORI lettering, task tabs with video. |
| Counterexample | Opal Electronics (immersive-editorial, reference tier, audited 2026-10-20): one dated letter over a photo of the prototype table, no navigation, no button. | Attractive "made by craftspeople" register, but it leaves no path to act; Staplepress needs Upload on every screen, so keep the press voice and keep a working action. | The letter-as-homepage, the photo ground, dropping the CTA and nav. |

Departures from the functional-entrance recipe: display face is a Palatino stack, not a compact sans (the press's book-face register); the hero is an object portrait with the working tool in section two, as the skill's first-screen rule requires.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the proof sheet off the press; crop marks; registration targets; the grey step wedge; the slug line in the margin; imposition (which pages share a sheet); saddle-stitch staples through the fold; creep at the fore-edge; halftone dots of black ink; the job ticket; the proof photo; the 25–500 run range
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Staplepress" with seed 696364695: voice, character, object, canon.
- Chosen move and why, or canon and the buyer-risk reason: Object portrait. The product's differentiator is a physical object (the proof sheet) and artists judge print by eye; voice would need founder words we do not have, and a character would compete with the artists' own work.
- Idea sentence ("[inventory thing] becomes [the move]"): The proof sheet straight off the press, with its crop marks, step wedge and slug line, becomes an object portrait lit on the dark press-room ground.
- The same sentence with the nearest competitor, and why it fails: "A big online printer's proof sheet becomes an object portrait" fails: per the brief they never show a proof, and a copy shop's toner print has no press sheet or marks to show.
- Statement level (quiet, bold or loud) and why: Bold: the sheet owns the first screen; the sections below stay quiet and carry the proof (checker, contact sheet, ticket, rule).
- First viewport at 1440 (the poster: headline, sentence, buttons, the hero picture and its share of the screen, what moved to section two): Left column 620px: two-line h1 in Palatino at 68px, the five-second line, Upload (filled red) and Check your PDF first (outline), one price line. Right: the proof sheet over a second sheet, rotated −4°, about 55% of the screen, bleeding off the right edge. The next section's heading and lede peek in at the bottom. The working checker, sample label and limits moved to section two. Refused default: centred headline over a framed screenshot.
- First viewport at 390: Header with Menu; three-line h1 at 41px; sentence; full-width Upload and Check buttons; price line; the top third of the proof sheet showing below.
- Name test (the one with the …, eight words or fewer): the one with the proof sheet and crop marks

## Hypothesis
- Archetype and why: Functional entrance (input/output: your PDF in, folded sheets out), with an object-portrait hero. Visitors arrive with their PDF open, so the strongest proof is checking it here.
- Type roles, faces and why they fit this product: Display: Palatino stack ("Palatino Linotype", Palatino, "Book Antiqua", "TeX Gyre Pagella"), weight 400, a classic printer's book face that every major platform has. Text: humanist sans stack (Seravek, Gill Sans Nova, Calibri, Carlito) for labels and body. No mono: numbers use tabular figures. No font files could be shipped (no network, nothing to copy), so both stacks name platform faces; check-page TY-11 confirms they render as named.
- Composition and grid: 1200px wrap; hero split 620 / remainder with the picture bleeding right; check section 380px controls + wide press view; contact sheet 1 : 1.55 : 1; price split; rule full width.
- Ground, colour and material, and why this ground: Ink-black (#141519) for the press room in the hero, proof and final sections, so the white sheet reads as a lit object; uncoated-paper white (#f6f6f2, not cream) for the working sections. One accent, press red #c2301a, for the primary action, blank-page warnings and our run range on the rule.
- Signature artifact and its local behaviour: "Will your PDF fold into a zine?" press check (`data-signature`): open or drop a PDF (read locally with DecompressionStream for object streams; page tree count; MediaBox/TrimBox), or step the page count; it shows the verdict, blank pages, size against the starting price, the cover-bleed limit, a spine-end cross-section and every sheet's outside/inside pages.
- Signature on a phone (where the result shows after a tap): The verdict (role=status) sits directly above the file button and stepper; the sheet tiles update below. MB-07 confirmed every control's result is at least half on screen.
- Sample audit (counts, weekdays, states and stated rules agree): 24 pages = 6 sheets; sheet 1 outside 24|1, inside 2|23 … sheet 6 inside 12|13 (centre spread); 50 × $2.10 = $105.00; slug says "sheet 1 of 6"; no dates or weekdays anywhere.
- To confirm with the client (claims and terms kept off the page): where the proof photo is posted (email, account page?); whether the artist must approve before binding; binding methods for art books; maximum page count for stapling; whether $2.10 includes shipping and tax; prices for colour, other sizes and larger runs; hosting of og.png at https://staplepress.example/og.png; any contact address (none supplied, so none shown).
- Section sequence, with one section deliberately omitted: Hero → press check → contact sheet (how proofs work) → job ticket (price) → run-size rule (alternatives + 120 artists) → final action → footer. Omitted: testimonials/logos (no permission), FAQ.
- Primary interaction and motion purpose: Load: headline group rises 20px from 0.6 opacity, staggered 70ms; the sheet settles. Signature moment: in the contact sheet, frame 2 flashes like a camera and frame 3's sheet folds and is stapled once, when scrolled into view.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): Emphasis: the proof (unbound, with marks) versus the finished zine.
- Category default and anti-default this plan avoids: Default: white e-commerce printer page, product photo of booklets, blue "Get a quote" and a price table. Anti-default: cream ground, serif headline and an artisan letter with no action. The plan uses an ink-black ground with a lit press sheet and a working checker, which is neither.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Dark poster, two-line Palatino h1 left, the proof sheet with crop marks, step wedge and slug, rotated, bleeding right | Will I see it before it is bound? | 9 | 8 | 8 | 8 | 8 | A real photograph of the client's press sheet |
| B | Light poster, h1 above, the stapled zine open at its centre spread, large, centred | What will my zine look like? | 6 | 5 | 5 | 7 | 5 | Says nothing about the proof; any printer could show a finished zine |

- Chosen variant and why: A: it pictures the one thing competitors do not offer, and the hero sheet is the same object the checker and contact sheet use.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches the category default or the obvious anti-default | Block | Revised: dark press-room ground and a printed sheet, not white e-commerce or cream editorial. |
| Hero visual is decoration | Block | The sheet is the product's output, carrying real fields (pages 24 and 1, slug, marks). |
| A row of big stat numbers under the hero | Warn | Not planned: "120 artists" sits once as a sentence in its own section. |
| Redrawn browser or phone chrome | Warn | None: the PDF frame is a page with a folded corner, not a fake window. |
| Overused display face without a reason | Warn | Palatino is not on the overused list; chosen for the press register. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Two-line h1, buttons in the headline column, sheet bleeding right, next heading peeking; full page in shots/1440.png, states in shots/state-1440-default.png, shots/state-1440-zine-22pp-a5.png, shots/state-1440-cover-bleed.png, shots/state-1440-stepped.png |
| 768×1024 | shots/768-top.png | Single-column hero with sheet below; full page shots/768.png: checker stacks, contact sheet frames stack in order, rule uses the narrow axis |
| 390×844 | shots/390-top.png | Three-line h1, full-width buttons, top of the sheet visible; shots/390.png full page; states shots/state-390-*.png; open menu shots/menu-390-open.png |

## Checker result
- JSON: check.json
- Failures fixed: LY-04 (proof section padding override removed the gutter on phones), MB-09 (page-count field widened to 58px), PF-07 (favicon and apple-touch-icon files added), HR-08 (hero height and copy offset rebalanced; check-section lede moved beside its heading), HR-05 (hero shortened so the next section peeks in).
- Warnings kept and why: none; final run 83 passed, 0 block failures, 0 warnings.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` failed with "npm error network 'proxy' config is set properly" (not installed, no network).

## Checklist
<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | The five-second line names independent artists, 25–500 copies and a proof photo in two working days (shots/1440-top.png, shots/390-top.png). |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second test on both captures: zine printing, for artists, upload a PDF; the sheet reads as a print proof. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero is the press sheet itself with pages 24 and 1, crop marks and slug. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubts 1–3 map to the press check, the contact sheet and the job ticket (Product interpretation). |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero promise → file check → proof sequence → price → alternatives and the 120 artists → action; the two-day promise repeats only in the final action. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists three questions with defaults, no answer, proceeded. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A/B on emphasis, A is the dealt object move; defaults named. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | Firecrawl, Nori, Opal in References; recipe departures recorded under it. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "Zine and art-book printing for independent artists". |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | All named above; "See your proof before anything is bound." is false for printers that never show a proof. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | h1, "Will your PDF fold into a zine?", "Your proof, photographed straight off our press", "From $2.10 a copy for a 50-copy zine", "Between the copy shop and the 1,000-copy printer", "Send us the PDF you have open" each picture a thing and are falsifiable. |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet" recorded; no user words supplied. |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "From $2.10 a copy: 50 copies of a 24-page A5 zine in black ink." under the buttons. |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings alone: see the proof before binding; check your PDF folds; proof photographed off our press; from $2.10 a copy; between copy shop and 1,000-copy printer; send the PDF. |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | `.hero-grid` uses min-height calc(100svh − 276px) with a max, and content sizing below 900px. |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No permitted proof was supplied; the 120-artists count appears as a plain sentence with the permission reason. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Red is used on the Upload buttons, blank-page warnings and the verdict dot, and our run band on the rule; the price total was changed to ink. |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | A proof sheet, a proof-photo sequence and a 25–500 rule do not fit a 1,000-minimum printer or a copy shop. |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No mode tabs (Firecrawl), no sage field or badges (Nori), no letter-over-photo (Opal); all drawings are original SVG. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | Hover rules are inside `@media (hover:hover) and (pointer:fine)`; load stagger 70ms; nothing blocks input. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Load entrance, proof fold and button press contracts are listed under Structural revision → Motion contracts. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | Phone: verdict above controls, sheet tiles in two columns with 40px page boxes, rule switches to a 5-tick axis at 26px labels (shots/390.png). |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | `#verdict` is role=status aria-live=polite and carries every result and refusal. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | $2.10, 50, 24 pages, A5, 25–500, two working days, 1,000 and about 120 artists all come from the brief; $105.00 is shown as 50 × $2.10; the sheet numbers are computed from the visitor's input. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Top of the checker: "Sample: our 24-page A5 test zine."; the zine is called "our own press test" and "Our test zine" beside frame 3. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Upload links to https://staplepress.example/start; Check your PDF first scrolls to the working checker; every checker control changes the verdict. |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All listed PNGs opened; states captured: default, 22-page PDF, bleed PDF, stepped, at 1440 and 390. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Proof section rebuilt from a 200vh pinned stage into a three-frame contact sheet; shots/before-1440.png vs shots/1440.png. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass listed under Structural revision. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Status names the unverified share card. |
<!-- checklist:end -->

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | Cleared the page-count field | "Type a page count to check it." and the sheets keep the last valid count; blur restores the number | pass |
| Out of range | Typed 0, −3 and 5000; opened a 120-page PDF | "A zine needs at least 4 pages: one folded sheet." / "This planner stops at 96 pages." / "Your PDF has 120 pages. This planner stops at 96." | pass |
| Nonsense | Typed "abc"; opened a text file named .pdf | Field ignores letters and asks for a count; "That file isn’t a PDF." with a hand-entry fallback | pass |
| Repeat | Pressed − 30 times, double-clicked + | Stops at 4 with − disabled and focus handed to the field; double click adds two pages (4 → 7, "Page 8, the outside back cover, would print blank.") | pass |
| Reset | Reset after opening a PDF and after stepping | Back to 24 pages, sample label, file and size facts | pass |
| Keyboard only | Focused +, pressed Enter and Space | 24 → 26 with the verdict updating; check-page AX-12 and MB-07 pass | pass |
| Phone | Operated every control at 390×844 | Verdict sits above the controls and stays on screen (MB-07 pass); tiles 2-up | pass |
| Reduced motion | Loaded with prefers-reduced-motion: reduce | Checker has no motion; contact sheet shows the folded, stapled frame immediately (shots/proof-1440-reduced.png) | pass |
| Visitor's own input | Opened generated PDFs: 22 pp A5, 24 pp A4, 8 pp 154×216 mm | "Your 22-page PDF needs 6 sheets, leaving 2 blank pages."; A4 "Other sizes cost more than our starting price."; bleed file "We can’t print full-bleed covers yet…" | pass |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Cream ground with a serif display, chosen by default | Warn | Not cream: the paper ground is #f6f6f2 and the hero is ink-black; the serif is the press's book face (CO-03 passed). |
| Every section has same width and padding | Warn | Varied: bleeding hero, split check, 1 : 1.55 : 1 contact sheet, split ticket, full-width rule. |
| A built page indistinguishable from the last one | Warn | No earlier build in this project; house-style pass: dark object hero and Palatino are choices from this brief's press subject. |
| Pinned stage leaving an empty dark screen in captures | Warn | Fixed in the structural revision: the pinned 200vh stage became a contact sheet of stills. |

## Self-review
| Criterion | First score | What a 9 needs (for anything under 8) | After |
| --- | --- | --- | --- |
| Clarity | 8 | — | 8 |
| Fit | 8 | — | 8 |
| Distinctiveness | 7 | The proof photo, the core promise, has to be visible as a picture after the hero, not a pinned stage that is blank or empty in most captures. | 8 |
| Proof | 7 | Show the three states (file, proof photo, bound zine) as stills in one screen so the sequence reads without scrolling through a 200vh pin. | 8 |
| Craft | 7 | Remove the 1,000px void the sticky track leaves in full-page views; tighten the cross-section drawing. | 7 |
| Mobile | 8 | — | 8 |
| Honesty | 8 | — | 9 |
| Interaction | 8 | — | 8 |
| Copy | 8 | — | 8 |
| First screen | 8 | — | 8 |

- Designer's one-sentence read: A press-room poster with a convincing halftone proof sheet and a genuinely useful imposition tool; the pinned proof section was the weak, empty-looking middle and is now a contact sheet.
- Buyer's and founder's one-sentence read: I can check my own PDF's page count and size without uploading, I know the starting price and the cover limit, and the button says exactly where it goes.
- Engineer's one-sentence read: Single static file, no network, menu and checker work by keyboard and touch, the PDF reader fails safely on encrypted or non-PDF files; the halftone is generated at build time from work/build.mjs.

## Structural revision
- Weakest explanation or most template-like decision: The proof section: a 200vh pinned stage where the sheet printed, flashed and folded only while scrolling; in full-page and static captures it showed a blank sheet or a tall empty dark band, and the proof photo (the core promise) never appeared as a picture.
- Change made (structure, not styling): Replaced the pinned stage and step list with a three-frame contact sheet (PDF file → proof photo with viewfinder marks → folded, stapled zine), each frame a still with its caption; the signature motion became a one-time flash and fold when frame 3 enters view. Also added the section lede and changed the bound-step caption to describe only our test zine.
- Before: shots/before-1440.png
- After: shots/1440.png
- Score after the change and what still keeps it from a 10: 8/10 overall; a 10 needs a real photograph of the client's press and proof, and a stronger drawing in the checker's cross-section.
- Removal pass (each decorative element → its job, or "removed"): step wedge, crop and registration marks, slug → identify the sheet as a press proof; second sheet under the hero sheet → depth and "a run, not one copy"; drop shadows → one light on paper objects only; ticket staple → ties the ticket to the brand's staple; viewfinder brackets → mark frame 2 as a photo; camera flash → causality of "photographed"; verdict dot → warning state; removed: the scroll-scrubbed ink wipe (blank sheet in captures), the pinned 200vh track, the red price total (accent was decoration there).

Motion contracts (MO-08):
- Load entrance: trigger page load; headline, sentence, actions and beside line rise 20px from opacity 0.6, the sheet settles from 24px and 1.5°; purpose hierarchy; fallback fully visible static; 800–1000ms, 70ms stagger, cubic-bezier(.16,1,.3,1); removed under reduced motion.
- Proof fold: trigger frame 3 reaching 60% in view, once; frame 2 flash (opacity) then the left page rotates behind the cover (rotateY) and staples fade in; purpose explanation of "then bound"; fallback the finished folded zine (default CSS, no JS, reduced motion); 1900ms, cubic ease-out.
- Buttons: press scale 0.97 over 150ms ease-out; hover colour only on fine pointers.

## Remaining weaknesses
- What a buyer still cannot judge: real print quality (no photograph of an actual proof or press is supplied), prices beyond the starting configuration, where the proof photo arrives and turnaround after the proof.
- What was not verified: the share card on a public URL (og.png must be hosted at https://staplepress.example/og.png; checked from disk only); rendering on macOS and Windows, where the Palatino and Seravek/Calibri stacks resolve to the platform faces rather than TeX Gyre Pagella and Carlito used here; the PDF reader on PDFs from InDesign/Affinity (tested on Chromium-generated PDFs).

## Status
DONE_WITH_CONCERNS: share card only verified from disk (og.png must be hosted on staplepress.example); fonts verified on Linux only; PDF reader tested on Chromium-made PDFs, not InDesign or Affinity exports.
