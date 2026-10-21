import type { GlassSpec } from "@/content";
import { ill } from "@/lib/palette";

// Parametric side-view tumbler: layers (bottom → top), optional cream cap, steel straw,
// three outlined ice cubes and a garnish. Flat fills, navy outline, no gradients or shadows.
// Drawn from the brief's descriptions (colours are [MOCKUP]); wrapper carries data-mockup.

const TOP = 52; // liquid surface
const BOTTOM = 180.5; // inside bottom
const N = ill.navy;

const glassOuter =
  "M14 40 C15.3 80, 17.8 132, 20.4 177.5 Q20.8 183 25.5 183 L74.5 183 Q79.2 183 79.6 177.5 C82.3 132, 84.6 80, 86 40";
const glassInner =
  "M16.8 43 C18 82, 20.3 132, 22.9 177.2 Q23.3 180.5 26 180.5 L74 180.5 Q76.7 180.5 77.1 177.2 C79.7 132, 82 82, 83.2 43 Z";

function wave(y: number) {
  return `M-2 ${y} C12 ${y + 5}, 26 ${y - 4}, 40 ${y + 1} S 66 ${y + 5}, 80 ${y - 1} S 98 ${y - 2}, 102 ${y + 1}`;
}

export default function DrinkGlass({
  id,
  spec,
  className = "",
}: {
  id: string;
  spec: GlassSpec;
  className?: string;
}) {
  const clip = `glass-${id}`;
  const liquid = BOTTOM - TOP;
  const capH = spec.cap ? spec.cap.height * liquid : 0;
  const bodyTop = TOP + capH;
  const bodyH = BOTTOM - bodyTop;

  let y = BOTTOM;
  const layers = spec.layers.map((l) => {
    const h = l.height * bodyH;
    y -= h;
    return { y, h, color: l.color };
  });

  return (
    <div className={`ill ${className}`} data-mockup="">
      <svg viewBox="0 0 100 190" role="img" aria-label={spec.label} className="block h-auto w-full overflow-visible">
        <defs>
          <clipPath id={clip}>
            <path d={glassInner} />
          </clipPath>
        </defs>

        {/* liquid */}
        <g clipPath={`url(#${clip})`}>
          {layers.map((l, i) => (
            <rect key={i} x="0" y={l.y} width="100" height={l.h + 0.6} fill={l.color} />
          ))}
          {layers.slice(1).map((l, i) => (
            <path key={i} d={wave(l.y + l.h)} fill="none" stroke={N} strokeWidth="2" />
          ))}
          {spec.cap && (
            <>
              <path d={`${wave(bodyTop)} L102 ${TOP - 4} L-2 ${TOP - 4} Z`} fill={spec.cap.color} />
              <path d={wave(bodyTop)} fill="none" stroke={N} strokeWidth="2" />
            </>
          )}
          <path d={`M0 ${TOP} H100`} stroke={N} strokeWidth="2" />
        </g>

        {/* straw */}
        <path d="M57 171.8 L68 5.8 L74 6.2 L63 172.2 Z" fill={ill.steel} stroke={N} strokeWidth="2" strokeLinejoin="round" />

        {/* ice */}
        <g clipPath={`url(#${clip})`} fill={ill.white} fillOpacity="0.45" stroke={N} strokeWidth="2">
          <rect x="22" y="44" width="18" height="18" rx="3.5" transform="rotate(-14 31 53)" />
          <rect x="44" y="49" width="17" height="17" rx="3.5" transform="rotate(12 52.5 57.5)" />
          <rect x="33" y="70" width="16" height="16" rx="3.5" transform="rotate(28 41 78)" />
        </g>

        <Garnish kind={spec.garnish} />

        {/* glass */}
        <path d={glassOuter} fill="none" stroke={N} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="50" cy="40" rx="36" ry="3.4" fill="none" stroke={N} strokeWidth="2.5" />
      </svg>
    </div>
  );
}

function Garnish({ kind }: { kind: GlassSpec["garnish"] }) {
  switch (kind) {
    case "flower": {
      const cx = 25, cy = 35;
      return (
        <g stroke={N} strokeWidth="2">
          <path d="M25 41 C26 46, 24 49, 27 52" fill="none" />
          {[0, 72, 144, 216, 288].map((a) => {
            const r = (a * Math.PI) / 180;
            return <circle key={a} cx={cx + 6.4 * Math.cos(r)} cy={cy + 6.4 * Math.sin(r)} r="5" fill={ill.cream} />;
          })}
          <circle cx={cx} cy={cy} r="3.4" fill={ill.mango} />
        </g>
      );
    }
    case "lemon":
      return (
        <g transform="rotate(-18 19 41)">
          <circle cx="19" cy="41" r="13" fill={ill.lemon} stroke={N} strokeWidth="2" />
          <circle cx="19" cy="41" r="9.4" fill={ill.lemonPale} />
          {[0, 60, 120].map((a) => (
            <line key={a} x1="19" y1="31.6" x2="19" y2="50.4" stroke={ill.lemon} strokeWidth="1.6" transform={`rotate(${a} 19 41)`} />
          ))}
          <path d="M8 41 H30" stroke="none" />
        </g>
      );
    case "lemongrass":
      return (
        <g stroke={N} strokeWidth="2" strokeLinejoin="round">
          <path d="M33 150 L22 8 L27.5 7.6 L39 150 Z" fill={ill.leaf} />
          <path d="M24 26 C16 18, 10 16, 3 18 C10 20, 16 24, 23.6 32 Z" fill={ill.leaf} />
          <path d="M26 16 C30 6, 34 2, 40 0 C36 5, 31 11, 27.4 22 Z" fill={ill.mint} />
        </g>
      );
    case "mint":
      return (
        <g stroke={N} strokeWidth="2" strokeLinejoin="round">
          <path d="M40 50 C32 40, 34 30, 44 26 C48 34, 48 42, 40 50 Z" fill={ill.mint} />
          <path d="M40 50 C42 40, 43 34, 44 27" fill="none" strokeWidth="1.5" />
          <path d="M41 50 C46 42, 54 38, 60 41 C56 48, 50 51, 41 50 Z" fill={ill.mint} />
        </g>
      );
    case "swirl":
      return (
        <g stroke={N} strokeLinejoin="round" strokeLinecap="round">
          <path
            d="M15.5 47 C12 36, 20 27, 31 27 C33 16, 47 11, 57 17 C63 12, 76 16, 76 26 C86 28, 90 38, 84.5 47 Z"
            fill={ill.cream}
            strokeWidth="2.5"
          />
          <path d="M26 39 C34 33, 50 33, 60 39 M36 28 C42 24, 52 24, 58 29" fill="none" strokeWidth="2" />
        </g>
      );
    default:
      return null;
  }
}
