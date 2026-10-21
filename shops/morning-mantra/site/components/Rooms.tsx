import { mock } from "@/lib/mockup";
import type { Room } from "@/content";
import Button from "@/components/Button";

// The building in cross-section: upstairs on top, the ground floor split into the indoor
// room by the bar and the glass-roofed outdoor room. Each cell opens with a band of its own
// material, where the owner's room photo will go.

function StairBand({ chip }: { chip: string }) {
  return (
    <div className="room-band band-stair bg-navy">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 500 300"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <polygon
          fill="var(--color-cobalt)"
          points="0,300 0,250 100,250 100,190 200,190 200,130 300,130 300,70 400,70 400,10 500,10 500,300"
        />
        <g fill="none" stroke="var(--color-gold)" strokeWidth="1.5" vectorEffect="non-scaling-stroke">
          <path d="M0 236L500 -64" vectorEffect="non-scaling-stroke" />
          <path d="M100 250V176M200 190V116M300 130V56M400 70V-4" vectorEffect="non-scaling-stroke" />
        </g>
      </svg>
      <span className="band-chip bg-navy text-wall">{chip}</span>
    </div>
  );
}

function FluteBand({ chip }: { chip: string }) {
  return (
    <div className="room-band band-flute">
      <span className="band-chip bg-navy text-wall">{chip}</span>
    </div>
  );
}

function TileBand({ chip }: { chip: string }) {
  return (
    <div className="room-band tile-band">
      <span className="band-chip border border-tile bg-wall text-cobalt">{chip}</span>
    </div>
  );
}

const grounds: Record<Room["key"], string> = {
  atas: "room-atas bg-navy on-dark",
  dalam: "room-dalam bg-cobalt on-dark",
  luar: "room-luar",
};

export default function Rooms({ items, chip }: { items: Room[]; chip: string }) {
  return (
    <div className="section-cut">
      {items.map((room) => {
        const dark = room.key !== "luar";
        return (
          <article key={room.key} className={grounds[room.key]} aria-labelledby={`ruang-${room.key}`}>
            {room.key === "atas" ? (
              <StairBand chip={chip} />
            ) : room.key === "dalam" ? (
              <FluteBand chip={chip} />
            ) : (
              <TileBand chip={chip} />
            )}
            <div className="room-body">
              <p className={`label ${dark ? "text-gold" : "text-cobalt"}`}>{room.label}</p>
              <h3 id={`ruang-${room.key}`} className="h3 mt-2">
                {room.title}
              </h3>
              <p className="t-body measure mt-3">{room.body}</p>
              <ul className="room-details mt-5 measure">
                {room.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              {room.book ? (
                <div className="mt-6">
                  <Button href={room.book.href} variant="secondary" external>
                    <span {...mock(room.book.mockup)}>{room.book.text}</span>
                  </Button>
                </div>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
