// Motion tokens from docs/design-brief.md §8. Components read from here.
export const duration = {
  press: 0.18, // hover / press feedback (CSS mirrors this as --press)
  ui: 0.25, // small UI changes
  reveal: 0.6, // section entering the viewport
  hero: 1.3, // the lamp sweep, start to status
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export const reveal = { y: 20, duration: 0.6, ease: "power2.out", start: "top 85%" } as const;

// Signature: "lampu menyala". Lamps switch on left to right along the slat wall.
export const lamps = {
  delay: 0.15,
  duration: 0.45,
  stagger: 0.03,
  ease: "power2.out",
  fromScaleY: 0.92,
} as const;

// The open/closed status fades up near the end of the sweep.
export const status = { at: 0.9, y: 8, duration: 0.4 } as const;

export const press = { duration: 0.18 } as const;

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
