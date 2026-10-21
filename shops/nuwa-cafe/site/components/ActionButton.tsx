import { actions, shop } from "@/content";
import { mock } from "@/lib/mockup";

type Variant = "primary" | "outline" | "onTomato" | "onTomatoOutline";

// A real link styled as a button. Min 48px tall.
export function ActionButton({
  href,
  variant = "primary",
  children,
  className = "",
  external = true,
}: {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

// WhatsApp: a live wa.me link once shop.whatsapp is set; until then a non-interactive,
// clearly labelled placeholder with "nomor menyusul" 6px under it. Never a dead link.
export function WhatsAppButton({ onTomato = false }: { onTomato?: boolean }) {
  if (shop.whatsapp) {
    return (
      <ActionButton
        href={`https://wa.me/${shop.whatsapp}`}
        variant={onTomato ? "onTomatoOutline" : "outline"}
      >
        {actions.whatsapp}
      </ActionButton>
    );
  }
  return (
    <span className="pending-wrap" {...mock(true)}>
      <span className="btn btn-pending" aria-disabled="true">
        {actions.whatsapp}
      </span>
      <span className="pending-note">{actions.whatsappPending}</span>
    </span>
  );
}
