import type { CSSProperties } from "react";

// The dining room behind the glass at dusk. viewBox 1200×560 in three bands:
// 0–168 lanterns on a black track rail, 168–392 kept deep kaca for the lettering,
// 392–560 wooden tables with pools of lantern light and plants at the edges.
// Each lantern has an "off" paper layer under a .lantern-lit layer; .lantern-pool is
// the light on the table below. Both fade in on load (globals.css, lantern-on).

const LANTERNS = [
  { x: 150, cy: 112, r: 24, near: false },
  { x: 370, cy: 128, r: 32, near: true },
  { x: 600, cy: 102, r: 26, near: false },
  { x: 820, cy: 130, r: 30, near: true },
  { x: 1050, cy: 110, r: 24, near: false },
];

const ribs = (x: number, cy: number, r: number) =>
  [-0.55, 0, 0.55]
    .map((k) => {
      const y = cy + k * r;
      const w = r * Math.sqrt(1 - k * k);
      return `M${(x - w).toFixed(1)} ${y.toFixed(1)}Q${x} ${(y + r * 0.16).toFixed(1)} ${(x + w).toFixed(1)} ${y.toFixed(1)}`;
    })
    .join("");

const leaf = "M0 0Q16-38 0-86Q-16-38 0 0Z";

function Plant({ x, flip = false }: { x: number; flip?: boolean }) {
  const s = flip ? -1 : 1;
  const leaves = [-38, -22, -8, 6, 20, 34, -50, 46];
  return (
    <g transform={`translate(${x} 486) scale(${s} 1)`}>
      {leaves.map((a, i) => (
        <path
          key={i}
          d={leaf}
          fill={i % 2 ? "#2B3A26" : "#33452D"}
          transform={`rotate(${a}) scale(${1 - (i % 3) * 0.12} ${1.25 - (i % 4) * 0.1})`}
        />
      ))}
      <rect x="-34" y="0" width="68" height="80" rx="4" fill="#23271F" />
    </g>
  );
}

function Table({ x, near }: { x: number; near: boolean }) {
  const w = near ? 230 : 170;
  const top = near ? 438 : 418;
  const t = near ? 12 : 9;
  const legBottom = near ? 560 : 512;
  return (
    <g>
      <rect x={x - w / 2 + 14} y={top + t} width="8" height={legBottom - top - t} fill="#2E241A" />
      <rect x={x + w / 2 - 22} y={top + t} width="8" height={legBottom - top - t} fill="#2E241A" />
      <rect x={x - w / 2} y={top} width={w} height={t} fill="#4A3826" />
      <rect x={x - w / 2} y={top + t - 3} width={w} height="3" fill="#3A2B1D" />
    </g>
  );
}

function ChairBack({ x }: { x: number }) {
  return (
    <g>
      <path d={`M${x - 32} 572V492Q${x - 32} 468 ${x - 8} 468H${x + 8}Q${x + 32} 468 ${x + 32} 492V572Z`} fill="#3A2D1F" />
      <path
        d={`M${x - 22} 572V496Q${x - 22} 480 ${x - 6} 480H${x + 6}Q${x + 22} 480 ${x + 22} 496V572Z`}
        fill="#4A3826"
      />
      <path
        d={`M${x - 22} 500H${x + 22}M${x - 22} 514H${x + 22}M${x - 22} 528H${x + 22}M${x - 22} 542H${x + 22}`}
        stroke="#3A2D1F"
        strokeWidth="3"
      />
    </g>
  );
}

export default function InteriorScene({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 560"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label}
    >
      <defs>
        <radialGradient id="mh-glow">
          <stop offset="0" stopColor="#F2B441" stopOpacity="0.55" />
          <stop offset="0.45" stopColor="#F2B441" stopOpacity="0.16" />
          <stop offset="1" stopColor="#F2B441" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mh-paper" cx="0.42" cy="0.4" r="0.62">
          <stop offset="0" stopColor="#FFFBEF" />
          <stop offset="0.6" stopColor="#FBEBC2" />
          <stop offset="1" stopColor="#EBC27A" />
        </radialGradient>
        <radialGradient id="mh-pool">
          <stop offset="0" stopColor="#F2B441" stopOpacity="0.3" />
          <stop offset="0.6" stopColor="#F2B441" stopOpacity="0.15" />
          <stop offset="1" stopColor="#F2B441" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* room: glass at dusk, darker ceiling, far glass wall with garden beyond */}
      <rect width="1200" height="560" fill="#1B2219" />
      <rect width="1200" height="44" fill="#161C15" />
      <g fill="#212A1F">
        <path d="M0 420V318Q60 262 140 300Q200 236 290 286Q360 250 420 300Q500 240 590 292Q660 252 740 296Q820 244 900 290Q980 250 1060 298Q1130 262 1200 300V420Z" />
      </g>
      <g fill="#151A13">
        <rect x="0" y="206" width="1200" height="5" />
        {[90, 300, 510, 720, 930, 1140].map((x) => (
          <rect key={x} x={x} y="150" width="6" height="270" />
        ))}
        <rect x="0" y="420" width="1200" height="140" />
      </g>

      {/* track rail and spots */}
      <rect x="0" y="22" width="1200" height="6" fill="#0D0F0C" />
      <g fill="#0D0F0C">
        {[260, 485, 710, 935].map((x) => (
          <rect key={x} x={x - 5} y="26" width="10" height="18" rx="2" transform={`rotate(-16 ${x} 26)`} />
        ))}
      </g>

      {/* lanterns */}
      <g>
        {LANTERNS.map((l, i) => (
          <g key={l.x} className="lantern" style={{ "--i": i } as CSSProperties}>
            <line x1={l.x} y1="28" x2={l.x} y2={l.cy - l.r - 4} stroke="#3A4236" strokeWidth="2" />
            <rect x={l.x - 6} y={l.cy - l.r - 6} width="12" height="7" rx="1.5" fill="#2A2D27" />
            <circle cx={l.x} cy={l.cy} r={l.r} fill="#8C8A7A" />
            <path d={ribs(l.x, l.cy, l.r)} stroke="#77756A" strokeWidth="1.5" fill="none" />
            <g className="lantern-lit">
              <circle cx={l.x} cy={l.cy} r={l.r * 2.7} fill="url(#mh-glow)" />
              <circle cx={l.x} cy={l.cy} r={l.r} fill="url(#mh-paper)" />
              <path d={ribs(l.x, l.cy, l.r)} stroke="#E0BC74" strokeOpacity="0.75" strokeWidth="1.5" fill="none" />
            </g>
          </g>
        ))}
      </g>

      {/* tables, far ones first */}
      {LANTERNS.filter((l) => !l.near).map((l) => (
        <Table key={l.x} x={l.x} near={false} />
      ))}
      {LANTERNS.filter((l) => l.near).map((l) => (
        <Table key={l.x} x={l.x} near />
      ))}

      {/* light pools on the table tops */}
      <g>
        {LANTERNS.map((l, i) => (
          <ellipse
            key={l.x}
            className="lantern-pool"
            style={{ "--i": i } as CSSProperties}
            cx={l.x}
            cy={l.near ? 442 : 421}
            rx={l.near ? 150 : 110}
            ry={l.near ? 26 : 18}
            fill="url(#mh-pool)"
          />
        ))}
      </g>

      {/* rattan chair backs in front of the near tables */}
      {LANTERNS.filter((l) => l.near).flatMap((l) => [
        <ChairBack key={`${l.x}a`} x={l.x - 62} />,
        <ChairBack key={`${l.x}b`} x={l.x + 62} />,
      ])}

      {/* plants at the edges */}
      <Plant x={42} />
      <Plant x={1158} flip />
    </svg>
  );
}
