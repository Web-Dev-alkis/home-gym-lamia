import Reveal from "@/components/ui/Reveal";
import { contact } from "@/data/content";

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;

  return (
    <section className="relative bg-paper px-6 py-20 md:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="flex flex-col gap-8">
            <div className="border-t border-line pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red">Διεύθυνση</p>
              <p className="mt-3 text-lg text-text">
                {contact.addressLine1}, {contact.addressLine2}
              </p>
            </div>

            <div className="border-t border-line pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red">Τηλέφωνο</p>
              <a
                href={contact.phoneHref}
                className="mt-3 inline-block text-lg text-text transition-colors duration-300 hover:text-red"
              >
                {contact.phone}
              </a>
            </div>

            <div className="border-t border-line pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red">Ωράριο</p>
              <dl className="mt-3 flex flex-col gap-1.5">
                {contact.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-6 text-sm text-text-dim">
                    <dt>{h.days}</dt>
                    <dd className="text-text">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border-t border-b border-line py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red">Social</p>
              <a
                href={contact.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-lg text-text transition-colors duration-300 hover:text-red"
              >
                {contact.instagram.handle}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative min-h-[420px] overflow-hidden rounded-xl border border-line shadow-[0_16px_50px_-28px_rgba(19,18,24,0.2)] lg:min-h-full">
          <iframe
            title="Χάρτης τοποθεσίας HomeGym"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full grayscale-[0.3]"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-line" />
        </Reveal>
      </div>
    </section>
  );
}
