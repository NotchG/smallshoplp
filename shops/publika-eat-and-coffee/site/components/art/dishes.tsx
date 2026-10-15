// Six signature dishes, drawn flat and strictly top-down on matte black plates (design brief §6).
// Every one is an illustration standing in for a photo: data-mockup is set by the caller.
import type { ReactNode } from "react";
import type { DishId } from "@/content";
import { C } from "./palette";

type Pt = [number, number];
const f = (n: number) => Math.round(n * 10) / 10;

function Plate({ cx = 100, cy = 100, r = 96, well = 0.8 }: { cx?: number; cy?: number; r?: number; well?: number }) {
  return (
    <>
      <circle cx={cx} cy={cy} r={r} fill={C.rim} />
      <circle cx={cx} cy={cy} r={r * well} fill={C.steel} />
    </>
  );
}

/** A top-down cup of black kopi on a saucer. */
export function Kopi({ x, y, s = 1, handle = 0 }: { x: number; y: number; s?: number; handle?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle r={50} fill={C.grout} />
      <g transform={`rotate(${handle})`}>
        <rect x={30} y={-7} width={20} height={14} rx={6} fill={C.tile} />
      </g>
      <circle r={36} fill={C.tile} />
      <circle r={29} fill={C.crema} />
      <circle r={24} fill={C.coffee} />
      <circle cx={-7} cy={-6} r={4} fill={C.crema} opacity={0.5} />
    </g>
  );
}

/** A top-down glass of amber tea, optionally with ice. */
export function TeaGlass({ x, y, s = 1, ice = false }: { x: number; y: number; s?: number; ice?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle r={44} fill={C.tile} opacity={0.92} />
      <circle r={38} fill={C.tea} />
      {ice && (
        <>
          <rect x={-22} y={-24} width={22} height={22} rx={5} fill={C.tile} opacity={0.42} transform="rotate(16)" />
          <rect x={2} y={-2} width={21} height={21} rx={5} fill={C.tile} opacity={0.42} transform="rotate(-22)" />
        </>
      )}
      <path d="M-30 -14 A33 33 0 0 1 -12 -31" stroke={C.tile} strokeWidth={4} strokeLinecap="round" fill="none" opacity={0.6} />
    </g>
  );
}

function NasiGorengWagyu() {
  const bumps: [number, number][] = [
    [0, 10], [30, 9], [60, 11], [90, 10], [120, 9], [150, 11], [180, 10], [210, 9], [240, 10], [270, 11], [300, 9], [330, 10],
  ];
  const light: [number, number, number][] = [
    [84, 118, 30], [96, 130, -20], [118, 126, 60], [134, 114, 10], [146, 98, -40], [72, 102, 80],
    [110, 114, 45], [66, 88, -10], [124, 134, 20], [88, 104, -60],
  ];
  const dark: [number, number, number][] = [
    [94, 112, 15], [130, 124, -35], [78, 126, 70], [140, 84, 25], [104, 132, 0], [68, 110, -50], [148, 108, 40],
  ];
  const slices = [-38, -19, 0, 19, 38];
  const onion: [number, number, string][] = [
    [82, 114, C.lime], [98, 122, C.lime], [122, 118, C.lime], [134, 106, C.lime], [74, 96, C.lime],
    [112, 126, C.lime], [142, 96, C.lime], [90, 126, C.leaf], [128, 128, C.leaf], [104, 108, C.leaf],
    [100, 66, C.lime], [126, 76, C.leaf], [80, 82, C.lime],
  ];
  return (
    <>
      <Plate />
      {/* kerupuk tucked under the rice */}
      <g fill={C.mascarpone}>
        <circle cx={46} cy={142} r={17} />
        <circle cx={60} cy={134} r={14} />
        <circle cx={40} cy={128} r={11} />
        <circle cx={58} cy={152} r={11} />
      </g>
      <g fill={C.banana} opacity={0.8}>
        <circle cx={44} cy={140} r={1.6} />
        <circle cx={54} cy={148} r={1.4} />
        <circle cx={38} cy={130} r={1.3} />
      </g>
      {/* rice mound */}
      <g fill={C.rice}>
        <circle cx={106} cy={98} r={48} />
        {bumps.map(([a, r]) => (
          <circle key={a} cx={f(106 + 44 * Math.cos((a * Math.PI) / 180))} cy={f(98 + 44 * Math.sin((a * Math.PI) / 180))} r={r} />
        ))}
      </g>
      {light.map(([x, y, a], i) => (
        <ellipse key={`l${i}`} cx={x} cy={y} rx={3.2} ry={1.5} fill={C.banana} transform={`rotate(${a} ${x} ${y})`} />
      ))}
      {dark.map(([x, y, a], i) => (
        <ellipse key={`d${i}`} cx={x} cy={y} rx={2.8} ry={1.4} fill={C.crema} transform={`rotate(${a} ${x} ${y})`} />
      ))}
      {/* five wagyu slices fanned across the top */}
      {slices.map((a) => (
        <g key={a} transform={`translate(106 132) rotate(${a}) translate(0 -54)`}>
          <rect x={-9} y={-27} width={18} height={54} rx={7.5} fill={C.wagyu} />
          <path d="M-4 -18 q4 6 0 12 M3 0 q-4 6 1 13 M-2 10 q3 3 2 8" stroke={C.marbling} strokeWidth={1.7} strokeLinecap="round" fill="none" />
        </g>
      ))}
      {onion.map(([x, y, c], i) => (
        <circle key={`o${i}`} cx={x} cy={y} r={2.6} fill={c} />
      ))}
    </>
  );
}

function TunaSambalMatah() {
  const slices: Pt[] = [[76, 106], [100, 99], [124, 92]];
  const rings: Pt[] = [[70, 90], [90, 112], [106, 82], [118, 106], [132, 80], [96, 94], [80, 128], [126, 120], [62, 112]];
  const shallots: [number, number, number][] = [[80, 100, 0], [104, 114, 40], [114, 88, -30], [92, 80, 70], [134, 100, 10], [84, 118, -60], [120, 70, 20]];
  const grass: [number, number, number][] = [[108, 98, 30], [72, 114, -20], [122, 110, 60], [98, 126, 0], [134, 88, -45], [86, 92, 80]];
  return (
    <>
      <Plate />
      {slices.map(([x, y]) => (
        <g key={x} transform={`translate(${x} ${y}) rotate(20)`}>
          <rect x={-15} y={-37} width={30} height={74} rx={8} fill={C.cocoa} />
          <rect x={-10.5} y={-32} width={21} height={64} rx={5} fill={C.strawberry} />
          <rect x={-4} y={-28} width={8} height={56} rx={4} fill={C.marbling} opacity={0.55} />
        </g>
      ))}
      {shallots.map(([x, y, a], i) => (
        <path key={`s${i}`} d={`M${x - 5} ${y} a5 5 0 0 1 10 0`} stroke={C.shallot} strokeWidth={2.4} strokeLinecap="round" fill="none" transform={`rotate(${a} ${x} ${y})`} />
      ))}
      {grass.map(([x, y, a], i) => (
        <rect key={`g${i}`} x={x - 3} y={y - 1.4} width={6} height={2.8} rx={1.2} fill={C.lime} transform={`rotate(${a} ${x} ${y})`} />
      ))}
      {rings.map(([x, y], i) => (
        <circle key={`r${i}`} cx={x} cy={y} r={4.2} stroke={C.chili} strokeWidth={2.6} fill="none" />
      ))}
      {/* lime wedge */}
      <g transform="translate(150 150) rotate(-32)">
        <path d="M-21 0 A21 21 0 0 1 21 0 Z" fill={C.lime} />
        <path d="M-17 -1.5 A17 17 0 0 1 17 -1.5 Z" fill={C.banana} opacity={0.85} />
        <path d="M0 -1.5 L-10 -12 M0 -1.5 L0 -16 M0 -1.5 L10 -12" stroke={C.lime} strokeWidth={1.4} />
      </g>
    </>
  );
}

function KopiTeh() {
  return (
    <>
      <Kopi x={64} y={66} s={1.02} handle={35} />
      <TeaGlass x={142} y={140} s={1} ice />
    </>
  );
}

function PisangGorengTeh() {
  const piece = "M-37 2 C-35 -10 -15 -14 2 -13 C20 -12 34 -8 37 0 C35 9 18 13 0 12 C-18 11 -36 12 -37 2 Z";
  const pieces: [number, number, number][] = [[64, 70, -32], [98, 74, -26], [66, 106, -30], [100, 110, -22]];
  return (
    <>
      <Plate cx={84} cy={90} r={76} well={0.79} />
      {pieces.map(([x, y, a], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${a})`}>
          <path d={piece} fill={C.batter} />
          <ellipse cx={-18} cy={-3} rx={5} ry={2.6} fill={C.tea} />
          <ellipse cx={6} cy={4} rx={6} ry={2.8} fill={C.tea} />
          <ellipse cx={24} cy={-4} rx={4} ry={2.2} fill={C.tea} />
          <circle cx={-6} cy={-6} r={1.7} fill={C.banana} />
          <circle cx={16} cy={6} r={1.5} fill={C.banana} />
          <circle cx={-26} cy={5} r={1.4} fill={C.banana} />
        </g>
      ))}
      <TeaGlass x={160} y={158} s={0.78} />
    </>
  );
}

function Tiramisu() {
  const specks: Pt[] = [[-20, -18], [-6, -26], [12, -14], [24, -24], [-24, 8], [4, 4], [20, 12], [-12, 22], [14, 26], [-28, -30], [28, -4], [-2, -8], [-16, -2], [8, 18]];
  const dust: Pt[] = [[-14, -8], [10, -28], [22, 22], [-26, 22], [0, 30], [26, -16]];
  return (
    <>
      <Plate r={94} />
      <g transform="translate(94 96) rotate(-8)">
        <rect x={-41} y={-40} width={82} height={82} rx={6} fill={C.mascarpone} />
        <rect x={-37} y={-38} width={74} height={72} rx={4} fill={C.cocoa} />
        {specks.map(([x, y], i) => (
          <circle key={`k${i}`} cx={x} cy={y} r={1.5} fill={C.coffee} />
        ))}
        {dust.map(([x, y], i) => (
          <circle key={`u${i}`} cx={x} cy={y} r={2.2} fill={C.crema} />
        ))}
      </g>
      <g transform="translate(150 132) rotate(32)" fill={C.grout}>
        <ellipse cx={0} cy={-24} rx={9} ry={13} />
        <rect x={-2.5} y={-14} width={5} height={50} rx={2.5} />
      </g>
    </>
  );
}

function BananaSplit() {
  const crumbs: [number, number, number][] = [
    [58, 70, 2.2], [72, 88, 1.8], [62, 94, 2], [76, 72, 1.6], [104, 62, 1.8], [118, 92, 2.2], [100, 96, 1.7],
    [124, 76, 1.6], [146, 70, 2.1], [160, 90, 1.8], [150, 96, 2], [166, 74, 1.6], [90, 80, 1.5], [136, 84, 1.7],
  ];
  return (
    <>
      <ellipse cx={110} cy={80} rx={108} ry={78} fill={C.rim} />
      <ellipse cx={110} cy={80} rx={91} ry={63} fill={C.steel} />
      {/* banana halves, cut side up */}
      <path d="M32 72 C48 26 172 26 188 72 C170 54 50 54 32 72 Z" fill={C.banana} />
      <path d="M32 88 C48 134 172 134 188 88 C170 106 50 106 32 88 Z" fill={C.banana} />
      <path d="M46 62 C66 42 154 42 174 62" stroke={C.crema} strokeWidth={1.6} strokeDasharray="1.5 6" strokeLinecap="round" fill="none" opacity={0.55} />
      <path d="M46 98 C66 118 154 118 174 98" stroke={C.crema} strokeWidth={1.6} strokeDasharray="1.5 6" strokeLinecap="round" fill="none" opacity={0.55} />
      {/* three scoops: chocolate, strawberry, chocolate */}
      <g fill={C.cocoa}>
        <circle cx={66} cy={80} r={23} />
        <circle cx={50} cy={70} r={9} />
        <circle cx={82} cy={66} r={8} />
        <circle cx={78} cy={96} r={9} />
      </g>
      <g fill={C.strawberry}>
        <circle cx={110} cy={80} r={24} />
        <circle cx={94} cy={68} r={8} />
        <circle cx={126} cy={92} r={9} />
      </g>
      <g fill={C.cocoa}>
        <circle cx={154} cy={80} r={23} />
        <circle cx={140} cy={64} r={8} />
        <circle cx={170} cy={92} r={9} />
        <circle cx={166} cy={66} r={7} />
      </g>
      {/* chocolate drizzle */}
      <path
        d="M40 46 L52 60 M60 40 L72 56 M84 36 L96 52 M108 34 L120 50 M132 36 L144 52 M156 40 L168 56 M176 46 L184 58 M40 104 L52 118 M60 106 L72 122 M84 108 L96 124 M108 108 L120 126 M132 108 L144 124 M156 106 L168 120 M176 100 L184 112"
        stroke={C.coffee}
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      <path d="M48 76 Q66 104 86 70 T128 72 T172 96" stroke={C.coffee} strokeWidth={2.6} strokeLinecap="round" fill="none" />
      {crumbs.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={C.batter} />
      ))}
      {/* strawberry piece and a mint leaf */}
      <ellipse cx={120} cy={66} rx={6.5} ry={5} fill={C.chili} />
      <path d="M106 74 C110 64 120 62 126 66 C120 72 112 76 106 74 Z" fill={C.leaf} />
      <path d="M106 74 C100 66 92 66 88 70 C94 76 100 78 106 74 Z" fill={C.leaf} />
    </>
  );
}

const ART: Record<DishId, { w: number; h: number; draw: () => ReactNode }> = {
  "nasi-goreng-wagyu": { w: 200, h: 200, draw: NasiGorengWagyu },
  "tuna-sambal-matah": { w: 200, h: 200, draw: TunaSambalMatah },
  "kopi-teh": { w: 200, h: 200, draw: KopiTeh },
  "pisang-goreng-teh": { w: 200, h: 200, draw: PisangGorengTeh },
  tiramisu: { w: 200, h: 200, draw: Tiramisu },
  "banana-split": { w: 220, h: 160, draw: BananaSplit },
};

export const dishRatio = (id: DishId) => ART[id].h / ART[id].w;

/**
 * A dish drawing. With `label` it is an image (role="img"); without, it is decorative.
 * Pass x/y/width to nest it inside another SVG.
 */
export function Dish({
  id,
  label,
  className,
  x,
  y,
  width,
}: {
  id: DishId;
  label?: string;
  className?: string;
  x?: number;
  y?: number;
  width?: number;
}) {
  const art = ART[id];
  const a11y = label ? { role: "img", "aria-label": label } : { "aria-hidden": true as const, focusable: "false" as const };
  return (
    <svg
      viewBox={`0 0 ${art.w} ${art.h}`}
      className={className}
      x={x}
      y={y}
      width={width}
      height={width !== undefined ? f((width * art.h) / art.w) : undefined}
      {...a11y}
    >
      {art.draw()}
    </svg>
  );
}
