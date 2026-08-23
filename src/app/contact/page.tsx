import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description: "Διεύθυνση, τηλέφωνο και ωράριο λειτουργίας του HomeGym στη Λαμία.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Επικοινωνία" title="Πέρασε από το HomeGym." />
      <Contact />
      <RelatedLinks
        links={[
          {
            label: "Υπηρεσίες",
            description: "Δες όλες τις υπηρεσίες μας.",
            href: "/services",
          },
          {
            label: "Συνδρομές",
            description: "Standard, φοιτητική ή personal.",
            href: "/memberships",
          },
          {
            label: "Το HomeGym",
            description: "Η ιδέα πίσω από τον χώρο.",
            href: "/about",
          },
        ]}
      />
    </>
  );
}
