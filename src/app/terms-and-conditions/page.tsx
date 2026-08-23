import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Όροι χρήσης του HomeGym.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Νομικά"
        title="Terms & Conditions"
        description="Αυτή η σελίδα βρίσκεται υπό διαμόρφωση. Το πλήρες κείμενο των όρων χρήσης θα προστεθεί σύντομα."
      />
      <section className="relative bg-paper px-6 pb-24 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1600px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-red transition-colors duration-300 hover:text-red-deep"
          >
            ← Επιστροφή στην αρχική
          </Link>
        </div>
      </section>
    </>
  );
}
