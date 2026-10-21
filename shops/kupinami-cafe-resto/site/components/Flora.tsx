// A cluster from the shop's mural wall: a pink hibiscus, an orange flower and two leaves.
// Decorative only. At most two on the page, always cropped by an edge, never over text or photos.
const PETAL =
  "M0 0C-34-12-46-52-24-70C-12-80-4-72 0-66C4-72 12-80 24-70C46-52 34-12 0 0Z";
const ROUND_PETAL = "M0 0C-30-10-36-56 0-62C36-56 30-10 0 0Z";
const LEAF = "M0 0C50-46 150-54 224 0C150 54 50 46 0 0Z";

export default function Flora({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 320" aria-hidden="true" focusable="false" className={className}>
      {/* leaves */}
      <g fill="#2E6B4E">
        <g transform="translate(176 176) rotate(-148)">
          <path d={LEAF} />
          <path d="M10 0H212" stroke="var(--color-dinding)" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <g transform="translate(176 176) rotate(-12) scale(0.9)">
          <path d={LEAF} />
          <path d="M10 0H212" stroke="var(--color-dinding)" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </g>
      {/* hibiscus */}
      <g transform="translate(184 150) scale(1.12)">
        {[0, 72, 144, 216, 288].map((r) => (
          <path key={r} d={PETAL} transform={`rotate(${r})`} fill="#D9467A" />
        ))}
        {[0, 72, 144, 216, 288].map((r) => (
          <path
            key={`v${r}`}
            d="M0-6V-46"
            transform={`rotate(${r})`}
            stroke="#12302C"
            strokeOpacity="0.14"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
        <circle r="15" fill="#12302C" fillOpacity="0.16" />
        <path d="M0 0C10-14 22-30 40-44" stroke="#E8962A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <circle cx="42" cy="-46" r="5" fill="#E8962A" />
        <circle cx="34" cy="-50" r="3.5" fill="#E8962A" />
        <circle cx="46" cy="-38" r="3.5" fill="#E8962A" />
      </g>
      {/* orange flower */}
      <g transform="translate(92 232) scale(0.74) rotate(18)">
        {[0, 72, 144, 216, 288].map((r) => (
          <path key={r} d={ROUND_PETAL} transform={`rotate(${r})`} fill="#E8962A" />
        ))}
        {[0, 72, 144, 216, 288].map((r) => (
          <path
            key={`v${r}`}
            d="M0-8V-40"
            transform={`rotate(${r})`}
            stroke="#12302C"
            strokeOpacity="0.12"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        ))}
        <circle r="11" fill="#D9467A" />
      </g>
    </svg>
  );
}
