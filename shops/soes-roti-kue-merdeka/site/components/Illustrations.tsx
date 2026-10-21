import type { ReactNode } from "react";

// Flat product illustrations (design brief §6): flat fills, one darker shade and one white
// highlight per object, no outlines, no gradients. Text only on the box roundel.
// No owner photos exist yet, so these stand in until the owner sends real ones.

const GOLD = "#C98A3E";
const CRUST = "#9A5F26";
const GLASS = "#EEF1F2";
const STEEL = "#BFC3C6";
const STEEL_DARK = "#A3A9AD";
const PINTU = "#B4470F";

// Deterministic scatter, so server and client render the same markup.
function rng(seed: number) {
  let s = seed % 2147483647;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}
const r1 = (n: number) => Math.round(n * 10) / 10;

/* ---------------- Soes ---------------- */

export const FILLINGS = {
  rum: "#F2C75C",
  vanila: "#F3E3B0",
  cokelat: "#6B3A1E",
  durian: "#E2D27C",
} as const;
export type Filling = keyof typeof FILLINGS;

function cupPath() {
  // shallow fluted paper cup with a pleated rim
  let d = "M48 182";
  for (let x = 48; x < 192; x += 8) d += `L${x + 4} 177L${x + 8} 182`;
  return `${d}L178 226H62Z`;
}
function cupFlutes() {
  const n = 12;
  const out: string[] = [];
  for (let i = 0; i < n; i += 2) {
    const t0 = 48 + (144 / n) * i, t1 = 48 + (144 / n) * (i + 1);
    const b0 = 62 + (116 / n) * i, b1 = 62 + (116 / n) * (i + 1);
    out.push(`M${r1(t0)} 182H${r1(t1)}L${r1(b1)} 226H${r1(b0)}Z`);
  }
  return out.join("");
}
const SUGAR: [number, number, number][] = [
  [80, 56, 2.6], [98, 40, 2.2], [118, 50, 2.6], [136, 32, 2.2], [152, 52, 2.6], [170, 64, 2.2],
  [96, 70, 2.2], [128, 68, 2.6], [112, 34, 2], [146, 76, 2], [74, 74, 2], [160, 40, 2], [64, 62, 1.8],
];

export function SoesIllus({ filling = "rum", label }: { filling?: Filling; label: string }) {
  const f = FILLINGS[filling];
  return (
    <svg viewBox="0 0 240 232" role="img" aria-label={label}>
      {/* bottom half of the choux shell */}
      <path d="M44 178C40 158 50 142 70 138C86 135 100 140 120 137C140 134 156 136 172 139C190 143 200 160 196 178Z" fill={GOLD} />
      <path d="M172 139C190 143 200 160 196 178H176C182 164 182 150 172 139Z" fill={CRUST} />
      {/* custard, thick and bulging over the cut */}
      <path d="M52 142C46 124 64 108 90 106C104 100 136 100 150 106C176 108 194 124 188 142C170 152 70 152 52 142Z" fill={f} />
      <path d="M150 146C151 156 156 160 160 156C163 152 162 148 160 144Z" fill={f} />
      <ellipse cx="94" cy="116" rx="18" ry="5" fill="#fff" opacity=".5" />
      {/* paper cup */}
      <path d={cupPath()} fill="#fff" />
      <path d={cupFlutes()} fill="#F1E7DA" />
      {/* the lid, lifted and tipped back, resting on the custard at the right */}
      <g transform="translate(0 8) rotate(10 188 92)">
        <path d="M52 84C42 66 52 46 72 44C78 28 98 18 118 24C134 14 158 18 164 34C184 38 196 60 188 84C160 94 80 94 52 84Z" fill={GOLD} />
        <path d="M150 20C160 22 164 28 164 34C184 38 196 60 188 84C182 86 176 87 170 88C178 66 170 42 150 20Z" fill={CRUST} opacity=".45" />
        <path d="M52 84C80 94 160 94 188 84C186 94 176 100 160 102C132 106 106 106 80 102C64 100 54 94 52 84Z" fill={CRUST} />
        {SUGAR.map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="#fff" />
        ))}
      </g>
    </svg>
  );
}

/* ---------------- Abon jar ---------------- */

export type AbonVariant = "pedas" | "manis" | "sapi";

export function AbonJar({ variant, label, id }: { variant: AbonVariant; label: string; id: string }) {
  const rand = rng(variant === "pedas" ? 11 : variant === "manis" ? 23 : 37);
  const top = variant === "manis" ? 98 : variant === "sapi" ? 84 : 90;
  const strands: string[] = [];
  for (let i = 0; i < 46; i++) {
    const x = 26 + rand() * 108;
    const y = top + 8 + rand() * (214 - top - 8);
    const a = rand() * Math.PI;
    const l = 5 + rand() * 6;
    strands.push(`M${r1(x)} ${r1(y)}l${r1(Math.cos(a) * l)} ${r1(Math.sin(a) * l)}`);
  }
  const flecks: [number, number][] = [];
  if (variant === "pedas") {
    for (let i = 0; i < 18; i++) flecks.push([r1(28 + rand() * 104), r1(top + 10 + rand() * (208 - top - 10))]);
  }
  const fill = variant === "sapi" ? "#7A3F1C" : "#8A4B22";
  return (
    <svg viewBox="0 0 160 230" role="img" aria-label={label}>
      <defs>
        <clipPath id={`${id}-body`}>
          <path d="M22 62C22 48 32 44 48 44H112C128 44 138 48 138 62V206C138 218 130 224 118 224H42C30 224 22 218 22 206Z" />
        </clipPath>
      </defs>
      {/* glass */}
      <rect x="34" y="32" width="92" height="14" fill={GLASS} />
      <path d="M22 62C22 48 32 44 48 44H112C128 44 138 48 138 62V206C138 218 130 224 118 224H42C30 224 22 218 22 206Z" fill={GLASS} />
      {/* abon */}
      <g clipPath={`url(#${id}-body)`}>
        <path d={`M20 ${top}C34 ${top - 8} 46 ${top + 4} 60 ${top - 4}C74 ${top - 12} 86 ${top + 2} 100 ${top - 6}C114 ${top - 12} 126 ${top} 140 ${top - 6}V226H20Z`} fill={fill} />
        <path d={strands.join("")} stroke="#5E2F14" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        {flecks.map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="3.2" height="2.2" rx="1" fill={PINTU} />
        ))}
      </g>
      {/* glass highlight */}
      <rect x="30" y="58" width="8" height="140" rx="4" fill="#fff" opacity=".55" />
      {/* steel lid */}
      <rect x="24" y="6" width="112" height="30" rx="8" fill={STEEL} />
      <rect x="24" y="28" width="112" height="8" rx="3" fill={STEEL_DARK} />
      <rect x="36" y="12" width="40" height="4" rx="2" fill="#fff" opacity=".7" />
    </svg>
  );
}

/* ---------------- Telur asin ---------------- */

export function TelurAsin({ label }: { label: string }) {
  const shell = "#CFE0D8";
  const shade = "#B3CABF";
  return (
    <svg viewBox="0 0 240 160" role="img" aria-label={label}>
      {/* whole duck egg */}
      <path d="M80 12C110 12 130 54 130 90C130 122 108 144 80 144C52 144 30 122 30 90C30 54 50 12 80 12Z" fill={shell} />
      <path d="M102 22C120 40 130 66 130 90C130 122 108 144 80 144C104 136 118 116 118 88C118 60 112 38 102 22Z" fill={shade} />
      <ellipse cx="60" cy="56" rx="8" ry="17" transform="rotate(-18 60 56)" fill="#fff" opacity=".75" />
      {/* halved egg */}
      <path d="M124 108C124 136 148 152 178 152C208 152 232 136 232 108Z" fill={shell} />
      <path d="M204 108H232C232 132 214 150 188 152C206 144 208 128 204 108Z" fill={shade} />
      <ellipse cx="178" cy="108" rx="54" ry="17" fill={shell} />
      <ellipse cx="178" cy="108" rx="48" ry="13.5" fill="#fff" />
      <ellipse cx="178" cy="108" rx="20" ry="8" fill="#E07A26" />
      <ellipse cx="172" cy="105.5" rx="6" ry="2" fill="#fff" opacity=".6" />
    </svg>
  );
}

/* ---------------- Clear tub ---------------- */

export type TubVariant = "mete" | "warna" | "bawang" | "bulat";

const CASHEW = "M-11 1C-13-7-5-12 3-10C10-8 13-1 11 6C9 3 5 1 0 3C-4 5-8 6-11 1Z";
const BUTTONS = [PINTU, "#E3B23C", "#5E8A6A", "#3F6E9E", "#FFFFFF"];
const TUB_SEED: Record<TubVariant, number> = { mete: 5, warna: 19, bawang: 41, bulat: 53 };

function tubContents(variant: TubVariant): ReactNode[] {
  const rand = rng(TUB_SEED[variant]);
  const items: ReactNode[] = [];
  let k = 0;
  if (variant === "mete") {
    for (let row = 0; row < 8; row++)
      for (let col = 0; col < 7; col++) {
        const x = 30 + col * 21 + (row % 2) * 10 + (rand() - 0.5) * 6;
        const y = 58 + row * 13.5 + (rand() - 0.5) * 4;
        const a = Math.round(rand() * 360);
        items.push(
          <path key={k++} d={CASHEW} transform={`translate(${r1(x)} ${r1(y)}) rotate(${a})`} fill={k % 4 === 0 ? "#D3AA6E" : "#E7C48F"} />,
        );
      }
  } else if (variant === "warna") {
    for (let row = 0; row < 8; row++)
      for (let col = 0; col < 9; col++) {
        const x = 27 + col * 16 + (row % 2) * 8 + (rand() - 0.5) * 3;
        const y = 56 + row * 13 + (rand() - 0.5) * 3;
        items.push(<circle key={k++} cx={r1(x)} cy={r1(y)} r="6.6" fill={BUTTONS[Math.floor(rand() * BUTTONS.length)]} />);
      }
  } else if (variant === "bawang") {
    // skin-on peanuts
    for (let row = 0; row < 10; row++)
      for (let col = 0; col < 10; col++) {
        const x = 26 + col * 14 + (row % 2) * 7 + (rand() - 0.5) * 4;
        const y = 54 + row * 10.6 + (rand() - 0.5) * 3;
        const a = Math.round(rand() * 180);
        items.push(
          <ellipse key={k++} cx={r1(x)} cy={r1(y)} rx="6.4" ry="4.4" transform={`rotate(${a} ${r1(x)} ${r1(y)})`} fill={rand() < 0.35 ? "#A9713F" : "#C9935A"} />,
        );
      }
  } else {
    // chocolate balls
    for (let row = 0; row < 7; row++)
      for (let col = 0; col < 8; col++) {
        const x = 28 + col * 18 + (row % 2) * 9 + (rand() - 0.5) * 2;
        const y = 58 + row * 15.5 + (rand() - 0.5) * 2;
        items.push(
          <g key={k++}>
            <circle cx={r1(x)} cy={r1(y)} r="8.2" fill={rand() < 0.4 ? "#4E2814" : "#6B3A1E"} />
            <circle cx={r1(x - 2.6)} cy={r1(y - 2.8)} r="1.9" fill="#fff" opacity=".4" />
          </g>,
        );
      }
  }
  return items;
}

export function Tub({ variant, label, id }: { variant: TubVariant; label: string; id: string }) {
  return (
    <svg viewBox="0 0 180 164" role="img" aria-label={label}>
      <defs>
        <clipPath id={`${id}-tub`}>
          <path d="M20 40H160L156 148C156 156 150 160 142 160H38C30 160 24 156 24 148Z" />
        </clipPath>
      </defs>
      <path d="M20 40H160L156 148C156 156 150 160 142 160H38C30 160 24 156 24 148Z" fill={GLASS} />
      <g clipPath={`url(#${id}-tub)`}>{tubContents(variant)}</g>
      <rect x="30" y="50" width="7" height="96" rx="3.5" fill="#fff" opacity=".6" />
      {/* lid */}
      <rect x="12" y="12" width="156" height="30" rx="7" fill="#E2E6E8" />
      <rect x="12" y="34" width="156" height="8" rx="3" fill="#C8CDD0" />
      <rect x="24" y="18" width="52" height="4" rx="2" fill="#fff" opacity=".8" />
    </svg>
  );
}

/* ---------------- Clear pack (plastic pouch with a crimped seal) ---------------- */

export type PackVariant = "brem" | "kecik" | "tengteng";
const PACK_BODY = "M14 30H136L140 178C140 188 134 194 124 194H26C16 194 10 188 10 178Z";

function packContents(variant: PackVariant): ReactNode[] {
  const rand = rng(variant === "brem" ? 7 : variant === "kecik" ? 29 : 61);
  const items: ReactNode[] = [];
  let k = 0;
  if (variant === "brem") {
    // cream tablets, piled loosely in the pack
    for (let row = 0; row < 8; row++)
      for (let col = 0; col < 4; col++) {
        const x = 8 + col * 34 + (row % 2) * 12 + (rand() - 0.5) * 10;
        const y = 50 + row * 18 + (rand() - 0.5) * 6;
        const a = Math.round((rand() - 0.5) * 70);
        items.push(
          <rect key={k++} x={r1(x)} y={r1(y)} width="30" height="15" rx="4" transform={`rotate(${a} ${r1(x + 15)} ${r1(y + 7.5)})`} fill={rand() < 0.35 ? "#E2CDA0" : "#F2E5C6"} />,
        );
      }
  } else if (variant === "kecik") {
    // small round biscuits
    for (let row = 0; row < 8; row++)
      for (let col = 0; col < 7; col++) {
        const x = 20 + col * 19 + (row % 2) * 9.5 + (rand() - 0.5) * 2;
        const y = 60 + row * 17 + (rand() - 0.5) * 2;
        items.push(
          <g key={k++}>
            <circle cx={r1(x)} cy={r1(y)} r="8.6" fill={rand() < 0.35 ? "#C48A3E" : "#DDAA5C"} />
            <circle cx={r1(x)} cy={r1(y)} r="2" fill="#B07832" />
          </g>,
        );
      }
  } else {
    // rice crackers bound with palm sugar
    for (let row = 0; row < 5; row++)
      for (let col = 0; col < 4; col++) {
        const x = 26 + col * 33 + (row % 2) * 16 - 6;
        const y = 66 + row * 28;
        items.push(<circle key={k++} cx={x} cy={y} r="15" fill={rand() < 0.4 ? "#8E5424" : "#AD6C32"} />);
        for (let g = 0; g < 4; g++)
          items.push(
            <ellipse key={k++} cx={r1(x - 8 + rand() * 16)} cy={r1(y - 8 + rand() * 16)} rx="2.2" ry="1.3" fill="#EBD2A4" />,
          );
      }
  }
  return items;
}

export function Pack({ variant, label, id }: { variant: PackVariant; label: string; id: string }) {
  const crimps: string[] = [];
  for (let x = 16; x <= 132; x += 6) crimps.push(`M${x} 11v16`);
  return (
    <svg viewBox="0 0 150 200" role="img" aria-label={label}>
      <defs>
        <clipPath id={`${id}-pack`}>
          <path d={PACK_BODY} />
        </clipPath>
      </defs>
      <path d={PACK_BODY} fill={GLASS} />
      <g clipPath={`url(#${id}-pack)`}>{packContents(variant)}</g>
      <rect x="20" y="42" width="7" height="136" rx="3.5" fill="#fff" opacity=".6" />
      {/* crimped heat seal */}
      <rect x="8" y="6" width="134" height="26" rx="3" fill="#E2E6E8" />
      <path d={crimps.join("")} stroke="#C8CDD0" strokeWidth="1.6" />
    </svg>
  );
}

/* ---------------- Merdeka box stack ---------------- */

function Box({ x, y, w, h, fill }: { x: number; y: number; w: number; h: number; fill: string }) {
  const lid = 24;
  const cx = x + w / 2;
  const cy = y + lid + (h - lid) / 2;
  return (
    <g>
      <rect x={x} y={y + lid} width={w} height={h - lid} fill={fill} />
      <rect x={x + w - 9} y={y + lid} width="9" height={h - lid} fill="#E2B597" />
      <rect x={x - 5} y={y} width={w + 10} height={lid} rx="3" fill={fill} />
      <rect x={x - 5} y={y + lid - 5} width={w + 10} height="5" fill="#E2B597" />
      {/* printed roundel, as on the shop's boxes */}
      <circle cx={cx - 4} cy={cy} r="40" fill="#FBF3E6" />
      <text
        x={cx - 4}
        y={cy + 3}
        textAnchor="middle"
        fontSize="22"
        fill="#7B3B1A"
        style={{ fontFamily: "var(--font-display)" }}
        aria-hidden="true"
      >
        Merdeka
      </text>
      <text
        x={cx - 3}
        y={cy + 19}
        textAnchor="middle"
        fontSize="6.6"
        fontWeight="800"
        letterSpacing="1.3"
        fill={PINTU}
        style={{ fontFamily: "var(--font-body)", fontStretch: "112%" }}
        aria-hidden="true"
      >
        SOES · ROTI · KUE
      </text>
    </g>
  );
}

export function BoxStack({ label, id }: { label: string; id: string }) {
  const dots = `url(#${id}-dots)`;
  return (
    <svg viewBox="0 0 400 268" role="img" aria-label={label}>
      <defs>
        <pattern id={`${id}-dots`} width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill="#F5D5BF" />
          <circle cx="4" cy="4" r="1.9" fill="#fff" opacity=".85" />
          <circle cx="12" cy="12" r="1.9" fill="#fff" opacity=".85" />
        </pattern>
      </defs>
      <ellipse cx="200" cy="262" rx="196" ry="6" fill="#24170E" opacity=".08" />
      <Box x={22} y={140} w={172} h={120} fill={dots} />
      <Box x={206} y={140} w={172} h={120} fill={dots} />
      <Box x={114} y={20} w={172} h={120} fill={dots} />
    </svg>
  );
}
