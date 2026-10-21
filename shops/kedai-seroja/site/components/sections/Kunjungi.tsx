import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import HoursTable from "@/components/HoursTable";
import { DirectionsIcon } from "@/components/Icons";
import { kunjungi as k, shop, actions } from "@/content";
import { mock } from "@/lib/mockup";

export default function Kunjungi() {
  return (
    <section id="lokasi" className="section" aria-labelledby="lokasi-title">
      <Container>
        <Reveal className="split">
          <div className="split-5">
            <h2 id="lokasi-title" className="t-head">{k.title}</h2>
            <address className="not-italic head-gap">
              <p className="address t-body">{shop.address}</p>
            </address>
            <p className="landmark t-body measure">{k.landmarkFact}</p>
            <p className="landmark-owner type t-small" {...mock(k.landmarkOwner.mockup)}>{k.landmarkOwner.text}</p>
            <a className="btn btn-primary visit-btn" href={shop.directionsUrl} target="_blank" rel="noopener noreferrer">
              <DirectionsIcon />
              {actions.directions}
            </a>
            <HoursTable />
          </div>
          <div className="split-7 map-col">
            <div className="map-frame">
              <p className="map-fallback type t-small" aria-hidden>{k.mapFallback}</p>
              <iframe src={shop.mapEmbedUrl} title={k.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
