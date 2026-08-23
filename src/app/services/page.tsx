import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Υπηρεσίες",
  description:
    "Γυμναστήριο, personal training, group classes, Home Pilates και Kids Pool Academy — όλες οι υπηρεσίες του HomeGym σε μία σελίδα.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Υπηρεσίες"
        title="Ό,τι χρειάζεσαι, κάτω από μία στέγη."
        description="Από τη συνδρομή γυμναστηρίου μέχρι την προσωπική προπόνηση και το μάθημα κολύμβησης — κάθε υπηρεσία σχεδιασμένη με τα ίδια πρότυπα."
      />
      <Services />
      <RelatedLinks
        links={[
          {
            label: "Συνδρομές",
            description: "Standard, φοιτητική ή personal — διάλεξε τον δρόμο σου.",
            href: "/memberships",
          },
          {
            label: "Εγκαταστάσεις",
            description: "Ο χώρος πίσω από κάθε υπηρεσία.",
            href: "/facilities",
          },
          {
            label: "Επικοινωνία",
            description: "Ρώτησέ μας ό,τι χρειάζεσαι.",
            href: "/contact",
          },
        ]}
      />
    </>
  );
}
