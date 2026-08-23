import clsx from "clsx";

export default function Eyebrow({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-red",
        className
      )}
    >
      <span aria-hidden className="h-px w-8 bg-red" />
      {children}
    </span>
  );
}
