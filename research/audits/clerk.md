# Clerk

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://clerk.com

A tabbed showcase of Clerk's own drop-in components—sign-up form, sign-in card, profile panel—sits directly under a heavy h1, so the shipped UI is the pitch.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A black announcement bar ('Clerk raises $50m Series C') sits above a floating rounded nav. Left: a heavy two-line h1 and one-line subhead. Right: a 'Build with agents' tab holding a copyable prompt. Below, a full-width panel with four product tabs (User Authentication, Multi-tenancy, Enterprise Authentication, Agent Authentication) shows a crisp 'Create your account' card between faded sign-in and profile cards, with sub-tabs underneath. No hero button; Sign in and Sign up sit in the nav.

### Typography

Measured h1 56px/1.1, weight 700, tracking -0.035em, family geistNumbers (32px, weight 600, -0.015em at 390)—a tight, heavy grotesque. Measured body 11px ui-sans-serif at 1440 and 16px geistNumbers at 390. soehneMono and Inter are also measured; the agent prompt is set in a monospace. Section heads are bold and short ('Auth that keeps evolving', 'Subscription billing, without the headache') under small coloured eyebrow labels.

### Visual System

Light grey and white sections alternate with near-black bands whose top and bottom edges are cut into chamfered trapezoids. The dark band holds a bento grid of feature cards with soft rendered grey illustrations (code-entry slots, fingerprint, phone, profile card). Accent colour is limited to purple and cyan eyebrows and small dots. Product components appear as white cards with soft shadows and blue-violet glows; framework and integration logos sit as outline icons in a hairline grid.

### Page Sequence

Announcement bar → hero (h1, agent prompt, tabbed component demo) → customer logos → dark 'Auth that keeps evolving' bento of 11 features → 'Everything your B2B SaaS needs' (roles, auto-join, invitations, organization components) → 'Subscription billing, without the headache' with a pricing-table mock → dark split 'Build with SDKs for modern frameworks' / 'Integrate with the tools you love' → 'Trusted around the world' with a Supabase CEO quote and a wall of developer posts → footer.

### Copy

h1: 'Everything you need for authentication'. Subhead: 'More than APIs. The complete user layer for modern apps.' There is no hero button; the first offered action is copying 'Add Clerk auth to my app: clerk.com/SKILL.md', then per-section links such as 'Explore user authentication ▸'. The category is named directly; the audience is developers building B2B SaaS, with pricing language in proof ('Free for your first 50,000 monthly retained users').

### Interaction

Clicked the 'Multi-tenancy' tab in the hero demo: it took a hover highlight but the panel stayed on User Authentication through ~2 s. The hero demo did not change across ~8 s at the top; the measurement capture shows a pointer graphic and a typed 'c' in its email field. Nav Sign in/Sign up appeared a few seconds after load. On scroll, a soft glow behind the billing mock shifted hue; with reduced motion that glow still shifted and nothing else was seen moving.

### Accessibility

Faded side cards in the hero demo and grey card text are low-contrast. At 390 a floating round chat button overlaps the demo card, and the tab label 'Enterprise Authenticati…' and the agent prompt are truncated. No horizontal overflow at either width (measured). In the desktop DOM check all 81 visible controls had accessible names; 46 were under 24px in one dimension, mostly nav and footer text links.

### Mobile

The floating nav keeps logo, Sign in, Sign up and a menu icon. The hero stacks h1 → subhead → truncated agent prompt → tabs as a 2×2 grid → only the central 'Create your account' card, with sub-tabs cut off at the right. Logos become 2×2. The bento becomes one column; the billing mock shows one plan with the next peeking; framework and integration grids stack. Page grows from 7,187px to 13,378px (measured).

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 56 | 32 |
| Headline weight | 700 | 600 |
| Headline tracking em | -0.035 | -0.015 |
| Body px | 11 | 16 |
| Characters per line | 60 | 44 |
| Sections | 6 | 7 |
| Reduced-motion rule | observed | observed |

## Interpretation

- If the product is UI, show the real components in context before any feature list.
- Offer an agent-ready install prompt beside the headline when buyers increasingly start integrations through coding agents.
- Gather a broad feature set into one dark bento band with a single illustration style, so breadth reads as one system.
- Mark chapter changes on a long page with contrasting bands and a distinctive edge shape.

Suits developer products that ship visible UI—authentication, payments, chat or form widgets—where component quality is a buying reason. Wrong for back-end-only infrastructure with no UI to show, where a component showcase would have to be invented.

Risk: No hero button: the strongest call is a copy-to-clipboard prompt plus nav links, which can stall non-developer evaluators. The hero demo depends on tab state and timing; when it does not respond, the first screen is a static form. Faded side cards and small grey text lower contrast.

## Limitations

- The live mobile visit and a verification reload returned HTTP 502 and were stopped; mobile notes come from the measurement captures.
- Could not confirm whether the hero tabs switch for real users; the one click produced only a hover highlight.
- The hero demo's pointer and typing were seen only in the measurement capture, not live.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://clerk.com
- https://saaslandingpage.com/clerk/
- https://a16z.com/portfolio/
