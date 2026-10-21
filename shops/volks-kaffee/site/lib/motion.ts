// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.16,   // hover / press feedback
  ui: 0.2,       // small UI changes
  reveal: 0.7,   // section entering the viewport
  hero: 1.0,     // the one signature moment ("Lampu menyala")
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// "Lampu menyala": the awning's lit layer steps through these opacities after mount.
// Two dips, never back to 0, so it stays under 3 flashes per second (WCAG 2.3.1).
export const flicker = {
  delay: 0.2,
  steps: [0.8, 0.25, 0.9, 0.4, 1],
  durations: [0.08, 0.07, 0.08, 0.06, 0.25],
  glow: 0.5, // counter glow pool fade, starts with the last step
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
