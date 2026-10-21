import type { BunVariant } from "@/content";
import Sticker from "./Sticker";

// A bun sold one by one in the shop's clear printed bag, with a handwritten flavour sticker.
// Flat shapes, max three tones per object, no outlines. Drawn fresh, not traced from photos.

const C = {
  crust: "#C98B4A",
  crumb: "#F6DFA9",
  glint: "#DBA563",
  kuning: "#F2C94C",
  pandan: "#8DB360",
  daun: "#5C8740",
  tinta: "#3A2015",
  kayu: "#6B3F27",
  kotak: "#FFFCF6",
  kantong: "#D9531A",
};

const ROUND = {
  base: "M28 140C28 82 72 46 120 46C168 46 212 82 212 140C212 172 172 188 120 188C68 188 28 172 28 140Z",
  top: "M31 131C31 80 74 50 120 50C166 50 209 80 209 131C209 151 170 163 120 163C70 163 31 151 31 131Z",
  glint: "M60 96C66 72 92 58 118 58C102 66 86 80 79 101C75 111 58 108 60 96Z",
};
const FOLDED = {
  base: "M26 152C26 104 60 72 120 70C180 72 214 104 214 152C214 174 178 186 120 186C62 186 26 174 26 152Z",
  top: "M29 146C29 106 62 76 120 74C178 76 211 106 211 146C211 162 176 170 120 170C64 170 29 162 29 146Z",
  glint: "M58 106C66 90 88 82 112 80C96 88 84 98 78 110C74 116 56 116 58 106Z",
};

// A pillow bag hugging the bun, with the folded corners poking out at the top.
const BAG =
  "M26 200C18 196 14 190 15 180C17 150 16 110 30 82C26 64 22 48 16 30C34 34 48 38 60 40C80 26 102 18 120 18C138 18 160 26 180 40C192 38 206 34 224 28C218 46 214 64 210 82C224 110 223 150 225 180C226 190 222 196 214 200C180 206 60 206 26 200Z";

// [x, y, angle, length]
const SHAVINGS: [number, number, number, number][] = [
  [86, 76, -30, 18], [104, 66, 20, 16], [123, 73, -60, 20], [141, 64, 35, 14], [157, 77, -20, 18],
  [95, 92, 50, 16], [116, 89, -15, 20], [137, 93, 70, 14], [153, 98, -45, 16], [77, 103, 15, 14],
  [171, 91, 25, 12], [107, 106, -70, 14], [128, 109, 10, 16],
];
const CHEESE: [number, number, number, number][] = [
  [92, 70, 10, 14], [112, 62, -40, 12], [132, 70, 60, 14], [150, 70, -10, 12], [82, 90, -50, 13],
  [104, 82, 30, 15], [126, 82, -20, 12], [146, 86, 45, 14], [166, 84, -60, 11], [96, 102, 80, 12],
  [118, 98, 5, 14], [140, 104, -35, 12], [160, 100, 20, 12], [76, 112, 40, 10], [130, 116, -75, 11],
  [112, 114, 60, 10], [150, 116, 0, 10], [170, 108, -25, 10],
];
const PEANUTS: [number, number, number][] = [
  [90, 76, -20], [112, 66, 15], [136, 70, -40], [158, 80, 30], [82, 98, 60], [104, 92, -10],
  [128, 90, 40], [150, 100, -25], [172, 98, 10], [96, 114, 20], [120, 110, -50], [142, 118, 5],
];
const FLOSS: [number, number, number][] = [
  [84, 82, 10], [98, 74, -20], [114, 70, 30], [130, 72, -10], [146, 76, 20], [160, 84, -30],
  [90, 96, -40], [106, 88, 15], [122, 86, -25], [138, 90, 40], [154, 96, -5], [100, 104, 25],
  [118, 102, -35], [136, 104, 10], [150, 108, -20], [80, 108, 30], [168, 102, 15], [126, 116, 0],
];

// Each strip is one round-capped segment; all strips of a colour share one path.
function seg(x: number, y: number, a: number, l: number) {
  const r = (a * Math.PI) / 180;
  const dx = (Math.cos(r) * l) / 2;
  const dy = (Math.sin(r) * l) / 2;
  const f = (n: number) => Math.round(n * 10) / 10;
  return `M${f(x - dx)} ${f(y - dy)}L${f(x + dx)} ${f(y + dy)}`;
}

function Strips({ list, color, w }: { list: [number, number, number, number][]; color: string; w: number }) {
  return <path d={list.map(([x, y, a, l]) => seg(x, y, a, l)).join("")} stroke={color} strokeWidth={w} strokeLinecap="round" fill="none" />;
}

function Toppings({ variant }: { variant: BunVariant }) {
  switch (variant) {
    case "cokelat":
      return <Strips list={SHAVINGS} color={C.tinta} w={3.6} />;
    case "cokju":
      return (
        <>
          <Strips list={SHAVINGS.filter((_, i) => i % 2 === 0)} color={C.tinta} w={3.6} />
          <Strips list={CHEESE.filter((_, i) => i % 2 === 1)} color={C.kuning} w={4.2} />
        </>
      );
    case "keju":
      return <Strips list={CHEESE} color={C.kuning} w={4} />;
    case "kacang":
      // peanut halves: short fat capsules with a darker germ tip
      return (
        <>
          <Strips list={PEANUTS.map(([x, y, a]) => [x, y, a, 5])} color={C.crumb} w={10} />
          <Strips list={PEANUTS.map(([x, y, a]) => [x - 4.6 * Math.cos((a * Math.PI) / 180), y - 4.6 * Math.sin((a * Math.PI) / 180), a, 0.1])} color={C.kayu} w={3} />
        </>
      );
    case "srikaya":
      return (
        <>
          <path
            d="M121 88C131 88 134 98 126 102C114 107 104 97 107 86C110 74 128 70 139 77C152 86 150 103 137 110C123 117 99 113 90 99C82 86 88 70 100 64"
            stroke={C.pandan}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="121" cy="93" r="4" fill={C.daun} />
        </>
      );
    case "abon":
      return (
        <>
          <ellipse cx="124" cy="92" rx="56" ry="26" fill={C.crumb} />
          {[C.kayu, C.tinta].map((color, k) => (
            <path
              key={color}
              d={FLOSS.filter((_, i) => (i % 3 === 0) === (k === 1))
                .map(([x, y, a]) => `M${x - 9} ${y + (a > 0 ? 2 : -2)}q3-5 6 0t6 0t6 0`)
                .join("")}
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          ))}
        </>
      );
    case "pisangCokelat":
      return (
        <>
          <path d="M50 114C80 99 160 99 190 114" fill="none" stroke={C.tinta} strokeWidth="6" strokeLinecap="round" />
          <path d="M48 108C80 92 160 92 192 108" fill="none" stroke={C.kuning} strokeWidth="9" strokeLinecap="round" />
          <path d="M40 104C56 82 88 76 120 76C152 76 184 82 200 104C172 92 68 92 40 104Z" fill={C.glint} />
        </>
      );
  }
}

// The bag front (film, folded corners, orange scrolls around "Tegal", crinkles) is the same on
// every bun, so it is defined once here and reused with <use>. Render <BagSprite /> once per page.
export function BagSprite() {
  const half = "M4 10C4 4 10 1 16 2C22 3 24 8 20 10C17 11 15 8 17 6M20 10H34C42 10 46 5 54 5C62 5 64 10 70 10";
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" className="pointer-events-none absolute" style={{ visibility: "hidden" }}>
      <defs>
        <g id="kantong-tegal">
          <path d={BAG} fill={C.kotak} opacity="0.16" />
          <path d="M16 30L36 38L31 60ZM224 28L204 36L209 58Z" fill={C.kotak} opacity="0.45" />
          <g fill="none" stroke={C.kantong} strokeWidth="1.6" strokeLinecap="round">
            <path d={half} transform="translate(120 117)" />
            <path d={half} transform="translate(120 117) scale(-1 1)" />
            <path d={half} transform="translate(120 170) scale(1 -1)" />
            <path d={half} transform="translate(120 170) scale(-1 -1)" />
          </g>
          <path d="M120 107C123 112 123 117 120 121C117 117 117 112 120 107Z" fill={C.kantong} />
          <path d="M194 127h0M46 127h0M194 160h0M46 160h0" stroke={C.kantong} strokeWidth="3.2" strokeLinecap="round" />
          <text x="120" y="154" textAnchor="middle" fill={C.tinta} fontFamily="var(--font-display)" fontWeight="700" fontSize="26">
            Tegal
          </text>
          <path d={BAG} fill="none" stroke={C.kotak} strokeWidth="1.5" opacity="0.85" />
          <path
            d="M44 44C56 34 70 28 84 25M215 104C220 126 221 150 218 172M152 50L172 70M164 44L170 50M66 199C96 203 140 203 170 199M22 120C20 140 20 156 22 170"
            fill="none"
            stroke={C.kotak}
            strokeWidth="2.6"
            strokeLinecap="round"
            opacity="0.9"
          />
        </g>
      </defs>
    </svg>
  );
}

export function BunSvg({ variant, className = "" }: { variant: BunVariant; className?: string }) {
  const shape = variant === "pisangCokelat" ? FOLDED : ROUND;
  return (
    <svg viewBox="0 0 240 212" aria-hidden="true" focusable="false" className={`block h-auto w-full ${className}`}>
      <ellipse cx="120" cy="205" rx="98" ry="6" fill="#000" opacity="0.22" />
      {/* the bun */}
      <path d={shape.base} fill={C.crumb} />
      <path d={shape.top} fill={C.crust} />
      <path d={shape.glint} fill={C.glint} />
      <Toppings variant={variant} />
      <use href="#kantong-tegal" />
    </svg>
  );
}

export default function BaggedBun({
  variant,
  sticker,
  label,
  tilt = -3,
  className = "",
  stickerClassName = "",
}: {
  variant: BunVariant;
  sticker: string;
  label: string;
  tilt?: number;
  className?: string;
  stickerClassName?: string;
}) {
  return (
    <div role="img" aria-label={label} className={`relative ${className}`}>
      <BunSvg variant={variant} />
      <Sticker tilt={tilt} className={`absolute left-[7%] top-[6%] ${stickerClassName}`}>
        {sticker}
      </Sticker>
    </div>
  );
}
