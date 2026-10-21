import type { ReactNode } from "react";
import type { DishArtKey } from "@/content";
import { paint as p } from "@/lib/paint";

// Flat, top-down dishes on Gezellig's ribbed white porcelain. Same scale, same light.
// They stand in for owner photos, so each figure carries data-mockup.

const RIBS = Array.from({ length: 60 }, (_, i) => {
  const a = (i / 60) * Math.PI * 2;
  const c = Math.cos(a);
  const s = Math.sin(a);
  return `M${(100 + c * 80).toFixed(1)} ${(100 + s * 80).toFixed(1)}L${(100 + c * 92).toFixed(1)} ${(100 + s * 92).toFixed(1)}`;
}).join("");

function RibbedPlate({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 200 200" className="block h-auto w-full" aria-hidden focusable={false}>
      <circle cx="100" cy="100" r="96" fill={p.kapur} stroke={p.rim} strokeWidth="1.5" />
      <path d={RIBS} stroke={p.rim} strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="100" cy="100" r="76" fill="none" stroke={p.rim} strokeWidth="1.5" />
      {children}
    </svg>
  );
}

function KoftaJoppie() {
  return (
    <RibbedPlate>
      {/* rice dome with parsley */}
      <circle cx="112" cy="70" r="33" fill={p.rice} stroke={p.rim} strokeWidth="1.2" />
      <g fill={p.rim}>
        <ellipse cx="98" cy="62" rx="3" ry="1.4" transform="rotate(-20 98 62)" />
        <ellipse cx="124" cy="84" rx="3" ry="1.4" transform="rotate(30 124 84)" />
        <ellipse cx="104" cy="88" rx="3" ry="1.4" />
        <ellipse cx="128" cy="62" rx="3" ry="1.4" transform="rotate(60 128 62)" />
      </g>
      <g fill={p.leafDark}>
        <circle cx="110" cy="66" r="4.5" />
        <circle cx="116" cy="70" r="4" />
        <circle cx="108" cy="73" r="3.6" />
      </g>
      {/* lettuce and red cabbage */}
      <path d="M140 92c8-6 18-2 20 6 8 2 10 12 4 18 4 8-2 16-10 16-4 7-15 6-18-1-8-2-10-12-4-17-5-8 1-19 8-22Z" fill={p.leaf} />
      <g fill="none" stroke={p.cabbage} strokeWidth="3" strokeLinecap="round">
        <path d="M140 104q10-6 18 2" />
        <path d="M144 114q9-4 16 4" />
        <path d="M138 122q10 2 14 10" />
        <path d="M150 98q8 2 10 10" />
      </g>
      {/* beef patty under glossy sauce */}
      <ellipse cx="108" cy="134" rx="30" ry="24" fill={p.beef} />
      <path d="M86 128c8-12 30-14 42-4" fill="none" stroke={p.gloss} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="118" cy="140" rx="7" ry="3" fill={p.sauce} />
      {/* sambal dish */}
      <circle cx="64" cy="114" r="17" fill={p.bowl} stroke={p.rim} strokeWidth="1.5" />
      <circle cx="64" cy="114" r="12.5" fill={p.sambal} />
      {/* acar and onion rings */}
      <g>
        <rect x="58" y="70" width="7" height="7" fill={p.pickle} transform="rotate(12 61 73)" />
        <rect x="68" y="76" width="7" height="7" fill={p.carrot} transform="rotate(-18 71 79)" />
        <rect x="62" y="83" width="7" height="7" fill={p.leaf} transform="rotate(30 65 86)" />
        <rect x="74" y="66" width="6" height="6" fill={p.carrot} transform="rotate(8 77 69)" />
      </g>
      <g fill="none" stroke={p.cabbage} strokeWidth="1.6">
        <circle cx="80" cy="160" r="6" />
        <circle cx="91" cy="166" r="5" />
      </g>
    </RibbedPlate>
  );
}

function Uitsmijter() {
  return (
    <RibbedPlate>
      {/* buttered bread */}
      <g transform="rotate(-9 82 92)">
        <rect x="50" y="60" width="64" height="60" rx="10" fill={p.crust} />
        <rect x="55" y="65" width="54" height="50" rx="7" fill={p.bread} />
      </g>
      <g transform="rotate(11 118 104)">
        <rect x="88" y="74" width="62" height="58" rx="10" fill={p.crust} />
        <rect x="93" y="79" width="52" height="48" rx="7" fill={p.bread} />
      </g>
      {/* folded smoked beef */}
      <path d="M64 86c10-8 26-6 34 2 10-6 26-4 32 6 6 10-2 20-12 20-6 8-22 8-28 0-10 4-24 0-28-10-2-8 0-14 2-18Z" fill={p.smoked} />
      <g fill="none" stroke={p.smokedDark} strokeWidth="2" strokeLinecap="round">
        <path d="M72 96q10 6 22 0" />
        <path d="M102 100q10 6 22-2" />
      </g>
      {/* fried egg */}
      <path d="M76 82c6-14 28-16 38-6 12-2 20 8 16 18 6 8-2 20-14 18-6 10-26 8-30-2-12 0-18-12-10-20Z" fill={p.rice} stroke={p.rim} strokeWidth="1.2" />
      <circle cx="100" cy="98" r="13" fill={p.lampu} />
      <ellipse cx="96" cy="93" rx="4" ry="2.6" fill={p.friedLight} />
      {/* champignon slices */}
      <g fill={p.mushroom} stroke={p.gill} strokeWidth="1.4">
        <path d="M60 140c0-9 7-15 15-15s15 6 15 15h-9v8h-12v-8Z" />
        <path d="M86 156c0-8 6-13 13-13s13 5 13 13h-8v7h-10v-7Z" />
        <path d="M112 150c0-8 6-13 13-13s13 5 13 13h-8v7h-10v-7Z" />
      </g>
      {/* greens and tomato */}
      <path d="M140 56c10-2 18 6 16 14 6 6 2 16-6 16-6 4-14 0-14-6-6-6-2-18 4-24Z" fill={p.leaf} />
      <path d="M146 60q4 10 2 22" fill="none" stroke={p.leafDark} strokeWidth="1.6" />
      <circle cx="154" cy="128" r="9" fill={p.tulp} />
      <circle cx="154" cy="128" r="5" fill={p.smoked} />
    </RibbedPlate>
  );
}

function GarangAsem() {
  return (
    <RibbedPlate>
      {/* earthenware bowl lined with banana leaf; two leaf tips fold over the rim */}
      <circle cx="100" cy="100" r="70" fill={p.bowl} stroke={p.rim} strokeWidth="1.5" />
      <path d="M44 62C32 40 30 30 34 26c10 2 24 10 40 22Z" fill={p.bananaLeaf} />
      <path d="M150 150c14 14 22 26 20 30-10 0-26-8-40-20Z" fill={p.bananaLeaf} />
      <circle cx="100" cy="100" r="63" fill={p.bananaLeaf} />
      <g stroke={p.bananaLeafVein} strokeWidth="1.4" fill="none">
        <path d="M40 30l120 140" />
        <path d="M58 60q-14 18-16 40M78 82q-22 14-32 38M104 112q-14 20-14 40M126 138q-10 10-12 22M76 50q18-2 34 10M98 76q20 0 34 14M120 102q20 4 30 20" />
      </g>
      {/* golden broth */}
      <circle cx="100" cy="100" r="54" fill={p.broth} />
      <circle cx="100" cy="100" r="54" fill="none" stroke={p.brothDeep} strokeWidth="2" />
      {/* chicken */}
      <g fill={p.chicken}>
        <path d="M74 80c6-10 22-8 24 2 2 10-8 16-18 14-8-2-10-10-6-16Z" />
        <path d="M108 118c6-8 20-6 22 4 1 10-10 14-18 12-6-2-8-10-4-16Z" />
        <path d="M70 116c4-6 14-6 16 2 2 8-6 12-12 10-6-2-6-8-4-12Z" />
      </g>
      {/* tomato slices */}
      <g>
        <circle cx="120" cy="78" r="11" fill={p.tulp} />
        <circle cx="120" cy="78" r="6.5" fill={p.smoked} />
        <circle cx="92" cy="136" r="9" fill={p.tulp} />
        <circle cx="92" cy="136" r="5" fill={p.smoked} />
      </g>
      {/* green and red chillies */}
      <g strokeLinecap="round" fill="none">
        <path d="M128 100q12-2 18 8" stroke={p.chili} strokeWidth="6" />
        <path d="M60 98q6-10 18-10" stroke={p.chili} strokeWidth="5" />
        <path d="M100 66q10-6 20-4" stroke={p.sambal} strokeWidth="5" />
        <path d="M110 140q12 4 20-2" stroke={p.sambal} strokeWidth="5" />
      </g>
    </RibbedPlate>
  );
}

function PisangGoreng() {
  const pieces: [number, number, number][] = [
    [62, 84, -32],
    [82, 110, -32],
    [104, 132, -32],
    [118, 76, -32],
  ];
  return (
    <RibbedPlate>
      {pieces.map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
          <path d="M-36 0c0-10 14-15 36-15s38 6 38 15-16 14-38 14-36-4-36-14Z" fill={p.fried} stroke={p.friedDark} strokeWidth="2" />
          <g fill={p.friedLight}>
            <circle cx="-20" cy="-4" r="2.4" />
            <circle cx="-6" cy="3" r="2" />
            <circle cx="8" cy="-6" r="2.6" />
            <circle cx="22" cy="2" r="2" />
          </g>
        </g>
      ))}
    </RibbedPlate>
  );
}

const ART: Record<DishArtKey, () => ReactNode> = {
  koftaJoppie: KoftaJoppie,
  uitsmijter: Uitsmijter,
  garangAsem: GarangAsem,
  pisangGoreng: PisangGoreng,
};

const LABELS: Record<DishArtKey, string> = {
  koftaJoppie: "Ilustrasi Gezellig Kofta Joppie: daging sapi bersaus dengan nasi, salad, acar, dan sambal",
  uitsmijter: "Ilustrasi Uitsmijter: roti, smoked beef, telur ceplok, jamur champignon, dan sayur",
  garangAsem: "Ilustrasi Garang Asem: kuah kuning dengan ayam, tomat, dan cabai di atas daun pisang",
  pisangGoreng: "Ilustrasi empat potong pisang goreng",
};

export default function DishArt({ art, className = "" }: { art: DishArtKey; className?: string }) {
  const Art = ART[art];
  return (
    <figure role="img" aria-label={LABELS[art]} data-mockup="" className={`plate-shadow ${className}`}>
      <Art />
    </figure>
  );
}
