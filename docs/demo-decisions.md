# Three briefs, three directions

These are qualitative design decisions, not measured conversion improvements. All brands, people, sample events and workflows are fictional.

## Relayline: developer infrastructure

Audience: engineers evaluating webhook reliability. Doubts: can I follow an event, distinguish failure types, and decide what happens next? Primary action: inspect a local trace.

Reference jobs: Resend informs concrete integration proof; Firecrawl informs a useful input/output entrance. Counterexample: Mercury's immersive scene would add ambiguity to a narrow technical evaluation. Borrow neither the serif-on-black treatment nor the ruled orange API aesthetic.

Hypothesis: a light technical instrument with a persistent event identity will make reliability inspectable. Sans-serif display, monospace identifiers, blue-gray surfaces, square outlines and a sequential trace establish the system. Narrative: promise → continuity principles → stateful example → honest scope.

Implemented artifact: the hero *is* the instrument. The statement, scenario choice and download sit on the left; the live delivery record with its attempt path, selectable steps and inspector sits on the right. There is no separate "try it" section lower down. Two scenario modes, four steps each; selecting a pressed step again clears the inspector to an explicit empty state. Details distinguish transient failure from authentication failure. Download exports illustrative JSON. No remote webhook is sent.

Structural revision (v0.2): the first version opened on a static delivery-record card and placed the working explorer two sections below, which is the same hero → explanation → widget → closing grammar the other two demos used. The recipe for this family names "offset statement + working trace instrument" as its first hero structure, so the explorer moved into the hero and the separate section was removed. The page now has three sections instead of four, and the first interaction is available without scrolling. On phones the attempt path stays horizontal at a smaller size and the step list directly below it is the readable sequence.

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

## Gate warnings we kept, and why

The v0.3 detector warns on three choices these demos make. Each stays, with the reason the gate asks for:

- **Relayline uses Inter as its display face.** The identity is meant to come from the trace and the monospace identifiers, so the display face is deliberately neutral. A more characterful grotesque would compete with the instrument.
- **Fieldwork pairs a cream ground with a serif display.** The product's artifact is a written brief; the page reads like the document it sells. The serif does the editorial work and the ground is the paper it sits on.
- **Sidequest uses a cream ground.** The cards are paper and the ritual is offline making; the ground is the table they are dealt on. The display face is a grotesque, not a serif, and the ground changes colour with each brief.
- **All three use small tracked labels above sections.** Relayline's and Fieldwork's number real sequences; Sidequest's are tone, and are the weakest case of the three.

## Motion contracts

Every animation in the three demos is listed here in the form the skill asks for. Only the individual `translate` / `scale` properties animate, so base transforms (card tilts, the character's rotation) are untouched. Opacity animates in one place, the user-triggered card deal: a first version also faded text in, and axe correctly flagged the reduced contrast mid-animation, so text now moves without fading. Under `prefers-reduced-motion: reduce` the stylesheet removes every animation and transition and the scroll reveals are never applied; every state and all content stay visible. Essential copy never waits for motion. `tests/browser/motion.spec.ts` checks each contract with motion allowed and with it reduced.

| Demo | Trigger | State change and purpose | Static fallback | Duration / easing |
| --- | --- | --- | --- | --- |
| Relayline | Page load, and again when the scenario changes | Attempt-path nodes scale in one after another, so the event's history reads as a sequence before the copy explains it | Complete path visible at first paint | 7 × 250 ms, 150 ms stagger, 1.15 s total, ease-out |
| Relayline | Choose a scenario or step | Inspector content rises in to mark that the detail changed | Immediate replacement | 200 ms ease-out; row colour 150 ms |
| Sidequest | Page load, once | Sticker and paper character pop in; nonessential scene, orients the eye | Visible at first paint | 400 ms, spring-like `cubic-bezier(.22,1.35,.36,1)`, 100 / 200 ms delay |
| Sidequest | "Another little idea" | Three cards deal in with a stagger; the heading's word and the field colour follow, as a response to an explicit choice. The deal never runs on first paint: an earlier version did, and axe intermittently caught card text mid-fade | Final cards and colour immediately | 360 ms deal, 70 ms stagger, same spring curve; field 350 ms ease |
| Fieldwork | Scroll into view | Process strip columns then arrows, chapter numeral, field note and the three principles slide up into place in reading order; nothing fades, so text keeps full contrast throughout | Nothing moves without JavaScript or under reduced motion | 450 ms `cubic-bezier(.2,.7,.2,1)` translate, 100–400 ms delays |
| Fieldwork | Change workflow or toggle structure | The brief rises in to signal a new document | Immediate replacement | 220 ms ease-out |

Not animated, deliberately: headlines, body copy, navigation, the gallery's own pages, and anything on hover only.

## Diversity review

| Dimension | Relayline | Sidequest | Fieldwork |
| --- | --- | --- | --- |
| Section grammar | Instrument hero (statement + live console) → continuity rationale → design decision. 3 sections. | Invitation → rules → deck and colour field → outro. 4 sections. | Statement + process strip → chapter I problem with field note → chapter II sample brief → chapter III principles → close. 5 sections. |
| Hero | Statement beside a working instrument with its controls | Oversized stacked wordplay, sticker and character | Editorial statement, offset explanation and process strip |
| Type | Inter 600 display, Inter body, IBM Plex Mono identifiers | Bricolage Grotesque 800 display, Instrument Serif italic, Inter body | Instrument Serif display, IBM Plex Sans body, Plex Mono labels |
| Color | Cool light blue / navy | Cream / pink / lime / changing accent | Cream / olive / muted green |
| Product visual | Attempt path, step list and inspector | Three-part creative prompt on paper cards | Annotated owner/action record |
| Interaction | Scenario, step inspection, deselect to empty state | Deal and keep | Compare workflow and structure |
| Motion | Trace sequence on load and scenario change; inspector rise | Spring-curve deal, pop-in scene, field crossfade | Scroll reveals in reading order; brief rise |

Where they still agree: all three keep a top-left wordmark, a right-aligned nav with one filled action, an eyebrow label above each section and a three-column row somewhere on the page. Sidequest and Fieldwork still share the hero → explanation → widget shape; Relayline no longer does. That is an honest description of the current diversity, not a claim that the three share nothing.
