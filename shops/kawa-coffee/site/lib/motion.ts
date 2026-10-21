// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15,     // hover / press feedback
  ui: 0.25,        // small UI changes (menus, toggles)
  reveal: 0.7,     // section entering the viewport
  hero: 1.15,      // the signature moment: the disc switches on (step 1 + step 2)
  heroStep1: 0.35, // halo first warms: opacity 0 -> 0.55, scale 0.94 -> 0.97
  heroStep2: 0.8,  // halo settles: opacity -> 1, scale -> 1
  heroDelay: 0.2,  // after hydration
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
