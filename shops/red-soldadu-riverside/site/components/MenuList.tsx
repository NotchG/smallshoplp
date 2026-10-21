import { menu } from "@/content";
import { mock } from "@/lib/mockup";
import { BeanBag } from "@/components/art";

// The full list by group: h3 group title with its price range directly under it.
export default function MenuList() {
  return (
    <div className="mt-16 md:mt-20">
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {menu.groups.map((g) => (
          <div key={g.title}>
            <h3 className="t-lead">{g.title}</h3>
            <p className="t-small nums mt-1.5 text-batu-soft" {...mock(g.range.mockup)}>
              {g.range.text}
            </p>
            <ul className="menu-items mt-5">
              {g.items.map((it) => (
                <li key={it.text} {...mock(it.mockup)}>
                  {it.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="beans mt-12 flex items-center gap-4 pt-6" {...mock(menu.beans.mockup)}>
        <BeanBag label={menu.beansLabel} className="h-14 w-14 flex-none" />
        <p>
          <span className="font-semibold">{menu.beans.text}</span>
          <span aria-hidden="true"> · </span>
          <span className="text-batu-soft">{menu.beans.detail}</span>
        </p>
      </div>
    </div>
  );
}
