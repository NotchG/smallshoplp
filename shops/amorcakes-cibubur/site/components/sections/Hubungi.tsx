import Container from "@/components/Container";
import HeartMark from "@/components/HeartMark";
import { IconArrow, IconChat, IconFacebook, IconInstagram, IconPhone, IconTiktok } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import { footer, hubungi, meta, shop, socials, waLink } from "@/content";

const rows = [
  { label: "WhatsApp", value: shop.phone, href: waLink(hubungi.waMessage), Icon: IconChat, mockup: shop.waMockup },
  { label: "Telepon", value: shop.phone, href: `tel:${shop.phoneIntl}`, Icon: IconPhone },
  { label: "Instagram", value: socials.instagram.handle, href: socials.instagram.url, Icon: IconInstagram },
  { label: "Facebook", value: socials.facebook.handle, href: socials.facebook.url, Icon: IconFacebook },
  { label: "TikTok", value: socials.tiktok.handle, href: socials.tiktok.url, Icon: IconTiktok },
];

// Every way to reach them, back on the facade.
export default function Hubungi() {
  return (
    <section id="kontak" aria-labelledby="hubungi-title" className="facade ground-cokelat section">
        <Container className="split-4-8">
          <div>
            <h2 id="hubungi-title" className="t-head t-headfont">
              {hubungi.heading}
            </h2>
            <p className="t-lead mt-4 measure" {...mock(hubungi.promo.mockup)}>
              {hubungi.promo.text}
            </p>
          </div>
          <ul className="contact-grid">
            {rows.map(({ label, value, href, Icon, mockup }) => (
              <li key={label}>
                <a
                  className="contact-row"
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...mock(mockup)}
                >
                  <span className="flex items-center gap-4">
                    <Icon size={24} />
                    <span>
                      <span className="t-small block">{label}</span>
                      <span className="contact-value t-lead t-namefont num">{value}</span>
                    </span>
                  </span>
                  <IconArrow size={20} />
                </a>
              </li>
            ))}
          </ul>
        </Container>
    </section>
  );
}

export function Footer() {
  return (
      <footer className="facade ground-cokelat site-footer">
        <Container className="footer-inner">
          <p className="flex items-center gap-3 font-bold">
            <HeartMark logo size={30} />
            <span>{footer.line}</span>
          </p>
          <div className="t-small footer-notes">
            <p>{meta.banner}</p>
            <p>{footer.illustrations}</p>
            <p>{footer.noindex}</p>
          </div>
        </Container>
      </footer>
  );
}
