import { hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// "Petunjuk Arah" (+ "WhatsApp" on light grounds). Same DOM order at every width.
// On dongker the primary is rumah: jago on dongker is only 2.3:1.
export default function ActionButtons({
  tone = "light",
  withWhatsapp = true,
}: {
  tone?: "light" | "dark";
  withWhatsapp?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
      <a
        className={`btn ${tone === "dark" ? "btn-rumah" : "btn-jago"} px-4 sm:px-6`}
        href={shop.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {hero.directions}
      </a>
      {withWhatsapp && (
        <a
          className="btn btn-outline px-4 sm:px-6"
          href={shop.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          {...mock(shop.whatsapp.mockup)}
        >
          {shop.whatsapp.text}
        </a>
      )}
    </div>
  );
}
