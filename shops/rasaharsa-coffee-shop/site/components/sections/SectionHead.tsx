import type { ReactNode } from "react";

// Section heading + optional subline 12px under it. Heading sizes come from .t-head only.
export default function SectionHead({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 id={id} className="t-head font-display font-extrabold">
        {title}
      </h2>
      {children}
    </div>
  );
}
