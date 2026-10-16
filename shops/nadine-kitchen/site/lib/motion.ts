// Motion tokens (docs/trd.md, design brief §8). Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback (CSS uses the same 150 ms)
  ui: 0.25,      // small UI changes
  reveal: 0.6,   // section entering the viewport
  letter: 0.5,   // one fondant letter settling onto the board
  hero: 1.1,     // the signature moment, total
} as const;

export const ease = {
  out: "power2.out",
  reveal: "power2.out",
  settle: "back.out(1.3)", // a settle, not a bounce
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = {
  reveal: 20, // px. Keep small.
  letter: 28, // px each letter drops onto the board
} as const;

export const stagger = { letter: 0.045 } as const;

// Fixed starting tilt per letter of NADINE KITCHEN (degrees), alternating sign.
export const letterTilt = [-6, 4, -3, 5, -4, 3, -5, 4, -3, 6, -4, 3, -5] as const;

// How long the hero waits for web fonts before placing the letters.
export const fontWaitMs = 600;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
