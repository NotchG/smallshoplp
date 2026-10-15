import { Cell } from "@/components/Shelf";
import { labels, shop, visit } from "@/content";

// Google Maps embed in a lit cubby: 4:3 on phone, 440px tall on desktop. Lazy.
export default function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <Cell className={`cell--photo visit-map ${className}`}>
      <div className="cell-media">
        {/* Shown until the lazy map loads, and if it is blocked. */}
        <div className="map-fallback">
          <p className="t-small">{shop.addressShort}</p>
          <a className="btn btn--secondary" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
            {labels.mapFallback}
          </a>
        </div>
        <iframe
          src={shop.mapEmbedSrc}
          title={visit.mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </Cell>
  );
}
