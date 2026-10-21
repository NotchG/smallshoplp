import type { Item } from "@/content";
import { mock } from "@/lib/mockup";

// h2 device from the owner's printed menu: a brick block, a thin rule to the right edge,
// ending in a small open circle. On maroon: paper block, maroon text, paper rule.
export default function SectionTab({
  id,
  heading,
  tone = "light",
  ground,
}: {
  id: string;
  heading: Item;
  tone?: "light" | "maroon";
  ground?: string; // colour behind the circle, so it reads as open
}) {
  return (
    <div
      className={`tab ${tone === "maroon" ? "tab--maroon" : ""}`}
      style={ground ? ({ "--tab-ground": ground } as React.CSSProperties) : undefined}
    >
      <h2 id={id} className="tab-block t-head" {...mock(heading.mockup)}>
        {heading.text}
      </h2>
      <span className="tab-rule" aria-hidden="true" />
    </div>
  );
}
