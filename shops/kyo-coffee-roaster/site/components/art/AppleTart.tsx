import { c } from "@/components/art/palette";
import Plate from "@/components/art/Plate";

// Apple tart (photo 3): a wedge of fanned, caramelised slices with charred edges,
// on the same ridged stoneware plate.
const TIP: [number, number] = [52, 120];
const WEDGE = "M52 120L138 52Q174 66 176 104Z";
const SLICES = [-36, -30, -24, -18, -12];

export default function AppleTart({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 28 220 142" role="img" aria-label={label} className={className}>
      <defs>
        <clipPath id="kyo-apple-wedge">
          <path d={WEDGE} />
        </clipPath>
      </defs>
      <Plate cx={110} cy={96} rx={104} ry={60} seed={23} />

      {/* pastry base and its side */}
      <path d={WEDGE} fill={c.crust} transform="translate(0 7)" />
      <path d={WEDGE} fill={c.ink} opacity="0.2" transform="translate(0 7)" />
      <path d={WEDGE} fill={c.crust} />

      {/* fanned slices, back to front, each with a charred edge */}
      <g clipPath="url(#kyo-apple-wedge)">
        {SLICES.map((deg) => {
          const a = (deg * Math.PI) / 180;
          const x = +(TIP[0] + 70 * Math.cos(a)).toFixed(1);
          const y = +(TIP[1] + 70 * Math.sin(a)).toFixed(1);
          return (
            <g key={deg} transform={`translate(${x} ${y}) rotate(${deg})`}>
              <ellipse cx="0" cy="0" rx="66" ry="11" fill={c.ply} />
              <ellipse cx="-6" cy="3" rx="46" ry="4.5" fill={c.oak} opacity="0.6" />
              <path d="M-40 -8.5Q0 -13 52 -6" fill="none" stroke={c.brew} strokeWidth="2.4" strokeLinecap="round" />
            </g>
          );
        })}
      </g>
      <path d="M52 120L176 104" stroke={c.crust} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
