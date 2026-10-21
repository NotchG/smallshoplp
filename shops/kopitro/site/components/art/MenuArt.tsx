// The five menu drawings in "Menu andalan", malam lines on kayu.
// Each is one inline SVG with role="img" and an Indonesian aria-label; heights come from CSS
// (.menu-art / .menu-art-wide) so they stand on the shared shelf line.
import { placeholders, type MenuArt as ArtKey } from "@/content";
import { mock } from "@/lib/mockup";
import { CarafeV60, FacetedGlass, GLASS } from "./parts";

function Frame({
  w,
  h,
  label,
  wide = false,
  children,
}: {
  w: number;
  h: number;
  label: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label={label}
      className={`art ${wide ? "menu-art-wide" : "menu-art"}`}
      style={{ aspectRatio: `${w} / ${h}` }}
      {...mock(placeholders.illustrations)}
    >
      {children}
    </svg>
  );
}

/* V60 untuk berdua: V60 on the carafe with two short faceted glasses. (350 x 238) */
function V60Berdua() {
  const s = 0.82; // carafe scale inside this drawing
  const gs = 0.86; // glass scale
  const base = 234;
  const glassX = 156;
  return (
    <Frame w={350} h={238} wide label="V60 di atas teko kaca berisi kopi, dengan dua gelas pendek: porsi untuk berdua">
      <g transform={`translate(-16 ${base - 356 * s}) scale(${s})`}>
        <CarafeV60 idp="menu-v60" />
      </g>
      <g transform={`translate(${glassX} ${base - 128 * gs}) scale(${gs})`}>
        <FacetedGlass idp="menu-g1" level={78} />
      </g>
      <g transform={`translate(${glassX + GLASS.w * gs} ${base - 128 * gs}) scale(${gs})`}>
        <FacetedGlass idp="menu-g2" level={78} />
      </g>
    </Frame>
  );
}

/* Vietnam Drip: steel phin on a short glass, coffee over condensed milk, photo-2. (140 x 206) */
function VietnamDrip() {
  const glass = "M22 108 L30 195 Q31 202 38 202 L102 202 Q109 202 110 195 L118 108 Z";
  return (
    <Frame w={140} h={206} label="Vietnam drip: saringan phin dari baja di atas gelas, kopi di atas susu kental manis">
      <defs>
        <clipPath id="menu-vd-glass">
          <path d={glass} />
        </clipPath>
      </defs>
      <g clipPath="url(#menu-vd-glass)">
        <rect className="night" x="0" y="140" width="140" height="40" />
        <rect className="milk" x="0" y="176" width="140" height="30" />
      </g>
      <path className="ln" d="M0 176 L140 176" clipPath="url(#menu-vd-glass)" />
      <path className="ln" d={glass} />
      <path className="ln" d="M32 120 L37 168" />
      {/* phin: chamber, lid, knob, flange plate */}
      <rect className="fs" x="32" y="44" width="76" height="58" rx="2" />
      <path className="ln" d="M44 54 L44 92" />
      <rect className="fs" x="27" y="34" width="86" height="12" rx="3" />
      <rect className="fm" x="62" y="23" width="16" height="11" rx="2" />
      <rect className="fs" x="4" y="100" width="132" height="9" rx="3" />
    </Frame>
  );
}

/* Es Kopi Susu Kopitro: tapered clear cup, milk coffee, ice, the Kopitro print. (124 x 206) */
function EsKopiSusu() {
  const cup = "M10 20 L24 195 Q25 202 32 202 L92 202 Q99 202 100 195 L114 20 Z";
  return (
    <Frame w={124} h={206} label="Es kopi susu dingin di gelas plastik bertuliskan Kopitro Manual Brew">
      <defs>
        <clipPath id="menu-ek-cup">
          <path d={cup} />
        </clipPath>
      </defs>
      <g clipPath="url(#menu-ek-cup)">
        <rect className="milk" x="0" y="34" width="124" height="172" />
        <path className="brew" d="M0 164 C 26 150, 50 176, 78 160 S 114 152, 124 156 L124 206 L0 206 Z" />
      </g>
      <rect className="ln" x="24" y="40" width="22" height="22" rx="4" transform="rotate(-8 35 51)" />
      <rect className="ln" x="52" y="48" width="22" height="22" rx="4" transform="rotate(10 63 59)" />
      <rect className="ln" x="78" y="38" width="20" height="20" rx="4" transform="rotate(-4 88 48)" />
      <path className="ln" d={cup} />
      <rect className="ln" x="5" y="11" width="114" height="10" rx="3" />
      <text className="cup-print" x="62" y="120" textAnchor="middle" fontSize="27">
        KOPITRO
      </text>
      <text className="cup-print cup-print-sm" x="62" y="135" textAnchor="middle" fontSize="8.5" letterSpacing="2.4">
        MANUAL BREW
      </text>
    </Frame>
  );
}

/* Roti Bakar: a thick toast slice (seduh crust, spanduk crumb) cut on the diagonal, the halves
   pulled apart so the filling shows, on a plate. (200 x 150) */
function RotiBakar() {
  const slice =
    "M44 128 Q38 128 38 122 L38 66 C22 62 18 44 26 34 C36 22 62 19 100 21 C138 19 164 22 174 34 C182 44 178 62 162 66 L162 122 Q162 128 156 128 Z";
  const crumb =
    "M50 120 L50 58 C38 55 34 46 39 40 C47 31 68 29 100 31 C132 29 153 31 161 40 C166 46 162 55 150 58 L150 120 Z";
  const cut = "M86.4 21 L118.8 128";
  const half = (clip: string, dx: number) => (
    <g transform={`translate(${dx} 0)`}>
      <g clipPath={`url(#${clip})`}>
        <path className="brew" d={slice} />
        <path className="milk" d={crumb} />
        <path className="ln" d={crumb} />
        <path className="ln" d={slice} />
      </g>
      <path className="ln" d={cut} />
    </g>
  );
  return (
    <Frame w={200} h={150} label="Roti bakar tebal dipotong diagonal dengan isian di tengahnya, di atas piring">
      <defs>
        <clipPath id="menu-rb-l">
          <polygon points="0,0 79.9,0 125.6,150 0,150" />
        </clipPath>
        <clipPath id="menu-rb-r">
          <polygon points="79.9,0 200,0 200,150 125.6,150" />
        </clipPath>
      </defs>
      <path className="fp" d="M4 128 L196 128 Q192 140 176 142 L24 142 Q8 140 4 128 Z" />
      <path className="ln" d="M62 142 L66 147 L134 147 L138 142" />
      <path className="brew" d="M87 22 L119.5 128 L126 128 L93.5 22 Z" />
      {half("menu-rb-l", 0)}
      {half("menu-rb-r", 9)}
    </Frame>
  );
}

/* Kentang Goreng: paper-lined basket overflowing with fries, a few spilled. (204 x 186) */
function KentangGoreng() {
  const fries: [number, number, number, number][] = [
    // x, top y, height, rotation
    [56, 40, 70, -14],
    [70, 26, 84, -8],
    [84, 44, 66, -3],
    [96, 20, 90, 2],
    [110, 36, 74, 6],
    [122, 24, 86, 10],
    [136, 42, 68, 15],
    [64, 54, 56, 4],
    [104, 52, 58, -6],
    [128, 56, 54, -12],
  ];
  return (
    <Frame w={204} h={186} label="Kentang goreng porsi besar menumpuk di keranjang beralas kertas, beberapa tumpah keluar">
      {fries.map(([x, y, h, r]) => (
        <rect key={`${x}-${y}`} className="fp" x={x} y={y} width="11" height={h} rx="2" transform={`rotate(${r} ${x + 5.5} ${y + h})`} />
      ))}
      <path className="fp" d="M36 104 L44 86 L54 98 L64 84 L76 97 L88 83 L100 96 L112 82 L124 96 L136 84 L148 98 L158 86 L166 104 Z" />
      <path className="fk" d="M34 104 L170 104 L156 182 L48 182 Z" />
      <path className="ln" d="M38 128 L166 128 M42 154 L162 154" />
      <rect className="fp" x="168" y="170" width="34" height="10" rx="2" transform="rotate(-10 185 175)" />
      <rect className="fp" x="2" y="172" width="34" height="10" rx="2" transform="rotate(7 19 177)" />
    </Frame>
  );
}

const ART: Record<ArtKey, () => React.JSX.Element> = {
  v60: V60Berdua,
  vietnam: VietnamDrip,
  eskopi: EsKopiSusu,
  roti: RotiBakar,
  kentang: KentangGoreng,
};

export default function MenuArt({ art }: { art: ArtKey }) {
  const Art = ART[art];
  return <Art />;
}
