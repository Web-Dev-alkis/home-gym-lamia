import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import Reveal from "@/components/ui/Reveal";
import VisualPanel from "@/components/ui/VisualPanel";
import { summerPrograms } from "@/data/content";

const program = summerPrograms.find((p) => p.id === "kids-pool-academy")!;

export const metadata: Metadata = {
  title: "Kids Pool Academy",
  description: program.description,
  alternates: { canonical: "/kids-pool-academy" },
};

export default function KidsPoolAcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Kids Pool Academy"
        title="Το πρώτο τους βήμα στο νερό."
        description={program.description}
        image="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Παιδικά μαθήματα κολύμβησης"
      />

      <section className="relative bg-paper px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal delay={150} className="order-2 lg:order-1">
            <VisualPanel
              variant="waves"
              image="https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop"
              imageAlt="Kids Pool Academy"
            />
          </Reveal>
          <Reveal className="order-1 flex flex-col gap-6 lg:order-2">
            <p className="max-w-xl text-base leading-relaxed text-text-dim">
              Οργανωμένα μαθήματα κολύμβησης για παιδιά κάθε ηλικίας, σε μικρές ομάδες, με έμφαση
              στην ασφάλεια στο νερό πριν από την τεχνική.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-text-dim">
              Οι εκπαιδευτές προσαρμόζουν το πρόγραμμα στον ρυθμό κάθε παιδιού — από τα πρώτα
              βήματα μέσα στο νερό μέχρι τη σωστή τεχνική κολύμβησης και την αυτοπεποίθηση.
            </p>
          </Reveal>
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            label: "Summer Camp",
            description: "Συνέχισε το καλοκαίρι με παιχνίδι και κίνηση.",
            href: "/summer-camp",
          },
          {
            label: "Πισίνα",
            description: "Δες τον χώρο της πισίνας.",
            href: "/pool",
          },
          {
            label: "Επικοινωνία",
            description: "Ρώτησέ μας για ηλικίες και τμήματα.",
            href: "/contact",
          },
        ]}
      />
    </>
  );
}
