import { actions, address, addressLines, maps, visit } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import HoursTable from "@/components/HoursTable";
import { IconDirections } from "@/components/Icons";

export default function Visit() {
  return (
    <section id="lokasi" aria-labelledby="visit-h" className="section bg-malam">
      <Container>
        <Reveal>
          <h2 id="visit-h" className="t-head">
            {visit.heading}
          </h2>
          <div className="mt-10 grid gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-8">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <iframe
                src={maps.embed}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-square w-full rounded-md md:aspect-[4/3] border border-beton/20 bg-malam-terang lg:aspect-auto lg:h-[440px]"
              />
            </div>
            <div className="order-1 lg:order-2 lg:col-span-4 lg:col-start-9">
              <h3 className="t-lead">{visit.addressHeading}</h3>
              <address className="t-body mt-2 not-italic">
                {addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <p className="t-small mt-1 text-pakis" {...mock(address.houseNumberNote.mockup)}>
                {address.houseNumberNote.text}
              </p>
              <Button href={maps.directions} external icon={<IconDirections />} className="mt-6">
                {actions.directions}
              </Button>
              <HoursTable className="mt-12" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
