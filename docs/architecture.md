# Architecture

A static React + TypeScript application built with Vite. No server, API keys, user accounts, database, analytics or external font/image requests are required.

## Data flow

`research/candidates.json` holds candidate metadata. `research/sites.json` holds inspected records. JSON Schema and identity-join checks validate both. `scripts/generate.py` builds readable audit documents and the standalone skill casebook from sites.json. The gallery imports the same JSON, avoiding an independently edited data copy.

`skills/startup-landing-design/` is independently installable. Its relative references remain inside that directory. The gallery is not a runtime dependency of the skill.

`gallery/src/main.tsx` contains the editorial collection, filters, reference details, installation view and hash route dispatch. `demos.tsx` contains three original fictional products with local state and downloadable sample files. `style.css` separates their design systems through scoped classes. No router dependency is needed for this small static route map.

## Routes and hosting

The build uses `/startup-landing-lab/` as its Vite base. Hash routes keep deep links and refreshes on the same static document, including `#/demo/relayline`, `#/demo/sidequest` and `#/demo/ledger`. Change the build base if the repository name changes. The internal Fieldwork route retains `ledger` as a stable identifier; the visible brand is Fieldwork.

The Pages workflow builds on main and deploys only after its checks pass. Pull requests run the read-only CI workflow. No pull_request_target workflow, external action secrets or write credentials are needed. Browser tests launch the production preview under the repository prefix.

## Local development

Node 22.12+ or 24, Python 3.12+. From the repository root:

```bash
npm ci
python3 -m pip install -r requirements.txt
npm run dev
```

For production checks:

```bash
python3 scripts/generate.py
npm run validate
agentskills validate skills/startup-landing-design
npm run build
npm run lint
npm test
npx playwright install chromium
npm run test:browser
```

The installed PyPI skills-ref 0.1.1 exposes the `agentskills` CLI, despite the specification's `skills-ref validate` example. CI uses the actual installed command. Font families use system stacks. CSS/SVG-like shapes and all product messaging are original.

## Boundaries

The gallery publishes dated analysis and source links. It never loads or embeds third-party homepages. Local demo downloads create Blob files in the visitor's browser; no data is submitted. This is a showcase and instruction skill, not a production webhook or operations service.
