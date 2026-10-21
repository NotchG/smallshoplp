import { IconDirections } from "@/components/icons";

// Google map, lazy, below the fold. Until the iframe paints, a quiet placeholder shows
// through it; the text link under it is the no-iframe fallback.
export default function MapEmbed({ src, title, href, linkText }: { src: string; title: string; href: string; linkText: string }) {
  return (
    <div>
      <div className="map-frame relative overflow-hidden rounded-2xl bg-[#2c3338]">
        <div aria-hidden="true" className="absolute inset-0 grid place-items-center text-redup">
          <span className="t-small flex flex-col items-center gap-2">
            <IconDirections size={28} />
            Google Maps
          </span>
        </div>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="relative block h-full w-full border-0"
        />
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer" className="link-u mt-2 text-redup hover:text-paper">
        <span>{linkText}</span>
      </a>
    </div>
  );
}
