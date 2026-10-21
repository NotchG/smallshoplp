// The four featured products, drawn like the cup print: malam line art (1.75px, round caps,
// never scaled) on the bingkai arch window, palette fills only, no shading.
// Each drawing is 240x320 (the arch's 3:4). Owner photos later replace them in the same arches.
import type { ProductArt } from "@/content";

type ArtProps = { label: string; id: string };

const r = (n: number) => Math.round(n * 10) / 10;

/* ---------- cups ---------- */

// Clear tapered tumbler: rim 62..178 at y=96, foot 76..164 at y=284
const cupL = (y: number) => 62 + (14 * (y - 96)) / 188;
const cupR = (y: number) => 240 - cupL(y);
const CUP = "M62 96L75.4 278Q76 284 82 284L158 284Q164 284 164.6 278L178 96Z";

function strawPoly(x1: number, y1: number, x2: number, y2: number, w = 9) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  const px = (-dy / len) * (w / 2);
  const py = (dx / len) * (w / 2);
  return [
    [x1 + px, y1 + py],
    [x2 + px, y2 + py],
    [x2 - px, y2 - py],
    [x1 - px, y1 - py],
  ]
    .map(([x, y]) => `${r(x)},${r(y)}`)
    .join(" ");
}

type Cube = [x: number, y: number, size: number, rot: number];

function Cup({
  label,
  id,
  liquidTop,
  liquidClass,
  layerTop,
  iceClass,
  cubes,
  printClass,
  straw,
}: ArtProps & {
  liquidTop: number;
  liquidClass: string;
  layerTop?: number;
  iceClass: string;
  cubes: Cube[];
  printClass: string;
  straw: [number, number, number, number];
}) {
  const clip = `${id}-cup`;
  const liquid = `M${r(cupL(liquidTop))} ${liquidTop}H${r(cupR(liquidTop))}L166 290H74Z`;
  return (
    <svg viewBox="0 0 240 320" role="img" aria-label={label} className="ink-dark">
      <defs>
        <clipPath id={clip}>
          <path d={CUP} />
        </clipPath>
      </defs>
      <path d="M24 284H216" className="ln" />
      <polygon points={strawPoly(...straw)} className="f-malam" />
      <g clipPath={`url(#${clip})`}>
        <path d={liquid} className={liquidClass} />
        {layerTop !== undefined && (
          <path
            d={`M${r(cupL(layerTop) - 2)} ${layerTop}Q96 ${layerTop - 9} 120 ${layerTop}T${r(cupR(layerTop) + 2)} ${layerTop}L166 290H74Z`}
            className="f-gula"
          />
        )}
        {cubes.map(([x, y, s, rot], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width={s}
            height={s}
            rx={4}
            transform={`rotate(${rot} ${x + s / 2} ${y + s / 2})`}
            className={`${iceClass} ln-fill`}
          />
        ))}
      </g>
      <text x="120" y="205" textAnchor="middle" fontSize="31" letterSpacing="1.5" className={`svg-print-display ${printClass}`}>
        CLAY
      </text>
      <text x="120" y="222" textAnchor="middle" fontSize="6.5" letterSpacing="1.9" className={`svg-print-body ${printClass}`}>
        COFFEE SPACE
      </text>
      <path d={CUP} className="ln" />
      {/* flat lid: dome and rim */}
      <path d="M67 87Q120 66 173 87Z" className="f-bingkai ln-fill" />
      <rect x="56" y="86" width="128" height="11" rx="3" className="f-bingkai ln-fill" />
    </svg>
  );
}

export function CupKopiSusu({ label, id }: ArtProps) {
  return (
    <Cup
      label={label}
      id={id}
      liquidTop={128}
      liquidClass="f-kanvas"
      layerTop={248}
      iceClass="f-ice"
      cubes={[
        [80, 112, 26, -10],
        [116, 104, 28, 12],
        [92, 142, 24, 24],
        [134, 134, 25, -8],
      ]}
      printClass="f-malam"
      straw={[124, 270, 154, 24]}
    />
  );
}

export function CupAmericano({ label, id }: ArtProps) {
  return (
    <Cup
      label={label}
      id={id}
      liquidTop={118}
      liquidClass="f-americano"
      iceClass="f-ice-dark"
      cubes={[
        [86, 102, 27, 14],
        [124, 110, 26, -12],
        [102, 136, 24, -24],
      ]}
      printClass="f-bingkai"
      straw={[118, 270, 92, 26]}
    />
  );
}

/* ---------- kraft boxes ---------- */

// A heap of grated cheese: half ellipse with a scalloped edge
function fluffyMound(cx: number, base: number, rx: number, ry: number, bumps: number) {
  const pt = (a: number, k = 1, kk = 1) => [cx + rx * k * Math.cos(a), base - ry * kk * Math.sin(a)];
  const step = Math.PI / bumps;
  const [sx] = pt(Math.PI);
  let d = `M${r(sx)} ${base}`;
  for (let i = 1; i <= bumps; i++) {
    const [px, py] = pt(Math.PI - i * step);
    const [qx, qy] = pt(Math.PI - (i - 0.5) * step, 1.1, 1.2);
    d += `Q${r(qx)} ${r(qy)} ${r(px)} ${r(py)}`;
  }
  return d + "Z";
}

// Front wall of the open kraft box, with its gula fold lines
function BoxFront() {
  return (
    <>
      <path d="M40 214L200 214L189 284Q188 290 182 290L58 290Q52 290 51 284Z" className="f-kanvas ln-fill" />
      <path d="M41.6 226H198.4M56 226L62 290M184 226L178 290" className="ln s-gula" />
    </>
  );
}

export function BoxPisangGoreng({ label }: ArtProps) {
  return (
    <svg viewBox="0 0 240 320" role="img" aria-label={label} className="ink-dark">
      <path d="M24 290H216" className="ln" />
      {/* lid, open behind, with its tuck tab */}
      <path d="M98 142L104 128Q105 126 108 126L132 126Q135 126 136 128L142 142Z" className="f-kanvas ln-fill" />
      <path d="M54 214L50 148Q50 142 56 142L184 142Q190 142 190 148L186 214Z" className="f-kanvas-in ln-fill" />
      {/* fried pieces */}
      {(
        [
          [50, 188, -16],
          [150, 184, 14],
          [98, 196, 4],
          [164, 200, -8],
          [64, 204, 10],
        ] as [number, number, number][]
      ).map(([x, y, rot], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={38}
          height={22}
          rx={8}
          transform={`rotate(${rot} ${x + 19} ${y + 11})`}
          className="f-lampu ln-fill"
        />
      ))}
      {/* grated cheese */}
      <path d={fluffyMound(121, 214, 58, 38, 11)} className="f-cheese ln-fill" />
      <path
        d="M80 200l6-4M98 190l7 3M118 183l5 5M138 186l7-3M156 194l5 4M90 209l6 2M130 207l6-3M110 199l4-5M148 205l5-4M166 207l4 3"
        className="ln s-gula"
      />
      {/* chocolate sauce */}
      <polyline points="74,205 86,189 98,205 112,183 124,203 138,185 150,203 162,191 171,205" className="s-choc" />
      <BoxFront />
    </svg>
  );
}

export function BoxMixPlatter({ label }: ArtProps) {
  const fries: [number, number, number][] = [
    [56, 164, -16],
    [70, 156, -6],
    [84, 160, 8],
    [97, 168, 18],
    [64, 176, 4],
  ];
  const pops: [number, number][] = [
    [120, 196],
    [140, 188],
    [128, 172],
    [152, 204],
    [110, 210],
  ];
  const sausages: [number, number, number][] = [
    [170, 194, -10],
    [186, 182, 12],
    [180, 206, 4],
    [160, 212, -6],
  ];
  return (
    <svg viewBox="0 0 240 320" role="img" aria-label={label} className="ink-dark">
      <path d="M24 290H216" className="ln" />
      {/* inside back wall of the tray */}
      <path d="M44 214L50 180H190L196 214Z" className="f-kanvas-in ln-fill" />
      {fries.map(([x, y, rot], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={10}
          height={54}
          rx={2}
          transform={`rotate(${rot} ${x + 5} ${y + 27})`}
          className="f-lampu ln-fill"
        />
      ))}
      {pops.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={12} className="f-pop ln-fill" />
      ))}
      {sausages.map(([cx, cy, rot], i) => (
        <g key={i} transform={`rotate(${rot} ${cx} ${cy})`}>
          <ellipse cx={cx} cy={cy} rx={13} ry={8.5} className="f-gula ln-fill" />
          <ellipse cx={cx} cy={cy} rx={7.5} ry={4.5} className="f-sausage-in" />
        </g>
      ))}
      <BoxFront />
    </svg>
  );
}

export function ProductArtwork({ art, label, id }: { art: ProductArt; label: string; id: string }) {
  switch (art) {
    case "kopiSusu":
      return <CupKopiSusu label={label} id={id} />;
    case "americano":
      return <CupAmericano label={label} id={id} />;
    case "pisangGoreng":
      return <BoxPisangGoreng label={label} id={id} />;
    case "mixPlatter":
      return <BoxMixPlatter label={label} id={id} />;
  }
}
