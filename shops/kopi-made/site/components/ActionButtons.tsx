import { shop, ui } from "@/content";
import { mock } from "@/lib/mockup";
import { ChatIcon, PhoneIcon, PinIcon } from "@/components/Icons";

// Petunjuk Arah is real. WhatsApp and Telepon wait for the owner's number: until then they
// point to #kunjungi and carry data-mockup.
export default function ActionButtons({
  withCall = false,
  className = "",
}: {
  withCall?: boolean;
  className?: string;
}) {
  const wa = shop.whatsapp.number ? `https://wa.me/${shop.whatsapp.number}` : "#kunjungi";
  const tel = shop.phone.number ? `tel:${shop.phone.number}` : "#kunjungi";
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a className="btn btn-primary" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
        <PinIcon />
        {ui.directions}
      </a>
      <a className="btn btn-secondary" href={wa} {...mock(!shop.whatsapp.number)}>
        <ChatIcon />
        {ui.whatsapp}
      </a>
      {withCall && (
        <a className="btn btn-secondary" href={tel} {...mock(!shop.phone.number)}>
          <PhoneIcon />
          {ui.call}
        </a>
      )}
      {withCall && shop.instagram.url && (
        <a className="btn btn-secondary" href={shop.instagram.url} target="_blank" rel="noopener noreferrer">
          {ui.instagram}
        </a>
      )}
    </div>
  );
}
