# DESIGN-RECORD

Poolday homepage. Page: `index.html` (+ `styles.css`, `pool.js`, `fonts/`). Record started before code; sections 1–6 were written before any HTML.

## Product interpretation
- Audience, category, business model, brand constraints: Groups of friends (and the one friend who always organizes) buying a single shared present; consumer social-payments app at idea stage; business model not given (unknown); no existing brand, code or content beyond BRIEF.md; must feel like an occasion, not a finance dashboard; no reviews or volume data exist.
- Promise (who / what changes / how): Friends buying one present together / stop chasing people and guessing what's left / one person starts a pool, everyone adds what they can with a note, the organizer sees what's still needed.
- Conversion action and destination: "Start a sample pool" → `#start`, a local builder that creates the visitor's own pool in the browser (no account, no payment details) and lets them add pretend friends; the real signup URL must be supplied by the client.
- Visitor doubt 1 → artifact: "Will chipping in feel like splitting a bill / do I have to match everyone?" → the hero sample pool: friend's view shows names and notes, not individual amounts, and the add form accepts any amount up to what's left.
- Visitor doubt 2 → artifact: "As organizer, how do I know what's left and who to nudge?" → the same pool's Organizer's view: amount still needed, who hasn't added yet, a per-person split of the gap and a "Copy a nudge" action.
- Visitor doubt 3 → artifact: "Can I try it without handing over payment details?" → the `#start` builder: a working pool from your own occasion, labelled as running only in the browser, with no payment fields anywhere.

## Interview log
- Questions asked, each with the recommended default you offered: Client unavailable (stated in task), so no questions were sent. Questions I would have asked, with defaults: (1) Primary action: start a pool or see how it works? default: "Start a sample pool" that starts a local one, with "See how a pool runs" as the secondary link. (2) Currency/locale? default: US dollars. (3) Can friends see each other's amounts? default: no, only the organizer sees individual amounts. (4) Real signup/waitlist URL? default: none; the conversion stays local. (5) Brand colours/logo? default: none exist; create a wordmark.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: amounts hidden from friends (shapes the two-view artifact and the "Who sees what" section; the client must confirm); USD; no real signup link, so every action ends in a visible local result; sample people (Ines, Tom, Priya, Sam, Jo, Marco, Lea, Dev) are invented and labelled "Sample pool" beside them, never presented as customers.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | snag (snagsublets.com, desktop-mobile audit 2026-10-19): the search control is the hero and real priced listings sit directly under it, so the first screen is already a result; the inline bar becomes stacked labelled fields on phones. Limit: trust/verification is barely explained. | Make the first screen an operable instance of the product (a pool you can add to), and recompose its form into stacked labelled fields on phones. | Peach band, lowercase headline, pill search bar, listing shelves and calendar popover. |
| Brand composition | Imperfect (imperfect.co, desktop-mobile audit 2026-10-19): one tactile illustration system (torn paper, cut-out athletes) carries the brand while the product stays small and diagrammatic; emotional promise in the headline, literal category in the subhead beside it. Limit: the core interaction is never shown full size. | Let one physical gift object (a tag with a ribbon that ties when the pool is full) carry the brand and double as the product's progress state; put the feeling in the H1 and the literal category in the lede. | Torn-paper collage, cut-out photography, orange line motif, script wordmark, scroll-entrance cards. |
| Counterexample | Arbital (arbital.xyz, desktop-mobile audit 2026-10-19): live ticker, split-flap counters and trade toasts make money feel live and exciting. Limit: counters and toasts have no source, motion runs under reduced motion. | Money totals stay calm and read as one sum on one object; no number appears without a "sample" label beside it. | Tickers, flip counters, activity toasts, traction numbers, dark trading ground: they would turn a birthday into a finance dashboard and imply volume Poolday does not have. |

## Hypothesis
- Archetype and why: Functional entrance (recipe start point) because the brief asks for a useful local example and the product is one operation (add to a pool); borrowing an expressive-world material (a gift tag) so it reads as an occasion. Departures from the recipe: a deep berry hero ground instead of a quiet base, Bricolage Grotesque display instead of the recipe's compact sans, no mono face (no code or structured output), and a "who sees what" section in place of "edge cases" because the edge cases live inside the sample.
- Type roles, faces and why they fit this product: Display = Bricolage Grotesque (SIL OFL, self-hosted, variable opsz/wght): warm, slightly irregular grotesque that feels handmade without being a script; Text = Source Sans 3 (SIL OFL, self-hosted) for notes, labels and amounts with tabular figures. No mono: there is no code.
- Composition and grid: 1240px max; hero 5/6 split (promise left, the sample pool tag right) collapsing to one column under 960px; the "How a pool runs" sequence is a 4-column timeline (2×2 at 768, list at 390); the quiet section narrows to a 760px measure.
- Ground, colour and material, and why this ground: Hero on deep berry (#3a0f27), the colour of wrapping paper and ribbon, so the white tag reads as a physical gift object; the rest on a pale lilac-grey tissue-paper ground (#f4f1f6), not cream. Marigold marks only actions and "your part" of the ribbon; berry tints mark other friends' parts.
- Signature artifact and its local behaviour: The gift tag: occasion, gift, a ribbon made of one segment per friend, signatures with notes, and a bow that ties when the total is reached. Friend's view adds any amount with a note (validates empty, zero, over-the-gap with an "add exactly what's left" fix); Organizer's view shows amounts, who hasn't added, the per-person split and copies a nudge. Same component powers the visitor's own pool in `#start`.
- Section sequence, with one section deliberately omitted: Hero + sample pool (open/active) → How a pool runs, Monday to Saturday (dense, a real 4-step sequence) → Friends see notes, the organizer sees numbers (quiet) → Start a sample pool (active) → footer (short). Omitted: testimonials / "loved by groups" and volume stats (none exist), plus pricing (no model given).
- Primary interaction and motion purpose: Adding to the pool; the new ribbon segment slides in 6px and the bow turns into place when tied, to show the gift getting closer. View toggle pill slides to the chosen view. No scroll entrances, nothing loops.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure/emphasis: whose seat the visitor starts in (a friend joining an existing pool vs an organizer starting a blank one).

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Split: H1 + lede + "Start a sample pool" left; a filled sample pool tag right (Ines's pottery class, 4 friends in, $85 to go) with friend/organizer views and an add form | Doubts 1 and 2 directly in the first screen; doubt 3 by the label beside the tag | 8 | 6 | 6 | 7 | 8 | A tag that feels like a real object, not a card; organizer view that proves "what's still needed" in one glance |
| B | Centred: H1 above one large blank gift tag the visitor writes on (who it's for, the gift, the total), filling in as they type | Doubt 3 (try without paying), but starts empty so doubts 1–2 wait until later | 6 | 7 | 7 | 6 | 5 | Showing friends and the gap from the first second, which a blank tag cannot do |

Score each dimension 0–10.

- Chosen variant and why: A. A filled pool shows the whole idea (people, notes, the gap) before the visitor types anything; B's blank tag survives as the `#start` builder lower down.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Centered claim over browser frame | Block (lead) | Not used: split hero whose artifact is an operable pool, no browser chrome. |
| Metrics without sources | Block (lead) | Only sample amounts on the sample tag, labelled "Sample pool · runs only in your browser" beside them; no user counts, volume or ratings. |
| Control without destination/result | Block (lead) | No real signup URL, so "Start a sample pool" goes to a working local builder; every button produces a visible local result. |
| Three equal cards | Warn | The "How a pool runs" row has four steps of one real sequence with different states of the same pool, not adjectives; numbering kept because it is a sequence. |
| Overused display face | Warn | Inter is installed locally but not used; Bricolage Grotesque self-hosted with a recorded reason. |
| rounded-xl on every surface | Warn | Corners by function: tag 6px with a punched hole, buttons fully round (ribbon ends), inputs 6px, steps square with rules. |
| Fake liveness | Warn | No toasts, counters or pulsing dots (the Arbital counterexample); the ribbon only changes when the visitor acts. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Opened top and full (`shots/1440.png`): not blank, 1440 wide; H1, lede, "Start a sample pool" and the tag's ribbon, signers and form in the first screen (form button sits just below the fold). States operated and captured: `shots/states/1440-1…13-*.png` (default, empty-name error, over-the-gap error with "Add $85 instead", added, organizer view, nudge, full + tied bow, organizer full, reset, builder example draft, typing + errors, started, pretend friends). No clipping or overflow. |
| 768×1024 | shots/768-top.png | Opened top and full (`shots/768.png`): 768 wide; hero stacks to one column (H1 on one line, tag below at 640px max), steps become 2×2, builder stacks form above the draft tag; nothing is a squeezed two-column leftover. |
| 390×844 | shots/390-top.png | Opened top and full (`shots/390.png`): 390 wide; H1 two lines, full-width CTA, nav keeps both links; tag recomposes (notes under names, amounts right, stacked fields, full-width buttons); same 13 states captured in `shots/states/390-*.png`; no horizontal scroll. |

## Checker result
- JSON: check.json
- Failures fixed: none at block level on either run (`check-before.json` and `check.json`: 64 passed, 0 not run, served from http://127.0.0.1:18731 so the transfer-size check runs). Fixed by eye before the checker: the "Add $85 instead" button showed while hidden (`.btn` display overrode `[hidden]`; added `[hidden]{display:none!important}`), the H1 was compressed (tracking −0.03em at 92% width → −0.02em at 96%), and a second "you" chip appeared after two visitor adds (now only the latest add is marked).
- Warnings kept and why: none; 0 warnings.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` → "npm error code ENOTFOUND" (not installed, no registry access); web-design-guidelines not run: not installed.

## Checklist
<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png: "friends buying one gift together… one person starts… everyone adds what they can… organizer always sees what's still needed" |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | H1 plus a filled pool tag ($155 of $240, four names with notes) beside it in shots/1440-top.png and shots/390-top.png |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The tag is an operable sample pool (add, validate, switch views, nudge, tie, reset): shots/states/1440-1…9 |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubt 1 → friend's view + add form; doubt 2 → organizer view (still needed, not added yet, split, nudge); doubt 3 → `#start` builder with no payment fields (see Product interpretation) |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero = the object; How = time sequence over a week; Who sees what = the rule and its reason (the toggle shows it, this states why); Start = the visitor's own pool. Hero lede no longer repeated in any section copy |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log: five questions with defaults, client unavailable, defaults applied |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were compared and scored before any code. | pass | Two hero variants table, axis = whose seat the visitor starts in |
| PS-09 | Two references serve different jobs, one counterexample is named, and what is not borrowed is stated. | pass | References table: snag (explanation), Imperfect (brand composition), Arbital (counterexample) |
| PS-10 | The page starts from one archetype recipe and records where it departs from it. | pass | Hypothesis → archetype line lists four departures from the functional-entrance recipe |
| HR-02 | A centred headline above a framed screenshot is used only with a product reason in the record. | n/a | Split hero, left-aligned H1, no framed screenshot |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | "from all of you." (1440, 390) and one line at 768; `of&nbsp;you` binds the last words |
| HR-06 | The hero is sized with svh/dvh or content, not a fixed 100vh that clips under mobile browser bars. | pass | styles.css .hero uses padding only; no vh height anywhere |
| HR-07 | Nothing in the hero waits for an animation before it can be read. | pass | Hero tag is pre-rendered into index.html (`<!--HERO-TAG-->`); no entrance animation exists |
| TY-13 | Each face has a role (display, text, data); a family is not added just to have two. | pass | Bricolage Grotesque = display (H1–H3, big sums); Source Sans 3 = text, labels and tabular amounts; no mono because there is no code |
| LY-07 | Density changes down the page on purpose: open, dense, quiet, active, short. | pass | shots/1440.png: open hero with active tag → dense 4-step row → quiet 820px column → active builder on berry → short footer |
| LY-10 | At 768px nothing is a cramped leftover of the desktop grid. | pass | shots/768.png: hero and builder single column, steps 2×2 |
| CO-06 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Marigold only on action buttons, focus ring and the visitor's own ribbon segment / "you" chip |
| TT-04 | Section numbers appear only on content that is a real sequence. | pass | Numbers only on the four days of one pool's week |
| TT-09 | Replacing the logo would not turn this into another company's page. | pass | The gift tag with a ribbon of friends that ties when full, notes-not-amounts rule and pool vocabulary are specific to group gifting |
| TT-10 | The signature idea still works if the palette changes. | pass | Ribbon segments per person, the dashed gap and the tied/untied bow carry state by shape, not hue |
| TT-11 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Originality pass: no peach band, pill search or listing shelves (snag); no collage, cut-outs or orange line (Imperfect); no ticker, counters or toasts (Arbital); copy and names original |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine). | pass | styles.css: all :hover rules inside `@media (hover: hover) and (pointer: fine)` |
| MO-08 | Staggers stay between 30 and 80ms and never block input. | n/a | No staggered sequences on the page |
| MO-09 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contracts listed under Structural revision → Motion contracts |
| MO-10 | Text that must be read moves into place rather than fading in. | pass | Only the ribbon segment (no text), the bow (SVG) and the view pill animate; status text swaps immediately |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | shots/states/390-5-organizer.png: notes move under names, amounts right-aligned, fields stacked, buttons full width; steps become a vertical list |
| MB-07 | Fixed or full-bleed elements respect safe-area insets. | pass | No fixed elements; footer bottom padding adds env(safe-area-inset-bottom) |
| AX-12 | Results of local actions are announced (aria-live or role=status). | pass | Each tag's `.status` and `#builder-status` are role=status aria-live=polite; log in Render evidence states |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page; the notes belong to labelled sample people inside the "Sample pool" tag |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Only sample amounts, each on a tag labelled "Sample pool · runs only in your browser" or "Draft", or in the How section captioned "The same sample pool as above" |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Label is the first line of each tag; "no payment details" line sits under the hero CTA |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | "Start a sample pool" → `#start` and then a live local pool; "See how a pool runs" → `#how`; every tag button produces a visible status; footer links reach anchors and the local licence files. Client must supply a real signup URL before launch |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, and the signature artifact was captured in each of its states. | pass | All six page captures and 26 state captures opened; widths match; states listed in Render evidence |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section: empty builder box → live draft tag; shots-before/1440.png vs shots/1440.png |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass below |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Renders, checker (64/64, 0 not run) and all manual checks are answered without unverified items |
<!-- checklist:end -->

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Centered claim over browser frame | Block (lead) | Not present in shots/1440-top.png: split hero with an operable tag. |
| Every section has same width and padding | Warn (lead) | Not present: hero 40/104, How 120/128 at 1240px, Who sees what 88/96 at 820px, Start 112/136 (checker LY-05 passed). |
| Small tracked-caps label above every heading | Warn (lead) | Not present: tag labels are sentence case; step labels are day names in a real sequence. |
| Cream ground with serif display | Warn (lead) | Not present: berry and lilac-grey grounds, sans display. |
| Scaled-down desktop on mobile | Block (lead) | Not present: shots/390.png shows recomposed tag, steps and builder. |
| Dead empty state in the builder (found by eye, not a detector row) | Warn | Fixed in the structural revision: the dashed "Your pool will appear here" box became a live draft tag. |

## Structural revision
- Weakest explanation or most template-like decision: The `#start` builder was a stock form-plus-empty-preview split: at 1440 a large dashed "Your pool will appear here" box sat beside the form doing nothing until submit, and on phones it was a long empty block under the form (shots-before/1440.png, shots-before/390.png).
- Change made (structure, not styling): Replaced the empty state with a live draft tag built from Hero variant B: it renders from example values at first paint (pre-rendered in HTML), rewrites itself on every keystroke (who, occasion, gift, total, your share), shows "$250 to fill" and what starting will unlock, and turns into a working pool on "Start a sample pool"; editing after starting returns it to draft. Builder example changed from Ines's pool to a new one (Dana's cabin) so it no longer repeats the hero. Also fixed the organizer copy that wrongly said "everyone you invited has added" on a new pool.
- Before: shots-before/1440.png
- After: shots/1440.png
- Score after the change and what still keeps it from a 10: Fit 8, Identity 7, Originality 7, Composition 7, Proof 9 (before: 8, 6, 6, 7, 8). A 10 needs real product screens or a real signup path, and a hero tag whose add form fits fully in the 1440×900 first screen.
- Removal pass (each decorative element → its job, or "removed"): tag cut corners and punched hole → say "gift tag", not "invoice"; berry tints on ribbon segments → tell friends apart; marigold segment and "you" chip → the visitor's own part (state); dashed ribbon gap → what's still needed (state); bow, loose vs tied → full or not (state); rules between signers and steps → grouping instead of cards; numbered circles → real 4-day sequence; header bow mark → identity; dashed empty-state box in the builder → removed (replaced by the draft tag). No glows, gradients, textures, shadows or icon tiles exist.
- Motion contracts: (1) Ribbon segment added — trigger: visitor adds or a pretend friend is added; purpose: show the gift getting closer; fallback: segment present at full size; 260ms translateX(−8px)+opacity on a text-free bar, cubic-bezier(.2,.7,.2,1). (2) Bow ties — trigger: total reached; purpose: mark the pool as complete; fallback: tied bow shown, loose ends hidden; 280ms rotate(−14deg) scale(.9) → none + opacity, same easing. (3) View pill — trigger: Friend's/organizer's view pressed; purpose: show which seat you are in; fallback: pill jumps; 200ms translateX, same easing. (4) Button press — trigger: active; purpose: tactile feedback; fallback: none needed; 160ms translateY(1px). All removed under prefers-reduced-motion; content and states unchanged. Smooth anchor scrolling only under no-preference.

## Remaining weaknesses
- What a buyer still cannot judge: How money actually moves, who holds it and what happens if a pool falls short or the gift changes; none of this is in the brief, so the page shows the social flow only. There is no real signup or waitlist destination (the client must supply one); the notes-not-amounts privacy rule and USD are my defaults and need confirmation.
- What was not verified: Real clipboard write for "Copy a nudge" (headless Chromium refused clipboard access, so the visible fallback "Your nudge, ready to paste" was what got captured); screen-reader output was not tested with an actual screen reader; 200% zoom and 320px were checked only by the automatic overflow checks.

## Status
DONE
