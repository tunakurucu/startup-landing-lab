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

## Results

Added after judging: the ranking, his reasons, the key and the builds.
