// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.12, // button press nudge (CSS mirrors this: 120ms)
  ui: 0.2, // small UI changes
  reveal: 0.6, // section entering the viewport
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "power3.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// Signature moment "disajikan" (served): the glass is set down, the saucer clinks, steam rises once.
// Times are seconds after mount; distances in CSS px.
export const served = {
  delay: 0.25,
  glassY: -32,
  glassDur: 0.5,
  glassFade: 0.2,
  glassEase: "power3.out",
  clinkAt: 0.67,
  clink: 1.5,
  clinkDur: 0.16,
  clinkEase: "power1.out",
  steamAt: 0.85,
  steamY: 10,
  steamDur: 0.9,
  steamStagger: 0.12,
  steamOpacity: 0.8,
  steamEase: "power2.out",
} as const;

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
