import type { ReactNode } from "react";
import clsx from "clsx";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
  image,
  imageAlt,
  children,
}: PageHeroProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden px-6 pb-20 pt-36 md:px-10 md:pt-40 lg:px-14 lg:pb-28 lg:pt-48",
        image ? "bg-ink" : "border-b border-line bg-paper"
      )}
    >
      {image && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image src={image} alt={imageAlt ?? ""} fill priority className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/75 to-ink" />
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background: "radial-gradient(circle at 85% 0%, rgba(227,27,44,0.28), transparent 55%)",
            }}
          />
          <div className="grain absolute inset-0" />
        </div>
      )}

      <div
        className={clsx(
          "relative mx-auto max-w-[1600px]",
          align === "center" && "flex flex-col items-center text-center"
        )}
      >
        <Reveal className={clsx("flex flex-col", align === "center" && "items-center")}>
          <Eyebrow className={align === "center" ? "justify-center" : undefined}>{eyebrow}</Eyebrow>
          <h1
            className={clsx(
              "mt-6 max-w-3xl font-display text-[clamp(2.5rem,6vw,5.5rem)] italic leading-[1.05] text-balance",
              image ? "text-white" : "text-text"
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={clsx(
                "mt-8 max-w-xl text-base leading-relaxed",
                image ? "text-text-inverse-dim" : "text-text-dim"
              )}
            >
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
