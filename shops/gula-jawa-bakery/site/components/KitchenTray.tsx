import { kitchen, artIsMockup } from "@/content";
import { mock } from "@/lib/mockup";
import { C } from "./art/geometry";
import { PastryShape } from "./art/Pastry";

// Stand-in for a photo of the open kitchen: a baking tray seen from above, perforated liner
// (the mat in photo 3), two rows of four laminated pastries turned −20°. 16:10.
const COLS = [119.5, 306.5, 493.5, 680.5];
const ROWS = [142, 358];

export default function KitchenTray({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      role="img"
      aria-label={kitchen.trayTitle}
      className={`block h-auto w-full ${className}`}
      {...mock(artIsMockup)}
    >
      <title>{kitchen.trayTitle}</title>
      <defs>
        <pattern id="tray-perforation" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="7" r="2.4" fill={C.perforation} />
        </pattern>
        {/* one pastry, reused eight times */}
        <g id="tray-pastry">
          <PastryShape />
        </g>
      </defs>
      <rect width="800" height="500" rx="14" fill={C.tray} />
      <rect x="26" y="26" width="748" height="448" rx="8" fill={C.liner} />
      <rect x="26" y="26" width="748" height="448" rx="8" fill="url(#tray-perforation)" />
      {ROWS.map((y) =>
        COLS.map((x) => (
          <use
            key={`${x}-${y}`}
            href="#tray-pastry"
            transform={`translate(${x} ${y}) rotate(-20) scale(0.82) translate(-145 -75)`}
          />
        )),
      )}
    </svg>
  );
}
