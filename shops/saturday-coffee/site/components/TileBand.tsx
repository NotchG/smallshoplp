// The courtyard floor from photo 1: slate tiles set in terracotta joints that zigzag.
// Full bleed, decorative. Scales with the band height (48px phone, 64px desktop).
export default function TileBand({ id }: { id: string }) {
  const slate = "#5A6066";
  const slateDark = "#4F555B";
  return (
    <svg
      className="tile-band"
      viewBox="0 0 2560 64"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={id} width="128" height="64" patternUnits="userSpaceOnUse">
          <rect width="128" height="64" fill="#A8452A" />
          <polygon points="-5,3 69,3 53,61 11,61" fill={slate} />
          <polygon points="123,3 197,3 181,61 139,61" fill={slate} />
          <polygon points="75,3 117,3 133,61 59,61" fill={slateDark} />
          <polygon points="-53,3 -11,3 5,61 -69,61" fill={slateDark} />
        </pattern>
      </defs>
      <rect width="2560" height="64" fill={`url(#${id})`} />
    </svg>
  );
}
