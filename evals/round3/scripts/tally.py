#!/usr/bin/env python3
"""Turn frozen grades and hard-fail adjudications into pair verdicts, brief verdicts and an exact sign test.

Usage:
  python3 -I tally.py --validate <grade.json>            check one grader file against the schema
  python3 -I tally.py --round <round-dir> [--band 6]     write <round>/results/results.json and summary.md

Reads <round>/key/mapping.json, <round>/grades/<packet>/<persona>.json and
<round>/adjudication/<packet>-<A|B>.json. Rules are defined in grading.md ("Aggregation").
"""
import argparse
import json
import pathlib
import statistics
import sys
from math import comb

CRITERIA = ["clarity", "fit", "distinctiveness", "proof", "craft", "mobile", "honesty", "interaction", "copy", "first_screen"]
ROUND12 = CRITERIA[:8]
PERSONAS = ["designer", "buyer", "engineer"]
HF_CODES = {"HF1", "HF2", "HF3", "HF4", "HF5"}


def sign_test(wins: int, losses: int) -> float:
    """Exact two-sided sign test; ties are excluded before calling."""
    n = wins + losses
    if n == 0:
        return 1.0
    k = max(wins, losses)
    return min(1.0, 2 * sum(comb(n, i) for i in range(k, n + 1)) / 2 ** n)


def validate(g: dict, where: str = "") -> list:
    errs = []
    for side in ("A", "B"):
        s = g.get(side)
        if not isinstance(s, dict):
            errs.append(f"{where}{side} missing")
            continue
        for c in CRITERIA:
            v = s.get("scores", {}).get(c)
            if not (isinstance(v, int) and 1 <= v <= 10):
                errs.append(f"{where}{side}.scores.{c} must be an integer 1-10, got {v!r}")
            if not str(s.get("evidence", {}).get(c, "")).strip():
                errs.append(f"{where}{side}.evidence.{c} is empty")
        for f in s.get("hard_fail_flags", []):
            if f.get("code") not in HF_CODES or not str(f.get("evidence", "")).strip():
                errs.append(f"{where}{side}.hard_fail_flags needs a code in {sorted(HF_CODES)} and evidence")
    if g.get("persona") not in PERSONAS:
        errs.append(f"{where}persona must be one of {PERSONAS}")
    if g.get("preference") not in ("A", "B"):
        errs.append(f"{where}preference must be 'A' or 'B'")
    if g.get("confidence") not in ("low", "medium", "high"):
        errs.append(f"{where}confidence must be low, medium or high")
    if not errs:
        ta = sum(g["A"]["scores"].values())
        tb = sum(g["B"]["scores"].values())
        pref_lower = (g["preference"] == "A" and ta < tb) or (g["preference"] == "B" and tb < ta)
        if pref_lower and not str(g.get("score_preference_note", "")).strip():
            errs.append(f"{where}preferred page has the lower total; score_preference_note is required")
    return errs


def verdict(hf_x: bool, hf_y: bool, votes_x: int, delta: int, band: int):
    """Verdict for page x against page y (x is the skill page in primary packets)."""
    if hf_x and hf_y:
        return "tie", "both hard-failed"
    if hf_y:
        return "win", "other page hard-failed"
    if hf_x:
        return "loss", "this page hard-failed"
    if votes_x >= 2 and delta > band:
        return "win", "majority preference and summed score agree"
    if votes_x <= 1 and delta < -band:
        return "loss", "majority preference and summed score agree"
    return "tie", "preference and score disagree, or |delta| within band"


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--validate")
    ap.add_argument("--round")
    ap.add_argument("--band", type=int, default=6)
    a = ap.parse_args()

    if a.validate:
        errs = validate(json.loads(pathlib.Path(a.validate).read_text()))
        print("\n".join(errs) if errs else "OK")
        sys.exit(1 if errs else 0)
    if not a.round:
        ap.error("--round or --validate is required")

    rnd = pathlib.Path(a.round)
    packets = json.loads((rnd / "key" / "mapping.json").read_text())["packets"]

    # Load and validate every grade; collect flags.
    grades, flags, problems = {}, {}, []
    for p in packets:
        for persona in PERSONAS:
            f = rnd / "grades" / p["packet"] / f"{persona}.json"
            if not f.exists():
                problems.append(f"missing grade {f}")
                continue
            g = json.loads(f.read_text())
            problems += validate(g, f"{f}: ")
            grades[(p["packet"], persona)] = g
            for side in ("A", "B"):
                if g.get(side, {}).get("hard_fail_flags"):
                    flags.setdefault((p["packet"], side), []).append(persona)
    # Every flag needs an adjudication; confirmed flags attach to the run, not the packet.
    run_hf = {}
    for p in packets:
        for side in ("A", "B"):
            adj = rnd / "adjudication" / f"{p['packet']}-{side}.json"
            if (p["packet"], side) in flags and not adj.exists():
                problems.append(f"flag raised by {flags[(p['packet'], side)]} but no adjudication file {adj}")
            if adj.exists():
                for fl in json.loads(adj.read_text()).get("flags", []):
                    if fl.get("decision") == "confirmed" and fl.get("code") in HF_CODES:
                        run_hf.setdefault(p[side], set()).add(fl["code"])
    if problems:
        sys.exit("cannot tally:\n" + "\n".join(problems))

    def packet_numbers(p, x_run, band):
        """Scores and verdict for run x_run against the other run in packet p."""
        x = "A" if p["A"] == x_run else "B"
        y = "B" if x == "A" else "A"
        per = {}
        for persona in PERSONAS:
            g = grades[(p["packet"], persona)]
            per[persona] = {
                "x_total": sum(g[x]["scores"][c] for c in CRITERIA),
                "y_total": sum(g[y]["scores"][c] for c in CRITERIA),
                "x_total8": sum(g[x]["scores"][c] for c in ROUND12),
                "y_total8": sum(g[y]["scores"][c] for c in ROUND12),
                "prefers_x": g["preference"] == x,
                "confidence": g["confidence"],
                "diff": {c: g[x]["scores"][c] - g[y]["scores"][c] for c in CRITERIA},
            }
        s_x = sum(v["x_total"] for v in per.values())
        s_y = sum(v["y_total"] for v in per.values())
        votes = sum(v["prefers_x"] for v in per.values())
        hf_x, hf_y = bool(run_hf.get(p[x])), bool(run_hf.get(p[y]))
        v, why = verdict(hf_x, hf_y, votes, s_x - s_y, band)
        return {"packet": p["packet"], "pair": p["pair"], "brief": p["brief"], "x": p[x], "y": p[y], "x_side": x,
                "S_x": s_x, "S_y": s_y, "delta": s_x - s_y, "votes_x": votes,
                "hf_x": sorted(run_hf.get(p[x], [])), "hf_y": sorted(run_hf.get(p[y], [])),
                "verdict": v, "why": why, "personas": per}

    def with_run(p):
        return p["A"] if "/with-" in p["A"] else p["B"]

    def summarise(band):
        prim = [packet_numbers(p, with_run(p), band) for p in packets if p["kind"] == "primary"]
        briefs = {}
        for r in prim:
            briefs.setdefault(r["brief"], []).append(r["verdict"])
        brief_v = {}
        for b, vs in sorted(briefs.items()):
            w, l = vs.count("win"), vs.count("loss")
            brief_v[b] = "win" if w > l else "loss" if l > w else "tie"
        bw, bt, bl = (list(brief_v.values()).count(k) for k in ("win", "tie", "loss"))
        pw, pt, pl = (sum(r["verdict"] == k for r in prim) for k in ("win", "tie", "loss"))
        return prim, brief_v, {
            "brief_level": {"wins": bw, "ties": bt, "losses": bl, "n_untied": bw + bl, "p_two_sided": sign_test(bw, bl),
                            "p_ties_as_losses": sign_test(bw, bl + bt)},
            "pair_level": {"wins": pw, "ties": pt, "losses": pl, "n_untied": pw + pl, "p_two_sided": sign_test(pw, pl),
                           "note": "pairs within a brief are not independent; secondary only"},
        }

    prim, brief_v, tests = summarise(a.band)
    sensitivity = {f"band_{b}": summarise(b)[2]["brief_level"] for b in (0, 12) if b != a.band}

    # Retest agreement: same pair graded twice with A/B swapped.
    prim_by_pair = {r["pair"]: r for r in prim}
    retest = []
    for p in packets:
        if p["kind"] == "retest":
            r = packet_numbers(p, with_run(p), a.band)
            o = prim_by_pair[p["pair"]]
            retest.append({"pair": p["pair"], "first": o["verdict"], "second": r["verdict"],
                           "agree": o["verdict"] == r["verdict"], "delta_first": o["delta"], "delta_second": r["delta"]})
    # Same-arm spread: r1 against r2 inside one arm.
    same_arm = []
    for p in packets:
        if p["kind"] == "same-arm":
            r1 = p["A"] if p["A"].endswith("-r1") else p["B"]
            r = packet_numbers(p, r1, a.band)
            same_arm.append({"pair": p["pair"], "verdict_r1_vs_r2": r["verdict"], "delta": r["delta"], "votes_r1": r["votes_x"]})

    # Descriptives over primary packets (no p-values: these are many comparisons on few pairs).
    persona_desc = {}
    for persona in PERSONAS:
        rows = [r["personas"][persona] for r in prim]
        persona_desc[persona] = {
            "prefers_with": sum(x["prefers_x"] for x in rows), "prefers_without": sum(not x["prefers_x"] for x in rows),
            "mean_total_with": round(statistics.mean(x["x_total"] for x in rows), 2),
            "mean_total_without": round(statistics.mean(x["y_total"] for x in rows), 2),
            "mean_total8_with": round(statistics.mean(x["x_total8"] for x in rows), 2),
            "mean_total8_without": round(statistics.mean(x["y_total8"] for x in rows), 2),
        }
    criterion_desc = {c: round(statistics.mean(r["personas"][q]["diff"][c] for r in prim for q in PERSONAS), 2) for c in CRITERIA}
    hf_counts = {arm: {} for arm in ("with", "without")}
    for run, codes in run_hf.items():
        arm = "with" if "/with-" in run else "without"
        for c in codes:
            hf_counts[arm][c] = hf_counts[arm].get(c, 0) + 1

    out = rnd / "results"
    out.mkdir(exist_ok=True)
    results = {"band": a.band, "tests": tests, "sensitivity": sensitivity, "brief_verdicts": brief_v,
               "pairs": prim, "retest": retest, "same_arm": same_arm, "persona": persona_desc,
               "mean_criterion_diff_with_minus_without": criterion_desc, "hard_fail_runs_by_arm": hf_counts}
    (out / "results.json").write_text(json.dumps(results, indent=1) + "\n")

    bl, pl = tests["brief_level"], tests["pair_level"]
    lines = [
        f"# Round 3 results (tie band ±{a.band} of 300)", "",
        "| Brief | Pair | Verdict (skill page) | Why | Votes for skill page | S with | S without | Δ | Hard fails with / without |",
        "| --- | --- | --- | --- | --- | --- | --- | --- | --- |",
    ]
    for r in sorted(prim, key=lambda r: r["pair"]):
        lines.append(f"| {r['brief']} | {r['pair']} | {r['verdict']} | {r['why']} | {r['votes_x']}/3 | {r['S_x']} | {r['S_y']} | "
                     f"{r['delta']:+d} | {','.join(r['hf_x']) or '-'} / {','.join(r['hf_y']) or '-'} |")
    lines += ["",
              f"**Primary (brief level):** {bl['wins']} wins, {bl['ties']} ties, {bl['losses']} losses; "
              f"exact two-sided sign test on {bl['n_untied']} untied briefs, p = {bl['p_two_sided']:.4f}. "
              f"Ties counted as losses: p = {bl['p_ties_as_losses']:.4f}.",
              f"**Secondary (pair level, not independent):** {pl['wins']} W / {pl['ties']} T / {pl['losses']} L, p = {pl['p_two_sided']:.4f}.",
              "", "Sensitivity (brief level): " + "; ".join(
                  f"{k}: {v['wins']}W/{v['ties']}T/{v['losses']}L p={v['p_two_sided']:.4f}" for k, v in sensitivity.items()),
              "", f"Retest agreement: {sum(r['agree'] for r in retest)} of {len(retest)} pairs got the same verdict when re-graded with A/B swapped.",
              f"Same-arm pairs: {sum(r['verdict_r1_vs_r2'] != 'tie' for r in same_arm)} of {len(same_arm)} produced a non-tie verdict between two builds of the same arm.",
              "", "| Persona | Prefers skill page | Prefers other | Mean /100 with | Mean /100 without | Mean /80 (round 1-2 criteria) with | without |",
              "| --- | --- | --- | --- | --- | --- | --- |"]
    for q, d in persona_desc.items():
        lines.append(f"| {q} | {d['prefers_with']} | {d['prefers_without']} | {d['mean_total_with']} | {d['mean_total_without']} | "
                     f"{d['mean_total8_with']} | {d['mean_total8_without']} |")
    lines += ["", "Mean per-criterion difference (with − without, all personas, primary pairs): " +
              ", ".join(f"{c} {v:+}" for c, v in criterion_desc.items()),
              "", f"Runs with a confirmed hard fail: with {hf_counts['with'] or 'none'}, without {hf_counts['without'] or 'none'}."]
    (out / "summary.md").write_text("\n".join(lines) + "\n")
    print("\n".join(lines))


if __name__ == "__main__":
    main()
