import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import { groupClasses } from "@/data/content";

export default function GroupPrograms() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <Reveal>
        <Marquee items={groupClasses} className="py-4" />
      </Reveal>

      <div className="mx-auto mt-16 max-w-[1600px] px-6 md:px-10 lg:px-14">
        <Reveal delay={150}>
          <p className="max-w-2xl border-t border-line pt-8 text-sm leading-relaxed text-text-dim">
            Το εβδομαδιαίο πρόγραμμα μαθημάτων αλλάζει ανά περίοδο. Επικοινώνησε μαζί μας για το
            τρέχον ωράριο και διαθεσιμότητα θέσεων.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
