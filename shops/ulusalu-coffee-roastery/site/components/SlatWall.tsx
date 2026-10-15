import type { CSSProperties } from "react";

// ULUSALU's bar wall: black slats hanging at stepped lengths over white brick, a warm lamp
// at the foot of each. Lengths are fractions of the band height and step in pairs, like the
// real wall, getting shorter toward the photo.

// Desktop: 24 slats on a 60px pitch span 1440px exactly; 8 more each side cover wider screens.
const DESK_CENTRE = [
  0.74, 0.74, 0.62, 0.62, 0.8, 0.8, 0.56, 0.56, 0.68, 0.68, 0.5, 0.5,
  0.6, 0.6, 0.44, 0.44, 0.3, 0.3, 0.25, 0.25, 0.3, 0.3, 0.4, 0.4,
];
const DESK = [0.58, 0.58, 0.7, 0.7, 0.52, 0.52, 0.66, 0.66, ...DESK_CENTRE, 0.48, 0.48, 0.36, 0.36, 0.52, 0.52, 0.44, 0.44];

// Phone: 11 slats on a 36px pitch in a 96px band, shown whole above the wordmark.
const PHONE = [0.6, 0.6, 0.42, 0.42, 0.68, 0.68, 0.48, 0.48, 0.34, 0.34, 0.54];

export function Slat({ len }: { len: number }) {
  return (
    <span className="slat" style={{ "--len": len } as CSSProperties}>
      <span className="slat-body" />
      <span className="lamp" />
    </span>
  );
}

export default function SlatWall() {
  return (
    <div className="slat-band" aria-hidden="true">
      <div className="slat-wall slat-wall--phone">
        {PHONE.map((len, i) => (
          <Slat key={i} len={len} />
        ))}
      </div>
      <div className="slat-wall slat-wall--desk">
        {DESK.map((len, i) => (
          <Slat key={i} len={len} />
        ))}
      </div>
    </div>
  );
}
