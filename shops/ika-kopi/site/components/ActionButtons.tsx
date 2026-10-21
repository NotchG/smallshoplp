import Icon from "@/components/Icon";
import { buttons, shop } from "@/content";
import { mock } from "@/lib/mockup";

export type Action = "directions" | "whatsapp" | "call";

const config = {
  directions: { href: shop.mapsUrl, label: buttons.directions, icon: "pin", external: true, mockup: false },
  whatsapp: { href: shop.waUrl, label: buttons.whatsapp, icon: "chat", external: true, mockup: shop.waMockup },
  call: { href: shop.telUrl, label: buttons.call, icon: "phone", external: false, mockup: false },
} as const;

// The first action is the primary (filled) button; the rest are outlined.
// Colours switch automatically inside an `.on-green` band.
export default function ActionButtons({
  actions,
  stackOnPhone = false,
  className = "",
}: {
  actions: Action[];
  stackOnPhone?: boolean;
  className?: string;
}) {
  const layout = stackOnPhone ? "flex flex-col sm:flex-row sm:flex-wrap" : "flex flex-wrap";
  return (
    <div className={`${layout} gap-3 ${className}`}>
      {actions.map((key, i) => {
        const a = config[key];
        return (
          <a
            key={key}
            href={a.href}
            className={`btn ${i === 0 ? "btn-primary" : "btn-secondary"} ${stackOnPhone ? "w-full sm:w-auto" : ""}`}
            {...(a.external ? { target: "_blank", rel: "noopener" } : {})}
            {...mock(a.mockup)}
          >
            <Icon name={a.icon} />
            {a.label}
          </a>
        );
      })}
    </div>
  );
}
