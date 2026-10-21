// Inside an ArchFrame: one of their wall niches (photo-3) with a black iron sconce and its
// amber pane, and the back of a red velvet sofa across the bottom. Flat shapes, decorative.
const INK = "#2B1518";
const AMBER = "#E2A23A";
const VELVET = "#6B1526";
const VELVET_DEEP = "#55101E";
const PLASTER = "#EBD6CB";

export default function NicheScene({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`block h-full w-full ${className}`}
      viewBox="0 0 420 540"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="niche-glow" cx="210" cy="196" r="180" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={AMBER} stopOpacity="0.5" />
          <stop offset="0.55" stopColor={AMBER} stopOpacity="0.16" />
          <stop offset="1" stopColor={AMBER} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* moulding line just inside the arch */}
      <path d="M16 540V210A194 194 0 0 1 404 210V540" fill="none" stroke={PLASTER} strokeOpacity="0.55" strokeWidth="3" />

      {/* warm light from the sconce on the recess */}
      <circle cx="210" cy="196" r="180" fill="url(#niche-glow)" />

      {/* sconce */}
      <g transform="translate(210 200) scale(1.22) translate(-210 -200)">
      <g fill={INK}>
        <circle cx="210" cy="101" r="5" />
        <path d="M180 140L210 107L240 140Z" />
        <rect x="174" y="137" width="72" height="8" rx="2" />
        <path d="M182 145H238L232 222H188Z" />
        <rect x="184" y="219" width="52" height="7" rx="2" />
        <path d="M192 226H228L218 242H202Z" />
        <rect x="207" y="241" width="6" height="52" />
        <rect x="194" y="290" width="32" height="12" rx="6" />
      </g>
      <g fill={AMBER}>
        <path d="M188 152H207V215H193Z" />
        <path d="M213 152H232L227 215H213Z" />
      </g>
      <g fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round">
        <path d="M210 258C190 258 181 272 191 281C197 286 204 282 201 276" />
        <path d="M210 258C230 258 239 272 229 281C223 286 216 282 219 276" />
      </g>
      </g>

      {/* the back of a red velvet sofa */}
      <rect x="-10" y="446" width="440" height="110" fill={VELVET_DEEP} />
      <g fill={VELVET}>
        <rect x="-24" y="404" width="164" height="170" rx="28" />
        <rect x="132" y="400" width="156" height="174" rx="28" />
        <rect x="280" y="404" width="164" height="170" rx="28" />
      </g>
      <g stroke={INK} strokeOpacity="0.3" strokeWidth="2">
        <path d="M136 436V540" />
        <path d="M284 436V540" />
      </g>
    </svg>
  );
}
