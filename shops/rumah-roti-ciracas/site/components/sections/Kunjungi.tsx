import Container from "@/components/Container";
import Button from "@/components/Button";
import HoursTable from "@/components/HoursTable";
import MapEmbed from "@/components/MapEmbed";
import ProductPhoto from "@/components/ProductPhoto";
import Reveal from "@/components/Reveal";
import { actions, shop, visit } from "@/content";

// Find the shop: address, the week's hours, directions, the shopfront small, the map.
export default function Kunjungi() {
  return (
    <section className="section section-follow bg-paper" aria-labelledby="kunjungi-title">
      <Container>
        <Reveal className="kunjungi grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <h2 id="kunjungi-title" className="t-head">
              {visit.heading}
            </h2>
            <address className="mt-5 max-w-[32ch] not-italic">{shop.address}</address>
            <HoursTable className="mt-5" />
            <Button href={shop.directionsUrl} variant="outline" external className="mt-6">
              {actions.directions}
            </Button>
            <ProductPhoto photo={visit.photo} className="mt-10 max-w-[480px] lg:max-w-[320px]">
              <figcaption className="photo-caption">{visit.caption}</figcaption>
            </ProductPhoto>
          </div>

          <MapEmbed className="lg:col-span-7 lg:col-start-6" />
        </Reveal>
      </Container>
    </section>
  );
}
