// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: (listing) / (hours) = raw.json, (photos) = customer photos read for
// reference only, (review N) = Google review N, paraphrased.

export type Item = { text: string; mockup?: boolean };

export type IllustrationId =
  | "smokeBeef"
  | "bananaCrumble"
  | "rotiCokelat"
  | "rotiKeju"
  | "tart"
  | "blackforest"
  | "brownies"
  | "softSourdough"
  | "saltBread"
  | "strudel"
  | "pizzaCinta";

export type Product = {
  id: string;
  name: string;
  illustration: IllustrationId;
  price?: string; // current price, "Rp 9.000"
  pricePrefix?: string; // small word before the price, "mulai"
  priceUnit?: string; // small unit after the price, "/ kotak"
  was?: string; // old (struck) price, "Rp 15.000"
  priceMockup?: boolean; // price came from a [MOCKUP] line: data-mockup on the price only
  nameMockup?: boolean; // name is a guess until the owner confirms the tag name
  note?: Item; // short line under the item
  mockup?: boolean; // whole product is [MOCKUP]
};

const phoneDisplay = "0813-1130-8866"; // (listing)

export const shop = {
  name: "Elud Cake & Bakery", // (listing, photos: logo "ELUD Cake & Bakery")
  short: "Elud",
  rest: "Cake & Bakery",
  location: "Pondok Kelapa, Jakarta Timur", // (listing)
  address:
    "Jl. Pondok Kelapa VI No. 10, RT 10/RW 04, Pondok Kelapa, Duren Sawit, Jakarta Timur 13450", // (listing)
  phone: phoneDisplay,
  phoneHref: "tel:+6281311308866",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Elud+Cake+and+Bakery+Pondok+Kelapa&destination_place_id=ChIJFW2qORqNaS4RSoVlo_tI76I",
  mapsUrl:
    "https://maps.google.com/?cid=11740682999193503050", // (listing googleMapsUri)
  mapEmbedUrl:
    "https://www.google.com/maps?q=Elud+Cake+and+Bakery,+Jl.+Pondok+Kelapa+VI+No.10,+Duren+Sawit,+Jakarta+Timur&output=embed",
  hours: "Setiap hari 06.15–22.00", // (hours: every day 6:15 AM – 10:00 PM)
  whatsapp: {
    text: "WhatsApp",
    href: "https://wa.me/6281311308866",
    mockup: true, // [MOCKUP] that the number takes WhatsApp orders
  },
  instagram: {
    text: "Instagram: @elud… (akan dilengkapi)",
    mockup: true, // handle is cut off on the storefront photo; not guessed
  } as Item,
};

export const meta = {
  title: "Elud Cake & Bakery Pondok Kelapa: toko roti & kue ulang tahun",
  description:
    "Toko roti dan pusat kue ulang tahun di Jl. Pondok Kelapa VI No. 10, Duren Sawit, Jakarta Timur. Buka setiap hari 06.15–22.00.",
};

export const banner =
  "Draf mockup untuk Elud Cake & Bakery. Beberapa detail masih contoh sampai Anda konfirmasi.";

export const priceNote = "Harga dapat berubah.";

// Words of the shop's own signboard (photos).
export const strip = {
  text: "Toko Aneka Kue & Roti Diskon",
};

export const actions = {
  directions: "Petunjuk Arah",
  call: "Telepon",
};

export const hero = {
  lead: { text: "Roti segar dan kue ulang tahun, setiap hari." } as Item, // (brief)
  hours: { text: "Buka setiap hari 06.15–22.00" } as Item, // (hours)
  sub: {
    text: "Sudah buka sebelum jam sekolah, masih buka setelah makan malam.",
    mockup: true,
  } as Item,
  // The tag on the hero tray (photos: "ROTI Smoke Beef", 15.000 struck, Rp 9.000).
  product: {
    id: "hero-smoke-beef",
    name: "Roti Smoke Beef",
    illustration: "smokeBeef",
    price: "Rp 9.000",
    was: "Rp 15.000",
  } as Product,
};

export const roti = {
  id: "roti",
  heading: "Roti hari ini",
  lead: {
    text: "Roti manis dan roti gurih, dibungkus satu per satu. Selalu ada yang lagi diskon di nampan.",
    mockup: true,
  } as Item,
  products: [
    {
      id: "smoke-beef",
      name: "Roti Smoke Beef",
      illustration: "smokeBeef",
      price: "Rp 9.000",
      was: "Rp 15.000",
    }, // (photos)
    {
      id: "banana-crumble",
      name: "Roti Banana Crumble",
      illustration: "bananaCrumble",
      price: "Rp 9.000",
      was: "Rp 15.000",
    }, // (photos)
    { id: "roti-cokelat", name: "Roti Cokelat", illustration: "rotiCokelat" }, // (photos)
    {
      id: "roti-keju",
      name: "Roti keju",
      illustration: "rotiKeju",
      nameMockup: true, // cheese bread from review 2; tag name unconfirmed
      note: { text: "Dipuji pelanggan di ulasan Google" }, // (review 2)
    },
  ] as Product[],
  shelvesLabel: "Rak lain di toko:",
  // Section signs hanging in the shop (photos).
  shelves: [
    { name: "Croissant" },
    { name: "Roll" },
    { name: "Roti Manis", price: { text: "mulai Rp 8.000", mockup: true } as Item },
    { name: "Blackforest" },
  ] as { name: string; price?: Item }[],
  staples: {
    text: "Juga ada roti sobek, roti abon, bolu gulung pandan & keju, dan kue sus.",
    mockup: true,
  } as Item,
};

export const kue = {
  id: "kue",
  heading: "Kue ulang tahun & tart",
  headingLines: ["Kue ulang", "tahun & tart"], // set on two lines so the plaque fits its text
  lead: { text: "Pusat kue ulang tahun & tart: satu dinding kulkas penuh kue." } as Item, // (photos)
  sameDay: { text: "Kue ulang tahun siap dibawa pulang hari itu juga.", mockup: true } as Item,
  cta: { text: "Pesan kue ulang tahun", mockup: true } as Item,
  ctaNote: {
    text: `Mau tulisan nama di kue? Telepon kami di ${phoneDisplay}.`,
    mockup: true,
  } as Item,
  products: [
    {
      id: "tart",
      name: "Tart ulang tahun",
      illustration: "tart",
      pricePrefix: "mulai",
      price: "Rp 150.000",
      priceMockup: true,
      note: { text: "Krim, pinggiran lelehan cokelat, kipas cokelat dan ceri." }, // (photos)
    },
    { id: "blackforest", name: "Blackforest", illustration: "blackforest" }, // (photos: sign)
    {
      id: "brownies",
      name: "Brownies Bakar Spesial",
      illustration: "brownies",
      price: "Rp 55.000",
      priceUnit: "/ kotak",
      priceMockup: true,
      note: { text: "Dalam kotak kuning." }, // (photos)
    },
  ] as Product[],
};

export const baru = {
  id: "baru",
  heading: "Produk baru",
  lead: { text: "Kini hadir di etalase." } as Item, // (photos: window banner "Kini Hadir Produk Baru")
  products: [
    {
      id: "soft-sourdough",
      name: "Soft Sourdough",
      illustration: "softSourdough",
      price: "Rp 15.000",
      was: "Rp 20.000",
    }, // (photos)
    {
      id: "salt-bread",
      name: "Salt Bread Original",
      illustration: "saltBread",
      price: "Rp 12.000",
      was: "Rp 15.000",
    }, // (photos)
    { id: "strudel", name: "Strudel", illustration: "strudel" }, // (photos)
    {
      id: "pizza-cinta",
      name: "Pizza Cinta",
      illustration: "pizzaCinta",
      note: { text: "Berbentuk hati." }, // (photos)
      mockup: true, // [MOCKUP] that Pizza Cinta is Elud's own product
    },
  ] as Product[],
};

// Paraphrased from real reviews only. Never invented, never attributed to a name.
export const praise = {
  id: "ulasan",
  heading: "Kata mereka",
  rating: "4,7", // (listing)
  count: "dari 234 ulasan Google", // (listing)
  lines: [
    { text: "Suka roti kejunya, dan harganya terjangkau." }, // (review 2)
    { text: "Ulasan singkat lainnya: bagus, oke." }, // (reviews 1, 4, 5)
  ] as Item[],
  source: "Ulasan diringkas dari Google.",
};

export const visit = {
  id: "kunjungi",
  heading: "Kunjungi kami",
  labels: { address: "Alamat", hours: "Jam buka", phone: "Telepon" },
  mapTitle: "Peta lokasi Elud Cake & Bakery",
  mapLoading: "Memuat peta…",
};

export const skipLink = "Langsung ke isi halaman";
