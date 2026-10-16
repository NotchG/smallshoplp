import type { ReactNode } from "react";

// Every picture on the page sits in a 6px black-steel frame, square corners.
// When owner photos arrive they replace the illustration inside, same aspect.
export default function SteelFrame({
  className = "",
  label,
  children,
}: {
  className?: string;
  label?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`steel-frame ${className}`}
      {...(label ? { role: "img", "aria-label": label } : {})}
    >
      {children}
    </div>
  );
}
