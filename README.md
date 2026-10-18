# Startup Landing Lab

**A design skill for startup pages with a point of view.**

I kept seeing startup pages that could have belonged to any company. I built this field guide to study the decisions behind memorable ones, then test those ideas on three very different products.

[Explore the live field guide](https://tunakurucu.github.io/startup-landing-lab/) · [Install the skill](docs/installation.md) · [Read the research](research/README.md)

![The Startup Landing Lab field guide](docs/screenshots/home-1440.png)

## Why another design skill?

Because “make it distinctive” is not a method. This skill connects a visitor's doubts to a reference decision, an original product artifact and a rendered quality check. It includes dated observations and the limits of that evidence.

It is an instruction skill, not a trained model. It does not copy startup pages or claim there is one YC visual style. It complements broader design and engineering skills.

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

The workflow: understand the product → select reference principles → commit to art direction → build the narrative and functional artifact → inspect → critique → revise.

[Read the skill](skills/startup-landing-design/SKILL.md) or try [consumer and B2B prompts](docs/installation.md).

## Three original experiments

| Demo | Direction | Working behavior |
| --- | --- | --- |
| [Relayline](https://tunakurucu.github.io/startup-landing-lab/#/demo/relayline) | Light technical instrument | Inspect failure scenarios and event steps; export sample JSON |
| [Sidequest](https://tunakurucu.github.io/startup-landing-lab/#/demo/sidequest) | Playful creative ritual | Deal an original three-part brief; keep it as a text file |
| [Fieldwork](https://tunakurucu.github.io/startup-landing-lab/#/demo/ledger) | Editorial operations | Compare structured/informal handoffs; export the working brief |

All three are fictional brands with original code and copy. There are no fabricated customers, financial claims or testimonials. [Design decisions and diversity review](docs/demo-decisions.md).

## Research you can inspect

32 candidates. 27 official YC verifications. Eight audit records: three full-page desktop inspections and five partial desktop records. Seven design families. Five Bay Area comparison candidates have unverified YC status, not proven non-membership.

Reference-site mobile, tablet and reduced-motion behavior remain unverified. This is a focused first edition, not exhaustive research or a ranking. [Method, evidence and limitations](research/README.md).

The gallery uses original abstract composition studies and links to source websites. It does not redistribute third-party screenshots or assets.

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

31 browser checks cover desktop/tablet/mobile routes, axe checks, filters, navigation, demo controls, downloads and reduced motion. See [the evaluation](docs/evaluation.md) for what actually ran and what did not. [Architecture](docs/architecture.md) explains the single-source data flow and hash routing for Pages.

## Help improve it

Submit a real website with company/source verification, inspection date and viewport, specific design observations, transferable insights, and honest limitations. Corrections and deeper mobile audits are particularly useful. Start with [CONTRIBUTING.md](CONTRIBUTING.md) and [the audit template](research/audit-template.md).

Original code and authored material are [MIT licensed](LICENSE). Referenced websites and trademarks remain their owners' property. No affiliation with or endorsement by Y Combinator or featured companies. [Attribution](docs/attribution.md).
