# Grading rubric v2 (round 5: same criteria and anchors as rounds 3 and 4, new buyer cards)

You are grading two homepages, **A** and **B**, built by two different teams from the same client brief. You do not know how either was made and should not try to find out. Grade what a visitor, the client and a maintainer would actually get.

This file is identical for every grader. Your prompt tells you which **persona** you are and which **packet** to grade.

## What is in your packet

| File | What it is |
| --- | --- |
| `brief.md` | The client's brief, exactly as the teams received it except for one process line removed |
| `A/`, `B/` | The delivered files. For the Next.js brief, `A/src/` is the codebase and `A/site/` is its built static export |
| `shots/A/`, `shots/B/` | Screenshots made by one neutral renderer: `1440-top.png`, `1440.png`, `768-top.png`, `768.png`, `390-top.png`, `390.png`, `320-top.png` |
| `shots/A/probe.json`, `shots/B/probe.json` | Mechanical facts: horizontal overflow, console and page errors, blocked network requests, smallest text size, axe-core WCAG A/AA violations |
| `before/` | Redesign brief only: the client's current homepage, with its own screenshots |
| `A.diff`, `B.diff`, `build-A.log`, `build-B.log` | Briefs that change an existing codebase: each team's changes against the original, and the operator's build log |
| `OPEN.md` | The exact command or path to open each page |

You have a browser (Playwright/Chromium) and file access. You have no internet access.

## How to grade, in order

1. Read `brief.md` and your persona section below. For the buyer persona, also read your brief's buyer card.
2. Redesign brief: open `before/` first, so you know what is being replaced.
3. Look at all screenshots of A and B.
4. Open **both pages yourself** at 1440×900, 768×1024 and 390×844. Operate every control in the main artifact or demo through its states, follow every primary action, and try the mobile menu. Screenshots are not enough: a control you did not operate cannot score above 6 on interaction.
5. Score **A on its own** against the anchors, then **B on its own**. Only then compare. Anchors are given for 3, 6 and 9; use 1–2 for worse than the 3 anchor, 4–5 and 7–8 for between anchors, 10 only when you can name nothing to improve.
6. Check the hard-fail list for each page. Flag only with reproducible evidence.
7. State which page you would ship (A or B, no ties), your confidence, and why. If you prefer the page with the lower total, say why in `score_preference_note`.

Rules that apply to every persona:

- **Facts in the brief are true.** Destinations the brief supplies (an email address, a URL, an npm package name) count as working; check that the page uses them correctly, not that the remote end answers. All `.example` domains are reserved placeholders the client chose.
- **Evidence must be specific:** name the width, the element and what you did ("390: tapped 'Offer slot', the confirmation appeared below the fold"). "Looks good" is not evidence.
- **Honest labels are not a weakness.** Do not mark a page down for labelling an example as an example. Do mark it down if the label is missing, late, or buried.
- **Do not reward volume.** More sections, more animation or more words are not better by themselves.
- **A shared flaw is not a tiebreaker.** If both pages have the same problem, score both down and decide on something else.
- Process files (design notes, test logs, screenshots made by the teams) were removed from both sides. Their absence says nothing.

## Personas

Each persona is graded by a separate, fresh grader who never sees the other personas' grades. All three score all ten criteria, from their own point of view.

### Designer: senior product designer

You have designed and shipped marketing sites for early-stage startups and you review other designers' work weekly. You care whether the page has a point of view that comes from this product, whether the first screen earns attention, and whether the execution holds up at every width and in every state.

Look hardest at: first screen, composition and hierarchy, type, spacing rhythm, colour and contrast, how the product artifact is presented, distinctiveness against the category's usual template, how the phone layout is recomposed rather than shrunk, and states you reach by operating the page. You may inspect the DOM to understand a state; you do not judge code quality.

### Buyer: founder and buyer in the brief's market

You read twice. First as **the buyer in your brief's buyer card** (below): someone who has never heard of this company, arriving cold on the device that buyer would use. Then as **the founder who wrote the brief**: would you put this page live tomorrow under your name?

Look hardest at: whether you understand what you would get, whether your first real doubt is answered on the page, whether you trust it, whether you would take the main action and know what happens when you do, and whether each audience named in the brief finds its own path. When the brief names two audiences, read as each one for at least a full pass; do not pick one.

### Engineer: front-end engineer

You will maintain this page and you are responsible when it breaks. You check that it is robust, accessible and well made, using the probe output and your own tests.

Do all of these for both pages and cite the results:

1. **Load as delivered:** open from disk with no network (or, for the Next.js brief, read `build-*.log` and open the served export). Check `probe.json` for errors, blocked requests and overflow at 390 and 320.
2. **Keyboard only:** Tab from the top through the primary action and the main artifact. Focus visible at every stop, no traps, Escape closes menus and dialogs, controls are buttons or links as appropriate.
3. **Edge inputs:** in every form or artifact, try empty, very long, zero, negative and pasted values, and the reset path.
4. **Reduced motion and zoom:** emulate `prefers-reduced-motion: reduce` (nothing needed is hidden); zoom to 200% at 1440 (no content lost or overlapped).
5. **Accessibility basics:** heading order, landmarks, labels on inputs, alt text, contrast (axe results in `probe.json`, plus your own look at text on images and states).
6. **Code:** structure and naming, semantic HTML, CSS organisation (tokens versus scattered values), script error handling, dead code, page weight, fonts embedded or loaded sensibly.
7. **Existing codebases:** read `A.diff` and `B.diff`. Redesign: brand assets kept and old CSS not left dead. Next.js: the page lives in the app, uses the existing Tailwind tokens and `Button`, keeps TypeScript clean, adds no dependency, and stays compatible with static export (no API routes, server actions or request-time data; `"use client"` only where needed).

## Buyer cards

| Brief | Read as |
| --- | --- |
| kiln (Kilnlog) | 1) Owner of a community pottery studio with 60 members, reading on a laptop after closing. 2) A studio member on a phone in the kiln room, hands still dusty, checking whether her mugs are out. |
| liftplan (Liftplan) | 1) Site manager at a general contractor who answers for every lift on site. 2) The appointed person who signs lift plans and distrusts software that pretends to know the ground better than he does. |
| driftcheck (Driftcheck) | A platform engineer whose deploy broke last month on a missing column; reads on a laptop with a terminal open and decides in seconds whether to try a tool. |
| executor (Settle) | A woman whose father died three weeks ago, named executor, reading on her phone late at night, overwhelmed and wary of anyone selling to her. |

## Criteria

Score every criterion 1–10 for each page. The first eight are the round 1–2 criteria, kept for comparability; `copy` and `first_screen` are new.

### 1. clarity: can a stranger say what it is, who it is for and what to do next?
- **3:** After the first screen you could not say what the product does or for whom. The headline is a slogan or a category word, and the action has no object ("Get started").
- **6:** Product and audience become clear after the subhead or one scroll; one of what, who or next step stays vague.
- **9:** The headline and one supporting line say what it does, for whom and what to do next. A stranger could repeat it accurately, and nothing later on the page muddies it.

### 2. fit: does it do what this brief asked, in the right tone, and resolve the brief's tensions?
- **3:** Ignores an explicit ask or the brief's main tension: one named audience gets nothing, the tone is wrong for the market, or a stated constraint (deposit not payable, no backend, no compliance claim, existing stack) is not reflected in what the page does.
- **6:** Meets the explicit asks but resolves tensions by hedging: a page that would fit any company in the category, a second audience that gets one token line.
- **9:** Every explicit ask is met, each tension has a visible and deliberate resolution (a real path for each audience, an action that matches what the backend can do), and the tone is right for this market.

### 3. distinctiveness: does it look and read like this company rather than a template?
- **3:** Swap the name and it could be any startup: the stock kit of centred hero, gradient blob, three icon cards, logo strip, testimonial grid and CTA band. For the redesign: a reskin of the old page's structure.
- **6:** One or two product-specific ideas (a custom artifact, a motif, a voice) inside an otherwise familiar structure.
- **9:** Structure, type, imagery and artifact all come from the product; you would recognise the page with the logo removed, and no element is decoration without a job.

### 4. proof: does the page show the product doing its job, early, with honest material?
- **3:** Claims only: no artifact, or a skeleton mockup, or product evidence that only appears near the end.
- **6:** A real artifact exists (example, simulation, sample output) but it is below the first screens, static where it should respond, or inconsistent with the copy around it.
- **9:** The product's core job is visible and operable within the first one or two screens, it answers the visitor's main doubt, and its numbers are internally consistent and labelled as examples.

### 5. craft: visual execution
- **3:** Visible defects at a common width: clipped or overlapping text, broken alignment, inconsistent spacing, poor contrast, default-looking type, large dead areas in the first screen.
- **6:** Clean and consistent but unremarkable, with minor defects: one cramped section, a tiny label, uneven rhythm.
- **9:** A deliberate type scale and spacing rhythm, sharp hierarchy, contrast that passes, and no defects at 1440, 768 or 390 in any state you operated.

### 6. mobile: the page at 390×844 (and a glance at 320)
- **3:** Desktop layout shrunk; text too small, horizontal scrolling, the key artifact removed or unusable, or the menu broken.
- **6:** Stacks correctly and stays readable, but the artifact is cramped or pushed far down, some targets are under 44px, or the page becomes a long column of identical cards.
- **9:** Recomposed for the phone: promise, action and artifact work within the first screens, targets are at least 44px, nothing overflows, and feedback appears near where you tapped.

### 7. honesty: claims, labels and the conversion action
- **3:** Misleading without meeting the fabricated-proof definition: implied availability or dates, "Start your free trial" when none exists, a sample that is not labelled, savings implied by wording.
- **6:** Nothing invented, but disclosure is late (after the click), buried in an FAQ or footnote, or delivered as a section listing what the company lacks.
- **9:** Every example is labelled where it appears, the main action says what will actually happen before the visitor commits, claims match the brief, and caution is handled without undermining confidence.

### 8. interaction: do the controls work and give feedback?
- **3:** Controls do not respond, throw errors or lose state; no keyboard access; the "demo" is a picture pretending to be interactive.
- **6:** The main controls work, but feedback is thin (no visible state change, no empty or error states), some controls are dead, or keyboard focus gets lost.
- **9:** Every control works by mouse, touch and keyboard; empty, error, reset and edge values are handled; feedback appears where the visitor is looking; no console errors.

### 9. copy: the words, across the whole page (new)
- **3:** Buzzwords and filler ("seamless", "supercharge", "unlock", "all-in-one"), vague verbs, contradictions between sections, machine-sounding cadence, or typos.
- **6:** Plain and correct but generic; sections repeat each other; labels, button text and error messages are defaults.
- **9:** Specific nouns and verbs from the customer's world, every sentence carries information, terms are consistent, each button says what happens, microcopy is written rather than defaulted, and the reading level suits the audience.

### 10. first_screen: the promise made in the first viewport, at 1440×900 and 390×844, without scrolling (new)
Clarity asks whether the page is understood; this asks whether the first screen makes a **specific, believable** promise. A clear but generic promise scores low here.
- **3:** The first screen promises nothing specific (a slogan or category claim), or the promise is not visible at 390, and nothing in view backs it up.
- **6:** A specific promise and an action are visible at both widths, but nothing in view makes the promise believable, or the action does not match what the product can do today.
- **9:** At both widths, one viewport holds a specific outcome for a named audience, an artifact or example that makes it believable, and an action whose label matches what will happen.

## Hard fails

A hard fail overrides all scores for that page. Flag it in `hard_fail_flags` with the code, what you saw and the exact steps to reproduce. A separate blind adjudicator must reproduce it before it counts; an unconfirmed flag has no effect. Keep scoring the page normally either way.

| Code | Hard fail | Counts | Does not count |
| --- | --- | --- | --- |
| HF1 | **Broken primary action.** The primary action is the most prominent action in the first screen at 1440 and its repeats; a two-sided page may have two. | It does nothing or throws an error; it points to a missing file or anchor; its label names a destination it does not reach ("Read the docs" that scrolls the page); it goes to an email address, URL, phone number or store listing the brief did not supply; or it reports success ("You're on the list") for something that did not happen, without saying so before the visitor acted. | A destination the brief supplied. A local action whose real result is stated before the visitor commits (for example, a form that says up front it is not sent yet and then does exactly what it said). A secondary link with one of these problems (score it under interaction or honesty). |
| HF2 | **Fabricated proof.** | Anything not supplied by the brief and presented as fact: customer, partner, investor or press names or logos; testimonials or attributed quotes; usage, performance, accuracy, savings or ratings numbers; star or download counts; awards; certifications or compliance status ("HIPAA compliant", "SOC 2", "UL listed", "regulator approved", "bank-grade"). A labelled example that states performance or savings as typical ("scans in under a second", "saves six hours a week"). Redesign: any of the old page's "trusted by" names, its testimonials, or "join thousands" kept. | Facts in the brief (three unnamed design partners, about 200 TestFlight seats, a $20 refundable deposit, about a third of residents speaking Spanish at home). Clearly labelled sample data inside an example or demo, with the label visible next to it at 390. Plain statements of status the brief supports ("no SOC 2 report yet"). |
| HF3 | **Unreadable mobile.** At 390×844: | Text or controls cut off or reachable only by scrolling sideways; the headline or primary action clipped, overlapped or off-screen; running body text rendered below 12px; a fixed element covering more than a third of the screen that cannot be dismissed. | Overflow of a decorative element with no content in it. Small print in a footer or legal line. |
| HF4 | **Does not load as delivered.** | Static briefs: `index.html` opened from disk with no network shows a blank or unstyled page, or a script error stops the main content from appearing. Next.js brief: `npm ci` and `npm run build` fail, or the served export does not show the page. | A failed request for an optional asset that leaves the page readable (score it under craft or interaction). |
| HF5 | **Explicit brief constraint broken.** | Redesign: the Shiftnote name, the logo mark (`logo.svg` or a faithful copy) or either brand colour (`#3B3FD9`, `#FF7A59`) is missing or replaced as the brand's colour. Next.js: the landing page is not built inside the Next.js app (for example a standalone HTML file), or Next.js or Tailwind is removed or replaced. | New neutrals or tints alongside both brand colours. Not using the `Button` component or the colour tokens (score it under fit, and the engineer under craft and interaction as relevant). |

## Output

Write one JSON file, exactly this shape. `scores` are integers 1–10 for all ten criteria; every `evidence` entry is a specific observation.

```json
{
  "packet": "P007",
  "persona": "designer | buyer | engineer",
  "A": {
    "scores": {"clarity": 0, "fit": 0, "distinctiveness": 0, "proof": 0, "craft": 0, "mobile": 0, "honesty": 0, "interaction": 0, "copy": 0, "first_screen": 0},
    "evidence": {"clarity": "", "fit": "", "distinctiveness": "", "proof": "", "craft": "", "mobile": "", "honesty": "", "interaction": "", "copy": "", "first_screen": ""},
    "problems": ["the three most important problems, worst first"],
    "hard_fail_flags": [{"code": "HF1", "evidence": "what you saw", "steps": "how to reproduce"}]
  },
  "B": { "same shape as A": true },
  "preference": "A | B",
  "confidence": "low | medium | high",
  "reason": "two or three sentences: why this page, what would change your mind",
  "score_preference_note": "required only when the preferred page has the lower total"
}
```

`hard_fail_flags` is an empty list when there is nothing to flag. The operator validates the file with `scripts/tally.py --validate`; an invalid file is re-graded by a fresh grader.

## Aggregation

The operator computes these after all grades and adjudications are frozen; graders never see them.

- **Persona total:** each persona's ten scores summed per page, 10–100. The sum of the first eight criteria (/80) is reported separately for comparison with rounds 1–2, which used one generalist grader, so the numbers are related but not identical.
- **Summed score S:** the three persona totals added, 30–300. **Δ = S(skill page) − S(other page).**
- **Votes:** how many of the three personas preferred the skill page (0–3).
- **Pair verdict**, from the skill page's side, in this order:
  1. **Hard fails first.** Only the other page has a confirmed hard fail: **win**. Only the skill page has one: **loss**. Both: **tie**, reported separately as "both failed". A hard fail on a page counts in every packet that contains that page.
  2. **Win:** at least 2 of 3 personas prefer the skill page **and** Δ ≥ +7.
  3. **Loss:** at least 2 of 3 personas prefer the other page **and** Δ ≤ −7.
  4. **Tie:** anything else, that is, the majority preference and the summed score disagree, or |Δ| ≤ 6.
- **Why ±6 of 300:** in round 2, three unchanged pages were re-scored by new graders within 2 of 80 points. Allowing about 2 points per persona for noise gives 6. The band is fixed before the round; `tally.py` reports bands 0 and 12 as sensitivity checks, and the retest packets measure whether 6 was adequate.
- **Brief verdict** (when a brief has several pairs): win if its pairs have more wins than losses, loss if more losses than wins, tie otherwise.
- **Same-arm and retest packets** use the same rules but never count toward wins or losses; they measure noise.
