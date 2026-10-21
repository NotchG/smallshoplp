// Croissant from the pastry case, side view on a small plate. Base on y = 192.
// One crescent silhouette; the rolled layers are darker ridges inside it, the ends are a
// deeper bake and the crown carries a lighter glaze. No outlines.
export default function Croissant({ className = "" }: { className?: string }) {
  const body =
    "M30 180C31 168 41 158 56 152C64 130 90 112 120 112C150 112 176 130 184 152C199 158 209 168 210 180C186 182 160 179 146 176C132 179 108 179 94 176C80 179 54 182 30 180Z";
  return (
    <svg
      viewBox="0 0 240 200"
      role="img"
      aria-label="Ilustrasi croissant di atas piring kecil"
      className={className}
    >
      <defs>
        <clipPath id="croissant-body">
          <path d={body} />
        </clipPath>
      </defs>
      <path d={body} fill="#D9963F" />
      <g clipPath="url(#croissant-body)">
        {/* deeper bake on the tips */}
        <ellipse cx="34" cy="176" rx="26" ry="18" fill="#C27A2C" />
        <ellipse cx="206" cy="176" rx="26" ry="18" fill="#C27A2C" />
        {/* glaze on the crown */}
        <path d="M84 132C94 120 106 116 120 116C134 116 146 120 156 132C146 128 134 126 120 126C106 126 94 128 84 132Z" fill="#EBB766" />
        {/* rolled layers */}
        <g fill="none" stroke="#A9682A" strokeWidth="4.5" strokeLinecap="round">
          <path d="M92 118C83 134 84 156 96 178" />
          <path d="M148 118C157 134 156 156 144 178" />
          <path d="M60 146C56 158 60 170 70 180" />
          <path d="M180 146C184 158 180 170 170 180" />
        </g>
      </g>
      {/* plate */}
      <path
        d="M36 185C36 180.5 72 178.5 120 178.5C168 178.5 204 180.5 204 185C204 189.5 168 192 120 192C72 192 36 189.5 36 185Z"
        fill="#E2E8E3"
      />
    </svg>
  );
}
