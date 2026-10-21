# Bake-off: v1.0 against three outside design skills, judged by a person

Written before the judging. After the human check in round 8 (`../2026-10-20-ab-round8/HUMAN-CHECK.md`), the skill was rewritten (v1.0, on the `v10` branch): the first screen is a poster, and the working demo moves to section two. This run asks whether a person now prefers its pages, both to pages built with the best-looking outside skills and to the no-skill page he picked in round 8.

## Setup

- **Briefs:** staplepress and swaptide, from round 8, unchanged except for the line naming the skill.
- **Arms per brief:**
  - this skill, v1.0;
  - Taste Skill v2.1.4 (`design-taste-frontend`, Leonxlnx/taste-skill, MIT);
  - Taste classics (`high-end-visual-design`, Leonxlnx/taste-skill-classics);
  - Anthropic's `frontend-design`;
  - the round 8 no-skill page, reused.
- **Builders:** every new page was built by `claude-opus-5-5`, like the round 8 pages. Every builder got the same prompt, with no network and no web fonts or pictures, apart from the skill path and the environment variables each skill's scripts need.
- **Judging:** the maintainer ranks the five pages per brief, best to worst. He sees still images of the 1440 and 390 first screens and a 1440 scroll recording of each page, numbered at random per brief, with no names. The key is kept outside the repository until he has ranked both briefs. No AI graders.
- **Known limits:**
  - Taste v2 looks for real photographs, which builders could not fetch without network, so its pages use drawings.
  - Builders used fonts installed on the build machine, and some pages render in fallback faces that visitors would not get.
  - One judge and two briefs: this is a direction check, not a measurement.

## Results (judged 2026-10-21)

The rankings are read from his notes, best first. The key was revealed only after both briefs were judged.

| Brief | 1st | 2nd | 3rd | 4th | 5th |
| --- | --- | --- | --- | --- | --- |
| staplepress | Taste classics | Taste v2 | **this skill, v1.0** | frontend-design | no skill |
| swaptide | Taste classics | **this skill, v1.0** | Taste v2 | frontend-design / no skill (both disliked) | |

- **Taste classics won both briefs.** He liked the floating pill nav, the editorial serif with an italic phrase, pages that build up one block at a time as they load, an example card he could read at a glance, and the clearest message of what to do ("send us the PDF, we'll send you the proof").
- **This skill's v1.0 placed third and second, above the no-skill page both times.** In round 8 he picked the no-skill page over v0.9 in all four pairs; the same no-skill pages now ranked last on staplepress and were called "the definition of AI slop" on swaptide. His complaints about v1.0:
  - too much text in the sections after the hero;
  - a demo with too many inputs and boxes;
  - a misaligned reset button;
  - drawings whose proportions made them hard to read at a glance;
  - on staplepress, a page that didn't quite look like a startup.
- **Taste v2** was the most striking (an excellent scroll on staplepress) but read as e-commerce on one brief and as cluttered, with an awkward colour field, on the other. Both of its pages invented commercial details the briefs did not give.
- **frontend-design** was called basic or boring on staplepress, and on swaptide he hated its title face, buttons and density.

What he asked for across both briefs: each section understandable in a glance, in a few words, with details available for those who want them; creativity, but well executed; type with character; motion that builds the page in pieces.

## Follow-up: v1.1 against the winner (judged 2026-10-21)

v1.1 added the visual system adapted from Taste classics, sections read at a glance, a demo capped at three controls, and aligned buttons. It was built once per brief (`claude-opus-5-5`, same prompt). He judged three pages per brief blind (A–C): v1.1, the Taste classics page that won, and v1.0.

| Brief | v1.1 | Taste classics | v1.0 |
| --- | --- | --- | --- |
| staplepress | **preferred** ("yeah, I like A") | decent, as before | decent, as before |
| swaptide | "interesting… looks cool" | "looks good" | "looks good" |

v1.1 beat the winner on staplepress and tied it on swaptide, which meets the bar set beforehand ("tie or beat on both"). The preferences were milder than in the bake-off, so this shows the skill has caught up with the best-looking skill tested, not that it has passed it. Both v1.1 pages used the floating pill nav because they were built before the frame deal (v1.2), which now varies the nav, hero, look, type, buttons and motion per product.
