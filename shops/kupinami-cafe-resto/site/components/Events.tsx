import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { events, wa, waLink } from "@/content";
import { mock } from "@/lib/mockup";

// teal-tua ground, putih text. The card borrows the badge's scalloped edge, like an invitation.
export default function Events() {
  return (
    <section id="acara" aria-labelledby="acara-title" className="section on-dark overflow-hidden bg-teal-tua text-putih">
      <Container>
        <Reveal className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-6 lg:row-start-1 lg:self-end">
            <h2 id="acara-title" className="t-head">{events.heading}</h2>
            <p {...mock(events.intro.mockup)} className="t-lead mt-5 max-w-[24ch] font-display font-bold">
              {events.intro.text}
            </p>
            <p {...mock(events.sub.mockup)} className="t-body mt-4 max-w-[44ch]">
              {events.sub.text}
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:self-center">
            <div className="scallop px-7 py-8 text-tinta md:px-10 md:py-10">
              <h3 className="t-lead font-display font-bold text-teal-tua">{events.cardTitle}</h3>
              <ul className="mt-4">
                {events.uses.map((u) => (
                  <li
                    key={u.text}
                    {...mock(u.mockup)}
                    className="t-lead flex items-center gap-4 border-t border-garis py-3 font-display font-medium first:border-t-0"
                  >
                    <span aria-hidden="true" className="size-1.5 flex-none rounded-full bg-teal-tua" />
                    {u.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 lg:row-start-2 lg:self-start">
            <a
              href={waLink(wa.event.text)}
              target="_blank"
              rel="noopener"
              className="btn btn-invert w-full sm:w-auto"
              {...mock(wa.event.mockup)}
            >
              {events.cta}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
