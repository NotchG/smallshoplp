// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.15,   // button press
  ui: 0.18,      // button hover overlay
  reveal: 0.6,   // section entering the viewport
  hero: 1.5,     // the BUKA sign swing, in total
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  swing: "sine.inOut", // each segment of the sign's damped pendulum
} as const;

// The signature moment: the BUKA sign swings once about its hook and settles at 0°.
export const swing = {
  angles: [7, -4.5, 2.5, -1, 0],
  durations: [0.3, 0.34, 0.3, 0.28, 0.26],
  delay: 0.25,
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
