import type { ReactNode } from "react";
import type { Photo } from "@/content";
import { Cell } from "@/components/Shelf";
import { mock } from "@/lib/mockup";
import { placeholders } from "@/lib/placeholders";

// An owner photo filling its cubby edge to edge, under the LED strip.
// The caption (or any children) sits 12px under the photo, inside the same cell.
export default function PhotoCell({
  photo,
  className = "",
  mediaClassName = "media-fill",
  priority = false,
  veil = false,
  children,
}: {
  photo: Photo;
  className?: string;
  mediaClassName?: string;
  priority?: boolean;
  veil?: boolean;
  children?: ReactNode;
}) {
  const caption = photo.caption;
  return (
    <Cell className={`cell--photo ${className}`} veil={veil}>
      <div
        className={`cell-media ${mediaClassName}`}
        style={
          placeholders[photo.src]
            ? ({ "--lqip": `url(${placeholders[photo.src]})`, "--lqip-pos": photo.position } as React.CSSProperties)
            : undefined
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          style={{ objectPosition: photo.position }}
          {...(priority
            ? { fetchPriority: "high" as const, loading: "eager" as const }
            : { loading: "lazy" as const })}
        />
      </div>
      {(caption || children) && (
        <div className="cell-body cell-caption">
          {caption && (
            <p className="t-small" {...mock(caption.mockup)}>
              {caption.text}
            </p>
          )}
          {children}
        </div>
      )}
    </Cell>
  );
}
