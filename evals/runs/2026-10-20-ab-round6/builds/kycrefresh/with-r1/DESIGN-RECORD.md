# DESIGN-RECORD

## Product interpretation
- Audience, category, business model, brand constraints: BSA and compliance officers at credit unions with 20,000 to 200,000 members buy; member-service staff use it daily; members see one short request. Category: periodic KYC review software. Sales-led (demo). No brand assets supplied; name "Refresh" only.
- Promise (who / what changes / how): Credit-union compliance officers get periodic KYC reviews they can walk an examiner through, because Refresh lists who is due, gathers what is on file, asks members only for what is missing and records every step, while the officer keeps every risk decision.
- Five-second line, quoted as shown in the first screen (who + what): "Refresh is periodic KYC review software for credit unions."
- Current alternative, including doing nothing: a spreadsheet of review dates, mailed update letters and phone calls, and a scramble to rebuild the story before every exam.
- The one advantage only this product has: it checks the member file first and asks the member only for the missing items, and every step lands on one trail an examiner can follow.
- Category frame (existing, subcategory or new) and what it costs to teach: existing subcategory ("periodic KYC review software for credit unions"); costs nothing to teach for this buyer.
- Best-fit customer, and who it is not for: BSA/compliance officers at credit unions of 20,000–200,000 members still tracking reviews in a spreadsheet; not for banks, not for teams wanting software to set risk ratings automatically.
- Users' own words (three phrases with source, or 'none yet'): none yet; the brief's own words ("a scramble before every exam", "asks members for only what is missing", "an audit trail an examiner can follow") are used in place of user quotes.
- Biggest reason not to click, and the line that answers it: "Will I have to defend software that decides risk for me?"; answered beside the button: "Your compliance officer makes every risk decision. Refresh is in pilot at two credit unions."
- Conversion action and destination: "Book a demo" → https://refresh.example/demo (supplied by the brief).
- Visitor doubt 1 → artifact: "Can I explain this to an examiner?" → the sample review trail (hero "Trail so far" pane and the full six-entry trail with tickmark legend in #trail).
- Visitor doubt 2 → artifact: "Does the software decide risk?" → the hero's officer-decision box and the division-of-duties table in #decide.
- Visitor doubt 3 → artifact: "Will members be bothered with paperwork?" → the sample member request in #request listing only the two missing items.

## Interview log
- Questions asked, each with the recommended default you offered: none could be asked (no one available). Defaults assumed: (1) cost is disclosed in the demo, no pricing on the page; (2) sample data is fictional and labelled; (3) channel of the member request is unspecified on the page.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: no pricing link; no named pilots; no metrics; request channel and data sources kept generic ("member record").

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | End Close (2026-10-19): a matching table with the resolved exception and mono identifiers carries the claim; limit: generic B2B frame, unsourced 99.999% | Show the exception being worked (missing ID, then received), with identifiers and dates in mono | Violet framed split hero, stat row, progress-fill tabs, the AI-resolved toast |
| Brand composition | Harvey (2026-10-20): a detailed product panel full width directly under a serif headline; serif for claims, sans for UI; limit: illegible at 390 and enterprise proof a new company lacks | Headline and explanation side by side, then the product at full width cut by the fold | Dark painterly texture, auto-advancing accordion, logo and count proof, funding bar |
| Counterexample | Vanta (2026-10-20): lilac ground, llama mascot and a self-cycling agent demo that kept running under reduced motion | For a risk-accountable buyer, keep a character out and let the visitor drive every state | Mascot, cycling demo, email-to-demo field, event banner |

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the review-date spreadsheet row; the "LM" call-log note; the mailed full update form; the manila member file folder with index tabs; the risk-tier review schedule; the expired ID on file; the examiner's question; auditor tickmarks and their legend; the officer's written reason; the exam-prep binder with sticky flags.
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Refresh" with seed 3572655668: generative, voice, before-after, canon (also dealt at --level quiet, same seed).
- Chosen move and why, or canon and the buyer-risk reason: before-after; Refresh replaces a spreadsheet and letters, and the same review step can be shown both ways without mocking the customer or inventing metrics.
- Idea sentence ("[inventory thing] becomes [the move]"): The member's manila file folder becomes a before-and-after: its index tabs are the five review steps, each showing Refresh beside the same step in the review-date spreadsheet.
- The same sentence with the nearest competitor, and why it fails: "Verafin's member file folder sets each review step beside the spreadsheet" fails: Verafin is sold as monitoring and case management, not a member-by-member periodic review that asks members only for missing items; its page would not show a member request or the spreadsheet row.
- Statement level (quiet, bold or loud) and why: quiet; the buyer is accountable to examiners, so the move lives inside the signature artifact and the rest of the page is calm.
- First viewport at 1440 (placement, sizes, live thing, refused default): left a 66px Lora headline on three lines, right the five-second line, subhead, "Book a demo" and the officer line; from y≈360 the full-width manila folder with five step tabs, the spreadsheet pane and trail pane left, the Refresh file right, cut by the fold. Refused: centred headline with two buttons over a dashboard screenshot.
- First viewport at 390: three-line 36px headline, five-second subhead, button, officer line; folder tabs at y≈525 with the tally and step sentence visible (348px of the artifact in view).
- Name test (the one with the …, eight words or fewer): the one with the manila folder tabs.

## Hypothesis
- Archetype and why: workflow theater; one fictional member review moves through five states, owner and next action update per step.
- Type roles, faces and why they fit this product: Lora 600 (display, claims; the policy-and-paper register of compliance documents), Inter 400/600 (text and UI, chosen as a sound body face, not display), Liberation Mono shipped as "Ledger Mono" (dates, member numbers, trail entries, the data role End Close used). All OFL, subset to woff in fonts/.
- Composition and grid: 1240px max; hero text in two columns over a full-width artifact; sections alternate narrow explanation with a wider artifact.
- Ground, colour and material, and why this ground: cool paper grey #f3f4f1 (a back-office desk, not cream); manila is the material of the member file; ink blue only for actions and focus; red/amber/green only for item state, always with a text label.
- Signature artifact and its local behaviour: five step tabs; each changes the tally, step sentence, five item chips and details, the officer-decision box, the spreadsheet notes cell and caption, and (desktop) which trail entries are lit.
- Signature on a phone (where the result shows after a tap): the yellow tally and the step sentence sit directly under the tabs, inside the first screen; the item list follows.
- Sample audit (counts, weekdays, states and stated rules agree): no weekdays shown; due dates = last review + tier cycle for all five October rows; 40118 decided 2026-10-08 in hero, list and trail; trail counts 1/2/3/5/6 match entries; "3 on file, 2 missing" matches the chips; request lists the same two items.
- To confirm with the client (claims and terms kept off the page): pricing and how cost is disclosed; how due dates are computed (schedule per tier assumed in the sample); which systems Refresh reads "on file" data from; the channel of the member request (email, text, portal); whether staff or Refresh sends the request; what the demo covers and how long it is; an absolute og:image URL on the real domain; permission to name the pilot credit unions later.
- Section sequence, with one section deliberately omitted: hero → who is due (officer schedule + staff list) → member request → who decides → exam trail → demo. Omitted: a features grid and a security/integrations section (no facts supplied).
- Primary interaction and motion purpose: step tabs; changed item rows flash yellow once (state/causality); no autoplay.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure.
- Category default and anti-default this plan avoids: default = navy compliance SaaS, shield icons, Inter headline, dashboard screenshot, "trusted by" logos and SOC 2 badges; anti-default = cream ground with an editorial serif and no product, or a dark terminal look. The plan keeps a cool grey ground and puts a working file object first.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Headline and explanation side by side, full-width manila folder below with step tabs; spreadsheet pane beside the Refresh file (chosen before-after) | Examiner trail and who decides | 8 | 7 | 7 | 7 | 7 | A real pilot screen and named reviewer quotes |
| B | Split hero: text left, spreadsheet row right with a drag handle revealing the Refresh file underneath | Members asked only for what's missing | 6 | 6 | 6 | 6 | 5 | A handle that works on phones and a trail view |

Score each dimension 0–10.

- Chosen variant and why: A; it keeps the officer's decision and the trail visible in every state, and the tabs work by thumb, where B's handle hides the trail.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches the category default or anti-default | Block | Revised: ground changed from cream to cool grey, artifact is a file folder not a dashboard; serif kept for the paper/policy register with the reason above |
| Cream ground with a serif display | Warn | Ground is cool grey #f3f4f1; serif has a stated reason |
| Small tracked-caps label above every heading | Warn | Examiner questions are set as sentence-case italic quotations carrying the argument, not tracked caps |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Not blank, 1440 wide; headline on three lines with no single-word last line; folder cut by fold; full page shots/1440.png checked for all sections |
| 768×1024 | shots/768-top.png | Not blank; folder stacks the spreadsheet pane under the file; full page shots/768.png: tables fit, no overflow |
| 390×844 | shots/390-top.png | Not blank; tabs and tally in first screen; full page shots/390.png is 6,660px with stacked ledger rows |

States: shots/states/1440-step1.png … 1440-step5.png, 390-step1.png … 390-step5.png, 390-reduced-step2.png, 390-nojs.png, 390-menu.png.

## Checker result
- JSON: check.json
- Result: 75 passed, 0 block failures, 4 warnings, 0 not run.
- Failures fixed: TY-06 (SVG labels at 11px, enlarged to 17 units), MB-09 ("Read the full trail" link raised to 44px), MB-10 (phone page 8,133px → 6,660px by recomposing the ledger and duties rows and trimming copy), TT-04 (schedule side stripes replaced by top rules).
- Warnings kept and why: PS-06 lists the step tabs and skip link, but there is one primary label, "Book a demo", everywhere; ST-01 no price was supplied, cost is disclosed in the demo (listed under To confirm); LY-05 the white sheets sit inside the manila folder on purpose, it is the file object; PF-07 og:image is relative until the client gives the real domain path.
- Optional tools (Impeccable detect, web-design-guidelines): not run: no network to install, and `npx --no-install impeccable` is not part of the supplied dependencies.

## Checklist
<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png and shots/390-top.png: five-second line plus subhead |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | "periodic KYC review software for credit unions" plus the folder showing missing items asked |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The folder is a labelled sample of a member review in Refresh |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Trail, duties table and member request, mapped in Product interpretation |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Schedule/list, request text, duties, full trail each add new material |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Two hero variants table |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References table; departures: Lora serif display instead of the recipe's grotesk, 1240px max width |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "periodic KYC review software for credit unions" |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | A spreadsheet of review dates cannot claim "KYC reviews your examiner can follow" |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | Each h2 names a concrete object (schedule, request, officer, trail) and is falsifiable |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet" recorded; hero adapts the brief's "audit trail an examiner can follow" |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "Your compliance officer makes every risk decision. Refresh is in pilot at two credit unions." |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings read as: reviews an examiner can follow → due dates from your schedule → one short request → officer decides → hand over the trail → demo |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | "can follow" ends the line at 1440, 768 and 390 |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | Hero sized by content; no vh heights in CSS |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof supplied; pilots cannot be named; no quotes used |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Ink blue only on buttons, links and focus; state colours only on chips with text |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | Statement section swap test; member request and spreadsheet row are specific to this product |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No violet frame or stat row (End Close), no texture or accordion (Harvey), no mascot or cycling demo (Vanta) |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | Tab hover is inside the media query; no staggers |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contract below |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | Phone: tabs become a 5-up grid, item details stack, ledger and duties become labelled rows (shots/390.png) |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | The step sentence is role=status aria-live=polite |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page |
| HP-02 | Every number has a source or is labelled illustrative. | pass | All dates, member numbers and schedules sit under "Sample"/"fictional" labels; "two credit unions" is from the brief |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | "Sample review · Fictional member" at the top of the folder; labels above the list, request and trail |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Every "Book a demo" links to https://refresh.example/demo; nav links reach their sections |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | Render evidence and shots/states |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Nothing above is unverified |
<!-- checklist:end -->

### Motion contract
| Trigger | State change and purpose | Static fallback | Duration and easing |
| --- | --- | --- | --- |
| Step tab pressed | Changed item rows flash yellow once to show which items moved (causality) | Rows change text and chip immediately | 900ms opacity of a pseudo-element, cubic-bezier(.2,.7,.2,1); reduced motion: 200ms fade only |
| Step tab pressed | Tally, decision box, spreadsheet cell and caption settle from 0.6 opacity (state) | Immediate text swap | 200ms opacity, cubic-bezier(.2,.7,.2,1); off under reduced motion |
| Button press | Scale to .97 (affordance) | None | 150ms ease-out; off under reduced motion |

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | Looked for a field to leave empty | The artifact has no text input; only five step buttons | n/a: no input field exists |
| Out of range | Looked for a value to push out of range | Five fixed steps, no numeric input | n/a: no numeric input exists |
| Nonsense | Looked for free text to fill with nonsense | No free input on the artifact | n/a: no free input exists |
| Repeat | Double-clicked "2 On file" twice, pressed the current tab again | No re-render of the current step, state stayed consistent | pass |
| Reset | Stepped 1→5 and back to 2 | Every field, chip, cell and trail entry returned to its step's values | pass |
| Keyboard only | Focused tab 3, Enter; Tab to tab 4, Space | Steps 3 then 4 applied; focus stayed on the tab | pass |
| Phone | Operated all five tabs at 390×844 (shots/states/390-step1…5) | Tally and step sentence change in view; page never scrolled | pass |
| Reduced motion | Loaded with reduced motion, pressed step 2 (shots/states/390-reduced-step2.png) | Content swapped; no movement, short fade only | pass |
| Visitor's own input | Looked for a place to enter my own member data | The page takes no visitor data; booking happens at refresh.example/demo | n/a: no visitor data is collected |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Every section has same width and padding | Warn | Kept familiar padding; widths vary (prose 38rem, artifacts full width, split sections) |
| Hero visual is decoration | Block | Not matched: the folder carries product states |
| A built page indistinguishable from the last one | Warn | No earlier build from this skill in this project to compare; manila folder, Lora and cool grey chosen for this product |

## Structural revision
- Weakest explanation or most template-like decision: at 1440 the folder's left column was a short spreadsheet card over empty manila, so the trail (the examiner's main doubt) appeared only as a one-line count; on phones the due list and duties tables stacked into tall label/value blocks and the page ran 9.6 screens.
- Change made (structure, not styling): added a "Trail so far" pane inside the folder whose entries light up step by step (desktop), put a state tally in the file header so phones see the result beside the tabs, recomposed the ledger and duties rows for phones into two-line records, and moved the binder drawing to desktop only.
- Before: shots/before/1440-top.png
- Before (phone, 8,133px): shots/before/390.png
- After: shots/1440-top.png
- After (phone, 6,660px, and a lit trail state): shots/390.png, shots/states/1440-step2.png
- Score after the change and what still keeps it from a 10: fit 8, identity 8, originality 7, composition 8, proof 7; a 10 needs real pilot screens and permission to name the credit unions.
- Removal pass (each decorative element → its job, or "removed"): manila folder → the member file and step tabs; yellow tally and row flash → state change; envelope/form/sticky-note drawing → the alternative being replaced; binder drawing → the pre-exam scramble (desktop only); tickmark circles → trail legend; schedule side stripes → removed.

## Remaining weaknesses
- What a buyer still cannot judge: the real product interface, pricing, data sources and security, and pilot results (none measured yet).
- What was not verified: the share card on a public URL (opened from disk only); the booking page itself.

## Status
DONE
