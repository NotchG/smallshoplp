import type { CSSProperties } from "react";

// The hall's ceiling: nested white line frames joined by corner diagonals (photo-1).
// Frames are 2px borders with pixel steps (--frame-x / --frame-y); the diagonals are small
// corner SVGs, so the geometry stays exact at any width. Purely decorative.
type Corner = "tl" | "tr" | "bl" | "br";

const DIAG: Record<Corner, [string, string, string, string]> = {
  tl: ["0", "0", "100%", "100%"],
  tr: ["100%", "0", "0", "100%"],
  bl: ["0", "100%", "100%", "0"],
  br: ["100%", "100%", "0", "0"],
};

export default function CeilingFrames({
  count = 4,
  fragment = false,
  steps,
  className = "",
}: {
  /** Frames rendered, outermost first. In the hero the 4th is hidden below 768px. */
  count?: number;
  /** Corner crop only (top-right; plus bottom-right from 768px). */
  fragment?: boolean;
  /** Steps from the outer frame to the innermost one, when fixed (diagonal length). */
  steps?: number;
  className?: string;
}) {
  const corners: Corner[] = fragment ? ["tr", "br"] : ["tl", "tr", "bl", "br"];
  const style = steps !== undefined ? ({ "--frame-n": steps } as CSSProperties) : undefined;

  return (
    <div
      className={`frames ${fragment ? "frames-fragment" : ""} ${className}`}
      style={style}
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="frame" data-frame={i} style={{ "--i": i } as CSSProperties} />
      ))}
      {corners.map((c) => {
        const [x1, y1, x2, y2] = DIAG[c];
        return (
          <svg key={c} className="frame-diag" data-corner={c} data-frame="0" focusable="false">
            <line x1={x1} y1={y1} x2={x2} y2={y2} strokeLinecap="square" />
          </svg>
        );
      })}
    </div>
  );
}
