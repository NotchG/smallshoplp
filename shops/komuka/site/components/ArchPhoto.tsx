import { mock } from "@/lib/mockup";

// Owner photo in an arch frame. Arches only where KOMUKA has them:
// "full" = semicircle top on a 3:4 portrait box, "segment" = segmental top on a 4:3 landscape box.
export default function ArchPhoto({
  src,
  alt,
  width,
  height,
  variant,
  caption,
  captionMockup,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  variant: "full" | "segment";
  caption?: string;
  captionMockup?: boolean;
  className?: string;
}) {
  const frame = variant === "full" ? "arch-full aspect-[3/4]" : "arch-segment aspect-[4/3]";
  return (
    <figure className={className}>
      <div className={`overflow-hidden bg-kanopi ${frame}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-cover"
        />
      </div>
      {caption && (
        <figcaption className="t-small mt-3" {...mock(captionMockup)}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
