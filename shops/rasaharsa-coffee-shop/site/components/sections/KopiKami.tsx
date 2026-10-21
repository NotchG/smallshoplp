import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { kopiKami } from "@/content";
import { mock } from "@/lib/mockup";
import KopiRasaharsa from "@/components/illustrations/KopiRasaharsa";
import KopiSusuGulaAren from "@/components/illustrations/KopiSusuGulaAren";
import VietnamDrip from "@/components/illustrations/VietnamDrip";
import Affogato from "@/components/illustrations/Affogato";
import SectionHead from "./SectionHead";

const ART = {
  "kopi-rasaharsa": KopiRasaharsa,
  "kopi-susu-gula-aren": KopiSusuGulaAren,
  "vietnam-drip": VietnamDrip,
  affogato: Affogato,
} as const;

// The house coffees on the bar shelf, the latte in a black cup, and the barista who explains.
export default function KopiKami() {
  const { photo, aside } = kopiKami;
  return (
    <section aria-labelledby="kopi-kami" className="section ground-kapur">
      <Container>
        <Reveal className="kopi-grid">
          <div className="kopi-text">
            <SectionHead id="kopi-kami" title={kopiKami.heading}>
              <p className="t-lead mt-3 font-medium" {...mock(kopiKami.lead.mockup)}>
                {kopiKami.lead.text}
              </p>
            </SectionHead>
            <div className="measure mt-6 space-y-3">
              {kopiKami.body.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>

          <aside className="kopi-aside mini-board" aria-label={aside.label} {...mock(aside.mockup)}>
            <p className="font-semibold">{aside.label}</p>
            <p className="mt-1">{aside.text}</p>
          </aside>

          <figure className="kopi-photo">
            <img
              src={photo.src}
              srcSet={`${photo.src720} 720w, ${photo.src} 1100w`}
              sizes="(min-width: 1024px) 680px, 100vw"
              width={photo.width}
              height={photo.height}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              className="latte"
            />
            <figcaption className="t-small mt-3">{photo.caption}</figcaption>
          </figure>

          <ul role="list" className="kopi-shelf" aria-label="Kopi andalan kami">
            {kopiKami.drinks.map((d) => {
              const Art = ART[d.id as keyof typeof ART];
              return (
                <li key={d.id} className="drink">
                  <Art label={d.label} />
                  <div className="shelf" aria-hidden="true" />
                  <div className="drink-text">
                    <h3 className="t-lead font-display font-bold">{d.name}</h3>
                    {(d.serve.length > 0 || d.price) && (
                      <p className="t-small drink-meta tabular">
                        {d.serve.length > 0 && <span>{d.serve.join(" · ")}</span>}
                        {d.price && (
                          <span className="font-semibold" {...mock(d.price.mockup)}>
                            {d.price.text}
                          </span>
                        )}
                      </p>
                    )}
                    <p className="mt-1">{d.note}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
