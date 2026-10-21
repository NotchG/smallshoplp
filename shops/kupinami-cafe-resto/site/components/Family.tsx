import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Arrow from "@/components/Arrow";
import { family } from "@/content";
import { mock } from "@/lib/mockup";

// Dividers between the five facilities: one column on phone, two from 768px (the last spans both).
const cell = [
  "",
  "border-t md:border-t-0 md:border-l",
  "border-t",
  "border-t md:border-l",
  "border-t md:col-span-2",
];

export default function Family() {
  return (
    <section id="keluarga" aria-labelledby="keluarga-title" className="section section-joined bg-dinding">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4 lg:pt-2">
            <h2 id="keluarga-title" className="t-head text-teal-tua">{family.heading}</h2>
            <p {...mock(family.intro.mockup)} className="t-body mt-4 max-w-[38ch]">
              {family.intro.text}
            </p>
          </div>
          <div className="wall-frame mt-8 lg:col-span-8 lg:mt-0">
            <ul className="frame-list grid md:grid-cols-2">
              {family.facilities.map((f, i) => (
                <li key={f.name} className={`border-garis px-5 py-6 md:px-8 md:py-7 ${cell[i]}`}>
                  <h3 className="t-lead font-display font-bold">{f.name}</h3>
                  <p className="mt-1.5 max-w-[46ch]">{f.line}</p>
                  {f.link && (
                    <a href={f.link.href} className="link mt-2 inline-flex min-h-11 items-center gap-2">
                      {f.link.label}
                      <Arrow />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
