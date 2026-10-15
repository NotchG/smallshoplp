import { artLabels } from "@/content";
import { drinkGeometry, fill, type DrinkArtId } from "@/lib/art";

// Drinks drawn side-on and cut through: the glass is a light outline, liquid layers are flat
// fills, and each glass has one lampu glint stripe. Size: 1 viewBox unit = var(--s) px.
export default function DrinkArt({
  id,
  uid,
  className = "",
}: {
  id: DrinkArtId;
  uid: string;
  className?: string;
}) {
  const { w, h } = drinkGeometry[id];
  const clip = `${uid}-clip`;

  return (
    <svg
      role="img"
      aria-label={artLabels[id]}
      viewBox={`0 0 ${w} ${h}`}
      className={`art-svg ${className}`}
      style={{ width: `calc(${w}px * var(--s, 1))`, height: `calc(${h}px * var(--s, 1))` }}
    >
      {id === "americano" && (
        <>
          <defs>
            <clipPath id={clip}>
              <rect x="5" y="3" width="62" height="93" />
            </clipPath>
          </defs>
          <path className="glass-fill" d="M3 3 L69 3 L69 104 Q69 109 64 109 L8 109 Q3 109 3 104 Z" />
          <g clipPath={`url(#${clip})`}>
            <rect x="0" y="22" width="72" height="80" fill={fill.espresso} />
            <rect x="0" y="18" width="72" height="5" fill={fill.crema} />
          </g>
          <rect x="11" y="30" width="4" height="56" rx="2" fill={fill.lampu} fillOpacity="0.75" />
          <path className="glass-edge" d="M3 3 L69 3 L69 104 Q69 109 64 109 L8 109 Q3 109 3 104 Z" />
          <path className="glass-ripple" d="M5 96 L67 96" />
        </>
      )}

      {id === "kawanLama" && (
        <>
          <defs>
            <clipPath id={clip}>
              <path d="M5 3 L67 3 L62.4 120 L9.6 120 Z" />
            </clipPath>
          </defs>
          <path className="glass-fill" d="M2 3 L70 3 L65 128 Q64.8 133 60 133 L12 133 Q7.2 133 7 128 Z" />
          <g clipPath={`url(#${clip})`}>
            <rect x="0" y="48" width="72" height="80" fill={fill.crema} />
            <path d="M0 16 L72 16 L72 50 C58 54 46 46 34 50 C22 54 12 47 0 50 Z" fill={fill.espresso} />
            <rect x="0" y="14" width="72" height="3" fill={fill.lampu} fillOpacity="0.55" />
          </g>
          <rect x="11" y="26" width="4" height="82" rx="2" fill={fill.lampu} fillOpacity="0.75" />
          <path className="glass-edge" d="M2 3 L70 3 L65 128 Q64.8 133 60 133 L12 133 Q7.2 133 7 128 Z" />
          <path className="glass-ripple" d="M9.6 120 L62.4 120" />
        </>
      )}

      {id === "dirtyLatte" && (
        <>
          <defs>
            <clipPath id={clip}>
              <path d="M4 4 C1 18 7 28 4 42 C1 56 7 66 4 80 L74 80 C71 66 77 56 74 42 C71 28 77 18 74 4 Z" />
            </clipPath>
          </defs>
          <path
            className="glass-fill"
            d="M4 4 C1 18 7 28 4 42 C1 56 7 66 4 80 C3 86 5 90 9 90 L69 90 C73 90 75 86 74 80 C71 66 77 56 74 42 C71 28 77 18 74 4 Z"
          />
          <g clipPath={`url(#${clip})`}>
            <rect x="0" y="30" width="78" height="50" fill={fill.lampu} />
            {/* espresso settling into cold milk: a soft crema cloud under the espresso */}
            <path d="M0 30 L78 30 L78 41 C70 47 62 39 54 44 C46 49 38 41 30 46 C22 51 12 42 0 45 Z" fill={fill.crema} />
            <path d="M0 14 L78 14 L78 33 C68 37 60 31 50 35 C40 39 30 32 20 36 C12 39 6 34 0 35 Z" fill={fill.espresso} />
          </g>
          <rect x="10" y="18" width="3.5" height="14" rx="1.75" fill={fill.lampu} fillOpacity="0.8" />
          <path className="glass-ripple" style={{ strokeOpacity: 0.28 }} d="M24 8 C22 30 27 55 24 86" />
          <path className="glass-ripple" style={{ strokeOpacity: 0.28 }} d="M40 6 C42 30 37 55 40 88" />
          <path className="glass-ripple" style={{ strokeOpacity: 0.28 }} d="M56 8 C54 30 59 55 56 86" />
          <path
            className="glass-edge"
            d="M4 4 C1 18 7 28 4 42 C1 56 7 66 4 80 C3 86 5 90 9 90 L69 90 C73 90 75 86 74 80 C71 66 77 56 74 42 C71 28 77 18 74 4 Z"
          />
        </>
      )}

      {id === "v60" && (
        <>
          <defs>
            <clipPath id={clip}>
              <path d="M12 52 L68 52 L68 126 Q68 146 48 146 L32 146 Q12 146 12 126 Z" />
            </clipPath>
          </defs>
          {/* server */}
          <path className="glass-fill" d="M12 52 L68 52 L68 126 Q68 146 48 146 L32 146 Q12 146 12 126 Z" />
          <g clipPath={`url(#${clip})`}>
            <rect x="0" y="100" width="80" height="50" fill={fill.crema} />
          </g>
          <ellipse cx="40" cy="64" rx="1.8" ry="2.6" fill={fill.crema} />
          <ellipse cx="40" cy="78" rx="1.4" ry="2" fill={fill.crema} />
          <rect x="18" y="106" width="3.5" height="28" rx="1.75" fill={fill.lampu} fillOpacity="0.8" />
          <path className="glass-edge" d="M12 52 L68 52 L68 126 Q68 146 48 146 L32 146 Q12 146 12 126 Z" />
          {/* dripper */}
          <rect className="glass-fill" x="16" y="45" width="48" height="7" rx="1.5" />
          <rect className="glass-edge" x="16" y="45" width="48" height="7" rx="1.5" />
          <path className="glass-fill" d="M4 4 L76 4 L52 45 L28 45 Z" />
          <path d="M9 7 L71 7 L50 42 L30 42 Z" fill={fill.lampu} />
          <path d="M16.8 20 L63.2 20 L50 42 L30 42 Z" fill={fill.espresso} />
          <path d="M15.6 18 L64.4 18 L63.2 20 L16.8 20 Z" fill={fill.crema} />
          <path className="glass-edge" d="M4 4 L76 4 L52 45 L28 45 Z" />
        </>
      )}

      {id === "citrus" && (
        <>
          <defs>
            <clipPath id={clip}>
              <path d="M5 4 L73 4 L67.6 128 L10.4 128 Z" />
            </clipPath>
            <clipPath id={`${uid}-wheel`}>
              <rect x="0" y="-20" width="78" height="36" />
            </clipPath>
          </defs>
          <path className="glass-fill" d="M3 4 L75 4 L69 136 Q68.8 139 66 139 L12 139 Q9.2 139 9 136 Z" />
          <g clipPath={`url(#${clip})`}>
            <rect x="0" y="28" width="78" height="100" fill={fill.citrus} />
            <rect x="0" y="12" width="78" height="17" fill={fill.lampu} fillOpacity="0.92" />
          </g>
          {/* dried orange wheel, standing half in the foam */}
          <g clipPath={`url(#${uid}-wheel)`}>
            <circle cx="50" cy="13" r="12" fill={fill.toastDark} />
            <circle cx="50" cy="13" r="9.5" fill={fill.citrus} />
            <path
              d="M50 13 L50 3.5 M50 13 L58.2 8.2 M50 13 L58.2 17.8 M50 13 L41.8 8.2 M50 13 L41.8 17.8"
              stroke={fill.toastDark}
              strokeWidth="1.3"
            />
          </g>
          <path className="glass-ripple" d="M3.9 48 L74.1 48" />
          <path className="glass-ripple" d="M15 52 L17 124 M27 52 L28 124 M39 52 L39 124 M51 52 L50 124 M63 52 L61 124" />
          <rect x="10" y="56" width="4" height="60" rx="2" fill={fill.lampu} fillOpacity="0.7" />
          <path className="glass-edge" d="M3 4 L75 4 L69 136 Q68.8 139 66 139 L12 139 Q9.2 139 9 136 Z" />
          <path className="glass-ripple" d="M10.4 128 L67.6 128" />
        </>
      )}
    </svg>
  );
}
