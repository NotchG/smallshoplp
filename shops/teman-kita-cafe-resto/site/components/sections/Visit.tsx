import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import WindowFrame from "@/components/WindowFrame";
import ActionButton from "@/components/ActionButton";
import { HoursList } from "@/components/TodayHours";
import Icon from "@/components/Icon";
import { actions, shop, visit } from "@/content";

// 6. The map through the same black window frame, then the address and the week.
export default function Visit() {
  return (
    <section className="section" aria-labelledby="kunjungi">
      <Container>
        <Reveal>
          <h2 id="kunjungi" className="t-head">
            {visit.heading}
          </h2>
          <div className="grid-12 mt-8 gap-y-8 lg:mt-12">
            <WindowFrame className="col-span-12 lg:col-span-7" frameClassName="aspect-[4/3]">
              {/* Shown until the lazy map loads (and if it never does). */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-kapur px-6 text-center">
                <span className="size-8" aria-hidden="true">
                  <Icon name="pin" />
                </span>
                <p className="t-body font-semibold">{shop.address.street}</p>
                <p className="t-small">{visit.mapLoading}</p>
              </div>
              <iframe
                src={shop.mapEmbed}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </WindowFrame>

            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <address className="not-italic">
                <p className="t-lead">{shop.address.street}</p>
                <p className="t-body mt-1">{shop.address.area}</p>
              </address>
              <p className="t-small mt-3">{visit.hint}</p>

              <h3 className="t-lead mt-8">{visit.hoursHeading}</h3>
              <div className="mt-3">
                <HoursList />
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <ActionButton href={shop.mapsDirections} variant="ink" icon="pin">
                  {actions.directions}
                </ActionButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
