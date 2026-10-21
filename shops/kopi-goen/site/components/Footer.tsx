import { addressLines, footer, phone, shop } from "@/content";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="bg-arang text-beton">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between md:gap-12">
        <div>
          <p className="t-lead">{shop.name}</p>
          <address className="t-small mt-2 not-italic text-beton/80">
            {addressLines.join(", ")}
            <br />
            <a href={phone.tel} className="nums inline-flex min-h-11 items-center underline decoration-beton/40 underline-offset-4 hover:decoration-lampu">
              {phone.display}
            </a>
          </address>
        </div>
        <p className="t-small max-w-[30em] text-beton/80">{footer.note}</p>
      </Container>
    </footer>
  );
}
