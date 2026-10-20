import { Button } from "@/components/Button";
import { BatchRecordSheet } from "@/components/BatchRecordSheet";
import { BrewDayHero } from "@/components/BrewDayPad";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import { SiteHeader } from "@/components/SiteHeader";
import { NAV, PRIMARY_LABEL } from "@/components/site";
import { BATCH, STEPS, deviation, format, formatTarget } from "@/components/sample-batch";

const flaggedStep = STEPS.find((s) => s.note) ?? STEPS[3];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* First screen: the promise beside the brewer's side of the product. */}
        <section className="mx-auto max-w-page px-4 pb-section pt-6 sm:px-6 md:pt-10" aria-labelledby="promise">
          <BrewDayHero
            copy={
              <>
                <h1 id="promise" className="text-display">
                  The brew sheet that fills itself in as you brew.
                </h1>
                <p className="max-w-measure text-lead text-ink/85">
                  Grainline is a brew-day log for small craft breweries. Tap each reading on the brewhouse tablet as you
                  take it, and the batch record builds itself by knockout.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Button href="#early-access" variant="primary" size="lg">
                    {PRIMARY_LABEL}
                  </Button>
                  <p className="text-sm text-steel">Email and brewery name. No card, no sales call.</p>
                </div>
                <p className="hidden text-sm text-steel lg:block">
                  Try the sample brew day: tap a reading into the tablet on the right, and watch the record below fill
                  in.
                </p>
              </>
            }
          />
        </section>

        {/* The owner's side: the finished record of the same batch. */}
        <section id="record" className="mx-auto max-w-page px-4 pb-section sm:px-6" aria-labelledby="record-heading">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col gap-5 lg:col-span-4">
              <h2 id="record-heading" className="text-h2">
                The batch record is finished at knockout and opens on the owner&rsquo;s laptop.
              </h2>
              <p className="max-w-measure text-body text-ink/85">
                Today the sheet is written wet at the kettle, typed up dry in the evening and read a week late. Grainline keeps
                one record per batch. Each reading the brewer logs lands on it with the time, the target it was checked
                against and any note, so there is nothing to type up and nothing to decode.
              </p>
              <p className="max-w-measure text-body text-ink/85">
                Grainline keeps the brew record. It does not file excise returns; it keeps the record readable for whoever
                does.
              </p>
            </div>
            <div className="lg:col-span-8">
              <BatchRecordSheet />
              <p className="mt-3 text-sm text-steel">
                Sample batch record. On a live install the step names, units and target ranges are the brewery&rsquo;s own.
              </p>
            </div>
          </div>
        </section>

        {/* The failure case: what happens when a reading is off. */}
        <section id="flags" className="mx-auto max-w-page px-4 pb-section sm:px-6" aria-labelledby="flags-heading">
          <div className="mx-auto grid max-w-[64rem] gap-10 md:grid-cols-2 md:gap-12">
            <figure className="border border-ink/15 bg-white p-5 sm:p-7">
              <p className="font-mono text-sm text-steel">
                {flaggedStep.time} · {flaggedStep.name}
              </p>
              <p className="tabular mt-2 font-mono text-reading text-wort">
                {format(flaggedStep.typical, flaggedStep.unit)} <span className="text-[0.5em] text-steel">{flaggedStep.unit}</span> ⚑
              </p>
              <p className="tabular mt-2 font-mono text-sm text-steel">
                Target {formatTarget(flaggedStep)} · {deviation(flaggedStep, flaggedStep.typical)}
              </p>
              <figcaption className="mt-4 border-t border-ink/10 pt-4 text-body">
                <span className="font-semibold">Brewer&rsquo;s note, added at {flaggedStep.noteTime}:</span> &ldquo;{flaggedStep.note}&rdquo;
                <span className="mt-2 block text-sm text-steel">
                  Row from the sample record for batch {BATCH.number}.
                </span>
              </figcaption>
            </figure>
            <div className="flex flex-col gap-5">
              <h2 id="flags-heading" className="text-h2">
                An off reading gets flagged, not blocked.
              </h2>
              <p className="max-w-measure text-body text-ink/85">
                Targets come from the recipe, set once per beer. A reading outside its range is marked on the record and the
                brew day carries on. The brewer adds a note when there is a quiet minute, and the owner sees the flag and
                the note together, in the row where it happened.
              </p>
              <p className="max-w-measure text-body text-ink/85">
                Nothing waits on the app. If a reading is wrong, the brewer changes it from the same step on the tablet.
              </p>
            </div>
          </div>
        </section>

        {/* Conversion: who early access is for, what it costs today, and the request itself. */}
        <section id="early-access" className="border-t border-ink/10 bg-foam">
          <div className="mx-auto grid max-w-page gap-10 px-4 py-section sm:px-6 lg:grid-cols-12 lg:gap-12">
            <div className="flex min-w-0 flex-col gap-6 lg:col-span-6">
              <h2 id="early-access-heading" className="text-h2">
                Early access is for breweries still on paper sheets.
              </h2>
              <dl className="flex max-w-measure flex-col gap-4 text-body text-ink/85">
                <div>
                  <dt className="font-semibold text-ink">Good fit</dt>
                  <dd>A small brewhouse where readings still go on a clipboard or into a spreadsheet after the brew day.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Not for</dt>
                  <dd>
                    Breweries with a production system already logging the brewhouse, or anyone who needs excise reporting.
                    Grainline does not do that.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">What you get</dt>
                  <dd>
                    Grainline on your brewhouse tablet with your own step list and targets, and a direct line to the people
                    building it.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Cost</dt>
                  <dd>Pricing is not set yet. Early-access breweries hear first.</dd>
                </div>
              </dl>
            </div>
            <div className="min-w-0 lg:col-span-6">
              <EarlyAccessForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-page flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/grainline-mark.svg" alt="" width={32} height={32} loading="lazy" className="h-8 w-8" />
            <div>
              <p className="font-bold">Grainline</p>
              <p className="max-w-measure text-sm text-steel">A brew-day log for small craft breweries.</p>
            </div>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="py-2 font-medium text-ink/85 underline-offset-4 hover:underline">
                {n.label}
              </a>
            ))}
            <a href="#flags" className="py-2 font-medium text-ink/85 underline-offset-4 hover:underline">
              Flagged readings
            </a>
          </nav>
          <p className="text-sm text-steel">&copy; 2026 Grainline</p>
        </div>
      </footer>
    </>
  );
}
