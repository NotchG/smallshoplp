import type { ReactNode } from "react";
import { ink } from "./inks";

// The clear printed bag every bread is sold in: film, crimped seal, highlight stripes and the
// printed label (orange arc band + cobalt "LM" roundel). No mascot, no other bag text.
const BODY = "M16 36 H184 V256 Q184 272 168 272 H32 Q16 272 16 256 Z";
const SEAL = (() => {
  let d = "M16 36 V19";
  for (let x = 16; x < 184; x += 12) d += ` L${x + 6} 12 L${x + 12} 19`;
  return `${d} V36 Z`;
})();

export default function BreadBag({
  label,
  decorative = false,
  className,
  children,
}: {
  label: string;
  decorative?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const a11y = decorative ? { "aria-hidden": true } : { role: "img", "aria-label": label };
  return (
    <svg viewBox="0 0 200 280" className={className} {...a11y} focusable="false">
      <path d={BODY} fill={ink.white} fillOpacity="0.55" stroke={ink.bagEdge} strokeWidth="1.5" />
      <path d={SEAL} fill={ink.white} fillOpacity="0.85" stroke={ink.bagEdge} strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="19" y1="28" x2="181" y2="28" stroke={ink.bagEdge} strokeWidth="11" strokeDasharray="1.5 4.5" />
      {children}
      <path d={BODY} fill={ink.white} fillOpacity="0.12" />
      <path d="M40 46 L57 44 L45 266 L29 266 Z" fill={ink.white} fillOpacity="0.5" />
      <path d="M64 45 L69 45 L58 266 L53 266 Z" fill={ink.white} fillOpacity="0.35" />
      {/* printed label, set off-centre and slightly turned like a real bag */}
      <g transform="rotate(-9 92 116)">
        <path d="M42 126 Q92 58 142 126" fill="none" stroke={ink.oranye} strokeWidth="13" strokeLinecap="round" />
        <path d="M47 124 Q92 63 137 124" fill="none" stroke={ink.kuning} strokeWidth="2" strokeLinecap="round" strokeDasharray="6 5" />
        <circle cx="92" cy="122" r="21" fill={ink.biru} stroke={ink.white} strokeWidth="3.5" />
        <text
          x="92"
          y="129"
          textAnchor="middle"
          fontSize="18"
          fontWeight="800"
          fill={ink.kuning}
          style={{ fontFamily: "var(--font-body)" }}
        >
          LM
        </text>
      </g>
    </svg>
  );
}
