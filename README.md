# Startup Landing Lab

**A design skill for startup pages with a point of view.**

I kept seeing startup pages that could have belonged to any company. I built this field guide to study the decisions behind memorable ones, then test those ideas on three very different products.

[Explore the live field guide](https://tunakurucu.github.io/startup-landing-lab/) · [Install the skill](docs/installation.md) · [Read the research](research/README.md)

![The Startup Landing Lab field guide](docs/screenshots/home-1440.png)

## Why another design skill?

Because “make it distinctive” is not a method. This skill connects a visitor's doubts to a reference decision, an original product artifact and a rendered quality check. It includes dated observations and the limits of that evidence.

It is an instruction skill, not a trained model. It does not copy startup pages or claim there is one YC visual style. It complements broader design and engineering skills.

## Works with your existing design tools

Startup Landing Lab comes first: product interpretation → dated references → archetype → `DESIGN-RECORD.md` → numeric recipe and pre-build gate. Keep your usual frontend or design skill for execution polish. The tools below are optional; the standalone Markdown skill and its local checks work without installing any of them.

| Optional companion | Job after our decision record |
| --- | --- |
| [frontend-design](https://github.com/anthropics/skills) / [Impeccable](https://github.com/pbakaus/impeccable) | Aesthetic execution; Impeccable's installed detector can add rule-ID findings |
| [web-design-guidelines](https://github.com/vercel-labs/agent-skills) | Engineering and accessibility review |
| [agent-browser](https://github.com/vercel-labs/agent-browser) or local Playwright | Render and inspect the page at three widths |
| [Emil Kowalski's skills](https://github.com/emilkowalski/skills) | Motion review and stress thinking |

## Install

Copy the skill into your target project. You do not need to install the gallery.

```bash
git clone https://github.com/tunakurucu/startup-landing-lab.git
mkdir -p .agents/skills
cp -R startup-landing-lab/skills/startup-landing-design .agents/skills/
```

Codex and Cursor document `.agents/skills/`. Claude Code uses `.claude/skills/`. See [project and user-level instructions](docs/installation.md) and their official sources. Client discovery paths are documented; end-to-end runs in all clients are not claimed.

## Use it

> Use startup-landing-design to build a landing page for my developer API. Choose an appropriate visual direction, make the product understandable through an original local demo, then inspect and refine the mobile layout.

The workflow: understand the product → select reference principles → compare two hero structures and pass a pre-build gate → build from the archetype's recipe → render at three widths and run the checker → critique → make one structural revision. The agent leaves a filled `DESIGN-RECORD.md` beside the page.

[Read the skill](skills/startup-landing-design/SKILL.md) or try [consumer and B2B prompts](docs/installation.md).

## Three original experiments

| Demo | Direction | Working behavior |
| --- | --- | --- |
| Demo | Direction | Type | Working behavior |
| --- | --- | --- | --- |
| [Relayline](https://tunakurucu.github.io/startup-landing-lab/#/demo/relayline) | Technical instrument: the working trace *is* the hero | Inter, IBM Plex Mono | Switch failure scenarios, inspect each attempt, export sample JSON |
| [Sidequest](https://tunakurucu.github.io/startup-landing-lab/#/demo/sidequest) | Playful creative ritual | Bricolage Grotesque, Instrument Serif italic | Deal an original three-part brief; keep it as a text file |
| [Fieldwork](https://tunakurucu.github.io/startup-landing-lab/#/demo/ledger) | Editorial operations | Instrument Serif, IBM Plex Sans | Compare structured and informal handoffs; export the working brief |

All three pass the skill's own gate (`check-page.mjs`, 7/7 on every route), use self-hosted open-licence type, and carry motion written as contracts — trigger, purpose, fallback, duration — that reduced-motion removes without hiding anything. Fictional brands, original code and copy, no fabricated customers, figures or testimonials. [Design decisions, motion contracts and an honest diversity review](docs/demo-decisions.md).

![Relayline at desktop width: the trace explorer is the hero](docs/screenshots/demo-relayline-1440.png)

## Research you can inspect

43 candidates. 38 official YC verifications. Twenty audit records: sixteen desktop inspections and four partial desktop field notes. Seven new 2025 YC batch companies were chosen using [documented design mentions](research/2025-praised-selection.md) and inspected live; the previous five cover [2026 YC companies in San Francisco](research/2026-yc-audit-queue.md). Seven design families. Five Bay Area comparison candidates have unverified YC status, not proven non-membership. Earlier [comparison source recon](research/source-recon-2026-10-19.md) remains outside the audited set.

Reference-site mobile, tablet and reduced-motion behavior remain unverified. This is a focused first edition, not exhaustive research or a ranking. [Method, evidence and limitations](research/README.md).

The gallery uses original abstract composition studies and links to source websites. It does not redistribute third-party screenshots or assets.

## Does the skill work?

Partly, and the repo says so. Three raw product briefs in [`evals/`](evals/run.md) were given to isolated agents with only the skill folder. Each picked an archetype and compared hero variants; none finished the render, post-build gate and revision steps (2/7, 2/7, 1/7 assertions). That early stop is the main thing v0.3 fixes. Runs inside Claude Code, Codex and Cursor are still to be added; the protocol to add one is in the same file.

## Run and validate

Node 22.12+ or 24 and Python 3.12+:

```bash
npm ci
python3 -m pip install -r requirements.txt
npm run dev
```

```bash
npm run validate
agentskills validate skills/startup-landing-design
npm run build
npm run lint
npm test
npx playwright install chromium
npm run test:browser
```

85 browser checks cover every route at 1440/768/390 with axe, the skill's own gate on home and all demos, each motion contract with and without reduced motion, 320 px stress, filters, navigation, demo controls and downloads. See [the evaluation](docs/evaluation.md) for what actually ran and what did not. [Architecture](docs/architecture.md) explains the single-source data flow and hash routing for Pages.

## Help improve it

Submit a real website with company/source verification, inspection date and viewport, specific design observations, transferable insights, and honest limitations. Corrections and deeper mobile audits are particularly useful. Start with [CONTRIBUTING.md](CONTRIBUTING.md) and [the audit template](research/audit-template.md).

Original code and authored material are [MIT licensed](LICENSE). Referenced websites and trademarks remain their owners' property. No affiliation with or endorsement by Y Combinator or featured companies. [Attribution](docs/attribution.md).
