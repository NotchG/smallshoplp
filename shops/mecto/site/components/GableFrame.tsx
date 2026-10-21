import LedEdges from "@/components/LedEdges";

type Img = { src: string; srcSet: string; width: number; height: number; alt: string };

// A photo inside the hall's gable silhouette. `lit` adds the LED edges (hero only),
// `edge` a static 2px baja roof line, `melt` fades the lower edge into its section.
export default function GableFrame({
  img,
  aspectClass,
  sizes,
  lit = false,
  edge = false,
  melt = false,
  priority = false,
  className = "",
}: {
  img: Img;
  aspectClass: string;
  sizes: string;
  lit?: boolean;
  edge?: boolean;
  melt?: boolean;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative ${aspectClass} ${className}`}>
      <div className={`gable absolute inset-0 ${melt ? "melt" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src}
          srcSet={img.srcSet}
          sizes={sizes}
          width={img.width}
          height={img.height}
          alt={img.alt}
          className="h-full w-full object-cover"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding={priority ? "sync" : "async"}
        />
      </div>
      {edge && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline
            points="0,26 50,0 100,26"
            className="fill-none stroke-baja"
            strokeWidth={2}
            strokeLinejoin="miter"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}
      {lit && <LedEdges />}
    </div>
  );
}
