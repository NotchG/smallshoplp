import { ink } from "./inks";
import { r1, seeded } from "@/lib/rand";

// ---------- Bolu Pizza: round sponge cake from slightly above, on a scalloped lace doily ----------
const DOILY_C = { x: 210, y: 210 };
const DOILY_R = 190;
const doilyEdge = (() => {
  const n = 40;
  const step = (Math.PI * 2) / n;
  const rb = r1(DOILY_R * Math.sin(step / 2) * 1.02);
  const pt = (i: number) =>
    `${r1(DOILY_C.x + DOILY_R * Math.cos(i * step))} ${r1(DOILY_C.y + DOILY_R * Math.sin(i * step))}`;
  let d = `M${pt(0)}`;
  for (let i = 1; i <= n; i++) d += ` A${rb} ${rb} 0 0 1 ${pt(i)}`;
  return `${d} Z`;
})();

// Lace holes: two rings drawn as dashed strokes with round caps (dots near the edge,
// capsules further in), in the field colour so it shows through. Light on bytes.
const ring = (r: number, count: number, dash: number) => {
  const c = 2 * Math.PI * r;
  const gap = c / count - dash;
  return { r, dasharray: `${r1(dash)} ${r1(gap)}`, offset: r1(-(c / count) / 2) };
};
const HOLES_OUTER = ring(177, 40, 0);
const HOLES_INNER = ring(160, 24, 10);

const CAKE = { x: 210, y: 194, rx: 152, ry: 130, side: 30 };

const lattice = (() => {
  let d = "";
  for (let k = -7; k <= 7; k++) {
    const x = CAKE.x + k * 30;
    d += `M${x} 20q7 40 0 80t0 80t0 80t0 80t0 80`;
  }
  return d;
})();

const SLICES: [number, number][] = [
  [150, 128], [234, 108], [302, 158], [118, 204], [204, 186],
  [282, 232], [166, 268], [246, 284], [334, 214],
];

const cakeCheese = (() => {
  const rnd = seeded(41);
  const out: string[] = [];
  let i = 0;
  while (out.length < 46 && i < 400) {
    i++;
    const u = rnd() * 2 - 1;
    const v = rnd() * 2 - 1;
    if (u * u + v * v > 0.92) continue;
    const x = CAKE.x + u * (CAKE.rx - 10);
    const y = CAKE.y + v * (CAKE.ry - 10);
    const a = rnd() * Math.PI;
    out.push(`M${r1(x)} ${r1(y)}l${r1(Math.cos(a) * 8)} ${r1(Math.sin(a) * 8)}`);
  }
  return out.join("");
})();

export function BoluPizza({
  uid,
  label,
  ground = ink.kuning,
  className,
}: {
  uid: string;
  label: string;
  ground?: string;
  className?: string;
}) {
  const top = `${uid}-top`;
  return (
    <svg viewBox="0 0 420 420" role="img" aria-label={label} className={className} focusable="false">
      <defs>
        <clipPath id={top}>
          <ellipse cx={CAKE.x} cy={CAKE.y} rx={CAKE.rx - 6} ry={CAKE.ry - 6} />
        </clipPath>
      </defs>
      <path d={doilyEdge} fill={ink.white} />
      <circle
        cx={DOILY_C.x}
        cy={DOILY_C.y}
        r={HOLES_OUTER.r}
        fill="none"
        stroke={ground}
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray={HOLES_OUTER.dasharray}
        strokeDashoffset={HOLES_OUTER.offset}
      />
      <circle
        cx={DOILY_C.x}
        cy={DOILY_C.y}
        r={HOLES_INNER.r}
        fill="none"
        stroke={ground}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={HOLES_INNER.dasharray}
      />
      {/* side of the cake, then the top */}
      <ellipse cx={CAKE.x} cy={CAKE.y + CAKE.side} rx={CAKE.rx} ry={CAKE.ry} fill={ink.crust} />
      <rect x={CAKE.x - CAKE.rx} y={CAKE.y} width={CAKE.rx * 2} height={CAKE.side} fill={ink.crust} />
      <ellipse cx={CAKE.x} cy={CAKE.y} rx={CAKE.rx} ry={CAKE.ry} fill={ink.cookieShade} />
      <g clipPath={`url(#${top})`}>
        <g fill="none" stroke={ink.sausage} strokeWidth="6.5" strokeLinecap="round">
          <path d={lattice} transform={`rotate(34 ${CAKE.x} ${CAKE.y})`} />
          <path d={lattice} transform={`rotate(-34 ${CAKE.x} ${CAKE.y})`} />
        </g>
        {SLICES.map(([x, y], i) => (
          <ellipse key={i} cx={x} cy={y} rx="19" ry="16" fill={ink.slice} stroke={ink.sausage} strokeWidth="3.5" />
        ))}
        <path d={cakeCheese} fill="none" stroke={ink.cheese} strokeWidth="2.8" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// ---------- Kue Semprit Keju: round clear jar from above, packed with black fluted cases ----------
const JAR = { x: 210, y: 210 };
const caseEdge = (() => {
  const n = 18;
  let d = "";
  for (let i = 0; i <= n * 2; i++) {
    const a = (i / (n * 2)) * Math.PI * 2;
    const r = i % 2 === 0 ? 31 : 27.5;
    d += `${i === 0 ? "M" : "L"}${r1(Math.cos(a) * r)} ${r1(Math.sin(a) * r)}`;
  }
  return `${d}Z`;
})();
// Piped rosette: round, ten soft lobes, swirl ridges toward the centre.
const ROSETTE_LOBES = 10;
const rosette = (() => {
  const n = ROSETTE_LOBES;
  const at = (a: number, r: number) => `${r1(Math.cos(a) * r)} ${r1(Math.sin(a) * r)}`;
  let d = `M${at(0, 19)}`;
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2;
    const a1 = ((i + 1) / n) * Math.PI * 2;
    d += ` Q${at((a0 + a1) / 2, 28)} ${at(a1, 19)}`;
  }
  return `${d}Z`;
})();
const ridges = (() => {
  const n = ROSETTE_LOBES;
  const at = (a: number, r: number) => `${r1(Math.cos(a) * r)} ${r1(Math.sin(a) * r)}`;
  let d = "";
  for (let i = 0; i < n; i++) {
    const a = ((i + 0.5) / n) * Math.PI * 2;
    d += `M${at(a + 0.9, 4)}Q${at(a + 0.35, 13)} ${at(a, 20)}`;
  }
  return d;
})();
const cups = (() => {
  const out: { x: number; y: number; r: number }[] = [];
  const rnd = seeded(7);
  for (let j = -4; j <= 4; j++) {
    const y = JAR.y + j * 54;
    const off = Math.abs(j) % 2 === 1 ? 31 : 0;
    for (let i = -4; i <= 4; i++) {
      const x = JAR.x + i * 62 + off;
      if (Math.hypot(x - JAR.x, y - JAR.y) <= 186) out.push({ x, y, r: Math.round((rnd() - 0.5) * 40) });
    }
  }
  return out;
})();

export function ToplesSemprit({
  uid,
  label,
  className,
}: {
  uid: string;
  label: string;
  className?: string;
}) {
  const inner = `${uid}-inner`;
  const cup = `${uid}-cup`;
  return (
    <svg viewBox="0 0 420 420" role="img" aria-label={label} className={className} focusable="false">
      <defs>
        <clipPath id={inner}>
          <circle cx={JAR.x} cy={JAR.y} r="178" />
        </clipPath>
        <g id={cup}>
          <path d={caseEdge} fill={ink.paperCase} />
          <path d={rosette} fill={ink.cookie} />
          <path d={ridges} fill="none" stroke={ink.cookieShade} strokeWidth="2.6" strokeLinecap="round" />
          <circle r="3.2" fill={ink.cookieShade} />
        </g>
      </defs>
      <circle cx={JAR.x} cy={JAR.y} r="198" fill={ink.white} fillOpacity="0.6" stroke={ink.bagEdge} strokeWidth="3" />
      <circle cx={JAR.x} cy={JAR.y} r="187" fill="none" stroke={ink.bagEdge} strokeWidth="2" />
      <circle cx={JAR.x} cy={JAR.y} r="178" fill={ink.cookieShade} />
      <g clipPath={`url(#${inner})`}>
        {cups.map((c, i) => (
          <use key={i} href={`#${cup}`} transform={`translate(${c.x} ${c.y}) rotate(${c.r})`} />
        ))}
      </g>
      <path
        d="M29.6 144.3 A192 192 0 0 1 144.3 29.6"
        fill="none"
        stroke={ink.white}
        strokeOpacity="0.9"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
