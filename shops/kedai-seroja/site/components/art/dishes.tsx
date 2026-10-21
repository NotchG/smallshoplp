// Flat, top-down dish illustrations (design brief §6). No outlines, no gradients,
// a handful of fills each. Every piece lives in a 200 × 200 box so the lauk can be
// reused on the hero plate and in the counter trays.
import type { ReactNode } from "react";
import type { ArtName } from "@/content";
import { C, blob, bumpy, spread, inRect, circ, tf, r1, segs, dots, boxes } from "./shapes";

const round = { fill: "none", strokeLinecap: "round" as const };

/* ---------- Shared ground pieces ---------- */

export function Plate() {
  return (
    <g>
      <circle cx={100} cy={100} r={98} fill={C.rim} />
      <circle cx={100} cy={100} r={96} fill={C.nasi} />
      <circle cx={100} cy={100} r={74} fill={C.well} />
    </g>
  );
}

// Round banana-leaf liner with parallel veins and a midrib.
export function LeafRound({ r = 74, angle = -32 }: { r?: number; angle?: number }) {
  const t = (angle * Math.PI) / 180;
  const ux = Math.cos(t), uy = Math.sin(t); // vein direction
  const nx = -uy, ny = ux;                  // across the leaf
  const veins: string[] = [];
  for (let d = -r + 8; d <= r - 8; d += 7) {
    const half = Math.sqrt(Math.max(0, (r - 4) ** 2 - d * d));
    const cx = 100 + nx * d, cy = 100 + ny * d;
    veins.push(`M${r1(cx - ux * half)} ${r1(cy - uy * half)}L${r1(cx + ux * half)} ${r1(cy + uy * half)}`);
  }
  // Midrib runs across the veins.
  const mid = `M${r1(100 - nx * (r - 6))} ${r1(100 - ny * (r - 6))}L${r1(100 + nx * (r - 6))} ${r1(100 + ny * (r - 6))}`;
  return (
    <g>
      <path d={blob(100, 100, r, r, 14, 0.025, 7)} fill={C.daun} />
      <path d={veins.join("")} stroke="#FFFFFF" strokeOpacity={0.12} strokeWidth={1.1} fill="none" />
      <path d={mid} stroke="#FFFFFF" strokeOpacity={0.22} strokeWidth={2.6} strokeLinecap="round" fill="none" />
    </g>
  );
}

// Rectangular leaf liner for a counter tray (viewBox 0 0 200 150).
export function LeafTray() {
  const veins: string[] = [];
  for (let x = 18; x <= 172; x += 8) veins.push(`M${x} 14L${x + 10} 136`);
  return (
    <g>
      <rect x={8} y={8} width={184} height={134} rx={6} fill={C.daun} />
      <path d={veins.join("")} stroke="#FFFFFF" strokeOpacity={0.12} strokeWidth={1.1} fill="none" />
    </g>
  );
}

// Long banana-leaf strip from the display case (viewBox 0 0 600 140, stretched).
export function LeafStrip() {
  const veins: string[] = [];
  for (let y = 40; y <= 104; y += 7) veins.push(`M0 ${y}Q300 ${y - 6} 600 ${y}`);
  return (
    <g>
      <path d="M0 30Q300 6 600 26L600 114Q300 134 0 110Z" fill={C.daun} />
      <path d={veins.join("")} stroke="#FFFFFF" strokeOpacity={0.12} strokeWidth={1.2} fill="none" vectorEffect="non-scaling-stroke" />
    </g>
  );
}

/* ---------- Lauk (counter + hero plate) ---------- */

function Nasi() {
  return (
    <g>
      <path d={bumpy(103, 106, 62, 55, 26, 0.07, 3)} fill={C.shade} />
      <path d={bumpy(100, 100, 61, 55, 26, 0.07, 4)} fill={C.nasi} />
      <path d={segs(spread(18, 100, 98, 46, 0, 11), 5.8)} stroke={C.besi} strokeOpacity={0.08} strokeWidth={3.2} {...round} />
    </g>
  );
}

function Rendang() {
  const chunks: [number, number, number, number][] = [
    [76, 84, 24, 20], [123, 80, 22, 19], [100, 113, 26, 21], [68, 126, 19, 16], [134, 123, 21, 18], [101, 66, 15, 12],
  ];
  return (
    <g>
      <path d={blob(100, 103, 70, 60, 11, 0.12, 21)} fill={C.jati} />
      {chunks.map(([x, y, rx, ry], i) => (
        <path key={i} d={blob(x, y, rx, ry, 7, 0.2, 30 + i)} fill={C.rendang} />
      ))}
      <path d={dots(spread(16, 100, 100, 60, 0, 7))} stroke={C.goreng} strokeWidth={4.4} {...round} />
    </g>
  );
}

function TelurBalado() {
  const eggs: [number, number, number][] = [[72, 86, -18], [128, 88, 14], [100, 132, -4]];
  return (
    <g>
      <path d={blob(100, 103, 72, 62, 12, 0.1, 41)} fill={C.sambal} />
      {eggs.map(([x, y, a], i) => (
        <g key={i} transform={tf(x, y, a)}>
          <ellipse rx={27} ry={21} fill={C.nasi} />
          <circle cx={3} cy={2} r={12} fill={C.kuning} />
          <path d={blob(-9, -11, 15, 8, 7, 0.25, 50 + i)} fill={C.sambal} />
        </g>
      ))}
    </g>
  );
}

function TempeOrek() {
  return (
    <g>
      <path d={blob(100, 102, 68, 58, 11, 0.1, 61)} fill={C.rendang} />
      {(() => {
        const sticks = spread(28, 100, 102, 54, 0, 62);
        return (
          <>
            <path d={segs(sticks.filter((_, i) => i % 3 !== 0), 16)} stroke={C.jati} strokeWidth={8} {...round} />
            <path d={segs(sticks.filter((_, i) => i % 3 === 0), 16)} stroke={C.goreng} strokeWidth={8} {...round} />
          </>
        );
      })()}
      <path d={segs(spread(7, 100, 102, 48, 10, 63), 7)} stroke={C.sambal} strokeWidth={5} {...round} />
    </g>
  );
}

function Perkedel() {
  const patties: [number, number, number, number][] = [[72, 84, 31, 29], [130, 86, 30, 28], [100, 135, 32, 29]];
  return (
    <g>
      {patties.map(([x, y, rx, ry], i) => (
        <g key={i}>
          <path d={blob(x, y, rx, ry, 10, 0.07, 70 + i)} fill={C.goreng} />
          <path d={dots(spread(5, x, y, rx * 0.68, 0, 80 + i))} stroke={C.jati} strokeWidth={9} {...round} />
          <path d={segs(spread(4, x, y, rx * 0.62, 4, 100 + i), 3.4)} stroke={C.daun} strokeWidth={1.8} {...round} />
        </g>
      ))}
    </g>
  );
}

function Drumstick({ x, y, a, seed }: { x: number; y: number; a: number; seed: number }) {
  return (
    <g transform={tf(x, y, a)}>
      <rect x={24} y={-5} width={28} height={10} rx={5} fill={C.nasi} />
      <circle cx={54} cy={-6} r={7} fill={C.nasi} />
      <circle cx={54} cy={6} r={7} fill={C.nasi} />
      <path d="M-44 0C-44-26-20-34 2-30C18-27 30-14 34-5L34 5C30 14 18 27 2 30C-20 34-44 26-44 0Z" fill={C.jati} />
      {[-28, -14, 0, 14].map((sx, i) => {
        const h = 36 - Math.abs(sx) * 0.4;
        return <rect key={i} x={sx - 2.5} y={-h / 2} width={5} height={h} rx={2.5} fill={C.rendang} transform={`rotate(18 ${sx} 0)`} />;
      })}
      <path d={blob(-16, -13, 10, 5, 7, 0.2, seed)} fill={C.goreng} />
    </g>
  );
}

function AyamBakar() {
  return (
    <g>
      <Drumstick x={90} y={76} a={-14} seed={111} />
      <Drumstick x={110} y={128} a={166} seed={112} />
    </g>
  );
}

function SayurLodeh() {
  return (
    <g>
      <circle cx={100} cy={100} r={92} fill={C.rim} />
      <circle cx={100} cy={100} r={90} fill={C.nasi} />
      <circle cx={100} cy={100} r={72} fill={C.crema} />
      <path d={boxes(spread(6, 100, 100, 52, 12, 112), 18, 14)} fill={C.daun} opacity={0.5} />
      <path d={segs(spread(7, 100, 100, 50, 0, 111), 22)} stroke={C.daun} strokeWidth={8} {...round} />
      <path d={boxes(spread(7, 100, 100, 54, 6, 113), 12, 12)} fill={C.kuning} />
    </g>
  );
}

function SambalAti() {
  return (
    <g>
      <path d={blob(100, 102, 72, 60, 12, 0.1, 121)} fill={C.sambal} />
      <path d={boxes(spread(9, 100, 102, 46, 0, 122), 19, 17)} fill={C.rendang} stroke={C.rendang} strokeWidth={2} strokeLinejoin="round" />
      <path d={boxes(spread(7, 100, 102, 50, 12, 123), 16, 15)} fill={C.kuning} stroke={C.kuning} strokeWidth={2} strokeLinejoin="round" />
      <path d={dots(spread(9, 100, 102, 50, 0, 124))} stroke={C.sambal} strokeWidth={9} {...round} />
    </g>
  );
}

/* ---------- Menu andalan (plated) ---------- */

function Kecombrang() {
  return (
    <g>
      <Plate />
      <path d={bumpy(98, 106, 64, 58, 26, 0.06, 131)} fill={C.goreng} />
      <path d={segs(spread(24, 98, 106, 52, 0, 132), 5)} stroke={C.nasi} strokeOpacity={0.5} strokeWidth={3} {...round} />
      <path d={segs(spread(18, 94, 112, 48, 0, 133), 12.2)} stroke={C.pink} strokeWidth={3.8} {...round} />
      <path d={blob(118, 84, 30, 26, 9, 0.14, 134)} fill={C.nasi} />
      <circle cx={120} cy={82} r={11.5} fill={C.kuning} />
    </g>
  );
}

function Dendeng() {
  const pieces: [number, number, number, number, number][] = [
    [76, 88, 40, 30, -12], [127, 92, 37, 30, 10], [100, 137, 42, 24, 4],
  ];
  return (
    <g>
      <Plate />
      {pieces.map(([x, y, rx, ry, a], i) => (
        <g key={i}>
          <path d={blob(x, y, rx, ry, 10, 0.16, 141 + i, a)} fill={C.rendang} />
          <path d={segs(spread(7, x, y, rx * 0.6, 0, 150 + i), 9)} stroke={C.jati} strokeWidth={3} {...round} />
        </g>
      ))}
      <path d={dots(spread(14, 100, 104, 54, 0, 160))} stroke={C.sambal} strokeWidth={10} {...round} />
      <path d={segs(spread(9, 100, 104, 52, 0, 161), 3)} stroke={C.daun} strokeWidth={4} {...round} />
    </g>
  );
}

function NasiRendang() {
  return (
    <g>
      <Plate />
      <LeafRound r={74} />
      <g transform="translate(16 20) scale(0.62)"><Nasi /></g>
      <g transform="translate(66 70) scale(0.6)"><Rendang /></g>
      <path d={blob(136, 68, 13, 10, 7, 0.2, 171)} fill={C.sambal} />
    </g>
  );
}

function Bakwan() {
  const fritters: [number, number, number, number][] = [[74, 86, 34, 30], [130, 90, 32, 30], [102, 137, 34, 28]];
  return (
    <g>
      <Plate />
      {fritters.map(([x, y, rx, ry], i) => (
        <g key={i}>
          <path d={blob(x, y, rx, ry, 13, 0.17, 181 + i)} fill={C.goreng} />
          <path d={dots(spread(4, x, y, rx * 0.78, rx * 0.35, 190 + i))} stroke={C.jati} strokeWidth={11} {...round} />
          <path d={segs(spread(10, x, y, rx * 0.64, 0, 200 + i), 1.2)} stroke={C.kuning} strokeWidth={7.4} {...round} />
          <path d={segs(spread(3, x, y, rx * 0.6, 4, 210 + i), 3.6)} stroke={C.daun} strokeWidth={2.4} {...round} />
        </g>
      ))}
    </g>
  );
}

function Bakmi() {
  const strands: string[] = [];
  for (let y = -48; y <= 48; y += 9) {
    const w = Math.sqrt(54 * 54 - y * y);
    const n = Math.max(1, Math.floor((2 * w) / 12) - 1);
    strands.push(`M${r1(100 - w + 3)} ${100 + y}q6 -3.5 12 0${"t12 0".repeat(n)}`);
  }
  return (
    <g>
      <circle cx={100} cy={100} r={98} fill={C.rim} />
      <circle cx={100} cy={100} r={96} fill={C.nasi} />
      <circle cx={100} cy={100} r={78} fill={C.well} />
      <path d={blob(100, 100, 64, 62, 12, 0.06, 221)} fill={C.mi} />
      <path d={strands.join("")} stroke={C.besi} strokeOpacity={0.16} strokeWidth={2.2} strokeLinecap="round" fill="none" />
      <ellipse cx={70} cy={126} rx={24} ry={10} transform="rotate(-32 70 126)" fill={C.daun} />
      <ellipse cx={78} cy={142} rx={20} ry={8.5} transform="rotate(4 78 142)" fill={C.daun} />
      <path d={boxes(spread(8, 118, 88, 26, 0, 222), 12, 10)} fill={C.jati} stroke={C.jati} strokeWidth={3} strokeLinejoin="round" />
      <path d={segs(spread(5, 118, 88, 32, 14, 223), 2.5)} stroke={C.rendang} strokeWidth={13} {...round} />
    </g>
  );
}

/* ---------- Kopi & camilan ---------- */

function Latte() {
  return (
    <g>
      <circle cx={100} cy={100} r={96} fill={C.rim} />
      <circle cx={100} cy={100} r={94} fill={C.nasi} />
      <rect x={144} y={89} width={40} height={22} rx={11} fill={C.rim} />
      <rect x={146} y={91} width={36} height={18} rx={9} fill={C.nasi} />
      <circle cx={96} cy={100} r={62} fill={C.rim} />
      <circle cx={96} cy={100} r={60} fill={C.nasi} />
      <circle cx={96} cy={100} r={51} fill={C.latte} />
      <path d="M96 132C66 112 62 86 80 79C90 75 96 84 96 91C96 84 102 75 112 79C130 86 126 112 96 132Z" fill={C.crema} />
      <path d="M96 116C82 106 81 95 88 92C92 91 96 95 96 99C96 95 100 91 104 92C111 95 110 106 96 116Z" fill={C.latte} />
      <rect x={94.5} y={128} width={3} height={16} rx={1.5} fill={C.crema} />
    </g>
  );
}

function Risol() {
  const rolls: [number, number, number, number][] = [[100, 64, -8, 108], [100, 102, -8, 108], [92, 140, -8, 86]];
  return (
    <g>
      {rolls.map(([x, y, a, w], i) => (
        <g key={i} transform={tf(x, y, a)}>
          <rect x={-w / 2} y={-17} width={w} height={34} rx={12} fill={C.goreng} />
          {(() => {
            const crumbs = inRect(22, w - 18, 24, 240 + i);
            return (
              <>
                <path d={dots(crumbs.filter((_, j) => j % 3))} stroke={C.jati} strokeWidth={2.6} {...round} />
                <path d={dots(crumbs.filter((_, j) => !(j % 3)))} stroke={C.kuning} strokeWidth={2.6} {...round} />
              </>
            );
          })()}
          {i === 2 && <ellipse cx={w / 2 - 2} cy={0} rx={8} ry={14} fill={C.crema} />}
        </g>
      ))}
    </g>
  );
}

function Lumpia() {
  const rolls: [number, number][] = [[94, 70], [104, 100], [114, 130]];
  return (
    <g>
      {rolls.map(([x, y], i) => (
        <g key={i} transform={tf(x, y, -24)}>
          <rect x={-62} y={-12} width={124} height={24} rx={12} fill={C.mi} />
          <path d={segs(inRect(9, 104, 14, 260 + i).map((p) => ({ ...p, a: 0 })), 2.4)} stroke={C.goreng} strokeOpacity={0.75} strokeWidth={4.4} {...round} />
          <path d="M-42 -12L-32 12" stroke={C.goreng} strokeWidth={2.4} strokeLinecap="round" />
        </g>
      ))}
      {/* two cabe rawit */}
      <path d="M30 166C38 156 54 154 68 160C56 162 42 166 30 166Z" fill={C.daun} />
      <path d="M42 180C50 172 64 171 76 176C64 178 52 181 42 180Z" fill={C.daun} />
    </g>
  );
}

function DonatCokelat() {
  return (
    <g>
      <path fillRule="evenodd" d={circ(100, 100, 84) + circ(100, 100, 20)} fill={C.goreng} />
      <path fillRule="evenodd" d={blob(100, 100, 76, 75, 18, 0.04, 301) + circ(100, 100, 27)} fill={C.latte} />
      <path d={segs(spread(110, 100, 100, 72, 31, 302), 5)} stroke={C.rendang} strokeWidth={2.6} {...round} />
    </g>
  );
}

function DonatWarna() {
  return (
    <g>
      <path fillRule="evenodd" d={circ(100, 100, 84) + circ(100, 100, 20)} fill={C.goreng} />
      <path fillRule="evenodd" d={blob(100, 100, 76, 75, 18, 0.04, 311) + circ(100, 100, 27)} fill={C.nasi} />
      {(() => {
        const sp = spread(96, 100, 100, 72, 31, 312);
        return (
          <>
            <path d={segs(sp.filter((_, i) => i % 2), 5.6)} stroke={C.pink} strokeWidth={2.8} {...round} />
            <path d={segs(sp.filter((_, i) => !(i % 2)), 5.6)} stroke={C.kuning} strokeWidth={2.8} {...round} />
          </>
        );
      })()}
    </g>
  );
}

function DonatGula() {
  return (
    <g>
      <path fillRule="evenodd" d={circ(100, 100, 84) + circ(100, 100, 19)} fill={C.goreng} />
      <path fillRule="evenodd" d={blob(98, 96, 70, 68, 14, 0.1, 321) + circ(100, 100, 25)} fill={C.nasi} />
      <path d={dots(spread(26, 100, 100, 82, 68, 322))} stroke={C.nasi} strokeWidth={3.2} {...round} />
    </g>
  );
}

const ART: Record<ArtName, () => ReactNode> = {
  kecombrang: Kecombrang,
  dendeng: Dendeng,
  nasiRendang: NasiRendang,
  bakwan: Bakwan,
  bakmi: Bakmi,
  nasi: Nasi,
  rendang: Rendang,
  ayamBakar: AyamBakar,
  telurBalado: TelurBalado,
  tempeOrek: TempeOrek,
  sayurLodeh: SayurLodeh,
  perkedel: Perkedel,
  sambalAti: SambalAti,
  latte: Latte,
  risol: Risol,
  lumpia: Lumpia,
  donatCokelat: DonatCokelat,
  donatWarna: DonatWarna,
  donatGula: DonatGula,
};

export function artFor(name: ArtName) {
  const Art = ART[name] as () => ReactNode;
  return <Art />;
}
