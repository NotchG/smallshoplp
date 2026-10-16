// The grey two-storey front with orange trim, the forecourt and the oval sign on its pole.
// Flat drawing, under 30 shapes, so first-timers recognise the building from the street.
export default function FacadeArt({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 320 210" role="img" aria-label={label} className="block h-auto w-full">
      <rect x="0" y="182" width="320" height="28" fill="#D9D6CF" />
      <path d="M0 196h320" stroke="#E7C04A" strokeWidth="2" strokeDasharray="22 14" />
      {/* building */}
      <rect x="4" y="34" width="16" height="148" fill="#3A3836" />
      <rect x="20" y="40" width="194" height="142" fill="#9C9A96" />
      <rect x="26" y="30" width="182" height="10" fill="#C9C7C2" />
      <rect x="20" y="40" width="194" height="62" fill="#B3B1AC" />
      <rect x="20" y="40" width="16" height="62" fill="#E46219" />
      <rect x="36" y="56" width="178" height="10" fill="#E46219" />
      <rect x="56" y="72" width="136" height="26" fill="#1F1D1B" opacity="0.72" />
      <path d="M90 72v26M124 72v26M158 72v26" stroke="#C9C7C2" strokeWidth="3" />
      <rect x="12" y="102" width="208" height="16" fill="#C9C7C2" />
      <rect x="38" y="126" width="150" height="56" fill="#1F1D1B" opacity="0.78" />
      <rect x="50" y="134" width="40" height="10" rx="2" fill="#E9C27A" opacity="0.55" />
      <rect x="132" y="134" width="44" height="10" rx="2" fill="#E9C27A" opacity="0.55" />
      <path d="M104 126v56M116 126v56" stroke="#9C9A96" strokeWidth="3" />
      {/* the oval sign */}
      <rect x="263" y="78" width="5" height="104" fill="#3A3836" />
      <ellipse cx="265" cy="56" rx="50" ry="30" fill="#FFFFFF" stroke="#8E8C88" strokeWidth="4" />
      <text x="265" y="53" fontSize="13.5" textAnchor="middle" fontFamily="var(--font-display)">
        <tspan fill="#1F1D1B">Jessy </tspan>
        <tspan fill="#E46219">Bread</tspan>
      </text>
      <text x="265" y="75" fontSize="11" textAnchor="middle" fontFamily="var(--font-display)" fill="#E46219">
        &amp; Cake
      </text>
    </svg>
  );
}
