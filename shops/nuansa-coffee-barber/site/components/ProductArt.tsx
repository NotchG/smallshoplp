// Flat, front-view geometric drawings (design brief §6). No outlines, gradients,
// shading or steam. viewBox 0 0 120 180; everything stands on y = 180 (the counter line).
import type { Product } from "@/content";

const C = {
  fascia: "#16215A",
  lightbox: "#F5F6FA",
  ink: "#161A2B",
  cupWall: "#DDE1EA",
  gulaAren: "#5A2E14",
  kopiSusu: "#B98A62",
  susu: "#EFE6D8",
  crema: "#7A4A2A",
  crustLight: "#C98A3E",
  crustDark: "#A9672A",
};

function KopiSusuArt({ label }: { label: string }) {
  // Inner liquid area: the cup inset by its wall.
  const inner = "26,56 94,56 88,176 32,176";
  return (
    <svg viewBox="0 0 120 180" className="counter-art" role="img" aria-label={label}>
      <defs>
        <clipPath id="kopisusu-inner">
          <polygon points={inner} />
        </clipPath>
      </defs>
      {/* clear cup + rim */}
      <polygon points="21,40 99,40 92,180 28,180" fill={C.cupWall} />
      <rect x="16" y="34" width="88" height="8" rx="2" fill={C.cupWall} />
      {/* three bands, bottom up: gula aren, kopi susu, susu */}
      <g clipPath="url(#kopisusu-inner)">
        <rect x="0" y="56" width="120" height="44" fill={C.susu} />
        <rect x="0" y="100" width="120" height="50" fill={C.kopiSusu} />
        <rect x="0" y="150" width="120" height="30" fill={C.gulaAren} />
      </g>
      {/* straw */}
      <polygon points="72,4 79,4 70,150 63,150" fill={C.fascia} />
      {/* ice */}
      <rect x="31" y="86" width="20" height="20" rx="4" fill={C.lightbox} />
      <rect x="54" y="94" width="18" height="18" rx="4" fill={C.lightbox} />
      <rect x="74" y="82" width="17" height="17" rx="4" fill={C.lightbox} />
    </svg>
  );
}

function AmericanoArt({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 120 180" className="counter-art" role="img" aria-label={label}>
      {/* ring handle, behind the body */}
      <circle cx="91" cy="138" r="14" fill="none" stroke={C.ink} strokeWidth="7" />
      {/* ceramic body */}
      <path d="M14 112 H86 V150 Q86 180 58 180 H42 Q14 180 14 150 Z" fill={C.ink} />
      {/* rim and crema */}
      <ellipse cx="50" cy="112" rx="36" ry="6.5" fill={C.ink} />
      <ellipse cx="50" cy="112" rx="31" ry="4.5" fill={C.crema} />
    </svg>
  );
}

function CroissantArt({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 120 180" className="counter-art" role="img" aria-label={label}>
      {/* flat plate */}
      <ellipse cx="60" cy="172" rx="56" ry="8" fill={C.lightbox} />
      {/* five segments, outside in, alternating; the tips droop like a crescent */}
      <ellipse cx="15" cy="156" rx="14" ry="8" transform="rotate(32 15 156)" fill={C.crustLight} />
      <ellipse cx="105" cy="156" rx="14" ry="8" transform="rotate(-32 105 156)" fill={C.crustLight} />
      <ellipse cx="34" cy="146" rx="19" ry="15" transform="rotate(18 34 146)" fill={C.crustDark} />
      <ellipse cx="86" cy="146" rx="19" ry="15" transform="rotate(-18 86 146)" fill={C.crustDark} />
      <ellipse cx="60" cy="140" rx="23" ry="25" fill={C.crustLight} />
    </svg>
  );
}

export default function ProductArt({ product }: { product: Product }) {
  switch (product.art) {
    case "kopiSusu":
      return <KopiSusuArt label={product.label} />;
    case "americano":
      return <AmericanoArt label={product.label} />;
    case "croissant":
      return <CroissantArt label={product.label} />;
  }
}
