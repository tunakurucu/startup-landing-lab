# DESIGN-RECORD

Copy this file next to the page as `DESIGN-RECORD.md` and replace every prompt with a decision. Keep answers to a line or two and link logs instead of pasting them. Write `unknown` rather than leaving a field empty, and never present an assumption as observed evidence. `node scripts/verify-record.mjs <page-dir>` checks the record: it fails on a `- Label:` line with nothing after it, an empty cell in the decision tables, an unanswered checklist row, an unfinished marker, a missing or wrong-width screenshot, or a status line the evidence does not support. Exit 0 means the record is complete and honest; only `OK DONE` means the page was also rendered and checked.

## Product interpretation
- Audience, category, business model, brand constraints:
- Promise (who / what changes / how):
- Five-second line, quoted as shown in the first screen (who + what):
- Current alternative, including doing nothing:
- The one advantage only this product has:
- Category frame (existing, subcategory or new) and what it costs to teach:
- Best-fit customer, and who it is not for:
- Users' own words (three phrases with source, or 'none yet'):
- Biggest reason not to click, and the line that answers it:
- Conversion action and destination:
- Visitor doubt 1 → artifact:
- Visitor doubt 2 → artifact:
- Visitor doubt 3 → artifact:

## Interview log
- Questions asked, each with the recommended default you offered:
- Answers, or "no answer; proceeded on defaults":
- Assumptions that change the page:

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | | | |
| Brand composition | | | |
| Counterexample | | | |

## Statement
- Subject inventory (8–12 things only this product owns; semicolons):
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed):
- Chosen move and why, or canon and the buyer-risk reason:
- Idea sentence ("[inventory thing] becomes [the move]"):
- The same sentence with the nearest competitor, and why it fails:
- Statement level (quiet, bold or loud) and why:
- First viewport at 1440 (placement, sizes, live thing, refused default):
- First viewport at 390:
- Name test (the one with the …, eight words or fewer):

## Hypothesis
- Archetype and why:
- Type roles, faces and why they fit this product:
- Composition and grid:
- Ground, colour and material, and why this ground:
- Signature artifact and its local behaviour:
- Signature on a phone (where the result shows after a tap):
- Sample audit (counts, weekdays, states and stated rules agree):
- To confirm with the client (claims and terms kept off the page):
- Section sequence, with one section deliberately omitted:
- Primary interaction and motion purpose:

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice):
- Category default and anti-default this plan avoids:

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | | | | | | | | |
| B | | | | | | | | |

Score each dimension 0–10.

- Chosen variant and why:

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| | | |

If nothing matched, write one row: `none found | — | —`.

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | | |
| 768×1024 | | |
| 390×844 | | |

Each screenshot cell is a relative `.png` path, or `unavailable: "<decisive error line>"` with the full log linked in the next cell. Open every PNG before listing it.

## Checker result
- JSON:
- Failures fixed:
- Warnings kept and why:
- Optional tools (Impeccable detect, web-design-guidelines): result, or "not run: <reason>":

## Checklist
The other 79 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | | |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | | |
| PS-03 | The hero artifact is the product or its real output, not decoration. | | |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | | |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | | |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | | |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | | |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | | |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | | |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | | |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | | |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | | |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | | |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | | |
| HR-03 | The headline has no single-word last line at any of the three widths. | | |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | | |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | | |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | | |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | | |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | | |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | | |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | | |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | | |
| AX-10 | Results of local actions are announced (aria-live or role=status). | | |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | | |
| HP-02 | Every number has a source or is labelled illustrative. | | |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | | |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | | |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | | |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | | |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | | |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | | |
<!-- checklist:end -->

## Artifact stress test
Operate the signature artifact the way a curious, impatient or careless visitor would, at 1440 and 390. One row per probe; `n/a` needs the reason (an artifact with no input has no empty-input probe). A `fail` is fixed before the status can be DONE.

| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | | | |
| Out of range | | | |
| Nonsense | | | |
| Repeat | | | |
| Reset | | | |
| Keyboard only | | | |
| Phone | | | |
| Reduced motion | | | |
| Visitor's own input | | | |

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| | | |

## Structural revision
- Weakest explanation or most template-like decision:
- Change made (structure, not styling):
- Before:
- After:
- Score after the change and what still keeps it from a 10:
- Removal pass (each decorative element → its job, or "removed"):

## Remaining weaknesses
- What a buyer still cannot judge:
- What was not verified:

## Status
<!-- Exactly one line: DONE, DONE_WITH_CONCERNS: <what is unverified>, or BLOCKED: "<quoted error>" -->
