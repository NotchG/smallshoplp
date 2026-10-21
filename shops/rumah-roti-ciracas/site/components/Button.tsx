import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";
import { WaIcon } from "@/components/icons";

// Link styled as a button. `wa`: crust fill, paper text. `outline`: 2px border in the
// text colour (cocoa, or butter inside an .on-dark band). Min height 48px.
export default function Button({
  href,
  variant = "wa",
  icon,
  mockup,
  external,
  className = "",
  children,
}: {
  href: string;
  variant?: "wa" | "outline";
  icon?: "wa";
  mockup?: boolean;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`btn btn--${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      <span className="btn-overlay" aria-hidden="true" />
      {icon === "wa" && <WaIcon className="btn-icon" />}
      <span className="btn-label">{children}</span>
    </a>
  );
}
