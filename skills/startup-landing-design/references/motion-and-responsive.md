# Motion and responsive behavior

These timings are **recommended defaults**, not measurements of referenced sites. Animate state and orientation, never the availability of essential copy. Prefer transform and opacity; avoid layout-changing width/height animation. A spring-like curve can suit a playful brand but should not make a technical or sober tool feel bouncy.

| Trigger | State change and purpose | Static alternative | Recommended duration/easing |
| --- | --- | --- | --- |
| Press a scenario tab | Replace trace and explanation to compare outcomes | Immediate selected state and content | 150–220ms opacity ease-out |
| Advance a workflow | Current step and connector update to explain order | Numbered list and selected step | 180–280ms transform/opacity ease-out |
| Submit safe local input | Result/status appears to confirm action | Immediate text update | 150–250ms opacity ease-out |
| First appearance of nonessential scene | Guide attention to the artifact once | Fully visible scene at first paint | 250–400ms opacity/translate ease-out |
| Playful user deal | Cards arrive as a response to an explicit choice | Final cards and live status immediately | 220–360ms stagger, restrained spring-like cubic-bezier |

Micro-interactions usually belong at 150–250ms; entrances 250–400ms. Avoid continuous decoration and auto-advancing essential content. If a carousel is unavoidable, provide pause and preserve focus. Do not animate text a visitor must read first. Under `prefers-reduced-motion: reduce`, remove translation, parallax and smooth scrolling while keeping every state change and all content visible.

At 390px, replace wide artifacts with readable vertical steps and retain important labels. Check 320px and 200% zoom as stress cases; fixed 100vh heroes can clip mobile browser chrome. Keep controls near 44px where practical, use safe-area padding where controls reach screen edges, and reserve media dimensions. At 768px, test the awkward middle rather than retaining a cramped three-column desktop grid. A short table may scroll in a labelled region; the page itself should not overflow.
