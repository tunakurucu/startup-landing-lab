# Make a statement

A startup page is remembered for one thing or for nothing. This file turns "be bold" into a procedure: an inventory of what only this product owns, a dealt set of moves so the first idea is not the habitual one, an idea sentence that must fail on a competitor's page, a first-viewport contract, and the clarity half that keeps a bold page understandable in five seconds. [Statement moves](../assets/statement-moves.json) holds the catalogue; `node scripts/deal.mjs "<product>"` deals from it.

Boldness alone loses. The one public set of blind tests on bold-design skills found the no-skill baseline winning most early rounds, and its authors' diagnosis was that pages which only removed ornament read as thin (Taste Skill v2). In this project's own rounds, the skill's pages won distinctiveness by a wide margin (32 to 23 over four briefs) and lost clarity (32 to 34) and interaction (31 to 33). So a statement always comes with substance (the product's real output, at scale) and with the five-second line, and the signature artifact passes the stress test.

## 1. Subject inventory

List 8–12 things only this product, its users or its trade own: objects they handle, documents they read, rituals in their day, the place the work happens, the trade's marks and codes, its tools, its timing, its graphic tradition. The dealer names two of these families to start from. Nothing from the category's usual page counts (dashboards, "AI" sparkles, people at laptops), and the literal reading of the product's name gets at most one entry (Impeccable).

## 2. Deal, then choose

Run `node scripts/deal.mjs "<product>"`. It deals three moves and the canon exit from a seed derived from the product name, so two runs on the same brief deal the same hand and the choice is auditable. Pick one move and write why it fits; or take canon and write the buyer-risk reason. Do not redeal to reach a favourite; if all three moves are wrong for the product, record why each fails and deal once more with `--exclude`. The model's own favourite may be recorded beside the dealt hand as "my pick", with what makes it familiar (Impeccable concept-seed; Taste draw).

| Move | The statement | Clear because |
| --- | --- | --- |
| Character with a job | An original character from the subject demonstrates, reacts or carries the result | It holds the product's real output beside the five-second line |
| Inhabited world | A place from the visitor's world where the product visibly works | Nav, headline and action are working parts inside the world |
| Product as a toy | The core interaction, playable in seconds with real content | The default state already shows a good result |
| Object portrait | The product or its output as one object at heroic scale | The object carries real fields, not a metaphor |
| Audience's notation | A format the visitor reads daily, filled with the product's result | The trade recognises it before reading a word |
| Typographic statement | Set type or the wordmark as the image | Two lines at most at every width, five-second line beneath |
| Data portrait | Real or sample data drawn as a striking image with one annotated moment | The annotation is text, the axes are real |
| Before and after | The visitor's mess and the product's result, side by side or one control apart | Both states read as stills |
| Generative system | A rule-based visual made from the product's own logic | Text sits on a stable ground; the system idles within 5 s |
| Voice | A sharp opinion in the founders' words | Proof arrives immediately below |

## 3. Idea sentence and the swap test

Write one sentence: "**[a thing from the inventory] becomes [the move]**". For example, "the clinic's paper waitlist becomes a character who walks the cancelled slot to the next patient". Then put the nearest competitor's name in the sentence. If it still works, the idea belongs to the category, not to this product: start again from the inventory (Taste v2). Write both versions in the record.

## 4. Statement level

| Level | What owns the statement | Default for |
| --- | --- | --- |
| Quiet | The signature artifact only; everything else calm | Regulated buyers, security, health, legal, finance back office, when the buyer's risk is the first doubt |
| Bold | The first screen; sections below stay quiet and carry proof | Most startups: the default |
| Loud | The whole page: the world, character or system recurs in every section | Consumer, creative tools, developer tools with a playful culture, category creators |

Spend the statement in one place per level. At bold, one move owns the first screen and nothing else on the page competes with it: no second illustration style, no extra signature animation, no decorative motion. A move that says nothing about the subject is decoration; the removal test asks whether a visitor would miss it (Anthropic frontend-design; Taste motion; Impeccable overdrive).

## 5. First-viewport contract

Before code, write the first screen at 1440 × 900 and at 390 × 844 as a contract: what sits where, at what size, what is visible without scrolling, where the five-second line and the primary action are, and what the one live thing is. If the contract reads like a mood ("warm, playful, premium"), it is not decided yet (Impeccable direction contract). The contract names the default arrangement it refuses, for example "not a centred headline with two buttons over a screenshot".

Three jobs for the opening (Impeccable mode-persuade): make the offer intelligible, put the real primary action on screen in working form, and show something only this product can prove.

## 6. The clarity half

- **Headline arithmetic.** At most two lines at every width; about 32 characters per line at 390 px is the ceiling for a two-line statement (Taste v2). Longer claims move to the subhead.
- **The five-second line.** When the headline is a figure of speech, a name or a provocation, the next line says plainly who it is for and what kind of thing it is. It is quoted in the record and checked against the rendered first screen.
- **One live thing.** One subject-derived interaction with real content, usable by thumb, with a finished still for no-JS and reduced motion. Blind jurors named the live thing first when asked what they remembered (Taste v2).
- **The world never replaces the page.** A poster with painted buttons fails; the nav, headline and action are real elements inside the statement.

## 7. Characters in code

A character is worth building when it has a job: it demonstrates the product (carries the slot, files the receipt), reacts to the visitor (looks at the field being typed in, celebrates a completed demo), or is the product's recurring voice across sections. Paint it out: if the scene still makes complete sense, the character is a sticker and goes (illo paint-out test). On the audited pages characters recur rather than appear once: Vanta's llama returns in the audience cards, Phantom's ghost is set inline as a glyph inside headlines, Finni's fox recurs across colour bands.

Where a character does not belong. GitHub's brand rules keep its mascots out of explanations, sales claims, user flows, and anything near money, security, enterprise, apologies or a crisis, and ask for restraint (brand.github.com/graphic-elements/mascots). A study of cute brand characters found they signal warmth more than competence (Emerald APJML, 2022), and NN/g's eye-tracking found visitors skip decorative images and look at ones that carry information (nngroup.com/articles/photos-as-web-content). So: the character never carries the claim (the headline and the proof do), and for a buyer whose first doubt is risk, deal again without `character` or keep it out of the first screen. The strongest characters point at proof: Bun's mark sits on the shortest bar of its benchmark chart (bun.sh, checked 2026-10-20); Duolingo builds Duo silhouette first, then the fewest details that keep him recognisable (blog.duolingo.com/shape-language-duolingos-art-style).

Design rules, before drawing:
- One simple silhouette recognisable as a filled shape at 32 px.
- A locked, minimal face: dot eyes and at most a short mouth; faces drift most between poses (illo).
- Exactly one accent-coloured part; every other part comes from the page palette.
- Fixed proportions; scale is dramatised by the world, never by squashing the body.
- Drawn from the subject inventory, never from a known character, mascot or brand figure. If the description would make a reader think of an existing character, start over.

Build rules, as code:
- 6–10 named parts (body, head, eyes, one or two limbs, the accent part, a prop), each its own `<g>` with an id, defined once and placed with `<use>` where repeated.
- Each moving part's group has its origin at its pivot: `transform-box: fill-box` with an explicit `transform-origin`, and one transform concern per nested group (translate, then rotate, then scale).
- Stroke weights by role (outline, interior line, detail) and kept constant across poses with `vector-effect: non-scaling-stroke`.
- Three to five poses defined as transforms of the same parts, never redrawn paths. A pose that needs a new path means the rig is missing a part.
- Motion has one communication job at a time (guide the eye, react, carry, confirm). Idle loops are slow and stop after a few cycles; blinking, if any, is rare and irregular; nothing bounces constantly.
- `aria-hidden="true"` when decorative; a short text alternative when the character carries information (the slot it carries has a label in the DOM).
- Under reduced motion the character holds its most informative pose; off-screen, loops pause.
- Reactions fire on real visitor actions (hovering the primary action, focusing a field, copying the install command), are brief, and return to rest.
- Inline SVG with CSS or the Web Animations API is the default. An agent cannot author Rive or Lottie files from scratch, and the Rive web runtime alone is a few hundred kilobytes compressed (rive.app/docs/runtimes/runtime-sizes); use them only when the client supplies the file. Paint the static SVG first and add any canvas or WebGL layer after first paint, as GitHub does for its globe (github.blog, how we built the GitHub globe).
- Recolouring or re-posing a known character does not make it new (DC Comics v. Towle); companies that own characters restrict their use, and PostHog asks that its hedgehogs not be AI-generated (posthog.com/handbook/brand/art-requests). Derive the character from the product's own name, logo or subject.

Common failures: detail creep (every extra part mutates between poses), hands (mitten fists, props balanced on fingertips), seams where parts join, single-path art that cannot be articulated, floating motion from ease-in-out keyframes, a mascot that only decorates, and a childish register for a buyer who is accountable for risk (Meng To illustration skills; svg-mascot-animator; illo).

## 8. Worlds, objects and systems in code

- **One graphic language per page.** One treatment (flat tone steps, a halftone, a line weight) across scene, charts, icons and the character. Meuze holds one dot-matrix treatment across its photo, illustrations, charts and logo.
- **Three levels of detail.** Big shapes that read at a glance, describing shapes, and second-look details; light from flat tone steps rather than gradients (Taste imagery).
- **Objects carry real fields.** A receipt, card, ticket or report is built in HTML from the product's actual fields, so it is legible, translatable and selectable.
- **Systems settle.** A generative or animated hero has a seeded still frame that every capture shows, idles within 5 s, pauses off-screen, and never sits under body text.

## 9. Tests after render

- **Name test.** Describe the first screen in eight words or fewer as "the one with the …". If the description fits a competitor, the statement failed.
- **Swap test.** Replace the logo and name with a competitor's: would the page still work for them? (TT-05).
- **Five-second test.** From the 1440 and 390 first-screen captures alone, write who it is for, what it does and what you would click. Compare with the record; a miss is a block.
- **Removal test.** Hide the statement move: if nothing important is lost, it was decoration.
- **Still test.** The reduced-motion and no-JS first screen still carries the statement.

## Sources

Paraphrased from the skills and practitioners named inline, read on 2026-10-20: Anthropic frontend-design skill (github.com/anthropics/skills); Impeccable by Paul Bakaus (concept-seed, new-work, mode-persuade, overdrive; github.com/pbakaus/impeccable); Taste Skill v2 by Leonxlnx (copy, motion, imagery and critique rules, published blind tests; github.com/Leonxlnx/taste-skill); illo by tmchow (character consistency and the paint-out test); Meng To's illustration skills (measured SVG construction); svg-mascot-animator (rigging rules); Vercel Web Interface Guidelines (pausing loops). Full notes with URLs: [attribution](../../../docs/attribution.md).
