// Roti bakar: three grilled, filled toast pieces stacked on a board, drawn in the cups' one-green-ink outline.
// Flat geometry only. owner-2 (watermarked) is not used.
const GREEN = "#1E5631";
const CRUST = "#C98A45";
const CRUMB = "#F2D6A0";
const GRILL = "#8A5326";
const CHOC = "#5B2E1F";
const CHEESE = "#F2C230";

function Piece({ x, y }: { x: number; y: number }) {
  const w = 208;
  const h = 46;
  const stripes = [];
  for (let i = 0; i < 9; i++) {
    const sx = x + 18 + i * 22;
    stripes.push(<path key={i} d={`M${sx} ${y + 2.5}l10 0l-6 6.5l-10 0Z`} fill={GRILL} />);
  }
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="9" fill={CRUST} />
      {stripes}
      <rect x={x + 6} y={y + 11} width={w - 12} height={h - 17} rx="4" fill={CRUMB} />
      <rect x={x + 6} y={y + 22} width={w - 12} height="3.5" fill={CHEESE} />
      <rect x={x + 6} y={y + 25.5} width={w - 12} height="6" fill={CHOC} />
      <rect x={x} y={y} width={w} height={h} rx="9" fill="none" stroke={GREEN} strokeWidth="2.5" />
    </g>
  );
}

export default function RotiBakar({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 210" aria-hidden="true" focusable="false">
      {/* board */}
      <rect x="10" y="176" width="280" height="20" rx="10" fill={GRILL} stroke={GREEN} strokeWidth="2.5" />
      <rect x="252" y="181" width="26" height="10" rx="5" fill={CRUMB} fillOpacity="0.5" />
      <Piece x={38} y={130} />
      <Piece x={56} y={84} />
      <Piece x={44} y={38} />
      {/* grated cheese on top */}
      <g fill={CHEESE} stroke={GREEN} strokeWidth="1.2">
        <rect x="70" y="28" width="16" height="5" rx="2.5" transform="rotate(-14 78 30)" />
        <rect x="100" y="25" width="18" height="5" rx="2.5" transform="rotate(10 109 27)" />
        <rect x="134" y="29" width="15" height="5" rx="2.5" transform="rotate(-6 141 31)" />
        <rect x="164" y="24" width="17" height="5" rx="2.5" transform="rotate(16 172 26)" />
        <rect x="196" y="29" width="16" height="5" rx="2.5" transform="rotate(-18 204 31)" />
        <rect x="118" y="18" width="14" height="5" rx="2.5" transform="rotate(30 125 20)" />
      </g>
    </svg>
  );
}
