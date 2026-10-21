import type { ReactNode } from "react";
import { tegelMarkUrl, tegelUrl } from "@/lib/tegel";

const full = tegelUrl();
const soft = tegelUrl({ soft: true });
const markUrl = tegelMarkUrl();

// Full-bleed strip of tiles between two kayu rules (top of Menu andalan).
export function TegelBand() {
  return <div className="tegel-band" style={{ backgroundImage: full }} aria-hidden="true" />;
}

// A Waltie's table seen from above: tegel tiles in a 6px kayu frame, 4:3.
export function Tabletop({ children }: { children: ReactNode }) {
  return (
    <div className="tabletop" style={{ backgroundImage: soft }}>
      <div className="absolute inset-0 flex items-center justify-center [&>svg]:h-full [&>svg]:w-full">{children}</div>
    </div>
  );
}

// 20px single-tile mark (Kata mereka).
export function TegelMark() {
  return <span className="tegel-mark" style={{ backgroundImage: markUrl }} aria-hidden="true" />;
}
