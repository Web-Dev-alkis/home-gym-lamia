import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import VisualPanel from "@/components/ui/VisualPanel";
import MagneticButton from "@/components/ui/MagneticButton";

const focus = [
  "Εξατομικευμένο πλάνο προπόνησης",
  "Συνεχής παρακολούθηση προόδου",
  "Ευέλικτο πρόγραμμα ραντεβού",
  "Καθοδήγηση σε κάθε επίπεδο εμπειρίας",
];

export default function PersonalTraining() {
  return (
    <section
      id="personal-training"
      className="relative border-t border-line bg-ink-soft px-6 py-28 md:px-10 lg:px-14 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal as="div" className="order-2 lg:order-1">
          <Eyebrow>Personal Training</Eyebrow>
          <h2 className="mt-6 max-w-lg font-display text-[clamp(2.25rem,4.5vw,3.75rem)] italic leading-[1.05] text-paper text-balance">
            Ένας προπονητής. Ένα πλάνο. Ο δικός σου στόχος.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-paper-dim">
            Η προσωπική προπόνηση στο HomeGym σχεδιάζεται γύρω από εσένα — το σώμα σου, τον χρόνο
            σου και τον στόχο σου. Χωρίς γενικές συνταγές, με πραγματική καθοδήγηση σε κάθε
            επανάληψη.
          </p>

          <ul className="mt-10 flex flex-col gap-4">
            {focus.map((item) => (
              <li key={item} className="flex items-center gap-4 border-t border-line pt-4 text-sm text-paper">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <MagneticButton href="#epikoinonia">Κλείσε το πρώτο σου ραντεβού</MagneticButton>
          </div>
        </Reveal>

        <Reveal as="div" delay={150} className="order-1 lg:order-2">
          <VisualPanel variant="rings" label="Personal Training / One to One" />
        </Reveal>
      </div>
    </section>
  );
}
