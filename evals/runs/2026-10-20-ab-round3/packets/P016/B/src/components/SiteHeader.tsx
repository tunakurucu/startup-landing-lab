"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { NAV, PRIMARY_LABEL } from "@/components/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="mx-auto max-w-page px-4 sm:px-6">
      <div className="flex min-h-[4.5rem] items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 rounded-btn py-2 pr-2" aria-label="Grainline, back to top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/grainline-mark.svg" alt="" width={32} height={32} className="h-8 w-8" />
          <span className="text-lg font-bold tracking-tight">Grainline</span>
        </a>

        <nav aria-label="Site" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="rounded-btn px-3 py-2.5 text-base font-medium text-ink/85 hover:text-ink">
              {n.label}
            </a>
          ))}
          <Button href="#early-access" variant="primary" className="ml-3">
            {PRIMARY_LABEL}
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-btn border border-ink/20 bg-white px-3 text-base font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav id="site-menu" aria-label="Site, phone menu" className={`${open ? "flex" : "hidden"} flex-col gap-1 border-t border-ink/10 py-3 lg:hidden`}>
        {NAV.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-btn px-3 py-3 text-lg font-medium text-ink">
            {n.label}
          </a>
        ))}
        <Button href="#early-access" variant="primary" size="lg" className="mt-2" onClick={() => setOpen(false)}>
          {PRIMARY_LABEL}
        </Button>
      </nav>
    </header>
  );
}
