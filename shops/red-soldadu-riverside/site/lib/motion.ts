// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes
  reveal: 0.7,   // section entering the viewport
  hero: 1.1,     // the signature moment: the two planes
  glint: 1.4,    // the glints drifting downstream
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

// px. Keep small.
// The canopy settle (canopy: 10) was cut in the remove-one-thing pass.
export const distance = { reveal: 20, open: 36, glint: 48 } as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
