// Pieces of the hall, seen from above: timber tables with rattan chairs, hanging ferns,
// copper pendants, laptops. Shapes that repeat live in one sprite (<PlanSprite />, rendered
// once per page) and are referenced with <use href="#…">.
import { C } from "./palette";

const f = (n: number) => Math.round(n * 10) / 10;

/** A rattan chair seat with its curved back. Facing up (back at the bottom) at rot 0. */
export function Chair({ x, y, rot = 0, s = 1 }: { x: number; y: number; rot?: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <rect x={-13} y={-13} width={26} height={25} rx={7} fill={C.rice} />
      <rect x={-15.5} y={8} width={31} height={9} rx={4.5} fill={C.crema} />
    </g>
  );
}

/** A copper pendant shade from above: rim, inside of the shade, cord. */
export function Pendant({ x, y, r = 13 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill={C.copper} />
      <circle r={r * 0.55} fill={C.copperDeep} />
      <circle r={r * 0.2} fill={C.steel} />
    </g>
  );
}

/** An open laptop from above: keyboard toward the sitter, screen edge away. */
export function Laptop({ x, y, rot = 0, s = 1 }: { x: number; y: number; rot?: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <rect x={-19} y={-12} width={38} height={24} rx={2.5} fill={C.grout} />
      <rect x={-19} y={-17} width={38} height={5.5} rx={1.5} fill={C.steel} />
      <rect x={-15} y={-8} width={30} height={9} rx={1} fill={C.tile} opacity={0.75} />
      <rect x={-5.5} y={4} width={11} height={5.5} rx={1} fill={C.tile} opacity={0.75} />
    </g>
  );
}

/** One fern frond along -y, with serrated leaflets. */
function frondPath(len: number, n: number, maxW: number) {
  const right: string[] = [];
  const left: string[] = [];
  for (let i = 0; i < n; i++) {
    const s0 = i / n;
    const s1 = (i + 1) / n;
    const w = maxW * Math.sin(Math.PI * (0.12 + 0.82 * ((s0 + s1) / 2)));
    const yTip = -len * (s0 + 0.8 * (s1 - s0));
    const yNotch = -len * s1;
    right.push(`L${f(w)} ${f(yTip)}`, `L${f(w * 0.22)} ${f(yNotch)}`);
    left.unshift(`L${f(-w)} ${f(yTip)}`, `L${f(-w * 0.22)} ${f(-len * s0)}`);
  }
  return `M0 0 ${right.join(" ")} L0 ${-len} ${left.join(" ")} Z`;
}

const FROND_LONG = frondPath(54, 9, 11);
const FROND_SHORT = frondPath(36, 6, 8.5);

/** Shared symbols. Render once, before anything that uses them. */
export function PlanSprite() {
  const long = Array.from({ length: 11 }, (_, i) => (i * 360) / 11);
  const short = Array.from({ length: 7 }, (_, i) => (i * 360) / 7 + 20);
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        {/* One table for four: two rattan chairs per side. viewBox 100 x 132, tabletop y 24-108. */}
        <symbol id="tg" viewBox="0 0 100 132">
          <Chair x={28} y={18} rot={180} />
          <Chair x={72} y={18} rot={180} />
          <Chair x={28} y={114} />
          <Chair x={72} y={114} />
          <rect x={0.8} y={24} width={98.4} height={84} fill={C.timber} />
        </symbol>
        {/* A hanging fern from above. viewBox 120 x 120, centred. */}
        <symbol id="fern" viewBox="0 0 120 120">
          <g transform="translate(60 60)">
            {long.map((a, i) => (
              <path key={`l${a}`} d={FROND_LONG} fill={i % 2 ? C.leaf : C.fern} transform={`rotate(${f(a)})`} />
            ))}
            {short.map((a) => (
              <path key={`s${a}`} d={FROND_SHORT} fill={C.leaf} transform={`rotate(${f(a)})`} />
            ))}
            <circle r={7} fill={C.fern} />
          </g>
        </symbol>
      </defs>
    </svg>
  );
}
