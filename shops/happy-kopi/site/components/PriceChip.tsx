import { mock } from "@/lib/mockup";

// A price in a terakota disc, set inline right after the item name (like the board's price circles).
// Part of the item's text for screen readers: "Happy Chicken Rice, Rp 35rb".
export default function PriceChip({ price, mockup }: { price: string; mockup?: boolean }) {
  return (
    <>
      <span className="sr-only">, </span>
      <span className="chip" {...mock(mockup)}>
        {price}
      </span>
    </>
  );
}

// Name + chip where the chip can never drop onto a line by itself: the last word of the
// name and the chip are kept together, so the price always sits next to what it prices.
export function NameWithChip({
  name,
  nameMockup,
  price,
  priceMockup,
}: {
  name: string;
  nameMockup?: boolean;
  price?: string;
  priceMockup?: boolean;
}) {
  const cut = name.lastIndexOf(" ");
  const head = cut > 0 ? name.slice(0, cut + 1) : "";
  const last = cut > 0 ? name.slice(cut + 1) : name;
  return (
    <>
      {head && <span {...mock(nameMockup)}>{head}</span>}
      <span className="whitespace-nowrap">
        <span {...mock(nameMockup)}>{last}</span>
        {price && <PriceChip price={price} mockup={priceMockup} />}
      </span>
    </>
  );
}
