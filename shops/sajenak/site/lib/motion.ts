// Motion tokens for Sajenak (TRD motion spec). Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes
  reveal: 0.6,   // section entering the viewport
  hero: 0.9,     // the whole clink sequence ends by about here
  clink: 0.45,   // cups swing in
  recoil: 0.15,  // each half of the recoil
  spark: 0.25,   // spark strokes
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
  clinkIn: "power3.in", // accelerates into the clink
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
