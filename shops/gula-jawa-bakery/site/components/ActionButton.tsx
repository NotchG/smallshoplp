import type { ReactNode } from "react";
import { IconDirections, IconPhone, IconWhatsApp } from "./Icons";
import { mock } from "@/lib/mockup";

type Variant = "neon" | "outline-neon" | "maroon" | "outline-maroon";
type Icon = "directions" | "whatsapp" | "phone";

const icons: Record<Icon, (p: { className?: string }) => ReactNode> = {
  directions: IconDirections,
  whatsapp: IconWhatsApp,
  phone: IconPhone,
};

// 52px tall link-button. External links open in a new tab; tel: stays in place.
export default function ActionButton({
  href,
  variant,
  icon,
  children,
  mockup,
  className = "",
}: {
  href: string;
  variant: Variant;
  icon?: Icon;
  children: ReactNode;
  mockup?: boolean;
  className?: string;
}) {
  const Glyph = icon ? icons[icon] : null;
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      {Glyph ? <Glyph /> : null}
      <span>{children}</span>
    </a>
  );
}
