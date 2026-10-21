// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.2,       // small UI changes
  reveal: 0.6,   // section entering the viewport
  hero: 0.5,     // the sticker slap
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// The signature moment: the hero price sticker lands at -4deg.
export const sticker = {
  scaleFrom: 1.08,
  rotateFrom: -11,
  rotateTo: -4,
  yFrom: -12,
  delay: 0.2,
  // shadowDelay / shadowDuration removed with the shadow fade (remove-one-thing pass).
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
