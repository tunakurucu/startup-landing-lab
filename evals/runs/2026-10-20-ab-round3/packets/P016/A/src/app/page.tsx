import { BatchRecord } from "@/components/BatchRecord";
import { Button } from "@/components/Button";
import { EARLY_ACCESS_EMAIL, EARLY_ACCESS_MAILTO } from "@/lib/earlyAccess";

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6";

export default function Home() {
  return (
    <>
      <header className={`${container} flex items-center justify-between py-5`}>
        <a href="/" className="flex items-center gap-2.5 rounded-btn">
          <img src="/grainline-mark.svg" alt="" width={28} height={28} className="h-7 w-7" />
          <span className="text-lg font-semibold tracking-tight">Grainline</span>
        </a>
        <Button href={EARLY_ACCESS_MAILTO} variant="secondary" className="hidden sm:inline-flex">
          Request early access
        </Button>
      </header>

      <main>
        {/* Hero */}
        <section className={`${container} pb-16 pt-8 sm:pt-14 lg:pb-24 lg:pt-20`}>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-5 lg:pt-4">
              <h1 className="max-w-[12ch] text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl">
                The batch record builds itself.
              </h1>
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/80 sm:text-xl">
                Grainline is a brew-day log for small craft breweries. Readings go in on the tablet by the kettle, as
                you take them. By the time the wort is in the fermenter, the batch record is written.
              </p>
              <div className="mt-8">
                <Button href={EARLY_ACCESS_MAILTO} size="lg" className="w-full sm:w-auto">
                  Request early access
                </Button>
                <p className="mt-3 text-sm text-steel">
                  Opens your email app with a short note to fill in. No account, no card.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <BatchRecord />
            </div>
          </div>
        </section>

        {/* Two readers */}
        <section className="border-t border-ink/10 bg-white/50">
          <div className={`${container} py-16 sm:py-24`}>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">One record, two readers.</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                Today a brew day gets written down twice: in a damp notebook on the floor, then again in a spreadsheet in
                the office. Grainline keeps one record, made where the readings happen and read wherever they are
                needed.
              </p>
            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
              <div className="border-t-2 border-ink pt-6">
                <h3 className="text-xl font-semibold">On the floor</h3>
                <ul className="mt-5 space-y-5 text-base leading-relaxed text-ink/80 sm:text-lg">
                  <li>
                    <strong className="font-semibold text-ink">Targets you can hit with a thumb.</strong> One reading per
                    screen, big numbers, nothing that needs a dry fingertip or a stylus.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">Stamped when you take it.</strong> Mash temperature at 06:35
                    is logged at 06:35, not pieced back together at four o&rsquo;clock.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">Last time&rsquo;s numbers beside this time&rsquo;s.</strong>{" "}
                    Where the previous batch of this recipe sat at pre-boil is one glance away, not a cupboard away.
                  </li>
                </ul>
              </div>
              <div className="border-t-2 border-ink pt-6">
                <h3 className="text-xl font-semibold">In the office</h3>
                <ul className="mt-5 space-y-5 text-base leading-relaxed text-ink/80 sm:text-lg">
                  <li>
                    <strong className="font-semibold text-ink">Every batch in the same shape.</strong> Gravities, volumes,
                    temperatures and times laid out the same way for batch 12 and batch 412.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">What the brewhouse actually did.</strong> Efficiency,
                    boil-off and volume into the fermenter come from the readings, not from the recipe sheet.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">Written whether or not anyone wrote it up.</strong> The
                    record exists the moment the readings do, so nothing is waiting on a quiet afternoon.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 max-w-2xl border-l-4 border-hop pl-5 text-base leading-relaxed text-ink/80 sm:text-lg">
              <p>
                <strong className="font-semibold text-ink">What Grainline is not: excise software.</strong> It records
                the brew day. Duty returns, and the paperwork around them, stay with whatever you use for them today.
              </p>
            </div>
          </div>
        </section>

        {/* Early access */}
        <section id="early-access" className="border-t border-ink/10">
          <div className={`${container} py-16 sm:py-24`}>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Early access</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                We are putting Grainline on the brewhouse tablets of a handful of small breweries and brewing alongside
                them. You get the log from your next brew day. We get told, plainly, what is wrong with it.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                There is no pricing yet and there are no brewery logos on this page, because there are no customers
                yet. That is what early access means.
              </p>
              <div className="mt-8">
                <Button href={EARLY_ACCESS_MAILTO} size="lg" className="w-full sm:w-auto">
                  Request early access
                </Button>
                <p className="mt-3 text-sm text-steel">
                  Opens an email to {EARLY_ACCESS_EMAIL} with the questions we will ask: brewery, brew length, brews per
                  week, who to talk to.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10">
        <div className={`${container} flex flex-col gap-4 py-8 text-sm text-steel sm:flex-row sm:items-center sm:justify-between`}>
          <div className="flex items-center gap-2.5">
            <img src="/grainline-mark.svg" alt="" width={20} height={20} className="h-5 w-5" />
            <span className="font-semibold text-ink">Grainline</span>
            <span>A brew-day log for small craft breweries.</span>
          </div>
          <a href={`mailto:${EARLY_ACCESS_EMAIL}`} className="rounded-btn underline-offset-4 hover:underline">
            {EARLY_ACCESS_EMAIL}
          </a>
        </div>
      </footer>
    </>
  );
}
