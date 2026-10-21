# DESIGN-RECORD

Page: `index.html` (static, opens from disk; fonts in `fonts/`, icons and share card beside it). Skill: startup-landing-design (ours12), Build mode.

## Product interpretation
- Audience, category, business model, brand constraints: Volunteer treasurers of churches and small charities in the UK and US (weekly users); finance committees or trustees (adopters). Bookkeeping app, self-serve 60-day free trial. No existing brand; must earn a careful volunteer's trust without feeling like corporate finance software.
- Promise (who / what changes / how): Treasurers and counters of small congregations → the Sunday count is signed by two people and already in the books, and year-end donor statements need no hand-writing → two volunteers count on a phone, both sign, the count posts to the ledger and feeds each donor's statement.
- Five-second line, quoted as shown in the first screen (who + what): "Bookkeeping for churches and small charities: count the offering on a phone, and it posts to your ledger and each donor’s year-end statement."
- Current alternative, including doing nothing: A paper counting sheet, a spreadsheet only the treasurer understands, and a January spent writing giving statements by hand (or carrying on with exactly that).
- The one advantage only this product has: One two-signature count on a phone flows straight into the ledger and on into each donor's year-end statement; nothing is retyped.
- Category frame (existing, subcategory or new) and what it costs to teach: Existing: "bookkeeping for churches and small charities". Nothing to teach beyond the two-signature sign-off, which the trade already does on paper.
- Best-fit customer, and who it is not for: Best fit: a small UK or US congregation or charity with volunteer counters and a volunteer treasurer. Not for: anyone wanting online giving or a payment processor, or organisations outside the UK and US.
- Users' own words (three phrases with source, or 'none yet'): none yet. The brief supplies no user quotes; the hero adapts the brief's own description ("two volunteers count ... both sign it off").
- Biggest reason not to click, and the line that answers it: "Will this touch our money, and what will it cost?" Answered beside the button: "The trial is free for 60 days. Tallyhall keeps the books; it never takes payments."
- Conversion action and destination: "Start a free 60-day trial" → https://tallyhall.example/trial (supplied by the brief); same label in nav, hero, trial section and footer.
- Visitor doubt 1 → artifact: "What does the sign-off actually look like?" → the working sign-off demo in section two (type your name as second counter; the count posts, ledger and donor year-to-date update).
- Visitor doubt 2 → artifact: "What do our trustees get to see before they adopt it?" → the count log card in the trustees section (two names, amount and posted state per Sunday, one count still awaiting its second signature).
- Visitor doubt 3 → artifact: "Does it replace my spreadsheet and the January letters, or add to them?" → the pinned before/after section: counting sheet → signed count, spreadsheet → ledger, hand-written letter → giving statement.

## Interview log
- Questions asked, each with the recommended default you offered: None could be asked (no one answers during this task). Defaults I would have offered: sample currency pounds (UK spelling in the brief); lane b2b-self-serve because the trial is self-serve; no pricing beyond the free trial; second signer must differ from the first.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: Sample in pounds sterling for a made-up "Hillside Chapel"; donor gifts are identified by envelope numbers inside the count; the second signature must come from a different person; post-trial price, card terms and data location are not stated anywhere on the page.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Granola (casebook, audited 2026-10-20): one named sample note recurs before, during and after a meeting; limit: hero demo ignored reduced motion | Carry one named sample (Hillside Chapel's counts, envelope No. 112) through every stage: count, ledger, statement | Its serif display, lime/charcoal bands, typing animation and meeting copy |
| Brand composition | Cal.com (casebook, audited 2026-10-20): the hero shows the artifact the user's customers see, with "No credit card required" under the action; limit: its booker looked clickable and did nothing | Show the finished output (the signed count and the donor's statement) in the hero, with the friction line under the button; anything that looks operable must be operable | Its white card-on-grey module shell, Google sign-up, rating rows and logo strip |
| Counterexample | Ramp (casebook, audited 2026-10-20): crowded first screen (announcement, counter, form, celebrity photo, ticker) and a self-cycling finance UI; empty panel under reduced motion | Keep the first screen a calm poster and keep finance UI still and labelled | Corporate-finance tone, live counters, email capture in the hero, celebrity imagery |

Departures from the workflow-theater recipe: display face is TeX Gyre Adventor (a wide geometric grotesk, dealt "wide grotesk"), not Schibsted/IBM Plex; the H1 caps at 76px, below the recipe's 88px, so "Counted by two." holds one line in the 600px column.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the offering bag with its wooden handle; banknote bundles with paper bands; coins sorted on a felt counting mat (heptagonal 50p and 20p); numbered gift envelopes; the paper counting sheet with tally gates; two signatures and their times; the treasurer's cryptic spreadsheet; the General Fund ledger; the year-end giving statement; the hand-written thank-you letter in January; the vestry table after the service; the finance committee's count log
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Tallyhall" with seed 832787386 (node scripts/deal.mjs "Tallyhall" --seed 832787386), lane b2b-self-serve: moves world, voice, toy; canon exit.
- Chosen move and why, or canon and the buyer-risk reason: An inhabited world (`world`): the product lives at a physical place every user knows, the counting table after the service, and the phone's signed count is the visible result inside it. Voice would ask a careful buyer to trust a stance before seeing the product; toy would put controls in the poster, which the first-screen rules forbid (the toy lives in section two instead).
- Idea sentence ("[inventory thing] becomes [the move]"): The vestry counting table after the service becomes the hero world, with the offering bag, sorted notes and coins, gift envelopes and a phone showing the count signed by both counters, and last year's giving statement lying on top.
- The same sentence with the nearest competitor, and why it fails: "The vestry counting table becomes the hero world with a spreadsheet open on a laptop showing the count" fails: a spreadsheet holds no signatures and no donor statement, and a laptop on the counting table is exactly what the page argues against. A generic church-management suite would show a dashboard, not the cash-counting moment.
- Statement level (quiet, bold or loud) and why: bold: the world owns the first screen; sections below stay calm and carry proof, because the buyer is careful with other people's money and a loud page would cost trust.
- Lane and frame (lane, modifiers, the dealt nav, hero, look, type, buttons and motion, and any swap with its product reason): Lane b2b-self-serve, no modifier (trust answers moved up instead). Nav floating pill; hero editorial split; look SWAPPED from dark glass to its alternate soft structural, because the brief says not to feel like corporate finance software and dark glass reads as fintech/crypto to a church treasurer; type wide grotesk with mono labels; buttons pill with icon circle; motion pinned handoff.
- First viewport at 1440 (the poster: headline, sentence, buttons, the hero picture and its share of the screen, what moved to section two): Left column (≤600px): two-line H1 "Counted by two. / Signed by both." at 76px, the five-second line, filled "Start a free 60-day trial" and quiet "Try a sign-off", one reassurance line. Right: the table scene from x=723 to the right edge, 93–913px tall (about 45% of the screen), cut by the fold; the signed phone and a tilted statement card on it. The working sign-off demo moved to section two. Refuses: centred headline over a framed dashboard screenshot.
- First viewport at 390: Pill bar with wordmark and Menu; H1 in two lines (41.6px); five-second line; two full-width buttons; reassurance line; the top 270px of the table scene with the phone's total and both signatures visible.
- Name test (the one with the …, eight words or fewer): the one with the offering bag and signed phone

## Hypothesis
- Archetype and why: Workflow theater: one sample count moves through counted, signed, posted and stated, with the owner (two names) visible at every state.
- Type roles, faces and why they fit this product: TeX Gyre Adventor (GUST licence, shipped as woff) for display: wide, round and civic, warmer than a fintech grotesk. Carlito (OFL) for text: humanist and plain. Latin Modern Mono (GUST) for short labels and the "before" paper artifacts, where its typewriter feel matches church-office forms.
- Composition and grid: Max width 1320px, gutter clamp(20px, 5.6vw, 80px). Hero editorial split with the picture bleeding right; demo is a nested card with a 2-column bento (sheet / ledger + giving); the how section is a sticky stage beside steps; trustees a dark band; trial split with questions.
- Ground, colour and material, and why this ground: Near-white with a whisper of green (#F3F6F2), deep ledger green (#1C6A4D) for the action and the signed/posted state, amber only for "not posted / error". Warm wood, velvet and felt only inside the illustration, so colour comes from the subject. One deep-green band for the trustees.
- Signature artifact and its local behaviour: "Sign off this Sunday’s count" (data-signature): Ruth has signed; the visitor types a name and presses "Sign and post". Empty, letter-less or "Ruth" are refused with a reason; a valid name marks the second signature 12:09, flips the ledger row to "Posted 12:09", adds the gifts to three envelopes' 2026 year-to-date, and reveals "Start again". Everything is local; nothing is sent.
- Signature on a phone (where the result shows after a tap): The status line (role=status) sits directly under the full-width Sign button and above the ledger card, so the verdict is on screen after the tap; focus moves to Start again just below it.
- Sample audit (counts, weekdays, states and stated rules agree): 18 Oct 2026 and 11 Oct, 4 Oct, 27 Sep 2026 are Sundays. 18 Oct: 620 + 84.50 + 240 + 340 = 1,284.50; 11 Oct: 560 + 72.20 + 250 + 310 = 1,192.20; tally sheet 300 + 180 + 72.20 + (cheques and envelopes not shown) with the corrected total 1,192.20. YTD: 740 + 20 = 760, 1,950 + 50 = 2,000, 955 + 25 = 980; 3 shown + 9 more = 12 envelopes. 18 Oct is "not posted" in the demo and the trustee log until the visitor signs; 11 Oct is posted everywhere with Ruth and Sam. The demo uses fixed sample times, never the visitor's clock.
- To confirm with the client (claims and terms kept off the page): price after the trial and whether a card is needed to start; whether the counters need one phone or two; that the second signer must be a different person; envelope-number donor tracking; currency handling for US congregations; where data is held and who can access it; statement export or print formats; og:image and icons to be hosted at https://tallyhall.example/og.png; any contact address (none supplied, so none shown).
- Section sequence, with one section deliberately omitted: Hero → Try a sign-off (demo) → One count, from the vestry to January (pinned before/after) → Trustees see two names on every count → Sixty days covers eight Sundays + questions → footer. Omitted: a pricing table (no prices supplied) and a testimonials strip (none may be named).
- Primary interaction and motion purpose: Signing as the second counter, the core trust mechanic. Motion: one staggered hero entrance; the pinned hand-off where the sticky stage swaps old artifact → Tallyhall artifact as each step reaches the middle; quiet one-time section rises.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): emphasis: the world (the table) versus the output (the giving statement as one object).
- Category default and anti-default this plan avoids: Default: a church-management dashboard screenshot in a browser frame with blue/purple gradients and a "Trusted by 1,000 churches" logo row. Anti-default: a cream ground with an editorial serif and a stained-glass or hymn-book motif. The plan uses neither: green-white ground, a wide grotesk, and a top-down counting table.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Editorial split: headline left; top-down vestry table with offering bag, sorted cash on a felt mat, envelopes, a phone showing the count signed by two and posted, and a tilted giving statement | What happens to Sunday's money, and who signs | 8 | 9 | 8 | 8 | 8 | The table drawing finished to the level of a commissioned illustration, with the phone and statement still reading at 390 |
| B | Object portrait: one giving statement at heroic scale, its rows annotated with the Sundays that fed it | What January looks like | 7 | 6 | 7 | 7 | 7 | The two signatures would need to appear on the statement itself, and the weekly count would vanish from the first screen |

- Chosen variant and why: A. It shows the weekly moment volunteers actually live (the count) and the year-end payoff together, and it is the dealt move.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches category default or anti-default | Block | Revised: neither dashboard-in-browser nor cream-and-serif; soft green-white ground with wide grotesk and a drawn table |
| Hero visual is decoration | Block | Not matched: the phone shows the signed count and the card the donor statement, real output fields |
| Redrawn phone chrome | Warn | Kept: the product is used on a phone at the counting table, so a phone on the table is the true context; labelled Sample |
| A pill or badge above the h1 | Warn | Avoided: no tag above the headline |
| Small tracked-caps label above every heading | Warn | Revised: mono labels only on the three step timings (Sunday, As soon as both sign, Year end), which are a real sequence |
| A row of big stat numbers under the hero | Warn | Avoided: the only figure in the brief (about 40 congregations) sits in the trustees section as a sentence |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Two-line H1, five-second line, two aligned pill buttons, table scene at about 45% cut by the fold, phone and statement legible and not overlapping; full page in shots/1440.png; stage states in shots/how-1440-step1.png to step3.png |
| 768×1024 | shots/768-top.png | Single column, H1 two lines, picture full width below the buttons; statement card moved left so it no longer covers the phone's signatures (it did in the first render); full page shots/768.png |
| 390×844 | shots/390-top.png | H1 two lines, sentence, full-width buttons, top of the table with total and both signatures; menu overlay in shots/menu-390-open.png; full page shots/390.png at 6,707px |

Artifact states: shots/demo-1440-1-default.png, -2-empty.png, -3-posted.png, -4-reset.png and the same four at 390 (shots/demo-390-*.png).

## Checker result
- JSON: check.json
- Failures fixed: runtime error from SVG text nodes (removed the text from the drawing); TY-02 (h4 in the statement card); LY-08 (long name widened the page: wrapping and a 40-character cap); CO-01 (button label sampled with its icon, phone text sampled against a rotated bezel, step text dimmed and reveal opacity: labels wrapped, phone un-rotated, dimming and opacity reveals removed); MB-05 (no-JS mobile menu covered the headline); MB-09 (input collapsed to 23px in a column flex); MB-10 (page 9.1 screens: phone-only cards trimmed, weeks strip and one question cut, now 6,707px); LY-03 (spreadsheet cells clipped).
- Warnings kept and why: PS-06 counts the skip link and the demo's "Sign and post" as actions; the conversion label is identical everywhere. HR-08: 720×192 of air above the headline at 1440 is the poster's breathing room (12% of the screen) with the headline group centred against the picture. LY-05: nested shells are the visual system's outer-shell/inner-core cards, plus before/after paper inside the stage. TT-04: the repeating gradients are the tally gates and the coin/note drawing, which carry meaning, not filler.
- Optional tools (Impeccable detect, web-design-guidelines): not run: no network and nothing may be installed in this task.

## Checklist
The other 85 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png and 390-top.png: "Bookkeeping for churches and small charities: count the offering on a phone, and it posts to your ledger and each donor’s year-end statement." |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second read of the captures: church bookkeeping app; two people count and sign the offering on a phone; button starts a free 60-day trial |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The phone shows the signed, posted count with its fields; the card is the donor's giving statement |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Demo (sign-off), count log (trustees), before/after stage (what it replaces) |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | After revision the how section shows the old artifacts it replaces instead of re-showing the demo's count sheet |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists the defaults and the assumptions |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A (world, dealt) and B (object portrait) differ on emphasis; defaults named and avoided |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References table plus recipe departures line |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "Bookkeeping for churches and small charities" |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Product interpretation fields; "Counted by two. Signed by both." is false for a spreadsheet, which records no signatures |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | e.g. "Trustees see two names on every count" (picture, falsifiable, odd on a spreadsheet's page); "Sixty days covers eight Sundays" (falsifiable, odd elsewhere) |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet"; the hero adapts the brief's own description of the count |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "The trial is free for 60 days. Tallyhall keeps the books; it never takes payments." |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Counted by two. Signed by both → Sign off this Sunday’s count → One count, from the vestry to January → Trustees see two names on every count → Sixty days covers eight Sundays |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | `.hero-pic` height min(820px, calc(100svh - 64px)); content-sized below 1000px |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | pass | The only supplied proof (about 40 congregations, unnamed) sits in the trustees section beside the adoption claim; no quotes |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Green marks the action, signed and posted states; amber only "not posted" and errors; the green accent words in the H1 are the one allowed flourish |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | Offering bag, counting mat, two signatures and envelope numbers are specific to this product; competitor sentence fails (Statement) |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No Granola, Cal.com or Ramp copy, palette, imagery or layout device reused; only principles transferred |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | Hover rules inside the media query; hero stagger 80ms, menu 60ms |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | "Motion contract (MO-08)" block directly below this checklist |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | Demo stacks: sheet, signatures, full-width input and button, status, then ledger and giving cards; how section shows one before/after pair inline |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | `#sign-status` role=status aria-live=polite |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Every sample figure sits in a card tagged "Sample"; "about 40 congregations" and "60 days" come from the brief |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | "Sample" tag inside the phone, statement, demo top, each stage card and the count log |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Trial buttons go to the brief's trial URL; "Try a sign-off" goes to the demo; nav anchors resolve; demo actions change visible state |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All opened; widths 1440/768/390; demo default, empty error, posted and reset captured at both widths |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section: how section rebuilt as before/after pairs; shots/before/ vs shots/ |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass lists each element |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Rendered, checked clean, nothing unverified |
<!-- checklist:end -->

Motion contract (MO-08):
- Hero entrance: on load → headline, sentence, buttons, reassurance rise 20px from opacity .6, picture rises 24px from 0, to guide the eye once → static in place without motion → 800–900ms, cubic-bezier(.32,.72,0,1), 80ms stagger.
- Pinned hand-off (signature scroll moment): a step crossing the viewport middle (IntersectionObserver) → the sticky stage swaps to that step's before/after pair and the step's left rule turns green, to show one artifact replacing another in order → without JS or below 1000px each step shows its own pair inline → 450ms opacity and 700ms translate on the same curve; under reduced motion a 200ms fade only.
- Section rises: block enters 88% of the viewport, once → 24px rise, text at full opacity → static under reduced motion or without JS → 800ms, same curve.
- Demo feedback: Sign and post → ledger row and year-to-date rows flash a green tint once, status swaps immediately → text change carries it without motion → 900ms background fade, ease-out.
- Menu: button press → overlay links rise 18px with 60ms stagger, icon bars turn to an X → instant under reduced motion → 500ms / 300ms, same curve.
- Buttons: press scales to .98, the arrow circle nudges 2px on fine-pointer hover → none under reduced motion → 150–250ms ease-out.

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | Pressed Sign and post with an empty field at 1440 and 390 | Amber status "Type your name first. A count needs two signatures before it posts."; field marked invalid; focus kept in the field | pass |
| Out of range | Typed Ruth's own name as the second signer; pasted a 200-character string (checker) | Refused: "Ruth has already signed. The second signature has to come from the other counter."; long input capped at 40 characters and wrapped, no sideways scroll (LY-08 pass) | pass |
| Nonsense | Typed "!!! 123" and pressed Enter | Refused: "That doesn’t look like a name. Use the name your committee would recognise." | pass |
| Repeat | Pressed Enter twice quickly on Sign and post | Posted once; the second press lands on Start again within 700ms and is ignored; year-to-date added once (£760.00, £2,000.00, £980.00) | pass |
| Reset | Pressed Start again after posting | Signature, ledger chip, totals and status return to the start; focus back in the name field | pass |
| Keyboard only | Tab to field, type, Enter; Enter on Start again | Works end to end; focus moves to Start again after posting and back to the field after reset (AX-12 pass) | pass |
| Phone | Operated all states at 390×844 (shots/demo-390-*.png) | Status shows directly under the full-width button after each tap; controls 54px tall | pass |
| Reduced motion | Checker load with prefers-reduced-motion | Nothing translates or scales; all content visible; only short fades (MO-01 pass) | pass |
| Visitor's own input | Signed as "Margaret Oyelaran-Whitcombe" | Name appears in the signature, ledger "Counted and signed by Ruth Adeyemi and Margaret Oyelaran-Whitcombe" and the status, wrapping cleanly | pass |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Hero visual is decoration | Block | Not matched: the phone and statement carry the product's real fields at legible size (shots/1440-top.png) |
| Redrawn phone chrome | Warn | Stays: the phone is the device used at the counting table, labelled Sample, with real content |
| Every section has same width and padding | Warn | Not matched: bleed hero, nested demo card, sticky split, full-bleed dark band, split trial |
| The same fade-up on every section | Warn | Revised: reveals are transform-only and quiet; the one signature moment is the pinned stage |
| Shadow is the only depth system | Warn | Not matched: overlap, rotation of paper, nesting and the dark band carry depth too |
| A built page indistinguishable from the last one | Warn | Frame dealt away from recent history; wide geometric display and a drawn top-down world are new for this skill's pages |

## Self-review
Score from the screenshots and the operated page, as the strictest of a senior designer, the brief's buyer and founder, and the engineer who maintains it. 1–10; 10 only when nothing is left to improve. "After" is the score once the structural revision is rendered.

| Criterion | First score | What a 9 needs (for anything under 8) | After |
| --- | --- | --- | --- |
| Clarity | 8 | | 8 |
| Fit | 8 | | 8 |
| Distinctiveness | 8 | | 8 |
| Proof | 7 | The how section must show something new: the old counting sheet, spreadsheet and hand-written letter beside the Tallyhall artifact, instead of re-showing the demo's count sheet and the hero's statement | 8 |
| Craft | 7 | Fix the 768 overlap where the statement covered the phone's signatures, the mobile menu overlay trapped inside the blurred pill, and the empty footer padding inside stage cards; balance the how section's empty right/left stretches | 8 |
| Mobile | 8 | | 8 |
| Honesty | 8 | | 8 |
| Interaction | 8 | | 8 |
| Copy | 8 | | 8 |
| First screen | 8 | | 8 |

- Designer's one-sentence read: A calm, specific poster with a world only this product could own; below the demo the pinned section now earns its scroll by showing old paper turning into product, though the static page shows long quiet stretches there.
- Buyer's and founder's one-sentence read: As a treasurer I can see the Sunday count, both signatures and the ledger, I know it never touches money and the trial is free, but I still cannot see the price after 60 days.
- Engineer's one-sentence read: One static file, shipped fonts, no dependencies, works without network and without JS (no-JS shows every step inline), with keyboard focus handled in the demo and menu.

## Structural revision
- Weakest explanation or most template-like decision: The how section repeated what the visitor had already seen: its stage showed the demo's counting sheet, a ledger, and the hero's giving statement again (PS-05), and it never showed what each step replaces, the lane's "switching from the current tool" job.
- Change made (structure, not styling): Rebuilt each step's artifact as a before/after pair: the hand-tallied paper counting sheet with a corrected total under the signed Sunday 11 October count; a spreadsheet with "=SUM(C2:C40)-D7", "ask Ruth" and "#REF!" under the ledger; a half-written thank-you letter under the giving statement. The pinned stage now swaps pairs. Also cut the weeks strip from the trial section and one overlapping question, fixed the 768 phone/statement overlap and the mobile menu overlay.
- Before: shots/before/1440.png
- After: shots/1440.png
- Score after the change and what still keeps it from a 10: Proof 8/10 and Craft 8/10. A 10 needs a commissioned-quality illustration, a real price after the trial, and a stage that fills the empty stretches when the page is viewed as a static capture.
- Removal pass (each decorative element → its job, or "removed"): radial green wash behind the hero → ties the picture to the accent (kept); wood grain lines → read the surface as a table (kept); felt mat stitching → makes the mat a counting mat (kept); pen → props the scene as a working table (kept); banknote numerals → removed (SVG text broke the checker and added nothing); ruled lines on the before paper → removed; weeks-of-trial square strip → removed (weak drawing with a "9?" square); dimmed inactive steps → removed (contrast) and replaced by a green rule on the active step; stage progress dots → show position in the pinned sequence (kept).

## Remaining weaknesses
- What a buyer still cannot judge: price and card terms after the 60-day trial, where data is held and who can see it, how US dollar counts and US contribution statements look, whether counters need one phone or two.
- What was not verified: the trial URL (tallyhall.example) was not opened, as there is no network; Impeccable detect was not run; og.png and icons must be hosted at the domain for share cards to work.

## Status
DONE
