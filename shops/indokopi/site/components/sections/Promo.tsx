import Container from "@/components/Container";
import Plate from "@/components/Plate";
import Reveal from "@/components/Reveal";
import Picto from "@/components/Picto";
import { promoIntro, promos } from "@/content";
import { mock } from "@/lib/mockup";

export default function Promo() {
  return (
    <section className="ground-batu section" aria-labelledby="promo-judul">
      <Reveal>
        <Container>
          <Plate as="h2" id="promo-judul" head className="t-head sign-caps">
            Promo
          </Plate>
          <p className="t-small mt-3 text-konter">{promoIntro.note}</p>

          <ul className="mt-8 lg:mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {promos.map((p) => (
              <Plate
                as="li"
                key={p.name}
                variant={p.variant}
                className="grid grid-cols-[52px_1fr] gap-x-4 p-6 md:p-7 lg:flex lg:flex-col"
                {...mock(p.mockup)}
              >
                <Picto name={p.picto} className="w-[52px] h-[52px] lg:w-16 lg:h-16" />
                <div className="lg:mt-4 flex flex-col">
                  <h3 className="t-lead sign-caps balance">{p.name}</h3>
                  {p.price && (
                    <p className="mt-2">
                      <span className="chip">{p.price}</span>
                    </p>
                  )}
                  <p className="mt-3 pretty">{p.detail}</p>
                  <p className="t-small mt-3 opacity-85">syarat berlaku</p>
                </div>
              </Plate>
            ))}
          </ul>
        </Container>
      </Reveal>
    </section>
  );
}
