import { shop, visit } from "@/content";
import { PinIcon } from "@/components/icons";

// Lazy Google map of the listing address. A fallback layer sits under the iframe, so the
// box is never blank while the map loads (or if it can't), and a plain link follows.
export default function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="map-wrap">
        <div className="map-fallback" aria-hidden="true">
          <PinIcon className="map-pin" />
          <span className="font-bold">{shop.name}</span>
          <span className="t-small max-w-[28ch]">{shop.addressShort}</span>
          <span className="t-small mt-1 opacity-80">{visit.mapLoading}</span>
        </div>
        <iframe
          className="map-frame"
          src={shop.mapEmbedUrl}
          title={visit.mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-3">
        <a
          href={shop.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-crust inline-flex min-h-11 items-center underline"
        >
          {visit.mapLink}
        </a>
      </p>
    </div>
  );
}
