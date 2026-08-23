import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { membershipTiers, contact } from "@/data/content";

export default function Membership() {
  return (
    <section
      id="syndromes"
      className="relative border-t border-line bg-ink-soft px-6 py-28 md:px-10 lg:px-14 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Συνδρομές</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.25rem)] italic leading-[1.05] text-paper text-balance">
            Διάλεξε τον δρόμο σου.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-paper-dim">
            Οι συνδρομές μας προσαρμόζονται στις ανάγκες σου. Επικοινώνησε μαζί μας για τρέχουσες
            τιμές και διαθεσιμότητα.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {membershipTiers.map((tier, i) => (
            <Reveal
              key={tier.id}
              delay={i * 120}
              className="group flex flex-col justify-between bg-ink-soft p-10 transition-colors duration-500 hover:bg-ink"
            >
              <div>
                <span className="font-display text-sm text-gold">0{i + 1}</span>
                <h3 className="mt-4 font-display text-3xl italic text-paper">{tier.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-paper-dim">{tier.description}</p>
              </div>
              <a
                href={contact.phoneHref}
                className="mt-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-paper transition-colors duration-300 group-hover:text-gold"
              >
                Ζήτησε πληροφορίες
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
