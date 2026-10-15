// The three ways people use the hall, seen from above (Datang untuk). Each arrangement is
// 400 x 260. On desktop they sit side by side in one 1200 x 260 floor strip under one beam;
// below 1024px each one is its own panel above its text. All drawings: callers add data-mockup.
import type { ReactNode } from "react";
import type { UseId } from "@/content";
import { C } from "./palette";
import { Dish, Kopi, TeaGlass } from "./dishes";
import { Chair, Laptop, Pendant } from "./plan";

const Beam = ({ x1 = -16, x2 = 416, y = 28 }: { x1?: number; x2?: number; y?: number }) => (
  <line x1={x1} y1={y} x2={x2} y2={y} stroke={C.steel} strokeOpacity={0.3} strokeWidth={2} strokeDasharray="10 8" />
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

/** Sabtu–Minggu from 07.00: a breakfast table by the tall windows, morning light across it. */
function Pagi() {
  // the tall windows on the hall's left wall: steel frame, three panes
  const panes = [44, 116, 188];
  return (
    <>
      <rect x={0} y={40} width={8} height={216} fill={C.steel} />
      {panes.map((y) => (
        <rect key={y} x={3} y={y} width={2} height={64} fill={C.tile} />
      ))}
      <use href="#tg" x={125} y={52} width={150} height={198} />
      <Bubur x={164} y={122} s={1.25} />
      <EggsOnToast x={236} y={180} s={1.25} />
      <Kopi x={238} y={118} s={0.3} handle={30} />
      <TeaGlass x={164} y={182} s={0.27} />
      {/* morning sun through the panes, falling across the floor and the table */}
      <polygon points="8,48 8,108 332,170 332,110" fill={C.copper} opacity={0.12} />
      <polygon points="8,120 8,180 332,242 332,182" fill={C.copper} opacity={0.12} />
    </>
  );
}

/** Senin–Jumat from 09.00: two work tables with laptops in front of the tan leather banquette. */
function Kerja() {
  return (
    <>
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

/** Every day until 21.30: three tables put together for a group, under copper pendants. */
function Rombongan({ uid }: { uid: string }) {
  const pool = `pool-${uid}`;
  return (
    <>
      <defs>
        <radialGradient id={pool}>
          <stop offset="0" stopColor={C.copper} stopOpacity={0.3} />
          <stop offset="0.6" stopColor={C.copper} stopOpacity={0.14} />
          <stop offset="1" stopColor={C.copper} stopOpacity={0} />
        </radialGradient>
      </defs>
      <circle cx={140} cy={135} r={110} fill={`url(#${pool})`} />
      <circle cx={260} cy={135} r={110} fill={`url(#${pool})`} />
      {[20, 140, 260].map((x) => (
        <use key={x} href="#tg" x={x} y={55.8} width={120} height={158.4} />
      ))}
      <Laptop x={56} y={114} rot={180} s={1.1} />
      <Kopi x={100} y={162} s={0.2} />
      <Dish id="nasi-goreng-wagyu" x={172} y={107} size={56} decorative />
      <Dish id="tiramisu" x={295} y={101} size={46} decorative />
      <TeaGlass x={352} y={162} s={0.22} />
      <TeaGlass x={232} y={168} s={0.2} />
      <Pendant x={140} y={135} />
      <Pendant x={260} y={135} />
    </>
  );
}

const SCENES: Record<UseId, (p: { uid: string }) => ReactNode> = {
  pagi: Pagi,
  kerja: Kerja,
  rombongan: Rombongan,
};

type A11y = { label: string } & Record<`data-${string}`, string>;

/** Desktop: the three arrangements side by side as one floor strip, 1200 x 260. */
export function UsesStrip({ order, label, ...rest }: { order: UseId[] } & A11y) {
  return (
    <svg viewBox="0 0 1200 260" className="uses-strip" role="img" aria-label={label} {...rest}>
      <Beam x1={-24} x2={1224} />
      {order.map((id, i) => {
        const Scene = SCENES[id];
        return (
          <g key={id} transform={`translate(${i * 400} 0)`}>
            <Scene uid={`strip-${id}`} />
          </g>
        );
      })}
    </svg>
  );
}

/** Below 1024px: one arrangement per panel, 400 x 260. */
export function UsePanel({ id, label, ...rest }: { id: UseId } & A11y) {
  const Scene = SCENES[id];
  return (
    <svg viewBox="0 0 400 260" className="use-panel" role="img" aria-label={label} {...rest}>
      <Beam />
      <Scene uid={`panel-${id}`} />
    </svg>
  );
}
