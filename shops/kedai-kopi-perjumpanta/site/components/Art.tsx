// Flat, crisp drawings of the kedai's food and drink (design brief §6).
// All drawn in a 120×120 space: 2px tinta outlines that don't scale, flat palette fills,
// one kain highlight, no gradients, people or brand marks.
import type { SVGProps } from "react";

const C = {
  limau: "#A8D33A",
  tinta: "#1D1B16",
  kain: "#F6F5EF",
  merah: "#B8261C",
  kayu: "#6B4A30",
  gula: "#B4692F",
};

// Shared outline style.
const line = {
  stroke: C.tinta,
  strokeWidth: 2,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

/**
 * The glass of Bandrek Susu on its lime saucer, with three wisps of steam.
 * `animated` adds the data hooks the hero's "served" timeline uses; the product band
 * copy has none, so CSS never hides it.
 */
export function BandrekParts({ animated = false }: { animated?: boolean }) {
  const hook = (name: string) => (animated ? { [`data-${name}`]: "" } : {});
  return (
    <>
      <g {...hook("saucer")}>
        <ellipse cx="60" cy="107.5" rx="44" ry="9" fill={C.limau} {...line} />
        <ellipse cx="60" cy="104" rx="44" ry="9" fill={C.limau} {...line} />
        <ellipse cx="60" cy="104" rx="25" ry="4.6" fill="none" {...line} strokeOpacity={0.45} />
      </g>
      <g {...hook("glass")}>
        {/* spoon: drawn first so the drink hides the part below the surface */}
        <path d="M68.5 62 L71.5 63.2 L97.5 13.5 L94.3 12 Z" fill={C.kain} {...line} />
        {/* the drink, the milk line on top, the sediment at the bottom */}
        <path d="M38.8 40 L81.2 40 L76 103 L44 103 Z" fill={C.gula} />
        <path d="M38.8 40 L81.2 40 L80.7 46.5 L39.3 46.5 Z" fill={C.kain} />
        <path d="M43.3 95 L76.7 95 L76 103 L44 103 Z" fill={C.kayu} />
        {/* empty glass above the drink */}
        <path d="M38 30 L82 30 L81.2 40 L38.8 40 Z" fill={C.kain} fillOpacity={0.4} />
        {/* one highlight down the glass */}
        <path d="M43 52 L45.6 88" fill="none" {...line} stroke={C.kain} />
        {/* outline and rim */}
        <path d="M38 30 L44 103 L76 103 L82 30" fill="none" {...line} />
        <ellipse cx="60" cy="30" rx="22" ry="3" fill="none" {...line} />
        <path d="M44 103 L76 103" fill="none" {...line} />
      </g>
      <g {...hook("steam")} fill="none" stroke={C.kain} strokeWidth={2.5} strokeLinecap="round" opacity={1}>
        <path d="M47 25 C43 20 51 16 47 10.5 C44.5 7 49 4.5 47 2" vectorEffect="non-scaling-stroke" opacity={0.8} />
        <path d="M59 23 C55 18 63 14 59 8.5 C56.5 5 61 2.5 59 0" vectorEffect="non-scaling-stroke" opacity={0.8} />
        <path d="M71 25 C67 20 75 16 71 10.5 C68.5 7 73 4.5 71 2" vectorEffect="non-scaling-stroke" opacity={0.8} />
      </g>
    </>
  );
}

type ArtProps = { label: string } & SVGProps<SVGSVGElement>;

function Frame({ label, children, ...rest }: ArtProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 120 120" role="img" aria-label={label} {...rest}>
      {children}
    </svg>
  );
}

export function ArtBandrek({ label, ...rest }: ArtProps) {
  return (
    <Frame label={label} {...rest}>
      <BandrekParts />
    </Frame>
  );
}

// A lontong cube seen from slightly above: front, top and side faces.
function Cube({ x, y, s = 15 }: { x: number; y: number; s?: number }) {
  const h = s * 0.8;
  const d = 5;
  return (
    <g>
      <path d={`M${x} ${y} L${x + d} ${y - d} L${x + s + d} ${y - d} L${x + s} ${y} Z`} fill={C.kain} {...line} />
      <path d={`M${x + s} ${y} L${x + s + d} ${y - d} L${x + s + d} ${y + h - d} L${x + s} ${y + h} Z`} fill={C.kain} {...line} />
      <rect x={x} y={y} width={s} height={h} fill={C.kain} {...line} />
    </g>
  );
}

export function ArtLontong({ label, ...rest }: ArtProps) {
  return (
    <Frame label={label} {...rest}>
      {/* lime plate at three-quarters */}
      <ellipse cx="60" cy="86" rx="54" ry="22" fill={C.limau} {...line} />
      <ellipse cx="60" cy="82.5" rx="54" ry="22" fill={C.limau} {...line} />
      <ellipse cx="60" cy="82.5" rx="41" ry="15.5" fill="none" {...line} strokeOpacity={0.45} />
      {/* sayur pool */}
      <path d="M26 82 C24 72 44 68 62 69 C82 70 96 75 94 84 C92 93 70 96 54 95 C38 94 27 90 26 82 Z" fill={C.gula} {...line} />
      {/* three lontong cubes */}
      <Cube x={50} y={68} />
      <Cube x={31} y={71} />
      <Cube x={41} y={83} />
      {/* half an egg */}
      <ellipse cx="80" cy="81" rx="12" ry="8.5" fill={C.kain} {...line} />
      <ellipse cx="80.5" cy="81" rx="5.5" ry="4" fill={C.gula} />
      {/* a dot of sambal */}
      <circle cx="69" cy="92" r="4.5" fill={C.merah} {...line} />
    </Frame>
  );
}

export function ArtIndomie({ label, ...rest }: ArtProps) {
  return (
    <Frame label={label} {...rest}>
      {/* lime plate */}
      <ellipse cx="60" cy="99" rx="52" ry="13" fill={C.limau} {...line} />
      {/* kain bowl */}
      <path d="M16 62 C16 86 35 100 60 100 C85 100 104 86 104 62 Z" fill={C.kain} {...line} />
      <ellipse cx="60" cy="62" rx="44" ry="12.5" fill={C.kain} {...line} />
      {/* broth */}
      <ellipse cx="60" cy="63" rx="38.5" ry="9.5" fill={C.gula} />
      {/* noodles */}
      <g fill="none" {...line}>
        <path d="M28 60 q4 -3.5 8 0 t8 0 t8 0 t8 0 t8 0" />
        <path d="M24 64.5 q4 -3.5 8 0 t8 0 t8 0 t8 0 t8 0 t8 0" />
        <path d="M32 69 q4 -3.5 8 0 t8 0 t8 0 t8 0" />
      </g>
      {/* egg */}
      <ellipse cx="80" cy="61.5" rx="11" ry="6" fill={C.kain} {...line} />
      <ellipse cx="80.5" cy="61.5" rx="4.8" ry="3.1" fill={C.gula} />
    </Frame>
  );
}

export function ArtBubur({ label, ...rest }: ArtProps) {
  return (
    <Frame label={label} {...rest}>
      {/* lime saucer */}
      <ellipse cx="60" cy="102" rx="44" ry="11" fill={C.limau} {...line} />
      <ellipse cx="60" cy="99" rx="44" ry="11" fill={C.limau} {...line} />
      {/* smaller kain bowl */}
      <path d="M27 70 C27 89 41 99 60 99 C79 99 93 89 93 70 Z" fill={C.kain} {...line} />
      <ellipse cx="60" cy="70" rx="33" ry="9.5" fill={C.kain} {...line} />
      {/* broth with beans */}
      <ellipse cx="60" cy="71" rx="28.5" ry="7" fill={C.gula} />
      <g fill={C.kayu}>
        <circle cx="42" cy="71" r="2.1" />
        <circle cx="48" cy="74.5" r="2.1" />
        <circle cx="50" cy="67.8" r="2.1" />
        <circle cx="68" cy="67.5" r="2.1" />
        <circle cx="73" cy="73.5" r="2.1" />
        <circle cx="78" cy="69.5" r="2.1" />
        <circle cx="64" cy="75" r="2.1" />
      </g>
      {/* coconut-milk swirl */}
      <path
        d="M53 71.5 C53 67.5 66 67.2 66 71 C66 74 57.5 74.2 57.5 71.4 C57.5 70 61 69.8 61.5 71"
        fill="none"
        stroke={C.kain}
        strokeWidth={2}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </Frame>
  );
}

export const artFor = {
  bandrek: ArtBandrek,
  lontong: ArtLontong,
  indomie: ArtIndomie,
  bubur: ArtBubur,
} as const;

export const artLabel = {
  bandrek: "Gambar segelas Bandrek Susu di atas tatakan hijau",
  lontong: "Gambar sepiring Lontong Medan dengan telur dan sambal",
  indomie: "Gambar semangkuk Indomie Rebus dengan telur",
  bubur: "Gambar semangkuk Bubur Kacang Hijo",
} as const;
