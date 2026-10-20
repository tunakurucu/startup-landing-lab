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

## The 100 checks

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

Research sources (articles, studies, standards and talks) are cited where they are used: `references/copy-and-positioning.md`, `references/page-structure.md`, `references/audit-lens.md`, `references/frameworks.md`, `references/motion-and-responsive.md` and `references/composition-and-type.md`. Ideas are not copyrightable; we cite them so readers can check the evidence. Short quotations, where they appear, are attributed. The `credit` field on each of the 100 checks names where its idea appears; the keys are defined at the top of `references/checklist.md`.

