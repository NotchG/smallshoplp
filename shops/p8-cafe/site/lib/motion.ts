// Motion tokens for P8 Cafe, from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.2,       // stamp tilt, small UI changes
  reveal: 0.6,   // section entering the viewport
  hero: 0.45,    // the stamp press (runs in CSS keyframes)
} as const;

export const ease = {
  out: "power2.out",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
