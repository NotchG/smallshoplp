import { c, line, seeded } from "@/lib/palette";

// Top-down kunafe: kunafe-orange disc, syrup-gold strands of shredded pastry, a pistachio
// mound in the centre. KunafePan puts it in its pale metal dish with the syrup jug beside it.

function strands(cx: number, cy: number, rMin: number, rMax: number, n: number, seed: number) {
  const rnd = seeded(seed);
  const paths: string[] = [];
  for (let i = 0; i < n; i++) {
    const r = rMin + (rMax - rMin) * Math.sqrt(rnd());
    const a = rnd() * Math.PI * 2;
    const len = 0.16 + rnd() * 0.22; // radians of arc
    const bend = (rnd() - 0.5) * 0.18 * r;
    const a0 = a - len / 2;
    const a1 = a + len / 2;
    const x0 = cx + r * Math.cos(a0);
    const y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1);
    const y1 = cy + r * Math.sin(a1);
    const rm = r + bend;
    const xm = cx + rm * Math.cos(a);
    const ym = cy + rm * Math.sin(a);
    paths.push(`M${x0.toFixed(1)} ${y0.toFixed(1)} Q${xm.toFixed(1)} ${ym.toFixed(1)} ${x1.toFixed(1)} ${y1.toFixed(1)}`);
  }
  return paths.join(" ");
}

const strandLine = {
  stroke: c.syrup,
  strokeWidth: 1.5,
  vectorEffect: "non-scaling-stroke" as const,
  strokeLinecap: "round" as const,
  fill: "none",
};

// Pistachio mound: a soft scalloped blob.
function mound(cx: number, cy: number, r: number) {
  const bumps = 9;
  let d = "";
  for (let i = 0; i <= bumps; i++) {
    const a = (i / bumps) * Math.PI * 2;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    if (i === 0) d += `M${x.toFixed(1)} ${y.toFixed(1)} `;
    else {
      const am = ((i - 0.5) / bumps) * Math.PI * 2;
      const xm = cx + r * 1.22 * Math.cos(am);
      const ym = cy + r * 1.22 * Math.sin(am);
      d += `Q${xm.toFixed(1)} ${ym.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)} `;
    }
  }
  return d + "Z";
}

const PAN_STRANDS = strands(200, 200, 44, 146, 150, 7);
const PAN_MOUND = mound(200, 200, 30);
const MINI_STRANDS = strands(50, 50, 14, 36, 34, 11);
const MINI_MOUND = mound(50, 50, 9);

export function KunafePan({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 0 470 420" className={className} role="img" aria-label={label}>
      {/* the pale metal dish */}
      <circle cx="200" cy="200" r="186" fill={c.filo} {...line} />
      <circle cx="200" cy="200" r="170" fill="none" {...line} />
      {/* kunafe */}
      <circle cx="200" cy="200" r="156" fill={c.kunafe} {...line} />
      <path d={PAN_STRANDS} {...strandLine} />
      <path d={PAN_MOUND} fill={c.pistachio} {...line} />
      {/* syrup jug, from above: body, syrup inside, spout, handle */}
      <g>
        <path d="M424 322 C 468 314, 470 384, 424 376 L 426 364 C 452 368, 452 330, 426 334 Z" fill={c.filo} {...line} />
        <circle cx="390" cy="348" r="44" fill={c.filo} {...line} />
        <path d="M352 326 L330 312 L346 340 Z" fill={c.filo} {...line} />
        <circle cx="390" cy="348" r="33" fill={c.syrup} {...line} />
      </g>
    </svg>
  );
}

export function KunafeMini({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="38" fill={c.kunafe} {...line} />
      <path d={MINI_STRANDS} {...strandLine} />
      <path d={MINI_MOUND} fill={c.pistachio} {...line} />
    </svg>
  );
}
