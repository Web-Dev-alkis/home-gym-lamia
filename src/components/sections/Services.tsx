import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { services } from "@/data/content";

const sectionAnchor: Record<string, string> = {
  gym: "syndromes",
  student: "syndromes",
  "personal-training": "personal-training",
  classes: "classes",
  pilates: "classes",
  pool: "kids-pool-academy",
};

export default function Services() {
  return (
    <section id="ypiresies" className="relative border-t border-line bg-ink px-6 py-28 md:px-10 lg:px-14 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>Υπηρεσίες</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.25rem,5vw,4.25rem)] italic leading-[1.05] text-paper text-balance">
              Ό,τι χρειάζεσαι, κάτω από μία στέγη.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-paper-dim">
            Από τη συνδρομή γυμναστηρίου μέχρι την προσωπική προπόνηση και το μάθημα κολύμβησης —
            κάθε υπηρεσία σχεδιασμένη με τα ίδια πρότυπα.
          </p>
        </Reveal>

        <div className="mt-16 border-t border-line">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 60} className="group">
              <a
                href={`#${sectionAnchor[service.id] ?? service.id}`}
                className="grid grid-cols-1 items-center gap-4 border-b border-line py-8 transition-colors duration-500 hover:bg-ink-soft/60 md:grid-cols-[80px_1fr_1.3fr_40px] md:gap-8 md:px-6"
              >
                <span className="font-display text-sm text-paper-dim/70 md:text-base">
                  {service.index}
                </span>
                <h3 className="font-display text-2xl italic leading-tight text-paper transition-colors duration-300 group-hover:text-gold md:text-3xl">
                  {service.title}
                </h3>
                <p className="max-w-lg text-sm leading-relaxed text-paper-dim">
                  {service.description}
                </p>
                <span
                  aria-hidden
                  className="hidden h-9 w-9 items-center justify-center rounded-full border border-line-strong text-paper transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink md:flex"
                >
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
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
