import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ArchPhoto from "@/components/ArchPhoto";
import { menu } from "@/content";
import { mock } from "@/lib/mockup";

// "Menu andalan": breadth beyond coffee. Prices sit inline right after each category title.
export default function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-kanopi">
      <Container className="section">
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-7">
              <h2 id="menu-title" className="t-head">
                {menu.heading}
              </h2>
              <p className="t-lead mt-3">{menu.lead}</p>
            </div>
          </div>

          <div className="menu-grid mt-10 grid gap-y-12 lg:mt-14 lg:grid-cols-12 lg:gap-x-10">
            <ArchPhoto
              className="menu-photo lg:col-span-5 lg:row-start-1"
              variant="segment"
              src={menu.photo.src}
              alt={menu.photo.alt}
              width={menu.photo.width}
              height={menu.photo.height}
              caption={menu.photo.caption.text}
              captionMockup={menu.photo.caption.mockup}
            />

            <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
              <div className="menu-board">
                {menu.categories.map((cat) => (
                  <div key={cat.title} className="menu-cat">
                    <h3 className="menu-cat-title">
                      <span data-check className="t-lead font-display font-bold">
                        {cat.title}
                      </span>
                      <span className="menu-sep t-body" aria-hidden="true">
                        ·
                      </span>
                      <span className="menu-price t-body" {...mock(cat.from.mockup)}>
                        {cat.from.text}
                      </span>
                    </h3>
                    <ul className="menu-items">
                      {cat.items.map((item) => (
                        <li key={item.text} className="t-body">
                          <span className="block font-semibold" {...mock(item.mockup)}>
                            {item.text}
                          </span>
                          {item.note && (
                            <span className="t-small block" {...mock(item.note.mockup)}>
                              {item.note.text}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <p className="t-body measure menu-pairing lg:col-span-5 lg:col-start-1 lg:row-start-2">
              {menu.pairing}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
