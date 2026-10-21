import { c } from "@/lib/palette";

// Line drawing (syrup strokes, 1.5px) of the Turkish tea glass: a tulip glass sitting in an
// ornate metal holder with a handle and a lid, on a small saucer. The tea is the only fill.
const s = {
  stroke: c.syrup,
  strokeWidth: 1.5,
  vectorEffect: "non-scaling-stroke" as const,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

// A row of small arches for the holder's pressed band.
function arches(x0: number, x1: number, y: number, n: number, h: number) {
  const w = (x1 - x0) / n;
  let d = `M${x0} ${y}`;
  for (let i = 0; i < n; i++) {
    const xa = x0 + i * w;
    d += ` Q${(xa + w / 2).toFixed(1)} ${y - h} ${(xa + w).toFixed(1)} ${y}`;
  }
  return d;
}

export default function TeaGlass({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 0 260 380" className={className} role="img" aria-label={label}>
      {/* saucer */}
      <ellipse cx="128" cy="344" rx="104" ry="17" fill="none" {...s} />
      <ellipse cx="128" cy="340" rx="64" ry="8" fill="none" {...s} />

      {/* tea inside the tulip glass (drawn first, the holder covers its lower part) */}
      <path
        d="M90 144 C 88 166, 96 184, 98 200 C 100 216, 86 232, 86 262 L 170 262 C 170 232, 156 216, 158 200 C 160 184, 168 166, 166 144 Z"
        fill={c.kunafe}
      />
      <path d="M90 144 Q128 150 166 144" fill="none" {...s} />

      {/* the glass */}
      <path
        d="M84 104 C 84 136, 98 176, 98 200 C 98 216, 84 232, 84 262"
        fill="none"
        {...s}
      />
      <path
        d="M172 104 C 172 136, 158 176, 158 200 C 158 216, 172 232, 172 262"
        fill="none"
        {...s}
      />
      <ellipse cx="128" cy="104" rx="44" ry="6" fill="none" {...s} />

      {/* lid */}
      <path d="M80 100 Q128 52 176 100" fill={c.room} {...s} />
      <path d="M80 100 H176" fill="none" {...s} />
      <circle cx="128" cy="64" r="7" fill={c.room} {...s} />
      <path d="M100 86 Q128 70 156 86" fill="none" {...s} />

      {/* holder: cup with pressed band, foot and handle */}
      <path
        d="M78 246 Q76 300 98 322 L158 322 Q180 300 178 246 Z"
        fill={c.room}
        {...s}
      />
      <ellipse cx="128" cy="246" rx="50" ry="6" fill={c.room} {...s} />
      <path d={arches(84, 172, 272, 8, 9)} fill="none" {...s} />
      <path d="M86 288 Q128 296 170 288" fill="none" {...s} />
      <path d="M106 322 L102 334 L154 334 L150 322" fill={c.room} {...s} />
      <path d="M178 256 C 214 254, 214 304, 170 306" fill="none" {...s} />
      <path d="M177 266 C 200 266, 200 296, 172 296" fill="none" {...s} />
    </svg>
  );
}
