import type { ReactNode } from "react";

// Real links styled as buttons. `fern` sits on tile, `timber` on steel (design brief §3).
export function Button({ href, variant, children }: { href: string; variant: "fern" | "timber"; children: ReactNode }) {
  return (
    <a className={`btn btn-${variant}`} href={href}>
      {children}
    </a>
  );
}

// A button that can't work yet (no WhatsApp number listed): not a link, not focusable.
export function PendingButton({ children, ...rest }: { children: ReactNode } & Record<`data-${string}`, string>) {
  return (
    <span className="btn btn-pending" role="button" aria-disabled="true" {...rest}>
      {children}
    </span>
  );
}
