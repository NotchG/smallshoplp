// Motion tokens from docs/design-brief.md §8 and docs/trd.md "Motion spec".
// CSS mirrors: --dur-lights, --dur-lockup, --ease-lights, --ease-out-expo in globals.css.
export const duration = {
  press: 0.18,   // hover / press feedback (CSS, 180 ms)
  ui: 0.25,      // small UI changes
  reveal: 0.7,   // section entering the viewport
  hero: 1.4,     // the signature moment (alias of lights)
  lights: 1.4,   // canopy lit layer fades up (CSS keyframes)
  lockup: 0.9,   // lockup rises into place (CSS keyframes)
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
