import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import VisualPanel from "@/components/ui/VisualPanel";

const facilities = [
  { title: "Χώρος Γυμναστηρίου", variant: "grid" as const, span: "lg:col-span-7" },
  { title: "Στούντιο Pilates", variant: "diagonal" as const, span: "lg:col-span-5" },
  { title: "Πισίνα", variant: "waves" as const, span: "lg:col-span-5" },
  { title: "Χώρος Ομαδικών Μαθημάτων", variant: "rings" as const, span: "lg:col-span-7" },
];

export default function Facilities() {
  return (
    <section className="relative border-t border-line bg-ink px-6 py-28 md:px-10 lg:px-14 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-2xl">
          <Eyebrow>Εγκαταστάσεις</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.25rem)] italic leading-[1.05] text-paper text-balance">
            Χώροι σχεδιασμένοι για προπόνηση.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {facilities.map((f, i) => (
            <Reveal key={f.title} delay={i * 100} className={f.span}>
              <VisualPanel variant={f.variant} label={f.title} className="aspect-[16/11]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
