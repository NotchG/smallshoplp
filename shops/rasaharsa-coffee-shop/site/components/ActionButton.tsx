import type { Action } from "@/content";
import { mock } from "@/lib/mockup";
import Icon, { type IconName } from "./Icon";

type Variant = "dark-primary" | "dark-secondary" | "light-primary" | "light-secondary" | "fern";

// One button style per ground (TRD): onDark, onLight, onFern. 48px tall, 8px radius.
export default function ActionButton({
  action,
  variant,
  icon,
  className = "",
}: {
  action: Action;
  variant: Variant;
  icon?: IconName;
  className?: string;
}) {
  const external = action.href.startsWith("http");
  return (
    <a
      href={action.href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(action.mockup)}
    >
      {icon && <Icon name={icon} />}
      <span>{action.label}</span>
    </a>
  );
}
