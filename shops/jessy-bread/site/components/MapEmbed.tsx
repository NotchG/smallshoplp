import { shop, visit } from "@/content";
import { PinIcon } from "./icons";

// Lazy map below the fold, plus a plain link so the address works without the iframe.
export default function MapEmbed() {
  return (
    <div>
      <div className="map-wrap">
        {/* Shows while the lazy map loads, or if it is blocked. */}
        <div className="map-fallback" aria-hidden="true">
          <PinIcon />
          <span className="font-medium">{visit.mapFallback}</span>
        </div>
        <iframe
          className="map-frame"
          src={shop.mapEmbed}
          title={visit.mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a className="text-link mt-2" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
        {visit.mapLink}
      </a>
    </div>
  );
}
