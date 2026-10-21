import { menu, type Product } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ProductArt from "@/components/ProductArt";
import PhotoFrame from "@/components/PhotoFrame";

function ProductBlock({ p, big = false }: { p: Product; big?: boolean }) {
  return (
    <article className="flex flex-col">
      {p.visual === "havana-frame" ? (
        <PhotoFrame label="Foto Kopi Havana dari pemilik" drawing="cup" className="aspect-[5/6] w-full max-w-[240px]" />
      ) : (
        <ProductArt
          id={p.id}
          visual={p.visual}
          label={p.art}
          className={big ? "max-w-[280px] md:max-w-[340px] lg:max-w-[420px]" : "max-w-[240px]"}
        />
      )}
      <div className="mt-3 flex flex-wrap items-baseline gap-x-3">
        <h3 className="t-lead" {...mock(p.name.mockup)}>
          {p.name.text}
        </h3>
        <p className="t-body nums text-lampu" {...mock(p.price.mockup)}>
          {p.price.text}
        </p>
      </div>
      <p className="t-body mt-1 text-beton/80" {...mock(p.desc.mockup)}>
        {p.desc.text}
      </p>
    </article>
  );
}

export default function Menu() {
  const [lead, ...rest] = menu.featured;
  return (
    <section id="menu" aria-labelledby="menu-h" className="section bg-malam">
      <Container>
        <Reveal>
          <div className="grid gap-4 lg:grid-cols-12 lg:items-baseline">
            <h2 id="menu-h" className="t-head lg:col-span-5">
              {menu.heading}
            </h2>
            <p className="t-body measure text-beton/80 lg:col-span-6 lg:col-start-7">{menu.intro}</p>
          </div>

          <div className="mt-10 grid gap-x-8 gap-y-14 lg:mt-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <ProductBlock p={lead} big />
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 lg:col-span-7">
              {rest.map((p) => (
                <ProductBlock key={p.id} p={p} />
              ))}
            </div>
          </div>
          <p className="t-small mt-10 text-beton/80" {...mock(menu.priceNote.mockup)}>
            {menu.priceNote.text}
          </p>

          <div className="mt-14 grid gap-10 border-t border-beton/15 pt-12 lg:mt-16 lg:grid-cols-12 lg:gap-8 lg:pt-14">
            <figure className="order-2 md:max-w-md lg:order-1 lg:col-span-4 lg:max-w-none">
              <PhotoFrame label={menu.bar.frame} drawing="bar" className="aspect-video w-full lg:aspect-[4/3]" />
              <figcaption className="t-small mt-3 text-beton/80">{menu.bar.caption}</figcaption>
            </figure>
            <div className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6">
              <h3 className="t-lead">{menu.moreHeading}</h3>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
                {menu.groups.map((g) => (
                  <div key={g.name} {...mock(g.mockup)}>
                    <h4 className="t-small font-semibold text-pakis">{g.name}</h4>
                    <ul className="t-body mt-2 space-y-1">
                      {g.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                    {g.note ? <p className="t-small mt-1 text-beton/80">{g.note}</p> : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
