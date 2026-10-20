# Self-review: read the page the way its readers will

Checks catch what is broken. They do not tell you whether a senior designer, the buyer or the engineer who inherits the page would be impressed. Before you call the page finished, read it three times as those people, score it, and redesign the weakest part. In this project's blind tests, pages that passed every check still sat at about 84 of 100 for three versions in a row, held back by craft and distinctiveness. Rules alone stopped moving the number.

## When

After step 7.3 (the checker is clean) and 7.4, and before the structural revision in 7.6. The scores you write here pick what that revision changes.

## How

1. **Open the evidence, not your memory of the code:** the 1440, 768 and 390 screenshots, the first-screen captures, and the artifact operated through its states at 1440 and 390.
2. **Read three times, each as one person, and write one sentence per pass:**
   - **Senior product designer** who reviews startup sites weekly. Does the page have a point of view that comes from this product? Does the first screen earn attention? Does the execution hold at every width and in every state? Is anything decoration without a job?
   - **The buyer the brief describes**, arriving cold on their usual device, and then **the founder** deciding whether to put the page live under their name. Do I know what I get, is my first real doubt answered, do I trust it, and do I know what the button does?
   - **The front-end engineer** who will maintain it. Does it work by keyboard, by touch and without network? Do edge inputs, reduced motion and 200% zoom hold up? Is the code something they'd keep?
3. **Score each criterion 1–10, as the strictest of the three readers.** 3 means visibly weak, 6 competent but generic or flawed, 9 nothing important left to improve. Use 10 only when you can name nothing to improve.

| Criterion | The question |
| --- | --- |
| Clarity | Can a stranger say what it is, who it's for and what to do next from the first screen? |
| Fit | Does it meet every ask in the brief, give each named audience a real path, and get the tone right for the market? |
| Distinctiveness | Would you recognise it with the logo removed? Do structure, type, imagery and artifact all come from the product? |
| Proof | Is the product's core job visible and operable in the first one or two screens, consistent and labelled? |
| Craft | Is there a deliberate type scale and spacing rhythm, sharp hierarchy, no dead areas and no defect at any width or state? |
| Mobile | Is the page recomposed for the phone, with the artifact in the first screens and feedback where the thumb is? |
| Honesty | Is every example labelled where it appears, and does the action say what happens before the click? |
| Interaction | Does every control work by mouse, touch and keyboard, with empty, error, reset and edge states? |
| Copy | Are the words specific to the customer's world, with no filler, no repetition and every button saying what happens? |
| First screen | At both widths, does one viewport hold a specific outcome for a named audience, an artifact that makes it believable, and a matching action? |

4. **For every criterion under 8, write what a 9 would need**, concretely: "the hero has a 500 × 300 hole right of the headline; move the result strip there", not "improve the composition".
5. **Redesign the lowest one structurally** in step 7.6: composition, artifact, section order or drawing, not a colour tweak. Then rerender, operate the artifact again and re-score every criterion. If any criterion is still under 8 and you can name the fix, do one more pass. Stop after two passes, and record what remains in Remaining weaknesses.

## Keep it honest

- **Do not grade the record, grade the page.** A score that only the record supports is not a score.
- **Your scores are capped by the evidence.** A block failure in `check.json` caps every criterion at 6. A failed artifact stress probe caps interaction at 6. An unlabelled sample caps honesty at 5.
- **Expect your first scores to be too generous.** Blind graders scored this skill's own pages 1–2 points lower than the builders did on craft and distinctiveness. When unsure between two scores, take the lower.
- **Don't add sections to raise a score.** Graders do not reward volume; a page that does one thing very well beats a page that does six adequately.

## The craft questions that usually decide it

The [craft measures](craft-measures.md) turn these into numbers you can check.

- **Composition:** is there a hole in the 1440 first screen? Is the button in the headline's column? Is there one dominant element?
- **Drawing:** could any drawing pass as a placeholder icon at full size? If so, finish it or replace it with a precise technical drawing.
- **Small text:** is more of the artifact's text under 13px than over it? Is grey mono doing a job the text face should do?
- **Template frame:** do two neighbouring sections share a layout? Is there a row of three identical cards?
- **Type:** do the faces render as named on this machine, and is the display size at least four times the body?
