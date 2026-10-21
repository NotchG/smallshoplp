import { actions, shop } from "@/content";
import { mock } from "@/lib/mockup";
import { ChatIcon, PinIcon } from "@/components/Icons";

// Petunjuk Arah (primary) + WhatsApp (secondary). tone="dark" on walnut, tone="light" on rattan.
export default function ActionButtons({
  tone = "dark",
  className = "",
  only,
}: {
  tone?: "dark" | "light";
  className?: string;
  only?: "directions";
}) {
  const primary = tone === "dark" ? "btn-gold" : "btn-walnut";
  const secondary = tone === "dark" ? "btn-ghost" : "btn-outline-walnut";
  return (
    <div className={`flex gap-3 sm:gap-4 ${className}`}>
      <a className={`btn ${primary} flex-1 sm:flex-none`} href={shop.directionsUrl}>
        <PinIcon />
        {actions.directions}
      </a>
      {only !== "directions" && (
        <a className={`btn ${secondary} flex-1 sm:flex-none`} href={shop.whatsapp.url}>
          <ChatIcon />
          <span {...mock(shop.whatsapp.mockup)}>{actions.whatsapp}</span>
        </a>
      )}
    </div>
  );
}
