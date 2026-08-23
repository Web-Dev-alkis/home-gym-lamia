"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navItems, contact } from "@/data/content";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

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
          "fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md transition-shadow duration-500",
          scrolled && "shadow-[0_8px_30px_-12px_rgba(19,18,24,0.12)]"
        )}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 lg:px-14">
          <Link href="/" className="font-display text-xl italic tracking-tight text-text">
            Home<span className="text-red">Gym</span>
          </Link>

          <ul className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href) || (item.children?.some((c) => isActive(pathname, c.href)) ?? false);

              if (!item.children) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "relative flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-red",
                        active ? "text-red" : "text-text"
                      )}
                    >
                      {item.label}
                      {active && <span aria-hidden className="h-1 w-1 rounded-full bg-red" />}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={clsx(
                      "flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-red",
                      active ? "text-red" : "text-text"
                    )}
                  >
                    {item.label}
                    {active && <span aria-hidden className="h-1 w-1 rounded-full bg-red" />}
                    <svg aria-hidden width="9" height="9" viewBox="0 0 10 10" fill="none" className="mt-px transition-transform duration-300 group-hover:rotate-180">
                      <path d="M1.5 3L5 6.5L8.5 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>

                  <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="flex flex-col gap-1 rounded-xl border border-line bg-paper p-2 shadow-[0_24px_60px_-20px_rgba(19,18,24,0.25)]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={clsx(
                              "block rounded-lg px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 hover:bg-paper-soft hover:text-red",
                              isActive(pathname, child.href) ? "text-red" : "text-text"
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={contact.phoneHref}
              className="text-[13px] font-semibold uppercase tracking-[0.14em] text-text transition-colors duration-300 hover:text-red"
            >
              {contact.phone}
            </a>
            <Link
              href="/memberships"
              className="rounded-full bg-red px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_-10px_rgba(227,27,44,0.55)] transition-all duration-300 hover:bg-red-deep"
            >
              Συνδρομές
            </Link>
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
                "h-px w-6 bg-text transition-all duration-300",
                open && "translate-y-[3.5px] rotate-45 bg-red"
              )}
            />
            <span
              className={clsx(
                "h-px w-6 bg-text transition-all duration-300",
                open && "-translate-y-[3.5px] -rotate-45 bg-red"
              )}
            />
          </button>
        </nav>
      </header>

      <div
        className={clsx(
          "fixed inset-0 z-40 flex flex-col justify-center overflow-y-auto bg-paper px-8 py-28 transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1">
          {navItems.map((item, i) => {
            const active = isActive(pathname, item.href) || (item.children?.some((c) => isActive(pathname, c.href)) ?? false);
            const expanded = openMobileGroup === item.href;

            return (
              <li
                key={item.href}
                style={{ transitionDelay: open ? `${i * 60 + 100}ms` : "0ms" }}
                className={clsx(
                  "overflow-hidden border-b border-line transition-all duration-500",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
              >
                {!item.children ? (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "block py-4 font-display text-3xl italic",
                      active ? "text-red" : "text-text"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="py-2">
                    <button
                      type="button"
                      onClick={() => setOpenMobileGroup(expanded ? null : item.href)}
                      aria-expanded={expanded}
                      className={clsx(
                        "flex w-full items-center justify-between py-2 font-display text-3xl italic",
                        active ? "text-red" : "text-text"
                      )}
                    >
                      {item.label}
                      <svg
                        aria-hidden
                        width="14"
                        height="14"
                        viewBox="0 0 10 10"
                        fill="none"
                        className={clsx("transition-transform duration-300", expanded && "rotate-180")}
                      >
                        <path d="M1.5 3L5 6.5L8.5 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div
                      className={clsx(
                        "grid overflow-hidden transition-all duration-400",
                        expanded ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <ul className="flex min-h-0 flex-col gap-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className={clsx(
                                "block py-2 text-sm font-semibold uppercase tracking-[0.14em]",
                                isActive(pathname, child.href) ? "text-red" : "text-text-dim"
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <a
          href={contact.phoneHref}
          className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-red"
        >
          {contact.phone}
        </a>
      </div>
    </>
  );
}
