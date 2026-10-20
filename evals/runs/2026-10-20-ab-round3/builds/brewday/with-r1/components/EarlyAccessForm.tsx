"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { PRIMARY_LABEL } from "@/components/site";

// Where early-access requests go. There is no inbox yet (see BRIEF.md), so this is empty on purpose:
// the form then says plainly that nothing was sent. Set it to a form endpoint that accepts a POST of
// `email` and `brewery` (any static-site form service, or your own) and the form submits there.
export const EARLY_ACCESS_ENDPOINT = "";

type Status = { kind: "idle" | "sending" | "sent" | "unsent" | "error"; text: string };

export function EarlyAccessForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    if (!EARLY_ACCESS_ENDPOINT) {
      setStatus({
        kind: "unsent",
        text: "Nothing was sent. Early-access requests are not open yet, and nothing you typed has left this page.",
      });
      return;
    }
    setStatus({ kind: "sending", text: "Sending your request…" });
    try {
      const res = await fetch(EARLY_ACCESS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus({ kind: "sent", text: "Request sent. You will hear back by email." });
    } catch {
      setStatus({ kind: "error", text: "That did not send. Try again in a minute." });
    }
  }

  return (
    <form
      method="post"
      action={EARLY_ACCESS_ENDPOINT || undefined}
      onSubmit={onSubmit}
      noValidate={false}
      className="flex flex-col gap-4 border border-ink/15 bg-white p-5 sm:p-7"
      aria-labelledby="early-access-heading"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ea-email" className="text-base font-semibold">
          Work email
        </label>
        <input
          id="ea-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          className="w-full min-w-0 min-h-12 rounded-btn border border-ink/30 bg-white px-3.5 text-base text-ink placeholder:text-steel"
          placeholder="you@yourbrewery.co.uk"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ea-brewery" className="text-base font-semibold">
          Brewery
        </label>
        <input
          id="ea-brewery"
          name="brewery"
          type="text"
          autoComplete="organization"
          required
          className="w-full min-w-0 min-h-12 rounded-btn border border-ink/30 bg-white px-3.5 text-base text-ink placeholder:text-steel"
          placeholder="Brewery name"
        />
      </div>
      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4">
        <Button type="submit" variant="primary" size="lg" disabled={status.kind === "sending"}>
          {PRIMARY_LABEL}
        </Button>
        <p className="text-sm text-steel">No card, no sales call. You hear back by email.</p>
      </div>
      <p role="status" aria-live="polite" className={`min-h-[1.5rem] text-base ${status.kind === "sent" ? "text-hop" : status.kind === "idle" ? "" : "text-wort"}`}>
        {status.text}
      </p>
    </form>
  );
}
