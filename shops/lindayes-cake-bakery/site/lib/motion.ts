// Motion tokens from docs/trd.md (motion spec) and docs/design-brief.md §8.
// The signature (the sign switching on) is CSS: see .sign-lit in globals.css
// (700ms, 150ms delay, cubic-bezier(0.16, 1, 0.3, 1)). Components read the rest from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes
  reveal: 0.6,   // section entering the viewport
  hero: 0.7,     // the sign switching on (CSS keyframes)
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export const trigger = { start: "top 85%" } as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
