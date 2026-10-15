import { mock } from "@/lib/mockup";

// Drinks seen from above on the shop's bamboo coaster (photo-2, owner-2 for reference).
// Flat shapes, art-only colours from the design brief §3. Placeholder until the owner sends photos.
const BAMBOO = "#D6B47E";
const GROOVE = "#C59D63";
const GLASS = "#EFE6D6";
const ICE = "#FBF8F1";
const FOAM = "#F3EBDD";

export type CoasterKind = "kopi-susu" | "butterscotch" | "matcha";

const labels: Record<CoasterKind, string> = {
  "kopi-susu": "Ilustrasi es kopi susu gula aren",
  butterscotch: "Ilustrasi es butterscotch",
  matcha: "Ilustrasi matcha latte",
};

function Ice({ cubes }: { cubes: [number, number, number, number][] }) {
  return (
    <g fill={ICE} opacity="0.72">
      {cubes.map(([x, y, s, r], i) => (
        <rect key={i} x={x} y={y} width={s} height={s} rx={s / 4} transform={`rotate(${r} ${x + s / 2} ${y + s / 2})`} />
      ))}
    </g>
  );
}

export default function Coaster({
  kind,
  className = "",
  mockup,
}: {
  kind: CoasterKind;
  className?: string;
  mockup?: boolean;
}) {
  return (
    <svg viewBox="0 0 72 72" role="img" aria-label={labels[kind]} className={className} {...mock(mockup)}>
      <circle cx="36" cy="36" r="36" fill={BAMBOO} />
      <circle cx="36" cy="36" r="32.5" fill="none" stroke={GROOVE} strokeWidth="1.2" />
      <circle cx="36" cy="36" r="27.5" fill={GLASS} />
      {kind === "kopi-susu" && (
        <>
          <circle cx="36" cy="36" r="25" fill="#B98A5E" />
          {/* gula aren pooling along the rim */}
          <path d="M11.2 38.5A25 25 0 0 0 60.8 38.5A27 17 0 0 1 11.2 38.5Z" fill="#8A5A35" />
          <Ice cubes={[[23, 21, 11, 14], [38, 25, 10, -18], [28, 36, 9, 32]]} />
        </>
      )}
      {kind === "butterscotch" && (
        <>
          <circle cx="36" cy="36" r="25" fill="#D9A04A" />
          {/* cream swirl */}
          <path d="M19 27c4-9 17-12 25-6 5 4 3 10-3 10-5 0-6-5-12-4-5 1-8 4-10 0z" fill={FOAM} opacity="0.9" />
          <Ice cubes={[[33, 34, 11, -12], [21, 37, 9, 24]]} />
        </>
      )}
      {kind === "matcha" && (
        <>
          <circle cx="36" cy="36" r="25" fill="#9DB563" />
          {/* milk cloud */}
          <path d="M30 44c-6-1-9-7-5-11 3-3 7-1 9-4 3-4 10-3 12 2 2 4 7 4 8 9 1 6-6 9-11 7-4-2-7-2-13-3z" fill={FOAM} />
          <Ice cubes={[[21, 21, 10, 18], [39, 18, 9, -22]]} />
        </>
      )}
    </svg>
  );
}
