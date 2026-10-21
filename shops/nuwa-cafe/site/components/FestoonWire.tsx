// Static festoon wire across the hero, full bleed, in front of the wordmark like the facade
// photo. The wire stretches with the hero (preserveAspectRatio="none", non-scaling stroke);
// the bulbs are separate, undistorted SVGs placed on the same curve in percentages.

const W = 1440;
const H = 240;
// Quadratic sag: starts above the letters at the left, dips through them, rises at the right.
const P0 = [0, 26];
const P1 = [640, 330];
const P2 = [1440, 58];

function at(t: number) {
  const u = 1 - t;
  return [
    u * u * P0[0] + 2 * u * t * P1[0] + t * t * P2[0],
    u * u * P0[1] + 2 * u * t * P1[1] + t * t * P2[1],
  ];
}

// Seven bulbs from 768px; the phone keeps every other one so the small wordmark stays legible.
const BULBS = [0.05, 0.2, 0.35, 0.5, 0.65, 0.8, 0.95].map((t, i) => {
  const [x, y] = at(t);
  return {
    left: `${((x / W) * 100).toFixed(2)}%`,
    top: `${((y / H) * 100).toFixed(2)}%`,
    wideOnly: i % 2 === 1,
  };
});

function Bulb({ style, wideOnly }: { style: React.CSSProperties; wideOnly: boolean }) {
  return (
    <svg
      className="festoon-bulb"
      style={style}
      viewBox="0 0 14 28"
      aria-hidden="true"
      focusable="false"
      {...(wideOnly ? { "data-wide-only": "" } : {})}
    >
      <rect x="4.5" y="0" width="5" height="8.5" rx="1" fill="#1C1F1B" />
      <path
        d="M5 8.5 L9 8.5 C9 10.5 13 13.5 13 19.5 A6 6 0 0 1 1 19.5 C1 13.5 5 10.5 5 8.5 Z"
        fill="#F8F9F5"
        stroke="#1C1F1B"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FestoonWire() {
  return (
    <div className="festoon" aria-hidden="true">
      <svg className="festoon-wire" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" focusable="false">
        <path
          d={`M${P0.join(" ")} Q${P1.join(" ")} ${P2.join(" ")}`}
          fill="none"
          stroke="#1C1F1B"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {BULBS.map((b, i) => (
        <Bulb key={i} style={{ left: b.left, top: b.top }} wideOnly={b.wideOnly} />
      ))}
    </div>
  );
}
