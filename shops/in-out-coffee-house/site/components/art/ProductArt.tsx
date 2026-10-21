import type { ReactElement } from "react";
import type { ProductArtId } from "@/content";

// Flat, frontal product drawings, viewBox 240, one 3-unit stroke. Each is hung as a framed
// print over a caption plaque, like the album covers on the 2nd-floor wall. [MOCKUP] art.

type Tone = { line: string; mark: string };
const INK: Tone = { line: "stroke-ink", mark: "fill-ink" };
const PAPER: Tone = { line: "stroke-paper", mark: "fill-paper" };

// The branded clear takeaway cup from the photos: dome lid, drink in two layers, ice,
// and the small cup-and-"IN OUT" print. Drawn in a 240 box; place with a transform.
export function BrandCup({
  id,
  drink,
  tone = INK,
  withMark = true,
}: {
  id: string;
  drink: string;
  tone?: Tone;
  withMark?: boolean;
}) {
  const body = "M62 66H178L164 214H76Z";
  return (
    <g>
      <defs>
        <clipPath id={`${id}-cup`}>
          <path d={body} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-cup)`}>
        <rect x="40" y="78" width="160" height="48" className="fill-susu" />
        <rect x="40" y="126" width="160" height="92" className={drink} />
        {/* ice */}
        <g className={`fill-paper ${tone.line}`} strokeWidth="3" opacity="0.9">
          <rect x="76" y="84" width="24" height="24" rx="5" transform="rotate(-10 88 96)" />
          <rect x="106" y="80" width="24" height="24" rx="5" transform="rotate(8 118 92)" />
          <rect x="136" y="88" width="24" height="24" rx="5" transform="rotate(-6 148 100)" />
          <rect x="92" y="110" width="22" height="22" rx="5" transform="rotate(14 103 121)" />
        </g>
      </g>
      <path d={body} fill="none" className={tone.line} strokeWidth="3" strokeLinejoin="round" />
      {/* lid: rim and low dome */}
      <path d="M74 54C76 36 96 30 120 30C144 30 164 36 166 54Z" className={`fill-paper ${tone.line}`} strokeWidth="3" strokeLinejoin="round" />
      <rect x="54" y="54" width="132" height="12" rx="4" className={`fill-paper ${tone.line}`} strokeWidth="3" />
      {withMark && (
        <g>
          {/* the print: tiny cup outline over "IN OUT", "coffee house" under it */}
          <path d="M104 160V148H132V160M132 151H138V157H132" fill="none" className={tone.line} strokeWidth="2.2" />
          <text
            x="120"
            y="180"
            textAnchor="middle"
            className={tone.mark}
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21, letterSpacing: "-0.02em" }}
          >
            IN OUT
          </text>
          <text
            x="120"
            y="194"
            textAnchor="middle"
            className={tone.mark}
            style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 7, letterSpacing: "0.2em" }}
          >
            coffee house
          </text>
        </g>
      )}
    </g>
  );
}

function KopiSusu() {
  return <BrandCup id="kopisusu" drink="fill-kopi" />;
}

function Matcha() {
  return <BrandCup id="matcha" drink="fill-hijau" tone={PAPER} />;
}

// Steam in the logo's style: two dotted curls.
function Steam({ x, y, className }: { x: number; y: number; className: string }) {
  return (
    <g fill="none" className={className} strokeWidth="5" strokeLinecap="round" strokeDasharray="0 9">
      <path d={`M${x} ${y + 44}C${x - 12} ${y + 32} ${x + 14} ${y + 16} ${x + 2} ${y}`} />
      <path d={`M${x + 24} ${y + 44}C${x + 12} ${y + 32} ${x + 38} ${y + 16} ${x + 26} ${y}`} />
    </g>
  );
}

function Latte() {
  return (
    <g strokeWidth="3" strokeLinejoin="round">
      <Steam x={106} y={56} className="stroke-ink" />
      {/* handle, outlined */}
      <path d="M164 132C194 128 196 168 160 166" fill="none" className="stroke-ink" strokeWidth="15" />
      <path d="M164 132C194 128 196 168 160 166" fill="none" className="stroke-paper" strokeWidth="9" />
      <path d="M64 116H176L168 164C165 180 156 188 140 188H100C84 188 75 180 72 164Z" className="fill-paper stroke-ink" />
      <rect x="64" y="116" width="112" height="9" className="fill-kopi stroke-ink" />
      <rect x="40" y="188" width="160" height="12" rx="6" className="fill-paper stroke-ink" />
    </g>
  );
}

function NasiGoreng() {
  return (
    <g strokeWidth="3">
      <circle cx="120" cy="120" r="92" className="fill-paper stroke-ink" />
      <circle cx="120" cy="120" r="74" fill="none" className="stroke-ink" opacity="0.25" />
      <circle cx="110" cy="128" r="54" className="fill-nasi stroke-ink" />
      <g className="fill-susu">
        <rect x="80" y="112" width="8" height="4" rx="2" transform="rotate(20 84 114)" />
        <rect x="92" y="150" width="8" height="4" rx="2" transform="rotate(-30 96 152)" />
        <rect x="74" y="138" width="8" height="4" rx="2" transform="rotate(60 78 140)" />
        <rect x="120" y="160" width="8" height="4" rx="2" transform="rotate(10 124 162)" />
        <rect x="140" y="146" width="8" height="4" rx="2" transform="rotate(-50 144 148)" />
        <rect x="100" y="94" width="8" height="4" rx="2" transform="rotate(-15 104 96)" />
        <rect x="106" y="168" width="8" height="4" rx="2" transform="rotate(40 110 170)" />
      </g>
      {/* fried egg */}
      <path d="M100 104C98 84 116 74 134 78C154 82 162 100 156 116C150 132 128 136 114 130C104 126 101 116 100 104Z" className="fill-paper stroke-ink" />
      <circle cx="129" cy="104" r="12" className="fill-kuning stroke-ink" />
      {/* cucumber */}
      <circle cx="178" cy="150" r="15" className="fill-hijau" />
      <circle cx="178" cy="150" r="10" className="fill-susu" />
      <circle cx="166" cy="178" r="15" className="fill-hijau" />
      <circle cx="166" cy="178" r="10" className="fill-susu" />
      {/* sambal */}
      <path d="M58 170C58 160 66 154 74 156C84 158 88 168 84 176C80 184 66 186 60 180C58 177 58 174 58 170Z" className="fill-bata stroke-ink" />
    </g>
  );
}

function RotiBakar() {
  return (
    <g strokeWidth="3" strokeLinejoin="round">
      <rect x="30" y="182" width="180" height="11" rx="5" className="fill-paper stroke-ink" />
      {/* bottom slice, chocolate between, top slice */}
      <rect x="52" y="142" width="136" height="40" rx="9" className="fill-nasi stroke-ink" />
      <rect x="56" y="134" width="128" height="10" className="fill-kayu" />
      <rect x="48" y="98" width="144" height="38" rx="9" className="fill-nasi stroke-ink" />
      {/* chocolate on top, dripping over the edge */}
      <path
        d="M48 107C48 102 52 98 57 98H183C188 98 192 102 192 107V112H176V126C176 131 172 134 168 134C164 134 160 131 160 126V112H130V120C130 125 126 128 122 128C118 128 114 125 114 120V112H84V130C84 135 80 138 76 138C72 138 68 135 68 130V112H48Z"
        className="fill-kayu"
      />
      {/* grated cheese, piled on the chocolate */}
      <g className="fill-kuning stroke-ink" strokeWidth="2">
        <rect x="66" y="90" width="22" height="7" rx="3" transform="rotate(-10 77 93)" />
        <rect x="92" y="91" width="22" height="7" rx="3" transform="rotate(6 103 94)" />
        <rect x="120" y="90" width="22" height="7" rx="3" transform="rotate(-4 131 93)" />
        <rect x="148" y="91" width="22" height="7" rx="3" transform="rotate(10 159 94)" />
        <rect x="80" y="81" width="22" height="7" rx="3" transform="rotate(14 91 84)" />
        <rect x="106" y="79" width="22" height="7" rx="3" transform="rotate(-12 117 82)" />
        <rect x="134" y="81" width="22" height="7" rx="3" transform="rotate(6 145 84)" />
        <rect x="110" y="70" width="20" height="7" rx="3" transform="rotate(8 120 73)" />
      </g>
    </g>
  );
}

const ART: Record<ProductArtId, () => ReactElement> = {
  kopiSusu: KopiSusu,
  latte: Latte,
  matcha: Matcha,
  nasiGoreng: NasiGoreng,
  rotiBakar: RotiBakar,
};

export default function ProductArt({ id, label }: { id: ProductArtId; label: string }) {
  const Art = ART[id];
  return (
    <svg viewBox="0 0 240 240" role="img" aria-label={label}>
      <Art />
    </svg>
  );
}

// Paket Nongkrong: two branded cups and a cup of fries.
export function PaketArt({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 300 200" role="img" aria-label={label}>
      <g transform="translate(-6 -18) scale(0.86)">
        <BrandCup id="paket-a" drink="fill-kopi" withMark={false} />
      </g>
      <g transform="translate(78 -18) scale(0.86)">
        <BrandCup id="paket-b" drink="fill-kopi" withMark={false} />
      </g>
      <g strokeWidth="3" strokeLinejoin="round">
        <g className="fill-kuning stroke-ink">
          <rect x="214" y="58" width="12" height="70" rx="2" transform="rotate(-10 220 93)" />
          <rect x="230" y="50" width="12" height="76" rx="2" transform="rotate(4 236 88)" />
          <rect x="246" y="56" width="12" height="70" rx="2" transform="rotate(12 252 91)" />
          <rect x="262" y="64" width="12" height="64" rx="2" transform="rotate(-4 268 96)" />
        </g>
        <path d="M204 100H286L276 166H214Z" className="fill-bata stroke-ink" />
      </g>
    </svg>
  );
}
