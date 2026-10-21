import { rng } from "@/lib/rng";

const r1 = (n: number) => Math.round(n);

// [MOCKUP] Nasi Goreng Rasaharsa, seen from above on the jati band: kapur plate, fried rice
// in a pinus tint, a fried egg with a pinus yolk and crisp edge, cucumber, two krupuk.
// Same flat style as the drinks: palette fills only, one flat baja 15% shadow.

const CX = 170, CY = 160, PLATE = 136;

function blob(cx: number, cy: number, r: number, wobble: number, lobes: number, seed: number, n = 28) {
  const rand = rng(seed);
  const phase = rand() * Math.PI * 2;
  const pts: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const rr = r * (1 + wobble * Math.sin(a * lobes + phase) + (rand() - 0.5) * wobble * 0.6);
    pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
  }
  // Closed smooth curve through the points (midpoint quadratic smoothing).
  const mid = (p: [number, number], q: [number, number]) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  const m0 = mid(pts[n - 1], pts[0]);
  let d = `M${r1(m0[0])} ${r1(m0[1])}`;
  for (let i = 0; i < n; i++) {
    const p = pts[i], m = mid(p, pts[(i + 1) % n]);
    d += `Q${r1(p[0])} ${r1(p[1])} ${r1(m[0])} ${r1(m[1])}`;
  }
  return d + "Z";
}

function grains() {
  const rand = rng(77);
  const out: { x: number; y: number; a: number; kind: "grain" | "bit" | "leek" }[] = [];
  let tries = 0;
  while (out.length < 64 && tries < 600) {
    tries++;
    const a = rand() * Math.PI * 2, d = Math.sqrt(rand()) * 70;
    const x = 150 + Math.cos(a) * d, y = 172 + Math.sin(a) * d;
    // keep clear of the egg
    if (Math.hypot(x - 198, y - 128) < 48) continue;
    const roll = rand();
    out.push({ x, y, a: rand() * 180, kind: roll < 0.74 ? "grain" : roll < 0.9 ? "bit" : "leek" });
  }
  return out;
}

const RICE = blob(150, 172, 80, 0.07, 5, 11);
const EGG = blob(198, 126, 46, 0.1, 4, 23, 24);
const KRUPUK_A = blob(66, 70, 40, 0.035, 17, 5, 68);
const KRUPUK_B = blob(112, 40, 30, 0.04, 14, 9, 56);
const GRAINS = grains();
const seg = (g: { x: number; y: number; a: number }) => {
  const rad = (g.a * Math.PI) / 180, dx = Math.cos(rad) * 2.6, dy = Math.sin(rad) * 2.6;
  return `M${r1(g.x - dx)} ${r1(g.y - dy)}l${r1(dx * 2)} ${r1(dy * 2)}`;
};
const GRAIN_D = GRAINS.filter((g) => g.kind === "grain").map(seg).join("");
const BIT_D = GRAINS.filter((g) => g.kind === "bit").map((g) => `M${r1(g.x)} ${r1(g.y)}h0`).join("");
const LEEK_D = GRAINS.filter((g) => g.kind === "leek").map((g) => `M${r1(g.x)} ${r1(g.y)}h0`).join("");

export default function NasiGorengPlate({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 0 360 310" className={className} role="img" aria-label={label} focusable="false">
      <circle className="i-shadow" cx={CX + 9} cy={CY + 11} r={PLATE} />
      <circle className="i-kapur" cx={CX} cy={CY} r={PLATE} />
      <circle className="i-well" cx={CX} cy={CY} r={PLATE - 30} />

      <path className="i-rice" d={RICE} />
      {/* grains, kecap bits and spring onion as three stroked paths (round/square caps) */}
      <path className="i-grain-line" d={GRAIN_D} />
      <path className="i-bit-dot" d={BIT_D} />
      <path className="i-leek-dot" d={LEEK_D} />

      {/* fried egg */}
      <path className="i-egg" d={EGG} />
      <circle className="i-pinus" cx="192" cy="122" r="16" />
      <circle className="i-kapur" cx="186.5" cy="116.5" r="3.6" />

      {/* cucumber */}
      {[
        [262, 196],
        [244, 228],
        [274, 164],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle className="i-pakis" cx={x} cy={y} r="15" />
          <circle className="i-cucumber" cx={x} cy={y} r="11" />
          {[0, 120, 240].map((a) => (
            <ellipse key={a} className="i-cucumber-seed" cx={x} cy={y - 3.6} rx="1.7" ry="3.4" transform={`rotate(${a + i * 40} ${x} ${y})`} />
          ))}
        </g>
      ))}

      {/* krupuk, half over the plate edge */}
      <path className="i-krupuk" d={KRUPUK_A} />
      {[
        [54, 60, 3], [74, 56, 2.4], [62, 82, 2.6], [82, 76, 2], [46, 76, 2.2], [70, 96, 2],
      ].map(([x, y, r], i) => (
        <circle key={i} className="i-krupuk-hole" cx={x} cy={y} r={r} />
      ))}
      <path className="i-krupuk" d={KRUPUK_B} />
      {[
        [104, 34, 2.4], [120, 44, 2.2], [110, 52, 1.8], [124, 28, 1.8],
      ].map(([x, y, r], i) => (
        <circle key={i} className="i-krupuk-hole" cx={x} cy={y} r={r} />
      ))}
    </svg>
  );
}
