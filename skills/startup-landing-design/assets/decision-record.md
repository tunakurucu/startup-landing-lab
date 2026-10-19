# DESIGN-RECORD

Copy this file next to the page as `DESIGN-RECORD.md` and replace every prompt with a decision. Keep answers to a line or two and link logs instead of pasting them. Write `unknown` rather than leaving a field empty, and never present an assumption as observed evidence. `node scripts/verify-record.mjs <page-dir>` checks the record: it fails on a `- Label:` line with nothing after it, an empty cell in the decision tables, an unanswered checklist row, an unfinished marker, a missing or wrong-width screenshot, or a status line the evidence does not support. Exit 0 means the record is complete and honest; only `OK DONE` means the page was also rendered and checked.

## Product interpretation
- Audience, category, business model, brand constraints:
- Promise (who / what changes / how):
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

## Hypothesis
- Archetype and why:
- Type roles, faces and why they fit this product:
- Composition and grid:
- Ground, colour and material, and why this ground:
- Signature artifact and its local behaviour:
- Section sequence, with one section deliberately omitted:
- Primary interaction and motion purpose:

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice):

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
The other 64 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | | |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | | |
| PS-03 | The hero artifact is the product or its real output, not decoration. | | |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | | |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | | |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | | |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were compared and scored before any code. | | |
| PS-09 | Two references serve different jobs, one counterexample is named, and what is not borrowed is stated. | | |
| PS-10 | The page starts from one archetype recipe and records where it departs from it. | | |
| HR-02 | A centred headline above a framed screenshot is used only with a product reason in the record. | | |
| HR-03 | The headline has no single-word last line at any of the three widths. | | |
| HR-06 | The hero is sized with svh/dvh or content, not a fixed 100vh that clips under mobile browser bars. | | |
| HR-07 | Nothing in the hero waits for an animation before it can be read. | | |
| TY-13 | Each face has a role (display, text, data); a family is not added just to have two. | | |
| LY-07 | Density changes down the page on purpose: open, dense, quiet, active, short. | | |
| LY-10 | At 768px nothing is a cramped leftover of the desktop grid. | | |
| CO-06 | Accent colour marks state or action and is not sprinkled for decoration. | | |
| TT-04 | Section numbers appear only on content that is a real sequence. | | |
| TT-09 | Replacing the logo would not turn this into another company's page. | | |
| TT-10 | The signature idea still works if the palette changes. | | |
| TT-11 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | | |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine). | | |
| MO-08 | Staggers stay between 30 and 80ms and never block input. | | |
| MO-09 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | | |
| MO-10 | Text that must be read moves into place rather than fading in. | | |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk. | | |
| MB-07 | Fixed or full-bleed elements respect safe-area insets. | | |
| AX-12 | Results of local actions are announced (aria-live or role=status). | | |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | | |
| HP-02 | Every number has a source or is labelled illustrative. | | |
| HP-03 | Illustrative interfaces say so on the page. | | |
| HP-04 | The primary action leads somewhere real or produces a visible local result. | | |
| PR-01 | Every screenshot listed as evidence was opened, is not blank and is the width it claims. | | |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | | |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | | |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | | |
<!-- checklist:end -->

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
