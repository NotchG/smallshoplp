import Plate from "./Plate";

function HalfLemon({ x, y, r = 13 }: { x: number; y: number; r?: number }) {
  const f = r * 0.8;
  const seg = [30, 60, 90, 120, 150].map((a) => {
    const rad = (a * Math.PI) / 180;
    return `M0 0L${(-Math.cos(rad) * f * 0.95).toFixed(2)} ${(-Math.sin(rad) * f * 0.95).toFixed(2)}`;
  });
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={`M${-r} 0A${r} ${r} 0 0 1 ${r} 0Z`} fill="#E3A92A" />
      <path d={`M${-f} 0A${f} ${f} 0 0 1 ${f} 0Z`} fill="#FBE38A" />
      <path d={seg.join("")} stroke="#FFF4D6" strokeWidth="1.6" />
    </g>
  );
}

export default function LemonCake() {
  return (
    <svg viewBox="24 22 192 128" aria-hidden="true" focusable="false">
      <Plate />
      <rect x="62" y="70" width="116" height="62" fill="#F6E3A1" />
      <rect x="62" y="126" width="116" height="6" fill="#E9C77A" />
      <rect x="62" y="98" width="116" height="8" fill="#FFF4D6" />
      <rect x="60" y="62" width="120" height="13" rx="3" fill="#F2C94C" />
      <rect x="70" y="70" width="8" height="15" rx="4" fill="#F2C94C" />
      <rect x="101" y="70" width="8" height="10" rx="4" fill="#F2C94C" />
      <rect x="146" y="70" width="8" height="18" rx="4" fill="#F2C94C" />
      <HalfLemon x={90} y={62} />
      <HalfLemon x={146} y={62} />
      <circle cx="118" cy="58" r="8" fill="#FFF4D6" />
      <ellipse cx="124" cy="50" rx="7" ry="3.4" fill="#8CC37A" transform="rotate(-30 124 50)" />
    </svg>
  );
}

export { HalfLemon };
