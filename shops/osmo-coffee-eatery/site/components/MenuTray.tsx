import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import DishList from "@/components/DishList";
import { BEAN_CREASE } from "@/components/BeanMark";
import { mock } from "@/lib/mockup";
import { menu, type Dish } from "@/content";

// One printed mark on the liner: bean + spaced "OSMO", like OSMO's own tray paper.
function LinerMark({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g transform="scale(0.62)">
        <circle cx="12" cy="12" r="12" fill="currentColor" />
        <path d={BEAN_CREASE} fill="none" stroke="var(--color-alas)" strokeWidth="2.4" strokeLinecap="round" />
      </g>
      <text
        x="21"
        y="7.4"
        fontSize="7.6"
        letterSpacing="2.4"
        fill="currentColor"
        style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
      >
        OSMO
      </text>
      <text
        x="21"
        y="14.2"
        fontSize="4.8"
        letterSpacing="0.3"
        fill="currentColor"
        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
      >
        Coffee &amp; Eatery
      </text>
    </g>
  );
}

function LinerPrint() {
  // Staggered 120px tile, 8% tinta. Decorative only.
  return (
    <svg className="liner-print" aria-hidden="true" focusable="false" {...mock(true)}>
      <defs>
        <pattern id="osmo-liner" width="120" height="76" patternUnits="userSpaceOnUse">
          <g opacity="0.08">
            <LinerMark x={12} y={10} />
            <LinerMark x={72} y={48} />
            {/* the part of the second mark that runs past the tile edge, wrapped back in */}
            <LinerMark x={-48} y={48} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#osmo-liner)" />
    </svg>
  );
}

function BowlPlate({ dish }: { dish: Dish }) {
  return (
    <li className="bowl">
      {dish.img && (
        <img
          className="bowl-img"
          src={dish.img.src}
          alt={dish.img.alt}
          width={640}
          height={640}
          loading="eager"
          fetchPriority="low"
        />
      )}
      <div className="bowl-text">
        <h3 className="h3 bowl-name">
          <span {...mock(dish.name.mockup)}>{dish.name.text}</span>
          {dish.price && (
            <span className="dish-price" {...mock(dish.price.mockup)}>
              {" · "}
              {dish.price.text}
            </span>
          )}
        </h3>
        {dish.desc && (
          <p className="bowl-desc" {...mock(dish.desc.mockup)}>
            {dish.desc.text}
          </p>
        )}
      </div>
    </li>
  );
}

export default function MenuTray() {
  return (
    <section className="section" aria-labelledby="menu-title">
      <Container>
        <div className="section-head">
          <h2 id="menu-title" className="h2 t-head">
            {menu.title}
          </h2>
          <p className="lead menu-lead">{menu.lead}</p>
        </div>

        <Reveal className="tray">
          <div className="liner">
            <LinerPrint />
            <ul className="bowls">
              {menu.bowls.map((d) => (
                <BowlPlate key={d.name.text} dish={d} />
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="more">
          <h3 className="h3">{menu.moreTitle}</h3>
          <DishList items={menu.more} cols />
        </div>
      </Container>
    </section>
  );
}
