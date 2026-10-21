import type { BreadId } from "@/content";
import { ink } from "@/components/Cake";

// Bread family: viewBox 96×96, same viewpoint and light as the cakes, flat tones, no outlines.
const crust = { light: "#E2A15C", mid: "#C8803F", dark: "#A9622B", sponge: "#E9C99A" };

const ell = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} a${rx} ${ry} 0 1 0 ${2 * rx} 0 a${rx} ${ry} 0 1 0 ${-2 * rx} 0 Z`;

function Ground({ cx = 48, cy = 78, rx = 36 }: { cx?: number; cy?: number; rx?: number }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry="6" fill="#000" opacity="0.08" />;
}

function RotiManis() {
  return (
    <>
      <Ground />
      <ellipse cx="48" cy="62" rx="36" ry="15" fill={crust.dark} />
      <path d="M12 61 C12 26 84 26 84 61 Z" fill={crust.mid} />
      <ellipse cx="38" cy="43" rx="17" ry="7" fill={crust.light} transform="rotate(-12 38 43)" />
      <ellipse cx="51" cy="37" rx="11" ry="4.6" fill={ink.choc2} />
      <ellipse cx="49" cy="36" rx="5" ry="2" fill={ink.choc} />
    </>
  );
}

function RotiTawarMini() {
  // A small loaf with a rounded top: straight sides, darker baked base, a pale split on top.
  return (
    <>
      <Ground />
      <path d="M16 75 V50 C16 30 30 22 48 22 C66 22 80 30 80 50 V75 Q80 78 77 78 H19 Q16 78 16 75 Z" fill={crust.mid} />
      <path d="M16 66 H80 V75 Q80 78 77 78 H19 Q16 78 16 75 Z" fill={crust.dark} />
      <path d="M21 50 C21 34 31 27 44 26 C35 32 30 40 29 52 Z" fill={crust.light} />
      <path d="M33 31 C40 27 56 27 63 31 C56 33 40 33 33 31 Z" fill={crust.sponge} />
      <path d="M66 66 V27 C74 30 80 38 80 50 V66 Z" fill="#000" opacity="0.1" />
    </>
  );
}

function Doughnut() {
  const sprinkles: [number, number, number, string][] = [
    [30, 47, -30, ink.krim], [40, 41, 20, ink.oranye], [58, 41, -50, ink.cherryHi],
    [66, 48, 35, ink.krim], [62, 58, -10, ink.oranye], [34, 57, 60, ink.cherryHi],
    [48, 61, -40, ink.krim], [52, 44, 75, ink.krim],
  ];
  return (
    <>
      <Ground />
      <path d={`${ell(48, 58, 36, 19)} ${ell(48, 56, 10, 5)}`} fill={crust.mid} fillRule="evenodd" />
      <path d={`${ell(48, 52, 32, 16)} ${ell(48, 52, 12, 6)}`} fill={ink.choc} fillRule="evenodd" />
      <circle cx="24" cy="58" r="4.5" fill={ink.choc} />
      <circle cx="37" cy="65" r="4.5" fill={ink.choc} />
      <circle cx="56" cy="66" r="4" fill={ink.choc} />
      <circle cx="70" cy="60" r="4.5" fill={ink.choc} />
      <ellipse cx="34" cy="44" rx="8" ry="3" fill={ink.choc2} transform="rotate(-18 34 44)" />
      {sprinkles.map(([x, y, r, c]) => (
        <rect key={`${x}-${y}`} x={x - 3} y={y - 1} width="6" height="2.2" rx="1.1" fill={c} transform={`rotate(${r} ${x} ${y})`} />
      ))}
    </>
  );
}

function BoluGulung() {
  const stripes = [20, 30, 40, 50, 60];
  return (
    <>
      <Ground rx={40} />
      <rect x="8" y="36" width="80" height="42" rx="7" fill="#FFFFFF" opacity="0.55" />
      <rect x="14" y="44" width="58" height="28" rx="5" fill={ink.choc2} />
      {stripes.map((x) => (
        <path key={x} d={`M${x} 44 l6 0 l-4 28 l-5 0 Z`} fill={ink.choc} />
      ))}
      <ellipse cx="72" cy="58" rx="8" ry="14" fill={crust.sponge} />
      <ellipse cx="72" cy="58" rx="5.6" ry="10" fill={ink.cream} />
      <ellipse cx="72.6" cy="58.4" rx="3.6" ry="6.4" fill={crust.sponge} />
      <ellipse cx="73" cy="58.6" rx="1.7" ry="3" fill={ink.cream} />
      <rect x="8" y="36" width="80" height="6" rx="3" fill="#FFFFFF" opacity="0.85" />
      <rect x="8" y="72" width="80" height="6" rx="3" fill="#FFFFFF" opacity="0.7" />
      <circle cx="28" cy="50" r="9.5" fill={ink.oranye} />
      <circle cx="28" cy="50" r="4.5" fill="none" stroke={ink.krim} strokeWidth="1.6" />
    </>
  );
}

export function BreadIcon({ id, label }: { id: BreadId; label: string }) {
  return (
    <svg viewBox="0 0 96 96" role="img" aria-label={label} data-mockup="">
      {id === "rotiManis" ? <RotiManis /> : null}
      {id === "rotiTawarMini" ? <RotiTawarMini /> : null}
      {id === "doughnut" ? <Doughnut /> : null}
      {id === "bolu" ? <BoluGulung /> : null}
    </svg>
  );
}

// Two stacked boxes, "Boluamor" on "Snow Bolu" (packaging seen in the photos).
export function BoluBoxes({ names, label, className = "" }: { names: string[]; label: string; className?: string }) {
  const [top, bottom] = names;
  const font = { fontFamily: "var(--font-fredoka)", fontWeight: 600 } as const;
  return (
    <svg viewBox="0 0 280 200" role="img" aria-label={label} data-mockup="" className={className}>
      <ellipse cx="140" cy="188" rx="124" ry="9" fill="#000" opacity="0.08" />
      {/* bottom box */}
      <path d="M24 116 H256 L244 100 H36 Z" fill="#F3F5F6" />
      <rect x="24" y="116" width="232" height="70" rx="3" fill="#FFFFFF" />
      <rect x="24" y="134" width="232" height="32" fill={ink.krim} />
      <text x="140" y="157" textAnchor="middle" fontSize="20" fill={ink.kakao} style={font}>
        {bottom}
      </text>
      <rect x="226" y="116" width="30" height="70" fill="#000" opacity="0.05" />
      {/* top box */}
      <path d="M58 50 H222 L212 36 H68 Z" fill="#FBF4EA" />
      <rect x="58" y="50" width="164" height="58" rx="3" fill="#FFFFFF" />
      <rect x="58" y="62" width="164" height="32" fill="#5B3427" />
      <text x="140" y="85" textAnchor="middle" fontSize="20" fill={ink.krim} style={font}>
        {top}
      </text>
      <rect x="196" y="50" width="26" height="58" fill="#000" opacity="0.05" />
      <circle cx="236" cy="104" r="13" fill={ink.oranye} />
      <circle cx="236" cy="104" r="6" fill="none" stroke={ink.krim} strokeWidth="1.8" />
    </svg>
  );
}
