// Motion tokens (design brief §8, TRD motion spec). Components read from here.
// The signature neon switch-on is pure CSS (globals.css, 900ms + 200ms delay), not GSAP.
export const duration = {
  hover: 0.16, // hover / focus / press overlay (CSS: --dur-hover)
  reveal: 0.6, // section entering the viewport
  hero: 0.9, // the neon switch-on, mirrored in globals.css
} as const;

export const ease = {
  out: "power3.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
