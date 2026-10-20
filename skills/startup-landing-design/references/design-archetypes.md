# Design archetypes

These are decision families, not mutually exclusive templates. 130 dated records inform these families: 68 sites from 2026 YC, a16z speedrun, Pear, Sequoia Arc, Neo and EF cohorts and a 42-site reference tier audited at desktop and phone width on October 19–20, 2026, and 20 earlier desktop records. Workflow theater (34), Immersive editorial (23), Expressive world (19), Editorial platform (19), Typographic technical (14), Functional entrance (14), Canvas first (7). Canvas first is the thinnest family; treat its recipe as the least settled.

| Family / reference | Fit and personality | Composition and narrative | Interaction and mobile risk |
| --- | --- | --- | --- |
| Typographic technical / Resend | Focused developer product; deliberate and precise | A plain promise with strong typographic character, then an integration artifact, test states and operational detail | Language or scenario selector; long code must scroll inside its region, not the page |
| Expressive world / PostHog | Broad suite whose audience tolerates exploration; irreverent | A navigable environment turns many tools into one mental model; clear conversion remains visible | Story switching; avoid reproducing desktop chrome on a phone |
| Canvas first / Onlook | Creative tool where editing is the value; open and exploratory | Product workspace earns a dominant canvas; alternate overview with specific capabilities | Original editable artifact; keep copy/action independent of heavy scene failure |
| Functional entrance / Firecrawl | Input/output tool; useful and direct | Start from a small representative task, show output, expand to API and capabilities | Meaningful local example; label simulation, keep input accessible |
| Workflow theater / Linear, Raycast | Software whose value unfolds through steps; disciplined | One work artifact recurs across the lifecycle; wide views alternate with close-ups | Select scenario or step; on mobile show the current step plus readable explanation |
| Immersive editorial / Mercury | Product tied to an ambitious or emotional outcome; composed | Strong opening scene with the next section visible below it, then concrete categories, qualifications and product proof | Lightweight navigation; image overlays require contrast and static fallback |
| Editorial platform / Stripe | Broad platform with distinct buyer decisions; assured | Statement establishes scale, business models organize capabilities, implementation paths support developers | Section-specific diagrams; do not impose mature-company breadth on a narrow startup |

Color is not an archetype. A technical page can be light, warm or vivid. A consumer page can be quiet. Choose constraints from positioning before picking an aesthetic. Families differ mainly in the artifact, the voice and the type; in every family, keep the section structure familiar and easy to scan ([page structure](page-structure.md)).

Implementation suggestions: CSS grid for variable alignment; semantic lists for traces; SVG for original diagrams with text alternatives; native details for supporting disclosure. Use a canvas or WebGL only when its explanatory value justifies the fallback and performance cost.
