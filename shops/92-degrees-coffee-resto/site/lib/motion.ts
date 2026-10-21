// Motion tokens for De 92 Degrees (docs/design-brief.md §8). Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes (menus, toggles)
  reveal: 0.7,   // section entering the viewport
  lift: 0.45,    // signature: lift digit moving to the next floor
  arrow: 0.3,    // lift arrow nudge with each floor change
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = {
  reveal: 20,  // px. Keep small.
  sun: 28,     // px the sun sinks behind the skyline over the floor 4 row
  arrow: 4,    // px the lift arrow nudges
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
