import { labels, shop } from "@/content";

// Google Maps embed by name search (no API key). Lazy, below the fold, with a plain link under it.
export default function MapEmbed() {
  return (
    <div>
      <div className="map-frame relative aspect-square overflow-hidden rounded-2xl md:aspect-[4/3]">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 18s-5.5-5.2-5.5-9.3a5.5 5.5 0 0 1 11 0C15.5 12.8 10 18 10 18Z" />
            <circle cx="10" cy="8.6" r="2" />
          </svg>
          <span className="t-small">{labels.mapLoading}</span>
        </div>
        <iframe
          src={shop.mapEmbedSrc}
          title={labels.mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <p className="t-small mt-2">
        <a className="link inline-flex min-h-11 items-center" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
          {labels.mapLink}
        </a>
      </p>
    </div>
  );
}
