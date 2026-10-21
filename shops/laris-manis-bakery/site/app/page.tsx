import Hero from "@/components/Hero";
import { Footer, Hubungi, KataMereka, KueCamilan, Kunjungi, Pesan, RotiKami } from "@/components/Sections";
import { footerDraft } from "@/content";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten">
        <RotiKami />
        <KueCamilan />
        <Pesan />
        <KataMereka />
        <Kunjungi />
        <Hubungi />
      </main>
      <Footer draft={footerDraft} />
    </>
  );
}
