// Original symmetric C-scroll line art in bag orange, drawn fresh after the printed bread bag
// (not traced from any photo). Decorative only: always aria-hidden.
// crest: above "Toko Roti", finial up. base: below "Tegal", finial down.
// divider: a section divider. mark: one small curl used as a list marker.

const INK = "var(--color-kantong)";
const line = { vectorEffect: "non-scaling-stroke" as const };

const HALF = (
  <>
    {/* inner C-scroll */}
    <path style={line} d="M10 40C10 22 28 10 48 12C68 14 76 32 62 38C52 42 44 32 51 26C56 22 62 26 59 30" />
    <path style={line} d="M10 40C14 50 30 56 44 52" />
    {/* S-scroll */}
    <path style={line} d="M62 40H84C96 40 104 30 118 24C134 18 150 24 150 36C150 46 138 48 134 42C130 36 138 32 141 36" />
    {/* tendril to the edge */}
    <path style={line} d="M150 40C180 40 196 30 220 30C244 30 252 42 272 42C290 42 300 34 302 28C304 22 298 18 293 21C289 24 292 29 295 28" />
    <path style={line} d="M272 42C292 46 312 46 332 40" />
    <path fill={INK} stroke="none" d="M92 44C104 54 124 54 134 50C122 46 106 44 92 44Z" />
    <circle fill={INK} stroke="none" cx="178" cy="31" r="2.4" />
    <circle fill={INK} stroke="none" cx="236" cy="46" r="2" />
    <circle fill={INK} stroke="none" cx="336" cy="39" r="2.6" />
  </>
);

function Band({ flip = false, stroke = 1.75 }: { flip?: boolean; stroke?: number }) {
  return (
    <svg
      viewBox="0 0 720 60"
      aria-hidden="true"
      focusable="false"
      className="block h-auto w-full overflow-visible"
      fill="none"
      stroke={INK}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g transform={flip ? "translate(0 60) scale(1 -1)" : undefined}>
        <g transform="translate(360 0)">{HALF}</g>
        <g transform="translate(360 0) scale(-1 1)">{HALF}</g>
        <path fill={INK} stroke="none" d="M360 2C368 15 368 28 360 38C352 28 352 15 360 2Z" />
        {!flip && <circle fill={INK} stroke="none" cx="360" cy="47" r="3.2" />}
      </g>
    </svg>
  );
}

export default function ScrollOrnament({
  variant,
  className = "",
  stroke,
}: {
  variant: "crest" | "base" | "divider" | "mark";
  className?: string;
  stroke?: number;
}) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 64 48"
        aria-hidden="true"
        focusable="false"
        className={className}
        fill="none"
        stroke={INK}
        strokeWidth={stroke ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path style={line} d="M4 36C4 18 22 6 40 8C58 10 64 28 52 34C43 38 36 29 42 23C46 19 51 23 49 27" />
        <path style={line} d="M4 36C10 44 22 46 34 42" />
        <circle cx="60" cy="40" r="3" fill={INK} stroke="none" />
      </svg>
    );
  }
  return (
    <div className={className}>
      <Band flip={variant === "base"} stroke={stroke} />
    </div>
  );
}
