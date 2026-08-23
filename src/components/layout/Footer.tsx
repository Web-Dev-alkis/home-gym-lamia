import Link from "next/link";
import { brand, contact, legalLinks, navItems } from "@/data/content";

const topLevel = navItems.map((item) => ({ label: item.label, href: item.href }));
const services = navItems.flatMap((item) => item.children ?? []);

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-8 pt-20 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl italic text-white">
              Home<span className="text-red">Gym</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-text-inverse-dim">
              {brand.taglineGr}. Γυμναστήριο, personal training και πισίνα στην καρδιά της{" "}
              {brand.location}.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red">Πλοήγηση</p>
            <ul className="mt-5 flex flex-col gap-3">
              {topLevel.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-inverse-dim transition-colors duration-300 hover:text-red"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red">Υπηρεσίες</p>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-inverse-dim transition-colors duration-300 hover:text-red"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red">Επικοινωνία</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-text-inverse-dim">
              <li>
                {contact.addressLine1}, {contact.addressLine2}
              </li>
              <li>
                <a href={contact.phoneHref} className="transition-colors duration-300 hover:text-red">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-red"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line-inverse pt-8 text-xs text-text-inverse-dim md:flex-row md:items-center">
          <small className="not-italic">
            © {new Date().getFullYear()} ALKIS PAPAPOSTOLOY — Web Design &amp; Development. All
            rights reserved.
          </small>

          <nav aria-label="Νομικές σελίδες">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-300 hover:text-red"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
