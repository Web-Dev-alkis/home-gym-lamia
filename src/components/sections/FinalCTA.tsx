import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { contact } from "@/data/content";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-line-inverse bg-ink px-6 py-32 md:px-10 lg:px-14 lg:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(227,27,44,0.45) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto flex max-w-[1600px] flex-col items-center text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red">
            Η αρχή είναι σήμερα
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.5rem,7vw,6rem)] italic leading-[1.02] text-white text-balance">
            No more comfort zone.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-text-inverse-dim">
            Έλα από κοντά ή κάλεσέ μας. Θα βρούμε μαζί το πρόγραμμα που ταιριάζει στον στόχο σου.
          </p>
        </Reveal>
        <Reveal delay={300} className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <MagneticButton href={contact.phoneHref}>Κάλεσε μας τώρα</MagneticButton>
          <MagneticButton href="/contact" variant="outline">
            Δες τη διεύθυνση
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
