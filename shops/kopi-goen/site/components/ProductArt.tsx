import type { Visual } from "@/content";

// Flat drawings of the drinks, each standing on one of the garden's concrete cube seats
// with its round steel inset light (photo-3). Palette colours only; the light pool is the
// only gradient. Base geometry is drawn in a 200 x 240 box; `lift` adds headroom above.

const C = {
  malam: "var(--color-malam)",
  malamTerang: "var(--color-malam-terang)",
  beton: "var(--color-beton)",
  bayang: "var(--color-beton-bayang)",
  lampu: "var(--color-lampu)",
  arang: "var(--color-arang)",
  aren: "var(--color-aren)",
  arenTua: "var(--color-aren-tua)",
};

function Plinth({ id, poolY = 96, poolR = 90 }: { id: string; poolY?: number; poolR?: number }) {
  return (
    <g>
      <defs>
        <radialGradient id={`pool-${id}`} cx="0.5" cy="0.62" r="0.5">
          <stop offset="0" stopColor={C.lampu} stopOpacity="0.3" />
          <stop offset="0.55" stopColor={C.lampu} stopOpacity="0.1" />
          <stop offset="1" stopColor={C.lampu} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="108" cy={poolY} rx="96" ry={poolR} fill={`url(#pool-${id})`} />
      {/* side, front, top */}
      <polygon points="150,150 172,136 172,224 150,238" fill={C.bayang} />
      <rect x="34" y="150" width="116" height="88" fill={C.malamTerang} />
      <polygon points="56,136 172,136 150,150 34,150" fill={C.beton} />
      {/* round steel inset light */}
      <ellipse cx="62" cy="144.5" rx="11" ry="3.6" fill={C.bayang} />
      <ellipse cx="62" cy="144.2" rx="7.5" ry="2.3" fill={C.lampu} />
    </g>
  );
}

function EsKopiAren({ id }: { id: string }) {
  const glass = "M78 40 L146 40 L139.6 186 Q139.3 192 133.3 192 L90.7 192 Q84.7 192 84.4 186 Z";
  return (
    <g>
      <defs>
        <clipPath id={`glass-${id}`}>
          <path d={glass} />
        </clipPath>
      </defs>
      <path d={glass} fill={C.beton} fillOpacity="0.12" />
      <g clipPath={`url(#glass-${id})`}>
        <rect x="70" y="108" width="84" height="90" fill={C.beton} />
        <path d="M70 168 Q92 162 112 167 T154 165 L154 200 L70 200 Z" fill={C.aren} />
        <path d="M70 62 L154 62 L154 108 Q134 116 112 110 T70 112 Z" fill={C.arenTua} />
        <path d="M70 108 Q90 104 112 110 T154 108" fill="none" stroke={C.aren} strokeWidth="3" strokeOpacity="0.7" />
      </g>
      {/* ice */}
      <g fill={C.beton} fillOpacity="0.28" stroke={C.beton} strokeWidth="2">
        <rect x="86" y="50" width="22" height="22" rx="4" transform="rotate(-12 97 61)" />
        <rect x="111" y="56" width="23" height="23" rx="4" transform="rotate(10 122.5 67.5)" />
        <rect x="95" y="76" width="21" height="21" rx="4" transform="rotate(6 105.5 86.5)" />
        <rect x="118" y="86" width="19" height="19" rx="4" transform="rotate(-8 127.5 95.5)" />
      </g>
      <path d="M88 62 L91.5 178" stroke={C.beton} strokeOpacity="0.45" strokeWidth="2.5" strokeLinecap="round" />
      <path d={glass} fill="none" stroke={C.beton} strokeWidth="2.5" strokeLinejoin="round" />
    </g>
  );
}

function Cappuccino(_: { id: string }) {
  // Rosetta seen from a low angle: a milk leaf on the crema, cut into layers by thin crema lines.
  const lobes = [97, 104, 111, 118].map((x, i) => {
    const h = [5.6, 7.2, 7.6, 6.6][i];
    return `M${x} ${92 - h} Q${x + 5} 92 ${x} ${92 + h}`;
  });
  return (
    <g>
      <ellipse cx="110" cy="141" rx="48" ry="6" fill={C.bayang} />
      <ellipse cx="110" cy="139" rx="44" ry="4.5" fill={C.beton} />
      <path d="M143 101 C163 99 163 125 137 124" fill="none" stroke={C.beton} strokeWidth="6" strokeLinecap="round" />
      <path d="M74 92 L146 92 C146 118 134 136 110 136 C86 136 74 118 74 92 Z" fill={C.beton} />
      <path d="M80 112 C86 128 96 133 106 134" fill="none" stroke={C.bayang} strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="110" cy="92" rx="36" ry="12" fill={C.aren} stroke={C.beton} strokeWidth="3" />
      <path d="M88 92 Q98 83 114 83.5 Q130 84.5 131 92 Q130 99.5 114 100.5 Q98 101 88 92 Z" fill={C.beton} />
      <g fill="none" stroke={C.aren} strokeWidth="1.6" strokeLinecap="round">
        {lobes.map((d) => (
          <path key={d} d={d} />
        ))}
        <path d="M86 92 L126 92" strokeWidth="1.2" />
      </g>
    </g>
  );
}

function V60({ id }: { id: string }) {
  const server = "M86 100 L134 100 L138 132 Q139 142 129 142 L91 142 Q81 142 82 132 Z";
  return (
    <g>
      <defs>
        <clipPath id={`server-${id}`}>
          <path d={server} />
        </clipPath>
      </defs>
      <path d="M136 108 C151 108 152 131 137 131" fill="none" stroke={C.beton} strokeWidth="4" strokeLinecap="round" />
      <path d={server} fill={C.beton} fillOpacity="0.12" />
      <g clipPath={`url(#server-${id})`}>
        <path d="M80 120 Q110 115 140 120 L140 146 L80 146 Z" fill={C.arenTua} />
      </g>
      <path d={server} fill="none" stroke={C.beton} strokeWidth="2.5" strokeLinejoin="round" />
      {/* dripper */}
      <path d="M140 58 C157 58 157 82 132 82" fill="none" stroke={C.beton} strokeWidth="5" strokeLinecap="round" />
      <path d="M77 50 L143 50 L123 93 L97 93 Z" fill={C.beton} />
      <rect x="73" y="45" width="74" height="6" rx="2" fill={C.beton} />
      <rect x="80" y="93" width="60" height="6" rx="2" fill={C.beton} />
      <g stroke={C.bayang} strokeWidth="1.8" strokeLinecap="round">
        <path d="M93 57 L103 88" />
        <path d="M110 57 L110 88" />
        <path d="M127 57 L117 88" />
      </g>
      <ellipse cx="110" cy="107" rx="2.2" ry="3" fill={C.arenTua} />
    </g>
  );
}

function KentangGoreng(_: { id: string }) {
  const fries: [number, number, number][] = [
    [88, 74, -16], [97, 64, -7], [106, 76, -2], [113, 60, 5],
    [121, 70, 11], [130, 78, 18], [102, 84, -10], [124, 88, 8],
  ];
  return (
    <g>
      <g fill={C.lampu} stroke={C.aren} strokeWidth="1" strokeOpacity="0.6">
        {fries.map(([x, top, rot]) => (
          <rect key={`${x}-${top}`} x={x - 4} y={top} width="8" height={118 - top} rx="2" transform={`rotate(${rot} ${x} 118)`} />
        ))}
      </g>
      <path d="M72 112 L77 100 L85 108 L93 99 L101 107 L109 98 L117 107 L125 99 L133 108 L141 100 L148 112 Z" fill={C.beton} />
      <path d="M70 110 L150 110 L139 142 L81 142 Z" fill={C.arang} />
      <rect x="68" y="107" width="84" height="6" rx="2" fill={C.arang} />
      <g stroke={C.bayang} strokeOpacity="0.45" strokeWidth="1.5">
        <path d="M74 122 L146 122" />
        <path d="M77 132 L143 132" />
      </g>
    </g>
  );
}

// lift: headroom added above the base box; dy: moves the item so it stands on the cube top.
const items: Record<
  Exclude<Visual, "havana-frame">,
  { Item: (p: { id: string }) => React.JSX.Element; lift: number; dy: number; poolY?: number; poolR?: number }
> = {
  "es-kopi-aren": { Item: EsKopiAren, lift: 50, dy: -49, poolY: 66, poolR: 112 },
  cappuccino: { Item: Cappuccino, lift: 0, dy: 0 },
  v60: { Item: V60, lift: 0, dy: 0 },
  kentang: { Item: KentangGoreng, lift: 0, dy: 0 },
};

export default function ProductArt({
  id,
  visual,
  label,
  className = "",
}: {
  id: string;
  visual: Exclude<Visual, "havana-frame">;
  label: string;
  className?: string;
}) {
  const { Item, lift, dy, poolY, poolR } = items[visual];
  return (
    <svg viewBox={`0 ${-lift} 200 ${240 + lift}`} role="img" aria-label={label} className={`block h-auto w-full ${className}`}>
      <Plinth id={id} poolY={poolY} poolR={poolR} />
      <g transform={dy ? `translate(0 ${dy})` : undefined}>
        <Item id={id} />
      </g>
    </svg>
  );
}
