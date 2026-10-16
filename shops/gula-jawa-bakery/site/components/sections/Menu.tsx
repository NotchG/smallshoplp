import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import MenuGroup from "@/components/MenuGroup";
import { menu } from "@/content";
import { mock } from "@/lib/mockup";

// The wider range by group, on the pale "nampan" ground so the glazes read.
export default function Menu() {
  const [roti, pastry, kue] = menu.groups;
  return (
    <section aria-labelledby="oven-title" className="ground-nampan section">
      <Reveal>
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
            <div className="lg:col-span-6">
              <h2 id="oven-title" className="t-head heading">
                {menu.heading}
              </h2>
              <p className="t-body mt-4">{menu.intro}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-y-14 md:grid-cols-2 md:gap-x-8 lg:mt-12 lg:grid-cols-12 lg:gap-x-6">
            <MenuGroup data={roti} className="md:col-span-2 lg:col-span-6" />
            <MenuGroup data={pastry} className="lg:col-span-3" />
            <MenuGroup data={kue} className="lg:col-span-3" />
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-tembaga pt-6 lg:flex-row lg:items-baseline lg:gap-x-6">
            <p className="t-body" {...mock(menu.notes[0].mockup)}>
              {menu.notes[0].text}
            </p>
            <p className="t-small text-bangku" {...mock(menu.notes[1].mockup)}>
              {menu.notes[1].text}
            </p>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
