// Kaneki's tapered tumbler, drawn flat: clear glass, a liquid group clipped to the
// interior, three ice cubes, the white "Kaneki" print, and the dark coaster with a
// thin gold ring from their tables. One component for every drink on the page.

export type GlassVariant = "kopiSusu" | "charcoal" | "matcha" | "peachTea";

const variants: Record<
  GlassVariant,
  { fill: string; band?: string; deep?: string; slice?: boolean }
> = {
  kopiSusu: { fill: "#9A7550" },
  charcoal: { fill: "#3A3A39", band: "#6E6C68" },
  matcha: { fill: "#6F8F4E", band: "#C9D3B0" },
  peachTea: { fill: "#C7893B", deep: "#8E3F1E", slice: true },
};

// Outer silhouette and interior, in a 100 × 145 box. The base curves down a little,
// as a round glass does seen from just above the table.
const OUTER = "M8 6 L92 6 L82.6 128 Q50 133.2 17.4 128 Z";
const INNER = "M10.6 8.2 L89.4 8.2 L81 121.2 Q50 125.6 19 121.2 Z";
const BASE = "M19 121.2 Q50 125.6 81 121.2 L82.6 128 Q50 133.2 17.4 128 Z";

export default function Glass({
  id,
  variant,
  print = true,
  animate = false,
  label,
  className,
}: {
  id: string;
  variant: GlassVariant;
  print?: boolean;
  animate?: boolean;
  label?: string;
  className?: string;
}) {
  const v = variants[variant];
  const clip = `glass-in-${id}`;
  const a11y = label
    ? { role: "img" as const, "aria-label": label }
    : { "aria-hidden": true as const };

  return (
    <svg viewBox="0 0 100 145" className={className} {...a11y} focusable="false">
      <defs>
        <clipPath id={clip}>
          <path d={INNER} />
        </clipPath>
      </defs>

      {/* coaster: dark rubber, thin gold ring */}
      <ellipse cx="50" cy="133" rx="46" ry="9.5" fill="#302922" />
      <ellipse cx="50" cy="133" rx="40" ry="7.5" fill="none" stroke="#B8995A" strokeWidth="0.8" />

      {/* clear glass and its thick base */}
      <path d={OUTER} fill="#FFFFFF" fillOpacity="0.6" />
      <path d={BASE} fill="#E1E4E1" />

      <g clipPath={`url(#${clip})`}>
        <g className={animate ? "glass-pour" : undefined}>
          <rect x="0" y="16" width="100" height="112" fill={v.fill} />
          {v.deep && <rect x="0" y="95" width="100" height="33" fill={v.deep} />}
          {v.band && <rect x="0" y="16" width="100" height="20" fill={v.band} />}
          {v.slice && (
            <g transform="translate(66 96) rotate(-24)">
              <ellipse rx="12" ry="9" fill="#E9A066" />
              <ellipse rx="9.6" ry="7" fill="#F3BE8A" />
              <path
                d="M0 0 L0 -7 M0 0 L8.4 -3.4 M0 0 L8.4 3.4 M0 0 L0 7 M0 0 L-8.4 3.4 M0 0 L-8.4 -3.4"
                stroke="#E9A066"
                strokeWidth="0.9"
              />
            </g>
          )}
          {/* ice */}
          <rect x="22" y="20" width="18" height="16" rx="3.5" transform="rotate(-14 31 28)" fill="#FFFFFF" fillOpacity="0.26" />
          <rect x="54" y="19" width="17" height="16" rx="3.5" transform="rotate(11 62.5 27)" fill="#FFFFFF" fillOpacity="0.22" />
          <rect x="38" y="38" width="15" height="14" rx="3" transform="rotate(-5 45.5 45)" fill="#FFFFFF" fillOpacity="0.16" />
          {/* surface */}
          <ellipse
            cx="50"
            cy="16.4"
            rx="40.4"
            ry="2.8"
            fill="#FFFFFF"
            fillOpacity="0.24"
          />
        </g>
        {/* one flat highlight down the glass wall */}
        <path d="M15.5 10 L20.5 10 L17.6 118 L13.4 118 Z" fill="#FFFFFF" fillOpacity="0.3" />
      </g>

      {/* rim and silhouette */}
      <path d={OUTER} fill="none" stroke="#C9CCCA" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <ellipse
        cx="50"
        cy="6"
        rx="42"
        ry="2.6"
        fill="none"
        stroke="#C9CCCA"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />

      {print && (
        <text
          x="50"
          y="80"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="21"
          transform="rotate(-5 50 74)"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Kaneki
        </text>
      )}
    </svg>
  );
}
