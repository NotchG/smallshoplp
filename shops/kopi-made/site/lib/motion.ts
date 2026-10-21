// Motion tokens for Kopi Made (docs/design-brief.md §8). Components read from here.
export const duration = {
  press: 0.15,   // hover / press feedback
  ui: 0.25,      // small UI changes (menus, toggles)
  reveal: 0.7,   // section entering the viewport
  hero: 1.35,    // the one signature moment: the sign switching on
} as const;

// The sign sequence: a two-beat flicker, then steady; glow and room warmth follow.
export const sign = {
  delay: 0.15,    // after the script font loads
  flick: 0.08,    // each flicker beat
  settle: 0.25,   // flicker to steady
  glowAt: 0.35,   // glow and room-warm start, relative to the first beat
  glow: 0.8,
  warm: 1.0,
  glowOpacity: 0.55,
  fontWait: 0.5,  // max wait for Kaushan Script, seconds
} as const;

export const ease = {
  out: "power2.out",
  soft: "power1.out",
  linear: "none",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
