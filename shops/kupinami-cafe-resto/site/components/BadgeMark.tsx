// Redrawn from the badge on the shop's own hours graphic (owner-2): a lobed frame with
// ogee arches top and bottom, bitten corners and pointed sides; a cup above "kupinami",
// crossed cutlery below. Placeholder until the owner sends the original logo file.
const FRAME =
  "M100 4C106 12 114 18 126 18H158Q158 30 172 30V50C172 62 184 70 196 80C184 90 172 98 172 110V130Q158 130 158 142H126C114 142 106 148 100 156C94 148 86 142 74 142H42Q42 130 28 130V110C28 98 16 90 4 80C16 70 28 62 28 50V30Q42 30 42 18H74C86 18 94 12 100 4Z";

export default function BadgeMark({
  tone = "teal",
  className = "",
}: {
  tone?: "teal" | "tinta";
  className?: string;
}) {
  const fill = tone === "teal" ? "var(--color-teal)" : "var(--color-tinta)";
  const ink = "var(--color-putih)";
  return (
    <svg
      viewBox="0 0 200 160"
      role="img"
      aria-label="kupinami"
      className={className}
    >
      <path d={FRAME} fill={fill} />
      <path
        d={FRAME}
        fill="none"
        stroke={ink}
        strokeWidth="2.2"
        transform="translate(100 80) scale(0.88) translate(-100 -80)"
        vectorEffect="non-scaling-stroke"
      />
      {/* cup with steam, on a saucer */}
      <path d="M98 33c-3-3 3-5 0-9M103 33c-3-3 3-5 0-9" fill="none" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M87 38h24c0 9-5 15-12 15s-12-6-12-15Z" fill={ink} />
      <path d="M111 41.5a4 4 0 1 1-1 7.6" fill="none" stroke={ink} strokeWidth="2.2" />
      <path d="M82 56.5h34" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
      <text
        x="100"
        y="95"
        textAnchor="middle"
        fill={ink}
        fontFamily="var(--font-display)"
        fontWeight="500"
        fontSize="28"
        letterSpacing="0.2"
      >
        kupinami
      </text>
      {/* crossed fork and spoon */}
      <g stroke={ink} strokeWidth="1.8" strokeLinecap="round" fill="none">
        <path d="M94 134l12-17M106 134l-12-17" />
        <path d="M91.5 113.5l2.5 3.5M94 112l2 4M96.5 111l1 4.5" />
      </g>
      <ellipse cx="106.5" cy="114" rx="2.6" ry="3.6" transform="rotate(35 106.5 114)" fill={ink} />
    </svg>
  );
}
