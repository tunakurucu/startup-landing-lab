# DESIGN-RECORD — Drumbeat landing page

Built with the startup-landing-design skill (v0.3). Page: `index.html` (+ `docs.html`, `styles.css`, `app.js`, `fonts/`). Brief: `BRIEF.md`.

## Product interpretation
- Audience, category, business model, brand constraints: Node.js developers deciding whether to adopt an open-source background-job queue (developer infrastructure, free OSS package; no business model stated). No existing site, logo, palette or copy supplied; no customer logos, testimonials or benchmarks exist, and throughput must not be claimed.
- Promise (who / what changes / how): Node developers move slow work (emails, webhooks, resizes) out of the request and can always say where a job is (queued, running, waiting to retry, completed or failed) because Drumbeat keeps one job ID and one event history across every attempt.
- Conversion action and destination: primary "Read the docs" → `docs.html` (a lifecycle guide built with the page, because no docs URL was supplied); secondary: copy `npm install drumbeat` and run the local example in `#example`.
- Visitor doubt 1 → artifact: "What actually happens to a job when it fails?" → hero job-trace instrument: three scenarios (first try / fails once / out of attempts), clickable events, job snapshot at each event, beat track of attempts on a time axis.
- Visitor doubt 2 → artifact: "Can I try it without Redis, a server or an account?" → `#example`: install line + one in-memory script (`store: 'memory'`) with a forced first failure and its expected console output.
- Visitor doubt 3 → artifact: "How long until a job gives up, and can my team observe it?" → `#retries` retry planner (attempts × base delay × strategy → each attempt's time and the moment the job is marked failed) plus the `job:state` event shape in the limits section.

## Interview log
- Questions asked, each with the recommended default you offered: running unattended, so no questions were sent. Questions that would have changed the page, with defaults: (1) Primary audience: solo developers or platform teams? default solo/app developers, with platform-team questions answered in the limits section. (2) Real docs, repo and npm URLs? default: build a local `docs.html` lifecycle guide and link only real local destinations. (3) Real API and state names? default: plausible shape marked "illustrative API". (4) npm package name? default `drumbeat`. (5) Licence? default: not stated on the page.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults (client unavailable per instructions).
- Assumptions that change the page: copy addresses the developer who installs the package; platform-team concerns (events, idempotency, process lifetime) are a short section, not a parallel track. All API names, state names and timings are illustrative and labelled beside the code and the trace. Links the client must supply: docs URL (replace `docs.html` or point it at the reference), GitHub repository URL, npm package URL, licence name.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Canary (runcanary.ai), desktop+phone audit 2026-10-19: replays a real failure as terminal output plus a case file (test, break, root cause, fix) instead of listing features. Limit: its tabs self-advanced and ignored clicks; stats unsourced. | Make the failure path the evidence: show a job breaking, backing off and either recovering or giving up, with the reason attached to each step. | Yellow highlight bar, all-caps poster headline, document-style 01/02 section numbers, copy-the-prompt CTA, auto-advancing tabs, count-up stats. |
| Brand composition | Resend (resend.com), desktop audit 2026-10-18: left-aligned two-line headline with Get started and Documentation beneath a short explanation, open space, then an integration code chooser that swapped the snippet. Limit: subdued body text on black; very long sequence. | A quiet, left-anchored typographic promise can precede dense integration proof; documentation is a first-class action, not a footer link. | Serif display, black ground, light-ray focal effect, language chooser, testimonial carousel, Resend's wording. |
| Counterexample | AgentPhone (agentphone.ai), desktop+phone audit 2026-10-19: a scripted "live" call demo under the headline kept running under reduced motion, on a gradient with mascot drawings and a YC pill. | Inappropriate here: a self-playing demo would imply a running service Drumbeat does not have and would ignore reduced motion. Constraint retained: the trace changes only when the visitor acts and is labelled as a browser simulation. | Self-playing demo, gradient-and-mascot ground, backer badge, scripted timers. |

## Hypothesis
- Archetype and why: Typographic technical (recipe `typographic-technical.md`). Drumbeat is focused developer infrastructure where the buying questions are integration and failure behaviour; the lifecycle is a sequence, so the artifact is a trace, not a canvas or a world.
- Type roles, faces and why they fit this product: display DejaVu Sans Condensed Bold (compact, engineering-manual authority; not one of the overused display faces; self-hosted subset); body Inter Regular/SemiBold 18px (calm for long explanations; the recipe names it a sound body face); data DejaVu Sans Mono for code, job IDs, states and times only (shares the display's skeleton, so the trace and headline read as one system).
- Composition and grid: 12-column, max 1240px. Hero 5/7 split: promise left, job-trace instrument right. Example section reverses to code-wide; states section is a narrow reading column; planner is a 4/8 split; closing CTA is short.
- Ground, colour and material, and why this ground: cool light grey ground (#f1f2f4) with ink text, because the page is read like documentation in a browser next to an editor, and code panels stay dark like the terminal they come from. Colour is reserved for job state (queued grey, active blue, retrying amber, completed green, failed red); the primary action is ink black. Depth from 1px rules, not shadows.
- Signature artifact and its local behaviour: "Job trace" instrument: pick one of three scenarios; the event list, the beat track (attempts as ticks on a time axis, gaps = backoff) and the job snapshot update; clicking any event shows the job exactly as it was at that event. Runs entirely in the browser and is labelled "Simulation in your browser".
- Section sequence, with one section deliberately omitted: nav → hero (promise + trace) → run it locally (install + example + output) → the five states and their transitions → retry planner → before you depend on it (limits, events for platform teams) → docs CTA → footer. Omitted: a three-benefit "fast / reliable / simple" grid and any social-proof or benchmark band.
- Primary interaction and motion purpose: scenario and event selection in the trace; motion is only the beat-track playhead sliding to the selected event (shows time passing between attempts) and selection highlights. No entrance animation; nothing auto-plays.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure — split statement beside an operable trace (A) versus an open full-width statement over a full-bleed state timeline (B).

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | 5/7 split: left-aligned promise, Read the docs + local-example link; right: job-trace instrument with scenario switch, event list, beat track and snapshot | What happens when a job fails, and can I see it | 8 | 6 | 6 | 7 | 8 | Real API names and a trace produced by the actual package; a stronger brand mark tying the beat motif to the wordmark |
| B | Open headline across the width, install line under it; below the fold a full-width horizontal state lane diagram (queued → active → retrying → completed/failed) | Which states exist | 6 | 7 | 7 | 7 | 5 | The diagram would need to be operable and visible in the first screen; at 390px a horizontal lane diagram must become a vertical list |

Score each dimension 0–10.

- Chosen variant and why: A. The first doubt is behavioural (what happens on failure), and A answers it in the first screen with something the visitor operates; B explains vocabulary but pushes proof below the fold.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Three equal adjective cards | Block (risk) | The five states are a definition list with transitions, not cards; no Fast/Reliable/Simple row is planned. |
| Metrics without sources | Block (risk) | Trace timings labelled simulated; planner numbers are computed from the visitor's own inputs and say so; no throughput or adoption numbers anywhere. |
| Unsupported trust logos or testimonials | Block (risk) | None exist; none added. |
| Control without destination/result | Block (risk) | Docs button reaches local `docs.html`; copy buttons announce "Copied"; no repo/npm links until the client supplies them. |
| Fake liveness | Warn | No pulsing dot or auto-play in the trace; it is static until clicked. |
| Small tracked-caps label above every heading | Warn | Labels only on the instrument and code panels (they carry "simulated"/"illustrative" meaning), not above section h2s. |
| Overused display face | Warn | Inter is used for body only; display is DejaVu Sans Condensed Bold. |
| Section numbers on non-sequence content | Warn | No section numbers; only the attempt numbers inside the trace, which are a real sequence. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Opened. Not blank, 1440 wide. Full-width two-line headline (no single-word last line), lede, Read the docs, install line, and the trace showing scenario switch, beat track and four events in the first screen. Full page `shots/1440.png`: example, states, planner, limits, closing, footer render with no overlap. Trace states: `shots/states/1440-trace-first.png`, `1440-trace-once-retrying.png`, `1440-trace-exhaust-attempt2.png`, `1440-trace-exhaust-failed.png`; planner at 8 × 30 s `1440-planner-8x30s.png`; docs page `1440-docs.png` (fixed an invisible Docs label there). |
| 768×1024 | shots/768-top.png | Opened. Not blank, 768 wide. Hero stacks: headline in three lines ending "to its last retry.", lede, actions, then the trace at full width with its two-column body (events and snapshot) readable. Full page `shots/768.png`: example, states and planner stack to one column; limits stay 2-up with readable measure. |
| 390×844 | shots/390-top.png | Opened. Not blank, 390 wide. Headline in three lines, full-width Read the docs, install line visible; no horizontal scroll. Trace recomposed to one column (`shots/states/390-trace-once-retrying.png`, `390-trace-first.png`, `390-trace-exhaust-attempt2.png`, `390-trace-exhaust-failed.png`): scenario buttons wrap 2+1, events as time/state line plus full-width description, snapshot below. Code scrolls inside its labelled region (`390-example.png`); menu opens to full-width links (`390-menu-open.png`, fixed from shrink-wrapped links); planner at 8 × 30 s (`390-planner-8x30s.png`). |

Each screenshot cell is a relative `.png` path, or `unavailable: "<decisive error line>"` with the full log linked in the next cell. Open every PNG before listing it.

Rendering used `SLD_DEPS=/home/claude/startup-landing-lab` (dependency location only) against a local `python3 -m http.server` on 127.0.0.1:47311 serving this folder (an earlier attempt on port 8765 hit a different, already-running server; those captures were deleted unseen-as-evidence and the port changed after confirming the response contained "Drumbeat").

## Checker result
- JSON: check.json
- Failures fixed: TY-08 (block) in the first run (`shots/v1/check-v1.json`): the `<sup>` in the planner formula rendered at 10.8px; replaced with inline `2^(n−1)`. docs.html: TY-07 warning (the 13px draft note was the first paragraph) fixed by making it a non-paragraph label; final docs run `shots/check-docs.json` is 64/64.
- Warnings kept and why: none; final run is 64 passed, 0 block failures, 0 warnings, 0 not run.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` → "npm error code ENOTFOUND" (not installed, no registry access). web-design-guidelines: not run: not available in this environment.

## Checklist
The other 64 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png, 390-top.png: "open-source job queue for Node.js" (who), move slow work off the request and always know its state (what), one ID and one history per job across attempts (how). |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Eyebrow names the category; the headline plus the trace with states queued/active/retrying makes "a job queue with retries" readable at once (1440-top). |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero artifact is the job lifecycle itself (events, states, snapshot), simulated locally and labelled; no decorative screenshot. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Failure behaviour → job trace; try without infra → #example script + output; how long until it gives up / observability → #retries planner and the `job:state` limit (see Product interpretation). |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Trace shows one job; example shows how to run it; states define all transitions incl. manual retry; planner sizes any policy; limits add idempotency, process lifetime and events; closing is the action only. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log: five questions with defaults, run unattended, defaults applied and listed. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were compared and scored before any code. | pass | Two hero variants table (axis: structure), scored before index.html was written. |
| PS-09 | Two references serve different jobs, one counterexample is named, and what is not borrowed is stated. | pass | References: Canary (product explanation), Resend (brand composition), AgentPhone (counterexample), each with treatment not borrowed. |
| PS-10 | The page starts from one archetype recipe and records where it departs from it. | pass | Typographic technical recipe. Departures: h1 72px max (recipe min 3.5rem kept, max below 6.5rem) to stay near the family median; hero changed from 5/7 split to full-width statement over a 4/8 copy/trace row in the revision; a retry planner added between failure explanation and limits. |
| HR-02 | A centred headline above a framed screenshot is used only with a product reason in the record. | n/a | Headline is left-aligned and the artifact is an operable trace, not a framed screenshot. |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | 1440: "…enqueue to its last retry."; 768 and 390: last line "to its last retry." (shots/*-top.png). |
| HR-06 | The hero is sized with svh/dvh or content, not a fixed 100vh that clips under mobile browser bars. | pass | styles.css: hero height comes from content and clamp() padding; no vh units anywhere. |
| HR-07 | Nothing in the hero waits for an animation before it can be read. | pass | No entrance animation; trace default state is pre-rendered in the HTML (prerender of the "Fails once" state) so it reads before app.js runs. |
| TY-13 | Each face has a role (display, text, data); a family is not added just to have two. | pass | DejaVu Sans Condensed Bold for h1/h2 and wordmark, Inter for body and controls, DejaVu Sans Mono for code, IDs, states and times only. |
| LY-07 | Density changes down the page on purpose: open, dense, quiet, active, short. | pass | shots/1440.png: open hero statement → dense white code band → quiet states list → grey active planner band → two-column limits → short closing. |
| LY-10 | At 768px nothing is a cramped leftover of the desktop grid. | pass | shots/768.png: hero, example, states head and planner collapse to one column at ≤1080px; trace keeps a 2-column body that fits; limits 2-up at readable width. |
| CO-06 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Blue/amber/green/red appear only on job states, beat-track runs, backoff gaps and code tokens; actions are ink black; the wordmark's beats reuse active/completed meaning. |
| TT-04 | Section numbers appear only on content that is a real sequence. | pass | Only the three example steps (install, save, run) and attempt numbers are numbered; sections are not. |
| TT-09 | Replacing the logo would not turn this into another company's page. | pass | The page is built on Drumbeat's own job (send-receipt), its states, its retry policy and the beat-track motif named after the product. |
| TT-10 | The signature idea still works if the palette changes. | pass | State names, ✓/✕ marks, square vs round markers for failed vs others, and dotted vs solid segments carry meaning without colour. |
| TT-11 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Canary: no yellow bar, poster caps, numbered sections or prompt CTA. Resend: no serif, black ground, light ray or language tabs. AgentPhone: no self-playing demo, gradient, mascot or badge. Copy and numbers are original. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine). | pass | All :hover rules are inside `@media (hover: hover) and (pointer: fine)` in styles.css. |
| MO-08 | Staggers stay between 30 and 80ms and never block input. | n/a | No staggered animations on the page. |
| MO-09 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contract below the table: playhead, selection highlight, button hover states. |
| MO-10 | Text that must be read moves into place rather than fading in. | pass | No text fades; trace and planner content swap immediately; only backgrounds/borders and the playhead transform transition. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | shots/states/390-trace-*.png: one-column events with full-width descriptions, snapshot below; planner list reflows (390-planner-8x30s.png). |
| MB-07 | Fixed or full-bleed elements respect safe-area insets. | pass | `.wrap` and the phone nav use `max(var(--gutter), env(safe-area-inset-*))`; footer adds `env(safe-area-inset-bottom)`; viewport-fit=cover set. |
| AX-12 | Results of local actions are announced (aria-live or role=status). | pass | Copy results in role=status; snapshot title and plan summary are aria-live polite (index.html). |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page or docs. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Trace timings labelled "Simulated in your browser · illustrative timings"; output labelled "timings illustrative"; planner numbers computed from the visitor's inputs with the formula shown; no throughput figures. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Labels sit in the trace header, the code panel header, the output header, beside the events snippet and atop docs.html. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Read the docs → docs.html (real page); Run the local example ↓ → #example; Copy → clipboard with announced result (verified "Copied to your clipboard." at 1440 and 390); nav anchors exist. Links client must supply: docs URL, repository, npm page, licence. |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, and the signature artifact was captured in each of its states. | pass | All six renders opened; trace captured in first-try, fails-once (retrying), exhaust (attempt 2) and exhaust (failed) at 1440 and 390 in shots/states/. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section: shots/v1/1440-top.png → shots/1440-top.png, hero rescored. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass in Structural revision. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Render and checker ran clean, no unverified rows; optional tools that could not run are listed above and are not part of the 100 checks. |
<!-- checklist:end -->

Motion contract:
| Animation | Trigger | State change and purpose | Static fallback | Duration / easing |
| --- | --- | --- | --- | --- |
| Beat-track playhead | Selecting a scenario or an event | Dashed marker slides (transform: translateX) to the selected event's time to show how much time passed between attempts | Marker jumps to the position; reduced motion sets duration 0 | 220ms cubic-bezier(.2,.7,.2,1) |
| Selection highlight | Selecting an event or scenario | Row/button background and border mark the current step | Immediate selected state | 160–180ms same ease |
| Button and nav hover | Pointer hover (fine pointers only) | Shows the control is actionable | No hover on touch | 160ms same ease |

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Every section has same width and padding | Warn | First render had example, states and planner all in the same 4/8 heading-left layout; states now runs its heading across the top and the list full width; paddings differ per section (check LY-05 pass). |
| Scaled-down desktop on mobile | Block (checked) | Not present: trace, planner and menu recomposed at 390 (shots/states/390-*). Phone menu links were shrink-wrapped in v1; fixed to full-width rows. |
| Control without destination/result | Block (checked) | Docs page nav "Docs" label was invisible (ink on ink) on docs.html; fixed. All other controls produce a result. |
| Small tracked-caps label above every heading | Warn (checked) | Not present; labels are mixed-case mono and only on artifacts. |
| Fake liveness | Warn (checked) | Not present; nothing moves without input. |

## Structural revision
- Weakest explanation or most template-like decision: the v1 hero put a 4-line headline in a 5/12 column beside the trace, which squeezed the trace's event descriptions into a narrow third column (4–5 lines per event at 1440) and wrapped the snapshot's data; the proof read as cramped. Also states/planner/example repeated the same heading-left 4/8 layout.
- Change made (structure, not styling): hero recomposed from a 5/7 side-by-side split to a full-width two-line statement above a 4/8 row (copy and actions left, trace right); event rows changed from three columns to time + (state over description); the states section moved its heading above a full-width list instead of the repeated left column.
- Before: shots/v1/1440-top.png
- After: shots/1440-top.png
- Score after the change and what still keeps it from a 10: Fit 8, Identity 7, Originality 6, Composition 8, Proof 8 (was 8/6/6/7/8). Not a 10: API and timings are illustrative rather than produced by the real package, and there is no repository link or real docs URL yet.
- Removal pass (each decorative element → its job, or "removed"): wordmark beats → brand mark that encodes attempts and a completed beat; dashed playhead → current time in the trace; dotted backoff segments → wait time between attempts; white code band and grey planner band → separate proof from interactive tool by reading mode; 1px rules → grouping; ink rule above states and closing → marks a reference list and the end of the argument. Removed before shipping: a repeating-gradient striped backoff fill and striped playhead (filler texture, replaced by dotted/dashed borders).

## Remaining weaknesses
- What a buyer still cannot judge: the real API, package name, licence, maintenance activity and production storage options, because none were supplied; experienced engineers will look for a GitHub link the page cannot honestly provide yet. No performance figures exist (correctly).
- What was not verified: the illustrative API against the real package; behaviour on real Safari/Firefox (only Playwright Chromium was used); Impeccable and web-design-guidelines (not available). Opening from disk was checked separately (file:// load: no console errors, zero non-file requests, all five self-hosted font faces loaded, trace operable; shots/states/1440-from-disk.png).

## Status
DONE
