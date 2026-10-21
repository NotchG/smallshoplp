import { actions, shop } from "@/content";
import { IconDirections, IconPhone } from "@/components/Icons";

// Petunjuk Arah (primary) + Telepon (outline). On wood, the parent carries .on-kayu.
// WhatsApp only renders once the owner confirms a number (shop.whatsapp).
export default function ActionButtons({
  callLabel = actions.call,
  directionsFirst = true,
  stack = false,
  className = "",
}: {
  callLabel?: string;
  directionsFirst?: boolean;
  stack?: boolean;
  className?: string;
}) {
  const directions = (
    <a
      key="dir"
      href={shop.directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${directionsFirst ? "btn-primary" : "btn-outline"}`}
    >
      <IconDirections />
      {actions.directions}
    </a>
  );
  const call = (
    <a key="call" href={shop.phoneHref} className={`btn ${directionsFirst ? "btn-outline" : "btn-primary"} num`}>
      <IconPhone />
      {callLabel}
    </a>
  );
  const whatsapp = shop.whatsapp ? (
    <a
      key="wa"
      href={`https://wa.me/${shop.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline"
    >
      {actions.whatsapp}
    </a>
  ) : null;

  const items = directionsFirst ? [directions, call, whatsapp] : [call, directions, whatsapp];
  return (
    <div
      className={`flex gap-3 ${stack ? "flex-col" : "flex-col sm:flex-row sm:flex-wrap"} ${className}`}
    >
      {items}
    </div>
  );
}
