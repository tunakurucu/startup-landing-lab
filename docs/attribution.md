# Attribution and rights

Original repository code, authored research analysis, skill instructions, CSS composition studies, fictional branding and demo copy are MIT licensed. Company names and website URLs identify research subjects. Their trademarks and website materials remain their owners' property. This independent project is not affiliated with or endorsed by Y Combinator or any featured company.

No third-party screenshots, logos, proprietary website source or illustrations are redistributed. The diagrams and abstract composition studies are original. Screenshots under docs/screenshots show this project's own implemented pages.

Fonts in `gallery/public/fonts/` are SIL Open Font License 1.1, each with its licence text beside it. IBM Plex Sans and IBM Plex Mono are IBM's unmodified WOFF2 files, because the licence reserves the name "Plex" for unmodified versions. Inter, Bricolage Grotesque, Instrument Serif and Schibsted Grotesk are subset from google/fonts and stay under the OFL; they have no Reserved Font Name. Provenance per file: `gallery/public/fonts/README.md`.

Runtime dependencies: React, React DOM and scheduler (MIT), bundled into the published gallery; their licence notices ship at `gallery/public/third-party-notices.txt` and are linked from the site footer. Build/test dependencies include Vite (MIT), TypeScript (Apache-2.0), ESLint (MIT), typescript-eslint (MIT), Playwright (Apache-2.0), axe-core (MPL-2.0), jsonschema (MIT) and skills-ref (Apache-2.0). The lockfile records transitive versions; installed packages retain their licenses. Tooling is not required to use the instruction skill.

References to Impeccable, better-web-ui, Anthropic skills and Vercel agent skills are comparisons with source links. Their instructions and code are not copied or bundled.

## v0.2 process influences

Only mechanics and review patterns informed original instructions; no source prose or code from these repos was copied into the skill. Optional CLIs are detected locally, never bundled or invoked for design generation.

| Source | License checked | Adapted idea |
| --- | --- | --- |
| [Impeccable](https://github.com/pbakaus/impeccable) | Apache-2.0 | Optional rule-ID detector and product-first context record |
| [agent-browser](https://github.com/vercel-labs/agent-browser) | Apache-2.0 | Optional viewport/render CLI before local Playwright fallback |
| [Vercel agent-skills](https://github.com/vercel-labs/agent-skills) | MIT per repository README | Optional web-design-guidelines engineering review |
| [Emil Kowalski skills](https://github.com/emilkowalski/skills) | MIT | Motion contracts with duration, easing, fallback and stress cases |
| [gstack](https://github.com/garrytan/gstack) | MIT | Score the design hypothesis before implementation; save evidence notes |
| [Matt Pocock skills](https://github.com/mattpocock/skills) | MIT | Bounded, consequence-based questions instead of open-ended interviewing |
| [Anthropic skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator) | Apache-2.0 in that skill's LICENSE.txt | Raw briefs, assertions and repeatable evaluation records |
| [yray/skills](https://github.com/yray/skills) | MIT | Whole-page inspection and explicit hero variants with a separate type pass |
| [Jakub Krehel skills](https://github.com/jakubkrehel/skills) | MIT | Type floors (weight under 18px, unitless line-height, text-wrap, tabular figures), space-before-lines grouping, scroll padding under sticky headers, variants that differ on one axis |
| [Meng To skills](https://github.com/MengTo/skills) | MIT | Removal test for decorative elements; originality audit by category (copy, names, numbers, imagery, structure, motion) where missing evidence is never a pass |

## v0.3 cross-check

The v0.3 skill was compared rule by rule with the repositories above (cloned 2026-10-19, read as data, no code run). Ideas adapted, all rewritten in our own words: a closed status line and a script that decides "done" (gstack; Impeccable's phase gates); recommended defaults on every interview question (Matt Pocock's grilling skill); checks for hidden-after-load text, flat hierarchy, display tracking, focus visibility, zoom, `transition: all` and tap targets (Impeccable's detector, Vercel's web-interface-guidelines, gstack's design-review); motion mechanics such as stagger limits, no `scale(0)`, hover gating and `svh` (Emil Kowalski's skills); with-and-without-skill baselines and transcript reading in evals (Anthropic's skill-creator). No rule names, lists or prose from those projects are copied into this repository.

## The 112 checks

`skills/startup-landing-design/assets/checks.json` (generated from `scripts/checks_source.py`) lists each check with a `credit` field naming where the idea appears; the keys (skills, research groups, standards and authors) are defined at the top of `skills/startup-landing-design/references/checklist.md`. A credit records inspiration; the wording, thresholds and code are this project's. Thresholds that differ from a source (for example a 1.25× hierarchy ratio) are this project's choices.

## v0.4 additions

Ideas adapted in v0.4, all rewritten in our own words, with no prose, rule names or code copied. Licences were read from each repository's LICENSE file on 2026-10-19 or 2026-10-20.

| Source | Licence | Adapted idea |
| --- | --- | --- |
| [Corey Haines, marketingskills](https://github.com/coreyhaines31/marketingskills) | MIT | Copy gate applied to every heading; structural tells of generated copy; title order for an unknown brand. The project credits Profound's skills-marketing-library for its tell list. |
| [Leonxlnx, taste-skill](https://github.com/Leonxlnx/taste-skill) | MIT | Hero scores capped by measured failures (enforced by `verify-record.mjs`); fix order from idea to motion |
| [agiwhitelist, auteur](https://github.com/agiwhitelist/auteur) | MIT | Name and avoid both the category default and the anti-default; house-style pass against earlier builds |
| [ibelick, ui-skills](https://github.com/ibelick/ui-skills) | MIT | Metadata and share-card contract (PF-06, PF-07) |
| [Wondel.ai, skills](https://github.com/wondelai/skills) | MIT | Positioning inputs before the promise, after April Dunford's method |

## v0.5 statement layer

`references/statement.md`, `assets/statement-moves.json` and `scripts/deal.mjs` paraphrase ideas from these sources, read on 2026-10-20. Nothing was copied; the dealer, the catalogue and the record fields are this project's own.

| Source | Licence | Idea used |
| --- | --- | --- |
| [Impeccable](https://github.com/pbakaus/impeccable) (concept-seed, new-work, mode-persuade, overdrive) | Apache-2.0 | Deal directions instead of trusting model taste, with a sanctioned plain exit; draw from the audience's cultural world; a direction contract for the first viewport; the world carries the page and never paints it; the opening's three jobs |
| [Taste Skill v2](https://github.com/Leonxlnx/taste-skill) | MIT | Subject inventory and the "becomes" idea sentence with a competitor test; headline arithmetic and a plain subline; one live thing; removal alone reads as thin, from its published blind tests |
| [Anthropic frontend-design](https://github.com/anthropics/skills) | Apache-2.0 | Spend boldness in one place |
| [illo](https://github.com/tmchow/illo-skill) | not checked; ideas only | A locked, minimal face, one accent part, and the paint-out test for whether a character does a job |
| [linkedin-animated-infographics](https://github.com/imMamdouhaboammar/linkedin-animated-infographics) (mascots, svg-mascot-animator) | MIT | SVG rigging: pivots, one transform concern per nested group, `fill-box` |
| [Meng To's illustration skills](https://github.com/MengTo/skills) | MIT | Measured SVG construction and the common failures of drawn characters |

Character guardrails cite GitHub's brand guidelines on mascots and illustration, Duolingo's design blog on Duo's shape language, NN/g on decorative images, a study of cute brand characters (Asia Pacific Journal of Marketing and Logistics, 2022), Rive's runtime documentation, PostHog's brand handbook and *DC Comics v. Towle*. Each is named beside the rule it supports.

## Practitioner sources

`references/craft.md` draws on public writing by the design and engineering teams at Linear (Karri Saarinen, Yann-Edern Gillet, Andreas Eldh, Romain Cascino), Vercel (its design-engineering team and Web Interface Guidelines), Stripe (Daryl Koopersmith, Wilson Miner, Katie Dill), GitHub (Amanda Swan, Tobias Ahlin, Tony Jaramillo), Figma (Rebecca Ramos), Granola (Jim Fisher, Sam Stephenson), PostHog (Cory Watilo) and Intercom (Scott Smith), and by practitioners Rauno Freiberg, Emil Kowalski, Josh W. Comeau, Ryan Mulligan and Sara Soueidan. Their essays, posts and talks are cited inline by key and listed with author, title and URL at the end of that file. Every idea is paraphrased in this project's words; specific numbers and recipes are credited to their source beside the number; no prose, code or demos were copied. Katie Dill's talk was read through third-party transcripts, which the Sources list marks as secondary.

Research sources (articles, studies, standards and talks) are cited where they are used: `references/copy-and-positioning.md`, `references/page-structure.md`, `references/audit-lens.md`, `references/frameworks.md`, `references/motion-and-responsive.md`, `references/composition-and-type.md` and `references/craft.md`. Ideas are not copyrightable; we cite them so readers can check the evidence. Short quotations, where they appear, are attributed. The `credit` field on each of the 112 checks names where its idea appears; the keys are defined at the top of `references/checklist.md`.

