import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { alsoHere as a } from "@/content";
import { mock } from "@/lib/mockup";

export default function AlsoHere() {
  return (
    <section id={a.id} aria-labelledby="juga-h" className="section section-follow bg-limewash text-ink">
      <Reveal>
        <Container>
          <div className="follow-rule grid gap-y-6 lg:grid-cols-12 lg:gap-x-6">
            <h2 id="juga-h" className="h-sign t-head text-fascia lg:col-span-4">
              {a.heading}
            </h2>
            <ul className="also-list lg:col-span-8 lg:col-start-5 lg:grid lg:grid-cols-3 lg:gap-x-8">
              {a.items.map((item) => (
                <li key={item.title} {...mock(item.mockup)}>
                  <h3 className="h-sign t-lead text-fascia">{item.title}</h3>
                  <p className="mt-2">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
