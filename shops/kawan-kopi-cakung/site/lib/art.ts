// Illustration-only fills from design brief §3. Never used for text or UI.
export const fill = {
  espresso: "#3A2416",
  crema: "#B97A45",
  citrus: "#E58A3A",
  toast: "#D99A45",
  toastDark: "#B5702C",
  strawberry: "#C8423A",
  leaf: "#6F9A4E",
  leafDark: "#4E7A3A",
  lampu: "#FBF4E8",
  tinta: "#1C2420",
} as const;

export type Layer = { y: number; x: number }; // viewBox units: key height, glass edge at that height

// Size and layer-key anchors for each drawn drink (viewBox units).
export const drinkGeometry = {
  americano: { w: 72, h: 112, layers: [{ y: 59, x: 69 }] },
  kawanLama: { w: 72, h: 136, layers: [{ y: 34, x: 69 }, { y: 85, x: 67 }] },
  dirtyLatte: { w: 78, h: 94, layers: [{ y: 26, x: 75 }, { y: 58, x: 75 }] },
  v60: { w: 80, h: 150, layers: [{ y: 22, x: 66 }, { y: 122, x: 68 }] },
  citrus: { w: 78, h: 142, layers: [] },
} as const satisfies Record<string, { w: number; h: number; layers: Layer[] }>;

export type DrinkArtId = keyof typeof drinkGeometry;
