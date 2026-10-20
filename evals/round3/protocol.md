# Round 3 protocol: blind A/B with three personas

**Question.** On briefs the skill has never been tuned against, are pages built by an agent with `startup-landing-design` preferred, under blind grading, over pages built by the same agent without it?

**Primary endpoint (fixed before any build).** Brief-level verdicts (win, tie, loss for the skill) over the 12 round-3 briefs, tested with an exact two-sided sign test at α = 0.05, ties excluded. Everything else in this document is secondary or descriptive.

What changes from rounds 1–2: 12 new briefs instead of 4 reused ones; two briefs that start from existing code (a redesign and a Next.js app); three independent grader personas instead of one; ten criteria with anchors instead of eight without; a hard-fail list that overrides scores; seeded and recorded randomisation; retest and same-arm packets that measure grading noise; a pre-registered statistical test.

## Contents of this folder

| Path | What it is |
| --- | --- |
| `briefs/*.md` | 12 briefs. 10 new pages: questionnaire, sunrise, alerts, cancellations, heater, kitchens, nightly, envvars, stitch, agenda. 2 existing codebases: handover (redesign), brewday (Next.js) |
| `fixtures/redesign/` | Shiftnote's current homepage for `handover`: generic but working, opens offline from disk |
| `fixtures/next-app/` | Grainline's Next.js App Router + Tailwind project for `brewday`, placeholder homepage, no `node_modules` |
| `grading.md` | Rubric v2: personas, buyer cards, ten anchored criteria, hard fails, output schema, aggregation |
| `scripts/prepare.py` | Brief variants, opaque build folders, A/B assignment and grading order from one seed |
| `scripts/probe.cjs` | Neutral renderer and mechanical probe, run by the operator on every delivered page |
| `scripts/tally.py` | Grade validation, pair and brief verdicts, sign test, sensitivity, retest and same-arm summaries |

The last line of every brief is the skill line (`Use startup-landing-design to ...`). It is the only text that differs between arms: the no-skill arm gets `Decide on a direction, build and test the page.` (the round 1–2 wording), and graders get the brief with that line removed.

### Next.js fixture versions

Chosen from npm on 2026-10-20 with `npm view <package> version` and pinned exactly in `fixtures/next-app/package.json`:

| Package | Version | Note |
| --- | --- | --- |
| next | 16.4.2 | `latest` tag |
| react, react-dom | 19.3.1 | `latest` |
| typescript | 5.9.3 | latest 5.x. `latest` is 7.0.2, but `create-next-app@16.4.2` itself specifies `typescript ^5` |
| @types/react, @types/react-dom | 19.3.0 | `latest` |
| @types/node | 20.19.43 | latest 20.x, the major `create-next-app@16.4.2` specifies |
| tailwindcss | 3.4.19 | latest 3.x, chosen deliberately: the brief's "existing codebase" has a `tailwind.config.ts` and its README says it is not migrating. `latest` is 4.3.3; writing v4 syntax into this project is a stack violation the round should catch |
| postcss | 8.5.31 | `latest` |
| autoprefixer | 10.6.1 | `latest` |

Verified on Node 22.22.0 in a throwaway copy (not in the fixture): `npm install` then `npm run build` produced a static export in `out/` with the Tailwind tokens applied. The fixture ships without a lockfile; step 4 creates one for the round.

## Roles

| Role | Sees the A/B key? | Does |
| --- | --- | --- |
| Operator | yes | Prepares environments, runs builds, assembles packets, runs the probe, schedules graders and adjudicators. Never grades, never edits a page beyond the blinding scrub, never talks to graders outside the fixed prompts |
| Builder | no | One fresh agent per build |
| Grader | no | One fresh agent per (packet, persona) |
| Adjudicator | no | One fresh agent per flagged page side; confirms or rejects hard-fail flags |
| Analyst | after freeze | Runs `tally.py` once grades are frozen; can be the operator |

## Folder layout for the run

```
evals/runs/<YYYY-MM-DD>-ab-round3/
  PREREG.md                          step 1, committed before the first build
  DEVIATIONS.md                      every departure from this protocol, with time and reason
  briefs/<slug>/{with,without,grader}.md          from prepare.py
  key/builds.json  key/mapping.json               operator only
  build_order.json  grade_queue.json
  builds/<slug>/<arm>-r<k>/          delivered files + transcript.jsonl + meta.json
  packets/P001/                      brief.md, OPEN.md, grading.md, A/, B/, shots/A/, shots/B/, [before/], [A.diff, B.diff, build-*.log]
  grades/P001/{designer,buyer,engineer}.json
  adjudication/P001-A.json
  results/results.json  results/summary.md        from tally.py
```

Builds run in sandboxes **outside** the repository and are copied into `builds/` only after they finish.

## Step 1. Freeze and pre-register

Before anything is built, write `PREREG.md` with the following and commit it. After this commit, no change to the skill, `grading.md`, this protocol, the briefs, the fixtures or the scripts is allowed for this round. A change means a new round with a new seed.

- Skill: repository commit hash and the tree hash `git rev-parse HEAD:skills/startup-landing-design`.
- sha256 of `grading.md`, `protocol.md`, every brief, every fixture file and every script (`find briefs fixtures scripts grading.md protocol.md -type f | sort | xargs sha256sum`).
- Builder model ID, client name and version, system prompt (or its sha256), tool list, turn cap and wall-clock cap (the same for both arms; 120 minutes is a reasonable cap).
- Grader and adjudicator model ID and client version.
- `k` (builds per arm per brief) and the budget tier from step 11.
- The seed: `python3 -c "import secrets; print(secrets.randbits(32))"`, pasted verbatim.
- Tie band (6), α (0.05), primary endpoint as stated at the top.
- Node, Python, Playwright and Chromium versions in the image.

## Step 2. Generate assignments

```bash
python3 -I scripts/prepare.py --briefs briefs --round <run-dir> --seed <seed> --k <1|3>
```

It writes the brief variants, `key/builds.json` (each build's opaque folder `W001`…, arm, brief file, fixture), `key/mapping.json` (each packet's kind, pair and which build is A and B), `build_order.json` and `grade_queue.json`. A/B is balanced: the skill page is A in exactly half of the primary packets (by a seeded shuffle). The output is deterministic for the same seed, briefs, `k` and Python minor version; anyone can recompute it from `PREREG.md`. It refuses to overwrite an existing run.

Packet kinds:

- **primary**: build `with-r<i>` against `without-r<i>` of the same brief. Only these count.
- **retest**: 4 (k = 1) or 6 (k = 3) primary pairs drawn by the seed, graded again by fresh graders with A and B swapped. Measures grader noise and position bias.
- **same-arm** (k = 3 only): for each brief, r1 against r2 of one arm; the seed picks the skill arm for six briefs and the no-skill arm for the other six. Measures how different two builds from the same process are.

## Step 3. Build the sandbox image

One image, used for every builder, identical for both arms except for the skill folder:

- Node 22, Python 3, Playwright with Chromium and `@axe-core/playwright` installed at one fixed path, on `NODE_PATH`, with `SLD_DEPS` pointing to it in both arms (an unused variable does nothing).
- No network: block all egress, including package registries, font CDNs and search.
- No other skills, plugins or MCP servers beyond the client's defaults. In particular no other design skill (for example `frontend-design`) in either arm. Record the list of skills the agent can see in each build's `meta.json`; a build whose list differs from its arm's specification is invalid and is rebuilt.
- **Skill arm only:** the skill folder from the frozen commit, read-only, at the client's user-level skill path (for Claude Code `~/.claude/skills/startup-landing-design/`), never inside the working folder, so it cannot appear in a diff.
- No memory, no previous conversations, no access to the repository, `evals/`, this folder, other builds or other briefs.
- `NEXT_TELEMETRY_DISABLED=1`.

**Pre-flight (discarded, not graded):** run one build per arm on an old brief (for example `queue`) and confirm Playwright launches, the skill is discoverable in the skill arm and absent in the other, and in the brewday working folder `npm run build` succeeds offline.

## Step 4. Prepare working folders

For each entry in `key/builds.json`, create `/work/<workdir>/` (opaque name; never `with` or `without` in any path the builder sees) containing:

- `BRIEF.md`: the arm's variant, `briefs/<slug>/with.md` or `without.md`.
- `handover`: a copy of `fixtures/redesign/`.
- `brewday`: a copy of `fixtures/next-app/` plus a shared lockfile and installed dependencies. Create them once, in a staging copy built on the same image with network: `npm install --package-lock-only --ignore-scripts --no-audit --no-fund`, then `npm ci`. Record the lockfile's sha256 in `PREREG.md` (append, before builds start), then copy `package-lock.json` and `node_modules/` into every brewday working folder with `cp -a`.

## Step 5. Run the builds

Start builds in `build_order.json` order (seeded, arms interleaved), all within one 72-hour window, same model ID throughout. Each build is one fresh agent with this prompt and nothing else:

> Your working directory is `/work/<workdir>`. It contains `BRIEF.md`, a brief from a client. Do the work the brief asks for in this directory. *(New-page briefs:)* Deliver a static website whose home page is `index.html` in this directory; it must open correctly from disk with no network. *(handover:)* The client's current site is in this directory; its home page is `index.html` and must still open correctly from disk with no network. *(brewday:)* The client's project is in this directory with its dependencies installed; `npm run build` must produce the site in `out/`. You have no internet access. Nobody will answer questions during this task, so make reasonable decisions and keep going. When you are finished, reply with a short summary of what you built.

Rules:

- Same turn cap and wall-clock cap for both arms. A build that hits the cap is graded as delivered.
- **Infrastructure failure** (the sandbox or model API fails before the agent's first completed turn): rebuild once with the same settings and log it in `DEVIATIONS.md`. **Agent failure** (the agent stops, gives up or delivers nothing): no rebuild; the folder is graded as delivered, which normally means a confirmed HF4.
- **Intention to treat:** a skill-arm build counts as a skill build even if the agent never opened the skill. Record in `meta.json` whether `SKILL.md` was read, and report the count. Confirm from the transcript that no no-skill build read any skill file.
- Copy the finished folder to `builds/<slug>/<arm>-r<k>/` with `transcript.jsonl` and `meta.json` (workdir, model ID, client version, start and end time, wall-clock seconds, input and output tokens if available, tool-call count, cap hit, visible skills, whether `SKILL.md` was read, infrastructure retry).

## Step 6. Assemble blind packets

For each packet in `key/mapping.json`, create `packets/<Pnnn>/` from the two builds named as A and B. Apply every rule identically to both sides.

1. **Copy the delivered files** to `A/` and `B/`, then remove process files: `BRIEF.md`, `DESIGN-RECORD.md`, `NOTES.md`, `BUILD-NOTES.md`, any other `*.md` the builder created (keep the fixture's own `README.md`), `*.log`, `check*.json`, `shots*/`, `screenshots/`, `before*` files and folders, `.claude/`, `.agents/`, `transcript*`, `meta.json`, `node_modules/`, `.next/`, `out/`, `*.tsbuildinfo`, `next-env.d.ts`, and the unchanged `package-lock.json`. Never remove a file that the page's HTML, CSS or JS references; check with `grep -rl <filename>` first.
2. **Blinding scrub.** Search both sides, case-insensitively, for: `startup-landing`, `landing-design`, `DESIGN-RECORD`, `design record`, `archetype`, `casebook`, `typographic technical`, `expressive world`, `canvas first`, `functional entrance`, `workflow theater`, `immersive editorial`, `editorial platform`, `check-page`, `verify-record`, `render.sh`, `SLD_DEPS`, `default detector`, `hero variant`, `DONE_WITH_CONCERNS`. A match inside a code comment: replace the comment's text with `[removed for blinding]`. A match in visible text: leave it (it is part of the page) and log it in `DEVIATIONS.md` as a blinding breach for that packet. Keep a diff of every scrub edit.
3. **brewday:** copy each side's source to `A/src/`, install from the round's lockfile, run `NEXT_TELEMETRY_DISABLED=1 npm run build` with no network, save `build-A.log`, and copy `out/` to `A/site/`. A failed build leaves `site/` absent; note it in `OPEN.md`.
4. **Render and probe** each side with the same command:
   `NODE_PATH=<playwright install> node scripts/probe.cjs <A/index.html | http://127.0.0.1:<port>/> packets/<Pnnn>/shots/A`
   Static pages are probed from disk. brewday is served with `python3 -m http.server <port> --bind 127.0.0.1 --directory A/site`. Network requests are blocked by the probe.
5. **Diffs** for handover and brewday: `diff -ruN <fixture> A/ > A.diff` (brewday: against `A/src/`), excluding the removed files.
6. **handover:** copy `fixtures/redesign/` to `before/` and probe it into `before/shots/`.
7. Add `brief.md` (the `grader.md` variant), `grading.md`, and `OPEN.md` with the exact path or serve command for each side.

**Automatic flags.** If a side's probe shows a `load_error`, any `page_errors`, `body_text_length` under 200, or at 390 a headline with `within_viewport_x: false`, write an operator flag for that side (HF4 or HF3) so it goes to adjudication even if no grader flags it.

## Step 7. Grade

Run one fresh grader per job in `grade_queue.json` order (seeded; personas, briefs and packet kinds interleaved, so retest and same-arm packets are indistinguishable from primary ones). Same model ID for all graders. Prompt:

> You are the **<designer | buyer | engineer>** grader described in `grading.md`. Your packet is `packets/<Pnnn>/`. Read `grading.md` in full, then grade pages A and B for the brief in `brief.md`, following its steps in order. Open and operate both pages yourself as described in `OPEN.md`. Write your result as JSON to `grades/<Pnnn>/<persona>.json` and write nothing else. You have no internet access.

Graders get no other information: not the word "skill", not that one side is a control, not other packets, not other personas' grades. After each job run `python3 -I scripts/tally.py --validate grades/<Pnnn>/<persona>.json`; an invalid file is discarded and the job rerun once with a fresh grader (logged).

Optional robustness check, if budget allows: grade the primary packets a second time with a grader from a different model family, one persona at a time. Report it separately; it never replaces the primary result.

## Step 8. Adjudicate hard fails

For every page side with at least one grader or operator flag, run one fresh adjudicator that sees only that side's files, its probe output and the flags, never the other page. Prompt:

> Page `<A|B>` in `packets/<Pnnn>/` has been flagged: `<flags JSON>`. Using only the hard-fail table in `grading.md` and the page itself, try to reproduce each flag. Confirm a flag only if you reproduce it and it meets the definition exactly; otherwise reject it. Write `adjudication/<Pnnn>-<A|B>.json` as `{"flags": [{"code": "HF…", "decision": "confirmed | rejected", "evidence": "what you did and saw"}]}`.

Confirmed flags attach to the build, not the packet: a page confirmed as hard-failed in any packet is hard-failed in all of them.

## Step 9. Freeze, unblind, tally

1. When every job has a valid grade and every flag has an adjudication, freeze: `find grades adjudication -type f | sort | xargs sha256sum > results/frozen.sha256`, and commit.
2. Only now may the analyst read `key/mapping.json`.
3. Run `python3 -I scripts/tally.py --round <run-dir>` (tie band 6, as pre-registered). It refuses to run if a grade is missing or invalid, or a flag has no adjudication. It writes `results/results.json` and `results/summary.md`.

## Step 10. Statistics

**Unit of analysis.** The brief. With k = 3, a brief's three pairs share a brief, so they are not independent; the brief verdict (more pair wins than losses = win, and so on) is the unit for the primary test. The pair-level test is reported as secondary and labelled "not independent".

**Sign test.** Let W be brief wins and L brief losses; ties T are excluded, n = W + L. Under the null hypothesis that a brief is equally likely to go either way, W ~ Binomial(n, 0.5). The exact two-sided p-value is

  p = min(1, 2 · Σ_{i = max(W, L)}^{n} C(n, i) / 2ⁿ)

which is `sign_test()` in `tally.py`. Report W, T, L, n and p to four decimals. Also report p with ties counted as losses (conservative) and the brief-level result at tie bands 0 and 12; both are printed by `tally.py`.

Wins needed for p ≤ 0.05 (computed from the formula above, not observed):

| Untied briefs n | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Wins needed | not reachable | 6 | 7 | 8 | 8 | 9 | 10 | 10 |

**Power, before you start.** If the skill truly won a fraction q of briefs and none tied, the chance that 12 briefs reach p ≤ 0.05 is 0.083 for q = 0.6, 0.391 for q = 0.75 and 0.889 for q = 0.9 (binomial computation, not data). Twelve briefs can detect only a large effect. A non-significant result is therefore expected even if the skill helps moderately, and it is not evidence that the skill does nothing. At the pair level with 36 untied pairs, the same calculation gives 0.162 and 0.833 for q = 0.6 and 0.75, but those pairs are not independent.

**Descriptive only, no p-values:** per-persona preferences and mean totals; mean per-criterion differences; the /80 subtotal on the round 1–2 criteria; hard-fail counts per arm by code; retest agreement (how many retest pairs got the same verdict); same-arm results (how often two builds of the same arm produce a non-tie verdict, the baseline any with/without difference should be read against); results split into new-page briefs (10) and existing-code briefs (2); build time and tokens per arm (median and range); the number of skill-arm builds that read `SKILL.md`; blinding breaches.

## Step 11. Budget

| Tier | k | Builds | Packets (primary + retest + same-arm) | Grader runs | Plus |
| --- | --- | --- | --- | --- | --- |
| Minimum | 1 | 24 | 12 + 4 + 0 = 16 | 48 | adjudications as flagged, 2 pre-flight builds |
| Recommended | 3 | 72 | 36 + 6 + 12 = 54 | 162 | adjudications as flagged, 2 pre-flight builds |

Use k = 1 or k = 3, not 2: with two pairs a brief splits 1–1 too easily. If budget allows more than k = 3, add briefs before adding replicates; the primary test counts briefs.

## Step 12. Report

Add a "round 3" section to `evals/run.md` with:

1. Skill commit, model IDs, dates, k, seed and a link to `PREREG.md`.
2. The per-pair table from `results/summary.md`, with the brief name and kind (new page, redesign, Next.js).
3. One sentence for the primary result in this form: "The skill page won W, tied T and lost L of 12 briefs (exact two-sided sign test on n untied briefs, p = …)". Then the conservative p and the band 0 and 12 sensitivity lines.
4. Retest agreement and same-arm results, before any interpretation of the main result.
5. Per-persona and per-criterion tables, labelled descriptive.
6. Hard fails by arm and code, with one line per confirmed hard fail.
7. Cost: build time and tokens per arm.
8. `DEVIATIONS.md` in full, including blinding breaches, rebuilds and invalid grades.
9. Limits (below), stated even if the result is positive.

Update the README's "Does the skill work?" table only with the round-3 line as reported here, and do not add it to the round 1–2 totals.

## What not to claim

- **Not a conversion result.** Graders are agents judging pages; nothing here measures what real visitors do.
- **Not human expert judgement.** The personas are role prompts given to agents, and builders and graders come from one model family unless the optional cross-family check was run. Say "agent graders playing a designer, a buyer and an engineer", never "designers preferred".
- **Not general.** The result covers these 12 fictional briefs, this model and client version, this skill commit, and static or Next.js landing pages. It does not cover other clients, other models, production sites, or apps beyond a homepage.
- **No significance from the descriptives.** Do not say the skill "significantly improves" craft, copy or any single criterion or persona; only the pre-registered brief-level test has a p-value.
- **No "no effect" from a non-significant result.** With 12 briefs the test has low power for moderate effects; say "not detected at this sample size".
- **No pooling across rounds.** Do not add round-3 wins to rounds 1–2, and do not quote a combined win rate.
- **No hidden ties or rebuilds.** Report ties, both-failed pairs, rebuilds and invalid grades; never drop them to improve a ratio. A percentage is always given with its n.
- **No moving the goalposts.** The tie band, verdict rule, hard-fail list and primary endpoint stay as pre-registered. Other analyses can be reported as exploratory, labelled as such.
- **No holdout claim after use.** Once these briefs have informed any change to the skill, they are no longer unseen; the next round needs new briefs.
- **The skill's own checker is not neutral evidence.** `check-page.mjs` encodes the skill's rules; do not use its results to argue the skill pages are better. The neutral facts are the probe output, which both sides get.
