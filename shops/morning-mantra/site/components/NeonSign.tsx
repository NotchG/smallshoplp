import type { ElementType } from "react";

// The neon sign on the green wall: "MORNING" in thin tracked capitals over a script "mantra".
// The hero version is the h1 and carries the switch-on keyframes (CSS only); the footer
// version is static, smaller and without glow. The caps come from text-transform, so the
// accessible name reads "Morning mantra".
export default function NeonSign({
  as: Tag = "h1",
  variant = "hero",
  id,
  className = "",
}: {
  as?: ElementType;
  variant?: "hero" | "static";
  id?: string;
  className?: string;
}) {
  return (
    <Tag id={id} className={`sign sign--${variant} ${className}`}>
      <span className="sign-caps">Morning</span> <span className="sign-script">mantra</span>
    </Tag>
  );
}
