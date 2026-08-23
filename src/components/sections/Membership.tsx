import Reveal from "@/components/ui/Reveal";
import { membershipTiers, contact } from "@/data/content";

export default function Membership() {
  return (
    <section className="relative bg-paper-soft px-6 py-20 md:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {membershipTiers.map((tier, i) => (
            <Reveal
              key={tier.id}
              delay={i * 120}
              className="group flex flex-col justify-between rounded-xl border border-line bg-paper p-10 shadow-[0_16px_50px_-28px_rgba(19,18,24,0.2)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_65px_-24px_rgba(19,18,24,0.3)]"
            >
              <div>
                <span className="font-display text-sm text-red">0{i + 1}</span>
                <h3 className="mt-4 font-display text-3xl italic text-text">{tier.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-text-dim">{tier.description}</p>
              </div>
              <a
                href={contact.phoneHref}
                className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-text transition-colors duration-300 group-hover:text-red"
              >
                Ζήτησε πληροφορίες
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
