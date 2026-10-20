# DESIGN-RECORD

Page: `index.html` (opens from disk; no network, no web fonts). Mode: Build.

## Product interpretation
- Audience, category, business model, brand constraints: Phone visitors arriving from short videos; an iPhone evening-question app in TestFlight beta (about 200 open seats, no App Store listing); free during the beta, no pricing yet; brand is only the name "Lamplit". Constraints from the brief: no store badges or ratings, no reviews or endorsements, no wellbeing or therapy tone, promise no more than "stored on your device", nothing a visitor types may leave the browser.
- Promise (who / what changes / how): For someone who would never keep a journal, one small question arrives each evening and a line or two answers it; the answers stay on the phone, and a week of them reads like seven short lines.
- Current alternative, including doing nothing: Doing nothing (most visitors); Apple Notes; a journaling app (Day One, Apple Journal) that asks for whole entries and is abandoned.
- The one advantage only this product has: The unit of effort is one asked question and one line a night, not a blank page; the page lets the visitor do exactly that before installing anything.
- Category frame (existing, subcategory or new) and what it costs to teach: "An iPhone app that asks you one thing at the end of the day" (an X-for-Y of the journaling category). It costs one subhead sentence; the operable card teaches the rest.
- Best-fit customer, and who it is not for: Someone who wants a small record of ordinary days and will answer a one-line prompt on their phone. Not for people who want mood tracking, scores, therapy-style reflection or long-form journaling.
- Users' own words (three phrases with source, or 'none yet'): none yet (the brief states there are no reviews; nothing was invented).
- Biggest reason not to click, and the line that answers it: "What am I committing to by asking for a beta invite?" → beside the button: "Opens your mail app with a short note. Free during the beta, no card, no account."
- Conversion action and destination: "Request a TestFlight invite" → `mailto:invites@lamplit.app` with a prefilled subject and one-line body (the brief says there is nowhere to collect requests, so mail is the only honest destination; address to confirm, see Interview log).
- Visitor doubt 1 → artifact: "Is this another journaling app I'll abandon?" → the operable Tonight card in the first screen: one question, a two-line field, "Keep tonight's answer"; the size of the commitment is visible before any claim.
- Visitor doubt 2 → artifact: "Where do my answers go?" → the label under the card ("Nothing you type leaves this page"), the privacy section that promises only "stored on your device" and says why no more is promised, and the sample itself, which runs with no form submission.
- Visitor doubt 3 → artifact: "How do I get it if it isn't in the App Store?" → the TestFlight section: the three-step "What happens after you ask", seat count dated October 2026, free during the beta, same button.

## Interview log
- Questions asked, each with the recommended default you offered: (1) Where should invite requests go? Default: a mailto link to invites@lamplit.app with a prefilled subject. (2) Which questions does the app actually ask? Default: eight plain questions written for this page, labelled as the sample's list. (3) May the page say a blank evening is allowed (skipping)? Default: yes, as a sample-week behaviour, no streaks or notifications claimed. (4) Which domain hosts the page and share image? Default: lamplit.app in og:url and og:image. (5) Is "about 200 seats open" fine to state with a date? Default: yes, dated October 2026, in the TestFlight section only.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: invites@lamplit.app and https://lamplit.app/ are placeholders the client must replace; the question bank and the six sample answers are illustrative and labelled so on the page; the three-step reply process ("we reply with a TestFlight link, by hand, a few days") is the plausible process and must be confirmed.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | snag (functional-entrance, desktop-mobile audit 2026-10-19): the search control is the hero and real priced listings render directly beneath, so the first screen is already a result; limit: almost no explanation of trust, pre-filled city may misdirect, image motion ignores reduced motion. | Put the product's real input in the first screen and show its output directly below it, so the first action is using the product; on phones rebuild the control as stacked labelled fields with a full-width action. | The peach band, lowercase headline, pre-filled location, horizontal listing shelves and host-earnings strip. |
| Brand composition | Dia (immersive-editorial, reference tier, 2026-10-20): finished artifacts the product produces ("Sarah's Week Recap") carry the story instead of UI mid-task, with one conversion action kept persistent; limit: white-on-yellow contrast, an empty "Ask anything" field that is decoration, waitlist-only with nothing to try. | Show what the product produces (a kept week) as the evidence, and recompose a scroll-linked list into artifact-then-caption pairs on phones. | The yellow blurred ground, oversized serif wordmark behind a window, the sticky bottom arc bar and the numbered side list. |
| Counterexample | Oasiz (functional-entrance, 2026-10-19): the whole homepage is one screen with a wordmark, an App Store badge and an auto-advancing phone carousel over a pixel world; attractive for a consumer app, but there is no store badge to show here, the carousel ignored reduced motion and nothing explained the product. | Constraint retained: one install action worded the same everywhere, and real screens rather than mood; everything else (badge, carousel, device frame) rejected. | The device-frame carousel, the store badge and a single-screen page with no explanation. |

Departures from the functional-entrance recipe: the display face is a serif (Charter) rather than a compact sans, because the artifact is a line of handwriting-like text at night, not a terminal; the ground is dark warm (evening) instead of a quiet light base; body is the system sans so the app's own screen and the page share a texture on iPhone. Max width 1152px, functional surface capped at 28rem on desktop (recipe: 760px).

## Hypothesis
- Archetype and why: Functional entrance. The product starts from one input (tonight's question) and produces one output (a kept line in a week); the brief asks that the visitor answer the question and see a sample week in the browser, which is exactly the input → output → limits → cost → final action sequence of this family.
- Type roles, faces and why they fit this product: Display and answers in Charter (ships on iOS and macOS; Bitstream Charter on Linux; falls back to Iowan Old Style, Palatino, TeX Gyre Pagella, Georgia), weight 700, tracking −0.01em, because a kept line should read like a note, not a dashboard. Everything else in the system sans stack (-apple-system / SF on iPhone, Inter where installed), 17px/1.55, so the card looks like an iPhone screen. No mono face. Two roles, two families.
- Composition and grid: Mobile first, single column at 390: nav, headline, lede, action and its line, the Tonight card cut by the fold, then the week as a vertical list newest first. From 1088px a two-column hero (statement left, 28rem card right, vertically centred) with the week strip as seven columns directly beneath, starting inside the first screen. 768 stacks the hero (card capped at 34rem) and shows the week as two columns.
- Ground, colour and material, and why this ground: Deep plum-ink ground (#1b1720) with slightly lighter plum surfaces, because the app is used at the end of the day, usually in a dark room; one amber accent (#f2b84b, "lamplight") reserved for the primary button, the lit window glyph, the Tonight tag and focus rings. Surfaces are flat fills with no borders or shadows; one hairline rule separates the lower bands.
- Signature artifact and its local behaviour: The app's evening screen as a working card: tonight's question (chosen from an eight-question bank by day of year), a 240-character field with a live count, "Keep tonight's answer". Submitting an empty field explains that a blank evening is allowed; submitting text lights the window glyph in the card and in the Tonight row of the week strip, puts the line there, and announces it in a role=status line. Editing after keeping relabels the button "Keep the new line". Nothing is stored or sent; the sample says so beside the field.
- Section sequence, with one section deliberately omitted: Hero (promise, action, Tonight card, week strip) → "Your answers are stored on your device" → "The questions are small on purpose" (question bank) → "It is on TestFlight, not the App Store yet" (what happens after you ask, final action) → footer. Deliberately omitted: a feature grid / "why Lamplit" cards; also no founder or team section, because nothing about the team was supplied.
- Primary interaction and motion purpose: Keeping tonight's answer. The only motion is the window glyph's 200ms colour and opacity change when a day gains an answer, which shows that the day's state changed; the text itself swaps in immediately.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): Emphasis: statement-led (A) versus artifact-led (B).
- Category default and anti-default this plan avoids: Default for a journaling app: pastel gradient ground, centred headline, phone mockup with screenshots, App Store badge, three cards (Private / Simple / Daily). Anti-default: black ground, monospace manifesto with no product (the Known pattern). This plan is neither: a dark warm editorial ground, a serif display, and an operable evening screen with a week of kept lines beside it.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Statement left (h1, lede, invite button and its line), the operable Tonight card right; the sample week in the section below. | "Is this another journaling app I'll abandon?" (the size of one night's effort is visible before any claim) | 8 | 7 | 7 | 7 | 8 | A real question bank and real (consented) kept weeks instead of written samples; a confirmed invite destination. |
| B | The Tonight card is the first screen under a one-line h1; the invite button sits under the card; the week strip follows. | "What does it ask?" (the question is the first thing read) | 7 | 7 | 7 | 6 | 8 | Same as A, plus a way to keep the primary action in the first phone screen without pushing the question below the fold. |

Score each dimension 0–10.

- Chosen variant and why: A. On a 390px screen B pushes the invite button below the fold and a bare question with no framing reads like a quiz; A keeps who-it-is-for, the action and the top of the card in the first screen, and the week strip can still be pulled up under it.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Centred headline over a framed screenshot | Warn | Not used: the hero is a left-aligned statement beside a working card, and the card is the product's evening screen, not an image. |
| Coloured glow or halo as decoration | Warn | The only glow is a 30%-opacity amber disc inside the 24px window glyph, shown only when that day has an answer (state). No page-scale radial gradients. |
| Cream ground with a serif display, chosen by default | Warn | Serif display on a dark ground chosen for the evening use context; no cream. |
| Only destination-free actions | Warn | Primary label "Request a TestFlight invite" names verb and destination. |
| Control without destination/result | Block | Every control reaches something: mailto, in-page anchors, the keep button changes the card and the week row. |
| No reduced-motion rule | Block | `prefers-reduced-motion: reduce` sets the glyph and button transitions to none; nothing else moves. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | h1 three lines, no orphan ("on your phone."); button and its line, card, and the top of the week strip cut by the fold at ~790px; full page shots/1440.png: seven-column week, two-column bands, footer. |
| 768×1024 | shots/768-top.png | Hero stacked, h1 two lines, card capped at 34rem; full page shots/768.png: two-column week, two-column bands, nothing clipped. |
| 390×844 | shots/390-top.png | h1 three lines at 40px, button at 420–472px, card cut by the fold at ~580px; full page shots/390.png: week as a vertical list newest first, bands single column. |

Artifact states (opened and checked): shots/1440-card-emptysubmit.png and shots/390-card-emptysubmit.png (empty submit message, focus ring on the field), shots/1440-card-kept.png and shots/390-card-kept.png (kept line, lit glyph, "Kept" label, status line), shots/1440-week-empty.png and shots/390-week-empty.png (Tonight row unanswered), shots/1440-week-kept.png and shots/390-week-kept.png (Tonight row lit with the visitor's line). Editing after keeping relabels the button "Keep the new line" (logged by the state script at both widths).

## Checker result
- JSON: check.json
- Checker summary: 68 of 68 pass, 0 not run, checked from disk.
- Failures fixed: LY-02 and AX-11 (nav overflowed at 320px and under text spacing: the nav now wraps); TY-08 (serif answer, claim and list lines were at 1.3: raised to 1.4).
- Warnings kept and why: none remain. ST-01 passes on "Free during the beta"; there is no pricing page because the product has no price yet.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` → "npm error code ENOTFOUND" (package not installed, no network).

## Checklist
The other 68 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/390-top.png: "One small question a night, kept on your phone." + lede naming an iPhone app, one question at the end of the day, stored on your device. |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | shots/1440-top.png: headline, "Lamplit is an iPhone app that asks you one thing at the end of the day" and the question card are all in view. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The Tonight card is the evening screen and works; the week strip is its output (shots/1440-week-kept.png). |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Product interpretation: card (doubt 1), sample label + privacy band (doubt 2), TestFlight steps (doubt 3). |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero: promise and the act; week: what accumulates; privacy: the limit of the promise; questions: the mechanism and tone; TestFlight: how to get it. The seat count was removed from the hero line so it appears once. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log: five questions with defaults, no answer, defaults logged. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, and neither is the category's obvious default or the obvious "anti-default". | pass | Two hero variants section: axis = emphasis; default (pastel, mockup, badge, three cards) and anti-default (black manifesto) named and avoided. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References table (snag, Dia, Oasiz) and the departures note beneath it. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | Lede: "Lamplit is an iPhone app that asks you one thing at the end of the day" (shots/390-top.png). |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Product interpretation fields; "One small question a night" would be false on Day One's or Apple Notes' page. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | h1 (picture, falsifiable, not Day One's); "A week is seven short lines, not seven pages" (picture, falsifiable); "Your answers are stored on your device" (falsifiable, would be odd on a cloud journal's page); "The questions are small on purpose" (picture, falsifiable); "It is on TestFlight, not the App Store yet" (falsifiable, not a competitor's). |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet" recorded; the hero uses the brief's own phrase "one small question" instead. |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | Beside both buttons: "Opens your mail app with a short note. Free during the beta, no card, no account." (shots/390-top.png). |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings in order: one small question a night, kept on your phone → a week is seven short lines → stored on your device → the questions are small on purpose → on TestFlight, not the App Store yet. |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | 1440: "…on your phone."; 768: "…kept on your phone."; 390: "on your phone." (shots/*-top.png). |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | `.hero` has padding only; no vh/svh height anywhere in the CSS. |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof was supplied (no reviews, endorsements or customers); none was invented. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Amber appears on the primary button, lit window glyphs, the Tonight tag and focus rings only; list bullets and markers were changed from amber to neutral during the removal pass. |
| TT-05 | Replacing the logo would not turn this into another company's page. | pass | The headline, the dated evening question, the kept-line week with window glyphs and the "stored on your device, nothing more promised" copy are specific to this product. |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No peach band, lowercase headline or shelves (snag); no yellow ground, oversized wordmark, arc bar or numbered side list (Dia); no carousel, badge or device frame (Oasiz). Only shared grammar (an input in the first screen, a dark ground) is in common. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | Button hover transition is inside `@media (hover:hover) and (pointer:fine)`; there are no staggers. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Window glyph: trigger = keeping an answer; purpose = show the day's state changed; fallback = instant colour under reduced motion (transition: none); 200ms cubic-bezier(.2,.7,.2,1) on fill, stroke and glow opacity. Button hover: 150ms background/border, same easing, none under reduced motion. Text swaps are immediate. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | The seven-column week becomes a vertical list newest first with full-width rows (shots/390-week-kept.png); the card keeps every label and the full-width field at 390 (shots/390-card-kept.png). |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | `#status` has role="status" aria-live="polite" and receives the kept / empty messages. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | "About 200 seats are open as of October 2026" is dated and comes from the client brief; "0 / 240" is a live count; sample dates follow the device clock and the rows are tagged Sample. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | "A working sample of the evening screen. Nothing you type leaves this page" sits inside the card; each sample row carries a Sample tag; the question list says it is the sample's list. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Request button → mailto compose; keep button → kept line, lit glyph, status; nav and footer links → in-page sections (LY-06 and AX-08 pass). The mail address must be confirmed by the client (Remaining weaknesses). |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All PNGs in shots/ were opened; widths 1440/768/390 confirmed by verify-record; artifact states listed under Render evidence. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section: shots/before/1440.png → shots/1440.png. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass in Structural revision. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Nothing above is unverified; Impeccable is an optional tool recorded as not run. |
<!-- checklist:end -->

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Every section has same width and padding | Warn | Stays partly: the three lower bands share the measure, but the hero (split + seven columns) and the week list differ in density; the bands are the quiet argument after the active example. |
| Small tracked-caps label above every heading | Warn | None: the only uppercase labels are the Sample / Tonight tags on week rows (state and honesty), checker TT-03 reports 0 of 4 h2s. |
| Centred headline over a framed screenshot | Warn | Not present after render: left-aligned statement, operable card. |
| none else found | — | — |

## Structural revision
- Weakest explanation or most template-like decision: The sample week, which is the product's output and the proof that one line a night adds up, sat a full screen below the card as its own section; on a phone the visitor kept an answer and then scrolled past six sample days to find their own lit row at the bottom. The hero was a plain statement-plus-card split with nothing of the output in the first screen.
- Change made (structure, not styling): The week strip moved into the hero directly under the card, so at 1440 the strip's first rows are cut by the fold and at 390 it follows the card; the rows were reordered newest first so the Tonight row is the first thing under the card; the privacy band moved above the question bank so the data doubt is answered before the mechanism. (Also in the same pass: seven-column cells recomposed with a head row, the bell-shaped glyph replaced by a window.)
- Before: shots/before/1440.png
- After: shots/1440.png
- Score after the change and what still keeps it from a 10: Fit 8, Identity 7, Originality 7, Composition 8, Proof 8 (8/10 overall). A 10 needs the real question bank, real consented weeks instead of written samples, a confirmed invite destination and a share card verified on the live domain.
- Removal pass (each decorative element → its job, or "removed"): window glyph → day state (answered / not); amber disc inside the glyph → the "lit" state, 30% opacity, only when answered; Sample / Tonight tags → honesty label and state; card and row fills → group the artifact and each day; hairline rules between bands → separate the quiet bands; amber list bullets and step markers → removed (now neutral); baseline stroke under the tonight glyph → removed; skip link made visually hidden until focused; text-wrap balance → kept on headings only.

## Remaining weaknesses
- What a buyer still cannot judge: whether the real app's questions match the eight on the page; what the app looks like beyond the evening screen (no screenshots were supplied, so none were drawn); who makes it; when an invite will arrive. "About 200 seats as of October 2026" rests on the brief.
- What was not verified: the mail address invites@lamplit.app and the domain lamplit.app in og:url / og:image are placeholders to confirm; the share card (share.png, 1200×630, included) can only be checked on a public URL; Charter rendering on Android (falls back to the serif stack) was not rendered; Impeccable detect did not run (not installed, no network).

## Status
DONE
