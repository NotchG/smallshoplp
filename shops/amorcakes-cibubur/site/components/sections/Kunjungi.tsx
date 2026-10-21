import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import HoursStrip from "@/components/HoursStrip";
import { IconArrow, IconPin } from "@/components/Icons";
import { hoursSummary, kunjungi, shop } from "@/content";

export default function Kunjungi() {
  return (
    <section id="lokasi" aria-labelledby="kunjungi-title" className="ground-putih section">
      <Container>
        <Reveal className="split-5-7 items-center">
          <div>
            <h2 id="kunjungi-title" className="t-head t-headfont">
              {kunjungi.heading}
            </h2>
            <address className="t-lead mt-5 not-italic">
              {shop.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <HoursStrip className="mt-8" />
            {/* The strip above is visual only; this line carries the hours for everyone. */}
            <p className="t-lead t-namefont mt-4 num">{hoursSummary}</p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <a className="btn btn-oranye btn-snug" href={shop.directionsUrl} target="_blank" rel="noopener noreferrer">
                <IconPin />
                {kunjungi.ctaMaps}
              </a>
              <a className="btn btn-kakao-outline btn-snug" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
                {kunjungi.ctaOpen}
                <IconArrow size={20} />
              </a>
            </div>
          </div>
          <div className="map-box">
            <div className="map-fallback" aria-hidden="true">
              <IconPin size={36} />
              <span className="t-body font-bold">{shop.fullName}</span>
              <span className="t-small">{shop.addressLines[0]}</span>
            </div>
            <iframe
              className="map-frame"
              src={shop.mapEmbed}
              title={kunjungi.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
