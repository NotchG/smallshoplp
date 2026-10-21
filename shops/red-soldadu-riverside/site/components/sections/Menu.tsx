import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import RailLedge from "@/components/RailLedge";
import MenuList from "@/components/MenuList";
import { artByKey } from "@/components/art";
import { labels, menu } from "@/content";
import { mock } from "@/lib/mockup";

// Menu andalan: five drawn items standing on one rail ledge, then the full list.
export default function Menu() {
  return (
    <section className="ground-baja section" aria-labelledby="menu-title">
      <Container>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
            <h2 id="menu-title" className="t-head lg:col-span-7">
              {menu.heading}
            </h2>
            <p className="t-body mt-4 lg:col-span-5 lg:mt-0 lg:pb-1">
              {menu.intro} <span className="text-batu-soft">{menu.priceNote}</span>
            </p>
          </div>

          <ul className="featured mt-12 grid grid-cols-2 gap-y-10 md:mt-16 lg:grid-cols-5">
            {menu.featured.map((f) => {
              const Art = artByKey[f.art];
              return (
                <li key={f.name} className="featured-item">
                  <div className="featured-art">
                    <Art label={f.artLabel} className="h-full w-auto" />
                  </div>
                  <RailLedge />
                  <div className="featured-text">
                    <h3 className="t-lead">{f.name}</h3>
                    <p className="t-small nums mt-1.5 font-semibold" {...mock(f.price.mockup)}>
                      {f.price.text}
                    </p>
                    <p className="t-small mt-1 text-batu-soft">{f.note}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="t-small mt-5 text-batu-soft">{labels.illustration}</p>

          <MenuList />
        </Reveal>
      </Container>
    </section>
  );
}
