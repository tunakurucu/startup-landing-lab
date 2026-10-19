# Startup Landing Lab

**Great design skills already exist. This one takes the best rules from six of them, adds dated research on real startup sites, and turns it into 100 checks built for one job: startup landing pages.**

AI-built landing pages keep coming out the same: centred headline, framed screenshot, three adjective cards, a gradient blob. Good general design skills help, but none of them is about the specific decisions a startup homepage has to make. This skill takes the rules that hold up from the skills listed below, specialises them for landing pages, and grounds them in pages from YC, a16z speedrun and Pear companies that were opened, measured and dated.

[Explore the live field guide](https://tunakurucu.github.io/startup-landing-lab/) · [Install the skill](docs/installation.md) · [The 100 checks](skills/startup-landing-design/references/checklist.md) · [Read the research](research/README.md)

![The Startup Landing Lab field guide](docs/screenshots/home-1440.png)

## Built on

Every rule here is rewritten in this project's own words and credited to where the idea appears. No text, rule names or code are copied; the licences and exactly what was taken are in [attribution](docs/attribution.md). None of these authors endorses this project.

| Skill | Author | Licence | What it contributed |
| --- | --- | --- | --- |
| [Impeccable](https://github.com/pbakaus/impeccable) | Paul Bakaus | Apache-2.0 | The idea of a deterministic anti-pattern detector: hidden-after-load text, flat hierarchy, tracking and headline limits, gradient text, glows, side stripes, overused faces, screenshot validity |
| [gstack](https://github.com/garrytan/gstack) (design-review, plan-design-review) | Garry Tan | MIT | Score the plan before building, first-impression test, 44px targets, AI-slop tells, a closed DONE / DONE_WITH_CONCERNS / BLOCKED status |
| [Emil Kowalski's skills](https://github.com/emilkowalski/skills) | Emil Kowalski | MIT | Motion mechanics: easing, stagger limits, no `scale(0)`, hover gating, `svh`, worst-case stress at 320px |
| [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines) / [agent-skills](https://github.com/vercel-labs/agent-skills) | Vercel | MIT | Engineering hygiene: focus, labels, zoom, `transition: all`, image sizing, lazy loading, font loading, theme-color |
| [Matt Pocock's skills](https://github.com/mattpocock/skills) (grilling, handoff) | Matt Pocock | MIT | Ask few questions, each with a recommended default, and keep going when nobody answers |
| [Anthropic skills](https://github.com/anthropics/skills) (frontend-design, skill-creator) | Anthropic | Apache-2.0 | The list of current generated-design defaults; evals run with and without the skill |

What this project adds: a dated casebook of real startup homepages with measured type, layout and motion; seven archetype recipes; a decision record that maps each visitor doubt to a product artifact; two hero variants scored before any code; and a script that refuses to call the page done until all 100 checks are answered.

## The 100 checks

| Group | Checks | Examples |
| --- | --- | --- |
| Product and story | 10 | A stranger can say what it does in five seconds; each visitor doubt has an artifact |
| Hero | 7 | Headline and action above the fold at 1440 and 390; no "Get started" alone |
| Type | 13 | Hierarchy ratio, tracking floor, 11px minimum, measure, overused faces |
| Layout and rhythm | 10 | No overflow at 390 or 320, no clipped text, no nested cards, spacing that changes |
| Colour and surface | 7 | WCAG AA contrast, no gradient text or glows, no default cream-and-serif |
| Template tells | 11 | No adjective card rows, icon tiles, kicker labels everywhere, buzzwords, filler grids |
| Motion | 10 | Reduced motion hides nothing, no layout animation, written contracts |
| Mobile and touch | 8 | 44px targets, zoom never disabled, working menu, 200% zoom |
| Accessibility and interaction | 12 | Names, alt, focus visible, labels, no script errors, real links |
| Performance and assets | 4 | Sized and lazy images, font-display, page weight |
| Honesty and proof | 4 | No unsupplied logos, testimonials or unsourced numbers |
| Process | 4 | Screenshots opened, one structural revision, `verify-record` passes |

64 are checked automatically by [`check-page.mjs`](skills/startup-landing-design/scripts/check-page.mjs). The other 36 need eyes, so the agent answers them in its decision record, and [`verify-record.mjs`](skills/startup-landing-design/scripts/verify-record.mjs) will not let it finish while any are open. This site runs the same 64 checks on every page in CI.

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

All three pass the skill's 64 automatic checks with no block failures (five warnings are kept on purpose, each with its reason), use self-hosted open-licence type, and carry motion written as contracts — trigger, purpose, fallback, duration — that reduced-motion removes without hiding anything. Fictional brands, original code and copy, no fabricated customers, figures or testimonials. [Design decisions, motion contracts and an honest diversity review](docs/demo-decisions.md).

![Relayline at desktop width: the trace explorer is the hero](docs/screenshots/demo-relayline-1440.png)

## Research you can inspect

137 candidates, 94 of them from 2026 cohorts (YC W26, X26 and S26; a16z speedrun SR006; Pear), each verified on the program's own page. 52 audit records: 32 from October 19 rendered at desktop and phone width, operated, tested with reduced motion and measured; 20 earlier desktop inspections. 103 homepages carry computed-style measurements, and the recipes quote them. One finding to start with: 11 of the 32 audited sites kept visible motion running when the visitor asked for reduced motion. [Findings, method and limits](research/README.md) · [Measurements](research/measurements.md).

Tablet layouts and real-device behaviour remain unverified. This is a dated sample, not a ranking or a census. [Method, evidence and limitations](research/README.md).

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

The browser suite covers every route at 1440/768/390 with axe, the skill's 64 automatic checks on eight routes, each motion contract with and without reduced motion, 320 px stress, filters, navigation, demo controls and downloads. See [the evaluation](docs/evaluation.md) for what actually ran and what did not. [Architecture](docs/architecture.md) explains the single-source data flow and hash routing for Pages.

## Help improve it

Submit a real website with company/source verification, inspection date and viewport, specific design observations, transferable insights, and honest limitations. Corrections and deeper mobile audits are particularly useful. Start with [CONTRIBUTING.md](CONTRIBUTING.md) and [the audit template](research/audit-template.md).

Original code and authored material are [MIT licensed](LICENSE). Referenced websites and trademarks remain their owners' property. No affiliation with or endorsement by Y Combinator or featured companies. [Attribution](docs/attribution.md).
