// owner-2.jpg cut round and hung on the green wall, like the bevelled mirror above the sofas.
// The krem ring (outline, offset 8px) is the mirror's bevel.
export default function MirrorPhoto({ alt, className = "" }: { alt: string; className?: string }) {
  return (
    <div className={`mirror ${className}`}>
      <img
        src="/ruang-kumpul.jpg"
        alt={alt}
        width={1100}
        height={1100}
        fetchPriority="low"
        className="h-full w-full object-cover"
        style={{ objectPosition: "55% 38%" }}
      />
    </div>
  );
}
