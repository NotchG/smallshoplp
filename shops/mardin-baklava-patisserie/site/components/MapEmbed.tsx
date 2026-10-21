import { shop, visit } from "@/content";

// Lazy Google Maps embed. The room-colour placeholder underneath shows until the map paints
// (and stays if the embed is blocked), so the frame never reads as broken.
export default function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`map-frame ${className}`}>
      <div className="map-placeholder" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
        <span className="t-label">{shop.addressLines[0]}</span>
        <span className="t-small">{shop.addressLines[1]}</span>
      </div>
      <iframe
        src={shop.mapEmbed}
        title={visit.mapTitle}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
