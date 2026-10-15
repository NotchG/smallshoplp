// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: listing / hours / reviews N / photos (customer photos, reference only).

export type Item = { text: string; mockup?: boolean };

export const meta = {
  title: "Dalle Coffee and Eatery · Kafe di Jakarta Garden City",
  description:
    "Kafe tenang di Ruko The Savoy, Jakarta Garden City. Buka setiap hari 10.00–21.00, dengan ruang meeting privat.",
  lang: "id",
};

export const banner = {
  text: "Draf: ini contoh situs untuk Dalle Coffee and Eatery dan belum resmi.",
};

export const shop = {
  name: "Dalle Coffee and Eatery", // listing
  type: "Kafe", // listing type: cafe
  address:
    "Ruko The Savoy No. 12 Blok C1, Jakarta Garden City, Cakung Timur, Cakung, Jakarta Timur 13910", // listing
  addressShort: "Ruko The Savoy, Jakarta Garden City", // listing
  phoneDisplay: "0851-8337-5752", // listing
  tel: "tel:+6285183375752",
  // [MOCKUP] that the number takes WhatsApp and meeting-room bookings.
  whatsapp: {
    href: "https://wa.me/6285183375752?text=Halo%20Dalle%2C%20saya%20mau%20tanya%20ruang%20meeting.",
    mockup: true,
  },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Dalle%20Coffee%20and%20Eatery&destination_place_id=ChIJtefUZ_gDai4RVNiPQzcT87k",
  placeUrl: "https://maps.google.com/?cid=13399074444434987092",
  // Keyless embed. Never uses the API key.
  mapEmbed:
    "https://www.google.com/maps?q=Dalle%20Coffee%20and%20Eatery%2C%20Ruko%20The%20Savoy%20No.12%20Blok%20C1%2C%20Jakarta%20Garden%20City&output=embed",
  // hours: every day 10:00–21:00
  hours: {
    open: "10:00",
    close: "21:00",
    days: "Setiap hari",
    label: "10.00–21.00",
    timeZone: "Asia/Jakarta",
  },
  rating: { value: "4,8", count: 59 }, // listing
};

export const hero = {
  lockup: { main: "Dalle", sub: "Coffee and Eatery" }, // listing name, stacked like the logo
  tagline: { text: "Tempat tenang buat kerja, rapat, atau sekadar ngopi." } as Item, // brief, tone of voice
  status: {
    prefix: "Buka hari ini",
    open: "sedang buka",
    before: "buka pukul 10.00",
    closed: "sudah tutup",
  },
  buttons: { directions: "Petunjuk Arah", call: "Telepon" },
  // owner-1.jpg, uploaded by the business (photos.json)
  image: {
    src: "/images/dalle-bar.jpg",
    width: 1200,
    height: 1599,
    alt: "Bar Dalle dengan papan nama DALLE CAFE yang menyala dan logo lengkung berdaun di dinding kayu.",
  },
};

export type Drink = {
  id: "iced-tea" | "iced-coffee" | "latte";
  name: Item;
  price?: Item;
  desc: Item;
  note?: Item;
  // The drawings stand in for photos until the owner sends real ones.
  illustrationMockup: true;
};

export const menu = {
  heading: "Menu Dalle",
  intro: {
    text: "Es teh dan es kopi racikan Dalle, plus makanan untuk menemani kerja.",
    mockup: true,
  } as Item,
  priceNote: { text: "Harga di halaman ini contoh dan menunggu konfirmasi." } as Item,
  drinks: [
    {
      id: "iced-tea",
      name: { text: "Dalle Iced Tea" }, // review 3
      price: { text: "Rp 25rb", mockup: true },
      desc: { text: "Nata de coco, biji chia, dan sedikit pandan." }, // review 3
      note: { text: "Disajikan dengan sendok.", mockup: true }, // pending owner's answer on straws
      illustrationMockup: true,
    },
    {
      id: "iced-coffee",
      name: { text: "Dalle Iced Coffee" }, // review 3
      price: { text: "Rp 28rb", mockup: true },
      desc: { text: "Es kopi racikan Dalle.", mockup: true },
      illustrationMockup: true,
    },
    {
      id: "latte",
      name: { text: "Es latte cookie crumble", mockup: true }, // photos; real name unknown
      desc: { text: "Taburan cookie crumble di atasnya, dengan kukis di sampingnya." }, // photos
      illustrationMockup: true,
    },
  ] as Drink[],
  plate: {
    name: { text: "Pizza Coklat Keju", mockup: true } as Item, // photos; real name unknown
    desc: { text: "Roti pipih manis dengan meses coklat dan parutan keju." } as Item, // photos
    illustrationMockup: true,
  },
  kitchen: {
    heading: "Dari dapur",
    items: [
      { name: { text: "Pizza" }, price: { text: "mulai Rp 45rb", mockup: true } }, // review 4
      {
        name: { text: "Nasi goreng, Chicken katsu rice, Aglio olio", mockup: true },
        price: { text: "mulai Rp 40rb", mockup: true },
      },
    ] as { name: Item; price: Item }[],
  },
};

export const work = {
  heading: "Kerja dengan tenang",
  lead: {
    text: "Suasananya tenang dan ruangannya bersih, dari jam 10 pagi sampai 9 malam.",
  } as Item, // reviews 1, 5, hours
  cells: [
    { title: "Tenang", text: "Pas untuk kerja sambil nongkrong." }, // review 5
    { title: "Nyaman & bersih", text: "Ruangannya rapi dan terawat." }, // review 1
    { title: "10.00–21.00", text: "Setiap hari, termasuk akhir pekan." }, // hours
    {
      title: "Makan siang",
      text: "Nasi dan pasta untuk makan siang yang proper.",
      mockup: true,
    },
  ] as { title: string; text: string; mockup?: boolean }[],
};

export const meeting = {
  heading: "Ruang meeting",
  lead: { text: "Ada ruang privat untuk rapat tim atau ketemu klien." } as Item, // review 4
  doorTitle: "Ruang privat", // review 4
  facts: [
    { term: "Kapasitas", text: "Hingga 8 orang", mockup: true },
    { term: "Paket", text: "Ruang + 1 minuman per orang", mockup: true },
  ] as { term: string; text: string; mockup?: boolean }[],
  button: { text: "Pesan lewat WhatsApp", mockup: true } as Item,
  callPrefix: "atau telepon",
};

// Paraphrased from real reviews only. Never invented, never quoted, never attributed to a name.
export const reviews = {
  heading: "Kata mereka",
  ratingLine: "4,8 di Google dari 59 ulasan", // listing
  items: [
    "Ruangannya nyaman dan terjaga kebersihannya.", // review 1
    "Tempatnya tenang dan enak dipakai kerja.", // review 5
    "Kopi dan makanannya enak, pilihan menunya menarik.", // reviews 4, 5
    "Pelayanannya baik, dan ada ruang privat untuk meeting.", // review 4
  ],
  note: "Diringkas dari ulasan Google, bukan kutipan langsung.",
};

export const visit = {
  heading: "Kunjungi kami",
  hoursLine: "Setiap hari 10.00–21.00", // hours
  button: "Petunjuk Arah",
  mapTitle: "Peta lokasi Dalle Coffee and Eatery",
  mapLink: "Buka di Google Maps",
  mapPlace: "Ruko The Savoy No. 12 Blok C1", // listing
  mapArea: "Jakarta Garden City, Cakung Timur", // listing
  mapLoading: "Peta dari Google Maps sedang dimuat.",
};

export const contact = {
  heading: "Hubungi kami",
  waNote: { text: "Nomor ini juga bisa dihubungi lewat WhatsApp.", mockup: true } as Item,
  buttons: {
    call: "Telepon",
    whatsapp: { text: "WhatsApp", mockup: true } as Item,
    directions: "Petunjuk Arah",
  },
};

export const footer = {
  photoCredit: "Foto: Dalle Coffee and Eatery (Google Maps)",
  draft: "Situs contoh, belum resmi.",
};
