# Evaluation

## v0.2 gate baseline (2026-10-19)

Production build served with `vite preview`; `check-page.mjs` used its 390px viewport. These are the **before** results, prior to the font work:

| Route | one_h1 | type_system | reduced_motion_rule | no_overflow_390 | named_controls | valid_links | heading_order |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Home | PASS | **FAIL** | PASS | PASS | PASS | PASS | PASS |
| Relayline | PASS | **FAIL** | PASS | PASS | PASS | PASS | PASS |
| Sidequest | PASS | **FAIL** | PASS | PASS | PASS | PASS | PASS |
| Fieldwork (`#/demo/ledger`) | PASS | **FAIL** | PASS | PASS | PASS | PASS | PASS |

At that point the CSS declared only Arial, Georgia and Courier New.

### After the type pass (2026-10-19)

Five SIL-OFL families are self-hosted under `gallery/public/fonts/` with their license texts (Inter, IBM Plex Mono, IBM Plex Sans, Bricolage Grotesque, Instrument Serif; Latin subsets, variable where the upstream ships one, 232 KB total). No external font requests. `check-page.mjs` was also corrected: it previously sampled `body`, headings, `code`, `nav` and `button` only, which missed faces used on other elements; it now counts every family rendering text on the page.

| Route | Result | Families in use |
| --- | --- | --- |
| Home | 7/7 pass | Inter, IBM Plex Mono, Instrument Serif |
| Relayline | 7/7 pass | Inter, IBM Plex Mono |
| Sidequest | 7/7 pass | Bricolage Grotesque, Instrument Serif, Inter, IBM Plex Mono |
| Fieldwork | 7/7 pass | Instrument Serif, IBM Plex Sans, IBM Plex Mono |

The four gate tests in `tests/browser/skill-gate.spec.ts` are enabled and run in CI. Browser suite: 71 passed. axe: zero violations across 60 route/viewport combinations.

Original build evaluation: 2026-10-18. Research extension: 2026-10-19. This is a qualitative engineering/design assessment, not a calibrated benchmark or a conversion study.

## What actually ran

- Agent Skills frontmatter/directory validation using installed `skills-ref` 0.1.1's `agentskills validate` command: passed.
- Skill Creator quick validator: passed.
- JSON Schema, duplicate identity, catalog/audit join and internal Markdown file-link checks: passed.
- TypeScript production build and ESLint: passed.
- Three data integrity tests: passed.
- 67 Playwright tests against the production build under `/startup-landing-lab/`: passed after the seven-site extension. Includes 20 routes at 1440×900, 768×1024 and 390×844, reference filter combinations/reset/empty state, mobile menu and detail navigation, demo state changes and three downloads, reduced motion, and anchor inventory.
- axe WCAG 2 A/AA and 2.1 AA checks on the 60 route/viewport initial-state combinations: zero reported violations. This does not prove full accessibility or replace assistive-technology testing.
- Actual full-page desktop and mobile screenshots of the gallery and three demos were inspected. No horizontal document overflow or clipped headings was found at the tested sizes.

The first preview-server attempt failed because this environment could not enumerate network interfaces with a wildcard host. Binding the production preview to 127.0.0.1 resolved it; subsequent browser runs passed. The first browser download mirror failed; Playwright's standard fallback mirror installed Chromium successfully.

## Fresh-agent skill exercise

A separate agent received only the standalone skill directory and a raw brief for a fictional developer API, Relayline. It was asked to produce a light landing page with a local trace explorer. It generated a design record and a self-contained HTML page, including reference selection, art direction, scenario logic and an implementation. Its reported static/logic checks covered scenario behavior, attempt selection, IDs, fragment targets, single H1 and absence of external assets.

That agent could not launch Chromium at the time, so its generated page was not visually verified by that agent. Its output was not silently treated as a validated production page or copied into the three demos. The main demo was authored separately. This is an isolated skill exercise in a sandboxed agent environment, not a run inside any of the supported clients (Claude Code, Cursor, Codex). No with/without controlled comparison was performed.

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

The 2025 additions include changes since the external praise: Normal redirects to a different, sparse site, and Toothy’s current page differs from the design vendor’s case study. Unavailable or uninspectable candidates were excluded. The gallery uses original abstract studies rather than third-party screenshots. That protects attribution but gives readers less direct visual evidence. Every reference links to the source website and carries inspection limits.

## Limits

The research now contains 20 records: sixteen desktop section inspections and four partial desktop records. The latest seven belong to 2025 YC batches and were selected using dated design mentions; five prior additions belong to 2026 YC batches. Reference-site mobile, tablet, reduced-motion and comprehensive accessibility behavior were not tested; this does not equal 20 cross-device deep audits. Five Bay Area comparisons have no verified YC status; this does not establish non-YC membership. Only two comparisons are audited. Four older comparison candidates have source-only recon and are not counted as audits. These limits are visible in the gallery and dataset.

No complete screen-reader test, cross-browser matrix, production service behavior, conversion study or external-client automatic activation test was performed. The demos are local simulations, not production startup services.

Public deployment status is recorded in [the release audit](release-audit.md). Do not infer a passing Lighthouse score from the build or axe checks.

## Publication and performance limits

The complete source is published in the public repository. GitHub Actions Validate and Pages deployment succeeded, and the live homepage and all three demos were opened and interacted with. See [the release audit](release-audit.md) for the hosted run IDs and visibility confirmation. Lighthouse was attempted locally but could not obtain Chrome’s debugging port; no Lighthouse score is reported. The final dependency audit reports zero vulnerabilities. Final rerun output is retained in validation-final.txt.
