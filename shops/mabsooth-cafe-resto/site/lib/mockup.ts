import type { Item } from "@/content";

// Marks anything that came from a [MOCKUP] line in the brief: <p {...mock(item.mockup)}>.
export function mock(isMockup?: boolean) {
  return isMockup ? { "data-mockup": "" } : {};
}

// Same, for an Item: adds `mock-quiet` (no dotted underline) to sentence-level mockup copy.
export function mockItem(item: Item, className = "") {
  const cls = [className, item.mockup && item.quiet ? "mock-quiet" : ""].filter(Boolean).join(" ");
  return { ...mock(item.mockup), ...(cls ? { className: cls } : {}) };
}
