import Art from "./Art";
import { C, r1, rng, wisp } from "./geometry";

// Abon gulung, top-down: a stadium log of bun covered in two-tone floss wisps (a fuzzy
// edge keeps it reading as floss, not sprinkles), plus one round slice lying flat beside
// it: crumb, a 2.5-turn spiral, and a ring of floss.
const LOG = { cx: 196, cy: 146, half: 112, r: 56, angle: -12 };

function insideStadium(x: number, y: number, pad: number) {
  const ax = Math.max(Math.abs(x) - LOG.half, 0);
  return ax * ax + y * y <= (LOG.r - pad) * (LOG.r - pad);
}

// Point and tangent angle at distance s along the stadium outline.
function onOutline(s: number) {
  const { half, r } = LOG;
  const straight = 2 * half;
  const arc = Math.PI * r;
  if (s < straight) return { x: -half + s, y: -r, t: 0 };
  s -= straight;
  if (s < arc) {
    const th = -Math.PI / 2 + s / r;
    return { x: half + r * Math.cos(th), y: r * Math.sin(th), t: th + Math.PI / 2 };
  }
  s -= arc;
  if (s < straight) return { x: half - s, y: r, t: Math.PI };
  s -= straight;
  const th = Math.PI / 2 + s / r;
  return { x: -half + r * Math.cos(th), y: r * Math.sin(th), t: th + Math.PI / 2 };
}

const floss = (() => {
  const rand = rng(21);
  const out: { d: string; dark: boolean }[] = [];
  let guard = 0;
  while (out.length < 58 && guard < 3000) {
    guard++;
    const x = (rand() * 2 - 1) * (LOG.half + LOG.r);
    const y = (rand() * 2 - 1) * LOG.r;
    if (!insideStadium(x, y, 9)) continue;
    out.push({
      d: wisp(x, y, rand() * Math.PI, 15 + rand() * 12, (rand() - 0.5) * 10),
      dark: rand() < 0.5,
    });
  }
  // fuzzy edge: wisps that straddle the outline, roughly along it
  const per = 4 * LOG.half + 2 * Math.PI * LOG.r;
  const n = 40;
  for (let i = 0; i < n; i++) {
    const p = onOutline(((i + rand() * 0.6) / n) * per);
    out.push({
      d: wisp(p.x, p.y, p.t + (rand() - 0.5) * 1.3, 14 + rand() * 8, (rand() - 0.5) * 8),
      dark: i % 3 !== 0,
    });
  }
  return out;
})();

const SLICE = { cx: 454, cy: 176, r: 78 };

const ringWisps = (() => {
  const rand = rng(7);
  const out: { d: string; dark: boolean }[] = [];
  for (let i = 0; i < 30; i++) {
    const th = (i / 30) * Math.PI * 2 + rand() * 0.15;
    const edge = i % 2 === 0; // alternate: straddling the outer edge, or inside the band
    const rr = edge ? SLICE.r - 1 : SLICE.r - 11 + rand() * 3;
    const a = th + Math.PI / 2 + (rand() - 0.5) * 1.1;
    out.push({
      d: wisp(SLICE.cx + Math.cos(th) * rr, SLICE.cy + Math.sin(th) * rr, a, 13 + rand() * 7, (rand() - 0.5) * 7),
      dark: edge,
    });
  }
  return out;
})();

const spiral = (() => {
  const turns = 2.5;
  const steps = 90;
  const r0 = 3;
  const rMax = 52;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * turns * Math.PI * 2;
    const r = r0 + (rMax - r0) * (i / steps);
    pts.push(`${r1(SLICE.cx + Math.cos(t) * r)} ${r1(SLICE.cy + Math.sin(t) * r)}`);
  }
  return `M${pts.join("L")}`;
})();

// Two paths per object (one per floss tone) keep the markup small.
const joined = (list: { d: string; dark: boolean }[], dark: boolean) =>
  list.filter((f) => f.dark === dark).map((f) => f.d).join("");

export default function AbonGulung({ className = "" }: { className?: string }) {
  const w = (LOG.half + LOG.r) * 2;
  return (
    <Art id="abon-gulung" viewBox="0 0 560 290" className={className}>
      <g transform={`translate(${LOG.cx} ${LOG.cy}) rotate(${LOG.angle})`}>
        <rect x={-w / 2} y={-LOG.r} width={w} height={LOG.r * 2} rx={LOG.r} fill={C.bun} />
        <g strokeWidth="5" strokeLinecap="round" fill="none">
          <path d={joined(floss, false)} stroke={C.flossLight} />
          <path d={joined(floss, true)} stroke={C.flossDark} />
        </g>
      </g>
      <g>
        <circle cx={SLICE.cx} cy={SLICE.cy} r={SLICE.r - 2} fill={C.flossDark} />
        <circle cx={SLICE.cx} cy={SLICE.cy} r={SLICE.r - 16} fill={C.bun} />
        <g strokeWidth="5" strokeLinecap="round" fill="none">
          <path d={joined(ringWisps, false)} stroke={C.flossLight} />
          <path d={joined(ringWisps, true)} stroke={C.flossDark} />
        </g>
        <circle cx={SLICE.cx} cy={SLICE.cy} r={SLICE.r - 20} fill={C.crumb} />
        <path d={spiral} fill="none" stroke={C.bun} strokeWidth="5" strokeLinecap="round" />
      </g>
    </Art>
  );
}
