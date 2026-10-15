import { shop } from "@/content";

// "Buka 24 jam · setiap hari" with the red "on" dot that switches on after the frames.
export default function HoursBadge() {
  return (
    <p className="t-small t-label inline-flex items-center gap-2.5 border border-garis px-3.5 py-1.5 rounded-full">
      <span
        className="hero-dot inline-block size-2 rounded-full bg-pabbo"
        data-frame-dot=""
        aria-hidden="true"
      />
      {shop.hours}
    </p>
  );
}
