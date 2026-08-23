import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import Reveal from "@/components/ui/Reveal";
import VisualPanel from "@/components/ui/VisualPanel";
import { summerPrograms } from "@/data/content";

const camp = summerPrograms.find((p) => p.id === "summer-camp")!;
const poolside = summerPrograms.find((p) => p.id === "summer-pool-side")!;

export const metadata: Metadata = {
  title: "Summer Camp",
  description: camp.description,
  alternates: { canonical: "/summer-camp" },
};

export default function SummerCampPage() {
  return (
    <>
      <PageHero
        eyebrow="Καλοκαίρι"
        title="Το καλοκαίρι, γεμάτο κίνηση."
        description={camp.description}
        image="https://images.unsplash.com/photo-1600965962102-9d260a71890d?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Summer Camp HomeGym"
      />

      <section className="relative bg-paper px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal className="group">
            <VisualPanel
              variant="diagonal"
              image="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
              imageAlt={camp.title}
              className="transition-transform duration-500 group-hover:-translate-y-2"
            />
            <h2 className="mt-6 font-display text-2xl italic text-text">{camp.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-dim">{camp.description}</p>
          </Reveal>
          <Reveal delay={120} className="group">
            <VisualPanel
              variant="waves"
              image="https://images.unsplash.com/photo-1600965962102-9d260a71890d?q=80&w=1200&auto=format&fit=crop"
              imageAlt={poolside.title}
              className="transition-transform duration-500 group-hover:-translate-y-2"
            />
            <h2 className="mt-6 font-display text-2xl italic text-text">{poolside.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-dim">{poolside.description}</p>
          </Reveal>
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            label: "Kids Pool Academy",
            description: "Μαθήματα κολύμβησης όλο τον χρόνο.",
            href: "/kids-pool-academy",
          },
          {
            label: "Πισίνα",
            description: "Δες τον χώρο της πισίνας.",
            href: "/pool",
          },
          {
            label: "Επικοινωνία",
            description: "Ρώτησέ μας για διαθεσιμότητα θέσεων.",
            href: "/contact",
          },
        ]}
      />
    </>
  );
}
