// Motion tokens for Rasaharsa (design brief §8, TRD motion spec). Components read from here.
export const duration = {
  press: 0.18,   // hover / press feedback (CSS uses 180ms)
  ui: 0.25,      // small UI changes
  reveal: 0.6,   // section entering the viewport
} as const;

export const ease = {
  out: "power3.out",      // = cubic-bezier(0.16,1,0.3,1): pendants settling
  soft: "power2.out",     // bulbs, wash, section reveals
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// "Lampu menyala": the signature moment in the hero.
export const lampu = {
  settle: 0.7,          // pendants settle (y -14px -> 0, rotate 2.5deg -> 0)
  settleStagger: 0.09,
  settleY: -14,
  settleRotate: 2.5,
  bulbAt: 0.45,         // bulbs start switching on
  bulb: 0.45,
  bulbStagger: 0.14,
  // wash: cut at plan step 10 (it read as a gradient blob behind the wordmark).
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
