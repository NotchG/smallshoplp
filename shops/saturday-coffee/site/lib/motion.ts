// Motion tokens for Saturday Coffee 2.0 (design brief §8). Components read from here.
export const duration = {
  press: 0.15, // hover / press feedback
  ui: 0.2, // action-tile arrow, small UI changes
  reveal: 0.7, // section entering the viewport
  hero: 1.3, // the one signature moment: lights switching on (≈1.26s total)
  bulb: 0.45, // one bulb's glow fading in
  bulbStagger: 0.06, // gap between bulbs, left to right
  bulbStart: 0.15, // first bulb's delay
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  signature: "cubic-bezier(0.16,1,0.3,1)", // CSS keyframes for the bulbs
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
