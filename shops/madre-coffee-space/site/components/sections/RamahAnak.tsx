import { anak } from "@/content";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import TaggedPhoto from "@/components/TaggedPhoto";
import { mock } from "@/lib/mockup";

// 5 Ramah anak (paper): the family reason to choose Madre. Same type and palette, nothing cartoonish.
export default function RamahAnak() {
  return (
    <section className="ground-paper section" aria-labelledby="anak-h">
      <Container>
        <Reveal className="grid-12">
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:self-end">
            <h2 id="anak-h" className="f-display t-head">
              {anak.heading}
            </h2>
            <p className="t-lead measure mt-4">{anak.lead}</p>
          </div>
          <TaggedPhoto
            photo={anak.photo}
            ratio="3 / 2"
            className="mt-10 lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0"
            boxClassName="bleed-phone"
            sizes="(min-width: 1024px) 720px, 100vw"
          />
          <div className="mt-8 lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:mt-6 lg:self-start">
            <p className="measure-body">{anak.body}</p>
            <h3 className="f-name t-lead mt-8">{anak.menuHeading}</h3>
            <ul className="bullet-list mt-3">
              {anak.menu.map((m) => (
                <li key={m.text} {...mock(m.mockup)}>
                  {m.text}
                </li>
              ))}
            </ul>
            <p className="price mt-3 text-cobalt" {...mock(anak.menuPrice.mockup)}>
              {anak.menuPrice.text}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
