import { shop, visit } from "@/content";
import { IconPin } from "@/components/Icons";

// Lazy Google map. The layer underneath shows the address until (or if) the map loads.
export default function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`map-frame relative aspect-[4/3] w-full overflow-hidden rounded-md lg:aspect-auto lg:min-h-[420px] ${className}`}>
      <div aria-hidden="true" className="absolute inset-0 grid place-items-center p-6 text-center">
        <div>
          <span className="mx-auto mb-3 block h-8 w-8 text-pintu">
            <IconPin />
          </span>
          <p className="t-body font-bold">{shop.addressShort}</p>
          <p className="t-small mt-1">{visit.mapFallback}</p>
        </div>
      </div>
      <iframe
        src={shop.embedUrl}
        title={visit.mapTitle}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
