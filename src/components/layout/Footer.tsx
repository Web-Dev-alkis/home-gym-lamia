import { brand, contact, navItems } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink px-6 pb-8 pt-20 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl italic text-paper">
              Home<span className="text-gold">Gym</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper-dim">
              {brand.taglineGr}. Γυμναστήριο, personal training και πισίνα στην καρδιά της{" "}
              {brand.location}.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold">Πλοήγηση</p>
            <ul className="mt-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-paper-dim transition-colors duration-300 hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold">Επικοινωνία</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-paper-dim">
              <li>
                {contact.addressLine1}, {contact.addressLine2}
              </li>
              <li>
                <a href={contact.phoneHref} className="transition-colors duration-300 hover:text-gold">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-gold"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-paper-dim/70 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} HomeGym. Με επιφύλαξη παντός δικαιώματος.</p>
          <p className="uppercase tracking-[0.2em]">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
