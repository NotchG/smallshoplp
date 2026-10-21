// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// priceMockup: true = the product is real (listing, reviews, photos) but its price is an example.

export type Item = { text: string; mockup?: boolean };
export type Product = {
  name: string;
  price?: string;
  unit?: string;
  mockup?: boolean;
  priceMockup?: boolean;
  alt?: string;
};

export const meta = {
  title: "Soes Roti Kue Merdeka · Rawamangun",
  description:
    "Soes isi vla rum, abon, telur asin dan camilan tradisional di Jl. Balai Pustaka No. 12, Rawamangun. Buka setiap hari 07.00–20.00.",
  banner: "Ini adalah draf tampilan, belum resmi. Beberapa detail masih contoh.",
  illustrationNote: "Gambar produk berupa ilustrasi.",
  footerDraft: "Ini adalah draf tampilan, belum resmi.",
  skipLink: "Langsung ke isi halaman",
};

// Facts from the Google listing (raw.json).
export const shop = {
  name: "Soes Roti Kue Merdeka",
  type: "Toko roti dan kue",
  address: "Jl. Balai Pustaka No. 12, Rawamangun, Pulo Gadung, Jakarta Timur 13220",
  addressShort: "Jl. Balai Pustaka No. 12, Rawamangun",
  phoneDisplay: "(021) 4757603",
  phoneHref: "tel:+62214757603",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Soes%20Roti%20Kue%20Merdeka%2C%20Jl.%20Balai%20Pustaka%20No.12%2C%20Rawamangun&destination_place_id=ChIJN7A6K5T0aS4R3HmtKwEWI8c",
  mapsUrl: "https://maps.google.com/?cid=14349337032016099804",
  embedUrl:
    "https://www.google.com/maps?q=Soes%20Roti%20Kue%20Merdeka%2C%20Jl.%20Balai%20Pustaka%20No.12%2C%20Rawamangun%2C%20Jakarta%20Timur&output=embed",
  // [MOCKUP] No WhatsApp number yet (the listed number is a landline). The button only renders once this is set.
  whatsapp: null as string | null,
  rating: "4,5",
  reviewCount: 308,
  hours: {
    open: "07:00",
    close: "20:00",
    display: "07.00–20.00",
    openDisplay: "07.00",
    days: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    everyDay: "Senin–Minggu",
  },
  // From the customer photos: motorbikes park right in front.
  parking: { text: "Parkir motor tepat di depan toko." } as Item,
};

export const actions = {
  directions: "Petunjuk Arah",
  call: "Telepon",
  callFull: `Telepon ${shop.phoneDisplay}`,
  callToOrder: "Telepon untuk pesan",
  whatsapp: "WhatsApp",
  reviews: "Lihat ulasan di Google",
};

export const hero = {
  lockupScript: "Merdeka",
  lockupCaps: "Soes · Roti · Kue",
  line: { text: "Soes isi vla rum dan camilan tradisional di Rawamangun.", mockup: true } as Item,
};

// The hanging door sign. Static text is in the server HTML; live status replaces it after load.
export const sign = {
  staticWord: "Buka",
  staticDetail: `Setiap hari ${shop.hours.display}`,
  openWord: "Buka",
  openDetail: `Hari ini ${shop.hours.display}`,
  closedWord: "Tutup",
  closedDetail: `Buka lagi pukul ${shop.hours.openDisplay}`,
};

export const soes = {
  heading: "Soes kami",
  lead: { text: "Soes isi vla rum, langsung dari etalase kami.", mockup: true } as Item,
  // Reviews 1 and 2: the rum custard filling is why people come.
  body: { text: "Pelanggan datang ke sini untuk soes isi vla rum kami." } as Item,
  star: {
    name: "Soes Vla Rum",
    price: "Rp 7.000",
    unit: "biji",
    priceMockup: true,
    alt: "Ilustrasi soes isi vla rum: kulit soes keemasan dibelah, tutupnya terangkat, vla rum kuning di dalamnya, dalam cup kertas putih.",
  } as Product,
  sizes: { text: "Dijual per biji, dan dalam kotak isi 10 atau 20.", mockup: true } as Item,
  box10: { name: "Kotak isi 10", price: "Rp 65.000", mockup: true } as Product,
  othersHeading: "Isian lain",
  others: [
    { name: "Vla Vanila", mockup: true, alt: "Ilustrasi soes isi vla vanila." },
    { name: "Vla Cokelat", mockup: true, alt: "Ilustrasi soes isi vla cokelat." },
    { name: "Vla Durian", mockup: true, alt: "Ilustrasi soes isi vla durian." },
  ] as Product[],
};

export const abon = {
  heading: "Abon & telur asin",
  // Photos: big glass jars, a scale on the counter, labels per 100 gram.
  lead: { text: "Abon ditimbang langsung dari toples kaca di etalase." } as Item,
  // Review 3.
  body: { text: "Ada abon ayam dan abon sapi, keduanya disukai pelanggan, juga telur asin." } as Item,
  jars: [
    // Price from a customer photo (date unknown). The owner checklist asks to confirm it.
    {
      name: "Abon Ayam Pedas",
      unit: "100 gram",
      price: "Rp 21.000",
      alt: "Ilustrasi toples kaca bertutup logam berisi abon ayam pedas.",
    },
    {
      name: "Abon Ayam Manis",
      unit: "per 100 gram",
      alt: "Ilustrasi toples kaca bertutup logam berisi abon ayam manis.",
    },
    { name: "Abon Sapi", alt: "Ilustrasi toples kaca bertutup logam berisi abon sapi." },
  ] as Product[],
  telur: {
    name: "Telur Asin",
    price: "Rp 5.000",
    priceMockup: true,
    alt: "Ilustrasi telur asin: satu butir utuh berkulit hijau pucat dan satu belahan dengan kuning telur jingga.",
  } as Product,
};

export const camilan = {
  heading: "Camilan & oleh-oleh",
  lead: { text: "Kacang, cokelat dan camilan khas dari rak kami, untuk dibawa pulang.", mockup: true } as Item,
  // Names exactly as on the shop's shelf labels (photos). Drawings are illustrations, not photos.
  tubs: [
    {
      name: "Kacang Mete",
      price: "Rp 45.000",
      unit: "toples",
      priceMockup: true,
      alt: "Ilustrasi toples bening berisi kacang mete.",
    },
    { name: "Cokelat Warna Warni", alt: "Ilustrasi toples bening berisi cokelat kancing warna-warni." },
    { name: "Kacang Bawang", alt: "Ilustrasi toples bening berisi kacang bawang." },
    { name: "Cokelat Bulat", alt: "Ilustrasi toples bening berisi cokelat bulat." },
  ] as Product[],
  packs: [
    { name: "Brem Solo", alt: "Ilustrasi kemasan plastik bening berisi brem." },
    { name: "Roti Kecik Ganep", alt: "Ilustrasi kemasan plastik bening berisi roti kecik bulat kecil." },
    { name: "Teng-teng Beras", alt: "Ilustrasi kemasan plastik bening berisi teng-teng beras." },
  ] as Product[],
  // Review 4: traditional cakes and bread. The items themselves are examples.
  kueRotiHeading: "Kue & roti",
  kueLabel: "Kue",
  kue: [
    { name: "Bolu", mockup: true },
    { name: "Lapis Legit", mockup: true },
    { name: "Kue kering dalam toples: Nastar, Kastengel, Putri Salju", mockup: true },
  ] as Product[],
  rotiLabel: "Roti",
  roti: [
    { name: "Roti Manis", mockup: true },
    { name: "Roti Tawar", mockup: true },
    { name: "Roti Abon", mockup: true },
  ] as Product[],
  lebaran: {
    text: "Menjelang Lebaran dan akhir tahun, kue kering dan kacang tersedia dalam toples.",
    mockup: true,
  } as Item,
};

// Whole section is [MOCKUP]: box orders by phone are not confirmed yet.
export const kotakan = {
  mockup: true,
  heading: "Pesan kotakan",
  lead: { text: "Sekotak soes untuk arisan, hantaran atau kunjungan keluarga.", mockup: true } as Item,
  body: { text: "Soes dalam kotak Merdeka isi 10 atau 20. Telepon kami untuk memesan.", mockup: true } as Item,
  box10: { name: "Kotak isi 10", price: "Rp 65.000", mockup: true } as Product,
  alt: "Ilustrasi tumpukan tiga kotak soes Merdeka berwarna peach dengan bintik putih.",
};

// Paraphrased from real Google reviews only. Never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  rating: `${shop.rating} dari ${shop.reviewCount} ulasan di Google`,
  items: [
    { text: "Soes yang legendaris, dengan isian vla rum yang enak." }, // review 1
    { text: "Penggemar soes Merdeka di Jakarta tidak perlu lagi ke Bandung; cukup datang ke sini." }, // review 2
    { text: "Selain soes, abon ayam, abon sapi dan telur asinnya juga enak." }, // review 3
  ] as Item[],
};

export const visit = {
  heading: "Kunjungi kami",
  hoursCaption: "Jam buka Soes Roti Kue Merdeka",
  todayTag: "Hari ini",
  mapTitle: "Peta lokasi Soes Roti Kue Merdeka",
  mapFallback: "Peta lokasi di Google Maps",
};

export const contact = {
  heading: "Hubungi kami",
  lead: { text: "Mampir ke Balai Pustaka, bawa pulang sekotak untuk keluarga.", mockup: true } as Item,
};
