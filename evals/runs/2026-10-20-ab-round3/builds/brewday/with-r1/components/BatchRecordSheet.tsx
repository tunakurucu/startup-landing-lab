import { BATCH, STEPS, deviation, format, formatTarget, outOfRange } from "@/components/sample-batch";

// The owner's side: the finished record of the same sample batch, drawn as the sheet it replaces.
// Static on purpose: it is what the day produced, not an interface to operate.

export function BatchRecordSheet() {
  const flagged = STEPS.filter((s) => outOfRange(s, s.typical)).length;
  return (
    <figure className="border border-ink/15 bg-white text-ink">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink/15 px-5 py-4 sm:px-7">
        <span className="font-mono text-sm">
          <span className="font-semibold">Batch {BATCH.number}</span>
          <span className="text-steel">
            {" "}
            · {BATCH.beer} · {BATCH.size} · brewed {BATCH.brewed}
          </span>
        </span>
        <span className="font-mono text-xs text-steel">Sample batch record. Brewer {BATCH.brewer}.</span>
      </figcaption>

      {/* Desktop and tablet: a table. */}
      <table className="tabular hidden w-full border-collapse font-mono text-sm sm:table">
        <caption className="sr-only">
          Readings for sample batch {BATCH.number}, with time, target range and notes
        </caption>
        <thead>
          <tr className="text-left text-xs text-steel">
            <th scope="col" className="px-7 py-3 font-medium">
              Time
            </th>
            <th scope="col" className="py-3 pr-4 font-medium">
              Step
            </th>
            <th scope="col" className="py-3 pr-4 font-medium">
              Reading
            </th>
            <th scope="col" className="py-3 pr-4 font-medium">
              Target
            </th>
            <th scope="col" className="py-3 pr-7 font-medium">
              Note
            </th>
          </tr>
        </thead>
        <tbody>
          {STEPS.map((s) => {
            const off = outOfRange(s, s.typical);
            return (
              <tr key={s.id} className="border-t border-ink/10 align-top">
                <td className="px-7 py-3 text-steel">{s.time}</td>
                <td className="py-3 pr-4 font-sans font-semibold">{s.name}</td>
                <td className={`whitespace-nowrap py-3 pr-4 ${off ? "font-semibold text-wort" : ""}`}>
                  {format(s.typical, s.unit)} {s.unit}
                  {off ? " ⚑" : ""}
                </td>
                <td className="whitespace-nowrap py-3 pr-4 text-steel">{formatTarget(s)}</td>
                <td className="py-3 pr-7 font-sans">
                  {off && <span className="font-semibold text-wort">{deviation(s, s.typical)}. </span>}
                  {s.note ?? ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Phones: one block per reading, so nothing is shrunk. */}
      <ol className="tabular font-mono text-sm sm:hidden" aria-label={`Readings for sample batch ${BATCH.number}`}>
        {STEPS.map((s) => {
          const off = outOfRange(s, s.typical);
          return (
            <li key={s.id} className="border-t border-ink/10 px-5 py-3">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-sans font-semibold">{s.name}</span>
                <span className="text-steel">{s.time}</span>
              </div>
              <div className="mt-1 flex items-baseline justify-between gap-3">
                <span className={off ? "font-semibold text-wort" : ""}>
                  {format(s.typical, s.unit)} {s.unit}
                  {off ? " ⚑" : ""}
                </span>
                <span className="text-steel">target {formatTarget(s)}</span>
              </div>
              {off && (
                <p className="mt-1 font-sans text-sm">
                  <span className="font-semibold text-wort">{deviation(s, s.typical)}. </span>
                  {s.note}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-ink/15 px-5 py-4 font-mono text-xs text-steel sm:px-7">
        <span>
          {STEPS.length} readings · {flagged} flagged · complete at {STEPS[STEPS.length - 1].time}
        </span>
        <span>Signed off: not yet</span>
      </div>
    </figure>
  );
}
