// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Language: Bahasa Indonesia throughout (lang="id"). Dish names stay as the shop writes them.

export type Item = { text: string; mockup?: boolean };
/** short "25" (rendered with a small "rb"), label "Rp 25.000" for screen readers. */
export type Price = { short: string; label: string; mockup: true };
export type Dish = {
  name: string;
  nameMockup?: boolean;
  desc?: Item;
  price?: Price;
  visual?: "photo" | "glass" | "box" | "none";
  /** which drawing: glass liquid or noodle sauce */
  variant?: "luna" | "taro" | "original" | "kari" | "rendang";
  alt?: string;
};

const rb = (n: number): Price => ({
  short: String(n),
  label: `Rp ${n}.000`,
  mockup: true,
});

export const shop = {
  name: "Nari Coffee",
  area: "Duren Sawit · Jakarta Timur",
  areaShort: "Duren Sawit",
  type: "Kafe",
  address: "Jl. Swadaya Raya No.1, Duren Sawit, Jakarta Timur 13440", // listing ("No.1 2": confirm)
  addressShort: "Jl. Swadaya Raya No.1, Duren Sawit",
  phone: "0895-1021-7613", // listing
  tel: "tel:+6289510217613",
  whatsapp: { href: "https://wa.me/6289510217613", mockup: true }, // [MOCKUP] number takes WhatsApp
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Nari+Coffee+Duren+Sawit&destination_place_id=ChIJj8gPA7aNaS4RpItnrg2m_rc",
  mapsUrl: "https://maps.google.com/?cid=13258216930716126116",
  mapEmbed:
    "https://maps.google.com/maps?q=Nari%20Coffee%20Duren%20Sawit%2C%20Jl.%20Swadaya%20Raya%20No.1&z=17&output=embed",
  hours: [{ days: "Senin–Minggu", time: "10.00–21.30" }], // listing hours (door sign differs: confirm)
  todayLine: "Buka hari ini 10.00–21.30",
  rating: "4,9 di Google Maps dari 315 ulasan", // listing
};

export const meta = {
  title: "Nari Coffee · Duren Sawit, Jakarta Timur",
  description:
    "Kafe dua lantai di Jl. Swadaya Raya, Duren Sawit. Buka setiap hari 10.00–21.30.",
};

export const banner =
  "Ini draf tampilan untuk Nari Coffee. Detail bergaris titik-titik masih contoh sampai dikonfirmasi.";

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: { text: "WhatsApp", mockup: true } as Item,
  call: "Telepon",
  callFull: `Telepon ${shop.phone}`,
  openMaps: "Buka di Google Maps",
};

export const hero = {
  label: shop.area,
  name: shop.name,
  tagline: { text: "Kopi enak, makan kenyang, dompet tetap aman.", mockup: true } as Item,
  awning: [
    { label: "Jam", value: shop.todayLine },
    { label: "Alamat", value: shop.addressShort },
    { label: "Telepon", value: shop.phone, href: shop.tel },
  ],
  photo: {
    src: "/img/shopfront.jpg",
    srcSmall: "/img/shopfront-800.jpg",
    width: 1600,
    height: 980,
    alt: "Bagian depan Nari Coffee: papan nama biru dengan logo N bundar di atas kanopi hitam, dan tangga besi ke lantai atas",
  },
};

export const menu = {
  heading: "Menu andalan",
  intro: { text: "Datang buat kopinya, betah karena makanannya.", mockup: true } as Item,
  photoDrink: {
    name: "Strawberry Latte",
    nameMockup: true,
    visual: "photo",
    alt: "Es minuman beri dengan krim dalam gelas berbentuk kaleng, di meja bar Nari Coffee",
  } as Dish,
  photo: { src: "/img/berry.jpg", srcSmall: "/img/berry-800.jpg", width: 1600, height: 2000 },
  photoCredit: "Foto: Nari Coffee",
  drinksLabel: "Minuman",
  featuredDrinks: [
    {
      name: "Luna Coffee", // reviews 1
      desc: { text: "Es kopi susu andalan Nari, disajikan di gelas kaleng.", mockup: true },
      price: rb(25),
      visual: "glass",
      variant: "luna",
      alt: "Ilustrasi es kopi susu dalam gelas kaleng",
    },
    {
      name: "Taro Latte",
      nameMockup: true,
      desc: { text: "Es taro ungu, lembut dan creamy.", mockup: true },
      visual: "glass",
      variant: "taro",
      alt: "Ilustrasi es taro ungu dalam gelas kaleng",
    },
  ] as Dish[],
  otherDrinksLabel: "Juga ada",
  otherDrinks: [
    { text: "Kopi Susu Aren", mockup: true },
    { text: "Americano", mockup: true },
    { text: "Cafe Latte", mockup: true },
    { text: "Matcha Latte", mockup: true },
    { text: "Lychee Tea", mockup: true },
  ] as Item[],
  foodLabel: "Makanan",
  food: [
    {
      name: "French Fries",
      nameMockup: true,
      desc: { text: "Kentang goreng di keranjang, dengan mayones dan saus tomat." }, // photos
      price: rb(18),
      visual: "none",
    },
    {
      name: "Rice Bowl Ayam Teriyaki",
      nameMockup: true,
      desc: { text: "Nasi dengan daging bersaus, taburan wijen dan selada." }, // photos
      price: rb(28),
      visual: "none",
    },
    {
      name: "Mie bakso & pangsit goreng",
      nameMockup: true,
      desc: { text: "Mie dengan bakso dan potongan pangsit goreng yang renyah." }, // photos
      visual: "none",
    },
  ] as Dish[],
};

export const mieBlenger = {
  kicker: "Menu baru", // poster in the window
  heading: "Mie Blenger",
  line: { text: "Tiga rasa, tinggal pilih.", mockup: true } as Item,
  dishes: [
    { name: "Mie Blenger Original", price: rb(14), visual: "box", variant: "original" },
    { name: "Mie Blenger Kari", price: rb(15), visual: "box", variant: "kari" },
    { name: "Mie Blenger Rendang", price: rb(15), visual: "box", variant: "rendang" },
  ] as Dish[],
};

export const place = {
  heading: "Tempatnya",
  lead: "Nyaman buat nongkrong bareng teman, pas juga buat kencan.", // reviews 2, 4
  photo: {
    src: "/img/forecourt.jpg",
    srcSmall: "/img/forecourt-800.jpg",
    width: 900,
    height: 675,
    alt: "Meja bundar dan bangku besi berpola di teras depan Nari Coffee, di atas lantai teraso",
  },
  floors: [
    {
      label: "Lantai atas",
      text: { text: "Tangga besi hitam di samping toko naik ke lantai atas yang beratap." } as Item,
      extra: { text: "Tempat ekstra buat rombongan.", mockup: true } as Item,
    },
    {
      label: "Lantai bawah",
      text: {
        text: "Kursi kayu mengilap, meja putih bermotif marmer, dan bar di bawah lampu cincin. Bebas asap rokok.",
      } as Item,
    },
    {
      label: "Teras depan",
      text: { text: "Meja bundar dan bangku besi berpola, di atas lantai teraso." } as Item,
    },
  ],
};

// Paraphrased from real reviews only. Never invented, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  rating: shop.rating,
  note: "Diringkas dari ulasan Google.",
  items: [
    { text: "Luna Coffee-nya enak, tempatnya nyaman." }, // reviews 1
    { text: "Asyik buat nongkrong bareng teman atau kencan." }, // reviews 2, 4
    { text: "Makanan dan minumannya sama-sama enak." }, // reviews 2, 5
    { text: "Harganya bersahabat, pelayanannya ramah." }, // reviews 3, 4, 5
  ] as Item[],
};

export const visit = {
  heading: "Kunjungi kami",
  addressLabel: "Alamat",
  hoursLabel: "Jam buka",
  houseRule: "Mohon tidak membawa makanan dan minuman dari luar.", // door sign
  mapTitle: "Peta lokasi Nari Coffee",
};

export const contact = {
  heading: "Hubungi kami",
  line: { text: "Ada pertanyaan? Kabari kami lewat WhatsApp atau telepon.", mockup: true } as Item,
  footerArea: "Duren Sawit, Jakarta Timur",
  footerDraft: "Draf tampilan",
  logoAlt: "Logo Nari Coffee",
};
