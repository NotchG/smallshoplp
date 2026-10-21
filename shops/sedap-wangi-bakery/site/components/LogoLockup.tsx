import { shop } from "@/content";

// The shop's own logo, set in type: a brick frame with "Roti & Kue" breaking the top edge
// and "Sejak 1979" breaking the bottom edge on a knock-out. Hero holds the page's h1.
export default function LogoLockup({ size = "hero", id }: { size?: "hero" | "footer"; id?: string }) {
  const [roti, kue] = shop.label.split(" & ");
  const Name = size === "hero" ? "h1" : "p";
  const [first, second] = shop.name.split(" ");
  return (
    <div className={`logo logo--${size}`}>
      <span className="logo-edge logo-edge--top">
        <span className="logo-dot" aria-hidden="true" />
        <span className="tracked">
          {roti} <span className="amp">&amp;</span> {kue}
        </span>
        <span className="logo-dot" aria-hidden="true" />
      </span>
      {/* One text element, one word per line via <br>: same look at 0.9 leading, and the
          words' glyph boxes don't register as two separate overlapping elements. The space
          before <br> keeps the text "Sedap Wangi" for screen readers and copy-paste. */}
      <Name className="logo-name" id={id}>
        {first} <br />
        {second}
      </Name>
      <span className="logo-edge logo-edge--bottom">
        <span className="tracked">{shop.since}</span>
      </span>
    </div>
  );
}
