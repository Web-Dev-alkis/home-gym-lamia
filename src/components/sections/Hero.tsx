"use client";

import { useEffect, useRef } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import { brand } from "@/data/content";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x * 30}px, ${y * 30}px, 0)`;
      }
    };

    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.scrollY;
        parallaxRef.current.style.transform = `translate3d(0, ${offset * 0.35}px, 0)`;
        parallaxRef.current.style.opacity = `${Math.max(1 - offset / 700, 0)}`;
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[720px] w-full items-center overflow-hidden bg-ink"
    >
      {/* Background system: layered glow, grid and grain — cinematic without stock photography */}
      <div className="pointer-events-none absolute inset-0">
        <div
          ref={glowRef}
          className="absolute left-1/2 top-1/2 h-[80vmax] w-[80vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px] transition-transform duration-300 ease-out"
          style={{
            background:
              "radial-gradient(circle, rgba(201,161,90,0.35) 0%, rgba(201,161,90,0.08) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div className="grain absolute inset-0" />
      </div>

      <div
        ref={parallaxRef}
        className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col px-6 pt-24 md:px-10 lg:px-14"
      >
        <p
          data-reveal="visible"
          className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="h-px w-10 bg-gold" />
          HomeGym &middot; {brand.location}
        </p>

        <h1 className="max-w-5xl font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight text-paper text-balance">
          <span className="block opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Τίποτα δεν λειτουργεί
          </span>
          <span
            className="block italic text-gold opacity-0 animate-fade-up"
            style={{ animationDelay: "0.38s" }}
          >
            αν δεν λειτουργήσεις
          </span>
          <span className="block opacity-0 animate-fade-up" style={{ animationDelay: "0.56s" }}>
            εσύ.
          </span>
        </h1>

        <div
          className="mt-10 flex max-w-xl flex-col gap-10 opacity-0 animate-fade-up sm:flex-row sm:items-end sm:justify-between"
          style={{ animationDelay: "0.75s" }}
        >
          <p className="max-w-sm text-base leading-relaxed text-paper-dim">
            Γυμναστήριο, personal training, group classes και πισίνα — ένας χώρος στη Λαμία
            φτιαγμένος για ανθρώπους που θέλουν πραγματικά αποτελέσματα.
          </p>
        </div>

        <div
          className="mt-12 flex flex-wrap items-center gap-5 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <MagneticButton href="#ypiresies">Οι Υπηρεσίες μας</MagneticButton>
          <MagneticButton href="#epikoinonia" variant="outline">
            Επικοινωνία
          </MagneticButton>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 opacity-0 animate-fade-up"
        style={{ animationDelay: "1.2s" }}
        aria-hidden
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-paper-dim">
          Scroll
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-line-strong">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[fade-up_1.8s_ease-in-out_infinite] bg-gold" />
        </span>
      </div>
    </section>
  );
}
