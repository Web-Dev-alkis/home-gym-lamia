"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import clsx from "clsx";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export default function MagneticButton({
  href,
  children,
  variant = "solid",
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={clsx(
        "group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] transition-[transform,background-color,color] duration-300 ease-out will-change-transform",
        variant === "solid"
          ? "bg-gold text-ink hover:bg-gold-soft"
          : "border border-line-strong text-paper hover:border-gold hover:text-gold",
        className
      )}
    >
      <span>{children}</span>
      <svg
        aria-hidden
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        <path
          d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
