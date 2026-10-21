// "Masuk lewat depan": the page is the shop, walked through from Jl. Raya Penggilingan.
// Sign and awning → lit cake case → teal coffee corner → gift shelf → cake-box counter →
// what people say → how to get there → call us.
import Hero from "@/components/Hero";
import ProductCase from "@/components/ProductCase";
import CoffeeCorner from "@/components/CoffeeCorner";
import GiftShelf from "@/components/GiftShelf";
import OrderBox from "@/components/OrderBox";
import ReviewNotes from "@/components/ReviewNotes";
import VisitMap from "@/components/VisitMap";
import { ContactClose, Footer } from "@/components/ContactClose";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten">
        <ProductCase />
        <CoffeeCorner />
        <GiftShelf />
        <OrderBox />
        <ReviewNotes />
        <VisitMap />
        <ContactClose />
      </main>
      <Footer />
    </>
  );
}
