import { c } from "@/lib/palette";

// [MOCKUP] Ornament row taken from the embossed gold platter in the owner's photo:
// short round-ended bars alternating with dots, 12px tall, syrup. Used at most twice.
export default function PlatterRule({ className = "", id }: { className?: string; id: string }) {
  return (
    <svg className={`block h-3 w-full ${className}`} aria-hidden="true" data-mockup="">
      <defs>
        <pattern id={id} width="18" height="12" patternUnits="userSpaceOnUse">
          <line x1="4" y1="2.5" x2="4" y2="9.5" stroke={c.syrup} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="13" cy="6" r="1.75" fill={c.syrup} />
        </pattern>
      </defs>
      <rect width="100%" height="12" fill={`url(#${id})`} />
    </svg>
  );
}
