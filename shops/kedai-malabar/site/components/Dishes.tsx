// Five dishes drawn flat, seen from above, in the palette only (design brief §6).
// Redrawn from the brief's descriptions; customer photos informed colour only, never traced.
// viewBox 200×200, dish centred so it reads on a square or a wide tile.

const K = "#f7f6f2"; // kapur
const A = "#1c1a18"; // arang
const T = "#b4703f"; // terakota
const L = "#f4b740"; // lampu
const B = "#8a3a2a"; // bata
const G = "#4e5e70"; // tegel
// mixes of the six with Kapur or Arang
const plateLine = "#e4e2dc";
const wheat = "#cfa687";
const nougat = "#eadbce";
const nut = "#e0c7b3";
const crustDark = "#865633";
const choc = "#422f22";
const coffeeDark = "#593c28";
const coffeeEdge = "#6e4b32";
const milkCoffee = "#ab754d";
const crema = "#c08a60";
const glassTint = "#bcc1c5";
const broth = "#da9b40";
const lontong = "#f7edd7";
const lontongEdge = "#ecd6a4";
const yolk = "#eaac40";
const chicken = "#deab63";
const chickenDark = "#ce8c3f";
const krupuk = "#ede2d7";
const krupukPore = "#ddc9b6";
const sambalDark = "#693024";
const spoon = "#a9a8a4";
const cupEdge = "#d9d6cf";

// Deterministic scatter so server and client markup match.
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const r1 = (n: number) => Math.round(n * 10) / 10;

type Art = { className?: string; label: string };
function Frame({ className, label, children }: Art & { children: React.ReactNode }) {
  return (
    <svg className={className} viewBox="0 0 200 200" role="img" aria-label={label}>
      {children}
    </svg>
  );
}
function Plate({ r = 80 }: { r?: number }) {
  return (
    <>
      <circle cx="100" cy="100" r={r} fill={K} />
      <circle cx="100" cy="100" r={r - 14} fill="none" stroke={plateLine} strokeWidth="1.5" />
    </>
  );
}

/* 1. Roti Nougat: three thick whole-wheat slices, nougat spread, nut bits. */
const SLICE = "M-27 29V-12C-27-27-17-31-9-29C-4-33 4-33 9-29C17-31 27-27 27-12V29Z";
const nougatNuts = [
  [-8, -6, 2.4], [5, -10, 2], [9, 3, 2.6], [-4, 8, 2.2], [-12, 4, 1.8], [2, -1, 1.6], [12, -4, 1.8],
];
export function RotiNougat({ className, label }: Art) {
  const slices: [number, number, number][] = [
    [70, 108, -16],
    [130, 108, 16],
    [100, 94, 0],
  ];
  return (
    <Frame className={className} label={label}>
      <Plate />
      {slices.map(([x, y, a], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${a})`}>
          <path d={SLICE} fill={crustDark} transform="translate(0 5)" />
          <path d={SLICE} fill={T} />
          <path d={SLICE} fill={wheat} transform="scale(.84)" />
          <path d={SLICE} fill={nougat} transform="translate(0 1) scale(.64)" />
          {nougatNuts.map(([nx, ny, nr], j) => (
            <circle key={j} cx={nx} cy={ny} r={nr} fill={j % 3 === 0 ? crustDark : T} />
          ))}
        </g>
      ))}
    </Frame>
  );
}

/* 2. Es Kopi Tubruk: glass from above, Tegel rim, dark coffee, 4 ice cubes, Bata straw. */
export function EsKopiTubruk({ className, label }: Art) {
  const ice: [number, number, number][] = [
    [80, 78, 12],
    [106, 74, -10],
    [76, 106, -20],
    [104, 108, 24],
  ];
  return (
    <Frame className={className} label={label}>
      <Plate r={78} />
      <circle cx="100" cy="100" r="56" fill={glassTint} />
      <circle cx="100" cy="100" r="47" fill={coffeeDark} stroke={coffeeEdge} strokeWidth="3" />
      {ice.map(([x, y, a], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${a})`}>
          <rect x="-11" y="-11" width="22" height="22" rx="5" fill={K} fillOpacity=".42" stroke={K} strokeOpacity=".85" strokeWidth="1.3" />
          <path d="M-6-5h7" stroke={K} strokeOpacity=".9" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
      <circle cx="100" cy="100" r="56" fill="none" stroke={G} strokeWidth="4.5" />
      <path d="M51.1 82.2A52 52 0 0 1 82.2 51.1" fill="none" stroke={K} strokeWidth="2.2" strokeLinecap="round" opacity=".9" />
      <path d="M112 90 160 44" stroke={B} strokeWidth="9" strokeLinecap="round" />
      <circle cx="160" cy="44" r="2.6" fill={sambalDark} />
    </Frame>
  );
}

/* 3. Roti bakar coklat kacang: a sliced thick loaf, meses, chocolate drizzle, crushed peanuts. */
const loafSprinkles = (() => {
  const rand = rng(7);
  return Array.from({ length: 64 }, () => {
    const x = 48 + rand() * 104;
    const y = 74 + rand() * 50;
    const a = rand() * Math.PI;
    const dx = Math.cos(a) * 3.2;
    const dy = Math.sin(a) * 3.2;
    return `M${r1(x - dx)} ${r1(y - dy)}L${r1(x + dx)} ${r1(y + dy)}`;
  }).join("");
})();
const loafPeanuts = (() => {
  const rand = rng(21);
  return Array.from({ length: 26 }, () => [r1(50 + rand() * 100), r1(75 + rand() * 48), r1(1.6 + rand() * 1.5)]);
})();
export function RotiBakarCoklatKacang({ className, label }: Art) {
  return (
    <Frame className={className} label={label}>
      <Plate />
      <path
        d="M40 118c4-12 26-10 40-8 18 2 34-4 52-2 14 2 30 2 32 12 2 9-12 14-26 14-14 0-22 8-38 6-16-2-26-4-40-6-12-2-22-6-20-16Z"
        fill={choc}
      />
      <circle cx="56" cy="142" r="4" fill={choc} />
      <circle cx="150" cy="138" r="3" fill={choc} />
      <g transform="rotate(-8 100 100)">
        <rect x="38" y="66" width="124" height="66" rx="16" fill={crustDark} transform="translate(0 5)" />
        <rect x="38" y="66" width="124" height="66" rx="16" fill={T} />
        <rect x="44" y="71" width="112" height="56" rx="12" fill={wheat} />
        <path d="M68 67v64M90 66v66M112 66v66M134 67v64" stroke={crustDark} strokeWidth="2.5" />
        <path d={loafSprinkles} stroke={A} strokeWidth="2.4" strokeLinecap="round" />
        {loafPeanuts.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={nut} />
        ))}
        <path
          d="M46 86 62 114 76 80 92 116 106 78 122 116 136 80 154 110"
          fill="none"
          stroke={choc}
          strokeWidth="3.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </Frame>
  );
}

/* 4. Kopi susu panas: cup and saucer from above, Kapur cup with an Arang dotted lattice band. */
export function KopiSusuPanas({ className, label }: Art) {
  return (
    <Frame className={className} label={label}>
      <circle cx="100" cy="100" r="80" fill={K} stroke={plateLine} strokeWidth="1" />
      <circle cx="100" cy="100" r="73" fill="none" stroke={A} strokeWidth="3" strokeDasharray="0 6.2" strokeLinecap="round" />
      <circle cx="100" cy="100" r="67.5" fill="none" stroke={A} strokeWidth="3" strokeDasharray="0 6.2" strokeDashoffset="3.1" strokeLinecap="round" />
      <circle cx="100" cy="100" r="62" fill="none" stroke={A} strokeWidth="1" />
      <circle cx="100" cy="100" r="56" fill="none" stroke={plateLine} strokeWidth="1.5" />
      <g transform="rotate(-38 148 128)">
        <path d="M128 128h30" stroke={spoon} strokeWidth="4.5" strokeLinecap="round" />
        <ellipse cx="164" cy="128" rx="10" ry="6.5" fill={spoon} />
      </g>
      <rect x="40" y="120" width="20" height="12" rx="6" transform="rotate(-35 50 126)" fill={K} stroke={cupEdge} strokeWidth="1.2" />
      <circle cx="94" cy="96" r="46" fill={K} stroke={cupEdge} strokeWidth="1.2" />
      <circle cx="94" cy="96" r="43.5" fill="none" stroke={A} strokeWidth="1" />
      <circle cx="94" cy="96" r="40" fill="none" stroke={A} strokeWidth="3.2" strokeDasharray="0 5.6" strokeLinecap="round" />
      <circle cx="94" cy="96" r="35" fill="none" stroke={A} strokeWidth="3.2" strokeDasharray="0 5.6" strokeDashoffset="2.8" strokeLinecap="round" />
      <circle cx="94" cy="96" r="31.5" fill="none" stroke={A} strokeWidth="1" />
      <circle cx="94" cy="96" r="29" fill={K} />
      <circle cx="94" cy="96" r="25" fill={milkCoffee} stroke={crema} strokeWidth="2.5" />
      <ellipse cx="86" cy="88" rx="7" ry="4" fill={crema} opacity=".7" transform="rotate(-30 86 88)" />
    </Frame>
  );
}

/* 5. Lontong sayur: bowl of golden broth, lontong rounds, half egg, sambal, two krupuk. */
function wavy(cx: number, cy: number, r: number, amp: number, waves: number, seed: number) {
  const rand = rng(seed);
  const n = waves * 4;
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    const rr = r + Math.sin(a * waves) * amp + (rand() - 0.5) * amp;
    return `${r1(cx + Math.cos(a) * rr)} ${r1(cy + Math.sin(a) * rr * 0.92)}`;
  });
  return `M${pts.join("L")}Z`;
}
const krupukA = wavy(70, 74, 23, 1.6, 9, 3);
const krupukB = wavy(92, 58, 20, 1.5, 8, 9);
const pores = (() => {
  const rand = rng(33);
  return Array.from({ length: 14 }, (_, i) => {
    const [cx, cy, r] = i < 8 ? [70, 74, 16] : [92, 58, 13];
    const a = rand() * Math.PI * 2;
    const d = rand() * r;
    return [r1(cx + Math.cos(a) * d), r1(cy + Math.sin(a) * d)];
  });
})();
const chili = (() => {
  const rand = rng(51);
  return Array.from({ length: 22 }, () => {
    const a = rand() * Math.PI * 2;
    const d = 20 + rand() * 42;
    return [r1(100 + Math.cos(a) * d), r1(100 + Math.sin(a) * d), r1(0.9 + rand() * 1.3)];
  });
})();
export function LontongSayur({ className, label }: Art) {
  return (
    <Frame className={className} label={label}>
      <circle cx="100" cy="100" r="84" fill={K} stroke={plateLine} strokeWidth="1.2" />
      <circle cx="100" cy="100" r="72" fill="none" stroke={plateLine} strokeWidth="2" />
      <circle cx="100" cy="100" r="68" fill={broth} />
      {chili.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={B} opacity=".75" />
      ))}
      <path d="M118 66c10-8 30-6 36 6 6 12 0 26-12 30-12 4-26-2-30-12-3-9 0-18 6-24Z" fill={chicken} />
      <path d="M126 74c6 4 12 12 14 22M134 70c5 6 8 12 9 18M122 84c4 4 6 9 7 13" stroke={chickenDark} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M100 38c8-4 18 0 18 8s-8 12-16 11-12-6-10-11c1-4 4-6 8-8Z" fill={B} />
      <circle cx="104" cy="45" r="2" fill={sambalDark} />
      <circle cx="110" cy="51" r="1.6" fill={sambalDark} />
      <circle cx="98" cy="50" r="1.4" fill={sambalDark} />
      {[
        [70, 126, 14],
        [96, 142, 13],
        [62, 100, 12],
        [92, 116, 12],
      ].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={lontong} stroke={lontongEdge} strokeWidth="2" />
      ))}
      <g transform="translate(134 128) rotate(-24)">
        <ellipse rx="21" ry="14.5" fill={K} />
        <ellipse cx="-3" rx="10.5" ry="9" fill={yolk} />
      </g>
      <path d={krupukA} fill={krupuk} stroke={krupukPore} strokeWidth="1" />
      <path d={krupukB} fill={krupuk} stroke={krupukPore} strokeWidth="1" />
      {pores.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.3" fill={krupukPore} />
      ))}
    </Frame>
  );
}

export const dishArt = {
  "roti-nougat": RotiNougat,
  "es-kopi-tubruk": EsKopiTubruk,
  "roti-bakar-coklat-kacang": RotiBakarCoklatKacang,
  "kopi-susu-panas": KopiSusuPanas,
  "lontong-sayur": LontongSayur,
} as const;
