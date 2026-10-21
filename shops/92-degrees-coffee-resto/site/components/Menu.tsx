import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { dishes, klepon, menuNotes, type Dish } from "@/content";
import { mock } from "@/lib/mockup";

// Name, then the mustard price chip (and "Pedas"), kept on the same line as the last word.
function DishName({ dish, spicyLabel }: { dish: Dish; spicyLabel: string }) {
  const words = dish.name.split(" ");
  const last = words.pop();
  return (
    <h4 className="dish-name t-lead">
      {words.join(" ")}{" "}
      <span className="whitespace-nowrap">
        {last}
        <span className="chip-price">{dish.price}</span>
      </span>
      {dish.spicy && (
        <>
          {" "}
          <span className="tag tag-outline">{spicyLabel}</span>
        </>
      )}
    </h4>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="section bg-plaster" aria-labelledby="menu-judul">
      <Container>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-6 lg:items-end">
            <h2 id="menu-judul" className="h-wide t-head lg:col-span-6">
              {dishes.heading}
            </h2>
            <p className="t-body text-clay mt-4 lg:mt-0 lg:col-start-8 lg:col-span-5 measure">{dishes.intro}</p>
          </div>

          <div className="mt-10 md:mt-14 grid gap-12 lg:grid-cols-2 lg:gap-x-16">
            {dishes.groups.map((g) => (
              <div key={g.label}>
                <h3 className="kicker text-clay pb-3 mb-6 border-b border-walnut/20">{g.label}</h3>
                <ul role="list">
                  {g.items.map((d) => (
                    <li key={d.name} className="dish">
                      <img
                        className="dish-img"
                        src={d.img}
                        alt={d.alt}
                        width={300}
                        height={225}
                        loading="lazy"
                        decoding="async"
                      />
                      <DishName dish={d} spicyLabel={dishes.spicyLabel} />
                      <p className="dish-desc t-body">{d.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <article className="klepon on-dark mt-14 md:mt-20" aria-labelledby="klepon-judul">
            <div className="klepon-media">
              <img
                className="klepon-img"
                src={klepon.img}
                alt={klepon.alt}
                width={klepon.width}
                height={klepon.height}
                fetchPriority="low"
                decoding="async"
              />
            </div>
            <div className="klepon-text">
              <p className="kicker text-mustard">{klepon.kicker}</p>
              <h3 id="klepon-judul" className="dish-name t-lead mt-2">
                {klepon.name}
                <span className="chip-price">{klepon.price}</span>
              </h3>
              <p className="klepon-tagline t-lead mt-3">{klepon.tagline}</p>
              <p className="t-body mt-3">{klepon.desc}</p>
            </div>
          </article>

          <p className="t-small text-clay mt-8">
            {menuNotes.map((n, i) => (
              <span key={n.text}>
                {i > 0 && <span aria-hidden="true"> · </span>}
                <span {...mock(n.mockup)}>{n.text}</span>
              </span>
            ))}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
