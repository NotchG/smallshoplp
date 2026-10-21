// Motion tokens from docs/design-brief.md §8 and docs/trd.md; components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.2,       // small UI changes
  reveal: 0.7,   // section entering the viewport
  hero: 1.1,     // the one signature moment (LED sweep + glow, total)
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// Signature "lampu menyala": the LED strip along the hero gable switches on, eaves to ridge.
export const led = {
  start: 0.15,       // s, sweep starts
  sweep: 0.9,        // s, mask rects travel eave → ridge
  glowStart: 0.6,    // s, blurred twin starts fading in
  glow: 0.5,         // s
  glowOpacity: 0.7,
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
