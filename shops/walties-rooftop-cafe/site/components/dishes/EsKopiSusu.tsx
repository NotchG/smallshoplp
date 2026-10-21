import { c } from "@/lib/palette";
import { hex } from "./CookiesCream";

// Es Kopi Susu Gula Aren from above, on a hexagonal wooden coaster: palm-sugar ring at the
// edge, milk-coffee centre with a milk swirl, ice cubes and a straw.
export default function EsKopiSusu() {
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="Ilustrasi gelas es kopi susu gula aren dengan es batu dan sedotan, dilihat dari atas">
      <polygon points={hex(160, 120, 100)} fill={c.kayu} />
      <circle cx="160" cy="120" r="80" fill={c.krem} fillOpacity="0.9" />
      <circle cx="160" cy="120" r="73" fill={c.kayu} />
      <circle cx="160" cy="120" r="73" fill={c.malam} fillOpacity="0.25" />
      <circle cx="160" cy="120" r="60" fill={c.krem} />
      <circle cx="160" cy="120" r="60" fill={c.kayu} fillOpacity="0.52" />
      <path
        d="M160 120c6-4 12 2 9 9-4 9-17 9-22 1-7-11 2-25 15-27 17-3 31 11 29 28-2 20-22 33-42 29"
        fill="none"
        stroke={c.krem}
        strokeWidth="5"
        strokeLinecap="round"
        strokeOpacity="0.9"
      />
      {[
        [128, 96, 14],
        [186, 92, -18],
        [184, 150, 30],
      ].map(([x, y, r], i) => (
        <rect
          key={i}
          x={x - 13}
          y={y - 13}
          width="26"
          height="26"
          rx="5"
          fill={c.krem}
          fillOpacity="0.42"
          stroke={c.krem}
          strokeOpacity="0.85"
          strokeWidth="1.5"
          transform={`rotate(${r} ${x} ${y})`}
        />
      ))}
      <circle cx="136" cy="152" r="8" fill={c.bata} />
      <circle cx="136" cy="152" r="4" fill={c.malam} />
    </svg>
  );
}
