import type { PlateKind } from "@/content";
import { mock } from "@/lib/mockup";

// Flat top-down plate illustrations: no outlines, shadows, faces or steam; <=15 shapes each.
// Plates in kapur with a kanopi rim. Illustration-only food colours (design brief §3).
// Placeholders until the owner sends real photos: the wrapper carries data-mockup.
const C = {
  rim: "var(--color-kanopi)",
  plate: "var(--color-kapur)",
  leaf: "var(--color-daun)",
  broth: "#D9A55A",
  oxtail: "#6B3A22",
  carrot: "#E07B39",
  potato: "#E9CF8E",
  lumpia: "#C98A3A",
  mango: "#E8962E",
  chai: "#C49A6C",
  espresso: "#5A3420",
};

function SopBuntut() {
  return (
    <svg viewBox="0 0 200 200" className="block h-auto w-full" aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="99" fill={C.rim} />
      <circle cx="100" cy="100" r="89" fill={C.plate} />
      <circle cx="100" cy="100" r="73" fill={C.rim} />
      <circle cx="100" cy="100" r="64" fill={C.broth} />
      <rect x="62" y="72" width="38" height="32" rx="13" fill={C.oxtail} transform="rotate(-18 81 88)" />
      <circle cx="86" cy="84" r="5" fill={C.lumpia} />
      <rect x="103" y="103" width="31" height="26" rx="11" fill={C.oxtail} transform="rotate(24 118 116)" />
      <circle cx="113" cy="119" r="4" fill={C.lumpia} />
      <circle cx="122" cy="76" r="9" fill={C.carrot} />
      <circle cx="76" cy="124" r="8" fill={C.carrot} />
      <rect x="94" y="56" width="17" height="14" rx="4" fill={C.potato} transform="rotate(14 102 63)" />
      <rect x="134" y="94" width="15" height="13" rx="4" fill={C.potato} transform="rotate(-10 141 100)" />
      <circle cx="104" cy="96" r="3.5" fill={C.leaf} />
      <circle cx="96" cy="136" r="3.5" fill={C.leaf} />
      <circle cx="142" cy="128" r="3" fill={C.leaf} />
    </svg>
  );
}

function Lumpia() {
  const rolls = [
    { cx: 100, cy: 54 },
    { cx: 106, cy: 82 },
    { cx: 112, cy: 110 },
  ];
  return (
    <svg viewBox="0 0 240 160" className="block h-auto w-full" aria-hidden="true" focusable="false">
      <ellipse cx="120" cy="80" rx="119" ry="79" fill={C.rim} />
      <ellipse cx="120" cy="80" rx="107" ry="67" fill={C.plate} />
      {rolls.map((r, i) => (
        <g key={i} transform={`rotate(-9 ${r.cx} ${r.cy})`}>
          <rect x={r.cx - 58} y={r.cy - 12} width="116" height="24" rx="12" fill={C.lumpia} />
          <rect x={r.cx - 44} y={r.cy - 5} width="88" height="4" rx="2" fill={C.oxtail} opacity="0.28" />
        </g>
      ))}
      <circle cx="190" cy="100" r="21" fill={C.rim} />
      <circle cx="190" cy="100" r="15" fill={C.carrot} />
      <rect x="168" y="50" width="26" height="7" rx="3.5" fill={C.leaf} transform="rotate(28 181 53)" />
    </svg>
  );
}

function PuddingMangga() {
  const cubes = [
    { x: 70, y: 62, r: 12 },
    { x: 90, y: 70, r: -8 },
    { x: 76, y: 86, r: 20 },
    { x: 94, y: 92, r: 4 },
    { x: 62, y: 80, r: -16 },
  ];
  return (
    <svg viewBox="0 0 160 160" className="block h-auto w-full" aria-hidden="true" focusable="false">
      <circle cx="80" cy="80" r="79" fill={C.rim} />
      <circle cx="80" cy="80" r="70" fill={C.plate} />
      <circle cx="80" cy="80" r="56" fill={C.potato} />
      <circle cx="80" cy="78" r="42" fill={C.mango} />
      {cubes.map((c, i) => (
        <rect
          key={i}
          x={c.x - 6.5}
          y={c.y - 6.5}
          width="13"
          height="13"
          rx="2.5"
          fill={C.carrot}
          transform={`rotate(${c.r} ${c.x} ${c.y})`}
        />
      ))}
      <ellipse cx="104" cy="58" rx="9" ry="4" fill={C.leaf} transform="rotate(-35 104 58)" />
      <ellipse cx="112" cy="66" rx="8" ry="3.6" fill={C.leaf} transform="rotate(20 112 66)" />
    </svg>
  );
}

function DirtyChai() {
  return (
    <svg viewBox="0 0 140 140" className="block h-auto w-full" aria-hidden="true" focusable="false">
      <circle cx="70" cy="70" r="69" fill={C.rim} />
      <circle cx="70" cy="70" r="60" fill={C.plate} />
      <rect x="22" y="104" width="40" height="7" rx="3.5" fill={C.rim} transform="rotate(-38 42 107)" />
      <rect x="100" y="62" width="30" height="15" rx="7.5" fill={C.rim} />
      <circle cx="68" cy="68" r="42" fill={C.rim} />
      <circle cx="68" cy="68" r="35" fill={C.chai} />
      <path
        d="M52 72 C52 54 80 50 86 64 C91 77 76 88 66 80"
        fill="none"
        stroke={C.espresso}
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ART: Record<PlateKind, () => React.JSX.Element> = {
  sop: SopBuntut,
  lumpia: Lumpia,
  pudding: PuddingMangga,
  chai: DirtyChai,
};

export default function PlateArt({ kind, name, mockup }: { kind: PlateKind; name: string; mockup?: boolean }) {
  const Art = ART[kind];
  return (
    <div role="img" aria-label={`Ilustrasi contoh: ${name.toLowerCase()}`} className={`plate plate-${kind}`} {...mock(mockup)}>
      <Art />
    </div>
  );
}
