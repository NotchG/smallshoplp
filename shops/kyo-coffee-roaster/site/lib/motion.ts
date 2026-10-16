// Motion tokens for Kyō Coffee Roaster (design brief §8). Components read from here.
export const duration = {
  press: 0.15, // hover / press feedback
  ui: 0.25, // small UI changes
  reveal: 0.6, // section entering the viewport
  hero: 1.2, // the pour: brew group settling into the cup
} as const;

export const ease = {
  out: "power2.out",
  outStrong: "expo.out",
  inOut: "power2.inOut",
} as const;

export const distance = { reveal: 20 } as const; // px. Keep small.

// The signature moment: cold brew pours into the hero cup, then marbles into the milk.
export const pour = {
  delay: 0.15, // before the brew starts falling
  marbleAt: 0.7, // timeline position of the marble swirls
  marble: 0.6, // marble fade-in duration
  marbleY: -8, // px the swirls drift down from
} as const;

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
