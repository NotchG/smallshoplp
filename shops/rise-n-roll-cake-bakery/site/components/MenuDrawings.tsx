// Spot drawings for "Bukan cuma kue", same flat 3/4 style as the cheesecakes.
// They sit on the walnut band, so the one shadow is a deeper walnut.

const SHADOW = "#1c110b";
const PLATE = "#ffffff";
const PLATE_EDGE = "#e6e1d6";

type Props = { label: string; className?: string };

function Svg({ label, className, children }: Props & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 200 150" role="img" aria-label={label} className={className}>
      {children}
    </svg>
  );
}

const crumbs: [number, number, string][] = [
  [52, 78, "#e3ae5e"], [66, 72, "#a86e2c"], [80, 70, "#e3ae5e"], [96, 68, "#e3ae5e"], [112, 66, "#a86e2c"],
  [126, 64, "#e3ae5e"], [140, 66, "#e3ae5e"], [60, 88, "#e3ae5e"], [104, 76, "#e3ae5e"], [132, 74, "#a86e2c"],
  [72, 100, "#e3ae5e"], [86, 108, "#a86e2c"], [70, 114, "#e3ae5e"], [98, 104, "#e3ae5e"], [104, 116, "#e3ae5e"],
];

export function Risol(p: Props) {
  return (
    <Svg {...p}>
      <ellipse cx="100" cy="140" rx="80" ry="6" fill={SHADOW} opacity="0.5" />
      <ellipse cx="100" cy="120" rx="90" ry="24" fill={PLATE_EDGE} />
      <ellipse cx="100" cy="114" rx="90" ry="24" fill={PLATE} />
      {/* whole risol behind */}
      <rect x="40" y="58" width="114" height="34" rx="17" fill="#c98b3e" transform="rotate(-8 97 75)" />
      {/* cut half in front, cheese filling showing */}
      <g transform="rotate(-6 92 106)">
        <path d="M66,89 H124 V123 H66 A17,17 0 0 1 66,89 Z" fill="#c98b3e" />
        <ellipse cx="124" cy="106" rx="11" ry="17" fill="#b47530" />
        <ellipse cx="125" cy="106" rx="8.5" ry="14" fill="#f6ebd0" />
        <ellipse cx="126" cy="103" rx="4.5" ry="7" fill="#f2c24e" />
        <circle cx="122" cy="113" r="2.2" fill="#d8a06a" />
        <circle cx="128" cy="96" r="1.8" fill="#d8a06a" />
      </g>
      {crumbs.map(([x, y, f]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.7" fill={f} />
      ))}
    </Svg>
  );
}

export function MatahBowl(p: Props) {
  const chilli: [number, number][] = [[98, 55], [124, 50], [134, 73], [104, 66], [148, 60], [84, 64]];
  return (
    <Svg {...p}>
      <ellipse cx="100" cy="141" rx="70" ry="6" fill={SHADOW} opacity="0.5" />
      <ellipse cx="100" cy="132" rx="30" ry="7" fill={PLATE_EDGE} />
      <path d="M26,62 C28,108 64,134 100,134 C136,134 172,108 174,62 Z" fill={PLATE} />
      <path d="M40,96 C56,120 80,130 100,130 C120,130 144,120 160,96 C146,112 124,122 100,122 C76,122 54,112 40,96 Z" fill="#a9bc8e" />
      <ellipse cx="100" cy="62" rx="74" ry="22" fill={PLATE} />
      <ellipse cx="100" cy="63" rx="68" ry="18" fill="#ece7dd" />
      <ellipse cx="100" cy="67" rx="62" ry="14" fill="#f8f4ea" />
      <ellipse cx="74" cy="62" rx="30" ry="10" fill="#fdfbf6" />
      {/* grilled chicken */}
      <rect x="106" y="50" width="30" height="15" rx="7" fill="#b5652b" transform="rotate(8 121 57)" />
      <rect x="126" y="62" width="26" height="13" rx="6" fill="#a75a24" transform="rotate(-10 139 68)" />
      <rect x="98" y="64" width="24" height="12" rx="6" fill="#b5652b" transform="rotate(4 110 70)" />
      <rect x="112" y="53" width="14" height="3" rx="1.5" fill="#7c3d18" transform="rotate(8 121 57)" />
      <rect x="130" y="66" width="12" height="3" rx="1.5" fill="#7c3d18" transform="rotate(-10 139 68)" />
      {/* sambal matah: chilli rings and lemongrass */}
      {chilli.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="3.6" fill="#d8432e" />
          <circle cx={x} cy={y} r="1.3" fill="#f6d9c8" />
        </g>
      ))}
      <ellipse cx="68" cy="58" rx="7" ry="2.4" fill="#8db04f" transform="rotate(-20 68 58)" />
      <ellipse cx="88" cy="72" rx="6" ry="2.2" fill="#8db04f" transform="rotate(15 88 72)" />
      <ellipse cx="152" cy="70" rx="6" ry="2.2" fill="#8db04f" transform="rotate(-30 152 70)" />
      <ellipse cx="116" cy="46" rx="5" ry="2" fill="#8db04f" transform="rotate(10 116 46)" />
    </Svg>
  );
}

function Puff({ cx }: { cx: number }) {
  return (
    <g>
      <ellipse cx={cx} cy="104" rx="26" ry="10" fill="#d39a55" />
      <circle cx={cx - 15} cy="95" r="7.5" fill="#fff8ec" />
      <circle cx={cx} cy="93" r="8" fill="#fff8ec" />
      <circle cx={cx + 15} cy="95" r="7.5" fill="#fff8ec" />
      <path d={`M${cx - 27},90 C${cx - 27},60 ${cx + 27},60 ${cx + 27},90 C${cx + 20},96 ${cx - 20},96 ${cx - 27},90 Z`} fill="#c9873f" />
      {/* craquelin crackle */}
      <rect x={cx - 20} y="80" width="9" height="6" rx="2" fill="#a86a2c" transform={`rotate(-12 ${cx - 16} 83)`} />
      <rect x={cx + 9} y="81" width="10" height="6" rx="2" fill="#a86a2c" transform={`rotate(14 ${cx + 14} 84)`} />
      <rect x={cx - 6} y="86" width="11" height="5" rx="2" fill="#a86a2c" />
      {/* chocolate sauce over the top */}
      <path
        d={`M${cx - 21},76 C${cx - 17},62 ${cx + 17},62 ${cx + 21},76 L${cx + 21},86 A3,3 0 0 1 ${cx + 15},86 L${cx + 15},80 L${cx + 5},80 L${cx + 5},93 A3,3 0 0 1 ${cx - 1},93 L${cx - 1},80 L${cx - 12},80 L${cx - 12},85 A3,3 0 0 1 ${cx - 18},85 Z`}
        fill="#4a2615"
      />
      <ellipse cx={cx - 6} cy="69" rx="7" ry="2.5" fill="#76412a" />
    </g>
  );
}

export function SusKrakelin(p: Props) {
  return (
    <Svg {...p}>
      <ellipse cx="100" cy="141" rx="84" ry="6" fill={SHADOW} opacity="0.5" />
      <ellipse cx="100" cy="122" rx="92" ry="24" fill={PLATE_EDGE} />
      <ellipse cx="100" cy="116" rx="92" ry="24" fill={PLATE} />
      <path d="M40,114 C40,102 80,100 100,104 C122,99 162,102 162,114 C162,126 128,130 100,128 C70,131 40,126 40,114 Z" fill="#4a2615" />
      <circle cx="156" cy="126" r="3" fill="#4a2615" />
      <circle cx="44" cy="127" r="2.2" fill="#4a2615" />
      <Puff cx={72} />
      <Puff cx={128} />
    </Svg>
  );
}

export function Latte(p: Props) {
  return (
    <Svg {...p}>
      <ellipse cx="100" cy="141" rx="78" ry="6" fill={SHADOW} opacity="0.5" />
      <ellipse cx="100" cy="122" rx="82" ry="20" fill={PLATE_EDGE} />
      <ellipse cx="100" cy="116" rx="82" ry="20" fill={PLATE} />
      <ellipse cx="100" cy="116" rx="46" ry="10" fill="#f1eee7" />
      <path d="M146,66 C176,62 178,98 140,98" fill="none" stroke={PLATE} strokeWidth="10" strokeLinecap="round" />
      <path d="M50,56 C52,98 72,118 100,118 C128,118 148,98 150,56 Z" fill={PLATE} />
      <path d="M118,116 C136,112 148,90 150,56 L146,56 C144,88 134,108 118,116 Z" fill="#eceee5" />
      <ellipse cx="100" cy="56" rx="50" ry="14" fill={PLATE} />
      <ellipse cx="100" cy="57" rx="44" ry="11" fill="#a86b3c" />
      {/* rosetta latte art */}
      <path d="M100,48 C86,48 79,56 86,61 C90,64 96,64 100,67 C104,64 110,64 114,61 C121,56 114,48 100,48 Z" fill="#f4e4ca" />
      <path d="M100,49 V66 M92,53 C96,55 98,57 100,60 M108,53 C104,55 102,57 100,60" fill="none" stroke="#a86b3c" strokeWidth="1.4" strokeLinecap="round" />
    </Svg>
  );
}
