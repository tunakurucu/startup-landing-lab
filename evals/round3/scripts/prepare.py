#!/usr/bin/env python3
"""Prepare a round from one recorded seed: brief variants, opaque build folders,
blind packets with balanced A/B assignment, and a shuffled grading queue.

Usage:
  python3 -I prepare.py --briefs ../briefs --round <round-dir> --seed <int> --k <builds per arm per brief> [--retest N]

Writes (refuses to overwrite):
  <round>/briefs/<slug>/{with,without,grader}.md
  <round>/key/builds.json      run id -> opaque work folder, arm, brief variant   (operator only)
  <round>/key/mapping.json     packet -> kind, brief, pair, A run, B run          (sealed until grading is frozen)
  <round>/build_order.json     the order to start builds in
  <round>/grade_queue.json     (packet, persona) jobs in the order to run them
Same seed + same briefs + same k + same Python minor version => same files.
"""
import argparse
import json
import pathlib
import platform
import random
import sys

SKILL_PREFIX = "Use startup-landing-design"
WITHOUT_LINE = "Decide on a direction, build and test the page."
FIXTURES = {"handover": "redesign", "brewday": "next-app"}
PERSONAS = ["designer", "buyer", "engineer"]


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--briefs", required=True)
    ap.add_argument("--round", required=True)
    ap.add_argument("--seed", type=int, required=True)
    ap.add_argument("--k", type=int, default=1, help="builds per arm per brief")
    ap.add_argument("--retest", type=int, default=None, help="primary pairs to re-grade with A/B swapped")
    a = ap.parse_args()

    rng = random.Random(a.seed)
    rnd = pathlib.Path(a.round)
    for sub in ("briefs", "key", "build_order.json", "grade_queue.json"):
        if (rnd / sub).exists():
            sys.exit(f"refusing to overwrite {rnd / sub}")

    slugs = sorted(p.stem for p in pathlib.Path(a.briefs).glob("*.md"))
    if not slugs:
        sys.exit("no briefs found")

    # 1. Brief variants. The only difference between arms is the last line.
    for s in slugs:
        lines = (pathlib.Path(a.briefs) / f"{s}.md").read_text(encoding="utf-8").rstrip("\n").split("\n")
        if not lines[-1].startswith(SKILL_PREFIX):
            sys.exit(f"{s}: last line must start with '{SKILL_PREFIX}'")
        d = rnd / "briefs" / s
        d.mkdir(parents=True)
        (d / "with.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
        (d / "without.md").write_text("\n".join(lines[:-1] + [WITHOUT_LINE]) + "\n", encoding="utf-8")
        (d / "grader.md").write_text("\n".join(lines[:-1]) + "\n", encoding="utf-8")

    # 2. Builds, in a seeded order that interleaves arms and briefs.
    runs = [f"{s}/{arm}-r{r}" for s in slugs for arm in ("with", "without") for r in range(1, a.k + 1)]
    order = runs[:]
    rng.shuffle(order)
    builds = {}
    for i, run in enumerate(order):
        slug, rest = run.split("/")
        arm = rest.split("-r")[0]
        builds[run] = {
            "workdir": f"W{i + 1:03d}",
            "brief": slug,
            "arm": arm,
            "brief_file": f"briefs/{slug}/{arm}.md",
            "fixture": FIXTURES.get(slug),
            "skill_installed": arm == "with",
        }

    # 3. Primary packets: with-r vs without-r, A/B balanced across all primary packets.
    primary = [{"kind": "primary", "brief": s, "pair": f"{s}-r{r}", "with": f"{s}/with-r{r}", "without": f"{s}/without-r{r}"}
               for s in slugs for r in range(1, a.k + 1)]
    sides = ["with"] * (len(primary) // 2) + ["without"] * (len(primary) - len(primary) // 2)
    rng.shuffle(sides)
    packets = []
    for p, side in zip(primary, sides):
        a_run, b_run = (p["with"], p["without"]) if side == "with" else (p["without"], p["with"])
        packets.append({"kind": "primary", "brief": p["brief"], "pair": p["pair"], "A": a_run, "B": b_run})

    # 4. Retest: the same primary pair graded again by fresh graders with A and B swapped.
    n_retest = a.retest if a.retest is not None else (4 if a.k == 1 else 6)
    for p in rng.sample(packets[: len(primary)], min(n_retest, len(primary))):
        packets.append({"kind": "retest", "brief": p["brief"], "pair": p["pair"], "A": p["B"], "B": p["A"]})

    # 5. Same-arm pairs (needs k >= 2): run-to-run spread inside one arm, half the briefs per arm.
    if a.k >= 2:
        arms = ["with"] * (len(slugs) // 2) + ["without"] * (len(slugs) - len(slugs) // 2)
        rng.shuffle(arms)
        for s, arm in zip(slugs, arms):
            x, y = f"{s}/{arm}-r1", f"{s}/{arm}-r2"
            if rng.random() < 0.5:
                x, y = y, x
            packets.append({"kind": "same-arm", "brief": s, "pair": f"{s}-{arm}-r1-vs-r2", "A": x, "B": y})

    rng.shuffle(packets)
    for i, p in enumerate(packets):
        p["packet"] = f"P{i + 1:03d}"
    queue = [{"packet": p["packet"], "brief": p["brief"], "persona": q} for p in packets for q in PERSONAS]
    rng.shuffle(queue)

    (rnd / "key").mkdir(parents=True)
    meta = {"seed": a.seed, "k": a.k, "retest": n_retest, "python": platform.python_version(), "briefs": slugs}
    (rnd / "key" / "builds.json").write_text(json.dumps({"meta": meta, "builds": builds}, indent=1) + "\n")
    (rnd / "key" / "mapping.json").write_text(json.dumps({"meta": meta, "packets": packets}, indent=1) + "\n")
    (rnd / "build_order.json").write_text(json.dumps([{"workdir": builds[r]["workdir"], "run": r} for r in order], indent=1) + "\n")
    (rnd / "grade_queue.json").write_text(json.dumps(queue, indent=1) + "\n")
    kinds = {k: sum(p["kind"] == k for p in packets) for k in ("primary", "retest", "same-arm")}
    print(f"{len(slugs)} briefs, {len(runs)} builds, packets {kinds}, {len(queue)} grader jobs; "
          f"with=A in {sides.count('with')} of {len(primary)} primary packets")


if __name__ == "__main__":
    main()
