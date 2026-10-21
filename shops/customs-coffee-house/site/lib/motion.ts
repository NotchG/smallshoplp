// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15,   // press feedback
  ui: 0.18,      // hover tint on buttons
  reveal: 0.6,   // section entering the viewport
  hero: 1.0,     // the S wheel, the one signature moment
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  roll: "power3.out", // the S wheel
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
