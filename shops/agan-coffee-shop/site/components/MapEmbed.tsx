// Google Maps embed in a 6px steel frame. Lazy, below the fold.
export default function MapEmbed({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`map-frame ${className}`}>
      <iframe
        src={src}
        title="Peta lokasi Agan Coffee"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-iframe"
      />
    </div>
  );
}
