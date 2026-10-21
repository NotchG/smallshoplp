import type { ReactNode } from "react";
import Icon, { type IconName } from "@/components/Icon";
import { mock } from "@/lib/mockup";

// Link styled as a button. Variants: paper (on cobalt / ink), cobalt (on paper / sky),
// outline (on cobalt / ink). 52px tall, radius 14px.
export default function Button({
  href,
  variant,
  icon,
  external = false,
  mockup,
  className = "",
  children,
}: {
  href: string;
  variant: "paper" | "cobalt" | "outline";
  icon?: IconName;
  external?: boolean;
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </a>
  );
}
