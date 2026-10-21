// Butter croissant, dimsum mentai and truffle fries, drawn in the same flat style as
// the glasses: flat fills, no outlines, one flat shadow ellipse each. 160 × 100 box.

type ArtProps = { label?: string; className?: string };

function a11y(label?: string) {
  return label
    ? { role: "img" as const, "aria-label": label }
    : { "aria-hidden": true as const };
}

export function Croissant({ label, className }: ArtProps) {
  // A side-view crescent: five laminated segments alternating golden and deep bake,
  // the tips curling down to the plate. Each golden segment carries one highlight.
  const A = "#D9A050";
  const B = "#B87830";
  return (
    <svg viewBox="0 0 160 100" className={className} {...a11y(label)} focusable="false">
      <ellipse cx="80" cy="89" rx="72" ry="9" fill="#E6E6E1" />
      {/* white plate */}
      <ellipse cx="80" cy="82" rx="68" ry="12" fill="#FFFFFF" />
      <ellipse cx="80" cy="81" rx="48" ry="7" fill="#F0F0EB" />
      {/* tips */}
      <ellipse cx="24" cy="76" rx="11" ry="5.5" transform="rotate(-38 24 76)" fill={B} />
      <ellipse cx="136" cy="76" rx="11" ry="5.5" transform="rotate(38 136 76)" fill={B} />
      {/* outer segments */}
      <ellipse cx="38" cy="70" rx="13" ry="10" transform="rotate(-30 38 70)" fill={A} />
      <ellipse cx="122" cy="70" rx="13" ry="10" transform="rotate(30 122 70)" fill={A} />
      {/* inner segments */}
      <ellipse cx="57" cy="63" rx="17" ry="14.5" transform="rotate(-18 57 63)" fill={B} />
      <ellipse cx="103" cy="63" rx="17" ry="14.5" transform="rotate(18 103 63)" fill={B} />
      {/* centre roll */}
      <ellipse cx="80" cy="58" rx="22" ry="18.5" fill={A} />
      {/* highlights */}
      <path d="M66 50 Q78 39 92 45" fill="none" stroke="#F0C878" strokeWidth="4" strokeLinecap="round" />
      <path d="M31 66 Q36 61 42 61" fill="none" stroke="#F0C878" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M129 66 Q124 61 118 61" fill="none" stroke="#F0C878" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function OneDimsum({ x, y }: { x: number; y: number }) {
  // x = centre, y = bottom
  return (
    <g>
      <rect x={x - 17} y={y - 27} width="34" height="27" rx="8" fill="#EFD9A6" />
      <rect x={x + 5} y={y - 25} width="12" height="25" rx="6" fill="#E2C68D" />
      {/* mentai cap with two drips */}
      <path
        d={`M${x - 18} ${y - 25} Q${x} ${y - 38} ${x + 18} ${y - 25} Q${x + 17} ${y - 19} ${x + 12} ${y - 20} Q${x + 10} ${y - 13} ${x + 6} ${y - 19} Q${x - 4} ${y - 17} ${x - 9} ${y - 19} Q${x - 12} ${y - 12} ${x - 15} ${y - 19} Q${x - 19} ${y - 20} ${x - 18} ${y - 25} Z`}
        fill="#E8823A"
      />
      {/* torched spots and tobiko */}
      <ellipse cx={x - 5} cy={y - 29} rx="4" ry="1.8" fill="#B5652A" />
      <ellipse cx={x + 7} cy={y - 26} rx="3" ry="1.4" fill="#B5652A" />
      <circle cx={x - 10} cy={y - 26} r="1" fill="#C8411F" />
      <circle cx={x + 1} cy={y - 31.5} r="1" fill="#C8411F" />
      <circle cx={x + 12} cy={y - 28} r="1" fill="#C8411F" />
      <circle cx={x - 1} cy={y - 24} r="1" fill="#C8411F" />
    </g>
  );
}

export function Dimsum({ label, className }: ArtProps) {
  return (
    <svg viewBox="0 0 160 100" className={className} {...a11y(label)} focusable="false">
      <ellipse cx="80" cy="89" rx="72" ry="9" fill="#E6E6E1" />
      {/* dark plate */}
      <ellipse cx="80" cy="80" rx="68" ry="14" fill="#302922" />
      <ellipse cx="80" cy="79" rx="54" ry="9.5" fill="#3B332B" />
      <OneDimsum x={80} y={70} />
      <OneDimsum x={50} y={84} />
      <OneDimsum x={110} y={84} />
    </svg>
  );
}

export function Fries({ label, className }: ArtProps) {
  const fries: [number, number, number, number, string][] = [
    // x, y(top), height, rotate, fill
    [58, 18, 44, -18, "#D9A23E"],
    [66, 8, 52, -10, "#E3B04B"],
    [75, 14, 48, -4, "#D9A23E"],
    [83, 4, 56, 2, "#E3B04B"],
    [92, 12, 50, 8, "#D9A23E"],
    [100, 6, 54, 14, "#E3B04B"],
    [106, 20, 42, 20, "#E3B04B"],
    [71, 24, 40, -6, "#E3B04B"],
    [88, 22, 40, 4, "#E3B04B"],
  ];
  return (
    <svg viewBox="0 0 160 100" className={className} {...a11y(label)} focusable="false">
      <ellipse cx="80" cy="91" rx="50" ry="7" fill="#E6E6E1" />
      {fries.map(([x, y, h, r, fill], i) => (
        <rect
          key={i}
          x={x - 4.5}
          y={y}
          width="9"
          height={h}
          rx="1.8"
          transform={`rotate(${r} ${x} ${y + h})`}
          fill={fill}
        />
      ))}
      {/* truffle flecks */}
      <g fill="#3B3326">
        <circle cx="62" cy="27" r="1.2" />
        <circle cx="67" cy="15" r="1.1" />
        <circle cx="76" cy="23" r="1.2" />
        <circle cx="84" cy="11" r="1.1" />
        <circle cx="93" cy="20" r="1.2" />
        <circle cx="101" cy="13" r="1.1" />
        <circle cx="105" cy="28" r="1.2" />
        <circle cx="72" cy="33" r="1.1" />
        <circle cx="89" cy="31" r="1.1" />
      </g>
      {/* plain white cup, flat shade on one side */}
      <path d="M46 40 L114 40 L104 92 L56 92 Z" fill="#FFFFFF" />
      <path d="M90 40 L114 40 L104 92 L88 92 Z" fill="#ECECE7" />
      <rect x="45" y="37.5" width="70" height="5" rx="1.5" fill="#F4F4F0" />
    </svg>
  );
}
