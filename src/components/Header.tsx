"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { Logo } from "./icons";
import { OrderBtn } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-tok text-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-ink">
        Негізгі мазмұнға өту
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="ТОҚ BURGER — басты бет">
          <Logo />
        </a>

        <nav aria-label="Негізгі" className="hidden items-center gap-8 font-semibold md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="underline-offset-8 decoration-2 hover:underline">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden md:block">
            <OrderBtn label="header" variant="light" className="!min-h-10 !px-5 text-sm" />
          </span>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Мәзірді жабу" : "Мәзірді ашу"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Мобильді"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col gap-2 bg-tok px-4 pb-8 pt-6 md:hidden"
      >
        {nav.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-display border-b border-white/25 py-4 text-3xl font-extrabold">
            {n.label}
          </a>
        ))}
        <OrderBtn label="mobile_nav" variant="light" className="mt-auto w-full text-lg" />
      </nav>
    </header>
  );
}
