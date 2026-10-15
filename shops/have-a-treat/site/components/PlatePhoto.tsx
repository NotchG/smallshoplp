import Image from "next/image";
import type { PlateLabel } from "@/content";

// The owner's overhead breakfast photo, with each component labelled on the plate.
// Chips are hidden below 768px; there the components read as a sentence beside the photo.
export default function PlatePhoto({
  src,
  alt,
  labels,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  labels: PlateLabel[];
  sizes: string;
  className?: string;
}) {
  return (
    <figure className={`relative ${className}`}>
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-sand">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
      <div className="absolute inset-0 hidden md:block" aria-hidden="true">
        {labels.map((l) => (
          <span
            key={l.text}
            className="plate-chip"
            data-side={l.side}
            style={
              { left: `${l.x}%`, top: `${l.y}%`, "--len": `${l.len ?? 16}px` } as React.CSSProperties
            }
          >
            <span className="plate-chip-text">{l.text}</span>
            <span className="plate-chip-leader" />
            <span className="plate-chip-dot" />
          </span>
        ))}
      </div>
    </figure>
  );
}
