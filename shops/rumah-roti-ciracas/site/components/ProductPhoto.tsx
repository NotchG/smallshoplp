import type { CSSProperties, ReactNode } from "react";
import type { Photo } from "@/content";

// <figure> with an owner photo (pre-cropped in public/img) and its caption or paper labels.
// Plain <img> with width/height so nothing shifts; lazy except the hero.
export default function ProductPhoto({
  photo,
  ratio,
  priority,
  className = "",
  children,
}: {
  photo: Photo;
  ratio?: string;
  priority?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const style: CSSProperties = { aspectRatio: ratio ?? `${photo.width} / ${photo.height}` };
  return (
    <figure className={`photo ${className}`}>
      <div className="photo-frame" style={style}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          decoding="async"
          {...(priority ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
        />
      </div>
      {children}
    </figure>
  );
}
