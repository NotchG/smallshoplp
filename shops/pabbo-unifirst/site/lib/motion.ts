// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.12,   // button press (CSS)
  ui: 0.16,      // hover overlay (CSS)
  reveal: 0.6,   // section entering the viewport
  dot: 0.2,      // the red "on" dot in the hours badge
} as const;

// expo.out ≈ cubic-bezier(0.16, 1, 0.3, 1)
export const ease = {
  out: "expo.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// Signature: the hall's ceiling frames switch on, outermost first.
export const frameOn = { duration: 0.18, stagger: 0.11, delay: 0.15 } as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
