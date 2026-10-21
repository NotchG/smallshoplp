import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

type Variant = "solid-pinus" | "solid-kaca" | "outline-light" | "outline-dark";

// A label box you can press: 48px tall, 2px radius, 1px inner hairline inset 4px
// (the KOPI ENA label's box). Hover/focus overlay and press offset are plain CSS.
export default function BoxButton({
  href,
  variant,
  children,
  meta,
  wide = false,
  external = false,
  mockup,
  className = "",
}: {
  href: string;
  variant: Variant;
  children: ReactNode;
  meta?: ReactNode;
  wide?: boolean;
  external?: boolean;
  mockup?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`box-btn box-btn--${variant} ${wide ? "box-btn--wide" : ""} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      {...mock(mockup)}
    >
      <span className="nowrap">{children}</span>
      {meta ? <span className="box-btn__meta">{meta}</span> : null}
    </a>
  );
}
