// The solid orange awning from the shopfront (owner-1): a full-bleed band with a scalloped
// lower edge. Scallops are 28px wide on phones, 36px from md up. Decorative.
function Edge({ id, w, className }: { id: string; w: number; className: string }) {
  const h = w / 2;
  return (
    <svg className={`awning-edge ${className}`} height={h} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width={w} height={h} patternUnits="userSpaceOnUse">
          <path d={`M0 0A${h} ${h} 0 0 0 ${w} 0Z`} className="fill-awning" />
        </pattern>
      </defs>
      <rect width="100%" height={h} fill={`url(#${id})`} />
    </svg>
  );
}

export default function Awning({ id, className = "" }: { id: string; className?: string }) {
  return (
    <div aria-hidden="true" className={`relative z-10 ${className}`}>
      <div className="awning-band bg-awning" />
      <Edge id={`${id}-sm`} w={28} className="md:hidden" />
      <Edge id={`${id}-md`} w={36} className="hidden md:block" />
    </div>
  );
}
