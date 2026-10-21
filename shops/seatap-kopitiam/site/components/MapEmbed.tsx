// Lazy Google map. The address sits behind it on a sage tile, so something useful shows
// before (or instead of) the map loading.
export default function MapEmbed({
  src,
  title,
  address,
  className = "",
}: {
  src: string;
  title: string;
  address: string[];
  className?: string;
}) {
  return (
    <div className={`map-frame tile-sage ${className}`}>
      <p className="t-body absolute inset-0 flex flex-col justify-end p-5 font-medium">
        {address.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </p>
      <iframe src={src} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}
