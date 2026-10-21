import type { ReactNode } from "react";
import type { ProductId } from "@/content";

// Six flat illustrations of the shop's named items, front view, no outlines, each standing
// in the lower third of a terrazzo plate (the table top from photo 2). viewBox 200×150;
// every item stays inside x 26–174 so a square phone plate (slice) never crops it.
// Placeholders until the owner sends product photos.

const INK = {
  kopi: "#4A2F22",
  susu: "#EADCC6",
  aren: "#8C5A2E",
  lemon: "#E8C547",
  goreng: "#E2A543",
  daunMuda: "#86A86B",
  tegel: "#A8452A",
  malam: "#22282C",
  white: "#FFFFFF",
};

const BASE = 122; // the line items stand on

function Shadow({ w }: { w: number }) {
  return <ellipse cx="100" cy={BASE + 1.5} rx={w / 2} ry="4.5" fill={INK.malam} fillOpacity="0.14" />;
}

// Tall clear glass, slight taper: top 76–124 at y 30, bottom 80–120 at BASE.
const GT = 30;
const xl = (y: number, inset = 0) => 76 + ((y - GT) * 4) / (BASE - GT) + inset;
const xr = (y: number, inset = 0) => 124 - ((y - GT) * 4) / (BASE - GT) - inset;
/** Liquid layer inside the glass between y1 (top) and y2 (bottom). */
function layer(y1: number, y2: number) {
  const i = 3.2;
  return `M${xl(y1, i).toFixed(1)} ${y1}H${xr(y1, i).toFixed(1)}L${xr(y2, i).toFixed(1)} ${y2}H${xl(y2, i).toFixed(1)}Z`;
}

function Glass({ children, after }: { children: ReactNode; after?: ReactNode }) {
  return (
    <>
      <Shadow w={52} />
      <path d={`M76 ${GT}H124L120 ${BASE}H80Z`} fill={INK.white} fillOpacity="0.62" />
      {children}
      <path d={`M80 ${BASE - 3}H120L120 ${BASE}H80Z`} fill={INK.white} fillOpacity="0.7" />
      <path d="M84.5 40L86.5 112H90L88 40Z" fill={INK.white} fillOpacity="0.45" />
      <rect x="76" y={GT} width="48" height="3" rx="1" fill={INK.white} fillOpacity="0.9" />
      {after}
    </>
  );
}

const ART: Record<ProductId, ReactNode> = {
  // Aren at the bottom, milk, espresso on top. Not iced.
  "kopi-susu-strong": (
    <Glass>
      <path d={layer(48, BASE - 3)} fill={INK.susu} />
      <path d={layer(94, BASE - 3)} fill={INK.aren} />
      <path d={layer(48, 64)} fill={INK.kopi} />
      <path d={layer(64, 70)} fill="#9C7458" />
    </Glass>
  ),
  // Paler milky-caramel, three ice cubes, milk foam top. Iced.
  "kopi-susu-mantan": (
    <Glass>
      <path d={layer(46, BASE - 3)} fill="#CDA57D" />
      <path d={layer(40, 50)} fill="#F3EBDD" />
      <rect x="86" y="54" width="18" height="18" rx="3" fill={INK.white} fillOpacity="0.55" transform="rotate(-12 95 63)" />
      <rect x="98" y="70" width="17" height="17" rx="3" fill={INK.white} fillOpacity="0.5" transform="rotate(10 106 78)" />
      <rect x="85" y="86" width="16" height="16" rx="3" fill={INK.white} fillOpacity="0.45" transform="rotate(-4 93 94)" />
    </Glass>
  ),
  // Black coffee, lemon wheel on the rim.
  "wake-up-call": (
    <Glass
      after={
        <g transform="translate(124 36)">
          <circle r="17" fill={INK.lemon} />
          <circle r="13.5" fill="#F4DE86" />
          <path
            d="M0-12V12M-12 0H12M-8.5-8.5 8.5 8.5M-8.5 8.5 8.5-8.5"
            stroke={INK.lemon}
            strokeWidth="1.8"
          />
          <circle r="2.2" fill={INK.lemon} />
        </g>
      }
    >
      <path d={layer(46, BASE - 3)} fill="#2E1D15" />
      <path d={layer(46, 51)} fill="#6B4430" />
    </Glass>
  ),
  // Terracotta paper boat of fries, small dish of Bangkok sauce beside it.
  "kentang-bangkok": (
    <g transform="translate(-6 0)">
      <ellipse cx="88" cy={BASE + 1.5} rx="44" ry="4.5" fill={INK.malam} fillOpacity="0.14" />
      <ellipse cx="148" cy={BASE + 1.5} rx="21" ry="3.5" fill={INK.malam} fillOpacity="0.14" />
      {/* fries, behind the boat */}
      <g fill={INK.goreng}>
        <rect x="56" y="54" width="8" height="44" rx="2" transform="rotate(-14 60 76)" />
        <rect x="66" y="44" width="8" height="54" rx="2" transform="rotate(-6 70 71)" />
        <rect x="77" y="50" width="8" height="48" rx="2" transform="rotate(4 81 74)" />
        <rect x="88" y="40" width="8" height="58" rx="2" transform="rotate(-2 92 69)" />
        <rect x="99" y="48" width="8" height="50" rx="2" transform="rotate(9 103 73)" />
        <rect x="109" y="56" width="8" height="42" rx="2" transform="rotate(16 113 77)" />
      </g>
      <g fill="#C98A2E">
        <rect x="71" y="58" width="7" height="40" rx="2" transform="rotate(10 74 78)" />
        <rect x="94" y="56" width="7" height="42" rx="2" transform="rotate(-12 97 77)" />
      </g>
      {/* boat */}
      <path d="M44 84H132L122 122H54Z" fill={INK.tegel} />
      <path d="M44 84H132L130.6 90H45.4Z" fill="#8E3820" />
      <path d="M70 92V120M88 92V120M106 92V120" stroke="#B9583B" strokeWidth="3" />
      {/* sauce dish */}
      <path d="M130 107Q148 99 166 107Z" fill="#D9572B" />
      <path d="M127 106H169L163 122H133Z" fill={INK.white} />
      <circle cx="144" cy="104.5" r="1.3" fill="#8E3820" />
      <circle cx="153" cy="103.5" r="1.3" fill="#8E3820" />
    </g>
  ),
  // Three crumbed rolls on a small plate; the front one cut to show the smoked beef filling.
  "risol-smoked-beef": (
    <>
      <Shadow w={120} />
      <path d="M38 115H162Q155 124 100 124Q45 124 38 115Z" fill={INK.white} />
      <rect x="64" y="70" width="62" height="26" rx="13" fill="#B97C35" />
      <rect x="44" y="92" width="64" height="24" rx="12" fill="#C98A3E" />
      <rect x="92" y="92" width="44" height="24" rx="12" fill="#C98A3E" />
      <path
        d="M72 80H118M52 101H100M58 109H96M98 101H122"
        stroke="#9E6527"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="0.1 6"
      />
      {/* cut end, facing us */}
      <circle cx="136" cy="102" r="16" fill="#C98A3E" />
      <circle cx="136" cy="102" r="12.5" fill="#F1E2C3" />
      <path d="M127 99Q131 92 139 94Q146 97 144 104Q139 111 131 108Q125 105 127 99Z" fill="#B5574A" />
      <circle cx="141" cy="106" r="3.2" fill="#F2C14E" />
      <path d="M128 104Q133 101 137 104" stroke={INK.white} strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </>
  ),
  // Dark stoneware bowl; beef, soft egg, nori strips and crispy bits mounded over the rim.
  "beef-bowl": (
    <>
      <Shadow w={104} />
      <rect x="82" y="118" width="36" height="5" rx="1.5" fill={INK.malam} />
      {/* rice and toppings above the rim */}
      <path d="M50 84Q100 50 150 84Z" fill="#F4EEE2" />
      <path d="M58 76Q70 50 98 54Q104 62 96 70Q78 72 58 76Z" fill={INK.goreng} />
      <path
        d="M66 68H92M70 62H96"
        stroke="#C98A2E"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="0.1 5"
      />
      <path d="M118 52L134 74M124 50L142 70M130 50L146 66M113 56L126 76" stroke="#1F2A22" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M50 84Q56 66 80 68Q100 70 106 84Z" fill="#8A5A3C" />
      <path d="M110 84Q116 70 134 72Q150 74 150 84Z" fill="#7A4D33" />
      <path d="M60 78Q70 72 80 76M84 74Q92 72 98 78M118 78Q128 74 138 79" stroke="#EADCC6" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M92 68Q96 54 112 54Q126 58 122 70Q114 78 102 77Q92 76 92 68Z" fill="#FFFDF7" />
      <circle cx="108" cy="65" r="7" fill="#F2B33D" />
      <path d="M72 70l4-3M88 79l4-3M126 76l4-3" stroke={INK.daunMuda} strokeWidth="3" strokeLinecap="round" />
      {/* bowl */}
      <path d="M42 82H158Q156 120 114 120H86Q44 120 42 82Z" fill="#2C3338" />
      <path d="M42 82H158L157.6 86H42.4Z" fill="#3A4247" />
    </>
  ),
};

export default function ProductArt({ id, alt, className = "" }: { id: ProductId; alt: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 200 150"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={alt}
      className={className}
    >
      {ART[id]}
    </svg>
  );
}
