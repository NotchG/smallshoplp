import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { DirectionsIcon, PhoneIcon } from "@/components/Icons";
import { hubungi as h, shop, actions, footer } from "@/content";
import { mock } from "@/lib/mockup";

export function Hubungi() {
  return (
    <section id="kontak" className="section closing on-dark" aria-labelledby="kontak-title">
      <Container>
        <Reveal className="split">
          <div className="closing-copy">
            <h2 id="kontak-title" className="t-head">{h.title}</h2>
            <p className="t-lead closing-line" {...mock(h.line.mockup)}>{h.line.text}</p>
          </div>
          <div className="closing-actions">
            <a className="btn btn-light" href={shop.phoneHref}>
              <PhoneIcon />
              {actions.callFull}
            </a>
            <a className="btn btn-outline-light" href={shop.directionsUrl} target="_blank" rel="noopener noreferrer">
              <DirectionsIcon />
              {actions.directions}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer on-dark">
      <Container>
        <p className="type t-small">
          <span className="font-display font-bold text-putih">{shop.name}</span>
          <span aria-hidden> · </span>
          {shop.address}
        </p>
        <p className="type t-small">
          <a href={shop.phoneHref}>{shop.phoneDisplay}</a>
        </p>
        <p className="type t-small">{footer.draftNote}</p>
      </Container>
    </footer>
  );
}
