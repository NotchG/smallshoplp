import type { Art } from "@/content";

// Flat menu illustrations, 200×200 viewBox, base on y≈198 so each stands on the gold
// table-edge hairline. Flat fills only: no gradients, shading or perspective.
// Tints (kopi, susu, jati, daun) are illustration-only CSS variables.

const EMAS = "var(--color-emas)";
const DINDING = "var(--color-dinding)";
const ABU_T = "var(--color-abu-terang)";
const KOPI = "var(--kopi)";
const SUSU = "var(--susu)";
const JATI = "var(--jati)";
const DAUN = "var(--daun)";

function KopiSusu() {
  return (
    <>
      {/* straw, behind the drink */}
      <line x1="126" y1="4" x2="98" y2="150" stroke={EMAS} strokeWidth="9" strokeLinecap="round" />
      {/* susu on top, kopi below with a soft pour line */}
      <rect x="61" y="62" width="78" height="60" fill={SUSU} />
      <path d="M61 118 C 84 106, 112 132, 139 114 V184 H61 Z" fill={KOPI} />
      {/* ice */}
      <rect x="70" y="50" width="24" height="24" rx="3" fill={DINDING} fillOpacity="0.55" stroke={DINDING} strokeWidth="2" transform="rotate(-12 82 62)" />
      <rect x="104" y="66" width="24" height="24" rx="3" fill={DINDING} fillOpacity="0.55" stroke={DINDING} strokeWidth="2" transform="rotate(14 116 78)" />
      <rect x="80" y="86" width="22" height="22" rx="3" fill={DINDING} fillOpacity="0.55" stroke={DINDING} strokeWidth="2" transform="rotate(6 91 97)" />
      {/* tall straight glass with a thick base */}
      <path d="M60 28 V192 Q60 198 66 198 H134 Q140 198 140 192 V28" fill="none" stroke={ABU_T} strokeWidth="2.5" />
      <line x1="61" y1="185" x2="139" y2="185" stroke={ABU_T} strokeWidth="2" />
    </>
  );
}

function RiceBowl() {
  return (
    <>
      {/* rice dome */}
      <path d="M34 120 C 38 48, 162 48, 166 120 Z" fill={DINDING} />
      {/* glazed chicken */}
      <rect x="54" y="86" width="32" height="25" rx="9" fill={JATI} transform="rotate(-14 70 98)" />
      <rect x="86" y="80" width="34" height="27" rx="10" fill={JATI} transform="rotate(8 103 93)" />
      <rect x="114" y="92" width="28" height="23" rx="9" fill={JATI} transform="rotate(-6 128 103)" />
      {/* slaw wedge */}
      <path d="M128 118 C 134 98, 158 96, 164 118 Z" fill={DAUN} />
      {/* parsley + sesame */}
      <circle cx="98" cy="80" r="6" fill={DAUN} />
      <circle cx="106" cy="82" r="5" fill={DAUN} />
      <circle cx="68" cy="94" r="1.8" fill={DINDING} />
      <circle cx="96" cy="96" r="1.8" fill={DINDING} />
      <circle cx="126" cy="100" r="1.8" fill={DINDING} />
      {/* bowl with side handle */}
      <rect x="2" y="134" width="40" height="15" rx="7.5" fill={EMAS} transform="rotate(16 22 141)" />
      <path d="M28 120 H172 C 172 166, 142 192, 100 192 C 58 192, 28 166, 28 120 Z" fill={EMAS} />
      <rect x="24" y="114" width="152" height="11" rx="5.5" fill={EMAS} />
      <rect x="72" y="188" width="56" height="10" rx="3" fill={EMAS} />
    </>
  );
}

function NasiGoreng() {
  return (
    <>
      {/* kerupuk leaning on the rice */}
      <ellipse cx="38" cy="140" rx="30" ry="21" fill={SUSU} transform="rotate(-28 38 140)" />
      {/* dome of fried rice */}
      <path d="M22 186 C 28 92, 172 92, 178 186 Z" fill={JATI} />
      {/* fried shallots */}
      <circle cx="52" cy="164" r="3" fill={KOPI} />
      <circle cx="70" cy="140" r="3" fill={KOPI} />
      <circle cx="134" cy="146" r="3" fill={KOPI} />
      <circle cx="150" cy="168" r="3" fill={KOPI} />
      <circle cx="96" cy="170" r="3" fill={KOPI} />
      {/* fried egg */}
      <path d="M54 124 C 46 98, 84 84, 102 94 C 126 82, 158 100, 146 124 C 124 134, 78 136, 54 124 Z" fill={DINDING} />
      <circle cx="100" cy="110" r="14" fill={EMAS} />
      {/* cucumber */}
      <circle cx="162" cy="176" r="13" fill={DAUN} />
      <circle cx="162" cy="176" r="8.5" fill={SUSU} />
      {/* flat plate */}
      <rect x="4" y="184" width="192" height="8" rx="4" fill={DINDING} />
      <rect x="62" y="190" width="76" height="8" rx="2" fill={DINDING} />
    </>
  );
}

function Croissant() {
  const seg = { fill: JATI, stroke: KOPI, strokeWidth: 3, strokeLinejoin: "round" as const };
  return (
    <>
      {/* tapered tips curling down */}
      <path d="M44 150 C 26 152, 8 170, 6 194 C 26 194, 46 186, 58 172 Z" {...seg} />
      <path d="M156 150 C 174 152, 192 170, 194 194 C 174 194, 154 186, 142 172 Z" {...seg} />
      {/* inner segments */}
      <ellipse cx="62" cy="150" rx="27" ry="42" transform="rotate(-30 62 150)" {...seg} />
      <ellipse cx="138" cy="150" rx="27" ry="42" transform="rotate(30 138 150)" {...seg} />
      {/* crown */}
      <ellipse cx="100" cy="134" rx="35" ry="60" {...seg} />
    </>
  );
}

const ART: Record<Art, () => React.JSX.Element> = {
  "kopi-susu": KopiSusu,
  "rice-bowl": RiceBowl,
  "nasi-goreng": NasiGoreng,
  croissant: Croissant,
};

export default function FoodArt({ art, alt }: { art: Art; alt: string }) {
  const Draw = ART[art];
  return (
    <svg className="food-art" viewBox="0 0 200 200" role="img" aria-label={alt}>
      <Draw />
    </svg>
  );
}
