import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { barbershop as b } from "@/content";
import { mock } from "@/lib/mockup";

export default function Barbershop() {
  return (
    <section id={b.id} aria-labelledby="barbershop-h" className="section bg-concrete text-ink">
      <Reveal>
        <Container className="grid gap-y-9 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end">
            <h2 id="barbershop-h" className="h-sign t-head text-fascia">
              {b.heading}
            </h2>
            <p className="t-lead measure mt-3 italic" {...mock(b.lead.mockup)}>
              {b.lead.text}
            </p>
          </div>

          {/* The wall: lettering 16px above a gold-framed mirror. */}
          <figure className="lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center">
            <p className="mb-4 text-center text-ink">
              <span className="wall-small block">{b.wall.small}</span>
              <span className="wall-big block">{b.wall.big}</span>
            </p>
            <div className="mirror mx-auto w-3/4 max-w-[26rem] lg:w-full lg:max-w-none">
              <Image src={b.image.src} width={b.image.width} height={b.image.height} alt={b.image.alt} sizes="(min-width: 1024px) 480px, 75vw" />
            </div>
          </figure>

          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:mt-8">
            <ul className="points measure space-y-2">
              {b.points.map((p) => (
                <li key={p.text}>{p.text}</li>
              ))}
            </ul>

            <h3 className="h-sign t-lead mt-10 text-fascia">{b.servicesHeading}</h3>
            <ul className="prices mt-4 space-y-1.5">
              {b.services.map((s) => (
                <li key={s.name} {...mock(s.mockup)}>
                  <span>{s.name}</span>
                  {s.price && <span className="ml-3 font-bold text-fascia">{s.price}</span>}
                </li>
              ))}
            </ul>

            <ActionButton action={b.cta} variant="lightPrimary" className="mt-8" />
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
