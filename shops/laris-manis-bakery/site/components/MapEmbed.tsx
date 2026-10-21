import { shop, ui } from "@/content";
import Icon from "./Icon";

// Lazy Google Maps embed, 4:3, 20px radius. A quiet tile panel with a pin sits underneath,
// so the space is never blank while the map loads. Not focusable: the "Petunjuk arah"
// button beside the map is the way out to Google Maps.
export default function MapEmbed() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] tile-panel">
      <div
        aria-hidden="true"
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center"
      >
        <span className="grid size-14 place-items-center rounded-full bg-biru-krat text-putih-ubin [&>svg]:size-7">
          <Icon name="pin" />
        </span>
        <span className="t-body font-extrabold text-biru-krat">{ui.mapFallback}</span>
        <span className="t-small">{shop.addressShort}</span>
      </div>
      <iframe
        src={shop.mapEmbedSrc}
        title={ui.mapTitle}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
