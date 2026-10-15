// Motion tokens for 2Sons Coffee (design brief §8, TRD motion spec). Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes
  reveal: 0.6,   // section entering the viewport
  hero: 1.1,     // the one signature moment, "rak menyala", total length
} as const;

// "rak menyala": the hero shelf's lights come on one cell at a time.
export const lights = {
  delay: 0.15,   // after mount
  strip: 0.5,    // LED line + falloff, opacity 0 -> 1
  veil: 0.7,     // dim veil, opacity veilFrom -> 0
  stagger: 0.12, // between cells
  veilFrom: 0.35,
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
