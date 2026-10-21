import type { ReactNode } from "react";

// An arch always means a window: round top, black frame from the spring line down
// (its top edge is the transom), and a hairline around the whole opening.
export default function ArchWindow({
  className = "",
  fill,
  frame = true,
  children,
}: {
  className?: string;
  fill?: "kapur" | "daun-muda" | "arang" | "daun";
  frame?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`arch ${fill ? `arch-fill-${fill}` : ""} ${className}`}>
      {children}
      {frame && <span className="arch-frame" aria-hidden="true" />}
    </div>
  );
}
