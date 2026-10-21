import Container from "@/components/Container";
import SignBadge from "@/components/SignBadge";
import { PhoneIcon } from "@/components/Icons";
import { nav, shop, actions, a11y } from "@/content";

// The black metal awning: mini sign (home), section anchors, Telepon. Not sticky.
export default function AwningHeader() {
  return (
    <header id="atas" className="awning on-dark">
      <Container className="awning-bar">
        <a href="#atas" className="awning-home" aria-label={a11y.home}>
          <SignBadge size="mini" />
        </a>
        <nav className="awning-nav" aria-label={a11y.navLabel}>
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <a className="btn btn-header" href={shop.phoneHref}>
          <PhoneIcon />
          {actions.call}
        </a>
      </Container>
    </header>
  );
}
