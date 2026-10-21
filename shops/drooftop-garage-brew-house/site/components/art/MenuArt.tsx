// Flat menu tiles in the palette: fills plus white 2px line details. No outlines in black,
// no gradients, no SVG text. All are [MOCKUP] stand-ins until the owner sends real photos.
const C = {
  terakota: "#b5522e",
  malam: "#18213d",
  tembok: "#faf8f3",
  rumput: "#1e7a43",
  kuning: "#f2b630",
  aren: "#4a2a18",
  susu: "#ead7b5",
  rotan: "#c9955a",
};
const line = { fill: "none", stroke: C.tembok, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

export function EsKopiAren() {
  const glass = "M38 22H82L77 104H43Z";
  return (
    <Svg>
      <rect width="120" height="120" fill={C.rumput} />
      <defs>
        <clipPath id="clip-aren-glass">
          <path d={glass} />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-aren-glass)">
        <rect x="30" y="86" width="60" height="20" fill={C.rotan} />
        <rect x="30" y="62" width="60" height="24" fill={C.susu} />
        <rect x="30" y="32" width="60" height="30" fill={C.aren} />
      </g>
      <rect x="45" y="36" width="13" height="13" rx="2" transform="rotate(-12 51.5 42.5)" {...line} />
      <rect x="61" y="40" width="13" height="13" rx="2" transform="rotate(14 67.5 46.5)" {...line} />
      <rect x="51" y="50" width="12" height="12" rx="2" transform="rotate(4 57 56)" {...line} />
      <path d="M71 10 64 58" {...line} strokeWidth={3} />
      <path d={glass} {...line} />
      <path d="M48 92h14" {...line} />
    </Svg>
  );
}

export function KopiTubruk() {
  const mug = "M24 38H66L62 98H28Z";
  const beans = [
    [88, 90, -20], [97, 88, 25], [92, 82, 60], [102, 81, -35], [86, 83, 40], [96, 94, -50],
  ];
  return (
    <Svg>
      <rect width="120" height="120" fill={C.terakota} />
      <defs>
        <clipPath id="clip-tubruk-mug">
          <path d={mug} />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-tubruk-mug)">
        <rect x="20" y="46" width="50" height="56" fill={C.aren} />
        <rect x="20" y="86" width="50" height="16" fill={C.malam} />
      </g>
      {[[34, 92], [41, 89], [48, 93], [55, 90], [38, 96], [52, 96]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.4" fill={C.rotan} />
      ))}
      <path d={mug} {...line} />
      <path d="M65 52H78V76H63" {...line} />
      <rect x="18" y="100" width="54" height="5" rx="2.5" fill={C.tembok} />
      {/* bean jar with a blank label */}
      <rect x="82" y="56" width="26" height="46" rx="5" {...line} />
      <rect x="81" y="50" width="28" height="7" rx="2" fill={C.tembok} />
      {beans.map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx="3.4" ry="2.3" transform={`rotate(${r} ${x} ${y})`} fill={C.aren} />
      ))}
      <rect x="86" y="64" width="18" height="11" rx="1.5" fill={C.tembok} />
    </Svg>
  );
}

export function V60() {
  return (
    <Svg>
      <rect width="120" height="120" fill={C.malam} />
      {/* glass server with coffee */}
      <defs>
        <clipPath id="clip-v60-server">
          <rect x="36" y="68" width="48" height="38" rx="11" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-v60-server)">
        <rect x="30" y="86" width="60" height="24" fill={C.aren} />
        <rect x="30" y="84" width="60" height="3" fill={C.rotan} />
      </g>
      <rect x="36" y="68" width="48" height="38" rx="11" {...line} />
      <path d="M84 76c9 1 9 18 0 20" {...line} />
      <path d="M44 76v8" {...line} />
      {/* cone dripper */}
      <path d="M28 26H92L72 58H48Z" fill={C.rotan} />
      <rect x="42" y="58" width="36" height="6" rx="2" fill={C.rotan} />
      <path d="M92 30h6v10h-11" {...line} stroke={C.rotan} strokeWidth={4} />
      <path d="M44 32 53 52M60 32v20M76 32 67 52" {...line} />
      <circle cx="60" cy="72" r="2.4" fill={C.rotan} />
    </Svg>
  );
}

export function PisangGoreng() {
  const slice = (x: number, y: number, w: number, r: number, k: number) => (
    <g key={k} transform={`rotate(${r} ${x + w / 2} ${y + 8})`}>
      <rect x={x} y={y} width={w} height="16" rx="8" fill={C.rotan} />
      <path d={`M${x + 8} ${y + 6}h6M${x + 18} ${y + 10}h7M${x + 29} ${y + 5}h5`} {...line} />
    </g>
  );
  return (
    <Svg>
      <rect width="120" height="120" fill={C.kuning} />
      <ellipse cx="60" cy="78" rx="46" ry="20" fill={C.tembok} />
      <ellipse cx="60" cy="78" rx="35" ry="13" fill="none" stroke={C.susu} strokeWidth="2" />
      {slice(24, 52, 44, -16, 1)}
      {slice(50, 56, 44, 12, 2)}
      {slice(34, 70, 46, -3, 3)}
    </Svg>
  );
}

export const menuArt = {
  "es-kopi-aren": EsKopiAren,
  "kopi-tubruk": KopiTubruk,
  v60: V60,
  "pisang-goreng": PisangGoreng,
} as const;
