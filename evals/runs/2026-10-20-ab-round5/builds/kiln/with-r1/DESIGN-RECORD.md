# DESIGN-RECORD

Kilnlog landing page, `index.html`, built in Build mode on 2026-10-20 from `BRIEF.md`. Static, opens from disk, no network assets.

## Product interpretation
- Audience, category, business model, brand constraints: Community pottery studio owners (payers) and their members (weekly users); a kiln booking app with a firing log; paid by studios after a free 30-day trial; must feel warm and potter-made yet be trustworthy with a studio's schedule. No existing brand files; name and trial URL from the brief.
- Promise (who / what changes / how): Studio owners and members stop running the kiln on a door sheet and a group chat; members claim shelf space, follow loading/firing/cooling, and get a message when pieces are out, all from their phone.
- Five-second line, quoted as shown in the first screen (who + what): "Kilnlog is a kiln booking app for community pottery studios."
- Current alternative, including doing nothing: a paper sign-up sheet taped to the kiln room door plus a group chat where people ask "is it out yet?" all day (doing nothing = keep both).
- The one advantage only this product has: the kiln's state and its shelf claims live in one place members can check from anywhere, and members are told when their pieces come out, which neither paper nor chat can do.
- Category frame (existing, subcategory or new) and what it costs to teach: existing subcategory, "kiln booking app for pottery studios"; costs one plain sentence, given in the five-second line.
- Best-fit customer, and who it is not for: owners of community pottery studios with shared kilns and members who fire every week; not for solo potters with their own kiln, and members cannot sign up on this page (their studio invites them).
- Users' own words (three phrases with source, or 'none yet'): none yet from users directly; the brief relays one member phrase, "is it out yet?", which the headline adapts.
- Biggest reason not to click, and the line that answers it: owner doubt about cost and whether members must sign up too; answered beside the button: "Free for 30 days, for studio owners. Members don’t sign up here; their studio invites them."
- Conversion action and destination: "Start your free 30-day trial" → https://kilnlog.example/start (supplied by the brief).
- Visitor doubt 1 → artifact: "What does a member actually do with it?" → the sample kiln in the hero: claim a shelf spot, switch Loading/Firing/Cooling/Out, see the message.
- Visitor doubt 2 → artifact: "What does it replace in my studio?" → the door sheet and group chat sample beside a three-row before/after ledger.
- Visitor doubt 3 → artifact: "Can I trust it with the studio schedule?" → the sample firing log (a week of firings, stages and claimed spots) plus the "in use at three community studios since spring" line by the action.

## Interview log
- Questions asked, each with the recommended default you offered: none asked; the task states nobody will answer. Defaults I would have offered: (1) primary action = owner trial, default yes; (2) show pricing, default no (not supplied); (3) name the three studios, default no (not permitted).
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: one kiln per studio in samples (multi-kiln not claimed); no prices shown; no store badges or platforms named; who updates the kiln stage is not stated.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Cal.com (casebook, audited 2026-10-20): hero shows the booking surface invitees use; limit: its chips and dates did nothing when clicked | Put the surface members use in the first screen, and make every control on it respond locally | Its white card on grey, release pill, OAuth buttons, star ratings and logo rows |
| Brand composition | snag (casebook, 2026-10-19): one warm coloured band holds only the headline and the operable control, with the result already visible beneath | One warm band owns the first screen and contains the working artifact, result included | Lowercase voice, peach colour, pill search bar, listing shelves and app banner |
| Counterexample | Finni Health (casebook, 2026-10-20): mascot, many saturated bands and a logo marquee to feel warm; limit: weak contrast, motion ignoring reduced motion | Warmth must come from the subject (clay, kiln, shelves), not a mascot or many colour bands, because an owner is trusting it with a schedule | Mascot, multiple saturated bands, unsourced outcome ranges, moving logo row |

Departures from the functional-entrance recipe: display face is a slab-like serif (DejaVu Serif / Rockwell) rather than the recipe's compact sans, for the stamped, made-by-hand register; the ground is a vivid terracotta band rather than a quiet base, taken from fired clay.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): pyrometric witness cones; kiln shelves and posts; the sign-up sheet taped to the kiln room door; "is it out yet?" in the group chat; potters' chop marks stamped into a foot; bisque versus glaze firings; greenware turning to bisque colour; the firing log notebook; the load, fire, cool, unload ritual; kiln wash on shelves; terracotta and firebrick colours; clay on hands while checking a phone
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Kilnlog" with seed 3005483955: object portrait, product as a toy, character with a job, canon.
- Chosen move and why, or canon and the buyer-risk reason: product as a toy. Claiming a shelf spot and moving the kiln through its stages is the product's core loop, playable in seconds with sample content; the default state is already a readable kiln. Object portrait was close (the door sheet) but shows the old way, not the product; a character risks the owner's trust. My own pick would have been the audience's notation (the firing log), familiar because a log table is what most booking pages show; it lives lower on the page instead.
- Idea sentence ("[inventory thing] becomes [the move]"): The kiln's shelves and the door sign-up sheet become a toy kiln you load, fire and unload, ending in the "it's out" message.
- The same sentence with the nearest competitor, and why it fails: "A generic class-booking app's schedule becomes a toy kiln you load and fire" fails: booking apps sell class slots, not shelf spots inside a kiln with firing stages, and the group chat cannot send an "it's out" message at all.
- Statement level (quiet, bold or loud) and why: bold; the kiln owns the first screen, the sections below stay quiet and carry proof, because the payer is a small-business owner who needs to trust it.
- First viewport at 1440 (placement, sizes, live thing, refused default): terracotta band; nav row; left 5/12 holds the 64px slab-serif h1 on two lines, the five-second line, cream "Start your free 30-day trial" button with its line, and the "three studios" line; right 7/12 holds the sample kiln card (about 650×600) with stage tabs, readout and message above three shelves of four spots; the next section's heading peeks at the fold. Refused default: a centred headline with two buttons over a phone mockup screenshot.
- First viewport at 390: nav with Menu; 38px h1 on two lines ("Nobody asks" / "“is it out yet?”"); the five-second line; full-width button and its line; the kiln card from y≈418 with label, Reset, stage tabs, status, message and shelf 1 visible.
- Name test (the one with the …, eight words or fewer): the one with the kiln you load yourself

## Hypothesis
- Archetype and why: functional entrance; the product's value shows in one action (claim a spot, see the result), with workflow theater's stage stepper for the firing sequence.
- Type roles, faces and why they fit this product: display: DejaVu Serif bold (falls back to Rockwell, Roboto Slab, Georgia, ui-serif), a sturdy slab-like serif that reads like stamped kiln plates and chop marks; text: system-ui for the long practical sentences; data: ui-monospace for shelf names, sample labels and log headers.
- Composition and grid: 1240px max; hero 5/7 split collapsing to one column under 1000px; ledger-style rows below (the before/after, the firing log) instead of card grids.
- Ground, colour and material, and why this ground: fired terracotta band for the hero and the final action (the clay itself), kiln-wash grey for the reading sections, charcoal kiln body with firebrick interior; state colours only for state (orange firing, dull red cooling, green "message sent", terracotta for "your" spot and actions).
- Signature artifact and its local behaviour: `#kiln[data-signature]`, a sample kiln: three shelves × four spots, seven claimed by sample members' chop marks; tap an open spot to claim it (YOU), tap again to give it back, tap another to move; four stage tabs recolour the chamber and coils and change the status; Out turns pots to bisque colour and shows the sent message naming your shelf and spot; claiming outside Loading is refused with a reason; Reset restores everything.
- Signature on a phone (where the result shows after a tap): the status line and message sit directly under the stage tabs and above the shelves, so stage taps and spot taps both show their result inside the same 560px card.
- Sample audit (counts, weekdays, states and stated rules agree): 12 spots, 7 claimed (MR, JO, AK, DL, SB, TW, PH), 5 open, matching "7 of 12" in the hero and the log; claiming makes 8 of 12; message counts say 7 members (or you and the 7 other members); one kiln throughout; log: Monday glaze out, Tuesday bisque out, Thursday bisque loading, Saturday glaze next, with no dates so no weekday can be wrong; the sheet sample is the same Thursday bisque.
- To confirm with the client (claims and terms kept off the page): pricing after the trial; whether a card is needed for the trial; who changes the kiln stage (owner, a kiln tech, or a sensor); how members receive the message (push, SMS, email); iOS/Android/web availability; multiple kilns; spot limits per member; an absolute URL for the share image (og.png is shipped next to the page); names of the three studios and permission to show them.
- Section sequence, with one section deliberately omitted: hero with sample kiln → the door sheet and chat versus Kilnlog → the firing log with owner and member roles → final action → footer. Omitted: pricing table and testimonials (none supplied); a features grid.
- Primary interaction and motion purpose: tapping spots and stage tabs; colour transitions of 150–300ms confirm the state change; nothing moves by itself.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): emphasis of the artifact: the product working (A) versus the old way as an object (B).
- Category default and anti-default this plan avoids: default for booking SaaS is a white page, centred headline, blue button and a phone mockup screenshot; the craft-site default is cream ground, italic serif and handmade textures; the anti-default is a dark, technical "ops console" look. The plan uses a terracotta band, slab display, and a working kiln, matching none.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Split hero: headline and five-second line left, a playable sample kiln (shelves, stage tabs, message) right | What a member does and what an owner gets | 8 | 8 | 7 | 7 | 7 | Real studio names or a dated firing record next to the kiln |
| B | Full-width door sign-up sheet object, crossed-out names, peeling to reveal the Kilnlog firing card | What it replaces | 6 | 8 | 7 | 6 | 4 | An operable product state, not a still of the old way |

- Chosen variant and why: A; it shows the product working in the first screen, while B's sheet moves to section two where it explains the alternative.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches the category default or anti-default | Block | Checked: neither white-SaaS-with-phone nor cream-and-serif craft nor dark console; recorded above |
| Cream ground with a serif display | Warn | Ground is terracotta and kiln-wash grey, not cream; the slab serif has a product reason (stamped plates, chop marks) |
| Redrawn phone chrome | Warn | Avoided: the message is a plain notification card, no phone frame |
| Three equal adjective cards | Block | Not planned; sections are a ledger and a log table |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | h1 on two lines, five-second line and button above the fold, whole kiln visible, next heading peeks; full page shots/1440.png checked for section rhythm and footer |
| 768×1024 | shots/768-top.png | single column; button and its note side by side; kiln starts at y≈475 with tabs, readout and message visible; full page shots/768.png checked |
| 390×844 | shots/390-top.png | h1 two lines, no orphan; button full width; kiln from y≈418 with tabs, status and message; full page shots/390.png is about 5 screens |

Artifact states captured at 1440 and 390, after the revision: shots-states-after/ (1-loading, 2-claimed, 3-moved, 4-firing, 5-refused, 6-cooling, 7-out, 8-reset); before the revision: shots-states/.

## Checker result
- JSON: check.json
- Failures fixed: AX-11 (text spacing made the nowrap second headline line overlap the kiln at 1440; replaced the nowrap span with a line break, check-v1.json is the failing run); PF-06 (title now leads with the category); PF-07 partly (apple-touch-icon.png and og.png now exist).
- Warnings kept and why: ST-01, no price is shown because the brief supplies only the free 30-day trial, which is stated beside every action; PF-07, og:image is relative (og.png) because no absolute site URL for assets was supplied, listed under To confirm.
- Optional tools (Impeccable detect, web-design-guidelines): not run: no network to install, and `npx --no-install impeccable` was not attempted outside the allowed dependency path.

## Checklist
<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png and 390-top.png: "kiln booking app for community pottery studios" plus claim, see stage, get a message |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second test on the captures: pottery studios / book kiln shelf space and know when it's out / start trial |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The sample kiln is the member's core loop, operable |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Kiln toy, door-sheet before/after, firing log (Product interpretation) |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero = how it works; door = what it replaces; log = schedule and roles; the "three studios" line appears once |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Two hero variants table; A is the dealt toy move |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References section and recipe departures line |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "a kiln booking app for community pottery studios" |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Product interpretation; the headline is false for a door sheet plus group chat |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | h1, "The sheet on the door can’t tell you the kiln has cooled", "One firing log the whole studio reads", "Take the sign-up sheet off the kiln room door": all picturable and falsifiable |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet"; the h1 adapts the brief's "is it out yet?" |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "Free for 30 days, for studio owners. Members don’t sign up here; their studio invites them." |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings alone: nobody asks if it's out; the door sheet can't tell you it cooled; one firing log; take the sheet off the door |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | "Nobody asks" / "“is it out yet?”" at 1440, 768 and 390 |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | Hero is sized by content; no vh height in CSS |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | pass | The only supplied proof ("three studios since spring") sits under the hero action; no quotes |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Terracotta: actions and "your" spot; orange/red: firing and cooling; green: message sent |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | Statement section; kiln shelves, chop marks and firing stages are specific to this product |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Originality pass: no copy, colour, frame or control shape from Cal.com, snag or Finni |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | All :hover rules sit inside the hover/pointer media query; no staggers |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contracts below |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | At 390 the kiln keeps 44px+ spots, readout moves above shelves, labels stay legible (shots-states-after/390-*) |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | #status is role=status aria-live=polite |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page; chat bubbles are labelled as a sample |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Counts sit inside artifacts labelled "Sample…, written for this page"; "three studios" and "30 days" come from the brief |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Labels at the top of the kiln, the sheet and the log |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Trial buttons go to the supplied /start URL; nav and footer anchors resolve; kiln controls change visible state |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All opened; eight states at two widths in shots-states-after/ |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass below |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Nothing is unverified; checker exit 0 |
<!-- checklist:end -->

Motion contracts: stage tab press → chamber, coils and tab fill change colour to show the firing stage → immediate swap → 180–300ms ease-out on background-color. Spot claim → spot fill/border change → immediate → 150ms ease-out. Button press → scale .97 → none under reduced motion → 150ms ease-out. Under reduced motion only colour/opacity transitions of 150ms remain; nothing translates or scales.

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | n/a, the artifact has no text field; tapped a claimed (sample member) spot | Claimed spots are not buttons, so nothing happens and nothing implies it should | n/a: no input field, claimed spots are labelled images |
| Out of range | Tried to claim a spot while Firing, Cooling and Out | Refused: "Shelf spots can only be claimed while the kiln is loading. Press Loading to try it." | pass |
| Nonsense | Claimed, moved, gave back, then switched stages in random order | Counts stayed consistent (7 or 8 of 12), message wording matched claim state | pass |
| Repeat | Double-clicked the same open spot | First click claims, second gives it back, status says so each time | pass |
| Reset | Pressed Reset from Out with a claim | Back to Loading, no claim, 7 of 12, focus stays on Reset | pass |
| Keyboard only | Tab to tabs, spots and Reset, Enter/Space on each | All respond; focus ring visible; focus never drops (AX-12 pass) | pass |
| Phone | Operated every state at 390 (shots-states-after/390-*) | Result appears in the readout above the shelves, within the same screen (MB-07 pass) | pass |
| Reduced motion | Checker load with reduced motion (MO-01) | No movement; colour changes only; all states available | pass |
| Visitor's own input | Chose my own spot (shelf 3, spot 3) and ran it to Out | Message names "shelf 3, spot 3" and "you and the 7 other members" | pass |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Hero visual is decoration | Block | Not matched: the kiln is operable product behaviour |
| Cream ground with a serif display | Warn | Not matched: terracotta and grey grounds (CO-03 reports cream_ground false); serif kept for the stamped register |
| Every section has same width and padding | Warn | Not matched: wide hero split, ledger with sheet, log with side column, short final band |
| Small tracked-caps label above every heading | Warn | Not matched: sample labels sit only on artifacts (TT-03 0 of 3) |
| A built page indistinguishable from the last one | Warn | House-style pass: broke the habits of a dark or cream ground and a sans-only display; used a coloured clay band and a slab serif |

## Structural revision
- Weakest explanation or most template-like decision: the payoff, the "your pieces are out" message, sat under the shelves; on a phone it fell below the first screen, so tapping Out showed a status line but not the message, and on desktop a padded empty status box separated tabs from shelves.
- Change made (structure, not styling): moved the message into a readout strip with the status line, directly under the stage tabs and above the shelves; open spots now read "Empty" outside Loading so the kiln itself shows that claiming has closed.
- Before: shots-v1/390-top.png
- After: shots/390-top.png
- Score after the change and what still keeps it from a 10: variant A rescored 8 fit, 8 identity, 7 originality, 8 composition, 7 proof (composition 8/10 up from 7/10); still short of 10 without named studios or a real firing record, and the shelf drawing could carry more of the kiln's own detail.
- Removal pass (each decorative element → its job, or "removed"): tape strips on the sheet → say "taped to the door"; cone-pack logo → brand and the trade's witness cones; shelf posts → read as a kiln shelf, not a table; wall coils → change colour with the firing stage; pot silhouettes → show what is on each spot and turn bisque at Out; sheet rotation → marks it as paper, not UI; chamber min-height status gap → removed in the revision.

## Remaining weaknesses
- What a buyer still cannot judge: price after the trial, how members get the message (app push, SMS or email), and who in the studio moves the kiln between stages.
- What was not verified: the share card on a public URL (opened from disk only); how the display face renders on Mac and Windows (checked on this Linux Chromium, where DejaVu Serif renders as named).

## Status
DONE
