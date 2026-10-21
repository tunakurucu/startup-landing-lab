# Swaptide landing page: build record

Skill: high-end-visual-design (classic), called by name in the brief.

## Direction (Variance Engine roll)
- Vibe: Soft Structuralism (health). Warm off-white #f3f4f1, ink #131a22, soft contrast,
  diffuse ambient shadows, fixed grain overlay at 3.5%.
- Accent system taken from the 12-hour shift: dawn amber = days (07–19), night navy = nights (19–07),
  tide teal = "checked / handled by Swaptide".
- Layouts: Editorial Split hero (headline left, interactive phone right); Z-axis cascade for the
  three things it replaces (whiteboard, group text, 06:45 handoff); asymmetrical bento for managers;
  a dark night band built on a 24-hour dial.
- Not HR software: the page speaks in 07:00/19:00, handoff, report, call lights, night breaks.

## Brief constraints and how they are handled
- CTA: every "Book a pilot call" button links to https://swaptide.example/pilot (nav, overlay, hero, pilot, footer).
- No results claimed. Pilot copy says one med-surg unit, three months, no measured results to share.
  No stats, logos or testimonials. All names/units in mockups are labelled as illustrative.
- No payroll: stated in bento "What stays the same", pilot "What it won't do", footer.
- Does not override union agreements or the manager: the manager decides every swap; rule checks are
  described as information attached to the request ("A flag is information for the manager, not a decision").
- Buyers (nurse managers, DONs) get the "For managers" section and pilot; nurses get the phone-first framing.

## Skill checklist
- Double-bezel shells on all cards, phone, rule panel, pilot block.
- Button-in-button pill CTAs with nested arrow circle; hover translates/scales the knob, active scales 0.98.
- Floating island nav (not glued to top), hamburger morphs to X, full-screen blurred overlay with staggered link reveal.
- All transitions use cubic-bezier(.32,.72,0,1) or (.16,1,.3,1); IntersectionObserver reveals; no scroll listeners.
- Animations only transform/opacity (reveal blur from the skill was dropped to respect its own GPU guardrail).
- backdrop-filter only on fixed nav and overlay. Section padding 6–10rem.
- prefers-reduced-motion: reveals and demo show final state immediately.

## Fonts (deviation to note)
No network, so no web fonts. Stacks list Geist / Plus Jakarta Sans first, then Poppins, then the OS face
(SF Pro / Segoe UI). In this sandbox, -apple-system, "SF Pro Text" and "Segoe UI" are fontconfig-aliased to
Inter (a banned font), so Poppins is placed ahead of them; the verification renders use Poppins + DejaVu Sans Mono.
Inter, Roboto, Arial, Helvetica and Open Sans are never named.

## Verification (Playwright/Chromium, file:// URL)
- Viewports 1440x900, 900x1100, 390x844 (mobile emulation).
- 0 console errors, 0 non-file network requests, no horizontal overflow at any width.
- All reveal elements resolve after scrolling (the one exception on mobile is the step track, which is display:none there).
- Mobile menu opens/closes; hero demo plays post -> pickup -> checks -> manager buttons; Approve/Decline show a result toast.
- Screenshots in shots/: desktop-hero, desktop-full, desktop-approved, d-replaces, tablet-hero, tablet-full,
  t-replaces, mobile-hero, mobile-full, mobile-menu, mobile-sheet, m-replaces. Scripts: shots/shoot.mjs, shots/crop.mjs.
