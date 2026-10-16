import { hero } from "@/content";

// owner-2.jpg (uploaded by the business) in the shape of their arched doorway.
export default function ArchPhoto() {
  return (
    <div className="hero-arch">
      <img
        src="/photos/facade-1200.jpg"
        srcSet="/photos/facade-800.jpg 800w, /photos/facade-1200.jpg 1200w"
        sizes="(min-width: 1024px) 486px, (min-width: 768px) 520px, 100vw"
        width={1200}
        height={1600}
        alt={hero.photoAlt}
        fetchPriority="high"
      />
    </div>
  );
}
