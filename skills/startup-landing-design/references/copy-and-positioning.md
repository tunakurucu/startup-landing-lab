# Copy and positioning

Read this while interpreting the product (SKILL.md step 1) and again before writing visible text. Copy comes before layout: the headline, subhead and primary action are inputs to the hero variants, not text poured in later [CH]. Keys in brackets point to Sources; the wording is ours. Thresholds given with a check ID are this project's recommended values.

## Write the first screen from positioning

The first step below fills the Product interpretation fields in `DESIGN-RECORD.md`; note the positioning line and the cold-read answer there too.

1. **Collect the inputs** (CP-04, CP-06):
   - **Best-fit customer and not-for,** by traits you could observe. [AD]
   - **Current alternative:** a competitor, a spreadsheet, an agency, or doing nothing, which Dunford estimates wins about half of deals. [AD]
   - **The one advantage:** what this product does that the alternative cannot. If nothing qualifies, stop and ask; copy cannot fix an undifferentiated product. [AD]
   - **Category frame:** the plainest noun that sets the right expectations ("a payout reconciliation app"). A new category must pay for its explanation on the first screen; if nothing fits, use "X for Y". [AD PG]
   - **Users' own words:** at least three phrases with their source (interviews, tickets, public reviews of the alternative), or a note that none exist yet. [CH HD]
   - **The biggest reason not to click:** cost, a card, setup time, data access, a sales call. [CH JS]
2. **Write the positioning line**, never shown on the page: for *customer* who *uses the alternative*, *product* is a *category* that *delivers this value*, because *the one advantage*. [AD]
3. **Draft headlines** (recommended: eight) with three moves: say plainly what it is, lead with the outcome that beats the alternative, or answer the main objection. Keep those that pass the gate. [HD JS]
4. **Write the subhead, action and line beside it** by the rules below; put proof beside its claim ([page structure](page-structure.md)).
5. **Cold read.** Show only the headline, subhead and button to someone new to the brief. Ask what it is, who it is for, what it replaces and what clicking does; revise until the answers match the positioning line. [YC JS]

### The copy gate

Test every headline and section heading:

- **Picture it.** Can a reader see a concrete thing, person or result?
- **Could be false.** Could the claim turn out untrue? A claim nobody could disprove says nothing.
- **Not a competitor's line.** Would it be false or odd, unchanged, on a named competitor's page?

A line passes with two of three (CP-05); the h1 must also be false or odd on the alternative's page (CP-04). The tests are Harry Dry's [HD]; applying them line by line comes from Corey Haines's copywriting skill [CHN]. Last, would you say it aloud to a friend? [PG]


**Machine-writing patterns** (cut on sight; Humanizer, github.com/blader/humanizer): "not just X, it's Y" lines; a dramatic one-line closer at the end of a section; a rebuttal to an objection nobody raised ("No, you don't need a data team"); a list of three where two are filler; unnamed experts ("teams tell us", "sales engineers say") that are not sourced; and, after any rewrite, a fact that was not in the original claims.

## Worked example (fictional)

*Ledgerlace* is invented. It splits each payment-processor payout into sales, fees, refunds and holds, and matches it to the bank deposit. Best fit: bookkeepers who close the month for online stores. Alternative: two CSV exports matched by hand. No customers yet; a working matcher on sample data; a founder who reconciled payouts for six years.

**Before**

> **Unlock effortless financial clarity**
>
> The AI-powered, all-in-one platform that helps modern finance teams streamline reconciliation.
>
> [Get started] · Trusted by forward-thinking teams

Nobody can picture "clarity"; "platform" names no category; any finance tool could say it; the button names no outcome; "trusted by" names no one.

**After**

> **Close the month for online stores without the payout spreadsheet**
>
> Ledgerlace is a payout reconciliation app for bookkeepers. It splits each payout into sales, fees, refunds and holds, matches it to the deposit, and shows you only the lines that don't add up.
>
> [Reconcile a sample payout] Runs in your browser on sample data. No sign-up.

The headline names the job and the alternative and passes all three tests. "Match payouts 10× faster" was rejected: nobody had measured it. The hero artifact is a labelled sample payout splitting into its parts; lower down, a founder note gives the six years and an email.

## Rules

- **Headline.** An outcome the visitor wants, or the concrete thing they get, set against the alternative; 3–12 words and more than the name (CP-01). [JS HD NNG]
- **Subhead.** One or two sentences, at most 40 words, visible without scrolling (CP-02). It says what the product is, with the category noun if the headline lacks one (CP-03), and how the promise is delivered. It makes the headline believable instead of restating it. [JS CH]
- **Primary action label.** A verb and an outcome in 2–5 words that continue the headline (HR-02). Labels that name their destination, such as "Book a demo" or "Join the waitlist", pass; "Get started" or "Learn more" alone do not. Same wording everywhere (PS-06). [JS HD NNG]
- **The line beside the action.** One true sentence that removes the biggest reason not to click: cost, card, time, setup or data (CP-09). [HD CH]
- **Section headings carry the argument.** Each makes a claim or states a result, so the headings alone explain the product (CP-10). No bare "Features" or "Why us". [HD NNG]
- **Plain language.** Short sentences, more "you" than "we"; grade 9 or below (CP-11). Concrete wording is judged more likely true, and needless long words make writers seem less capable [PSY]. In Unbounce's 2024 data, grade 5–7 pages converted at 11.1% against 5.3% for professional-level copy (correlational) [UB].
- **Ration the punch.** One or two lines carry rhetoric, usually the headline; the rest is plain. [CHN]
- **No superlative without a source** beside it (CP-08). [NNG]
- **Lead with the difference;** security and integrations come lower, as answers to objections. [AD]

## Persuading with no customers, metrics or logos

Never fake proof (HP-01, HP-02). Use what a new company has, roughly strongest first:

1. **The product working:** an interactive sample, real output, docs, a public repository, a dated changelog; samples labelled beside them (HP-03). [HD YC]
2. **The mechanism,** explained so specifically that an expert could disagree. [HD PG]
3. **The people:** founder names, the history that bears on this problem, a direct way to reach them. [SWC PG]
4. **Scope and limits** beside the claim they qualify: "Postgres 14 and later; MySQL is next." [CH PG]
5. **A point of view:** what is changing, and why the old way will fail. [AD]
6. **Verifiable facts and honest status:** pricing, the licence, "in private beta", what joining gets the visitor and when, if true. [SWC]

Write claims as design goals, not results: "built so a close needs one pass", not "cuts close time 80%". For a claim without evidence, record the closest true line and the evidence that would unlock it (a review export, a dated benchmark) [CHN]. Prefer an action that gives something now (try the sample, read the spec, talk to the founder) over a bare waitlist. [YC HD]

## Generic-copy tells

| Tell | Write instead |
| --- | --- |
| "Unlock", "unleash", "supercharge" | The input and the result: "Turns two CSV exports into a matched month-end report" |
| "The all-in-one platform for modern teams" | Category, audience, one job: "A payroll app for restaurants with tipped staff" |
| "Streamline", "effortless", "seamless" | The step that disappears: "No CSV exports; payouts arrive on their own" |
| "AI-powered" as the lead | What it does and how you check it: "Drafts each ledger entry; you approve it" |
| "Reimagined", "the future of", "say goodbye to" | The old way and the new outcome, concretely |
| "Join thousands of teams" | Named, permitted proof, or "In private beta with bookkeepers" |

Watch the shape too: set-up-then-deny contrasts, runs of three, questions that answer themselves, colon reveals, a dash in every sentence, a neat closing line. CP-07 scans the first screen for the word list. [HD CHN WPAI]

## Sources

- **AD** April Dunford, *Obviously Awesome* and *Sales Pitch*, <https://www.aprildunford.com/books>; "A guide to advanced B2B positioning", <https://www.lennysnewsletter.com/p/a-guide-to-advanced-b2b-positioning>
- **CH** Joanna Wiebe (Copyhackers), "Writing copy for landing pages", <https://stripe.com/guides/atlas/landing-page-copy>
- **CHN** Corey Haines, marketingskills `copywriting` skill (MIT; its gate credits Profound's skills-marketing-library), <https://github.com/coreyhaines31/marketingskills>
- **HD** Harry Dry, Marketing Examples landing-page guide, <https://marketingexamples.com/landing-page/guide>; the three rules, <https://www.youtube.com/watch?v=TUMjnmfsPeM>
- **JS** Julian Shapiro, "Landing Page Copywriting", <https://www.julian.com/guide/startup/landing-pages>
- **NNG** John Morkes and Jakob Nielsen, "Concise, SCANNABLE, and Objective", <https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/>
- **PG** Paul Graham, "Write Like You Talk", <https://paulgraham.com/talk.html>
- **PSY** Daniel Oppenheimer (2006), <https://doi.org/10.1002/acp.1178>; Jochim Hansen and Michaela Wänke (2010), <https://doi.org/10.1177/0146167210386238>
- **SWC** B.J. Fogg, "Stanford Guidelines for Web Credibility", <https://credibility.stanford.edu/guidelines/index.html>
- **UB** Unbounce, "Conversion Benchmark Report" (2024), <https://unbounce.com/conversion-benchmark-report/>
- **WPAI** Wikipedia, "Signs of AI writing", <https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing>
- **YC** Michael Seibel, "How to Pitch Your Company", <https://www.ycombinator.com/blog/how-to-pitch-your-company/>
