import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import DishList from "@/components/DishList";
import { BEAN_CREASE } from "@/components/BeanMark";
import { mock } from "@/lib/mockup";
import { bar } from "@/content";

// Flat aluminium can with OSMO's navy band. [MOCKUP] stand-in until there is a product photo.
function CanIllustration({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 150 250" aria-hidden="true" focusable="false" {...mock(bar.canned.canMockup)}>
      <rect x="24" y="6" width="102" height="16" rx="7" fill="var(--color-semen)" />
      <rect x="14" y="16" width="122" height="218" rx="16" fill="#dcd7d2" />
      <rect x="24" y="228" width="102" height="16" rx="7" fill="var(--color-semen)" />
      <rect x="28" y="26" width="9" height="198" rx="4.5" fill="#ffffff" opacity="0.4" />
      <g transform="translate(66 50) scale(0.75)">
        <circle cx="12" cy="12" r="12" fill="var(--color-tinta)" />
        <path d={BEAN_CREASE} fill="none" stroke="#dcd7d2" strokeWidth="2.4" strokeLinecap="round" />
      </g>
      <text
        x="78"
        y="84"
        textAnchor="middle"
        fontSize="11"
        letterSpacing="4.4"
        fill="var(--color-tinta)"
        style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
      >
        OSMO
      </text>
      <rect x="14" y="102" width="122" height="72" fill="var(--color-tinta)" />
      <text
        x="77"
        y="134"
        textAnchor="middle"
        fontSize="12.5"
        letterSpacing="3"
        fill="var(--color-plester)"
        style={{ fontFamily: "var(--font-display)", fontWeight: 600, textTransform: "uppercase" }}
      >
        {label.split(" ")[0]}
      </text>
      <text
        x="77"
        y="154"
        textAnchor="middle"
        fontSize="12.5"
        letterSpacing="3"
        fill="var(--color-plester)"
        style={{ fontFamily: "var(--font-display)", fontWeight: 600, textTransform: "uppercase" }}
      >
        {label.split(" ").slice(1).join(" ")}
      </text>
      <text
        x="75"
        y="200"
        textAnchor="middle"
        fontSize="7"
        letterSpacing="2.2"
        fill="var(--color-tinta)"
        style={{ fontFamily: "var(--font-display)", fontWeight: 500, textTransform: "uppercase" }}
      >
        Canned series
      </text>
    </svg>
  );
}

export default function Bar() {
  const c = bar.canned;
  return (
    <section className="section bar" aria-labelledby="bar-title">
      <Container>
        <Reveal className="grid-12">
          <div className="bar-main">
            <div className="section-head">
              <h2 id="bar-title" className="h2 t-head">
                {bar.title}
              </h2>
              <p className="lead">{bar.lead}</p>
            </div>
            <div className="drinks">
              <div>
                <h3 className="h3">{bar.coffeeTitle}</h3>
                <DishList items={bar.coffee} />
              </div>
              <div>
                <h3 className="h3">{bar.nonCoffeeTitle}</h3>
                <DishList items={bar.nonCoffee} />
              </div>
            </div>
            <div className="bar-notes">
              <p {...mock(bar.breakfast.mockup)}>{bar.breakfast.text}</p>
              <p {...mock(bar.pastry.mockup)}>{bar.pastry.text}</p>
            </div>
          </div>

          <div className="canned on-dark">
            <CanIllustration label={c.canLabel} />
            <div className="canned-text">
              <h3 className="h3">{c.title}</h3>
              <p>{c.desc}</p>
              <p className="canned-price" {...mock(c.price.mockup)}>
                {c.price.text}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
