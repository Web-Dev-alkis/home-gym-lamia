import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import VisualPanel from "@/components/ui/VisualPanel";

const facilities = [
  {
    title: "Χώρος Γυμναστηρίου",
    variant: "grid" as const,
    span: "lg:col-span-7",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Στούντιο Pilates",
    variant: "diagonal" as const,
    span: "lg:col-span-5",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Πισίνα",
    variant: "waves" as const,
    span: "lg:col-span-5",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Χώρος Ομαδικών Μαθημάτων",
    variant: "rings" as const,
    span: "lg:col-span-7",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop",
  },
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
              <VisualPanel
                variant={f.variant}
                label={f.title}
                image={f.image}
                className="aspect-[16/11]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
