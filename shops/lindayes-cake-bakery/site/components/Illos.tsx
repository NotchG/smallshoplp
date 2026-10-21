// Flat product illustrations (docs/design-brief.md §6). viewBox 240×192, every object stands
// on the shared baseline y=184 so it sits on the shelf line drawn under the SVG. Fills come from
// the six tokens and their derived tones only; one highlight (glass 60%) and one flat shadow
// (fascia 12%) per object. No outlines, no gradients, no faces. The logo is never redrawn.
import type { ReactNode } from "react";

type IlloProps = { label: string; className?: string };

// Crops of the 240×192 drawing area: the bottom edge (y=192) always stays just under the
// baseline, so every object still stands on the shelf line below the SVG.
export const VIEW = {
  case: "0 56 240 136",
  gift: "36 20 168 172",
  coffee: "0 60 240 132",
  box: "0 48 240 144",
} as const;

function Illo({
  label,
  className = "",
  viewBox = "0 0 240 192",
  children,
}: IlloProps & { viewBox?: string; children: ReactNode }) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label={label}
      className={`block h-auto w-full ${className}`}
    >
      {children}
    </svg>
  );
}

const Shadow = ({ cx = 120, rx = 92 }: { cx?: number; rx?: number }) => (
  <ellipse cx={cx} cy={185} rx={rx} ry={4} className="fill-fascia" fillOpacity={0.12} />
);
const HI = { className: "fill-glass", fillOpacity: 0.6 } as const;

/* ---------- Etalase: Kue ---------- */
export function IlloKue({ label, className }: IlloProps) {
  const petals = [0, 72, 144, 216, 288].map((a) => {
    const r = (a * Math.PI) / 180;
    return { x: +(88 + Math.cos(r) * 7).toFixed(1), y: +(117 + Math.sin(r) * 7).toFixed(1) };
  });
  return (
    <Illo label={label} className={className} viewBox={VIEW.case}>
      <Shadow />
      {/* chocolate dome cake on its board */}
      <rect x="30" y="178" width="116" height="6" rx="3" className="fill-wood" />
      <path d="M36 178A52 58 0 0 1 140 178Z" className="fill-frame" />
      <path d="M36 178Q88 168 140 178Z" className="fill-fascia" fillOpacity={0.35} />
      <ellipse cx="62" cy="146" rx="5.5" ry="15" transform="rotate(32 62 146)" {...HI} />
      {petals.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="7" className="fill-blush" />
      ))}
      <circle cx="88" cy="117" r="4" className="fill-awning" />
      {/* cupcake */}
      <path d="M156 146H218L209 184H165Z" className="fill-awning" />
      <path d="M173 146h3.5l-1.5 38h-3.5zM185.5 146h3.5v38h-3.5zM198 146h3.5l1 38h-3.5z" className="fill-frame" fillOpacity={0.45} />
      <ellipse cx="187" cy="145" rx="35" ry="10" className="fill-fascia" fillOpacity={0.1} />
      <ellipse cx="187" cy="142" rx="35" ry="10" className="fill-blush" />
      <ellipse cx="187" cy="134" rx="27" ry="9" className="fill-fascia" fillOpacity={0.1} />
      <ellipse cx="187" cy="131" rx="27" ry="9" className="fill-blush" />
      <ellipse cx="188" cy="123" rx="18" ry="8" className="fill-fascia" fillOpacity={0.1} />
      <ellipse cx="188" cy="120" rx="18" ry="8" className="fill-blush" />
      <circle cx="190" cy="111" r="6.5" className="fill-blush" />
      <ellipse cx="177" cy="129" rx="6" ry="2.6" {...HI} />
    </Illo>
  );
}

/* ---------- Etalase: Brownies ---------- */
function Slab({ x, y, w, h = 26, rot = 0 }: { x: number; y: number; w: number; h?: number; rot?: number }) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return (
    <g transform={rot ? `rotate(${rot} ${cx} ${cy})` : undefined}>
      <rect x={x} y={y} width={w} height={h} rx="3" className="fill-fascia" />
      <rect x={x} y={y} width={w} height="7" rx="3" className="fill-frame" />
      <circle cx={x + w * 0.22} cy={y + 16} r="2" className="fill-frame" />
      <circle cx={x + w * 0.55} cy={y + 19} r="2.5" className="fill-frame" />
      <circle cx={x + w * 0.8} cy={y + 15} r="1.8" className="fill-frame" />
    </g>
  );
}

export function IlloBrownies({ label, className }: IlloProps) {
  return (
    <Illo label={label} className={className} viewBox={VIEW.case}>
      <Shadow />
      <Slab x={30} y={158} w={96} />
      <Slab x={40} y={131} w={86} rot={-2.5} />
      <Slab x={34} y={104} w={88} rot={2} />
      <rect x="44" y="107" width="34" height="3" rx="1.5" transform="rotate(2 78 117)" {...HI} />
      {/* brownie bites with a dollop of cream */}
      <rect x="142" y="150" width="38" height="34" rx="7" className="fill-fascia" />
      <rect x="142" y="150" width="38" height="10" rx="5" className="fill-frame" />
      <ellipse cx="161" cy="148" rx="11" ry="5.5" className="fill-blush" />
      <circle cx="161" cy="142" r="5.5" className="fill-blush" />
      <rect x="188" y="156" width="34" height="28" rx="7" className="fill-fascia" />
      <rect x="188" y="156" width="34" height="9" rx="4.5" className="fill-frame" />
      <ellipse cx="205" cy="154" rx="10" ry="5" className="fill-blush" />
      <circle cx="205" cy="148.5" r="4.5" className="fill-blush" />
    </Illo>
  );
}

/* ---------- Etalase: Roti (roti sobek, six buns) ---------- */
export function IlloRoti({ label, className }: IlloProps) {
  return (
    <Illo label={label} className={className} viewBox={VIEW.case}>
      <Shadow />
      <circle cx="84" cy="126" r="25" className="fill-wood" />
      <circle cx="120" cy="119" r="27" className="fill-wood" />
      <circle cx="156" cy="126" r="25" className="fill-wood" />
      <rect x="34" y="140" width="172" height="44" rx="14" className="fill-sign" />
      <circle cx="63" cy="146" r="29" className="fill-sign" />
      <circle cx="120" cy="141" r="31" className="fill-sign" />
      <circle cx="177" cy="146" r="29" className="fill-sign" />
      <rect x="90.5" y="146" width="2.5" height="38" className="fill-wood" fillOpacity={0.75} />
      <rect x="147" y="146" width="2.5" height="38" className="fill-wood" fillOpacity={0.75} />
      <rect x="34" y="176" width="172" height="8" rx="4" className="fill-wood" fillOpacity={0.35} />
      <ellipse cx="106" cy="123" rx="11" ry="4.5" transform="rotate(-24 106 123)" {...HI} />
    </Illo>
  );
}

/* ---------- Etalase: Kue kering (round toples of nastar) ---------- */
function Ketupat({ cx, cy, s }: { cx: number; cy: number; s: number }) {
  const h = s / 2;
  return (
    <g>
      <path d={`M${cx} ${cy - s}L${cx + s} ${cy}L${cx} ${cy + s}L${cx - s} ${cy}Z`} className="fill-blush" />
      <path
        d={`M${cx - h} ${cy - h}L${cx + h} ${cy + h}M${cx + h} ${cy - h}L${cx - h} ${cy + h}`}
        className="stroke-teal"
        strokeWidth={s / 6}
      />
    </g>
  );
}

function Nastar({ x, y, r = 9 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} className="fill-sign" />
      <circle cx={x} cy={y - r * 0.35} r={r * 0.22} className="fill-frame" />
    </g>
  );
}

export function IlloToples({ label, className }: IlloProps) {
  const rows = [98, 116, 134, 152, 170];
  return (
    <Illo label={label} className={className} viewBox={VIEW.case}>
      <Shadow rx={70} />
      <rect x="62" y="84" width="116" height="100" rx="12" className="fill-fascia" fillOpacity={0.08} />
      {rows.map((y, ri) =>
        (ri % 2 ? [83, 103, 123, 143, 163] : [73, 93, 113, 133, 153, 167]).map((x) => (
          <Nastar key={`${x}-${y}`} x={x} y={y} r={ri % 2 ? 9 : 8.5} />
        )),
      )}
      <rect x="62" y="176" width="116" height="8" rx="4" className="fill-fascia" fillOpacity={0.1} />
      <rect x="86" y="112" width="68" height="46" rx="7" className="fill-teal" />
      <Ketupat cx={120} cy={135} s={15} />
      <rect x="56" y="70" width="128" height="17" rx="6" className="fill-awning" />
      <rect x="68" y="92" width="7" height="80" rx="3.5" {...HI} />
    </Illo>
  );
}

/* ---------- Hampers: menara toples ---------- */
export function IlloToplesTower({ label, className }: IlloProps) {
  return (
    <Illo label={label} className={className} viewBox={VIEW.gift}>
      <Shadow rx={66} />
      {/* three clear jars */}
      {[148, 112, 76].map((y) => (
        <rect key={y} x="72" y={y} width="96" height="36" rx="6" className="fill-glass" fillOpacity={0.55} />
      ))}
      {/* bottom: nastar */}
      {[86, 104, 122, 140, 158].map((x) => (
        <Nastar key={`a${x}`} x={x} y={174} r={7.5} />
      ))}
      {[95, 113, 131, 149].map((x) => (
        <Nastar key={`b${x}`} x={x} y={160} r={7.5} />
      ))}
      {/* middle: kastengel */}
      {[118, 128, 138].map((y, ri) =>
        [80, 104, 128].map((x) => (
          <rect
            key={`${x}-${y}`}
            x={x + (ri % 2 ? 10 : 0)}
            y={y}
            width="22"
            height="7"
            rx="3.5"
            className={ri % 2 ? "fill-wood" : "fill-sign"}
          />
        )),
      )}
      {/* top: chocolate cookies */}
      {[84, 102, 120, 138, 156].map((x) => (
        <circle key={`c${x}`} cx={x} cy={102} r="8" className="fill-frame" />
      ))}
      {[93, 111, 129, 147].map((x) => (
        <circle key={`d${x}`} cx={x} cy={87} r="8" className="fill-frame" />
      ))}
      {/* lids between the jars */}
      {[144, 108, 72].map((y) => (
        <rect key={`l${y}`} x="70" y={y} width="100" height="6" rx="3" className="fill-fascia" fillOpacity={0.16} />
      ))}
      {/* shrink-wrap gathered at the top, tied with a ribbon */}
      <path d="M78 74C88 62 100 56 112 51H128C140 56 152 62 162 74Z" className="fill-glass" fillOpacity={0.7} />
      <path d="M113 50C103 37 109 29 120 39C131 29 137 37 127 50Z" className="fill-glass" fillOpacity={0.7} />
      <rect x="109" y="46" width="22" height="7" rx="3.5" className="fill-awning" />
      {/* round label with a ketupat */}
      <circle cx="120" cy="94" r="13" className="fill-teal" />
      <Ketupat cx={120} cy={94} s={8} />
      <path d="M84 180H96L152 80H140Z" {...HI} />
    </Illo>
  );
}

/* ---------- Hampers: rattan basket ---------- */
export function IlloHamper({ label, className }: IlloProps) {
  const band = (y: number) => {
    const inset = ((y - 122) * 14) / 62;
    return { x: 56 + inset, w: 128 - inset * 2 };
  };
  return (
    <Illo label={label} className={className} viewBox={VIEW.gift}>
      <Shadow rx={74} />
      <path d="M68 120C68 38 172 38 172 120" fill="none" className="stroke-wood" strokeWidth={8} strokeLinecap="round" />
      {/* what's inside */}
      <rect x="74" y="94" width="38" height="28" rx="4" className="fill-glass" fillOpacity={0.75} />
      <rect x="72" y="89" width="42" height="9" rx="3" className="fill-awning" />
      <rect x="116" y="82" width="40" height="40" rx="3" className="fill-teal" />
      <rect x="133" y="82" width="6" height="40" className="fill-blush" />
      <ellipse cx="165" cy="106" rx="15" ry="12" className="fill-sign" />
      {/* basket */}
      <path d="M56 122H184L170 184H70Z" className="fill-wood" />
      {[138, 154, 170].map((y) => {
        const b = band(y);
        return <rect key={y} x={b.x} y={y} width={b.w} height="4" className="fill-frame" fillOpacity={0.45} />;
      })}
      {[92, 120, 148].map((x) => (
        <rect key={x} x={x - 1.5} y="126" width="3" height="56" className="fill-frame" fillOpacity={0.3} />
      ))}
      <rect x="50" y="113" width="140" height="13" rx="6.5" className="fill-frame" />
      <rect x="60" y="116" width="40" height="3" rx="1.5" {...HI} />
      {/* blush bow */}
      <path d="M120 121C98 104 90 132 120 125Z" className="fill-blush" />
      <path d="M120 121C142 104 150 132 120 125Z" className="fill-blush" />
      <path d="M117 124L109 145L115.5 142.5ZM123 124L131 145L124.5 142.5Z" className="fill-blush" />
      <circle cx="120" cy="122.5" r="5" className="fill-blush" />
    </Illo>
  );
}

/* ---------- Hampers: white handled gift bag ---------- */
export function IlloGiftBag({ label, className }: IlloProps) {
  const petals = [0, 72, 144, 216, 288].map((a) => {
    const r = ((a - 90) * Math.PI) / 180;
    return { x: +(126 + Math.cos(r) * 7).toFixed(1), y: +(140 + Math.sin(r) * 7).toFixed(1) };
  });
  return (
    <Illo label={label} className={className} viewBox={VIEW.gift}>
      <Shadow rx={62} />
      <path d="M106 96C106 56 152 56 152 96" fill="none" className="stroke-fascia" strokeOpacity={0.22} strokeWidth={5} strokeLinecap="round" />
      <path d="M84 96L96 76L106 92L118 70L130 91L142 77L154 96Z" className="fill-teal" />
      <rect x="74" y="94" width="92" height="90" rx="3" className="fill-glass" />
      <rect x="146" y="94" width="20" height="90" className="fill-fascia" fillOpacity={0.07} />
      <path d="M92 98C92 50 140 50 140 98" fill="none" className="stroke-glass" strokeWidth={6} strokeLinecap="round" />
      {/* dried-flower brooch */}
      <ellipse cx="112" cy="152" rx="11" ry="4.5" transform="rotate(-35 112 152)" className="fill-wood" />
      {petals.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="6" className="fill-blush" />
      ))}
      <circle cx="126" cy="140" r="4" className="fill-sign" />
    </Illo>
  );
}

/* ---------- Ngopi: coffee and a slice ---------- */
export function IlloCoffeeSlice({ label, className }: IlloProps) {
  return (
    <Illo label={label} className={className} viewBox={VIEW.coffee}>
      <Shadow cx={130} rx={104} />
      {/* steam */}
      <path d="M72 100C64 88 80 82 72 68M94 100C86 88 102 82 94 68" fill="none" className="stroke-glass" strokeOpacity={0.4} strokeWidth={3} strokeLinecap="round" />
      {/* saucer and cup */}
      <ellipse cx="84" cy="180" rx="56" ry="7" className="fill-glass" />
      <path d="M118 124C144 122 144 158 112 158" fill="none" className="stroke-glass" strokeWidth={8} strokeLinecap="round" />
      <path d="M48 112H120L113 166C111 174 106 178 98 178H70C62 178 57 174 55 166Z" className="fill-glass" />
      <path d="M50.3 130H117.7L116.9 136H51.1Z" className="fill-sign" />
      <ellipse cx="84" cy="112" rx="36" ry="6" className="fill-glass" />
      <ellipse cx="84" cy="113" rx="31" ry="4.5" className="fill-frame" />
      {/* plate and layered slice */}
      <ellipse cx="182" cy="181" rx="46" ry="6" className="fill-glass" />
      <rect x="148" y="160" width="68" height="17" className="fill-sign" />
      <rect x="148" y="154" width="68" height="6" className="fill-blush" />
      <rect x="148" y="140" width="68" height="14" className="fill-frame" />
      <rect x="148" y="134" width="68" height="6" className="fill-blush" />
      <rect x="148" y="122" width="68" height="12" className="fill-sign" />
      <rect x="146" y="114" width="72" height="10" rx="4" className="fill-frame" />
      <circle cx="182" cy="108" r="7.5" className="fill-blush" />
      <circle cx="182" cy="101" r="4" className="fill-awning" />
      <rect x="152" y="116" width="24" height="2.5" rx="1.25" {...HI} />
    </Illo>
  );
}

/* ---------- Acara: the white cake box with the phone number ---------- */
export function IlloCakeBox({ label, className, phone }: IlloProps & { phone: string }) {
  return (
    <Illo label={label} className={className} viewBox={VIEW.box}>
      {/* the counter it sits on */}
      <rect x="0" y="184" width="240" height="8" className="fill-frame" />
      <Shadow cx={122} rx={98} />
      {/* handle tab */}
      <rect x="98" y="54" width="62" height="44" rx="10" className="fill-glass" />
      <rect x="114" y="63" width="30" height="10" rx="5" className="fill-fascia" />
      {/* top, side, front */}
      <path d="M30 104L66 88H210L174 104Z" className="fill-glass" />
      <path d="M30 104L66 88H210L174 104Z" className="fill-fascia" fillOpacity={0.06} />
      <path d="M174 104L210 88V168L174 184Z" className="fill-glass" />
      <path d="M174 104L210 88V168L174 184Z" className="fill-fascia" fillOpacity={0.16} />
      <rect x="30" y="104" width="144" height="80" className="fill-glass" />
      {/* print */}
      <text x="102" y="131" textAnchor="middle" className="fill-awning" style={{ fontFamily: "var(--font-young-serif), Georgia, serif", fontSize: 19, letterSpacing: "0.04em" }}>
        LINDAYES
      </text>
      <text x="102" y="151" textAnchor="middle" className="fill-fascia" fillOpacity={0.7} style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 8.5, letterSpacing: "0.06em" }}>
        Cake &amp; Bakery
      </text>
      <rect x="42" y="158" width="120" height="1.5" className="fill-awning" fillOpacity={0.5} />
      <circle cx="47" cy="170.5" r="6" className="fill-teal" />
      <path d="M44 172l-.9 2.6 2.7-.9a3.6 3.6 0 1 0-1.8-1.7z" className="fill-glass" />
      <text x="57" y="174.8" className="fill-fascia" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: 12.5, fontWeight: 600, letterSpacing: "0.02em" }}>
        {phone}
      </text>
    </Illo>
  );
}

/* ---------- Ngopi: ivy trail hanging from the ceiling (decorative) ---------- */
type Pt = [number, number];
const bez = (p0: Pt, p1: Pt, p2: Pt, p3: Pt, t: number): Pt => {
  const u = 1 - t;
  return [
    u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
    u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1],
  ];
};
const STEMS: [Pt, Pt, Pt, Pt][] = [
  [[34, 0], [20, 60], [66, 110], [44, 188]],
  [[112, 0], [136, 46], [92, 96], [118, 150]],
  [[196, 0], [184, 40], [226, 76], [208, 118]],
  [[286, 0], [298, 30], [268, 56], [284, 86]],
  [[372, 0], [362, 18], [388, 36], [378, 56]],
];
const r1 = (n: number) => Math.round(n * 10) / 10;
const IVY = STEMS.map((s, si) => {
  const count = [11, 9, 7, 5, 3][si];
  const leaves = Array.from({ length: count }, (_, i) => {
    const t = (i + 0.8) / (count + 0.4);
    const [x, y] = bez(...s, t);
    const [x2, y2] = bez(...s, Math.min(1, t + 0.02));
    const ang = (Math.atan2(y2 - y, x2 - x) * 180) / Math.PI - 90;
    const side = i % 2 ? 1 : -1;
    return { x: r1(x), y: r1(y), rot: r1(ang + side * 55), scale: r1(1.25 - t * 0.35), tone: (i + si) % 3 === 0 };
  });
  const d = `M${s[0].join(" ")}C${s[1].join(" ")} ${s[2].join(" ")} ${s[3].join(" ")}`;
  return { d, leaves };
});
const FLOWERS: { cx: number; cy: number }[] = [
  { cx: 120, cy: 150 },
  { cx: 286, cy: 88 },
];

export function IvyTrail({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 200" aria-hidden="true" focusable="false" className={`block h-auto ${className}`}>
      <defs>
        <path id="ivy-leaf" d="M0 0C-7 3-12 11-8 18C-5 23 0 22 0 26C0 22 5 23 8 18C12 11 7 3 0 0Z" />
      </defs>
      {IVY.map((stem, i) => (
        <g key={i}>
          <path d={stem.d} fill="none" className="stroke-[var(--ivy-dark)]" strokeWidth={1.6} />
          {stem.leaves.map((l, j) => (
            <use
              key={j}
              href="#ivy-leaf"
              transform={`translate(${l.x} ${l.y}) rotate(${l.rot}) scale(${l.scale})`}
              className={l.tone ? "fill-[var(--ivy-light)]" : "fill-[var(--ivy-dark)]"}
            />
          ))}
        </g>
      ))}
      {FLOWERS.map((f, i) => (
        <g key={i} className="fill-blush">
          <circle cx={f.cx - 5} cy={f.cy} r="5" />
          <circle cx={f.cx + 5} cy={f.cy - 1} r="5" />
          <circle cx={f.cx} cy={f.cy + 6} r="5" />
          <circle cx={f.cx + 2} cy={f.cy - 7} r="4" />
          <circle cx={f.cx - 8} cy={f.cy + 8} r="3.5" />
        </g>
      ))}
    </svg>
  );
}
