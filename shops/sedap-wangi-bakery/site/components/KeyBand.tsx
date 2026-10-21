// The white square-spiral band from the Sedap Wangi cake box, as a repeating SVG pattern.
export default function KeyBand({ id, color = "#ffffff" }: { id: string; color?: string }) {
  return (
    <svg className="keyband" aria-hidden="true" focusable="false" preserveAspectRatio="none">
      <defs>
        <pattern id={id} width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M0 21H24 M3.5 21V3.5H20.5V17H8V8H16V13H12"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="square"
          />
        </pattern>
      </defs>
      <rect width="100%" height="24" fill={`url(#${id})`} />
    </svg>
  );
}
