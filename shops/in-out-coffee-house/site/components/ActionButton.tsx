import type { ReactNode } from "react";
import ArrowHead from "@/components/ArrowHead";
import { mock } from "@/lib/mockup";

// <a> styled as a 48px pill. `tone` is the ground it sits on (light = Dinding/Kuning, dark = Hitam).
export default function ActionButton({
  href,
  children,
  variant = "solid",
  tone = "light",
  arrow = false,
  external = false,
  mockup,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  tone?: "light" | "dark";
  arrow?: boolean;
  external?: boolean;
  mockup?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant}-${tone} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      {arrow && <ArrowHead dir="up-right" shaft className="btn-arrow" />}
      <span>{children}</span>
    </a>
  );
}
