import Image from "next/image";
import Reveal from "@/components/Reveal";
import { mock } from "@/lib/mockup";
import { rooms } from "@/content";

export default function Rooms() {
  return (
    <section id="suasana" aria-labelledby="suasana-title" className="ground-dark bg-malam text-krem">
      <Reveal className="container-page section">
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <h2 id="suasana-title" className="t-head lg:col-span-6">
            {rooms.title}
          </h2>
          <p className="t-lead mt-4 max-w-xl text-krem/90 lg:col-span-6 lg:mt-0 lg:pb-1" {...mock(rooms.lead.mockup)}>
            {rooms.lead.text}
          </p>
        </div>

        <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-x-6 lg:mt-14 lg:grid-cols-12 lg:gap-x-8">
          {rooms.items.map((r, i) => (
            <figure key={r.title} className={`lg:col-span-6 ${i === 1 ? "room-offset" : ""}`}>
              <div className={`crop ${i === 0 ? "crop-terrace" : "crop-indoor"}`}>
                <Image src={r.image.src} width={r.image.width} height={r.image.height} alt={r.image.alt} sizes="(min-width:1024px) 590px, 100vw" />
              </div>
              <figcaption className="mt-5">
                <h3 className="t-lead font-semibold">{r.title}</h3>
                <p className="t-body mt-2 max-w-md text-krem/85">{r.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {r.chips.map((chip) => (
                    <li
                      key={chip.text}
                      className="t-small rounded-[4px] border border-krem/40 px-3 py-1.5 text-krem"
                      {...mock(chip.mockup)}
                    >
                      {chip.text}
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
