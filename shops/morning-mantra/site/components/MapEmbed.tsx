// Google Maps embed, lazy. The wall-coloured box and its label show until the map paints.
export default function MapEmbed({ src, title, placeholder }: { src: string; title: string; placeholder: string }) {
  return (
    <div className="map-frame">
      <span className="map-placeholder label" aria-hidden="true">
        {placeholder}
      </span>
      <iframe src={src} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
    </div>
  );
}
