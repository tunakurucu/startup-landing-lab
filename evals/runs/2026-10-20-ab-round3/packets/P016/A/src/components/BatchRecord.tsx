// The hero visual: a brew day being logged on the brewhouse tablet, and the
// batch record Grainline builds from those readings. Numbers are a worked
// example, not a customer's batch.

type Reading = {
  time: string;
  label: string;
  value: string;
};

// One reading per entry, the way it goes in on the tablet.
const readings: Reading[] = [
  { time: "05:30", label: "Grist weighed", value: "400 kg" },
  { time: "05:42", label: "Strike water", value: "19.0 hL" },
  { time: "05:44", label: "Strike temp", value: "75.5 °C" },
  { time: "06:05", label: "Mash in", value: "66.5 °C" },
  { time: "06:35", label: "Mash temp", value: "66.2 °C" },
  { time: "07:25", label: "First runnings", value: "1.078" },
  { time: "08:35", label: "Pre-boil gravity", value: "1.049" },
  { time: "08:36", label: "Pre-boil volume", value: "18.6 hL" },
  { time: "09:40", label: "Hops, 60 min", value: "1.6 kg" },
  { time: "10:40", label: "Knockout gravity", value: "1.056" },
  { time: "10:42", label: "Into FV3", value: "16.3 hL" },
  { time: "10:55", label: "Yeast pitched", value: "20.0 °C" },
];

const record = [
  { label: "Original gravity", value: "1.056" },
  { label: "Into fermenter", value: "16.3 hL" },
  { label: "Brewhouse efficiency", value: "74 %" },
  { label: "Boil-off", value: "2.3 hL, 12 %" },
  { label: "Mash temperature", value: "66.4 °C avg" },
  { label: "Brew day", value: "5 h 25 min" },
];

export function BatchRecord() {
  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-2xl bg-ink text-foam shadow-[0_24px_60px_-24px_rgba(31,26,20,0.55)] ring-1 ring-ink/80">
        {/* Batch header */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-foam/15 px-5 py-4 sm:px-6">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-barley">Batch 0412</span>
            <span className="text-base font-semibold">West Coast Pale</span>
          </div>
          <span className="text-sm text-foam/70">16 hL, Tue 14 Oct</span>
        </div>

        <div className="grid md:grid-cols-[1fr_auto]">
          {/* Readings as they went in */}
          <div className="px-5 py-4 sm:px-6">
            <p className="mb-3 text-sm text-foam/70">Readings as they went in</p>
            <ol className="divide-y divide-foam/10">
              {readings.map((r, i) => (
                <li
                  key={r.time}
                  className="log-row grid grid-cols-[3rem_1fr_auto] items-baseline gap-3 py-2 text-[15px] leading-snug sm:text-base"
                  style={{ animationDelay: `${150 + i * 110}ms` }}
                >
                  <span className="font-mono text-foam/60 tabular-nums">{r.time}</span>
                  <span className="min-w-0">{r.label}</span>
                  <span className="whitespace-nowrap font-mono tabular-nums text-barley">{r.value}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* What Grainline built from them */}
          <div
            className="log-row border-t border-foam/15 bg-foam/[0.06] px-5 py-4 sm:px-6 md:w-64 md:border-l md:border-t-0"
            style={{ animationDelay: `${150 + readings.length * 110 + 200}ms` }}
          >
            <p className="mb-3 text-sm text-foam/70">Batch record, built by Grainline</p>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
              {record.map((row) => (
                <div key={row.label}>
                  <dt className="text-sm text-foam/70">{row.label}</dt>
                  <dd className="font-mono text-lg tabular-nums text-barley">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-steel">A worked example, not a customer&rsquo;s batch.</figcaption>
    </figure>
  );
}
