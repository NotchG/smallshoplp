import { shop } from "@/content";
import { mock } from "@/lib/mockup";

// The red "kopimade" sign. Three stacked layers: glow (blurred red), unlit (dull, visible from
// first paint) and lit (sign red, white outline). Only the lit layer holds real text; the other
// two draw it from data-text so the page has one copy. The hero h1 is named "Kopi Made" via aria-label.
export default function SignWordmark({
  as: Tag = "h1",
  isStatic = false,
  className = "",
}: {
  as?: "h1" | "p";
  isStatic?: boolean;
  className?: string;
}) {
  const text = shop.wordmark.text;
  return (
    <Tag
      className={`sign ${isStatic ? "sign--static" : ""} ${className}`}
      {...(Tag === "p" ? { "aria-hidden": true } : { "aria-label": shop.name })}
      {...mock(shop.wordmark.mockup)}
    >
      <span className="sign-stack" aria-hidden="true">
        {!isStatic && <span className="sign-glow" data-text={text} />}
        {!isStatic && <span className="sign-unlit" data-text={text} />}
        <span className="sign-lit" data-check>
          {text}
        </span>
      </span>
    </Tag>
  );
}
