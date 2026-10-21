import { K, KuePiece } from "./KueIllustration";

// An open white snack box (kotak kue) with four kue, a jar of nastar, and two octagonal
// gift boxes behind, like the stacks on the shop's back shelves. Flat shapes only.

const ORANGE = "#D9531A";
const ORANGE_SIDE = "#B9461A";
const BOX_IN = "#EFE3CF";

function OctBox({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const s = Math.round(w * 0.22); // angled side faces
  const lid = Math.round(h * 0.26);
  return (
    <g>
      <rect x={x + s} y={y} width={w} height={h} fill={ORANGE} />
      <rect x={x + s} y={y} width={w} height={h} fill="url(#kisi)" />
      <path d={`M${x} ${y + 6}L${x + s} ${y}V${y + h}L${x} ${y + h - 6}Z`} fill={ORANGE_SIDE} />
      <path d={`M${x + s + w} ${y}L${x + 2 * s + w} ${y + 6}V${y + h - 6}L${x + s + w} ${y + h}Z`} fill={ORANGE_SIDE} />
      {/* lid band, a touch wider */}
      <path
        d={`M${x - 4} ${y + 4}L${x + s} ${y - 4}H${x + s + w}L${x + 2 * s + w + 4} ${y + 4}V${y + lid}L${x + s + w} ${y + lid + 4}H${x + s}L${x - 4} ${y + lid}Z`}
        fill={ORANGE_SIDE}
      />
      <rect x={x + s} y={y - 4} width={w} height={lid + 8} fill="url(#kisi)" opacity="0.8" />
      <rect x={x + s} y={y + lid + 2} width={w} height="3" fill={K.kotak} opacity="0.55" />
    </g>
  );
}

const NASTAR: [number, number][] = [
  [52, 312], [82, 312], [112, 312], [66, 286], [96, 286], [126, 288], [50, 260], [80, 260], [110, 262],
  [64, 234], [94, 234], [124, 236],
];

export default function KotakKueScene({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div role="img" aria-label={label} className={className}>
      <svg viewBox="0 0 560 420" aria-hidden="true" focusable="false" className="block h-auto w-full">
        <defs>
          <pattern id="kisi" width="18" height="18" patternUnits="userSpaceOnUse">
            <path d="M9 0L18 9L9 18L0 9Z" fill="none" stroke={K.kotak} strokeWidth="1.3" opacity="0.6" />
            <circle cx="9" cy="9" r="1.6" fill={K.kotak} opacity="0.6" />
          </pattern>
        </defs>

        {/* gift boxes behind, stacked */}
        <OctBox x={378} y={196} w={104} h={142} />
        <OctBox x={392} y={86} w={86} h={104} />

        {/* nastar jar */}
        <g>
          <ellipse cx="88" cy="344" rx="70" ry="8" fill={K.tinta} opacity="0.12" />
          <rect x="22" y="190" width="132" height="152" rx="22" fill={K.kotak} opacity="0.5" />
          {NASTAR.map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="14" fill={K.kuning} />
              <path d={`M${cx - 9} ${cy - 3}C${cx - 6} ${cy - 10} ${cx} ${cy - 12} ${cx + 4} ${cy - 11}`} stroke={K.crust} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
              <rect x={cx - 1.5} y={cy - 16} width="3" height="6" rx="1.5" fill={K.tinta} />
            </g>
          ))}
          <rect x="22" y="190" width="132" height="152" rx="22" fill={K.kotak} opacity="0.22" />
          <path d="M38 214V318" stroke={K.kotak} strokeWidth="5" strokeLinecap="round" opacity="0.9" />
          <path d="M140 226V250" stroke={K.kotak} strokeWidth="4" strokeLinecap="round" opacity="0.8" />
          <rect x="30" y="166" width="116" height="30" rx="8" fill={K.kayu} />
          <path d="M44 166V196M60 166V196M76 166V196M92 166V196M108 166V196M124 166V196" stroke={K.tinta} strokeOpacity="0.35" strokeWidth="2" />
        </g>

        {/* open kotak kue */}
        <g>
          <ellipse cx="282" cy="392" rx="182" ry="10" fill={K.tinta} opacity="0.14" />
          <path d="M152 198L176 98H414L432 198Z" fill={K.kotak} />
          <path d="M152 198L176 98H414L432 198Z" fill={K.tinta} opacity="0.05" />
          <path d="M152 198H432L470 252H112Z" fill={BOX_IN} />
          <g transform="translate(140 186) scale(1.18)"><KuePiece variant="pastel" /></g>
          <g transform="translate(218 180) scale(1.18)"><KuePiece variant="lemper" /></g>
          <g transform="translate(292 178) scale(1.18)"><KuePiece variant="kueLumpur" /></g>
          <g transform="translate(362 188) scale(1.18)"><KuePiece variant="risoles" /></g>
          <rect x="112" y="252" width="358" height="136" fill={K.kotak} />
          <rect x="112" y="252" width="358" height="8" fill={BOX_IN} opacity="0.7" />
          <path d="M291 260V388" stroke={K.tinta} strokeOpacity="0.07" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
