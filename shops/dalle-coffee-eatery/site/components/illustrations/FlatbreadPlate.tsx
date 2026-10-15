import { ink, line, seeded } from "./palette";

// Pizza Coklat Keju seen from above: round flatbread, chocolate sprinkles, grated cheese,
// on the sage ribbed plate from the customer photo.
const rand = seeded(19);

// A slightly irregular round, so it reads as dough rather than a compass circle.
function blob(cx: number, cy: number, r: number, wobble: number, points = 14) {
  const pts = Array.from({ length: points }, (_, i) => {
    const a = (i / points) * Math.PI * 2;
    const rr = r + (rand() - 0.5) * wobble;
    return [cx + Math.cos(a) * rr, cy + Math.sin(a) * rr];
  });
  // Catmull-Rom to cubic Bézier for a smooth closed curve
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < points; i++) {
    const p0 = pts[(i - 1 + points) % points];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % points];
    const p3 = pts[(i + 2) % points];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)}, ${c2[0].toFixed(1)} ${c2[1].toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d + " Z";
}

const BREAD = blob(100, 100, 60, 5);
const CHOC = blob(100, 100, 49, 7, 16);

const SPRINKLES = Array.from({ length: 34 }, () => {
  const a = rand() * Math.PI * 2;
  const d = Math.sqrt(rand()) * 42;
  const ang = rand() * Math.PI;
  const x = 100 + Math.cos(a) * d;
  const y = 100 + Math.sin(a) * d;
  return { x1: x, y1: y, x2: x + Math.cos(ang) * 4, y2: y + Math.sin(ang) * 4 };
});

// Grated cheese: a mound of thin shreds, mostly running one way, densest in the middle.
const gauss = () => (rand() + rand() + rand() - 1.5) / 1.5;
const SHREDS = Array.from({ length: 46 }, () => {
  const x = 101 + gauss() * 30;
  const y = 99 + gauss() * 22;
  const ang = (-58 + gauss() * 24) * (Math.PI / 180);
  const len = 9 + rand() * 13;
  return {
    x1: x - (Math.cos(ang) * len) / 2,
    y1: y - (Math.sin(ang) * len) / 2,
    x2: x + (Math.cos(ang) * len) / 2,
    y2: y + (Math.sin(ang) * len) / 2,
  };
});

const GRID = Array.from({ length: 21 }, (_, i) => 6 + i * 9.4);

export default function FlatbreadPlate({ label }: { label: string }) {
  return (
    <svg className="illus" viewBox="0 0 200 200" role="img" aria-label={label}>
      <defs>
        <clipPath id="plate-clip">
          <circle cx={100} cy={100} r={95} />
        </clipPath>
      </defs>
      {/* sage ribbed plate */}
      <circle cx={100} cy={100} r={96} fill={ink.sage} />
      <g clipPath="url(#plate-clip)" stroke={ink.steel} strokeOpacity={0.16} strokeWidth={1}>
        {GRID.map((g) => (
          <g key={g}>
            <line x1={g} y1={0} x2={g} y2={200} />
            <line x1={0} y1={g} x2={200} y2={g} />
          </g>
        ))}
      </g>
      <circle cx={100} cy={100} r={70} fill="none" stroke={ink.steel} strokeOpacity={0.35} strokeWidth={1.5} />
      <circle cx={100} cy={100} r={96} fill="none" {...line} />
      {/* flatbread */}
      <path d={BREAD} fill={ink.crust} {...line} />
      <path d={CHOC} fill={ink.chocolate} />
      {SPRINKLES.map((s, i) => (
        <line key={i} {...s} stroke={ink.coffee} strokeWidth={1.6} strokeLinecap="round" />
      ))}
      {SHREDS.map((s, i) => (
        <line key={i} {...s} stroke={ink.cheese} strokeWidth={1.9} strokeLinecap="round" />
      ))}
    </svg>
  );
}
