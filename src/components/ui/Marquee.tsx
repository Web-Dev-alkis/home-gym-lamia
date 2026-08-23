type MarqueeProps = {
  items: string[];
  className?: string;
};

export default function Marquee({ items, className }: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-display text-[clamp(2.5rem,7vw,6rem)] italic leading-none text-transparent [-webkit-text-stroke:1px_var(--color-paper-dim)]"
          >
            {item}
            <span aria-hidden className="text-gold not-italic [-webkit-text-stroke:0]">
              ✳
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
