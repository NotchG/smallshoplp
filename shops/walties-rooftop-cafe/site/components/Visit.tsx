import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { mock } from "@/lib/mockup";
import { actions, shop, visit } from "@/content";

export default function Visit() {
  return (
    <section id="kunjungi" aria-labelledby="kunjungi-title" className="ground-dark bg-malam text-krem">
      <Reveal className="container-page section">
        <h2 id="kunjungi-title" className="t-head">
          {visit.title}
        </h2>
        <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="md:grid md:grid-cols-2 md:gap-x-8 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:block">
            <div>
              <p className="t-small text-krem/75">{visit.addressLabel}</p>
              <address className="t-body mt-1 max-w-xs not-italic">{shop.address}</address>
              <p className="t-small mt-3 text-krem/75" {...mock(visit.access.mockup)}>
                {visit.access.text}
              </p>
              <ActionButton href={shop.maps} variant="primary" className="mt-6">
                {actions.directions}
              </ActionButton>
            </div>

            <div className="mt-10 md:mt-0 lg:mt-10">
              <p className="t-small text-krem/75">
                {visit.hoursLabel} · {visit.hoursNote}
              </p>
              <table className="hours t-body num mt-2">
                <tbody>
                  {visit.hours.map((h) => (
                    <tr key={h.day}>
                      <th scope="row" className="font-medium">
                        {h.day}
                      </th>
                      <td>{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <div className="map-wrap">
              <p className="t-small absolute bottom-5 left-6 text-krem/75" aria-hidden="true">
                {visit.mapFallback}
              </p>
              <iframe
                className="map-frame"
                src={shop.mapEmbed}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
