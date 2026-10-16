// Motion tokens for Rumah Mantan (design brief §8, TRD motion spec). Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes
  reveal: 0.6,   // section entering the viewport
  hero: 1.1,     // the one signature moment, total
  flap: 0.6,     // "PERNAH" swinging down on its hinge
  swing: 0.5,    // the board settling on its nail
  dots: 0.15,    // the "• • •" placeholder fading out
} as const;

export const delay = {
  heroStart: 0.3, // after hydration
  dots: 0.25,     // into the flap
  swing: 0.75,    // into the flap
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export const angle = { flap: -95, swing: 1.5 } as const; // degrees

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
