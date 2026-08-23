import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Πολιτική cookies του HomeGym.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Νομικά"
        title="Cookie Policy"
        description="Αυτή η σελίδα βρίσκεται υπό διαμόρφωση. Το πλήρες κείμενο της πολιτικής cookies θα προστεθεί σύντομα."
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
