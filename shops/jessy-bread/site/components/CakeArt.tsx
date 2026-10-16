import type { ReactNode } from "react";
import type { CakeKind } from "@/content";

// Flat front-view cake drawings, matched to the cakes in the shop's case.
// One geometry system: a round (cylinder) or square (box) body standing on a gold board,
// every cake with the small dark round plaque the real cakes carry.
// The board and the cake are separate groups so the hero can settle the cake onto its board.

const W = 240;
const H = 210;
const BASE = 172; // where the cake meets the board
const CX = 120;

// Illustration-only colours (design brief §6), plus the case gold.
const C = {
  choc: "#4A2A1E",
  dark: "#2E1A12",
  milk: "#7A4A2E",
  cream: "#FBF4E6",
  creamShade: "#EADFC9",
  glaze: "#D9343A",
  cherry: "#B3122A",
  pandan: "#A9C79A",
  bun: "#D9A35F",
  crust: "#9A6438",
  arang: "#1F1D1B",
  gold: "#C9A042",
  goldDark: "#9C7A2C",
  leaf: "#4E7A3A",
};

type Round = { rx: number; e: number; x0: number; x1: number; top: number };
type Square = { x0: number; x1: number; top: number; d: number; t: number; w: number };

const r1 = (n: number) => Math.round(n * 10) / 10;

function round(w: number, h: number): Round {
  const rx = w / 2;
  return { rx, e: Math.round(w * 0.1), x0: CX - rx, x1: CX + rx, top: BASE - h };
}
function square(w: number, h: number): Square {
  return { x0: CX - w / 2, x1: CX + w / 2, top: BASE - h, d: Math.round(w * 0.08), t: Math.round(w * 0.09), w };
}
// y of the front edge of an ellipse centred at (CX, yc), at x
function front(g: Round, x: number, yc: number) {
  const k = (x - CX) / g.rx;
  return r1(yc + g.e * Math.sqrt(Math.max(0, 1 - k * k)));
}
function spread(from: number, to: number, n: number) {
  return Array.from({ length: n }, (_, i) => r1(from + ((to - from) * i) / (n - 1)));
}

/* ---------- shared parts ---------- */

function RoundBoard({ g, scallop = false }: { g: Round; scallop?: boolean }) {
  const rx = g.rx + 18;
  const ry = g.e + 7;
  return (
    <>
      <ellipse cx={CX} cy={BASE + 5} rx={rx} ry={ry} fill={C.goldDark} />
      <ellipse cx={CX} cy={BASE + 1} rx={rx} ry={ry} fill={C.gold} />
      {scallop &&
        spread(0.15, Math.PI - 0.15, 13).map((a) => (
          <circle key={a} cx={r1(CX + rx * Math.cos(a))} cy={r1(BASE + 4 + ry * Math.sin(a))} r="5" fill={C.gold} />
        ))}
    </>
  );
}

function SquareBoard({ g }: { g: Square }) {
  const l = g.x0 - 16;
  const r = g.x1 + 16;
  return (
    <>
      <polygon points={`${l},${BASE + 9} ${r},${BASE + 9} ${g.x1 + 4},${BASE - 12} ${g.x0 - 4},${BASE - 12}`} fill={C.gold} />
      <rect x={l} y={BASE + 9} width={r - l} height="5" fill={C.goldDark} />
    </>
  );
}

function Cylinder({ g, side, top }: { g: Round; side: string; top: string }) {
  return (
    <>
      <path d={`M${g.x0} ${g.top}V${BASE}A${g.rx} ${g.e} 0 0 0 ${g.x1} ${BASE}V${g.top}Z`} fill={side} />
      <ellipse cx={CX} cy={g.top} rx={g.rx} ry={g.e} fill={top} />
    </>
  );
}

// A horizontal band on the front of a round cake, following its curve.
function Band({ g, y1, y2, fill }: { g: Round; y1: number; y2: number; fill: string }) {
  return (
    <path
      d={`M${g.x0} ${y1}A${g.rx} ${g.e} 0 0 0 ${g.x1} ${y1}V${y2}A${g.rx} ${g.e} 0 0 1 ${g.x0} ${y2}Z`}
      fill={fill}
    />
  );
}

// Shade on the right of a round cake, for volume without gradients.
function SideShade({ g, fill, width = 16 }: { g: Round; fill: string; width?: number }) {
  const x = g.x1 - width;
  // Follows the top rim and the bottom curve, so it never cuts into the top face.
  return (
    <path
      d={`M${x} ${front(g, x, g.top)}A${g.rx} ${g.e} 0 0 0 ${g.x1} ${g.top}V${BASE}A${g.rx} ${g.e} 0 0 1 ${x} ${front(g, x, BASE)}Z`}
      fill={fill}
    />
  );
}

function Box({ g, front: f, top }: { g: Square; front: string; top: string }) {
  return (
    <>
      <polygon points={`${g.x0},${g.top} ${g.x1},${g.top} ${g.x1 - g.d},${g.top - g.t} ${g.x0 + g.d},${g.top - g.t}`} fill={top} />
      <rect x={g.x0} y={g.top} width={g.w} height={BASE - g.top} fill={f} />
    </>
  );
}

// The dark round "Jessy Bread" plaque standing on top of every cake.
function Plaque({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="10.5" fill={C.arang} />
      <circle cx={x} cy={y} r="8" fill="none" stroke={C.cream} strokeWidth="0.8" opacity="0.6" />
      <path d={`M${x - 5.5} ${y + 0.8}c1.2 -3.4 2.4 -3.4 3 0s1.8 3.4 3 0s1.8 -3.4 3 0s1.4 2.4 2.5 0.4`} stroke={C.cream} strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </g>
  );
}

function Cherry({ x, y, stem = true }: { x: number; y: number; stem?: boolean }) {
  return (
    <g>
      {stem && <path d={`M${x} ${y - 6}q2 -9 8 -12`} stroke={C.leaf} strokeWidth="1.6" fill="none" strokeLinecap="round" />}
      <circle cx={x} cy={y} r="7" fill={C.cherry} />
      <circle cx={x - 2.4} cy={y - 2.4} r="2" fill="#E8707A" />
    </g>
  );
}

function Strawberry({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <path d={`M${x} ${y - 7}c9 0 9 9 0 16c-9 -7 -9 -16 0 -16Z`} fill={C.glaze} />
      <path d={`M${x - 6} ${y - 7}l3 -3l3 2l3 -2l3 3l-6 2Z`} fill={C.leaf} />
    </g>
  );
}

function Rosette({ x, y, r = 6.5, fill = C.cream, shade = C.creamShade }: { x: number; y: number; r?: number; fill?: string; shade?: string }) {
  const k = r1(r * 0.55);
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={fill} />
      <path d={`M${r1(x - k)} ${r1(y + 0.2 * k)}a${k} ${k} 0 0 1 ${r1(1.2 * k)} ${r1(-1.2 * k)}`} stroke={shade} strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </g>
  );
}

type Parts = { board: ReactNode; cake: ReactNode };

/* ---------- the cakes ---------- */

function birthday(): Parts {
  const g = round(170, 118);
  const beads = spread(g.x0 + 5, g.x1 - 5, 16);
  return {
    board: <RoundBoard g={g} />,
    cake: (
      <>
        <Cylinder g={g} side={C.pandan} top="#BCD4AE" />
        <SideShade g={g} fill="#9BBA8B" width={18} />
        {beads.map((x) => (
          <circle key={x} cx={x} cy={front(g, x, BASE) - 3} r="5.5" fill="#8EB27E" />
        ))}
        <Plaque x={CX + 24} y={g.top - 6} />
      </>
    ),
  };
}

function blackforest(): Parts {
  const g = square(196, 56);
  const shards: ReactNode[] = [];
  const tones = [C.choc, C.dark, "#5A3424", C.milk];
  for (let row = 0; row < 3; row++) {
    for (let i = 0; i < 11; i++) {
      const x = g.x0 + g.d + 4 + i * 15.5 + (row % 2) * 7 - row * 3;
      const y = g.top - g.t + 4 + row * 7;
      const rot = ((i * 47 + row * 71) % 70) - 35;
      shards.push(
        <rect key={`${row}-${i}`} x={r1(x)} y={y} width="13" height="6" rx="1.5" fill={tones[(i + row) % 4]} transform={`rotate(${rot} ${r1(x + 6.5)} ${y + 3})`} />,
      );
    }
  }
  const dots = spread(g.x0 + 6, g.x1 - 6, 17);
  return {
    board: <SquareBoard g={g} />,
    cake: (
      <>
        <Box g={g} front={C.choc} top={C.milk} />
        <rect x={g.x0} y={g.top} width={g.w} height="5" fill={C.dark} />
        {dots.map((x) => (
          <circle key={x} cx={x} cy={BASE - 6} r="4.2" fill={C.cream} />
        ))}
        <rect x={g.x0} y={g.top + 17} width={g.w} height="4" fill={C.cream} />
        <rect x={g.x0} y={g.top + 33} width={g.w} height="4" fill={C.cream} />
        {shards}
        <Cherry x={CX - 46} y={g.top - 12} />
        <Cherry x={CX + 4} y={g.top - 15} />
        <Cherry x={CX + 52} y={g.top - 11} />
        <Plaque x={CX + 28} y={g.top - 22} />
      </>
    ),
  };
}

function doubleChoco(): Parts {
  const g = square(168, 84);
  const layers: [number, string][] = [
    [8, C.milk],
    [20, C.choc],
    [6, "#A0694A"],
    [20, C.choc],
    [6, "#A0694A"],
    [24, C.choc],
  ];
  let y = g.top;
  return {
    board: <SquareBoard g={g} />,
    cake: (
      <>
        <Box g={g} front={C.choc} top={C.milk} />
        {layers.map(([h, fill], i) => {
          const el = <rect key={i} x={g.x0} y={y} width={g.w} height={h} fill={fill} />;
          y += h;
          return el;
        })}
        <path
          d={`M${g.x0 + 26} ${g.top - 4}l26 -9M${g.x0 + 56} ${g.top - 3}l30 -10M${g.x0 + 92} ${g.top - 3}l30 -10M${g.x0 + 126} ${g.top - 4}l18 -6`}
          stroke={C.dark}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <Plaque x={CX + 26} y={g.top - 17} />
      </>
    ),
  };
}

function chocolateMouse(): Parts {
  const g = round(158, 80);
  const fan: [number, number, number, string][] = [
    [-44, 40, -16, C.choc],
    [-24, 56, -7, C.dark],
    [-2, 62, 2, "#5A3424"],
    [20, 52, 10, C.dark],
    [40, 38, 18, C.choc],
  ];
  return {
    board: <RoundBoard g={g} />,
    cake: (
      <>
        {fan.map(([dx, h, tilt, fill]) => {
          const x = CX + dx;
          return (
            <polygon
              key={dx}
              points={`${x - 11},${g.top + 2} ${x + 11},${g.top + 2} ${x + 6 + tilt},${g.top - h} ${x - 4 + tilt},${g.top - h + 8}`}
              fill={fill}
            />
          );
        })}
        <rect x={CX + 4} y={g.top - 50} width="5" height="52" rx="2.5" fill={C.cream} transform={`rotate(14 ${CX + 6} ${g.top})`} />
        <Cylinder g={g} side={C.choc} top={C.dark} />
        <SideShade g={g} fill="#3B2118" width={16} />
        <path d={`M${g.x0 + 16} ${g.top + 18}V${BASE - 4}M${g.x0 + 27} ${g.top + 24}V${g.top + 42}`} stroke="#7A4A36" strokeWidth="4" strokeLinecap="round" />
        <Cherry x={CX - 18} y={g.top + 2} />
        <Cherry x={CX + 2} y={g.top + 6} />
        <Plaque x={CX + 34} y={g.top - 6} />
      </>
    ),
  };
}

function tiramissu(): Parts {
  const g = round(168, 72);
  const rim = spread(g.x0 + 10, g.x1 - 10, 10);
  const back = spread(g.x0 + 34, g.x1 - 34, 6);
  return {
    board: <RoundBoard g={g} />,
    cake: (
      <>
        <Cylinder g={g} side={C.cream} top={C.milk} />
        <SideShade g={g} fill={C.creamShade} width={16} />
        <Band g={g} y1={BASE - 8} y2={BASE} fill={C.creamShade} />
        {back.map((x) => (
          <Rosette key={`b${x}`} x={x} y={r1(2 * g.top - front(g, x, g.top) + 2)} r={5.5} />
        ))}
        <Strawberry x={CX - 10} y={g.top - 4} />
        <Plaque x={CX + 16} y={g.top - 9} />
        {rim.map((x) => (
          <g key={x}>
            <Rosette x={x} y={front(g, x, g.top) - 2} />
            <circle cx={x + 2} cy={front(g, x, g.top) - 5} r="1.1" fill={C.milk} />
          </g>
        ))}
      </>
    ),
  };
}

function strawberryCheese(): Parts {
  const g = round(164, 70);
  const ridges = spread(g.x0 + 7, g.x1 - 7, 17);
  const drips: [number, number][] = [
    [g.x0 + 14, 14], [g.x0 + 34, 24], [g.x0 + 54, 12], [CX - 8, 20], [CX + 12, 28], [CX + 32, 14], [g.x1 - 30, 22], [g.x1 - 12, 12],
  ];
  const rim = spread(g.x0 + 9, g.x1 - 9, 10);
  return {
    board: <RoundBoard g={g} scallop />,
    cake: (
      <>
        <Cylinder g={g} side={C.cream} top={C.glaze} />
        {ridges.map((x) => (
          <path key={x} d={`M${x} ${front(g, x, g.top) + 6}V${front(g, x, BASE) - 2}`} stroke={C.creamShade} strokeWidth="2.2" strokeLinecap="round" />
        ))}
        <Band g={g} y1={g.top} y2={g.top + 6} fill={C.glaze} />
        {drips.map(([x, h]) => (
          <rect key={x} x={r1(x - 4)} y={front(g, x, g.top)} width="8" height={h} rx="4" fill={C.glaze} />
        ))}
        <Strawberry x={CX - 16} y={g.top - 4} />
        <Strawberry x={CX + 4} y={g.top - 7} />
        <Plaque x={CX + 28} y={g.top - 8} />
        {rim.map((x) => (
          <Rosette key={x} x={x} y={front(g, x, g.top) - 3} r={6} />
        ))}
      </>
    ),
  };
}

function jessyDelight(): Parts {
  const g = square(204, 46);
  const tones = [C.milk, C.cream, C.crust, "#8A8F3C", C.gold, C.dark];
  const stripes = Array.from({ length: Math.ceil(g.w / 8) }, (_, i) => i);
  return {
    board: <SquareBoard g={g} />,
    cake: (
      <>
        <Box g={g} front={C.milk} top={C.choc} />
        {stripes.map((i) => (
          <rect key={i} x={g.x0 + i * 8} y={g.top} width={Math.min(8, g.w - i * 8)} height={BASE - g.top} fill={tones[i % tones.length]} />
        ))}
        <rect x={g.x0} y={g.top} width={g.w} height="6" fill={C.choc} />
        <path
          d={`M${g.x0 + 30} ${g.top - 3}l22 -11M${g.x0 + 74} ${g.top - 4}l20 -10M${g.x0 + 120} ${g.top - 3}l22 -11M${g.x0 + 160} ${g.top - 4}l16 -8`}
          stroke={C.gold}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <Plaque x={CX + 44} y={g.top - 16} />
      </>
    ),
  };
}

function rainbow(clip: string): Parts {
  const g = square(156, 108);
  const colours = ["#D9343A", "#E8873A", "#EFCB4E", "#6FB15A", "#4C8CC9", "#8A5BB0"];
  const topFace = `${g.x0},${g.top} ${g.x1},${g.top} ${g.x1 - g.d},${g.top - g.t} ${g.x0 + g.d},${g.top - g.t}`;
  return {
    board: <SquareBoard g={g} />,
    cake: (
      <>
        <Box g={g} front={C.cream} top={C.cream} />
        {colours.map((fill, i) => (
          <rect key={fill} x={g.x0} y={g.top + 9 + i * 16.4} width={g.w} height="13.4" fill={fill} />
        ))}
        <clipPath id={clip}>
          <polygon points={topFace} />
        </clipPath>
        <g clipPath={`url(#${clip})`}>
          {spread(g.x0 - 20, g.x1, 9).map((x) => (
            <path key={x} d={`M${x} ${g.top + 2}l26 -${g.t + 4}`} stroke={C.glaze} strokeWidth="6" />
          ))}
        </g>
        <Strawberry x={CX - 22} y={g.top - 9} />
        <Strawberry x={CX + 2} y={g.top - 11} />
        <Plaque x={CX + 30} y={g.top - 16} />
      </>
    ),
  };
}

function redVelvet(): Parts {
  const g = round(156, 78);
  const crumbs: [number, number][] = [[-40, 0], [-22, -6], [-8, 4], [8, -5], [30, 3], [44, -3], [-30, 7], [18, 7]];
  const back = spread(g.x0 + 22, g.x1 - 22, 6);
  return {
    board: <RoundBoard g={g} />,
    cake: (
      <>
        <Cylinder g={g} side="#A3202C" top={C.cream} />
        <Band g={g} y1={g.top} y2={g.top + 7} fill={C.cream} />
        <Band g={g} y1={g.top + 28} y2={g.top + 33} fill={C.cream} />
        <Band g={g} y1={g.top + 54} y2={g.top + 59} fill={C.cream} />
        <SideShade g={g} fill="rgb(46 26 18 / 0.18)" width={16} />
        {crumbs.map(([dx, dy]) => (
          <circle key={`${dx}${dy}`} cx={CX + dx} cy={g.top + dy} r="2.4" fill="#A3202C" />
        ))}
        {back.map((x) => (
          <Rosette key={x} x={x} y={r1(2 * g.top - front(g, x, g.top) + 3)} r={5.5} />
        ))}
        <Plaque x={CX + 18} y={g.top - 10} />
      </>
    ),
  };
}

export default function CakeArt({
  kind,
  label,
  className = "",
  viewTop = 0,
}: {
  kind: CakeKind;
  label: string;
  className?: string;
  viewTop?: number;
}) {
  const parts: Parts =
    kind === "birthday" ? birthday()
    : kind === "blackforest" ? blackforest()
    : kind === "doubleChoco" ? doubleChoco()
    : kind === "chocolateMouse" ? chocolateMouse()
    : kind === "tiramissu" ? tiramissu()
    : kind === "strawberryCheese" ? strawberryCheese()
    : kind === "jessyDelight" ? jessyDelight()
    : kind === "rainbow" ? rainbow("rainbow-top")
    : redVelvet();

  return (
    <svg
      viewBox={`0 ${viewTop} ${W} ${H - viewTop}`}
      role="img"
      aria-label={label}
      overflow="visible"
      className={`block h-auto w-full ${className}`}
    >
      <g data-part="board">{parts.board}</g>
      <g data-part="cake">{parts.cake}</g>
    </svg>
  );
}
