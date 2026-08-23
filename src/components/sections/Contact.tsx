import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { contact } from "@/data/content";

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;

  return (
    <section
      id="epikoinonia"
      className="relative border-t border-line bg-ink px-6 py-28 md:px-10 lg:px-14 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow>Επικοινωνία</Eyebrow>
          <h2 className="mt-6 max-w-lg font-display text-[clamp(2.25rem,4.5vw,3.75rem)] italic leading-[1.05] text-paper text-balance">
            Πέρασε από το HomeGym.
          </h2>

          <div className="mt-12 flex flex-col gap-8">
            <div className="border-t border-line pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold">Διεύθυνση</p>
              <p className="mt-3 text-lg text-paper">
                {contact.addressLine1}, {contact.addressLine2}
              </p>
            </div>

            <div className="border-t border-line pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold">Τηλέφωνο</p>
              <a
                href={contact.phoneHref}
                className="mt-3 inline-block text-lg text-paper transition-colors duration-300 hover:text-gold"
              >
                {contact.phone}
              </a>
            </div>

            <div className="border-t border-line pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold">Ωράριο</p>
              <dl className="mt-3 flex flex-col gap-1.5">
                {contact.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-6 text-sm text-paper-dim">
                    <dt>{h.days}</dt>
                    <dd className="text-paper">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border-t border-b border-line py-6">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold">Social</p>
              <a
                href={contact.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-lg text-paper transition-colors duration-300 hover:text-gold"
              >
                {contact.instagram.handle}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative min-h-[420px] overflow-hidden rounded-sm border border-line lg:min-h-full">
          <iframe
            title="Χάρτης τοποθεσίας HomeGym"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full grayscale invert-[0.92] contrast-[0.9]"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-line" />
        </Reveal>
      </div>
    </section>
  );
}
