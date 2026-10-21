import type { DrinkArtKind } from "@/content";
import { MarkStatic } from "./markShapes";

// The four starred drinks, drawn in the logo's line language: one tapered clear cup,
// round-cap Kopi line, flat fills, and the clinking-cups glyph printed on the cup as on
// the real cups (owner-4). viewBox 0 0 160 220; the cup stands on y = 212.
const KOPI = "var(--color-kopi)";
const ARANG = "var(--color-arang)";
const KAPUR = "var(--color-kapur)";
const ROTAN = "var(--color-rotan)";
const SUSU = "var(--color-susu)";
const KOPISUSU = "var(--color-kopisusu)";
const GULA = "var(--color-gulaaren)";
const COKELAT = "var(--color-cokelat)";

const BODY = "M27 68 L42.6 207.5 Q43.2 212 47.6 212 H112.4 Q116.8 212 117.4 207.5 L133 68 Z";
const SCOOP =
  "M35 65 C 32 44, 52 25, 80 25 C 108 25, 128 44, 125 65 Q 117.5 71.5 110 65 Q 102.5 71.5 95 65 Q 87.5 71.5 80 65 Q 72.5 71.5 65 65 Q 57.5 71.5 50 65 Q 42.5 71.5 35 65 Z";
const BAND_TOP = "M10 172 C 34 163, 56 179, 80 170 C 104 161, 126 177, 150 168 V 220 H10 Z";

function Fills({ kind }: { kind: DrinkArtKind }) {
  switch (kind) {
    case "sajenak":
      return (
        <>
          <rect x="0" y="72" width="160" height="150" fill={KOPISUSU} />
          <rect x="0" y="72" width="160" height="16" fill={SUSU} />
          {/* caramel drizzle down the inside wall */}
          <g fill="none" stroke={ROTAN} strokeWidth={5} strokeLinecap="round">
            <path d="M36 80 C 43 94, 34 106, 42 121 C 48 134, 40 147, 47 162" />
            <path d="M124 80 C 117 93, 126 104, 118 118 C 112 129, 120 140, 114 152" />
            <path d="M58 84 C 55 92, 61 98, 58 107" />
          </g>
        </>
      );
    case "sepintas":
      return (
        <>
          <rect x="0" y="77" width="160" height="150" fill={KOPISUSU} />
          <path d={BAND_TOP} fill={GULA} />
          {/* three ice cubes */}
          <g fill="rgb(246 244 239 / 0.55)" stroke={KOPI} strokeWidth={2.5} strokeLinejoin="round">
            <rect x="38" y="78" width="27" height="27" rx="5" transform="rotate(-12 51.5 91.5)" />
            <rect x="69" y="84" width="26" height="26" rx="5" transform="rotate(9 82 97)" />
            <rect x="98" y="77" width="25" height="25" rx="5" transform="rotate(-5 110.5 89.5)" />
          </g>
        </>
      );
    case "rumit":
      return (
        <>
          <rect x="0" y="72" width="160" height="150" fill={KOPISUSU} />
          {/* chocolate melting down from the scoop */}
          <path
            d="M30 72 H130 V80 C 122 80, 120 90, 114 90 C 108 90, 108 80, 98 80 C 90 80, 90 96, 82 96 C 74 96, 76 80, 66 80 C 58 80, 58 88, 50 88 C 42 88, 42 80, 30 80 Z"
            fill={COKELAT}
          />
        </>
      );
    case "butterscotch":
      return (
        <>
          <rect x="0" y="72" width="160" height="150" fill={SUSU} />
          <rect x="0" y="68" width="160" height="16" fill={KAPUR} />
          <path d={BAND_TOP} fill={ROTAN} />
        </>
      );
  }
}

function Topping({ kind }: { kind: DrinkArtKind }) {
  switch (kind) {
    case "sajenak":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d={SCOOP} fill={KAPUR} stroke={KOPI} strokeWidth={3} />
          <path d="M50 42 C 58 48, 64 37, 74 43 C 84 49, 91 38, 103 45" fill="none" stroke={ROTAN} strokeWidth={4.5} />
        </g>
      );
    case "rumit":
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d={SCOOP} fill={COKELAT} stroke={KOPI} strokeWidth={3} />
          <path d="M56 41 C 62 35, 70 32, 77 32" fill="none" stroke={KOPISUSU} strokeWidth={3.5} />
        </g>
      );
    case "butterscotch":
      return (
        <g>
          <path
            d="M27 66 C 30 47, 54 38, 80 38 C 106 38, 130 47, 133 66 Z"
            fill={KAPUR}
            stroke={KOPI}
            strokeWidth={3}
            strokeLinejoin="round"
          />
          <g fill={KOPI}>
            {[
              [52, 55], [61, 49], [70, 56], [79, 46], [88, 53], [97, 48], [106, 56], [114, 52], [65, 61],
              [84, 60], [101, 61], [74, 50], [92, 58], [57, 58], [110, 60],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r={1.7} />
            ))}
          </g>
        </g>
      );
    default:
      return null;
  }
}

export default function DrinkArt({ kind, label, className = "" }: { kind: DrinkArtKind; label: string; className?: string }) {
  const clip = `cup-body-${kind}`;
  return (
    <svg viewBox="0 0 160 220" role="img" aria-label={label} className={`drink-art ${className}`}>
      <defs>
        <clipPath id={clip}>
          <path d={BODY} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <Fills kind={kind} />
      </g>
      {/* the Sajenak glyph printed on the cup */}
      <g
        transform="translate(57 120) scale(0.29)"
        fill="none"
        stroke={ARANG}
        strokeWidth={7.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <MarkStatic />
      </g>
      <path d={BODY} fill="none" stroke={KOPI} strokeWidth={3} strokeLinejoin="round" />
      <rect x="21" y="60" width="118" height="8.5" rx="3.5" fill={KAPUR} stroke={KOPI} strokeWidth={3} />
      <Topping kind={kind} />
    </svg>
  );
}
