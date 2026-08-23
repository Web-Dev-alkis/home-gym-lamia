import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import Reveal from "@/components/ui/Reveal";
import { about } from "@/data/content";

export const metadata: Metadata = {
  title: "Το HomeGym",
  description: about.lead,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.lead}
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Χώρος γυμναστηρίου HomeGym"
      />

      <section className="relative bg-paper px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="flex flex-col gap-6">
            {about.paragraphs.map((p) => (
              <p key={p} className="max-w-xl text-base leading-relaxed text-text-dim">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={150} className="flex flex-col gap-8">
            {about.values.map((value, i) => (
              <div key={value.title} className="border-t border-line pt-6">
                <span className="font-display text-sm text-red">0{i + 1}</span>
                <h2 className="mt-3 font-display text-2xl italic text-text">{value.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-dim">{value.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <RelatedLinks
        links={[
          {
            label: "Personal Training",
            description: "Ένας προπονητής, ένα πλάνο, ο δικός σου στόχος.",
            href: "/personal-training",
          },
          {
            label: "Υπηρεσίες",
            description: "Όλες οι υπηρεσίες μας, σε μία σελίδα.",
            href: "/services",
          },
          {
            label: "Επικοινωνία",
            description: "Πέρασε από το HomeGym ή κάλεσέ μας.",
            href: "/contact",
          },
        ]}
      />
    </>
  );
}
