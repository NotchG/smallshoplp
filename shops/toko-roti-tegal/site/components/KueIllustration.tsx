import type { KueVariant } from "@/content";

// Flat kue pieces from the glass counter. Each piece is drawn in a 70 x 60 box, resting on y = 56.
// Max three tones per object, no outlines, no faces. Drawn fresh, not traced from photos.

export const K = {
  crust: "#C98B4A",
  crumb: "#F6DFA9",
  glint: "#DBA563",
  kuning: "#F2C94C",
  pandan: "#8DB360",
  daun: "#5C8740",
  tinta: "#3A2015",
  kayu: "#6B3F27",
  kotak: "#FFFCF6",
};

const RISOLES_CRUMBS: [number, number, number][] = [
  [12, 38, 1.6], [20, 30, 1.4], [28, 44, 1.7], [36, 33, 1.5], [44, 46, 1.4], [52, 36, 1.6],
  [58, 44, 1.3], [16, 46, 1.2], [40, 40, 1.2], [26, 36, 1.1], [48, 30, 1.2], [60, 34, 1.1],
];

export function KuePiece({ variant }: { variant: KueVariant }) {
  switch (variant) {
    case "pastel":
      return (
        <g>
          <path d="M3 56C3 26 22 10 35 10C48 10 67 26 67 56Z" fill={K.crust} />
          <path d="M16 36C19 24 27 17 35 15C30 22 26 30 24 40C23 44 15 42 16 36Z" fill={K.glint} />
          <path
            d="M6 54C6 28 23 13 35 13C47 13 64 28 64 54"
            fill="none"
            stroke={K.kayu}
            strokeOpacity="0.45"
            strokeWidth="4.5"
            strokeDasharray="0.1 6.5"
            strokeLinecap="round"
          />
        </g>
      );
    case "risoles":
      return (
        <g>
          <rect x="3" y="24" width="64" height="32" rx="16" fill={K.crust} />
          <rect x="12" y="28" width="42" height="5" rx="2.5" fill={K.glint} />
          {RISOLES_CRUMBS.map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill={i % 3 === 0 ? K.kayu : K.crumb} opacity={i % 3 === 0 ? 0.45 : 0.9} />
          ))}
        </g>
      );
    case "lemper":
      return (
        <g>
          <rect x="5" y="22" width="60" height="34" rx="7" fill={K.daun} />
          <path d="M5 30L65 26M5 40L65 37M5 50L65 47" stroke={K.pandan} strokeWidth="1.6" opacity="0.9" />
          <path d="M5 22H20L14 56H5Z" fill={K.pandan} opacity="0.55" />
          <path d="M1 26L13 50M57 24L69 46" stroke={K.crumb} strokeWidth="2.2" strokeLinecap="round" />
        </g>
      );
    case "kueLumpur":
      return (
        <g>
          <path d="M8 34C8 16 21 9 35 9C49 9 62 16 62 34Z" fill={K.kuning} />
          <path d="M9 32H61L56 56H14Z" fill={K.kotak} />
          <path d="M18 34L20 55M27 34L28 56M35 34V56M43 34L42 56M52 34L50 55" stroke={K.tinta} strokeOpacity="0.14" strokeWidth="1.4" />
          <ellipse cx="42" cy="18" rx="3.6" ry="2.6" fill={K.tinta} transform="rotate(-20 42 18)" />
        </g>
      );
    case "dadarGulung":
      return (
        <g>
          <rect x="3" y="24" width="64" height="32" rx="16" fill={K.pandan} />
          <path d="M18 24C24 34 24 46 18 56" fill="none" stroke={K.daun} strokeWidth="2" opacity="0.8" />
          <ellipse cx="57" cy="40" rx="9" ry="15" fill={K.daun} />
          <ellipse cx="57" cy="40" rx="5.5" ry="10" fill={K.kayu} />
        </g>
      );
    case "boluPandanGulung":
      return (
        <g>
          <circle cx="35" cy="30" r="26" fill={K.daun} />
          <circle cx="35" cy="30" r="23.5" fill={K.pandan} />
          <path
            d="M35 30C38 30 39 34 36 35.5C32 37 29 33 30.5 29.5C32.5 25 39 24.5 42 28.5C45.5 33 43 40 37.5 41.5C30.5 43.5 24 38.5 23.5 31.5C23 23.5 30 18 38 18.5C46 19 51.5 26 51 34"
            fill="none"
            stroke={K.kotak}
            strokeWidth="3.4"
            strokeLinecap="round"
          />
        </g>
      );
  }
}

// Three pieces on one brown tray, as they sit in the glass case.
export default function KueTray({
  variant,
  label,
  className = "",
}: {
  variant: KueVariant;
  label: string;
  className?: string;
}) {
  const round = variant === "boluPandanGulung" || variant === "kueLumpur" || variant === "pastel";
  const spots = round
    ? [
        [4, 14],
        [73, 8],
        [142, 14],
      ]
    : [
        [6, 4],
        [70, 16],
        [134, 6],
      ];
  return (
    <div role="img" aria-label={label} className={`kue-tray px-3 pb-3 pt-4 ${className}`}>
      <svg viewBox="0 0 216 80" aria-hidden="true" focusable="false" className="block h-auto w-full">
        <ellipse cx="108" cy="74" rx="96" ry="4" fill="#000" opacity="0.18" />
        {spots.map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <KuePiece variant={variant} />
          </g>
        ))}
      </svg>
    </div>
  );
}
