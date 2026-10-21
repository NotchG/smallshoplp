import { IconChat } from "@/components/Icons";
import { hero, nav, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Desktop only (1024+): address left, anchors and WhatsApp right. Phones get the hero buttons.
export default function TopBar() {
  return (
    <header className="hidden lg:block">
      <div className="container-bar flex items-center justify-between gap-8 pt-5">
        <p className="t-body font-semibold">{shop.addressShort}</p>
        <div className="flex items-center gap-8">
          <nav aria-label="Navigasi halaman">
            <ul className="flex items-center gap-7">
              {nav.map((n) => (
                <li key={n.href}>
                  <a className="link t-body" href={n.href}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn btn-ink-outline" href={shop.whatsapp.href} {...mock(shop.whatsapp.mockup)}>
            <IconChat />
            {hero.ctaWhatsapp}
          </a>
        </div>
      </div>
    </header>
  );
}
