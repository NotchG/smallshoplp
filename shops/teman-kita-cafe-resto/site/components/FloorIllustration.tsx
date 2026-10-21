// The two floors as drawings in the shop's own wall style. viewBox 640×400.
// atas: the semi-outdoor upper floor in the mural's colours under the steel-grid roof.
// bawah: the indoor ground floor in ink only, like the doodled brick walls downstairs.
// Placeholders until the owner sends photos of each floor.

const T = "#161616"; // tinta
const K = "#F4F5F1"; // kapur
const R = "#C7252D"; // merah
const M = "#A6DBC6"; // mint
const J = "#F39C1E"; // jeruk
const B = "#1F5FB0"; // biru

const r = (n: number) => Math.round(n * 10) / 10;

// ---------------------------------------------------------------- Lantai 2 · atas
// One-point perspective: vanishing point (320, 240), back wall (160,120)–(480,320).
function roofGrid() {
  let d = "";
  for (let i = 1; i < 8; i++) d += `M${i * 80} 0L${160 + i * 40} 120`;
  for (const y of [34, 62, 84, 103]) d += `M${r(y * 4 / 3)} ${y}H${r(640 - y * 4 / 3)}`;
  return d;
}

// Red-framed glass partition on the left wall, with four panes.
function partition() {
  const top = (x: number, o = 0) => r(0.75 * x + 16 + o);
  const bot = (x: number, o = 0) => r(400 - 0.5 * x - o);
  const frame = `M20 ${top(20)}L150 ${top(150)}V${bot(150)}L20 ${bot(20)}Z`;
  const edges = [20, 52, 86, 118, 150];
  let panes = "";
  for (let i = 0; i < 4; i++) {
    const a = edges[i] + 5;
    const b = edges[i + 1] - 5;
    panes += `M${a} ${top(a, 9)}L${b} ${top(b, 9)}V${bot(b, 12)}L${a} ${bot(a, 12)}Z`;
  }
  return { frame, panes };
}

// Tolix-style metal chair, side view facing right, seat front-left corner at 0,0.
function SideChair({ x, y, fill, flip = false, s = 1 }: { x: number; y: number; fill: string; flip?: boolean; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <path d="M0 7l-6 46M44 7l6 46M9 7l-2 41M35 7l2 41" />
      <path d="M2 0C-2-14-4-34-2-46c4-3 10-3 14 0-2 12-2 32 0 46Z" fill={fill} />
      <path d="M0 0h44l2 7H-2Z" fill={fill} />
    </g>
  );
}

function Atas() {
  const p = partition();
  return (
    <>
      {/* room edges and back wall */}
      <path d="M0 0L160 120M640 0L480 120M0 400L160 320M640 400L480 320" />
      {/* street mural on the back wall: orange shophouse, blue shopfront, mint building */}
      <path d="M160 120H480V320H160Z" fill={K} />
      <path d="M168 320V178l34-14 34 14v142Z" fill={J} />
      <path d="M182 196h14v20h-14zM208 196h14v20h-14zM182 234h14v20h-14zM208 234h14v20h-14z" strokeWidth="2" fill={K} />
      <path d="M236 236V150h102v86" fill={K} />
      <path d="M250 166h18v22h-18zM282 166h18v22h-18zM314 166h14v22h-14zM250 204h18v20h-18zM282 204h18v20h-18z" strokeWidth="2" />
      <path d="M240 236h94v84h-94Z" fill={B} />
      <path d="M240 236h94v14h-94Z" fill={K} strokeWidth="2.5" />
      <path d="M252 262h28v28h-28zM292 262h24v58h-24z" fill={K} strokeWidth="2.5" />
      <path d="M338 320V168h70v152" fill={M} />
      <path d="M350 186h16v22h-16zM380 186h16v22h-16zM350 226h16v22h-16zM380 226h16v22h-16z" strokeWidth="2" fill={K} />
      <path d="M408 320V206l34-22 34 22v114" fill={K} />
      <path d="M426 222h14v18h-14zM446 222h14v18h-14z" strokeWidth="2" />
      <circle cx="458" cy="262" r="9" fill={J} strokeWidth="2.5" />
      {/* steel-grid roof with translucent panels */}
      <path d="M0 0H640L480 120H160Z" fill={K} />
      <path d={roofGrid()} />
      {/* ceiling fans */}
      <path d="M248 36v26M404 82v14" />
      <ellipse cx="224" cy="66" rx="24" ry="4.5" fill={K} transform="rotate(-4 224 66)" />
      <ellipse cx="272" cy="66" rx="24" ry="4.5" fill={K} transform="rotate(4 272 66)" />
      <ellipse cx="248" cy="64" rx="8" ry="5" fill={T} />
      <ellipse cx="387" cy="100" rx="17" ry="3.5" fill={K} transform="rotate(-4 387 100)" />
      <ellipse cx="421" cy="100" rx="17" ry="3.5" fill={K} transform="rotate(4 421 100)" />
      <ellipse cx="404" cy="98" rx="6" ry="4" fill={T} />
      {/* white industrial pendants on the open side */}
      <path d="M552 16v34M506 58v26" strokeWidth="2.5" />
      <path d="M534 66c0-12 8-18 18-18s18 6 18 18Z" fill={K} />
      <path d="M494 94c0-8 5-12 12-12s12 4 12 12Z" fill={K} />
      {/* red-framed glass partition (left) */}
      <path d={p.frame} fill={R} />
      <path d={p.panes} fill={K} strokeWidth="2.5" />
      {/* open side: steel column, railing and greenery (right) */}
      <path d="M600 22v356" strokeWidth="5" />
      <path d="M560 282c8-24 30-30 42-16-16-1-30 6-42 16ZM596 276c10-20 30-22 38-8-14-2-26 2-38 8Z" fill={M} />
      <path d="M480 285L640 330M520 296v44M566 309v57M620 324v66" />
      {/* tables and chairs: red, mint and gunmetal metal chairs, plank tables */}
      <SideChair x={196} y={302} fill={R} s={0.62} />
      <SideChair x={444} y={302} fill={T} s={0.62} flip />
      <path d="M239 304H373L394 330H206Z" fill={K} />
      <path d="M284 304l-15 26M328 304l3 26" strokeWidth="2.5" />
      <path d="M206 330h188v10H206Z" fill={K} />
      <path d="M228 340l-6 52h-12M372 340l6 52h12M300 340v22" />
      <SideChair x={146} y={344} fill={R} />
      <SideChair x={456} y={344} fill={M} flip />
    </>
  );
}

// ---------------------------------------------------------------- Lantai 1 · bawah
// Deterministic jitter so the brick lines look drawn, not ruled.
function jitter(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x) - 0.5;
}

function bricks() {
  let d = "";
  let n = 0;
  for (let row = 0; row < 12; row++) {
    const y = 10 + row * 28;
    d += `M0 ${r(y + jitter(n++))}Q320 ${r(y + jitter(n++) * 3)} 640 ${r(y + jitter(n++))}`;
    const offset = row % 2 ? 42 : 0;
    for (let x = offset + 84; x < 640; x += 84) {
      if (jitter(n++) > 0.36) continue; // a few joints left undrawn, like the wall
      const jx = r(x + jitter(n++) * 3);
      d += `M${jx} ${y + 3}l${r(jitter(n++) * 2)} 22`;
    }
  }
  return d;
}

function Bawah() {
  return (
    <>
      <path d={bricks()} strokeWidth="1.75" />
      {/* floor: wood-look tiles */}
      <path d="M0 346H640" />
      <path d="M0 364H640M0 384H640M70 346v18M210 346v18M350 346v18M490 346v18M140 364v20M280 364v20M420 364v20M560 364v20" strokeWidth="2" />
      {/* bookshelf */}
      <path d="M36 96h140v250H36Z" fill={K} />
      <path d="M36 158h140M36 220h140M36 282h140" />
      <path d="M48 158v-40h12v40M62 158v-48h10v48M74 158v-34h14v34M112 158l14-38 10 4-14 38M146 158v-44h12v44M48 220v-46h14v46M66 220v-38h10v38M80 220v-42h12v42M118 220v-30h40v30M48 282v-36h40v36M100 282v-44h12v44M116 282v-40h12v40M134 282v-48h10v48" strokeWidth="2.5" fill={K} />
      <path d="M150 96l4-16h16l4 16M162 80c-4-12-14-18-22-16 6 6 14 12 22 16Zm0 0c2-14 12-20 20-18-4 8-12 14-20 18Z" fill={K} strokeWidth="2.5" />
      {/* pendant lamp */}
      <path d="M300 0v62" strokeWidth="2.5" />
      <path d="M270 94c0-20 13-32 30-32s30 12 30 32Z" fill={K} />
      <path d="M292 94a8 8 0 0 0 16 0" />
      {/* framed picture over the sofa */}
      <path d="M262 132h76v62h-76Z" fill={K} />
      <path d="M284 180h32M286 162c0 12 6 18 14 18s14-6 14-18ZM314 166c8 0 8 9 0 10M294 154c-4-5 4-8 0-14M304 154c-4-5 4-8 0-14" strokeWidth="2.5" />
      {/* sofa */}
      <path d="M216 296v-50c0-10 6-16 16-16h152c10 0 16 6 16 16v50Z" fill={K} />
      <path d="M200 334v-58c0-10 5-14 14-14s14 4 14 14v58ZM388 334v-58c0-10 5-14 14-14s14 4 14 14v58Z" fill={K} />
      <path d="M228 296h160v38H228Z" fill={K} />
      <path d="M308 296v38M206 334l-2 12M410 334l2 12" />
      {/* side table with a cup of coffee */}
      <ellipse cx="474" cy="284" rx="40" ry="8" fill={K} />
      <path d="M474 292v46M452 344c0-4 10-6 22-6s22 2 22 6" />
      <path d="M462 262h22l-2 18h-18Z" fill={K} />
      <path d="M484 266c7 0 7 9 0 10M468 254c-4-5 4-8 0-13M478 254c-4-5 4-8 0-13" strokeWidth="2.5" />
      {/* coat hooks with a jacket, a scarf and a hat */}
      <path d="M522 100h100v12H522Z" fill={K} />
      <path d="M544 112v6M576 112v6M606 112v6" />
      <path d="M576 118c-6 22-6 70-2 100M576 118c6 22 8 60 4 86" strokeWidth="2.5" />
      <path d="M544 118l-26 20c-6 6-8 14-8 24v92h68v-92c0-10-2-18-8-24Z" fill={K} />
      <path d="M532 128l12 22 12-22M544 150v104M522 214h14M554 214h14" strokeWidth="2.5" />
      <path d="M590 138c0-16 7-22 16-22s16 6 16 22Z" fill={K} />
      <path d="M582 138h48" />
    </>
  );
}

export default function FloorIllustration({
  kind,
  label,
  className = "",
}: {
  kind: "atas" | "bawah";
  label: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 640 400" role="img" aria-label={label} className={className}>
      <g fill="none" stroke={T} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {kind === "atas" ? <Atas /> : <Bawah />}
      </g>
    </svg>
  );
}
