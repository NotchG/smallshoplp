import { hero } from "@/content";

// The owner's night photo seen through one of the kedai's white arched windows.
// Pre-cropped (x380 y60, 540×720) so no guest faces or the parked scooter show.
// "grounded": the window stands on the hero's bottom edge, opening onto the Kapur menu below.
export default function ArchWindow({ className = "" }: { className?: string }) {
  return (
    <div className={`arch ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/teras-malam.webp" width={540} height={720} alt={hero.photoAlt} fetchPriority="high" />
      <span className="arch-muntin arch-muntin--v" aria-hidden="true" />
      <span className="arch-muntin arch-muntin--h" aria-hidden="true" />
    </div>
  );
}
