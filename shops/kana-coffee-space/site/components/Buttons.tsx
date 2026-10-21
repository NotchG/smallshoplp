import ActionButton from "@/components/ActionButton";
import { actions, shop, whatsapp, whatsappHref } from "@/content";

// The two actions every section reuses, so the WhatsApp placeholder rule lives in one place:
// while the number is null, WhatsApp links to #hubungi and never to a made-up number.
export function DirectionsButton({
  variant = "primary",
  className,
}: {
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <ActionButton
      href={shop.mapsUrl}
      external
      variant={variant}
      ariaLabel={actions.directionsAria}
      className={className}
    >
      {actions.directions}
    </ActionButton>
  );
}

export function WhatsAppButton({
  variant = "secondary",
  label = whatsapp.label,
  message,
  className,
}: {
  variant?: "primary" | "secondary";
  label?: string;
  message?: string;
  className?: string;
}) {
  const live = Boolean(whatsapp.number);
  return (
    <ActionButton
      href={whatsappHref(message)}
      external={live}
      variant={variant}
      mockup={whatsapp.mockup}
      ariaLabel={live ? `${label} (buka di tab baru)` : `${label} (${whatsapp.note.toLowerCase()})`}
      className={className}
    >
      {label}
    </ActionButton>
  );
}
