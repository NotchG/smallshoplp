// One clip-top glass jar from the bar shelf (photos: tape-labelled jars), drawn flat.
// `fill` (0–1) sets the bean level. The origin name is HTML text laid over it (see Shelf),
// so this SVG is decorative.
export default function BeanJar({ fill, id }: { fill: number; id: string }) {
  const insideTop = 30;
  const insideBottom = 124;
  const level = insideBottom - fill * (insideBottom - insideTop);
  const glass = "color-mix(in oklch, var(--color-garasi) 35%, transparent)";
  const clip = `jar-in-${id}`;
  const beans = `jar-beans-${id}`;

  return (
    <svg viewBox="0 0 100 130" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={clip}>
          <rect x="10" y="29" width="80" height="95" rx="12" />
        </clipPath>
        <pattern id={beans} width="12" height="9" patternUnits="userSpaceOnUse">
          <ellipse cx="3.5" cy="2.6" rx="3.1" ry="2.1" transform="rotate(-25 3.5 2.6)" style={{ fill: "color-mix(in oklch, var(--color-pinus) 45%, var(--bean))" }} />
          <ellipse cx="9.5" cy="7" rx="3.1" ry="2.1" transform="rotate(30 9.5 7)" style={{ fill: "color-mix(in oklch, var(--color-pinus) 30%, var(--bean))" }} />
        </pattern>
      </defs>

      {/* glass body */}
      <rect x="8" y="27" width="84" height="99" rx="14" style={{ fill: "rgb(255 255 255 / 0.55)", stroke: glass }} strokeWidth="1.8" />

      {/* beans */}
      <g clipPath={`url(#${clip})`}>
        <rect x="8" y={level} width="84" height={130 - level} style={{ fill: "var(--bean)" }} />
        <rect x="8" y={level} width="84" height={130 - level} style={{ fill: `url(#${beans})` }} />
        <path
          d={`M8 ${level + 1} q6 -4 12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 v4 H8z`}
          style={{ fill: "var(--bean)" }}
        />
      </g>

      {/* glass highlight */}
      <rect x="15" y="36" width="4.5" height="72" rx="2.25" style={{ fill: "rgb(255 255 255 / 0.6)" }} />

      {/* neck, seal and lid */}
      <rect x="18" y="20" width="64" height="8" rx="2" style={{ fill: "rgb(255 255 255 / 0.55)", stroke: glass }} strokeWidth="1.6" />
      <rect x="16" y="17" width="68" height="3.2" rx="1.6" style={{ fill: "color-mix(in oklch, var(--color-cat) 70%, transparent)" }} />
      <rect x="14" y="6" width="72" height="11" rx="5.5" style={{ fill: "rgb(255 255 255 / 0.7)", stroke: glass }} strokeWidth="1.8" />

      {/* wire clip */}
      <path d="M40 9 L37.5 26 M60 9 L62.5 26 M36 26 h28" style={{ fill: "none", stroke: "color-mix(in oklch, var(--color-garasi) 55%, transparent)" }} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
