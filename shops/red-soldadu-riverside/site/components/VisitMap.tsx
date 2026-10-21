// Google Maps embed (no API key), lazy, below the fold. The "Buka di Google Maps" link
// always sits next to it in the Visit section. Until the iframe paints, a quiet
// fallback (pin + address) shows through instead of an empty box.
export default function VisitMap({ src, title, fallback }: { src: string; title: string; fallback: string }) {
  return (
    <div className="visit-map aspect-[4/3] w-full overflow-hidden">
      <div className="visit-map-fallback" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21.5s-7-6.1-7-11.6a7 7 0 0 1 14 0c0 5.5-7 11.6-7 11.6z" />
          <circle cx="12" cy="9.8" r="2.6" />
        </svg>
        <span className="t-small">{fallback}</span>
      </div>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
      />
    </div>
  );
}
