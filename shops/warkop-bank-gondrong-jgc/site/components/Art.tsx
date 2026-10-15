// Flat sign-painter product pictures (design brief §6). 96×96, 2.5px outlines in currentColor,
// one accent fill (--art-accent) and one cream highlight (--art-hi), set by the strip's tone.
import type { ReactNode } from "react";

const accent = { fill: "var(--art-accent)", stroke: "none" } as const;
const hiFill = { fill: "var(--art-hi)" } as const;
const hiStroke = { stroke: "var(--art-hi)" } as const;

function ArtBase({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 96 96"
      role="img"
      aria-label={label}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

// A small clear glass of black coffee on a saucer, the kind on the lesehan mats.
export function ArtKopiHitam({ className }: { className?: string }) {
  return (
    <ArtBase label="Gambar segelas kopi hitam" className={className}>
      <path d="M42 21c-4-3.5 4-6.5 0-11M54 21c-4-3.5 4-6.5 0-11" />
      <path d="M27.7 44 31.5 80h33l3.8-36z" style={accent} />
      <path d="M26 28l5.5 52h33L70 28" />
      <path d="M24 28h48" />
      <path d="M27.7 44h40.6" />
      <path d="M33 50l2.4 23" style={hiStroke} />
      <path d="M16 84.5c4 3 60 3 64 0" />
      <path d="M16 84.5h64" />
    </ArtBase>
  );
}

// A plastic cup of es kopi susu with ice and a straw.
export function ArtEsKopiSusu({ className }: { className?: string }) {
  return (
    <ArtBase label="Gambar es kopi susu dalam gelas plastik" className={className}>
      <path d="M24.6 46 31 86h34l6.4-40z" style={accent} />
      <rect x="29" y="35" width="14" height="14" rx="3" transform="rotate(-12 36 42)" style={hiFill} />
      <rect x="45" y="39" width="13" height="13" rx="3" transform="rotate(10 51.5 45.5)" style={hiFill} />
      <path d="M53 64h6l9-58h-6z" style={hiFill} />
      <path d="M22 30l9 56h34l9-56" />
      <rect x="18" y="25" width="60" height="6" rx="2" />
      <path d="M29.5 54l3 22" style={hiStroke} />
    </ArtBase>
  );
}

// A bowl of Indomie with an egg on top. [MOCKUP] item, so the picture is a stand-in.
export function ArtIndomieTelur({ className }: { className?: string }) {
  return (
    <ArtBase label="Gambar semangkuk Indomie dengan telur" className={className}>
      <path d="M28 28c-3-3 3-6 0-10M38 25c-3-3 3-6 0-10" />
      <path d="M60 33 84 9M66 35 90 15" />
      <path d="M21 46c2.3-6.5 6.7-6.5 9 0c2.3-6.5 6.7-6.5 9 0c2.3-6.5 6.7-6.5 9 0c2.3-6.5 6.7-6.5 9 0c2.3-6.5 6.7-6.5 9 0c2.3-6.5 6.7-6.5 9 0" />
      <ellipse cx="50" cy="38" rx="14" ry="8" style={hiFill} />
      <circle cx="52" cy="37.5" r="4.5" style={accent} />
      <circle cx="52" cy="37.5" r="4.5" />
      <path d="M12 46h72c0 21-16 36-36 36S12 67 12 46z" />
      <path d="M20 58c12 8 44 8 56 0" style={hiStroke} />
      <path d="M36 81l2 6h20l2-6" />
    </ArtBase>
  );
}
