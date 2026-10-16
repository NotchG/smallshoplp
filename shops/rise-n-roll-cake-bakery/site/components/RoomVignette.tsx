// One table in the dining room, inside a terracotta arch: sage ceiling, white wall with an
// arched window, the wooden rail, terrazzo floor, a walnut table with a pink rose in a glass
// vase, and a mustard chair. A placeholder until the owner shares real photos.

const chips: [number, number, string][] = [
  [40, 420, "#6b5447"], [96, 440, "#c4622d"], [150, 414, "#a9bc8e"], [212, 448, "#d9ae45"], [262, 424, "#6b5447"],
  [318, 446, "#c4622d"], [356, 418, "#a9bc8e"], [70, 466, "#d9ae45"], [182, 470, "#6b5447"], [300, 470, "#a9bc8e"],
  [120, 400, "#6b5447"], [236, 404, "#c4622d"], [372, 462, "#6b5447"], [24, 452, "#a9bc8e"],
];

export default function RoomVignette({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 400 480" role="img" aria-label={label}>
      <defs>
        <clipPath id="room-arch">
          <path d="M16,480 V200 A184,184 0 0 1 384,200 V480 Z" />
        </clipPath>
      </defs>
      <path d="M0,480 V200 A200,200 0 0 1 400,200 V480 Z" fill="#c4622d" />

      <g clipPath="url(#room-arch)">
        {/* wall, ceiling, rail */}
        <rect x="0" y="0" width="400" height="480" fill="#f5f1e8" />
        <rect x="0" y="0" width="400" height="74" fill="#a9bc8e" />
        <rect x="0" y="74" width="400" height="6" fill="#ffffff" />
        <rect x="0" y="300" width="400" height="9" fill="#c27b45" />

        {/* arched window */}
        <path d="M128,292 V176 A72,72 0 0 1 272,176 V292 Z" fill="#ffffff" />
        <path d="M139,284 V178 A61,61 0 0 1 261,178 V284 Z" fill="#cfdcc0" />
        <path d="M150,284 V230 C168,214 176,240 190,226 C204,212 214,236 232,220 C242,212 252,222 261,214 V284 Z" fill="#b5c79c" />
        <rect x="197" y="118" width="6" height="168" fill="#ffffff" />
        <rect x="139" y="196" width="122" height="6" fill="#ffffff" />
        <rect x="139" y="242" width="122" height="6" fill="#ffffff" />
        <path d="M200,178 L156,140 M200,178 L244,140" stroke="#ffffff" strokeWidth="5" />

        {/* terrazzo floor */}
        <rect x="0" y="392" width="400" height="88" fill="#eeeae2" />
        {chips.map(([x, y, f]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="6" height="4" rx="1.5" fill={f} opacity="0.55" transform={`rotate(${(x * 7) % 50} ${x + 3} ${y + 2})`} />
        ))}
        <ellipse cx="190" cy="456" rx="170" ry="11" fill="#3b271d" opacity="0.2" />

        {/* walnut table */}
        <rect x="96" y="348" width="9" height="88" fill="#2b1c14" />
        <rect x="246" y="348" width="9" height="88" fill="#2b1c14" />
        <path d="M74,326 L276,326 L302,350 L48,350 Z" fill="#5a3a28" />
        <rect x="48" y="350" width="254" height="11" fill="#3b271d" />
        <rect x="60" y="361" width="11" height="95" fill="#3b271d" />
        <rect x="279" y="361" width="11" height="95" fill="#3b271d" />

        {/* glass vase with a pink rose */}
        <path d="M162,328 C162,302 166,298 166,286 L180,286 C180,298 184,302 184,328 Z" fill="#ffffff" opacity="0.6" />
        <path d="M163,328 C163,312 165,308 166,304 L180,304 C181,308 183,312 183,328 Z" fill="#d6e2cb" opacity="0.9" />
        <path d="M173,318 C172,300 174,280 172,262" stroke="#6e8f4a" strokeWidth="2.6" fill="none" strokeLinecap="round" />
        <ellipse cx="184" cy="282" rx="10" ry="4" fill="#7fa35a" transform="rotate(-30 184 282)" />
        <ellipse cx="162" cy="290" rx="8" ry="3.4" fill="#7fa35a" transform="rotate(28 162 290)" />
        <circle cx="172" cy="252" r="14" fill="#ebb7b2" />
        <ellipse cx="160" cy="258" rx="8" ry="10" fill="#e3a7a2" transform="rotate(-25 160 258)" />
        <ellipse cx="184" cy="258" rx="8" ry="10" fill="#e3a7a2" transform="rotate(25 184 258)" />
        <circle cx="172" cy="249" r="8" fill="#d99692" />
        <circle cx="173" cy="248" r="3.6" fill="#c97f7b" />

        {/* mustard chair */}
        <g transform="translate(12 0)">
        <rect x="318" y="372" width="5" height="84" fill="#2b1c14" />
        <rect x="352" y="372" width="5" height="78" fill="#2b1c14" />
        <rect x="288" y="378" width="5" height="78" fill="#2b1c14" />
        <path d="M300,296 C300,282 312,276 330,276 C348,276 362,282 362,296 L362,338 C362,344 356,348 350,348 L312,348 C306,348 300,344 300,338 Z" fill="#d9ae45" />
        <path d="M300,318 L362,318 L362,338 C362,344 356,348 350,348 L312,348 C306,348 300,344 300,338 Z" fill="#c99d38" />
        <ellipse cx="324" cy="368" rx="44" ry="14" fill="#c99d38" />
        <ellipse cx="324" cy="362" rx="44" ry="14" fill="#d9ae45" />
        </g>
      </g>
    </svg>
  );
}
