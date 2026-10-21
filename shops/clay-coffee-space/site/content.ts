// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources: listing = raw.json, photos = customer photos (reference only), reviews 1-5 = raw.json reviews.

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Clay Coffee Space", // listing
  type: "Coffee shop", // listing
  address: "Jl. Jatinegara Kaum No.17, Jatinegara Kaum, Pulo Gadung, Jakarta Timur 13260", // listing
  addressShort: "Jl. Jatinegara Kaum No.17, Pulo Gadung",
  area: "Pulo Gadung, Jakarta Timur",
  phoneDisplay: "0877-9140-1139", // listing
  tel: "tel:+6287791401139",
  // [MOCKUP] the number is a mobile, so it probably takes WhatsApp
  whatsapp: { url: "https://wa.me/6287791401139", mockup: true },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Clay+Coffee+Space&destination_place_id=ChIJrzcgeE71aS4Rkf1623n4WPE",
  reviewsUrl:
    "https://maps.google.com/?cid=17390923163348172177&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Clay+Coffee+Space,+Jl.+Jatinegara+Kaum+No.17,+Pulo+Gadung,+Jakarta+Timur&output=embed",
  // hours: listing says open 24 hours, every day
  hours: { today: "Buka hari ini · 24 jam", week: "Buka 24 jam, Senin–Minggu" },
  rating: { value: "4,3", count: "743" }, // listing
  // [MOCKUP] register: "kamu" (casual group hangout); the owner may prefer "Anda"
  register: { text: "kamu", mockup: true } as Item,
};

export const meta = {
  title: "Clay Coffee Space · Taman kopi di Pulo Gadung",
  description:
    "Coffee shop dengan taman terbuka di Jl. Jatinegara Kaum No.17, Pulo Gadung, Jakarta Timur. Buka 24 jam.",
  banner:
    "Draf mockup untuk Clay Coffee Space. Beberapa detail masih contoh sampai dikonfirmasi pemilik.",
};

export const hero = {
  wordmark: "Clay", // the cup's "CLAY" (photos)
  lockup: "Coffee Space", // the cup's "COFFEE SPACE" (photos)
  lead: { text: "Taman kopi di Pulo Gadung, buka 24 jam.", mockup: true } as Item,
  directions: "Petunjuk Arah",
  whatsapp: { text: "WhatsApp", mockup: true } as Item,
};

export type Feature = { title: string; text: string };

export const suasana = {
  heading: "Suasana Clay",
  lead: {
    text: "Begitu gelap, lampu gantung menyala di atas halaman berkerikil. Pilih meja di bawah payung, atau masuk ke paviliun kaca.",
    mockup: true,
  } as Item,
  // Facts from the customer photos; wording kept plain.
  features: [
    { title: "Halaman & payung", text: "Halaman berkerikil luas, payung krem, meja kaca bundar dan bangku besi." },
    { title: "Lampu gantung & LED", text: "Lampu bohlam terentang di atas meja, lampu LED menyala di sepanjang jalan setapak." },
    { title: "Paviliun kaca", text: "Paviliun kaca berbingkai putih, dengan jendela lengkung dan atap pelana." },
    { title: "Mural & papan kayu", text: "Mural grafiti warna-warni dan dinding papan kayu di tepi halaman." },
  ] as Feature[],
  groups: { text: "Paling seru datang rame-rame." } as Item, // reviews 5
  photoTag: { text: "Foto halaman malam dari pemilik", mockup: true } as Item,
};

export type ProductArt = "kopiSusu" | "americano" | "pisangGoreng" | "mixPlatter";
export type Featured = { name: string; price: string; art: ProductArt; alt: string; mockup: boolean };
export type MenuEntry = { name: string; price?: string; mockup: boolean };
export type MenuCategory = { label: string; range?: string; items: MenuEntry[] };

export const menu = {
  heading: "Menu andalan",
  lead: { text: "Kopi dulu, sisanya menyusul.", mockup: true } as Item,
  note: { text: "Nama menu dan harga masih contoh.", mockup: true } as Item,
  featured: [
    {
      name: "Es Kopi Susu Clay",
      price: "Rp 22rb",
      art: "kopiSusu",
      alt: "Gambar es kopi susu gula aren di gelas Clay, dengan es batu dan sedotan hitam",
      mockup: true,
    },
    {
      name: "Americano",
      price: "Rp 20rb",
      art: "americano",
      alt: "Gambar es americano di gelas Clay, dengan es batu dan sedotan hitam",
      mockup: true,
    },
    {
      name: "Pisang Goreng Coklat Keju",
      price: "Rp 20rb",
      art: "pisangGoreng",
      alt: "Gambar gorengan di kotak kertas, ditaburi keju parut dan saus coklat",
      mockup: true,
    },
    {
      name: "Mix Platter",
      price: "Rp 35rb",
      art: "mixPlatter",
      alt: "Gambar kotak kertas berisi kentang goreng, sosis dan chicken pop",
      mockup: true,
    },
  ] as Featured[],
  categories: [
    {
      label: "Kopi",
      items: [
        { name: "Es Kopi Susu Clay", price: "22rb", mockup: true },
        { name: "Americano", price: "20rb", mockup: true },
        { name: "Cafe Latte", price: "25rb", mockup: true },
        { name: "Cappuccino", price: "25rb", mockup: true },
        { name: "Caramel Latte", price: "28rb", mockup: true },
        { name: "Hazelnut Latte", price: "28rb", mockup: true },
      ],
    },
    {
      label: "Non-kopi",
      range: "Rp 22rb–28rb",
      items: [
        { name: "Matcha Latte", mockup: true },
        { name: "Taro Latte", mockup: true },
        { name: "Vanilla Milk", mockup: true },
        { name: "Lychee Tea", mockup: true },
      ],
    },
    {
      label: "Camilan",
      items: [
        { name: "Pisang Goreng Coklat Keju", price: "20rb", mockup: true },
        { name: "Mix Platter", price: "35rb", mockup: true },
        // sharing snacks keep the brief's range, never per-item prices
        { name: "Cireng Rujak, Tahu Cabe Garam, Kentang Goreng", price: "18rb–25rb", mockup: true },
      ],
    },
    {
      label: "Makan malam",
      range: "Rp 20rb–38rb",
      items: [
        { name: "Rice Bowl Ayam Sambal Matah", mockup: true },
        { name: "Nasi Goreng Clay", mockup: true },
        { name: "Indomie Goreng Telur", mockup: true },
      ],
    },
  ] as MenuCategory[],
};

export const music = {
  heading: "Sabtu malam, live music",
  lead: { text: "Tiap Sabtu malam ada live music di panggung taman." } as Item, // reviews 1, 3
  details: [
    { label: "Hari", value: { text: "Sabtu malam" } as Item }, // reviews 3
    { label: "Mulai", value: { text: "sekitar 20.00", mockup: true } as Item },
    { label: "Tempat", value: { text: "Panggung di taman" } as Item }, // reviews 1
  ],
  askLink: { text: "Tanya jadwal lewat WhatsApp", mockup: true } as Item,
};

export const podcast = {
  heading: "Podcast Box",
  lead: { text: "Ada Podcast Box di dalam paviliun kaca." } as Item, // photos
  rental: {
    text: "Sewa per jam untuk rekaman atau meeting online.",
    mockup: true,
  } as Item,
  price: { text: "mulai Rp 75rb/jam", mockup: true } as Item,
  cta: { text: "Booking lewat WhatsApp", mockup: true } as Item,
  photoTag: { text: "Foto Podcast Box dari pemilik", mockup: true } as Item,
};

// Paraphrased from real reviews only. Never invented, never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  themes: [
    { text: "Suasananya enak, apalagi kalau datang rame-rame." }, // reviews 3, 5
    { text: "Kopinya enak." }, // reviews 5
    { text: "Ada live music tiap Sabtu malam." }, // reviews 3
  ] as Item[],
  ratingLine: `${shop.rating.value} dari ${shop.rating.count} ulasan Google`, // listing
  reviewsLink: "Baca ulasan di Google",
};

export const visit = {
  heading: "Kunjungi kami",
  parking: { text: "Ada area parkir" } as Item, // reviews 1
  lateLine: { text: "Habis kerja, habis futsal, habis nonton gig: Clay tetap buka.", mockup: true } as Item,
  mapTitle: "Peta lokasi Clay Coffee Space",
};

export type ContactRow = { label: string; detail: string; href: string; external?: boolean; mockup?: boolean };

export const contact = {
  heading: "Hubungi kami",
  lead: {
    text: "Mau datang rame-rame atau tanya jadwal live music? Kabari kami.",
    mockup: true,
  } as Item,
  rows: [
    { label: "WhatsApp", detail: shop.phoneDisplay, href: shop.whatsapp.url, external: true, mockup: true },
    { label: "Telepon", detail: shop.phoneDisplay, href: shop.tel },
    { label: "Petunjuk Arah", detail: shop.addressShort, href: shop.directionsUrl, external: true },
  ] as ContactRow[],
  footer: `${shop.name} · ${shop.area}`,
};
