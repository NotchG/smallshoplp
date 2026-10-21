import type { ReactNode } from "react";
import type { ArtKey } from "@/content";

// Six flat record-sleeve drawings (design brief §6). One style throughout:
// drinks side-on in their glass, plates top-down; flat shapes, no outlines,
// no gradients, no text. Colours are the illustration inks from globals.css.

type Ink =
  | "kopi" | "krema" | "susu" | "krim" | "kuning" | "nasi" | "timun"
  | "katsu" | "kentang" | "kayu" | "es";

const ink = (name: Ink, opacity?: number) => ({
  fill: `var(--ink-${name})`,
  ...(opacity !== undefined ? { fillOpacity: opacity } : {}),
});
const col = (name: "arang" | "batu" | "beton" | "kapur", opacity?: number) => ({
  fill: `var(--color-${name})`,
  ...(opacity !== undefined ? { fillOpacity: opacity } : {}),
});

// A ring with a hole (top-down doughnut), as one even-odd path.
const ring = (cx: number, cy: number, r: number, hole: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z` +
  `M${cx - hole} ${cy}a${hole} ${hole} 0 1 0 ${2 * hole} 0a${hole} ${hole} 0 1 0 ${-2 * hole} 0Z`;

function MontBlanc() {
  return (
    <>
      <ellipse cx="100" cy="179" rx="38" ry="4" style={col("arang", 0.35)} />
      <path d="M66 30H134L128 176H72Z" style={ink("es", 0.22)} />
      <path d="M71.2 120H128.8L126.7 171H73.3Z" style={ink("kopi")} />
      <path d="M69.7 84H130.3L128.8 120H71.2Z" style={ink("susu")} />
      <path d="M68.4 52Q100 34 131.6 52L130.3 84H69.7Z" style={ink("krim")} />
      <circle cx="90" cy="47" r="2.2" style={ink("krema")} />
      <circle cx="102" cy="44" r="2.2" style={ink("krema")} />
      <circle cx="113" cy="47" r="2" style={ink("krema")} />
      <rect x="76" y="40" width="5" height="126" style={ink("krim", 0.28)} />
    </>
  );
}

function EspressoRock() {
  return (
    <>
      <ellipse cx="100" cy="165" rx="54" ry="4" style={col("arang", 0.18)} />
      <path d="M50 78H150L145 162H55Z" style={col("batu", 0.16)} />
      <path d="M53 104H147L144.2 150H55.8Z" style={ink("kopi")} />
      <path d="M53 104H147L146.5 113H53.5Z" style={ink("krema")} />
      <rect x="62" y="90" width="28" height="28" transform="rotate(-10 76 104)" style={ink("es", 0.9)} />
      <rect x="93" y="83" width="30" height="30" transform="rotate(8 108 98)" style={ink("es", 0.9)} />
      <rect x="123" y="95" width="22" height="22" transform="rotate(-5 134 106)" style={ink("es", 0.9)} />
      <path d="M55.8 150H144.2L145 162H55Z" style={col("batu", 0.28)} />
      <rect x="57" y="84" width="4" height="60" style={ink("krim", 0.6)} />
    </>
  );
}

function EsKopiSignature() {
  return (
    <>
      <rect x="112" y="4" width="7" height="110" transform="rotate(10 115 59)" style={ink("krim")} />
      <path d="M68 28H132L127 178H73Z" style={ink("es", 0.2)} />
      <path d="M70.5 58H129.5L125.7 172H74.3Z" style={ink("susu")} />
      <path d="M70.5 58H129.5L125.7 172H74.3Z" style={ink("krema", 0.62)} />
      <path d="M70.5 58H129.5L129 75H71Z" style={ink("kopi", 0.5)} />
      <rect x="78" y="66" width="22" height="22" transform="rotate(-8 89 77)" style={ink("es", 0.6)} />
      <rect x="102" y="78" width="24" height="24" transform="rotate(10 114 90)" style={ink("es", 0.6)} />
      <rect x="83" y="100" width="20" height="20" transform="rotate(4 93 110)" style={ink("es", 0.6)} />
      <rect x="75" y="36" width="4" height="132" style={ink("krim", 0.25)} />
    </>
  );
}

function NasiGoreng() {
  const slices: [number, number][] = [
    [40, 122],
    [53, 144],
    [73, 159],
  ];
  return (
    <>
      <circle cx="100" cy="100" r="80" style={ink("krim")} />
      <circle cx="100" cy="100" r="63" style={ink("susu", 0.6)} />
      <path
        d="M56 106C52 80 74 60 100 62C126 60 146 80 142 106C144 132 122 150 96 148C72 150 54 132 56 106Z"
        style={ink("nasi")}
      />
      {[
        [76, 96],
        [88, 126],
        [110, 134],
        [70, 118],
        [124, 116],
        [96, 80],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.6" style={ink("kopi", 0.35)} />
      ))}
      <path
        d="M95 84C96 66 118 60 132 70C148 78 146 100 131 107C118 114 97 108 95 96Z"
        style={ink("krim")}
      />
      <circle cx="119" cy="88" r="11" style={ink("kuning")} />
      {slices.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="11" style={ink("timun")} />
          <circle cx={x} cy={y} r="6" style={ink("krim", 0.55)} />
        </g>
      ))}
    </>
  );
}

function ChickenKatsu() {
  const fries: [number, number, number, number][] = [
    // x, y, height, angle (rotated around the stick's centre)
    [116, 40, 46, 28],
    [128, 38, 48, 16],
    [141, 46, 42, 38],
    [106, 50, 40, 50],
    [134, 58, 40, 66],
    [122, 54, 44, 6],
  ];
  return (
    <>
      <circle cx="100" cy="100" r="80" style={ink("krim")} />
      <circle cx="100" cy="100" r="63" style={ink("susu", 0.6)} />
      {fries.map(([x, y, h, a], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="8"
          height={h}
          transform={`rotate(${a} ${x + 4} ${y + h / 2})`}
          style={ink(i % 2 ? "kentang" : "kuning", i % 2 ? 1 : 0.85)}
        />
      ))}
      <g transform="rotate(-18 86 120)">
        <rect x="40" y="97" width="92" height="46" rx="15" style={ink("katsu")} />
        <rect x="44" y="101" width="84" height="12" rx="6" style={ink("kentang", 0.45)} />
        {[62, 85, 108].map((x) => (
          <rect key={x} x={x} y="95" width="3" height="50" style={ink("krim")} />
        ))}
      </g>
      <circle cx="144" cy="140" r="17" style={ink("susu")} />
      <circle cx="144" cy="140" r="11" style={ink("kopi")} />
    </>
  );
}

function DonatKampung() {
  const rings: [number, number][] = [
    [66, 76],
    [136, 80],
    [100, 140],
  ];
  // Sugar: fixed, evenly spread dots on each ring (no randomness, so it renders the same).
  const sugar = rings.flatMap(([cx, cy], r) =>
    Array.from({ length: 16 }, (_, i) => {
      const a = ((i * 360) / 16 + r * 11 + (i % 3) * 7) * (Math.PI / 180);
      const d = [18, 23.5, 28][i % 3];
      return [Math.round((cx + d * Math.cos(a)) * 10) / 10, Math.round((cy + d * Math.sin(a)) * 10) / 10];
    }),
  );
  return (
    <>
      {rings.map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <path d={ring(cx, cy, 34, 11)} fillRule="evenodd" style={ink("kayu")} />
          <path d={ring(cx, cy, 31, 14)} fillRule="evenodd" style={ink("katsu")} />
        </g>
      ))}
      {sugar.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.7" style={ink("krim", 0.9)} />
      ))}
    </>
  );
}

const ART: Record<ArtKey, () => ReactNode> = {
  montBlanc: MontBlanc,
  espressoRock: EspressoRock,
  esKopiSignature: EsKopiSignature,
  nasiGoreng: NasiGoreng,
  chickenKatsu: ChickenKatsu,
  donatKampung: DonatKampung,
};

export default function SleeveArt({ art, label }: { art: ArtKey; label: string }) {
  const Drawing = ART[art];
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label={label} focusable="false">
      <Drawing />
    </svg>
  );
}
