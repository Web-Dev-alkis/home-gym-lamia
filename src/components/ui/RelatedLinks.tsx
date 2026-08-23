import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

export type RelatedLink = { label: string; description: string; href: string };

export default function RelatedLinks({
  eyebrow = "Δες επίσης",
  title = "Συνέχισε την εξερεύνηση.",
  links,
}: {
  eyebrow?: string;
  title?: string;
  links: RelatedLink[];
}) {
  return (
    <section className="relative border-t border-line bg-paper-soft px-6 py-20 md:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-xl font-display text-[clamp(1.75rem,3.5vw,2.75rem)] italic leading-[1.1] text-text text-balance">
            {title}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {links.map((link, i) => (
            <Reveal key={link.href} delay={i * 100} className="rounded-xl bg-paper shadow-[0_20px_60px_-30px_rgba(19,18,24,0.2)] transition-shadow duration-500 hover:shadow-[0_28px_70px_-25px_rgba(19,18,24,0.28)]">
              <Link
                href={link.href}
                className="group flex h-full flex-col justify-between rounded-xl border border-line p-8 transition-transform duration-500 hover:-translate-y-1"
              >
                <div>
                  <h3 className="font-display text-2xl italic text-text transition-colors duration-300 group-hover:text-red">
                    {link.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-dim">{link.description}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-text transition-colors duration-300 group-hover:text-red">
                  Περισσότερα
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
