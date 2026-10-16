import Art from "./Art";
import { C, r1, rng } from "./geometry";

// Round pastry-donuts from the display case (photo 2), top-down, 120×120.
const CX = 60;
const CY = 60;
const BASE = 54;
const GLAZE = BASE * 0.8;

const crumble = (() => {
  const rand = rng(14);
  return Array.from({ length: 14 }, (_, i) => {
    const t = (i / 14) * Math.PI * 2 + rand() * 0.2;
    const rr = GLAZE + (rand() - 0.5) * 6;
    return { x: r1(CX + Math.cos(t) * rr), y: r1(CY + Math.sin(t) * rr), r: r1(4 + rand() * 1.6) };
  });
})();

export function DonutPink({ className = "" }: { className?: string }) {
  return (
    <Art id="donut-pink" viewBox="0 0 120 120" className={className}>
      <circle cx={CX} cy={CY} r={BASE} fill={C.pastryBase} />
      <circle cx={CX} cy={CY} r={GLAZE} fill={C.glazePink} />
      {crumble.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={C.crumble} />
      ))}
    </Art>
  );
}

const pearls = [
  [44, 36],
  [53, 31],
  [40, 46],
  [50, 41],
  [60, 35],
  [46, 54],
];

export function DonutBlue({ className = "" }: { className?: string }) {
  return (
    <Art id="donut-blue" viewBox="0 0 120 120" className={className}>
      <circle cx={CX} cy={CY} r={BASE} fill={C.pastryBase} />
      <circle cx={CX} cy={CY} r={GLAZE} fill={C.glazeBlue} />
      <polyline
        points="34,62 46,44 52,82 64,40 70,84 82,46 88,70"
        fill="none"
        stroke={C.drizzle}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {pearls.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={4.5} fill={C.pearl} />
      ))}
    </Art>
  );
}

const dust = (() => {
  const rand = rng(33);
  const out: { x: number; y: number; r: number }[] = [];
  let guard = 0;
  while (out.length < 20 && guard < 500) {
    guard++;
    const t = rand() * Math.PI * 2;
    const rr = Math.sqrt(rand()) * (GLAZE - 6);
    out.push({ x: r1(CX + Math.cos(t) * rr), y: r1(CY + Math.sin(t) * rr), r: r1(1.8 + rand() * 1.6) });
  }
  return out;
})();

export function TiramisuDonut({ className = "" }: { className?: string }) {
  return (
    <Art id="tiramisu-donut" viewBox="0 0 120 120" className={className}>
      <circle cx={CX} cy={CY} r={BASE} fill={C.pastryBase} />
      <circle cx={CX} cy={CY} r={GLAZE} fill={C.cocoa} />
      {dust.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={C.cocoaDust} />
      ))}
    </Art>
  );
}
