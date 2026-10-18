// Five signature dishes, flat and strictly top-down on matte black plates (design brief §6).
// Each is a drawing standing in for a photo: callers add data-mockup. No banana split drawing:
// that dish is the owner's photo.
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

/** A top-down glass of amber tea, optionally with two ice cubes. */
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

function NasiGorengWagyuArt() {
  const bumps = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, i) => [a, [10, 9, 11][i % 3]] as const);
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
      {/* kerupuk tucked beside the rice */}
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

function TunaSambalMatahArt() {
  const slices: Pt[] = [[76, 106], [100, 99], [124, 92]];
  const rings: Pt[] = [[70, 90], [90, 112], [106, 82], [118, 106], [132, 80], [96, 94], [80, 128], [126, 120], [62, 112]];
  const shallots: [number, number, number][] = [[80, 100, 0], [104, 114, 40], [114, 88, -30], [92, 80, 70], [134, 100, 10], [84, 118, -60], [120, 70, 20]];
  const grass: [number, number, number][] = [[108, 98, 30], [72, 114, -20], [122, 110, 60], [98, 126, 0], [134, 88, -45], [86, 92, 80]];
  return (
    <>
      <Plate />
      {/* seared tuna: dark edges, rosy middle */}
      {slices.map(([x, y]) => (
        <g key={x} transform={`translate(${x} ${y}) rotate(20)`}>
          <rect x={-15} y={-37} width={30} height={74} rx={8} fill={C.cocoa} />
          <rect x={-10.5} y={-32} width={21} height={64} rx={5} fill={C.marbling} />
          <rect x={-4} y={-28} width={8} height={56} rx={4} fill={C.shallot} opacity={0.7} />
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

function KopiTehArt() {
  return (
    <>
      <Kopi x={64} y={66} s={1.02} handle={35} />
      <TeaGlass x={142} y={140} s={1} ice />
    </>
  );
}

function PisangGorengTehArt() {
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

function TiramisuArt() {
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

const ART: Record<DishId, () => ReactNode> = {
  "nasi-goreng-wagyu": NasiGorengWagyuArt,
  "tuna-sambal-matah": TunaSambalMatahArt,
  "kopi-teh": KopiTehArt,
  "pisang-goreng-teh": PisangGorengTehArt,
  tiramisu: TiramisuArt,
};

/** Dishes as <symbol id="dish-…"> for <use>, where one drawing repeats many times. Render once. */
export function DishSymbols({ ids }: { ids: DishId[] }) {
  return (
    <svg aria-hidden="true" focusable="false" width="0" height="0" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
      <defs>
        {ids.map((id) => {
          const Draw = ART[id];
          return (
            <symbol key={id} id={`dish-${id}`} viewBox="0 0 200 200">
              <Draw />
            </symbol>
          );
        })}
      </defs>
    </svg>
  );
}

type DishProps = {
  /** Display width in px. Omit to size with CSS. */
  size?: number;
  /** Indonesian description; makes the drawing an image (role="img"). */
  label?: string;
  /** Hide from assistive tech (drawings repeated on the closing table). */
  decorative?: boolean;
  className?: string;
  /** Position when nested inside another SVG. */
  x?: number;
  y?: number;
} & Record<`data-${string}`, string>;

/** One dish drawing, square viewBox 200 x 200. */
export function Dish({ id, size, label, decorative, className, x, y, ...rest }: DishProps & { id: DishId }) {
  const Draw = ART[id];
  const a11y =
    !decorative && label
      ? { role: "img", "aria-label": label }
      : { "aria-hidden": true as const, focusable: "false" as const };
  return (
    <svg viewBox="0 0 200 200" className={className} x={x} y={y} width={size} height={size} {...a11y} {...rest}>
      <Draw />
    </svg>
  );
}

export const NasiGorengWagyu = (p: DishProps) => <Dish id="nasi-goreng-wagyu" {...p} />;
export const TunaSambalMatah = (p: DishProps) => <Dish id="tuna-sambal-matah" {...p} />;
export const KopiTeh = (p: DishProps) => <Dish id="kopi-teh" {...p} />;
export const PisangGorengTeh = (p: DishProps) => <Dish id="pisang-goreng-teh" {...p} />;
export const Tiramisu = (p: DishProps) => <Dish id="tiramisu" {...p} />;
