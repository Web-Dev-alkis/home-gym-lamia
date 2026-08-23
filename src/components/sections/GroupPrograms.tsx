import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Marquee from "@/components/ui/Marquee";
import { groupClasses } from "@/data/content";

export default function GroupPrograms() {
  return (
    <section id="classes" className="relative overflow-hidden border-t border-line bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>Group Classes</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.25rem,5vw,4.25rem)] italic leading-[1.05] text-paper text-balance">
              Ενέργεια που μοιράζεσαι.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-paper-dim">
            Functional, Body Bars, Cross Training, HIIT και Pilates — προγράμματα ομαδικής
            προπόνησης σχεδιασμένα για ένταση, τεχνική και διάθεση.
          </p>
        </Reveal>
      </div>

      <Reveal delay={150} className="mt-16">
        <Marquee items={groupClasses} className="py-4" />
      </Reveal>

      <div className="mx-auto mt-16 max-w-[1600px] px-6 md:px-10 lg:px-14">
        <Reveal delay={250}>
          <p className="max-w-2xl border-t border-line pt-8 text-sm leading-relaxed text-paper-dim">
            Το εβδομαδιαίο πρόγραμμα μαθημάτων αλλάζει ανά περίοδο. Επικοινώνησε μαζί μας για το
            τρέχον ωράριο και διαθεσιμότητα θέσεων.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
