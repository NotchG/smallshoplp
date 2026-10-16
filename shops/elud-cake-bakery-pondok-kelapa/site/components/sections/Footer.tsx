import { shop } from "@/content";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="ground-brick">
      <Container className="flex flex-col gap-y-2 py-10 lg:flex-row lg:items-center lg:gap-x-12 lg:py-12">
        <p className="font-display t-head uppercase text-lemon">{shop.short}</p>
        <p className="t-body font-semibold">
          {shop.rest} · {shop.location.split(",")[0]}
        </p>
        <p className="t-body">
          <a href={shop.phoneHref} className="inline-flex min-h-12 items-center underline decoration-2">
            {shop.phone}
          </a>
          <span aria-hidden="true"> · </span>
          <span>{shop.hours}</span>
        </p>
      </Container>
    </footer>
  );
}
