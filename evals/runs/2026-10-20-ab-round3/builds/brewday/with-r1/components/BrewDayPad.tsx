"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { BATCH, LOGGED_ON_LOAD, STEPS, deviation, format, formatTarget, outOfRange, type Step } from "@/components/sample-batch";

// The hero artifact: the brewer's side of Grainline on a brewhouse tablet, running on sample data.
// Every control changes something visible at once. Nothing is sent or saved.

type Logged = { value: number; time: string; flagged: boolean };

type State = {
  logged: Record<string, Logged>;
  selected: string;
  draft: string;
  status: string;
};

function initial(): State {
  const logged: Record<string, Logged> = {};
  STEPS.slice(0, LOGGED_ON_LOAD).forEach((s) => {
    logged[s.id] = { value: s.typical, time: s.time, flagged: outOfRange(s, s.typical) };
  });
  return { logged, selected: STEPS[LOGGED_ON_LOAD].id, draft: "", status: "" };
}

function nextUnlogged(logged: Record<string, Logged>): Step | undefined {
  return STEPS.find((s) => !logged[s.id]);
}

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "⌫"] as const;

export function BrewDayHero({ copy }: { copy: React.ReactNode }) {
  const [state, setState] = useState<State>(initial);
  const step = STEPS.find((s) => s.id === state.selected) ?? STEPS[0];
  const entry = state.logged[step.id];
  const stepIndex = STEPS.indexOf(step);
  const loggedCount = Object.keys(state.logged).length;
  const flaggedCount = Object.values(state.logged).filter((l) => l.flagged).length;
  const complete = loggedCount === STEPS.length;

  function select(id: string) {
    setState((s) => ({ ...s, selected: id, draft: "" }));
  }

  function press(key: string) {
    setState((s) => {
      if (key === "⌫") return { ...s, draft: s.draft.slice(0, -1) };
      if (key === "." && (s.draft.includes(".") || s.draft === "")) return s;
      if (s.draft.length >= 6) return s;
      return { ...s, draft: s.draft + key };
    });
  }

  function log(valueText: string) {
    const value = Number(valueText);
    if (valueText === "" || Number.isNaN(value)) {
      setState((s) => ({ ...s, status: "Enter a reading before logging it." }));
      return;
    }
    const flagged = outOfRange(step, value);
    setState((s) => {
      const logged = { ...s.logged, [step.id]: { value, time: step.time, flagged } };
      const next = nextUnlogged(logged);
      const shown = format(value, step.unit);
      const status = flagged
        ? `${step.name} logged: ${shown} ${step.unit} at ${step.time}. ${deviation(step, value)} target, flagged on the record.`
        : `${step.name} logged: ${shown} ${step.unit} at ${step.time}.`;
      const done = Object.keys(logged).length === STEPS.length;
      return {
        logged,
        selected: next ? next.id : step.id,
        draft: "",
        status: done ? `${status} Batch ${BATCH.number} record complete.` : status,
      };
    });
  }

  function reset() {
    setState({ ...initial(), status: "Sample reset to 08:40, with three readings logged." });
  }

  const entryPane = (
    <div className="flex flex-col gap-4 border-t border-foam/15 pt-5 md:border-t-0 md:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="font-mono text-sm text-foam/70">
          Step {stepIndex + 1} of {STEPS.length}
        </p>
        <p className="font-mono text-sm text-foam/70">Target {formatTarget(step)}</p>
      </div>
      <p className="text-h3 text-foam">{step.name}</p>

      {entry ? (
        <>
          <p className="tabular font-mono text-reading text-barley">
            {format(entry.value, step.unit)} <span className="text-[0.5em] text-foam/70">{step.unit}</span>
          </p>
          <p className="text-base text-foam/85">
            Logged at {entry.time}.{" "}
            {entry.flagged ? (
              <span className="text-barley">
                {deviation(step, entry.value)} target. Flagged on the record; the brew day carries on.
              </span>
            ) : (
              "Inside target."
            )}
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button
              type="button"
              variant="inverse"
              onClick={() => setState((s) => ({ ...s, draft: format(entry.value, step.unit), logged: without(s.logged, step.id) }))}
            >
              Change this reading
            </Button>
            {complete && (
              <Button type="button" variant="inverse-ghost" onClick={reset}>
                Start the sample over
              </Button>
            )}
          </div>
        </>
      ) : (
        <>
          <p className="tabular min-h-[1em] font-mono text-reading text-foam">
            {state.draft || <span className="text-foam/40">{format(0, step.unit)}</span>}{" "}
            <span className="text-[0.5em] text-foam/70">{step.unit}</span>
          </p>
          <div className="grid grid-cols-3 gap-2" role="group" aria-label="Number keys">
            {KEYS.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => press(k)}
                aria-label={k === "⌫" ? "Delete last digit" : k === "." ? "Decimal point" : k}
                className="key tabular min-h-14 rounded-key bg-foam/10 font-mono text-2xl font-semibold text-foam transition-colors duration-swap ease-out hover:bg-foam/20 active:bg-foam/25"
              >
                {k}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button type="button" variant="inverse" size="lg" onClick={() => log(state.draft)} className="flex-1 md:flex-none">
              Log reading
            </Button>
            <Button type="button" variant="inverse-ghost" onClick={() => log(format(step.typical, step.unit))}>
              Use the sample reading
            </Button>
          </div>
        </>
      )}
    </div>
  );

  const pad = (
    <div className="on-ink rounded-tablet bg-ink p-4 text-foam sm:p-6" data-artifact="brew-day-pad">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-foam/15 pb-4">
        <p className="font-mono text-sm">
          <span className="font-semibold text-barley">Batch {BATCH.number}</span>
          <span className="text-foam/70">
            {" "}
            · {BATCH.beer} · {BATCH.size}
          </span>
        </p>
        <p className="font-mono text-xs text-foam/70">Sample batch. Runs in your browser; nothing is saved.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-8">
        <ol className="flex flex-col gap-1" aria-label="Brew-day steps">
          {STEPS.map((s, i) => {
            const l = state.logged[s.id];
            const isSelected = s.id === state.selected;
            const isNext = !l && nextUnlogged(state.logged)?.id === s.id;
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => select(s.id)}
                  aria-pressed={isSelected}
                  className={`flex w-full items-center gap-3 rounded-key px-3 py-2.5 text-left transition-colors duration-swap ease-out ${
                    isSelected ? "bg-foam/15" : "hover:bg-foam/[0.07]"
                  }`}
                >
                  <span
                    className={`tabular w-7 shrink-0 font-mono text-sm ${l ? (l.flagged ? "text-barley" : "text-foam") : "text-foam/70"}`}
                    aria-hidden="true"
                  >
                    {l ? (l.flagged ? "⚑" : "✓") : String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold leading-tight text-foam">{s.name}</span>
                    <span className="tabular block font-mono text-sm text-foam/70">
                      {l ? `${format(l.value, s.unit)} ${s.unit} · ${l.time}${l.flagged ? " · flagged" : ""}` : isNext ? "up next" : "later"}
                    </span>
                  </span>
                </button>
                {isSelected && <div className="px-3 pb-4 pt-3 md:hidden">{entryPane}</div>}
              </li>
            );
          })}
        </ol>
        <div className="hidden md:block">{entryPane}</div>
      </div>

      <p role="status" aria-live="polite" className="mt-4 min-h-[1.5rem] border-t border-foam/15 pt-3 text-sm text-foam/85">
        {state.status}
      </p>
    </div>
  );

  // The owner's side of the same batch, filling in as readings are logged. Drawn as paper, not glass.
  const record = (
    <div className="border border-ink/15 bg-white">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-ink/15 px-4 py-3">
        <p className="font-mono text-sm font-semibold">Batch {BATCH.number} record</p>
        <p className="tabular font-mono text-xs text-steel">
          {loggedCount} of {STEPS.length} readings{flaggedCount ? ` · ${flaggedCount} flagged` : ""}
          {complete ? " · complete" : ""}
        </p>
      </div>
      <ol className="tabular flex flex-col px-2 py-1.5 font-mono text-sm" aria-label="Batch record rows">
        {STEPS.filter((s) => state.logged[s.id]).map((s) => {
          const l = state.logged[s.id];
          return (
            <li
              key={`${s.id}-${l.time}-${l.value}`}
              className="row-new grid grid-cols-[3.25rem_1fr_auto] items-baseline gap-x-3 rounded-md px-2 py-1.5"
            >
              <span className="text-steel">{l.time}</span>
              <span className="min-w-0 font-sans font-medium">{s.name}</span>
              <span className={l.flagged ? "font-semibold text-wort" : ""}>
                {format(l.value, s.unit)} {s.unit}
                {l.flagged ? " ⚑" : ""}
              </span>
            </li>
          );
        })}
        {!complete && (
          <li className="grid grid-cols-[3.25rem_1fr_auto] items-baseline gap-x-3 px-2 py-1.5 text-steel">
            <span>{nextUnlogged(state.logged)?.time}</span>
            <span className="font-sans">{nextUnlogged(state.logged)?.name}</span>
            <span>waiting</span>
          </li>
        )}
      </ol>
    </div>
  );

  return (
    <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="flex min-w-0 flex-col gap-6 lg:col-span-5 lg:pt-6">
        {copy}
        <div className="hidden lg:block">{record}</div>
      </div>
      <div id="brew-day" className="flex min-w-0 flex-col gap-4 lg:col-span-7">
        {pad}
        <div className="lg:hidden">{record}</div>
      </div>
    </div>
  );
}

function without<T>(obj: Record<string, T>, key: string): Record<string, T> {
  const copy = { ...obj };
  delete copy[key];
  return copy;
}
