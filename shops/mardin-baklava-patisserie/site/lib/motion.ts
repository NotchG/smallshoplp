// Motion tokens, from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes (menus, toggles)
  reveal: 0.7,   // section entering the viewport
  hero: 1.2,     // the counter light comes on (runs in CSS keyframes, see globals.css)
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  counter: "cubic-bezier(0.16, 1, 0.3, 1)", // mirrors --ease-counter in globals.css
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// Hero name cards drop in left to right after the veil lifts (seconds).
export const heroCardDelays = [0.7, 0.82, 0.94] as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
