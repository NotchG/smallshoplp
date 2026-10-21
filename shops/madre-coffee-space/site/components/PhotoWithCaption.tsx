import type { Item, Photo } from "@/content";
import { mock } from "@/lib/mockup";

// A rounded photo with its caption 14px below; an optional price sits right after the caption text.
export default function PhotoWithCaption({
  photo,
  ratio,
  price,
  className = "",
  frameClassName = "",
  objectPosition,
  captionClassName = "t-body",
}: {
  photo: Photo;
  ratio: string;
  price?: Item;
  className?: string;
  frameClassName?: string;
  objectPosition?: string;
  captionClassName?: string;
}) {
  return (
    <figure className={className}>
      <div className={`photo ${frameClassName}`} style={{ aspectRatio: ratio }}>
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.w}
          height={photo.h}
          loading="lazy"
          decoding="async"
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
      {photo.caption && (
        <figcaption className={`caption ${captionClassName}`}>
          {photo.caption}
          {price && (
            <>
              {" "}
              <span className="price" {...mock(price.mockup)}>
                {price.text}
              </span>
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}
