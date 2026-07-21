"use client";

import { useEffect, useMemo, useState } from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/cn";
import { waHref } from "@/lib/constants";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Accueil", href: "#top" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Comment ça fonctionne", href: "#how" },
  { label: "Tarifs", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const whatsappLink = useMemo(() => {
    // Pas de message par défaut: l’utilisateur peut préciser sa demande.
    return waHref();
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigation">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium tracking-tight text-black/70 transition-colors hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-[13px] font-medium text-black/80 transition-colors hover:bg-black/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
          >
            Discuter sur WhatsApp
          </a>
          <a
            href="#contact"
            className={cn(
              "inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-4 py-2 text-[13px] font-semibold text-white shadow-sm",
              "transition-transform hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.55)]"
            )}
          >
            Demander une démo
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-4 w-4">
            <span
              className={cn(
                "absolute left-0 top-0 h-[2px] w-full bg-black transition-transform",
                open ? "translate-y-[6px] rotate-45" : ""
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-0 h-[2px] w-full bg-black transition-opacity",
                open ? "opacity-0" : "opacity-100 translate-y-[6px]"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-0 h-[2px] w-full bg-black transition-transform",
                open ? "translate-y-[6px] -rotate-45" : "translate-y-3"
              )}
            />
          </div>
        </button>
      </div>

      <div
        className={cn(
          "md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="mx-auto w-full max-w-6xl px-4 pb-4 sm:px-6">
          <nav className="flex flex-col gap-3 pt-1" aria-label="Navigation mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-[14px] font-medium text-black/70 transition-colors hover:bg-black/[0.03] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 grid gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/10 bg-white px-4 py-3 text-[14px] font-medium text-black/80 transition-colors hover:bg-black/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.4)]"
            >
              Discuter sur WhatsApp
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-full bg-[var(--brand)] px-4 py-3 text-center text-[14px] font-semibold text-white shadow-sm",
                "transition-transform hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,211,102,0.55)]"
              )}
            >
              Demander une démo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

