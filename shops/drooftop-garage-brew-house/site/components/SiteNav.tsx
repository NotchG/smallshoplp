import { nav, shop } from "@/content";
import Icon from "./Icon";

// Wordmark plus anchors. Not sticky. Phone shows only "Lokasi".
export default function SiteNav() {
  return (
    <nav aria-label="Navigasi utama" className="container-page flex items-center justify-between gap-4 pt-4 pb-2 md:pt-6">
      <span className="font-display text-base leading-none">{shop.shortName}</span>
      <ul className="hidden md:flex items-center gap-3 lg:gap-5">
        {nav.links.map((l) => (
          <li key={l.href}>
            <a className="nav-link" href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a className="nav-link md:hidden" href={nav.phoneLink.href}>
        {nav.phoneLink.label}
        <Icon name="down" />
      </a>
    </nav>
  );
}
