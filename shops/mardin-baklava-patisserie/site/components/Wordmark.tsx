import { shop } from "@/content";

// The MARDIN lockup, typeset (not a copy of the logo file): tall Antonio caps, a syrup bar
// under the M, and the spaced "BAKLAVA PATISSERIE" sub-line beside the bar.
// Like a logo, the full name is the accessible name; the sub-line is drawn from data-sub
// (CSS generated content) so it can tuck in under the word without colliding text boxes.
export default function Wordmark({
  size = "display",
  as: Tag = "span",
  className = "",
}: {
  size?: "display" | "head";
  as?: "span" | "h1";
  className?: string;
}) {
  const a11y = Tag === "h1" ? { "aria-label": shop.name } : { role: "img", "aria-label": shop.name };
  return (
    <Tag className={`lockup lockup-${size} ${className}`} {...a11y}>
      <span className="lockup-word" data-check aria-hidden="true">
        {shop.shortName}
      </span>
      <span className="lockup-row" aria-hidden="true">
        <span className="lockup-bar" />
        <span className="lockup-sub" data-sub={shop.subName} />
      </span>
    </Tag>
  );
}
