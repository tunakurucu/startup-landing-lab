# Evaluation

Evidence date: 2026-10-18. This is a qualitative engineering/design assessment, not a calibrated benchmark or a conversion study.

## What actually ran

- Agent Skills frontmatter/directory validation using installed `skills-ref` 0.1.1's `agentskills validate` command: passed.
- Skill Creator quick validator: passed.
- JSON Schema, duplicate identity, catalog/audit join and internal Markdown file-link checks: passed.
- TypeScript production build and ESLint: passed.
- Three data integrity tests: passed.
- 31 Playwright tests against the production build under `/startup-landing-lab/`: passed. Includes eight routes at 1440×900, 768×1024 and 390×844, reference filter combinations/reset/empty state, mobile menu and detail navigation, demo state changes and three downloads, reduced motion, and anchor inventory.
- axe WCAG 2 A/AA and 2.1 AA checks on the 24 route/viewport initial-state combinations: zero reported violations. This does not prove full accessibility or replace assistive-technology testing.
- Actual full-page desktop and mobile screenshots of the gallery and three demos were inspected. No horizontal document overflow or clipped headings was found at the tested sizes.

The first preview-server attempt failed because this environment could not enumerate network interfaces with a wildcard host. Binding the production preview to 127.0.0.1 resolved it; subsequent browser runs passed. The first browser download mirror failed; Playwright's standard fallback mirror installed Chromium successfully.

## Fresh-agent skill exercise

A separate agent received only the standalone skill directory and a raw brief for a fictional developer API, Relayline. It was asked to produce a light landing page with a local trace explorer. It generated a design record and a self-contained HTML page, including reference selection, art direction, scenario logic and an implementation. Its reported static/logic checks covered scenario behavior, attempt selection, IDs, fragment targets, single H1 and absence of external assets.

That agent could not launch Chromium at the time, so its generated page was not visually verified by that agent. Its output was not silently treated as a validated production page or copied into the three demos. The main demo was authored separately. This is an actual isolated skill exercise in the available Work agent environment, not a run in Claude Code, Cursor or a standalone Codex CLI. No with/without controlled comparison was performed.

## Three structured brief evaluations

| Dimension | Relayline | Sidequest | Fieldwork |
| --- | --- | --- | --- |
| Product fit | Reliability is explained through a persistent event trace | Three constraints lower the cost of starting | Owner, decision and next step match the buyer's question |
| Identity | Deliberate light technical instrument | Strong playful type, paper deck and original character | Calm serif-led editorial brief |
| Originality | Original event model and layout; common technical patterns remain | Original prompt content and composition; familiar card metaphor | Original workflow comparison; editorial conventions are familiar |
| Composition | Split hero; dense inspection follows open rationale | Oversized wordplay; color and cards change reading rhythm | Asymmetric opening; chapters and annotations structure the story |
| Typography | Clear sans/mono roles; small labels need zoom review | Heavy sans and italic serif; narrow wraps are intentionally expressive | Serif display and plain body; conservative and readable |
| Storytelling | Shows transient and auth failure decisions | The interaction performs the promise | Structured/informal comparison makes the improvement inspectable |
| Functionality | Scenarios, step inspection and JSON download tested | Dealing and text export tested | Workflow selection, comparison and text export tested |
| Responsive quality | Revised hero trace becomes vertical on mobile | Deck stacks; hero decoration simplifies | Process strip becomes vertical; annotations reflow |
| Accessibility | Native radio/buttons and live detail state; axe clear in tested initial states | Native controls and live brief; axe clear in tested initial states | Labelled select/checkbox, semantic brief; axe clear in tested initial states |
| Motion | User-controlled state and optional smooth navigation | Color transition after dealing, removed for reduced motion | State replacement and optional smooth navigation |
| Diversity | Cool technical sequence | Warm expressive ritual | Muted editorial accountability |

The manual brief assessments applied the skill's product interpretation, reference-selection, hypothesis, page architecture, implementation and QA steps. They are not three independent client-installation tests. See [demo decisions](demo-decisions.md) for concrete rationales and counterexamples.

## Critique and revision

The first rendered mobile Relayline hero compressed a desktop signal diagram and tiny labels. We replaced it with four readable vertical event states while retaining the full desktop diagram. The relevant responsive and browser checks were rerun successfully. A fictional registered-mark symbol in Fieldwork was also removed to avoid implying an actual trademark registration.

The gallery uses original abstract studies rather than third-party screenshots. That protects attribution but gives readers less direct visual evidence. Every reference links to the source website and carries inspection limits.

## Limits

Research is smaller than the initial 12–15 deep-audit aspiration: eight records, three full-page desktop inspections and five partial desktop records. Reference-site mobile, tablet, reduced-motion and comprehensive accessibility behavior were not tested. Five Bay Area comparisons have no verified YC status; this does not establish non-YC membership. Only two comparisons are audited. These limits are visible in the gallery and dataset.

No complete screen-reader test, cross-browser matrix, production service behavior, conversion study or external-client automatic activation test was performed. The demos are local simulations, not production startup services.

Public deployment status is recorded in [the release audit](release-audit.md). Do not infer a passing Lighthouse score from the build or axe checks.

## Publication and performance limits

The complete source is published in the public repository. GitHub Actions Validate and Pages deployment succeeded, and the live homepage and all three demos were opened and interacted with. See [the release audit](release-audit.md) for the hosted run IDs and visibility confirmation. Lighthouse was attempted locally but could not obtain Chrome’s debugging port; no Lighthouse score is reported. The final dependency audit reports zero vulnerabilities. Final rerun output is retained in validation-final.txt.
