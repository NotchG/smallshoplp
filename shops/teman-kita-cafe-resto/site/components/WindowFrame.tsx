import type { ReactNode } from "react";

// One of the shop's black-framed windows: ink frame, a sill that runs 12px past both
// sides, and an optional caption 8px under the sill.
export default function WindowFrame({
  children,
  caption,
  frameClassName = "",
  className = "",
}: {
  children: ReactNode;
  caption?: string;
  frameClassName?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className={`window-frame relative overflow-hidden ${frameClassName}`}>{children}</div>
      <div className="window-sill" aria-hidden="true" />
      {caption && <figcaption className="t-small mt-2 font-semibold">{caption}</figcaption>}
    </figure>
  );
}
