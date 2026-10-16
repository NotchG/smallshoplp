import type { ReactNode } from "react";

// A copper cooling rack seen from above, like the ones in the shop's display case.
// Frame = the copper border (globals.css .rack). Wires: parallel, every 16px, plus two
// cross bars, drawn in CSS pixels (no viewBox) so the spacing stays the same at any size.
// Products are children laid on top.
export default function Rack({
  id,
  className = "",
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  const pid = `rack-wires-${id}`;
  return (
    <div className={`rack ${className}`}>
      <svg className="rack-wires" aria-hidden="true" focusable="false">
        <defs>
          <pattern id={pid} width="16" height="16" patternUnits="userSpaceOnUse">
            <line x1="8" y1="0" x2="8" y2="16" stroke="#C9845C" strokeOpacity="0.5" strokeWidth="1.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${pid})`} />
        <line x1="0" x2="100%" y1="30%" y2="30%" stroke="#C9845C" strokeWidth="2.5" />
        <line x1="0" x2="100%" y1="70%" y2="70%" stroke="#C9845C" strokeWidth="2.5" />
      </svg>
      {children}
    </div>
  );
}
