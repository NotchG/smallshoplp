import type { MenuItem } from "@/content";
import { mock } from "@/lib/mockup";

// Name at lead, price inline 12px after it (never pushed to the row's end), tag beside the name,
// note on a second line. windowCase sets the lettering as on the shop window, through CSS only.
function Name({ item, check }: { item: MenuItem; check: boolean }) {
  const props = { ...mock(item.nameMockup), ...(check ? { "data-check": "" } : {}) };
  if (item.windowCase === "latte") {
    const [first, ...rest] = item.name.split(" ");
    return (
      <span className="font-semibold" {...props}>
        {first} <span className="case-lower">{rest.join(" ")}</span>
      </span>
    );
  }
  const caseClass = item.windowCase ? ` case-${item.windowCase}` : "";
  return (
    <span className={`font-semibold${caseClass}`} {...props}>
      {item.name}
    </span>
  );
}

export default function MenuList({ items, check }: { items: MenuItem[]; check?: string }) {
  return (
    <ul className="menu-list">
      {items.map((item) => {
        const isCheck = item.name === check;
        return (
          <li key={item.name}>
            <p className="menu-line t-lead">
              <Name item={item} check={isCheck} />
              {item.price && (
                <span
                  className="menu-price"
                  {...mock(item.priceMockup)}
                  {...(isCheck ? { "data-check": "" } : {})}
                >
                  {item.price}
                </span>
              )}
              {item.tag && <span className="menu-tag">{item.tag}</span>}
            </p>
            {item.note && (
              <p className="menu-note t-body" {...mock(item.note.mockup)}>
                {item.note.text}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
