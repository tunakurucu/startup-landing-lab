# Three briefs, three directions

These are qualitative design decisions, not measured conversion improvements. All brands, people, sample events and workflows are fictional.

## Relayline: developer infrastructure

Audience: engineers evaluating webhook reliability. Doubts: can I follow an event, distinguish failure types, and decide what happens next? Primary action: inspect a local trace.

Reference jobs: Resend informs concrete integration proof; Firecrawl informs a useful input/output entrance. Counterexample: Mercury's immersive scene would add ambiguity to a narrow technical evaluation. Borrow neither the serif-on-black treatment nor the ruled orange API aesthetic.

Hypothesis: a light technical instrument with a persistent event identity will make reliability inspectable. Sans-serif display, monospace identifiers, blue-gray surfaces, square outlines and a sequential trace establish the system. Narrative: promise → continuity principles → stateful example → honest scope.

Implemented artifact: the hero *is* the instrument. The statement, scenario choice and download sit on the left; the live delivery record with its attempt path, selectable steps and inspector sits on the right. There is no separate "try it" section lower down. Two scenario modes, four steps each; selecting a pressed step again clears the inspector to an explicit empty state. Details distinguish transient failure from authentication failure. Download exports illustrative JSON. No remote webhook is sent.

Structural revision (v0.2): the first version opened on a static delivery-record card and placed the working explorer two sections below, which is the same hero → explanation → widget → closing grammar the other two demos used. The recipe for this family names "offset statement + working trace instrument" as its first hero structure, so the explorer moved into the hero and the separate section was removed. The page now has three sections instead of four, and the first interaction is available without scrolling. On phones the attempt path stays horizontal at a smaller size and the step list directly below it is the readable sequence.

Continuity stage (v0.5): the second section used to set its three principles in a row of columns. It now holds the same delivery record as the hero, read one attempt at a time while the visitor scrolls, with the three principles as captions beside it. A trace is content about change, which is the one case where the motion reference says animation explains more than a still, and the record is already the page's artifact, so this is the demo that carries the project's scroll-linked showcase; the full contract is in the motion table below. The record is a table (time, step and its detail), not prose, so the page's reading grade is unchanged.

## Sidequest: consumer creativity

Audience: people stuck before a blank page. Doubts: where do I start, does it need to be good, and can I keep the idea? Primary action: deal a creative brief.

Reference jobs: PostHog informs a coherent expressive world; Onlook informs showing the creative activity. Counterexample: Linear's dense technical interface would turn a small ritual into work. Borrow neither desktop chrome nor an editor canvas.

Hypothesis: a friendly paper-like deck with three odd constraints will make starting feel small and playful. Heavy sans-serif mixes with italic serif, warm cream/pink/lime fields, rotated cards, original geometric character and a large typographic entrance. Narrative: invitation → creative permission → three-part brief → encouragement.

Implemented artifact: four original briefs, user-controlled dealing, palette changes and a downloadable text brief. No feed, score, AI call or account. Mobile stacks the cards at readable sizes and simplifies the hero illustration. Motion stays at a short state-color transition and is removed under reduced motion.

## Fieldwork: professional operations

Audience: operations and product teams losing context during handoffs. Doubts: who owns this, what was decided, and what happens next? Primary action: read and compare a sample handoff.

Reference jobs: Stripe informs organizing breadth around buyer decisions; Mercury informs pairing an ambitious opening with concrete product explanation. Counterexample: PostHog's exploratory world would compete with the promise of clarity. Borrow neither gradient field nor landscape or desktop interface.

Hypothesis: an editorial working brief makes ownership more credible than abstract efficiency claims. Serif-led display, olive/cream palette, rules, chapter markers and an asymmetric hero support a calm, accountable voice. Narrative: promise → three-stage handoff → ambiguity → structured brief → operating principles → close.

Implemented artifact: two workflow examples, structured/informal comparison and a downloadable brief. People are sample characters. The illustrative quote is labelled, not presented as customer proof. Mobile turns the horizontal handoff into a vertical reading sequence.

Scroll revision (v0.5): the first version revealed the handoff columns, the chapter numeral, the field note and the three principles as they scrolled into view, with delays of up to 400 ms on top of a 450 ms slide. That is scroll-triggered motion on copy, which the motion reference rules out: the text moved after the visitor had already reached it, and anything already on screen at load jumped once the observer attached. Every block of copy is now in place at first paint and stays there. The only reveal left is on the two arrows of the handoff strip, which are supporting graphics; its contract is in the table below.

## Gate warnings we kept, and why

The skill's checker (v0.6) runs 79 automatic checks on every page in CI. No page has a block failure. The warnings below stay, each with the product reason the checklist asks for; `tests/browser/skill-gate.spec.ts` lists exactly these per route and fails if any other warning appears or any of these goes away unrecorded; PF-05, a lab timing, is held to a per-route budget there instead of matched exactly.

| Page | Check | Why it stays |
| --- | --- | --- |
| Every gallery page | TY-10 four type families | Each face has one job: Schibsted Grotesk for display, Inter for text, IBM Plex Mono for data and labels, Instrument Serif italic as the accent inside headlines. Dropping the accent would remove the gallery's signature; dropping the mono would blur the data from the prose. |
| Field guide, Experiments | HR-02 no primary action in the first screen; ST-03 no filled or bordered action | Index pages. The action is choosing a record or an experiment from the list; a single hero button would be a decoy above the real choices. The record and demo links inside the lists are the actions. |
| The skill | CP-11 reading grade 11.1 | The audience is engineers installing an agent skill; the page is install commands, client names and three example prompts written the way they would be typed. Simplifying the prompts would make them worse prompts. |
| Experiments | CP-11 reading grade 11.0 | The page is 106 words, most of them category labels ("Developer infrastructure", "Professional operations") and principle tags, which the formula counts as sentences. The two prose sentences score under grade 9. |
| References index | CP-11 reading grade 9.1 | The index prints each audited record's one-sentence summary as the auditor wrote it (3,493 words across 136 records), with company and category names the formula counts as long words. It sits 0.1 over the line; shortening the summaries would change the research. |
| Record pages (`/reference/…`) | CP-11 reading grade about 11 | The page is the audit record itself: observations, measurements and limitations written for designers and engineers, naming computed values and typographic terms. Rewriting the research for grade 9 would change what was observed. |
| Home, Field guide, Evals | MB-10 longer than eight phone screens | These are an index of 136 records, the project's front page and an evaluation report, not product landing pages. Their length is the content; each declares `data-signature="none"` with that reason, which `verify-record` would refuse on a landing page build. |
| Record pages (`/reference/…`) | PF-05 lab LCP about 3 s on the throttled phone profile | A record is a deep link into the 135-record catalog. The page frame paints at about 1.9 s like every other route; the record itself arrives with the catalog chunk (164 kB compressed) a second later. Splitting the catalog into one chunk per record needs a build step the project does not have; until then the gate test budgets this route at 4 s instead of 2.5 s. |
| Relayline | TY-10 common display face (Inter) | Identity comes from the trace and the monospace identifiers; the display face is deliberately neutral so it does not compete with the instrument. |
| Relayline | ST-06 code shown, no docs link in the header | Relayline is fictional and has no documentation. A header "Docs" link that scrolled to a prose section would promise a destination it cannot reach (HP-04), so the header offers the working trace instead. |
| Sidequest | TY-10 four type families | Bricolage Grotesque display, Instrument Serif italic accent, Inter text, IBM Plex Mono for the sticker and labels. Same roles as the gallery, in the playful register. |
| Sidequest | TT-03 tracked-caps label above every section | The labels set the tone of a small ritual. This is the weakest reason in this table; the first one to remove. |
| Sidequest | MO-06 overshoot easing | A playful archetype, and the bounce only plays after an explicit "Another little idea". |
| Fieldwork | CO-03 cream ground with a serif display | The product's artifact is a written brief; the page reads like the document it sells. |
| Fieldwork | TT-03 tracked-caps label above every section | The labels number real chapters (I, II, III) of one argument. |

Fixed rather than kept, when the v0.4 checker first ran: a keyboard focus ring that was invisible on the black and olive grounds (now a two-ring indicator, ink outline plus paper box-shadow, with per-demo ink and paper tokens, so one of the two rings has at least 3:1 against any ground and the outline survives forced-colours mode); text clipped under WCAG 1.4.12 spacing (the demo cards no longer hide overflow, the Sidequest "A constraint." and Fieldwork "Less understanding." headings are sized with `min()` at phone width and may break mid-word only under forced spacing, and the Fieldwork chapter grid uses `minmax(0, 1fr)` so a long word cannot widen the column); share metadata (og and twitter tags, a 1200×630 share image, an SVG favicon and a 180px touch icon, canonical URL); demo titles that led with the fictional brand (now category first: "Webhook delivery traces · Relayline"); a 977 kB script bundle (the research catalog, the candidate list and the eval run files are now separate chunks loaded by the routes that read them; the home chunk is 232 kB and the lab LCP on the throttled phone profile fell from about 2.8 s to about 1.9 s); three- and four-sentence subheads on the home, experiments, Relayline, Sidequest and evals pages; "Your best idea" in the Sidequest outro; the footer now says the project is free and open source; the skill page's copy button names its outcome; the evals page's run-log link and each record's source link are bordered buttons.

Fixed rather than kept, when the v0.3 checker first ran: 8–10px labels raised to 11px on every page, 19px nav buttons raised to 44px, headline tracking loosened to −0.04em, the gallery's display face changed from Inter to Schibsted Grotesk, paragraph measure capped, a thick side stripe on the evidence note replaced, a heading-level skip on the demos page, theme-color following each page, and a 13px select raised to 16px.

## Motion contracts

Every animation in the three demos is listed here in the form the skill asks for. Only the individual `translate` / `scale` properties animate, so base transforms (card tilts, the character's rotation) are untouched. Opacity animates in two places, the user-triggered card deal and the scrubbed layer of the Relayline stage, never on copy: a first version of the deal also faded text in, and axe correctly flagged the reduced contrast mid-animation, so text now moves without fading. Under `prefers-reduced-motion: reduce` the stylesheet removes every animation and transition, the scroll reveal is never applied and the stage is not pinned; every state and all content stay visible. Essential copy never waits for motion.

Scroll rules, from the motion reference and checked by `tests/browser/motion.spec.ts` on every demo: copy that must be read is visible at first paint and after every scroll step, and never re-hides on the way back up; a reveal is for supporting graphics, plays once, finishes within 400 ms, starts before the element is a tenth of the viewport into view and never replays; anything whose state follows scroll position is scroll-linked with CSS scroll-driven animations (`animation-timeline`), guarded by `@supports` and `prefers-reduced-motion`, so it reverses when scrolling up and holds when scrolling stops, with the finished layout as the stylesheet's default where the feature is missing; at 390 px the composition is static; reduced motion removes movement and hides nothing. Sidequest had no scroll-related motion to change and is covered by the same tests.

| Demo | Trigger | State change and purpose | Static fallback | Duration / easing |
| --- | --- | --- | --- | --- |
| Relayline | Page load, and again when the scenario changes | Attempt-path nodes scale in one after another, so the event's history reads as a sequence before the copy explains it | Complete path visible at first paint | 7 × 250 ms, 150 ms stagger, 1.15 s total, ease-out |
| Relayline | Choose a scenario or step | Inspector content rises in to mark that the detail changed | Immediate replacement | 200 ms ease-out; row colour 150 ms |
| Relayline | Scroll through the continuity stage, the second section, pinned for about 1.8 viewport heights at 1440×900 (CSS scroll-driven animations, motion allowed, above 700 px) | The hero's delivery record unfolds one attempt at a time in step with the three principles beside it: the received event and its identity, then the failed attempt with its reason and retry policy, then the retry and the resolved delivery; a bar above the current principle extends while its step is current. Progress is bound to scroll position (a view timeline on the stage wrapper, `animation-range: contain`), so the record reverses on the way up and holds when scrolling stops. The job is explanation and continuity: the same record, read in order. Captions sit outside the scrubbed layer; every state is a readable still; the empty rows are ruled slots, so nothing shifts | The complete record under three stacked captions, nothing pinned: Firefox and older Safari (the `@supports` guard), reduced motion, and phones, where the stage is the stacked steps the pattern table asks for. No script is involved; the default stylesheet is the finished layout | Linear with scroll over the pinned travel (about 1,600 px of the 2,160 px wrapper at 1440×900; no scroll speed or direction change). Each arrival spans 8% of the travel, about 130 px of scroll: rows translate 14 px and fade in, path nodes scale from .4 and fade in, step markers scale between .18 and 1 of their width |
| Sidequest | Page load, once | Sticker and paper character pop in; nonessential scene, orients the eye | Visible at first paint | 400 ms, spring-like `cubic-bezier(.22,1.35,.36,1)`, 100 / 200 ms delay |
| Sidequest | "Another little idea" | Three cards deal in with a stagger; the heading's word and the field colour follow, as a response to an explicit choice. The deal never runs on first paint: an earlier version did, and axe intermittently caught card text mid-fade | Final cards and colour immediately | 360 ms deal, 70 ms stagger, same spring curve; field 350 ms ease |
| Fieldwork | The handoff strip enters from below (IntersectionObserver, 5% of the viewport in; only above 700 px with motion allowed) | The two arrows between the three columns slide 12 px into place, once, so the strip reads as a sequence; the columns of copy beside them never move. An arrow already on screen at load is left where it is, and the offset is applied only after the observer attaches, so nothing moves without JavaScript and nothing jumps at load | Arrows in place: without JavaScript, under reduced motion, at 390 px, and whenever the strip is already in view | 300 ms `cubic-bezier(.2,.7,.2,1)` translate, second arrow 80 ms later; plays once and never replays on the way back up |
| Fieldwork | Change workflow or toggle structure | The brief rises in to signal a new document | Immediate replacement | 220 ms ease-out |

Not animated, deliberately: headlines, body copy, navigation, the gallery's own pages, and anything on hover only.

## Diversity review

| Dimension | Relayline | Sidequest | Fieldwork |
| --- | --- | --- | --- |
| Section grammar | Instrument hero (statement + live console) → continuity stage (the record, scrubbed, with the three principles as captions) → design decision. 3 sections. | Invitation → rules → deck and colour field → outro. 4 sections. | Statement + process strip → chapter I problem with field note → chapter II sample brief → chapter III principles → close. 5 sections. |
| Hero | Statement beside a working instrument with its controls | Oversized stacked wordplay, sticker and character | Editorial statement, offset explanation and process strip |
| Type | Inter 600 display, Inter body, IBM Plex Mono identifiers | Bricolage Grotesque 800 display, Instrument Serif italic, Inter body | Instrument Serif display, IBM Plex Sans body, Plex Mono labels |
| Color | Cool light blue / navy | Cream / pink / lime / changing accent | Cream / olive / muted green |
| Product visual | Attempt path, step list and inspector | Three-part creative prompt on paper cards | Annotated owner/action record |
| Interaction | Scenario, step inspection, deselect to empty state | Deal and keep | Compare workflow and structure |
| Motion | Trace sequence on load and scenario change; inspector rise; the scroll-linked continuity stage | Spring-curve deal, pop-in scene, field crossfade; nothing tied to scroll | One reveal on the handoff arrows; brief rise |

Where they still agree: all three keep a top-left wordmark, a right-aligned nav with one filled action and an eyebrow label above each section; Sidequest and Fieldwork still have a three-column row, while Relayline's principles now stack beside the record. Sidequest and Fieldwork still share the hero → explanation → widget shape; Relayline no longer does. That is an honest description of the current diversity, not a claim that the three share nothing.
