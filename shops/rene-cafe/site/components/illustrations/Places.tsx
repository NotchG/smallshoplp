import { C, scallop } from "@/lib/palette";

// Three places to sit, drawn flat in a 400 × 260 viewBox. All three share one ground line
// (y = 196) so on desktop they join into one panorama: lawn → deck → hall.
const GROUND = 196;

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 400 260" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

function Hedge({ y = 150 }: { y?: number }) {
  return (
    <>
      <rect x="0" y={y} width="400" height={GROUND - y} fill={C.daun} />
      <path d={scallop(0, 400, y + 6, 8, 8)} fill={C.pucuk} />
    </>
  );
}

function Taman() {
  return (
    <Svg>
      <rect width="400" height="260" fill={C.kaca} />
      <g fill={C.canopy}>
        <rect x="0" y="90" width="400" height="70" />
        <circle cx="30" cy="92" r="52" />
        <circle cx="140" cy="66" r="62" />
        <circle cx="255" cy="84" r="58" />
        <circle cx="365" cy="62" r="62" />
      </g>
      <rect x="82" y="60" width="12" height="140" fill={C.daun} />
      <circle cx="88" cy="40" r="52" fill={C.daun} />
      <Hedge />
      <rect x="0" y={GROUND} width="400" height="64" fill={C.lawn} />
      {/* round plank table and two steel chairs, as on the lawn */}
      <rect x="164" y="176" width="20" height="36" rx="2" fill={C.besi} />
      <rect x="158" y="210" width="34" height="6" fill={C.wood} />
      <rect x="161" y="216" width="3" height="28" fill={C.besi} />
      <rect x="186" y="216" width="3" height="28" fill={C.besi} />
      <rect x="318" y="176" width="20" height="36" rx="2" fill={C.besi} />
      <rect x="312" y="210" width="34" height="6" fill={C.wood} />
      <rect x="315" y="216" width="3" height="28" fill={C.besi} />
      <rect x="340" y="216" width="3" height="28" fill={C.besi} />
      <ellipse cx="252" cy="200" rx="58" ry="10" fill={C.wood} />
      <rect x="247" y="200" width="10" height="38" fill={C.besi} />
      <ellipse cx="252" cy="238" rx="18" ry="4" fill={C.besi} />
    </Svg>
  );
}

const TERAS_BULBS = [
  [80, 75.6],
  [120, 78.5],
  [160, 72.6],
  [244, 67.8],
  [283, 62.4],
];

function Teras() {
  return (
    <Svg>
      <rect width="400" height="260" fill={C.kaca} />
      <g fill={C.canopy}>
        <rect x="0" y="112" width="400" height="50" />
        <circle cx="70" cy="112" r="46" />
        <circle cx="190" cy="96" r="56" />
        <circle cx="320" cy="108" r="52" />
        <circle cx="404" cy="100" r="40" />
      </g>
      <Hedge />
      {/* covered deck: roof underside, steel beam, posts */}
      <polygon points="0,0 400,0 400,26 0,56" fill={C.ceramic} />
      <polygon points="0,56 400,26 400,32 0,62" fill={C.besi} />
      <rect x="34" y="58" width="6" height="140" fill={C.besi} />
      <rect x="316" y="36" width="6" height="162" fill={C.besi} />
      <path d="M40 64 Q120 96 200 58 Q270 84 316 42" fill="none" stroke={C.besi} strokeWidth="1.5" />
      {TERAS_BULBS.map(([x, y]) => (
        <g key={x}>
          <rect x={x - 0.75} y={y} width="1.5" height="7" fill={C.besi} />
          <circle cx={x} cy={y + 11} r="5" fill={C.lampu} />
        </g>
      ))}
      <rect x="0" y={GROUND} width="400" height="64" fill={C.wood} />
      <g fill={C.besi} fillOpacity="0.22">
        <rect x="0" y="214" width="400" height="2" />
        <rect x="0" y="232" width="400" height="2" />
        <rect x="0" y="250" width="400" height="2" />
      </g>
      {/* table and two wooden chairs */}
      <rect x="112" y="160" width="6" height="36" fill={C.wood} />
      <rect x="112" y="190" width="30" height="6" fill={C.wood} />
      <rect x="113" y="196" width="3" height="26" fill={C.besi} />
      <rect x="138" y="196" width="3" height="26" fill={C.besi} />
      <rect x="274" y="160" width="6" height="36" fill={C.wood} />
      <rect x="250" y="190" width="30" height="6" fill={C.wood} />
      <rect x="251" y="196" width="3" height="26" fill={C.besi} />
      <rect x="276" y="196" width="3" height="26" fill={C.besi} />
      <rect x="150" y="172" width="92" height="7" fill={C.wood} />
      <rect x="156" y="179" width="5" height="40" fill={C.besi} />
      <rect x="231" y="179" width="5" height="40" fill={C.besi} />
    </Svg>
  );
}

function HallWindow({ x }: { x: number }) {
  return (
    <g>
      <rect x={x} y="24" width="100" height="172" fill={C.besi} />
      <rect x={x + 6} y="30" width="88" height="166" fill={C.canopy} />
      <rect x={x + 6} y="152" width="88" height="6" fill={C.pucuk} />
      <rect x={x + 6} y="158" width="88" height="38" fill={C.lawn} />
      <rect x={x + 48} y="24" width="4" height="172" fill={C.besi} />
      <rect x={x} y="82" width="100" height="4" fill={C.besi} />
      <rect x={x} y="138" width="100" height="4" fill={C.besi} />
    </g>
  );
}

function RattanChair({ x }: { x: number }) {
  return (
    <g>
      <rect x={x + 4} y="130" width="46" height="46" rx="18" fill={C.rattan} />
      <rect x={x} y="170" width="56" height="12" rx="5" fill={C.rattan} />
      <rect x={x + 6} y="182" width="3" height="36" fill={C.besi} />
      <rect x={x + 46} y="182" width="3" height="36" fill={C.besi} />
    </g>
  );
}

function Ruang() {
  return (
    <Svg>
      <defs>
        <pattern id="brick-ruang" width="32" height="20" patternUnits="userSpaceOnUse">
          <rect width="32" height="20" fill={C.bata} />
          <path d="M0 .5H32M0 10.5H32M.5 0V10M16.5 10V20" stroke={C.joint} fill="none" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="400" height={GROUND} fill="url(#brick-ruang)" />
      <HallWindow x={36} />
      <HallWindow x={264} />
      {/* polished concrete floor */}
      <rect x="0" y={GROUND} width="400" height="64" fill={C.kaca} />
      <rect x="0" y={GROUND} width="400" height="64" fill={C.besi} fillOpacity="0.55" />
      <RattanChair x={94} />
      <RattanChair x={250} />
      <rect x="150" y="160" width="100" height="8" fill={C.wood} />
      <rect x="158" y="168" width="5" height="48" fill={C.besi} />
      <rect x="237" y="168" width="5" height="48" fill={C.besi} />
    </Svg>
  );
}

export default function PlaceArt({ kind }: { kind: "taman" | "teras" | "ruang" }) {
  if (kind === "taman") return <Taman />;
  if (kind === "teras") return <Teras />;
  return <Ruang />;
}
