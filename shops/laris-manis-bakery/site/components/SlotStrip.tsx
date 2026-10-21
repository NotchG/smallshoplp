import { ink } from "./illos/inks";

// Crate slots reused in the order section: a full-width edge along its top, and short
// dividers between order rows. Decorative only; never behind text.
export default function SlotStrip({ variant, id }: { variant: "edge" | "divider"; id: string }) {
  if (variant === "edge") {
    return (
      <div aria-hidden="true" className="h-11 md:h-14">
        <svg className="block h-full w-full" focusable="false">
          <defs>
            <pattern id={id} width="26" height="40" patternUnits="userSpaceOnUse" x="6">
              <rect x="7" y="0" width="12" height="40" rx="6" fill={ink.slot} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" y="-12" fill={`url(#${id})`} />
          <rect width="100%" height="6" y="0" fill={ink.slot} />
        </svg>
      </div>
    );
  }
  return (
    <div aria-hidden="true" className="h-3">
      <svg className="block h-full w-full" focusable="false">
        <defs>
          <pattern id={id} width="40" height="12" patternUnits="userSpaceOnUse">
            <rect x="0" y="2" width="30" height="8" rx="4" fill={ink.slot} />
          </pattern>
        </defs>
        <rect width="100%" height="12" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
