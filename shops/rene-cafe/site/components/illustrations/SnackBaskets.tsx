import { C } from "@/lib/palette";

// The two wire fry baskets from photo-2, seen from above on the plank table:
// one with the chocolate-and-cheese snack, one with crackers and a dip cup. 4:3.
function Basket({ x, children }: { x: number; children: React.ReactNode }) {
  return (
    <g>
      <rect x={x + 56} y="226" width="5" height="70" fill={C.besi} />
      <rect x={x} y="64" width="124" height="164" fill="url(#mesh)" />
      <rect x={x + 7} y="71" width="110" height="150" fill={C.rattan} />
      <rect x={x} y="64" width="124" height="164" fill="none" stroke={C.besi} strokeWidth="4" />
      {children}
    </g>
  );
}

// Kerupuk: puffy, wavy-edged crackers
const CRACKERS = [
  "M236 96 C238 84 252 80 262 84 C272 82 280 92 276 102 C280 112 270 120 258 116 C248 122 236 116 238 106 C232 104 232 98 236 96Z",
  "M276 92 C282 82 298 84 304 88 C316 86 322 98 316 106 C320 116 308 124 298 120 C288 126 276 118 278 110 C270 104 270 96 276 92Z",
  "M238 132 C244 122 258 124 264 128 C276 126 282 138 276 146 C280 156 268 164 258 160 C248 166 236 158 238 150 C230 144 232 136 238 132Z",
  "M282 134 C288 124 304 126 310 130 C322 128 328 140 322 148 C326 158 314 166 304 162 C294 168 282 160 284 152 C276 146 276 138 282 134Z",
];

export default function SnackBaskets() {
  return (
    <svg viewBox="0 0 400 300" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="mesh" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" fill={C.wood} />
          <path d="M0 .75H10M.75 0V10" stroke={C.besi} strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill={C.wood} />
      <g fill={C.besi} fillOpacity="0.22">
        <rect x="0" y="54" width="400" height="3" />
        <rect x="0" y="146" width="400" height="3" />
        <rect x="0" y="238" width="400" height="3" />
      </g>

      <g transform="rotate(-6 120 150)">
        <Basket x={52}>
          <rect x="70" y="90" width="88" height="40" rx="18" fill={C.lampu} />
          <rect x="72" y="140" width="86" height="40" rx="18" fill={C.lampu} />
          <path
            d="M72 102 L88 122 L100 96 L114 126 L126 98 L140 126 L152 100 M74 152 L88 172 L102 146 L116 176 L128 148 L142 176 L156 150"
            fill="none"
            stroke={C.joint}
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <g fill={C.ceramic}>
            <rect x="82" y="108" width="8" height="3" transform="rotate(20 86 109)" />
            <rect x="104" y="114" width="8" height="3" transform="rotate(-30 108 115)" />
            <rect x="128" y="108" width="8" height="3" transform="rotate(40 132 109)" />
            <rect x="92" y="160" width="8" height="3" transform="rotate(-15 96 161)" />
            <rect x="118" y="162" width="8" height="3" transform="rotate(35 122 163)" />
            <rect x="140" y="156" width="8" height="3" transform="rotate(-40 144 157)" />
          </g>
        </Basket>
      </g>

      <g transform="rotate(5 282 150)">
        <Basket x={220}>
          {CRACKERS.map((d, i) => (
            <g key={i}>
              <path d={d} fill={C.ceramic} />
              <path d={d} fill={C.lampu} fillOpacity="0.18" />
            </g>
          ))}
          <circle cx="294" cy="194" r="24" fill={C.ceramic} />
          <circle cx="294" cy="194" r="18" fill={C.pucuk} fillOpacity="0.85" />
        </Basket>
      </g>
    </svg>
  );
}
