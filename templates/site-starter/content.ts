// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.

export const shop = {
  name: "Shop name",
  type: "Shop type",
  address: "Street, City",
  phone: "",
  mapsUrl: "https://maps.google.com",
  hours: [{ days: "Mon–Fri", time: "9:00–17:00" }],
};

export type Item = { text: string; mockup?: boolean };

export const hero = {
  headline: { text: "Headline from the design brief" } as Item,
  sub: { text: "One supporting line." } as Item,
};

export const products: Item[] = [
  { text: "Product from the listing" },
  { text: "Likely product", mockup: true },
];

// Paraphrased from real reviews only. Never invented, never attributed to a name.
export const praise: Item[] = [{ text: "A theme customers mention often." }];
