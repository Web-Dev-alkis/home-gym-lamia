import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import GroupPrograms from "@/components/sections/GroupPrograms";

export const metadata: Metadata = {
  title: "Group Programs",
  description:
    "Functional, Body Bars, Cross Training, HIIT και Pilates — ομαδικά προγράμματα προπόνησης στο HomeGym Λαμία.",
  alternates: { canonical: "/group-programs" },
};

export default function GroupProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Group Classes"
        title="Ενέργεια που μοιράζεσαι."
        description="Functional, Body Bars, Cross Training, HIIT και Pilates — προγράμματα ομαδικής προπόνησης σχεδιασμένα για ένταση, τεχνική και διάθεση."
      />
      <GroupPrograms />
      <RelatedLinks
        links={[
          {
            label: "Personal Training",
            description: "Προτιμάς εξατομικευμένη καθοδήγηση;",
            href: "/personal-training",
          },
          {
            label: "Εγκαταστάσεις",
            description: "Δες το στούντιο Pilates και την αίθουσα μαθημάτων.",
            href: "/facilities",
          },
          {
            label: "Επικοινωνία",
            description: "Ρώτησέ μας για το τρέχον πρόγραμμα.",
            href: "/contact",
          },
        ]}
      />
    </>
  );
}
