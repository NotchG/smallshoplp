// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.2,       // small UI changes
  reveal: 0.6,   // section entering the viewport
  hero: 1.1,     // the quiet meter settling (signature moment)
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// The quiet meter: 24 bars start at a fixed (never random) 1.6–3× resting height
// and settle to 1× (6×6px dots), staggered from the centre.
export const meter = {
  stagger: 0.02,
  delay: 0.15,
  start: [
    1.9, 2.6, 1.7, 2.9, 2.2, 3.0, 1.8, 2.5, 2.8, 2.0, 2.7, 3.0,
    2.4, 2.9, 1.9, 2.6, 2.2, 3.0, 1.7, 2.5, 2.8, 2.0, 2.4, 1.6,
  ],
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
