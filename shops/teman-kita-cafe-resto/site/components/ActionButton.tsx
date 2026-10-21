import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";
import Icon, { type IconName } from "./Icon";

// A link styled as a button. red = merah on any field, chalk = kapur with ink text,
// ink = outline in the field's own text colour (tinta on kapur, kapur on tinta).
export default function ActionButton({
  href,
  variant = "red",
  icon,
  mockup,
  className = "",
  children,
}: {
  href: string;
  variant?: "red" | "chalk" | "ink";
  icon?: IconName;
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener", "aria-describedby": "tab-baru" } : {})}
      {...mock(mockup)}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </a>
  );
}
