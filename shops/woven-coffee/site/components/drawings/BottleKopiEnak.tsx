// Flat front elevation of their KOPI ENA bottle (label reproduced from the shop's own label).
// Exact geometry only: no perspective or shading, strokes ≤ 2px, four fills
// (dinding cap + label, susu fill, kaca ink, cokelat rules).
// The KOPI / ENA letters are drawn as paths so the drawing never depends on a font.
const ink = "var(--color-kaca)";
const wall = "var(--color-dinding)";
const milk = "var(--color-susu)";
const rule = "var(--color-cokelat)";

export default function BottleKopiEnak({ label, className = "" }: { label: string; className?: string }) {
  const body =
    "M74 62 C74 98 18 106 18 154 L18 372 Q18 396 42 396 L178 396 Q202 396 202 372 L202 154 C202 106 146 98 146 62 Z";
  return (
    <svg
      viewBox="0 0 220 400"
      width="220"
      height="400"
      role="img"
      aria-label={label}
      className={className}
      focusable="false"
    >
      <defs>
        <clipPath id="bottle-body">
          <path d={body} />
        </clipPath>
        <clipPath id="label-line-1">
          <rect x="40" y="196" width="140" height="30" />
        </clipPath>
        <clipPath id="label-line-2">
          <rect x="40" y="238" width="140" height="30" />
        </clipPath>
      </defs>

      {/* Bottle: latte fill with a little headspace in the neck */}
      <path d={body} style={{ fill: milk }} />
      <rect x="60" y="54" width="100" height="34" clipPath="url(#bottle-body)" style={{ fill: wall }} />
      <path d={body} fill="none" style={{ stroke: ink }} strokeWidth="2" />

      {/* Ribbed cap and neck ring */}
      <rect x="68" y="46" width="84" height="12" rx="2" style={{ fill: wall, stroke: ink }} strokeWidth="2" />
      <rect x="64" y="4" width="92" height="42" rx="5" style={{ fill: wall, stroke: ink }} strokeWidth="2" />
      <g style={{ stroke: ink }} strokeWidth="1" opacity="0.35">
        {[74, 82, 90, 98, 106, 114, 122, 130, 138, 146].map((x) => (
          <line key={x} x1={x} y1="11" x2={x} y2="39" />
        ))}
      </g>

      {/* Label */}
      <rect x="19" y="168" width="182" height="186" style={{ fill: wall }} />
      <line x1="18" y1="168" x2="202" y2="168" style={{ stroke: ink }} strokeWidth="1" />
      <line x1="18" y1="354" x2="202" y2="354" style={{ stroke: ink }} strokeWidth="1" />
      <rect x="40" y="186" width="140" height="92" fill="none" style={{ stroke: ink }} strokeWidth="2" />

      {/* KOPI */}
      <g clipPath="url(#label-line-1)" fill="none" style={{ stroke: ink }} strokeWidth="6" strokeLinecap="butt">
        <path d="M53 190 V232" />
        <path d="M56 214 L80 190" />
        <path d="M61 209 L82 232" />
        <ellipse cx="105.5" cy="211" rx="13" ry="12" />
        <path d="M133 190 V232" />
        <path d="M133 199 H144 A8.5 8.5 0 0 1 144 216 H133" />
        <path d="M167 190 V232" />
      </g>
      {/* ENA */}
      <g clipPath="url(#label-line-2)" fill="none" style={{ stroke: ink }} strokeWidth="6" strokeLinecap="butt">
        <path d="M53 232 V274" />
        <path d="M50 241 H76" />
        <path d="M50 253 H73" />
        <path d="M50 265 H76" />
        <path d="M91 232 V274" />
        <path d="M119 232 V274" />
        <path d="M91 238 L119 268" />
        <path d="M151 232 L135 274" />
        <path d="M151 232 L167 274" />
        <path d="M141 258 H161" />
      </g>

      <text
        x="110"
        y="294"
        textAnchor="middle"
        style={{ fill: ink, fontFamily: "var(--font-alegreya)", fontStyle: "italic", fontSize: 11 }}
      >
        -White-
      </text>
      <line x1="64" y1="303" x2="156" y2="303" style={{ stroke: rule }} strokeWidth="1.5" />
      <text
        x="110"
        y="317"
        textAnchor="middle"
        style={{ fill: ink, fontFamily: "var(--font-jost)", fontWeight: 500, fontSize: 10.5, letterSpacing: "0.06em" }}
      >
        WOVEN COFFEE
      </text>
      <line x1="64" y1="323" x2="156" y2="323" style={{ stroke: rule }} strokeWidth="1.5" />
      <text x="27" y="344" style={{ fill: ink, fontFamily: "var(--font-alegreya)", fontStyle: "italic", fontSize: 7.5 }}>
        Freshly weaved
      </text>
      <text
        x="193"
        y="344"
        textAnchor="end"
        style={{ fill: ink, fontFamily: "var(--font-alegreya)", fontStyle: "italic", fontSize: 7.5 }}
      >
        Shake well before use
      </text>
    </svg>
  );
}
