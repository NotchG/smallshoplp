import type { ReactNode } from "react";

// Product name set like the KOPI ENA bottle label: two stacked caps words in a 1.5px box.
// One element with a <br> so the tight 1.05 leading stays inside a single text block.
export default function LabelBox({
  name,
  children,
  className = "",
}: {
  name: [string, string] | string[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="t-label label-box" data-check>
        {name[0]}
        <br />
        {name[1]}
      </h3>
      {children ? <div className="mt-2.5">{children}</div> : null}
    </div>
  );
}
