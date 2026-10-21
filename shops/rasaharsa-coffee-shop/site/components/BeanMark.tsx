// The two-bean mark from the sign, redrawn [MOCKUP] until the owner sends the logo file.
// "disc": the logo (kapur disc, beans cut in the ground colour). "glyph": two beans only.
function Bean({ x, y, fill, seam }: { x: number; y: number; fill: string; seam: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(-28)`}>
      <ellipse rx="7.6" ry="11.4" fill={fill} />
      <path d="M0.6 -9.2C-3.6 -4.2 3.8 3.4 -0.6 9.2" fill="none" stroke={seam} strokeWidth="2.1" strokeLinecap="round" />
    </g>
  );
}

export default function BeanMark({
  variant = "disc",
  className = "",
  mockup = false,
}: {
  variant?: "disc" | "glyph";
  className?: string;
  mockup?: boolean;
}) {
  const disc = variant === "disc";
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...(mockup ? { "data-mockup": "" } : {})}
    >
      {disc && <circle cx="24" cy="24" r="23" fill="var(--color-kapur)" />}
      <Bean x={16.6} y={26.4} fill={disc ? "var(--color-dinding)" : "currentColor"} seam={disc ? "var(--color-kapur)" : "var(--seam, var(--color-dinding))"} />
      <Bean x={31.4} y={21.6} fill={disc ? "var(--color-dinding)" : "currentColor"} seam={disc ? "var(--color-kapur)" : "var(--seam, var(--color-dinding))"} />
    </svg>
  );
}
