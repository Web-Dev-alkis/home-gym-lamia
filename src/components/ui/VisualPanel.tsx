import clsx from "clsx";
import Image from "next/image";

type VisualPanelProps = {
  variant?: "rings" | "waves" | "grid" | "diagonal";
  label?: string;
  className?: string;
  image?: string;
  imageAlt?: string;
};

/**
 * Photo panel with the site's art-directed overlay (grain, gradient, red
 * radial glow). Falls back to the abstract SVG variants when no `image` is
 * supplied.
 */
export default function VisualPanel({
  variant = "rings",
  label,
  className,
  image,
  imageAlt,
}: VisualPanelProps) {
  return (
    <div
      className={clsx(
        "relative isolate flex aspect-[4/5] w-full items-end overflow-hidden rounded-xl bg-ink-soft",
        className
      )}
    >
      {image && (
        <Image
          src={image}
          alt={imageAlt ?? label ?? ""}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      )}
      <div className="grain absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/90" />

      {!image && variant === "rings" && (
        <svg
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-70"
          viewBox="0 0 400 400"
          fill="none"
        >
          {[60, 100, 140, 180, 220].map((r) => (
            <circle
              key={r}
              cx="200"
              cy="200"
              r={r}
              stroke={r === 140 ? "var(--color-red)" : "var(--color-line-inverse-strong)"}
              strokeWidth={r === 140 ? 1.5 : 1}
            />
          ))}
        </svg>
      )}

      {!image && variant === "waves" && (
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full opacity-70"
          viewBox="0 0 400 500"
          fill="none"
        >
          {[80, 160, 240, 320, 400].map((y, i) => (
            <path
              key={y}
              d={`M-20 ${y} Q 100 ${y - 40} 200 ${y} T 420 ${y}`}
              stroke={i === 2 ? "var(--color-red)" : "var(--color-line-inverse-strong)"}
              strokeWidth={i === 2 ? 1.5 : 1}
            />
          ))}
        </svg>
      )}

      {!image && variant === "grid" && (
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full opacity-60"
          viewBox="0 0 400 500"
          fill="none"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={i * 50}
              y1="0"
              x2={i * 50}
              y2="500"
              stroke="var(--color-line-inverse-strong)"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={i * 50}
              x2="400"
              y2={i * 50}
              stroke="var(--color-line-inverse-strong)"
              strokeWidth="1"
            />
          ))}
          <line x1="0" y1="250" x2="400" y2="250" stroke="var(--color-red)" strokeWidth="1.5" />
        </svg>
      )}

      {!image && variant === "diagonal" && (
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full opacity-70"
          viewBox="0 0 400 500"
          fill="none"
        >
          {Array.from({ length: 14 }).map((_, i) => (
            <line
              key={i}
              x1={-100 + i * 45}
              y1="0"
              x2={-100 + i * 45 + 200}
              y2="500"
              stroke={i === 7 ? "var(--color-red)" : "var(--color-line-inverse-strong)"}
              strokeWidth={i === 7 ? 1.5 : 1}
            />
          ))}
        </svg>
      )}

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(227,27,44,0.3), transparent 55%)",
        }}
      />

      {label && (
        <span className="relative z-10 p-6 font-display text-sm italic tracking-wide text-text-inverse-dim md:p-8">
          {label}
        </span>
      )}
    </div>
  );
}
