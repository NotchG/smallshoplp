import { shop, ui } from "@/content";

// The one primary action: Google Maps directions to the listing's place.
export default function DirectionsButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={shop.directionsUrl}
      target="_blank"
      rel="noopener"
      className={`btn-directions ${className}`}
    >
      {ui.directions}
      <span className="sr-only">{ui.directionsHint}</span>
      <span className="btn-arrow" aria-hidden="true">
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <path d="M1 7h14M10 1.5 15.5 7 10 12.5" stroke="currentColor" strokeWidth="2.25" strokeLinecap="square" />
        </svg>
      </span>
    </a>
  );
}
