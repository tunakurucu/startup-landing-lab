// One illustrative brew day, shared by the hero pad and the batch-record sheet so the same
// batch recurs through the page. Everything here is sample data: no brewery, beer or brewer
// is real. Step names, units and target ranges on a live install are the brewery's own.

export type Unit = "°C" | "SG" | "hL";

export type Step = {
  id: string;
  name: string;
  unit: Unit;
  /** Inclusive target range from the recipe. */
  target: [number, number];
  /** The reading in the sample record. Deliberately outside the range on one step. */
  typical: number;
  /** Clock time in the sample schedule (no live clock on the page). */
  time: string;
  /** Note the brewer added on the sample record, if any, and when. */
  note?: string;
  noteTime?: string;
};

export const BATCH = {
  number: 231,
  beer: "Harbour Pale",
  size: "10 hL",
  brewed: "14 Oct 2026",
  brewer: "JM",
};

export const STEPS: Step[] = [
  { id: "strike", name: "Strike water", unit: "°C", target: [75.0, 78.0], typical: 76.5, time: "06:40" },
  { id: "mash", name: "Mash temperature", unit: "°C", target: [65.0, 67.0], typical: 66.5, time: "06:55" },
  { id: "runnings", name: "First runnings", unit: "SG", target: [1.066, 1.076], typical: 1.072, time: "07:40" },
  {
    id: "preboil-sg",
    name: "Pre-boil gravity",
    unit: "SG",
    target: [1.046, 1.05],
    typical: 1.044,
    time: "08:45",
    note: "Short sparge. Topped up 0.4 hL from the HLT.",
    noteTime: "09:10",
  },
  { id: "preboil-vol", name: "Pre-boil volume", unit: "hL", target: [12.0, 12.8], typical: 12.4, time: "08:47" },
  { id: "og", name: "Original gravity", unit: "SG", target: [1.052, 1.056], typical: 1.054, time: "10:20" },
  { id: "knockout", name: "Knockout temperature", unit: "°C", target: [18.0, 20.0], typical: 19.0, time: "10:35" },
  { id: "fv", name: "Volume to FV", unit: "hL", target: [9.8, 10.6], typical: 10.2, time: "10:50" },
];

/** How many steps are already logged when the sample loads (the visitor picks it up mid-morning). */
export const LOGGED_ON_LOAD = 3;

export function decimals(unit: Unit): number {
  return unit === "SG" ? 3 : 1;
}

export function format(value: number, unit: Unit): string {
  return value.toFixed(decimals(unit));
}

export function formatTarget(step: Step): string {
  return `${format(step.target[0], step.unit)}–${format(step.target[1], step.unit)} ${step.unit}`;
}

export function outOfRange(step: Step, value: number): boolean {
  return value < step.target[0] || value > step.target[1];
}

/** "0.002 under" or "0.4 over", for a flagged reading. */
export function deviation(step: Step, value: number): string {
  const [lo, hi] = step.target;
  const d = value < lo ? lo - value : value - hi;
  return `${d.toFixed(decimals(step.unit))} ${value < lo ? "under" : "over"}`;
}
