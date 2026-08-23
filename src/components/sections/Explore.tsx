import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { exploreLinks } from "@/data/content";

export default function Explore() {
  return (
    <section className="relative border-t border-line bg-paper-soft px-6 py-28 md:px-10 lg:px-14 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-2xl">
          <Eyebrow>Εξερεύνησε</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.25rem)] italic leading-[1.05] text-text text-balance">
            Όλα όσα προσφέρει το HomeGym.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exploreLinks.map((link, i) => (
            <Reveal
              key={link.href}
              delay={(i % 6) * 80}
              className="rounded-xl bg-paper shadow-[0_16px_50px_-28px_rgba(19,18,24,0.2)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_65px_-24px_rgba(19,18,24,0.3)]"
            >
              <Link
                href={link.href}
                className="group flex h-full flex-col justify-between gap-10 rounded-xl border border-line p-8"
              >
                <span className="font-display text-sm text-red">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl italic text-text transition-colors duration-300 group-hover:text-red">
                    {link.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-dim">{link.description}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-text transition-colors duration-300 group-hover:text-red">
                  Δες περισσότερα
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
