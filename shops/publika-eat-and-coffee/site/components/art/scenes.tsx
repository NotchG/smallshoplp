// Floor scenes from above: the three uses of the hall (Datang untuk) and the evening long table
// (Hubungi kami). Same plan language as the hero. All illustrations, flagged data-mockup by callers.
import type { ReactNode } from "react";
import type { DishId, UseId } from "@/content";
import { C } from "./palette";
import { Dish, Kopi, TeaGlass } from "./dishes";
import { Chair, Laptop, Pendant } from "./plan";

// Overhead beam, drawn past the panel edges so the three panels read as one floor strip.
const Beam = ({ y = 28 }: { y?: number }) => (
  <line x1={-16} y1={y} x2={416} y2={y} stroke={C.steel} strokeOpacity={0.3} strokeWidth={2} strokeDasharray="10 8" />
);

function Bubur({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle r={20} fill={C.rim} />
      <circle r={16} fill={C.mascarpone} />
      <rect x={-9} y={-6} width={12} height={4} rx={2} fill={C.batter} transform="rotate(-20)" />
      <rect x={-2} y={2} width={11} height={4} rx={2} fill={C.batter} transform="rotate(15)" />
      <rect x={-4} y={-12} width={9} height={3.5} rx={1.75} fill={C.crema} transform="rotate(30)" />
      <circle cx={6} cy={-6} r={1.8} fill={C.lime} />
      <circle cx={-8} cy={6} r={1.8} fill={C.lime} />
      <circle cx={2} cy={10} r={1.6} fill={C.leaf} />
      <circle cx={-10} cy={-2} r={1.6} fill={C.lime} />
      <path d="M-6 -1 q4 -3 8 0 t8 0" stroke={C.coffee} strokeWidth={1.4} fill="none" strokeLinecap="round" />
    </g>
  );
}

function EggsOnToast({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle r={20} fill={C.rim} />
      <circle r={16} fill={C.steel} />
      <rect x={-11} y={-10} width={21} height={20} rx={3.5} fill={C.batter} transform="rotate(10)" />
      <path d="M-7 -4 C-6 -11 4 -12 8 -6 C12 0 7 8 0 8 C-6 8 -9 2 -7 -4 Z" fill={C.mascarpone} />
      <circle cx={1} cy={-1} r={4.6} fill={C.rice} />
    </g>
  );
}

function Pagi() {
  return (
    <>
      <Beam />
      {/* tall glazing along the top wall */}
      <rect x={16} y={2} width={368} height={6} rx={1.5} fill={C.steel} />
      {[20, 112, 204, 296].map((x) => (
        <rect key={x} x={x} y={4.2} width={84} height={1.8} fill={C.tile} />
      ))}
      <use href="#tg" x={125} y={52} width={150} height={198} />
      <Bubur x={164} y={122} s={1.25} />
      <EggsOnToast x={236} y={180} s={1.25} />
      <Kopi x={238} y={118} s={0.3} handle={30} />
      <TeaGlass x={164} y={182} s={0.27} />
      {/* morning light from the windows, falling across the table */}
      <polygon points="58,8 146,8 300,260 212,260" fill={C.copper} opacity={0.12} />
      <polygon points="190,8 234,8 388,252 344,252" fill={C.copper} opacity={0.12} />
    </>
  );
}

function Kerja() {
  return (
    <>
      <Beam />
      <use href="#fern" x={155} y={6} width={90} height={90} />
      <Chair x={115} y={103} rot={180} s={1.15} />
      <Chair x={285} y={103} rot={180} s={1.15} />
      <rect x={68} y={114} width={94} height={78} rx={2} fill={C.timber} />
      <rect x={238} y={114} width={94} height={78} rx={2} fill={C.timber} />
      <Laptop x={108} y={158} rot={4} s={1.2} />
      <Kopi x={145} y={134} s={0.22} handle={-40} />
      <Laptop x={280} y={160} rot={-5} s={1.2} />
      <TeaGlass x={315} y={134} s={0.22} />
      {/* tan leather banquette */}
      <rect x={20} y={243} width={360} height={13} rx={6.5} fill={C.crema} />
      {[24, 113, 202, 291].map((x) => (
        <rect key={x} x={x} y={196} width={85} height={52} rx={9} fill={C.tea} />
      ))}
    </>
  );
}

function Rombongan({ poolId }: { poolId: string }) {
  return (
    <>
      <defs>
        <radialGradient id={poolId}>
          <stop offset="0" stopColor={C.copper} stopOpacity={0.3} />
          <stop offset="0.6" stopColor={C.copper} stopOpacity={0.14} />
          <stop offset="1" stopColor={C.copper} stopOpacity={0} />
        </radialGradient>
      </defs>
      <Beam />
      <circle cx={140} cy={135} r={110} fill={`url(#${poolId})`} />
      <circle cx={260} cy={135} r={110} fill={`url(#${poolId})`} />
      {[20, 140, 260].map((x) => (
        <use key={x} href="#tg" x={x} y={55.8} width={120} height={158.4} />
      ))}
      <Laptop x={56} y={114} rot={180} s={1.1} />
      <Kopi x={100} y={162} s={0.2} />
      <Dish id="nasi-goreng-wagyu" x={172} y={107} width={56} />
      <Dish id="tiramisu" x={295} y={101} width={46} />
      <TeaGlass x={352} y={162} s={0.22} />
      <TeaGlass x={232} y={168} s={0.2} />
      <Pendant x={140} y={135} />
      <Pendant x={260} y={135} />
    </>
  );
}

const SCENES: Record<UseId, (p: { poolId: string }) => ReactNode> = {
  pagi: Pagi,
  kerja: Kerja,
  rombongan: Rombongan,
};

/** One arrangement, 400 x 260. On desktop the three sit side by side as one floor strip. */
export function UsePanel({ id, label }: { id: UseId; label: string }) {
  const Scene = SCENES[id];
  return (
    <svg viewBox="0 0 400 260" className="use-panel" role="img" aria-label={label}>
      <Scene poolId={`pool-${id}`} />
    </svg>
  );
}

/** The evening long table on the steel ground: six tables joined, all pendants lit. 600 x 300. */
export function EveningTable({ label }: { label: string }) {
  const s = 0.9;
  const w = 100 * s;
  const x0 = 30;
  const cy = 150;
  const top = cy - 66 * s;
  const lights = [x0 + 2 * w, x0 + 3 * w, x0 + 4 * w];
  const dishes: { id: DishId; at: number; size: number }[] = [
    { id: "nasi-goreng-wagyu", at: 1, size: 54 },
    { id: "pisang-goreng-teh", at: 2, size: 54 },
    { id: "tuna-sambal-matah", at: 3, size: 54 },
    { id: "banana-split", at: 4, size: 60 },
    { id: "tiramisu", at: 5, size: 48 },
  ];
  return (
    <svg viewBox="0 0 600 300" role="img" aria-label={label}>
      <defs>
        <radialGradient id="pool-evening">
          <stop offset="0" stopColor={C.copper} stopOpacity={0.6} />
          <stop offset="0.5" stopColor={C.copper} stopOpacity={0.25} />
          <stop offset="1" stopColor={C.copper} stopOpacity={0} />
        </radialGradient>
      </defs>
      {lights.map((x) => (
        <circle key={x} cx={x} cy={cy} r={140} fill="url(#pool-evening)" />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <use key={i} href="#tg" x={x0 + i * w} y={top} width={w} height={132 * s} />
      ))}
      <Kopi x={x0 + w / 2 - 10} y={cy - 12} s={0.22} handle={20} />
      <TeaGlass x={x0 + w / 2 + 14} y={cy + 14} s={0.19} />
      {dishes.map((d) => {
        const cx = x0 + d.at * w + w / 2;
        const h = d.id === "banana-split" ? (d.size * 160) / 220 : d.size;
        return <Dish key={d.id} id={d.id} x={cx - d.size / 2} y={cy - h / 2} width={d.size} />;
      })}
      {lights.map((x) => (
        <Pendant key={x} x={x} y={cy} r={13} />
      ))}
      <use href="#fern" x={2} y={2} width={84} height={84} opacity={0.9} />
      <use href="#fern" x={514} y={214} width={84} height={84} opacity={0.9} />
    </svg>
  );
}
