import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section className="relative bg-paper px-6 py-20 md:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="border-t border-line">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 60} className="group">
              <Link
                href={service.href}
                className="grid grid-cols-1 items-center gap-4 border-b border-line py-8 transition-colors duration-500 hover:bg-paper-soft md:grid-cols-[80px_1fr_1.3fr_40px] md:gap-8 md:px-6"
              >
                <span className="font-display text-sm text-text-dim/80 md:text-base">
                  {service.index}
                </span>
                <h3 className="font-display text-2xl italic leading-tight text-text transition-colors duration-300 group-hover:text-red md:text-3xl">
                  {service.title}
                </h3>
                <p className="max-w-lg text-sm leading-relaxed text-text-dim">
                  {service.description}
                </p>
                <span
                  aria-hidden
                  className="hidden h-9 w-9 items-center justify-center rounded-full border border-line-strong text-text transition-all duration-300 group-hover:border-red group-hover:bg-red group-hover:text-white md:flex"
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
