// The ramen bowl's rim pattern (tomato zigzag over rim-blue triangles) as a band.
// 20px tall on phone, 28px from 768 (height from --band-h); the tile scales with the height.
export default function RimBand({ className = "", id }: { className?: string; id: string }) {
  return (
    <svg
      className={`rim-band ${className}`}
      viewBox="0 0 3840 28"
      preserveAspectRatio="xMinYMin slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={id} width="18" height="28" patternUnits="userSpaceOnUse">
          <rect width="18" height="28" fill="#FFFFFF" />
          <rect width="18" height="3.5" fill="#C7372A" />
          <path d="M0 7.5 L9 15 L18 7.5" fill="none" stroke="#C7372A" strokeWidth="2" strokeLinejoin="miter" />
          <path d="M3 25.5 L9 18.5 L15 25.5 Z" fill="#7DBEDD" />
          <rect y="26.25" width="18" height="1.75" fill="#7DBEDD" />
        </pattern>
      </defs>
      <rect width="3840" height="28" fill={`url(#${id})`} />
    </svg>
  );
}
