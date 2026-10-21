import type { MenuItem } from "@/content";
import { mock } from "@/lib/mockup";
import SplitHeading from "@/components/SplitHeading";

// A typeset list: name (600), price inline 12px after it, one line below in abu.
export default function MenuList({
  title,
  items,
}: {
  title: { bold: string; light: string };
  items: MenuItem[];
}) {
  return (
    <div>
      <SplitHeading as="h3" bold={title.bold} light={title.light} className="t-lead" />
      <ul className="mt-5 rule-top">
        {items.map((item) => (
          <li key={item.name} className="py-3.5 border-b border-arang/15" {...mock(item.mockup)}>
            <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-semibold" {...mock(item.nameMockup)}>
                {item.name}
              </span>
              {item.tag && (
                <span className="chip" {...mock(item.tagMockup)}>
                  {item.tag}
                </span>
              )}
              {item.price && <span className="price nums">{item.price}</span>}
            </p>
            {item.line && <p className="text-abu">{item.line}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
