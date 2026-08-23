import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import Reveal from "@/components/ui/Reveal";
import VisualPanel from "@/components/ui/VisualPanel";
import { pool } from "@/data/content";

export const metadata: Metadata = {
  title: "Πισίνα",
  description: pool.lead,
  alternates: { canonical: "/pool" },
};

export default function PoolPage() {
  return (
    <>
      <PageHero
        eyebrow={pool.eyebrow}
        title={pool.title}
        description={pool.lead}
        image="https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Πισίνα HomeGym"
      />

      <section className="relative bg-paper px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="flex flex-col gap-6">
            {pool.paragraphs.map((p) => (
              <p key={p} className="max-w-xl text-base leading-relaxed text-text-dim">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={150}>
            <VisualPanel
              variant="waves"
              image="https://images.unsplash.com/photo-1600965962102-9d260a71890d?q=80&w=1200&auto=format&fit=crop"
              imageAlt="Χώρος πισίνας HomeGym"
            />
          </Reveal>
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            label: "Kids Pool Academy",
            description: "Μαθήματα κολύμβησης για παιδιά.",
            href: "/kids-pool-academy",
          },
          {
            label: "Summer Camp",
            description: "Καλοκαιρινές δραστηριότητες γύρω από το νερό.",
            href: "/summer-camp",
          },
          {
            label: "Επικοινωνία",
            description: "Ρώτησέ μας για ωράριο και διαθεσιμότητα.",
            href: "/contact",
          },
        ]}
      />
    </>
  );
}
