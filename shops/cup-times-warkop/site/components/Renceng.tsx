// The "&" between Cup Times and Warkop: a strip of plain instant-drink sachets, like the kiosk's back wall.
// Twelve plain packets (no logos, no words) repeat as a pattern, so the strip fills any width
// without stretching and can never cause horizontal scroll.
const COLOURS = [
  "#E5483B", "#F2C230", "#3B6FD8", "#FFFFFF", "#8E4FC4", "#F07F2E",
  "#F2C230", "#E5483B", "#FFFFFF", "#3B6FD8", "#F07F2E", "#8E4FC4",
];
const W = 46; // one sachet
const H = 56;

function crimp(y: number) {
  // vertical crimp ticks across a sealed edge
  const ticks = [];
  for (let x = 4; x < W - 2; x += 4) ticks.push(`M${x} ${y}v6`);
  return ticks.join("");
}

export default function Renceng({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <svg width="100%" height={H} focusable="false" className="block">
        <defs>
          <pattern id="renceng" width={W * COLOURS.length} height={H} patternUnits="userSpaceOnUse">
            {COLOURS.map((c, i) => (
              <g key={i} transform={`translate(${i * W} 0)`}>
                <rect x="0.75" y="0.75" width={W - 1.5} height={H - 1.5} rx="2" fill={c} stroke="#15241A" strokeOpacity="0.16" strokeWidth="1.5" />
                <rect x="1.5" y="1.5" width={W - 3} height="7" fill="#15241A" fillOpacity="0.1" />
                <rect x="1.5" y={H - 8.5} width={W - 3} height="7" fill="#15241A" fillOpacity="0.1" />
                <path d={crimp(2) + crimp(H - 8)} stroke="#15241A" strokeOpacity="0.18" strokeWidth="1" />
                <rect x="9" y="13" width="6" height={H - 26} rx="3" fill="#FFFFFF" fillOpacity={c === "#FFFFFF" ? 0 : 0.22} />
              </g>
            ))}
          </pattern>
        </defs>
        <rect width="100%" height={H} fill="url(#renceng)" />
      </svg>
    </div>
  );
}
