// Manual-brew set, side view: glass carafe and small glass on a honey-oak tray with the
// "IKA KOPI" burn mark set in Gloock (type, not the logo). Flat fills, no outlines.
const glass = "#DCE6DF";
const glassEdge = "#C3D1C7";
const coffee = "#3A2414";

export default function BrewSet({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="44 20 396 272"
      role="img"
      aria-label="Ilustrasi manual brew: karafe kaca dan gelas kecil berisi kopi di atas nampan kayu bertuliskan IKA KOPI"
      className={className}
    >
      {/* carafe */}
      <path
        d="M132 36H208C208 46 203 54 202 66C200 96 214 126 216 156V250Q216 262 204 262H136Q124 262 124 250V156C126 126 140 96 138 66C137 54 132 46 132 36Z"
        fill={glass}
        fillOpacity="0.7"
      />
      <rect x="130" y="33" width="80" height="6" rx="3" fill={glassEdge} />
      <path d="M129.5 194H210.5V248Q210.5 256.5 202 256.5H138Q129.5 256.5 129.5 248Z" fill={coffee} />
      <rect x="133" y="162" width="5" height="76" rx="2.5" fill="#FFFFFF" fillOpacity="0.6" />
      <rect x="142" y="74" width="4" height="34" rx="2" fill="#FFFFFF" fillOpacity="0.6" />

      {/* small glass */}
      <path d="M266 168H334L330.5 252Q330 262 320 262H280Q270 262 269.5 252Z" fill={glass} fillOpacity="0.7" />
      <path d="M270.3 246H329.7L329.4 252Q329 262 320 262H280Q271 262 270.6 252Z" fill={glassEdge} />
      <path d="M271.4 220H328.6L327.9 244H272.1Z" fill={coffee} />
      <rect x="275" y="180" width="4" height="56" rx="2" fill="#FFFFFF" fillOpacity="0.6" />

      {/* tray: front face, lip, shade, burn mark */}
      <rect x="56" y="260" width="372" height="28" rx="6" fill="#B9824F" />
      <rect x="56" y="260" width="372" height="5" rx="2.5" fill="#C9955F" />
      <path d="M56 280H428V282Q428 288 422 288H62Q56 288 56 282Z" fill="#9E6B3E" />
      <text
        x="408"
        y="278.5"
        textAnchor="end"
        fill="#6A4124"
        style={{ fontFamily: "var(--font-display)", fontSize: "13px", letterSpacing: "1.5px" }}
      >
        IKA KOPI
      </text>
    </svg>
  );
}
