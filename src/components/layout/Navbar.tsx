"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { navItems, contact } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "border-b border-line bg-ink/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 lg:px-14">
          <a href="#top" className="font-display text-xl italic tracking-tight text-paper">
            Home<span className="text-gold">Gym</span>
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] font-medium uppercase tracking-[0.14em] text-paper-dim transition-colors duration-300 hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={contact.phoneHref}
              className="text-[13px] font-medium uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:text-gold"
            >
              {contact.phone}
            </a>
            <a
              href="#syndromes"
              className="rounded-full border border-line-strong px-6 py-2.5 text-[13px] font-medium uppercase tracking-[0.14em] text-paper transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Συνδρομές
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={clsx(
                "h-px w-6 bg-paper transition-all duration-300",
                open && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={clsx(
                "h-px w-6 bg-paper transition-all duration-300",
                open && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </button>
        </nav>
      </header>

      <div
        className={clsx(
          "fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8 transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <ul className="flex flex-col gap-2">
          {navItems.map((item, i) => (
            <li
              key={item.href}
              style={{ transitionDelay: open ? `${i * 60 + 100}ms` : "0ms" }}
              className={clsx(
                "overflow-hidden transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-4 font-display text-3xl italic text-paper"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={contact.phoneHref}
          className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-gold"
        >
          {contact.phone}
        </a>
      </div>
    </>
  );
}
