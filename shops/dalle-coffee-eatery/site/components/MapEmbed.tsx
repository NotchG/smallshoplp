import { withNums } from "@/lib/nums";

// Keyless Google Maps embed, lazy, below the fold. A labelled panel sits underneath it,
// so the box is never blank while the map loads (or if it is blocked).
export default function MapEmbed({
  src,
  title,
  place,
  area,
  loading,
}: {
  src: string;
  title: string;
  place: string;
  area: string;
  loading: string;
}) {
  return (
    <div className="map">
      <div className="map-fallback" aria-hidden="true">
        <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
          <path d="M2 34 V14 A12 12 0 0 1 26 14 V34" stroke="currentColor" strokeWidth="2" />
          <circle cx="14" cy="15" r="3.5" fill="currentColor" />
        </svg>
        <p className="t-lead font-display mt-2">{withNums(place)}</p>
        <p className="t-small">{area}</p>
        <p className="t-small muted-plaster mt-3">{loading}</p>
      </div>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
