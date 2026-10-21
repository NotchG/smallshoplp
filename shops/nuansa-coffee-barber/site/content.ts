// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: (listing), (hours), (reviews n), (photos) as in brief.md.

export type Item = { text: string; mockup?: boolean };

export const meta = {
  title: "nuansa Barber & Coffee · Jatinegara, Jakarta Timur",
  // Middle sentence is [MOCKUP] (hero line).
  description:
    "Barbershop dan kedai kopi di Cipinang Cempedak, Jatinegara. Potong rambut rapi dan kopi enak, di satu tempat. Buka setiap hari 10.00–22.00.",
  lang: "id",
};

export const shop = {
  name: "nuansa", // as on the sign (photos); listing says "Nuansa coffee and barber"
  descriptor: "Barber & Coffee", // sign order (photos)
  address: {
    full: "Jl. Biru Laut VIII No.48C, Cipinang Cempedak, Jatinegara, Jakarta Timur 13340", // (listing)
    lines: ["Jl. Biru Laut VIII No.48C,", "Cipinang Cempedak, Jatinegara,", "Jakarta Timur 13340"],
    short: "Jl. Biru Laut VIII No.48C, Jatinegara",
  },
  phone: { display: "0882-9630-2726", tel: "+6288296302726" }, // (listing)
};

export const links = {
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Nuansa%20coffee%20and%20barber&destination_place_id=ChIJZRhjMmvzaS4RrWuq19k_7Ik",
  mapsListing: "https://maps.google.com/?cid=9938388682558565293",
  // [MOCKUP] assumes the listed number takes WhatsApp.
  whatsapp:
    "https://wa.me/6288296302726?text=Halo%20nuansa%2C%20saya%20mau%20tanya%20jadwal%20potong%20rambut.",
  mapEmbed:
    "https://www.google.com/maps?q=Nuansa+coffee+and+barber,+Jl.+Biru+Laut+VIII+No.48C,+Cipinang+Cempedak,+Jatinegara,+Jakarta+Timur&output=embed",
};

// Static: the same every day (hours). No live open/closed logic; hours still need confirming.
export const hours = {
  days: "Senin–Minggu",
  open: "10.00",
  close: "22.00",
  today: "Buka hari ini 10.00–22.00",
  note: "Buka setiap hari",
};

export const banner = {
  phone: "Draf untuk nuansa · belum resmi",
  desktop: "Draf tampilan untuk nuansa · belum resmi. Sebagian isi masih contoh dan menunggu konfirmasi.",
};

export const nav = [
  { href: "#barbershop", label: "Barbershop" },
  { href: "#kopi", label: "Kopi" },
  { href: "#kunjungi", label: "Kunjungi" },
];

export type Action = { label: string; href: string; mockup?: boolean; external?: boolean };

export const actions = {
  directions: { label: "Petunjuk Arah", href: links.directions, external: true } as Action,
  whatsapp: { label: "WhatsApp", href: links.whatsapp, mockup: true, external: true } as Action,
  call: { label: `Telepon ${shop.phone.display}`, href: `tel:${shop.phone.tel}` } as Action,
  booking: { label: "Booking via WhatsApp", href: links.whatsapp, mockup: true, external: true } as Action,
};

export const hero = {
  line: { text: "Potong rambut rapi dan kopi enak, di satu tempat.", mockup: true } as Item,
  photo: {
    src: "/images/shopfront.jpg",
    width: 600,
    height: 336,
    alt: "Bagian depan nuansa di malam hari: jendela barbershop bertuliskan Keep at HANDSOME dan pintu kedai kopi.",
  },
};

export type Service = { name: string; price?: string; mockup: true };

export const barbershop = {
  id: "barbershop",
  heading: "barbershop",
  wall: { small: "Keep at", big: "HANDSOME" }, // wall lettering (photos)
  lead: { text: "Tunjukkan gaya yang kamu mau, kami yang kerjakan.", mockup: true } as Item,
  // Paraphrased from reviews, not quoted.
  points: [
    { text: "Bawa foto gaya yang kamu mau, hasilnya sesuai yang diminta." }, // (reviews 3, 5)
    { text: "Potongnya cepat, hasilnya rapi." }, // (reviews 1)
    { text: "Capster paham perawatan rambut dan siap kasih saran." }, // (reviews 4)
  ] as Item[],
  servicesHeading: "Layanan & harga",
  services: [
    { name: "Potong Rambut", price: "Rp 60rb", mockup: true },
    { name: "Potong + Keramas", price: "Rp 75rb", mockup: true },
    { name: "Cukur Jenggot", price: "Rp 30rb", mockup: true },
    { name: "Potong Anak", mockup: true },
    { name: "Hair Coloring", price: "mulai Rp 150rb", mockup: true },
  ] as Service[],
  cta: actions.booking,
  image: {
    src: "/images/barbershop.jpg",
    width: 880,
    height: 1027,
    alt: "Suasana barbershop nuansa: pelanggan bercape garis di kursi barber, cermin oval berbingkai emas.",
  },
};

export type Product = {
  name: string;
  price: string;
  art: "kopiSusu" | "americano" | "croissant";
  label: string; // aria-label for the drawing
  mockup?: boolean; // the item itself is a guess
  priceMockup: true; // every price is an example
};

export const kopi = {
  id: "kopi",
  heading: "kopi",
  lead: { text: "Potong rapi, kopi siap. Duduk dulu, giliranmu sebentar lagi.", mockup: true } as Item,
  notes: [
    { text: "Kopi Susu Gula Aren: manis gula aren, kopinya cerah dengan sedikit asam." }, // (reviews 2)
    { text: "Americano: andalan buat yang suka kopi hitam." }, // (reviews 3)
  ] as Item[],
  items: [
    { name: "Kopi Susu Gula Aren", price: "Rp 22rb", art: "kopiSusu", label: "Ilustrasi Kopi Susu Gula Aren", priceMockup: true },
    { name: "Americano", price: "Rp 20rb", art: "americano", label: "Ilustrasi Americano", priceMockup: true },
    { name: "Croissant", price: "Rp 22rb", art: "croissant", label: "Ilustrasi croissant", mockup: true, priceMockup: true },
  ] as Product[],
  extras: { text: "Juga ada Cappuccino, Caffè Latte, Es Kopi Susu, Matcha Latte dan Chocolate.", mockup: true } as Item,
  counterNote: "Pesan dan bayar di kasir.", // "order & pay here" counter (photos)
  caption: "Gambar ilustrasi, bukan foto menu.",
};

export const alsoHere = {
  id: "juga-di-sini",
  heading: "juga di sini",
  items: [
    { title: "Paket Potong + Kopi", text: "Potong dulu, lalu ngopi santai. Tanya paketnya di kasir.", mockup: true },
    // Partner service (photos: separate brand on the banner; reviews 3). Confirm it still runs.
    { title: "Cuci sepatu", text: "Sepatu kotor? Ada layanan cuci sepatu dari mitra, langsung di tempat." },
    { title: "Bayar non-tunai", text: "Tunai, e-wallet atau kartu debit, semuanya bisa." }, // (reviews 4)
  ] as { title: string; text: string; mockup?: boolean }[],
};

// Paraphrased themes from real reviews only. No quotes, no names, no years.
export const reviews = {
  id: "kata-mereka",
  heading: "kata mereka",
  rating: "4,6", // (listing)
  count: 326, // (listing)
  ratingLine: "4,6 dari 326 ulasan di Google",
  linkLabel: "Baca ulasan di Google Maps",
  note: "Rangkuman dari ulasan Google, bukan kutipan.",
  themes: [
    { text: "Hasil potongannya sesuai yang diminta. Tunjukkan saja contoh gayanya." }, // (reviews 3, 4, 5)
    { text: "Kopinya enak dan potongnya cepat, jadi sekali mampir dapat dua-duanya." }, // (reviews 1)
    { text: "Tempatnya bersih, ramah, nyaman, dan dekorasinya rapi." }, // (reviews 1, 4)
    { text: "Harganya terjangkau, dan kamu bisa ngopi sambil menunggu giliran." }, // (reviews 4, 5)
  ] as Item[],
};

export const visit = {
  id: "kunjungi",
  heading: "kunjungi kami",
  hoursHeading: "Jam buka",
  hoursLine: `${hours.days} ${hours.open}–${hours.close}`,
  hoursNote: hours.note,
  actions: [actions.directions, actions.whatsapp, actions.call],
  booking: { text: "Booking jadwal potong via WhatsApp.", mockup: true } as Item,
  mapTitle: "Peta lokasi nuansa Barber & Coffee",
  mapFallback: "Buka peta di Google Maps",
};

export const footer = {
  line: "nuansa Barber & Coffee · Cipinang Cempedak, Jatinegara",
  source: "Info jam dan alamat dari Google Maps. Draf, bukan situs resmi.",
};
