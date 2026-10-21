// The Ciliwung seen between the roof beam and the deck rail: khaki water, the far bank's
// leaves along the top, a few glints. Server-rendered SVG, decorative (aria-hidden).
// Three layers share one viewBox and slice crop: water (static), canopy and glints (moved
// by the hero timeline). Glints are kept in the middle 40% so the phone crop shows them.

const W = 1440;
const H = 250;
const VB = `0 0 ${W} ${H}`;

function rng(seed: number) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

// Back canopy: a sunlit daun band with a scalloped lower edge, so the baja steel beam
// above it stays a separate line.
function canopyPath() {
  const r = rng(7);
  // Tree crowns along the far bank: rounded bumps of uneven width and height.
  let d = `M0 0 H${W} V28`;
  let x = W;
  while (x > 0) {
    const w = 60 + r() * 110;
    const nx = Math.max(0, x - w);
    const crown = 44 + r() * 30;
    const join = 22 + r() * 10;
    d += ` C${(x - w * 0.05).toFixed(1)} ${crown.toFixed(1)} ${(nx + w * 0.05).toFixed(1)} ${crown.toFixed(1)} ${nx.toFixed(1)} ${join.toFixed(1)}`;
    x = nx;
  }
  return d + " Z";
}

// Leaves hanging off the canopy edge, pointing down and downstream.
const LEAF = "M0 0 C0.25 -0.3 0.7 -0.34 1 0 C0.7 0.34 0.25 0.3 0 0Z";
function leaves(seed: number, step: number, yMin: number, yRange: number, lenMin: number, lenRange: number) {
  const r = rng(seed);
  const out: { x: number; y: number; a: number; l: number }[] = [];
  for (let x = 6; x < W; x += step + r() * step * 0.6) {
    out.push({ x, y: yMin + r() * yRange, a: 58 + r() * 52, l: lenMin + r() * lenRange });
  }
  return out;
}
const backLeaves = leaves(11, 30, 30, 34, 24, 26);
const frontLeaves = leaves(23, 52, 50, 24, 20, 16);

// [x, y, long, short] — a long stroke with an optional short one trailing it.
const glints: [number, number, number, number][] = [
  [150, 150, 96, 18],
  [470, 206, 72, 0],
  [585, 128, 140, 26],
  [742, 182, 86, 14],
  [905, 222, 60, 0],
  [1160, 142, 118, 20],
];

export default function RiverBand() {
  return (
    <div className="hero-river" aria-hidden="true">
      {/* Water: the reflection of the far bank under the leaves */}
      <svg viewBox={VB} preserveAspectRatio="xMidYMid slice" focusable="false">
        <path
          d={`M0 40 H${W} V66 C1300 78 1180 60 1040 72 C900 84 760 62 620 74 C480 86 340 64 200 76 C120 82 60 72 0 78 Z`}
          fill="var(--color-baja)"
          opacity="0.16"
        />
      </svg>

      <div className="hero-layer hero-canopy">
        <svg viewBox={VB} preserveAspectRatio="xMidYMid slice" focusable="false">
          <path d={canopyPath()} fill="var(--color-daun)" />
          <g fill="var(--color-baja)">
            {backLeaves.map((p, i) => (
              <path key={i} d={LEAF} transform={`translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${p.a.toFixed(1)}) scale(${p.l.toFixed(1)})`} />
            ))}
          </g>
          <g fill="var(--color-daun)">
            {frontLeaves.map((p, i) => (
              <path key={i} d={LEAF} transform={`translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${p.a.toFixed(1)}) scale(${p.l.toFixed(1)})`} />
            ))}
          </g>
        </svg>
      </div>

      <div className="hero-layer hero-glints">
        <svg viewBox={VB} preserveAspectRatio="xMidYMid slice" focusable="false">
          <g stroke="var(--color-batu)" strokeWidth="4" strokeLinecap="round" fill="none">
            {glints.map(([x, y, long, short], i) => (
              <g key={i}>
                <path d={`M${x} ${y} h${long}`} opacity="0.9" />
                {short > 0 && <path d={`M${x + long + 18} ${y} h${short}`} opacity="0.55" />}
              </g>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}
