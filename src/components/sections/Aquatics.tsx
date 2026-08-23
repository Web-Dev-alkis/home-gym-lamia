import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import VisualPanel from "@/components/ui/VisualPanel";
import { summerPrograms } from "@/data/content";

const variants = ["waves", "grid", "diagonal"] as const;

export default function Aquatics() {
  return (
    <section
      id="kids-pool-academy"
      className="relative border-t border-line bg-ink px-6 py-28 md:px-10 lg:px-14 lg:py-36"
    >
      <div id="summer" className="mx-auto max-w-[1600px]">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>Πισίνα &amp; Καλοκαίρι</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.25rem,5vw,4.25rem)] italic leading-[1.05] text-paper text-balance">
              Το νερό, από παιδί μέχρι πρωταθλητή.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-paper-dim">
            Kids Pool Academy, Summer Camp και Summer Pool Side — δομημένα προγράμματα γύρω από
            την πισίνα, για κάθε ηλικία.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {summerPrograms.map((program, i) => (
            <Reveal key={program.id} delay={i * 120} className="group">
              <VisualPanel variant={variants[i % variants.length]} className="transition-transform duration-500 group-hover:-translate-y-2" />
              <h3 className="mt-6 font-display text-2xl italic text-paper">{program.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">{program.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
