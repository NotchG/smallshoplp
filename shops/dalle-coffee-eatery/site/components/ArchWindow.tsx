import Image from "next/image";

// The owner's photo of the bar in a tall arched opening whose base sits on the hero's floor line.
// Line = the crisp 2px outline; glow and dim are separate layers for the signature moment.
export default function ArchWindow({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) {
  return (
    <div className="arch">
      <span className="arch-line" aria-hidden="true" />
      <span className="arch-glow" aria-hidden="true" data-hero="glow" />
      <div className="arch-photo">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          preload
          fetchPriority="high"
          loading="eager"
          sizes="(min-width: 1024px) 486px, (min-width: 768px) 341px, 340px"
          data-hero="photo"
        />
        <span className="arch-dim" aria-hidden="true" data-hero="dim" />
      </div>
    </div>
  );
}
