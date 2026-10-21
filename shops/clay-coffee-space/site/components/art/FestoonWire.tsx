// Clay's festoon string lights: a bingkai wire hung in swags, bulbs evenly spaced along it.
// Two drawings toggled by width (globals.css): phone 390x90 with 9 bulbs, desktop 1440x130 with 15.
// `animated` marks the hero wire for "Lampu menyala". (The still divider wire in Kata mereka
// was cut in the remove-one-thing pass: the scenes already carry the lights.)

type Spec = { w: number; h: number; swags: number; perSwag: number; y0: number; sag: number };

const PHONE: Spec = { w: 390, h: 90, swags: 3, perSwag: 3, y0: 10, sag: 38 };
const DESK: Spec = { w: 1440, h: 130, swags: 5, perSwag: 3, y0: 14, sag: 56 };

const DROP = 6; // px drop line from wire to bulb
const RX = 2.5;
const RY = 3.5;
const GLOW = 18;

function layout(spec: Spec) {
  const sw = spec.w / spec.swags;
  let d = `M0 ${spec.y0}`;
  const bulbs: { x: number; y: number }[] = [];
  for (let i = 0; i < spec.swags; i++) {
    const x0 = i * sw;
    d += ` Q${x0 + sw / 2} ${spec.y0 + 2 * spec.sag} ${x0 + sw} ${spec.y0}`;
    for (let k = 0; k < spec.perSwag; k++) {
      // t = 1/6, 1/2, 5/6 keeps the spacing even across swag joins
      const t = (2 * k + 1) / (2 * spec.perSwag);
      bulbs.push({ x: x0 + sw * t, y: spec.y0 + 4 * spec.sag * t * (1 - t) });
    }
  }
  return { d, bulbs };
}

function Wire({ spec, id, className }: { spec: Spec; id: string; className: string }) {
  const { d, bulbs } = layout(spec);
  const r = (n: number) => Math.round(n * 10) / 10;
  return (
    <svg
      className={className}
      viewBox={`0 0 ${spec.w} ${spec.h}`}
      width={spec.w}
      height={spec.h}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={id}>
          <stop offset="0" style={{ stopColor: "var(--color-lampu)", stopOpacity: 0.55 }} />
          <stop offset="0.45" style={{ stopColor: "var(--color-lampu)", stopOpacity: 0.22 }} />
          <stop offset="1" style={{ stopColor: "var(--color-lampu)", stopOpacity: 0 }} />
        </radialGradient>
      </defs>
      <path d={d} className="s-wire" />
      {bulbs.map((b, i) => {
        const cy = r(b.y + DROP + RY);
        return (
          <g key={i}>
            <path d={`M${r(b.x)} ${r(b.y)}V${r(b.y + DROP)}`} className="s-wire" />
            <ellipse cx={r(b.x)} cy={cy} rx={RX} ry={RY} className="f-unlit" />
            <g className="bulb-glow">
              <circle cx={r(b.x)} cy={cy} r={GLOW} fill={`url(#${id})`} />
              <ellipse cx={r(b.x)} cy={cy} rx={RX} ry={RY} className="f-lampu" />
            </g>
          </g>
        );
      })}
    </svg>
  );
}

export default function FestoonWire({
  animated = false,
  idPrefix,
  className = "",
}: {
  animated?: boolean;
  idPrefix: string;
  className?: string;
}) {
  return (
    <div className={`festoon ${className}`} {...(animated ? { "data-festoon": "hero" } : {})}>
      <Wire spec={PHONE} id={`${idPrefix}-glow-p`} className="festoon-phone" />
      <Wire spec={DESK} id={`${idPrefix}-glow-d`} className="festoon-desk" />
    </div>
  );
}
