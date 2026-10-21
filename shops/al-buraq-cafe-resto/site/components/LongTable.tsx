import { mock } from "@/lib/mockup";
import type { Item } from "@/content";

// The long group table in their second room (photo-1), from above: grey embroidered cloth
// with a linen border, foil trays of spiced rice, iced-tea jugs and glasses. No people.
// viewBox 1200x220. On phone and tablet the strip keeps a fixed 180px height and crops
// (xMidYMid slice) to the middle tray and jug; the two labels follow those items (globals.css).
const CLOTH = "#A9B3BF";
const LINEN = "#FBF5F0";
const FOIL = "#CFC9C4";
const FOIL_EDGE = "#B5AEA7";
const RICE = "#E5B55C";
const MEAT = "#73351F";
const FRIED = "#A8692A";
const AMBER = "#E2A23A";
const JUG = "#EDE8E3";

const CY = 96;

const MEAT_PIECES = [
  [-62, -18, 20], [-30, 14, -15], [4, -20, 35], [36, 10, -30], [66, -14, 10], [-58, 24, 45], [20, 26, 5],
];
const BITS = [[-44, -4], [-12, -10], [18, 4], [50, -24], [-20, 28], [56, 24], [-70, 4], [0, 12]];

function Tray({ cx }: { cx: number }) {
  return (
    <g transform={`translate(${cx} ${CY})`}>
      <rect x="-110" y="-60" width="220" height="120" rx="10" fill={FOIL} />
      <rect x="-103" y="-53" width="206" height="106" rx="7" fill="none" stroke={FOIL_EDGE} strokeWidth="2" />
      <rect x="-94" y="-44" width="188" height="88" rx="22" fill={RICE} />
      {BITS.map(([x, y], i) => (
        <circle key={`b${i}`} cx={x} cy={y} r="2.6" fill={FRIED} />
      ))}
      {MEAT_PIECES.map(([x, y, r], i) => (
        <rect key={`m${i}`} x={x - 13} y={y - 10} width="26" height="20" rx="7" fill={MEAT} transform={`rotate(${r} ${x} ${y})`} />
      ))}
    </g>
  );
}

function Jug({ cx, handle }: { cx: number; handle: "up" | "right" }) {
  return (
    <g transform={`translate(${cx} ${CY})`}>
      {handle === "right" ? (
        <>
          <path d="M36-26C74-34 74 34 36 26" fill="none" stroke={JUG} strokeWidth="10" strokeLinecap="round" />
          <path d="M-42-12L-62 0L-42 12Z" fill={JUG} />
        </>
      ) : (
        <>
          <path d="M-26-36C-34-74 34-74 26-36" fill="none" stroke={JUG} strokeWidth="10" strokeLinecap="round" />
          <path d="M-12 42L0 62L12 42Z" fill={JUG} />
        </>
      )}
      <circle r="46" fill={JUG} />
      <circle r="38" fill={AMBER} />
      <g fill={LINEN} fillOpacity="0.5">
        <rect x="-24" y="-18" width="20" height="20" rx="4" transform="rotate(18 -14 -8)" />
        <rect x="4" y="-4" width="20" height="20" rx="4" transform="rotate(-14 14 6)" />
        <rect x="-12" y="10" width="17" height="17" rx="4" transform="rotate(30 -3 18)" />
      </g>
    </g>
  );
}

function Glass({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="21" fill={JUG} />
      <circle cx={cx} cy={cy} r="16" fill={AMBER} />
      <rect x={cx - 6} y={cy - 8} width="11" height="11" rx="2.5" fill={LINEN} fillOpacity="0.5" transform={`rotate(20 ${cx} ${cy})`} />
    </g>
  );
}

export default function LongTable({
  alt,
  trayLabel,
  jugLabel,
}: {
  alt: string;
  trayLabel: Item;
  jugLabel: Item;
}) {
  return (
    <div className="long-table-box relative w-full overflow-hidden">
      <svg
        className="absolute inset-0 block h-full w-full"
        viewBox="0 0 1200 220"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label={alt}
      >
        <defs>
          <pattern id="cloth-lattice" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M0 22L22 0L44 22L22 44Z" fill="none" stroke={LINEN} strokeOpacity="0.2" strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect x="-20" y="14" width="1240" height="192" fill={CLOTH} />
        <rect x="-20" y="14" width="1240" height="192" fill="url(#cloth-lattice)" />
        <rect x="-20" y="14" width="1240" height="8" fill={LINEN} />
        <rect x="-20" y="198" width="1240" height="8" fill={LINEN} />
        <g stroke={LINEN} strokeOpacity="0.5" strokeWidth="2">
          <path d="M-20 30H1220" />
          <path d="M-20 190H1220" />
        </g>

        <Glass cx={30} cy={66} />
        <Glass cx={30} cy={128} />
        <Tray cx={170} />
        <Jug cx={340} handle="up" />
        <Tray cx={540} />
        <Jug cx={730} handle="right" />
        <Glass cx={836} cy={66} />
        <Glass cx={836} cy={128} />
        <Tray cx={990} />
        <Glass cx={1152} cy={66} />
        <Glass cx={1152} cy={128} />
      </svg>
      {/* Labels sit on the cloth, just under the middle tray and jug. */}
      <p className="lt-label lt-label-tray t-small font-medium text-ink" {...mock(trayLabel.mockup)}>
        {trayLabel.text}
      </p>
      <p className="lt-label lt-label-jug t-small font-medium text-ink" {...mock(jugLabel.mockup)}>
        {jugLabel.text}
      </p>
    </div>
  );
}
