// Motion tokens from docs/design-brief.md §8; components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes (menus, toggles)
  reveal: 0.7,   // section entering the viewport
  hero: 1.1,     // starter default (unused: the hero moment is the door-sign swing)
  swing: 1.4,    // the door sign settling: the one signature moment
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  swingFirst: "sine.out",
  swingRest: "sine.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

/** Door-sign keyframes: rotation (deg) and the duration of each segment (s). Sums to duration.swing. */
export const swing = {
  angles: [-6, 4, -2, 1, 0],
  durations: [0.22, 0.36, 0.32, 0.28, 0.22],
  delay: 0.15,
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
