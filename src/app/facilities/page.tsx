import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import Facilities from "@/components/sections/Facilities";

export const metadata: Metadata = {
  title: "Εγκαταστάσεις",
  description:
    "Χώρος γυμναστηρίου, στούντιο Pilates, πισίνα και αίθουσα ομαδικών μαθημάτων στο HomeGym Λαμία.",
  alternates: { canonical: "/facilities" },
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Εγκαταστάσεις"
        title="Χώροι σχεδιασμένοι για προπόνηση."
        description="Κάθε γωνιά του HomeGym σχεδιάστηκε γύρω από μία ιδέα — τίποτα να μη στέκεται εμπόδιο ανάμεσα σε σένα και τον στόχο σου."
      />
      <Facilities />
      <RelatedLinks
        links={[
          {
            label: "Υπηρεσίες",
            description: "Δες τι μπορείς να κάνεις σε κάθε χώρο.",
            href: "/services",
          },
          {
            label: "Group Programs",
            description: "Το στούντιο Pilates σε δράση.",
            href: "/group-programs",
          },
          {
            label: "Επικοινωνία",
            description: "Κλείσε ένα ραντεβού επίσκεψης.",
            href: "/contact",
          },
        ]}
      />
    </>
  );
}
