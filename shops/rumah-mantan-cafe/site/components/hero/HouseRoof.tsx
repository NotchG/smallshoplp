// The gable of the little mustard house from the entrance mural (owner-1.jpg), redrawn flat:
// rumah gable with a dongker eave, a round window with a cross, a jago chimney with an awan puff,
// and the mural's clouds in the sky either side. Static, decorative.
// The gable's base spans 4%–96% of the width, matching the facade's 4% side margins.

function Cloud({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#fdfdfb">
      <circle cx="-22" cy="4" r="14" />
      <circle cx="0" cy="-6" r="20" />
      <circle cx="24" cy="4" r="13" />
      <rect x="-36" y="4" width="72" height="14" rx="7" />
    </g>
  );
}

export default function HouseRoof({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 600 200" aria-hidden="true" focusable="false">
      {/* sky: two of the mural's clouds (a third was cut in the remove-one-thing pass) */}
      <Cloud x={78} y={92} s={1.05} />
      <Cloud x={540} y={112} s={0.8} />

      {/* chimney + puff, drawn behind the gable */}
      <polygon points="392,52 434,52 434,100 392,74" fill="#bf3328" />
      <rect x="385" y="44" width="56" height="12" fill="#1e3050" />
      <g fill="#fdfdfb">
        <circle cx="418" cy="30" r="10" />
        <circle cx="436" cy="20" r="8" />
        <circle cx="451" cy="12" r="6" />
      </g>

      {/* gable */}
      <polygon points="24,200 300,30 576,200" fill="#e9b44c" />
      {/* eave line, overhanging the facade */}
      <polyline
        points="-8,211 300,21 608,211"
        fill="none"
        stroke="#1e3050"
        strokeWidth="8"
        strokeLinejoin="miter"
      />

      {/* round window */}
      <circle cx="300" cy="132" r="30" fill="#1e3050" />
      <rect x="297" y="104" width="6" height="56" fill="#fdfdfb" />
      <rect x="272" y="129" width="56" height="6" fill="#fdfdfb" />
    </svg>
  );
}
