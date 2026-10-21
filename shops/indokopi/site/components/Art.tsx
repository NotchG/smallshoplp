// Flat inline-SVG product illustrations (design brief §6): side view, flat fills, no gradients,
// 2.5px aspal outline on glass, plate and coaster only.
const INK = "#1E1D1B";
const COASTER_TOP = "#B9824B";
const COASTER_EDGE = "#8E5C30";

type DrinkKind = "caramel" | "matcha" | "kopisusu";

// Liquid layers from the top of the drink down; each layer starts at a gently wavy line.
const DRINKS: Record<DrinkKind, { y: number; fill: string }[]> = {
  caramel: [
    { y: 72, fill: "#EAD9C0" }, // foam
    { y: 84, fill: "#C8986A" }, // milk coffee
    { y: 158, fill: "#B5651D" }, // caramel band
  ],
  matcha: [
    { y: 72, fill: "#7FA65A" }, // matcha
    { y: 120, fill: "#EEE9DA" }, // milk
  ],
  kopisusu: [
    { y: 72, fill: "#6B4126" }, // espresso
    { y: 104, fill: "#D8BC98" }, // milk
  ],
};

const GLASS =
  "M30 40 L90 40 L90 47 C90 53 95 55 95 63 L95 178 Q95 189 84 189 L36 189 Q25 189 25 178 L25 63 C25 55 30 53 30 47 Z";

function wave(y: number, first: boolean) {
  if (first) return `M0 ${y} H120 V200 H0 Z`;
  return `M0 ${y} Q15 ${y - 4} 30 ${y} T60 ${y} T90 ${y} T120 ${y} V200 H0 Z`;
}

export function DrinkGlass({ kind, label, className = "" }: { kind: DrinkKind; label: string; className?: string }) {
  const clip = `glass-${kind}`;
  return (
    <svg viewBox="0 0 120 206" role="img" aria-label={label} className={className}>
      {/* wooden coaster */}
      <path
        d="M6 186 A54 11 0 0 0 114 186 V192 A54 11 0 0 1 6 192 Z"
        fill={COASTER_EDGE}
        stroke={INK}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <ellipse cx="60" cy="186" rx="54" ry="11" fill={COASTER_TOP} stroke={INK} strokeWidth="2.5" />
      <ellipse cx="60" cy="186" rx="45" ry="8" fill="none" stroke={COASTER_EDGE} strokeWidth="2" />

      {/* black straw at 12°, behind the glass */}
      <line x1="50" y1="150" x2="80.6" y2="6" stroke={INK} strokeWidth="5.5" />

      <clipPath id={clip}>
        <path d={GLASS} />
      </clipPath>
      <g clipPath={`url(#${clip})`}>
        <rect x="0" y="0" width="120" height="200" fill="#FFFFFF" opacity="0.62" />
        {DRINKS[kind].map((layer, i) => (
          <path key={layer.y} d={wave(layer.y, i === 0)} fill={layer.fill} />
        ))}
        {/* ice cubes */}
        <rect x="34" y="78" width="17" height="17" rx="4" fill="#FFFFFF" opacity="0.4" transform="rotate(-12 42 86)" />
        <rect x="56" y="92" width="16" height="16" rx="4" fill="#FFFFFF" opacity="0.34" transform="rotate(10 64 100)" />
        <rect x="70" y="75" width="15" height="15" rx="4" fill="#FFFFFF" opacity="0.4" transform="rotate(22 77 82)" />
        {/* glass highlight */}
        <rect x="31" y="58" width="5" height="116" rx="2.5" fill="#FFFFFF" opacity="0.5" />
      </g>
      <path d={GLASS} fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <ellipse cx="60" cy="40" rx="30" ry="3.5" fill="none" stroke={INK} strokeWidth="2.5" />
    </svg>
  );
}

// Rim motifs around the plate, alternating orange and green like the shop's melamine plate.
const RIM = Array.from({ length: 18 }, (_, i) => {
  const a = (i / 18) * Math.PI * 2;
  const x = 110 + 91 * Math.cos(a);
  const y = 92 + 21 * Math.sin(a);
  const deg = (Math.atan2(21 * Math.cos(a), -91 * Math.sin(a)) * 180) / Math.PI;
  return { x: +x.toFixed(2), y: +y.toFixed(2), deg: +deg.toFixed(1), orange: i % 2 === 0 };
});

const MOUND = "M46 94 C50 58 86 40 114 41 C146 42 172 62 176 94 Q112 108 46 94 Z";

function Tofu({ x, y, r = 0 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <path d="M0 5 L5 0 H20 L15 5 Z" fill="#E6A84A" />
      <path d="M15 5 L20 0 V14 L15 19 Z" fill="#B8741E" />
      <rect x="0" y="5" width="15" height="14" fill="#D9952F" />
    </g>
  );
}

export function NoodlePlate({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 0 220 128" role="img" aria-label={label} className={className}>
      {/* plate foot and bowl underside */}
      <ellipse cx="110" cy="116" rx="44" ry="8" fill="#E7E3D9" stroke={INK} strokeWidth="2.5" />
      <path d="M6 92 C14 112 60 118 110 118 C160 118 206 112 214 92 Z" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      {/* plate face */}
      <ellipse cx="110" cy="92" rx="104" ry="26" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
      <ellipse cx="110" cy="92" rx="76" ry="17" fill="#FAF8F2" />
      {RIM.map((m, i) =>
        m.orange ? (
          <ellipse key={i} cx={m.x} cy={m.y} rx="6" ry="2.6" fill="#E07B2A" transform={`rotate(${m.deg} ${m.x} ${m.y})`} />
        ) : (
          <rect key={i} x={m.x - 2.6} y={m.y - 2.6} width="5.2" height="5.2" fill="#2F7D4F" transform={`rotate(45 ${m.x} ${m.y})`} />
        ),
      )}

      {/* noodles */}
      <clipPath id="mound">
        <path d={MOUND} />
      </clipPath>
      <path d={MOUND} fill="#F2C766" />
      <g clipPath="url(#mound)" fill="none" stroke="#DDA738" strokeWidth="2.2" strokeLinecap="round">
        {[52, 60, 68, 76, 84, 92].map((y, i) => (
          <path
            key={y}
            d={`M${36 + (i % 2) * 6} ${y} q6 -6 12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0`}
          />
        ))}
      </g>

      {/* fried tofu, scallion, chilli */}
      <Tofu x={118} y={34} r={-8} />
      <Tofu x={138} y={46} r={10} />
      <Tofu x={98} y={44} r={4} />
      <g fill="none" stroke="#4E9A4A" strokeWidth="2.4">
        <circle cx="80" cy="66" r="3.6" />
        <circle cx="152" cy="74" r="3.4" />
        <circle cx="118" cy="80" r="3.2" />
      </g>
      <rect x="62" y="80" width="12" height="4" rx="2" fill="#4E9A4A" transform="rotate(-20 68 82)" />
      <rect x="160" y="60" width="11" height="4" rx="2" fill="#4E9A4A" transform="rotate(30 165 62)" />
      <g fill="#C7372F">
        <circle cx="92" cy="72" r="1.9" />
        <circle cx="132" cy="70" r="1.9" />
        <circle cx="104" cy="86" r="1.7" />
        <circle cx="146" cy="88" r="1.8" />
        <circle cx="70" cy="74" r="1.6" />
        <circle cx="124" cy="62" r="1.6" />
      </g>
    </svg>
  );
}
