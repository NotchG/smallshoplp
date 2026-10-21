type Field = "kaca" | "dinding" | "pinus" | "telang";

// Two-row checker of the two neighbouring fields, a nod to the name. Static, decorative.
// Cells 24 × 6px on phone, 32 × 8px from 768px. Used at three boundaries only.
export default function WovenSeam({ top, bottom, name }: { top: Field; bottom: Field; name: string }) {
  const a = { fill: `var(--color-${top})` };
  const b = { fill: `var(--color-${bottom})` };
  const sizes = [
    { id: `${name}-s`, w: 24, h: 6, cls: "md:hidden" },
    { id: `${name}-l`, w: 32, h: 8, cls: "hidden md:block" },
  ];
  return (
    <div aria-hidden="true" className="seam">
      {sizes.map(({ id, w, h, cls }) => (
        <svg key={id} className={cls} width="100%" height={h * 2} focusable="false">
          <defs>
            <pattern id={id} width={w * 2} height={h * 2} patternUnits="userSpaceOnUse">
              <rect width={w * 2} height={h * 2} style={a} />
              <rect x={w} y={0} width={w} height={h} style={b} />
              <rect x={0} y={h} width={w} height={h} style={b} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
      ))}
    </div>
  );
}
