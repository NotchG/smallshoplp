// Motion tokens for Kopi Goen (design-brief §8). Components read from here.
export const duration = {
  press: 0.12,   // button press (CSS mirrors this: 120ms)
  hover: 0.18,   // button hover overlay (CSS: 180ms)
  reveal: 0.6,   // section entering the viewport
  strip: 0.2,    // a step's strip light switching on
  wash: 0.5,     // a step's riser wash
  cone: 0.7,     // trunk uplight cone
  nameWash: 0.8, // soft wash behind "Kopi Goen"
} as const;

export const ease = {
  out: "power2.out",     // brief: ease
  light: "expo.out",     // brief: easeLight
  inOut: "power2.inOut",
} as const;

// "Lampu menyala": start times in seconds from load. The sequence ends by 1.65s.
export const lightsAt = {
  lowerStep: 0.1,
  upperStep: 0.25,
  cones: 0.45,
  coneStagger: 0.15,
  nameWash: 0.85,
  // The status dot's own step was cut in the remove-one-thing pass: it shows state, no motion.
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
