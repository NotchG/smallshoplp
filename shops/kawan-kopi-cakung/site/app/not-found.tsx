import Container from "@/components/Container";
import { shop } from "@/content";

// Indonesian 404 so no English UI string ships with the static export.
export default function NotFound() {
  return (
    <main id="konten" className="ground-kayu section min-h-[60vh]">
      <Container>
        <h1 className="t-head">Halaman tidak ditemukan</h1>
        <p className="t-lead mt-5">
          <a href="/" className="underline underline-offset-4">
            Kembali ke {shop.shortName}
          </a>
        </p>
      </Container>
    </main>
  );
}
