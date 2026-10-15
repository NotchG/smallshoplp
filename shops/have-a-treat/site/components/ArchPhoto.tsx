import Image from "next/image";

// The owner's photo in a tall arch, cut like their windows and shelves. Never animates (LCP).
export default function ArchPhoto({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`arch-photo relative aspect-4/5 overflow-hidden bg-sand ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        preload
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: "50% 45%" }}
      />
    </div>
  );
}
