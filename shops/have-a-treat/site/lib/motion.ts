// Motion tokens from docs/design-brief.md §8 and the TRD motion spec; components read from here.
export const duration = {
  press: 0.18, // hover / press feedback (CSS uses 180ms)
  ui: 0.25, // small UI changes
  reveal: 0.6, // section entering the viewport
  hero: 1.05, // the one signature moment (letterboard), total
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "power3.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// Signature moment: each letterboard letter drops into its felt groove.
export const letterDrop = {
  delay: 0.15,
  duration: 0.38,
  stagger: 0.03,
  ease: "power3.out",
  fromY: -0.4, // em
  fromRotate: -4, // deg
} as const;

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
