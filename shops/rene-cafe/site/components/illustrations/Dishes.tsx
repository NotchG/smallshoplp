import { C } from "@/lib/palette";

// The four dishes reviewers name, seen from above on the round plank table on the lawn (photo-2).
// 320 × 200 viewBox, wood disc ⌀180 centred; "slice" keeps the whole disc in a 128px square crop.
function Table({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={`disc-${id}`}>
          <circle cx="160" cy="100" r="90" />
        </clipPath>
      </defs>
      <rect width="320" height="200" fill={C.lawn} />
      <circle cx="160" cy="100" r="90" fill={C.wood} />
      <g clipPath={`url(#disc-${id})`} fill={C.besi} fillOpacity="0.22">
        <rect x="60" y="40" width="200" height="2.5" />
        <rect x="60" y="76" width="200" height="2.5" />
        <rect x="60" y="112" width="200" height="2.5" />
        <rect x="60" y="148" width="200" height="2.5" />
      </g>
      <g transform="translate(160 100)">{children}</g>
    </svg>
  );
}

// One wonton from above: a filled ball with its thin wrapper trailing in the broth.
const WONTON_TAIL =
  "M-6 -10 C4 -16 18 -12 22 -2 C26 8 18 16 10 12 C6 18 -6 18 -10 10 C-18 8 -18 -4 -6 -10Z";

function PangsitKuah() {
  const wontons: [number, number, number][] = [
    [-20, -14, -30],
    [20, -10, 60],
    [-2, 22, 160],
  ];
  return (
    <Table id="pangsit">
      <circle r="66" fill={C.ceramic} />
      <circle r="55" fill={C.lampu} fillOpacity="0.32" />
      {wontons.map(([x, y, r]) => (
        <g key={`${x}${y}`} transform={`translate(${x} ${y}) rotate(${r})`}>
          <path d={WONTON_TAIL} fill={C.ceramic} fillOpacity="0.82" />
          <circle cx="2" cy="1" r="9" fill={C.ceramic} />
          <circle cx="2" cy="1" r="9" fill={C.rattan} fillOpacity="0.4" />
        </g>
      ))}
      <g fill={C.canopy}>
        <rect x="6" y="-34" width="7" height="3.5" rx="1.5" transform="rotate(20 9 -32)" />
        <rect x="-40" y="4" width="7" height="3.5" rx="1.5" transform="rotate(-30 -36 6)" />
        <rect x="32" y="20" width="7" height="3.5" rx="1.5" transform="rotate(50 35 22)" />
        <rect x="14" y="38" width="7" height="3.5" rx="1.5" transform="rotate(-10 17 40)" />
        <rect x="-8" y="-2" width="6" height="3" rx="1.5" transform="rotate(70 -5 0)" />
        <rect x="36" y="-26" width="6" height="3" rx="1.5" transform="rotate(-40 39 -24)" />
      </g>
    </Table>
  );
}

function AyamPenyet() {
  return (
    <Table id="penyet">
      <circle r="70" fill={C.ceramic} />
      {/* smashed fried chicken: ragged crust, sambal pressed on top */}
      <path
        d="M-52 -4 L-50 -18 L-42 -26 L-38 -36 L-24 -40 L-14 -46 L-2 -40 L10 -42 L18 -32 L28 -26 L26 -14 L32 -4 L24 6 L22 16 L10 18 L0 26 L-12 22 L-24 26 L-32 18 L-44 14 L-46 4 Z"
        fill={C.wood}
      />
      <path
        d="M-44 -4 L-42 -16 L-34 -22 L-30 -32 L-18 -34 L-8 -38 L2 -32 L12 -34 L18 -26 L22 -14 L24 -4 L16 6 L14 12 L4 12 L-4 18 L-14 14 L-24 18 L-30 10 L-40 8 Z"
        fill={C.rattan}
      />
      <path
        d="M-28 -14 C-26 -24 -12 -28 -2 -24 C8 -20 10 -10 4 -4 C-2 2 -14 4 -22 0 C-28 -4 -29 -8 -28 -14Z"
        fill={C.pucuk}
      />
      <g fill={C.bata}>
        <circle cx="-16" cy="-16" r="2.4" />
        <circle cx="-6" cy="-10" r="2" />
        <circle cx="-20" cy="-6" r="1.8" />
      </g>
      <rect x="16" y="16" width="28" height="24" rx="4" fill={C.lampu} transform="rotate(12 30 28)" />
      <rect x="-40" y="30" width="38" height="18" rx="3" fill={C.wood} transform="rotate(-8 -21 39)" />
      <g fill={C.ceramic} fillOpacity="0.7">
        <circle cx="-32" cy="38" r="1.8" />
        <circle cx="-22" cy="42" r="1.8" />
        <circle cx="-12" cy="36" r="1.8" />
      </g>
    </Table>
  );
}

function BebekKeranjang() {
  return (
    <Table id="bebek">
      <circle r="74" fill={C.rattan} />
      <circle r="65" fill="none" stroke={C.wood} strokeWidth="7" strokeDasharray="8 6" />
      <circle r="58" fill={C.rattan} />
      <rect x="-42" y="-42" width="84" height="84" fill={C.ceramic} transform="rotate(14)" />
      <g fill={C.bata}>
        <ellipse cx="-14" cy="-10" rx="25" ry="15" transform="rotate(-24 -14 -10)" />
        <ellipse cx="18" cy="8" rx="21" ry="13" transform="rotate(30 18 8)" />
        <ellipse cx="-6" cy="26" rx="17" ry="10" transform="rotate(6 -6 26)" />
      </g>
      <g fill={C.wood}>
        <ellipse cx="-18" cy="-14" rx="9" ry="4" transform="rotate(-24 -18 -14)" />
        <ellipse cx="20" cy="4" rx="8" ry="3.5" transform="rotate(30 20 4)" />
      </g>
      <circle cx="30" cy="-26" r="9" fill={C.pucuk} />
    </Table>
  );
}

function MatchaLatte() {
  return (
    <Table id="matcha">
      <circle r="60" fill={C.ceramic} fillOpacity="0.55" />
      <circle r="52" fill={C.ceramic} />
      <circle r="52" fill={C.lawn} fillOpacity="0.78" />
      <g fill={C.ceramic} fillOpacity="0.5">
        <rect x="-34" y="-28" width="24" height="24" rx="4" transform="rotate(15 -22 -16)" />
        <rect x="4" y="-36" width="22" height="22" rx="4" transform="rotate(-10 15 -25)" />
        <rect x="-10" y="4" width="24" height="24" rx="4" transform="rotate(30 2 16)" />
        <rect x="18" y="10" width="20" height="20" rx="4" transform="rotate(8 28 20)" />
      </g>
      <circle cx="-26" cy="20" r="5.5" fill={C.besi} />
    </Table>
  );
}

export default function DishArt({ kind }: { kind: "pangsit" | "penyet" | "bebek" | "matcha" }) {
  if (kind === "pangsit") return <PangsitKuah />;
  if (kind === "penyet") return <AyamPenyet />;
  if (kind === "bebek") return <BebekKeranjang />;
  return <MatchaLatte />;
}
