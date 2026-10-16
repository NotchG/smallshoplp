import Art from "./Art";
import { C } from "./geometry";

// Laminated pastry, top-down (photo 3): four overlapping rounded rhombi (capsules skewed
// −35°) of slightly different lengths so the twist tapers at both ends, three bowed
// lamination lines on each, and dark filling peeking out along the lower edge.
// PastryShape is a bare <g> in a 290×150 box so the kitchen tray can reuse it.
const SKEW = -35;
const T = Math.tan((-SKEW * Math.PI) / 180);
const W = 54;
const MID_Y = 75;
const SEGS = [
  { x: 54, h: 92 },
  { x: 96, h: 114 },
  { x: 138, h: 116 },
  { x: 180, h: 98 },
];

export function PastryShape() {
  return (
    <g>
      {SEGS.slice(0, 3).map((s, i) => {
        // filling where neighbouring segments meet at the lower edge
        const y = MID_Y + Math.min(s.h, SEGS[i + 1].h) / 2 - 6;
        const x = s.x + T * (s.h / 2) - T * (y - (MID_Y - s.h / 2)) + W - 2;
        return <ellipse key={`f${i}`} cx={x} cy={y} rx={15} ry={8} fill={C.filling} />;
      })}
      {SEGS.map((s, i) => {
        const top = MID_Y - s.h / 2;
        return (
          <g key={i} transform={`translate(${s.x + T * (s.h / 2)} ${top}) skewX(${SKEW})`}>
            <rect width={W} height={s.h} rx={W / 2} fill={C.laminate} stroke={C.flossDark} strokeWidth="2.5" />
            <g fill="none" stroke={C.laminateLight} strokeWidth="4" strokeLinecap="round">
              <path d={`M15 ${s.h * 0.22} Q9 ${s.h / 2} 15 ${s.h * 0.78}`} />
              <path d={`M27 ${s.h * 0.12} Q21 ${s.h / 2} 27 ${s.h * 0.88}`} />
              <path d={`M39 ${s.h * 0.22} Q33 ${s.h / 2} 39 ${s.h * 0.78}`} />
            </g>
          </g>
        );
      })}
    </g>
  );
}

export default function Pastry({ className = "" }: { className?: string }) {
  return (
    <Art id="pastry" viewBox="0 0 290 150" className={className}>
      <PastryShape />
    </Art>
  );
}
