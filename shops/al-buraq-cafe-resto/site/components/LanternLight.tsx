// The patterned light their pierced-glass lanterns throw on the plaster (photo-1 ceiling).
// A projection, not confetti: shapes sit on regular rays from the lantern, each ring one shape
// (stars near, diamonds, then pointed arches far), pointing away from the lantern, larger and
// fainter with distance. Drawn in its final, lit state. Decorative: aria-hidden.
// The field is centred on the lantern body. Shapes in its lower-left (where the hero name sits
// on phone and tablet) only show from 1024px, where the text has its own column (`.dapple-wide`).

const TINTS = ["#E2A23A", "#2E5AA8", "#2F8A68", "#B8303F"] as const; // amber, cobalt, emerald, ruby

type Dapple = { x: number; y: number; s: number; r: number; kind: 0 | 1 | 2; fill: string; a: number; wide: boolean };

const r1 = (n: number) => Math.round(n * 10) / 10;

const RAYS = 18;
const RINGS = [
  { r: 132, s: 8.5, a: 0.38, kind: 0 as const },
  { r: 192, s: 10.5, a: 0.32, kind: 1 as const },
  { r: 254, s: 12.5, a: 0.26, kind: 2 as const },
];

function makeDapples(): Dapple[] {
  const out: Dapple[] = [];
  RINGS.forEach((ring, ri) => {
    // Alternate rings sit half a step round, like light through a lattice.
    const offset = ri % 2 === 1 ? Math.PI / RAYS : 0;
    for (let i = 0; i < RAYS; i++) {
      const ang = offset + (i / RAYS) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(ang) * ring.r;
      const y = Math.sin(ang) * ring.r;
      // Keep clear of the lantern silhouette (it covers the centre) and of the chain.
      if (y > -182 && y < 224 && Math.abs(x) < 90) continue;
      if (y <= -182 && Math.abs(x) < 20) continue;
      out.push({
        x: r1(x),
        y: r1(y),
        s: ring.s,
        r: r1((ang * 180) / Math.PI + 90),
        kind: ring.kind,
        fill: TINTS[(i + ri) % 4],
        a: ring.a,
        wide: !(y < 40 || x > 60),
      });
    }
  });
  return out;
}

const DAPPLES = makeDapples();

// Unit shapes (size 1 = s), pointing "up" before rotation: 8-point star, diamond, pointed arch.
const STAR = "M0-1L.29-.71L.71-.71L.71-.29L1 0L.71.29L.71.71L.29.71L0 1L-.29.71L-.71.71L-.71.29L-1 0L-.71-.29L-.71-.71L-.29-.71Z";
const DIAMOND = "M0-1.35L.6 0L0 1.35L-.6 0Z";
const ARCH = "M-.55 1V-.15Q-.55-.8 0-1.2Q.55-.8 .55-.15V1Z";
const SHAPES = [STAR, DIAMOND, ARCH];

export default function LanternLight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`lantern-light ${className}`}
      viewBox="-300 -300 600 600"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="lantern-glow" cx="0" cy="0" r="290" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E2A23A" stopOpacity="0.3" />
          <stop offset="0.45" stopColor="#E2A23A" stopOpacity="0.1" />
          <stop offset="1" stopColor="#E2A23A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle r="290" fill="url(#lantern-glow)" />
      {DAPPLES.map((d, i) => (
        <path
          key={i}
          d={SHAPES[d.kind]}
          className={d.wide ? "dapple-wide" : undefined}
          transform={`translate(${d.x} ${d.y}) rotate(${d.r}) scale(${d.s})`}
          fill={d.fill}
          fillOpacity={d.a}
        />
      ))}
    </svg>
  );
}

