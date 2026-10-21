// One illustration kit for every product (design brief §6): 200×200 viewBox, flat fills from
// the palette plus four illustration inks, no outlines, no gradients, light from the top-left,
// one darker shade per object, the same contact shadow under every object.
import type { ProductId } from "@/content";

const C = {
  krem: "#F6E7C6",
  kunyit: "#E9A13F",
  tinta: "#17201B",
  botol: "#0F4636",
  botolDk: "#0A3328",
  goreng: "#C9822F",
  gorengDk: "#A3631F",
  kopi: "#5A3420",
  kopiDk: "#3E2215",
  pandan: "#6E8F3A",
  pandanDk: "#55712B",
  white: "#FFFFFF",
  whiteDk: "#E6DCC6",
};

const Shadow = ({ cx = 100, cy = 184, rx = 64, ry = 7 }) => (
  <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={C.tinta} opacity={0.16} />
);

// The SEATAP cup: clear tapered plastic, sealed rim, black straw, the chevron mark.
// Cup walls run from (52,46)-(148,46) at the rim to (66,184)-(134,184) at the base.
function Cup({ drink }: { drink: "kopi" | "teh" }) {
  const wall = "M52 46 H148 L134 184 H66 Z";
  const inner = (top: number, bottom: number) => {
    const xl = (y: number) => 55 + (y - 46) * 0.1015;
    const xr = (y: number) => 145 - (y - 46) * 0.1015;
    return `M${xl(top)} ${top} H${xr(top)} L${xr(bottom)} ${bottom} H${xl(bottom)} Z`;
  };
  return (
    <g>
      <Shadow cy={186} rx={44} ry={6} />
      {/* straw, behind the cup wall so the plastic tints the part inside */}
      <path d="M113 6 L121 8 L107 150 L99 149 Z" fill={C.tinta} />
      {drink === "kopi" ? (
        <>
          <path d={inner(62, 96)} fill={C.kopi} />
          <path d={inner(96, 152)} fill={C.krem} />
          <path d={inner(152, 181)} fill={C.goreng} />
        </>
      ) : (
        <>
          <path d={inner(62, 181)} fill={C.goreng} />
          <path d={inner(62, 74)} fill={C.kunyit} />
        </>
      )}
      {/* ice */}
      <rect x="64" y="66" width="24" height="24" rx="4" fill={C.white} opacity={0.6} transform="rotate(-10 76 78)" />
      <rect x="96" y="80" width="24" height="24" rx="4" fill={C.white} opacity={0.6} transform="rotate(14 108 92)" />
      <rect x="74" y="98" width="22" height="22" rx="4" fill={C.white} opacity={0.45} transform="rotate(6 85 109)" />
      {/* plastic wall: light on the left, shade on the right */}
      <path d={wall} fill={C.white} opacity={0.22} />
      <path d="M58 52 H66 L76 178 H70 Z" fill={C.white} opacity={0.45} />
      <path d="M140 46 H148 L134 184 H127 Z" fill={C.tinta} opacity={0.14} />
      {/* sealed rim */}
      <rect x="47" y="40" width="106" height="9" rx="3" fill={C.white} />
      <rect x="47" y="45" width="106" height="4" rx="2" fill={C.whiteDk} />
      {/* chevron mark, as printed on SEATAP cups */}
      <path d="M88 138 L100 114 L112 138 H106 L100 125.5 L94 138 Z" fill={C.tinta} opacity={0.85} />
    </g>
  );
}

function Singkong() {
  // A crinkle-edged golden baton: highlight zigzag on top (light from top-left), shade below.
  const Baton = ({ t }: { t: string }) => (
    <g transform={t}>
      <rect x="0" y="0" width="104" height="22" rx="6" fill={C.goreng} />
      <rect x="0" y="14" width="104" height="8" rx="4" fill={C.gorengDk} />
      <path
        d="M6 3 L14 7 L22 3 L30 7 L38 3 L46 7 L54 3 L62 7 L70 3 L78 7 L86 3 L94 7 L98 4 L98 8 L6 8 Z"
        fill={C.kunyit}
      />
    </g>
  );
  return (
    <g>
      <Shadow cy={176} rx={80} ry={7} />
      {/* teak plate */}
      <ellipse cx="100" cy="156" rx="84" ry="22" fill={C.kopiDk} />
      <ellipse cx="100" cy="150" rx="84" ry="21" fill={C.kopi} />
      <Baton t="translate(34 122) rotate(-8)" />
      <Baton t="translate(64 132) rotate(-8)" />
      <Baton t="translate(30 104) rotate(14)" />
      <Baton t="translate(62 96) rotate(14)" />
      <Baton t="translate(46 90) rotate(-4)" />
    </g>
  );
}

function Pisang() {
  // A battered banana piece: shade offset to the bottom-right, highlight top-left.
  const Piece = ({ t }: { t: string }) => (
    <g transform={t}>
      <path d="M2 18 C10 2 70 -4 98 10 C106 16 100 30 88 32 C62 38 20 38 6 32 C0 28 -2 24 2 18 Z" fill={C.gorengDk} transform="translate(3 4)" />
      <path d="M2 18 C10 2 70 -4 98 10 C106 16 100 30 88 32 C62 38 20 38 6 32 C0 28 -2 24 2 18 Z" fill={C.goreng} />
      <path d="M14 14 C30 6 62 5 80 10 C66 12 34 14 14 20 Z" fill={C.kunyit} />
    </g>
  );
  return (
    <g>
      <Shadow cy={178} rx={74} ry={7} />
      {/* paper */}
      <path d="M24 130 L104 92 L180 132 L98 172 Z" fill={C.white} />
      <path d="M98 172 L180 132 L176 130 L100 132 Z" fill={C.whiteDk} />
      <Piece t="translate(34 118) rotate(-6)" />
      <Piece t="translate(62 100) rotate(-16)" />
      <Piece t="translate(50 76) rotate(-10)" />
    </g>
  );
}

function Bubur() {
  const beans = [
    [78, 106], [90, 112], [104, 104], [118, 110], [130, 104], [70, 114], [112, 118], [96, 100],
    [124, 116], [84, 118], [140, 110], [62, 108], [100, 120],
  ];
  return (
    <g>
      <Shadow cy={186} rx={52} ry={6} />
      {/* enamel bowl in the wall's bottle green */}
      <path d="M28 108 H172 C172 150 142 180 100 180 C58 180 28 150 28 108 Z" fill={C.botol} />
      <path d="M128 108 H172 C172 150 142 180 100 180 C124 172 138 146 128 108 Z" fill={C.botolDk} />
      <rect x="78" y="176" width="44" height="8" rx="2" fill={C.botolDk} />
      {/* lip and porridge */}
      <ellipse cx="100" cy="108" rx="72" ry="19" fill={C.white} />
      <ellipse cx="100" cy="109" rx="64" ry="14" fill={C.kopi} />
      {beans.map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="4.5" ry="3.4" fill={i % 3 === 0 ? C.pandanDk : C.pandan} />
      ))}
      {/* coconut-milk swirl */}
      <path
        d="M76 110 C80 100 104 98 116 104 C124 108 118 116 106 114 C98 113 96 108 102 106"
        fill="none"
        stroke={C.white}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  );
}

function KuePandan() {
  // A layer-cake slice in 3/4 view: top face lightest, front face, right face darkest.
  const side = (y1: number, y2: number, fill: string) => (
    <path d={`M132 ${y1} L160 ${y1 - 16} L160 ${y2 - 16} L132 ${y2} Z`} fill={fill} />
  );
  return (
    <g>
      <Shadow cx={106} cy={180} rx={62} ry={6} />
      {/* front face, top to bottom: frosting, pandan, cream, pandan */}
      <rect x="48" y="86" width="84" height="14" fill={C.krem} />
      <rect x="48" y="100" width="84" height="34" fill={C.pandan} />
      <rect x="48" y="134" width="84" height="8" fill={C.krem} />
      <rect x="48" y="142" width="84" height="34" fill={C.pandan} />
      {/* right face */}
      {side(86, 100, C.whiteDk)}
      {side(100, 134, C.pandanDk)}
      {side(134, 142, C.whiteDk)}
      {side(142, 176, C.pandanDk)}
      {/* top face */}
      <path d="M48 86 L76 70 H160 L132 86 Z" fill={C.white} />
      {/* rosette */}
      <circle cx="100" cy="72" r="15" fill={C.white} />
      <circle cx="105" cy="76" r="7" fill={C.whiteDk} />
      <circle cx="97" cy="68" r="6" fill={C.white} />
      {/* green chocolate shard */}
      <g transform="rotate(-16 104 60)">
        <rect x="66" y="53" width="78" height="12" rx="6" fill={C.pandanDk} />
        <rect x="66" y="53" width="78" height="7" rx="3.5" fill={C.pandan} />
      </g>
    </g>
  );
}

function Sarapan() {
  // Breakfast set: roti bakar srikaya on a plate, half-boiled eggs in a dish, a thick cup of kopi.
  const Toast = ({ t }: { t: string }) => (
    <g transform={t}>
      {/* triangular half seen from the front: toasted top face, then toast / kaya / butter / toast */}
      <path d="M0 22 L58 22 L34 0 Z" fill={C.goreng} />
      <path d="M34 0 L58 22 L50 22 Z" fill={C.gorengDk} />
      <rect x="0" y="22" width="58" height="6" fill={C.gorengDk} />
      <rect x="0" y="28" width="58" height="5" fill={C.kopi} />
      <rect x="0" y="33" width="58" height="4" fill={C.white} />
      <rect x="0" y="37" width="58" height="6" fill={C.gorengDk} />
    </g>
  );
  return (
    <g>
      <Shadow cx={96} cy={182} rx={88} ry={7} />
      {/* cup of kopi on its saucer, back right */}
      <ellipse cx="146" cy="122" rx="42" ry="10" fill={C.whiteDk} />
      <ellipse cx="146" cy="119" rx="42" ry="9" fill={C.white} />
      <path d="M170 82 C190 82 190 108 168 108" fill="none" stroke={C.white} strokeWidth="8" />
      <path d="M118 74 H174 V100 C174 112 162 118 146 118 C130 118 118 112 118 100 Z" fill={C.white} />
      <path d="M160 74 H174 V100 C174 112 166 117 152 118 C162 112 162 100 160 74 Z" fill={C.whiteDk} />
      <ellipse cx="146" cy="74" rx="28" ry="7" fill={C.white} />
      <ellipse cx="146" cy="75" rx="24" ry="5" fill={C.kopi} />
      {/* plate with two halves of roti bakar srikaya, front left */}
      <ellipse cx="72" cy="160" rx="64" ry="18" fill={C.whiteDk} />
      <ellipse cx="72" cy="156" rx="64" ry="17" fill={C.white} />
      <Toast t="translate(22 116)" />
      <Toast t="translate(64 112) scale(-1 1) translate(-58 0)" />
      {/* dish of half-boiled eggs with a drop of kecap, front right */}
      <ellipse cx="150" cy="170" rx="36" ry="11" fill={C.whiteDk} />
      <ellipse cx="150" cy="167" rx="36" ry="10" fill={C.white} />
      <ellipse cx="150" cy="166" rx="27" ry="7" fill={C.krem} />
      <ellipse cx="140" cy="165" rx="8" ry="5" fill={C.goreng} />
      <ellipse cx="160" cy="167" rx="8" ry="5" fill={C.goreng} />
      <ellipse cx="138" cy="163.5" rx="3" ry="1.6" fill={C.kunyit} />
      <ellipse cx="158" cy="165.5" rx="3" ry="1.6" fill={C.kunyit} />
      <path d="M146 162 C150 160 154 162 152 166" fill="none" stroke={C.kopiDk} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
}

function Paket() {
  // Bundling paket: a teak tray with a drink and a snack, from the same kit.
  return (
    <g>
      <Shadow cy={180} rx={88} ry={7} />
      <path d="M14 168 L186 168 L172 136 L28 136 Z" fill={C.kopi} />
      <path d="M14 168 L186 168 L186 176 L14 176 Z" fill={C.kopiDk} />
      <g transform="translate(14 22) scale(0.62)">
        <Cup drink="teh" />
      </g>
      <g transform="translate(76 62) scale(0.56)">
        <Pisang />
      </g>
    </g>
  );
}

const ART: Record<ProductId | "sarapan" | "paket", () => React.ReactElement> = {
  esKopiSusu: () => <Cup drink="kopi" />,
  esTeh: () => <Cup drink="teh" />,
  singkongGoreng: Singkong,
  pisangGoreng: Pisang,
  buburKacangHijau: Bubur,
  kuePandan: KuePandan,
  sarapan: Sarapan,
  paket: Paket,
};

export default function ProductArt({
  id,
  label,
  className = "",
  viewBox = "0 0 200 200",
}: {
  id: ProductId | "sarapan" | "paket";
  label?: string;
  className?: string;
  viewBox?: string; // the breakfast set is cropped to 4:3 so it fills its tile
}) {
  const Art = ART[id];
  const a11y = label ? { role: "img", "aria-label": label } : { "aria-hidden": true as const };
  return (
    <svg viewBox={viewBox} className={className} {...a11y} focusable="false">
      <Art />
    </svg>
  );
}
