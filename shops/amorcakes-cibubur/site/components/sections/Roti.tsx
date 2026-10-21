import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { BoluBoxes, BreadIcon } from "@/components/Bread";
import { mock } from "@/lib/mockup";
import { roti, waLink } from "@/content";

// Everyday bread for the 06.00 crowd. Prices sit inline right after each name.
export default function Roti() {
  return (
    <section id="roti" aria-labelledby="roti-title" className="ground-krim section">
      <Container>
        <Reveal className="roti-grid">
          <div className="roti-head">
            <h2 id="roti-title" className="t-head t-headfont">
              {roti.heading}
            </h2>
            <p className="t-lead mt-3" {...mock(roti.intro.mockup)}>
              {roti.intro.text}
            </p>
          </div>

          <ul className="roti-list bread-list">
            {roti.breads.map((b) => (
              <li key={b.id}>
                <BreadIcon id={b.id} label={b.alt} />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h3 className="t-lead t-namefont">{b.name}</h3>
                    <span className="t-body t-namefont num text-cokelat" {...mock(b.priceMockup)}>
                      {b.price}
                    </span>
                  </div>
                  {b.detail ? (
                    <p className="t-body" {...mock(b.detail.mockup)}>
                      {b.detail.text}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>

          <div className="roti-boxes">
            <figure className="boxes-figure">
              <BoluBoxes names={roti.boxes.names} label={roti.boxes.alt} />
              <figcaption className="t-body mt-3" {...mock(roti.boxes.caption.mockup)}>
                <strong className="font-bold">{roti.boxes.names.join(" & ")}.</strong>{" "}
                {roti.boxes.caption.text}
              </figcaption>
            </figure>
            <p className="t-body mt-5 measure" {...mock(roti.bulk.mockup)}>
              {roti.bulk.before}
              <a className="link-inline" href={waLink(roti.bulk.message)} target="_blank" rel="noopener noreferrer">
                {roti.bulk.link}
              </a>
              {roti.bulk.after}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
