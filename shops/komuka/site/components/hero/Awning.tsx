// KOMUKA's quarter-dome canvas awning seen from the front: a kanopi semicircle with the
// daun frame and three ribs (no hub disc, never a rising sun). Decorative.
export default function Awning({ className = "" }: { className?: string }) {
  const r = 280;
  const inset = 20;
  const ri = r - inset; // frame radius
  const hub = { x: 280, y: 276 };
  const rib = (deg: number) => {
    const a = (deg * Math.PI) / 180;
    return { x: hub.x - Math.cos(a) * (ri - 3), y: hub.y - Math.sin(a) * (ri - 3) };
  };
  const ribs = [45, 90, 135].map(rib);

  return (
    <svg
      viewBox="0 0 560 280"
      className={`block w-full h-auto ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 280 A280 280 0 0 1 560 280 Z" fill="var(--color-kanopi)" />
      {/* frame: arch + base bar */}
      <path
        d={`M${280 - ri} 280 A${ri} ${ri} 0 0 1 ${280 + ri} 280`}
        fill="none"
        stroke="var(--color-daun)"
        strokeWidth="9"
      />
      <path d={`M${280 - ri} 276 H${280 + ri}`} stroke="var(--color-daun)" strokeWidth="8" />
      {/* three ribs */}
      {ribs.map((p, i) => (
        <path
          key={i}
          d={`M${hub.x} ${hub.y} L${p.x.toFixed(1)} ${p.y.toFixed(1)}`}
          stroke="var(--color-daun)"
          strokeWidth="7"
        />
      ))}
    </svg>
  );
}
