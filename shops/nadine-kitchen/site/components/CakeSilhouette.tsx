// Flat side-view cake silhouettes, all drawn in centimetres and rendered at one shared
// scale (--cm: 5px phone, 8px desktop), so the sizes compare at a glance.
// Bubblegum body, white drip edge, Grape 2px outline, Fondant board; the cupcake has a Butter cup.

type Kind = "d16" | "d20" | "tier2" | "cupcake";

const C = {
  body: "var(--color-bubblegum)",
  line: "var(--color-grape)",
  board: "var(--color-fondant)",
  drip: "#ffffff",
  cup: "var(--color-butter)",
};

const DRIP_LENGTHS = [1.3, 2.3, 0.9, 2.7, 1.5, 2.0, 1.1, 2.4];

function dripPath(x: number, y: number, w: number, band: number, seed: number) {
  const n = Math.max(3, Math.round(w / 2.3));
  const step = w / n;
  const r = 0.42;
  let d = `M${x},${y} H${x + w} V${y + band}`;
  for (let k = n - 1; k >= 0; k--) {
    const cx = x + step * (k + 0.5);
    const len = DRIP_LENGTHS[(k + seed) % DRIP_LENGTHS.length];
    const yb = y + band;
    d += ` H${(cx + r).toFixed(2)} V${(yb + len).toFixed(2)} A${r},${r} 0 0 1 ${(cx - r).toFixed(2)},${(yb + len).toFixed(2)} V${yb}`;
  }
  return `${d} H${x} Z`;
}

function Tier({
  x,
  y,
  w,
  h,
  id,
  seed,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  id: string;
  seed: number;
}) {
  const rx = 0.7;
  return (
    <g>
      <clipPath id={id}>
        <rect x={x} y={y} width={w} height={h} rx={rx} />
      </clipPath>
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={C.body} />
      <g clipPath={`url(#${id})`}>
        <path
          d={dripPath(x, y, w, 1.5, seed)}
          fill={C.drip}
          stroke={C.line}
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
        />
      </g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={rx}
        fill="none"
        stroke={C.line}
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
    </g>
  );
}

function Board({ cx, cy, rx }: { cx: number; cy: number; rx: number }) {
  return (
    <ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={0.65}
      fill={C.board}
      stroke={C.line}
      strokeWidth={2}
      vectorEffect="non-scaling-stroke"
    />
  );
}

// Each drawing: viewBox in cm. Bottom of the board = bottom of the viewBox (shared baseline).
const SPECS: Record<Kind, { w: number; h: number }> = {
  d16: { w: 22, h: 15.4 },
  d20: { w: 26, h: 18.8 },
  tier2: { w: 26, h: 22 },
  cupcake: { w: 9, h: 8.6 },
};

export default function CakeSilhouette({ kind }: { kind: Kind }) {
  const { w, h } = SPECS[kind];
  const base = h - 0.7; // board centre line
  let art: React.ReactNode;

  if (kind === "d16" || kind === "d20") {
    const D = kind === "d16" ? 16 : 20;
    const H = 0.85 * D; // the shop's cakes are tall
    art = (
      <>
        <Tier x={(w - D) / 2} y={base - H} w={D} h={H} id={`clip-${kind}`} seed={kind === "d16" ? 0 : 3} />
        <Board cx={w / 2} cy={base} rx={(D + 5) / 2} />
      </>
    );
  } else if (kind === "tier2") {
    const B = { d: 20, h: 11 };
    const T = { d: 14, h: 9 };
    art = (
      <>
        <Tier x={(w - B.d) / 2} y={base - B.h} w={B.d} h={B.h} id="clip-t2b" seed={5} />
        <Tier x={(w - T.d) / 2} y={base - B.h - T.h} w={T.d} h={T.h} id="clip-t2t" seed={1} />
        <Board cx={w / 2} cy={base} rx={(B.d + 5) / 2} />
      </>
    );
  } else {
    // Cupcake: Butter cup with ridges, Bubblegum swirl.
    const cx = w / 2;
    const cupTop = base - 3.8;
    const cupTopW = 5.6;
    const cupBotW = 4.4;
    const ridges = [-1.6, -0.8, 0, 0.8, 1.6];
    art = (
      <>
        <path
          d={`M${cx - 3.1},${cupTop} C${cx - 3.4},${cupTop - 1.6} ${cx - 2.2},${cupTop - 2.2} ${cx - 1.6},${cupTop - 2.3}
             C${cx - 1.9},${cupTop - 3.6} ${cx - 0.6},${cupTop - 4.4} ${cx},${cupTop - 4.6}
             C${cx + 0.6},${cupTop - 4.4} ${cx + 1.9},${cupTop - 3.6} ${cx + 1.6},${cupTop - 2.3}
             C${cx + 2.2},${cupTop - 2.2} ${cx + 3.4},${cupTop - 1.6} ${cx + 3.1},${cupTop} Z`}
          fill={C.body}
          stroke={C.line}
          strokeWidth={2}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M${cx - 2.2},${cupTop - 2.25} Q${cx},${cupTop - 1.5} ${cx + 2.2},${cupTop - 2.25}`}
          fill="none"
          stroke={C.line}
          strokeWidth={1.5}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M${cx - cupTopW / 2},${cupTop} L${cx + cupTopW / 2},${cupTop} L${cx + cupBotW / 2},${base} L${cx - cupBotW / 2},${base} Z`}
          fill={C.cup}
          stroke={C.line}
          strokeWidth={2}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        {ridges.map((dx) => (
          <line
            key={dx}
            x1={cx + dx * (cupTopW / 4.4)}
            y1={cupTop + 0.5}
            x2={cx + dx}
            y2={base - 0.4}
            stroke={C.line}
            strokeWidth={1.25}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <Board cx={cx} cy={base} rx={3.6} />
      </>
    );
  }

  return (
    <svg
      viewBox={`-0.2 -0.2 ${w + 0.4} ${h + 0.2}`}
      style={{ width: `calc(${w + 0.4} * var(--cm))`, height: `calc(${h + 0.2} * var(--cm))` }}
      aria-hidden="true"
      focusable="false"
      className="block overflow-visible"
    >
      {art}
    </svg>
  );
}
