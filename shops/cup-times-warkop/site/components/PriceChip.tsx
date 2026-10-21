import { mock } from "@/lib/mockup";

// Flat price chip: frost on cup, 6px radius, never rotated. Sits 8-12px after its item name.
export default function PriceChip({ children, mockup }: { children: string; mockup?: boolean }) {
  return (
    <span className="price-chip tnum" {...mock(mockup)}>
      {children}
    </span>
  );
}
