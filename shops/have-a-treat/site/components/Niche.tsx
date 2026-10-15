import TreatArt from "@/components/art/treats";
import type { TreatArt as ArtName } from "@/content";

// A teak arched niche, cut like the shop's bookshelves, with a treat standing on its shelf.
// Size comes from the parent (width) and the className (aspect ratio).
export default function Niche({
  art,
  label,
  tone = "sand",
  className = "",
}: {
  art: ArtName;
  label: string;
  tone?: "sand" | "lilac";
  className?: string;
}) {
  return (
    <div className={`niche ${className}`}>
      <div className="niche-inner" data-tone={tone}>
        <TreatArt art={art} label={label} className="niche-art" />
      </div>
    </div>
  );
}
