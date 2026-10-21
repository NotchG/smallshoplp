import { shop } from "@/content";

// The frosted WOVEN COFFEE band from their glass doors. The first instance is the page's <h1>
// (uppercase via CSS, so screen readers hear "Woven Coffee"); the repeats are decorative.
// Clipped full-bleed strip with a thread along each edge, 120% wide so their ends never show.
export default function FrostBand() {
  return (
    <div className="band">
      <span aria-hidden="true" className="band__thread band__thread--top" />
      <div className="band__row t-band">
        <h1 id="hero-title">{shop.name}</h1>
        <span aria-hidden="true">{shop.name}</span>
        <span aria-hidden="true">{shop.name}</span>
        <span aria-hidden="true">{shop.name}</span>
      </div>
      <span aria-hidden="true" className="band__thread band__thread--bottom" />
    </div>
  );
}
