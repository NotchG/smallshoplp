import { actions, shop, visit } from "@/content";
import { IconDirections } from "./Icons";

// Lazy Google Maps embed plus a visible link for contexts where the iframe can't load.
// Behind the (transparent until painted) iframe sits a slate panel with the address, so the
// box never reads as an empty block before the map arrives.
export default function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="map-wrap">
        <div className="map-fallback" aria-hidden="true">
          <IconDirections className="h-7 w-7" />
          <p className="t-small mt-3 font-semibold">{visit.mapLoading}</p>
          <p className="t-small mt-1 text-neon/80">{shop.addressShort}</p>
        </div>
        <iframe
          src={shop.mapEmbedUrl}
          title={visit.mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map-frame"
        />
      </div>
      <p className="t-small mt-2">
        <a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer" className="link inline-flex min-h-11 items-center font-semibold">
          {actions.openMaps}
        </a>
      </p>
    </div>
  );
}
