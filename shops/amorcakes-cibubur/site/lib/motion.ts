// Motion tokens for Amorcakes & Bakery Cibubur (design brief §8, TRD motion spec).
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes (composer size change)
  reveal: 0.6,   // section entering the viewport
  hero: 1.2,     // the one signature moment: piping the plaque
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  piping: "power1.inOut", // a steady piping hand
  sticker: "expo.out",    // the sticker pressed onto the glass
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
