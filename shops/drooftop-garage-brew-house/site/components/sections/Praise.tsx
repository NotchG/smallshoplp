import { praise, shop } from "@/content";
import Container from "../Container";
import Icon from "../Icon";
import Reveal from "../Reveal";

export default function Praise() {
  return (
    <section id="ulasan" aria-labelledby="ulasan-h" className="wall-malam section">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="ulasan-h" className="font-display t-head">{praise.heading}</h2>
              <p className="t-lead font-semibold text-kuning mt-5 tabular">{praise.ratingLine}</p>
              <a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="link text-kuning mt-2 inline-flex min-h-11 items-center gap-2 [&_svg]:size-4">
                {praise.mapsLink}
                <Icon name="upRight" />
              </a>
              <p className="t-small mt-4 text-tembok/80">{praise.note}</p>
            </div>
            <ul className="lg:col-span-8 grid gap-8 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-12 content-center">
              {praise.themes.map((t) => (
                <li key={t.title} className="flex gap-4">
                  <span className="dot mt-3" aria-hidden="true" />
                  <div>
                    <p className="t-lead font-semibold">{t.title}</p>
                    <p className="mt-2 text-tembok/85 measure">{t.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
