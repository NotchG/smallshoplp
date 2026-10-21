import Container from "@/components/Container";
import Awning from "@/components/Awning";
import Wordmark from "@/components/Wordmark";
import ActionButton from "@/components/ActionButton";
import { ChatIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { actions, footer, shop } from "@/content";

// Hubungi kami: out through the fascia again. Three actions, then the small mark.
export default function Footer() {
  const hoursLine = shop.hours.map((h) => `${h.days} ${h.time}`).join(" · ");
  return (
    <footer id="hubungi" className="ground-fascia" aria-labelledby="hubungi-h">
      <Awning />
      <Container className="footer-inner">
        <div className="footer-top">
          <div>
            <h2 id="hubungi-h" className="h-section text-cat">
              {footer.heading}
            </h2>
            <p className="t-lead footer-line">{footer.line}</p>
          </div>
          <div className="footer-actions">
            <ActionButton
              href={shop.whatsapp.url}
              icon={<ChatIcon />}
              mockup={shop.whatsapp.mockup}
              ariaLabel={actions.whatsappLabel}
            >
              {actions.whatsapp}
            </ActionButton>
            <ActionButton
              href={`tel:${shop.tel}`}
              variant="secondary"
              external={false}
              icon={<PhoneIcon />}
              ariaLabel={`${actions.call} ${shop.phone}`}
            >
              {actions.call} <span className="tnum">{shop.phone}</span>
            </ActionButton>
            <ActionButton href={shop.mapsUrl} variant="secondary" icon={<PinIcon />}>
              {actions.directions}
            </ActionButton>
          </div>
        </div>
        <div className="footer-bottom">
          <Wordmark />
          <p className="t-small footer-meta">
            <span className="block lg:inline">{shop.address}</span>
            <span className="hidden lg:inline" aria-hidden="true">
              {" · "}
            </span>
            <span className="block lg:inline tnum">{hoursLine}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
