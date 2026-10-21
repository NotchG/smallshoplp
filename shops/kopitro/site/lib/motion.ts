// Motion tokens, from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.18, // hover / press feedback
  ui: 0.25, // small UI changes
  reveal: 0.6, // section entering the viewport
  hero: 1.4, // the pour: stream + carafe filling
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  pour: "sine.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
