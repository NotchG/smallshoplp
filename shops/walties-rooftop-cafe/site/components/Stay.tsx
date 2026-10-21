import Reveal from "@/components/Reveal";
import { mock } from "@/lib/mockup";
import { stay } from "@/content";

export default function Stay() {
  return (
    <section id="betah" aria-labelledby="betah-title" className="ground-dark bg-daun text-krem">
      <Reveal className="container-page section lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5">
          <h2 id="betah-title" className="t-head">
            {stay.title}
          </h2>
          <p className="t-lead mt-5 max-w-md text-krem/90" {...mock(stay.lead.mockup)}>
            {stay.lead.text}
          </p>
        </div>
        <ul className="mt-10 border-b border-krem/30 lg:col-span-6 lg:col-start-7 lg:mt-0">
          {stay.points.map((p) => (
            <li key={p.title} className="border-t border-krem/30 py-6">
              <h3 className="t-lead font-semibold">{p.title}</h3>
              <p className="t-body mt-1 text-krem/85">{p.text}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
