import type { Photo } from "@/content";

// A photo in a fixed aspect-ratio box with paper tag chips placed by % (design brief §6).
// Tags are decorative for screen readers; the hidden figcaption lists them instead, so tags
// hidden on phones are still announced.
export default function TaggedPhoto({
  photo,
  ratio,
  className = "",
  boxClassName = "",
  dot = "cobalt",
  priority = false,
  sizes,
}: {
  photo: Photo;
  ratio: string;
  className?: string;
  boxClassName?: string;
  dot?: "cobalt" | "mustard";
  priority?: boolean;
  sizes?: string;
}) {
  const tags = photo.tags ?? [];
  return (
    <figure className={className}>
      <div className={`tagged-box ${boxClassName}`} style={{ aspectRatio: ratio }}>
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.w}
          height={photo.h}
          sizes={sizes}
          className="tagged-img"
          decoding={priority ? "sync" : "async"}
          {...(priority ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
        />
        {tags.length > 0 && (
          <ul className={`tag-list dot-${dot}`} aria-hidden="true">
            {tags.map((t) => {
              const align = t.align ?? "left";
              const style =
                align === "right"
                  ? { right: `${100 - t.x}%`, top: `${t.y}%` }
                  : { left: `${t.x}%`, top: `${t.y}%` };
              return (
                <li
                  key={t.label}
                  className={`tag tag-${align}${t.phone === false ? " tag-nophone" : ""}`}
                  style={style}
                >
                  <span className="tag-chip">
                    <span className="tag-dot" />
                    {t.label}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {tags.length > 0 && (
        <figcaption className="vh">Di foto: {tags.map((t) => t.label).join(", ")}.</figcaption>
      )}
    </figure>
  );
}
