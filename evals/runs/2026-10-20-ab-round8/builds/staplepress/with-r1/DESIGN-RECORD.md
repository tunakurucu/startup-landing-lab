# DESIGN-RECORD

Page: `index.html` (static, opens from disk). Built in Build mode with startup-landing-design 0.9 on 2026-10-20.

## Product interpretation
- Audience, category, business model, brand constraints: Independent artists and small-press publishers, on a laptop with their PDF open; small-run printing (zines and art books, 25 to 500 copies), paid per copy; no existing brand, so the identity is drawn from the press room. Constraint: must read as made by people who run a press, not a marketplace.
- Promise (who / what changes / how): Independent artists printing 25 to 500 copies get to see their actual printed sheet before anything is bound, because the press posts a photo of the proof straight off the press within two working days of upload.
- Five-second line, quoted as shown in the first screen (who + what): "Staplepress prints zines and art books for independent artists, 25 to 500 copies, from your print-ready PDF."
- Current alternative, including doing nothing: a copy shop that prints small runs badly; a big online printer that needs 1,000 copies and never shows a proof; or not printing the zine at all.
- The one advantage only this product has: a photo of the real press proof within two working days, before binding, on runs as small as 25.
- Category frame (existing, subcategory or new) and what it costs to teach: existing category, "a small press that prints zines and art books"; costs nothing to teach; the proof photo is the only new idea and the hero artifact teaches it.
- Best-fit customer, and who it is not for: an artist or small press with a finished print-ready PDF and a run of 25 to 500; not for runs over 500, not for anyone who needs a full-bleed cover today, not for someone without a print-ready file.
- Users' own words (three phrases with source, or 'none yet'): none yet; the brief supplies no user quotes. The hero adapts the trade phrases artists use when sending files ("print-ready PDF", "proof").
- Biggest reason not to click, and the line that answers it: "Will I be stuck with a bad run I never saw?" plus cost; answered beside the button: "Within two working days we post a photo of your proof, straight off the press. From $2.10 a copy."
- Conversion action and destination: "Upload your PDF" → https://staplepress.example/start (supplied in the brief).
- Visitor doubt 1 → artifact: "What will I actually see before it's bound?" → the hero proof sheet: a flat press sheet with crop and registration marks that re-imposes for the visitor's page count and can be turned over.
- Visitor doubt 2 → artifact: "Will my file work?" → the same sheet's notes (page counts in fours, the page-number sum check, no full-bleed covers yet, marked in red on the cover) plus the nested-sheets cutaway drawing in "Reading a proof".
- Visitor doubt 3 → artifact: "What does it cost and is it for runs my size?" → the price slip (50 × 24-page A5, black on uncoated, $2.10 a copy, $105.00 for 50) and the corrected-proof comparison against the 1,000-copy minimum.

## Interview log
- Questions asked, each with the recommended default you offered: none could be asked (no one answers during this task). Defaults I would have offered: (1) binding is saddle-stitch (stapled) for zines: default yes; (2) the page may show $105 as 50 × $2.10: default yes, labelled as arithmetic on the starting price; (3) no founder names or contact details on the page: default none, since none were supplied.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: zines are stapled from folded sheets, so page counts run in fours (drives the artifact); the proof is approved by looking at the photo before binding (the docket says "look at the photo before anything is bound", not how approval is given).

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Cal.com (casebook, audited 2026-10-20): the hero holds a recreated booking page, the surface invitees will see, so visitors judge the output; limit: its chips and dates ignored clicks, so the artifact read as a dead picture. | Put the thing the customer will actually receive (here: the proof as it comes off the press) in the first screen, and make every control on it respond. | Its white rounded card on a grey ground, the OAuth sign-up pair, the star-rating rows and the release pill. |
| Brand composition | Meuze (casebook, audited 2026-10-20): one dot-matrix/halftone treatment held across photo, illustration, charts and logo, so very different content reads as one system; limit: a 4,050px pinned scroll track before the first explanation. | Hold one graphic language across the page: printer's marks (crop marks, registration targets, slug lines, red proof-correction marks) on the artifact, the drawings, the comparison and the price slip. | The dark halftone photography, the pinned scroll-driven scenes and uppercase nav. |
| Counterexample | Opal Electronics (casebook, audited 2026-10-20): one dated letter over a photo of the prototype table, no menu and no button; attractive "people who make things" voice. | Wrong here: an artist with a PDF open needs the upload action, the run sizes and the price in the first screen. Constraint kept: action, price and run size are visible without scrolling. | The letter-as-homepage, the photo ground, the absence of a call to action. |

Recipe: functional entrance (input → output, a labelled local example, one accent for action). Departures: the display face is a serif (Century Schoolbook) rather than a compact sans, because it is a printer's book face; the hero is a 5/7 split with the object on the right rather than a centred functional surface, because the object portrait owns the first screen; ground is proof-booth grey rather than a quiet white.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the press proof sheet; crop marks and fold marks; registration targets; the slug line printed outside the trim; printer's spreads (page 24 beside page 1); the imposition dummy with big page numbers; red proofreader's marks (delete, insert, margin note); the grey proof-viewing booth; the long-reach saddle stapler and its saddle; nested folded sheets with two staples through the fold; the job docket that travels with a run; a K (black) step wedge.
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Staplepress" with seed 696364695 (node scripts/deal.mjs "Staplepress" --seed 696364695): voice, character, object (canon exit), level bold.
- Chosen move and why, or canon and the buyer-risk reason: object portrait. The product's one advantage is a physical object (the proof sheet, photographed flat before binding), so it can be shown honestly at heroic scale with its real fields. Voice was weaker because the opinion ("copy shops print badly") is the brief's complaint, not a stance; a character would decorate a craft trade whose credibility is the print itself.
- Idea sentence ("[inventory thing] becomes [the move]"): The press proof becomes an object portrait: a flat, unbound sheet with crop marks, registration targets and a slug line, imposed for the visitor's own page count and turned over by hand.
- The same sentence with the nearest competitor, and why it fails: "A big online printer's press proof becomes an object portrait…" fails because they never show a proof; with a copy shop it fails because there is no press sheet or imposition, only finished copies.
- Statement level (quiet, bold or loud) and why: bold (dealt default). The first screen belongs to the sheet; sections below stay quiet and carry the drawings, the corrected-proof comparison and the price, reusing the same marks.
- First viewport at 1440 (placement, sizes, live thing, refused default): left five columns: h1 at about 80px Century Schoolbook bold in two to three lines, five-second line at 20px, red "Upload your PDF" button with the proof/price line beside it; right seven columns: the proof sheet about 700px wide on the grey booth ground with marks and slug line, readout and controls below it; the next section's paper band shows at the fold. (Revised after render: readout and controls moved under the copy in the left column on a subgrid, sheet widened to about 718px; see Structural revision.) Refuses: a centred headline over a stack-of-booklets photo with a quote calculator.
- First viewport at 390: wordmark and Menu; h1 at 38px in two lines; five-second line in four lines; the button full-width with its line; the proof sheet starts by about y = 470 and at least 280px of it shows; readout and controls follow directly under the sheet so a tap and its result share one screen.
- Name test (the one with the …, eight words or fewer): the one with the turnable press proof sheet.

## Hypothesis
- Archetype and why: functional entrance with an object portrait: the visitor sets one input (page count) and sees the output (their imposed proof sheet), which is the press's real deliverable.
- Type roles, faces and why they fit this product: one family for display and text: Century Schoolbook (stack "Century Schoolbook", "TeX Gyre Schola", "C059", Georgia), the sturdy textbook face of American job and book printing, bold for headlines, regular for text; Courier New only for the slug line and docket codes, which are real printer's notation. No Inter/Fraunces/Space Grotesk.
- Composition and grid: 12-column grid, max 1320px; hero 5/7 split with the object right; later sections vary: docket (ruled table), split drawing + text reversed, corrected proof (single column with margin marks), price slip (narrow ticket beside text), press (drawing + text), closing action.
- Ground, colour and material, and why this ground: proof-booth grey (#c9cac6, the neutral grey printers judge proofs under) for the hero and closing band; uncoated white stock (#f7f6f1) for the paper sections; ink near-black #161616; one accent, proofreader's red #b3121f, used only for the primary action and for proof marks that flag a state (cover margin, corrections).
- Signature artifact and its local behaviour: `data-signature` proof sheet (inline SVG + HTML readout): page-count field with −4/+4, previous/next sheet, "Turn over", "Reset". Redraws the printer's spreads for 4–64 pages, rounds odd counts up to whole sheets with labelled blank pages, shows the n+1 sum check, flags the cover margin and the centre spread. Labelled "Sample sheet drawn for this page — not a customer's work".
- Signature on a phone (where the result shows after a tap): sheet on top, readout (role=status) directly under it, controls directly under the readout; the whole artifact is about 520px tall so any control and the redrawn sheet are on one screen.
- Sample audit (counts, weekdays, states and stated rules agree): 24 pages → 6 sheets; sheet i outside = (25−(2i−1)) and (2i−1), inside = 2i and (25−2i); every pair sums to 25; centre spread is sheet 6 inside (12 and 13); blanks only appear when the count is not a multiple of four; no dates or weekdays on the page.
- To confirm with the client (claims and terms kept off the page): binding method(s) for zines and for art books; maximum page count; how a proof is approved and how changes work; turnaround after approval and shipping; whether $2.10 includes shipping or tax and any minimum order; prices for colour, other sizes and other runs; where the proof photo is posted (email, account page); cover margin width while full-bleed is unavailable; contact address; hosting of og.png and apple-touch-icon.png at staplepress.example; self-hosting TeX Gyre Schola (GUST licence) as woff2 so every visitor gets the same face.
- Section sequence, with one section deliberately omitted: hero (proof sheet) → the run docket (upload to proof photo) → reading a proof (cutaway of nested sheets) → the corrected proof (vs copy shop and 1,000-copy printer) → price slip → the press (about 120 artists, stapler drawing) → closing action → footer. Omitted: testimonials and a customer gallery (no permission to name artists or show work).
- Primary interaction and motion purpose: the visitor changes the page count and turns the sheet over; the only motion is the turn-over (a 280ms scaleX flip that shows it is the same sheet's other side), skipped under reduced motion and for keyboard presses.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): emphasis: the object (the proof sheet) versus the voice (a typographic opinion).
- Category default and anti-default this plan avoids: default for a printing service: white page, blue buttons, stock photo of stapled booklets, a dropdown quote calculator, "trusted by 10,000 creators" and star ratings. Anti-default for zines: risograph pink-and-teal overlays, photocopy grain, ransom-note cut-out type and a handwritten font. The plan is neither: a grey proof booth, a printer's book face, crop marks and red proof marks.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Object portrait: h1 + five-second line + action left; the operable proof sheet (marks, slug line, page-count and turn-over controls) right at about 700px | What will I see before it's bound, and will my pages land right? | 8 | 8 | 7 | 8 | 8 | A real proof photo from the press (with permission) beside the drawn sheet, and the sheet reading as paper rather than a diagram |
| B | Voice: "Copy shops print it badly. Big printers want 1,000. We print 25." set large across the screen; the proof sheet cut by the fold below | Why not the copy shop or the online printer? | 6 | 6 | 6 | 7 | 4 | The proof in the first screen; an opinion of the founders' own rather than the brief's complaint |

Score each dimension 0–10.

- Chosen variant and why: A. It puts the one advantage (the proof, before binding) in the first screen as an operable object; B argues against competitors and pushes the proof below the fold.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches the category default or the obvious anti-default | Block | Both defaults written above; plan uses booth grey, Schoolbook and printer's marks instead. |
| Cream ground with a serif display, chosen by default | Warn | Ground is neutral booth grey and white stock, not cream; the serif is Century Schoolbook for a stated product reason (a printer's book face). |
| Hero visual is decoration | Block | The hero is the proof sheet the service sells, operable and labelled as a sample. |
| Three equal adjective cards | Block | None planned; sections are a docket, a cutaway, a corrected proof, a price slip and a drawing. |
| Small tracked-caps label above every heading | Warn | Not planned; mono caps appear only in the slug line and docket codes, which are notation. |
| Section numbers on content that is not a sequence | Warn | Only the docket is numbered, and it is a real sequence. |
| A row of big stat numbers under the hero | Warn | None; the one count (about 120 artists) sits in its own sentence, sourced to the press's own count. |
| Control without destination/result | Block | Every artifact control redraws the sheet or the status; the only link out is the brief's upload URL. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Opened: 1440 wide, not blank. h1 in two lines, five-second line, red action and its line in the left column; readout and controls under them; the proof sheet (about 718px wide) owns the right column; job ticket of the next section shows at the fold. Full page in shots/1440.png. |
| 768×1024 | shots/768-top.png | Opened: 768 wide. Single column; the sheet spans the width with readout and the 4-button row under it; ticket sits above the docket; footer stacks (fixed after a squeezed two-column footer at 768). Full page in shots/768.png. |
| 390×844 | shots/390-top.png | Opened: 390 wide. h1 two lines, five-second line, action and line; sheet starts at y≈525 with 300+px visible; menu button at right. Full page shots/390.png (about 6,060px, 7.2 screens). |

Artifact states (all opened): shots/states/1440-*.png and shots/states/390-*.png for default, turned, centre-spread, wrap-to-1, plus-28, 26-blanks, prev-wrap-last, empty, out-of-range, negative, nonsense, reset, min-bound, max-bound; 390-reduced-turned.png and 390-nojs.png. Before-revision renders: shots-before/.

## Checker result
- JSON: check.json
- Failures fixed: CO-01 (SVG labels painted with `fill` were sampled as their own background; switched to `fill: currentColor`); AX-11 (cutaway labels clipped or overlapping under WCAG text spacing; shortened and moved); a checker runtime error from SVG `<text>` in the first screen (no `innerText`), fixed by setting the page numerals as HTML laid over the sheet; PF-07 (apple-touch-icon.png and og.png generated); TT-04 (side stripes on the readout and margin inserts removed); HR-08 after the revision (run section top padding and heading alignment tightened). Final: 80 passed, 0 block failures, 1 warning.
- Warnings kept and why: PS-06 lists the artifact's own controls (−4/+4 pages, Previous/Next sheet, Turn over, Reset sample) as extra actions; they are the signature artifact's controls, not competing conversion actions; the only conversion action is "Upload your PDF", worded identically in the nav, hero, docket link, closing band and footer.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` failed with "npm error network 'proxy' config is set properly" (no network, package not installed).

## Checklist
The other 81 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png and 390-top.png: "for independent artists, 25 to 500 copies"; "see your proof before we staple"; "within two working days we post a photo of your proof". |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second test on the captures: a printer for small zine and art-book runs that shows you a photo of the printed proof first; click uploads your PDF. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero is the deliverable itself, a flat proof sheet with crop/registration marks, imposed for the visitor's page count; labelled as a sample. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubt 1 → proof sheet; doubt 2 → sheet notes plus nested-sheets cutaway; doubt 3 → job ticket ($2.10, $105.00 for 50) and the corrected galley vs the 1,000-copy minimum. |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Docket = sequence and timing; cutaway = why pages pair; galley = vs alternatives; press = who and the permission limit. The repeated full-bleed sentence in "Reading a proof" was cut in the revision; the closing line restates it once beside the action as a limit. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists three questions with defaults; no answer, defaults used. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A (object) and B (voice), axis emphasis, scored before code; both defaults written and avoided. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | Cal.com (explanation), Meuze (composition), Opal Electronics (counterexample); recipe departures listed under References. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "Staplepress prints zines and art books for independent artists, 25 to 500 copies". |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | All named in Product interpretation; "See your proof before we staple" is false for a printer that never shows a proof and odd for a copy shop. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | Headings: "From upload to a photo of your proof in two working days", "On your proof, page 24 sits next to page 1", "A proof on runs of 25, not a 1,000-copy minimum", "About 120 artists have printed with us since last year", "Upload the PDF; see your proof in two working days", "$2.10 a copy": each is concrete and falsifiable. |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet" recorded; hero adapts the trade phrases "print-ready PDF" and "proof". |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | Beside the button: "Within two working days we post a photo of your proof, straight off the press, before anything is bound. Prices from $2.10 a copy." |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Read in order the headings give: see the proof before stapling; proof photo in two working days; $2.10 a copy; page pairing on the proof; 25 not 1,000; 120 artists; upload. |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | Hero has no height; it is sized by its content (src/page.html `.hero`). |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | pass | The only supplied proof, "about 120 artists since last year", is a section heading with the permission limit beside it; no quotes used. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Red is used on the upload buttons, the cover-margin marks on the sheet (state: no full bleed), error status text, and proof-correction marks in the galley; the staple in the stapler drawing is the one flagged object. |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | A 1,000-copy online printer or a copy shop could not use a page whose hero is their own unbound proof sheet; swap sentence fails (Statement). |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Originality pass: no white rounded card or sign-up pair (Cal.com), no halftone photography or pinned scroll (Meuze), no letter-over-photo (Opal). |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | All `:hover` rules are inside `@media (hover:hover) and (pointer:fine)`; no staggers. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contracts in the Hypothesis addendum below (turn-over flip, button press, colour transitions). |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | At 390 the sheet goes full width, readout under it, controls in a 2×2 grid of 44px buttons; at 1440 the controls move beside the copy on a subgrid. |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | `#status` has role=status and aria-live=polite; every control rewrites it. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page; the press section says why. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | $2.10, 50, 24 pages, 25–500, two working days, about 120 artists, 1,000 copies come from the brief; $105.00 is shown as "50 × $2.10"; sheet numbers belong to the labelled sample. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | "Sample sheet drawn for this page, not a customer's work" sits at the top of the artifact; slug line says SAMPLE. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | "Upload your PDF" → https://staplepress.example/start (from the brief); artifact controls each redraw the sheet or status (MB-07 passes, 7 controls). |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All three widths opened; 768 checked (footer fix); 30 state captures in shots/states/. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | See Structural revision: hero recomposed on a subgrid, ticket moved, sample pages reprinted in solid black; shots-before/ vs shots/. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass listed under Structural revision. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Nothing above is unverified; checker clean; status follows verify-record. |
<!-- checklist:end -->

## Artifact stress test
Operate the signature artifact the way a curious, impatient or careless visitor would, at 1440 and 390. One row per probe; `n/a` needs the reason (an artifact with no input has no empty-input probe). A `fail` is fixed before the status can be DONE.

| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | Cleared the page-count field and pressed Enter (1440 and 390) | Status: "Type a page count from 4 to 64 to redraw the sheet."; the last sheet stays drawn; on blur the field refills with the current count | pass |
| Out of range | Typed 500, then -8 | "This sketch draws 4 to 64 pages, so 500 is outside it. The sheet still shows 26 pages (28 with blanks)." and "A zine can't have -8 pages…"; sheet unchanged; −4 at 4 and +4 at 64 explain the bound | pass |
| Nonsense | Typed "abc", and the checker typed "Test 42"; pasted a 200-character string | "“abc” isn't a page count. Type a whole number from 4 to 64."; maxlength 3 keeps long input to 3 characters; no sideways scroll (LY-08 passes) | pass |
| Repeat | Double-clicked Turn over; pressed Next sheet five times past the end | Two turns land back on the outside; Next wraps from sheet 6 to sheet 1 and Previous from 1 to the last sheet, so no button disables or drops focus | pass |
| Reset | Changed to 26 pages, inside of sheet 7, then Reset sample | Returns to 24 pages, sheet 1, outside, field shows 24 | pass |
| Keyboard only | Focused +4 and pressed Enter, tabbed on, Space on Turn over | Sheet redrawn to 28 pages, focus moves to Previous sheet, turn swaps at once (keyboard presses skip the animation), focus stays on the button; AX-12 passes | pass |
| Phone | Operated every control at 390×844 (checker and shots/states/390-*.png) | Sheet, readout and controls fit in one screen; every result in view (MB-07 passes); controls 44px or larger (MB-09 passes) | pass |
| Reduced motion | Loaded with prefers-reduced-motion: reduce and pressed Turn over | Swap is immediate, no animations running (getAnimations().length = 0); shots/states/390-reduced-turned.png | pass |
| Visitor's own input | Typed 26 (a non-multiple of four) and 28 | 26 draws seven sheets with pages 27–28 marked blank and a note that the artist chooses where blanks go; 28 draws seven full sheets, 28 + 1 = 29 check | pass |

Motion contracts (MO-08):
- Turn over: pointer click on "Turn over" → the sheet scales to a sliver on X (110ms, cubic-bezier(.3,0,.8,.15)), swaps sides, and opens again (170ms, cubic-bezier(.2,.7,.2,1)); purpose: show it is the other side of the same sheet; fallback: instant swap for keyboard presses and reduced motion; status text swaps immediately.
- Button press: :active → scale .97 over 150ms ease-out; purpose: confirm the press; fallback: none needed (removed under reduced motion).
- Hover/colour: background-color 120–150ms ease-out on buttons, behind hover:hover and pointer:fine.
- Nothing moves by itself; no entrances, no scroll motion.

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Cream ground with a serif display | Warn | Ground measured as neutral grey #c9cac6 (CO-03 passes); Century Schoolbook kept for its printing-trade reason. |
| Every section has same width and padding | Warn | Varied: hero subgrid, docket full-width table with ticket beside the heading, split drawings reversed between sections, galley full width, closing band; run section has tighter top padding so the ticket shows at the fold. |
| Shadow is the only depth system | Warn | One shared light on the sheet and drawing cards (paper lying on the booth); everything else uses rules and ground changes. |
| Small tracked-caps label above every heading | Warn | Not present; mono caps appear only in the slug line, the docket header, the ticket header and the galley source labels, all notation. |
| Thick coloured stripe repeated on cards | Warn | Removed the readout's left stripe and the galley insert stripe (TT-04 now passes). |
| Hero visual is decoration | Block | Not triggered: the hero is the operable proof sheet. |

## Self-review
Score from the screenshots and the operated page, as the strictest of a senior designer, the brief's buyer and founder, and the engineer who maintains it. 1–10; 10 only when nothing is left to improve. "After" is the score once the structural revision is rendered.

| Criterion | First score | What a 9 needs (for anything under 8) | After |
| --- | --- | --- | --- |
| Clarity | 8 | | 8 |
| Fit | 7 | Art books have no answer of their own (binding, page counts); the brief gives none, so this stays a client question; also the price needs to sit where an artist comparing printers looks, beside the run steps | 8 |
| Distinctiveness | 7 | The sample pages read as a grey wireframe; print them in solid black so the sheet looks like a black-ink zine off the press, and give the object more of the first screen | 8 |
| Proof | 7 | A real photo of a proof from this press (the press's own test job) beside the drawn sheet; nothing on the page shows actual print quality | 7 |
| Craft | 6 | 1440: a 140px gap in the left column between the action line and the ticket, controls squeezed under a 607px sheet, and three heavy boxes competing; recompose so the controls sit under the copy and the sheet takes the right column | 8 |
| Mobile | 8 | | 8 |
| Honesty | 9 | | 9 |
| Interaction | 8 | | 8 |
| Copy | 8 | | 8 |
| First screen | 7 | The object is under 30% of the 1440 screen and the ticket competes with it; make the sheet the one dominant element | 8 |

- Designer's one-sentence read: A coherent press-room page whose proof sheet, crop marks and red proof marks carry through every section; after the revision the sheet is the clear focal point, though the lower sections are quieter than the hero.
- Buyer's and founder's one-sentence read: I know it prints my zine in small runs, that I see the printed sheet before it's stapled, and that 50 copies start at $2.10 each; I still can't see what their print actually looks like, and the founder would want a real proof photo here.
- Engineer's one-sentence read: One static file with a shared imposition module pre-rendered for no-JS, native buttons, a live status region and no dependencies; the subgrid hero needs Chromium/Safari/Firefox versions from 2023 on, and older browsers fall back to the stacked layout.

## Structural revision
- Weakest explanation or most template-like decision: the 1440 hero: copy and a boxed price ticket stacked in the left column with a gap, the sheet at about 607px with controls crammed under it, and grey wireframe pages that read as a diagram rather than a printed sheet.
- Change made (structure, not styling): recomposed the hero on a CSS subgrid so the artifact spans both columns: the sheet now owns the right column at about 718px, its readout and controls sit under the copy in the left column; moved the job ticket out of the hero to sit beside the "From upload to a photo of your proof" heading; reprinted the sample pages as solid black ink with paper knock-outs; cut the repeated full-bleed sentence from "Reading a proof".
- Before: shots-before/1440-top.png
- After: shots/1440-top.png
- Score after the change and what still keeps it from a 10: about 8/10 overall; keeping it from a 10: no real photograph of the press's own proof or print quality, art books get no specific answer, and the lower sections are calm by design but plain next to the hero.
- Removal pass (each decorative element → its job, or "removed"): K step wedge on the sheet → marks it as a press sheet (trade notation); registration targets and crop/fold marks → same, and show trim and fold; red corner marks → state (no full-bleed cover); dashed fold line → shows where the sheet folds; sheet and drawing shadows → paper lying on the booth, one light; mono slug line → printer's notation that mirrors the status; docket mono header → column labels; galley caret ‸ → the proofreader's insert mark, explained in the note; staple favicon bars → brand mark; readout left stripe → removed; galley insert stripe → removed; "left leaves / right leaves" headers in the cutaway → removed (cluttered, overlapped under text spacing).
- House-style pass: there are no earlier pages from this skill in this project to compare with; within this build, the face (Century Schoolbook via TeX Gyre Schola), the grey booth ground and the subgrid hero were chosen from the brief, not carried over.

## Remaining weaknesses
- What a buyer still cannot judge: actual print quality (no photo of a real proof or finished zine, by the brief's permission limit); binding and page limits for art books; what happens after the proof photo (how to approve or change, turnaround after approval, shipping); prices beyond the one starting configuration.
- What was not verified: rendering in Safari and Firefox (checked in Chromium only); the face on visitors' machines: the page names Century Schoolbook first, which rendered here as TeX Gyre Schola, and falls back to Georgia where neither is installed (self-hosting TeX Gyre Schola is listed to confirm); og.png and apple-touch-icon.png must be hosted at staplepress.example.

## Status
DONE
