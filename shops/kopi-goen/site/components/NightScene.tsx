import Fern from "@/components/Fern";

// Behind the hero text: slim palm trunks standing on the upper step, each with an uplight
// at its foot (photo-3), and one staghorn fern hung on the first trunk (photo-1).
// Purely decorative. Lights carry data-light so the hero timeline can switch them on.
function Cone() {
  return (
    <div className="cone" data-light="cone">
      <div className="cone-beam" />
      <div className="cone-trunk" />
      <div className="cone-fixture" />
    </div>
  );
}

export default function NightScene() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="container-page relative h-full">
        <div className="trunk trunk-a">
          <div className="trunk-body" />
          <Fern className="fern" />
          <Cone />
        </div>
        <div className="trunk trunk-b">
          <div className="trunk-body" />
          <Cone />
        </div>
      </div>
    </div>
  );
}
