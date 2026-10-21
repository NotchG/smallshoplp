import { banner, shop } from "@/content";

export default function Footer() {
  return (
    <footer className="ground-arang">
      <div className="container-page flex flex-col gap-4 py-12 lg:flex-row lg:items-baseline lg:justify-between lg:gap-10">
        <p className="caps-wide font-medium">
          {shop.name} · {shop.subline}
        </p>
        <div className="t-small text-soft lg:text-right">
          <p>{shop.address}</p>
          <p className="mt-1">{banner}</p>
        </div>
      </div>
    </footer>
  );
}
