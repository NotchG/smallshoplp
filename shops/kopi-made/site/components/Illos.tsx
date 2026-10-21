import type { Illo } from "@/content";
import { mock } from "@/lib/mockup";

// Flat illustrations of the shop's own dishes and drinks, standing in until the owner sends photos.
// 160 viewBox, cream 2.5px round-cap outline, flat fills, no gradients or shadows, drawn on `board`.
const C = {
  cream: "#F3EBDD",
  board: "#14191B",
  sign: "#CF2229",
  pine: "#C9965A",
  coffee: "#7A5233",
  milk: "#E9DCC6",
  mist: "#A7B5B8",
  rice: "#E8D3A0",
  avocado: "#9AAE5B",
  banana: "#D9A441",
};
const edge = {
  stroke: C.cream,
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const line = { ...edge, fill: "none" };

function Bean({ x, y, r = 0 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <ellipse rx="6" ry="4.2" />
      <path d="M-4.6 0.6Q0 -1.6 4.6 0.6" />
    </g>
  );
}

function EsKopimade() {
  return (
    <>
      <polygon points="53.4,50 106.6,50 104.3,84 55.7,84" fill={C.milk} />
      <path d="M55.6 86Q67.8 79 80 85T104.4 85L100.3 138H59.7Z" fill={C.coffee} />
      <g stroke={C.board} strokeWidth="2" fill="none" strokeLinejoin="round">
        <rect x="60" y="54" width="18" height="18" rx="3" transform="rotate(-10 69 63)" />
        <rect x="83" y="59" width="16" height="16" rx="3" transform="rotate(12 91 67)" />
      </g>
      <rect x="66" y="96" width="15" height="15" rx="3" transform="rotate(8 73.5 103.5)" stroke={C.milk} strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M100 10L92 24L86 128" stroke={C.sign} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M50 30L58 142H102L110 30" {...line} />
      <path d="M46 30H114" {...line} />
      <path d="M59.5 98L61.2 124" {...line} opacity="0.55" />
    </>
  );
}

function Avocado() {
  return (
    <>
      <polygon points="52.3,66 107.7,66 104.5,94 55.5,94" fill={C.coffee} />
      <path d="M54.7 88Q67.4 95 80 88T105.3 88L98.3 140H61.7Z" fill={C.avocado} />
      <path d="M58 62Q60 44 80 44Q100 44 102 62Z" fill={C.milk} />
      <path d="M65 55Q72 49 80 53.5Q88 58 95 52" stroke={C.coffee} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M96 6L90 20L86 128" stroke={C.sign} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M50 62Q50 28 80 28Q110 28 110 62" {...line} />
      <path d="M76 28V24H84V28" {...line} />
      <rect x="46" y="59" width="68" height="7" rx="2" fill={C.board} {...edge} />
      <path d="M50.5 66L60 142H100L109.5 66" {...line} />
      <path d="M61 102L63.6 126" {...line} opacity="0.55" />
    </>
  );
}

function ThickShake() {
  return (
    <>
      <path d="M48.6 56H111.4L105.4 128H54.6Z" fill={C.milk} />
      <path d="M57 62Q61 76 57 92" stroke={C.coffee} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M101 62Q105 72 102.5 84" stroke={C.coffee} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M46 52L54 140Q55 146 61 146H99Q105 146 106 140L114 52" {...line} />
      <path d="M53.8 130H106.2L105.5 139Q105 143.5 99 143.5H61Q55 143.5 54.5 139Z" fill={C.mist} opacity="0.55" />
      <path d="M53.6 129H106.4" {...line} />
      <path d="M101 6L89 54" stroke={C.sign} strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M43 57Q45 41 61 41Q66 27 82 29Q97 25 103 39Q117 41 117 57Z" fill={C.milk} {...edge} />
      <path d="M60 50Q72 41 84 47Q94 51 101 45" stroke={C.coffee} strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </>
  );
}

function NasiGoreng() {
  return (
    <>
      <ellipse cx="80" cy="112" rx="52" ry="19" fill={C.board} {...edge} />
      <ellipse cx="80" cy="112" rx="40" ry="12.5" {...line} strokeWidth="1.5" opacity="0.45" />
      <path d="M45 112Q43 67 80 63Q117 67 115 112Q98 120 80 120Q62 120 45 112Z" fill={C.rice} {...edge} />
      <g stroke={C.coffee} strokeWidth="2.5" strokeLinecap="round" opacity="0.7">
        <path d="M60 86l4-2M72 75l4 1M88 77l4-1M99 90l3 3M66 99l4 1M83 93l4-2M93 106l4 1M55 104l3-2M76 108l4 0M101 102l3-2M78 84l3 2" />
      </g>
      <g fill={C.sign}>
        <circle cx="70" cy="88" r="2.2" />
        <circle cx="95" cy="97" r="2.2" />
        <circle cx="84" cy="104" r="2" />
      </g>
      <g fill={C.avocado}>
        <circle cx="85" cy="81" r="2.2" />
        <circle cx="62" cy="95" r="2.2" />
        <circle cx="105" cy="95" r="2" />
        <circle cx="74" cy="100" r="2" />
      </g>
      <path d="M11 26V42M16 26V42M21 26V42M11 42Q11 51 16 53Q21 51 21 42M16 53V122" {...line} />
      <ellipse cx="144" cy="38" rx="7" ry="11" {...line} />
      <path d="M144 49V122" {...line} />
    </>
  );
}

function Carbonara() {
  return (
    <>
      <circle cx="80" cy="82" r="62" fill={C.board} {...edge} />
      <circle cx="80" cy="82" r="54" {...line} strokeWidth="1.25" opacity="0.55" />
      <circle cx="80" cy="82" r="50.5" {...line} strokeWidth="1.25" opacity="0.55" />
      <path d="M44 84Q40 54 70 46Q100 40 114 64Q124 92 100 110Q76 124 56 110Q44 100 44 84Z" fill={C.rice} {...edge} />
      <g stroke={C.pine} strokeWidth="2.5" strokeLinecap="round" fill="none">
        <path d="M60 86Q58 62 82 58Q104 58 104 82Q102 102 80 104Q64 102 66 86Q68 72 82 72Q92 74 92 84Q90 92 82 92" />
        <path d="M52 72Q60 54 80 52" />
        <path d="M100 104Q112 94 110 76" />
        <path d="M54 100Q62 112 76 114" />
      </g>
      <g fill={C.sign}>
        <rect x="-8" y="-3" width="16" height="6" rx="3" transform="translate(70 66) rotate(-20)" />
        <rect x="-8" y="-3" width="16" height="6" rx="3" transform="translate(98 76) rotate(32)" />
        <rect x="-7" y="-3" width="14" height="6" rx="3" transform="translate(76 97) rotate(10)" />
      </g>
      <g fill={C.cream}>
        <circle cx="64" cy="74" r="1.8" />
        <circle cx="87" cy="65" r="1.8" />
        <circle cx="94" cy="93" r="1.8" />
        <circle cx="72" cy="88" r="1.8" />
        <circle cx="85" cy="81" r="1.8" />
        <circle cx="57" cy="93" r="1.8" />
        <circle cx="101" cy="86" r="1.8" />
        <circle cx="79" cy="106" r="1.8" />
        <circle cx="91" cy="58" r="1.6" />
        <circle cx="67" cy="58" r="1.6" />
      </g>
      <g fill={C.board}>
        <circle cx="75" cy="79" r="1.2" />
        <circle cx="92" cy="87" r="1.2" />
        <circle cx="66" cy="99" r="1.2" />
      </g>
      <path d="M106 56L138 24" {...line} />
    </>
  );
}

function PisangGoreng() {
  const piece = "M-30 0Q-30 -11 -16 -12L18 -10Q30 -8 30 0Q30 8 18 10L-16 12Q-30 11 -30 0Z";
  const pieces = [
    { x: 58, y: 70, r: -16 },
    { x: 103, y: 69, r: 14 },
    { x: 60, y: 102, r: 8 },
    { x: 104, y: 103, r: -12 },
  ];
  return (
    <>
      <ellipse cx="80" cy="86" rx="68" ry="48" fill={C.board} {...edge} />
      <ellipse cx="80" cy="86" rx="58" ry="39" {...line} strokeWidth="1.25" opacity="0.5" />
      {pieces.map((p) => (
        <g key={`${p.x}-${p.y}`} transform={`translate(${p.x} ${p.y}) rotate(${p.r})`}>
          <path d={piece} fill={C.banana} {...edge} />
          <g fill={C.coffee} opacity="0.75">
            <circle cx="-15" cy="-3" r="1.7" />
            <circle cx="-2" cy="4" r="1.7" />
            <circle cx="11" cy="-4" r="1.7" />
            <circle cx="-6" cy="-5" r="1.4" />
            <circle cx="20" cy="3" r="1.4" />
          </g>
        </g>
      ))}
    </>
  );
}

const drawings: Record<Illo, () => React.JSX.Element> = {
  eskopimade: EsKopimade,
  avocado: Avocado,
  thickshake: ThickShake,
  nasigoreng: NasiGoreng,
  carbonara: Carbonara,
  pisang: PisangGoreng,
};

export function FoodIllo({ kind, alt }: { kind: Illo; alt: string }) {
  const Draw = drawings[kind];
  return (
    // Placeholder for a real photo (owner-checklist): marked as mockup.
    <svg viewBox="0 0 160 160" role="img" aria-label={alt} className="illo" {...mock(true)}>
      <Draw />
    </svg>
  );
}

// Seduh section (on pine): board 2px line, no fills.
const pineLine = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const beans: { x: number; y: number; r: number }[] = [
  { x: 24, y: 104, r: 10 }, { x: 38, y: 106, r: -20 }, { x: 52, y: 105, r: 30 }, { x: 66, y: 106, r: -8 }, { x: 78, y: 102, r: 24 },
  { x: 20, y: 92, r: -30 }, { x: 33, y: 94, r: 18 }, { x: 47, y: 93, r: -12 }, { x: 61, y: 94, r: 40 }, { x: 75, y: 91, r: -22 },
  { x: 26, y: 81, r: 14 }, { x: 40, y: 82, r: -36 }, { x: 54, y: 81, r: 8 }, { x: 68, y: 80, r: -16 }, { x: 79, y: 79, r: 30 },
  { x: 32, y: 69, r: -10 }, { x: 46, y: 70, r: 26 }, { x: 60, y: 68, r: -28 }, { x: 72, y: 68, r: 12 },
];

export function BeanJar() {
  return (
    <svg viewBox="0 0 96 120" className="jar" aria-hidden="true" {...pineLine}>
      <path d="M22 5h52v13H22z" />
      <path d="M22 11.5h52" />
      <path d="M26 18v6M70 18v6" />
      <path d="M26 24Q10 26 10 42v58q0 14 14 14h48q14 0 14-14V42q0-16-16-18" />
      <path d="M11 62Q48 56 85 62" opacity="0.6" />
      <g strokeWidth="1.6">
        {beans.map((b) => (
          <Bean key={`${b.x}-${b.y}`} {...b} />
        ))}
      </g>
      <path d="M18 34v18" opacity="0.6" />
    </svg>
  );
}

export function BeanBag() {
  return (
    <svg viewBox="0 0 72 96" width="56" height="75" aria-hidden="true" {...pineLine}>
      <path d="M14 22L10 87q0 5 4 5h44q4 0 4-5L58 22" />
      <path d="M14 22L18 8h36l4 14z" />
      <path d="M16 15h40" />
      <circle cx="36" cy="32" r="3" />
      <path d="M22 44h28v24H22z" />
      <path d="M27 52h18M27 58h12" />
    </svg>
  );
}
