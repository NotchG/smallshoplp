import { mock } from "@/lib/mockup";
import type { Action } from "@/content";

const variants = {
  navyPrimary: "btn btn-navy-primary",
  navySecondary: "btn btn-navy-secondary",
  lightPrimary: "btn btn-light-primary",
} as const;

export default function ActionButton({
  action,
  variant,
  className = "",
}: {
  action: Action;
  variant: keyof typeof variants;
  className?: string;
}) {
  const external = action.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a href={action.href} className={`${variants[variant]} ${className}`} {...external} {...mock(action.mockup)}>
      {action.label}
      {action.external && <span className="sr-only"> (tab baru)</span>}
    </a>
  );
}
