import type { ElementType, HTMLAttributes, ReactNode } from "react";

// The silver shelf frame: a grid on `rak`, padded and gapped by --shelf-gap.
// Placement of cells comes in through className (see globals.css).
export function Shelf({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}: { as?: ElementType; className?: string; children: ReactNode } & HTMLAttributes<HTMLElement>) {
  return (
    <Tag className={`shelf ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

// One lit cubby. The falloff sits behind everything, the LED strip on top of everything.
// `veil` adds the dim layer used by the hero's "rak menyala" moment.
export function Cell({
  as: Tag = "div",
  className = "",
  veil = false,
  children,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  veil?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>) {
  return (
    <Tag className={`cell ${className}`} {...rest}>
      <span aria-hidden="true" className="cell-light cell-light--glow" />
      {veil && <span aria-hidden="true" className="cell-veil" />}
      {children}
      <span aria-hidden="true" className="cell-light cell-light--strip" />
    </Tag>
  );
}
