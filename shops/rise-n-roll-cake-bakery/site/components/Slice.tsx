import type { Flavour } from "@/content";
import { cutBand, sectorTop, sideBand, type Disc } from "@/lib/cake";

// One slice of cheesecake on a small white plate, same 3/4 view as the hero cake.
// The cut face shows biscuit base, cream body and topping in cross-section.

const D: Disc = { cx: 175, cy: 70, rx: 150, ry: 66 };
const H = 72;
const A = 165; // cut face angle (faces the viewer)
const B = 212; // back edge

type Look = {
  top: string; // top surface
  layer: string; // topping layer on the cut face
  layerDepth: number;
  body: string;
  base: string;
};

const BASE = 58;
const looks: Record<Flavour, Look> = {
  blueberry: { top: "#4e2f66", layer: "#4e2f66", layerDepth: 9, body: "#f8edd2", base: "#b98149" },
  biscoff: { top: "#b5652a", layer: "#b5652a", layerDepth: 8, body: "#eed7b0", base: "#8f562b" },
  original: { top: "#cf8f3e", layer: "#d69a47", layerDepth: 5, body: "#f8ebcb", base: "#b98149" },
  matcha: { top: "#8da35a", layer: "#6f8642", layerDepth: 6, body: "#cbd8a4", base: "#b98149" },
  klepon: { top: "#7fab5c", layer: "#7fab5c", layerDepth: 20, body: "#f8edd2", base: "#b98149" },
};

function Toppings({ flavour }: { flavour: Flavour }) {
  switch (flavour) {
    case "blueberry":
      return (
        <g>
          <ellipse cx="112" cy="62" rx="26" ry="5" fill="#6c4a8a" />
          {[[70, 60, 7], [100, 70, 6], [58, 75, 6], [90, 51, 6], [126, 64, 5]].map(([x, y, r]) => (
            <g key={`${x}`}>
              <circle cx={x} cy={y} r={r} fill="#2c1d43" />
              <circle cx={x - r * 0.35} cy={y - r * 0.35} r={r * 0.28} fill="#9c86c2" />
            </g>
          ))}
          {/* a drip of compote down the cut face */}
          <path d="M96,78 L96,97 A4.5,4.5 0 0 0 105,97 L105,77 Z" fill="#4e2f66" />
        </g>
      );
    case "biscoff":
      return (
        <g>
          {[[66, 66], [104, 69], [120, 60], [58, 56], [138, 70]].map(([x, y]) => (
            <circle key={`${x}`} cx={x} cy={y} r="2.4" fill="#7a431c" />
          ))}
          {/* half a Biscoff biscuit standing in the top */}
          <g transform="rotate(-12 86 46)">
            <rect x="66" y="30" width="40" height="27" rx="3" fill="#c47b39" />
            <rect x="71" y="35" width="30" height="17" rx="2" fill="#b06a2d" />
            <rect x="75" y="39" width="22" height="9" rx="1.5" fill="#c47b39" />
          </g>
        </g>
      );
    case "original": {
      const inner: Disc = { ...D, rx: D.rx * 0.84, ry: D.ry * 0.84 };
      return (
        <g>
          <path d={sectorTop(inner, A, B)} fill="#e8ba66" />
          <ellipse cx="104" cy="64" rx="24" ry="5" fill="#f0cb82" />
        </g>
      );
    }
    case "matcha":
      return (
        <g>
          {[[62, 60, "#b9cb8e"], [80, 70, "#6e8442"], [96, 57, "#b9cb8e"], [112, 66, "#6e8442"],
            [128, 70, "#b9cb8e"], [74, 48, "#6e8442"], [54, 74, "#b9cb8e"], [140, 66, "#b9cb8e"],
            [88, 64, "#b9cb8e"], [104, 74, "#b9cb8e"]].map(([x, y, f]) => (
            <circle key={`${x}-${y}`} cx={x as number} cy={y as number} r="1.8" fill={f as string} />
          ))}
        </g>
      );
    case "klepon":
      return (
        <g>
          {/* coconut flecks */}
          {[[62, 58, -20], [84, 66, 15], [106, 60, -35], [74, 74, 30], [124, 70, -10], [96, 50, 40], [56, 68, 10]].map(
            ([x, y, r]) => (
              <rect key={`${x}-${y}`} x={x - 3.5} y={y - 1} width="7" height="2" rx="1" fill="#fffdf5" transform={`rotate(${r} ${x} ${y})`} />
            ),
          )}
          {/* gula merah drizzle */}
          <path
            d="M50,60 C66,52 74,74 92,62 C108,52 118,72 140,64"
            fill="none"
            stroke="#6b3a1f"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path d="M120,72 L120,90 A4,4 0 0 0 128,90 L128,72 Z" fill="#6b3a1f" />
        </g>
      );
  }
}

export default function Slice({ flavour, label }: { flavour: Flavour; label: string }) {
  const l = looks[flavour];
  const layer = (y0: number, y1: number, fill: string) => (
    <>
      <path d={sideBand(D, A, 180, y0, y1)} fill={fill} />
      <path d={cutBand(D, A, y0, y1)} fill={fill} />
    </>
  );
  return (
    <svg viewBox="0 0 200 180" role="img" aria-label={label} data-flavour={flavour}>
      <ellipse cx="103" cy="170" rx="86" ry="6" fill="#3b271d" opacity="0.2" />
      <ellipse cx="103" cy="157" rx="95" ry="21" fill="#e6e1d6" />
      <ellipse cx="103" cy="152" rx="95" ry="21" fill="#ffffff" />
      {layer(0, l.layerDepth, l.layer)}
      {layer(l.layerDepth, BASE, l.body)}
      {layer(BASE, H, l.base)}
      <path d={sectorTop(D, A, B)} fill={l.top} />
      <Toppings flavour={flavour} />
    </svg>
  );
}
