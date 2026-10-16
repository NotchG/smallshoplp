import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SpotIcon from "@/components/art/SpotIcon";
import { mock } from "@/lib/mockup";
import { family } from "@/content";

// [MOCKUP] as a whole: the rabbit area and fish pond come from a ~5-year-old review.
// Rendered only while family.show is true.
export default function Family() {
  if (!family.show) return null;
  return (
    <section className="section ground-green" aria-labelledby="family-title">
      <Container>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="lg:col-span-5">
              <h2 id="family-title" className="t-head">
                {family.title}
              </h2>
              <p className="t-lead mt-3 measure" {...mock(family.lead.mockup)}>
                {family.lead.text}
              </p>
            </div>
            <ul className="mt-10 grid gap-8 sm:grid-cols-3 lg:col-span-7 lg:col-start-6 lg:mt-0">
              {family.items.map((it) => (
                <li key={it.icon} className="flex items-center gap-5 sm:flex-col sm:items-start sm:gap-4">
                  <SpotIcon name={it.icon} className="shrink-0" />
                  <div>
                    <h3 className="t-lead font-bold">
                      <span {...mock(it.name.mockup)}>{it.name.text}</span>
                    </h3>
                    <p className="mt-1 text-soft">{it.text}</p>
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
