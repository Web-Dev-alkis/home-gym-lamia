import type { Metadata } from "next";
import PersonalTraining from "@/components/sections/PersonalTraining";
import RelatedLinks from "@/components/ui/RelatedLinks";

export const metadata: Metadata = {
  title: "Personal Training",
  description:
    "Προσωπική καθοδήγηση στο HomeGym Λαμία, σχεδιασμένη γύρω από τους δικούς σου στόχους.",
  alternates: { canonical: "/personal-training" },
};

export default function PersonalTrainingPage() {
  return (
    <>
      <PersonalTraining />
      <RelatedLinks
        links={[
          {
            label: "Group Programs",
            description: "Functional, HIIT, Pilates και άλλα, σε ομάδα.",
            href: "/group-programs",
          },
          {
            label: "Συνδρομές",
            description: "Εξατομικευμένα πακέτα προπόνησης.",
            href: "/memberships",
          },
          {
            label: "Επικοινωνία",
            description: "Κλείσε το πρώτο σου ραντεβού.",
            href: "/contact",
          },
        ]}
      />
    </>
  );
}
