import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

type Variant = "bulb" | "ghost-dark" | "cup" | "ghost-light";

// primary on dark = bulb / ink; on light = cup / white. Secondary = 2px outline. Min height 48px.
export default function ButtonLink({
  href,
  variant,
  icon,
  mockup,
  children,
}: {
  href: string;
  variant: Variant;
  icon?: ReactNode;
  mockup?: boolean;
  children: ReactNode;
}) {
  return (
    <a href={href} className={`btn btn-${variant}`} {...mock(mockup)}>
      {icon}
      {children}
    </a>
  );
}
