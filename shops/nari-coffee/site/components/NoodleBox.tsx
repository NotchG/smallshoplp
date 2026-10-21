// Mie Blenger, after the window poster: an open takeaway box heaped with noodles and a
// fork stuck in. One drawing, only the sauce colour changes. No toppings invented.
// viewBox 160×140, flat fills, one 2px ink line.
const INK = "#15171c";
const BOX = "#ffffff";

export const sauces = {
  original: "#e2b65a",
  kari: "#d99a1e",
  rendang: "#7a3a1e",
} as const;

const line = {
  stroke: INK,
  strokeWidth: 2,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

export default function NoodleBox({
  sauce,
  label,
  className,
}: {
  sauce: keyof typeof sauces;
  label: string;
  className?: string;
}) {
  const fill = sauces[sauce];
  return (
    <svg viewBox="0 0 160 140" role="img" aria-label={label} className={className}>
      {/* back wall of the open box */}
      <path d="M52 70 L58 50 H102 L108 70 Z" fill={BOX} {...line} />
      {/* fork handle, its head buried in the noodles */}
      <path d="M86 56 L119 10 L125 14 L92 60 Z" fill={BOX} {...line} />
      {/* the heap of noodles, with wavy strands */}
      <path d="M44 70 C46 53 61 42 80 42 C99 42 114 53 116 70 Z" fill={fill} {...line} />
      <path
        d="M52 64 q4 -5 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 M60 54 q4 -5 8 0 t8 0 t8 0 t8 0 t8 0"
        fill="none"
        {...line}
      />
      {/* side flaps folded open */}
      <path d="M40 70 L20 51 L50 57 Z" fill={BOX} {...line} />
      <path d="M120 70 L140 51 L110 57 Z" fill={BOX} {...line} />
      {/* front of the box */}
      <path d="M40 70 H120 L110 132 H50 Z" fill={BOX} {...line} />
    </svg>
  );
}
