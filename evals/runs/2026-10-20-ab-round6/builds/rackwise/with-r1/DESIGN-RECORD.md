# DESIGN-RECORD

Rackwise landing page, Build mode. Page: `index.html` (with `styles.css`, `app.js`, `fonts/`, `favicon.svg`, `apple-touch-icon.png`, `og.png`). Opens from disk with no network.

## Product interpretation
- Audience, category, business model, brand constraints: Buyers are lab managers at small biotech companies and university labs; users are researchers and technicians at −80 °C freezers, often gloved. Category: sample inventory map for lab freezers. Business model and pricing not given. No brand assets supplied. Constraints: no named labs, no figures, must not imply temperature monitoring.
- Promise (who / what changes / how): Lab managers and the people at the freezer know exactly where a tube is (freezer, shelf, rack, box, position) and who put it there and when, before the door opens, because each move is recorded by the person making it.
- Five-second line, quoted as shown in the first screen (who + what): "Rackwise is a sample map for lab −80 °C freezers: every rack, box and tube position, with who put each tube there and when."
- Current alternative, including doing nothing: A shared spreadsheet that is always out of date, handwritten box labels that fade in the cold, and (doing nothing) opening the door and searching box by box.
- The one advantage only this product has: A position-level map (rack, box, tube) that carries who put each tube there and when, so the record changes with the freezer rather than with someone's memory of the spreadsheet.
- Category frame (existing, subcategory or new) and what it costs to teach: Existing frame, "sample map for lab freezers" (a subcategory of lab sample inventory); costs one line, the five-second line.
- Best-fit customer, and who it is not for: Best fit: small labs with a few shared −80 °C freezers and many people putting tubes in. Not for labs looking for freezer temperature monitoring or alarms (it does not do that), nor for labs that need a full LIMS (not claimed).
- Users' own words (three phrases with source, or 'none yet'): none yet. The brief supplies no interviews or reviews; the hero borrows the trade's own notation (freezer · shelf · rack · box · position) instead of quoted phrases.
- Biggest reason not to click, and the line that answers it: "Is this a real product anyone uses yet?" answered beside the button: "In early access: four labs are testing Rackwise now." The second reason (re-entering an existing inventory) cannot be answered from the brief and is listed under To confirm.
- Conversion action and destination: "Request early access" → https://rackwise.example/early-access (supplied by the brief), same label in header, hero, final block and footer.
- Visitor doubt 1 → artifact: "Will it actually tell me where a tube is?" → the Find a tube artifact: search or tap a sample, get the path strip, the freezer, rack and box drawings and the 9 × 9 box with the spot marked.
- Visitor doubt 2 → artifact: "Why would this stay current when the spreadsheet doesn't?" → Box 14's record: the stale spreadsheet row and faded lid beside the per-move log (who, when, what, position); a tube the visitor puts away above appears in it.
- Visitor doubt 3 → artifact: "What do I, the manager, get, and does it watch temperatures?" → the freezer map with a person filter (whose tubes are where) and the "What the map is not" line beside it, repeated in the questions.

## Interview log
- Questions asked, each with the recommended default you offered: None could be asked (no one answers during this task). Defaults I would have offered: (1) conversion action = the supplied early-access URL; (2) status shown in the first screen = "in early access, four labs testing"; (3) pricing not shown.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: The four test labs are mentioned as a count only (the brief says they exist and cannot be named). Sample people, tubes and dates are invented for a labelled sample lab. How moves are recorded (scan, tap, device) is left unsaid.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | snag (casebook, desktop-mobile audit 2026-10-19): the search control is the hero and real inventory sits directly under it, so the first screen is already a result; limit: a prefilled city can misdirect, image motion ignores reduced motion. | Make the lookup the hero and show its answer in the same screen, prefilled with a safe sample. | Peach band, lowercase headline, shelves of photo cards, the 30,000-students style count. |
| Brand composition | Railway (reference tier, audited 2026-10-20): one metaphor (track rail, departure board) is built into the structure so brand elements also mark navigation and proof; limit: staged demos load late and the stage bar did not respond. | Build one trade notation into the structure: the freezer · shelf · rack · box · spot address recurs as the hero strip, the log's position column and the manager map's "A·2·1" addresses. | Night-sky illustration, serif h1, split-flap board, auto-advancing stage bar, logo grid. |
| Counterexample | Harvey (editorial-platform, audited 2026-10-20): a full-width "Command Center" dashboard as the hero; attractive and dense, but unreadable at 390. | A lab freezer page used at the door on a phone cannot lead with a dashboard; keep the hero one lookup with large type. | Full-width dashboard screenshot, dense multi-panel UI, logo wall. |

Recipe: functional entrance (input → output → how it stays current → who it is for → limits → action). Departures: display face is a condensed grotesque, not the recipe's suggested faces, because the notation needs to read like a printed cryo label; no cost section (no pricing supplied); limits sit beside the manager map and in questions rather than as a section.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the 9 × 9 cryobox seen from above with rows A–I and columns 1–9; the freezer · shelf · rack · box · position address; the upright −80 °C freezer with its door swung open; drawer racks that slide out of a shelf; marker writing on a box lid going faint under frost; the shared spreadsheet row that still says the old rack; the clipboard-style log of who put what in; gloved hands and big targets at the door; the box number written on the drawer; tube names like "HEK293 p12, vial 1"; a person leaving the lab and their boxes.
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Rackwise" with seed 4235572338: world, before-after, notation, canon exit.
- Chosen move and why, or canon and the buyer-risk reason: The audience's own notation (`notation`). Lab people read box positions (D7) and freezer addresses every day; the product's output is exactly that address, so the notation is the result, not a costume. World was the runner-up (variant B); before-after appears quietly in section 2 only.
- Idea sentence ("[inventory thing] becomes [the move]"): The freezer · shelf · rack · box · position address becomes the hero: a label-sized path strip read before the door opens, with the freezer, the pulled drawer and the 9 × 9 box drawn beneath it.
- The same sentence with the nearest competitor, and why it fails: "The shared spreadsheet's freezer address becomes the hero": fails, because the spreadsheet's address is exactly what goes stale (its row still says rack 4) and it has no who/when per position; a generic LIMS page leads with a dashboard and module list, not a single tube's address.
- Statement level (quiet, bold or loud) and why: bold. The buyer is a lab manager, not a regulated-risk buyer; one move owns the first screen and the rest stays quiet and carries proof.
- First viewport at 1440 (placement, sizes, live thing, refused default): Header 64px; left-aligned two-line h1 at about 82px condensed bold; five-second line under it; action and status at the right. From y≈388 the Find a tube panel spans the 1280px container: left column search, chips and the who/when verdict; right column the five-cell path strip (52px values, spot cell in orange) above the freezer, rack and box drawings, cut by the fold. Refused: a centred headline with two buttons over a dashboard screenshot.
- First viewport at 390: Header with Menu; h1 on two lines at about 41px; five-second line in four lines; full-width-ish action and the status line; the artifact from y≈394: title with sample label, the path strip (B · 3 · 2 · 14 · D7), the verdict (name, who, when) and match buttons, with the search field below the fold edge. Tapping a chip or a match changes the path strip and verdict, both visible.
- Name test (the one with the …, eight words or fewer): The one with the freezer address strip.

## Hypothesis
- Archetype and why: Functional entrance: the product is a lookup with a definite output (an address), so the first screen performs one lookup on sample data.
- Type roles, faces and why they fit this product: Display: TeX Gyre Heros Condensed Bold, for the headline and the path strip, because it reads like printed cryo labels and label-maker tape and fits five address cells across a phone. Text: TeX Gyre Heros (a Helvetica-like grotesque) for body. Data: DejaVu Sans Mono for timestamps, positions and addresses where alignment matters. All three shipped as subset WOFF files (GUST and Bitstream Vera/DejaVu licences allow embedding).
- Composition and grid: One 80rem container; hero split into headline (left) and action (right) above a full-width instrument panel; sections below use a single text measure with wider artifacts.
- Ground, colour and material, and why this ground: Frost grey-blue ground (#E4EBED) and enamel-white panels, from the freezer door and interior; ink #14232B; one accent, cryo-label orange #C2410C, used only for "the one you want" (the spot, the target rack and drawer, the target box position, selected person's boxes) and for the action.
- Signature artifact and its local behaviour: Find a tube: a search field (maxlength 40, word-by-word matching), four sample chips, match buttons when several tubes match, a put-away button when nothing matches, and Reset. It updates the path strip, verdict, freezer drawing, rack drawer and box grid, and a put-away tube appears in Box 14's record and the manager map counts.
- Signature on a phone (where the result shows after a tap): The path strip and verdict sit above the search field and chips, so the result of any tap is above the control within the same screen; the box grid follows below as supporting detail.
- Sample audit (counts, weekdays, states and stated rules agree): Weekdays are computed from the dates (Wed 14 Oct 2026, Mon 12 Oct, Fri 9 Oct, Thu 8 Oct, Mon 5 Oct, Fri 2 Oct, all checked). Box 14: C2 empty (p9 taken out Mon 12 Oct), D7, D8 and C9 filled by the logged moves; older fillers dated 3 Aug–7 Oct so the five logged moves are the latest. The spreadsheet row says rack 4 and p9–p11, consistent with the box moving on Fri 9 Oct. Manager totals are computed from the same data (Sam K.: 30 + 26 + 1 + 44 = 101).
- To confirm with the client (claims and terms kept off the page): how moves are recorded at the freezer (barcode scan, tap, tablet, phone) and whether gloves-friendly targets are a product feature; spreadsheet import for existing inventory; per-person view of tubes (shown in the sample map); pricing and how cost is disclosed; what the early-access form asks and what happens after; hosting and data location; a public URL for an absolute og:image; any permitted quote from the four test labs.
- Section sequence, with one section deliberately omitted: Hero with Find a tube → Every move is written down (before vs record) → Lab managers' freezer map with the temperature limit → Questions → Final action → Footer. Omitted: a features grid and a pricing section (nothing true to put in either).
- Primary interaction and motion purpose: Lookup by tap or typing; the only movement is the target drawer sliding out (220ms) to show which drawer, and a 0.97 press on buttons; both removed under reduced motion.

Motion contracts:

| Animation | Trigger | State change and purpose | Static fallback | Duration and easing |
| --- | --- | --- | --- | --- |
| Drawer slide | A new tube is shown | The drawer holding the box moves right to show which drawer to pull | Drawer drawn already pulled out, no transition (reduced motion and no-JS prerender) | 220ms, cubic-bezier(.2,.7,.2,1) on transform |
| Button press | Pointer press on a chip, match, Find, Reset or action | Scale to 0.97 to confirm the press | No scale under reduced motion | 150ms, cubic-bezier(.2,.7,.2,1) |
| Highlight colour | Grid cell or rack box changes state | Fill colour swap marks the new target | Immediate colour change | 160ms ease-out on background-color |

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): Structure. A puts the trade's address notation and three small drawings in a full-width instrument panel; B makes one large drawn freezer scene the hero with the search inside the open door.
- Category default and anti-default this plan avoids: Default for lab software: white ground, blue accent, molecule or DNA imagery, a dashboard screenshot under a centred headline. Anti-default: a dark terminal or neon "lab of the future" look. The plan uses frost and enamel from the freezer itself, a condensed label face and the address notation, matching neither.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Notation: address strip (freezer · shelf · rack · box · spot) above freezer, rack and 9 × 9 box drawings, with search and chips | Will it tell me where a tube is, and who put it there? | 8 | 8 | 7 | 7 | 7 | Real product screens from the test labs and a user's own words on the page |
| B | World: one large open-freezer scene, search set inside the door, found box glowing on its shelf | Can I picture this at my freezer? | 7 | 8 | 7 | 6 | 5 | A scene that stays legible at 390 and still shows the exact position, which a single scene cannot |

- Chosen variant and why: A. It shows the exact output (the address and position) at every width, while B loses the position detail on phones and spends the first screen on scenery.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches the category default or anti-default | Block | Revised before code: frost ground, condensed label face and address notation instead of white/blue/dashboard or dark terminal. |
| Two-column hero skeleton around the artifact | Warn | Headline and action share a row, but the artifact is a full-width instrument panel below, not one half of a split. |
| Overused display face (Inter, Poppins) available locally | Warn | Not used; TeX Gyre Heros Condensed chosen and shipped as WOFF. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | h1 on two lines with no orphan, action and status visible, path strip and freezer, rack and box drawings in the first screen, panel cut by the fold; full page shots/1440.png checked for section rhythm and footer. |
| 768×1024 | shots/768-top.png | Header collapses to the Menu button; h1 on two lines; artifact single column with the address strip, verdict and match buttons in the first screen; full page shots/768.png checked: drawings in a row of three, log table and freezer map fit, no overflow. |
| 390×844 | shots/390-top.png | Menu button, two-line h1, five-second line, action, status, path strip and verdict all in the first screen; full page shots/390.png is 5,932px (7.0 screens); menu open in shots/state-390-menu.png; no-JS in shots/still-390-nojs.png. |

Artifact states: shots/state-1440-1-default.png to state-1440-9-reset.png and shots/state-390-1-default.png to state-390-9-reset.png (default, Liver RNA chip, vial 2 match, empty submit, unknown name, put away, Box 14 log with the new line, manager map for Sam K., reset). Reduced motion: shots/still-1440-reduced.png.

## Checker result
- JSON: check.json
- Failures fixed: Font preload blocked from file:// (removed); TY-06 hidden drawer numbers at 390 (now 12px text); LY-02 spreadsheet table at 320 (column folded into caption, table wrapped in a labelled scroll region); AX-11 overlapping lid text; MB-07 results landing below the controls and match buttons replacing themselves (verdict moved above the controls, the shown match is disabled with focus handed on, DOM only touched when content changes); TT-04 side stripe on the verdict; TY-08 title line-height; a checker crash on SVG text in the first screen (rack drawn in HTML, no SVG text in the hero).
- Warnings kept and why: PS-06 lists every button label in the page, but the one primary action "Request early access" is worded identically everywhere; the rest are artifact controls. ST-01: no price exists in the brief, so cost is not shown; the questions point to the request page for cost. LY-05: the "nested cards" are the box grid and racks drawn inside their panels, which are drawings of physical objects, not cards. PF-07: og:image is relative because no public URL was supplied; an absolute URL is listed under To confirm.
- Optional tools (Impeccable detect, web-design-guidelines): result, or "not run: <reason>": not run: `npx --no-install impeccable --version` failed with "npm error network 'proxy' config is set properly" (not installed, no network).

## Checklist
The other 79 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | 390-top and 1440-top: headline (outcome), five-second line (labs, freezers, positions, who and when), and the live address strip. |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | From 390-top alone: "a map of where samples are in lab freezers; it tells you freezer, shelf, rack, box, spot; request early access". |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero is the lookup itself with its output (address, who/when, box grid), labelled as a sample lab. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubt 1 → Find a tube; doubt 2 → Box 14's record beside the stale spreadsheet; doubt 3 → manager freezer map plus "What the map is not". |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero: where; record: how it stays current; managers: whose and the limit; questions: status, temperature, users, next step. Final block adds only the action. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists the three defaults; no one could answer, so they were applied. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A (notation) and B (world) differ on structure, both from the dealt hand, scored above; defaults named and avoided. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | snag, Railway, Harvey in References with treatments not borrowed; recipe departures listed under the table. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "a sample map for lab −80 °C freezers" in the five-second line at both widths. |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | All named in Product interpretation; "Know the box before you open the freezer" is false for a stale spreadsheet whose row still says rack 4. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | h1, "Every move is written down by whoever made it", "Lab managers see every box in every freezer, and whose tubes are in it", "Open the freezer once, and reach for the right box" are picturable and falsifiable; "What labs ask before requesting access" is picturable and odd on a spreadsheet's page. |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | Recorded as "none yet"; the hero adapts the trade's own address notation instead. |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "In early access: four labs are testing Rackwise now." beside the hero action answers whether it is real; setup and cost are unknown and listed under To confirm rather than invented. |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings read: know the box first → every move written down by whoever made it → managers see every box and whose tubes → what labs ask → open the freezer once. |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | "Know the box before / you open the freezer" at 1440, 768 and 390 screenshots. |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | .hero has padding only; no height or 100vh anywhere in styles.css. |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof was supplied (four unnamed labs, no figures); the only proof-like line, the four-lab count, sits beside the action. No quotes. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Orange appears only on actions and on the target (spot cell, target rack, pulled drawer, target position, selected person's boxes, stale spreadsheet strike). |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | The page is built from freezer/rack/box notation, Box 14's log and the no-temperature line; the spreadsheet swap fails as recorded in Statement. |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No search pill or listing shelves (snag), no illustrated world, serif or split-flap board (Railway), no dashboard (Harvey); copy and numbers are original. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | All :hover rules are inside @media (hover:hover) and (pointer:fine); there are no staggers. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contracts table under Hypothesis covers drawer slide, button press and highlight colour. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | At 390 the address strip moves above the search, the box grid goes full width, freezer and rack sit side by side; the log becomes stacked rows; the manager map drops to compact rack columns with 12px box numbers. |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | #verdict and the manager verdict are role=status aria-live=polite. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page; test labs are not named. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | All counts and dates live inside artifacts labelled "Sample lab written for this page" or "Sample entries"; the one real number (four labs) comes from the brief. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Sample labels at the top of Find a tube, on Box 14's record, on the spreadsheet caption and above the manager map. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Request early access links to the supplied URL; Find, chips, matches, put-away and Reset each change the artifact; nav links reach their sections. |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All three -top PNGs and full pages opened; artifact states captured at 1440 and 390 (state-*.png). |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | See Structural revision: desktop artifact recomposed so drawings reach the first screen; before and after shots listed. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | See removal pass in Structural revision. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Nothing above is unverified; checker JSON has no failures. |
<!-- checklist:end -->

## Artifact stress test
Operate the signature artifact the way a curious, impatient or careless visitor would, at 1440 and 390. One row per probe; `n/a` needs the reason (an artifact with no input has no empty-input probe). A `fail` is fixed before the status can be DONE.

| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | Cleared the field and pressed Find (state-*-4-empty.png) | "Type a sample name first." with a pointer to the chips; the map stays on the last tube | pass |
| Out of range | Typed 200 characters (checker LY-08) and a name longer than the field | Field stops at 40 characters; the not-found message wraps inside the panel, no sideways scroll at 390 | pass |
| Nonsense | Typed "zz-unknown sample 9" and "Test 42" | "No tube called … in this sample lab", explains word-by-word matching, says the map still shows the last tube, offers to put it away | pass |
| Repeat | Pressed Find repeatedly; clicked the shown match again; put the same name away twice | Repeated finds change nothing; the shown match is disabled so it cannot be re-picked; a second put-away takes the next free spot as a second tube | pass |
| Reset | Pressed Reset sample after put-away and person filter (state-*-9-reset.png) | Removes visitor tubes, returns to HEK293 p12 at D7, restores the log and manager map; focus stays on Reset | pass |
| Keyboard only | Tabbed through field, Find, chips, match buttons, put-away and Reset; Enter on each | Each works; picking a match moves focus to the other match instead of dropping it (checker AX-12 pass) | pass |
| Phone | Operated every control at 390 (state-390-*.png, checker MB-07) | Result (path strip and verdict) sits above the controls and is in view after each tap; controls are at least 44px | pass |
| Reduced motion | Loaded with reduced motion and switched tubes (still-1440-reduced.png) | Drawer shows pulled out with no transition (0s), no press scaling; all states still visible | pass |
| Visitor's own input | Typed own sample name and put it away | Tube appears at the first free spot in the shown box with "Put here by you · just now, on this page. Nothing is saved or sent."; it appears in Box 14's record and the manager counts; searchable afterwards | pass |

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Hero visual is decoration | Block | Not matched: the hero shows the lookup output (address, who/when, drawings) and responds to input. |
| Centred headline over a framed screenshot | Warn | Not matched: left-aligned headline over an operable panel, no screenshot. |
| Every section has same width and padding | Warn | Partly matched (sections share padding); kept because each section changes reading mode (lookup, log, map, questions) and artifact width differs from text measure. |
| Redrawn browser or phone chrome | Warn | Not matched: no chrome; the drawings are the freezer, rack and box themselves. |
| Before render: drawings below the fold at 1440 | Warn | Fixed in the structural revision; drawings now in the first screen. |

## Structural revision
- Weakest explanation or most template-like decision: At 1440 the hero showed only the path strip and a list of match buttons in the first screen; the freezer, rack and box drawings, the part that explains "where at the freezer", sat below the fold under a stack of controls.
- Change made (structure, not styling): Recomposed the desktop artifact grid: search, chips and the who/when verdict now share the left column, and the path strip and drawings share the right column, so the drill-down drawings move up into the first screen; on phones the verdict moved above the controls so every tap's result lands in view. The rack drawing was rebuilt in HTML so its box numbers are real text.
- Before: shots/before-1440-top.png
- After: shots/1440-top.png
- Score after the change and what still keeps it from a 10: Variant A rescored Fit 8, Identity 8, Originality 7, Composition 8 (was 7), Proof 7; overall 8/10. Still short of 10: no real product screens or permitted words from the four test labs, and setup and cost questions cannot be answered from the brief.
- Removal pass (each decorative element → its job, or "removed"): Frost ground → where the product is used; orange → target and action only; lid drawing with frost patches → shows the faded handwritten label the brief names; strike-through on the spreadsheet row → marks the stale values; shelf-number labels in the freezer drawing → removed (the caption says shelf and rack); separate sample count in the finder title → removed (counts live in the manager verdict); status dot beside the early-access line → removed before build (fake liveness).

## Remaining weaknesses
- What a buyer still cannot judge: How tubes get recorded at the freezer in practice, how existing spreadsheets get in, price, and what early access involves; none of these are in the brief.
- What was not verified: The share card on a public URL (og:image is relative), and real devices with gloves; rendering and checks were done in headless Chromium only.

## Status
DONE
