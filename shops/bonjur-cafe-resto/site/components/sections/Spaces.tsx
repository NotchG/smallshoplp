import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { mock } from "@/lib/mockup";
import { spaces } from "@/content";

const tone = { green: "ground-green", tile: "ground-tile", ink: "ground-ink" } as const;

// The terrace photo with three mood tiles beside it: Ruang kaca, Taman, Rooftop.
export default function Spaces() {
  return (
    <section className="section ground-paper" aria-labelledby="spaces-title">
      <Container>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <h2 id="spaces-title" className="t-head text-blue lg:col-span-6">
              {spaces.title}
            </h2>
            <p className="t-lead mt-3 lg:col-span-6 lg:col-start-7 lg:mt-0" {...mock(spaces.lead.mockup)}>
              {spaces.lead.text}
            </p>
          </div>

          <div className="mt-10 grid gap-x-8 lg:mt-12 lg:grid-cols-12">
            <div className="relative aspect-[4/3] overflow-hidden bg-tile lg:col-span-7 lg:row-start-1">
              <Image
                src={spaces.photo.src}
                alt={spaces.photo.alt}
                width={spaces.photo.width}
                height={spaces.photo.height}
                loading="lazy"
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <p className="t-small mt-2 text-muted lg:col-span-7 lg:row-start-2">{spaces.photo.caption}</p>
            <ul className="mt-8 flex flex-col lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-0">
              {spaces.tiles.map((t) => (
                <li key={t.name} className={`${tone[t.tone]} flex flex-1 flex-col justify-center p-6 lg:px-8`}>
                  <h3 className="t-lead font-bold">{t.name}</h3>
                  <p className="mt-1 text-soft" {...mock(t.text.mockup)}>
                    {t.text.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
