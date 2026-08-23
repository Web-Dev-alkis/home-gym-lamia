import Reveal from "@/components/ui/Reveal";

export default function Philosophy() {
  return (
    <section className="relative border-t border-line bg-ink px-6 py-28 md:px-10 lg:px-14 lg:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="max-w-4xl font-display text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.25] text-paper text-balance">
            Δεν χτίζουμε ένα ακόμα γυμναστήριο. Χτίζουμε έναν χώρο όπου η προπόνηση,
            η καθοδήγηση και η φροντίδα του σώματος συναντιούνται —{" "}
            <span className="italic text-gold">χωρίς εκπτώσεις στην ποιότητα.</span>
          </p>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-10 max-w-xl text-sm uppercase tracking-[0.2em] text-paper-dim">
            No More Comfort Zone — Home for Health &amp; Fitness
          </p>
        </Reveal>
      </div>
    </section>
  );
}
