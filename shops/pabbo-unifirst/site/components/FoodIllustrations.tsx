import type { Illustration } from "@/content";

// Seven flat illustrations drawn for Pabbo from photo-2 (customer photos are never shown).
// Flat fills, no outlines, no gradients, under 30 shapes each. The four lead items sit on a
// rattan table disk: plates seen from above, cups standing on the disk's lower edge.

const C = {
  disk: "#D4A66A",
  diskShade: "#B98B52",
  plate: "#FBF8F1",
  well: "#F0EADF",
  egg: "#F2B43C",
  eggWhite: "#FFFDF7",
  rice: "#D98F2B",
  kopi: "#9A6A45",
  kopiLight: "#B88D68",
  matcha: "#9DBA6A",
  lettuce: "#6E9B45",
  meat: "#6A4630",
  meatLight: "#8B623F",
  meatDark: "#4E321F",
  red: "#C42834",
  tomatoIn: "#DE5A4A",
  cucumberSkin: "#4E7431",
  cucumberIn: "#DCE6B8",
  kerupuk: "#E9DAB6",
  kerupukIn: "#F4EAD2",
  shallot: "#8A4F1E",
  plafon: "#121014",
  garis: "#F4F1EA",
};

export const illustrationLabels: Record<Illustration, string> = {
  esKopiSusu: "Ilustrasi es kopi susu di gelas plastik berlogo P merah",
  matchaLatte: "Ilustrasi matcha latte hijau di gelas plastik berlogo P merah",
  nasiGoreng: "Ilustrasi nasi goreng dengan telur ceplok, kerupuk, tomat, timun dan selada",
  riceBowl: "Ilustrasi rice bowl daging cincang dengan telur dan selada di mangkuk kertas",
  indomieTelur: "Ilustrasi Indomie goreng dengan telur ceplok",
  rotiBakar: "Ilustrasi dua potong roti bakar di piring",
  kentangGoreng: "Ilustrasi kentang goreng di wadah kertas",
};

function Svg({
  name,
  size,
  className,
  children,
}: {
  name: Illustration;
  size: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={illustrationLabels[name]}
      className={className}
      focusable="false"
    >
      {children}
    </svg>
  );
}

const Disk = () => <circle cx="120" cy="120" r="120" fill={C.disk} />;

function PLogo({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="19" fill="none" stroke={C.red} strokeWidth="3.5" />
      <text
        x={cx + 0.8}
        y={cy + 1}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="24"
        fontWeight="800"
        fill={C.red}
        style={{ fontVariationSettings: '"wdth" 125' }}
      >
        P
      </text>
    </g>
  );
}

function Cup({ liquid, top, extras }: { liquid: string; top: string; extras: React.ReactNode }) {
  return (
    <>
      <Disk />
      <ellipse cx="120" cy="207" rx="50" ry="8" fill={C.diskShade} />
      {/* clear plastic cup */}
      <path d="M66 56H174L158 200Q157 206 151 206H89Q83 206 82 200Z" fill={C.garis} fillOpacity="0.6" />
      {/* drink */}
      <path d="M74 72H166L152 196Q151 200 147 200H93Q89 200 88 196Z" fill={liquid} />
      <path d="M74 72H166L164 90Q142 99 120 92Q98 85 76 92Z" fill={top} />
      {extras}
      {/* lid and straw */}
      <rect x="60" y="48" width="120" height="10" rx="3" fill={C.garis} />
      <rect x="-4" y="-44" width="8" height="46" rx="2" fill={C.plafon} transform="translate(134 48) rotate(14)" />
      <PLogo cx={120} cy={150} />
    </>
  );
}

export function EsKopiSusu({ className }: { className?: string }) {
  return (
    <Svg name="esKopiSusu" size={240} className={className}>
      <Cup
        liquid={C.kopi}
        top="#EAD9BE"
        extras={
          <>
            <rect x="86" y="102" width="22" height="22" rx="4" fill={C.kopiLight} transform="rotate(-12 97 113)" />
            <rect x="132" y="104" width="20" height="20" rx="4" fill={C.kopiLight} transform="rotate(10 142 114)" />
            <rect x="110" y="174" width="18" height="18" rx="4" fill={C.kopiLight} transform="rotate(6 119 183)" />
          </>
        }
      />
    </Svg>
  );
}

export function MatchaLatte({ className }: { className?: string }) {
  const fleck = "#7C9A4C";
  return (
    <Svg name="matchaLatte" size={240} className={className}>
      <Cup
        liquid={C.matcha}
        top="#C8D8A0"
        extras={
          <>
            <circle cx="92" cy="110" r="2.5" fill={fleck} />
            <circle cx="140" cy="104" r="2" fill={fleck} />
            <circle cx="104" cy="182" r="2.5" fill={fleck} />
            <circle cx="138" cy="178" r="2" fill={fleck} />
            <circle cx="96" cy="140" r="2" fill={fleck} />
          </>
        }
      />
    </Svg>
  );
}

export function NasiGoreng({ className }: { className?: string }) {
  return (
    <Svg name="nasiGoreng" size={240} className={className}>
      <Disk />
      <circle cx="120" cy="120" r="98" fill={C.plate} />
      <circle cx="120" cy="120" r="78" fill={C.well} />
      {/* lettuce */}
      <path
        d="M114 168c-2-14 10-24 22-22 4-12 20-16 30-8 12-6 24 2 24 15 9 6 9 20-2 26 0 13-13 20-24 15-8 9-22 9-30 0-12 4-23-4-21-15-9-2-8-11 1-11z"
        fill={C.lettuce}
      />
      {/* fried rice */}
      <path d="M70 104c-4-26 18-44 42-44 26-2 46 16 44 40 2 26-18 44-44 42-24 2-44-14-42-38z" fill={C.rice} />
      <circle cx="96" cy="86" r="4" fill={C.lettuce} />
      <circle cx="132" cy="114" r="4" fill={C.lettuce} />
      <circle cx="122" cy="78" r="3.5" fill={C.egg} />
      <circle cx="90" cy="112" r="3.5" fill={C.egg} />
      <circle cx="140" cy="92" r="2.5" fill={C.red} />
      <circle cx="108" cy="102" r="3" fill={C.shallot} />
      <circle cx="116" cy="130" r="3" fill={C.shallot} />
      {/* fried egg */}
      <path d="M148 84c6-14 26-18 38-8 12 8 12 26 2 36-10 12-30 12-40 2-8-8-6-22 0-30z" fill={C.eggWhite} />
      <circle cx="170" cy="94" r="11" fill={C.egg} />
      {/* kerupuk */}
      {[
        [56, 124],
        [62, 154],
        [84, 176],
        [112, 186],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="16" fill={C.kerupuk} />
          <circle cx={x} cy={y} r="12.5" fill={C.kerupukIn} />
        </g>
      ))}
      {/* tomato and cucumber */}
      <circle cx="150" cy="168" r="18" fill={C.red} />
      <circle cx="150" cy="168" r="13.5" fill={C.tomatoIn} />
      <circle cx="178" cy="158" r="12" fill={C.cucumberSkin} />
      <circle cx="178" cy="158" r="9.5" fill={C.cucumberIn} />
      <circle cx="166" cy="186" r="12" fill={C.cucumberSkin} />
      <circle cx="166" cy="186" r="9.5" fill={C.cucumberIn} />
    </Svg>
  );
}

export function RiceBowl({ className }: { className?: string }) {
  return (
    <Svg name="riceBowl" size={240} className={className}>
      <Disk />
      {/* paper bowl seen from above, with the printed line-doodle rim */}
      <circle cx="120" cy="120" r="96" fill={C.plate} />
      <circle cx="120" cy="120" r="90" fill="none" stroke={C.plafon} strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="7 6" />
      <circle cx="120" cy="120" r="85" fill="none" stroke={C.plafon} strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="2 7" />
      <circle cx="120" cy="120" r="79" fill="#E9E1CF" />
      {/* lettuce along the edge */}
      <path d="M146 70c16-6 32 2 38 16 10 8 12 24 4 34 6 12 0 28-14 34-6 12-22 16-32 8 4-14 8-30 6-46-2-16-2-32-2-46z" fill={C.lettuce} />
      {/* egg */}
      <path d="M130 84c4-14 22-20 34-12 12 8 14 24 4 34-10 10-28 10-36 0-6-6-6-14-2-22z" fill={C.eggWhite} />
      <circle cx="150" cy="90" r="10" fill={C.egg} />
      {/* seasoned minced meat */}
      <path d="M58 118c-4-30 22-52 52-50 18 0 30 12 32 26 14 6 22 22 16 38-6 22-30 34-54 32-26 0-46-20-46-46z" fill={C.meat} />
      {[
        [84, 104],
        [108, 88],
        [126, 120],
        [96, 140],
        [134, 146],
      ].map(([x, y]) => (
        <circle key={`l${x}`} cx={x} cy={y} r="3.5" fill={C.meatLight} />
      ))}
      {[
        [72, 128],
        [116, 108],
        [146, 128],
      ].map(([x, y]) => (
        <circle key={`d${x}`} cx={x} cy={y} r="2.5" fill={C.meatDark} />
      ))}
      {/* black plastic spoon */}
      <g transform="translate(86 158) rotate(48)" fill={C.plafon}>
        <rect x="-4" y="0" width="8" height="56" rx="4" />
        <ellipse cx="0" cy="-6" rx="12" ry="17" />
      </g>
    </Svg>
  );
}

export function IndomieTelur({ className }: { className?: string }) {
  const strand = "#C9852E";
  return (
    <Svg name="indomieTelur" size={120} className={className}>
      <circle cx="60" cy="60" r="56" fill={C.plate} />
      <circle cx="60" cy="60" r="44" fill={C.well} />
      <path d="M26 62c-2-19 14-35 34-35 20-1 35 14 35 33 0 21-16 35-35 35-19 0-34-14-34-33z" fill="#E6AE55" />
      <g fill="none" stroke={strand} strokeWidth="2.5" strokeLinecap="round">
        <path d="M34 50c5-5 10 5 15 0s10 5 15 0 9 4 13 0" />
        <path d="M30 63c5-5 10 5 15 0s10 5 15 0 10 5 15 0 7 3 11 0" />
        <path d="M36 77c5-5 10 5 15 0s10 5 15 0 9 4 13 0" />
      </g>
      <path d="M58 44c2-10 16-14 24-8 8 6 8 18 0 24-8 6-20 4-24-4-2-4-2-8 0-12z" fill={C.eggWhite} />
      <circle cx="70" cy="48" r="7" fill={C.egg} />
      <rect x="40" y="72" width="6" height="3" rx="1.5" fill={C.lettuce} transform="rotate(-20 43 73)" />
      <rect x="54" y="86" width="6" height="3" rx="1.5" fill={C.lettuce} transform="rotate(15 57 87)" />
      <rect x="80" y="74" width="6" height="3" rx="1.5" fill={C.lettuce} transform="rotate(-35 83 75)" />
      <circle cx="44" cy="58" r="2" fill={C.shallot} />
      <circle cx="62" cy="70" r="2" fill={C.shallot} />
    </Svg>
  );
}

export function RotiBakar({ className }: { className?: string }) {
  const crust = "#A96A30";
  const crumb = "#E2A85A";
  const grill = "#9A5A26";
  const slice = "M0 14Q0 0 14 0H34Q48 0 48 14Q48 20 44 22V52H4V22Q0 20 0 14Z";
  const inner = "M5 15Q5 5 15 5H33Q43 5 43 15Q43 19 39.5 21V47H8.5V21Q5 19 5 15Z";
  return (
    <Svg name="rotiBakar" size={120} className={className}>
      <circle cx="60" cy="60" r="56" fill={C.plate} />
      <circle cx="60" cy="60" r="44" fill={C.well} />
      <g transform="translate(22 38) rotate(-12)">
        <path d={slice} fill={crust} />
        <path d={inner} fill={crumb} />
      </g>
      <g transform="translate(50 30) rotate(9)">
        <path d={slice} fill={crust} />
        <path d={inner} fill={crumb} />
        <g stroke={grill} strokeWidth="3">
          <path d="M9 22L39 14" />
          <path d="M9 33L39 25" />
          <path d="M9 44L39 36" />
        </g>
      </g>
    </Svg>
  );
}

export function KentangGoreng({ className }: { className?: string }) {
  const fries: [number, number, number, string][] = [
    [34, 26, -12, C.egg],
    [44, 18, -6, "#E8A532"],
    [53, 22, -2, C.egg],
    [61, 14, 3, "#E8A532"],
    [70, 20, 7, C.egg],
    [79, 16, 11, "#E8A532"],
    [86, 28, 15, C.egg],
    [57, 30, 0, "#E8A532"],
  ];
  return (
    <Svg name="kentangGoreng" size={120} className={className}>
      {fries.map(([x, y, r, fill]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="8" height="50" rx="2" fill={fill} transform={`rotate(${r} ${x + 4} ${y + 50})`} />
      ))}
      {/* paper boat with a red band */}
      <path d="M22 60H98L89 102H31Z" fill={C.garis} />
      <path d="M24.2 70H95.8L94.1 78H25.9Z" fill={C.red} />
    </Svg>
  );
}

const MAP: Record<Illustration, (p: { className?: string }) => React.ReactElement> = {
  esKopiSusu: EsKopiSusu,
  matchaLatte: MatchaLatte,
  nasiGoreng: NasiGoreng,
  riceBowl: RiceBowl,
  indomieTelur: IndomieTelur,
  rotiBakar: RotiBakar,
  kentangGoreng: KentangGoreng,
};

export default function FoodIllustration({ name, className }: { name: Illustration; className?: string }) {
  const Comp = MAP[name];
  return <Comp className={className} />;
}
