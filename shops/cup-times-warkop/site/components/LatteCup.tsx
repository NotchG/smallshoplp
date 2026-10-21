// A Cup Times iced latte: clear tapered cup printed in one green ink, the flavour filling the lower 70%,
// three ice cubes, a few printed beans. The white price label is live HTML text stuck on at a slight tilt.
// The logo is not redrawn.
const GREEN = "#1E5631";
const ICE = "#F7F3EA";

// Cup walls: rim 14..146 at y=20, base 30..130 at y=214. x at height y along the taper:
const left = (y: number) => 14 + (16 * (y - 20)) / 194;
const right = (y: number) => 146 - (16 * (y - 20)) / 194;
const LIQ = 78; // liquid line, ~70% fill

function Bean({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`} fill="none" stroke={GREEN} strokeWidth="1.6">
      <ellipse cx="0" cy="0" rx="4.6" ry="6.6" />
      <path d="M0 -5.4c-2 2.6 2 4.4 0 10.8" strokeLinecap="round" />
    </g>
  );
}

export default function LatteCup({
  name,
  price,
  brand,
  tint,
  tilt,
}: {
  name: string;
  price: string;
  brand: string;
  tint: string;
  tilt: number;
}) {
  const liquid = `M${left(LIQ)} ${LIQ} L${right(LIQ)} ${LIQ} L${right(208)} 208 Q${right(214) - 1} 214 ${right(214) - 6} 214 L${left(214) + 6} 214 Q${left(214) + 1} 214 ${left(208)} 208 Z`;
  const body = `M14 20 L146 20 L${right(208)} 208 Q${right(214) - 1} 214 ${right(214) - 6} 214 L${left(214) + 6} 214 Q${left(214) + 1} 214 ${left(208)} 208 Z`;
  return (
    <div className="latte">
      <svg className="latte-svg" viewBox="0 0 160 222" aria-hidden="true" focusable="false">
        <path d={body} fill="#FFFFFF" fillOpacity="0.55" />
        <path d={liquid} fill={tint} />
        {/* lighter milk band at the surface */}
        <path d={`M${left(LIQ)} ${LIQ} L${right(LIQ)} ${LIQ} L${right(LIQ + 9)} ${LIQ + 9} L${left(LIQ + 9)} ${LIQ + 9} Z`} fill={ICE} fillOpacity="0.55" />
        {/* ice */}
        <g fill={ICE} fillOpacity="0.9" stroke={GREEN} strokeWidth="1.4">
          <rect x="34" y="66" width="22" height="20" rx="4" transform="rotate(-12 45 76)" />
          <rect x="70" y="70" width="20" height="19" rx="4" transform="rotate(8 80 79)" />
          <rect x="104" y="64" width="21" height="20" rx="4" transform="rotate(-4 114 74)" />
        </g>
        {/* printed beans */}
        <Bean x={30} y={40} r={-20} />
        <Bean x={128} y={44} r={25} />
        <Bean x={40} y={186} r={15} />
        <Bean x={118} y={180} r={-30} />
        <Bean x={80} y={198} r={70} />
        {/* cup outline and rim */}
        <path d={body} fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        <rect x="9" y="13" width="142" height="9" rx="4.5" fill="#FFFFFF" fillOpacity="0.8" stroke={GREEN} strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <p className="latte-label" style={{ rotate: `${tilt}deg` }}>
        <span className="t-small font-bold tracking-[0.08em]">{brand}</span>
        <span className="t-body font-bold leading-snug" data-check>
          {name}
        </span>
        <span className="t-body tnum font-medium leading-snug">{price}</span>
      </p>
    </div>
  );
}
