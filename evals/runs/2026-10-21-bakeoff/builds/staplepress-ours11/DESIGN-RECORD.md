# DESIGN-RECORD

Staplepress home page, built in Build mode with the startup-landing-design skill (v1.1) on 2026-10-21. The page opens from disk: `index.html`, `assets/`, `fonts/`, `favicon.svg`, `apple-touch-icon.png`, `og.png`. `tools/` holds the two scripts used to make the share images and to stress the artifact; they are not part of the site.

## Product interpretation
- Audience, category, business model, brand constraints: independent artists and small-press publishers with a print-ready PDF open on a laptop; small-run printing of zines and art books (25 to 500 copies), paid per copy; must feel made by people who run a press, not by a printing marketplace; may not name or show any of the ~120 artists' work.
- Promise (who / what changes / how): independent artists get a small run printed without guessing how it will come out, because a photo of their real proof straight off the press is posted within two working days, before anything is bound.
- Five-second line, quoted as shown in the first screen (who + what): "Small-run printing for independent artists: 25 to 500 zines or art books, with a photo of your proof within two working days."
- Current alternative, including doing nothing: a copy shop that prints badly; a big online printer that needs 1,000 copies and never shows a proof; or not printing the run at all.
- The one advantage only this product has: a photo of the actual proof off the press, within two working days and before binding, on runs as small as 25.
- Category frame (existing, subcategory or new) and what it costs to teach: existing category, "small-run printing" for zines and art books; costs nothing to teach.
- Best-fit customer, and who it is not for: an artist or small press with a finished PDF needing 25 to 500 copies; not for runs over 500, people who need a full-bleed cover today, or anyone without a print-ready file.
- Users' own words (three phrases with source, or 'none yet'): none yet; the brief gives no quotes and no permission to quote the ~120 artists.
- Biggest reason not to click, and the line that answers it: "What will it cost?" answered beside the buttons with "From $2.10 a copy for 50 copies of a 24-page A5 zine, black on uncoated paper."; the second doubt, "will my file print right?", is answered by the secondary action "Check your PDF first".
- Conversion action and destination: "Upload your PDF" to https://staplepress.example/start (the brief's upload URL), worded the same in the nav, hero and final section.
- Visitor doubt 1 → artifact: "Will it come out like my file?" → the hero proof photo and the proof section's loupe close-up, plus the three-step sequence (upload, proof photo within two working days, then binding).
- Visitor doubt 2 → artifact: "Will my PDF work at all?" → the signature PDF check, which reads the visitor's own file locally and reports pages, folding into sheets of four, size, bleed, price guide and proof date.
- Visitor doubt 3 → artifact: "What does it cost and what can't you do?" → the starting-price ticket ($2.10, 50 copies, A5, 24 pages, black, uncoated; colour, other sizes and larger runs cost more) and the border-versus-bleed cover pair.

## Interview log
- Questions asked, each with the recommended default you offered: none asked, because nobody answers during this task; the defaults that would have been offered: (1) primary action = the brief's upload URL; (2) the hero picture = an illustrated proof photo of a sample zine drawn for the page, since no artist work may be shown; (3) the demo = a local PDF check, since visitors have their PDF open.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: the sample zine "Low Tide" is invented and labelled; "stapled at the fold" assumes saddle stitching for zines (the brand name suggests it; binding options are listed under To confirm); proof dates count Monday to Friday and ignore holidays, and the page says so.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Cal.com (casebook, audited 2026-10-20): the hero shows the booking page invitees will see, so visitors judge the output; limit: its chips and dates looked clickable and did nothing | Show the thing the customer actually receives (here the proof photo and job ticket) and keep anything that looks operable out of the picture; the working control lives in section two and responds | The framed white hero card on grey, OAuth buttons, CTA pairs on every section, review stars and logo rows |
| Brand composition | Meuze (casebook, audited 2026-10-20): one halftone/dot treatment carried across photo, illustration, data and logo; limit: a 4,000px pinned scroll track before any explanation | One graphic language across the page: one black ink, halftone dots, crop and registration marks, used in the hero photo, the check's slip, the loupe, the cover pair and the spine shelf | Its dark full-bleed ground, uppercase nav, blue accent, scroll-bound content and long pinned track |
| Counterexample | Opal Electronics (casebook, audited 2026-10-20): an overhead photograph of real artefacts under a dated letter, no h1, no button | Attractive, but Staplepress must convert (upload) and cannot show its artists' work; keep a real h1, a real action and a price beside it | The letter-as-homepage, the photo-of-real-work ground, the missing navigation and action |

Departures from the recipe (immersive editorial, adjusted): H1 at 66px rather than 100px so the headline holds two lines in a 560px column; body 17px Heros instead of Source Sans; the opening scene is an illustration, not a photograph, because no permitted photography exists.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the proof sheet straight off the press; crop marks; registration targets; the K-only tint bar; the job ticket with run, format, ink, paper and per-copy price; folded sheets of four pages; the staple at the fold; uncoated paper stock; halftone dots of one black ink; the slug line printed in the sheet margin; a loupe over the proof; the white border a cover keeps because full bleed isn't possible yet
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Staplepress" with seed 696364695: voice, character, object, or canon; level bold.
- Chosen move and why, or canon and the buyer-risk reason: object portrait; the product's distinct output is a physical object (the proof sheet) that artists already read, so it can carry real fields (job ticket, slug line, tint bar) at heroic scale. Voice was weaker because the buyer needs to see the proof before a stance; a character would decorate rather than prove.
- Idea sentence ("[inventory thing] becomes [the move]"): the proof sheet straight off the press becomes an object portrait: one photographed sheet, with its crop marks, slug line and job ticket, at heroic scale beside the headline.
- The same sentence with the nearest competitor, and why it fails: "A big online printer's proof sheet straight off the press becomes an object portrait" fails because, per the brief, those printers never show a proof; a copy shop has no press proof to photograph either.
- Statement level (quiet, bold or loud) and why: bold; the first screen owns the statement, and the sections below stay quiet and carry proof, because the buyer is an artist choosing a printer, not a regulated committee.
- First viewport at 1440 (the poster: headline, sentence, buttons, the hero picture and its share of the screen, what moved to section two): left column 560px with a two-line headline, the five-second line, "Upload your PDF" plus "Check your PDF first", the price line and one fact line; right, the dark proof photo bleeding off the right edge (about 750 × 640px, roughly 37% of the screen with the ticket) with the job ticket overlapping its lower-left corner; the working check, sample label and all controls moved to section two. Refuses a centred headline over a framed screenshot.
- First viewport at 390: pill bar with wordmark and Menu; headline in two lines; sentence; two full-width buttons; price line; the top of the proof photo and the ticket's header peeking in at the bottom.
- Name test (the one with the …, eight words or fewer): the one with the proof sheet and job ticket

## Hypothesis
- Archetype and why: immersive editorial for the opening (an object scene) with a functional-entrance artifact in section two (input a file, get a reading), because the value is a physical proof and the visitor arrives with a PDF.
- Type roles, faces and why they fit this product: display TeX Gyre Adventor (an Avant Garde Gothic revival, the geometric face of print-shop specimen books, not the startup serif default); text TeX Gyre Heros (a Helvetica revival, the trade's working grotesk) at 17px; both shipped as WOFF under the GUST Font License, with the licence in `fonts/`.
- Composition and grid: editorial split in the hero; a 90rem breakout wrap with a 560px text column; the check is a nested shell with the result slip left and the file choice right; proof section split; prices split; press section split with a wide drawing; a dark closing panel.
- Ground, colour and material, and why this ground: near-white #F8F7F3 (a whisper of uncoated stock without reading as beige), press black #1C1B18, one vermilion #B8381B for actions and state only (buttons, the "not bound" status, warnings, the one accent word); the dark press-bed photo brings the weight.
- Signature artifact and its local behaviour: "Check your PDF before you upload": choose one of three labelled sample files or open/drop your own PDF; the page reads page count (page tree, inflating object streams with DecompressionStream) and page size (TrimBox or MediaBox, bleed detection) entirely in the browser, draws a flatplan of pages grouped in sheets of four, and states size, price guide, cover warning, proof-photo date and a verdict in a live region.
- Signature on a phone (where the result shows after a tap): the result slip sits above the choices, with the verdict as its last block directly above the first choice; after tapping a sample centred on screen the verdict sits at 196–293px of an 844px viewport (stress run).
- Sample audit (counts, weekdays, states and stated rules agree): 24 pages = 6 sheets, 26 = 6 sheets + 2 left over (suggest 24 or 28), 40 = 10 sheets; A4 sample marked "with bleed" in both the choice and the result; the price guide only quotes $2.10 for A5, 24 pages; the weekday comes from the real calendar (Wednesday 21 October 2026 → Friday 23 October), never a fixed sample date.
- To confirm with the client (claims and terms kept off the page): a contact address or channel (none supplied, so none shown); binding methods and page-count limits (the page says "stapled at the fold" for zines); whether an approval step sits between the proof photo and binding, and what happens if the proof needs a change; delivery times and postage; prices for other page counts, colour, sizes and runs; whether public holidays pause the two working days; the hosting of `https://staplepress.example/og.png` (the file is `og.png` here); permission to name any artist later.
- Section sequence, with one section deliberately omitted: poster → PDF check → the proof photo → prices and the cover limit → the 120 artists we can't show → final upload; omitted: a testimonial or portfolio section, because there is no permission to show either.
- Primary interaction and motion purpose: the PDF check; the flatplan's sheets settle in one after another to show the fold order; the hero builds itself once on load; the ticket slides off the photo as the poster scrolls away (the hand-off to the check).

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): emphasis: the object (a photographed proof sheet with ticket) versus the voice (a press-room opinion as the headline over a small finished zine).
- Category default and anti-default this plan avoids: default = a printing marketplace page (white ground, blue CTA, stock photos of stacked booklets, a product grid, a price-calculator form in the hero, "trusted by thousands"); anti-default = a xerox-punk zine page (ransom-note collage type, neon riso pink, stickers everywhere, hand lettering). The plan is a calm press-room page: one ink, one state colour, the trade's own marks.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Split poster; dark proof photo of an imposed sheet with crop marks and slug line, job ticket overlapping; check in section two | Will it come out like my file, and what does it cost? | 8 | 8 | 7 | 8 | 8 | A real photograph of a Staplepress proof on their press, and the visitor's own cover rendered onto the sheet |
| B | Opinion headline ("Nobody should meet their zine already stapled") over a small finished zine; proof explained below | Why does a proof matter? | 7 | 7 | 7 | 6 | 5 | The proof itself visible in the first screen, which turns it back into variant A |

- Chosen variant and why: A, because it shows the one advantage instead of arguing for it, and its ticket links straight to the result slip in the check.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches the category default or the obvious anti-default | Block | Revised before code: no marketplace grid or calculator, no riso collage; press marks and one ink instead |
| Cream ground with a serif display, chosen by default | Warn | Avoided: near-white ground and a geometric sans display |
| Redrawn browser or phone chrome | Warn | None: the picture is a photo frame of a press bed, not device chrome |
| A row of big stat numbers under the hero | Warn | Avoided: one quiet price line and one fact line, both from the brief |
| Hero visual is decoration | Block | The picture is the product's output (the proof photo with its job fields) |
| Unsupported trust logos or testimonials | Block | None planned; the 120 artists appear only as a count from the brief and an untitled shelf drawing |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Two-line headline, accent word, both buttons aligned, proof photo bleeding right with ticket overlap, check heading peeking at the fold; full page in shots/1440.png |
| 768×1024 | shots/768-top.png | Single column, headline two lines, buttons side by side, photo full width with crop and registration marks legible; full page shots/768.png |
| 390×844 | shots/390-top.png | Headline, sentence, full-width buttons and price line fit; photo and ticket header peek in; no sideways scroll; full page shots/390.png (about 7.4 screens) |

Artifact states, operated with real files at both widths: shots/states/ (1440-1 to 1440-5 and 390-1 to 390-5: three samples, three PDFs printed by Chromium, a non-PDF), the phone viewport after a tap (390-viewport-after-tap.png) and the log stress.json.

## Checker result
- JSON: check.json
- Failures fixed: v1 had six block failures: runtime error from direct SVG text (moved into a symbol), HR-07 at 390 (hero tightened), CO-01 (reveals no longer fade text), MB-05 (no-JS phone menu now stays in flow), AX-03 (light focus ring on the dark panel), AX-07 (font preload blocked from file://, removed). Later HR-09 and HR-07 from an extra hero line (now desktop only) and HR-08 holes in the first screen (hero height and fact line).
- Warnings kept and why: LY-05 nested cards: the job ticket, price ticket and check are deliberate shell-and-core cards from the visual system, a hairline tray holding a white ticket, not a box inside a box of content.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` exits with "npm error" (not installed, and installing is not allowed here).

## Checklist
<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | 390-top and 1440-top: "for independent artists", 25 to 500 zines or art books, proof photo within two working days |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second read of both captures: a printer for small zine runs that shows you a proof photo first; the button uploads a PDF |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero is the proof photo and job ticket the service produces (illustrated sample) |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubts 1–3 mapped to the proof photo and loupe, the PDF check, and the price ticket with the cover pair |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Check (file fit), proof (what the photo shows and when), prices (cost and limits), press (why no portfolio); the 120 count appears in the 1440 hero fact line and once in the press section body, where it explains the missing portfolio |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists the three defaults and the assumptions |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A (object, dealt) and B (voice, dealt), axis emphasis; both defaults named and avoided |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References table plus recipe departures line |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "Small-run printing for independent artists" |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Product interpretation; "See your zine before it's stapled" is false for printers that never show a proof |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | Each heading names a concrete object or number (PDF, the real sheet, 25 to 500 and $2.10, white border, their zines, the open PDF) and is checkable |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet" recorded; no quotes invented |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | Price line directly under the buttons |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | See your zine before it's stapled / Check your PDF before you upload / A photo of the real sheet, before binding / 25 to 500 copies, from $2.10 each / Covers keep a white border, for now / Their zines stay theirs, so none are shown / Your PDF is open. Send it to the press. |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | The hero is sized by content and padding; no vh height in site.css |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | pass | The only supplied proof (about 120 artists since last year) is in the first screen at 1440 and in the press section; no quotes |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Vermilion on buttons, the "not bound" status, warnings, the dashed not-yet cover, the staple mark and the one headline word |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | The proof photo, two-working-day promise and no-full-bleed limit are specific to this brief; the competitor sentence fails |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Originality pass: no booking card (Cal.com), no dark halftone photo ground or pinned track (Meuze), no letter-over-table (Opal) |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | All :hover rules are inside that media query; staggers 45–80ms; nothing blocks input |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contract below |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | 390 states: slip above choices, flatplan wraps, rows narrow to a 6rem label column, choices full width |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | #r-verdict is role=status aria-live=polite |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page |
| HP-02 | Every number has a source or is labelled illustrative. | pass | $2.10, 25–500, two working days, about 120 artists, 1,000-copy minimum: all from the brief; sample file numbers are labelled samples |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | "Sample files made for this page" tops the check; the loupe caption starts "Illustration of a proof photo"; the hero picture's accessible name says illustration; the press section says Low Tide was drawn for this page |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Upload links go to the brief's /start URL; "Check your PDF first" scrolls to the working check; nav anchors resolve |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All three widths opened; artifact states in shots/states at 1440 and 390 |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section, shots/before and shots/after |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass below |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Status follows the evidence |
<!-- checklist:end -->

Motion contract (MO-08):
- Hero entrance: on load → headline, sentence, buttons, notes and picture rise 20–28px in reading order to show the poster building itself → static under reduced motion → 850ms (picture 1s), 80ms stagger, cubic-bezier(.16,1,.3,1); text starts at 0.4 opacity, never hidden.
- Ticket hand-off (the one scroll moment): scroll from 0 to 70vh → the hero ticket slides off the photo toward the check, the photo settles slightly → no movement without scroll-driven animation support, under reduced motion or below 821px → linear, bound to scroll.
- Section reveals: block 12% into view, once → 28px rise, transform only → in place under reduced motion and without IntersectionObserver → 800ms, same curve.
- Flatplan sheets: each new reading → sheets appear in fold order → in place under reduced motion → 500ms, 45ms stagger.
- Phone menu: Menu button → full-screen sheet with links rising 60ms apart and the icon lines turning into an X, so the menu reads as one gesture → without script the links sit in the page flow; under reduced motion they appear at once → 500ms, same curve.
- Buttons: press scales to .98 (150ms); arrow circle nudges 2px on hover (fine pointers only).

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | Opened a 0-byte file named empty.pdf at 1440 and 390 | "That file is empty. Export the PDF again and try once more." in the warning tone; pages read "No pages read" | pass |
| Out of range | Opened a 26-page and a 22-page A5 PDF, and a US Letter file | Fold rule refused politely ("won't fold evenly… try 20 or 24"), flatplan shows the leftover pages dashed in vermilion; Letter gets "other sizes cost more"; files over 150 MB are refused with the reason | pass |
| Nonsense | Opened a text file renamed notes.pdf | "That file isn't a PDF. Export a print-ready PDF and try again." | pass |
| Repeat | Clicked the harbour sample six times quickly; switched files while one was reading | Same result each time; a newer choice cancels an older reading (token check) | pass |
| Reset | Chose low-tide.pdf after own files and errors | Back to the default sample and verdict; the file input is cleared | pass |
| Keyboard only | Focused the first sample, ArrowDown twice, Tab | Radios change the result; Tab lands on the file control with a 3px ring around its box; focus never drops to the body | pass |
| Phone | At 390 chose a sample centred on screen | Verdict sits at 196–293px of 844, the slip above it; controls are 56px+ tall | pass |
| Reduced motion | Ran every probe with reducedMotion: reduce | No movement; every state appears at once | pass |
| Visitor's own input | Opened real PDFs printed by Chromium: 24-page A5, 22-page A5, 12-page Letter, and a 140-character file name | Read 24/A5 (matches $2.10), 22/A5, 12/Letter correctly; the long name wraps inside the slip | pass |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Shadow is the only depth system | Warn | Stays partly: depth also comes from the dark photo, overlap and rotation; shadows share one light |
| Every section has same width and padding | Warn | Avoided: the proof section is a full-width white band, the final section a dark inset panel, the press section a wide drawing |
| The same fade-up on every section | Warn | Reveals are a short rise without fades; the hero and the flatplan have their own motion |
| Hero visual is decoration | Block | Not found: the picture is the proof photo with real job fields |
| Small tracked-caps label above every heading | Warn | Not found: small caps appear only inside tickets ("Job ticket", "Sample") |

## Self-review
| Criterion | First score | What a 9 needs (for anything under 8) | After |
| --- | --- | --- | --- |
| Clarity | 8 | | 8 |
| Fit | 8 | | 8 |
| Distinctiveness | 7 | A real photograph of the press and a proof, or the visitor's own first page drawn onto the hero sheet, so it could only be this press | 7 |
| Proof | 7 | The result needed a picture, not six table rows: show the file's pages as folded sheets so the check proves the fold at a glance | 8 |
| Craft | 7 | The 1440 hero had a 648 × 216px hole under the copy and the check's right column ended in dead space; close both | 8 |
| Mobile | 8 | | 8 |
| Honesty | 9 | | 9 |
| Interaction | 8 | | 8 |
| Copy | 8 | | 8 |
| First screen | 8 | | 8 |

- Designer's one-sentence read: a calm press-room page with one strong object and one ink; the check is useful but the slip still reads partly as a form, and the illustrated photo is not as convincing as a real one would be.
- Buyer's and founder's one-sentence read: I can see what I get and what it costs, I can test my own PDF without uploading it, and nothing on the page claims more than the brief says.
- Engineer's one-sentence read: static files, no network, no dependencies; the PDF reader only reads the page tree and boxes, handles broken and non-PDF files, and every state was operated at both widths.

## Structural revision
- Weakest explanation or most template-like decision: the check's result was a six-row table (pages, size, folding, price, cover, proof) whose one picture was a row of tiny boxes, so the core answer ("does it fold?") had to be read, not seen; the 1440 hero also left a hole under the copy.
- Change made (structure, not styling): replaced the Pages and Folding rows with a flatplan at the top of the slip: every page drawn as a thumbnail in the file's proportions, grouped in sheets of four, the cover page solid, leftover pages dashed in vermilion, with one caption line; centred the file choices against the slip; added the brief's 120-artist fact to the 1440 hero column and shortened the hero picture so the next section meets the fold.
- Before: shots/before/1440-artifact.png
- After: shots/after/1440-artifact.png
- Score after the change and what still keeps it from a 10: proof 8/10 and craft 8/10; a real proof photograph, the visitor's own first page rendered as the flatplan's cover, and a confirmed approval step would move them further.
- Removal pass (each decorative element → its job, or "removed"): hero wash behind the photo → kept faint, separates the picture from the ground; crop marks on the slip corners → the press's notation, ties the slip to the proof sheet; ticket rotation → shows the ticket as a loose object on the press; steel bar in the photo → says "on the press"; shelf of spines → stands for the 120 artists without showing work; staple mark in the fact line → removed nothing, it is the logo; a static sheet strip duplicated by the flatplan → removed; a separate "Pages" row → removed.

## Remaining weaknesses
- What a buyer still cannot judge: real print quality (no permitted photograph of a real proof or of the press), turnaround after the proof, delivery and postage, prices beyond the starting price, and how to contact the press (no contact supplied).
- What was not verified: the page on a public URL (share card and og:image host), Safari and Firefox rendering, PDFs with unusual structures (cross-reference streams without object streams, encrypted files) beyond the generated ones; lab LCP is a local estimate.

## Status
DONE
