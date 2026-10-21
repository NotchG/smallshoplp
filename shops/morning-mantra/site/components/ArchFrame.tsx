// The white arched doorway between the rooms, as a frame for the owner's photo.
// The arch only curves the top 24%, so owner-1's baked-in tagline (from ~28% down) stays whole.
export default function ArchFrame({
  src,
  width,
  height,
  alt,
  className = "",
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`arch-frame ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} width={width} height={height} alt={alt} fetchPriority="high" decoding="async" />
    </div>
  );
}
