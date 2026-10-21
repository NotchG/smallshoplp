// Shared drawing parts for the hero BarScene and the menu drawings.
// One line weight (2.5px, non-scaling), round caps and joins, straight-on like a barista's sketch.
// Colours come from CSS classes in globals.css (.ln line, .fp paper fill, .fs steel fill,
// .fm malam fill, .brew seduh liquid), so the same part works on malam and on kayu via --ink.
// Glass stays unfilled so the ground shows through, as on the yellow counter in photo-3.
import type { CSSProperties, ReactNode } from "react";

// vb = [minX, minY, width, height]; the rendered height is set by the caller (CSS length).
export function Svg({
  vb,
  height,
  className = "",
  children,
}: {
  vb: [number, number, number, number];
  height: string;
  className?: string;
  children: ReactNode;
}) {
  const style: CSSProperties = { height, width: "auto", aspectRatio: `${vb[2]} / ${vb[3]}` };
  return (
    <svg
      viewBox={vb.join(" ")}
      className={`art ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/* ---------- Gooseneck kettle (236 x 250, base at y 246) ---------- */
export const KETTLE = { w: 236, h: 250 };
export function Kettle() {
  const spout = "M158 228 C 198 228, 206 206, 202 180 C 198 150, 200 118, 214 100 L 226 92";
  const handle = "M80 152 C 42 138, 14 160, 16 196 C 18 220, 30 230, 46 228";
  return (
    <g>
      <path d={handle} className="tube-out" />
      <path d={handle} className="handle-in" />
      <path d={spout} className="tube-out" />
      <path d={spout} className="tube-in" />
      <path
        className="fs"
        d="M48 246 L172 246 C182 244 184 232 180 220 C176 204 166 194 156 188 C150 184 148 176 148 168 C148 158 142 150 132 146 L88 146 C78 150 72 158 72 168 C72 176 70 184 64 188 C54 194 44 204 40 220 C36 232 38 244 48 246 Z"
      />
      <path className="ln" d="M64 188 Q110 197 156 188" />
      <path className="ln" d="M60 226 C 60 214, 64 206, 70 202" />
      <path className="fs" d="M86 146 C92 129 128 129 134 146 Z" />
      <rect className="fm" x="105" y="122" width="10" height="11" rx="2" />
      <circle className="fm" cx="110" cy="117" r="8" />
    </g>
  );
}

/* ---------- V60 on the glass carafe (200 x 360, base at y 356) ----------
   The carafe is the photo-3 vase carafe. The liquid is a seduh rect inside a clipPath of the
   carafe's inside; the clip sits on a parent <g> so the rect can move without moving the clip. */
export const CARAFE = { w: 200, h: 360 };
export const LIQUID_TOP = 290; // resting level, about 35% of the carafe
const CARAFE_PATH =
  "M52 356 L148 356 C170 354 178 330 177 302 C176 268 156 244 136 222 L134 186 C134 180 138 176 140 172 L60 172 C62 176 66 180 66 186 L64 222 C44 244 24 268 23 302 C22 330 30 354 52 356 Z";

export function CarafeV60({ idp, pour = false }: { idp: string; pour?: boolean }) {
  const clip = `${idp}-carafe`;
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={CARAFE_PATH} />
        </clipPath>
      </defs>
      {pour && (
        // stream from the V60 tip, behind the liquid so it always meets the surface;
        // hidden by default, shown only during the pour
        <rect id="pour-stream" className="brew" x="98.5" y="180" width="3" height="174" opacity="0" />
      )}
      {/* brew inside the glass */}
      <g clipPath={`url(#${clip})`}>
        <rect
          id={pour ? "pour-liquid" : undefined}
          className="brew"
          x="0"
          y={LIQUID_TOP}
          width="200"
          height={358 - LIQUID_TOP}
        />
      </g>
      {/* glass carafe */}
      <path className="ln" d={CARAFE_PATH} />
      <path className="ln" d="M36 304 C 36 286, 42 272, 52 262" />
      {/* V60: handle, cone, ribs, base plate, outlet */}
      <path className="fp" d="M161 100 C 201 98, 203 144, 142 140 L 147 128 C 184 130, 183 111, 157 111 Z" />
      <path className="fp" d="M78 160 L30 82 Q28 76 34 76 L166 76 Q172 76 170 82 L122 160 Z" />
      <path className="ln" d="M36 89 L164 89" />
      <path className="ln" d="M62 100 L88 150 M92 100 L104 150 M122 100 L120 150" />
      <rect className="fp" x="46" y="160" width="108" height="12" rx="3" />
      <rect className="fp" x="93" y="172" width="14" height="8" rx="1.5" />
    </g>
  );
}

/* ---------- Short faceted glass, photo-3 (110 x 132, base at y 128) ---------- */
export const GLASS = { w: 110, h: 132 };
const GLASS_PATH = "M8 8 L13 48 L22 121 Q23 128 30 128 L80 128 Q87 128 88 121 L97 48 L102 8 Z";
export function FacetedGlass({ idp, level = 84 }: { idp: string; level?: number }) {
  const clip = `${idp}-glass`;
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={GLASS_PATH} />
        </clipPath>
      </defs>
      <rect className="brew" x="0" y={level} width="110" height={130 - level} clipPath={`url(#${clip})`} />
      <path className="ln" d="M13 50 Q19.5 40 26 50 Q35 40 44 50 Q55 40 66 50 Q75 40 84 50 Q90.5 40 97 50" />
      <path className="ln" d="M26 50 L32 122 M44 50 L46 122 M66 50 L64 122 M84 50 L78 122" />
      <path className="ln" d={GLASS_PATH} />
    </g>
  );
}

/* ---------- Clip-top bean jar (150 x 206, base at y 202) ---------- */
export const JAR = { w: 150, h: 206 };
export function ClipJar({ idp }: { idp: string }) {
  const clip = `${idp}-jar`;
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <rect x="10" y="62" width="130" height="140" rx="18" />
        </clipPath>
      </defs>
      <path
        className="brew"
        clipPath={`url(#${clip})`}
        d="M8 128 q9 -9 18 0 q9 -9 18 0 q9 -9 18 0 q9 -9 18 0 q9 -9 18 0 q9 -9 18 0 q9 -9 18 0 L 142 206 L 8 206 Z"
      />
      <g clipPath={`url(#${clip})`}>
        {[
          [30, 150, -20],
          [62, 162, 15],
          [96, 148, -10],
          [120, 170, 25],
          [44, 184, 10],
          [80, 188, -25],
          [112, 194, 5],
        ].map(([x, y, r]) => (
          <g key={`${x}-${y}`} transform={`rotate(${r} ${x} ${y})`}>
            <ellipse className="bean" cx={x} cy={y} rx="8" ry="5.5" />
            <path className="bean" d={`M${x - 6} ${y} q6 -3 12 0`} />
          </g>
        ))}
      </g>
      <rect className="ln" x="10" y="62" width="130" height="140" rx="18" />
      <path className="ln" d="M24 80 C 22 96, 22 112, 24 124" />
      <rect className="fp" x="14" y="52" width="122" height="10" rx="3" />
      <rect className="ln" x="20" y="30" width="110" height="22" rx="8" />
      <path className="ln" d="M36 30 Q75 14 114 30" />
      <path className="ln" d="M114 30 L126 66 L134 72" />
    </g>
  );
}
