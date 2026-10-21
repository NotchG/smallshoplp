// Motion tokens from docs/design-brief.md §8 and the TRD motion spec. Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.22,      // small UI changes
  reveal: 0.7,   // section entering the viewport
  hero: 1.1,     // the signature moment, whole sequence
  topping: 0.5,  // one topping settling into the bowl
} as const;

export const stagger = { topping: 0.08 } as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20, topping: 16 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
