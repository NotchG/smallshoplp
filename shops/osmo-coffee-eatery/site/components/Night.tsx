import Container from "@/components/Container";
import BeanMark from "@/components/BeanMark";
import { mock } from "@/lib/mockup";
import { contact, shop, visit } from "@/content";

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
    </svg>
  );
}

// Kunjungi kami + Hubungi kami: one night region, two h2s.
export default function Night() {
  return (
    <section className="section night on-dark" aria-label="Kunjungi dan hubungi OSMO">
      <Container>
        <div className="grid-12 visit-grid">
          <div className="visit-info">
            <h2 className="h2 t-head">{visit.title}</h2>
            <p className="visit-address">{shop.address}</p>
            <p>{visit.toll.text}</p>
            <p className="muted" {...mock(visit.route.mockup)}>
              {visit.route.text}
            </p>
            <table className="hours">
              <caption>
                <span className="label">{visit.hoursCaption}</span>
                <span className="hours-note">{visit.hoursNote}</span>
              </caption>
              <tbody>
                {shop.hours.map((h) => (
                  <tr key={h.day}>
                    <th scope="row">{h.day}</th>
                    <td>
                      {h.open}–{h.close}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a className="btn btn-primary" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
              {visit.directions}
            </a>
          </div>
          <div className="map-wrap">
            <div className="map-frame">
              <div className="map-fallback" aria-hidden="true">
                <BeanMark />
                <p>{visit.mapFallback}</p>
                <p className="t-small">{shop.addressShort}</p>
              </div>
              <iframe
                className="map"
                src={shop.mapEmbedUrl}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="grid-12 contact">
          <div className="contact-head">
            <h2 className="h2 t-head">{contact.title}</h2>
            <p className="contact-invite" {...mock(contact.invite.mockup)}>
              {contact.invite.text}
            </p>
          </div>
          <ul className="contact-rows">
            <li>
              <a
                className="contact-row"
                href={shop.waUrl.text}
                target="_blank"
                rel="noopener noreferrer"
                {...mock(shop.waUrl.mockup)}
              >
                <span className="label">{contact.whatsappLabel}</span>
                <span className="contact-value">{shop.phone}</span>
                <Arrow />
              </a>
            </li>
            <li>
              <a className="contact-row" href={`tel:${shop.tel}`}>
                <span className="label">{contact.phoneLabel}</span>
                <span className="contact-value">{shop.phone}</span>
                <Arrow />
              </a>
            </li>
            <li className="contact-row" {...mock(contact.instagram.mockup)}>
              <span className="label">{contact.instagramLabel}</span>
              <span className="muted-value">{contact.instagram.text}</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
