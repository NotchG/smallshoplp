// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: (listing) = Google listing / raw.json, (reviews n), (hours), (photos).

export type Text = { text: string; mockup?: boolean };

export const meta = {
  title: "Kanal Feds · Kopi, brunch, dan teras hijau di Pondok Bambu",
  description:
    "Coffee shop di Jl. Kolonel Sugiono No.45, Duren Sawit, Jakarta Timur. Buka setiap hari mulai 07.00.",
};

export const banner = "Draf tampilan · bukan situs resmi Kanal Feds";

export const shop = {
  // Stored in normal case; the all-caps wordmark is CSS, so screen readers say the name.
  name: "Kanal Feds", // (listing)
  tagline: { text: "Kopi, brunch, dan teras hijau di Pondok Bambu.", mockup: true } as Text,
  addressLine: "Jl. Kolonel Sugiono No.45 · Pondok Bambu", // (listing, reviews 3)
  address: "Jl. Kolonel Sugiono No.45, Duren Sawit, Jakarta Timur 13440", // (listing)
  landmark: "Di sebelah gym, Pondok Bambu", // (reviews 1, 3)
  phoneDisplay: "0814-1053-8375", // (listing)
  phoneTel: "+6281410538375",
  mapsUrl:
    "https://maps.google.com/?cid=17968048398067503461&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", // (listing)
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(
    "Kanal Feds, Jl. Kolonel Sugiono No.45, Duren Sawit, Jakarta Timur 13440",
  )}&output=embed`,
  // [MOCKUP] assumes the mobile number takes WhatsApp.
  whatsapp: { url: "https://wa.me/6281410538375", mockup: true },
  rating: { value: "4,7", count: 228, label: "4,7 dari 228 ulasan Google" }, // (listing)
};

// Keyed by JS day index: 0 = Minggu … 6 = Sabtu. (hours, raw.json regularOpeningHours)
export const hours = [
  { day: "Minggu", open: "07:00", close: "22:00" },
  { day: "Senin", open: "07:00", close: "21:00" },
  { day: "Selasa", open: "07:00", close: "21:00" },
  { day: "Rabu", open: "07:00", close: "21:00" },
  { day: "Kamis", open: "07:00", close: "21:00" },
  { day: "Jumat", open: "07:00", close: "22:00" },
  { day: "Sabtu", open: "07:00", close: "22:00" },
] as const;

// Indonesian weeks are read Senin first.
export const hoursOrder = [1, 2, 3, 4, 5, 6, 0] as const;
export const hoursSummary = "Senin–Kamis 07.00–21.00 · Jumat–Minggu 07.00–22.00";
export const hoursNote = "Buka setiap hari";

export const hero = {
  todayFallbackLabel: "Jam buka",
  todayLabel: "Hari ini",
  status: {
    fallback: "Buka setiap hari",
    open: "Buka sekarang · sampai",
    before: "Belum buka · hari ini mulai",
    after: "Sudah tutup · besok buka",
  },
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  anchors: [
    { href: "#menu", label: "Menu" },
    { href: "#ruang", label: "Ruang" },
    { href: "#lokasi", label: "Lokasi" },
  ],
};

export const morning = {
  title: "Mulai jam 7 pagi",
  lead: {
    text: "Kopi pagi mulai jam 7. Mampir sebelum kerja, atau setelah olahraga.",
    mockup: true,
  } as Text,
  moments: [
    {
      time: "07.00",
      title: "Sebelum kerja",
      // (reviews 4, hours)
      text: "Ambil kopi untuk dibawa, langsung lanjut ke kantor. Kami buka setiap hari mulai pukul 07.00.",
      extra: { text: "Pesan dulu lewat WhatsApp, tinggal ambil.", mockup: true } as Text,
    },
    {
      time: null,
      title: "Setelah olahraga",
      // (reviews 1, 4)
      text: "Tepat di sebelah gym. Selain kopi, ada minuman dan makanan sehat.",
      extra: { text: "Misalnya jus hijau atau smoothie pisang-oat.", mockup: true } as Text,
    },
  ],
};

export type Illustration = "saborAMi" | "cappuccino" | "esKopiKrim" | "mousseCake";

export type Product = {
  id: string;
  name: string;
  nameMockup?: boolean;
  desc: string;
  price?: string;
  priceMockup?: boolean;
  illustration: Illustration;
  illustrationMockup: true;
  alt: string;
};

export const menu = {
  title: "Menu andalan",
  note: "Gambar adalah ilustrasi. Harga dan nama bergaris titik masih contoh, menunggu menu asli.",
  caption: "Ilustrasi · foto menyusul",
  featuredTag: "Andalan",
  // (reviews 2) name and taste; the look of the drink is a guess.
  featured: {
    id: "sabor-a-mi",
    name: "Sabor A Mi",
    desc: "Mocktail kopi andalan Kanal Feds. Teksturnya creamy, rasa ube-nya kaya.",
    price: "Rp 42rb",
    priceMockup: true,
    illustration: "saborAMi",
    illustrationMockup: true,
    alt: "Ilustrasi Sabor A Mi: gelas tinggi, krim ube di atas kopi",
  } as Product,
  products: [
    {
      // (reviews 3, 5, photos)
      id: "cappuccino",
      name: "Cappuccino",
      desc: "Rasanya fruity dan segar, bukan sekadar pahit. Bisa dipesan kurang manis. Datang dengan biskuit almond dan secangkir kecil susu.",
      price: "Rp 32rb",
      priceMockup: true,
      illustration: "cappuccino",
      illustrationMockup: true,
      alt: "Ilustrasi cappuccino: cangkir putih di atas tatakan, biskuit almond, dan cangkir kecil berisi susu",
    },
    {
      // (photos) the drink is real, the name is a placeholder.
      id: "es-kopi-krim",
      name: "Es kopi krim",
      nameMockup: true,
      desc: "Lapisan krim tebal di atas kopi hitam dingin.",
      illustration: "esKopiKrim",
      illustrationMockup: true,
      alt: "Ilustrasi es kopi krim: gelas berisi kopi gelap dengan lapisan krim tebal di atasnya",
    },
    {
      // (photos, reviews 2 "desserts") the cake is real, the name is a placeholder.
      id: "cake-mousse-cokelat",
      name: "Cake mousse cokelat",
      nameMockup: true,
      desc: "Puncak mousse bertabur kakao, dengan kepingan cokelat di atasnya.",
      price: "Rp 38rb",
      priceMockup: true,
      illustration: "mousseCake",
      illustrationMockup: true,
      alt: "Ilustrasi cake mousse cokelat di atas piring baja: puncak bertabur kakao dan tiga keping cokelat",
    },
  ] as Product[],
  moreTitle: "Menu lainnya",
  moreNote: "Semua contoh, menunggu menu asli.",
  // Every column is [MOCKUP]: names and prices are placeholders until the owner shares the menu.
  columns: [
    {
      title: "Kopi",
      mockup: true,
      items: [
        { name: "Es kopi susu", price: "Rp 28rb" },
        { name: "Iced long black" },
        { name: "Cold brew" },
        { name: "V60" },
      ],
    },
    {
      title: "Non-kopi sehat",
      mockup: true,
      items: [
        { name: "Jus hijau (bayam, apel, nanas)", price: "Rp 35rb" },
        { name: "Smoothie pisang-oat" },
        { name: "Matcha latte" },
        { name: "Iced lemon tea" },
      ],
    },
    {
      title: "Brunch",
      priceRange: "Rp 55–75rb",
      mockup: true,
      items: [
        { name: "Avocado toast dengan telur poached" },
        { name: "Rice bowl ayam sambal matah" },
        { name: "Nasi goreng udang" },
        { name: "Big breakfast plate" },
      ],
    },
    {
      title: "Pastry",
      mockup: true,
      items: [
        { name: "Butter croissant", price: "Rp 25rb" },
        { name: "Almond croissant" },
        { name: "Pain au chocolat" },
        { name: "Banana bread" },
      ],
    },
  ] as { title: string; priceRange?: string; mockup: true; items: { name: string; price?: string }[] }[],
};

export const spaces = {
  title: "Ruang kami",
  lead: { text: "Naik ke teras atas, duduk di bawah pohon, pesan Sabor A Mi.", mockup: true } as Text,
  intro: "Tempatnya mungil, tapi ada lantai dua dan teras.", // (reviews 1, 2, 3)
  list: [
    { name: "Ruang dalam", text: "Sejuk dan nyaman, dengan meja dan kursi kayu." }, // (reviews 1, photos)
    { name: "Sudut sofa", text: "Sudut favorit untuk duduk santai." }, // (reviews 5)
    { name: "Teras atas", text: "Terbuka dan hijau, di bawah pohon." }, // (reviews 1, photos)
    { name: "Lantai dua dan musala", text: "Ruang tambahan untuk berlama-lama, plus musala." }, // (reviews 2)
  ],
  // [MOCKUP] labelled placeholders until the owner sends photos.
  placeholders: [
    { id: "teras", label: "Teras atas", alt: "Tempat foto dari pemilik: teras atas", mockup: true },
    { id: "dalam", label: "Ruang dalam", alt: "Tempat foto dari pemilik: ruang dalam", mockup: true },
    { id: "sofa", label: "Sudut sofa", alt: "Tempat foto dari pemilik: sudut sofa", mockup: true },
  ],
  placeholderPrefix: "Foto dari pemilik",
};

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const reviews: {
  title: string;
  rating: string;
  note: string;
  themes: { title: string; text: string; mockup?: boolean }[];
} = {
  title: "Kata mereka",
  rating: shop.rating.label,
  note: "Rangkuman dari ulasan Google, bukan kutipan.",
  themes: [
    {
      title: "Konsepnya rapi",
      text: "Ruang dalam yang sejuk, area luar yang mengundang, dan lantai dua yang cantik.", // (reviews 1)
    },
    {
      title: "Stafnya hangat",
      text: "Ramah dan menyambut sejak kamu masuk.", // (reviews 1); "kamu" register is [MOCKUP]
      mockup: true,
    },
    {
      title: "Kopinya beda",
      text: "Kopinya enak, dan cappuccino-nya terasa fruity dan segar, bukan pahit yang biasa.", // (reviews 2, 3, 4, 5)
    },
    {
      title: "Nyaman berlama-lama",
      text: "Ada ruang tambahan di lantai dua, musala, dan sudut sofa yang disukai.", // (reviews 2, 5)
    },
  ],
};

export const visit = {
  title: "Kunjungi kami",
  hoursCaption: "Jam buka",
  todayRowLabel: "hari ini",
  mapTitle: "Peta lokasi Kanal Feds",
};

export const contact = {
  title: "Hubungi kami",
  lead: { text: "Mau pesan dulu? Kirim WhatsApp, ambil sambil berangkat kerja.", mockup: true } as Text,
  rows: [
    { label: "WhatsApp", detail: shop.phoneDisplay, href: shop.whatsapp.url, external: true, mockup: true },
    { label: "Telepon", detail: shop.phoneDisplay, href: `tel:${shop.phoneTel}`, external: false },
    { label: "Petunjuk Arah", detail: "Google Maps", href: shop.mapsUrl, external: true },
  ] as { label: string; detail: string; href: string; external: boolean; mockup?: boolean }[],
  footerNote: "Draf tampilan untuk Kanal Feds",
};
