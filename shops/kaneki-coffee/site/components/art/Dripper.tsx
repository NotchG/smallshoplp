// Pour-over cone on a glass server, as on Kaneki's bar. Dinding and Ek on the Kanopi field.
// Decorative, so hidden from assistive tech.
export default function Dripper({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 200" className={className} aria-hidden="true" focusable="false">
      {/* glass server */}
      <path d="M42 112 H118 L122 168 Q122 188 102 188 H58 Q38 188 38 168 Z" fill="#F7F7F4" fillOpacity="0.16" />
      <path d="M40 150 H120 L122 168 Q122 188 102 188 H58 Q38 188 38 168 Z" fill="#C29466" />
      <path d="M120 122 Q140 124 138 145 Q136 162 121 162" fill="none" stroke="#F7F7F4" strokeOpacity="0.45" strokeWidth="5" strokeLinecap="round" />
      {/* the drip */}
      <rect x="78.8" y="104" width="2.4" height="46" rx="1.2" fill="#C29466" />
      {/* filter paper, cone, base */}
      <path d="M34 36 L42 20 H118 L126 36 Z" fill="#EAE3D6" />
      <path d="M26 36 H134 L98 98 H62 Z" fill="#F7F7F4" />
      <path d="M52 44 L72 92 M80 44 V94 M108 44 L88 92" stroke="#2E4640" strokeOpacity="0.22" strokeWidth="2" strokeLinecap="round" />
      <rect x="48" y="97" width="64" height="9" rx="3" fill="#F7F7F4" />
      <path d="M29 44 Q10 50 16 70 Q20 80 40 74" fill="none" stroke="#F7F7F4" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
