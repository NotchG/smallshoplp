// Motion tokens for Paras Lawas Kopi (design brief §8). Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes
  status: 0.3,   // open/closed line fading in under the clock
  reveal: 0.7,   // section entering the viewport
  hero: 1.4,     // the wall clock hands sweeping to now (signature moment)
} as const;

export const delay = {
  clock: 0.2,    // clock starts after mount
  status: 0.5,   // status line, measured from the clock's start
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
