// Motion tokens for Soes Roti Kue Merdeka (design brief §8). Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes (menus, toggles)
  reveal: 0.7,   // section entering the viewport
  hero: 1.2,     // the one signature moment: the door sign's swing
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  swing: "sine.inOut", // each half-swing of the hanging sign
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// The door sign: a damped pendulum around its hook. A short push from rest (-1.5deg) to -10deg,
// then the brief's keyframes. Segment durations add up to duration.hero.
export const signSwing = {
  delay: 0.15,
  keyframes: [-10, 6, -3.5, 1.8, -1.5],
  segments: [0.16, 0.32, 0.27, 0.24, 0.21],
  rest: -1.5,
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
