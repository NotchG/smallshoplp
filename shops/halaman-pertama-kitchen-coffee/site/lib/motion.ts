// Motion tokens from docs/design-brief.md §8; components read from here.
export const duration = {
  press: 0.15,     // hover / press feedback
  ui: 0.25,        // small UI changes (menus, toggles)
  reveal: 0.7,     // section entering the viewport
  hero: 1.1,       // signature: the two wordmark halves join
  heroPhoto: 1.4,  // signature: the owner's photo settles inside its arch
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
