import { useId, type ReactNode } from "react";
import type { CakeId } from "@/content";

// Flat SVG cakes drawn after the customer photos of their case (reference only).
// One family: viewBox 240×200, front view from slightly above, light from the top left,
// 2–3 flat tones per part, no outlines (cherry stems and the mika dome are the only strokes).
// Each cake has a back layer and a front layer, so an HTML plaque can stand between them.

export const ink = {
  cream: "#FFF8EE",
  creamShade: "#EADBC6",
  cherry: "#C8202F",
  cherryHi: "#E5483B",
  choc: "#3B2219",
  choc2: "#6A3B2A",
  green: "#B9D59B",
  greenTop: "#CFE4B6",
  greenDark: "#A2C27E",
  glaze: "#E5483B",
  glazeDark: "#C8202F",
  board: "#C9CED1",
  boardRim: "#AEB5BA",
  kakao: "#33190F",
  oranye: "#EE7B30",
  krim: "#F6E8D5",
};

type Geo = { cx: number; rx: number; ry: number; top: number; bot: number };
const FULL: Geo = { cx: 120, rx: 92, ry: 22, top: 76, bot: 160 };
const SMALL: Geo = { cx: 120, rx: 66, ry: 16, top: 104, bot: 150 };

const side = (g: Geo) =>
  `M${g.cx - g.rx} ${g.top} V${g.bot} A${g.rx} ${g.ry} 0 0 0 ${g.cx + g.rx} ${g.bot} V${g.top} Z`;
const edgeY = (g: Geo, x: number) => {
  const t = (x - g.cx) / g.rx;
  return g.top + g.ry * Math.sqrt(Math.max(0, 1 - t * t));
};
const r1 = (n: number) => Math.round(n * 10) / 10;

function Board() {
  return (
    <>
      <ellipse cx="120" cy="177" rx="114" ry="21" fill={ink.boardRim} />
      <ellipse cx="120" cy="173" rx="114" ry="21" fill={ink.board} />
    </>
  );
}

// Flat right-hand shade on the side of the cake (light comes from the top left).
function SideShade({ g, id, opacity = 0.16 }: { g: Geo; id: string; opacity?: number }) {
  return (
    <>
      <clipPath id={id}>
        <path d={side(g)} />
      </clipPath>
      <rect
        x={g.cx + g.rx * 0.42}
        y={g.top - 30}
        width={g.rx}
        height={g.bot - g.top + 60}
        fill="#000"
        opacity={opacity}
        clipPath={`url(#${id})`}
      />
    </>
  );
}

function Rosette({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="0" cy="0" rx="14" ry="7" fill={ink.creamShade} />
      <ellipse cx="-1.5" cy="-1.6" rx="12" ry="5.8" fill={ink.cream} />
      <ellipse cx="0.5" cy="-6" rx="10" ry="5" fill={ink.creamShade} />
      <ellipse cx="-1" cy="-7.2" rx="8.6" ry="4.2" fill={ink.cream} />
      <ellipse cx="0" cy="-11" rx="5" ry="3.2" fill={ink.cream} />
    </g>
  );
}

// stem: 1 / -1 rise to the right / left; "r" / "l" lie on the cream so they never cross a plaque.
type Stem = 1 | -1 | "r" | "l";
const STEMS: Record<string, string> = {
  "1": "M0 -5 C 2 -14 6 -20 15 -24",
  "-1": "M0 -5 C -2 -14 -6 -20 -15 -24",
  r: "M3 -5 C 8 -9 14 -9 20 -6",
  l: "M-3 -5 C -8 -9 -14 -9 -20 -6",
};

function Cherry({ x, y, stem = 1 }: { x: number; y: number; stem?: Stem }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={STEMS[String(stem)]} stroke={ink.choc2} strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <circle cx="0" cy="0" r="7.2" fill={ink.cherry} />
      <circle cx="-2.6" cy="-2.6" r="2.3" fill={ink.cherryHi} />
    </g>
  );
}

// Drips hang from the front edge of the top: [x, length].
function Drips({ g, color, drips }: { g: Geo; color: string; drips: [number, number][] }) {
  return (
    <>
      <path
        d={`M${g.cx - g.rx} ${g.top} A${g.rx} ${g.ry} 0 0 0 ${g.cx + g.rx} ${g.top} V${g.top + 6} A${g.rx} ${g.ry} 0 0 1 ${g.cx - g.rx} ${g.top + 6} Z`}
        fill={color}
      />
      {drips.map(([x, len]) => {
        const y0 = r1(edgeY(g, x) + 2);
        const w = 7;
        return (
          <path
            key={x}
            d={`M${x - w / 2} ${y0} V${r1(y0 + len)} A${w / 2} ${w / 2} 0 0 0 ${x + w / 2} ${r1(y0 + len)} V${y0} Z`}
            fill={color}
          />
        );
      })}
    </>
  );
}

function ChocFan({ px, py, r }: { px: number; py: number; r: number }) {
  const n = 7;
  const a0 = (222 * Math.PI) / 180;
  const a1 = (338 * Math.PI) / 180;
  const pt = (a: number) => `${r1(px + r * Math.cos(a))} ${r1(py + r * Math.sin(a))}`;
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const a = a0 + ((a1 - a0) * i) / n;
        const b = a0 + ((a1 - a0) * (i + 1)) / n;
        return (
          <path
            key={i}
            d={`M${px} ${py} L${pt(a)} A${r} ${r} 0 0 1 ${pt(b)} Z`}
            fill={i % 2 ? ink.choc : ink.choc2}
          />
        );
      })}
    </g>
  );
}

// ---------- the four cakes ----------

function BlackForest({ id, layer }: { id: string; layer: "back" | "front" }) {
  const g = FULL;
  if (layer === "front") {
    return (
      <>
        <Rosette x={54} y={72} />
        <Cherry x={54} y={57} stem={-1} />
        <Rosette x={186} y={72} />
        <Cherry x={186} y={57} />
        <Rosette x={74} y={89} />
        <Cherry x={74} y={74} stem={-1} />
        <Rosette x={166} y={89} />
        <Cherry x={166} y={74} />
        <Rosette x={120} y={93} />
        <Cherry x={120} y={78} stem="r" />
      </>
    );
  }
  return (
    <>
      <defs>
        <pattern id={`${id}-sv`} width="44" height="34" patternUnits="userSpaceOnUse">
          <rect width="44" height="34" fill={ink.choc} />
          <rect x="3" y="4" width="7" height="2.3" rx="1.15" fill={ink.choc2} transform="rotate(-25 6.5 5.15)" />
          <rect x="14" y="1" width="5" height="2.3" rx="1.15" fill={ink.choc2} transform="rotate(30 16.5 2.15)" />
          <rect x="24" y="6" width="8" height="2.3" rx="1.15" fill={ink.choc2} transform="rotate(10 28 7.15)" />
          <rect x="36" y="3" width="6" height="2.3" rx="1.15" fill={ink.choc2} transform="rotate(-40 39 4.15)" />
          <rect x="6" y="14" width="6" height="2.3" rx="1.15" fill={ink.choc2} transform="rotate(50 9 15.15)" />
          <rect x="17" y="12" width="9" height="2.3" rx="1.15" fill={ink.choc2} transform="rotate(-10 21.5 13.15)" />
          <rect x="30" y="15" width="6" height="2.3" rx="1.15" fill={ink.choc2} transform="rotate(35 33 16.15)" />
          <rect x="40" y="12" width="5" height="2.3" rx="1.15" fill={ink.choc2} transform="rotate(-60 42.5 13.15)" />
          <rect x="2" y="25" width="8" height="2.3" rx="1.15" fill={ink.choc2} transform="rotate(15 6 26.15)" />
          <rect x="13" y="23" width="5" height="2.3" rx="1.15" fill={ink.choc2} transform="rotate(-35 15.5 24.15)" />
          <rect x="22" y="27" width="7" height="2.3" rx="1.15" fill={ink.choc2} transform="rotate(40 25.5 28.15)" />
          <rect x="33" y="24" width="8" height="2.3" rx="1.15" fill={ink.choc2} transform="rotate(-15 37 25.15)" />
          <rect x="41" y="29" width="4" height="2.3" rx="1.15" fill={ink.choc2} transform="rotate(70 43 30.15)" />
          <rect x="9" y="31" width="5" height="2.3" rx="1.15" fill={ink.choc2} transform="rotate(-5 11.5 32.15)" />
          <circle cx="11" cy="8" r="0.9" fill={ink.cream} opacity="0.85" />
          <circle cx="31" cy="21" r="0.9" fill={ink.cream} opacity="0.85" />
          <circle cx="27" cy="1.5" r="0.9" fill={ink.cream} opacity="0.85" />
        </pattern>
        <pattern id={`${id}-st`} width="36" height="22" patternUnits="userSpaceOnUse">
          <rect width="36" height="22" fill={ink.choc2} />
          <rect x="2" y="2" width="7" height="2.3" rx="1.15" fill={ink.choc} transform="rotate(-18 5.5 3.15)" />
          <rect x="13" y="6" width="6" height="2.3" rx="1.15" fill={ink.choc} transform="rotate(24 16 7.15)" />
          <rect x="24" y="3" width="7" height="2.3" rx="1.15" fill={ink.choc} transform="rotate(-8 27.5 4.15)" />
          <rect x="31" y="11" width="5" height="2.3" rx="1.15" fill={ink.choc} transform="rotate(50 33.5 12.15)" />
          <rect x="5" y="12" width="5" height="2.3" rx="1.15" fill={ink.choc} transform="rotate(40 7.5 13.15)" />
          <rect x="19" y="14" width="8" height="2.3" rx="1.15" fill={ink.choc} transform="rotate(-30 23 15.15)" />
          <rect x="30" y="18" width="5" height="2.3" rx="1.15" fill={ink.choc} transform="rotate(12 32.5 19.15)" />
        </pattern>
      </defs>
      <Board />
      <path d={side(g)} fill={`url(#${id}-sv)`} />
      <SideShade g={g} id={`${id}-cl`} opacity={0.22} />
      <ellipse cx={g.cx} cy={g.top} rx={g.rx} ry={g.ry} fill={`url(#${id}-st)`} />
    </>
  );
}

function ChocolateDrip({ id, layer }: { id: string; layer: "back" | "front" }) {
  const g = FULL;
  if (layer === "front") {
    return (
      <>
        <g transform="translate(188 62) rotate(8)">
          <ellipse cx="0" cy="0" rx="13" ry="15" fill={ink.choc2} />
          <ellipse cx="2" cy="1" rx="8" ry="9.5" fill={ink.choc} />
        </g>
        <rect x="44" y="50" width="16" height="20" rx="2" fill={ink.choc} transform="rotate(-14 52 60)" />
        <Rosette x={70} y={88} s={0.85} />
        <Cherry x={70} y={75} stem={-1} />
        <Rosette x={94} y={95} s={0.85} />
        <Cherry x={94} y={82} stem="l" />
        <Rosette x={170} y={90} s={0.85} />
        <Cherry x={170} y={77} />
      </>
    );
  }
  return (
    <>
      <Board />
      <path d={side(g)} fill={ink.cream} />
      <SideShade g={g} id={`${id}-cl`} opacity={0.08} />
      <Drips
        g={g}
        color={ink.choc}
        drips={[
          [36, 22], [50, 38], [64, 18], [78, 46], [93, 26], [107, 52], [121, 30],
          [135, 44], [149, 20], [163, 40], [177, 28], [191, 34], [204, 16],
        ]}
      />
      <ellipse cx={g.cx} cy={g.top} rx={g.rx} ry={g.ry} fill={ink.choc} />
      <ellipse cx={g.cx - 10} cy={g.top - 3} rx={g.rx - 30} ry={g.ry - 9} fill={ink.choc2} opacity="0.55" />
    </>
  );
}

function GreenTea({ id, layer }: { id: string; layer: "back" | "front" }) {
  const g = FULL;
  if (layer === "front") {
    return (
      <>
        <ChocFan px={198} py={80} r={34} />
        <Rosette x={100} y={92} s={0.8} />
        <Cherry x={100} y={80} stem="l" />
        <Cherry x={118} y={88} stem="r" />
        <Rosette x={140} y={92} s={0.8} />
        <Cherry x={140} y={80} stem="r" />
        <Cherry x={56} y={74} stem={-1} />
      </>
    );
  }
  const combs = [0, 1, 2, 3, 4, 5].map((i) => g.top + 14 + i * 12.5);
  return (
    <>
      <Board />
      <path d={side(g)} fill={ink.green} />
      {combs.map((y) => (
        <path
          key={y}
          d={`M${g.cx - g.rx} ${y} A${g.rx} ${g.ry} 0 0 0 ${g.cx + g.rx} ${y} L${g.cx + g.rx} ${y + 2.6} A${g.rx} ${g.ry} 0 0 1 ${g.cx - g.rx} ${y + 2.6} Z`}
          fill={ink.greenDark}
        />
      ))}
      <SideShade g={g} id={`${id}-cl`} opacity={0.1} />
      <ellipse cx={g.cx} cy={g.top} rx={g.rx} ry={g.ry} fill={ink.greenTop} />
      <ellipse cx={g.cx} cy={g.top + 1} rx={g.rx - 14} ry={g.ry - 4} fill={ink.greenDark} />
      <ellipse cx={g.cx} cy={g.top + 1} rx={g.rx - 17} ry={g.ry - 5.5} fill={ink.greenTop} />
      <ellipse cx={g.cx} cy={g.top + 1.5} rx={g.rx - 42} ry={g.ry - 11} fill={ink.greenDark} />
      <ellipse cx={g.cx} cy={g.top + 1.5} rx={g.rx - 45} ry={g.ry - 12.4} fill={ink.greenTop} />
    </>
  );
}

function StrawberryCream({ id, layer, dome }: { id: string; layer: "back" | "front"; dome: boolean }) {
  const g = dome ? SMALL : FULL;
  if (layer === "front") {
    if (dome) {
      const ribs = [44, 60, 76, 92, 108, 124, 140, 156, 172, 188];
      return (
        <>
          <Rosette x={120} y={106} s={1.25} />
          <rect x="128" y="88" width="11" height="14" rx="2" fill={ink.choc} transform="rotate(16 133 95)" />
          {/* the clear mika dome */}
          <path
            d="M30 160 V112 C30 36 210 36 210 112 V160"
            fill="#FFFFFF"
            fillOpacity="0.2"
            stroke="#FFFFFF"
            strokeOpacity="0.95"
            strokeWidth="2.4"
          />
          <ellipse cx="120" cy="160" rx="90" ry="20" fill="none" stroke="#FFFFFF" strokeOpacity="0.8" strokeWidth="2" />
          {ribs.map((x) => (
            <path key={x} d={`M${x} ${r1(edgeY({ cx: 120, rx: 90, ry: 20, top: 160, bot: 160 }, x) - 18)} v14`} stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="1.6" strokeLinecap="round" />
          ))}
          <path d="M46 146 V114 C46 84 60 64 82 54" stroke="#FFFFFF" strokeOpacity="0.85" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <circle cx="166" cy="70" r="10.5" fill={ink.oranye} />
          <circle cx="166" cy="70" r="5" fill="none" stroke={ink.krim} strokeWidth="1.6" />
        </>
      );
    }
    return (
      <>
        <Rosette x={58} y={74} />
        <rect x="50" y="52" width="10" height="13" rx="2" fill={ink.choc} transform="rotate(-12 55 58)" />
        <Rosette x={180} y={76} />
        <rect x="182" y="54" width="10" height="13" rx="2" fill={ink.choc} transform="rotate(14 187 60)" />
        <Rosette x={120} y={94} s={0.9} />
      </>
    );
  }
  return (
    <>
      {dome ? (
        <>
          <ellipse cx="120" cy="164" rx="94" ry="21" fill={ink.kakao} />
          <ellipse cx="120" cy="160" rx="94" ry="21" fill={ink.choc} />
        </>
      ) : (
        <Board />
      )}
      <path d={side(g)} fill={ink.cream} />
      <SideShade g={g} id={`${id}-cl`} opacity={0.08} />
      <Drips
        g={g}
        color={ink.glaze}
        drips={
          dome
            ? [[60, 16], [72, 30], [84, 14], [96, 34], [108, 20], [120, 38], [132, 18], [144, 30], [156, 14], [168, 26], [180, 12]]
            : [[36, 20], [50, 36], [64, 16], [78, 44], [93, 24], [107, 50], [121, 28], [135, 42], [149, 18], [163, 38], [177, 26], [191, 32], [204, 14]]
        }
      />
      <ellipse cx={g.cx} cy={g.top} rx={g.rx} ry={g.ry} fill={ink.glaze} />
      <ellipse cx={g.cx - 8} cy={g.top - 2} rx={g.rx * 0.6} ry={g.ry * 0.45} fill={ink.cherryHi} opacity="0.6" />
      <ellipse cx={g.cx + 6} cy={g.top + 2} rx={g.rx * 0.75} ry={g.ry * 0.6} fill={ink.glazeDark} opacity="0.35" />
    </>
  );
}

function Layer({ flavour, id, layer, dome }: { flavour: CakeId; id: string; layer: "back" | "front"; dome: boolean }) {
  switch (flavour) {
    case "blackForest":
      return <BlackForest id={id} layer={layer} />;
    case "chocolateDrip":
      return <ChocolateDrip id={id} layer={layer} />;
    case "greenTea":
      return <GreenTea id={id} layer={layer} />;
    case "strawberryCream":
      return <StrawberryCream id={id} layer={layer} dome={dome} />;
  }
}

export default function Cake({
  flavour,
  label,
  plaque,
  dome = false,
  hidden = false,
  className = "",
  mockup = true,
}: {
  flavour: CakeId;
  label: string;
  /** undefined: no plaque. "blank": the blank white plaque from the photos. Node: plaque content. */
  plaque?: "blank" | ReactNode;
  dome?: boolean;
  hidden?: boolean;
  className?: string;
  mockup?: boolean;
}) {
  const id = "c" + useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <div
      className={`cake ${className}`}
      {...(hidden ? { "aria-hidden": true } : { role: "img", "aria-label": label })}
      {...(mockup ? { "data-mockup": "" } : {})}
    >
      <svg viewBox="0 0 240 200" aria-hidden="true" focusable="false">
        <Layer flavour={flavour} id={id} layer="back" dome={dome} />
      </svg>
      {plaque === "blank" ? (
        <div className="plaque plaque-blank" />
      ) : plaque ? (
        <div className="plaque">{plaque}</div>
      ) : null}
      <svg viewBox="0 0 240 200" aria-hidden="true" focusable="false">
        <Layer flavour={flavour} id={id} layer="front" dome={dome} />
      </svg>
    </div>
  );
}
