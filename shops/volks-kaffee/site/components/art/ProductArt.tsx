import { C } from "@/lib/palette";
import { FloralPlate, artA11y, outline, roundedPoly, type ArtProps } from "./shapes";

// Four flat product drawings (design brief §6). All share a 240-unit height and a baseline at
// y = 237, so they stand on the same counter or shelf line whatever their width.
// Outlines use currentColor: kayu on light grounds, piring on dark ones.

export function IceChocoMint(props: ArtProps) {
  const glass = "M8 34L16 227Q16.4 236 25 236L95 236Q103.6 236 104 227L112 34Z";
  return (
    <svg viewBox="0 0 120 240" className={props.className} {...artA11y(props)}>
      <path d={glass} fill={C.piring} fillOpacity="0.32" />
      {/* straw: outline tube, then the yellow inside */}
      <path d="M88 6L72 150" stroke="currentColor" strokeWidth="12.5" strokeLinecap="round" />
      <path d="M88 6L72 150" stroke={C.sign} strokeWidth="7.5" strokeLinecap="round" />
      {/* mint layer over the chocolate, with a soft wave where they meet */}
      <path
        d="M16.3 92L103.7 92L100.4 178C86 172 74 184 60 178C46 172 34 184 19.6 178Z"
        fill={C.mintDrink}
      />
      <path
        d="M19.6 178C34 184 46 172 60 178C74 184 86 172 100.4 178L98.2 223Q98 230 91 230L29 230Q22 230 21.8 223Z"
        fill={C.kayu2}
      />
      {/* chocolate drizzle down the inside wall */}
      <path d="M23 94C29 108 20 120 26 134C30 144 24 154 27 168" fill="none" stroke={C.kayu2} strokeWidth="5" strokeLinecap="round" />
      <path d="M97 94C91 104 98 116 93 128" fill="none" stroke={C.kayu2} strokeWidth="4.5" strokeLinecap="round" />
      {/* ice */}
      <g fill={C.piring} fillOpacity="0.72" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <rect x="22" y="64" width="30" height="30" rx="6" transform="rotate(-12 37 79)" />
        <rect x="58" y="56" width="31" height="31" rx="6" transform="rotate(11 73 71)" />
        <rect x="40" y="86" width="28" height="26" rx="6" transform="rotate(5 54 99)" />
      </g>
      {/* glint and glass outline */}
      <path d="M14.2 58L17.8 150" stroke={C.piring} strokeWidth="4" strokeLinecap="round" strokeOpacity="0.9" />
      <path d={glass} fill="none" {...outline} />
      <ellipse cx="60" cy="34" rx="52" ry="6" fill="none" {...outline} />
    </svg>
  );
}

export function KopiCup(props: ArtProps) {
  return (
    <svg viewBox="0 0 200 240" className={props.className} {...artA11y(props)}>
      {/* saucer */}
      <ellipse cx="100" cy="226" rx="90" ry="11" fill={C.piring} {...outline} />
      <ellipse cx="100" cy="222" rx="90" ry="11" fill={C.piring} {...outline} />
      <ellipse cx="100" cy="221" rx="52" ry="5.5" fill="none" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.5" />
      {/* handle: outline tube, then the cup's white */}
      <path d="M154 162C182 158 186 202 144 203" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
      <path d="M154 162C182 158 186 202 144 203" fill="none" stroke={C.piring} strokeWidth="8.5" strokeLinecap="round" />
      {/* cup */}
      <path d="M42 150L158 150C158 192 142 218 114 220L86 220C58 218 42 192 42 150Z" fill={C.piring} {...outline} />
      <ellipse cx="100" cy="150" rx="58" ry="10" fill={C.piring} {...outline} />
      <ellipse cx="100" cy="151.5" rx="50" ry="7" fill={C.kayu2} />
      <ellipse cx="100" cy="151.5" rx="38" ry="4.6" fill="none" stroke={C.toast} strokeWidth="3" />
      {/* one static steam curl */}
      <path d="M98 132C86 118 110 106 98 90C88 76 106 66 100 52" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function Marshmallow({ x, yb, top }: { x: number; yb: number; top: string }) {
  const s = 30;
  const dx = 9;
  const dy = -8;
  return (
    <g {...outline}>
      <path d={`M${x + s} ${yb - s}L${x + s + dx} ${yb - s + dy}L${x + s + dx} ${yb + dy - 4}Q${x + s + dx} ${yb + dy} ${x + s + dx - 3} ${yb + dy + 3}L${x + s} ${yb}Z`} fill={C.piring} />
      <path d={`M${x} ${yb - s}L${x + dx} ${yb - s + dy}L${x + s + dx} ${yb - s + dy}L${x + s} ${yb - s}Z`} fill={top} />
      <rect x={x} y={yb - s} width={s} height={s} rx="5" fill={C.piring} />
    </g>
  );
}

export function MarshmallowBrownie(props: ArtProps) {
  // crumb edge: small bumps hanging from the brownie's top front edge
  let crumb = "M44 142L152 142L152 150";
  for (let x = 152; x > 44; x -= 12) crumb += `Q${x - 6} 157 ${x - 12} 150`;
  crumb += "Z";
  return (
    <svg viewBox="0 0 220 240" className={props.className} {...artA11y(props)}>
      <FloralPlate cx={110} cy={214} rx={104} ry={18} flowers={11} />
      {/* brownie: top, side, front */}
      <path d="M44 142L70 120L178 120L152 142Z" fill={C.kayu2} {...outline} />
      <path d="M152 142L178 120L178 190Q178 194 175 196L152 214Z" fill={C.kayu} {...outline} />
      <path d="M44 142L152 142L152 214L50 214Q44 214 44 208Z" fill={C.kayu} {...outline} />
      <path d={crumb} fill={C.kayu2} />
      <g fill={C.kayu2}>
        <circle cx="62" cy="172" r="3" />
        <circle cx="88" cy="190" r="2.6" />
        <circle cx="118" cy="168" r="3" />
        <circle cx="136" cy="196" r="2.6" />
        <circle cx="70" cy="202" r="2.2" />
        <circle cx="106" cy="204" r="2.2" />
        <circle cx="164" cy="160" r="2.4" />
      </g>
      <path d="M44 142L152 142L152 214L50 214Q44 214 44 208Z" fill="none" {...outline} />
      {/* three marshmallow cubes with toasted tops */}
      <Marshmallow x={96} yb={128} top={C.sign} />
      <Marshmallow x={60} yb={140} top={C.bata} />
      <Marshmallow x={116} yb={142} top={C.sign} />
    </svg>
  );
}

export function SmokedBeefSandwich({ uid, ...props }: ArtProps & { uid: string }) {
  const clip = `sbs-cut-${uid}`;
  const backHalf = roundedPoly(
    [
      [100, 200],
      [216, 196],
      [182, 52],
    ],
    12,
  );
  const topFace = roundedPoly(
    [
      [22, 172],
      [168, 172],
      [70, 118],
    ],
    10,
  );
  // Lettuce frill: a wavy strip just outside the back half's left (cut) edge.
  const lettuce = (() => {
    const p1 = [100, 200];
    const p3 = [182, 52];
    const dx = p3[0] - p1[0];
    const dy = p3[1] - p1[1];
    const len = Math.hypot(dx, dy);
    const nx = dy / len; // outward normal (left / up)
    const ny = -dx / len;
    const at = (t: number, off: number) =>
      `${(p1[0] + dx * t + nx * off).toFixed(1)} ${(p1[1] + dy * t + ny * off).toFixed(1)}`;
    let d = `M${at(0.3, -2)}`;
    const n = 9;
    for (let i = 0; i < n; i++) {
      const t0 = 0.3 + (0.62 * i) / n;
      const t1 = 0.3 + (0.62 * (i + 1)) / n;
      d += `Q${at((t0 + t1) / 2, 9)} ${at(t1, 3)}`;
    }
    d += `L${at(0.92, -4)}L${at(0.3, -4)}Z`;
    return d;
  })();
  const cutBand = "M28 170L162 170Q168 170 168 176L168 206Q168 212 162 212L28 212Q22 212 22 206L22 176Q22 170 28 170Z";
  return (
    <svg viewBox="0 0 240 240" className={props.className} {...artA11y(props)}>
      <defs>
        <clipPath id={clip}>
          <path d={cutBand} />
        </clipPath>
      </defs>
      <FloralPlate cx={120} cy={212} rx={114} ry={20} flowers={12} />
      {/* back half, leaning: lettuce frill peeking along its cut edge, then the toasted face */}
      <path d={lettuce} fill={C.pagar} {...outline} />
      <path d={backHalf} fill={C.toast} {...outline} />
      <path
        d={roundedPoly(
          [
            [116, 190],
            [204, 187],
            [180, 78],
          ],
          9,
        )}
        fill="none"
        stroke={C.kayu}
        strokeOpacity="0.22"
        strokeWidth="2"
      />
      {/* front half: toasted top face */}
      <path d={topFace} fill={C.toast} {...outline} />
      <path
        d={roundedPoly(
          [
            [42, 166],
            [150, 166],
            [72, 128],
          ],
          8,
        )}
        fill="none"
        stroke={C.kayu}
        strokeOpacity="0.22"
        strokeWidth="2"
      />
      {/* front half: the cut face with its layers */}
      <g clipPath={`url(#${clip})`}>
        <rect x="20" y="168" width="150" height="46" fill={C.crumb} />
        <rect x="20" y="180" width="150" height="5" fill={C.sign} />
        <path d="M20 185H170V193C160 197 150 190 140 194C130 198 120 191 110 195C100 199 90 192 80 196C70 199 60 192 50 196C40 199 30 193 20 196Z" fill={C.awning} />
        <path d="M20 195C30 193 40 199 50 196C60 192 70 199 80 196C90 192 100 199 110 195C120 191 130 198 140 194C150 190 160 197 170 193V201H20Z" fill={C.bata} />
        <path d="M20 200H170V203C164 207 158 201 152 205C146 209 140 202 134 206C128 210 122 203 116 207C110 210 104 203 98 207C92 210 86 203 80 207C74 210 68 203 62 207C56 210 50 203 44 207C38 210 32 203 26 207L20 207Z" fill={C.pagar} />
        <path d="M20 206C30 203 34 209 44 206" fill="none" stroke={C.pagarDark} strokeWidth="2" />
      </g>
      <path d={cutBand} fill="none" {...outline} />
      {/* tomato seeds and a lettuce frill poking out at the ends */}
      <g fill={C.crumb} fillOpacity="0.8">
        <circle cx="46" cy="197.5" r="1.4" />
        <circle cx="92" cy="197" r="1.4" />
        <circle cx="134" cy="197.5" r="1.4" />
      </g>
      <path d="M22 201C14 200 12 206 18 208" fill={C.pagar} {...outline} />
      <path d="M168 199C176 198 178 204 172 207" fill={C.pagar} {...outline} />
      <path d="M168 188C176 188 177 194 170 196" fill={C.awning} {...outline} />
    </svg>
  );
}
