import { mock } from "@/lib/mockup";

// Flat 4:5 illustration standing in for a manual-brew photo [MOCKUP]: a white V60 cone over
// the shop's faceted glass on a pressed-glass saucer, pine panelling behind, checker table in front.
export default function ManualBrewArt({ label }: { label: string }) {
  const planks = [52, 118, 184, 250, 316, 382];
  const cols = Array.from({ length: 8 }, (_, i) => i);
  const rows = [0, 1, 2];
  const dark = "var(--color-garasi)";
  const light = "var(--color-batu)";

  return (
    <svg
      viewBox="0 0 400 500"
      role="img"
      aria-label={label}
      className="figure-img"
      style={{ background: "var(--color-pinus)" }}
      {...mock(true)}
    >
      {/* pine panelling */}
      <rect width="400" height="336" style={{ fill: "var(--color-pinus)" }} />
      {planks.map((x) => (
        <rect key={x} x={x} y="0" width="3" height="336" style={{ fill: "color-mix(in oklch, var(--color-pinus) 78%, var(--color-garasi))" }} />
      ))}

      {/* table: racing-style border, then the checker top */}
      <rect y="336" width="400" height="14" style={{ fill: "var(--color-tembok)" }} />
      {rows.map((r) =>
        cols.map((c) => (
          <rect
            key={`${r}-${c}`}
            x={c * 50}
            y={350 + r * 50}
            width="50"
            height="50"
            style={{ fill: (r + c) % 2 === 0 ? dark : light }}
          />
        )),
      )}

      {/* saucer shadow and pressed-glass saucer */}
      <ellipse cx="200" cy="404" rx="124" ry="22" style={{ fill: "rgb(23 22 20 / 0.35)" }} />
      <ellipse cx="200" cy="396" rx="122" ry="24" style={{ fill: "rgb(255 255 255 / 0.42)", stroke: "rgb(255 255 255 / 0.9)" }} strokeWidth="2.5" />
      <ellipse cx="200" cy="394" rx="92" ry="16" style={{ fill: "none", stroke: "rgb(255 255 255 / 0.75)" }} strokeWidth="2" strokeDasharray="2 5" strokeLinecap="round" />

      {/* faceted glass with coffee */}
      <path d="M146 236 H254 L243 392 H157 Z" style={{ fill: "rgb(255 255 255 / 0.28)" }} />
      <path d="M150 292 H250 L243 388 H157 Z" style={{ fill: "#2b1a10" }} />
      <path d="M150 292 H250 L249.4 300 H150.6 Z" style={{ fill: "#7a4a24" }} />
      <path d="M146 236 H254 L243 392 H157 Z" style={{ fill: "none", stroke: "rgb(255 255 255 / 0.9)" }} strokeWidth="3" strokeLinejoin="round" />
      {[172, 189, 211, 228].map((x) => (
        <path key={x} d={`M${x} 318 L${x + (x < 200 ? 2 : -2)} 390`} style={{ stroke: "rgb(255 255 255 / 0.45)" }} strokeWidth="2.5" />
      ))}
      <rect x="153" y="246" width="5" height="120" rx="2.5" style={{ fill: "rgb(255 255 255 / 0.4)" }} />

      {/* drip stream */}
      <rect x="197.5" y="232" width="5" height="62" rx="2.5" style={{ fill: "#3a2416" }} />

      {/* V60 cone, base plate and handle */}
      <path d="M288 140 C330 140 336 196 284 208" style={{ fill: "none", stroke: "#ffffff" }} strokeWidth="13" strokeLinecap="round" />
      <path d="M104 124 H296 L230 222 H170 Z" style={{ fill: "#ffffff" }} />
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M${132 + i * 34} 134 L${178 + i * 12} 214`}
          style={{ stroke: "#e4e2db" }}
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      <rect x="96" y="112" width="208" height="16" rx="8" style={{ fill: "#ffffff" }} />
      <rect x="128" y="220" width="144" height="13" rx="6.5" style={{ fill: "#ffffff" }} />
      <rect x="128" y="229" width="144" height="4" rx="2" style={{ fill: "#d9d6cc" }} />
    </svg>
  );
}
