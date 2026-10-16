import Container from "@/components/Container";
import Logotype from "@/components/Logotype";

export default function NotFound() {
  return (
    <main id="konten" className="section bg-abu">
      <Container>
        <Logotype className="t-head" />
        <h1 className="t-lead mt-6 font-medium">Halaman tidak ditemukan.</h1>
        <a className="btn btn-primary mt-6" href="/">
          Kembali ke beranda
        </a>
      </Container>
    </main>
  );
}
