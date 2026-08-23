import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import Membership from "@/components/sections/Membership";

export const metadata: Metadata = {
  title: "Συνδρομές",
  description: "Standard, φοιτητική και personal training συνδρομές στο HomeGym Λαμία.",
  alternates: { canonical: "/memberships" },
};

export default function MembershipsPage() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow="Συνδρομές"
        title="Διάλεξε τον δρόμο σου."
        description="Οι συνδρομές μας προσαρμόζονται στις ανάγκες σου. Επικοινώνησε μαζί μας για τρέχουσες τιμές και διαθεσιμότητα."
      />
      <Membership />
      <RelatedLinks
        links={[
          {
            label: "Personal Training",
            description: "Θέλεις πιο εξατομικευμένη καθοδήγηση;",
            href: "/personal-training",
          },
          {
            label: "Υπηρεσίες",
            description: "Δες όλες τις υπηρεσίες μας.",
            href: "/services",
          },
          {
            label: "Επικοινωνία",
            description: "Ζήτησε πληροφορίες για τη συνδρομή σου.",
            href: "/contact",
          },
        ]}
      />
    </>
  );
}
