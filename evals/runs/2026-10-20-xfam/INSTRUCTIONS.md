# Blind grading: 16 packets

Each folder in `packets/` (X01 to X16) holds two homepages, **A** and **B**, built by two different teams from the same client brief, plus the brief, the grading rubric, screenshots and an `OPEN.md` saying how to open each page.

For every packet, and for each of the three personas in its `grading.md` (designer, buyer, engineer), as three separate passes:

1. Read the packet's `grading.md` in full and follow its steps in order. Read `brief.md`.
2. Open and operate both pages yourself as `OPEN.md` says, at 1440×900, 768×1024 and 390×844. Use every control in the main demo, follow every primary action, try the phone menu.
3. Score A on its own, then B on its own, then compare, exactly as the rubric says. Flag hard fails only with steps to reproduce.
4. Write the result as JSON in the format the rubric's "Output" section gives, to `grades/<packet>/<persona>.json` (for example `grades/X07/buyer.json`).

Rules:
- Grade each persona pass as if you had not done the others. Do not compare packets with each other.
- Do not look anything up online and do not try to find out who built which page.
- If a page needs a local server (OPEN.md says so), run it on any free port and stop it afterwards.
- If you run out of time, finish whole packets rather than starting all of them: complete all three personas for X01, then X02, and so on.

When you are done, zip the `grades/` folder and return it.
