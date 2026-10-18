// The palette (docs/design-brief.md §3) and the tints the 3D cakes are made of (tints, not new
// colours). Kept apart from models.ts so the hero can use it without pulling three.js into the
// first-paint bundle.
export const P = {
  fondant: "#FFFBFC",
  grape: "#2E1A47",
  strawberry: "#C2255C",
  laut: "#0B7178",
  bubblegum: "#FFD3E1",
  butter: "#FFE38A",
  toska: "#C9EEEC",
  lilac: "#E6DBF7",
  // cake tints
  pink: "#F29BBB", // fondant pink between Bubblegum and Strawberry
  butterDeep: "#FFD45E",
  toskaDeep: "#5CC4BE",
  lilacDeep: "#A98BE0",
  gold: "#D9B24A", // the gold pearls in the owner's photos
  cone: "#E2B46C",
} as const;
