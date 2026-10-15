import { artLabels } from "@/content";
import { fill } from "@/lib/art";

export type PlateArtId = "frenchToast" | "salad" | "sandwich" | "pastri";

// Plates seen from above on the wood, lit by low afternoon sun from the upper left, so every
// shadow falls long to the lower right (photos 2–3). Plate = lampu, rim = tinta, shadow = tinta 25%.
const C = 104; // plate centre
const R = 84; // plate radius incl. rim

function LongShadow() {
  // Union of the plate at rest and the plate pushed 40 units down-right, plus the band between.
  const o = 40;
  const p = R * Math.SQRT1_2;
  const pts = [
    [C + p, C - p],
    [C + o + p, C + o - p],
    [C + o - p, C + o + p],
    [C - p, C + p],
  ]
    .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  return (
    <g fill={fill.tinta} opacity="0.25">
      <circle cx={C} cy={C} r={R} />
      <circle cx={C + o} cy={C + o} r={R} />
      <polygon points={pts} />
    </g>
  );
}

function Plate({ bowl = false }: { bowl?: boolean }) {
  return (
    <>
      <circle cx={C} cy={C} r={R} fill={fill.tinta} />
      <circle cx={C} cy={C} r={R - 2.5} fill={fill.lampu} />
      <circle
        cx={C}
        cy={C}
        r={bowl ? 70 : 62}
        fill="none"
        stroke={fill.tinta}
        strokeOpacity={bowl ? 0.14 : 0.08}
        strokeWidth={bowl ? 2 : 1.5}
      />
    </>
  );
}

const berry = "M0 -9 C6 -9 9 -3 7 3 C5 8 2 10 0 11 C-2 10 -5 8 -7 3 C-9 -3 -6 -9 0 -9 Z";

function Strawberry({ x, y, rot = 0 }: { x: number; y: number; rot?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(1.3)`}>
      <path d={berry} fill={fill.strawberry} />
      <path d={berry} transform="scale(0.58) translate(0 2)" fill={fill.lampu} fillOpacity="0.5" />
      <path d="M0 -8 L-5 -12 M0 -8 L0 -14 M0 -8 L5 -12" stroke={fill.leafDark} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
}

// Ice-cream scoop from above: a circle with a soft ruffled edge.
function scoopPath(cx: number, cy: number, r: number, bumps = 8, depth = 0.7) {
  const pts: string[] = [];
  const n = 72;
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    const rr = r + depth * Math.sin(bumps * t);
    pts.push(`${(cx + rr * Math.cos(t)).toFixed(1)} ${(cy + rr * Math.sin(t)).toFixed(1)}`);
  }
  return `M${pts.join(" L")} Z`;
}

// Croissant from above: a moon crescent (outer circle r34 minus an inner circle r22 set 16
// lower), so it's fat in the middle with curling horns. Segment lines run out from the inner
// centre, bowing slightly toward the tips.
const crescent = "M-17.7 29 A34 34 0 1 1 17.7 29 A22 22 0 1 0 -17.7 29 Z";
const rollLines = [-66, -24, 24, 66].map((deg) => {
  const t = (deg * Math.PI) / 180;
  const ex = 44 * Math.sin(t);
  const ey = 16 - 44 * Math.cos(t);
  const bow = deg < 0 ? -4 : 4;
  const mx = 22 * Math.sin(t) + bow * Math.cos(t);
  const my = 16 - 22 * Math.cos(t) + bow * Math.sin(t);
  return `M0 16 Q${mx.toFixed(1)} ${my.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
});
function Croissant({ clipId, shadow = false }: { clipId: string; shadow?: boolean }) {
  if (shadow) return <path d={crescent} fill={fill.tinta} />;
  return (
    <g>
      <path d={crescent} fill={fill.toast} />
      <g clipPath={`url(#${clipId})`} fill="none" stroke={fill.toastDark} strokeWidth="2.4" strokeLinecap="round">
        {rollLines.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={crescent} fill="none" stroke={fill.toastDark} strokeWidth="2.4" strokeLinejoin="round" />
    </g>
  );
}

export default function PlateArt({ id, uid, className = "" }: { id: PlateArtId; uid: string; className?: string }) {
  return (
    <svg role="img" aria-label={artLabels[id]} viewBox="18 18 222 222" className={`art-svg ${className}`}>
      <LongShadow />
      <Plate bowl={id === "salad"} />

      {id === "frenchToast" && (
        <>
          <ellipse cx="58" cy="146" rx="7" ry="4" fill={fill.toastDark} fillOpacity="0.55" />
          <ellipse cx="152" cy="150" rx="5" ry="3" fill={fill.toastDark} fillOpacity="0.55" />
          <g transform={`rotate(-8 ${C} ${C})`}>
            <rect x="68" y="72" width="86" height="76" rx="10" fill={fill.tinta} opacity="0.18" />
            <rect x="62" y="66" width="86" height="76" rx="10" fill={fill.toastDark} />
            <rect x="67" y="71" width="76" height="66" rx="7" fill={fill.toast} />
            <path d="M74 120 l6 -3 M120 80 l5 2 M128 126 l6 -2 M78 84 l4 4" stroke={fill.toastDark} strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <path d={scoopPath(99, 101, 18)} fill={fill.tinta} opacity="0.18" />
          <path d={scoopPath(94, 96, 18)} fill={fill.lampu} />
          <path d={scoopPath(127, 119, 16)} fill={fill.tinta} opacity="0.18" />
          <path d={scoopPath(122, 114, 16)} fill={fill.lampu} />
          <Strawberry x={126} y={82} rot={40} />
          <Strawberry x={80} y={124} rot={-140} />
        </>
      )}

      {id === "salad" && (
        <>
          {(
            [
              [80, 82, 24, 14, -30, "leafDark"],
              [128, 78, 22, 13, 25, "leafDark"],
              [78, 124, 22, 12, 40, "leafDark"],
              [124, 128, 24, 13, -35, "leafDark"],
              [104, 102, 26, 15, 5, "leafDark"],
              [94, 70, 20, 11, 10, "leaf"],
              [140, 102, 20, 11, -70, "leaf"],
              [68, 102, 20, 11, 80, "leaf"],
              [104, 136, 22, 12, -10, "leaf"],
              [98, 96, 18, 10, -40, "leaf"],
              [120, 92, 18, 10, 30, "leaf"],
              [86, 112, 16, 9, 60, "leaf"],
            ] as const
          ).map(([x, y, rx, ry, rot, tone], i) => (
            <ellipse key={i} cx={x} cy={y} rx={rx} ry={ry} transform={`rotate(${rot} ${x} ${y})`} fill={fill[tone]} />
          ))}
          <rect x="84" y="112" width="7" height="7" rx="1.5" transform="rotate(20 87 115)" fill={fill.strawberry} />
          <rect x="116" y="82" width="6" height="6" rx="1.5" transform="rotate(-15 119 85)" fill={fill.strawberry} />
          <rect x="80" y="88" width="6" height="6" rx="1.5" transform="rotate(35 83 91)" fill={fill.strawberry} />
          <path
            d="M62 90 C68 78 76 78 82 90 S96 102 102 90 S116 78 122 90 S134 100 142 92"
            fill="none"
            stroke={fill.lampu}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M70 112 C75 104 81 104 86 112 S98 120 103 112 S115 104 120 110"
            fill="none"
            stroke={fill.lampu}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="144" cy="142" r="22" fill={fill.tinta} opacity="0.2" />
          <circle cx="138" cy="136" r="22" fill={fill.lampu} />
          <circle cx="138" cy="136" r="22" fill="none" stroke={fill.tinta} strokeOpacity="0.25" strokeWidth="1.5" />
          <circle cx="138" cy="136" r="16.5" fill={fill.strawberry} />
          <circle cx="133" cy="132" r="1.4" fill={fill.leafDark} />
          <circle cx="141" cy="139" r="1.2" fill={fill.leafDark} />
          <circle cx="142" cy="131" r="1.1" fill={fill.leafDark} />
        </>
      )}

      {id === "sandwich" && (
        <>
          <defs>
            <clipPath id={`${uid}-a`}>
              <polygon points="54,58 146,58 54,150" />
            </clipPath>
            <clipPath id={`${uid}-b`}>
              <polygon points="154,72 154,158 68,158" />
            </clipPath>
          </defs>
          <g fill={fill.tinta} stroke={fill.tinta} strokeWidth="9" strokeLinejoin="round" opacity="0.18">
            <polygon points="60,64 152,64 60,156" />
            <polygon points="160,78 160,164 74,164" />
          </g>
          <path d="M140 72.5 L66 146.5 M146 71.5 L74 143.5" stroke={fill.leaf} strokeWidth="7" strokeLinecap="round" />
          <g fill={fill.toast} stroke={fill.toastDark} strokeWidth="9" strokeLinejoin="round">
            <polygon points="54,58 146,58 54,150" />
            <polygon points="154,72 154,158 68,158" />
          </g>
          <g stroke={fill.toastDark} strokeWidth="3.5" strokeOpacity="0.6" strokeLinecap="round">
            <g clipPath={`url(#${uid}-a)`}>
              <path d="M40 60 L120 140 M40 34 L130 124 M40 86 L110 156" />
            </g>
            <g clipPath={`url(#${uid}-b)`}>
              <path d="M90 84 L170 164 M116 84 L176 144 M70 110 L130 170" />
            </g>
          </g>
        </>
      )}

      {id === "pastri" && (
        <>
          <defs>
            <clipPath id={`${uid}-cr`}>
              <path d={crescent} />
            </clipPath>
          </defs>
          <g transform="translate(84 96) rotate(-25) scale(0.95)">
            <g transform="translate(2.1 6.4)" opacity="0.18">
              <Croissant clipId={`${uid}-cr`} shadow />
            </g>
            <Croissant clipId={`${uid}-cr`} />
          </g>
          <g transform="translate(130 122) rotate(155) scale(0.95)">
            <g transform="translate(-2.1 -6.4)" opacity="0.18">
              <Croissant clipId={`${uid}-cr`} shadow />
            </g>
            <Croissant clipId={`${uid}-cr`} />
          </g>
        </>
      )}
    </svg>
  );
}
