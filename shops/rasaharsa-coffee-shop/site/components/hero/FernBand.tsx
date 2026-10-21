// The fern wall under the RASAHARSA lettering, as a strip of flat fronds.
// Generated once at build time (server component, seeded so every build is identical).
// Three frond shapes are defined once and reused with transforms to keep the SVG small.

import { rng } from "@/lib/rng";

const r1 = (n: number) => Math.round(n); // whole units: the band never renders above ~1.2x

type Pt = [number, number];
// A frond along +x from (0,0), length L, drooping by `droop` (y grows downward).
function frond(L: number, pairs: number, droop: number, leafLen: number): string {
  const at = (t: number): Pt => [L * t, droop * L * t * t];
  const angle = (t: number) => Math.atan2(2 * droop * t, 1);
  const parts: string[] = [];

  for (let k = 0; k < pairs; k++) {
    for (const side of [-1, 1]) {
      const t = (k + (side < 0 ? 0.35 : 0.85)) / pairs;
      const [bx, by] = at(t);
      const taper = Math.min(1, (1 - t) * 2.1) * (t < 0.1 ? 0.75 : 1);
      const l = Math.max(3, leafLen * taper);
      const phi = angle(t) + side * 1.02; // leaflets point toward the tip
      const dx = Math.cos(phi), dy = Math.sin(phi);
      const nx = -dy, ny = dx;
      const w = l * 0.46;
      const tip: Pt = [bx + dx * l, by + dy * l];
      const mx = bx + dx * l * 0.48, my = by + dy * l * 0.48;
      parts.push(
        `M${r1(bx)} ${r1(by)}Q${r1(mx + nx * w)} ${r1(my + ny * w)} ${r1(tip[0])} ${r1(tip[1])}` +
          `Q${r1(mx - nx * w)} ${r1(my - ny * w)} ${r1(bx)} ${r1(by)}Z`,
      );
    }
  }
  // Stem: a thin tapered sliver along the curve.
  const n = 8;
  const left: string[] = [], right: string[] = [];
  for (let s = 0; s <= n; s++) {
    const t = s / n;
    const [x, y] = at(t);
    const a = angle(t);
    const hw = 1.4 * (1 - t) + 0.3;
    left.push(`${r1(x - Math.sin(a) * hw)} ${r1(y + Math.cos(a) * hw)}`);
    right.unshift(`${r1(x + Math.sin(a) * hw)} ${r1(y - Math.cos(a) * hw)}`);
  }
  parts.push(`M${left.join("L")}L${right.join("L")}Z`);
  return parts.join("");
}

const SHAPES = [
  { id: "fa", d: frond(100, 15, 0.42, 15) },
  { id: "fb", d: frond(86, 13, 0.18, 13) },
  { id: "fc", d: frond(112, 17, 0.62, 14) },
];

type Use = { shape: string; x: number; y: number; rot: number; s: number; flip: boolean; back: boolean };

function layout(): Use[] {
  const rand = rng(1931);
  const uses: Use[] = [];
  const W = 900, MID = 104;
  // Fronds spring from one horizontal line, like the planted strip on the wall:
  // some arch up and over, most droop, alternating left and right so the band reads as one mass.
  const place = (count: number, back: boolean) => {
    for (let i = 0; i < count; i++) {
      const x = 16 + (i / (count - 1)) * (W - 32) + (rand() - 0.5) * 22;
      const flip = (i + (back ? 1 : 0)) % 2 === 0 ? rand() > 0.25 : rand() > 0.75;
      const up = rand() > (back ? 0.55 : 0.6);
      uses.push({
        shape: SHAPES[Math.floor(rand() * 3)].id,
        x,
        y: MID + (rand() - 0.5) * 14,
        rot: up ? -(28 + rand() * 42) : -6 + rand() * 46,
        s: up ? 0.66 + rand() * 0.2 : back ? 0.9 + rand() * 0.25 : 0.76 + rand() * 0.28,
        flip,
        back,
      });
    }
  };
  place(24, true);
  place(32, false);
  return uses;
}

const USES = layout();

export default function FernBand({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 220"
      preserveAspectRatio="xMidYMin slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {SHAPES.map((s) => (
          <path key={s.id} id={s.id} d={s.d} />
        ))}
      </defs>
      {[true, false].map((back) => (
        <g key={String(back)} className={back ? "fern-back" : "fern-front"}>
          {USES.filter((u) => u.back === back).map((u, i) => {
            const k = Math.round(u.s * 100) / 100;
            return (
              <use
                key={i}
                href={`#${u.shape}`}
                transform={`translate(${Math.round(u.x)} ${Math.round(u.y)}) scale(${u.flip ? -k : k} ${k}) rotate(${Math.round(u.rot)})`}
              />
            );
          })}
        </g>
      ))}
    </svg>
  );
}
