// The hero's whitewashed wall: hand-drawn brick outlines in running bond, very light grey.
// Hero background only.
export default function BrickWall() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="bata" width="256" height="96" patternUnits="userSpaceOnUse">
          <path
            d="M-2 24.5Q64 22.8 130 24.9T258 24.5M-2 72.2Q68 73.6 131 71.7T258 72.2M60.6 27Q59.4 48 61 69.6M188.2 26.6Q189.6 49 188.5 70M124.6 74.6Q125.8 85 124.9 96M124.9 0Q124.1 11 124.7 22M252.2 74.4Q250.9 86 252.5 96M252.5 0Q253.3 12 252.1 22.2"
            fill="none"
            stroke="var(--color-bata)"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bata)" />
    </svg>
  );
}
