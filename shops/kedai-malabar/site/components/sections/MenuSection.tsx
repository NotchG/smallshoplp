import Reveal from "@/components/Reveal";
import DishTile from "@/components/DishTile";
import { dishes, menu, menuIntro, menuNote } from "@/content";
import { mock } from "@/lib/mockup";

export default function MenuSection() {
  return (
    <section id="menu" className="ground-kapur section" aria-labelledby="menu-title">
      <Reveal className="container-page">
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-6">
          <h2 id="menu-title" className="h-section lg:col-span-6">
            Menu andalan
          </h2>
          <p className="mt-4 max-w-[46ch] lg:col-span-6 lg:col-start-7 lg:mt-0" {...mock(menuIntro.mockup)}>
            {menuIntro.text}
          </p>
        </div>

        <div className="tiles mt-10 lg:mt-14">
          {dishes.map((d, i) => (
            <DishTile key={d.id} dish={d} wide={i === dishes.length - 1} />
          ))}
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {menu.map((group) => (
            <div key={group.title}>
              <h3 className="t-lead caps-wide font-medium">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.name.text} className="menu-item">
                    <span {...mock(item.name.mockup)}>{item.name.text}</span>
                    {item.price && (
                      <span className="price" {...mock(item.price.mockup)}>
                        {item.price.text}
                      </span>
                    )}
                    {item.note && (
                      <span className="t-small text-soft basis-full" {...mock(item.note.mockup)}>
                        {item.note.text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="t-small text-soft mt-10" {...mock(menuNote.mockup)}>
          {menuNote.text}
        </p>
      </Reveal>
    </section>
  );
}
