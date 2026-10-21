import { shop, ui } from "@/content";

// Google map in a pine frame. Underneath, a plain schematic (road, shop, Buaran Plaza across
// the road) shows until the lazy iframe loads, so the frame is never an empty board.
export default function MapEmbed() {
  return (
    <div className="pine-frame">
      <div className="map-frame">
        <div className="absolute inset-0" aria-hidden="true">
          <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" fill="none" strokeLinecap="round">
            <rect x="0" y="128" width="400" height="44" fill="#1F2B30" />
            <path d="M0 128H400M0 172H400" stroke="#A7B5B8" strokeOpacity="0.35" strokeWidth="1.5" />
            <rect x="168" y="62" width="64" height="50" stroke="#C9965A" strokeWidth="2" />
            <path d="M200 98s-11-9.8-11-18.6a11 11 0 0 1 22 0C211 88.2 200 98 200 98z" fill="#CF2229" />
            <circle cx="200" cy="79.5" r="3.6" fill="#F3EBDD" />
            <rect x="96" y="194" width="208" height="76" stroke="#A7B5B8" strokeOpacity="0.6" strokeWidth="1.5" />
          </svg>
          <p className="t-small absolute top-[29%] left-[60%] -translate-y-1/2 font-semibold text-cream">{shop.name}</p>
          <p className="t-small absolute top-1/2 left-[4%] -translate-y-1/2 text-mist">{shop.street.replace(/ No\..*$/, "")}</p>
          <p className="t-small absolute top-[77%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center leading-tight text-mist">
            Buaran Plaza
            <br />
            Electronic City
          </p>
        </div>
        <iframe
          src={shop.mapEmbedUrl}
          title={ui.mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
