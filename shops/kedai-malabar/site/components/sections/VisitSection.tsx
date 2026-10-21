import Reveal from "@/components/Reveal";
import Awning from "@/components/Awning";
import HoursTable from "@/components/HoursTable";
import ActionButton from "@/components/ActionButton";
import { IconDirections, IconPin } from "@/components/Icons";
import { actions, shop, visit } from "@/content";

export default function VisitSection() {
  return (
    <section id="kunjungi" className="ground-kapur" aria-labelledby="kunjungi-title">
      <Awning />
      <Reveal className="container-page section lg:grid lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <h2 id="kunjungi-title" className="h-section">
            Kunjungi kami
          </h2>
          <address className="t-lead mt-5 not-italic">
            {shop.street}
            <br />
            {shop.area}
            <br />
            {shop.city}
          </address>
          <p className="text-soft mt-3">{visit.parking}</p>
          <ActionButton
            href={shop.directionsUrl}
            external
            icon={<IconDirections />}
            className="btn-edge mt-6"
          >
            {actions.directions}
          </ActionButton>

          <HoursTable className="mt-10" />
          <p className="t-small text-soft mt-3 max-w-[22rem]">{visit.lateNote}</p>
        </div>

        <div className="mt-12 lg:col-span-7 lg:mt-1">
          <div className="map lg:aspect-auto lg:h-full">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
              <IconPin className="h-9 w-9 text-bata" />
              <p className="font-medium">
                {shop.street}
                <br />
                <span className="text-soft font-normal">{shop.area}</span>
              </p>
              <a href={shop.mapsUrl} className="link t-small inline-flex min-h-11 items-center" target="_blank" rel="noopener noreferrer">
                {visit.mapFallback}
              </a>
            </div>
            <iframe
              src={shop.mapEmbed}
              title={visit.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
