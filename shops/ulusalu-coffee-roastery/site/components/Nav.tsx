import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import { PhoneIcon } from "@/components/Icons";
import { actions, nav, shop } from "@/content";

// Not sticky. Wordmark, three section links from 768px, and the call button always.
export default function Nav() {
  return (
    <header className="bg-bata">
      <Container className="flex h-14 items-center justify-between gap-4">
        <a
          href="#"
          className="nav-wordmark font-display font-bold uppercase"
          aria-label={`${shop.name}, ke atas`}
        >
          {shop.wordmark}
        </a>
        <nav aria-label="Utama" className="flex items-center gap-3 md:gap-8">
          <ul className="hidden items-center gap-6 md:flex">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={`tel:${shop.tel}`} variant="solid" compact icon={<PhoneIcon />}>
            {actions.call}
          </ButtonLink>
        </nav>
      </Container>
    </header>
  );
}
