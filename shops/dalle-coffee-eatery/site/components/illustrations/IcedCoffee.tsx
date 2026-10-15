import { ink, line } from "./palette";

// Dalle Iced Coffee: clear cup, coffee under a milk layer, ice, flat sip lid. No straw.
const CUP = "M18 50 H122 L108 212 H32 Z";
const MILK = "M21.4 58 H118.6 L114.6 104 C 100 98, 86 112, 70 106 C 54 100, 40 112, 25.4 106 Z";
const COFFEE = "M25.4 106 C 40 112, 54 100, 70 106 C 86 112, 100 98, 114.6 104 L105.6 209 H34.4 Z";

export default function IcedCoffee({ label }: { label: string }) {
  return (
    <svg className="illus" viewBox="0 0 140 220" role="img" aria-label={label}>
      <path d={CUP} fill={ink.light} fillOpacity={0.4} />
      <path d={MILK} fill={ink.milk} />
      <path d={COFFEE} fill={ink.coffee} />
      <path d="M25.4 106 C 40 112, 54 100, 70 106 C 86 112, 100 98, 114.6 104" fill="none" {...line} />
      {/* ice */}
      <rect x={30} y={66} width={24} height={24} rx={4} fill={ink.light} fillOpacity={0.7} transform="rotate(-8 42 78)" {...line} />
      <rect x={78} y={70} width={24} height={24} rx={4} fill={ink.light} fillOpacity={0.7} transform="rotate(10 90 82)" {...line} />
      <rect x={48} y={128} width={22} height={22} rx={4} fill={ink.light} fillOpacity={0.35} transform="rotate(12 59 139)" {...line} />
      <rect x={80} y={150} width={22} height={22} rx={4} fill={ink.light} fillOpacity={0.35} transform="rotate(-10 91 161)" {...line} />
      {/* printed arch, light on the coffee */}
      <path d="M60 196 V178 A10 10 0 0 1 80 178 V196 Z" fill="none" stroke={ink.light} strokeWidth={2} strokeLinejoin="round" />
      {/* cup outline */}
      <path d={CUP} fill="none" {...line} />
      {/* flat sip lid */}
      <path d="M86 42 V37 A4 4 0 0 1 90 33 H104 A4 4 0 0 1 108 37 V42" fill={ink.light} {...line} />
      <rect x={12} y={41} width={116} height={11} rx={4} fill={ink.light} {...line} />
    </svg>
  );
}
