import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";
import { ChatIcon, PhoneIcon, PinIcon } from "@/components/Icons";

const icons = { pin: PinIcon, chat: ChatIcon, phone: PhoneIcon };

// Pill link, 48px tall. solid = navy on light grounds, line = navy outline on wall,
// light = plaster on navy.
export default function ActionButton({
  href,
  variant = "solid",
  icon,
  small = false,
  mockup,
  className = "",
  children,
}: {
  href: string;
  variant?: "solid" | "line" | "light";
  icon?: keyof typeof icons;
  small?: boolean;
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const Icon = icon ? icons[icon] : null;
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${small ? "btn-sm" : ""} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      {Icon && <Icon />}
      <span>{children}</span>
    </a>
  );
}
