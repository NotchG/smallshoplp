// Motion tokens for Warkop Bank Gondrong JGC (design brief §8). Components read from here.
export const duration = {
  press: 0.12,   // button press nudge
  response: 0.2, // hover / strip tilt
  reveal: 0.6,   // section entering the viewport
} as const;

export const ease = {
  out: "power2.out",
  signOut: "sine.out",
  signInOut: "sine.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export const reveal = {
  y: distance.reveal,
  duration: duration.reveal,
  ease: ease.out,
  start: "top 85%",
} as const;

// The signature moment: the BUKA sign is nudged from rest and sways back.
// Negative = the bottom swings right, away from the name.
export const sign = {
  delay: 0.25,
  angles: [-6, 2.5, -1, 0],
  durations: [0.35, 0.45, 0.4, 0.35],
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
