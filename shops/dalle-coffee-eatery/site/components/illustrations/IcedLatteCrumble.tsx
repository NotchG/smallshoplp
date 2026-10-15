import { ArchMark, ink, line, seeded } from "./palette";

// Es latte cookie crumble: domed foam top with crumble specks, cookies on a small saucer beside it.
const CUP = "M14 60 H114 L101 212 H27 Z";
const BODY = "M18.3 66 H109.7 L98.4 209 H29.6 Z";

const rand = seeded(7);
const CRUMBS = Array.from({ length: 26 }, () => {
  // spread over the dome (an upper half-ellipse centred at 64,58)
  const a = Math.PI * (0.08 + rand() * 0.84);
  const d = 0.25 + rand() * 0.68;
  return {
    x: 64 - Math.cos(a) * 46 * d,
    y: 58 - Math.sin(a) * 24 * d,
    s: 2.2 + rand() * 2.6,
    dark: rand() > 0.72,
  };
});

export default function IcedLatteCrumble({ label }: { label: string }) {
  return (
    <svg className="illus" viewBox="0 0 184 220" role="img" aria-label={label}>
      <path d={CUP} fill={ink.light} fillOpacity={0.4} />
      <path d={BODY} fill={ink.milk} />
      {/* ice, faint through the latte */}
      <rect x={30} y={96} width={22} height={22} rx={4} fill={ink.light} fillOpacity={0.55} transform="rotate(-8 41 107)" {...line} />
      <rect x={70} y={120} width={22} height={22} rx={4} fill={ink.light} fillOpacity={0.55} transform="rotate(9 81 131)" {...line} />
      <path d="M22 84 C 40 80, 60 88, 80 82 S 104 84, 108 82" fill="none" stroke={ink.coffee} strokeOpacity={0.45} strokeWidth={2} strokeLinecap="round" />
      <ArchMark x={54} y={156} w={20} h={28} />
      <path d={CUP} fill="none" {...line} />
      {/* domed foam */}
      <path d="M10 60 C 10 22, 118 22, 118 60 Z" fill={ink.light} {...line} />
      {CRUMBS.map((c, i) => (
        <rect
          key={i}
          x={c.x - c.s / 2}
          y={c.y - c.s / 2}
          width={c.s}
          height={c.s * 0.8}
          rx={0.8}
          fill={c.dark ? ink.chocolate : ink.cookie}
          transform={`rotate(${(i * 37) % 90} ${c.x} ${c.y})`}
        />
      ))}
      <rect x={6} y={56} width={116} height={7} rx={3} fill={ink.light} {...line} />
      {/* saucer with three cookies */}
      <ellipse cx={150} cy={204} rx={32} ry={9} fill={ink.light} {...line} />
      <ellipse cx={150} cy={202} rx={22} ry={5} fill="none" stroke={ink.steel} strokeOpacity={0.35} strokeWidth={1.5} />
      {[
        { x: 128, y: 190, r: -6 },
        { x: 134, y: 181, r: 5 },
        { x: 130, y: 172, r: -3 },
      ].map((k, i) => (
        <g key={i} transform={`rotate(${k.r} ${k.x + 19} ${k.y + 5})`}>
          <rect x={k.x} y={k.y} width={38} height={10} rx={4} fill={ink.cookie} {...line} />
          <circle cx={k.x + 9} cy={k.y + 5} r={1.6} fill={ink.chocolate} />
          <circle cx={k.x + 20} cy={k.y + 4} r={1.6} fill={ink.chocolate} />
          <circle cx={k.x + 30} cy={k.y + 6} r={1.6} fill={ink.chocolate} />
        </g>
      ))}
    </svg>
  );
}
