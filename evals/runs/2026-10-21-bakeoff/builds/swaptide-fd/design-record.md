# Swaptide landing page: design record

## Subject, audience, job
- Subject: shift swaps on a hospital nursing unit (12-hour shifts, 0700–1900 days, 1900–0700 nights).
- Audience: buyer is the nurse manager / director of nursing; daily user is the bedside nurse, often on a break at 0300.
- Primary job: get a manager to book a pilot call (https://swaptide.example/pilot).
- Constraints from brief: no results to show (pilot = one med-surg unit, three months, no numbers); no payroll; never imply it overrides union agreements or the manager's decision. Feel like a 12-hour shift, not HR software.

## Plan (pass 1)
- Color: Whiteboard #F5F8FA (page), Ink #1D2633 (text), Night #182848 (night shift), Ceil #B9D2E6 (scrub ceil blue, day shift), Call-light amber #E2A23B (pending), Approve green #2D7A57.
- Type: hospital wayfinding vernacular. Display = DIN-family stack (DIN Alternate / Bahnschrift / D-DIN / Roboto Condensed), sentence case, tabular figures for 24-hour times. Body = system UI stack. No web fonts (must open offline).
- Layout: left aligned, 12-col. Hero = headline + live manager approval card on a phone. Centerpiece = a full-width 24-hour band (1900 → 1900, night half dark, day half pale) with one swap's three moments placed at their real clock times. Then rules checked, nurse vs manager, pilot call.

```
[Swaptide]                                   [Book a pilot call]
Post a swap on your break.            +-----------+
Your manager answers in one tap.      | swap card |
sub / CTA                              | checks ok |
                                       | Approve   |
                                       +-----------+
|1900====night====0700-----day------1900|   <- 24h band, markers 1 2 3
 1 2340 posted   2 0350 picked+checked   3 0745 approved
 Without it: manager finds out Sat 1900.
Checks before manager | rule rows (one flagged example)
Nurses | Manager
Pilot call (night background)
```

- Principles: time is the structure (24-hour times are the only "labels"); the band is the one bold element; everything else quiet; one orchestrated motion (the band's clock sweep) plus feedback motion on the demo buttons.

## Review against defaults (pass 2)
- Not cream/serif/terracotta; not near-black + acid; not broadsheet hairlines; no identical card grid.
- Revised: first idea was a dark-navy page overall. That drifts toward "dark + one accent". Changed: page is whiteboard white, navy is reserved for the night half of the band and the pilot section, so dark always means night.
- Revised: initially had small uppercase labels ("SKILL MIX", "HOURS") on check rows. Replaced with sentence-case rule names.
- Numbered markers on the band are kept because the content is a real sequence (post → pick up → approve).
- No mono font for data; times use the display face's tabular figures. No arrows on CTA text, no middle-dot meta strings.

## Critique log
(see bottom, filled after screenshots)

1. First render: the amber "elapsed" wash over the night half turned the navy a muddy grey and weakened the day/night split. Replaced it with a thin amber elapsed bar along the bottom plus a single "now" line; the night stays night.
2. Hero h1 had its second sentence in a lighter grey weight. That is the single-phrase accent tell and it pushed the headline to six lines. Set as one treatment, max 15ch, balanced wrap: four lines.
3. "Fri 1900" tick wrapped; set nowrap. On phones, hid 2300/1100/1500 ticks but kept 0700 (handoff), since that is the tick that explains marker 3.
4. Sweep animated transform: scaleX, which also squashed the now line. Switched to animating width.
5. Mirror check: removed the 24-hour clock graphic in the pilot section. It repeated the band's idea and diluted it; the band is the one bold element.
6. Verified: no console errors, zero network requests from file://, no horizontal scroll at 390/360 px, keyboard focus visible on demo buttons, focus moves to "Show the request again" after a decision, reduced motion shows the band in its final state.

Notes for next time: DIN/Bahnschrift stack is a good offline answer for "hospital signage" but renders as a condensed fallback here; times as type (1900–0700, tabular) did more for the 12-hour-shift feel than any color choice.
