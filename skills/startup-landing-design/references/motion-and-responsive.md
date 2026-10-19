# Motion and responsive behavior

These timings are **recommended defaults**, not measurements of referenced sites. Animate state and orientation, never the availability of essential copy. Prefer transform and opacity; avoid layout-changing width/height animation. A spring-like curve can suit a playful brand but should not make a technical or sober tool feel bouncy.

| Trigger | State change and purpose | Static alternative | Recommended duration/easing |
| --- | --- | --- | --- |
| Press a scenario tab | Replace trace and explanation to compare outcomes | Immediate selected state and content | 150–220ms opacity ease-out |
| Advance a workflow | Current step and connector update to explain order | Numbered list and selected step | 180–280ms transform/opacity ease-out |
| Submit safe local input | Result/status appears to confirm action | Immediate text update | 150–250ms opacity ease-out |
| First appearance of nonessential scene | Guide attention to the artifact once | Fully visible scene at first paint | 250–400ms opacity/translate ease-out |
| Playful user deal | Cards arrive as a response to an explicit choice | Final cards and live status immediately | 220–360ms each, 30–80ms stagger; overshoot only in playful families |

Micro-interactions usually belong at 150–250ms; entrances 250–400ms. Use one strong ease-out as the default token, for example `cubic-bezier(.2,.7,.2,1)`; use it for exits too. Never ease-in an entrance, never start from `scale(0)` (start near .9 or from a small translate), and keep staggers at 30–80ms so a sequence never blocks input. Overshoot curves belong to playful families only. Name transitioned properties; `transition: all` fails the checker. Put hover-only motion behind `@media (hover:hover) and (pointer:fine)` so touch screens never get stuck hover states. Do not fade text that must be read: a contrast checker can catch it half-transparent, so move it instead. Avoid continuous decoration and auto-advancing essential content. If a carousel is unavoidable, provide pause and preserve focus. Do not animate text a visitor must read first. Under `prefers-reduced-motion: reduce`, remove translation, parallax and smooth scrolling while keeping every state change and all content visible.

At 390px, replace wide artifacts with readable vertical steps and retain important labels. Check 320px and 200% zoom as stress cases; fixed `100vh` heroes clip under mobile browser chrome, so use `svh`/`dvh`. Header, nav and boxed buttons are at least 44px tall; inline text links at least 24px; body text at least 16px on phones; never disable zoom in the viewport meta. Use use safe-area padding where controls reach screen edges, and reserve media dimensions. At 768px, test the awkward middle rather than retaining a cramped three-column desktop grid. A short table may scroll in a labelled region; the page itself should not overflow.
