// A single string-light bulb, drawn like the garland's: dim glass + lit layer.
// Used as the hero status light and as the bullets in "Malam di Malabar".
export default function Bulb({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="9.5" y="1" width="5" height="4.5" rx="1" fill="currentColor" opacity="0.6" />
      <ellipse cx="12" cy="13.5" rx="5" ry="6.5" fill="#3a2b20" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <g className="bulb-on">
        <circle cx="12" cy="13.5" r="11" fill="#f4b740" opacity="0.14" />
        <circle cx="12" cy="13.5" r="8.5" fill="#f4b740" opacity="0.2" />
        <ellipse className="bulb-core" cx="12" cy="13.5" rx="5" ry="6.5" fill="#f4b740" />
        <ellipse cx="10.4" cy="11.4" rx="1.4" ry="2.2" fill="#f7f6f2" opacity="0.75" />
      </g>
    </svg>
  );
}
