// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes
  reveal: 0.6,   // section entering the viewport
  hero: 0.7,     // each bread dropping into the crate (signature moment)
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  settle: "expo.out", // breads settling in the crate
} as const;

export const distance = {
  reveal: 20, // px. Keep small.
  drop: 64,   // px the breads fall into the crate
} as const;

export const stagger = { hero: 0.09 } as const;
export const delay = { hero: 0.2 } as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
