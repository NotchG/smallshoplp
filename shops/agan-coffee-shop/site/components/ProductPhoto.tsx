import type { CSSProperties } from "react";
import type { Photo } from "@/content";
import { mock } from "@/lib/mockup";

// An owner photo cropped in CSS (aspect-ratio + object-position), optional 6px steel frame,
// caption 8px under it. Only the mockup part of a caption carries data-mockup.
export default function ProductPhoto({
  photo,
  framed = true,
  priority = false,
  className = "",
}: {
  photo: Photo;
  framed?: boolean;
  priority?: boolean;
  className?: string;
}) {
  const frameStyle = {
    "--ar": photo.aspect,
    "--ar-phone": photo.aspectPhone ?? photo.aspect,
  } as CSSProperties;
  const imgStyle: CSSProperties = {
    objectPosition: photo.position,
    ...(photo.zoom ? { transform: `scale(${photo.zoom.scale})`, transformOrigin: photo.zoom.origin } : {}),
  };

  return (
    <figure className={`photo ${className}`}>
      <div className={`photo-frame${framed ? " framed" : ""}`} style={frameStyle}>
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
          style={imgStyle}
        />
      </div>
      <figcaption className="t-small">
        {photo.caption.map((part, i) => (
          <span key={i} {...mock(part.mockup)}>
            {part.text}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
