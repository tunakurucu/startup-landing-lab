# Attribution and rights

Original repository code, authored research analysis, skill instructions, CSS composition studies, fictional branding and demo copy are MIT licensed. Company names and website URLs identify research subjects. Their trademarks and website materials remain their owners' property. This independent project is not affiliated with or endorsed by Y Combinator or any featured company.

No third-party screenshots, logos, proprietary website source, custom font files or illustrations are redistributed. The diagrams and abstract composition studies are original. Screenshots under docs/screenshots show this project's own implemented pages.

Runtime dependencies: React and React DOM (MIT). Build/test dependencies include Vite (MIT), TypeScript (Apache-2.0), ESLint (MIT), typescript-eslint (MIT), Playwright (Apache-2.0), axe-core (MPL-2.0), jsonschema (MIT) and skills-ref (Apache-2.0). The lockfile records transitive versions; installed packages retain their licenses. Tooling is not required to use the instruction skill.

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

## v0.3 cross-check

The v0.3 skill was compared rule by rule with the repositories above (cloned 2026-10-19, read as data, no code run). Ideas adapted, all rewritten in our own words: a closed status line and a script that decides "done" (gstack; Impeccable's phase gates); recommended defaults on every interview question (Matt Pocock's grilling skill); checks for hidden-after-load text, flat hierarchy, display tracking, focus visibility, zoom, `transition: all` and tap targets (Impeccable's detector, Vercel's web-interface-guidelines, gstack's design-review); motion mechanics such as stagger limits, no `scale(0)`, hover gating and `svh` (Emil Kowalski's skills); with-and-without-skill baselines and transcript reading in evals (Anthropic's skill-creator). No rule names, lists or prose from those projects are copied into this repository.
