import ActionButton from "@/components/ActionButton";
import { actions, nav, shop } from "@/content";

// Anchor links + a small WhatsApp pill, top right on the wall. Hidden on phones, where the
// hero buttons sit right under the name.
export default function TopLinks() {
  return (
    <header className="hidden md:block">
      <div className="nav-bar flex items-center justify-end gap-2 pt-5">
        <nav aria-label="Navigasi halaman">
          <ul className="flex items-center gap-1">
            {nav.map((l) => (
              <li key={l.href}>
                <a className="nav-link" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ActionButton href={shop.waUrl} variant="solid" icon="chat" small mockup={shop.waMockup} className="ml-3">
          {actions.whatsapp}
        </ActionButton>
      </div>
    </header>
  );
}
