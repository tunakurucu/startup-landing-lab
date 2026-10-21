# Lanes: what the page must do for this kind of business

Step 1 says who the product is for. The lane turns that into what the page must contain and in what order. A lane decides **content and structure**, never the look: any look can serve any lane, and the frame is dealt separately (`node scripts/deal.mjs "<product>" --lane <lane>`). Pick the lane from how the product is bought, not from the industry: a healthcare product sold to a department budget through a pilot is `b2b-sales`, while one a nurse downloads alone is `consumer`.

| Lane | How it's bought | Main action | Hero picture shows | First doubt to answer |
| --- | --- | --- | --- | --- |
| `developer` | An engineer tries it alone, then brings it to the team | Install, get an API key, read the docs | Code and its output: a terminal, an editor, a request and response | "Will it work with my stack, and how fast can I try it?" |
| `b2b-sales` | A budget holder decides after a demo or pilot; users and payers differ | Book a demo or pilot call | The buyer's view: the dashboard or decision screen they get | "Is it safe, who decides, and what does the pilot involve?" |
| `b2b-self-serve` | A team lead signs up and pays by card | Start a trial, create a workspace | The product screen at the moment of value | "How fast do I get value, and what does it cost?" |
| `consumer` | One person decides in minutes, often on a phone | Download, buy, upload, start | The result in the person's life: the thing made, the moment saved | "What do I get, what does it cost, can I trust it?" |
| `marketplace` | Two sides join separately; each needs the other | Join as one side (two clear paths) | Both sides meeting: a listing and a booking, a request and a match | "Is anyone on the other side, and is it safe?" |

## Developer

- **First screen:** a headline about the outcome for the developer, the install command or a two-line code sample, and Docs beside the main action.
- **Must have, in order:**
  1. a quickstart of three steps or fewer, with copyable commands;
  2. how it works (one diagram or one request and response);
  3. language and framework support;
  4. pricing, with a free tier stated plainly;
  5. links to the docs, changelog and repository when they exist.
- **Proof:** the code itself, honest limits, open-source status. No logo walls the brief doesn't supply.
- **Pitfalls:** marketing words where a code sample should be ("seamless", "powerful"), and no install command (round 1's only loss).

## B2B sales-led

- **First screen:** the outcome for the buyer's team, with one line that names who it's for. The action is "Book a pilot call" or "Book a demo", and says what happens next.
- **Must have, in order:**
  1. the demo of the user's moment;
  2. the payer's section: what they control, decide and see;
  3. how a pilot or rollout runs, with unknowns stated as questions the first call answers;
  4. the diligence answers (where data is held, who has access, what it connects to, who decides);
  5. what it does not do.
- **Proof:** pilots and their honest status, the brief's real customers, security facts the brief gives. Never invented certifications.
- **Pitfalls:** writing only for the user while the buyer pays; burying "not live yet" or "pilot only".

## B2B self-serve

- **First screen:** the outcome, the product screen, and "Start free" or "Start a trial" with the card terms beside it.
- **Must have, in order:**
  1. the demo;
  2. how it works in three steps;
  3. switching from the current tool or spreadsheet;
  4. pricing with plans, visible without contacting anyone;
  5. questions.
- **Proof:** time to first value, real usage the brief supplies, integrations that exist.
- **Pitfalls:** "Book a demo" as the only action for a product people could just try; prices hidden.

## Consumer

- **First screen:** the result in the person's life, the price or "free" when the brief gives one, and the action. On a phone, the button sits where the thumb is.
- **Must have, in order:**
  1. what you get (one picture);
  2. how it works in three steps;
  3. price and what's included;
  4. what it can't do yet;
  5. questions;
  6. the action again.
- **Proof:** the product's own output, honest counts the brief gives ("about 120 artists"), clear refund or limits. No invented reviews.
- **Pitfalls:** B2B structure on a consumer product (role columns, diligence lists); more than one main action.

## Marketplace

- **First screen:** one sentence for each side, two clear paths, and a picture of the two sides meeting.
- **Must have, in order:**
  1. how it works for side A;
  2. how it works for side B;
  3. trust and safety;
  4. what it costs each side;
  5. where it's live.
- **Proof:** live inventory or coverage only when the brief supplies it. Say plainly when one side is still being built.
- **Pitfalls:** writing for one side only; fake liquidity ("thousands of listings").

## Modifiers (any lane)

- **Pre-launch:** say the status in the sentence or button ("Join the pilot"), never collect emails without a destination, no traction claims.
- **Regulated** (health, finance, legal, children): the diligence answers move up, and the demo's verdicts read as advice when the brief limits what the product decides.
- **Enterprise buyer:** add the procurement path (security review, SSO, data residency) only as far as the brief states it; list the rest under *To confirm*.
